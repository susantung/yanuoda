const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

const pageUrl = pathToFileURL(path.join(__dirname, 'index.html')).href;
const visitorUrl = pathToFileURL(path.join(__dirname, '../visitor/index.html')).href;

async function enterConfig(page, step) {
  await page.goto(pageUrl);
  await page.locator('[data-go="activities"]').click();
  await page.locator('[data-edit="1"]').click();
  await page.locator(`[data-config-step="${step}"]`).click();
}

async function makeConfigFlowLayout(page) {
  await page.evaluate(() => {
    const phone = document.querySelector('#phone');
    const miniapp = document.querySelector('.miniapp');
    const nav = document.querySelector('.nav-bar');
    const configPage = document.querySelector('[data-page="config"]');
    const head = document.querySelector('.config-head');
    const rail = document.querySelector('.config-step-rail');
    const scroll = document.querySelector('.config-scroll');
    const actions = document.querySelector('.config-actions');
    phone.style.height = 'auto';
    phone.style.minHeight = '0';
    phone.style.borderRadius = '0';
    miniapp.style.height = 'auto';
    miniapp.style.overflow = 'visible';
    nav.style.position = 'relative';
    configPage.style.position = 'relative';
    configPage.style.inset = 'auto';
    head.style.position = 'relative';
    head.style.top = 'auto';
    rail.style.position = 'relative';
    rail.style.top = 'auto';
    scroll.style.position = 'relative';
    scroll.style.inset = 'auto';
    scroll.style.overflow = 'visible';
    actions.style.position = 'relative';
    document.documentElement.style.height = 'auto';
    document.documentElement.style.overflow = 'visible';
    document.body.style.height = 'auto';
    document.body.style.overflow = 'visible';
    document.querySelector('.stage').style.height = 'auto';
    document.querySelector('.stage').style.overflow = 'visible';
  });
}

(async () => {
  const browser = await chromium.launch({
    headless: true,
    executablePath: '/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'
  });
  const contextOptions = {
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  };

  const noticePage = await browser.newPage(contextOptions);
  await enterConfig(noticePage, 1);
  await makeConfigFlowLayout(noticePage);
  await noticePage.screenshot({
    path: path.join(__dirname, '手机查看-C02必读须知-完整展开-750px长图.png'),
    fullPage: true
  });
  await noticePage.close();

  const datePage = await browser.newPage(contextOptions);
  await enterConfig(datePage, 2);
  const weeklyOption = datePage.locator('input[name="dateMode"][value="weekly"]');
  if (!(await weeklyOption.isDisabled()) || !(await weeklyOption.locator('xpath=..').innerText()).includes('每周规律循环-敬请期待')) {
    throw new Error('每周规律循环未正确显示为敬请期待禁用项');
  }
  if ((await datePage.locator('.config-scroll').innerText()).includes('模式调整只校验')) {
    throw new Error('C03 仍展示已取消的模式调整说明');
  }
  await datePage.locator('[data-booked-date="2026-08-22"]').click();
  await datePage.locator('[data-pause-date="2026-08-22"]').click();
  await datePage.waitForTimeout(2200);
  await makeConfigFlowLayout(datePage);
  await datePage.screenshot({
    path: path.join(__dirname, '手机查看-C03日期与场次-完整展开-750px长图.png'),
    fullPage: true
  });
  await datePage.close();

  const visitorPage = await browser.newPage(contextOptions);
  await visitorPage.goto(visitorUrl);
  const pausedDate = visitorPage.locator('[data-date="2026-08-22"]');
  if (!(await pausedDate.isDisabled()) || !(await pausedDate.innerText()).includes('暂停预约')) {
    throw new Error('正式游客端未正确展示并禁用暂停日期');
  }
  await visitorPage.close();

  const linkedPreviewPage = await browser.newPage(contextOptions);
  await enterConfig(linkedPreviewPage, 2);
  await linkedPreviewPage.locator('#configSave').click();
  await linkedPreviewPage.waitForTimeout(1800);
  await linkedPreviewPage.locator('#configPreviewOpen').click();
  const visitorFrame = linkedPreviewPage.frameLocator('#configPreviewFrame');
  if (await visitorFrame.locator('[data-date="2026-08-14"]').count()) throw new Error('历史日期仍被下发到游客端效果');
  if (await visitorFrame.locator('[data-date="2026-08-26"]').count()) throw new Error('未配置场次的日期仍被下发到游客端效果');
  await visitorFrame.locator('[data-date="2026-08-25"]').click();
  const date25Text = await visitorFrame.locator('[data-date="2026-08-25"]').innerText();
  if (date25Text.includes('已满额') || !date25Text.includes('剩24名')) throw new Error('日期库存状态未按逐日场次汇总');
  if (!(await visitorFrame.locator('#sessionList').innerText()).includes('雨林溪降上午体验场次')) {
    throw new Error('C03 保存后的逐日场次未同步到游客端效果');
  }
  await linkedPreviewPage.locator('#configPreviewFrame').screenshot({
    path: path.join(__dirname, '手机查看-游客端效果-C03逐日数据联动-750px.png')
  });
  await linkedPreviewPage.close();

  await browser.close();
})().catch(error => {
  console.error(error);
  process.exitCode = 1;
});
