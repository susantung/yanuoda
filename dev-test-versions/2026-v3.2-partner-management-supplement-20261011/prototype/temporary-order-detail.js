/* 复用R01原详情结构，仅将W05虚构订单装载到既有字段，不改正式订单页面。 */
(() => {
  const id=new URLSearchParams(location.search).get('tempOrder');
  if(!id)return;
  let r=window.SupplementTemporaryOrders.find(x=>x.id===id);
  let migration,ledgerSignature;
  try{const raw=localStorage.getItem('supplement-20261011-w06-ledger-v1');ledgerSignature=raw;const ledger=JSON.parse(raw||'null');if(r&&ledger?.settlements?.[id])r={...r,...ledger.settlements[id]};migration=ledger?.migrations?.find(m=>m.orders.some(o=>o.id===id));if(r&&migration)r={...r,state:'migrated',partner:migration.target.name,accountNo:migration.target.accountNo,owner:migration.target.owner}}catch{document.querySelector('.content').textContent='本地回款记录无法读取，请返回列表核对。';return;}
  if(!r){document.querySelector('.content').textContent='未找到该原型演示订单，请返回回款列表。';return;}
  const values={'订单编号：':r.id,'售票员：':r.cashier,'下单时间：':r.created,'订单金额：':(r.amount/100).toFixed(2)+' 元','支付金额：':(r.amount/100).toFixed(2)+' 元','合作类型：':'临时客户','合作伙伴名称：':r.partner,'合作伙伴账户号：':r.accountNo,'客户名称：':r.customer,'订单对接负责人：':r.owner,'挂帐回款状态：':r.state==='paid'?'已回款':'未回款'};
  if(migration){values['合作类型：']=migration.target.type;values['支付类型：']=migration.target.payType;values['挂帐回款状态：']='—';}
  document.querySelectorAll('.detail-grid .item').forEach(item=>{const label=item.querySelector('span');if(label&&Object.hasOwn(values,label.textContent)){while(label.nextSibling)item.removeChild(label.nextSibling);item.append(document.createTextNode(values[label.textContent]));}});
  document.querySelector('.page-title').textContent='散客订单详情';
  if(migration){const item=(label,value)=>{const div=document.createElement('div');div.className='item';const span=document.createElement('span');span.textContent=label+'：';div.append(span,document.createTextNode(value||'—'));return div};const grid=[...document.querySelectorAll('.detail-grid')].find(g=>g.textContent.includes('合作伙伴名称'));if(grid){grid.append(item('联系人',migration.target.contact),item('联系电话',migration.target.phone));const owner=[...grid.querySelectorAll('.item span')].find(s=>s.textContent==='订单对接负责人：');if(owner)owner.textContent='对接负责人：';}const block=document.createElement('section');block.className='detail-block';const title=document.createElement('div');title.className='detail-title';title.textContent='合作伙伴变更记录';const changes=document.createElement('div');changes.className='detail-grid';const d=new Date(migration.completedAt),p=n=>String(n).padStart(2,'0');const time=`${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`;[['原合作伙伴','公共临时客户'],['现合作伙伴',migration.target.name],['操作人',migration.operator],['变更时间',time]].forEach(([label,value])=>changes.append(item(label,value)));block.append(title,changes);document.querySelector('.content').append(block);}
  const routes={'partner-management.html':'index.html#/', 'partner-accounts.html':'index.html#/partner-account?tab=credit','recharge-application.html':'index.html#/recharge?tab=account','capital-stream.html':'index.html#/flow?tab=all'};
  document.querySelectorAll('a[href]').forEach(a=>{const old=a.getAttribute('href');if(routes[old])a.setAttribute('href',routes[old])});
  const refresh=()=>{if(localStorage.getItem('supplement-20261011-w06-ledger-v1')!==ledgerSignature)location.reload()};window.addEventListener('focus',refresh);window.addEventListener('storage',refresh);
  const style=document.createElement('style');style.textContent='html,body{min-width:1024px}.detail-grid .item{min-width:0;overflow-wrap:anywhere}';document.head.append(style);
})();
