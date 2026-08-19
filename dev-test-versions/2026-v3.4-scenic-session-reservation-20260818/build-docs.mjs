import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';
import { createRequire } from 'node:module';

const require = createRequire(import.meta.url);
const { marked } = require('marked');

const here = path.dirname(fileURLToPath(import.meta.url));
const prdName = 'PRD｜景区场次预约管理_V3.4_20260818.md';
const markdown = fs.readFileSync(path.join(here, prdName), 'utf8');

marked.setOptions({ gfm: true, breaks: false });
const headings = [...markdown.matchAll(/^##\s+(.+)$/gm)].map((match) => ({
  text: match[1],
  id: match[1].replace(/[^\w\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '')
}));

const css = fs.readFileSync(path.join(here, 'document-style.css'), 'utf8');

const head = (title) => `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>${title}</title><style>${css}</style></head>`;
const external = 'target="_blank" rel="noopener noreferrer"';
const toc = headings.map(({ text, id }) => `<a href="development-spec.html#${id}">${text}</a>`).join('');
const nav = (active) => `<aside class="sidebar"><h2>景区场次预约 V3.4</h2><div class="group">版本迭代需求</div><a href="../index.html">← 返回版本列表</a><a class="${active === 'overview' ? 'current' : ''}" href="index.html">版本总览</a><a class="${active === 'prd' ? 'current' : ''}" href="development-spec.html">完整 PRD</a><a href="prototype-center.html">原型中心</a><div class="group">原型入口</div><a href="prototype/admin/index.html" ${external}>管理端完整原型 ↗</a><a href="prototype/visitor/index.html" ${external}>游客端完整原型 ↗</a><div class="group">PRD 目录</div>${toc}<div class="group">辅助文档</div><a href="docs/HTML原型页面清单V3.4.md" ${external}>HTML 原型页面清单 ↗</a><a href="docs/预约小程序Figma与主题规范V3.4.md" ${external}>小程序样式规范 ↗</a><a href="${prdName}" ${external}>原始 Markdown ↗</a></aside>`;
const top = '<button class="top" onclick="scrollTo({top:0,behavior:\'smooth\'})" aria-label="返回顶部">↑</button>';

const overview = `${head('V3.4 景区场次预约管理｜版本总览')}<body>${nav('overview')}<main class="main"><header class="hero"><div class="eyebrow">开发 / 测试 / 产品共同交付包</div><h1>V3.4 景区场次预约管理</h1><p>面向已购票游客的无票校验预约能力，覆盖活动配置、日期场次、项目库存、游客预约及发布后运营。</p><div class="actions"><a class="btn" href="development-spec.html">查看完整 PRD</a><a class="btn" href="prototype-center.html">打开原型中心</a><a class="btn secondary" href="prototype/admin/index.html" ${external}>管理端原型 ↗</a><a class="btn secondary" href="prototype/visitor/index.html" ${external}>游客端原型 ↗</a></div></header><section class="section"><h2>交付内容</h2><div class="card"><div class="grid"><div class="metric"><strong>1</strong>份统一总 PRD</div><div class="metric"><strong>2</strong>套完整可操作原型</div><div class="metric"><strong>8</strong>份辅助方案文档</div></div></div></section><section class="section"><h2>核心入口</h2><div class="entry-grid"><a class="entry" href="development-spec.html"><b>完整需求方案</b><span>项目背景、数据结构、页面功能、业务规则、状态口径与验收标准。</span></a><a class="entry" href="prototype-center.html"><b>原型中心</b><span>集中进入管理配置、运营管理与游客预约全链路原型。</span></a><a class="entry" href="prototype/admin/index.html" ${external}><b>管理端完整原型</b><span>工作台、活动管理、C01—C07 配置及 O00—O08 运营管理。</span></a><a class="entry" href="prototype/visitor/index.html" ${external}><b>游客端完整原型</b><span>活动详情、日期场次项目选择、信息填写、结果及我的预约。</span></a></div></section><section class="section"><h2>本期口径</h2><div class="card"><p>第一期完全不校验购票信息，任何游客均可填写资料预约；预约人数按单人模式或多人/团队控件计算。活动支持已发布、已下架两种状态，历史预约持续可查、可改、可取消。</p><p>本目录是 2026-08-18 的交付快照。原场次预约工作目录保持不变，后续版本可继续以独立日期版本目录追加。</p></div></section></main>${top}</body></html>`;

const renderer = new marked.Renderer();
renderer.heading = ({ tokens, depth }) => {
  const text = tokens.map((token) => token.raw || token.text || '').join('');
  const id = text.replace(/[^\w\u4e00-\u9fa5]+/g, '-').replace(/^-|-$/g, '');
  return `<h${depth} id="${id}">${text}</h${depth}>`;
};
const article = marked.parse(markdown, { renderer });
const detail = `${head('V3.4 景区场次预约管理｜完整 PRD')}<body>${nav('prd')}<main class="main"><header class="hero"><div class="eyebrow">完整产品需求文档</div><h1>景区场次预约管理功能 PRD</h1><p>当前页面由同目录 Markdown 生成，便于开发和测试直接阅读、检索与跳转。</p><div class="actions"><a class="btn" href="prototype-center.html">打开原型中心</a><a class="btn secondary" href="${prdName}" ${external}>打开原始 Markdown ↗</a></div></header><article class="card doc">${article}</article></main>${top}</body></html>`;

fs.writeFileSync(path.join(here, 'index.html'), overview);
fs.writeFileSync(path.join(here, 'development-spec.html'), detail);
console.log('generated scenic session reservation document pages');
