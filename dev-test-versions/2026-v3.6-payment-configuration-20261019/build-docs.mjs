import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {marked} from '/Users/susan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/marked/lib/marked.esm.js';
import {instance} from '/Users/susan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/@viz-js/viz/dist/viz.js';

const root=path.dirname(fileURLToPath(import.meta.url));
const reference=path.resolve(root,'../../../散客合作伙伴管理/方案与需求/2026-v3.2-partner-management-20260805/index.html');
const referenceHtml=await fs.readFile(reference,'utf8');
const css=referenceHtml.match(/<style>([\s\S]*?)<\/style>/)[1];
const esc=s=>String(s).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
const slug=s=>s.replace(/<[^>]*>/g,'').replace(/[^\p{L}\p{N}]+/gu,'-').replace(/^-|-$/g,'');
const docs=[
 {file:'01-页面清单.md',out:'page-list.html',name:'页面清单',intro:'全部新增、修改与复用入口，按页面编号连接后台、窗口和记录详情。'},
 {file:'02-全程流程图.md',out:'flows.html',name:'全程流程图',intro:'配置与绑定、内导结账补收、确认弹窗资源选择、冲红更正及每笔编号展示。所有图可离线查看、缩放和拖动。'},
 {file:'03-逐页功能方案.md',out:'development-spec.html',name:'完整需求方案',intro:'一种支付方式，一份统一配置，多场景适用。按页面说明字段、操作、校验与结果。'},
 {file:'04-开发核对与验收清单.md',out:'acceptance.html',name:'开发与验收',intro:'只验收本次配置、资源选择、编号记录及展示的增量。'}
];
for(const d of docs)d.markdown=await fs.readFile(path.join(root,d.file),'utf8');
docs[2].markdown+='\n\n---\n\n'+await fs.readFile(path.join(root,'05-冲红补充方案.md'),'utf8');
docs[2].markdown+='\n\n---\n\n'+await fs.readFile(path.join(root,'07-内导结账补充方案.md'),'utf8');
docs[2].markdown+='\n\n'+await fs.readFile(path.join(root,'06-记录范围与实施边界.md'),'utf8');
// 完整原生方案MD：正文与页面清单、流程图、验收一并提供，不以任务索引代替。
const nativeMarkdown='PRD｜支付配置化_V3.6_20261019.md';
const nativeSections=[docs[2],docs[0],docs[1],docs[3]].map((d,i)=>`${i?'\n\n---\n\n':''}${d.markdown}`);
await fs.writeFile(path.join(root,nativeMarkdown),nativeSections.join('').replace('版本：V1.9｜2026-11-05｜产品方案评审稿。','功能版本：V3.6｜方案修订：V1.9｜2026-11-05。'));
const linkMap={...Object.fromEntries(docs.map(d=>[d.file,d.out])),'05-冲红补充方案.md':'development-spec.html#24-W13-W14-销售记录与冲红申请','07-内导结账补充方案.md':'development-spec.html#29-内导收款页面与调整范围','06-记录范围与实施边界.md':'development-spec.html#34-记录范围'};
const admin='prototype/admin/index.html';
const qa='qa/index.html';
const windowPreview='prototype/window/index.html';
const extraCss=`
.sidebar h2{line-height:1.5}.sidebar a{overflow-wrap:anywhere}.sidebar .group{margin-top:18px}.sidebar nav .toc-link{font-size:12px;padding-top:6px;padding-bottom:6px}.doc{min-width:0}.doc>h1{display:none}.doc img{max-width:100%;height:auto}.doc h2,.doc h3,.doc h4{scroll-margin-top:24px}.doc td{overflow-wrap:anywhere}.doc pre{white-space:pre-wrap;overflow-wrap:anywhere}.doc .table-wrap{max-width:100%}.doc table{min-width:560px}.doc td:first-child{min-width:78px}.doc th{white-space:normal}.doc h2:first-of-type{margin-top:20px}.doc ol,.doc ul{padding-left:26px}.muted{color:var(--muted);font-size:13px}.page-cards{display:grid;grid-template-columns:repeat(2,minmax(0,1fr));gap:16px}.page-card{display:block;text-decoration:none;color:var(--ink);background:white;padding:23px 25px;border-radius:15px;border:1px solid var(--line);box-shadow:var(--shadow)}.page-card:hover{border-color:#a78bfa}.page-card h3{margin:0 0 8px;color:var(--purple2)}.page-card p{margin:0;color:var(--muted);font-size:14px}.flow-card{margin:20px 0 30px;border:1px solid var(--line);border-radius:12px;overflow:hidden;background:#fff}.flow-toolbar{display:flex;flex-wrap:wrap;align-items:center;gap:7px;padding:10px 12px;background:#faf8ff;border-bottom:1px solid var(--line)}.flow-toolbar button,.flow-toolbar a{font:inherit;font-size:12px;line-height:1.5;cursor:pointer;background:#fff;color:#5b21b6;border:1px solid #ddd3f1;border-radius:6px;padding:5px 9px;text-decoration:none}.flow-toolbar .zoom-label{font-size:12px;color:var(--muted);margin-left:auto}.flow-stage{height:620px;max-height:72vh;min-height:320px;overflow:hidden;position:relative;cursor:grab;touch-action:none;background:#fff;background-image:radial-gradient(#ddd6ed 1px,transparent 1px);background-size:18px 18px}.flow-stage.dragging{cursor:grabbing}.flow-stage>svg{display:block;position:absolute;left:0;top:0;max-width:none;transform-origin:0 0;user-select:none}.flow-stage text{font-family:'PingFang SC','Microsoft YaHei',sans-serif}.flow-source{border-top:1px solid var(--line)}.flow-source summary{padding:10px 14px;font-size:13px;color:var(--purple2);cursor:pointer}.flow-source pre{margin:0;border-radius:0;font-size:12px}.flow-caption{font-size:12px;padding:8px 14px;margin:0;color:var(--muted);border-top:1px solid var(--line)}.mobile-menu{display:none}.scope-line{font-size:13px;color:var(--muted)}.footer-nav{margin-top:30px;position:static}.hero .tag{background:#ffffff24;color:#f0eaff}.prototype-note{margin:14px 0;font-size:13px;color:var(--muted)}
@media(max-width:1050px){:root{--side:230px}.hero{padding:28px}.main{padding:24px 20px}.card{padding:20px}.page-cards{grid-template-columns:1fr}}
@media(max-width:720px){.main{width:100%;margin:0;padding:16px}.sidebar{display:none;width:min(85vw,300px)}body.menu-open .sidebar{display:block;box-shadow:-10px 0 40px #201a2c44}.mobile-menu{display:block;position:fixed;right:14px;top:12px;z-index:30;background:#5b21b6;color:#fff;border:1px solid #a78bfa;border-radius:8px;padding:7px 12px}.hero{padding:24px 20px}.hero h1{font-size:25px}.hero p{font-size:14px}.quick{bottom:14px;right:14px}.grid{grid-template-columns:1fr 1fr}.flow-stage{height:500px}.doc h2{font-size:22px}}
@media print{.sidebar,.quick,.mobile-menu,.actions,.flow-toolbar,.footer-nav{display:none!important}.main{width:100%;margin:0;padding:0}.hero{background:#fff;color:#211a49;box-shadow:none;padding:12px 0}.hero h1,.hero p,.eyebrow{color:#211a49}.card{box-shadow:none;padding:12px}.table-wrap{overflow:visible}table{font-size:10px}.flow-stage{height:850px;max-height:none;page-break-inside:avoid}.section{break-inside:avoid}}
`;
const headings={};
function renderMarkdown(markdown,key){
 let html=marked.parse(markdown);
 const list=[];
 html=html.replace(/<h([234])>([\s\S]*?)<\/h\1>/g,(_,level,label)=>{const id=slug(label);if(level==='2')list.push({id,label:label.replace(/<[^>]*>/g,'')});return `<h${level} id="${id}">${label}</h${level}>`;});
 html=html.replace(/<table>/g,'<div class="table-wrap"><table>').replace(/<\/table>/g,'</table></div>');
 html=html.replace(/<a href="([^\"]*outputs\/product-preview\/[^\"]+)"/g,'<a class="prototype-link" target="_blank" rel="noopener noreferrer" href="$1"');
 for(const [src,dest] of Object.entries(linkMap))html=html.replaceAll(`href="${src}"`,`href="${dest}"`);
 headings[key]=list;
 return html;
}

