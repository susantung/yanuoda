const { chromium } = require('playwright');
const { pathToFileURL } = require('url');
const path = require('path');

(async () => {
  const browser = await chromium.launch({ headless: true, channel: 'chrome' });
  const errors = [];
  for (const width of [320, 360, 375, 390, 414]) {
    const page = await browser.newPage({ viewport: { width, height: 844 } });
    page.on('console', msg => { if (msg.type() === 'error') errors.push(`${width}: ${msg.text()}`); });
    await page.goto(pathToFileURL(path.join(__dirname, 'index.html')).href);
    await page.click('#operationsEntry');
    const result = await page.evaluate(() => {
      const active = document.querySelector('[data-operation-activity-status].active')?.dataset.operationActivityStatus;
      const cards = [...document.querySelectorAll('.operation-activity-card')];
      const publishedOnly = cards.every(card => card.querySelector('.status')?.textContent.trim() === '已发布');
      const first = cards[0];
      const metricItems = first ? [...first.querySelectorAll('.operation-metric-item')] : [];
      const cardRect = first?.getBoundingClientRect();
      const overflow = cardRect ? first.scrollWidth > first.clientWidth + 1 : true;
      const sizes = first ? {
        title: getComputedStyle(first.querySelector('.operation-activity-title b')).fontSize,
        meta: getComputedStyle(first.querySelector('.operation-activity-main>span:not(.operation-activity-title):not(.operation-activity-metrics)')).fontSize,
        metric: getComputedStyle(metricItems[0]).fontSize,
        number: getComputedStyle(metricItems[0].querySelector('b')).fontSize
      } : {};
      const dividerAbsent = !first?.querySelector('.operation-metric-divider');
      const metricRects=metricItems.map(item=>item.getBoundingClientRect());
      const metricsOverlap=metricRects.length>1&&metricRects[0].right>metricRects[1].left;
      const metricGap=metricRects.length>1?Math.round(metricRects[1].left-metricRects[0].right):0;
      const allMetricGaps=cards.map(card=>{const items=[...card.querySelectorAll('.operation-metric-item')].map(item=>item.getBoundingClientRect());return items.length>1?Math.round(items[1].left-items[0].right):0;});
      const status=first?.querySelector('.status')?.getBoundingClientRect();
      const title=first?.querySelector('.operation-activity-title b')?.getBoundingClientRect();
      const statusTitleOverlap=Boolean(status&&title&&status.left<title.right&&status.bottom>title.top);
      const longTitles=cards.map(card=>{const node=card.querySelector('.operation-activity-title b'),style=getComputedStyle(node),rect=node.getBoundingClientRect();return {lines:Math.round(rect.height/parseFloat(style.lineHeight)),clamp:style.webkitLineClamp};});
      const enter=first?.querySelector('.operation-activity-enter')?.getBoundingClientRect();
      const metrics=first?.querySelector('.operation-activity-metrics')?.getBoundingClientRect();
      const enterMetricsOverlap=Boolean(enter&&metrics&&enter.left<metrics.right&&enter.bottom>metrics.top&&enter.top<metrics.bottom);
      return { active, cardCount: cards.length, publishedOnly, overflow, sizes, dividerAbsent,metricsOverlap,metricGap,allMetricGaps,statusTitleOverlap,longTitles,enterMetricsOverlap };
    });
    const expectedMetricGap=width<=340?6:16;
    if (result.active !== 'published' || !result.cardCount || !result.publishedOnly || result.overflow || !result.dividerAbsent || result.metricsOverlap || result.allMetricGaps.some(gap=>gap!==expectedMetricGap) || result.statusTitleOverlap || result.longTitles.some(item=>item.lines>2||item.clamp!=='2') || result.enterMetricsOverlap) errors.push(`${width}: ${JSON.stringify(result)}`);
    const expectedMetricSize=width<=340?'11px':'12px',expectedNumberSize=width<=340?'13px':'14px';
    if (result.sizes.meta !== '12px' || result.sizes.metric !== expectedMetricSize || result.sizes.number !== expectedNumberSize) errors.push(`${width}: font ${JSON.stringify(result.sizes)}`);
    if (width === 375) {
      const publishedNames = await page.locator('.operation-activity-title b').allTextContents();
      if (publishedNames.length !== 3 || !publishedNames[0].includes('呀诺达溪降体验预约')) errors.push(`published order: ${JSON.stringify(publishedNames)}`);

      await page.fill('#operationActivitySearch', '雨林观景');
      if (await page.locator('.operation-activity-card').count() !== 1) errors.push('published search did not filter to one activity');
      await page.fill('#operationActivitySearch', '不存在的活动');
      if (!(await page.locator('#operationActivityEmpty').isVisible())) errors.push('search empty state is not visible');

      await page.click('[data-operation-activity-status="offline"]');
      if ((await page.locator('#operationActivitySearch').inputValue()) !== '不存在的活动') errors.push('manual tab switch unexpectedly cleared search');
      await page.fill('#operationActivitySearch', '');
      const offlineStates = await page.locator('.operation-activity-card .status').allTextContents();
      if (offlineStates.length !== 2 || offlineStates.some(text => text.trim() !== '已下架')) errors.push(`offline tab: ${JSON.stringify(offlineStates)}`);
      const fallbackCount = await page.locator('.operation-activity-cover').count();
      if (fallbackCount !== 2) errors.push(`offline fallback covers: ${fallbackCount}`);

      await page.click('[data-operation-activity-status="all"]');
      if (await page.locator('.operation-activity-card').count() !== 5) errors.push('all tab did not show five activities');
      const longCard = page.locator('.operation-activity-card').filter({ hasText: '高空滑索亲子探险' });
      if (await longCard.count() !== 1) errors.push('long activity name sample missing');

      await page.click('[data-operation-activity-status="published"]');
      await page.locator('.operation-activity-open').first().click();
      if (!(await page.locator('[data-page="operations"]').evaluate(el => el.classList.contains('active')))) errors.push('activity card did not enter O01');
      await page.click('#backButton');
      if (!(await page.locator('[data-page="operationActivities"]').evaluate(el => el.classList.contains('active')))) errors.push('back from O01 did not return to O00');

      await page.click('#backButton');
      await page.click('#operationsEntry');
      const reentry = await page.evaluate(() => ({
        active: document.querySelector('[data-operation-activity-status].active')?.dataset.operationActivityStatus,
        keyword: document.querySelector('#operationActivitySearch')?.value,
        cards: document.querySelectorAll('.operation-activity-card').length
      }));
      if (reentry.active !== 'published' || reentry.keyword !== '' || reentry.cards !== 3) errors.push(`reentry reset: ${JSON.stringify(reentry)}`);

    }
    await page.close();
  }
  await browser.close();
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('O00 published default, icon metrics, typography and responsive checks passed');
})().catch(error => { console.error(error); process.exit(1); });
