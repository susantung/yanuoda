/* C03 structure prototype: local, explicit drafts only. No real booking. */
const formControls=document.createElement('label');
formControls.innerHTML='C03须知<select id="notice-demo"><option value="long">长须知</option><option value="short">短须知</option><option value="none">未配置须知</option></select>';
document.querySelector('.controls').append(formControls);
const templateControls=document.createElement('label');
templateControls.innerHTML='资料模板<select id="template-demo"><option value="standard">姓名／手机／身份证</option><option value="name">仅姓名</option><option value="extended">全部字段类型</option></select>';
document.querySelector('.controls').append(templateControls);
const signatureDemoControls=document.createElement('label');
signatureDemoControls.innerHTML='签署进度演示<select id="signature-demo"><option value="pending">未完成</option><option value="partial">部分完成（仅演示）</option><option value="all">全部完成（仅演示）</option></select>';
document.querySelector('.controls').append(signatureDemoControls);
const draftControls=document.createElement('label');
draftControls.innerHTML='暂存演示<select id="draft-demo"><option value="normal">正常保存</option><option value="fail">保存失败</option></select>';
document.querySelector('.controls').append(draftControls);
const formPreview=document.createElement('button');formPreview.className='review-reset';formPreview.textContent='预览需签署资料页';document.querySelector('.controls').append(formPreview);
const formView=document.createElement('section');formView.className='form-view';formView.hidden=true;readerPhone.append(formView);
const formBack=document.createElement('button');formBack.className='reader-back';formBack.textContent='‹';formBack.setAttribute('aria-label','返回报名总览');formBack.hidden=true;readerPhone.querySelector('.nav').append(formBack);
const standardFields=[{key:'name',label:'姓名',kind:'text',required:true,max:50},{key:'phone',label:'联系电话',kind:'tel',required:true},{key:'identity',label:'身份证',kind:'identity',required:true}];
const extraFields=[{key:'text',label:'单行文本示例',kind:'text',max:50},{key:'paragraph',label:'多行文本示例',kind:'textarea',max:200},{key:'number',label:'数字示例',kind:'number',help:'填写非负整数，最多15位'},{key:'single',label:'单选示例',kind:'select',choices:['选项一','选项二']},{key:'multiple',label:'多选示例',kind:'multiple',choices:['选项一','选项二','选项三']},{key:'date',label:'日期示例',kind:'date'}];
let formContext=null,formValues=[],formFields=[],formBusy=false,formSession=0,formSignedNames=[],formSignatureRecords=[],formSavedSnapshot=null,formStorageKey=null;
function formKey(){if(formStorageKey)return formStorageKey;return 'event-registration-C03-demo:'+formContext.project.id+':'+formContext.option.id+':'+formContext.people+':'+document.querySelector('#template-demo').value+(typeof activeRecord!=='undefined'&&activeRecord?':'+activeRecord.id:'');}
function closeRegistration(){formSession++;formView.hidden=true;formBack.hidden=true;readerPhone.classList.remove('is-reading');readerMain.hidden=false;readerNav.textContent='赛事报名';formContext=null;}
function openRegistration(project,option,people,free=false){
 if(typeof recordReadOnly!=='undefined')recordReadOnly=false;
 if(typeof resetSubmission==='function')resetSubmission();
 if(readerContext)closeReader();
 formSession++;formStorageKey=null;formSavedSnapshot=null;formContext={project,option,people,free};formStorageKey=formKey();
 if(typeof findSavedDraftRecord==='function'&&!activeRecord){const savedRecord=findSavedDraftRecord(formStorageKey);if(savedRecord)activeRecord=savedRecord;}formBusy=false;formSignedNames=[];document.querySelector('#signature-demo').value='pending';
 const template=document.querySelector('#template-demo').value;
 formFields=template==='name'?standardFields.slice(0,1):template==='extended'?[...standardFields,...extraFields]:standardFields;
 try{const stored=JSON.parse(localStorage.getItem(formKey())||'[]');formValues=Array.from({length:people},(_,i)=>stored[i]&&typeof stored[i]==='object'?stored[i]:{});}catch{formValues=Array.from({length:people},()=>({}));}
 try{formSavedSnapshot=localStorage.getItem(formKey())!==null?JSON.stringify(formValues):null;}catch{formSavedSnapshot=null;}
 try{const records=JSON.parse(localStorage.getItem(formKey()+':signatures')||'[]');formSignatureRecords=Array.isArray(records)?records:[];}catch{formSignatureRecords=[];}formSignedNames=formValues.map((values,i)=>formSignatureRecords[i]?.name===values.name?values.name:null);
 readerMain.hidden=true;readerView.hidden=true;backReading.hidden=true;formBack.hidden=false;formView.hidden=false;readerPhone.classList.add('is-reading');readerNav.textContent='填写参赛资料';
 renderRegistration();
 outcome.textContent='C03结构原型：普通填写不自动保存；需签项目资料齐全后点击底部暂存，成功后才开放签署/分享。首次暂存创建本浏览器记录，不占名额或库存；真实服务未接入。';
}
function fieldMarkup(field,person){
 const id='participant-'+person+'-'+field.key,value=formValues[person][field.key]||'';
 const attrs='id="'+id+'" data-person="'+person+'" data-field="'+field.key+'" aria-describedby="'+id+'-error" '+(field.required?'aria-required="true" ':'');
 let control='';
 if(field.kind==='textarea')control='<textarea '+attrs+' maxlength="'+field.max+'">'+escapeHtml(value)+'</textarea>';
 else if(field.kind==='select')control='<select '+attrs+'><option value="">请选择</option>'+field.choices.map(x=>'<option '+(value===x?'selected':'')+'>'+x+'</option>').join('')+'</select>';
 else if(field.kind==='multiple')control='<div id="'+id+'" role="group" aria-label="'+field.label+'">'+field.choices.map(x=>'<label class="check-choice"><input type="checkbox" data-person="'+person+'" data-field="'+field.key+'" value="'+x+'" '+(Array.isArray(value)&&value.includes(x)?'checked':'')+'>'+x+'</label>').join('')+'</div>';
 else control='<input '+attrs+' type="'+(field.kind==='identity'||field.kind==='number'?'text':field.kind)+'" '+(field.kind==='number'?'inputmode="numeric" ':'')+(field.max?'maxlength="'+field.max+'" ':'')+' value="'+escapeHtml(value)+'" autocomplete="off">';
 return '<div class="form-field"><label class="field-label" '+(field.kind==='multiple'?'':'for="'+id+'"')+'>'+(field.required?'<span class="required" aria-hidden="true">*</span>':'')+field.label+'</label>'+control+(field.help?'<p class="field-help">'+field.help+'</p>':'')+'<p class="field-error" id="'+id+'-error"></p></div>';
}
function renderRegistration(){
 const hasNotice=document.querySelector('#notice-demo').value!=='none';
 formView.innerHTML='<div class="form-summary"><h2>'+escapeHtml(formContext.project.name)+'</h2><p>'+(formContext.free?'':escapeHtml(formContext.option.name)+' · ¥'+formContext.option.price+'/'+(formContext.people===1?'':formContext.people)+'人 · ')+formContext.people+'位参赛者</p>'+(formContext.project.signature?'<button class="signature-jump" type="button">签署要求：需逐人签署<span>查看进度 ›</span></button>':'')+'</div>'+
 (hasNotice?'<div class="form-tabs" role="tablist" aria-label="报名内容"><button role="tab" id="notice-tab" aria-controls="notice-panel" aria-selected="false" tabindex="-1">报名须知</button><button role="tab" id="data-tab" aria-controls="data-panel" aria-selected="true">参赛资料</button></div>':'')+
 (hasNotice?'<section class="form-panel" role="tabpanel" id="notice-panel" aria-labelledby="notice-tab" tabindex="0" hidden><article class="notice-paper"><h3>报名须知</h3>'+Array.from({length:document.querySelector('#notice-demo').value==='long'?24:1},(_,i)=>'<p>第'+(i+1)+'段须知内容占位。此处展示后台配置的报名须知图文，正式赛事内容待运营提供。</p>').join('')+'</article></section>':'')+
 '<section class="form-panel" '+(hasNotice?'role="tabpanel" aria-labelledby="data-tab" ':'')+'id="data-panel" tabindex="0">'+formValues.map((v,i)=>'<section class="person-card"><h3>第'+(i+1)+'位参赛者</h3>'+formFields.map(f=>fieldMarkup(f,i)).join('')+'</section>').join('')+
 (formContext.project.signature?'<section class="signature-card" tabindex="-1"><h3>签署进度</h3><p class="signature-progress">已签0/'+formContext.people+'人</p><p class="field-help signature-requirement" aria-live="polite">请先填写完整全部参赛者资料，再进行签署或分享。</p>'+formValues.map((v,i)=>'<div class="signature-row"><span class="signature-person" data-signature-person="'+i+'">'+escapeHtml(v.name||'第'+(i+1)+'位参赛者')+'<small>未签署</small></span><button data-sign="'+i+'" disabled>去签署</button><button data-share="'+i+'" disabled>分享签署</button>'+('<button data-view-signature="'+i+'" hidden>查看本人签名</button>')+'</div>').join('')+'</section>':'')+'</section>'+
 '<p class="form-feedback" role="status" aria-live="polite"></p><footer class="form-footer"><button class="draft-save">暂存</button><button class="registration-submit" '+(formContext.project.signature?'hidden':'')+'>立即报名</button><button class="registration-continue-payment" hidden>继续支付</button></footer>';
 if(hasNotice)setRegistrationTab('data');
 updateSignatureEntries();
}

