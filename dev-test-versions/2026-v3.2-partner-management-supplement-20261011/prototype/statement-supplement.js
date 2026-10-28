/* B12增补：复用共享账本，只读汇总，不生成充值或转出记录。 */
query=function(){
 const a=el('start').value,b=el('end').value;
 selected=catalog().find(p=>p.id===selected?.id)||null;headers();
 if(!selected||!a||!b||a>b){el('hint').textContent=!selected?'请选择合作伙伴后查询':'请选择有效的统计时间范围';el('hint').classList.add('show');clearRows();return}
 el('hint').classList.remove('show');
 el('reportTitle').textContent='合作伙伴-'+selected.name+'对帐单';
 el('period').textContent=(mode==='day'?'开始日期 ':'开始月份 ')+a+'　'+(mode==='day'?'结束日期 ':'结束月份 ')+b;
 const cents=n=>Math.round(Number(n||0)*100);
 const seen=new Set();
 const shared=window.SupplementRepaymentShared.records().filter(r=>{
   if(r.status!=='success'||r.kind!=='account'||seen.has(r.recordNo))return false;seen.add(r.recordNo);return true;
 }).map(r=>({p:r.accountNo,date:/^\d{4}-\d{2}-\d{2}/.test(r.repaymentTime||'')?r.repaymentTime.slice(0,10):(r.finishTime||'').slice(0,10),operation:r.operation,amount:cents(r.amount)}));
 const records=[...recharges.map(r=>({p:r.p,date:r.date,operation:['挂帐','预付款'].includes(r.type)?'充值':r.type,amount:cents(r.amount)})),...shared].filter(r=>r.p===selected.id);
 const rows=keysBetween(a,b).map(k=>{
   const paid=selected.unclaimed?[]:orders.filter(r=>r.p===selected.id&&inRange(r.date,k,k));
   const refunded=selected.unclaimed?[]:refunds.filter(r=>r.p===selected.id);
   const people=paid.reduce((s,r)=>s+r.tickets,0)-refunded.filter(r=>inRange(r.orderDate,k,k)).reduce((s,r)=>s+r.tickets,0);
   let spend=paid.reduce((s,r)=>s+cents(r.amount),0)-refunded.filter(r=>inRange(r.date,k,k)).reduce((s,r)=>s+cents(r.amount),0);
   if(selected.unclaimed)spend=records.filter(r=>r.operation==='调账-认领款转出'&&inRange(r.date,k,k)).reduce((s,r)=>s+Math.abs(r.amount),0);
   const receipt=records.filter(r=>r.operation==='充值'&&inRange(r.date,k,k)).reduce((s,r)=>s+r.amount,0);
   return{k,people,spend,receipt};
 }).filter(r=>r.people||r.spend||r.receipt);
 // 系统认领转出只进入上方专用列，不再进入底部调账。
 const adj=selected.unclaimed?0:records.filter(r=>['调账','调账-往来'].includes(r.operation)&&inRange(r.date,a,b)).reduce((s,r)=>s+r.amount,0);
 const total=rows.reduce((s,r)=>({people:s.people+r.people,spend:s.spend+r.spend,receipt:s.receipt+r.receipt}),{people:0,spend:0,receipt:0});
 total.spend+=Math.max(-adj,0);total.receipt+=Math.max(adj,0);
 const cell=(v,cls='')=>'<td class="'+cls+'">'+v+'</td>',num=n=>cell(money(n/100),'num');
 let html=rows.map(r=>'<tr>'+cell(r.k)+cell(r.people,'num')+num(r.spend)+num(r.receipt)+cell('')+cell('')+'</tr>').join('');
 if(adj)html+='<tr class="adjust">'+cell('调账')+cell('-')+num(Math.max(-adj,0))+num(Math.max(adj,0))+cell('')+cell('')+'</tr>';
 if(html)el('tbody').innerHTML=html+'<tr class="total">'+cell('合计')+cell(total.people,'num')+num(total.spend)+num(total.receipt)+cell(selected.prepay?money(selected.prepay):'-','num')+cell(selected.credit?money(selected.credit):'-','num')+'</tr>';else clearRows();
 el('printed').textContent=new Date().toLocaleString('zh-CN',{hour12:false}).replaceAll('/','-');
};
el('query').onclick=query;
const resetStatement=reset;
el('reset').onclick=()=>{resetStatement();headers()};
