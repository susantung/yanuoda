const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true, executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const page = await browser.newPage({ viewport: { width: 390, height: 844 } });
  const url = pathToFileURL(path.join(__dirname, 'index.html')).href;
  await page.goto(url);
  await page.evaluate(() => localStorage.clear());
  await page.reload();

  await page.click('[data-panel-go="activities"]');
  if (await page.locator('.activity-card img.activity-cover').count() < 1) throw new Error('有图历史活动未显示图片');

  await page.click('[data-activity-status="offline"]');
  await page.click('[data-edit="3"]');
  await page.click('[data-config-step="6"]');
  await page.waitForSelector('#publishConfig');
  const before = await page.locator('.publish-status-line b').textContent();
  if (!before.includes('已下架')) throw new Error(`发布前状态错误：${before}`);
  await page.click('#publishConfig');
  await page.waitForFunction(() => document.querySelector('.publish-status-line b')?.textContent.includes('已上架'));
  const after = await page.locator('.publish-status-line b').textContent();
  if (!after.includes('已上架')) throw new Error(`发布后状态错误：${after}`);

  await page.click('#configPrev');
  await page.click('#configPrev');
  await browser.close();
  console.log('publish relist and historical image checks passed');
})().catch(error => { console.error(error); process.exit(1); });
