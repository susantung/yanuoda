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
    await page.click('[data-op-go="records"]');
    const initial = await page.evaluate(() => ({
      active: document.querySelector('[data-page="records"]').classList.contains('active'),
      todayLabel: document.querySelector('.record-today span').textContent,
      todayValue: document.querySelector('#recordPeopleTotal').textContent,
      tabs: [...document.querySelectorAll('[data-record-status]')].map(node => node.textContent.trim()),
      activeTab: document.querySelector('[data-record-status].active')?.dataset.recordStatus,
      dateMode: document.querySelector('#filterDateMode').value,
      date: document.querySelector('#filterSingleDate').value,
      panelHidden: document.querySelector('#recordFilterPanel').hidden,
      session: document.querySelector('#filterSession').value,
      category: document.querySelector('#filterCategory').value,
      project: document.querySelector('#filterProject').value,
      sort: document.querySelector('#recordSort').value,
      numbers: [...document.querySelectorAll('.booking-row-head b')].map(node => node.textContent.replace(/\D/g,'')),
      overflow: document.querySelector('[data-page="records"]').scrollWidth > document.querySelector('[data-page="records"]').clientWidth + 1
    }));
    if (!initial.active || initial.todayLabel !== '今日预约人数' || initial.todayValue !== '10000 人' || initial.tabs.join(',') !== '已预约,已取消' || initial.activeTab !== 'active' || initial.dateMode !== 'single' || initial.date !== '2026-08-19' || !initial.panelHidden || initial.session || initial.category || initial.project || initial.sort !== 'created-desc' || initial.numbers.join(',') !== '025,024,023' || initial.overflow) errors.push(`${width}: initial ${JSON.stringify(initial)}`);

    await page.click('#recordFilterToggle');
    const filter = await page.evaluate(() => {
      const strip = document.querySelector('.filter-strip');
      return { shown: !document.querySelector('#recordFilterPanel').hidden, scrollable: strip.scrollWidth > strip.clientWidth, dateMode: document.querySelector('#filterDateMode').value, dateType: document.querySelector('#filterSingleDate').type, dateHeight: document.querySelector('#filterSingleDate').getBoundingClientRect().height, sessions: [...document.querySelector('#filterSession').options].map(item => item.textContent) };
    });
    if (!filter.shown || !filter.scrollable || filter.dateMode !== 'single' || filter.dateType !== 'date' || filter.dateHeight < 44 || !filter.sessions.includes('09:30-10:30')) errors.push(`${width}: filter ${JSON.stringify(filter)}`);
    const stripBox = await page.locator('.filter-strip').boundingBox();
    await page.evaluate(() => { document.querySelector('.filter-strip').scrollLeft = 0; });
    await page.mouse.move(stripBox.x + stripBox.width - 24, stripBox.y + stripBox.height / 2);
    await page.mouse.down();
    await page.mouse.move(stripBox.x + 24, stripBox.y + stripBox.height / 2, {steps:8});
    await page.mouse.up();
    const draggedScroll = await page.locator('.filter-strip').evaluate(node => node.scrollLeft);
    if (draggedScroll < 20) errors.push(`${width}: filter drag did not scroll (${draggedScroll})`);

    await page.selectOption('#filterDateMode','all');
    const allWithoutKeyword = await page.evaluate(() => ({empty: !document.querySelector('#recordEmpty').hidden, title: document.querySelector('#recordEmptyTitle').textContent, rows: document.querySelectorAll('.booking-row,.booking-card').length}));
    if (!allWithoutKeyword.empty || allWithoutKeyword.title !== '请输入查询条件' || allWithoutKeyword.rows !== 0) errors.push(`${width}: all without keyword ${JSON.stringify(allWithoutKeyword)}`);
    await page.fill('#recordSearch','13800138000');
    const allWithKeyword = await page.locator('.booking-row,.booking-card').count();
    if (allWithKeyword < 1) errors.push(`${width}: all with keyword ${allWithKeyword}`);
    await page.fill('#recordSearch','');
    await page.selectOption('#filterDateMode','single');

    await page.selectOption('#recordSort', 'created-asc');
    const asc = await page.locator('.booking-row-head b').allTextContents();
    if (asc.map(value => value.replace(/\D/g,'')).join(',') !== '023,024,025') errors.push(`${width}: asc ${asc}`);

    await page.click('[data-record-view="detail"]');
    const detail = await page.evaluate(() => {
      const card = document.querySelector('.booking-card');
      const selections = [...card.querySelectorAll('.booking-selection-card')].map(node => node.textContent.trim());
      const labels = [...card.querySelectorAll('.booking-field>span')].map(node => node.textContent.trim());
      const full = [...card.querySelectorAll('.booking-field.span-2>span')].map(node => node.textContent.trim());
      const idValue = card.querySelector('.booking-field.field-idNumber strong');
      const status = document.querySelector('.booking-status');
      const contextLabel = document.querySelector('.record-context span');
      const viewButton = document.querySelector('.view-switch button');
      const label = card.querySelector('.booking-field>span');
      const sizes = Object.fromEntries(Object.entries({status,contextLabel,viewButton,label,idValue}).map(([key,node]) => [key, Number.parseFloat(getComputedStyle(node).fontSize)]));
      const idStyle = getComputedStyle(idValue);
      return { selections, labels, full, sizes, idSingleLine: idValue.getBoundingClientRect().height <= Number.parseFloat(idStyle.lineHeight) + 1, overflow: card.scrollWidth > card.clientWidth + 1 };
    });
    const expected = ['预约人姓名','手机号码','身份证号','实际参与人数','同行儿童人数','预计到达日期','是否需要教练陪同','需要准备的装备','集合地点','其他需求说明'];
    if (detail.selections.length !== 2 || !detail.selections[0].includes('场次名称及时间') || !detail.selections[1].includes('分类／项目') || expected.some(label => !detail.labels.includes(label)) || ['是否需要教练陪同','需要准备的装备','集合地点','其他需求说明'].some(label => !detail.full.includes(label)) || Object.values(detail.sizes).some(size => size < 12) || !detail.idSingleLine || detail.overflow) errors.push(`${width}: detail ${JSON.stringify(detail)}`);
    await page.click('#recordFieldSetting');
    const settingLabels = await page.locator('#fieldOptions label').allTextContents();
    if (settingLabels.length !== 10 || expected.some(label => !settingLabels.some(value => value.trim() === label))) errors.push(`${width}: O03 fields ${settingLabels}`);
    await page.locator('#fieldLayer .field-sheet-actions [data-close="field"]').click();
    await page.locator('.booking-card').first().click();
    const bookingDetail = await page.evaluate(() => {
      const rows = selector => Object.fromEntries([...document.querySelectorAll(selector)].map(row => [row.querySelector('span')?.textContent.trim(),row.querySelector('strong')?.textContent.trim()]));
      const info = rows('#adminBookingInfo .admin-detail-row');
      const visitor = rows('#adminVisitorInfo .admin-detail-row');
      const fontNodes = [...document.querySelectorAll('[data-page="bookingDetail"] .detail-status-card p,[data-page="bookingDetail"] .detail-status-card button,[data-page="bookingDetail"] .admin-detail-row span,[data-page="bookingDetail"] .admin-detail-row strong,[data-page="bookingDetail"] .admin-detail-row button,[data-page="bookingDetail"] .timeline span,[data-page="bookingDetail"] .timeline p')];
      return {number:document.querySelector('#adminDetailNumber').textContent.trim(),info,visitor,minFont:Math.min(...fontNodes.map(node=>Number.parseFloat(getComputedStyle(node).fontSize))),overflow:document.querySelector('[data-page="bookingDetail"]').scrollWidth>document.querySelector('[data-page="bookingDetail"]').clientWidth+1};
    });
    if (bookingDetail.number !== '023' || bookingDetail.info['场次名称'] !== '溪降上午体验场' || bookingDetail.info['场次时间'] !== '09:30-10:30' || bookingDetail.info['预约游玩日期'] !== '2026-08-19' || bookingDetail.info['项目'] !== '常规溪降 A 线' || bookingDetail.visitor['预约人姓名'] !== '苏珊' || bookingDetail.visitor['手机号码'] !== '13800138000' || bookingDetail.visitor['身份证号'] !== '440106199208136521' || bookingDetail.visitor['实际参与人数'] !== '2 人' || bookingDetail.visitor['需要准备的装备'] !== '儿童护具、成人防滑鞋、防水储物袋' || Object.keys(bookingDetail.visitor).length !== 10 || bookingDetail.minFont < 12 || bookingDetail.overflow) errors.push(`${width}: booking detail ${JSON.stringify(bookingDetail)}`);
    await page.click('#adminModifyBooking');
    const modify = await page.evaluate(() => ({fields:document.querySelectorAll('#modifySnapshotFields>label,#modifySnapshotFields>fieldset').length,labels:[...document.querySelectorAll('#modifySnapshotFields>label>span,#modifySnapshotFields>fieldset>legend')].map(node=>node.textContent.trim()),overflow:document.querySelector('#modifyLayer .modify-sheet').scrollWidth>document.querySelector('#modifyLayer .modify-sheet').clientWidth+1}));
    if (modify.fields !== 10 || expected.some(label=>!modify.labels.includes(label)) || modify.overflow) errors.push(`${width}: O08 snapshot fields ${JSON.stringify(modify)}`);
    await page.fill('#modify-phone','13700137000');
    await page.fill('#modify-multiText','管理员已核实新的同行需求。');
    await page.click('#saveModify');
    const modified = await page.evaluate(() => ({phone:[...document.querySelectorAll('#adminVisitorInfo .admin-detail-row')].find(row=>row.querySelector('span')?.textContent.trim()==='手机号码')?.querySelector('strong')?.textContent.trim(),note:[...document.querySelectorAll('#adminVisitorInfo .admin-detail-row')].find(row=>row.querySelector('span')?.textContent.trim()==='其他需求说明')?.querySelector('strong')?.textContent.trim(),operator:[...document.querySelectorAll('#adminTimeline span')].at(-1)?.textContent.trim()}));
    if (modified.phone !== '13700137000' || modified.note !== '管理员已核实新的同行需求。' || !modified.operator.endsWith('· 苏珊')) errors.push(`${width}: O08 save ${JSON.stringify(modified)}`);
    await page.close();
  }
  await browser.close();
  if (errors.length) throw new Error(errors.join('\n'));
  console.log('O02 default state, filters, sorting, fields and responsive checks passed');
})().catch(error => { console.error(error); process.exit(1); });
