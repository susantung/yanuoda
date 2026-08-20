const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page=await browser.newPage({viewport:{width:375,height:812}});page.setDefaultTimeout(8000);
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);await page.evaluate(()=>localStorage.clear());await page.reload();
  await page.click('[data-go="activities"]');
  for(const width of [320,375,414]){await page.setViewportSize({width,height:812});const overflow=await page.locator('.activity-card').first().evaluate(card=>card.scrollWidth>card.clientWidth);if(overflow)throw new Error(`${width}px 已发布活动卡片横向溢出`);}
  if(await page.locator('[data-offline-activity]').count()!==3)throw new Error('已发布活动未全部显示下架入口');
  if(await page.locator('[data-delete-activity]').count())throw new Error('已发布列表错误显示删除入口');
  await page.click('[data-offline-activity="1"]');
  if(!await page.locator('#offlineActivityLayer').evaluate(el=>el.classList.contains('open')))throw new Error('下架二次确认未打开');
  const text=await page.locator('#offlineActivityLayer .dialog').innerText();
  if(!text.includes('停止接受新预约')||!text.includes('已有预约仍可查看、修改和取消')||text.includes('游客端活动列表'))throw new Error('下架风险提示不正确');
  await page.click('#confirmOfflineActivity');
  if((await page.locator('#activityList').innerText()).includes('呀诺达溪降体验预约'))throw new Error('下架后仍留在已发布列表');
  await page.click('[data-activity-status="offline"]');
  if(!(await page.locator('#activityList').innerText()).includes('呀诺达溪降体验预约'))throw new Error('下架后未进入已下架列表');
  const catalog=await page.evaluate(()=>JSON.parse(localStorage.getItem('scenicPublishedActivityCatalogV34')||'[]'));
  if(catalog.some(item=>String(item.id)==='1'))throw new Error('下架后游客端活动目录未移除');
  await browser.close();console.log('activity offline rules passed');
})().catch(error=>{console.error(error);process.exit(1);});
