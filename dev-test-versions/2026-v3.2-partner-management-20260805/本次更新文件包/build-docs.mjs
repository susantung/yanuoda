import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const source = path.join(here, 'PRD｜散客合作伙伴管理_V3.2_20260805.md');
const md = fs.readFileSync(source, 'utf8');
// 所有文档和原型之间使用相对路径：本地 file:// 和上传服务器均可打开。
const prototypeBase = 'prototype/index.html';
const ticketPrototypeBase = 'prototype/ticket-window.html';
const partnerWorkspaceBase = 'prototype/partner-workspace.html';
const partnerStatementBase = 'prototype/partner-statement.html';
const external = 'target="_blank" rel="noopener noreferrer"';

function prototypeLink(heading) {
  const routes = [
    ['3. 产品入口与菜单规划', '#/partner'],
    ['5. 合作伙伴档案', '#/partner'],
    ['6. 合作伙伴账户管理', '#/partner-account'],
    ['7. 充值申请', '#/recharge?tab=account'],
    ['8. 临时客户转合作伙伴', '#/recharge?tab=account'],
    ['9. 批量导入充值', '#/recharge?tab=account'],
    ['11. 资金流水', '#/flow?tab=all'],
    ['10. 订单与退款处理', '#/order-detail?orderNo=DD202608050011'],
    ['10.4 报表中心：合作伙伴对帐单', 'partner-statement'],
    ['12.7 售票窗口合作伙伴工作区', 'partner-workspace'],
    ['12. 售票窗口', null]
  ];
  const found = routes.find(([prefix]) => heading.startsWith(prefix));
  if (!found) return '';
  const href = found[1] === null ? ticketPrototypeBase : found[1] === 'partner-workspace' ? partnerWorkspaceBase : found[1] === 'partner-statement' ? partnerStatementBase : `${prototypeBase}${found[1]}`;
  return `<a class="prototype-link" href="${href}" ${external}>打开对应原型 ↗</a>`;
}

