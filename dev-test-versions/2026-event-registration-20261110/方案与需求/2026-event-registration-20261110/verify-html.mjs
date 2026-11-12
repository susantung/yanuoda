import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import vm from 'node:vm';
const root=path.dirname(fileURLToPath(import.meta.url));
const audit=JSON.parse(await fs.readFile(path.join(root,'assets/html-build-audit.json'),'utf8'));
const errors=[];let links=0,scripts=0;
for(const file of audit.pages){
 const raw=await fs.readFile(path.join(root,file),'utf8');
 for(const m of raw.matchAll(/<script\b[^>]*>([\s\S]*?)<\/script>/g)){try{new vm.Script(m[1]);scripts++;}catch(e){errors.push(file+' script: '+e.message);}}
 const html=raw.replace(/<script\b[\s\S]*?<\/script>/g,'');
 for(const a of html.matchAll(/<a\b[^>]*href="[^"]*preview\/[^"]*"[^>]*>/g))if(!/target="_blank"/.test(a[0]))errors.push(file+' prototype does not open new tab');
 const ids=[...html.replace(/<svg\b[\s\S]*?<\/svg>/g,'').matchAll(/\bid="([^"]+)"/g)].map(m=>m[1]);
 if(new Set(ids).size!==ids.length)errors.push(file+' duplicate HTML id');
 for(const m of html.matchAll(/\b(?:href|src)="([^"]+)"/g)){
  const url=m[1].replaceAll('&amp;','&');if(/^(?:https?:|data:|mailto:)/.test(url))continue;
  const [target,hash]=url.split('#');const full=path.resolve(root,decodeURIComponent((target||file).split('?')[0]));links++;
  try{await fs.access(full);}catch{errors.push(file+' missing '+url);continue;}
  if(hash&&/\.html$/.test(full)){
   const dest=await fs.readFile(full,'utf8');if(!dest.includes('id="'+decodeURIComponent(hash)+'"'))errors.push(file+' missing anchor '+url);
  }
 }
 if(/<(?:script|link|img)\b[^>]+(?:src|href)="https?:/i.test(html))errors.push(file+' external rendering dependency');
}
const fragments=await fs.readdir(path.join(root,'assets/ai-pages'));
if(fragments.filter(f=>f.endsWith('.md')).length!==31)errors.push('AI fragment count');
if(audit.flows.length!==9)errors.push('flow count');
for(const f of audit.flows)if(!f.nodes||!f.edges)errors.push('empty flow '+f.file);
const mapping=await fs.readFile(path.join(root,'assets/旧规则定位对照.md'),'utf8');
for(let i=1;i<=45;i++)if(!mapping.includes('| R'+String(i).padStart(2,'0')+' |'))errors.push('missing R'+i);
const prd=await fs.readFile(path.join(root,'PRD｜赛事活动报名_整理评审稿_20261110.md'),'utf8');
for(const file of audit.sourceFiles.filter(f=>f!=='任务索引.md')){const raw=await fs.readFile(path.join(root,file),'utf8');if(!prd.includes(raw.trim()))errors.push('merged PRD differs '+file);}
const result={date:'2026-11-10',passed:errors.length===0,htmlPages:audit.pages.length,localLinksAndAnchors:links,inlineScriptsParsed:scripts,flows:audit.flows.length,aiFragments:fragments.filter(f=>f.endsWith('.md')).length,oldRuleGroupsMapped:45,errors,scope:'文件、链接、生成一致性和脚本语法检查；不代表全部原型或真实服务验收。'};
await fs.writeFile(path.join(root,'assets/file-check-result.json'),JSON.stringify(result,null,2));
console.log(JSON.stringify(result,null,2));if(errors.length)process.exitCode=1;
