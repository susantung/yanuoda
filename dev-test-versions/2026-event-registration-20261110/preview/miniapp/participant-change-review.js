/* Review controls outside the visitor phone; no real identity or WeChat sharing. */
const v12Review=document.createElement('section');v12Review.className='control-group';
v12Review.innerHTML='<h3>V1.2 · 换人重新签署</h3><p>暂存成功后，姓名变化使该人旧签名和旧分享失效。</p><button type="button" data-v12="start">打开换人示例</button> <button type="button" data-v12="owner">返回主报人编辑</button> <button type="button" data-v12="old">打开上次分享（旧接收者）</button><p role="status" id="v12-review-status">仅本地模拟，不发送微信或操作真实报名。</p>';
const v12Embedded=new URLSearchParams(location.search).get('v12-embedded')==='1';
if(v12Embedded)document.querySelector('.controls').append(v12Review);
let v12ReviewShare=null;
const originalV12Share=openSharedPreview;
openSharedPreview=function(person){originalV12Share(person);if(v12LastShare){v12ReviewShare={...v12LastShare,context:JSON.parse(JSON.stringify(formContext)),values:JSON.parse(JSON.stringify(formValues)),fields:JSON.parse(JSON.stringify(formFields)),notice:document.querySelector('#notice-demo').value};}};
function v12ReturnOwner(){
 if(!formContext)return;
 if(readerContext)closeReader();
 sharedViewerContext=null;sharedView.hidden=true;sharedBack.hidden=true;signatureView.hidden=true;signatureBack.hidden=true;readerPhone.classList.remove('is-signing');formView.hidden=false;formBack.hidden=false;readerMain.hidden=true;readerNav.textContent='填写参赛资料';updateSignatureEntries();
}
v12Review.addEventListener('click',async e=>{
 const action=e.target.closest('[data-v12]')?.dataset.v12;if(!action)return;
 const status=v12Review.querySelector('#v12-review-status');
 if(action==='start'){
  v12ReviewShare=null;v12LastShare=null;v12SigningContext=null;
  v12ReturnOwner();activeRecord=null;document.querySelector('#template-demo').value='standard';
  openRegistration(projects[0],projects[0].options[0],2);formStorageKey='event-registration-v12-review';activeRecord=null;
  formValues=[{name:'张三',phone:'13800000001',identity:'110101199001010000'},{name:'李四',phone:'13800000002',identity:'110101199002020000'}];
  formSignatureRecords=[];formSignedNames=[];formSavedSnapshot=null;renderRegistration();
  document.querySelector('#draft-demo').value='normal';await saveRegistrationDraft();
  status.textContent='示例已暂存。可先签署／分享，再返回主报人改姓名、暂存，最后打开旧分享检查失效。';
 }
 if(action==='conflict'){showV12Conflict();status.textContent='模拟：同一参赛者已由A微信签署绑定，B微信打开时显示冲突提示。不会覆盖原绑定。';}
 if(action==='owner'){v12ReturnOwner();status.textContent='主报人修改资料后须点击暂存；未保存或保存失败不作废原签名、原分享。';}
 if(action==='old'){if(!v12ReviewShare){status.textContent='请先在手机内点击某人的“分享签署”，建立旧分享示例。';return;}if(readerContext)closeReader();sharedViewerContext=null;v12SigningContext=null;formView.hidden=true;formBack.hidden=true;sharedView.hidden=true;sharedBack.hidden=true;signatureView.hidden=true;signatureBack.hidden=true;readerPhone.classList.remove('is-signing');if(!validV12Share(v12ReviewShare))showV12Expired(v12ReviewShare);else openReader(v12ReviewShare.context.project,v12ReviewShare.context.option,v12ReviewShare.context.people,v12ReviewShare);}
});
if(v12Embedded)v12Review.querySelector('[data-v12="start"]').click();

if(v12Embedded){
 const style=document.createElement('style');style.textContent='body{display:block!important;padding:0!important;margin:0!important;height:100dvh!important;overflow:hidden!important;background:#f5f6fb!important}body>.review,body>.outcome,body>.foot{display:none!important}body>.stage{display:block!important;padding:0!important;margin:0!important;width:100%!important;height:100dvh!important;overflow:hidden!important}.phone{width:100%!important;max-width:none!important;height:100dvh!important;max-height:none!important;margin:0!important;border:0!important;border-radius:0!important;box-shadow:none!important;display:flex!important;flex-direction:column!important}.phone>.main{flex:1;min-height:0;overflow:auto}.phone>.nav{flex:none}';document.head.append(style);
 window.addEventListener('message',event=>{if(event.source!==parent||event.data?.type!=='event-v12-review')return;const action=event.data.action;if(action==='conflict'){showV12Conflict();v12Review.querySelector('#v12-review-status').textContent='模拟：该参赛者已由其他微信完成签署，当前微信无法覆盖绑定。';}if(['start','owner','old'].includes(action))v12Review.querySelector('[data-v12="'+action+'"]').click();if(action==='save-mode')document.querySelector('#draft-demo').value=event.data.fail?'fail':'normal';});
 const observer=new MutationObserver(()=>parent.postMessage({type:'event-v12-status',text:v12Review.querySelector('#v12-review-status').textContent},'*'));observer.observe(v12Review.querySelector('#v12-review-status'),{childList:true,subtree:true,characterData:true});
}
