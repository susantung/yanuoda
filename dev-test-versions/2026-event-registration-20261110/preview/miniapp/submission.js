/* C06 state demonstration only. No booking, inventory, order or payment API. */
const submissionControls=document.createElement('label');
submissionControls.innerHTML='提交演示<select id="submission-scene"><option value="success">提交成功</option><option value="rejected">库存校验失败</option><option value="unknown">结果未知，等待核实</option></select>';
const submissionResolution=document.createElement('label');
submissionResolution.innerHTML='核实结果<select id="submission-resolution"><option value="created">已提交成功</option><option value="not-created">确定未提交</option></select>';
const submissionResolve=document.createElement('button');submissionResolve.className='review-reset';submissionResolve.textContent='演示返回核实结果';
const submissionPreview=document.createElement('button');submissionPreview.className='review-reset';submissionPreview.textContent='预览提交交互';
const paymentDemo=document.createElement('label');paymentDemo.innerHTML='支付返回演示<select id="payment-scene"><option value="success">已核实支付成功</option><option value="cancel">取消或未支付</option><option value="unknown">支付结果未知</option></select>';
document.querySelector('.controls').append(submissionControls,submissionResolution,submissionResolve,paymentDemo,submissionPreview);
let submissionState='editing',submissionSnapshot=null;
function resetSubmission(){submissionState='editing';submissionSnapshot=null;resetPaymentPreview();}
function applySubmissionLock(){
 if(typeof syncHomepageRecordState==='function')syncHomepageRecordState();
 if(!formContext)return;
 const busy=['submitting','unknown','paying','payment-unknown'].includes(submissionState),submitted=['paying','pending-payment','payment-unknown','complete','free'].includes(submissionState),readOnly=typeof recordReadOnly!=='undefined'&&recordReadOnly,frozen=busy||submitted||formBusy||readOnly;
 formView.querySelectorAll('.person-card input,.person-card textarea,.person-card select').forEach(control=>control.disabled=frozen);
 if(frozen)formView.querySelectorAll('[data-sign],[data-share],.draft-save,.registration-submit,.signature-save-gate').forEach(button=>button.disabled=true);
 else {formView.querySelector('.draft-save').disabled=formBusy;formView.querySelector('.registration-submit').disabled=formBusy;}
 formBack.disabled=busy||formBusy;
 const submit=formView.querySelector('.registration-submit'),draft=formView.querySelector('.draft-save');
 submit.textContent=submissionState==='submitting'?'提交中…':submissionState==='unknown'?'正在核实…':'立即报名';
 draft.hidden=submitted||readOnly;
 if(submitted||readOnly)submit.hidden=true;
 const dataPanel=formView.querySelector('#data-panel'),footer=formView.querySelector('.form-footer');
 const continuePayment=formView.querySelector('.registration-continue-payment'),canContinue=submissionState==='pending-payment'&&!readOnly;
 continuePayment.hidden=!canContinue;continuePayment.disabled=busy||formBusy;
 footer.hidden=dataPanel.hidden||readOnly||(submitted&&!canContinue);
 formView.querySelectorAll('.signature-row [data-sign],.signature-row [data-share]').forEach(button=>{if(submitted||readOnly)button.hidden=true;});
 formView.querySelectorAll('[data-view-signature]').forEach(button=>{const i=Number(button.dataset.viewSignature);button.hidden=!(submitted||readOnly)||i!==(typeof currentRecordPerson==='function'?currentRecordPerson():0)||!formSignedNames[i]||formSignedNames[i]!==formValues[i].name;button.disabled=busy;});
}
async function submitRegistration(){
 if(formBusy||submissionState!=='editing'||(typeof recordReadOnly!=='undefined'&&recordReadOnly))return;
 if(formContext){
  const scene=document.querySelector('#state').value,free=formContext.free;
  const range=optionRange(formContext.option,free,scene),availability=optionState(scene==='soldout'?{...formContext.option,stock:0}:formContext.option,range,scene,scene==='unavailable');
  if(availability.disabled){formMessage(availability.label+'，当前不能提交报名',true);return;}
 }
 if(!validateRegistration(true)){formMessage('请完善参赛者资料',true);return;}
 if(formContext.project.signature&&formValues.some((person,i)=>formSignedNames[i]!==person.name)){formMessage('请先完成全部参赛者签署',true);return;}
 // Capture once at the user's explicit final submit, not on ordinary input.
 submissionSnapshot=JSON.parse(JSON.stringify({context:formContext,participants:formValues,signatures:formSignatureRecords}));
 const session=formSession,scene=document.querySelector('#submission-scene').value;
 submissionState='submitting';formBusy=true;formMessage('正在提交，请稍候');applySubmissionLock();
 outcome.textContent='C06模拟提交中：仅演示控件锁定和结果处理，没有调用报名/订单/库存服务，也没有自动暂存普通资料。';
 await new Promise(resolve=>setTimeout(resolve,900));
 if(session!==formSession||!formContext)return;
 if(scene==='rejected'){failSubmission(formContext.free?'剩余报名名额不足，请返回选择其他项目':'所选报名项库存不足，请返回选择其他报名项');return;}
 if(scene==='unknown'){submissionState='unknown';formMessage('正在核实提交结果，请稍候');applySubmissionLock();outcome.textContent='结果未知演示：保持本次提交快照，禁止再次下单；实际产品应查询原请求。请在审阅区点击“演示返回核实结果”模拟查询返回，未接真实自动查询。';return;}
 completeSubmission();
}
function failSubmission(message){submissionState='editing';formBusy=false;formMessage(message,true);updateSignatureEntries();outcome.textContent='本次模拟确定未提交：当前输入与有效签署保留，可修改或重试；没有自动暂存，也没有创建订单或占用名额。';}
async function completeSubmission(){
 if(submissionSnapshot.context.free){submissionState='free';formBusy=false;updateSignatureEntries();showPaymentSuccess();return;}
 const session=formSession;
 submissionState='paying';formBusy=true;formMessage('正在调起微信支付…');updateSignatureEntries();
 outcome.textContent='模拟提交及下单成功后自动调起微信支付，不增加去付款按钮。浏览器未调用真实微信支付；下方仅按审阅区设置模拟订单支付核实结果。';
 await new Promise(resolve=>setTimeout(resolve,700));
 if(session!==formSession||!formContext)return;
 formBusy=false;
 openCashierPreview();
}
submissionResolve.addEventListener('click',()=>{
 if(submissionState!=='unknown'){outcome.textContent='此控件只用于结果未知时模拟原请求的查询响应。';return;}
 if(document.querySelector('#submission-resolution').value==='created')completeSubmission();
 else failSubmission('已核实本次尚未提交，请重试');
});
function prepareSubmissionPreview(free=false){
 if(typeof sharedViewerContext!=='undefined')sharedViewerContext=null;
 sharedView.hidden=true;sharedBack.hidden=true;signatureView.hidden=true;signatureBack.hidden=true;readerPhone.classList.remove('is-signing');
 const project=free?projects[1]:projects[0];openRegistration(project,project.options[0],2,free);
 const people=[{name:'张三',phone:'13800000001',identity:'110101199001010000'},{name:'李四',phone:'13800000002',identity:'110101199002020000'}];
 people.forEach((person,i)=>Object.entries(person).forEach(([key,value])=>{const input=formView.querySelector('#participant-'+i+'-'+key);if(input)input.value=value;}));
 syncRegistrationValues();formSavedSnapshot=JSON.stringify(formValues);if(project.signature)formSignedNames=formValues.map(person=>person.name);updateSignatureEntries();
 outcome.textContent='C06审阅入口：已填示例资料，并仅模拟全员有效签署以查看提交状态；没有新增真实签名或后台记录。可在“提交演示”选择结果后点击立即报名。';
}
submissionPreview.addEventListener('click',()=>prepareSubmissionPreview(false));
if(new URLSearchParams(location.search).get('view')==='submission'){
 const params=new URLSearchParams(location.search);prepareSubmissionPreview(params.get('kind')==='free');
 if(['success','rejected','unknown'].includes(params.get('scene')))document.querySelector('#submission-scene').value=params.get('scene');
 if(['success','cancel','unknown'].includes(params.get('payment')))document.querySelector('#payment-scene').value=params.get('payment');
 if(params.get('only')==='1')document.body.classList.add('signature-review');
}
