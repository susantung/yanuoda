import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('outputs/document-center/dev-test-versions/2026-v1-partner-management');
const devPath = path.join(dir, 'development-spec.html');
const refPath = path.join(dir, '原PRD文档｜散客合作伙伴管理.html');
let html = fs.readFileSync(devPath, 'utf8');
html = html.replace(/<link rel="stylesheet" href="assets\/development-spec-extra\.css">/g, '');
html = html.replace('<link rel="stylesheet" href="assets/dev-nav.css">', '<link rel="stylesheet" href="assets/dev-nav.css"><link rel="stylesheet" href="assets/development-spec-extra.css">');
const appendix = /<section class="section" id="appendix">[\s\S]*?<article class="card prd-body">([\s\S]*?)<\/article><\/section>/.exec(html);
const existingReference = fs.existsSync(refPath)
  ? /<article class="card prd-body">([\s\S]*?)<\/article><\/section>/.exec(fs.readFileSync(refPath, 'utf8'))
  : null;
const prd = appendix?.[1] || existingReference?.[1];
if (!prd) throw new Error('未找到可生成的原 PRD 内容。');
const headings = [...prd.matchAll(/<h([23]) id="([^"]+)">([\s\S]*?)<\/h\1>/g)]
  .map(([, level, id, label]) => ({ level, id, label: label.replace(/<[^>]+>/g, '') }));
const toc = headings.map(({ level, id, label }) => `<a class="toc-lvl-${level}" href="#${id}">${label}</a>`).join('');
const reference = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>原 PRD 文档｜散客合作伙伴管理</title><link rel="stylesheet" href="assets/document.css"><link rel="stylesheet" href="assets/extra.css"><link rel="stylesheet" href="assets/prd-reference.css"></head><body><aside class="sidebar prd-sidebar"><h2>📋 散客合作伙伴方案</h2><div class="group">文档门户</div><nav><a class="back-to-spec" href="development-spec.html">← 返回开发详细方案</a><details class="menu-folder" open><summary>原 PRD 文档目录</summary><div class="sub">${toc}</div></details></nav></aside><main class="main"><header class="hero"><div class="eyebrow">原始需求文档</div><h1>PRD｜散客合作伙伴管理</h1><p>保留全部原始需求、字段、规则、异常边界与待办，供开发查阅和回溯。</p><div class="actions"><a class="btn" href="development-spec.html">返回开发详细方案</a></div></header><section class="section"><article class="card prd-body">${prd}</article></section></main><button class="quick" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="返回顶部">↑</button><script>const as=[...document.querySelectorAll('.sidebar .sub a')],ss=as.map(a=>document.querySelector(a.hash)).filter(Boolean);function n(){let c=ss[0];ss.forEach(s=>{if(s.getBoundingClientRect().top<150)c=s});as.forEach(a=>a.classList.toggle('active',c&&a.hash==='#'+c.id))}addEventListener('scroll',n,{passive:true});n()</script></body></html>`;
fs.writeFileSync(refPath, reference);

if (appendix) html = html.replace(appendix[0], '');
// 开发详细方案本身必须是完整事实来源：规格卡用于定位，PRD 原文保留在本页。
html = html.replace(/<section class="section" id="full-prd">[\s\S]*?<\/section>(?=<\/main>)/, '');
const fullPrd = `<section class="section" id="full-prd"><h2>完整需求明细</h2><div class="notice">以下完整保留当前 PRD 的背景、范围、字段、规则、异常边界、验收与待办。上方页面规格卡用于按页面快速定位；两部分共同构成本方案的开发实施说明。</div><article class="card prd-body full-prd-body">${prd}</article></section>`;
html = html.replace('</main><button class="quick"', `${fullPrd}</main><button class="quick"`);
html = html.replace('href="prd-reference.html" target="_blank">原 PRD 文档 ↗</a>', 'href="#full-prd">完整需求明细</a>');
html = html.replace('完整承载 PRD 字段、状态、计算口径、交互与数据约束；可与原型中心逐模块对照。', '完整承载 PRD 字段、状态、计算口径、交互与数据约束；可与原型中心逐模块对照。');
html = html.replace('按页面汇总核心字段、状态、计算口径、交互与数据约束；完整原 PRD 另页保留。', '按页面汇总核心字段、状态、计算口径、交互与数据约束；下方完整需求明细保留全部 PRD 信息。');
html = html.replace('本页用于按页面对照实现，汇总当前方案的字段、状态、公式和判断逻辑。完整原 PRD 另页保留，供查阅原始背景、全部字段、异常边界与待办。页面原型只负责表达交互，不替代本页规则。', '本页是开发实现的完整事实来源：页面规格卡用于快速定位；下方完整需求明细保留原 PRD 的背景、字段、状态、公式、异常边界、验收与待办。页面原型只负责表达交互，不替代本页规则。');
html = html.replace('所有页面统一按“字段规格＋判断与处理逻辑”阅读。标题右侧可直接另页打开相应原型；完整原 PRD 请从右侧目录另页打开。', '所有页面统一按“字段规格＋判断与处理逻辑”阅读。标题右侧可直接另页打开相应原型；下方“完整需求明细”完整保留当前 PRD，并与规格卡对应。');
html = html.replace('员工名+手机号，筛选按姓名或手机号模糊搜索', '员工名+手机号；筛选按姓名或手机号模糊搜索')
  .replace('员工搜索</td><td>仅选启用员工；临时客户隐藏', '下拉模糊搜索</td><td>按员工名或手机号搜索；仅显示启用员工，禁用员工不可重新选择；临时客户隐藏');
html = html.replace('<title>开发详细方案｜散客合作伙伴管理</title>', '<title>开发详细方案｜散客合作伙伴管理 V3.2</title>')
  .replace('<h1>开发详细方案</h1>', '<h1>开发详细方案 · V3.2</h1>')
  .replace('完整 PRD ↗</a>', '完整 PRD · V3.2 ↗</a>');
html = html.replace(/<td>V1\.0<\/td>/g, '<td>V1.0</td>');
html = html.replace(/<a href="business-training\.html" class="">业务操作培训<\/a>/g, '');
html = html.replace(
  '<p class="diagram-caption">点击缩略图放大查看。<a href="assets/overall-flow.svg" download="散客合作伙伴总体业务流程图.svg">下载 SVG 图片</a></p><details class="code-details"><summary>开发辅助：展开 Mermaid 源码</summary>',
  '<p class="diagram-caption">业务全流程概览，点击缩略图可放大查看。</p><details class="code-details"><summary>开发辅助：展开 Mermaid 源码</summary><div class="mermaid-tools"><a class="btn" href="mermaid-flow.html" target="_blank">查看 Mermaid 全图 ↗</a><a class="btn" href="assets/mermaid-flow.svg" download="散客合作伙伴管理V3.2-开发辅助流程图.svg">下载 SVG 图片</a></div>'
);
fs.writeFileSync(devPath, html);
console.log(`已生成 ${path.relative(process.cwd(), refPath)}`);
