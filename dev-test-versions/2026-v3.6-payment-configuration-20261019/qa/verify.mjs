import fs from 'node:fs/promises';
import path from 'node:path';
import assert from 'node:assert/strict';
import {fileURLToPath} from 'node:url';
import pw from '/Users/susan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.js';
const root=path.dirname(fileURLToPath(import.meta.url));
const state=JSON.parse(await fs.readFile(path.join(root,'qa-state.json'),'utf8'));
assert.equal(state.cases.length,82);assert.equal(state.pages.length,36);assert.equal(new Set(state.cases.flatMap(c=>c.variants.map(v=>v.id))).size,state.cases.reduce((n,c)=>n+c.variants.length,0));
const browser=await pw.chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const errors=[],checks=[],broken=[];
try{
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));await page.goto('file://'+path.join(root,'index.html'));
 assert.equal(await page.locator('.case').count(),82);assert.match(await page.locator('#notice').innerText(),state.runs.length?/执行台账/:/尚未执行/);
 const links=await page.locator('a[href]').evaluateAll(a=>a.map(x=>x.getAttribute('href')));
 // 原生MD中的本地链接也检查，确保页面清单每个原型入口可定位。
 for(const file of ['验收方案.md','页面核对清单.md','任务索引.md']){
  const md=await fs.readFile(path.join(root,file),'utf8');for(const m of md.matchAll(/\]\(([^)]+)\)/g))links.push(m[1]);
 }
 for(const link of links){if(/^(?:https?:|mailto:)/.test(link))continue;const [file,hash]=link.split('#');if(!file){assert.ok(await page.locator('[id]').evaluateAll((es,id)=>es.some(e=>e.id===id),decodeURIComponent(hash)));continue;}try{await fs.access(path.resolve(root,decodeURIComponent(file.split('?')[0])));}catch{broken.push(link);}}
 await page.locator('#module').selectOption('冲红申请与审核');assert.equal(await page.locator('.case').count(),21);
 await page.locator('#case-status').selectOption('通过');assert.equal(await page.locator('.case').count(),state.cases.filter(c=>c.module==='冲红申请与审核'&&c.variants.filter(v=>!['后续验证','本轮不执行'].includes(v.status)).length&&c.variants.filter(v=>!['后续验证','本轮不执行'].includes(v.status)).every(v=>v.status==='通过')).length);
 await page.locator('#reset').click();await page.locator('#search').fill('A77');assert.equal(await page.locator('.case').count(),1);await page.locator('.case summary').click();assert.match(await page.locator('.case-body').innerText(),/取消付款改时间再进入/);assert.match(await page.locator('.case-body').innerText(),/早于开单时间/);
 await page.locator('#reset').click();await page.locator('[data-module="内导结账补收"]').click();assert.equal(await page.locator('.case').count(),12);await page.locator('#reset').click();
 await page.locator('#issue-type').selectOption('页面样式');assert.equal(await page.locator('#issue-list .issue-card').count(),state.issues.filter(i=>i.type==='页面样式').length);
 for(const [w,h] of [[1024,768],[1280,800],[1440,900],[1920,1080],[390,844]]){await page.setViewportSize({width:w,height:h});assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),'溢出 '+w);checks.push({width:w,height:h,noPageOverflow:true});}
 await page.setViewportSize({width:1440,height:900});await page.locator('#overview').scrollIntoViewIfNeeded();await page.screenshot({path:'/tmp/payment-qa-plan-overview.png'});await page.locator('#search').fill('A77');await page.locator('.case summary').click();await page.locator('#cases').scrollIntoViewIfNeeded();await page.screenshot({path:'/tmp/payment-qa-plan-case.png'});
 assert.deepEqual(broken,[]);assert.deepEqual(errors,[]);
 const result={artifactOnly:true,qaEnvironmentExecuted:state.runs.length>0,cases:82,variants:state.cases.reduce((n,c)=>n+c.variants.length,0),pages:36,checks,filterAndSearch:true,brokenLinks:broken,pageErrors:errors};await fs.writeFile(path.join(root,'文档自检.json'),JSON.stringify(result,null,2)+'\n');console.log(JSON.stringify(result));
}finally{await browser.close();}
