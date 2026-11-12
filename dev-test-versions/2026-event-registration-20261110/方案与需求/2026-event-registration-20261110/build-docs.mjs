import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from '/Users/susan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js';
import {instance} from '/Users/susan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@viz-js/viz/dist/viz.js';
const root=path.dirname(fileURLToPath(import.meta.url));
const css=await fs.readFile(path.join(root,'assets/doc-style.css'),'utf8');
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'');
const docs=[
 {out:'page-list.html',name:'页面清单',intro:'按后台、小程序、弹窗和公共能力定位，不把流程节点当成独立页面。',files:['01-页面清单.md']},
 {out:'flows.html',name:'全程流程图',intro:'配置、暂存签署、统一提交、原订单及查询共9条流程，可离线缩放拖动。',files:['02-全程流程图.md']},
 {out:'development-spec.html',name:'完整需求方案',intro:'按页面查字段、来源、操作和校验；跨页规则集中维护，正文不夹聊天和阶段记录。',files:['00-文档信息与需求背景.md','03-后台逐页功能方案.md','05-小程序逐页功能方案.md','06-公共业务规则.md']},
 {out:'acceptance.html',name:'开发与验收',intro:'研发依赖和43项验收预期；清单不代表真实接口或全部页面已经验收通过。',files:['04-开发核对与验收清单.md']},
 {out:'changes.html',name:'项目内迭代新增V1.1',intro:'对照已交付研发评审目录，只标实质业务和交互变化；19项变动可逐项定位，区分业务变化、规则细化与文档完善。',files:['08-V1.1迭代对照.md']},
 {out:'pending.html',name:'待确认与实施边界',intro:'业务未定、用户暂缓、已定待接入分开处理，不把接口未做误当业务未确认。',files:['07-待确认与实施边界.md']}
];
const mdToHtml=Object.fromEntries(docs.flatMap(d=>d.files.map(f=>[f,d.out])));
mdToHtml['任务索引.md']='index.html';
const searchEntries=[],audit=[],flowCards=[];
const aiDir=path.join(root,'assets/ai-pages');await fs.mkdir(aiDir,{recursive:true});
for(const d of docs){d.raw=(await Promise.all(d.files.map(f=>fs.readFile(path.join(root,f),'utf8')))).join('\n\n---\n\n');d.markdown=d.raw;}
const extraCss=`
.sidebar h2{line-height:1.5}.sidebar a{overflow-wrap:anywhere}.sidebar .group{margin-top:18px}.sidebar nav .toc-link{font-size:14px;padding-top:6px;padding-bottom:6px}.sidebar nav a,.sidebar nav a.toc-link,.sidebar .group{font-family:"PingFang SC","Microsoft YaHei",sans-serif;font-size:14px;font-weight:400;line-height:1.75;letter-spacing:0}.sidebar nav a.current{font-weight:400}.doc{min-width:0}.doc>h1{display:none}.doc img{max-width:100%;height:auto}.doc h2,.doc h3,.doc h4{scroll-margin-top:24px}.doc td{overflow-wrap:anywhere}.doc pre{white-space:pre-wrap;overflow-wrap:anywhere}.doc .table-wrap{max-width:100%}.doc table{min-width:560px}.doc td:first-child{min-width:78px}.doc th{white-space:normal}.doc h2:first-of-type{margin-top:20px}.doc ol,.doc ul{padding-left:26px}.muted{color:var(--muted);font-size:13px}.page-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.page-card{display:block;text-decoration:none;color:var(--ink);background:white;padding:23px 25px;border-radius:15px;border:1px solid var(--line);box-shadow:var(--shadow)}.page-card:hover{border-color:#a78bfa}.page-card h3{margin:0 0 8px;color:var(--purple2)}.page-card p{margin:0;color:var(--muted);font-size:14px}.flow-card{margin:20px 0 30px;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}.flow-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:7px;padding:10px 12px;background:#faf8ff;border-bottom:1px solid var(--line)}.flow-toolbar button,.flow-toolbar a{font:inherit;font-size:12px;line-height:1.5;cursor:pointer;background:#fff;color:#5b21b6;border:1px solid #ddd3f1;border-radius:6px;padding:5px 9px;text-decoration:none}.flow-toolbar .zoom-label{font-size:12px;color:var(--muted);margin-left:auto}.flow-stage{height:620px;max-height:72vh;min-height:320px;overflow:hidden;position:relative;cursor:grab;touch-action:none;background:#fff;background-image:radial-gradient(#ddd6ed 1px,transparent 1px);background-size:18px 18px}.flow-stage.dragging{cursor:grabbing}.flow-stage>svg{display:block;position:absolute;left:0;top:0;max-width:none;transform-origin:0 0;user-select:none}.flow-stage text{font-family:'PingFang SC','Microsoft YaHei',sans-serif}.flow-source{border-top:1px solid var(--line)}.flow-source summary{padding:10px 14px;font-size:13px;color:var(--purple2);cursor:pointer}.flow-source pre{margin:0;border-radius:0;font-size:12px}.flow-caption{font-size:12px;padding:8px 14px;margin:0;color:var(--muted);border-top:1px solid var(--line)}.mobile-menu{display:none}.scope-line{font-size:13px;color:var(--muted)}.footer-nav{margin-top:30px;position:static}.hero .tag{background:#ffffff24;color:#f0eaff}.prototype-note{margin:14px 0;font-size:13px;color:var(--muted)}
@media(max-width:1050px){:root{--side:230px}.hero{padding:28px}.main{padding:24px 20px}.card{padding:20px}.page-cards{grid-template-columns:1fr}}
@media(max-width:720px){.main{width:100%;margin:0;padding:16px}.sidebar{display:none;width:min(85vw,300px)}body.menu-open .sidebar{display:block;box-shadow:-10px 0 40px #201a2c44}.mobile-menu{display:block;position:fixed;right:14px;top:12px;z-index:30;background:#5b21b6;color:#fff;border:1px solid #a78bfa;border-radius:8px;padding:7px 12px}.hero{padding:24px 20px}.hero h1{font-size:25px}.hero p{font-size:14px}.quick{bottom:14px;right:14px}.grid{grid-template-columns:1fr 1fr}.flow-stage{height:500px}.doc h2{font-size:22px}}
@media print{.sidebar,.quick,.mobile-menu,.actions,.flow-toolbar,.footer-nav{display:none!important}.main{width:100%;margin:0;padding:0}.hero{background:#fff;color:#211a49;box-shadow:none;padding:12px 0}.hero h1,.hero p,.eyebrow{color:#211a49}.card{box-shadow:none;padding:12px}.table-wrap{overflow:visible}table{font-size:10px}.flow-stage{height:850px;max-height:none;page-break-inside:avoid}.section{break-inside:avoid}}
`;
function parseFlow(source){
 const nodes=new Map(),edges=[];
 const nodePattern=/\b([A-Za-z][\w]*)\s*(\[[^\]]*\]|\{[^}]*\})/g;
 for(const m of source.matchAll(nodePattern)){nodes.set(m[1],{label:m[2].slice(1,-1),decision:m[2][0]==='{'});}
 const strip=s=>s.trim().match(/^([A-Za-z][\w]*)/)?.[1];
 for(const line of source.split('\n')){
  const m=line.trim().match(/^(.*?)\s+(-->|-\.->)(?:\|([^|]*)\|)?\s*(.*?)$/);
  if(!m)continue;const from=strip(m[1]),to=strip(m[4]);
  if(!from||!to)throw new Error('Cannot parse flow edge: '+line);
  edges.push({from,to,label:m[3]||'',dashed:m[2]==='-.->'});
 }
 for(const e of edges)if(!nodes.has(e.from)||!nodes.has(e.to))throw new Error('Missing flow node '+JSON.stringify(e));
 return {nodes,edges};
}
const viz=await instance();
function dotLabel(s){return JSON.stringify(s.replace(/(.{15})/gu,'$1\n').trim());}
function nodeWidth(n){const lines=n.label.replace(/(.{15})/gu,'$1\n').trim().split('\n');const units=Math.max(...lines.map(s=>[...s].reduce((a,c)=>a+(/[\x00-\x7f]/.test(c)?.6:1),0)));return ((units*15+42)*(n.decision?1.8:1)/72).toFixed(2);}

