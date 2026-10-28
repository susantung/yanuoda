/* B07：复用既有十一列模板；本次新增待认领对象拒绝。仅本地原型。 */
(() => {
  const key='supplement-20261011-import-v1';
  const headers=['线下充值流水号','合作伙伴名称','账户号','处理操作','账户类型','金额','支付时间','客户/付款人','支付方式','对接负责人','备注说明'];
  const text=v=>String(v??'').trim();
  const read=()=>JSON.parse(localStorage.getItem(key)||'[]');
  async function parse(file){
    if(!/\.xlsx$/i.test(file.name))throw Error('仅支持标准 xlsx 模板');
    const zip=await JSZip.loadAsync(await file.arrayBuffer()),xml=async p=>new DOMParser().parseFromString(await zip.file(p).async('string'),'application/xml');
    const strings=zip.file('xl/sharedStrings.xml')?[...(await xml('xl/sharedStrings.xml')).querySelectorAll('si')].map(n=>[...n.querySelectorAll('t')].map(t=>t.textContent).join('')):[];
    const workbook=await xml('xl/workbook.xml'),rels=await xml('xl/_rels/workbook.xml.rels'),id=workbook.querySelector('sheet').getAttribute('r:id'),target=[...rels.querySelectorAll('Relationship')].find(r=>r.getAttribute('Id')===id)?.getAttribute('Target');
    const sheet=await xml(target?.startsWith('/')?target.slice(1):'xl/'+(target||'worksheets/sheet1.xml').replace(/^\.\//,''));
    const rows=[...sheet.querySelectorAll('sheetData > row')].map(r=>{const cells=[];for(const c of r.querySelectorAll('c')){const ref=c.getAttribute('r').match(/^[A-Z]+/)[0];const index=[...ref].reduce((n,l)=>n*26+l.charCodeAt(0)-64,0)-1;const v=c.querySelector('v')?.textContent||'';cells[index]=c.getAttribute('t')==='s'?strings[Number(v)]:c.getAttribute('t')==='inlineStr'?[...c.querySelectorAll('t')].map(t=>t.textContent).join(''):v;}return {line:Number(r.getAttribute('r')),cells:Array.from({length:Math.max(11,cells.length)},(_,i)=>text(cells[i]))}});
    const header=rows.find(r=>r.line===5),normalize=s=>s.replace(/[＊*\s（）()／/]/g,'');
    if(!header||header.cells.length!==11||headers.some((h,i)=>!normalize(header.cells[i]).startsWith(normalize(h))))throw Error('模板列不匹配，请下载标准十一列模板，数据从第6行开始');
    const data=rows.filter(r=>r.line>=6&&r.cells.some(Boolean));
    if(data.length>50)throw Error('导入非空数据超过五十行，整份文件已拒绝');
    if(!data.length)throw Error('未找到导入数据，请从第6行填写');
    return data;
  }
  function validate(rows,partners,existing=[]){
    const seen=new Set(),stored=new Set([...read(),...existing].map(r=>r.offlineNo).filter(Boolean));
    return rows.map(r=>{const [offlineNo,name,accountNo,operation,accountType,amountRaw,dateRaw,payer,paymentMethod,owner,note]=r.cells;const p=partners.find(p=>p.accountNo===accountNo),errors=[];
      if(name==='待认领客户'||p?.type==='待认领客户'||window.SupplementUnclaimed?.read()?.partner.accountNo===accountNo)errors.push('待认领客户仅允许售票窗口入款，后台批量导入不支持');
      else if(!p||!['企业','个人'].includes(p.type)||p.name!==name)errors.push('合作伙伴名称和账户号须匹配企业或个人档案');
      if(!offlineNo)errors.push('线下充值流水号必填');else if(seen.has(offlineNo)||stored.has(offlineNo))errors.push('线下充值流水号重复');seen.add(offlineNo);
      if(!['充值','调账'].includes(operation))errors.push('处理操作仅支持充值、调账');
      if(!['挂帐','预付款'].includes(accountType)||p&&p.payType!==accountType)errors.push('账户类型与默认账户类型不一致');
      const amount=/^-?\d+(\.\d{1,2})?$/.test(amountRaw)?Math.round(Number(amountRaw)*100):null;
      if(amount===null||!Number.isSafeInteger(amount)||amount===0||operation==='充值'&&amount<0)errors.push('充值金额须大于0；调账金额不得为0，最多两位小数');
      let date=dateRaw;if(/^\d+(\.\d+)?$/.test(date)&&Number(date)>10000)date=new Date(Date.UTC(1899,11,30)+Math.floor(Number(date))*86400000).toISOString().slice(0,10);date=date.replace(/\//g,'-').slice(0,10);
      if((operation==='充值'||date)&&(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date||date>new Date().toLocaleDateString('sv-SE')))errors.push('支付时间无效或晚于今天');
      if(operation==='充值'&&!['现金','银行转账'].includes(paymentMethod))errors.push('后台导入支付方式仅支持现金、银行转账');
      if(note.length>500)errors.push('备注最多500字');
      return {...r,offlineNo,name,accountNo,operation,accountType,amount,date,payer,paymentMethod,owner,note,partner:p,errors};
    });
  }
  function commit(rows,partners,existing){
    const checked=validate(rows,partners,existing),time=window.SupplementMigration.stamp(new Date()),added=checked.filter(r=>!r.errors.length).map((r,i)=>{const id='RGIMP'+Date.now()+'-'+i,adjust=r.operation==='调账';const row={key:id,recordNo:id,offlineNo:r.offlineNo,kind:'account',type:r.partner.type,name:r.name,accountNo:r.accountNo,operation:r.operation,rechargeType:r.operation,accountType:r.accountType,amount:r.amount/100,applicant:'当前操作员工',owner:r.owner||r.partner.owner||'-',repaymentTime:r.date?r.date+' 00:00:00':'-',applyTime:time,finishTime:time,payer:adjust?'-':r.payer||'-',paymentMethod:adjust?'-':r.paymentMethod,terminalNo:'-',cashier:'-',ticketWindow:'-',status:'success',remark:r.note||'-',attachments:[],orders:[],orderItems:[],settleAmount:0,surplus:0};row.flow={key:'flow-'+id,type:row.type,name:row.name,accountNo:row.accountNo,operation:row.operation,accountType:row.accountType,amount:row.amount,documentType:'充值记录单号',documentNo:id,owner:row.owner,time,category:adjust?'adjust':'recharge',paymentMethod:row.paymentMethod,terminalNo:'-',repaymentStatus:'-',remark:row.remark};return row});
    localStorage.setItem(key,JSON.stringify([...read(),...added]));window.dispatchEvent(new Event('supplement:repayment'));return {checked,added};
  }
  function Dialog({React,h,Modal,Button,partners,existing,onClose}){
    const [file,setFile]=React.useState(null),[rows,setRows]=React.useState(null),[error,setError]=React.useState(''),[result,setResult]=React.useState(null),[busy,setBusy]=React.useState(false);
    const run=async()=>{setBusy(true);setError('');try{const data=await parse(file),saved=commit(data,partners,existing);setRows(saved.checked);setResult(saved.added.length)}catch(e){setError(e.message)}finally{setBusy(false)}};
    return h(Modal,{open:true,title:'批量导入充值',width:760,centered:true,maskClosable:false,onCancel:onClose,footer:h('div',{style:{display:'flex',justifyContent:'flex-end',gap:8}},h(Button,{onClick:onClose},'关闭'),h(Button,{type:'primary',disabled:!file||result!==null,loading:busy,onClick:run},'同步导入'))},
      h('a',{href:'合作伙伴充值批量导入模板.xlsx',download:true},'下载导入模板'),
      h('p',{style:{padding:12,background:'#e6f4ff',border:'1px solid #91caff',borderRadius:6,lineHeight:'24px'}},'仅支持标准 xlsx 模板，固定11列，数据从第6行开始；单次最多50条。仅支持企业、个人的充值和调账，不支持公共临时客户、待认领客户。文件级错误整份拒绝；错误行不导入。'),
      h('input',{type:'file',accept:'.xlsx',onChange:e=>{setFile(e.target.files[0]||null);setError('');setRows(null);setResult(null)}}),
      error&&h('p',{role:'alert',style:{padding:12,color:'#cf1322',background:'#fff2f0',border:'1px solid #ffccc7'}},error),
      result!==null&&h('p',{role:'status'},'导入完成：成功 '+result+' 条，失败 '+rows.filter(r=>r.errors.length).length+' 条。'),
      rows&&h('div',{style:{maxHeight:260,overflow:'auto'}},h('table',{style:{width:'100%',borderCollapse:'collapse'}},h('thead',null,h('tr',null,['行号','合作伙伴','结果'].map(t=>h('th',{key:t,style:{padding:8,border:'1px solid #eee',textAlign:'left'}},t)))),h('tbody',null,rows.map(r=>h('tr',{key:r.line},h('td',{style:{padding:8,border:'1px solid #eee'}},r.line),h('td',{style:{padding:8,border:'1px solid #eee'}},r.name),h('td',{style:{padding:8,border:'1px solid #eee',color:r.errors.length?'#cf1322':'#389e0d'}},r.errors.join('；')||'导入成功')))))));
  }
  window.SupplementImport={read,parse,validate,commit,Dialog};
})();
