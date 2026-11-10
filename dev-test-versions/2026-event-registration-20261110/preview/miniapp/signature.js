/* C05 local structure preview: pointer strokes, no recognition, auth or server save. */
const signatureView=document.createElement('section');signatureView.className='sign-view';signatureView.hidden=true;readerPhone.append(signatureView);
const signatureBack=document.createElement('button');signatureBack.className='reader-back';signatureBack.textContent='‹';signatureBack.hidden=true;signatureBack.setAttribute('aria-label','返回参赛资料');readerPhone.querySelector('.nav').append(signatureBack);
let signaturePerson=null,signatureStrokes=[],signatureDrawing=false,signatureResize=null;
function closeSignature(){if(typeof sharedViewerContext!=='undefined'&&sharedViewerContext){readerPhone.classList.remove('is-signing');readerNav.removeAttribute('title');signatureView.hidden=true;signatureBack.hidden=true;signaturePerson=null;openSharedRegistration(sharedViewerContext);return;}readerPhone.classList.remove('is-signing');readerNav.removeAttribute('title');signatureView.hidden=true;signatureBack.hidden=true;formView.hidden=false;formBack.hidden=false;readerNav.textContent='填写参赛资料';signaturePerson=null;updateSignatureEntries();}
function openSignature(person){
 if(!registrationDataSaved()){formMessage('请先暂存资料，再进行签署',true);return;}
 const saved=formSignatureRecords[person];const validSaved=saved&&saved.name===formValues[person].name;if(!validSaved&&!validateRegistration(true))return;if(validSaved)formSignedNames[person]=saved.name;
 if(signatureResize)signatureResize.disconnect();signaturePerson=person;signatureStrokes=validSaved?JSON.parse(JSON.stringify(saved.strokes)):[];signatureDrawing=false;
 const explanation=formContext.project.signatureExplanation||'';
 signatureView.innerHTML='<div class="sign-workspace"><canvas class="sign-pad" aria-label="手写签名区"></canvas></div><div class="sign-bottom">'+(explanation.trim()?'<div class="sign-explanation" tabindex="0" aria-label="签署说明">'+escapeHtml(explanation)+'</div>':'')+'<p class="sign-message" role="status"></p><footer class="sign-actions"><button class="sign-clear">清空</button><button class="sign-confirm">确认签署</button></footer></div>';
 formView.hidden=true;formBack.hidden=true;signatureView.hidden=false;signatureBack.hidden=false;readerPhone.classList.add('is-signing');readerNav.textContent=readerMain.querySelector('h1').textContent;readerNav.title=readerNav.textContent;

 const canvas=signatureView.querySelector('canvas');
 const point=e=>{const rect=canvas.getBoundingClientRect();return {x:(e.clientX-rect.left)/rect.width,y:(e.clientY-rect.top)/rect.height};};
 canvas.addEventListener('pointerdown',e=>{if(e.button!==0)return;e.preventDefault();canvas.setPointerCapture(e.pointerId);signatureDrawing=true;signatureStrokes.push([point(e)]);signatureView.querySelector('.sign-message').textContent='';});
 canvas.addEventListener('pointermove',e=>{if(!signatureDrawing)return;signatureStrokes[signatureStrokes.length-1].push(point(e));drawSignature();});
 for(const event of ['pointerup','pointercancel','lostpointercapture'])canvas.addEventListener(event,()=>{signatureDrawing=false;});
 signatureResize=new ResizeObserver(()=>{if(!signatureView.hidden)drawSignature();});signatureResize.observe(canvas);
 drawSignature();
 outcome.textContent='C05本人签署结构预览。签署说明来自所选后台配置；笔迹保存在本浏览器示例记录中，不做姓名识别、身份授权或服务端保存。';
}
function drawSignature(){
 const canvas=signatureView.querySelector('canvas');if(!canvas)return;
 const rect=canvas.getBoundingClientRect(),ratio=window.devicePixelRatio||1;
 canvas.width=Math.round(rect.width*ratio);canvas.height=Math.round(rect.height*ratio);
 const ctx=canvas.getContext('2d');ctx.scale(ratio,ratio);ctx.lineWidth=2.5;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#1f2329';
 signatureStrokes.forEach(stroke=>{ctx.beginPath();stroke.forEach((point,i)=>ctx[i?'lineTo':'moveTo'](point.x*rect.width,point.y*rect.height));ctx.stroke();});
}
signatureBack.addEventListener('click',closeSignature);
signatureView.addEventListener('click',e=>{
 if(e.target.closest('.sign-clear')){signatureStrokes=[];drawSignature();signatureView.querySelector('.sign-message').textContent='';}
 if(e.target.closest('.sign-confirm')){
  if(!signatureStrokes.some(stroke=>stroke.length>1&&stroke.some(point=>Math.hypot(point.x-stroke[0].x,point.y-stroke[0].y)>.015))){signatureView.querySelector('.sign-message').textContent='请先完成签名';return;}
  const records=formSignatureRecords.slice();records[signaturePerson]={name:formValues[signaturePerson].name,strokes:JSON.parse(JSON.stringify(signatureStrokes)),confirmedAt:new Date().toISOString()};
  try{localStorage.setItem(formKey()+':signatures',JSON.stringify(records));}catch{signatureView.querySelector('.sign-message').textContent='签署保存失败，请重试';return;}
  formSignatureRecords=records;formSignedNames[signaturePerson]=formValues[signaturePerson].name;if(typeof recordSignatureSaved==='function')recordSignatureSaved();closeSignature();
  if(typeof sharedViewerContext!=='undefined'&&sharedViewerContext){const feedback=sharedView.querySelector('.shared-signature-feedback');feedback.textContent='签署成功';feedback.scrollIntoView({block:'center'});}else formMessage('签署成功');
  outcome.textContent='已保存本浏览器示例签名并返回参赛资料；没有保存普通报名资料、提交报名或创建订单。真实签名保存与姓名识别未接入。';
 }
});
// Dedicated review entry: example-only data, no draft write or registration submit.
if(new URLSearchParams(location.search).get('view')==='signature'){
 document.body.classList.add('signature-review');
 openRegistration(projects[0],projects[0].options[0],2);
 const examplePeople=[{name:'张三',phone:'13800000001',identity:'110101199001010000'},{name:'李四',phone:'13800000002',identity:'110101199002020000'}];
 examplePeople.forEach((person,i)=>Object.entries(person).forEach(([key,value])=>{const input=formView.querySelector('#participant-'+i+'-'+key);if(input)input.value=value;}));
 syncRegistrationValues();formSignedNames=formValues.map((values,i)=>formSignatureRecords[i]?.name===values.name?values.name:null);
 formSavedSnapshot=JSON.stringify(formValues); // Dedicated review fixture represents already saved data, not a real save.
 openSignature(0);
}

