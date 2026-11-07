import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import assert from 'node:assert/strict';
import pw from '/Users/susan/.cache/codex-runtimes/codex-primary-runtime/dependencies/node/node_modules/playwright/index.js';
const root=path.dirname(fileURLToPath(import.meta.url));
const audit=JSON.parse(await fs.readFile(path.join(root,'assets/html-build-audit.json'),'utf8'));
const browser=await pw.chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
const errors=[],checks=[],brokenLinks=[];
try{
 const page=await browser.newPage();page.on('pageerror',e=>errors.push(e.message));
 await page.route('http://**',r=>r.abort());await page.route('https://**',r=>r.abort());
 for(const file of audit.pages){
  await page.goto('file://'+path.join(root,file),{waitUntil:'load'});
  const links=await page.locator('a[href]').evaluateAll(as=>as.map(a=>a.getAttribute('href')));
  for(const href of links){
   if(/^https?:|^mailto:/.test(href))continue;
   const [part,hash]=href.split('#');const destination=path.resolve(root,decodeURIComponent(part.split('?')[0]||file));
   try{await fs.access(destination);}catch{brokenLinks.push({file,href});continue;}
   if(hash&&(!part||part===file))assert.ok(await page.locator('[id]').evaluateAll((els,id)=>els.some(e=>e.id===id),decodeURIComponent(hash)),file+' missing anchor '+hash);
  }
  const source=file==='development-spec.html'?'03-逐页功能方案.md':file==='page-list.html'?'01-页面清单.md':file==='acceptance.html'?'04-开发核对与验收清单.md':null;
  if(source){let md=await fs.readFile(path.join(root,source),'utf8');if(file==='development-spec.html')for(const part of ['05-冲红补充方案.md','07-内导结账补充方案.md','06-记录范围与实施边界.md'])md+='\n'+await fs.readFile(path.join(root,part),'utf8');const expected=(md.match(/^## /gm)||[]).length;assert.equal(await page.locator('.doc h2').count(),expected);}
  for(const [width,height] of [[1440,900],[1024,768],[390,844]]){
   await page.setViewportSize({width,height});
   assert.ok(await page.evaluate(()=>document.documentElement.scrollWidth<=innerWidth+1),file+' page overflow '+width);
   assert.equal(await page.locator('.hero h1').count(),1);
   checks.push({file,width,noPageOverflow:true});
  }
  if(file==='development-spec.html'){
   await page.setViewportSize({width:1440,height:900});await page.locator('.toc-link').filter({hasText:'14. W04'}).click();await page.waitForTimeout(550);
   assert.ok(page.url().includes('#14-'));await page.waitForFunction(()=>Math.abs(document.querySelector('[id^="14-W04"]').getBoundingClientRect().top-24)<5);await page.screenshot({path:'/tmp/payment-plan-html-spec.png'});
   await page.locator('.toc-link').filter({hasText:'24. W13'}).click();await page.waitForFunction(()=>Math.abs(document.querySelector('[id^="24-W13"]').getBoundingClientRect().top-24)<5);await page.screenshot({path:'/tmp/payment-plan-html-reversal-spec.png'});
   for(const section of ['25. B10','26. W15','27. D01','28. K05'])assert.equal(await page.locator('.doc h2').filter({hasText:section}).count(),1);
   const sectionNumbers=await page.locator('.doc h2').allTextContents();assert.deepEqual(sectionNumbers.map(s=>Number(s.match(/^\d+/)?.[0])),Array.from({length:35},(_,i)=>i+1));
   await page.locator('.toc-link').filter({hasText:'31. W18'}).click();await page.waitForFunction(()=>Math.abs(document.querySelector('[id^="31-W18"]').getBoundingClientRect().top-24)<5);await page.screenshot({path:'/tmp/payment-plan-inner-settlement.png'});
  }
  if(file==='page-list.html'){const text=await page.locator('.doc').innerText();for(const id of ['B01','B09','W01','W10','W11','W12','D01','D03'])assert.ok(text.includes(id));}
  if(file==='acceptance.html')assert.equal(await page.locator('.doc tr').filter({hasText:/A\d{2}/}).count(),82);
  if(file==='flows.html'){
   assert.equal(audit.flowCount,12);assert.equal(await page.locator('.flow-card').count(),audit.flowCount);assert.equal(await page.locator('.flow-stage>svg').count(),audit.flowCount);
   for(let i=0;i<audit.flowCount;i++){assert.equal(await page.locator('.flow-stage').nth(i).locator('g.node').count(),audit.flows[i].nodes);assert.equal(await page.locator('.flow-stage').nth(i).locator('g.edge').count(),audit.flows[i].edges);const overflow=await page.locator('.flow-stage').nth(i).locator('g.node').evaluateAll(ns=>ns.flatMap(n=>{const shape=n.querySelector('path,polygon,ellipse').getBBox();return [...n.querySelectorAll('text')].filter(t=>{const b=t.getBBox();return b.x<shape.x-1||b.x+b.width>shape.x+shape.width+1;}).map(t=>t.textContent);}));assert.deepEqual(overflow,[],'flow text overflow '+i);}
   await page.setViewportSize({width:1440,height:900});const card=page.locator('.flow-card').first();await card.scrollIntoViewIfNeeded();
   await page.waitForTimeout(250);const before=await card.locator('.zoom-label').innerText();await card.locator('[data-action="in"]').click();const after=await card.locator('.zoom-label').innerText();assert.notEqual(before,after);
   const stage=card.locator('.flow-stage'),rect=await stage.boundingBox();const transformBefore=await stage.locator('svg').evaluate(s=>s.style.transform);
   await page.mouse.move(rect.x+100,rect.y+100);await page.mouse.down();await page.mouse.move(rect.x+140,rect.y+140);await page.mouse.up();assert.notEqual(await stage.locator('svg').evaluate(s=>s.style.transform),transformBefore);
   await card.locator('[data-action="fit"]').click();await card.locator('[data-action="width"]').click();await page.waitForTimeout(500);await page.screenshot({path:'/tmp/payment-plan-html-flows.png'});
   const reversal=page.locator('.flow-card').nth(9);await reversal.scrollIntoViewIfNeeded();await reversal.locator('[data-action="fit"]').click();await page.screenshot({path:'/tmp/payment-plan-html-reversal-flow.png'});
  }
  if(file==='index.html'){await page.setViewportSize({width:1440,height:900});await page.screenshot({path:'/tmp/payment-plan-html-home.png'});await page.setViewportSize({width:390,height:844});await page.locator('.mobile-menu').click();assert.ok(await page.locator('.sidebar').isVisible());await page.locator('.mobile-menu').click();assert.ok(!(await page.locator('.sidebar').isVisible()));}
 }
 assert.deepEqual(errors,[]);assert.deepEqual(brokenLinks,[]);
 const result={checks,errors,brokenLinks,flowNodes:audit.flows.reduce((a,f)=>a+f.nodes,0),flowEdges:audit.flows.reduce((a,f)=>a+f.edges,0),flowZoomAndDrag:true,acceptanceCases:82};
 await fs.writeFile(path.join(root,'assets/html-verification.json'),JSON.stringify(result,null,2));console.log(JSON.stringify(result));
}finally{await browser.close();}
