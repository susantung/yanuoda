/* Same-origin prototype bridge only, not a production image or sharing service. */
let configuredPosterImage='';let posterRenderRequest=0;
function showRegistrationSuccessFallback(reason){
 configuredPosterImage='';formMessage('');transactionPage='success';showTransaction('报名成功');
 const p=submissionSnapshot?.context?.project||{},option=submissionSnapshot?.context?.option||{},names=(submissionSnapshot?.participants||[]).map(v=>v.name).filter(Boolean);
 transactionView.innerHTML='<div class="transaction-scroll"><section class="registration-success-fallback"><div class="fallback-success-icon" aria-hidden="true">✓</div><h2>报名成功</h2><p class="fallback-success-caption">可在我的报名中查看报名资料</p><div class="fallback-registration-summary"><h3>'+escapeHtml(p.name||'')+'</h3>'+(option.name?'<p>'+escapeHtml(option.name)+'</p>':'')+(names.length?'<p>参赛者：'+escapeHtml(names.join('、'))+'</p>':'')+'</div><button class="primary" data-success-records>我的报名</button></section></div>';
 transactionView.querySelector('[data-success-records]').onclick=()=>openRecords();
 outcome.textContent='本地成功兜底页：'+reason+'；报名结果不变，不使用其他赛事或固定参考海报，不要求重新提交或支付。';
}
showPaymentSuccess=async function(){
let event,all=[];try{all=JSON.parse(localStorage.getItem('yanoda-event-admin-structure-v1')||'[]');}catch(e){}
const p=submissionSnapshot?.context?.project||{};
event=p.eventId?all.find(e=>e.id===p.eventId):all.find(e=>e.id==='event-yanoda-2027');const eventId=event?.id,scene=document.querySelector('#poster-result-scene')?.value||'normal',config=eventId?EventPoster.load(eventId):null;
if(scene==='missing'||(scene!=='failed'&&(!config||!config.background||!config.nodes?.length))){++posterRenderRequest;showRegistrationSuccessFallback('未配置可用海报');return;}
formMessage('');transactionPage='success';showTransaction('报名成功');const request=++posterRenderRequest;transactionView.innerHTML='<div class="transaction-scroll"><p style="padding:16px">正在生成海报…</p></div>';let date=p.raceDates||['2027-01-03','2027-01-03'];const savedProjects=JSON.parse(localStorage.getItem('yanoda-event-projects-structure-v1')||'[]');const savedProject=savedProjects.find(v=>v.id===p.id)||savedProjects.find(v=>v.eventId===eventId&&v.name===p.name);if(savedProject)date=savedProject.raceDates;
try{if(scene==='failed')throw new Error('demo image failure');configuredPosterImage=await EventPoster.render(config,{names:(submissionSnapshot?.participants||[]).map(v=>v.name).filter(Boolean),project:p.name||'',date:EventPoster.dateText(date),location:event?.location||'',meeting:savedProject?.meetingLocation||'',contact:event?.contactPhone||''});if(request!==posterRenderRequest)return;transactionView.innerHTML='<div class="transaction-scroll success-poster-scroll"><img class="poster-reference" alt="报名成功海报"></div><div class="transaction-actions poster-actions"><a download="报名成功海报.png">保存海报</a><button class="primary" data-poster-share>分享海报</button></div>';transactionView.querySelector('img').src=configuredPosterImage;transactionView.querySelector('a').href=configuredPosterImage;transactionView.querySelector('[data-poster-share]').onclick=openPosterSharePreview;outcome.textContent='本地动态合成海报：读取同源后台已保存的赛事模板和本份报名姓名/项目，非真实服务端生成；相册与微信分享未接入。';}catch(e){if(request!==posterRenderRequest)return;showRegistrationSuccessFallback('海报生成失败');}
};
const referencePosterShare=openPosterSharePreview;
openPosterSharePreview=function(){referencePosterShare();if(configuredPosterImage){paymentMask.querySelector('a').href=configuredPosterImage;paymentMask.querySelector('a').download='报名成功海报.png';outcome.textContent='本地合成海报可下载；微信好友、群聊和朋友圈为分享路径示意，未实际发送或发布。';}};

// Review-only control; never appears inside the visitor phone page.
(function(){const label=document.createElement('label');label.textContent='成功展示 ';const select=document.createElement('select');select.id='poster-result-scene';select.setAttribute('aria-label','成功展示');[['normal','按当前海报配置'],['missing','未配置海报兜底'],['failed','海报生成失败兜底']].forEach(([value,text])=>{const o=document.createElement('option');o.value=value;o.textContent=text;select.append(o);});label.append(select);document.querySelector('.controls').append(label);})();
