const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');
const fs = require('fs');

(async () => {
  const outputDir = path.join(__dirname, 'mobile-review');
  fs.mkdirSync(outputDir, { recursive: true });
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
  await page.waitForTimeout(200);
  await page.screenshot({ path: path.join(outputDir, '01-预约选择页-750px.png') });

  await page.locator('[data-session="regular-12:30"]').tap();
  await page.locator('[data-project="r1"]').tap();
  await page.locator('#nextButton').tap();
  await page.waitForTimeout(100);
  await page.screenshot({ path: path.join(outputDir, '02-填写预约信息-750px.png') });

  await page.locator('#nameInput').fill('苏珊');
  await page.locator('#phoneInput').fill('13800138000');
  await page.locator('#sizeInput').selectOption({ label: '成人 M' });
  await page.locator('#agreement').check();
  await page.locator('#submitButton').tap();
  await page.waitForTimeout(1000);
  await page.screenshot({ path: path.join(outputDir, '03-预约结果页-750px.png') });

  await browser.close();
  console.log(JSON.stringify({ ok: true, outputDir }, null, 2));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
