const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const page = await browser.newPage({ viewport: { width: 375, height: 812 }, deviceScaleFactor: 1, isMobile: true });
  await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
  await page.locator('[data-go="activities"]').click();
  await page.locator('[data-edit="1"]').click();
  await page.locator('[data-config-step="1"]').click();

  await page.locator('#cfgNoticeTitle').fill('测试保存联动须知');
  await page.locator('#cfgNoticeEditor').evaluate((element) => { element.innerHTML = '<p>这是保存后才进入游客预览的测试内容。</p>'; element.dispatchEvent(new InputEvent('input', { bubbles: true })); });
  await page.locator('#cfgNoticeSeconds').fill('5');

  await page.locator('#configPreviewOpen').click();
  const blockedBeforeSave = !(await page.locator('#configPreviewLayer').evaluate((element) => element.classList.contains('open')));

  await page.locator('#configSave').click();
  await page.locator('#configPreviewOpen').click();
  const frame = page.frameLocator('#configPreviewFrame');
  await frame.locator('#noticeTitle').waitFor();
  await frame.locator('[data-test="notice"]').evaluate((element) => element.click());
  await frame.locator('#noticeModal.open').waitFor();

  const result = {
    blockedBeforeSave,
    title: await frame.locator('#noticeTitle').textContent(),
    content: await frame.locator('#noticeContent').textContent(),
    button: await frame.locator('#noticeConfirm').textContent()
  };
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
