/* 增补原型：唯一待认领对象。入款余额与原始收款记录整体保存，不连接真实接口。 */
(() => {
  const key='supplement-20261011-unclaimed-v1';
  const isUnclaimed=row=>row?.type==='待认领客户';
  function read(storage=localStorage){
    const raw=storage.getItem(key);if(!raw)return null;
    const data=JSON.parse(raw);
    if(!isUnclaimed(data.partner)||!isUnclaimed(data.prepay)||data.partner.accountNo!==data.prepay.accountNo||data.partner.payType!=='预付款')throw new Error('待认领客户资料异常，请检查本地原型数据');
    return data;
  }
  function create({partners=[],remark='',operator='当前操作员工',storage=localStorage,now=new Date()}={}){
    if(read(storage)||partners.some(isUnclaimed))throw new Error('系统中已存在待认领客户，不允许重复创建');
    if(partners.some(row=>String(row.name).trim()==='待认领客户'))throw new Error('合作伙伴名称“待认领客户”已存在，请先核实原档案');
    if(String(remark).length>500)throw new Error('备注最多输入500字');
    const stamp=now.getTime(),id='unclaimed-'+stamp;
    let accountNo='CPP'+stamp;while(partners.some(row=>row.accountNo===accountNo))accountNo+='1';
    const pad=n=>String(n).padStart(2,'0');
    const time=`${now.getFullYear()}-${pad(now.getMonth()+1)}-${pad(now.getDate())} ${pad(now.getHours())}:${pad(now.getMinutes())}:${pad(now.getSeconds())}`;
    const partner={key:id,type:'待认领客户',name:'待认领客户',accountNo,payType:'预付款',contact:'-',phone:'-',owner:'-',ownerId:'-',status:'enabled',remark:String(remark),updater:operator,updatedAt:time,hasHistory:false};
    const prepay={key:'p-'+id,createdAt:stamp,type:partner.type,name:partner.name,accountNo,balance:0,limitEnabled:true,status:'enabled'};
    const data={partner,prepay};storage.setItem(key,JSON.stringify(data));return data;
  }
  const localStamp=date=>{const p=n=>String(n).padStart(2,'0');return `${date.getFullYear()}-${p(date.getMonth()+1)}-${p(date.getDate())} ${p(date.getHours())}:${p(date.getMinutes())}:${p(date.getSeconds())}`};
  function deposit({accountNo,form,fixture,operator='当前售票员',windowName='呀诺达售票窗口',requestId,storage=localStorage,now=new Date()}={}){
    const saved=read(storage),model=window.SupplementRepaymentModel;
    if(!saved||saved.partner.accountNo!==accountNo||saved.partner.status!=='enabled')throw new Error('待认领账户不存在或状态已变化，请关闭后重新查询');
    if(!requestId||(saved.receipts||[]).some(r=>r.requestId===requestId))throw new Error('本次充值已处理，请勿重复提交');
    const amount=model.money(form.total),cash=model.money(form.cash),today=localStamp(now).slice(0,10);
    if(amount===null||amount<=0)throw new Error('请输入大于0且最多两位小数的充值金额');
    const date=form.date||'';
    if(!/^\d{4}-\d{2}-\d{2}$/.test(date)||!Number.isFinite(Date.parse(date))||new Date(date).toISOString().slice(0,10)!==date||date>today)throw new Error('请选择有效支付日期，不允许未来日期');
    if(form.income||form.excess)throw new Error('待认领入款不允许计入其他收入');
    const state=model.resourceState(fixture,form.code);
    if(state.error)throw new Error(state.error);
    if(form.signature!==state.signature)throw new Error('支付配置或资源绑定已变化，请重新选择支付方式及资源');
    const resource=state.options.find(r=>r.id===form.resourceId),payment=model.candidates(fixture).find(p=>p.code===form.code);
    if(['SCAN_PAY','BANK_CARD'].includes(form.code)&&(!resource||!String(model.terminal(resource)||'').trim()))throw new Error('收款资源或柜台编码／POS编号缺失，请修正配置或改用其他方式');
    if(form.code==='CASH'&&(cash===null||cash<amount))throw new Error('现金实收不得少于本次充值金额');
    if((form.note||'').length>500||(form.payer||'').length>100)throw new Error('备注或客户／付款人超过允许长度');
    const owner=form.owner||'-';
    if(!['-','张敏 13800000011','李晨 13800000012'].includes(owner))throw new Error('请选择有效对接负责人，或清空后提交');
    const before=Math.round(saved.prepay.balance*100),after=before+amount;
    if(!Number.isSafeInteger(before)||before<0||!Number.isSafeInteger(after))throw new Error('待认领账户余额异常，本次未保存');
    const time=localStamp(now),id='RGU'+now.getTime()+'-'+Math.random().toString(36).slice(2,7);
    const receipt={id,requestId,amount,paidAt:date+' 00:00:00',createdAt:time,completedAt:time,owner,ownerId:owner.startsWith('张敏')?'EMP10011':owner.startsWith('李晨')?'EMP10012':'-',applicant:operator,windowName,payer:form.payer||'-',note:form.note||'-',method:payment.name,code:payment.code,resource:resource?{id:resource.id,name:resource.name,terminal:model.terminal(resource)}:null,terminal:resource?model.terminal(resource):'-',cash:form.code==='CASH'?cash:null,change:form.code==='CASH'?cash-amount:0,usage:'unused'};
    const next={...saved,partner:{...saved.partner,hasHistory:true},prepay:{...saved.prepay,balance:after/100,limitEnabled:true},receipts:[...(saved.receipts||[]),receipt]};
    storage.setItem(key,JSON.stringify(next));
    if(storage===localStorage)window.dispatchEvent(new CustomEvent('supplement:unclaimed'));
    return receipt;
  }
  function selection(form,storage=localStorage){
    const saved=read(storage),ids=form.sourceIds||[];
    if(ids.length!==1)throw new Error('每次只能选择一笔待认领充值记录，请分次处理');
    if(!saved||saved.partner.status!=='enabled'||!ids.length||new Set(ids).size!==ids.length)throw new Error('请重新选择有效待认领款记录');
    const rows=ids.map(id=>(saved.receipts||[]).find(r=>r.id===id));
    if(rows.some(r=>!r||r.usage!=='unused'))throw new Error('所选待认领款已使用或状态变化，请重新选择');
    if(new Set(rows.map(r=>JSON.stringify([r.code,r.terminal]))).size!==1)throw new Error('所选待认领款的支付方式和柜台号／POS编号必须一致');
    const amount=rows.reduce((n,r)=>n+r.amount,0);
    if(rows.some(r=>!Number.isSafeInteger(r.amount)||r.amount<=0)||amount!==window.SupplementRepaymentModel.money(form.total))throw new Error('来源金额已变化，请重新选择待认领款');
    if(form.date<rows.reduce((d,r)=>r.paidAt.slice(0,10)>d?r.paidAt.slice(0,10):d,''))throw new Error('支付日期不得早于所选待认领款的最晚支付日期');
    if(Math.round(saved.prepay.balance*100)<amount)throw new Error('待认领账户余额不足，请重新查询');
    return {saved,rows,amount};
  }
  function consume({form,repayment,longterm,storage=localStorage}){
    const {saved,rows,amount}=selection(form,storage),receipt=(repayment||longterm).receipt;
    const used=new Set(rows.map(r=>r.id));
    const operation={id:receipt.id,sourceIds:[...used],...(longterm?{longterm}:{repayment})};
    const next={...saved,prepay:{...saved.prepay,balance:(Math.round(saved.prepay.balance*100)-amount)/100},receipts:saved.receipts.map(r=>used.has(r.id)?{...r,usage:'used',usedBy:receipt.id,usedAt:receipt.completedAt}:r),uses:[...(saved.uses||[]),operation]};
    // 来源使用状态、余额及目标回款结果在同一个本地键中一次提交。
    storage.setItem(key,JSON.stringify(next));
    if(storage===localStorage){window.dispatchEvent(new Event('supplement:unclaimed'));window.dispatchEvent(new Event('supplement:repayment'));}
  }
  function records(storage=localStorage){
    const saved=read(storage);if(!saved)return [];
    return (saved.receipts||[]).map(r=>{
      const row={key:r.id,recordNo:r.id,kind:'account',unclaimedReceipt:true,usedBy:r.usedBy,type:'待认领客户',name:saved.partner.name,accountNo:saved.partner.accountNo,rechargeType:'充值',operation:'充值',accountType:'预付款',amount:r.amount/100,owner:r.owner,ownerId:r.ownerId,applicant:r.applicant,cashier:r.applicant,cashierId:'CASHIER-YND-001',ticketWindow:r.windowName,ticketWindowId:'WINDOW-YND-001',repaymentTime:r.paidAt,applyTime:r.createdAt,finishTime:r.completedAt,status:'success',usage:r.usage,paymentMethod:r.method,terminalNo:r.terminal,resourceId:r.resource?.id||'',resourceName:r.resource?.name||'-',payer:r.payer,remark:r.note,attachments:[],cashReceived:r.cash===null?null:r.cash/100,change:r.change/100,orders:[],orderItems:[]};
      return {...row,flow:{key:'flow-'+r.id,type:row.type,name:row.name,accountNo:row.accountNo,operation:'充值',accountType:'预付款',amount:row.amount,documentType:'充值记录单号',documentNo:r.id,owner:r.owner,time:row.finishTime,category:'recharge',paymentMethod:r.method,terminalNo:r.terminal,repaymentStatus:'-',remark:`售票员：${r.applicant}，售票窗口：${r.windowName}；${r.note}`}};
    }).concat((saved.uses||[]).flatMap(use=>use.sourceIds.map((id,index)=>{
      const source=saved.receipts.find(r=>r.id===id),target=(use.repayment||use.longterm).receipt,no='RGOUT'+use.id+'-'+(index+1);
      const row={key:no,recordNo:no,kind:'account',unclaimedReceipt:true,unclaimedTransfer:true,type:'待认领客户',name:saved.partner.name,accountNo:saved.partner.accountNo,rechargeType:'调账-认领款转出',operation:'调账-认领款转出',accountType:'预付款',amount:-source.amount/100,owner:source.owner,ownerId:source.ownerId,applicant:target.applicant,cashier:target.applicant,ticketWindow:target.windowName,repaymentTime:target.paidAt,applyTime:localStamp(new Date(target.createdAt)),finishTime:localStamp(new Date(target.completedAt)),status:'success',usage:'used',sourceRecordNo:id,targetRecordNo:target.id,paymentMethod:source.method,terminalNo:source.terminal,resourceId:source.resource?.id||'',resourceName:source.resource?.name||'-',payer:target.payer||'-',remark:target.note||'-',attachments:[],cashReceived:null,change:0,orders:[],orderItems:[]};
      return {...row,flow:{key:'flow-'+no,type:row.type,name:row.name,accountNo:row.accountNo,operation:row.operation,accountType:row.accountType,amount:row.amount,documentType:'充值记录单号',documentNo:no,owner:row.owner,time:row.finishTime,category:'adjust',paymentMethod:row.paymentMethod,terminalNo:row.terminalNo,repaymentStatus:'-',remark:'来源：'+id+'；目标回款：'+target.id}};
    })));
  }
  window.SupplementUnclaimed={key,read,create,isUnclaimed,deposit,records,selection,consume};
})();
