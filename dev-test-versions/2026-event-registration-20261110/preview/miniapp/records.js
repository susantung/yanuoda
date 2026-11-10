/* C09 structure review. Five fictitious initiator-owned records, no account or server reads. */
const recordsView=document.createElement('section');recordsView.className='records-view';recordsView.hidden=true;readerPhone.append(recordsView);
const recordsBack=document.createElement('button');recordsBack.className='reader-back';recordsBack.textContent='‹';recordsBack.setAttribute('aria-label','返回赛事报名');recordsBack.hidden=true;readerPhone.querySelector('.nav').append(recordsBack);
const recordsControls=document.createElement('label');recordsControls.innerHTML='我的报名演示<select id="records-scene"><option value="normal">收费六种状态</option><option value="free">免费报名</option><option value="empty">暂无记录</option><option value="error">加载失败</option></select>';
const recordsPreview=document.createElement('button');recordsPreview.className='review-reset';recordsPreview.textContent='预览我的报名';document.querySelector('.controls').append(recordsControls,recordsPreview);
const recordRoleControl=document.createElement('label');recordRoleControl.innerHTML='查看身份<select id="records-role"><option value="initiator">发起人</option><option value="member">已关联组员（第2位）</option></select>';document.querySelector('.controls').append(recordRoleControl);
function isMemberPreview(){return recordRoleControl.querySelector('select').value==='member';}
const recordStates={incomplete:'资料待完善',signing:'待签署',ready:'待提交',payment:'待付款',success:'报名成功',cancelled:'已取消'};
const sampleParticipants=()=>[{name:'张三',phone:'13800000001',identity:'110101199001010000'},{name:'李四',phone:'13800000002',identity:'110101199002020000'}];
const demoRecords=['incomplete','signing','ready','payment','success'].map((status,i)=>({id:'review-record-'+i,status,project:projects[0],option:projects[0].options[0],people:2,free:false,participants:i===0?[{name:'张三'},{}]:sampleParticipants(),signed:i===1?['张三',null]:i>1?['张三','李四']:[],signatures:[],submittedAt:i>2?'2026-11-10 09:'+(i===3?'20':'30'):null}));
demoRecords.push({...JSON.parse(JSON.stringify(demoRecords[4])),id:'review-refunded',status:'cancelled',refundOrder:{id:'DEMO-REFUNDED-01',amount:500,status:'success',people:2,releaseCount:2}});
const freeDemoRecords=['ready','success'].map((status,i)=>({id:'review-free-'+i,status,project:projects[1],option:projects[1].options[0],people:2,free:true,participants:sampleParticipants(),signed:[],signatures:[],submittedAt:i?'2026-11-10 09:30':null}));
function recordActions(r){
 const choices=isMemberPreview()?[['data','查看资料']]:r.status==='cancelled'?[['continue','继续报名'],['order','查看订单']]:['incomplete','signing','ready'].includes(r.status)?[['continue','继续报名']]:[['data','查看资料'],...(!r.free?[['order','查看订单']]:[]),...(r.status==='success'?[['poster','查看海报']]:[])];
 return choices.map(([action,label])=>`<button class="${action==='continue'?'record-main':''}" data-record="${r.id}" data-record-action="${action}" aria-label="${recordStates[r.status]}：${label}">${label}</button>`).join('');
}
let activeRecord=null,recordReadOnly=false;
function currentRecordPerson(){return isMemberPreview()?1:0;}
let localSavedRecords=[];try{const saved=JSON.parse(localStorage.getItem('event-registration-local-records-v1')||'[]');if(Array.isArray(saved))localSavedRecords=saved.filter(r=>r&&r.id&&r.draftKey&&r.project&&r.option&&Array.isArray(r.participants));}catch{}
function findSavedDraftRecord(key){return localSavedRecords.find(r=>r.draftKey===key);}
function persistLocalRecord(record){const next=localSavedRecords.filter(r=>r.id!==record.id).concat([record]);localStorage.setItem('event-registration-local-records-v1',JSON.stringify(next));localSavedRecords=next;}

