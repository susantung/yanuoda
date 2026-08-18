const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

const pageUrl = pathToFileURL(path.join(__dirname, 'index.html')).href;

async function expandPhoneToContent(page, scrollSelector, fixedHeight) {
  const contentHeight = await page.locator(scrollSelector).evaluate((element) => element.scrollHeight);
  await page.locator('#phone').evaluate((element, height) => {
    element.style.height = `${height}px`;
    element.style.minHeight = `${height}px`;
    element.style.borderRadius = '0';
  }, contentHeight + fixedHeight);
  await page.locator(scrollSelector).evaluate((element) => {
    element.style.overflow = 'visible';
  });
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

  const listPage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await listPage.goto(pageUrl);
  await listPage.locator('[data-go="activities"]').click();
  await listPage.locator('[data-expand="1"]').click();
  await expandPhoneToContent(listPage, '.activities-scroll', 86);
  await listPage.locator('#phone').screenshot({
    path: path.join(__dirname, '手机查看-预约活动列表-信息展开-750px长图.png')
  });
  await listPage.close();

  const configPage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await configPage.goto(pageUrl);
  await configPage.locator('[data-go="activities"]').click();
  await configPage.locator('[data-edit="1"]').click();
  await makeConfigFlowLayout(configPage);
  await configPage.screenshot({
    path: path.join(__dirname, '手机查看-C01基础信息-750px长图.png'),
    fullPage: true
  });
  await configPage.locator('[data-config-action="removeLogo"]').click();
  await configPage.waitForTimeout(1800);
  await configPage.screenshot({
    path: path.join(__dirname, '手机查看-C01基础信息-删除LOGO状态-750px长图.png'),
    fullPage: true
  });
  await configPage.close();

  const noticePage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await noticePage.goto(pageUrl);
  await noticePage.locator('[data-go="activities"]').click();
  await noticePage.locator('[data-edit="1"]').click();
  await noticePage.locator('[data-config-step="1"]').click();
  await makeConfigFlowLayout(noticePage);
  await noticePage.screenshot({
    path: path.join(__dirname, '手机查看-C02必读须知配置-750px长图.png'),
    fullPage: true
  });
  await noticePage.close();

  const dateSessionPage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await dateSessionPage.goto(pageUrl);
  await dateSessionPage.locator('[data-go="activities"]').click();
  await dateSessionPage.locator('[data-edit="1"]').click();
  await dateSessionPage.locator('[data-config-step="2"]').click();
  await makeConfigFlowLayout(dateSessionPage);
  await dateSessionPage.screenshot({
    path: path.join(__dirname, '手机查看-C03日期与场次合并草案-750px长图.png'),
    fullPage: true
  });
  await dateSessionPage.close();

  const dateActionPage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await dateActionPage.goto(pageUrl);
  await dateActionPage.locator('[data-go="activities"]').click();
  await dateActionPage.locator('[data-edit="1"]').click();
  await dateActionPage.locator('[data-config-step="2"]').click();
  await dateActionPage.locator('[data-booked-date="2026-08-22"]').click();
  await dateActionPage.screenshot({
    path: path.join(__dirname, '手机查看-C03预约日期操作菜单-750px.png')
  });
  await dateActionPage.locator('[data-cancel-date="2026-08-22"]').click();
  await dateActionPage.screenshot({
    path: path.join(__dirname, '手机查看-C03取消日期全部预约确认-750px.png')
  });
  await dateActionPage.close();

  const dateEditPage = await browser.newPage({
    viewport: { width: 375, height: 812 },
    deviceScaleFactor: 2,
    isMobile: true,
    hasTouch: true
  });
  await dateEditPage.goto(pageUrl);
  await dateEditPage.locator('[data-go="activities"]').click();
  await dateEditPage.locator('[data-edit="1"]').click();
  await dateEditPage.locator('[data-config-step="2"]').click();
  await dateEditPage.locator('[data-config-action="dateRange"]').click();
  await dateEditPage.locator('#rangeStartDate').fill('2026-08-24');
  await dateEditPage.locator('#rangeEndDate').fill('2026-08-31');
  await dateEditPage.locator('[data-confirm-date-range]').click();
  await dateEditPage.screenshot({
    path: path.join(__dirname, '手机查看-C03连续日期添加后回显-750px.png')
  });
  await dateEditPage.locator('[data-config-action="removeDate"]').click();
  await dateEditPage.locator('[data-calendar-date="2026-08-24"]').click();
  await dateEditPage.locator('[data-calendar-date="2026-08-25"]').click();
  await dateEditPage.screenshot({
    path: path.join(__dirname, '手机查看-C03批量移除日期勾选态-750px.png')
  });
  await dateEditPage.close();

  await browser.close();
  console.log(JSON.stringify({ ok: true }, null, 2));
})().catch((error) => {
  console.error(error);
  process.exitCode = 1;
});
