const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');
const fs = require('fs');

(async () => {
  const logicalWidth = Number(process.argv[2] || 375);
  const outputDir = path.join(__dirname, 'mobile-review');
  fs.mkdirSync(outputDir, { recursive: true });
  const outputPath = path.join(outputDir, logicalWidth === 375
    ? '04-预约选择完整长图-月份排期卡-750px.png'
    : `05-预约选择完整长图-${logicalWidth}逻辑宽-${logicalWidth * 2}px.png`);
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({
    viewport: { width: logicalWidth, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
  await page.waitForTimeout(150);

  // 固定用户指定的原型展示状态。
  await page.locator('[data-date-style="month"]').evaluate(el => el.click());
  await page.locator('[data-session-style="rail-time"]').evaluate(el => el.click());
  await page.locator('[data-time-display="start"]').evaluate(el => el.click());
  await page.locator('[data-project-style="detail"]').evaluate(el => el.click());
  await page.locator('[data-project-module="on"]').evaluate(el => el.click());
  await page.locator('[data-session="regular-12:30"]').evaluate(el => el.click());
  await page.locator('[data-project="r1"]').evaluate(el => el.click());
  await page.locator('#expandActivity').evaluate(el => el.click());

  // 长图专用排版：展开内部滚动容器，并把底部操作栏放到完整内容之后。
  await page.addStyleTag({ content: `
    html,body{width:${logicalWidth}px!important;height:auto!important;min-height:0!important;overflow:visible!important}
    .stage{display:block!important;min-height:0!important;padding:0!important}
    .phone{width:${logicalWidth}px!important;height:auto!important;min-height:0!important;border:0!important;border-radius:0!important;box-shadow:none!important;overflow:visible!important}
    .nav-bar{position:relative!important;top:auto!important;left:auto!important;right:auto!important}
    .page{position:relative!important;inset:auto!important;display:none!important}
    .page.active{display:block!important}
    .page-scroll{position:relative!important;inset:auto!important;overflow:visible!important;padding-bottom:28px!important}
    .bottom-bar{position:relative!important;left:auto!important;right:auto!important;bottom:auto!important}
  ` });
  await page.waitForTimeout(100);

  await page.locator('#phone').screenshot({ path: outputPath });
  const size = await page.locator('#phone').boundingBox();
  await browser.close();
  console.log(JSON.stringify({ ok: true, outputPath, cssSize: size }, null, 2));
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