function hideRecordSources(){
 const query=document.querySelector('.query-view');if(query)query.hidden=true;
 recordsView.hidden=true;recordsBack.hidden=true;readerMain.hidden=true;readerView.hidden=true;backReading.hidden=true;formView.hidden=true;formBack.hidden=true;signatureView.hidden=true;signatureBack.hidden=true;sharedView.hidden=true;sharedBack.hidden=true;resetPaymentPreview();readerPhone.classList.remove('is-signing');readerPhone.classList.add('is-reading');
}
function openRecords(){
 hideRecordSources();activeRecord=null;recordReadOnly=false;recordsView.hidden=false;recordsBack.hidden=false;readerNav.textContent='我的报名';
 renderRecords();outcome.textContent=isMemberPreview()?'已关联组员权限演示：只展示第2位参赛者已签署的虚构记录，可只读查看整组资料及本人签名；真实登录、UID关联与服务端权限未接入。':'C09发起人虚构记录演示；未接服务器、正式排序分页及真实关联身份权限。';
}
function renderRecords(){
 const scene=document.querySelector('#records-scene').value;
 const eventName=document.querySelector('.event-title').textContent;
 recordsView.innerHTML='<div class="records-scroll"><p class="records-event">'+escapeHtml(eventName)+'</p>'+(['normal','free'].includes(scene)?(scene==='free'?freeDemoRecords:demoRecords).concat(localSavedRecords.filter(r=>!!r.free===(scene==='free'))).filter(r=>!isMemberPreview()||!!r.signed[1]&&r.signed[1]===r.participants[1]?.name).map(r=>{
 const names=r.participants.map((p,i)=>p.name||'第'+(i+1)+'位待填写').join('、');
 return `<section class="record-card"><header><h2>${escapeHtml(r.project.name)}</h2><span class="record-state ${r.status}">${recordStates[r.status]}</span></header>${r.free?'':`<p class="record-option">${escapeHtml(r.option.name)}</p>`}<dl class="record-facts"><div><dt>参赛者</dt><dd>${escapeHtml(names)}（${r.people}人）</dd></div><div><dt>比赛时间</dt><dd>2027-01-03</dd></div>${r.submittedAt?`<div><dt>报名时间</dt><dd>${r.submittedAt}</dd></div>`:''}</dl><div class="record-actions">${recordActions(r)}</div></section>`;
 }).join(''):`<section class="records-empty"><h2>${scene==='empty'?'暂无报名记录':'加载失败'}</h2><p>${scene==='empty'?'你在本赛事还没有报名记录':'报名记录暂时无法加载，请重试'}</p>${scene==='empty'?'':'<button data-records-retry>重新加载</button>'}</section>`)+'</div>';
}
function restoreDemoRecord(r){
 const keep=r;hideRecordSources();
 // openRegistration may read generic C03 drafts; replace with this record's own saved example.
 activeRecord=keep;if(r.template)document.querySelector('#template-demo').value=r.template;openRegistration(r.project,r.option,r.people,r.free);
 formValues=JSON.parse(JSON.stringify(r.participants));formStorageKey=r.draftKey||formStorageKey;formSavedSnapshot=JSON.stringify(formValues);formSignedNames=[...r.signed];formSignatureRecords=JSON.parse(JSON.stringify(r.signatures));renderRegistration();
}
function openDemoRecord(r,destination='continue'){
 if(!r)return;
 restoreDemoRecord(r);recordReadOnly=isMemberPreview();
 if(r.status==='cancelled'){submissionState='editing';formBusy=false;submissionSnapshot=JSON.parse(JSON.stringify({context:formContext,participants:formValues,signatures:formSignatureRecords}));updateSignatureEntries();if(destination==='order')showPaidOrderPreview();}
 else if(['payment','success'].includes(r.status)){
 submissionSnapshot=JSON.parse(JSON.stringify({context:formContext,participants:formValues,signatures:formSignatureRecords}));submissionState=r.status==='success'?(r.free?'free':'complete'):'pending-payment';formBusy=false;updateSignatureEntries();
 if(destination==='data')readerNav.textContent='报名资料';
 else if(destination==='order'&&!r.free){if(r.status==='success')showPaidOrderPreview();else showPendingOrder();}
 else if(r.status==='success')showPaymentSuccess();
 }else if(r.status==='signing')formView.querySelector('.signature-card')?.scrollIntoView({block:'center'});
 if(recordReadOnly){readerNav.textContent='报名资料';updateSignatureEntries();}
 outcome.textContent='从当前示例记录恢复，不新建另一条报名；待签署示例的已签仅模拟进度，不是实际签名。真实角色、草稿读取及订单关联未接入。';
}
function recordDraftSaved(){
 const record=activeRecord?{...activeRecord}:{id:'local-draft-'+Date.now()+'-'+Math.random().toString(36).slice(2,7),project:formContext.project,option:formContext.option,people:formContext.people,free:formContext.free,draftKey:formKey()};
 record.template=document.querySelector('#template-demo').value;record.participants=JSON.parse(JSON.stringify(formValues));record.signed=[...formSignedNames];record.signatures=JSON.parse(JSON.stringify(formSignatureRecords));record.submittedAt=null;
 record.status=activeRecord?.status==='cancelled'?'cancelled':validateRegistration(false)?formContext.project.signature&&formValues.some((v,i)=>formSignedNames[i]!==v.name)?'signing':'ready':'incomplete';
 if(record.id.startsWith('local-draft-'))persistLocalRecord(record);
 if(activeRecord)Object.assign(activeRecord,record);else activeRecord=record;
}
function recordSignatureSaved(){if(!activeRecord)return;activeRecord.signed=[...formSignedNames];activeRecord.signatures=JSON.parse(JSON.stringify(formSignatureRecords));activeRecord.status=activeRecord.status==='cancelled'?'cancelled':formValues.every((v,i)=>formSignedNames[i]===v.name)?'ready':'signing';if(activeRecord.id.startsWith('local-draft-'))persistLocalRecord(activeRecord);}

