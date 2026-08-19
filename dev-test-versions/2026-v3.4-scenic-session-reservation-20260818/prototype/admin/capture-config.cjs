const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const shots = [
    [0,'12-C01-基础信息-750px.png'],[1,'13-C02-必读须知-750px.png'],[2,'14-C03-项目配置-750px.png'],
    [3,'15-C04-日期与场次-750px.png'],[4,'16-C05-展示设置-750px.png'],[5,'17-C06-游客预约配置-750px.png'],
    [6,'18-C07-活动发布-750px.png']
  ];
  for (const [step,file] of shots) {
    const page=await browser.newPage({viewport:{width:375,height:812},deviceScaleFactor:2,isMobile:true});
    await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
    await page.locator('[data-go="activities"]').click(); await page.locator('[data-edit="1"]').click(); await page.locator(`[data-config-step="${step}"]`).click();
    await page.screenshot({path:path.join(__dirname,file)}); await page.close();
  }
  await browser.close();
})();