function setRegistrationTabIfPresent(){if(formView.querySelector('#notice-panel'))setRegistrationTab('data');}
function setRegistrationTab(name){
 const notice=name==='notice';
 for(const kind of ['notice','data']){const tab=formView.querySelector('#'+kind+'-tab');if(tab){tab.setAttribute('aria-selected',String((kind==='notice')===notice));tab.tabIndex=(kind==='notice')===notice?0:-1;}}
 formView.querySelector('#notice-panel').hidden=!notice;formView.querySelector('#data-panel').hidden=notice;
 formView.querySelector('.form-footer').hidden=notice;formView.querySelector('.form-feedback').hidden=notice;
 if(typeof applySubmissionLock==='function')applySubmissionLock();
}
function fieldProblem(field,value){
 if(field.required&&(!value||!String(value).trim()))return '请填写'+field.label;
 if(!value||(Array.isArray(value)&&!value.length))return '';
 if(field.kind==='tel'&&!/^1[3-9]\d{9}$/.test(value))return '请输入正确的手机号';
 if(field.kind==='identity'&&!/^(\d{15}|\d{17}[\dXx])$/.test(value))return '请输入正确格式的身份证号码';
 if(field.kind==='number'&&!/^\d{1,15}$/.test(value))return '请填写最多15位的非负整数';
 return '';
}
function syncRegistrationValues(){
 if(!formContext)return;
 formValues.forEach((values,i)=>formFields.forEach(field=>{
  const element=formView.querySelector('#participant-'+i+'-'+field.key);
  if(!element)return;
  if(field.key==='name'&&formSignedNames[i]&&formSignedNames[i]!==element.value){formSignedNames[i]=null;formSignatureRecords[i]=null;try{localStorage.setItem(formKey()+':signatures',JSON.stringify(formSignatureRecords));}catch{}}
  values[field.key]=field.kind==='multiple'?[...element.querySelectorAll('input:checked')].map(e=>e.value):element.value;
 }));
}
function validateRegistration(showErrors=false){
 syncRegistrationValues();
 let first=null,valid=true;
 formValues.forEach((values,i)=>formFields.forEach(field=>{
  const message=fieldProblem(field,values[field.key]);
  if(message){valid=false;if(!first)first=formView.querySelector('#participant-'+i+'-'+field.key);}
  if(showErrors){const input=formView.querySelector('#participant-'+i+'-'+field.key);const error=formView.querySelector('#participant-'+i+'-'+field.key+'-error');error.textContent=message;input.setAttribute('aria-invalid',String(!!message));}
 }));
 if(showErrors&&first){first.scrollIntoView({block:'center'});first.focus({preventScroll:true});}
 return valid;
}
function updateSignatureEntries(){
 const valid=validateRegistration(),saved=registrationDataSaved();
 const signedCount=formValues.filter((values,i)=>formSignedNames[i]&&formSignedNames[i]===values.name).length;
 formView.querySelector('.registration-submit').hidden=!!formContext.project.signature&&!(valid&&saved&&signedCount===formContext.people);
 const progress=formView.querySelector('.signature-progress');if(progress)progress.textContent='已签'+signedCount+'/'+formContext.people+'人';
 const requirement=formView.querySelector('.signature-requirement');
 if(requirement)requirement.textContent=!valid?'请完善全部参赛者资料后签署':!saved?'请先暂存资料，再进行签署或分享':'';
 formView.querySelectorAll('[data-sign],[data-share]').forEach(button=>{button.disabled=!valid||!saved||formBusy;button.hidden=!valid||!saved;});
 formView.querySelectorAll('[data-sign]').forEach(button=>{const i=Number(button.dataset.sign),signed=!!formSignedNames[i]&&formSignedNames[i]===formValues[i].name;button.textContent=signed?'重签署':'去签署';button.disabled=!valid||!saved||formBusy||(signed&&!formSignatureRecords[i]);});
 formView.querySelectorAll('[data-share]').forEach(button=>{const i=Number(button.dataset.share);button.hidden=!valid||!saved||(!!formSignedNames[i]&&formSignedNames[i]===formValues[i].name);});
 formView.querySelectorAll('[data-signature-person]').forEach(node=>{const i=Number(node.dataset.signaturePerson);node.innerHTML=escapeHtml(formValues[i].name||'第'+(i+1)+'位参赛者')+'<small>'+(formSignedNames[i]&&formSignedNames[i]===formValues[i].name?'已签署':'未签署')+'</small>';});
 if(typeof applySubmissionLock==='function')applySubmissionLock();
}
let formFeedbackTimer=null;
function formMessage(text,error=false){
 clearTimeout(formFeedbackTimer);
 const node=formView.querySelector('.form-feedback');node.textContent=text;node.classList.toggle('is-error',error);
 const toast=text==='已暂存'&&!error;node.classList.toggle('is-toast',toast);
 if(toast)formFeedbackTimer=setTimeout(()=>{if(node.isConnected&&node.textContent===text){node.textContent='';node.classList.remove('is-toast');}},2000);
}
function registrationDataSaved(){return formSavedSnapshot!==null&&formSavedSnapshot===JSON.stringify(formValues);}
async function saveRegistrationDraft(){
 if(formBusy||(typeof submissionState!=='undefined'&&submissionState!=='editing'))return;
 syncRegistrationValues();
 const session=formSession,snapshot=JSON.stringify(formValues),key=formKey();formBusy=true;const button=formView.querySelector('.draft-save');button.disabled=true;button.textContent='正在暂存…';updateSignatureEntries();
 await new Promise(resolve=>setTimeout(resolve,250));
 if(session!==formSession||!formContext)return;
 try{if(document.querySelector('#draft-demo').value==='fail')throw new Error('demo');localStorage.setItem(key,snapshot);if(typeof recordDraftSaved==='function')recordDraftSaved();formSavedSnapshot=snapshot;formMessage('已暂存');}
 catch{formMessage('暂存失败，请重试',true);}
 formBusy=false;button.disabled=false;button.textContent='暂存';updateSignatureEntries();
}
formView.addEventListener('input',e=>{
 const input=e.target;if(input.dataset.person===undefined)return;
 const i=Number(input.dataset.person),key=input.dataset.field;
 formValues[i][key]=input.type==='checkbox'?[...formView.querySelectorAll('input[type="checkbox"][data-person="'+i+'"][data-field="'+key+'"]:checked')].map(e=>e.value):input.value;
 const error=formView.querySelector('#participant-'+i+'-'+key+'-error');if(error)error.textContent='';input.removeAttribute('aria-invalid');formMessage('');updateSignatureEntries();
});
formView.addEventListener('change',()=>{if(formContext)updateSignatureEntries();});
formView.addEventListener('focusout',e=>{
 const input=e.target;if(input.dataset.person===undefined||!formContext)return;
 syncRegistrationValues();
 const i=Number(input.dataset.person),field=formFields.find(f=>f.key===input.dataset.field);
 if(!field)return;
 const message=fieldProblem(field,formValues[i][field.key]);
 formView.querySelector('#participant-'+i+'-'+field.key+'-error').textContent=message;
 input.setAttribute('aria-invalid',String(!!message));
 updateSignatureEntries();
});
formView.addEventListener('click',e=>{
 if(e.target.closest('.signature-jump')){setRegistrationTabIfPresent();const section=formView.querySelector('.signature-card');section.scrollIntoView({block:'start'});section.focus({preventScroll:true});}
 if(e.target.closest('#notice-tab'))setRegistrationTab('notice');
 if(e.target.closest('#data-tab'))setRegistrationTab('data');
 if(e.target.closest('.registration-continue-payment')&&submissionState==='pending-payment'&&!formBusy&&!(typeof recordReadOnly!=='undefined'&&recordReadOnly)){formMessage('');showPendingOrder();return;}
 if(e.target.closest('.draft-save'))saveRegistrationDraft();
 if(e.target.closest('.registration-submit')){
  if(!validateRegistration(true)){formMessage('请完善参赛者资料',true);return;}
  if(formContext.project.signature&&formValues.some((values,i)=>!formSignedNames[i]||formSignedNames[i]!==values.name)){formMessage('请先完成全部参赛者签署',true);formView.querySelector('.signature-card').scrollIntoView({block:'center'});return;}
  submitRegistration();
 }
 const signature=e.target.closest('[data-sign],[data-share]');
 if(signature&&!signature.disabled){if(!registrationDataSaved()){formMessage('请先暂存资料，再进行签署或分享',true);return;}if(signature.dataset.share!==undefined){openSharedPreview(Number(signature.dataset.share));}else openSignature(Number(signature.dataset.sign));}
});
formView.addEventListener('keydown',e=>{if(e.target.getAttribute('role')==='tab'&&['ArrowLeft','ArrowRight'].includes(e.key)){e.preventDefault();const name=e.target.id==='data-tab'?'notice':'data';setRegistrationTab(name);formView.querySelector('#'+name+'-tab').focus();}});
formBack.addEventListener('click',closeRegistration);
formPreview.addEventListener('click',()=>openRegistration(projects[0],projects[0].options[0],Number(document.querySelector('#people').value)));
// Demo settings apply on the next entry; changing them does not silently save or erase current input.
for(const id of ['notice-demo','template-demo'])document.querySelector('#'+id).addEventListener('change',()=>{if(formContext)outcome.textContent='示例设置已修改；返回总览后重新进入C03生效，当前输入不自动保存。';});


document.querySelector('#signature-demo').addEventListener('change',e=>{
 if(!formContext||!formContext.project.signature){outcome.textContent='该控件仅用于需签署项目的进度演示。';e.target.value='pending';return;}
 if(e.target.value!=='pending'&&!validateRegistration(true)){e.target.value='pending';outcome.textContent='先填齐所有参赛者必要资料，再演示签署完成状态；没有真实签署。';return;}
 const count=e.target.value==='all'?formContext.people:e.target.value==='partial'?Math.max(0,formContext.people-1):0;
 formSignedNames=formValues.map((values,i)=>i<count?values.name:null);
 updateSignatureEntries();
 outcome.textContent='已切换签署进度演示，仅检查报名按钮显示时机；未生成或保存真实签名。';
});