// Convert the limited, explicitly authored Mermaid flowchart syntax into DOT.
// Each declared node and each edge is retained; no online rendering dependency.
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
let flowCount=0;const flowAudit=[],flowCards=[];
for(const d of docs){
 if(d.out==='flows.html'){
  const blocks=[...d.markdown.matchAll(/```mermaid\n([\s\S]*?)```/g)];
  for(const [index,m] of blocks.entries()){
   const {nodes,edges}=parseFlow(m[1]);
   const dot=`digraph G { graph [rankdir=TB,bgcolor="white",pad="0.35",nodesep="0.45",ranksep="0.65",splines=polyline]; node [shape=box,style="rounded,filled",fontname="PingFang SC",fontsize=14,fillcolor="#f7f3ff",color="#b7a2df",fontcolor="#2e214a",margin="0.20,0.14"]; edge [fontname="PingFang SC",fontsize=12,color="#8a77a6",fontcolor="#695385",arrowsize=0.7]; ${[...nodes].map(([id,n])=>`${id} [label=${dotLabel(n.label)},width=${nodeWidth(n)}${n.decision?',shape=diamond,fillcolor="#fff7e8",color="#d6b36d"':''}];`).join('\n')} ${edges.map(e=>`${e.from} -> ${e.to} [label=${dotLabel(e.label)}${e.dashed?',style=dashed':''}];`).join('\n')} }`;
   const svg=viz.renderString(dot,{format:'svg',engine:'dot'}).replace(/<\?xml[^>]*>|<!DOCTYPE[\s\S]*?\]>|<!DOCTYPE[^>]*>/g,'');
   const name=`flow-${String(index+1).padStart(2,'0')}.svg`;await fs.writeFile(path.join(root,'assets',name),svg);
   const card=`<figure class="flow-card"><div class="flow-toolbar"><button data-action="in" aria-label="放大流程图">＋ 放大</button><button data-action="out" aria-label="缩小流程图">－ 缩小</button><button data-action="fit">适应全图</button><button data-action="width">适应宽度</button><a href="assets/${name}" target="_blank" rel="noopener">独立查看 ↗</a><span class="zoom-label"></span></div><div class="flow-stage" aria-label="可缩放拖动的流程图" tabindex="0">${svg}</div><figcaption class="flow-caption">默认适应宽度 · 滚轮缩放 · 按住拖动 · 双击适应全图</figcaption><details class="flow-source"><summary>查看可编辑流程源码</summary><pre><code>${esc(m[1])}</code></pre></details></figure>`;
   const token=`FLOWCARDPLACEHOLDER${flowCards.length}`;flowCards.push({token,card});d.markdown=d.markdown.replace(m[0],`\n${token}\n`);flowCount++;flowAudit.push({name,nodes:nodes.size,edges:edges.length});
  }
  // The first illustration duplicates the first flow; retain the overview as a link, not a second giant image.
  d.markdown=d.markdown.replace(/!\[支付配置到售票、充值与历史记录全程总览\]\([^)]*\)/,'[查看简明总览图](assets/payment-overview.svg)；下方为可缩放的完整节点流程。');
 }
 d.html=renderMarkdown(d.markdown,d.out);
 for(const {token,card} of flowCards)d.html=d.html.replace(`<p>${token}</p>`,card);
}

