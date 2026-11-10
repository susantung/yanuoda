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
 // The mapping is deliberately explicit: only the selected option enters this demo card.
 const project=projects[0],option=project.options[0];
 project.name=source.project.name;project.signatureExplanation=source.project.signatureExplanation||'';
 option.name=source.option.name||'未命名报名项';option.restrictionNotice=source.option.restrictionNotice||'';
 render();
 outcome.textContent='已将“'+source.project.name+' / '+option.name+'”的报名限制条件和项目签署说明载入第一张示例卡。其余日期、价格、材料及人数仍是原型示例；重新进入资料页查看签署说明。仅同浏览器同源联看，未接真实接口。';
});
refreshConfigurationSources();
