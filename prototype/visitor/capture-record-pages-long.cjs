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
  await page.waitForTimeout(250);
  await page.locator('[data-go="records"]').first().evaluate(el => el.click());
  await page.waitForTimeout(150);

  await page.addStyleTag({ content: `
    html,body{width:375px!important;height:auto!important;min-height:0!important;overflow:visible!important}
    .stage{display:block!important;min-height:0!important;padding:0!important}
    .phone{width:375px!important;height:auto!important;min-height:0!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:visible!important}
    .nav-bar{position:relative!important;top:auto!important;left:auto!important;right:auto!important}
    .page{position:relative!important;inset:auto!important;display:none!important}
    .page.active{display:block!important}
    .page-scroll{position:relative!important;inset:auto!important;overflow:visible!important;padding-bottom:28px!important}
    .bottom-bar{position:relative!important;left:auto!important;right:auto!important;bottom:auto!important}
  ` });

  await page.locator('#phone').screenshot({
    path: path.join(outputDir, '06-我的预约完整长图-750px.png')
  });

  await page.locator('[data-record="active"]').evaluate(el => el.click());
  await page.waitForTimeout(150);
  await page.locator('#phone').screenshot({
    path: path.join(outputDir, '07-预约详情完整长图-750px.png')
  });

  await browser.close();
  console.log(JSON.stringify({ ok: true, outputDir }, null, 2));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
