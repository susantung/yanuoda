/* C11 current-event exact query. Local fictitious/saved records only; no account linking. */
const queryView=document.createElement('section');queryView.className='query-view';queryView.hidden=true;readerPhone.append(queryView);
const queryPreview=document.createElement('button');queryPreview.className='review-reset';queryPreview.textContent='预览独立报名查询';document.querySelector('.controls').append(queryPreview);
const querySceneControl=document.createElement('label');querySceneControl.innerHTML='查询演示<select id="query-scene"><option value="normal">正常查询</option><option value="error">请求失败</option></select>';document.querySelector('.controls').append(querySceneControl);
const queryExample=document.createElement('p');queryExample.className='query-example';queryExample.textContent='C11可查示例（虚构）：姓名 张三；手机号 13800000001；身份证号 110101199001010000。任一值均可查询；输入“不存在的测试姓名”查看无结果。';document.querySelector('.review').append(queryExample);
function maskQueryPhone(phone){const value=String(phone);return value.length>=7?value.slice(0,3)+'****'+value.slice(-4):'*'.repeat(value.length);}
let queryAttempt=0;
function openRegistrationQuery(){
 hideRecordSources();activeRecord=null;recordReadOnly=false;queryView.hidden=false;readerNav.textContent='报名查询';
 queryView.innerHTML='<div class="query-scroll"><section class="query-panel"><h2>'+escapeHtml(document.querySelector('.event-title').textContent)+'</h2><form class="query-form"><label for="query-value">姓名 / 手机号 / 身份证号</label><input id="query-value" type="text" autocomplete="off" placeholder="请输入姓名、手机号或身份证号"><p class="query-hint">输入任一完整信息，精确查询本赛事报名记录。</p><button type="submit">查询</button><p class="query-message" role="status" aria-live="polite"></p></form></section><div class="query-results" aria-live="polite"></div></div>';
 outcome.textContent='C11独立查询结构原型：正式入口来自P00本赛事配置页；这里仅用本浏览器虚构/暂存示例模拟精确查询。未接真实查询接口，不建立账号关联或开放详情权限。';
 const input=queryView.querySelector('#query-value');
 const clear=()=>{queryAttempt++;queryView.querySelector('.query-results').replaceChildren();queryView.querySelector('.query-message').textContent='';const button=queryView.querySelector('[type="submit"]');button.disabled=false;button.textContent='查询';};

 input.oninput=clear;
 queryView.querySelector('form').onsubmit=async e=>{
 e.preventDefault();const value=input.value.trim(),message=queryView.querySelector('.query-message'),results=queryView.querySelector('.query-results'),button=queryView.querySelector('[type="submit"]');
 results.replaceChildren();if(!value){message.textContent='请输入姓名、手机号或身份证号';input.focus();return;}
 const attempt=++queryAttempt;button.disabled=true;button.textContent='查询中…';message.textContent='';await new Promise(resolve=>setTimeout(resolve,200));if(attempt!==queryAttempt)return;
 button.disabled=false;button.textContent='查询';
 if(document.querySelector('#query-scene').value==='error'){message.textContent='查询失败，请稍后重试';return;}
 const matches=[];[...demoRecords,...freeDemoRecords,...localSavedRecords].filter(record=>record.status==='success').forEach(record=>record.participants.forEach(person=>{if(['name','phone','identity'].some(key=>person[key]&&String(person[key])===value))matches.push({record,person});}));
 message.textContent=matches.length?'查询到'+matches.length+'条报名记录':'未查询到匹配的报名记录，请核对信息';
 results.innerHTML=matches.map(({record:r,person:p})=>`<section class="record-card"><header><h2>${escapeHtml(r.project.name)}</h2><span class="record-state ${r.status}">${recordStates[r.status]}</span></header><dl class="record-facts"><div><dt>姓名</dt><dd>${escapeHtml(p.name||'未填写')}</dd></div>${p.phone?`<div><dt>手机号</dt><dd>${escapeHtml(maskQueryPhone(p.phone))}</dd></div>`:''}<div><dt>比赛时间</dt><dd>2027-01-03</dd></div></dl></section>`).join('');
 };
}
queryPreview.onclick=openRegistrationQuery;
// Selecting other review entry points closes this independent view.
document.querySelector('.controls').addEventListener('click',e=>{if(e.target.closest('button')&&e.target!==queryPreview){queryView.hidden=true;queryAttempt++;}});
if(new URLSearchParams(location.search).get('view')==='query')openRegistrationQuery();
