const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const desktopPreview = process.argv[2] === 'desktop';
  const page = await browser.newPage({ viewport: { width: desktopPreview ? 1100 : 320, height: 900 }, deviceScaleFactor: 1 });
  await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
  if (desktopPreview) await page.locator('.device-switch [data-width="320"]').click();
  await page.locator('[data-session="regular-12:30"]').click();
  await page.locator('[data-project="r1"]').click();
  const result = await page.evaluate(() => {
    const list = document.querySelector('#projectList');
    return {
      viewport: document.documentElement.clientWidth,
      documentScrollWidth: document.documentElement.scrollWidth,
      list: { left: list.getBoundingClientRect().left, right: list.getBoundingClientRect().right, width: list.getBoundingClientRect().width },
      cards: [...list.querySelectorAll('.project-card')].map(card => {
        const rect = card.getBoundingClientRect();
        const copy = card.querySelector('.project-copy')?.getBoundingClientRect();
        const image = card.querySelector('img')?.getBoundingClientRect();
        return {
          name: card.innerText.split('\n')[0],
          left: rect.left,
          right: rect.right,
          width: rect.width,
          clientWidth: card.clientWidth,
          scrollWidth: card.scrollWidth,
          copyWidth: copy?.width || 0,
          imageWidth: image?.width || 0,
          overflow: getComputedStyle(card).overflow
        };
      })
    };
  });
  console.log(JSON.stringify(result, null, 2));
  await browser.close();
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
