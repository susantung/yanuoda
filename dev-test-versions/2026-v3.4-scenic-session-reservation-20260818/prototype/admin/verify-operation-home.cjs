const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const errors = [];
  for (const width of [320, 360, 375, 390, 414]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    page.on('pageerror', error => errors.push(`${width}: ${error.message}`));
    await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
    await page.click('#operationsEntry');
    await page.locator('.operation-activity-card').first().click();
    await page.evaluate(() => { const values = document.querySelectorAll('.operation-metric-card b'); values[0].textContent='128600'; values[1].textContent='98765'; });
    const result = await page.evaluate(() => {
      const page = document.querySelector('[data-page="operations"]');
      const entries = [...page.querySelectorAll('.operation-entry')];
      const entryRects = entries.map(item => item.getBoundingClientRect());
      const entryDescriptions = entries.map(item => getComputedStyle(item.querySelector('.operation-entry-copy>span')));
      const forbidden = page.querySelector('#operationMore,[data-op-action="edit"],[data-action="copy"],[data-action="delete"]');
      const metrics = [...page.querySelectorAll('.operation-metric-card')];
      const metricWrap = metrics.map(item => { const number=item.querySelector('b').getBoundingClientRect(); const label=item.querySelector('em').getBoundingClientRect(); const card=item.getBoundingClientRect(); return {numberHeight:number.height,lineHeight:parseFloat(getComputedStyle(item.querySelector('b')).lineHeight),inside:number.right<=card.right+1,cardBorder:getComputedStyle(item).borderTopWidth,labelInside:label.right<=card.right+1}; });
      const metricsOuter = page.querySelector('.operation-metrics');
      const separator = getComputedStyle(metrics[1], '::before');
      return {
        active: page.classList.contains('active'),
        entryTargets: entries.map(item => item.dataset.opGo),
        sameWidth: entryRects.every(rect => Math.abs(rect.width-entryRects[0].width) < 1),
        sameHeight: entryRects.every(rect => Math.abs(rect.height-entryRects[0].height) < 1),
        vertical: entryRects.slice(1).every((rect,index) => rect.top > entryRects[index].bottom),
        descriptionsSingleLine: entryDescriptions.every(style => style.whiteSpace === 'nowrap' && style.textOverflow === 'ellipsis'),
        forbidden: Boolean(forbidden),
        overflow: page.scrollWidth > page.clientWidth + 1,
        metricIcons: metrics.map(item => item.querySelector('svg')?.getBoundingClientRect().width),
        metricWrap,
        metricsOuterBorder:getComputedStyle(metricsOuter).borderTopWidth,
        separatorContent:separator.content,
        fonts: {
          heroMeta: getComputedStyle(page.querySelector('.operation-hero p')).fontSize,
          section: getComputedStyle(page.querySelector('.operation-section h3')).fontSize,
          entry: getComputedStyle(page.querySelector('.operation-entry-copy b')).fontSize,
          description: getComputedStyle(page.querySelector('.operation-entry-copy>span')).fontSize
        }
      };
    });
    if (!result.active || result.forbidden || result.overflow || !result.sameWidth || !result.sameHeight || !result.vertical || !result.descriptionsSingleLine) errors.push(`${width}: ${JSON.stringify(result)}`);
    if (result.entryTargets.join(',') !== 'records,sessions,export') errors.push(`${width}: entry targets ${result.entryTargets}`);
    if (result.metricIcons.some(size => size < 20)) errors.push(`${width}: metric icons ${result.metricIcons}`);
    if (result.metricsOuterBorder !== '1px' || result.metricWrap.some(item => item.cardBorder !== '0px' || !item.inside || !item.labelInside || item.numberHeight > item.lineHeight + 1)) errors.push(`${width}: six-digit metrics ${JSON.stringify(result.metricWrap)}`);
    if (result.separatorContent !== 'none' && result.separatorContent !== 'normal') errors.push(`${width}: separator still visible ${result.separatorContent}`);
    if (result.fonts.heroMeta !== '12px' || result.fonts.section !== '17px' || result.fonts.entry !== '15px' || result.fonts.description !== '12px') errors.push(`${width}: fonts ${JSON.stringify(result.fonts)}`);
    for (const target of ['records','sessions','export']) {
      await page.click(`[data-op-go="${target}"]`);
      const active = await page.locator(`[data-page="${target}"]`).evaluate(el => el.classList.contains('active'));
      if (!active) errors.push(`${width}: ${target} navigation failed`);
      await page.click('#backButton');
    }
    await page.close();
  }
  await browser.close();
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('O01 operations-only layout, typography, responsive and navigation checks passed');
})().catch(error => { console.error(error); process.exit(1); });
