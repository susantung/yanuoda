/* C02 local structure prototype. Materials and storage are demonstration only. */
const readerPhone=document.querySelector('.phone');
const readerMain=document.querySelector('.main');
const readerNav=readerPhone.querySelector('.nav strong');
const readerControls=document.createElement('label');
readerControls.innerHTML='C02演示<select id="reader-scene"><option value="normal">正常阅读</option><option value="loaderror">材料加载失败</option><option value="empty">材料清单异常为空</option><option value="saveerror">本次首次保存失败</option></select>';
document.querySelector('.controls').append(readerControls);
const resetReading=document.createElement('button');
resetReading.className='review-reset';resetReading.textContent='重置当前示例阅读进度';
document.querySelector('.controls').append(resetReading);
const readerView=document.createElement('section');
readerView.className='reader-view';readerView.hidden=true;
readerPhone.append(readerView);
const backReading=document.createElement('button');
backReading.className='reader-back';backReading.textContent='‹';backReading.setAttribute('aria-label','返回报名总览');
backReading.hidden=true;readerPhone.querySelector('.nav').append(backReading);
const readerDemoMaterials=[
 {id:'material-1',title:'示例阅读材料一',mode:'none',body:'<p>材料正文待运营配置。</p><p>请完整阅读本份材料，确认后继续下一份。</p>'},
 {id:'material-2',title:'示例阅读材料二',mode:'wait',seconds:3,body:'<p>材料正文待运营配置。</p><p>请完整阅读本份材料后继续。</p>'},
 {id:'material-3',title:'示例阅读材料三',mode:'scroll',body:Array.from({length:12},(_,i)=>'<p>第'+(i+1)+'段材料正文示例。正式内容待配置；请完整阅读本份材料后继续，具体赛事材料以运营提供的正式内容为准。</p>').join('')}
];
let readerContext=null,readerDone=[],readerIndex=0,readerReview=false,readerBusy=false,readerFailedOnce=false,readerError='',readerTimer=null,readerRemaining=0,readerAtBottom=false,readerSession=0;
function readerStorageKey(){return 'event-registration-C02-demo:'+readerContext.project.id+':'+readerContext.option.id+':'+readerContext.people+(readerContext.shared?':shared:'+readerContext.shared.person:'');}
function stopReaderTimer(){clearInterval(readerTimer);readerTimer=null;}
function closeReader(){readerSession++;stopReaderTimer();readerView.hidden=true;backReading.hidden=true;readerMain.hidden=false;readerPhone.classList.remove('is-reading');readerNav.textContent='赛事报名';readerContext=null;}
function readerFirstIncomplete(){return readerDemoMaterials.findIndex(m=>!readerDone.includes(m.id));}
function readerGoForward(){readerReview=false;const index=readerFirstIncomplete();readerIndex=index<0?readerDemoMaterials.length-1:index;renderReader();}
function openReader(project,option,people,shared=null){
 readerSession++;stopReaderTimer();readerContext={project,option,people,shared};readerError='';readerReview=false;readerBusy=false;readerFailedOnce=false;
 try{const saved=JSON.parse(localStorage.getItem(readerStorageKey())||'[]');readerDone=Array.isArray(saved)?saved.filter(id=>readerDemoMaterials.some(m=>m.id===id)):[];}catch{readerDone=[];}
 readerMain.hidden=true;readerView.hidden=false;backReading.hidden=false;readerPhone.classList.add('is-reading');readerNav.textContent='阅读材料';readerGoForward();
 outcome.textContent='C02结构原型：3份材料分别演示不限制、等待3秒、滚动到底。仅在本浏览器保存示例阅读进度，未接后台或创建报名；C03已接入结构原型。';
}
function renderReader(){
 stopReaderTimer();if(!readerContext)return;
 const scene=document.querySelector('#reader-scene').value;
 if(scene==='loaderror'||scene==='empty'){
  readerView.innerHTML='<div class="reader-scroll reader-feedback" role="status"><h2>材料暂时无法加载</h2><p>请重新加载后继续阅读</p><button class="reader-reload">重新加载</button></div>';
  return;
 }
 const material=readerDemoMaterials[readerIndex],allDone=readerFirstIncomplete()<0,alreadyDone=readerDone.includes(material.id);
 readerRemaining=alreadyDone||material.mode!=='wait'?0:material.seconds;readerAtBottom=alreadyDone||material.mode!=='scroll';
 const completed=readerDemoMaterials.filter(m=>readerDone.includes(m.id));
 readerView.innerHTML='<div class="reader-scroll" tabindex="0" aria-label="材料正文滚动区"><div class="reader-context">'+escapeHtml(readerContext.project.name)+'<span>'+escapeHtml(readerContext.option.name)+'</span></div>'+
  '<div class="reader-progress">第'+(readerIndex+1)+'/'+readerDemoMaterials.length+'份'+(alreadyDone?' · 已读':'')+'</div>'+
  (completed.length?'<details class="reader-history"><summary>回看已读材料（'+completed.length+'）</summary>'+completed.map(m=>'<button data-review="'+m.id+'">'+escapeHtml(m.title)+'</button>').join('')+'</details>':'')+
  '<article class="reader-paper"><h2>'+escapeHtml(material.title)+'</h2>'+material.body+'</article></div>'+
  '<footer class="reader-footer"><p class="reader-hint" aria-live="polite"></p><p class="reader-error" role="alert"></p><button class="reader-next" type="button"></button></footer>';
 const scroller=readerView.querySelector('.reader-scroll');
 scroller.addEventListener('scroll',()=>{if(scroller.scrollTop+scroller.clientHeight>=scroller.scrollHeight-3){readerAtBottom=true;updateReaderButton();}});
 readerAtBottom=readerAtBottom||scroller.scrollHeight<=scroller.clientHeight+3;
 updateReaderButton();
 if(readerRemaining>0){readerTimer=setInterval(()=>{if(document.hidden)return;readerRemaining=Math.max(0,readerRemaining-1);updateReaderButton();if(!readerRemaining)stopReaderTimer();},1000);}
 if(allDone&&!readerReview)outcome.textContent='全部材料已读。下一节点为C03填写参赛资料；可继续进入C03结构原型，不显示报名成功、不创建订单。';
}
function updateReaderButton(){
 const button=readerView.querySelector('.reader-next');if(!button)return;
 const material=readerDemoMaterials[readerIndex],allDone=readerFirstIncomplete()<0;
 const allowed=readerReview||readerDone.includes(material.id)||(readerRemaining===0&&readerAtBottom);
 button.disabled=readerBusy||!allowed;
 button.textContent=readerBusy?'正在保存…':readerReview?'返回继续阅读':allDone?(readerContext.shared?'查看参赛资料':'继续填写资料'):readerRemaining>0?'同意并继续（'+readerRemaining+'秒）':'同意并继续';
 readerView.querySelector('.reader-hint').textContent=readerReview?'已读材料，无需重复确认':allDone?'全部材料已完成阅读':readerRemaining>0?'请阅读当前材料':!readerAtBottom?'请阅读至正文底部后继续':'';
 readerView.querySelector('.reader-error').textContent=readerError;
}
async function saveReader(){
 if(readerBusy)return;
 if(readerReview){readerError='';readerGoForward();return;}
 if(readerFirstIncomplete()<0){readerContinueToRegistration();return;}
 if(readerRemaining||!readerAtBottom)return;
 const saveSession=readerSession;readerBusy=true;readerError='';updateReaderButton();
 await new Promise(resolve=>setTimeout(resolve,300));
 if(!readerContext||readerSession!==saveSession)return;
 try{
  if(document.querySelector('#reader-scene').value==='saveerror'&&!readerFailedOnce){readerFailedOnce=true;throw new Error('demo');}
  const next=[...new Set([...readerDone,readerDemoMaterials[readerIndex].id])];
  localStorage.setItem(readerStorageKey(),JSON.stringify(next));readerDone=next;
 }catch{readerBusy=false;readerError='';renderReader();return;}
 readerBusy=false;readerError='';if(readerFirstIncomplete()<0){readerContinueToRegistration();return;}readerGoForward();
}
readerView.addEventListener('click',e=>{
 if(e.target.closest('.reader-next'))saveReader();
 if(e.target.closest('.reader-reload')){document.querySelector('#reader-scene').value='normal';renderReader();}
 const review=e.target.closest('[data-review]');
 if(review&&!readerBusy){readerIndex=readerDemoMaterials.findIndex(m=>m.id===review.dataset.review);readerReview=true;readerError='';renderReader();}
});
backReading.addEventListener('click',closeReader);
document.querySelector('#reader-scene').addEventListener('change',()=>{readerFailedOnce=false;readerError='';if(readerContext)renderReader();});
resetReading.addEventListener('click',()=>{if(!readerContext){outcome.textContent='请先选择需要签署的报名项，再重置当前示例阅读进度。';return;}if(readerBusy)return;try{localStorage.removeItem(readerStorageKey());readerDone=[];readerError='';readerGoForward();}catch{outcome.textContent='本地示例进度无法重置。';}});
new ResizeObserver(()=>{const scroll=readerView.querySelector('.reader-scroll');if(scroll&&scroll.scrollHeight<=scroll.clientHeight+3){readerAtBottom=true;updateReaderButton();}}).observe(readerView);

function readerContinueToRegistration(){const c=readerContext;if(c.shared){closeReader();openSharedRegistration(c.shared);}else openRegistration(c.project,c.option,c.people);}
