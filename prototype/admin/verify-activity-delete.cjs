const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page=await browser.newPage({viewport:{width:390,height:844}});page.setDefaultTimeout(8000);
  const url=pathToFileURL(path.join(__dirname,'index.html')).href;
  await page.goto(url);await page.evaluate(()=>localStorage.clear());await page.reload();
  await page.click('[data-go="activities"]');
  if(await page.locator('[data-activity-status="published"] + *').count()<0)throw new Error('活动列表未加载');
  if(await page.locator('.activity-card .activity-delete-entry').count())throw new Error('已上架列表错误展示删除入口');
  await page.click('[data-activity-status="offline"]');
  const locked=page.locator('[data-delete-activity="3"]');
  if(!await locked.count()||await locked.getAttribute('aria-disabled')!=='true')throw new Error('有预约的已下架活动未显示禁用删除');
  await locked.click({force:true});
  if(!(await page.locator('#toast').textContent()).includes('已有预约数据'))throw new Error('有预约活动删除提示错误');
  const deletable=page.locator('[data-delete-activity="5"]');
  if(!await deletable.count())throw new Error('无预约已下架活动没有可用删除入口');
  await deletable.click();
  if(!await page.locator('#deleteLayer').evaluate(el=>el.classList.contains('open')))throw new Error('删除二次确认未打开');
  await page.click('#confirmDelete');
  if(await page.locator('#activityList').innerText().then(text=>text.includes('测试活动｜已下架且无预约可删除')))throw new Error('确认后活动未从列表删除');
  await browser.close();console.log('activity delete rules passed');
})().catch(error=>{console.error(error);process.exit(1);});