// Submitted registration details allow viewing only the demo current person's signature.
function openOwnSignaturePreview(person){
 if(person!==(typeof currentRecordPerson==='function'?currentRecordPerson():0)||!formContext||!formSignedNames[person]||formSignedNames[person]!==formValues[person].name)return;
 if(!['pending-payment','complete','free'].includes(submissionState)&&!(typeof recordReadOnly!=='undefined'&&recordReadOnly))return;
 const saved=formSignatureRecords[person];
 showSignatureDialog(saved,formValues[person].name);

}
formView.addEventListener('click',e=>{const button=e.target.closest('[data-view-signature]');if(button&&!button.hidden&&!button.disabled)openOwnSignaturePreview(Number(button.dataset.viewSignature));});

const signatureDialogLayer=document.createElement('div');signatureDialogLayer.className='signature-dialog-layer';signatureDialogLayer.hidden=true;readerPhone.append(signatureDialogLayer);
let signatureDialogReturnFocus=null;
function closeSignatureDialog(){signatureDialogLayer.hidden=true;signatureDialogLayer.replaceChildren();signatureDialogReturnFocus?.focus();signatureDialogReturnFocus=null;}
function showSignatureDialog(saved,name){
 signatureDialogReturnFocus=document.activeElement;
 signatureDialogLayer.innerHTML='<section class="signature-dialog" role="dialog" aria-modal="true" aria-labelledby="signature-dialog-title"><header><h3 id="signature-dialog-title">本人签名</h3><button aria-label="关闭本人签名">×</button></header><div class="signature-dialog-body"></div></section>';
 const body=signatureDialogLayer.querySelector('.signature-dialog-body');
 const valid=saved&&saved.name===name&&Array.isArray(saved.strokes)&&saved.strokes.length;
 const url=typeof saved==='string'?saved:saved?.image||saved?.dataUrl||saved?.url;
 if(valid){const canvas=document.createElement('canvas');canvas.width=600;canvas.height=300;canvas.setAttribute('aria-label','本人已确认的签名（只读）');body.append(canvas);const ctx=canvas.getContext('2d');ctx.lineWidth=2.5;ctx.lineCap='round';ctx.lineJoin='round';ctx.strokeStyle='#1f2329';saved.strokes.forEach(stroke=>{ctx.beginPath();stroke.forEach((point,i)=>ctx[i?'lineTo':'moveTo'](point.x*600,point.y*300));ctx.stroke();});}
 else if(url&&/^data:image\//.test(url)){const img=document.createElement('img');img.src=url;img.alt='本人已确认的签名';body.append(img);}
 else body.textContent='此演示记录仅模拟已签署状态，未采集签名图像。';
 signatureDialogLayer.hidden=false;signatureDialogLayer.querySelector('button').focus();
}
signatureDialogLayer.addEventListener('click',e=>{if(e.target===signatureDialogLayer||e.target.closest('button'))closeSignatureDialog();});
signatureDialogLayer.addEventListener('keydown',e=>{if(e.key==='Escape'){e.preventDefault();closeSignatureDialog();}if(e.key==='Tab'){e.preventDefault();signatureDialogLayer.querySelector('button').focus();}});
