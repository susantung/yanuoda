const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await browser.newPage({ viewport:{ width:375, height:812 } });
  const errors=[];
  page.on('pageerror',error=>errors.push(error.message));
  const url=pathToFileURL(path.join(__dirname,'index.html')).href;
  await page.goto(url);
  if(!await page.locator('[data-page="activities"]').isVisible())errors.push('活动效果浏览页不是首屏');
  if(await page.locator('[data-visitor-activity]').count()!==3)errors.push('默认已上架活动数量不正确');
  if((await page.locator('#visitorActivityList').innerText()).includes('VIP 私家团场次预约'))errors.push('已下架活动仍出现在列表');
  await page.locator('[data-visitor-activity="1"]').click();
  await page.waitForLoadState('domcontentloaded');
  if(!await page.locator('[data-page="select"]').isVisible())errors.push('点击活动未进入独立场次预约页');
  await page.goto(url);
  await page.evaluate(()=>localStorage.setItem('scenicPublishedActivityCatalogV34',JSON.stringify([{id:'88',name:'已发布快照名称',status:'published',updated:'2026-08-19 10:00'}])));
  await page.reload();
  if(!(await page.locator('#visitorActivityList').innerText()).includes('已发布快照名称'))errors.push('列表未读取发布快照目录');
  if((await page.locator('#visitorActivityList').innerText()).includes('呀诺达溪降体验预约'))errors.push('发布快照存在时仍混入后台实时样例');
  await page.screenshot({path:path.join(__dirname,'qa-activity-list.png'),fullPage:true});
  await browser.close();
  console.log(JSON.stringify({ok:errors.length===0,errors},null,2));
  process.exitCode=errors.length?1:0;
})().catch(error=>{console.error(error);process.exitCode=1;});
