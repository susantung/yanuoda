/* V1.2 local prototype only: revisions simulate revoking links/account grants. */
let v12SigningContext=null,v12LastShare=null;
function v12Revisions(key){try{return JSON.parse(localStorage.getItem(key+':person-revisions')||'[]');}catch{return [];}}
function v12Revision(key,person){return v12Revisions(key)[person]||0;}
function saveV12Draft(key,snapshot){
 const keys=[key,key+':signatures',key+':person-revisions'],before=keys.map(k=>localStorage.getItem(k));
 const previous=JSON.parse(before[0]||'[]'),next=JSON.parse(snapshot),revisions=v12Revisions(key),records=formSignatureRecords.slice();
 const changed=[];
 next.forEach((person,i)=>{if(previous[i]&&previous[i].name!==person.name){changed.push(i);records[i]=null;revisions[i]=(revisions[i]||0)+1;}});
 try{localStorage.setItem(keys[0],snapshot);localStorage.setItem(keys[1],JSON.stringify(records));localStorage.setItem(keys[2],JSON.stringify(revisions));}
 catch(error){keys.forEach((k,i)=>{try{before[i]===null?localStorage.removeItem(k):localStorage.setItem(k,before[i]);}catch{}});throw error;}
 formSignatureRecords=records;formSignedNames=next.map((p,i)=>records[i]?.name===p.name?p.name:null);
 if(changed.length)outcome.textContent='V1.2：第'+changed.map(i=>i+1).join('、')+'位参赛者资料已保存；对应旧签名、全部旧分享与旧账号关联已在本地模拟失效。其他人员保留，请重新分享签署。真实服务端权限撤销尚未接入。';
}
function createV12Share(person){const key=formKey();const grant={key,person,revision:v12Revision(key,person)};v12LastShare=grant;return grant;}
function validV12Share(snapshot){return !snapshot?.key||snapshot.revision===v12Revision(snapshot.key,snapshot.person);}
function validV12Signing(){return v12SigningContext&&v12SigningContext.revision===v12Revision(v12SigningContext.key,v12SigningContext.person)&&(!sharedViewerContext||validV12Share(sharedViewerContext));}
function showV12Expired(snapshot){
 sharedViewerContext=null;signatureView.hidden=true;signatureBack.hidden=true;readerPhone.classList.remove('is-signing');
 formView.hidden=true;formBack.hidden=true;readerView.hidden=true;readerMain.hidden=true;backReading.hidden=true;sharedBack.hidden=true;sharedView.hidden=false;
 readerNav.textContent='参赛资料';sharedView.innerHTML='<section class="invite-expired" role="status" aria-labelledby="invite-expired-title"><div class="invite-expired-art" aria-hidden="true"><svg viewBox="0 0 128 128" fill="none"><circle cx="64" cy="64" r="58" fill="var(--brand-soft)"/><circle cx="108" cy="22" r="4" fill="var(--brand)" opacity=".22"/><circle cx="18" cy="95" r="3" fill="var(--brand)" opacity=".25"/><rect x="35" y="23" width="59" height="78" rx="11" fill="white" stroke="var(--brand)" stroke-width="2"/><path d="M48 43h31M48 55h23M48 67h15" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" opacity=".35"/><circle cx="88" cy="89" r="22" fill="var(--brand)"/><path d="M79 87a10 10 0 0 1 17-5m0 0v-7m0 7h-7M97 92a10 10 0 0 1-17 5m0 0v7m0-7h7" stroke="white" stroke-width="2.5" stroke-linecap="round" stroke-linejoin="round"/></svg></div><h2 id="invite-expired-title">这份签署邀请已失效</h2><p class="invite-expired-reason">参赛者姓名已变更</p><p class="invite-expired-next">请联系报名发起人<br>获取新的签署邀请后再来吧</p><div class="invite-expired-tip"><svg width="16" height="16" viewBox="0 0 20 20" fill="none" aria-hidden="true"><path d="M10 2.5 16 5v4.5c0 3.5-2.5 5.8-6 8-3.5-2.2-6-4.5-6-8V5l6-2.5Z" stroke="currentColor" stroke-width="1.4"/><path d="m7.5 9.8 1.6 1.6 3.4-3.6" stroke="currentColor" stroke-width="1.4" stroke-linecap="round" stroke-linejoin="round"/></svg><span>原邀请已停用，保障参赛者资料安全</span></div></section>';
 outcome.textContent='V1.2旧分享／旧账号入口已失效：不展示参赛资料、签名或签署操作。左侧可返回主报人，重新分享。这里模拟服务端校验结果。';
}
window.addEventListener('storage',e=>{if(e.key?.endsWith(':person-revisions')&&sharedViewerContext&&!validV12Share(sharedViewerContext))showV12Expired(sharedViewerContext);});

// Dedicated review state: another WeChat account already signed and bound.
function showV12Conflict(){
 if(readerContext)closeReader();
 showV12Expired(null);
 sharedView.querySelector('#invite-expired-title').textContent='该参赛者已完成签署';
 sharedView.querySelector('.invite-expired-reason').textContent='已由其他微信完成签署';
 sharedView.querySelector('.invite-expired-next').innerHTML='请联系报名发起人确认';
 sharedView.querySelector('.invite-expired-tip span').textContent='当前微信无法继续查看或签署';
 sharedView.querySelector('.invite-expired-art').innerHTML='<svg viewBox="0 0 128 128" fill="none"><circle cx="64" cy="64" r="58" fill="var(--brand-soft)"/><rect x="35" y="23" width="59" height="78" rx="11" fill="white" stroke="var(--brand)" stroke-width="2"/><path d="M48 43h31M48 55h23M48 67h15" stroke="var(--brand)" stroke-width="3" stroke-linecap="round" opacity=".35"/><circle cx="88" cy="89" r="22" fill="var(--brand)"/><path d="m78 89 7 7 13-14" stroke="white" stroke-width="3" stroke-linecap="round" stroke-linejoin="round"/></svg>';
 outcome.textContent='V1.2其他微信已签署的冲突状态，仅展示提示，不显示整组资料、签名或确认按钮。模拟服务端拒绝覆盖绑定，未接真实微信绑定服务。';
}
