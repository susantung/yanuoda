const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless:true, executablePath:'/Applications/Google Chrome.app/Contents/MacOS/Google Chrome' });
  const errors = [];
  for (const width of [320,360,375,390,414]) {
    const page = await browser.newPage({ viewport:{ width,height:812 }, deviceScaleFactor:1, isMobile:true });
    page.setDefaultTimeout(5000);
    page.on('pageerror', error => errors.push(`${width}: ${error.message}`));
    await page.goto(pathToFileURL(path.join(__dirname,'index.html')).href);
    await page.locator('[data-go="activities"]').click();
    await page.locator('[data-edit="1"]').click();
    if (!(await page.locator('[data-page="config"]').isVisible())) errors.push(`${width}: config did not open`);
    if (await page.locator('[data-config-step]').count() !== 7) errors.push(`${width}: missing config steps`);
    await page.locator('#configPreviewOpen').click();
    if (!(await page.locator('#configPreviewLayer').evaluate(el=>el.classList.contains('open')))) errors.push(`${width}: visitor preview missing`);
    const visitor=page.frameLocator('#configPreviewFrame');
    await visitor.locator('.session-card').first().waitFor();
    if (await visitor.locator('.date-card').count() < 1) errors.push(`${width}: configured dates not reflected`);
    if (await visitor.locator('.session-card').count() !== 3) errors.push(`${width}: configured sessions not reflected`);
    if (await visitor.locator('.prototype-panel').isVisible()) errors.push(`${width}: visitor option panel should be hidden in linked preview`);
    if ((await visitor.locator('body').getAttribute('data-theme')) !== 'forest') errors.push(`${width}: visitor preview theme not locked to green`);
    await visitor.locator('#backButton').click();
    for (let i=0;i<7;i++) {
      await page.locator(`[data-config-step="${i}"]`).click();
      if (!(await page.locator('.config-page-title').isVisible())) errors.push(`${width}: step ${i} missing`);
      if (await page.evaluate(() => document.documentElement.scrollWidth > document.documentElement.clientWidth)) errors.push(`${width}: step ${i} horizontal overflow`);
    }
    await page.locator('[data-config-step="3"]').click();
    await page.locator('[data-session-date]').first().click();
    if (!(await page.locator('#configSheetLayer').evaluate(el=>el.classList.contains('open')))) errors.push(`${width}: session sheet missing`);
    await page.locator('[data-cancel-session-date]').last().click();
    await page.locator('[data-config-step="5"]').click();
    await page.locator('[data-config-action="addField"]').click();
    if (await page.locator('[data-add-field-type]').count() !== 10) errors.push(`${width}: field types missing`);
    await page.locator('[data-close="configSheet"]').last().click();
    await page.locator('[data-config-step="6"]').click();
    if (!(await page.locator('#publishConfig').isVisible())) errors.push(`${width}: publish page missing`);
    await page.screenshot({ path:path.join(__dirname,`qa-config-${width}.png`), fullPage:true });
    await page.close();
  }
  await browser.close();
  console.log(JSON.stringify({ok:errors.length===0,errors},null,2));
  process.exitCode=errors.length?1:0;
})();