let flowIndex=0;
for(const d of docs){
 if(d.out==='flows.html'){
  for(const m of [...d.raw.matchAll(/```mermaid\n([\s\S]*?)```/g)]){
   const {nodes,edges}=parseFlow(m[1]);
   const dot=`digraph G { graph [rankdir=TB,bgcolor="white",pad="0.35",nodesep="0.45",ranksep="0.65",splines=polyline]; node [shape=box,style="rounded,filled",fontname="PingFang SC",fontsize=14,fillcolor="#f7f3ff",color="#b7a2df",fontcolor="#2e214a",margin="0.20,0.14"]; edge [fontname="PingFang SC",fontsize=12,color="#8a77a6",fontcolor="#695385",arrowsize=0.7]; ${[...nodes].map(([id,n])=>`${id} [label=${dotLabel(n.label)},width=${nodeWidth(n)}${n.decision?',shape=diamond,fillcolor="#fff7e8",color="#d6b36d"':''}];`).join('\n')} ${edges.map(e=>`${e.from} -> ${e.to} [label=${dotLabel(e.label)}];`).join('\n')} }`;
   const svg=viz.renderString(dot,{format:'svg',engine:'dot'}).replace(/<\?xml[^>]*>|<!DOCTYPE[\s\S]*?\]>|<!DOCTYPE[^>]*>/g,'');
   const name=`flow-${String(++flowIndex).padStart(2,'0')}.svg`;await fs.writeFile(path.join(root,'assets',name),svg);
   const token=`FLOWCARDPLACEHOLDER${flowIndex}`;
   const card=`<figure class="flow-card"><div class="flow-toolbar"><button data-action="in">＋ 放大</button><button data-action="out">－ 缩小</button><button data-action="fit">适应全图</button><button data-action="width">适应宽度</button><a href="assets/${name}" target="_blank" rel="noopener">独立查看 ↗</a><span class="zoom-label"></span></div><div class="flow-stage" aria-label="可缩放拖动的流程图" tabindex="0">${svg}</div><figcaption class="flow-caption">滚轮缩放 · 按住拖动 · 双击适应全图</figcaption><details class="flow-source"><summary>查看可编辑流程源码</summary><pre><code>${esc(m[1])}</code></pre></details></figure>`;
   flowCards.push({token,card});d.markdown=d.markdown.replace(m[0],`\n${token}\n`);audit.push({file:name,nodes:nodes.size,edges:edges.length});
  }
 }
 d.toc=[];
 const sectionRE=/^## (.+)\n([\s\S]*?)(?=^## |$(?![\s\S]))/gm;
 for(const m of d.raw.matchAll(sectionRE)){
  searchEntries.push({title:m[1],url:d.out+'#'+slug(m[1]),category:d.name,text:m[2].replace(/```[\s\S]*?```/g,'（流程图）').replace(/[|*#`]/g,' ').replace(/\s+/g,' ').trim()});
  const code=m[1].match(/^(B\d{2}|C\d{2}|P00|K\d{2})｜/)?.[1];
  if(code&&d.out==='development-spec.html'){
   let owner='';for(const f of d.files){if((await fs.readFile(path.join(root,f),'utf8')).includes('## '+m[1]+'\n')){owner=f;break;}}
   const fragmentBody=m[2].replace(/(href|src)="([^"]+)"/g,(all,attr,url)=>/^(?:[a-z]+:|#|\/)/i.test(url)?all:attr+'="../../'+url+'"').replace(/\]\(([^)]+)\)/g,(all,url)=>/^(?:[a-z]+:|#|\/)/i.test(url)?all:'](../../'+url+')');
   const related=[...new Set([...m[2].matchAll(/\bK0[1-7]\b/g)].map(x=>x[0]))].filter(x=>x!==code);
   await fs.writeFile(path.join(aiDir,code+'.md'),`# ${m[1]}\n\n编辑源：[${owner}](../../${owner})。本文件自动生成，请修改编辑源后重建。\n\n${fragmentBody}\n\n本节直接引用的公共规则：${related.length?related.map(x=>'['+x+']('+x+'.md)').join('、'):'无单独编号引用'}。\n\n需要跨页核对时见[公共规则](../../06-公共业务规则.md)；[待确认与实施边界](../../07-待确认与实施边界.md)另列，不把未决当既定要求。\n`);
  }
 }
 const usedIds=new Map();
 d.html=marked.parse(d.markdown).replace(/<h([234])>([\s\S]*?)<\/h\1>/g,(_,level,label)=>{const base=slug(label);const count=(usedIds.get(base)||0)+1;usedIds.set(base,count);const id=count===1?base:base+'-'+count;if(level==='2')d.toc.push({id,label:label.replace(/<[^>]*>/g,'')});return `<h${level} id="${id}">${label}</h${level}>`;}).replace(/<table>/g,'<div class="table-wrap"><table>').replace(/<\/table>/g,'</table></div>');
 for(const [src,dest] of Object.entries(mdToHtml))d.html=d.html.replaceAll(`href="${src}"`,`href="${dest}"`).replaceAll(`href="${src}#`,`href="${dest}#`);
 for(const {token,card} of flowCards)d.html=d.html.replace(`<p>${token}</p>`,card);
}
const uiScript=`
document.querySelector('.mobile-menu').onclick=()=>document.body.classList.toggle('menu-open');
document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
document.querySelectorAll('.flow-card').forEach(card=>{const stage=card.querySelector('.flow-stage'),svg=stage.querySelector('svg'),vb=svg.viewBox.baseVal;let scale=1,x=0,y=0,drag=null;const w=vb.width,h=vb.height;svg.style.width=w+'px';svg.style.height=h+'px';function paint(){svg.style.transform='translate('+x+'px,'+y+'px) scale('+scale+')';card.querySelector('.zoom-label').textContent=Math.round(scale*100)+'%';}function fit(widthOnly=false){scale=widthOnly?(stage.clientWidth-32)/w:Math.min((stage.clientWidth-32)/w,(stage.clientHeight-32)/h);x=(stage.clientWidth-w*scale)/2;y=widthOnly?16:(stage.clientHeight-h*scale)/2;paint();}function zoom(factor,cx=stage.clientWidth/2,cy=stage.clientHeight/2){const next=Math.max(.05,Math.min(5,scale*factor));x=cx-(cx-x)*next/scale;y=cy-(cy-y)*next/scale;scale=next;paint();}card.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>({in:()=>zoom(1.25),out:()=>zoom(.8),fit:()=>fit(),width:()=>fit(true)})[b.dataset.action]());stage.addEventListener('wheel',e=>{e.preventDefault();const r=stage.getBoundingClientRect();zoom(e.deltaY<0?1.12:1/1.12,e.clientX-r.left,e.clientY-r.top);},{passive:false});stage.addEventListener('pointerdown',e=>{drag={sx:e.clientX,sy:e.clientY,x,y};stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');});stage.addEventListener('pointermove',e=>{if(!drag)return;x=drag.x+e.clientX-drag.sx;y=drag.y+e.clientY-drag.sy;paint();});stage.addEventListener('pointerup',()=>{drag=null;stage.classList.remove('dragging')});stage.addEventListener('pointercancel',()=>{drag=null;stage.classList.remove('dragging')});stage.addEventListener('dblclick',()=>fit());stage.addEventListener('keydown',e=>{if(e.key==='+'||e.key==='=')zoom(1.25);if(e.key==='-')zoom(.8);if(e.key==='0')fit();});new ResizeObserver(()=>fit(true)).observe(stage);fit(true);});
const sections=[...document.querySelectorAll('.doc h2')];if(sections.length){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('.toc-link').forEach(a=>a.classList.toggle('current',a.hash==='#'+e.target.id));}},{rootMargin:'-5% 0px -70% 0px'});sections.forEach(s=>observer.observe(s));}
`;
const supplementalCss=`
.prototype-evidence{margin:14px 0;border:1px solid #ddd3f1;border-radius:9px;background:#fff}.prototype-evidence summary{padding:10px 14px;color:#5b21b6;cursor:pointer;font-size:13px}.prototype-evidence img{display:block;width:auto;max-width:100%;max-height:600px;margin:12px auto;object-fit:contain}.prototype-evidence p{margin:10px 14px;font-size:13px;color:#626579}.doc blockquote{border-left:4px solid #8b5cf6;padding:10px 15px;background:#eee8ff;border-radius:0 7px 7px 0}.doc blockquote p{margin:4px 0}

.doc>h1{display:none}.doc>hr{margin:42px 0}.search-box{margin:14px 0 20px}.search-box label{font-size:13px;font-weight:600}.search-box input{width:100%;margin:8px 0;padding:12px;border:1px solid #d8d0e5;border-radius:9px;font:inherit;background:white;color:#30233e}.search-results{background:#fff;border-radius:10px;border:1px solid var(--line);padding:8px 16px}.search-results[hidden]{display:none}.search-results a{display:block;padding:12px 0;border-bottom:1px solid var(--line);color:var(--purple2);text-decoration:none}.search-results a:last-child{border:0}.search-results small{display:block;color:var(--muted);font-size:13px;line-height:1.6;margin-top:4px}.draft-banner{background:#fff5dc;border:1px solid #f1dba4;border-radius:12px;padding:14px 20px;color:#72511e;font-size:14px;margin:18px 0}.doc h2{border-bottom:1px solid var(--line);padding-bottom:12px}.source-link{margin-top:12px;font-size:13px}.source-list{line-height:2}.overview-links{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px;margin:20px 0}.overview-links a{border:1px solid var(--line);border-radius:12px;background:white;padding:22px;color:var(--purple2);text-decoration:none}.overview-links a strong{display:block;font-size:18px;margin-bottom:8px}.overview-links a span{font-size:14px;color:var(--muted)}.ai-hint{margin-top:20px;font-size:13px;color:var(--muted)}@media(max-width:720px){.overview-links{grid-template-columns:1fr}.hero .actions{gap:8px}}`;
const nav=[['index.html','方案总览'],...docs.map(d=>[d.out,d.name])];
function menuLabel(label){const numbers={'一':1,'二':2,'三':3,'四':4,'五':5,'六':6,'七':7,'八':8,'九':9,'十':10};return label.replace(/^([一二三四五六七八九十]+)[、.．]\s*/,(_,n)=>(numbers[n]||n)+'. ');}
function sidebar(current,toc){return `<aside class="sidebar"><h2>V3.7 赛事活动报名</h2><div class="group">方案阅读</div><nav><a href="https://susantung.github.io/yanuoda/dev-test-versions/index.html">← 返回版本迭代需求说明</a>${nav.map(([file,name])=>`<a class="${file===current?'current':''}" href="${file}">${name}</a>`).join('')}<div class="group">本页目录</div>${toc.map(h=>`<a class="toc-link" href="#${h.id}">${esc(menuLabel(h.label))}</a>`).join('')}<div class="group">原型与开发AI</div><a href="../../preview/event-admin/index.html" target="_blank" rel="noopener">后台原型 ↗</a><a href="../../preview/miniapp/index.html" target="_blank" rel="noopener">小程序原型 ↗</a><a href="PRD｜赛事活动报名_整理评审稿_20261110.md">完整PRD Markdown</a><a href="ai-reading.html">按页面读取Markdown</a></nav></aside>`;}
const searchScript=`
const entries=${JSON.stringify(searchEntries).replaceAll('<','\u003c')};
const box=document.querySelector('#doc-search'),results=document.querySelector('#search-results');
box.addEventListener('input',()=>{const query=box.value.trim().toLowerCase();results.replaceChildren();results.hidden=!query;if(!query)return;const hits=entries.filter(e=>(e.title+' '+e.text).toLowerCase().includes(query)).sort((a,b)=>Number(b.title.toLowerCase().includes(query))-Number(a.title.toLowerCase().includes(query))).slice(0,12);if(!hits.length){results.textContent='没有找到，请尝试页面号或业务词，例如 C03、继续支付、手机号、总名额。';return;}for(const item of hits){const a=document.createElement('a');a.href=item.url;a.textContent=item.category+' · '+item.title;const small=document.createElement('small');const pos=item.text.toLowerCase().indexOf(query);small.textContent=item.text.slice(Math.max(0,pos-35),Math.max(0,pos-35)+160);a.append(small);results.append(a);}});
`;
function prototypeNewTabs(html){return html.replace(/<a\b([^>]*\bhref="[^"]*preview\/[^"]*"[^>]*)>/g,(_,attrs)=>'<a'+attrs.replace(/\s+target="[^"]*"/g,'').replace(/\s+rel="[^"]*"/g,'')+' target="_blank" rel="noopener noreferrer">');}
function page(out,title,intro,body,toc=[]){body=prototypeNewTabs(body);return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>V3.7 赛事活动报名｜${title}</title><style>${css}\n${extraCss}\n${supplementalCss}</style></head><body><button class="mobile-menu" aria-label="打开或关闭目录">目录 ☰</button>${sidebar(out,toc)}<main class="main"><header class="hero"><div class="eyebrow">开发 / 测试共用方案 · V3.7 · 2026-11-11</div><h1>${out==='index.html'?'V3.7 赛事活动报名':title}</h1><p>${intro}</p><div class="actions"><a class="btn" href="development-spec.html">完整需求方案</a><a class="btn" href="flows.html">全程流程图</a><a class="btn" href="page-list.html">页面清单</a><a class="btn" href="pending.html">待确认事项</a></div></header><div class="search-box"><label for="doc-search">查页面或问题</label><input id="doc-search" type="search" placeholder="输入 C03、继续支付、总名额、手机号…"><div class="search-results" id="search-results" role="region" aria-label="搜索结果" hidden></div></div>${body}<footer class="footer-nav"><a href="index.html">← 方案总览</a><a href="acceptance.html">开发与验收 →</a></footer></main><button class="quick" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="返回顶部">↑</button><script>${uiScript}\n${searchScript}</script></body></html>`;}
for(const d of docs)await fs.writeFile(path.join(root,d.out),page(d.out,d.name,d.intro,`<article class="doc">${d.html}</article>`,d.toc));
const overview=`<article class="doc"><h2 id="background">需求背景与目标</h2><div class="card"><p>首个落地场景是2027呀诺达一二三热带雨林水陆挑战赛。现有散客票交易能力可复用，但赛事需要独立的多人资料、暂存和逐人签署流程。</p><p>先支撑本次赛事报名闭环，再沉淀单人／多人、收费／免费、需要／无需签署的通用配置能力。</p><p><a href="development-spec.html#文档信息">文档信息</a> · <a href="development-spec.html#需求背景与目标">查看完整业务背景与目标 →</a></p></div><h2 id="read">先选你要查的内容</h2><div class="overview-links">${docs.map(d=>`<a href="${d.out}"><strong>${d.name}</strong><span>${d.intro}</span></a>`).join('')}<a href="ai-reading.html"><strong>开发AI按页读取</strong><span>每次只给页面片段及对应公共规则；完整PRD按需使用。</span></a></div><h2 id="scope">当前方案范围</h2><div class="card"><p>赛事 → 报名项目 → 收费报名项/关联票。主报人填N人资料，各人签本人，主报人统一提交；收费直接微信支付，免费直接完成。成功一份海报，核销仍用原订单二维码。</p><p>后台B01—B11、游客P00及C01—C11均有清晰职责。原订单、推广及前置页面配置复用；C04、C06不另建页面。</p></div></article>`;
await fs.writeFile(path.join(root,'index.html'),page('index.html','方案总览','按页面查规则，按流程看串联，按清单做研发核对。',[overview].join(''),[{id:'background',label:'需求背景与目标'},{id:'read',label:'阅读入口'},{id:'scope',label:'当前范围'}]));
const aiFiles=(await fs.readdir(aiDir)).filter(f=>f.endsWith('.md'));
const aiBody=`<article class="doc"><h2 id="ai">给开发AI的读取方式</h2><p>先给页面清单，确定页面号；再给下列对应片段，按需补公共规则与未决清单。片段由MD自动生成，不另维护。</p><p>例如只修改待付款底部按钮：读取C03.md、C07.md、K06.md即可。不要将整个旧会话和全部历史文件重新塞入上下文。</p><ul class="source-list">${aiFiles.map(f=>`<li><a href="assets/ai-pages/${f}">${f}</a></li>`).join('')}</ul><p><a href="PRD｜赛事活动报名_整理评审稿_20261110.md">确需一次读取完整PRD</a> · <a href="07-待确认与实施边界.md">待确认与实施边界</a></p></article>`;
await fs.writeFile(path.join(root,'ai-reading.html'),page('ai-reading.html','开发AI按页读取','先定位，再读相关页与公共规则，降低一次读取和重复理解的负担。',aiBody,[{id:'ai',label:'页级Markdown'}]));
const full=['# 赛事活动报名｜完整PRD（自动生成）\n\nV3.7 赛事活动报名。页面规则、业务流程与验收要求。\n',...['00-文档信息与需求背景.md','03-后台逐页功能方案.md','05-小程序逐页功能方案.md','06-公共业务规则.md','01-页面清单.md','02-全程流程图.md','04-开发核对与验收清单.md','07-待确认与实施边界.md','08-V1.1迭代对照.md'].map(f=>docs.find(d=>d.files.includes(f))).map(()=>null)];
// Read the individual sources exactly once, without introducing a separate editable PRD.
const fullParts=await Promise.all(['00-文档信息与需求背景.md','03-后台逐页功能方案.md','05-小程序逐页功能方案.md','06-公共业务规则.md','01-页面清单.md','02-全程流程图.md','04-开发核对与验收清单.md','07-待确认与实施边界.md','08-V1.1迭代对照.md'].map(f=>fs.readFile(path.join(root,f),'utf8')));
await fs.writeFile(path.join(root,'PRD｜赛事活动报名_整理评审稿_20261110.md'),full[0]+'\n\n'+fullParts.join('\n\n---\n\n'));
await fs.writeFile(path.join(root,'assets/search-index.json'),JSON.stringify(searchEntries,null,2));
await fs.writeFile(path.join(root,'assets/html-build-audit.json'),JSON.stringify({pages:['index.html',...docs.map(d=>d.out),'ai-reading.html'],flows:audit,sourceFiles:Object.keys(mdToHtml),aiFiles,reference:'支付配置化方案文档样式与离线流程图交互'},null,2));
console.log(JSON.stringify({html:8,flows:flowIndex,pageFragments:aiFiles.length,searchSections:searchEntries.length}));
