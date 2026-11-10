/* V11-13: screenshot-led local simulation. No real refund, inventory or order service. */
const refundPreview=document.createElement('div');refundPreview.className='refund-review';
refundPreview.innerHTML=`<strong>V1.1 退款演示（仅审阅区）</strong><label>原票规则<select id="refund-rule"><option value="unused">未消费均可退（含过期）</option><option value="valid">未消费且有效期内可退</option><option value="never">不可退</option></select></label><label>原订单状态<select id="refund-used"><option value="unused">未检票</option><option value="used">已检票</option><option value="expired">已过票有效期，未检票</option></select></label><label>关联赛事<select id="refund-linked"><option value="yes">是</option><option value="no">否（原规则）</option></select></label><label>赛事退款截止时间<input id="refund-cutoff" type="datetime-local" step="3600" value="2026-12-20T18:00"></label><label>模拟服务端时间<input id="refund-now" type="datetime-local" value="2026-11-10T20:47"></label><label>退款来源<select id="refund-source"><option value="visitor">游客申请</option><option value="admin">全域后台退款</option><option value="ticket">票务系统强制退款（含已检票）</option></select></label><label>原票退改审核<select id="refund-audit"><option value="yes">需要审核</option><option value="no">不需要审核</option></select></label><div class="refund-review-actions"><button data-refund-demo>预览已支付订单</button><button data-refund-result="success">模拟退款实际成功</button><button data-refund-result="failed">模拟审核拒绝／退款失败</button><button data-refund-reapply>返回我的报名（查看取消状态）</button><button data-refund-orders>查看原订单列表演示</button></div><p id="refund-facts" role="status"></p><p>时间、审核结果及重报入口为审阅控件，不属于游客页面；实际退款成功变已取消，保留旧退款单，继续报名重新校验。二维码为演示码，不能核销。</p>`;
document.querySelector('.review').append(refundPreview);
let refundDemoRecord=null;let refundViewingHistory=false;
const refundOrderHistory=[];
function refundRecord(){return activeRecord||refundDemoRecord;}
function refundOrder(r=refundRecord()){
 if(!r)return null;
 if(!r.refundOrder)r.refundOrder={id:'DEMO-'+r.id+'-01',amount:Number(r.option.price||500),status:r.status==='payment'?'pending':'paid',people:r.people,releaseCount:0};
 return r.refundOrder;
}
function refundInfo(){
 const r=refundRecord(),o=refundOrder(r);if(!o)return;
 document.querySelector('#refund-facts').textContent=`当前关联：${o.id}；订单：${{paid:'已支付',review:'待审核',processing:'退款中',success:'全额退款成功',failed:'审核拒绝／退款失败',pending:'待付款'}[o.status]}；本份项目名额占用：${o.status==='success'?0:o.people}人；该订单累计释放：${o.releaseCount}人。历史订单保留${refundOrderHistory.length}条（仅本次演示）。`;
}
function refundAllowed(){
 const rule=document.querySelector('#refund-rule').value,used=document.querySelector('#refund-used').value;
 if(rule==='never'||used==='used'||(rule==='valid'&&used==='expired'))return false;
 if(document.querySelector('#refund-linked').value==='no')return true;
 const cutoff=document.querySelector('#refund-cutoff').value,now=document.querySelector('#refund-now').value;
 return !cutoff||!!now&&now<cutoff;
}
function refundQr(){
 let cells='';for(let y=0;y<21;y++)for(let x=0;x<21;x++){const eye=[[0,0],[14,0],[0,14]].find(([a,b])=>x>=a&&x<a+7&&y>=b&&y<b+7);const on=eye?(()=>{const a=x-eye[0],b=y-eye[1];return a===0||b===0||a===6||b===6||(a>=2&&a<=4&&b>=2&&b<=4);})():((x*11+y*7+x*y)%5<2);if(on)cells+=`<rect x="${x+2}" y="${y+2}" width="1" height="1"/>`;}
 return `<svg viewBox="0 0 25 25" role="img" aria-label="演示二维码，不可核销">${cells}<rect x="4" y="10" width="17" height="5" fill="white"/><text x="12.5" y="13.5" text-anchor="middle" font-size="2.7" fill="#666">演示码</text></svg>`;
}
function refundProduct(){const c=submissionSnapshot.context;return `<section class="original-product"><img src="assets/original-order-ticket.png" alt="门票商品参考图"><div><h2>${escapeHtml(c.option.ticketName||'【演示】双人实名日历票 01 · 呀诺达景区')}</h2><p>购买数量：×1</p></div></section><div class="original-use-date">使用日期: 2027-01-03 00:00:00–2027.01.03 23:59:00</div><div class="original-nav-row"><button data-refund-nav>导航去景区</button></div>`;}
function refundPrice(){return `<section class="original-price"><h2>价格明细</h2><dl><div><dt>订单总价</dt><dd>¥${demoAmount()}</dd></div><div><dt>实付金额</dt><dd>¥${demoAmount()}</dd></div></dl></section>`;}
function bindRefundNavigation(){transactionView.querySelector('[data-refund-nav]')?.addEventListener('click',()=>outcome.textContent='保留原导航入口，仅展示，不调用地图。');}
showPaidOrderPreview=function(){
 if(!submissionSnapshot||submissionSnapshot.context.free)return;
 if(!refundRecord())refundDemoRecord={id:'refund-paid-preview',project:submissionSnapshot.context.project,option:submissionSnapshot.context.option,people:submissionSnapshot.context.people};
 const o=refundOrder();if(o.status==='pending'){showPendingOrder();return;}
 transactionPage='order';showTransaction('订单详情');readerPhone.classList.add('is-original-order');transactionView.classList.add('original-order');
 const pending=['review','processing'].includes(o.status),refunded=o.status==='success',person=submissionSnapshot.participants[0]||{};
 transactionView.innerHTML=`<div class="transaction-scroll original-order-scroll"><section class="original-status"><h2>${refunded?'已关闭':pending?(o.status==='review'?'退款审核中':'退款中'):'待使用'}</h2>${refunded?'<p>退款成功</p>':''}</section><div class="original-content"><div class="original-phone-row"><span>预留手机号</span><span>${escapeHtml(person.phone||'—')}</span></div>${refundProduct()}${refundPrice()}<section class="refund-code-section"><div class="refund-code-heading"><h2>核验码</h2><span>可用${pending||refunded?'0':'1'}张</span></div><p class="refund-code-note">ⓘ 为保障您的权益，请不要在核销前透露给别人</p><div class="refund-code ${pending||refunded?'inactive':''}">${refundQr()}${pending||refunded?`<span class="refund-stamp">${refunded?'退款成功':o.status==='review'?'审核中':'退款中'}</span>`:''}</div><div class="refund-code-hint">使用日期内可使用1次</div><div class="refund-code-facts">核销码：DEMO-不可核销<br>游客1：${escapeHtml(person.name||'张三')}<br>证件信息：${escapeHtml((person.identity||'110101199001010000').slice(0,6)+'********'+(person.identity||'110101199001010000').slice(-4))}</div></section><section class="refund-code-section"><h2>核验码明细</h2><table class="refund-table"><thead><tr><th>核销码</th><th>用户信息</th><th>实付</th></tr></thead><tbody><tr><td>DEMO<br>不可核销</td><td>${escapeHtml(person.name||'张三')}</td><td>¥${demoAmount()}</td></tr></tbody></table></section><section class="refund-code-section refund-order-info"><h2>订单信息</h2><p>订单编号：${escapeHtml(o.id)}</p><p>下单时间：2026-11-10 20:45:25</p><p>支付时间：2026-11-10 20:45:32</p></section></div></div><div class="transaction-actions" ${!refundAllowed()||pending||refunded||refundViewingHistory?'hidden':''}><button data-request-refund>申请退款</button></div>`;
 transactionView.querySelector('[data-request-refund]')?.addEventListener('click',openRefundApplication);bindRefundNavigation();refundInfo();
 outcome.textContent='按IMG_8546—8552还原原订单与售后结构。订单、人员和二维码均为虚构示例；审核中沿原订单展示示意，项目名额仍占用，实际全额退款成功才释放。';
};
function openRefundApplication(){
 if(!refundAllowed()){showPaidOrderPreview();outcome.textContent='已重新校验：当前不满足退款条件。';return;}
 transactionPage='refund-application';showTransaction('售后详情');readerPhone.classList.add('is-original-order');transactionView.classList.add('original-order');
 const person=submissionSnapshot.participants[0]||{};
 transactionView.innerHTML=`<div class="transaction-scroll refund-application-scroll"><div class="refund-steps"><div class="active"><b>1</b>提交申请</div><i></i><div><b>2</b>景区确认</div><i></i><div><b>3</b>退款成功</div></div><section class="refund-card">${refundProduct()}</section><section class="refund-card">${refundPrice()}</section><section class="refund-card"><div class="refund-code-heading"><h2>申请退款</h2><span>1张可退</span></div><table class="refund-table"><thead><tr><th>核销码</th><th>用户信息</th><th>状态</th></tr></thead><tbody><tr><td>DEMO<br>不可核销</td><td>${escapeHtml(person.name||'张三')}</td><td><input type="checkbox" checked disabled aria-label="整单全额退款，固定选中"></td></tr></tbody></table><p class="refund-total"><span>申请退1张</span><span>可退金额 <b>¥${demoAmount()}</b></span></p></section><section class="refund-card refund-reasons"><h2>申请原因</h2>${['行程取消变更','预订错误','价格不优惠','其他'].map((x,i)=>`<label>${x}<input type="radio" name="refund-reason" value="${x}" ${i===3?'checked':''}></label>`).join('')}</section><section class="refund-card"><h2><label for="refund-note">申请说明</label></h2><textarea id="refund-note" placeholder="请输入申请说明"></textarea><p class="refund-error" role="alert"></p></section></div><div class="transaction-actions"><button data-refund-back>取消申请</button><button data-refund-submit>申请退款</button></div>`;
 transactionView.querySelector('[data-refund-back]').onclick=showPaidOrderPreview;
 transactionView.querySelector('[data-refund-submit]').onclick=()=>{
  const o=refundOrder();if(!refundAllowed()||!['paid','failed'].includes(o.status)){transactionView.querySelector('.refund-error').textContent='当前不满足退款条件，请返回订单查看。';return;}
  o.status=document.querySelector('#refund-audit').value==='yes'?'review':'processing';showPaidOrderPreview();
 };
 bindRefundNavigation();outcome.textContent='截图对应的售后申请页：固定整单全额，不能拆人/改金额；提交重新校验原票规则和赛事时间。无需审核也先展示退款处理中，不把提交当作到账成功。';
}
function startRefundDemo(){
 const r=demoRecords.find(r=>r.status==='success');if(!r)return;refundViewingHistory=false;openDemoRecord(r,'order');refundInfo();
}
refundPreview.querySelector('[data-refund-demo]').onclick=startRefundDemo;
refundPreview.querySelectorAll('[data-refund-result]').forEach(b=>b.onclick=()=>{
 const o=refundOrder(),r=refundRecord(),source=document.querySelector('#refund-source').value;if(!o||!(source!=='visitor'||['review','processing'].includes(o.status))){outcome.textContent='请先在订单申请退款；只有实际模拟成功结果才能释放名额。';return;}
 if(o.status==='success'){refundInfo();outcome.textContent='该订单已退款成功，重复结果不再改变报名或释放名额。';return;}
 o.status=b.dataset.refundResult;
 if(o.status==='success'){if(!o.releaseCount)o.releaseCount=o.people;r.status='cancelled';submissionState='editing';formBusy=false;recordReadOnly=isMemberPreview();if(r.id.startsWith('local-draft-'))persistLocalRecord(r);}
 showPaidOrderPreview();refundInfo();
});
refundPreview.querySelector('[data-refund-reapply]').onclick=()=>{returnToRecords()||openRecords();};
const completeBeforeRefund=completeSubmission;
completeSubmission=async function(){
 const r=refundRecord();if(r?.refundOrder?.status==='success'&&!submissionSnapshot.context.free){
  const old=r.refundOrder;refundOrderHistory.push({record:r,order:{...old},snapshot:JSON.parse(JSON.stringify(submissionSnapshot))});
  r.refundOrder={id:'DEMO-'+r.id+'-'+String(refundOrderHistory.length+1).padStart(2,'0'),amount:Number(submissionSnapshot.context.option.price||0),people:r.people,status:'pending',releaseCount:0};r.status='payment';r.submittedAt=null;refundInfo();
 }
 return completeBeforeRefund();
};
const finishBeforeRefund=finishPaymentPreview;
finishPaymentPreview=function(scene){const o=refundOrder();if(o?.status==='pending'&&scene==='success'){o.status='paid';const r=refundRecord();if(r)r.status='success';}return finishBeforeRefund(scene);};
refundPreview.querySelector('[data-refund-orders]').onclick=()=>{
 if(!submissionSnapshot){startRefundDemo();}
 transactionPage='refund-orders';showTransaction('订单列表');readerPhone.classList.add('is-original-order');transactionView.classList.add('original-order');
 const o=refundOrder(),r=refundRecord();const all=[...refundOrderHistory,{record:r,order:o,snapshot:JSON.parse(JSON.stringify(submissionSnapshot))}];
 transactionView.innerHTML='<div class="transaction-scroll refund-application-scroll"><p class="refund-list-title">全部</p>'+all.map((x,i)=>`<section class="refund-card"><div class="refund-code-heading"><span>呀诺达雨林 ›</span><span>${{success:'已关闭 · 退款成功',paid:'待使用',pending:'待付款',review:'审核中',processing:'退款中',failed:'退款未成功'}[x.order.status]}</span></div><p>${escapeHtml(x.record.option.name)}</p><p>订单编号：${escapeHtml(x.order.id)}</p><p>¥${x.order.amount.toFixed(2)}　×1</p><button class="refund-list-order" data-history-order="${i}">查看订单</button></section>`).join('')+'</div>';
 transactionView.querySelectorAll('[data-history-order]').forEach(b=>b.onclick=()=>{
 const entry=all[Number(b.dataset.historyOrder)];const saved=r.refundOrder;r.refundOrder=entry.order;refundViewingHistory=entry.order.id!==saved.id;showPaidOrderPreview();r.refundOrder=saved;refundInfo();
 });outcome.textContent='原“我的订单”列表仅模拟保留新旧订单，解除报名关联不会删除旧订单；非新增游客报名页面。';
};
refundPreview.querySelectorAll('input,select').forEach(e=>e.addEventListener('change',()=>{if(transactionPage==='order'&&!transactionView.hidden)showPaidOrderPreview();refundInfo();}));
document.querySelector('#theme').addEventListener('change',e=>document.documentElement.style.setProperty('--order-theme',{green:'#00b56e',blue:'#1261b0',warm:'#995019'}[e.target.value]));
transactionBack.addEventListener('click',()=>{refundViewingHistory=false;});
if(new URLSearchParams(location.search).get('view')==='refund')startRefundDemo();
