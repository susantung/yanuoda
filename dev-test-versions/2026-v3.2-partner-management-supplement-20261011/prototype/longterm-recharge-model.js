/* W02共用充值账本：仅离线增补原型。来源使用与目标结果在同一键中提交。 */
(() => {
  const key='supplement-20261011-longterm-recharge-v1',pay=window.SupplementRepaymentModel;
  const stamp=value=>window.SupplementMigration.stamp(value);
  function entries(storage=localStorage){
    const own=JSON.parse(storage.getItem(key)||'[]');
    if(!Array.isArray(own))throw new Error('本地长期充值记录无法读取');
    return [...own,...(window.SupplementUnclaimed.read(storage)?.uses||[]).filter(u=>u.longterm).map(u=>u.longterm)];
  }
  const delta=(accountNo,type,storage=localStorage)=>entries(storage).filter(e=>e.accountNo===accountNo&&e.accountType===type).reduce((n,e)=>n+e.amount,0)/100+(window.SupplementImport?.read()||[]).filter(r=>r.accountNo===accountNo&&r.accountType===type).reduce((n,r)=>n+r.amount,0);
  const records=(storage=localStorage)=>entries(storage).flatMap(e=>e.rows);
  function commit({accountNo,expectedTarget,form,fixture,requestId,storage=localStorage,now=new Date()}){
    const catalog=window.SupplementMigration,target=catalog.catalog(storage).find(p=>p.accountNo===accountNo);
    if(!catalog.eligible(target)||!['挂帐','预付款'].includes(target.payType))throw new Error('合作伙伴已停用或账户资料无效，请关闭后重新查询');
    if(catalog.signature(target)!==expectedTarget)throw new Error('合作伙伴资料或默认账户类型已变化，请重新打开充值');
    if(!requestId||entries(storage).some(e=>e.requestId===requestId))throw new Error('本次充值已处理，请勿重复提交');
    const amount=pay.money(form.amount),income=pay.money(form.income),cash=pay.money(form.cash),today=stamp(now).slice(0,10);
    if(amount===null||income===null||!Number.isSafeInteger(amount+income)||amount+income<=0)throw new Error('充值金额与其他收入请输入非负金额、最多两位小数，合计须大于0');
    if(!/^\d{4}-\d{2}-\d{2}$/.test(form.date||'')||!Number.isFinite(Date.parse(form.date))||new Date(form.date).toISOString().slice(0,10)!==form.date||form.date>today)throw new Error('请选择有效支付日期，不允许未来日期');
    if((form.note||'').length>500||(form.payer||'').length>100)throw new Error('备注或客户／付款人超过允许长度');
    let method,terminal='-',resource=null,fundingSources=[];
    if(form.code==='UNCLAIMED'){
      const chosen=window.SupplementUnclaimed.selection(form,storage),source=chosen.rows[0];
      if(amount+income!==chosen.amount)throw new Error('充值金额与其他收入合计必须等于本笔待认领款 '+(chosen.amount/100).toFixed(2)+' 元');
      method=source.method;terminal=source.terminal;resource=source.resource;
      fundingSources=[{id:source.id,amount:source.amount,method:source.method,terminal:source.terminal,owner:source.owner,resource}];
    }else{
      const state=pay.resourceState(fixture,form.code),choice=pay.candidates(fixture).find(p=>p.code===form.code);
      if(state.error)throw new Error(state.error);
      if(state.signature!==form.signature)throw new Error('支付配置或资源绑定已变化，请重新选择');
      const selected=state.options.find(r=>r.id===form.resourceId);
      if(['SCAN_PAY','BANK_CARD'].includes(form.code)&&(!selected||!String(pay.terminal(selected)||'').trim()))throw new Error('请配置有效收款资源及柜台编码／POS编号');
      if(form.code==='CASH'&&(cash===null||cash<amount+income))throw new Error('现金实收不得少于本次收款合计');
      method=choice.name;
      if(selected){terminal=pay.terminal(selected);resource={id:selected.id,name:selected.name,terminal}}
    }
    const token=now.getTime()+'-'+Math.random().toString(36).slice(2,7),mainNo='RGWL'+token,incomeNo='QTSRL'+token,time=stamp(now),id=amount?mainNo:incomeNo;
    const common={longtermRecharge:true,type:target.type,name:target.name,applicant:'当前售票员',cashier:'当前售票员',cashierId:'CASHIER-YND-001',ticketWindow:'呀诺达售票窗口',ticketWindowId:'WINDOW-YND-001',owner:target.owner,ownerId:target.ownerId||'-',payer:form.payer||'-',paymentMethod:method,terminalNo:terminal,resourceName:resource?.name||'-',resourceId:resource?.id||'',fundingMethod:form.code==='UNCLAIMED'?'待认领账户':method,fundingSources,repaymentTime:form.date+' 00:00:00',applyTime:time,finishTime:time,status:'success',remark:form.note||'-',attachments:[],orders:[],orderItems:[],cashReceived:form.code==='CASH'?cash/100:null,change:form.code==='CASH'?(cash-amount-income)/100:0};
    const rows=[];
    if(amount)rows.push({...common,key:mainNo,recordNo:mainNo,kind:'account',accountNo:target.accountNo,accountType:target.payType,operation:'充值',rechargeType:'充值',amount:amount/100,totalReceived:(amount+income)/100,surplus:income/100,targetRecordNo:income?incomeNo:null});
    if(income)rows.push({...common,key:incomeNo,recordNo:incomeNo,kind:'income',accountNo:'-',accountType:'-',operation:'其他收入',rechargeType:'其他收入',amount:income/100,sourceRecordNo:amount?mainNo:null});
    for(const row of rows)row.flow={key:'flow-'+row.recordNo,type:row.type,name:row.name,accountNo:row.accountNo,operation:row.operation,accountType:row.accountType,amount:row.amount,documentType:'充值记录单号',documentNo:row.recordNo,owner:row.owner,time,category:row.kind==='income'?'income':'recharge',paymentMethod:method,terminalNo:terminal,repaymentStatus:'-',remark:'售票员：当前售票员；售票窗口：呀诺达售票窗口；'+(form.note||'-')};
    const result={id,requestId,accountNo,accountType:target.payType,amount,rows,receipt:{id,applicant:'当前售票员',windowName:'呀诺达售票窗口',paidAt:common.repaymentTime,createdAt:now.toISOString(),completedAt:now.toISOString(),payer:form.payer,note:form.note}};
    if(form.code==='UNCLAIMED')window.SupplementUnclaimed.consume({form,longterm:result,storage});
    else{storage.setItem(key,JSON.stringify([...entries(storage).filter(e=>!e.rows.some(r=>r.fundingMethod==='待认领账户')),result]));if(storage===localStorage)window.dispatchEvent(new Event('supplement:repayment'))}
    return result;
  }
  window.SupplementLongtermRecharge={key,entries,delta,records,commit};
})();
