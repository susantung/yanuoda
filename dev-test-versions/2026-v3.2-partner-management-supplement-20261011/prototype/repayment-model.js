/* 仅本地产品预览规则，不调用支付、订单或账户接口。金额均为分。 */
(() => {
  'use strict';
  const key='supplement-20261011-w06-ledger-v1';
  const clone=x=>JSON.parse(JSON.stringify(x));
  const money=v=>{const s=String(v??'').trim();return /^\d+(\.\d{1,2})?$/.test(s)&&Number.isSafeInteger(Math.round(Number(s)*100))?Math.round(Number(s)*100):null};
  const candidates=fixture=>fixture.payments.filter(p=>p.on&&p.scenes.includes('partner')&&['CASH','SCAN_PAY','BANK_CARD','WECHAT','ALIPAY'].includes(p.code)).sort((a,b)=>(Number.isInteger(a.sortOrder)&&a.sortOrder>0?a.sortOrder:Infinity)-(Number.isInteger(b.sortOrder)&&b.sortOrder>0?b.sortOrder:Infinity));
  function resourceState(fixture,code){
    const pay=candidates(fixture).find(p=>p.code===code);
    if(!pay)return{error:'当前支付方式已停用或不适用充值／回款，请重新选择',options:[]};
    if(!['SCAN_PAY','BANK_CARD'].includes(code))return{options:[],fixed:false,signature:JSON.stringify(pay)};
    const kind=code==='SCAN_PAY'?'scan':'bank',type=kind==='scan'?'scan':'pos';
    const owner=pay.owner==='device'?fixture.session.deviceKey:pay.owner==='role'||pay.owner==='account'?fixture.session.accountKey:null;
    const binding=fixture.bindings[owner],ids=binding?.[kind+'Selected']||[],defaultId=binding?.[kind+'Default'];
    const options=fixture.resources.filter(r=>ids.includes(r.id)&&r.enabled&&r.type===type);
    const fixed=pay.usage==='固定使用一个',def=options.find(r=>r.id===defaultId);
    let error='';
    if(!owner||!binding||!ids.length)error='当前收银账号或实际窗口设备未绑定有效收款资源，请联系管理员配置或改用其他支付方式';
    else if(options.length!==ids.length)error='绑定的收款资源已失效，请刷新配置或改用其他支付方式';
    else if(fixed&&ids.length!==1)error='当前方式要求固定使用一个资源，绑定数量不符';
    else if(!fixed&&!def)error='默认收款资源无效，请联系管理员修正，不能自动选取第一项';
    const resolvedDefault=fixed&&options.length===1?options[0].id:def?.id;
    return{options,fixed,defaultId:resolvedDefault,error,signature:JSON.stringify({pay,owner,binding,options})};
  }
  const terminal=r=>r?(r.type==='scan'?r.counterCode:r.posCode):'—';
  function validate({orders,ids,form,fixture,today,expectedAmounts,storage=localStorage}){
    const fail=error=>({error});
    if(!ids.length||new Set(ids).size!==ids.length)return fail('请重新选择待回款订单');
    const chosen=ids.map(id=>orders.find(r=>r.id===id));
    if(chosen.some(r=>!r||r.state!=='pending'||r.partner!=='公共临时客户'||r.method!=='挂帐'||r.amount-r.refunded<=0))return fail('所选订单状态已变化，请返回列表重新查询选择');
    if(expectedAmounts&&chosen.some(r=>expectedAmounts[r.id]!==r.amount-r.refunded))return fail('所选订单应回款金额已变化，请返回列表重新查询选择');
    const due=chosen.reduce((n,r)=>n+r.amount-r.refunded,0),total=money(form.total),cash=money(form.cash);
    if(!/^\d{4}-\d{2}-\d{2}$/.test(form.date||'')||!Number.isFinite(Date.parse(form.date))||new Date(form.date).toISOString().slice(0,10)!==form.date||form.date>today)return fail('请选择有效支付日期，不允许未来日期');
    if(total===null||total<=0)return fail('请输入大于0且最多两位小数的本次收款金额');
    if(total<due)return fail((form.code==='UNCLAIMED'?'待认领款不足':'本次收款金额不足')+'，还差 '+((due-total)/100).toFixed(2)+' 元；不允许部分结清，请重新选择');
    if(total>due&&form.excess!=='income')return fail('请明确选择将超出应回款的金额计入其他收入');
    if(form.code==='UNCLAIMED'){
      try{
        const selected=window.SupplementUnclaimed.selection(form,storage),first=selected.rows[0];
        if((form.note||'').length>500)return fail('备注说明不得超过500字');
        return {chosen,due,total,income:total-due,change:0,resource:first.resource?{...first.resource,type:first.code==='SCAN_PAY'?'scan':'pos',counterCode:first.terminal,posCode:first.terminal}:null,payment:{name:first.method,code:first.code},fundingSources:selected.rows.map(r=>({id:r.id,amount:r.amount,method:r.method,terminal:r.terminal,owner:r.owner,resource:r.resource})),mismatch:new Set(chosen.map(r=>r.customer.trim())).size>1||new Set(chosen.map(r=>r.owner.trim())).size>1};
      }catch(e){return fail(e.message)}
    }
    const state=resourceState(fixture,form.code);
    if(state.error)return fail(state.error);
    if(form.signature!==state.signature)return fail('支付配置或资源绑定已变化，请重新选择支付方式及资源后确认');
    const resource=state.options.find(r=>r.id===form.resourceId);
    if(['SCAN_PAY','BANK_CARD'].includes(form.code)&&(!resource||!String(terminal(resource)||'').trim()))return fail('收款资源或柜台编码／POS编号缺失，请修正配置或改用其他方式');
    if(form.code==='CASH'&&(cash===null||cash<total))return fail('现金实收不得少于本次收款金额');
    if((form.note||'').length>500)return fail('备注说明不得超过500字');
    return{chosen,due,total,income:total-due,change:form.code==='CASH'?cash-total:0,resource,payment:candidates(fixture).find(p=>p.code===form.code),mismatch:new Set(chosen.map(r=>r.customer.trim())).size>1||new Set(chosen.map(r=>r.owner.trim())).size>1};
  }
  function readLedger(storage=localStorage){
    const raw=storage.getItem(key),data=raw?JSON.parse(raw):{version:1,receipts:[],incomes:[],journals:[],settlements:{},accountDelta:0};
    if(data.version!==1||!Array.isArray(data.receipts)||!data.settlements)throw new Error('本地回款记录无法读取，请勿继续提交');
    for(const use of window.SupplementUnclaimed?.read(storage)?.uses||[]){
      if(!use.repayment)continue;
      const patch=use.repayment;if(data.receipts.some(r=>r.id===patch.receipt.id))continue;
      data.receipts.push(patch.receipt);data.incomes.push(...patch.incomes);data.journals.push(...patch.journals);Object.assign(data.settlements,patch.settlements);data.accountDelta+=patch.accountDelta;
    }
    return data;
  }
  const apply=(orders,ledger)=>orders.map(r=>{const m=(ledger.migrations||[]).find(m=>m.orders.some(o=>o.id===r.id));return m?{...r,state:'migrated',partner:m.target.name,partnerType:m.target.type,accountNo:m.target.accountNo,accountType:m.target.payType,owner:m.target.owner,contact:m.target.contact,phone:m.target.phone,migrationId:m.id,migrationOperator:m.operator,migrationAt:m.completedAt}:ledger.settlements[r.id]?{...r,...ledger.settlements[r.id]}:{...r}});
  function commit({baseOrders,ids,form,fixture,today,operator,windowName,source='售票窗口',storage=localStorage,now=new Date(),confirmedMismatch=false,expectedAmounts}){
    const ledger=readLedger(storage),orders=apply(baseOrders,ledger),check=validate({orders,ids,form,fixture,today,expectedAmounts,storage});
    if(check.error)throw new Error(check.error);
    if(check.mismatch&&!confirmedMismatch)throw new Error('请先确认已选订单均属于同一客户');
    const stamp=now.toISOString(),token=String(now.getTime())+'-'+Math.random().toString(36).slice(2,7),id='RGW'+token;
    const resource=check.resource?{id:check.resource.id,name:check.resource.name,terminal:terminal(check.resource)}:null;
    const receipt={id,amount:check.due,total:check.total,income:check.income,method:check.payment.name,code:form.code,resource,terminal:resource?.terminal||'—',paid:form.date,paidAt:form.date+' 00:00:00',operator,windowName,source:'售票窗口',applicant:operator,createdAt:stamp,completedAt:stamp,payer:form.payer||'',note:form.note||'',owners:[...new Set(check.chosen.map(r=>r.owner))],orders:check.chosen.map(r=>({id:r.id,settled:r.amount-r.refunded,customer:r.customer,owner:r.owner,cashier:r.cashier})),mismatchConfirmation:check.mismatch?{operator,at:stamp}:null,incomeId:check.income?'QTSR'+token:null,cash:form.code==='CASH'?money(form.cash):null,change:check.change};
    receipt.source=source;receipt.fundingSources=check.fundingSources||[];receipt.fundingMethod=form.code==='UNCLAIMED'?'待认领账户':receipt.method;const next=clone(ledger);next.receipts.push(receipt);next.accountDelta+=check.due;
    for(const r of check.chosen)next.settlements[r.id]={state:'paid',settled:r.amount-r.refunded,receipt:id,operator,source:'售票窗口',paid:form.date,paymentMethod:receipt.method,terminal:receipt.terminal,resource,windowName};
    for(const r of check.chosen)next.settlements[r.id].source=source;
    if(check.income)next.incomes.push({id:receipt.incomeId,receipt:id,amount:check.income,owner:'—',operator,windowName,paid:form.date,method:receipt.method,resource,terminal:receipt.terminal});
    next.journals.push({receipt:id,operation:'充值',account:'挂帐',amount:check.due,paid:form.date});
    if(check.income)next.journals.push({receipt:id,operation:'其他收入',account:null,amount:check.income,paid:form.date});
    // 单键一次写入，写失败不更新界面状态；仅模拟原子结果，不代表后端事务已实现。
    if(form.code==='UNCLAIMED')window.SupplementUnclaimed.consume({form,storage,repayment:{receipt,incomes:next.incomes.filter(r=>r.receipt===id),journals:next.journals.filter(r=>r.receipt===id),settlements:Object.fromEntries(ids.map(id=>[id,next.settlements[id]])),accountDelta:check.due}});
    else{storage.setItem(key,JSON.stringify(next));if(storage===window.localStorage)window.dispatchEvent(new Event('supplement:repayment'));}
    return{ledger:next,orders:apply(baseOrders,next),receipt};
  }
  window.SupplementRepaymentModel={key,money,candidates,resourceState,terminal,validate,readLedger,apply,commit};
})();
