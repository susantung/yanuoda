/* 本地原型：查询与数据同步共用同一个条件判断，避免刷新绕过筛选。 */
(() => {
  const text=v=>String(v??'').trim();
  const contains=(v,q)=>!text(q)||String(v??'').includes(text(q));
  const same=(v,q)=>!text(q)||v===q;
  const labels={enterprise:'企业',personal:'个人',temporary:'临时客户',unclaimed:'待认领客户',credit:'挂帐',prepay:'预付款',recharge:'充值',adjust:'调账',transferAdjust:'调账-往来',unclaimedOut:'调账-认领款转出',income:'其他收入'};
  const label=v=>labels[v]||v;
  const day=v=>String(v??'').slice(0,10);
  const range=(v,a,b)=>(!a||day(v)>=a)&&(!b||day(v)<=b);
  const operation=r=>r.operation||(['挂帐','预付款'].includes(r.rechargeType)?'充值':r.rechargeType);
  const account=r=>r.accountType||(['挂帐','预付款'].includes(r.rechargeType)?r.rechargeType:'-');
  function record(r,q={}){return contains(r.name,q.name)&&contains(r.accountNo,q.accountNo)&&contains(r.recordNo,q.recordNo)&&same(operation(r),label(q.rechargeType))&&same(account(r),label(q.accountType))&&contains(r.applicant,q.applicant)&&contains(r.owner,q.owner)&&contains(r.terminalNo,q.terminalNo)&&same(day(r.repaymentTime),q.paymentDate)&&same(r.status,q.status)}
  function flow(r,q={},tab='all'){const category=tab==='all'||(tab==='adjust'?['adjust','transferAdjust'].includes(r.category):r.category===tab);return category&&same(r.type,label(q.type))&&contains(r.name,q.name)&&contains(r.accountNo,q.accountNo)&&same(r.accountType,label(q.accountType))&&contains(r.documentNo,q.documentNo)&&contains(r.owner,q.owner)&&contains(r.terminalNo,q.terminalNo)&&range(r.time,q.timeStart,q.timeEnd)}
  function balance(r,q={},prepay=false){const min=prepay?q.balanceMin:q.amountMin,max=prepay?q.balanceMax:q.amountMax,n=prepay?r.balance:r.amount;return same(r.type,label(q.type))&&contains(r.name,q.name)&&contains(r.accountNo,q.accountNo)&&same(r.status,q.status)&&(!q.limitStatus||(q.limitStatus==='enabled')===r.limitEnabled)&&(min==null||min===''||n>=Number(min))&&(max==null||max===''||n<=Number(max))}
  const order=(r,q={})=>contains(r.orderNo,q.orderNo)&&contains(r.customerName,q.customerName)&&contains(r.orderTime,q.orderTime)&&contains(r.owner,q.owner);
  const recordTime=r=>!r.repaymentTime||['-','—'].includes(r.repaymentTime)?String(r.finishTime||''):String(r.repaymentTime);
  const newest=rows=>rows.slice().sort((a,b)=>recordTime(b).localeCompare(recordTime(a))||String(b.finishTime||'').localeCompare(String(a.finishTime||''))||String(b.recordNo||'').localeCompare(String(a.recordNo||'')));
  // 资金流水：实际发生时间倒序，同一时间按关联单据完成时间倒序。
  // 只排序展示副本；历史无完成时间的记录不虚构时间，相同键保持原顺序。
  function newestFlows(rows,records=[]){
    const completed=new Map(records.map(r=>[r.recordNo,r.finishTime]));
    const stamp=v=>!v||v==='-'?'':String(v);
    return rows.slice().sort((a,b)=>stamp(b.time).localeCompare(stamp(a.time))||stamp(b.finishTime||completed.get(b.documentNo)).localeCompare(stamp(a.finishTime||completed.get(a.documentNo))));
  }
  window.SupplementQueryRules={record,flow,balance,order,newest,newestFlows,range};
})();
