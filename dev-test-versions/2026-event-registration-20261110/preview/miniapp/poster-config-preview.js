/* Same-origin prototype bridge only, not a production image or sharing service. */
let configuredPosterImage='';let posterRenderRequest=0;let livePosterState=null;
function canViewCurrentPoster(){return ['free','complete'].includes(submissionState);}
function blockCancelledPoster(){configuredPosterImage='';livePosterState=null;paymentMask.hidden=true;openRecords();outcome.textContent='当前报名未成功或已退款取消，不可查看、保存或分享海报。';}
async function exportCurrentPoster(){if(!canViewCurrentPoster()) {blockCancelledPoster();return '';}if(!livePosterState)return '';configuredPosterImage=await EventPoster.render(livePosterState.config,livePosterState.data);if(!canViewCurrentPoster()){blockCancelledPoster();return '';}return configuredPosterImage;}

function showRegistrationSuccessFallback(reason){
 configuredPosterImage='';formMessage('');transactionPage='success';showTransaction('报名成功');
 const p=submissionSnapshot?.context?.project||{},option=submissionSnapshot?.context?.option||{},names=(submissionSnapshot?.participants||[]).map(v=>v.name).filter(Boolean);
 transactionView.innerHTML='<div class="transaction-scroll"><section class="registration-success-fallback"><div class="fallback-success-icon" aria-hidden="true">✓</div><h2>报名成功</h2><p class="fallback-success-caption">可在我的报名中查看报名资料</p><div class="fallback-registration-summary"><h3>'+escapeHtml(p.name||'')+'</h3>'+(option.name?'<p>'+escapeHtml(option.name)+'</p>':'')+(names.length?'<p>参赛者：'+escapeHtml(names.join('、'))+'</p>':'')+'</div><button class="primary" data-success-records>我的报名</button></section></div>';
 transactionView.querySelector('[data-success-records]').onclick=()=>openRecords();
 outcome.textContent='本地成功兜底页：'+reason+'；报名结果不变，不使用其他赛事或固定参考海报，不要求重新提交或支付。';
}
showPaymentSuccess=async function(){
if(!canViewCurrentPoster()){blockCancelledPoster();return;}
if(activeRecord){activeRecord.status='success';if(activeRecord.id.startsWith('local-draft-'))persistLocalRecord(activeRecord);}

let event,all=[];try{all=JSON.parse(localStorage.getItem('yanoda-event-admin-structure-v1')||'[]');}catch(e){}
const p=submissionSnapshot?.context?.project||{};
event=p.eventId?all.find(e=>e.id===p.eventId):all.find(e=>e.id==='event-yanoda-2027');const eventId=event?.id,scene=document.querySelector('#poster-result-scene')?.value||'normal',config=eventId?EventPoster.load(eventId):null;
if(scene==='missing'||(scene!=='failed'&&(!config||!config.background||!config.nodes?.length))){++posterRenderRequest;showRegistrationSuccessFallback('未配置可用海报');return;}
formMessage('');transactionPage='success';showTransaction('报名成功');const request=++posterRenderRequest;transactionView.innerHTML='<div class="transaction-scroll"><p style="padding:16px">正在加载海报…</p></div>';
let savedProjects=[];try{savedProjects=JSON.parse(localStorage.getItem('yanoda-event-projects-structure-v1')||'[]');}catch{}
const savedProject=savedProjects.find(v=>v.id===p.id)||savedProjects.find(v=>v.eventId===eventId&&v.name===p.name),currentProject=savedProject||p;
const data={names:(submissionSnapshot?.participants||[]).map(v=>v.name).filter(Boolean),project:currentProject.name||'',date:EventPoster.dateText(currentProject.raceDates),location:event?.location||'',meeting:currentProject.meetingLocation||'',contact:event?.contactPhone||''};
try{if(scene==='failed')throw new Error('demo background failure');const poster=await EventPoster.live(config,data);if(request!==posterRenderRequest)return;if(!canViewCurrentPoster()){blockCancelledPoster();return;}configuredPosterImage='';livePosterState={config,data};transactionView.innerHTML='<div class="transaction-scroll success-poster-scroll"></div><div class="transaction-actions poster-actions"><button data-poster-save>保存海报</button><button class="primary" data-poster-share>分享海报</button></div>';transactionView.querySelector('.success-poster-scroll').append(poster);
transactionView.querySelector('[data-poster-save]').onclick=async()=>{try{const url=await exportCurrentPoster();if(!url)return;const a=document.createElement('a');a.href=url;a.download='报名成功海报.png';a.click();outcome.textContent='已临时导出当前海报图片，本地下载不等于真实相册保存。';}catch{outcome.textContent='图片导出失败，可重试；报名结果不变。';}};
transactionView.querySelector('[data-poster-share]').onclick=openPosterSharePreview;outcome.textContent='底图与实时文字按同一比例适配；缺值隐藏、长文换行。保存或分享时才临时导出图片。真实微信服务未接入。';}catch(e){if(request!==posterRenderRequest)return;showRegistrationSuccessFallback('底图加载失败');}
};
const referencePosterShare=openPosterSharePreview;
openPosterSharePreview=async function(){try{const url=await exportCurrentPoster();if(!url)return;referencePosterShare();const a=paymentMask.querySelector('a');if(a){a.href=url;a.download='报名成功海报.png';}outcome.textContent='当前海报临时导出用于分享；原型仅演示微信分享路径，未实际发送或发布。';}catch{outcome.textContent='海报导出失败，请重试；报名结果不变。';}};

// Review-only control; never appears inside the visitor phone page.
(function(){const label=document.createElement('label');label.textContent='成功展示 ';const select=document.createElement('select');select.id='poster-result-scene';select.setAttribute('aria-label','成功展示');[['normal','按当前海报配置'],['missing','未配置海报兜底'],['failed','底图加载失败兜底']].forEach(([value,text])=>{const o=document.createElement('option');o.value=value;o.textContent=text;select.append(o);});label.append(select);document.querySelector('.controls').append(label);})();
