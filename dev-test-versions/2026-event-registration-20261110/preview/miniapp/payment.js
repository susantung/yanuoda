/* Screenshot-led, clickable payment simulation. Never collects credentials or calls payment services. */
const paymentMask=document.createElement('div');paymentMask.className='payment-mask';paymentMask.hidden=true;readerPhone.append(paymentMask);
const transactionView=document.createElement('section');transactionView.className='transaction-view';transactionView.hidden=true;readerPhone.append(transactionView);
const transactionBack=document.createElement('button');transactionBack.className='reader-back transaction-back';transactionBack.textContent='‹';transactionBack.setAttribute('aria-label','返回报名');transactionBack.hidden=true;readerPhone.querySelector('.nav').append(transactionBack);
let transactionPage='';
function resetPaymentPreview(){paymentMask.hidden=true;transactionView.hidden=true;transactionBack.hidden=true;transactionPage='';formView.inert=false;transactionView.inert=false;readerPhone.classList.remove('is-original-order');}
function demoAmount(){return Number(submissionSnapshot?.context.option.price||0).toFixed(2);}
function showTransaction(title){
 readerPhone.classList.remove('is-original-order');transactionView.classList.remove('original-order');
 paymentMask.hidden=true;formView.hidden=true;formBack.hidden=true;readerMain.hidden=true;readerView.hidden=true;
 readerPhone.classList.add('is-reading');transactionView.hidden=false;transactionBack.hidden=false;readerNav.textContent=title;
}
function openCashierPreview(){
 if(submissionSnapshot?.context.free)return;
 formView.inert=true;transactionView.inert=true;transactionBack.disabled=true;
 paymentMask.className='payment-mask';paymentMask.hidden=false;
 paymentMask.innerHTML=`<section class="cashier" role="dialog" aria-modal="true" aria-label="微信支付模拟收银台"><div class="cashier-top"><button class="cashier-close" aria-label="关闭微信支付">×</button><span>微信支付</span></div><p class="cashier-merchant">呀诺达</p><p class="cashier-amount"><small>¥</small>${demoAmount()}</p><div class="cashier-method-label"><span>付款方式</span><span>更改⌄</span></div><div class="cashier-method"><b>¥</b><span>零钱</span><i>✓</i></div><button class="cashier-confirm">确认支付</button></section>`;
 paymentMask.querySelector('.cashier-close').onclick=()=>finishPaymentPreview('cancel');
 paymentMask.querySelector('.cashier-confirm').onclick=()=>finishPaymentPreview(document.querySelector('#payment-scene').value);
 paymentMask.querySelector('.cashier-close').focus({preventScroll:true});
 outcome.textContent='微信收银台交互模拟：按提供截图呈现深色弹层；不会调用微信或收集密码。×模拟取消并进入原订单详情；确认支付按审阅区设置返回结果。';
}
function finishPaymentPreview(scene){
 paymentMask.hidden=true;formBusy=false;formView.inert=false;transactionView.inert=false;transactionBack.disabled=false;
 if(scene==='success'){submissionState='complete';updateSignatureEntries();showPaymentSuccess();}
 else if(scene==='cancel'){submissionState='pending-payment';updateSignatureEntries();showPendingOrder();}
 else{submissionState='payment-unknown';updateSignatureEntries();showPendingOrder(true);}
}
function showPendingOrder(unknown=false){
 if(submissionSnapshot?.context.free)return;
 transactionPage='order';showTransaction('订单详情');
 readerPhone.classList.add('is-original-order');transactionView.classList.add('original-order');
 const c=submissionSnapshot.context;
 const ticketName=c.option.ticketName||'【演示】双人实名日历票 01 · 呀诺达景区';
 const phone=submissionSnapshot.participants[0]?.phone||'—';
 transactionView.innerHTML=`<div class="transaction-scroll original-order-scroll"><section class="original-status"><h2>${unknown?'支付结果确认中':'待支付'}</h2>${unknown?'<p>请勿重复支付，正在核实原订单结果</p>':'<div class="original-countdown"><span class="digits" aria-label="倒计时示例09分49秒"><b>0</b><b>9</b> : <b>4</b><b>9</b></span><span class="countdown-copy">后超时 重新预订可能涨价</span></div>'}<span class="original-qr-decoration" aria-hidden="true"><i></i><i></i><i></i></span></section><div class="original-content"><div class="original-phone-row"><span>预留手机号</span><span>${escapeHtml(phone)}</span></div><section class="original-product"><img src="assets/original-order-ticket.png" alt="门票商品参考图"><div><h2>${escapeHtml(ticketName)}</h2><p>购买数量：×1</p></div></section><div class="original-use-date">使用日期: 2027-01-03 00:00:00–2027.01.03 23:59:00</div><div class="original-nav-row"><button data-scenic-nav>导航去景区</button></div><section class="original-price"><h2>价格明细</h2><dl><div><dt>订单总价</dt><dd>¥${demoAmount()}</dd></div><div><dt>实付金额</dt><dd>¥${demoAmount()}</dd></div></dl></section><section class="original-rules"><h2>消费规则</h2><table><tbody><tr><th>入园次数</th><td>使用日期内可使用1次</td></tr><tr><th>使用日期</th><td>下单选择日期当日可使用</td></tr><tr><th>消费说明</th><td><p>（1）请出示订单二维码核销体验。入园检票地址：游客中心内踏瀑戏水检票口。（2）⚠️温馨提示：建议出游前关注项目开放情况（客服热线：4000463888/0898-83883333），如遇阵降雨、当日大雨导致水位上涨，超过警戒线的情况，为保障安全，景区将会临时暂停漂流项目。</p></td></tr></tbody></table></section></div></div><div class="transaction-actions">${unknown?'':`<button data-cancel-order>取消订单</button><button class="primary" data-repay>立即支付</button>`}</div>`;
 transactionView.querySelector('[data-repay]')?.addEventListener('click',()=>{submissionState='paying';formBusy=true;openCashierPreview();});
 transactionView.querySelector('[data-cancel-order]')?.addEventListener('click',confirmCancelOrder);
 transactionView.querySelector('[data-scenic-nav]').onclick=()=>outcome.textContent='原截图的导航入口保留，仅演示位置，未调用定位或地图。';
 outcome.textContent='按IMG_8541原订单截图还原布局；手机号、金额、票名使用当前关联订单示例，图片及消费说明沿参考图。09:49仅静态倒计时示例，不倒数、不触发取消、不定义业务超时时长。未连接真实订单或地图。';
}
function showPaidOrderPreview(){
 if(submissionSnapshot?.context.free)return;
 showPendingOrder();
 transactionView.querySelector('.original-status').innerHTML='<h2>已支付</h2><p>核销请出示原订单二维码</p>';
 transactionView.querySelector('.transaction-actions').hidden=true;
 const qr=document.createElement('section');qr.className='transaction-card';qr.innerHTML='<h2>订单二维码</h2><div style="width:144px;height:144px;margin:16px auto;border:1px dashed #b9c2cb;display:grid;place-items:center;color:#687078;text-align:center">原订单二维码<br>占位示意</div>';
 transactionView.querySelector('.original-content').prepend(qr);
 outcome.textContent='已支付原订单的跳转承载模拟，非原订单改造稿；二维码仅占位，真实二维码必须由原订单返回，本原型不生成核销码。';
}
function confirmCancelOrder(){
 paymentMask.className='payment-mask dialog-mask';paymentMask.hidden=false;
 paymentMask.innerHTML='<section class="cancel-dialog" role="dialog" aria-modal="true" aria-label="取消订单确认"><h2>确认取消订单？</h2><p>取消后，报名恢复为未提交，保留资料与有效签署。</p><div class="transaction-actions"><button data-keep>暂不取消</button><button class="primary" data-close-order>确认取消</button></div></section>';
 paymentMask.querySelector('[data-keep]').onclick=()=>paymentMask.hidden=true;
 paymentMask.querySelector('[data-close-order]').onclick=()=>{paymentMask.hidden=true;transactionView.hidden=true;transactionBack.hidden=true;readerPhone.classList.remove('is-original-order');submissionState='editing';if(typeof activeRecord!=='undefined'&&activeRecord){activeRecord.status='ready';activeRecord.submittedAt=null;activeRecord.refundOrder=null;}formBusy=false;formView.hidden=false;formBack.hidden=false;readerNav.textContent='报名资料';updateSignatureEntries();formMessage('订单已取消，可继续完善报名');outcome.textContent='模拟原订单明确取消后的回退，资料与有效签署保留；真实重新提交仍需校验当时窗口、库存和资格。';};
}
function showPaymentSuccess(){
 formMessage('');
 transactionPage='success';showTransaction('报名成功');
 transactionView.innerHTML='<div class="transaction-scroll success-poster-scroll"><img class="poster-reference" src="assets/success-poster-reference.jpg" alt="报名成功海报参考样式"></div><div class="transaction-actions poster-actions"><a href="assets/success-poster-reference.jpg" download="报名成功海报-参考演示.jpg">保存海报</a><button class="primary" data-poster-share>分享海报</button></div>';
 transactionView.querySelector('[data-poster-share]').onclick=openPosterSharePreview;
 outcome.textContent='支付成功后直接展示成功海报，不再经过成功卡片或查看海报按钮。当前使用用户提供的海报参考图演示承载；不是本场正式海报，本场底图、动态姓名及项目替换、生成保存仍未接入。';
}
function openPosterSharePreview(){
 paymentMask.className='payment-mask poster-share-mask';paymentMask.hidden=false;transactionView.inert=true;
 const icon=(body)=>'<svg viewBox="0 0 32 32" fill="none" aria-hidden="true">'+body+'</svg>';
 const friend=icon('<path d="M20 19c5 0 9-3.1 9-7s-4-7-9-7-9 3.1-9 7 4 7 9 7Z" fill="currentColor"/><path d="m24 18 3 4-1-6" fill="currentColor"/><path d="M11 27c5 0 9-3.1 9-7s-4-7-9-7-9 3.1-9 7 4 7 9 7Z" fill="currentColor" stroke="white" stroke-width="1.5"/><path d="m6 25-2 4 6-3" fill="currentColor"/><circle cx="8" cy="20" r="1.2" fill="white"/><circle cx="14" cy="20" r="1.2" fill="white"/><circle cx="17" cy="11" r="1.2" fill="white"/><circle cx="23" cy="11" r="1.2" fill="white"/>');
 const timeline=icon('<g stroke="currentColor" stroke-width="3" stroke-linecap="round"><path d="M16 3v6m0 14v6M3 16h6m14 0h6M7 7l4 4m10 10 4 4M7 25l4-4m10-10 4-4"/></g><circle cx="16" cy="16" r="5" stroke="currentColor" stroke-width="3"/>');
 const save=icon('<path d="M16 4v16m-6-6 6 6 6-6M6 22v6h20v-6" stroke="currentColor" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/>');
 paymentMask.innerHTML='<section class="poster-share" role="dialog" aria-modal="true" aria-label="海报分享"><div class="poster-share-handle" aria-hidden="true"></div><h2>分享海报</h2><div class="poster-share-options"><button data-share-target="friend"><span class="poster-share-icon friend">'+friend+'</span><span>发送给朋友</span></button><button data-share-target="timeline"><span class="poster-share-icon timeline">'+timeline+'</span><span>分享到朋友圈</span></button><a href="assets/success-poster-reference.jpg" download="报名成功海报.png"><span class="poster-share-icon save">'+save+'</span><span>保存图片</span></a></div><p class="poster-share-hint" role="status" hidden></p><button data-close-share>取消</button></section>';
 paymentMask.querySelector('[data-share-target="friend"]').onclick=()=>{outcome.textContent='原型模拟：正式小程序调用微信图片分享面板，选择朋友或群聊发送当前完整海报图片；浏览器未发送。';showSharePreviewHint('将在微信中选择朋友或群聊');};
 paymentMask.querySelector('[data-share-target="timeline"]').onclick=()=>{outcome.textContent='原型模拟：微信基础库3.8.2起图片分享面板支持朋友圈；正式端由微信打开朋友圈编辑，不自动发布。低版本提供保存图片路径。';showSharePreviewHint('将在微信中打开朋友圈编辑');};
 const closeShare=()=>{paymentMask.hidden=true;transactionView.inert=false;};
 paymentMask.querySelector('[data-close-share]').onclick=closeShare;
 paymentMask.onclick=e=>{if(e.target===paymentMask)closeShare();};
 outcome.textContent='微信图片分享面板结构示意：发送给朋友、分享到朋友圈、保存图片。真实微信面板外观由客户端决定，当前浏览器未调用微信能力。';
}
function showSharePreviewHint(text){const hint=paymentMask.querySelector('.poster-share-hint');hint.hidden=false;hint.textContent=text;}

transactionBack.onclick=()=>{
 readerPhone.classList.remove('is-original-order');
 if(typeof returnToRecords==='function'&&returnToRecords())return;
 transactionView.hidden=true;transactionBack.hidden=true;formView.hidden=false;formBack.hidden=false;readerNav.textContent='报名资料';
 formMessage('');applySubmissionLock();
};
