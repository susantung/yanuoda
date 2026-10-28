/* W01/W03：复用窗口查询、收款模型及前后台记录；仅本地产品预览。 */
(() => {
  const h=React.createElement,{useState,useEffect,useRef}=React;
  const {ConfigProvider,App:AntApp,Modal,Descriptions,Input,DatePicker,Select,Button,Alert,Space}=antd;
  const core=window.SupplementUnclaimed,payModel=window.SupplementRepaymentModel;
  const {locale,dateLocale}=window.SupplementWindowLocale;
  const fmt=n=>(n/100).toFixed(2),esc=v=>String(v??'-').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
  // 仅静态原型的初始样例：新浏览器也能评审入口，不改变后台唯一创建规则。
  // 已有对象及入款记录绝不覆盖；创建仍复用后台的唯一对象模型。
  try{if(!core.read())core.create({partners,operator:'原型初始样例',now:new Date(2026,9,25,9,0,0)})}catch(e){showNotice(e.message)}
  function syncPartner(){
    const saved=core.read();if(!saved)return;
    const row={...saved.partner,id:saved.partner.key,prepay:saved.prepay.balance,credit:0};
    const found=partners.find(p=>p.accountNo===row.accountNo);
    if(found)Object.assign(found,row);else partners.push(row);
  }
  const previousRender=window.renderPartners;
  window.renderPartners=()=>{
    try{syncPartner()}catch(e){showNotice(e.message)}
    previousRender();
    const saved=core.read();if(!saved)return;
    const row=[...document.querySelectorAll('#partnerRows tr')].find(tr=>tr.cells[2]?.textContent===saved.partner.accountNo);
    if(row)row.querySelector('td.actions').innerHTML='<a href="#" onclick="openUnclaimedView();return false">查看</a><a href="#" onclick="openUnclaimedRecharge();return false">充值</a>';
  };
  const refresh=()=>{renderPartners();renderRecords('account');renderRecords('income');renderReport()};
  ['focus','storage','supplement:unclaimed'].forEach(n=>window.addEventListener(n,refresh));
  const previousView=window.viewRecord;
  window.viewRecord=no=>{
    const r=core.records().find(r=>r.recordNo===no);if(!r)return previousView(no);
    const pairs=[['充值记录单号',r.recordNo],['合作类型',r.type],['合作伙伴名称',r.name],['账户号',r.accountNo],['处理操作',r.operation],['账户类型',r.accountType],['金额',r.amount.toFixed(2)+' 元'],['支付时间',r.repaymentTime],['客户／付款人',r.payer],['支付方式',r.paymentMethod],['收款资源',r.resourceName],['柜台号／POS编号',r.terminalNo],['申请人',r.applicant],['对接负责人',r.owner],['申请时间',r.applyTime],['完成时间',r.finishTime],['充值状态','充值成功'],['使用状态',r.usage==='unused'?'未使用':'已使用'],['售票员',r.cashier],['售票窗口',r.ticketWindow]];
    document.getElementById('detailGrid').innerHTML=pairs.map(([a,b])=>'<span>'+a+'：</span><b>'+esc(b)+'</b>').join('')+'<div class="repayment-detail-full"><span>备注说明：</span><div>'+esc(r.remark)+'</div></div>';
    document.querySelectorAll('#detailGrid>span,#detailGrid>b').forEach(node=>{node.style.gridColumn='auto'});
    const links=[['来源充值记录',r.sourceRecordNo],['目标充值记录',r.targetRecordNo||r.usedBy]].filter(p=>p[1]);
    const remarkNode=document.querySelector('#detailGrid .repayment-detail-full>div');
    if(links.length&&['-','—',''].includes(String(r.remark||'').trim()))remarkNode.textContent='';
    for(const [label,id] of links)remarkNode.insertAdjacentHTML('beforeend','<div>'+label+'：<a href="#" onclick="viewRecord(\''+esc(id)+'\');return false">'+esc(id)+'</a></div>');
    document.getElementById('detailMask').classList.add('show');
  };
  function DepositDialog({saved,onCancel,onComplete}){
    const fixture=window.paymentFixture,{message}=AntApp.useApp(),lock=useRef(false);
    const token=useRef('deposit-'+Date.now()+'-'+Math.random().toString(36).slice(2));
    const [form,setForm]=useState(()=>{const code=payModel.candidates(fixture)[0]?.code,state=payModel.resourceState(fixture,code);return{date:dayjs().format('YYYY-MM-DD'),total:'',cash:'',owner:undefined,payer:'',note:'',code,resourceId:state.defaultId,signature:state.signature}});
    const [error,setError]=useState(''),[busy,setBusy]=useState(false);
    const set=(key,value)=>{setForm(f=>({...f,[key]:value}));setError('')};
    const state=payModel.resourceState(fixture,form.code),resource=state.options.find(r=>r.id===form.resourceId),total=payModel.money(form.total),cash=payModel.money(form.cash);
    const invalid=total===null||total<=0||!/^\d{4}-\d{2}-\d{2}$/.test(form.date||'')||!Number.isFinite(Date.parse(form.date))||dayjs(form.date).isAfter(dayjs(),'day')||state.error||state.signature!==form.signature||(form.code==='CASH'&&(cash===null||cash<total))||(['SCAN_PAY','BANK_CARD'].includes(form.code)&&(!resource||!String(payModel.terminal(resource)||'').trim()));
    const selectCode=code=>{const next=payModel.resourceState(fixture,code);setForm(f=>({...f,code,resourceId:next.defaultId,signature:next.signature,cash:''}));setError('')};
    const submit=()=>{if(lock.current)return;lock.current=true;setBusy(true);try{const record=core.deposit({accountNo:saved.partner.accountNo,form,fixture,requestId:token.current});onComplete(record);message.success('充值成功，已增加待认领预付款余额')}catch(e){setError(e.message)}finally{lock.current=false;setBusy(false)}};
    const field=(label,id,control,required=false,full=false)=>h('div',{className:'w06-field'+(full?' w06-full':''),key:id},h('label',{htmlFor:id},required&&h('i',null,'* '),label+'：'),h('div',{className:'w06-control'},control));
    const amount=(id,key,placeholder)=>h(Input,{id,value:form[key],inputMode:'decimal',placeholder,suffix:'元',onChange:e=>set(key,e.target.value)});
    return h(Modal,{open:true,title:'待认领客户充值',width:940,centered:true,maskClosable:false,onCancel,keyboard:!busy,closable:!busy,className:'w06-modal w03-modal',footer:h('div',{className:'w06-footer'},h('div',null,'本次收款合计：',h('strong',null,total===null?'—':fmt(total)),' 元'),h(Space,null,h(Button,{onClick:onCancel,disabled:busy},'取消'),h(Button,{type:'primary',onClick:submit,loading:busy,disabled:!!invalid},'确认充值')))},
      h(Descriptions,{bordered:true,size:'small',column:2,items:[{key:1,label:'合作类型',children:saved.partner.type},{key:2,label:'合作伙伴名称',children:saved.partner.name},{key:3,label:'账户号',children:saved.partner.accountNo},{key:4,label:'账户类型',children:'预付款'},{key:5,label:'当前预付款余额',span:2,children:Number(saved.prepay.balance).toFixed(2)+' 元'}]}),
      h('div',{className:'w06-form'},
        field('支付日期','unclaimedDate',h(DatePicker,{id:'unclaimedDate',value:form.date?dayjs(form.date):null,locale:dateLocale,format:'YYYY-MM-DD',disabledDate:d=>d.isAfter(dayjs(),'day'),onChange:d=>set('date',d?d.format('YYYY-MM-DD'):'')}),true),
        field('对接负责人','unclaimedOwner',h(Select,{id:'unclaimedOwner',allowClear:true,showSearch:true,optionFilterProp:'label',value:form.owner,placeholder:'选填，按姓名或手机号搜索',options:['张敏 13800000011','李晨 13800000012'].map(v=>({label:v,value:v})),onChange:v=>set('owner',v)})),
        field('客户／付款人','unclaimedPayer',h(Input,{id:'unclaimedPayer',value:form.payer,maxLength:100,placeholder:'选填',onChange:e=>set('payer',e.target.value)})),
        field('充值金额','unclaimedTotal',amount('unclaimedTotal','total','请输入充值金额'),true),
        field('备注说明','unclaimedNote',h(Input.TextArea,{id:'unclaimedNote',value:form.note,maxLength:500,showCount:true,autoSize:{minRows:2,maxRows:3},placeholder:'选填，最多500字',onChange:e=>set('note',e.target.value)}),false,true)),
      h('section',{className:'w06-payment'},h('div',{className:'w06-payments'},payModel.candidates(fixture).map(p=>h(Button,{key:p.code,type:form.code===p.code?'primary':'default','aria-pressed':form.code===p.code,onClick:()=>selectCode(p.code)},p.name))),
        !payModel.candidates(fixture).length&&h(Alert,{type:'error',showIcon:true,message:'当前无可用充值支付方式，请联系管理员配置'}),
        form.code==='CASH'&&h('div',{className:'w06-dynamic'},field('现金实收','unclaimedCash',amount('unclaimedCash','cash','请输入现金实收金额'),true),h('div',{className:'w06-change'},'现金找零：',h('strong',null,cash!==null&&total!==null&&cash>=total?fmt(cash-total):'—'),' 元')),
        ['SCAN_PAY','BANK_CARD'].includes(form.code)&&h('div',{className:'w06-dynamic'},field('收款资源','unclaimedResource',h(Select,{id:'unclaimedResource',value:form.resourceId,disabled:state.fixed,showSearch:true,optionFilterProp:'label',placeholder:'请选择有效绑定资源',options:state.options.map(r=>({label:r.name,value:r.id})),onChange:id=>set('resourceId',id)}),true),field(form.code==='SCAN_PAY'?'柜台编码':'POS编号','unclaimedTerminal',h(Input,{id:'unclaimedTerminal',readOnly:true,value:resource?payModel.terminal(resource):'—'}))),
        ['SCAN_PAY','BANK_CARD'].includes(form.code)&&state.error&&h(Alert,{type:'error',showIcon:true,message:state.error})),
      error&&h(Alert,{className:'w06-error',type:'error',showIcon:true,message:error}));
  }
  function Host(){
    const [dialog,setDialog]=useState(null);
    useEffect(()=>{const open=e=>{try{const saved=core.read();if(!saved)throw new Error('请先在后台建立待认领客户');setDialog({saved,view:e.detail?.view})}catch(e){showNotice(e.message)}};window.addEventListener('supplement:open-unclaimed',open);return()=>window.removeEventListener('supplement:open-unclaimed',open)},[]);
    if(!dialog)return null;
    if(dialog.view)return h(Modal,{open:true,title:'查看合作伙伴',centered:true,width:760,className:'w06-modal',onCancel:()=>setDialog(null),footer:h(Button,{type:'primary',onClick:()=>setDialog(null)},'关闭')},h(Descriptions,{bordered:true,size:'small',column:2,items:[{key:1,label:'合作类型',children:'待认领客户'},{key:2,label:'合作伙伴名称',children:'待认领客户'},{key:3,label:'账户号',children:dialog.saved.partner.accountNo},{key:4,label:'默认账户类型',children:'预付款'},{key:5,label:'状态',children:'启用'},{key:6,label:'预付款余额',children:dialog.saved.prepay.balance.toFixed(2)+' 元'},{key:7,label:'备注',span:2,children:dialog.saved.partner.remark||'-'}]}));
    return h(DepositDialog,{saved:dialog.saved,onCancel:()=>setDialog(null),onComplete:()=>{setDialog(null);refresh()}});
  }
  window.openUnclaimedRecharge=()=>window.dispatchEvent(new CustomEvent('supplement:open-unclaimed'));
  window.openUnclaimedView=()=>window.dispatchEvent(new CustomEvent('supplement:open-unclaimed',{detail:{view:true}}));
  const root=document.createElement('div');root.id='unclaimedWindowRoot';document.body.appendChild(root);
  ReactDOM.createRoot(root).render(h(ConfigProvider,{locale,theme:{token:{colorPrimary:'#1677ff',fontSize:14,controlHeight:32,borderRadius:6}}},h(AntApp,null,h(Host))));
  refresh();
})();
