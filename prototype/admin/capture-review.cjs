const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await browser.newPage({ viewport:{ width:375,height:812 }, deviceScaleFactor:2, isMobile:true, hasTouch:true });
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  await page.waitForTimeout(150);
  await page.screenshot({ path:path.join(__dirname,'01-工作台-750px.png') });
  await page.locator('[data-go="activities"]').evaluate(el => el.click());
  await page.waitForTimeout(150);
  await page.screenshot({ path:path.join(__dirname,'02-预约活动管理-750px.png') });
  await page.locator('[data-id="4"]').scrollIntoViewIfNeeded();
  await page.waitForTimeout(100);
  await page.screenshot({ path:path.join(__dirname,'02A-30字活动名称样例-750px.png') });
  await page.locator('.activities-scroll').evaluate(el => { el.scrollTop = 0; });
  await page.locator('[data-expand="1"]').evaluate(el => el.click());
  await page.waitForTimeout(100);
  await page.screenshot({ path:path.join(__dirname,'03-活动卡片展开-750px.png') });
  await page.evaluate(() => { currentActivity = activities[0]; navigate('records'); });
  await page.waitForTimeout(100);
  await page.screenshot({ path:path.join(__dirname,'04-全部预约-简要列表-750px.png') });
  await page.locator('[data-record-view="detail"]').evaluate(el => el.click());
  await page.waitForTimeout(100);
  await page.screenshot({ path:path.join(__dirname,'05-全部预约-详情卡片-750px.png') });
  await browser.close();
  console.log(JSON.stringify({ ok:true },null,2));
})().catch(error => { console.error(error); process.exitCode=1; });
