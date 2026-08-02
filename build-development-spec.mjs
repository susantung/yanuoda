import fs from 'node:fs';
import path from 'node:path';

const dir = path.resolve('outputs/document-center/dev-test-versions/2026-v1-partner-management');
const ref = fs.readFileSync(path.join(dir, '原PRD文档｜散客合作伙伴管理.html'), 'utf8');
const markdown = fs.readFileSync(path.resolve('outputs/document-center/PRD｜散客合作伙伴管理_V1.0.md'), 'utf8');
const mermaid = /```mermaid\n([\s\S]*?)```/.exec(markdown)?.[1]?.trim() || '';
const prdMatch = /<article class="card prd-body">([\s\S]*?)<\/article><\/section><\/main>/.exec(ref);
if (!prdMatch) throw new Error('未找到可整理的 PRD 内容。');
const source = prdMatch[1];
const starts = [...source.matchAll(/<h2 id="prd-(\d+)">/g)];
const parts = new Map();
for (let i = 0; i < starts.length; i++) {
  const n = Number(starts[i][1]);
  parts.set(n, source.slice(starts[i].index, starts[i + 1]?.index));
}
const compactRuleContent = (id, value) => {
  let content = value;
  if (id === 'partner') {
    // 规格卡已完整承载列表结构、筛选、按钮、列表字段与新增表单字段。
    content = content.replace(/<h3 id="prd-5-1">[\s\S]*?(?=<h3 id="prd-5-5">)/, '')
      .replace(/<h3 id="prd-6-2">[\s\S]*?(?=<h3 id="prd-6-3">)/, '');
  }
  if (id === 'account') {
    // 两个账户列表的筛选和列已转为规格卡，正文保留操作与金额/额度规则。
    content = content.replace(/<h4 id="h-----">筛选条件<\/h4>\s*<ul>[\s\S]*?<\/ul>\s*<h4 id="h-----">列表字段<\/h4>\s*<ol>[\s\S]*?<\/ol>/g, '');
  }
  if (id === 'recharge') {
    content = content.replace(/<p>筛选条件：<\/p>\s*<ul>[\s\S]*?<\/ul>/, '')
      .replace(/<p>列表字段：<\/p>\s*<ul>[\s\S]*?<\/ul>/, '')
      .replace(/<p>其他收入充值筛选条件：[\s\S]*?<\/p>\s*<p>列表字段：[\s\S]*?<\/p>/, '');
  }
  if (id === 'funds') {
    content = content.replace(/<p>筛选条件：合作类型、合作伙伴名称、账户号、账户类型（挂帐、预付款）、对接负责人、发生时间、单据编号。对接负责人统一使用文本框，输入员工名或手机号进行模糊搜索，不使用下拉选择。<\/p>/, '')
      .replace(/<p>列表字段顺序：合作类型、合作伙伴名称、账户号、处理操作、账户类型、金额（元）、单据编号、对接负责人、发生时间。默认按发生时间倒序。<\/p>/, '')
      .replace(/<li>“其他收入”标签字段为合作伙伴名称、处理操作（固定显示“其他收入”）、金额（元）、单据编号（充值记录单号）、发生时间。<\/li>/, '');
  }
  if (id === 'ticket') {
    content = content.replace(/<p>筛选条件：<\/p>\s*<ul>[\s\S]*?<\/ul>\s*<p>列表字段：单选、合作类型、合作伙伴名称、对接负责人（员工名\+手机号）、联系人（联系人\+电话）、账户余额、挂帐额度、可用挂帐额度。<\/p>/, '');
  }
  return content;
};
const module = (id, kicker, title, summary, nums, prototype = '', spec = '') => {
  const content = compactRuleContent(id, nums.map(n => parts.get(n) || '').join(''))
    .replace(/<h2 id="prd-(\d+)">([\s\S]*?)<\/h2>/g, '<h3 class="rule-title">$2</h3>')
    .replace(/<td>V1\.0<\/td>/g, '<td>V3.2</td>');
  const prototypeLink = prototype ? `<a class="proto-link" href="${prototype}" target="_blank">打开对应原型 ↗</a>` : '';
  return `<section class="module section" id="${id}"><header class="module-heading"><span class="module-kicker">${kicker}</span><div class="module-title-row"><h2>${title}</h2>${prototypeLink}</div><p>${summary}</p></header><div class="card module-card">${spec ? `<div class="rule-label">页面规格卡</div><div class="spec-summary">${spec}</div>` : ''}<div class="rule-label">页面规则说明</div><div class="prd-body rule-content">${content}</div></div></section>`;
};
const table = (title, headers, rows) => `<div class="spec-table"><h3>${title}</h3><table><thead><tr>${headers.map(h => `<th>${h}</th>`).join('')}</tr></thead><tbody>${rows.map(r => `<tr>${r.map(c => `<td>${c}</td>`).join('')}</tr>`).join('')}</tbody></table></div>`;
const partnerSpecs = [
  table('合作伙伴管理：筛选条件', ['字段', '控件/展示', '规则'], [['合作类型', '下拉单选', '企业、个人、临时客户'], ['合作伙伴名称', '文本框', '模糊搜索'], ['支付方式', '下拉单选', '挂帐、预付款'], ['对接负责人', '文本框', '员工名或手机号模糊搜索，不用下拉'], ['状态', '下拉单选', '启用、禁用']]),
  table('合作伙伴管理：页面操作', ['操作', '位置/规则'], [['查询、重置', '筛选区右侧'], ['新增、导出', '筛选区下方、表格上方最右侧'], ['配置列', '沿用系统公共能力，不在本方案展开内部逻辑']]),
  table('合作伙伴管理：列表字段', ['字段', '展示规则'], [['合作类型', '合作类型，同时为主账户类型'], ['合作伙伴名称', '全系统唯一'], ['账户号', '创建成功后由系统自动生成'], ['默认支付方式', '挂帐或预付款'], ['联系人、联系电话', '合作伙伴外部联系信息'], ['对接负责人', '展示已保存的员工名和手机号'], ['状态', '启用绿色圆点、禁用橙色圆点；不使用按钮或标签底色'], ['更新人、更新时间', '最后一次新增或编辑的操作账号对应员工名与时间'], ['操作', '查看、编辑、启用/禁用、账户、删除；5个操作单行展示']]),
  table('新增/查看/编辑：表单字段', ['字段', '控件/展示', '规则'], [['类型', '下拉单选', '企业、个人、临时客户；编辑只读'], ['合作伙伴名称', '文本框', '企业/个人必填，最多25字、去首尾空格、全系统唯一；临时客户固定“公共临时客户”'], ['联系人、联系电话', '文本框', '企业/个人必填，最多15字；电话支持手机号、座机、短横线'], ['对接负责人', '可搜索下拉单选', '仅启用员工；保存员工名＋手机号；临时客户不展示'], ['默认支付方式、状态', '下拉单选', '企业/个人可选；新增状态默认启用；临时客户固定挂帐和启用'], ['账户号、备注', '只读文本、多行文本', '新增账户号“-”；保存后系统生成且不可改；备注最多500字']]),
].join('');
const accountSpecs = [
  table('挂帐管理：筛选条件', ['字段', '控件/展示', '规则'], [['账户类型', '下拉单选', '企业、个人、临时客户'], ['合作伙伴名称', '文本框', '支持模糊搜索'], ['账户号', '文本框', '支持精确或现有账户号查询'], ['状态', '下拉单选', '启用、禁用'], ['额度限制', '下拉单选', '启用、禁用'], ['挂帐金额', '金额区间', '负数欠款口径']]),
  table('挂帐管理：列表字段', ['字段', '展示规则'], [['账户类型', '企业、个人、临时客户'], ['合作伙伴名称/账户号', '主账户号；子账户以账户类型区分'], ['挂帐金额', '负数口径，保留两位小数并千分位展示'], ['挂帐额度/可用挂帐额度', '公式与无限额规则见本模块“挂帐金额与额度”'], ['额度限制、状态', '彩色圆点＋文字'], ['操作', '额度限制、调整额度、额度记录、充值记录、资金流水']]),
  table('预付款管理：筛选条件', ['字段', '控件/展示', '规则'], [['账户类型', '下拉单选', '企业、个人'], ['合作伙伴名称', '文本框', '支持模糊搜索'], ['账户号', '文本框', '支持账户号查询'], ['状态', '下拉单选', '启用、禁用'], ['预付款余额', '金额区间', '余额不可为负数']]),
  table('预付款管理：列表字段', ['字段', '展示规则'], [['账户类型', '仅企业、个人'], ['合作伙伴名称、账户号', '正常展示'], ['预付款余额', '创建时为0；充值、退款、回款剩余可增加'], ['状态', '彩色圆点＋文字'], ['操作', '充值记录、资金流水']]),
].join('');
const rechargeSpecs = [
  table('账户充值：筛选条件', ['字段', '控件/展示', '规则'], [['合作伙伴名称', '文本框', '模糊搜索'], ['账户号', '文本框', '账户号查询'], ['充值记录单号', '文本框', '单号查询'], ['充值类型、充值状态', '下拉单选', '类型：挂帐回款、预付款、调账；本期状态仅充值成功'], ['申请人、对接负责人', '文本框', '支持姓名或手机号历史快照模糊搜索'], ['申请时间', '时间范围', '默认按申请时间倒序']]),
  table('账户充值：列表字段', ['字段', '展示规则'], [['充值记录单号', '查看详情'], ['账户类型、合作伙伴名称、账户号', '账户充值完整身份信息'], ['充值类型、充值金额', '调账仅系统生成且为负数'], ['申请人、对接负责人', '保存当时员工名＋手机号快照'], ['申请时间、充值状态、完成时间', '本期成功才生成记录'], ['操作', '查看']]),
  table('其他收入：筛选及列表字段', ['类别', '字段/展示', '规则'], [['筛选', '合作伙伴名称、充值记录单号、申请人、对接负责人、申请时间', '查询、重置、导出；不提供新增'], ['列表', '充值记录单号、合作伙伴名称、充值类型、充值金额、申请人、对接负责人、申请时间、充值状态、完成时间、查看', '充值类型固定“其他收入”；状态固定“充值成功”；不影响任何账户']]),
  table('选择待回款订单：筛选及列表字段', ['类别', '字段/展示', '规则'], [['筛选', '订单号、下单时间、对接负责人', '订单号模糊；时间关键词；负责人按员工名或手机号模糊'], ['列表', '订单号、下单时间、订单总金额、已退款金额、本次应回款金额', '订单号新页打开；一行一个订单；票型在展开区展示'], ['分页与选择', '10条/页、内容区纵向滚动、全选', '逐笔和全选都不得超过本次充值金额；提交前后端再校验并发状态']]),
].join('');
const flowSpecs = [
  table('统一资金流水：筛选条件', ['字段', '控件/展示', '规则'], [['合作类型、账户类型', '下拉单选', '账户类型为挂帐、预付款'], ['合作伙伴名称、账户号', '文本框', '按合作伙伴维度统一查询'], ['发生时间', '时间范围', '默认当前时间向前一个月至当前时间'], ['对接负责人、单据编号', '文本框', '默认折叠在第三行；负责人按姓名或手机号模糊搜索']]),
  table('统一资金流水：列表字段', ['字段', '展示规则'], [['合作类型、合作伙伴名称、账户号', '其他收入在“全部”中无账户字段显示“-”'], ['处理操作、账户类型、金额', '充值、消费、退款；其他收入固定“其他收入”；消费负数、退款正数'], ['单据编号', '充值记录单号查看充值详情；订单号新页订单详情；售后单号新页售后详情；均支持复制'], ['对接负责人、发生时间', '保存业务发生时历史快照；默认按发生时间倒序']]),
  table('其他收入标签：字段', ['字段', '展示规则'], [['合作伙伴名称', '正常展示'], ['处理操作', '固定“其他收入”'], ['金额（元）', '仅财务记录，不改变账户'], ['单据编号', '充值记录单号，可查看详情和复制'], ['发生时间', '默认时间范围内查询']]),
].join('');
const ticketSpecs = [
  table('选择合作伙伴弹窗：筛选条件', ['字段', '控件/展示', '规则'], [['合作伙伴名称', '文本框', '名称模糊搜索'], ['联系人/电话', '文本框', '联系人或联系电话模糊搜索'], ['对接负责人/电话', '文本框', '员工姓名或手机号模糊搜索']]),
  table('选择合作伙伴弹窗：列表字段', ['字段', '展示规则'], [['单选', '单选后确认回填'], ['合作类型、合作伙伴名称', '仅启用企业、个人；不展示公共临时客户'], ['对接负责人、联系人', '分别展示“员工名＋手机号”“联系人＋电话”'], ['账户余额、挂帐额度、可用挂帐额度', '选择后同步到售票页右侧信息区'], ['分页与排序', '10条/页，按更新时间倒序']]),
  table('临时/长期合作伙伴售票：页面字段', ['区域', '字段/展示', '规则'], [['左侧筛选', '合作伙伴/临时客户二选一、门票分类、票型名称、活动标签、价格类型、查询', '只售当前窗口允许的散客票；不展示导游、团队类型；不支持挂单'], ['右侧固定伙伴信息', '合作伙伴、对接负责人、联系人、账户余额、可用挂帐额度', '切换伙伴后清空并重新加载'], ['右侧临时客户信息', '合作伙伴、可用挂帐额度、对接负责人输入', '无联系人、固定负责人、账户余额；负责人可搜索启用员工或手工输入'], ['支付方式', '挂帐、预付款', '固定伙伴两项可切换；临时客户仅挂帐']]),
].join('');
const modules = [
  module('foundation', '共用规则', '基础模型、入口与范围', '先统一对象、账户边界、产品入口与本期交付范围；后续页面均以此为共同前提。', [1, 2, 3, 4]),
  module('partner', '后台 · 合作伙伴管理', '合作伙伴档案：列表、新增、查看与编辑', '包含列表筛选、字段展示、全部操作、新增字段规则、编辑权限与创建/更新事务要求。', [5, 6, 7], '../../preview/index.html#/partner', partnerSpecs),
  module('account', '后台 · 合作伙伴账户管理', '账户、额度与财务入口', '包含挂帐/预付款标签、账户口径、额度公式、额度记录、跳转查询、导出与禁用后的财务处理规则。', [8], '../../preview/index.html#/partner-account', accountSpecs),
  module('recharge', '后台 · 充值申请', '账户充值、挂帐回款与其他收入', '包含两类充值列表、充值弹窗、整单平帐、公共临时客户、详情追溯、自动调账与其他收入的完整事务逻辑。', [9], '../../preview/index.html#/recharge?tab=account', rechargeSpecs),
  module('funds', '后台 · 资金流水', '资金流水查询与导出', '包含全部/充值/消费/退款/其他收入标签、两行折叠筛选、字段口径、单据跳转与导出规则。', [10], '../../preview/index.html#/flow?tab=all', flowSpecs),
  module('ticket', '售票窗口 & 后台订单', '临时/长期合作伙伴售票、确认出票与订单详情', '包含选择合作伙伴、临时客户、支付方式、最终校验、资金处理、订单展示与冲红限制。', [12], '../../preview/ticket-window.html', ticketSpecs),
  module('cross', '横向约束 & 待办', '权限、日志、数据约束与后续设计', '不归属于单一页面的共用要求、本期待继续设计项和需要后续确认的边界统一记录在此。', [11, 13, 14]),
].join('');