function sidebar(current,toc=[]){return `<aside class="sidebar"><h2>支付配置化专项</h2><div class="group">版本迭代需求</div><a href="../index.html">← 返回版本列表</a><div class="group">开发 / 测试共同方案</div><nav>${[['index.html','方案总览'],['development-spec.html','完整需求方案'],['page-list.html','页面清单'],['flows.html','全程流程图'],['acceptance.html','开发与验收'],[qa,'测试环境验收方案']].map(([file,title])=>`<a class="${file===current?'current':''}" href="${file}">${title}</a>`).join('')}<div class="group">${current==='index.html'?'推荐阅读顺序':'本页目录'}</div>${toc.map(h=>`<a class="toc-link" href="#${h.id}">${esc(h.label)}</a>`).join('')}<div class="group">原型入口</div><a href="${admin}" target="_blank" rel="noopener">后台原型 ↗</a><a href="${windowPreview}" target="_blank" rel="noopener">售票窗口原型 ↗</a><div class="group">源文件</div><a href="PRD｜支付配置化_V3.6_20261019.md" target="_blank" rel="noopener noreferrer">打开完整 Markdown ↗</a></nav></aside>`;}
const uiScript=`
document.querySelector('.mobile-menu').onclick=()=>document.body.classList.toggle('menu-open');
document.querySelectorAll('.sidebar a').forEach(a=>a.addEventListener('click',()=>document.body.classList.remove('menu-open')));
document.querySelectorAll('.flow-card').forEach(card=>{const stage=card.querySelector('.flow-stage'),svg=stage.querySelector('svg'),vb=svg.viewBox.baseVal;let scale=1,x=0,y=0,drag=null;const w=vb.width,h=vb.height;svg.style.width=w+'px';svg.style.height=h+'px';function paint(){svg.style.transform='translate('+x+'px,'+y+'px) scale('+scale+')';card.querySelector('.zoom-label').textContent=Math.round(scale*100)+'%';}function fit(widthOnly=false){scale=widthOnly?(stage.clientWidth-32)/w:Math.min((stage.clientWidth-32)/w,(stage.clientHeight-32)/h);x=(stage.clientWidth-w*scale)/2;y=widthOnly?16:(stage.clientHeight-h*scale)/2;paint();}function zoom(factor,cx=stage.clientWidth/2,cy=stage.clientHeight/2){const next=Math.max(.05,Math.min(5,scale*factor));x=cx-(cx-x)*next/scale;y=cy-(cy-y)*next/scale;scale=next;paint();}card.querySelectorAll('[data-action]').forEach(b=>b.onclick=()=>({in:()=>zoom(1.25),out:()=>zoom(.8),fit:()=>fit(),width:()=>fit(true)})[b.dataset.action]());stage.addEventListener('wheel',e=>{e.preventDefault();const r=stage.getBoundingClientRect();zoom(e.deltaY<0?1.12:1/1.12,e.clientX-r.left,e.clientY-r.top);},{passive:false});stage.addEventListener('pointerdown',e=>{drag={sx:e.clientX,sy:e.clientY,x,y};stage.setPointerCapture(e.pointerId);stage.classList.add('dragging');});stage.addEventListener('pointermove',e=>{if(!drag)return;x=drag.x+e.clientX-drag.sx;y=drag.y+e.clientY-drag.sy;paint();});stage.addEventListener('pointerup',()=>{drag=null;stage.classList.remove('dragging')});stage.addEventListener('pointercancel',()=>{drag=null;stage.classList.remove('dragging')});stage.addEventListener('dblclick',()=>fit());stage.addEventListener('keydown',e=>{if(e.key==='+'||e.key==='=')zoom(1.25);if(e.key==='-')zoom(.8);if(e.key==='0')fit();});new ResizeObserver(()=>fit(true)).observe(stage);fit(true);});
const sections=[...document.querySelectorAll('.doc h2')];if(sections.length){const observer=new IntersectionObserver(entries=>{for(const e of entries)if(e.isIntersecting){document.querySelectorAll('.toc-link').forEach(a=>a.classList.toggle('current',a.hash==='#'+e.target.id));}},{rootMargin:'-5% 0px -70% 0px'});sections.forEach(s=>observer.observe(s));}
`;
function page(out,title,intro,body,toc){return `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>支付配置化｜${title}</title><style>${css}\n${extraCss}</style></head><body><button class="mobile-menu" aria-label="打开或关闭目录">目录 ☰</button>${sidebar(out,toc)}<main class="main"><header class="hero"><div class="eyebrow">支付配置化专项 · V1.9 · 2026-11-05</div><h1>${title}</h1><p>${intro}</p><div class="actions"><a class="btn" href="development-spec.html">完整需求方案</a><a class="btn" href="flows.html">全程流程图</a><a class="btn" href="page-list.html">页面清单</a><a class="btn" href="${admin}" target="_blank" rel="noopener">后台原型 ↗</a><a class="btn" href="${windowPreview}" target="_blank" rel="noopener">售票窗口 ↗</a></div></header>${body}<footer class="footer-nav"><a href="index.html">← 方案总览</a><span class="muted">本地评审稿 · 未发布上传</span><a href="acceptance.html">开发与验收 →</a></footer></main><button class="quick" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="返回顶部">↑</button><script>${uiScript}</script></body></html>`;}
for(const d of docs)await fs.writeFile(path.join(root,d.out),page(d.out,d.name,d.intro,`<article class="doc">${d.html}</article>`,headings[d.out]));
const overview=`<section class="section" id="model"><h2>本次改造</h2><div class="card"><p class="lead">统一配置支付方式、适用场景、排序及收款资源；售票、内导补收和充值按配置使用，每笔扫码付/银行卡记录柜台编码/POS编号；冲红支持更正方式、资源或编号，审核通过后生效。</p><div class="grid"><div class="metric"><strong>9</strong>支付方式</div><div class="metric"><strong>5</strong>可配置业务场景</div><div class="metric"><strong>36</strong>页面 / 弹窗 / 复用状态</div></div></div></section><section class="section" id="reading"><h2>方案阅读入口</h2><div class="page-cards">${docs.map(d=>`<a class="page-card" href="${d.out}"><h3>${d.name} →</h3><p>${d.intro}</p></a>`).join('')}<a class="page-card" href="${qa}"><h3>测试环境验收方案 →</h3><p>查看测试范围、执行用例、页面核对与测试结果。</p></a></div></section><section class="section" id="scope"><h2>完整业务链路</h2><div class="card"><p>后台配置 → 资源主数据 → 账号 / 设备绑定 → 确认弹窗选择资源 → 原下单 / 支付 / 充值 / 内导补收处理 → 每笔记录柜台编码/POS编号 → 订单支付信息展示；冲红申请 → 审核复核 → 更新有效支付 → 保留前后快照。</p><p><a href="flows.html">查看完整流程图（含内导结账补收、冲红及历史展示） →</a></p></div></section><section class="section" id="rules"><h2>已确认的关键规则</h2><div class="card"><ul><li>各页面先按启用、场景及资格筛选支付方式，再按序号升序展示，首次默认本页最小序号；允许0、跳号和重复，相同序号按数据库原有排序二次排序。确认弹窗沿用已选方式，伙伴账户保持锁定，冲红初始不选。</li><li>后台变更后，窗口点击支付方式右侧刷新按钮或关闭业务标签重开；弹窗关闭重开后才加载新配置。提交按前端已加载数据校验，不新增接口实时复核。</li><li>支付配置与支付资源管理保持两个并列菜单；扫码付、银行卡分别维护一份统一资源规则。</li><li>团队允许九种支付方式；内导散客六种、内导团队九种，共用内导售票场景；长期合作伙伴仅默认账户对应的挂帐 / 预付款；临时客户固定挂帐。</li><li>只按所选账号或实际窗口设备取资源，无配置不跨主体兜底；编号自动带出且只读。</li><li>散客 / 团队资源在确认弹窗“一人一票”右侧；内导开单资源在原打印按钮右侧；结账补收资源在支付方式右侧；伙伴充值动态字段位于支付按钮下方。</li><li>缺资源不拦主页面确认下单；在确认弹窗资源区域提示一次，阻止最终出票，取消后主页面不留资源错误。</li><li>所有支付方式确认后沿用原处理；仅扫码付/银行卡新增每笔资源及柜台编码/POS编号记录，在订单支付、充值支付信息及内导各笔交易中展示。</li><li>扫码付/银行卡可通过冲红更正同方式下的资源或编号；申请按发起账号/实际设备取资源，审核按申请时快照处理，不按当前配置重校验，同意成功后才更新有效支付，各次前后快照独立保存。</li></ul></div></section>`;
await fs.writeFile(path.join(root,'index.html'),page('index.html','支付配置化功能方案','从后台统一配置到窗口实际使用，将资源绑定、售票、充值与历史记录贯通。',overview,[{id:'model',label:'本次改造'},{id:'reading',label:'方案阅读入口'},{id:'scope',label:'完整业务链路'},{id:'rules',label:'关键规则'}]));
await fs.writeFile(path.join(root,'assets','html-build-audit.json'),JSON.stringify({pages:['index.html',...docs.map(d=>d.out)],flowCount,flows:flowAudit,styleReference:path.relative(root,reference)},null,2));
console.log(JSON.stringify({pages:5,renderedFlows:flowCount,flows:flowAudit}));
