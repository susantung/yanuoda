/* Same-browser receiver preview only. No WeChat send, link or server authorization. */
let sharedViewerContext=null;
const sharedView=document.createElement('section');sharedView.className='form-view';sharedView.hidden=true;readerPhone.append(sharedView);
const sharedBack=document.createElement('button');sharedBack.className='reader-back';sharedBack.textContent='‹';sharedBack.hidden=true;sharedBack.setAttribute('aria-label','返回阅读材料');readerPhone.querySelector('.nav').append(sharedBack);
function openSharedPreview(person){
 if(!validateRegistration(true)||!registrationDataSaved()){formMessage('请先暂存资料，再分享签署',true);return;}
 const snapshot={person,context:JSON.parse(JSON.stringify(formContext)),values:JSON.parse(JSON.stringify(formValues)),fields:JSON.parse(JSON.stringify(formFields)),notice:document.querySelector('#notice-demo').value};
 formView.hidden=true;formBack.hidden=true;
 openReader(snapshot.context.project,snapshot.context.option,snapshot.context.people,snapshot);
 outcome.textContent='分享接收者预览：先按顺序阅读材料，再只读查看全部参赛资料，只能签指定的本人。本次仅复制内存示例供审阅，没有发送微信、创建分享链接或自动暂存普通资料。';
}
function openSharedRegistration(snapshot){
 sharedViewerContext=snapshot;
 const {context,values,fields,person,notice}=snapshot;
 formView.hidden=true;formBack.hidden=true;readerMain.hidden=true;readerView.hidden=true;backReading.hidden=true;sharedView.hidden=false;sharedBack.hidden=false;
 readerPhone.classList.add('is-reading');readerNav.textContent='参赛资料';
 const hasNotice=notice!=='none';
 sharedView.innerHTML='<div class="form-summary"><h2>'+escapeHtml(context.project.name)+'</h2><p>'+escapeHtml(context.option.name)+' · '+context.people+'位参赛者</p></div>'+
 (hasNotice?'<div class="form-tabs" role="tablist" aria-label="报名内容"><button role="tab" id="shared-notice-tab" aria-selected="false" aria-controls="shared-notice-panel" tabindex="-1">报名须知</button><button role="tab" id="shared-data-tab" aria-selected="true" aria-controls="shared-data-panel">参赛资料</button></div><section class="form-panel" role="tabpanel" id="shared-notice-panel" aria-labelledby="shared-notice-tab" tabindex="0" hidden><article class="notice-paper"><h3>报名须知</h3>'+Array.from({length:notice==='long'?24:1},(_,i)=>'<p>第'+(i+1)+'段须知内容占位。此处展示后台配置的报名须知图文，正式赛事内容待运营提供。</p>').join('')+'</article></section>':'')+
 '<section class="form-panel" id="shared-data-panel" '+(hasNotice?'role="tabpanel" aria-labelledby="shared-data-tab"':'')+' tabindex="0">'+values.map((value,i)=>'<section class="person-card"><h3>第'+(i+1)+'位参赛者</h3><dl class="shared-fields">'+fields.map(field=>'<dt>'+escapeHtml(field.label)+'</dt><dd>'+escapeHtml(Array.isArray(value[field.key])?value[field.key].join('、'):value[field.key]||'—')+'</dd>').join('')+'</dl></section>').join('')+
 '<section class="signature-card"><h3>签署进度</h3><p class="shared-signature-feedback" role="status" aria-live="polite"></p><p class="signature-progress">已签'+values.filter((value,i)=>formSignedNames[i]===value.name).length+'/'+context.people+'人</p>'+values.map((value,i)=>'<div class="signature-row"><span class="signature-person">'+escapeHtml(value.name)+'<small>'+(formSignedNames[i]===value.name?'已签署':'未签署')+'</small></span>'+(i===person?'<button data-receiver-sign="'+i+'">'+(formSignedNames[i]===value.name?'重签署':'去签署')+'</button>':'')+'</div>').join('')+'</section></section>';
 outcome.textContent='分享接收示例：全部资料只读；仅第'+(person+1)+'位参赛者有去签署入口。他人只能看签署状态，没有分享、暂存、整份报名提交或付款入口。真实身份权限及跨设备接口未接。';
}
sharedView.addEventListener('click',e=>{
 if(e.target.closest('#shared-notice-tab')||e.target.closest('#shared-data-tab')){
  const notice=!!e.target.closest('#shared-notice-tab');
  for(const kind of ['notice','data']){const selected=(kind==='notice')===notice;const tab=sharedView.querySelector('#shared-'+kind+'-tab');tab.setAttribute('aria-selected',String(selected));tab.tabIndex=selected?0:-1;sharedView.querySelector('#shared-'+kind+'-panel').hidden=!selected;}
 }
 if(e.target.closest('[data-receiver-sign]')){sharedView.hidden=true;sharedBack.hidden=true;openSignature(sharedViewerContext.person);formBack.hidden=true;}
});
sharedBack.addEventListener('click',()=>{const snapshot=sharedViewerContext;sharedView.hidden=true;sharedBack.hidden=true;sharedViewerContext=null;openReader(snapshot.context.project,snapshot.context.option,snapshot.context.people,snapshot);});
if(new URLSearchParams(location.search).get('view')==='shared'){
 document.body.classList.add('signature-review');
 openRegistration(projects[0],projects[0].options[0],2);
 const examples=[{name:'张三',phone:'13800000001',identity:'110101199001010000'},{name:'李四',phone:'13800000002',identity:'110101199002020000'}];
 examples.forEach((person,i)=>Object.entries(person).forEach(([key,value])=>{const input=formView.querySelector('#participant-'+i+'-'+key);if(input)input.value=value;}));
 syncRegistrationValues();formSignedNames=formValues.map((values,i)=>formSignatureRecords[i]?.name===values.name?values.name:null);
 formSavedSnapshot=JSON.stringify(formValues); // Already-saved receiver fixture; no real draft write.
 openSharedPreview(1);
}