const escape = (value = '') => value.replaceAll('&', '&amp;').replaceAll('<', '&lt;').replaceAll('>', '&gt;');
const inline = (value) => escape(value)
  .replace(/!\[([^\]]*)\]\(([^)]+)\)/g, '<img class="diagram-thumb" src="$2" alt="$1">')
  .replace(/`([^`]+)`/g, '<code>$1</code>')
  .replace(/\*\*([^*]+)\*\*/g, '<strong>$1</strong>')
  .replace(/\[([^\]]+)\]\(([^)]+)\)/g, '<a href="$2" target="_blank">$1 ↗</a>');

function table(rows) {
  const cells = (line) => line.trim().replace(/^\||\|$/g, '').split('|').map((cell) => cell.trim());
  const header = cells(rows[0]);
  const body = rows.slice(2).map(cells);
  return `<div class="table-wrap"><table><thead><tr>${header.map((cell) => `<th>${inline(cell)}</th>`).join('')}</tr></thead><tbody>${body.map((row) => `<tr>${header.map((_, index) => `<td>${inline(row[index] || '')}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
}

function render(markdown) {
  const lines = markdown.split(/\r?\n/);
  let html = '';
  let i = 0;
  let list = null;
  const closeList = () => { if (list) html += `</${list}>`; list = null; };
  while (i < lines.length) {
    const line = lines[i];
    if (line.startsWith('```')) {
      closeList();
      const buffer = [];
      i += 1;
      while (i < lines.length && !lines[i].startsWith('```')) buffer.push(lines[i++]);
      html += `<pre><code>${escape(buffer.join('\n'))}</code></pre>`;
      i += 1;
      continue;
    }
    if (/^\|/.test(line) && /^\|/.test(lines[i + 1] || '') && /---/.test(lines[i + 1] || '')) {
      closeList();
      const rows = [line, lines[i + 1]];
      i += 2;
      while (i < lines.length && /^\|/.test(lines[i])) rows.push(lines[i++]);
      html += table(rows);
      continue;
    }
    const heading = line.match(/^(#{1,4})\s+(.+)$/);
    if (heading) {
      closeList();
      const level = heading[1].length;
      const text = heading[2];
      const id = text.replace(/[^\w\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '');
      const link = level === 2 ? prototypeLink(text) : '';
      html += `<h${level} id="${id}">${inline(text)}${link}</h${level}>`;
      i += 1;
      continue;
    }
    const li = line.match(/^\s*[-*]\s+(.+)$/);
    const ol = line.match(/^\s*\d+\.\s+(.+)$/);
    if (li || ol) {
      const type = ol ? 'ol' : 'ul';
      if (list !== type) { closeList(); html += `<${type}>`; list = type; }
      html += `<li>${inline((li || ol)[1])}</li>`;
      i += 1;
      continue;
    }
    if (!line.trim()) { closeList(); i += 1; continue; }
    if (/^>\s?/.test(line)) { closeList(); html += `<blockquote>${inline(line.replace(/^>\s?/, ''))}</blockquote>`; i += 1; continue; }
    closeList();
    html += `<p>${inline(line)}</p>`;
    i += 1;
  }
  closeList();
  return html.replace(/<h3 id="3-4-总体业务流程图">[\s\S]*?(?=<h2 id="4-核心对象与数据口径">)/, flowBlockUsable);
}

const headings = [...md.matchAll(/^##\s+(.+)$/gm)].map((match) => ({
  text: match[1],
  id: match[1].replace(/[^\w\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '')
}));

const css = `
:root{--ink:#201a2c;--muted:#71697d;--purple:#7c3aed;--purple2:#4c1d95;--soft:#f5f3ff;--line:#e8e2f1;--side:272px;--shadow:0 8px 30px rgba(58,35,91,.09)}*{box-sizing:border-box}html{scroll-behavior:smooth}body{margin:0;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif;background:#f3f0f7;color:var(--ink);line-height:1.75}.sidebar{position:fixed;right:0;top:0;width:var(--side);height:100vh;overflow:auto;padding:26px 0;background:linear-gradient(180deg,#1e1b4b,#312e81 58%,#4c1d95);z-index:20}.sidebar h2{padding:0 22px;margin:0 0 16px;color:#e9d5ff;font-size:15px;letter-spacing:1px}.sidebar a{display:block;padding:9px 22px;color:#c4b5fd;text-decoration:none;font-size:14px;border-left:3px solid transparent}.sidebar a:hover,.sidebar a.current{color:#fff;background:#ffffff14;border-left-color:#a78bfa}.sidebar .group{margin:13px 22px 5px;color:#a5b4fc;font-size:11px;letter-spacing:1px}.main{width:calc(100% - var(--side));margin-right:var(--side);padding:28px clamp(20px,2.4vw,44px) 70px;max-width:none}.hero{padding:42px 46px;margin-bottom:28px;border-radius:20px;color:#fff;background:linear-gradient(135deg,#1e1b4b,#4c1d95 62%,#7c3aed);box-shadow:0 16px 50px #6d28d933}.hero h1{margin:0 0 8px;font-size:31px;line-height:1.35;color:#fff}.hero p{margin:0;color:#f1efff}.eyebrow{font-size:12px;letter-spacing:2px;color:#ded7ff;margin-bottom:10px}.actions{display:flex;gap:10px;flex-wrap:wrap;margin-top:20px}.hero .btn{display:inline-block;padding:8px 15px;border-radius:9px;background:#fff;border:1px solid #fff;color:#4c1d95!important;text-decoration:none;font-size:13px;font-weight:700}.hero .btn:hover{background:#ede9fe;border-color:#ede9fe}.section{margin:0 0 34px;scroll-margin-top:20px}.section h2{font-size:23px;margin:0 0 14px;color:#211a49}.card{background:#fff;padding:25px 29px;margin:0 0 18px;border-radius:15px;border-left:4px solid var(--purple);box-shadow:var(--shadow)}.lead{font-size:16px;color:#534b60}.grid{display:grid;grid-template-columns:repeat(3,minmax(0,1fr));gap:16px}.metric{text-align:center;background:#fff;padding:20px;border-radius:14px;box-shadow:var(--shadow)}.metric strong{display:block;font-size:29px;color:var(--purple)}.doc h1{display:none}.doc h2{margin:42px 0 16px;padding-top:10px;border-top:1px solid var(--line);font-size:25px;color:#211a49;scroll-margin-top:20px}.doc h2 .prototype-link{display:inline-flex;vertical-align:middle;align-items:center;margin:0 0 2px 10px;padding:3px 9px;border-radius:999px;background:#7c3aed;color:#fff;text-decoration:none;font-size:12px;font-weight:600;line-height:1.5}.doc h2 .prototype-link:hover{background:#5b21b6;color:#fff}.doc h3{font-size:19px;color:#4c1d95;margin:29px 0 10px}.doc h4{font-size:16px;color:#6d28d9;margin:21px 0 8px}.doc p{margin:10px 0}.doc strong{color:#35205f}.doc code{padding:2px 5px;border-radius:5px;background:#f2eff8;font-family:SFMono-Regular,Consolas,monospace;font-size:.92em}.doc pre code{padding:0;border-radius:0;background:transparent;color:inherit;font-size:inherit}.table-wrap{overflow:auto;margin:15px 0 22px;border-radius:11px;border:1px solid var(--line)}table{width:100%;border-collapse:collapse;background:#fff;font-size:13px}th{background:#ede9fe;color:#4c1d95;text-align:left;white-space:nowrap}th,td{padding:10px 12px;border-right:1px solid var(--line);border-bottom:1px solid var(--line);vertical-align:top}tr:last-child td{border-bottom:0}tr:nth-child(even) td{background:#fcfbfe}th:last-child,td:last-child{border-right:0}ul,ol{padding-left:24px;margin:10px 0 16px}li{margin:6px 0}pre{padding:16px;background:#1f1930;color:#e9d5ff;border-radius:10px;overflow:auto;line-height:1.6}blockquote{margin:12px 0;padding:10px 16px;background:#faf5ff;border-left:3px solid #a78bfa}.quick{position:fixed;right:calc(var(--side) + 26px);bottom:24px;width:42px;height:42px;border:0;border-radius:12px;background:var(--purple);color:#fff;cursor:pointer;box-shadow:var(--shadow)}a{color:#6d28d9}.tag{display:inline-block;padding:3px 9px;border-radius:999px;background:#ede9fe;color:#5b21b6;font-size:12px}.notice{padding:14px 17px;border-radius:10px;margin:14px 0;background:#eff6ff;border-left:3px solid #3b82f6}.footer-nav{position:sticky;bottom:0;background:#ffffffeb;backdrop-filter:blur(8px);border-top:1px solid var(--line);padding:13px 20px;display:flex;gap:10px;justify-content:space-between;align-items:center}.footer-nav a{font-size:13px;text-decoration:none}@media(max-width:950px){:root{--side:220px}.main{padding:24px 20px}.grid{grid-template-columns:1fr 1fr}.hero{padding:30px}}@media(max-width:720px){.sidebar{display:none}.main{width:100%;margin-right:0;padding:18px}.grid{grid-template-columns:1fr}.quick{right:18px}.hero h1{font-size:26px}.doc h2 .prototype-link{margin:8px 0 0;font-size:11px}}`;

const flowMermaid = fs.readFileSync(path.join(here, 'assets/overall-flow-v32.mmd'), 'utf8').trim();
const flowBlock2 = `<style>.diagram-thumb{display:block;width:100%;max-height:520px;object-fit:contain;border:1px solid var(--line);border-radius:12px;cursor:zoom-in;background:#fff}.diagram-caption{font-size:12px;color:var(--muted);margin:6px 0 15px}.code-details{border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-top:15px}.code-details summary{padding:12px 16px;background:#faf8fd;color:#6d28d9;cursor:pointer;font-weight:600}.mermaid-tools{display:flex;justify-content:flex-end;gap:10px;flex-wrap:wrap;margin:12px 0 4px}.mermaid-tools .btn{display:inline-block;padding:7px 11px;border:0;border-radius:8px;background:#7c3aed;color:#fff;text-decoration:none;cursor:pointer;font-size:13px}.code-box{position:relative;padding:12px;background:#1f1930}.code-box textarea{display:block;width:100%;height:300px;resize:vertical;border:0;outline:0;background:transparent;color:#e9d5ff;font:12px/1.65 SFMono-Regular,Consolas,monospace}.copy-btn{position:absolute;right:16px;top:15px;border:0;border-radius:7px;padding:6px 10px;background:#7c3aed;color:#fff;cursor:pointer}.lightbox{display:none;position:fixed;inset:0;z-index:1000;padding:3vh 3vw;background:#fff;align-items:center;justify-content:center;cursor:zoom-out}.lightbox.open{display:flex}.lightbox img{max-width:94vw;max-height:92vh;border-radius:8px;background:#fff;box-shadow:0 8px 32px #0002}</style><h3 id="3-4-总体业务流程图">3.4 总体业务流程图</h3><div class="card"><img class="diagram-thumb zoomable" src="assets/overall-flow-v32-overview.svg" alt="散客合作伙伴管理 V3.2 业务全流程概览"><p class="diagram-caption">业务全流程概览，点击缩略图可放大查看。</p><details class="code-details"><summary>开发辅助：展开 Mermaid 源码</summary><div class="mermaid-tools"><button class="btn" type="button" onclick="showFlow('assets/overall-flow-v32.svg')">查看 Mermaid 全图</button><a class="btn" href="assets/overall-flow-v32.svg" download="散客合作伙伴管理V3.2-全功能流程图.svg">下载 SVG 图片</a></div><div class="code-box"><button class="copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('mermaidCode').value).then(()=>{this.textContent='已复制';setTimeout(()=>this.textContent='复制代码',1200)})">复制代码</button><textarea id="mermaidCode" readonly>${flowMermaid}</textarea></div></details></div><div id="lightbox" class="lightbox" onclick="if(event.target===this)this.classList.remove('open')"><img id="flowPreview" alt="流程图放大预览"></div><script>const lb=document.getElementById('lightbox'),preview=document.getElementById('flowPreview');function showFlow(src){preview.src=src;lb.classList.add('open')}document.querySelectorAll('.zoomable').forEach(x=>x.onclick=()=>showFlow(x.src));document.addEventListener('keydown',e=>{if(e.key==='Escape')lb.classList.remove('open')});</script>`;
const flowBlock3 = flowBlock2.replace(/<a class="btn" href="assets\/overall-flow-v32\.svg" download="[^"]+">下载 SVG 图片<\/a>/, '');
const flowBlock = `<style>.diagram-thumb{display:block;width:100%;max-height:520px;object-fit:contain;border:1px solid var(--line);border-radius:12px;cursor:zoom-in;background:#fff}.diagram-caption{font-size:12px;color:var(--muted);margin:6px 0 15px}.code-details{border:1px solid var(--line);border-radius:10px;overflow:hidden;margin-top:15px}.code-details summary{padding:12px 16px;background:#faf8fd;color:#6d28d9;cursor:pointer;font-weight:600}.mermaid-tools{display:flex;justify-content:flex-end;gap:10px;flex-wrap:wrap;margin:12px 0 4px}.mermaid-tools .btn{display:inline-block;padding:7px 11px;border:0;border-radius:8px;background:#7c3aed;color:#fff;text-decoration:none;cursor:pointer;font-size:13px}.code-box{position:relative;padding:12px;background:#1f1930}.code-box textarea{display:block;width:100%;height:300px;resize:vertical;border:0;outline:0;background:transparent;color:#e9d5ff;font:12px/1.65 SFMono-Regular,Consolas,monospace}.copy-btn{position:absolute;right:16px;top:15px;border:0;border-radius:7px;padding:6px 10px;background:#7c3aed;color:#fff;cursor:pointer}.lightbox{display:none;position:fixed;inset:0;z-index:1000;padding:18px;background:#fff}.lightbox.open{display:block}.lightbox-toolbar{height:42px;display:flex;justify-content:flex-end;gap:8px}.lightbox-toolbar button{border:0;border-radius:8px;padding:8px 12px;background:#7c3aed;color:#fff;cursor:pointer}.lightbox-stage{height:calc(100% - 42px);overflow:hidden;background:#fff;border:1px solid var(--line);border-radius:10px;cursor:grab;touch-action:none}.lightbox-stage.dragging{cursor:grabbing}.lightbox-stage img{display:block;background:#fff;transform-origin:0 0;pointer-events:none;user-select:none}</style><h3 id="3-4-总体业务流程图">3.4 总体业务流程图</h3><div class="card"><img class="diagram-thumb zoomable" src="assets/overall-flow-v32-overview.svg" alt="散客合作伙伴管理 V3.2 业务全流程概览"><p class="diagram-caption">业务全流程概览，点击缩略图可放大查看。</p><details class="code-details"><summary>开发辅助：展开 Mermaid 源码</summary><div class="mermaid-tools"><button class="btn" type="button" onclick="openFlow('assets/overall-flow-v32.svg')">查看 Mermaid 全图 ↗</button><a class="btn" href="assets/overall-flow-v32.svg" download="散客合作伙伴管理V3.2-全功能流程图.svg">下载 SVG 图片</a></div><div class="code-box"><button class="copy-btn" onclick="navigator.clipboard.writeText(document.getElementById('mermaidCode').value).then(()=>{this.textContent='已复制';setTimeout(()=>this.textContent='复制代码',1200)})">复制代码</button><textarea id="mermaidCode" readonly>${flowMermaid}</textarea></div></details></div><div id="lightbox" class="lightbox"><div class="lightbox-toolbar"><button type="button" onclick="zoomFlow(.8)">缩小</button><button type="button" onclick="fitFlow()">适应窗口</button><button type="button" onclick="zoomFlow(1.25)">放大</button><button type="button" onclick="closeFlow()">关闭</button></div><div id="flowStage" class="lightbox-stage"><img id="flowImage" alt="流程图放大预览"></div></div><script>const lb=document.getElementById('lightbox'),stage=document.getElementById('flowStage'),flowImg=document.getElementById('flowImage');let fs=1,fx=0,fy=0,drag=false,dx=0,dy=0;function paintFlow(){flowImg.style.transform='translate('+fx+'px,'+fy+'px) scale('+fs+')'}function fitFlow(){const full=flowImg.src.includes('overall-flow-v32.svg')&&!flowImg.src.includes('overview');fs=full?Math.min((stage.clientWidth-36)/3788,(stage.clientHeight-36)/8198):Math.min((stage.clientWidth-36)/1400,(stage.clientHeight-36)/650);fx=(stage.clientWidth-(full?3788:1400)*fs)/2;fy=18;paintFlow()}function openFlow(src){flowImg.src=src;lb.classList.add('open');flowImg.onload=fitFlow}function closeFlow(){lb.classList.remove('open')}function zoomFlow(factor){const nx=stage.clientWidth/2,ny=stage.clientHeight/2,next=Math.max(.04,Math.min(3,fs*factor));fx=nx-(nx-fx)*(next/fs);fy=ny-(ny-fy)*(next/fs);fs=next;paintFlow()}document.querySelectorAll('.zoomable').forEach(x=>x.onclick=()=>openFlow(x.src));stage.addEventListener('wheel',e=>{e.preventDefault();const r=stage.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top,next=Math.max(.04,Math.min(3,fs*(e.deltaY<0?1.12:.89)));fx=px-(px-fx)*(next/fs);fy=py-(py-fy)*(next/fs);fs=next;paintFlow()},{passive:false});stage.addEventListener('pointerdown',e=>{drag=true;dx=e.clientX-fx;dy=e.clientY-fy;stage.classList.add('dragging');stage.setPointerCapture(e.pointerId)});stage.addEventListener('pointermove',e=>{if(!drag)return;fx=e.clientX-dx;fy=e.clientY-dy;paintFlow()});stage.addEventListener('pointerup',e=>{drag=false;stage.classList.remove('dragging');stage.releasePointerCapture(e.pointerId)});stage.addEventListener('dblclick',fitFlow);document.addEventListener('keydown',e=>{if(e.key==='Escape')closeFlow()});</script>`;

// 全功能图默认以可读比例居中打开；适应窗口可回到完整总览，滚轮/按钮仍可继续缩放。
const flowBlockUsable = flowBlock
  .replace('查看 Mermaid 全图 ↗', '查看 Mermaid 全图')
  .replace(/<a class="btn" href="assets\/overall-flow-v32\.svg" download="[^"]+">下载 SVG 图片<\/a>/, '')
  .replace(
    "function openFlow(src){flowImg.src=src;lb.classList.add('open');flowImg.onload=fitFlow}",
    "function focusFlow(){const full=flowImg.src.includes('overall-flow-v32.svg')&&!flowImg.src.includes('overview');if(!full){fitFlow();return}fs=Math.max(.18,Math.min(.32,(stage.clientWidth-60)/3788));fx=(stage.clientWidth-3788*fs)/2;fy=18;paintFlow()}function openFlow(src){flowImg.src=src;lb.classList.add('open');flowImg.onload=focusFlow}"
  );

function nav(active = 'detail') {
  const toc2 = headings.map((heading) => `<a href="development-spec.html#${heading.id}">${heading.text}</a>`).join('');
  return `<aside class="sidebar"><h2>散客合作伙伴管理</h2><div class="group">版本迭代需求说明</div><nav><a href="../index.html">← 返回版本迭代需求说明</a><a ${active === 'overview' ? 'class="current"' : ''} href="index.html">方案总览</a><a ${active === 'detail' ? 'class="current"' : ''} href="development-spec.html">完整需求方案</a><div class="group">本方案目录</div>${toc2}<div class="group">原型入口</div><a href="prototype-center.html">原型中心</a><a href="${prototypeBase}" ${external}>后台原型（全部）↗</a><a href="${prototypeBase}#/partner" ${external}>合作伙伴档案 ↗</a><a href="${prototypeBase}#/partner-account" ${external}>合作伙伴账户管理 ↗</a><a href="${prototypeBase}#/recharge?tab=account" ${external}>充值申请 / 临客转伙伴 ↗</a><a href="prototype/recharge-application.html" ${external}>充值申请独立页 ↗</a><a href="${prototypeBase}#/flow?tab=all" ${external}>资金流水 ↗</a><a href="prototype/capital-stream.html" ${external}>资金流水独立页 ↗</a><a href="${partnerStatementBase}" ${external}>合作伙伴对帐单 ↗</a><a href="${ticketPrototypeBase}" ${external}>售票窗口 ↗</a><a href="${partnerWorkspaceBase}" ${external}>售票窗口合作伙伴页 ↗</a><a href="prototype/order-detail.html" ${external}>散客订单详情（通用）↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608050011" ${external}>临客未回款订单详情 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608010001" ${external}>临客已回款退款调账订单 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608050021" ${external}>企业订单详情 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608050022" ${external}>个人订单详情 ↗</a><a href="prototype/partner-order-change.html" ${external}>合作伙伴变更订单详情 ↗</a><div class="group">测试与验收</div><a href="../../测试与验收/2026-v3.2-partner-management-qa-20260825/index.html">QA 测试总览</a><div class="group">原始材料</div><a href="PRD｜散客合作伙伴管理_V3.2_20260805.md" ${external}>打开完整 Markdown ↗</a></nav></aside>`;
  const toc = headings.map((heading) => `<a href="development-spec.html#${heading.id}">${heading.text}</a>`).join('');
  return `<aside class="sidebar"><h2>散客合作伙伴管理</h2><div class="group">版本迭代需求说明</div><nav><a href="../index.html">← 返回版本迭代需求说明</a><a ${active === 'overview' ? 'class="current"' : ''} href="index.html">方案总览</a><a ${active === 'detail' ? 'class="current"' : ''} href="development-spec.html">完整需求方案</a><a href="prototype-center.html">原型中心</a><div class="group">本方案目录</div>${toc}<div class="group">原型入口</div><a href="${prototypeBase}" ${external}>后台原型（全部）↗</a><a href="${prototypeBase}#/partner" ${external}>合作伙伴档案 ↗</a><a href="${prototypeBase}#/partner-account" ${external}>合作伙伴账户管理 ↗</a><a href="${prototypeBase}#/recharge?tab=account" ${external}>充值申请 / 临客转伙伴 ↗</a><a href="${prototypeBase}#/flow?tab=all" ${external}>资金流水 ↗</a><a href="${partnerStatementBase}" ${external}>合作伙伴对帐单 ↗</a><a href="${ticketPrototypeBase}" ${external}>售票窗口 ↗</a><a href="${partnerWorkspaceBase}" ${external}>售票窗口合作伙伴页 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608050011" ${external}>临客未回款订单详情 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608010001" ${external}>临客已回款退款调账订单 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608050021" ${external}>企业订单详情 ↗</a><a href="${prototypeBase}#/order-detail?orderNo=DD202608050022" ${external}>个人订单详情 ↗</a><a href="partner-order-change.html" ${external}>合作伙伴变更订单详情 ↗</a><div class="group">原始材料</div><a href="PRD｜散客合作伙伴管理_V3.2_20260805.md" ${external}>打开完整 Markdown ↗</a></nav></aside>`;
}

const head = (title) => `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${css}</style></head>`;
const topButton = `<button class="quick" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="返回顶部">↑</button>`;

const overview = `${head('V3.2 散客合作伙伴管理-20260805｜方案总览')}<body>${nav('overview')}<main class="main"><header class="hero"><div class="eyebrow">开发 / 测试共同方案</div><h1>V3.2 散客合作伙伴管理-20260805</h1><p>以同一账户号下的挂帐、预付款两类账户为基础，统一默认账户类型、资金处理操作、公共临时客户回款与资金流水口径。</p><div class="actions"><a class="btn" href="development-spec.html">查看完整需求方案</a><a class="btn" href="prototype-center.html">打开原型中心</a><a class="btn" href="${prototypeBase}" ${external}>打开后台原型 ↗</a><a class="btn" href="${ticketPrototypeBase}" ${external}>打开售票窗口 ↗</a><a class="btn" href="${partnerWorkspaceBase}" ${external}>打开合作伙伴页 ↗</a><a class="btn" href="../../测试与验收/2026-v3.2-partner-management-qa-20260825/index.html">查看 QA 测试总览</a><a class="btn" href="PRD｜散客合作伙伴管理_V3.2_20260805.md" ${external}>打开完整 Markdown ↗</a></div></header><section class="section"><h2>本次已确认改造</h2><div class="card"><p class="lead">企业与个人在同一账户号下保留挂帐、预付款两类账户；默认账户类型决定新业务的财务归属，历史订单和流水保存实际账户类型。公共临时客户继续采用挂帐账户和按订单回款的特殊逻辑。</p><div class="grid"><div class="metric"><strong>2</strong>账户类型</div><div class="metric"><strong>4</strong>资金处理操作</div><div class="metric"><strong>1</strong>公共临时客户共享账户</div></div></div></section><section class="section"><h2>本版处理范围</h2><div class="card"><table><thead><tr><th>模块</th><th>已确认处理</th></tr></thead><tbody><tr><td>合作伙伴档案</td><td>合作类型、默认账户类型、负责人、状态与切换校验。</td></tr><tr><td>账户管理</td><td>挂帐和预付款均可正负；分别配置额度限制。</td></tr><tr><td>充值与导入</td><td>处理操作与账户类型分离；人工及批量仅支持充值、调账，其他收入独立处理。</td></tr><tr><td>公共临时客户</td><td>挂帐回款、已回款退款调账，以及未回款订单转长期合作伙伴。</td></tr><tr><td>资金流水</td><td>全部/充值/消费/退款/其他收入/调账；调账-往来保留实际处理操作并归入调账标签。</td></tr></tbody></table></div></section><section class="section"><h2>当前原型覆盖</h2><div class="card"><p>后台原型已包含档案、账户、充值、资金流水、临时客户转合作伙伴和订单详情；售票窗口原型覆盖售票、账户充值记录、其他收入记录及充值报表。</p></div></section><section class="section"><h2>测试与验收</h2><div class="card"><p>QA 测试总览集中展示全链路测试范围、样例数据、测试用例、已复现问题及复核修正结论。</p><p><a class="btn" href="../../测试与验收/2026-v3.2-partner-management-qa-20260825/index.html">打开 QA 测试总览 →</a></p></div></section></main>${topButton}</body></html>`;

const detail = `${head('V3.2 散客合作伙伴管理-20260805｜完整需求方案')}<body>${nav('detail')}<main class="main"><header class="hero"><div class="eyebrow">完整需求方案</div><h1>V3.2 散客合作伙伴管理-20260805</h1><p>已确认规则均在本页完整整理；原始 Markdown 可另页打开。</p><div class="actions"><a class="btn" href="PRD｜散客合作伙伴管理_V3.2_20260805.md" target="_blank">打开完整 Markdown ↗</a><a class="btn" href="index.html">返回方案总览</a></div></header><article class="doc">${render(md)}</article><div class="footer-nav"><a href="index.html">← 返回方案总览</a><a href="PRD｜散客合作伙伴管理_V3.2_20260805.md" target="_blank">完整 Markdown ↗</a></div></main>${topButton}</body></html>`;

fs.writeFileSync(path.join(here, 'index.html'), overview);
fs.writeFileSync(path.join(here, 'development-spec.html'), detail);
const mermaidViewer = `<!doctype html><html lang="zh-CN"><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>散客合作伙伴管理 V3.2｜全局详细业务流程</title><style>body{margin:0;background:#f7f4fb;color:#312e81;font-family:-apple-system,BlinkMacSystemFont,"Segoe UI","PingFang SC","Microsoft YaHei",sans-serif}.top{padding:20px 28px 14px;background:#fff;border-bottom:1px solid #e8e2f1}h1{margin:0 0 7px;font-size:24px}.hint{margin:0;color:#71697d;font-size:13px}.toolbar{position:fixed;right:24px;top:20px;z-index:5;display:flex;gap:9px}.btn{padding:8px 12px;border-radius:8px;background:#7c3aed;color:#fff;text-decoration:none;border:0;cursor:pointer;font-size:13px}.stage{height:calc(100vh - 90px);overflow:hidden;background:#fff;cursor:grab;touch-action:none}.stage.dragging{cursor:grabbing}.diagram{display:block;transform-origin:0 0;user-select:none;pointer-events:none;background:#fff}details{margin:16px 28px;border:1px solid #e8e2f1;border-radius:10px;overflow:hidden;background:#fff}summary{padding:12px 16px;color:#6d28d9;font-weight:600;cursor:pointer}pre{margin:0;padding:18px;background:#1f1930;color:#e9d5ff;white-space:pre-wrap;line-height:1.65;overflow:auto}</style><body><div class="top"><h1>散客合作伙伴管理 V3.2｜全局详细业务流程</h1><p class="hint">滚轮缩放，按住鼠标左键拖拽查看；双击可恢复适应窗口大小。</p></div><div class="toolbar"><button class="btn" onclick="navigator.clipboard.writeText(document.querySelector('pre').textContent).then(()=>this.textContent='已复制')">复制 Mermaid 代码</button></div><div id="stage" class="stage"><img id="diagram" class="diagram" src="assets/overall-flow-v32.svg" alt="散客合作伙伴管理 V3.2 全局详细业务流程图"></div><details><summary>开发辅助：展开 Mermaid 源码</summary><pre>${flowMermaid}</pre></details><script>const stage=document.getElementById('stage'),img=document.getElementById('diagram');let scale=1,x=18,y=18,drag=false,sx=0,sy=0;function fit(){scale=Math.min((stage.clientWidth-36)/3788,(stage.clientHeight-36)/8198);x=(stage.clientWidth-3788*scale)/2;y=18;paint()}function paint(){img.style.transform='translate('+x+'px,'+y+'px) scale('+scale+')'}img.addEventListener('load',fit);stage.addEventListener('wheel',e=>{e.preventDefault();const r=stage.getBoundingClientRect(),px=e.clientX-r.left,py=e.clientY-r.top,next=Math.max(.04,Math.min(2.5,scale*(e.deltaY<0?1.12:.89)));x=px-(px-x)*(next/scale);y=py-(py-y)*(next/scale);scale=next;paint()},{passive:false});stage.addEventListener('pointerdown',e=>{drag=true;sx=e.clientX-x;sy=e.clientY-y;stage.classList.add('dragging');stage.setPointerCapture(e.pointerId)});stage.addEventListener('pointermove',e=>{if(!drag)return;x=e.clientX-sx;y=e.clientY-sy;paint()});stage.addEventListener('pointerup',e=>{drag=false;stage.classList.remove('dragging');stage.releasePointerCapture(e.pointerId)});stage.addEventListener('dblclick',fit);window.addEventListener('resize',fit);</script></body></html>`;
fs.writeFileSync(path.join(here, 'mermaid-flow-v32.html'), mermaidViewer);
console.log('generated V3.2 plan pages');
