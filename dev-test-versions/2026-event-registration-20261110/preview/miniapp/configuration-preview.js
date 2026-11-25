/* Reviewer-only same-origin configuration bridge. No production APIs. */
const configurationPreview=document.createElement('label');
configurationPreview.innerHTML='后台配置联看<select id="configuration-source" aria-label="后台报名选项配置"><option value="">请选择已保存报名选项</option></select>';
const configurationReload=document.createElement('button');
configurationReload.className='review-reset';configurationReload.textContent='刷新后台选项';
document.querySelector('.controls').append(configurationPreview,configurationReload);
let configurationSources=[];
function refreshConfigurationSources(){
 const select=configurationPreview.querySelector('select'),previous=select.value;
 try{const projectsSaved=JSON.parse(localStorage.getItem('yanoda-event-projects-structure-v1')||'[]');
 configurationSources=(Array.isArray(projectsSaved)?projectsSaved:[]).flatMap(project=>(project.ticketOptions||[]).map(option=>({project,option,key:project.id+':'+option.id})));
 }catch{configurationSources=[];}
 select.innerHTML='<option value="">请选择已保存报名选项</option>'+configurationSources.map(source=>'<option value="'+escapeHtml(source.key)+'">'+escapeHtml(source.project.name+' / '+(source.option.name||'未命名报名项'))+'</option>').join('');
 if(configurationSources.some(source=>source.key===previous))select.value=previous;
}
configurationReload.addEventListener('click',()=>{refreshConfigurationSources();outcome.textContent='已刷新本浏览器、同源后台保存的选项。请选择一项联看说明；若为空，请从同一HTTP地址打开后台并保存配置。';});
configurationPreview.querySelector('select').addEventListener('change',e=>{
 const source=configurationSources.find(item=>item.key===e.target.value);if(!source)return;
 configurationOrderedProject=null;
 // The mapping is deliberately explicit: only the selected option enters this demo card.
 const project=projects[0],option=project.options[0];
 project.name=source.project.name;project.signatureExplanation=source.project.signatureExplanation||'';
 option.name=source.option.name||'未命名报名项';option.restrictionNotice=source.option.restrictionNotice||'';
 render();
 outcome.textContent='已将“'+source.project.name+' / '+option.name+'”的报名限制条件和项目签署说明载入第一张示例卡。其余日期、价格、材料及人数仍是原型示例；重新进入资料页查看签署说明。仅同浏览器同源联看，未接真实接口。';
});
refreshConfigurationSources();

// V1.1 V11-22: retain saved array order and stable option IDs; no price/date/state sort.
const configurationOrder=document.createElement('button');
configurationOrder.className='review-reset';configurationOrder.textContent='联看所选项目全部报名项排序';
configurationPreview.appendChild(configurationOrder);
const configurationOrderSamples=JSON.parse(JSON.stringify(projects[0].options));
let configurationOrderedProject=null;
const configurationOptionSamples=new Map();
function applyConfigurationOptionOrder(project){
 const target=projects[0];
 target.name=project.name;target.signatureExplanation=project.signatureExplanation||'';
 target.options=(project.ticketOptions||[]).map(entry=>{
  const key=project.id+':'+entry.id;
  if(!configurationOptionSamples.has(key))configurationOptionSamples.set(key,JSON.parse(JSON.stringify(configurationOrderSamples[configurationOptionSamples.size%configurationOrderSamples.length])));
  return Object.assign({},configurationOptionSamples.get(key),{id:entry.id,ticketId:entry.ticketId,name:entry.name||'未命名报名项',restrictionNotice:entry.restrictionNotice||''});
 });
 configurationOrderedProject=project.id;render();
 outcome.textContent='已按后台保存顺序展示“'+project.name+'”的全部报名项；名称、说明及选中项ID随整行对应。价格、时间、人数及材料仍为原型示例，未连接真实票务。后台拖动后点击完成，再点刷新后台选项可核对新顺序。';
}
configurationOrder.addEventListener('click',()=>{
 const source=configurationSources.find(item=>item.key===configurationPreview.querySelector('select').value);
 if(!source){outcome.textContent='请先选择一条后台已保存报名项，再联看所属项目的全部报名项排序。';return;}
 applyConfigurationOptionOrder(source.project);
});
configurationReload.addEventListener('click',()=>{
 if(!configurationOrderedProject)return;
 const source=configurationSources.find(item=>item.project.id===configurationOrderedProject);
 if(source)applyConfigurationOptionOrder(source.project);
 else{projects[0].options=[];render();outcome.textContent='该项目已无已保存报名项。';}
});
window.addEventListener('storage',event=>{
 if(event.key!=='yanoda-event-projects-structure-v1')return;
 refreshConfigurationSources();
 const source=configurationSources.find(item=>item.project.id===configurationOrderedProject);
 if(source)applyConfigurationOptionOrder(source.project);
});
