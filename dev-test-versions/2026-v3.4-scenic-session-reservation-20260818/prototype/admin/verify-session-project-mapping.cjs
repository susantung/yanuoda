const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome'});
  const page = await browser.newPage({viewport:{width:375,height:812}, isMobile:true});
  page.setDefaultTimeout(5000);
  const errors=[];
  const expect = (condition,message) => { if(!condition) errors.push(message); };
  await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
  await page.locator('[data-go="activities"]').click();
  await page.locator('[data-edit="1"]').click();
  await page.locator('[data-config-step="3"]').click();

  // 已有场次的空关联必须按历史空配置回显，不可文案误导为“默认全选”。
  await page.locator('[data-session-date="2026-08-22"]').click();
  await page.locator('[data-quick-quota="2"]').click();
  expect(await page.locator('[data-project-association="quick"]:checked').count()===0,'历史空关联场次不应自动勾选项目');
  expect((await page.locator('.session-project-setup-head').textContent()).includes('历史保存'),'已有场次应显示历史关联回显说明');
  await page.locator('[data-back-date-editor]').click();
  await page.locator('[data-cancel-session-date]').click();

  // 新建场次仅取当前启用项目，且初始勾选；未启用项目不应进入可选项。
  await page.locator('[data-session-date="2026-08-26"]').click();
  await page.locator('[data-init-session-date="2026-08-26"]').click();
  await page.locator('[data-add-session-date="2026-08-26"]').click();
  expect(await page.locator('[data-project-association="single"]').count()===2,'新建场次应只列出当前启用项目');
  expect(await page.locator('[data-project-association="single"]:checked').count()===2,'新建场次应默认勾选当前全部启用项目');
  await page.locator('[data-back-date-editor]').click();
  await page.locator('[data-cancel-session-date]').click();

  // 游客端选择未关联项目的场次后，分类和项目步骤必须整体隐藏。
  await page.locator('#configPreviewOpen').click();
  const visitor=page.frameLocator('#configPreviewFrame');
  await visitor.locator('[data-date="2026-08-24"]').click();
  // 该日期会触发游客端的必读须知；真实用户需先关闭，自动化同样必须完成这一步。
  const noticeClose=visitor.locator('#noticeModal .dialog-close[data-close="notice"]');
  if(await noticeClose.count()) await noticeClose.click();
  await visitor.locator('[data-session]').nth(2).click();
  expect(await visitor.locator('#projectSection').isHidden(),'未关联项目的场次不应在游客端展示项目选择');
  await browser.close();
  console.log(JSON.stringify({ok:!errors.length,errors},null,2));
  process.exitCode=errors.length?1:0;
})();
