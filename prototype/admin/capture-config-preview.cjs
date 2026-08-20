const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');
(async()=>{
  const browser=await chromium.launch({headless:true,executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page=await browser.newPage({viewport:{width:375,height:812},deviceScaleFactor:2,isMobile:true});
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  await page.locator('[data-go="activities"]').click();
  await page.locator('[data-edit="1"]').click();
  await page.locator('[data-config-step="3"]').click();
  await page.locator('#configPreviewOpen').click();
  const visitor=page.frameLocator('#configPreviewFrame');
  await visitor.locator('.session-card').first().waitFor();
  await page.screenshot({path:path.join(__dirname,'23-后台配置对应游客端效果-750px.png')});
  await visitor.locator('.session-card:not([disabled])').first().click();
  await visitor.locator('.select-scroll').evaluate(el=>{el.scrollTop=el.scrollHeight;});
  await page.screenshot({path:path.join(__dirname,'24-后台场次项目配置对应效果-750px.png')});
  await browser.close();
})();