function returnToRecords(){
 if(!activeRecord)return false;
 const r=activeRecord;
 if(['pending-payment','paying','payment-unknown','complete','free'].includes(submissionState)&&submissionSnapshot){
 r.participants=JSON.parse(JSON.stringify(submissionSnapshot.participants));r.signed=[...formSignedNames];r.signatures=JSON.parse(JSON.stringify(submissionSnapshot.signatures));
 r.status=['complete','free'].includes(submissionState)?'success':'payment';
 if(!r.submittedAt)r.submittedAt=new Intl.DateTimeFormat('sv-SE',{timeZone:'Asia/Shanghai',year:'numeric',month:'2-digit',day:'2-digit',hour:'2-digit',minute:'2-digit',hour12:false}).format(new Date());
 }else if(r.status==='payment'&&submissionState==='editing'){
 r.status='ready';r.submittedAt=null;
 }
 if(r.id.startsWith('local-draft-'))persistLocalRecord(r);
 openRecords();return true;
}
recordsView.addEventListener('click',e=>{const b=e.target.closest('[data-record]');if(b)openDemoRecord([...demoRecords,...freeDemoRecords,...localSavedRecords].find(r=>r.id===b.dataset.record),b.dataset.recordAction);if(e.target.closest('[data-records-retry]')){document.querySelector('#records-scene').value='normal';renderRecords();}});
recordsBack.onclick=()=>{recordsView.hidden=true;recordsBack.hidden=true;readerPhone.classList.remove('is-reading');readerMain.hidden=false;readerNav.textContent='赛事报名';activeRecord=null;};
formBack.addEventListener('click',()=>{if(activeRecord)returnToRecords();});
recordsControls.querySelector('select').onchange=()=>{if(!recordsView.hidden)renderRecords();};recordsPreview.onclick=openRecords;
document.querySelector('#records').onclick=openRecords;
if(new URLSearchParams(location.search).get('view')==='records'){
 const p=new URLSearchParams(location.search);if(['empty','error','free'].includes(p.get('scene')))document.querySelector('#records-scene').value=p.get('scene');openRecords();if(p.get('only')==='1')document.body.classList.add('signature-review');
}

recordRoleControl.querySelector('select').onchange=openRecords;
if(new URLSearchParams(location.search).get('role')==='member'){recordRoleControl.querySelector('select').value='member';openRecords();}