const html = `<!doctype html><html lang="zh-CN"><head><meta charset="utf-8"><meta name="viewport" content="width=device-width,initial-scale=1"><title>开发详细方案｜散客合作伙伴管理 V3.2</title><link rel="stylesheet" href="assets/document.css"><link rel="stylesheet" href="assets/extra.css"><link rel="stylesheet" href="assets/dev-nav.css"><link rel="stylesheet" href="assets/development-spec-extra.css"><script src="assets/dev-nav.js" defer></script></head><body><aside class="sidebar"><h2>📋 散客合作伙伴方案</h2><div class="group">文档门户</div><nav><a href="index.html">方案总览</a><a href="development-spec.html" class="current">开发详细方案</a><div class="sub"><a href="#read">阅读说明</a><a href="#visual-flow">总体流程图</a><a href="#foundation">基础模型与范围</a><a href="#partner">合作伙伴档案</a><a href="#account">账户与额度</a><a href="#recharge">充值回款</a><a href="#funds">资金流水</a><a href="#ticket">售票与订单</a><a href="#cross">横向约束与待办</a></div><a href="test-acceptance.html">测试验收指南</a><a href="prototype-center.html">原型中心</a><div class="group">原始材料</div><a href="../../preview/index.html" target="_blank">后台原型 ↗</a><a href="../../preview/ticket-window.html" target="_blank">售票窗口原型 ↗</a></nav></aside><main class="main"><header class="hero"><div class="eyebrow">开发实现文档 · V3.2</div><h1>开发详细方案</h1><p>按实际页面和横向功能聚合完整规则；字段、判断、处理结果与数据约束均在对应模块内，无需在本页与 PRD 间来回查找。</p><div class="actions"><a class="btn" href="prototype-center.html">查看原型中心</a><a class="btn" href="test-acceptance.html">查看测试验收</a></div></header><section class="section" id="read"><h2>阅读说明</h2><div class="card"><p>本页供开发、测试和联调使用。每个模块以<strong>“页面规格卡 &amp; 页面规则说明”</strong>承载完整实施内容：先看本模块范围，再顺序阅读字段表、交互、校验、事务与异常处理。</p><div class="notice">实现原则：涉及合作伙伴、账户、订单、充值、流水的多表处理须使用同一业务事务；最终提交、确认出票和退款成功时均需以后端最新状态重新校验，不能仅依赖页面打开时的数据。</div></div></section><section class="section" id="visual-flow"><h2>总体业务流程图</h2><div class="card"><img class="diagram-thumb zoomable" src="assets/overall-flow.svg" alt="散客合作伙伴总体业务流程图"><p class="diagram-caption">业务全流程概览，点击缩略图可放大查看。</p><details class="code-details"><summary>开发辅助：展开 Mermaid 源码</summary><div class="mermaid-tools"><a class="btn" href="mermaid-flow.html" target="_blank">查看 Mermaid 全图 ↗</a><a class="btn" href="assets/mermaid-flow.svg" download="散客合作伙伴管理V3.2-开发辅助流程图.svg">下载 SVG 图片</a></div><div class="code-box"><button class="copy-btn" onclick="copyCode(this,'mermaidCode')">复制代码</button><textarea id="mermaidCode" readonly>${mermaid}</textarea></div></details></div></section>${modules}</main><div id="lightbox" class="lightbox" onclick="this.classList.remove('open')"><img alt="流程图放大预览"></div><button class="quick" type="button" onclick="window.scrollTo({top:0,behavior:'smooth'})" aria-label="返回顶部">↑</button><script>function copyCode(btn,id){navigator.clipboard.writeText(document.getElementById(id).value).then(()=>{btn.textContent='已复制';setTimeout(()=>btn.textContent='复制代码',1200)})}document.querySelectorAll('.zoomable').forEach(x=>x.onclick=()=>{const l=document.getElementById('lightbox');l.querySelector('img').src=x.src;l.classList.add('open')});const as=[...document.querySelectorAll('.sidebar .sub a')],ss=as.map(a=>document.querySelector(a.hash)).filter(Boolean);function n(){let c=ss[0];ss.forEach(s=>{if(s.getBoundingClientRect().top<150)c=s});as.forEach(a=>a.classList.toggle('active',c&&a.hash==='#'+c.id))}addEventListener('scroll',n,{passive:true});n()</script></body></html>`;
fs.writeFileSync(path.join(dir, 'development-spec.html'), html);
console.log('已按页面规则重建开发详细方案。');
