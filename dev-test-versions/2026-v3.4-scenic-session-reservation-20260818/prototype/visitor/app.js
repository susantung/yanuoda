const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const activity = {
  name: '呀诺达溪降体验预约',
  categories: [
    { id: 'regular', name: '常规溪降' },
    { id: 'vip', name: 'VIP私家团' }
  ],
  projects: {
    regular: [
      { id: 'r1', name: '常规溪降 A 线', desc: '经典峡谷线路 · 约 45 分钟', quota: 8, state: 'open', image: true },
      { id: 'r2', name: '常规溪降 B 线', desc: '雨林穿越线路', quota: 5, state: 'open', image: false },
      { id: 'r3', name: '常规溪降 C 线', desc: '当前线路名额已满', quota: 0, state: 'full', image: false },
    ],
    vip: [
      { id: 'v1', name: 'VIP 私家团 A 线', desc: '每团最多 12 人', quota: 12, state: 'open', image: true },
      { id: 'v2', name: 'VIP 私家团 B 线', desc: '专属向导线路', quota: 0, state: 'full', image: false }
    ]
  }
};

const weekdayNames = ['周日', '周一', '周二', '周三', '周四', '周五', '周六'];
let externalPreviewConfig = null;
const todayDateKey = '2026-08-18';
const fullDateKeys = ['2026-08-19', '2026-09-12', '2026-10-24', '2026-11-21', '2026-12-06', '2027-01-16', '2027-02-07'];
const dateData = Array.from({ length: 200 }, (_, index) => {
  // 游客预约页仅提供今天及未来排期；今天以前的样例均视为已截止，不进入可选列表。
  const value = new Date(Date.UTC(2026, 7, 18 + index));
  const month = value.getUTCMonth() + 1;
  const day = value.getUTCDate();
  const key = `${value.getUTCFullYear()}-${String(month).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
  return {
    key, month, day,
    weekday: key === todayDateKey ? '今天' : weekdayNames[value.getUTCDay()],
    label: `${month}月${day}日`, short: `${String(month).padStart(2, '0')}/${String(day).padStart(2, '0')}`,
    special: ['2026-08-15', '2026-08-23', '2026-09-05', '2026-10-03', '2026-11-01', '2026-12-12', '2027-01-03', '2027-02-14'].includes(key),
    paused: key === '2026-08-22',
    expired: false,
    full: fullDateKeys.includes(key),
    unlimited: key === '2026-08-20',
    quota: fullDateKeys.includes(key) ? 0 : 4 + ((index * 7) % 15)
  };
});

const regularTimes = ['09:30', '10:30', '11:30', '12:30', '13:30', '14:30', '15:30'];
const vipTimes = Array.from({ length: 12 }, (_, index) => {
  const total = 10 * 60 + index * 30; return `${String(Math.floor(total / 60)).padStart(2, '0')}:${String(total % 60).padStart(2, '0')}`;
});

function buildSchedule(type, unlimited = false) {
  const times = type === 'vip' ? vipTimes : regularTimes;
  return times.map((time, index) => {
    let status = 'open';
    if (index < (type === 'vip' ? 4 : 2)) status = 'closed';
    else if (index === (type === 'vip' ? 4 : 2)) status = 'full';
    const capacity = type === 'vip' ? 12 : 15;
    const startMinutes = Number(time.slice(0, 2)) * 60 + Number(time.slice(3));
    const duration = type === 'vip' ? 30 : 60;
    const endMinutes = startMinutes + duration;
    const endTime = `${String(Math.floor(endMinutes / 60)).padStart(2, '0')}:${String(endMinutes % 60).padStart(2, '0')}`;
    if (unlimited && status === 'full') status = 'open';
    return { id: `${type}-${time}`, time, endTime, name: type === 'vip' ? `私家团${index + 1}场` : `溪降${index + 1}场`, state: status, unlimited: unlimited && status === 'open', quota: status === 'open' ? capacity - ((index * 3) % 9) : 0 };
  });
}

function getSessions(dateKey) {
  if (!dateKey) return [];
  const date = dateData.find(item => item.key === dateKey);
  if (!date) return [];
  const externalSessions = externalPreviewConfig?.sessionsByDate?.[dateKey] ?? externalPreviewConfig?.sessions;
  const sessions = (externalPreviewConfig ? (externalSessions || []).map(item => ({ ...item })) : buildSchedule(state.sessionData, date.unlimited)).sort((a,b)=>{
    const minutes=item=>{const [hour,minute]=String(item.time||'').split(':').map(Number);return Number.isFinite(hour)&&Number.isFinite(minute)?hour*60+minute:Number.MAX_SAFE_INTEGER;};
    return minutes(a)-minutes(b);
  });
  if (date.expired) return sessions.map(item => ({ ...item, state: 'closed' }));
  if (date.paused) return sessions.map(item => ({ ...item, state: 'paused' }));
  if (externalPreviewConfig?.bookingCutoffMode && externalPreviewConfig.bookingCutoffMode !== 'unlimited') {
    const advance = externalPreviewConfig.bookingCutoffMode === 'advance' ? Number(externalPreviewConfig.bookingCutoffMinutes || 0) : 0;
    const now = new Date();
    return sessions.map(item => {
      if (item.state !== 'open') return item;
      const start = new Date(`${dateKey}T${item.time || '00:00'}:00`);
      return now >= new Date(start.getTime() - advance * 60000) ? { ...item, state:'closed' } : item;
    });
  }
  return sessions;
}

function canVisitorCancel(record) {
  if (!externalPreviewConfig || externalPreviewConfig.visitorCancel === undefined) return true;
  if (!externalPreviewConfig.visitorCancel) return false;
  const mode = externalPreviewConfig.visitorCancelMode || 'unlimited';
  if (mode === 'unlimited') return true;
  const startTime = String(record.session || '').split('-')[0] || '00:00';
  const start = new Date(`${record.date}T${startTime}:00`);
  const advance = mode === 'advance' ? Number(externalPreviewConfig.visitorCancelMinutes || 0) : 0;
  return new Date() < new Date(start.getTime() - advance * 60000);
}

function getCurrentSessionId(sessions) {
  if (!sessions.length) return null;
  if (state.date !== todayDateKey) return sessions[0].id;
  // 实际接入时由后端根据当前时间返回场次状态；首个非“已截止”场次即当前应展示的位置。
  const current = sessions.find(session => session.state !== 'closed');
  return (current || sessions.at(-1)).id;
}

function positionSessionRail(sessions, previousScroll, previousKey) {
  if (!state.sessionStyle.startsWith('rail')) return;
  const railKey = `${state.date}|${state.sessionData}|${state.sessionStyle}|${state.timeDisplay}`;
  requestAnimationFrame(() => {
    if (previousKey === railKey) {
      sessionList.scrollLeft = previousScroll;
      return;
    }
    const currentId = getCurrentSessionId(sessions);
    const currentCard = currentId && $(`[data-session="${currentId}"]`, sessionList);
    if (currentCard) {
      const railRect = sessionList.getBoundingClientRect();
      const cardRect = currentCard.getBoundingClientRect();
      const safeInset = 8;
      sessionList.scrollLeft = Math.max(0, sessionList.scrollLeft + cardRect.left - railRect.left - safeInset);
    } else {
      sessionList.scrollLeft = 0;
    }
    sessionList.dataset.railKey = railKey;
  });
}

const state = {
  page: 'select', previousPage: null, date: todayDateKey, pendingDate: null, session: null,
  category: 'regular', project: null, people: 1, editPeople: 1,
  noticeReadDates: new Set(), calendarMonth: 7, currentRecord: 'active',
  dateStyle: 'strip', dateMonth: 8, sessionStyle: 'grid-named', sessionData: 'regular',
  timeDisplay: 'range', projectStyle: 'detail', projectsEnabled: true, participantMode: 'group'
};

const titleMap = { select: '场次预约', form: '填写预约信息', success: '预约结果', records: '我的预约', detail: '预约详情', edit: '修改预约' };
const dateStrip = $('#dateStrip');
const sessionList = $('#sessionList');
const categoryTabs = $('#categoryTabs');
const projectList = $('#projectList');
const boundHorizontalRails = new WeakSet();

function enableHorizontalDrag(element) {
  if (!element || boundHorizontalRails.has(element)) return;
  boundHorizontalRails.add(element);
  let dragging = false; let moved = false; let startX = 0; let startScroll = 0;
  element.addEventListener('pointerdown', event => {
    if (event.pointerType !== 'mouse' || event.button !== 0) return;
    dragging = true; moved = false; startX = event.clientX; startScroll = element.scrollLeft;
    element.classList.add('dragging');
  });
  element.addEventListener('pointermove', event => {
    if (!dragging) return;
    const distance = event.clientX - startX;
    if (Math.abs(distance) > 12) moved = true;
    element.scrollLeft = startScroll - distance;
  });
  const finish = event => {
    if (!dragging) return;
    dragging = false; element.classList.remove('dragging');
    moved = false;
  };
  element.addEventListener('pointerup', finish); element.addEventListener('pointercancel', finish); window.addEventListener('pointerup', finish);
  element.addEventListener('wheel', event => {
    if (Math.abs(event.deltaY) <= Math.abs(event.deltaX) || element.scrollWidth <= element.clientWidth) return;
    element.scrollLeft += event.deltaY; event.preventDefault();
  }, { passive: false });
}

function bindCurrentHorizontalRails() {
  if (state.dateStyle === 'strip') enableHorizontalDrag(dateStrip);
  else { enableHorizontalDrag($('.month-tabs', dateStrip)); enableHorizontalDrag($('.month-date-rail', dateStrip)); }
  if (state.sessionStyle.startsWith('rail')) enableHorizontalDrag(sessionList);
  enableHorizontalDrag(categoryTabs);
}

function showToast(message) {
  const toast = $('#toast');
  toast.textContent = message;
  toast.classList.add('show');
  clearTimeout(showToast.timer);
  showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function openModal(id) { const modal = $(`#${id}Modal`); modal.classList.add('open'); modal.setAttribute('aria-hidden', 'false'); }
function closeModal(id) { const modal = $(`#${id}Modal`); modal.classList.remove('open'); modal.setAttribute('aria-hidden', 'true'); if (id === 'notice') { state.pendingDate = null; state.pendingDateReveal = false; } }

function navigate(page, addHistory = true) {
  if (state.page === page) return;
  if (addHistory) state.previousPage = state.page;
  state.page = page;
  if (page === 'select' && !state.date) {
    state.date = todayDateKey;
    state.dateMonth = dateData.find(item => item.key === todayDateKey)?.month || 8;
    renderDates(); renderSessions(); renderProjects(); updateProgress();
  }
  $$('.page').forEach(el => el.classList.toggle('active', el.dataset.page === page));
  $('#navTitle').textContent = titleMap[page] || '场次预约';
  if (page === 'form') renderFormSummary();
  if (page === 'success') renderSuccess();
  if (page === 'records') renderRecords('all');
  if (page === 'detail') renderDetail();
  if (page === 'edit') renderEdit();
  const scroll = $(`.page[data-page="${page}"] .page-scroll`);
  if (scroll) scroll.scrollTop = 0;
}

function renderDates() {
  dateStrip.className = `date-strip style-${state.dateStyle}`;
  $('#openCalendar').hidden = state.dateStyle === 'month';
  if (state.dateStyle === 'month') {
    const monthDates = dateData.filter(d => d.month === state.dateMonth);
    const months = [...new Set(dateData.map(d => d.month))];
    dateStrip.innerHTML = `<div class="month-tabs">${months.map(month => `<button class="month-tab ${state.dateMonth === month ? 'active' : ''}" data-date-month="${month}">${month === 1 ? '2027年1月' : `${month}月`}</button>`).join('')}</div><div class="month-date-rail">${monthDates.map(d => `<button class="schedule-date-card state-${d.expired ? 'expired' : d.paused ? 'paused' : d.full ? 'full' : d.unlimited ? 'unlimited' : 'available'} ${d.paused ? 'paused' : ''} ${d.expired ? 'expired' : ''} ${d.unlimited ? 'unlimited' : ''} ${state.date === d.key ? 'selected' : ''}" data-date="${d.key}" ${d.paused || d.expired || d.full ? 'disabled' : ''}>${d.special ? '<span class="schedule-tag">特别提示</span>' : ''}${d.unlimited ? '<span class="schedule-tag unlimited-tag">不限名额</span>' : ''}<b>${String(d.month).padStart(2, '0')}.${String(d.day).padStart(2, '0')}</b><small>${d.weekday}</small><em class="date-status">${d.expired ? '已截止' : d.paused ? '暂停预约' : d.full ? '已满额' : d.unlimited ? '不限名额' : `剩 ${d.quota} 名额`}</em></button>`).join('')}</div>`;
  } else {
    dateStrip.innerHTML = dateData.map(d => `<button class="date-card state-${d.expired ? 'expired' : d.paused ? 'paused' : d.full ? 'full' : d.unlimited ? 'unlimited' : 'available'} ${d.special ? 'special' : ''} ${d.unlimited ? 'unlimited' : ''} ${d.paused ? 'paused' : ''} ${d.expired ? 'expired' : ''} ${state.date === d.key ? 'selected' : ''}" data-date="${d.key}" ${d.paused || d.expired || d.full ? 'disabled' : ''}><small>${d.weekday}</small><b>${d.short}</b><em class="date-status">${d.expired ? '已截止' : d.paused ? '暂停预约' : d.full ? '已满额' : d.unlimited ? '不限额' : `剩${d.quota}名`}</em></button>`).join('');
  }
  bindCurrentHorizontalRails();
  $('.month-tab.active', dateStrip)?.scrollIntoView({ inline: 'center', block: 'nearest' });
}

function requestDate(key, revealAfterSelect = false) {
  const date = dateData.find(d => d.key === key);
  if (!date || date.paused || date.expired || date.full) return;
  if (date.special && !state.noticeReadDates.has(key)) {
    state.pendingDate = key;
    state.pendingDateReveal = revealAfterSelect;
    startNoticeCountdown();
    openModal('notice');
    return;
  }
  commitDate(key, revealAfterSelect);
}

function commitDate(key, revealAfterSelect = false) {
  const targetDate = dateData.find(d => d.key === key);
  if (!targetDate) return;
  state.date = key; state.session = null; state.project = null;
  const monthChanged = state.dateMonth !== targetDate.month;
  state.dateMonth = targetDate.month;

  // 直接点击当前日期条时只更新选中态，保留用户横滑位置，避免整条列表重绘跳动。
  if (state.dateStyle === 'month' && monthChanged) {
    renderDates();
  } else {
    $$('[data-date]', dateStrip).forEach(card => card.classList.toggle('selected', card.dataset.date === key));
  }
  renderSessions(); renderProjects(); updateProgress(); closeModal('calendar');
  if (revealAfterSelect) {
    const card = $(`[data-date="${key}"]`, dateStrip);
    if (card) card.scrollIntoView({ inline: 'start', block: 'nearest', behavior: 'smooth' });
  }
}

function renderSessions() {
  const list = getSessions(state.date);
  const previousScroll = sessionList.scrollLeft;
  const previousKey = sessionList.dataset.railKey;
  sessionList.className = `session-list style-${state.sessionStyle}`;
  const date = dateData.find(d => d.key === state.date);
  $('#chosenDateLabel').textContent = date ? date.label : '请先选择日期';
  if (!state.date) { sessionList.innerHTML = '<div class="empty-project">选择日期后查看可预约场次</div>'; return; }
  sessionList.innerHTML = list.map(s => {
    const disabled = s.state !== 'open';
    const stateText = s.state === 'paused' ? '暂停预约' : s.state === 'full' ? '已满员' : s.state === 'closed' ? '已截止' : s.unlimited ? '不限名额' : externalPreviewConfig && !externalPreviewConfig.showSessionQuota ? '可预约' : `剩余 ${s.quota} 名`;
    const showName = !['grid-time', 'rail-time'].includes(state.sessionStyle) && !!s.name;
    const displayTime = externalPreviewConfig ? (s.endTime ? `${s.time}-${s.endTime}` : s.time) : state.timeDisplay === 'range' ? `${s.time}-${s.endTime}` : s.time;
    return `<button class="session-card state-${s.state} ${disabled ? 'disabled' : ''} ${state.session === s.id ? 'selected' : ''} ${showName ? 'has-name' : 'no-name'}" data-session="${s.id}" ${disabled ? 'disabled' : ''}><div class="session-top"><strong>${displayTime}</strong>${showName ? `<span class="session-name">${s.name}</span>` : ''}</div><div class="session-bottom"><span class="session-state-label">${stateText}</span></div></button>`;
  }).join('') || '<div class="empty-project">当日暂无可预约场次</div>';
  bindCurrentHorizontalRails();
  positionSessionRail(list, previousScroll, previousKey);
}

function renderProjects() {
  const previousCategoryScroll = categoryTabs.scrollLeft;
  $('#projectSection').hidden = !state.projectsEnabled;
  if (!state.projectsEnabled) { projectList.innerHTML = ''; return; }
  $('#projectSection h3').textContent = externalPreviewConfig?.projectTheme || '选择体验线路';
  const sessionRules=externalPreviewConfig?.projectsBySession?.[state.date]?.[state.session]||null;
  const availableCategories=activity.categories.filter(category=>(activity.projects[category.id]||[]).some(project=>!sessionRules||sessionRules[project.id]?.enabled!==false));
  if(availableCategories.length&&!availableCategories.some(category=>category.id===state.category))state.category=availableCategories[0].id;
  categoryTabs.hidden = !!externalPreviewConfig && !externalPreviewConfig.categoryEnabled;
  categoryTabs.innerHTML = externalPreviewConfig && !externalPreviewConfig.categoryEnabled ? '' : availableCategories.map(c => `<button class="category-tab ${state.category === c.id ? 'active' : ''}" data-category="${c.id}">${c.name}</button>`).join('');
  enableHorizontalDrag(categoryTabs);
  requestAnimationFrame(() => {
    categoryTabs.scrollLeft = previousCategoryScroll;
    const active = $('.category-tab.active', categoryTabs);
    if (!active) return;
    const railRect = categoryTabs.getBoundingClientRect();
    const activeRect = active.getBoundingClientRect();
    if (activeRect.left < railRect.left) categoryTabs.scrollLeft += activeRect.left - railRect.left;
    else if (activeRect.right > railRect.right) categoryTabs.scrollLeft += activeRect.right - railRect.right;
  });
  if (!state.session) { projectList.innerHTML = '<div class="empty-project">选择场次后查看可预约线路</div>'; return; }
  // 后台隐藏的项目不下发给游客端，等同于当前组合下不存在。
  const list = (activity.projects[state.category] || []).filter(project=>!sessionRules||sessionRules[project.id]?.enabled!==false).map(project=>({...project,...(sessionRules?.[project.id]||{})}));
  projectList.className = `project-list style-${state.projectStyle}`;
  projectList.innerHTML = list.map(p => {
    const disabled = p.state !== 'open';
    const unlimited = (externalPreviewConfig ? p.unlimited : dateData.find(d => d.key === state.date)?.unlimited) && p.state === 'open';
    const showQuota = externalPreviewConfig ? p.showQuota !== false : true;
    const stateText = p.state === 'full' ? '已满员' : unlimited ? '不限名额' : !showQuota ? '可预约' : `剩余 ${p.quota} 名`;
    const detailed = externalPreviewConfig ? !!p.image : state.projectStyle === 'detail';
    const projectImage=typeof p.image==='string'?p.image:'./assets/activity-hero.jpg';
    return `<button class="project-card variant-${detailed?'detail':'simple'} state-${p.state} ${disabled ? 'disabled' : ''} ${state.project === p.id ? 'selected' : ''}" data-project="${p.id}" ${disabled ? 'disabled' : ''}>${detailed && p.image ? `<img src="${projectImage}" alt="线路实景">` : ''}<span class="project-copy"><strong>${p.name}</strong>${detailed && p.desc ? `<p>${p.desc}</p>` : ''}<small class="project-state-label">${stateText}</small></span></button>`;
  }).join('');
}

function getSelectedSession() { return getSessions(state.date).find(s => s.id === state.session); }
function getSelectedCategory() { return activity.categories.find(c => c.id === state.category); }
function getSelectedProject() { return Object.values(activity.projects).flat().find(p => p.id === state.project); }
function sessionDisplayTime(session) { return session ? (externalPreviewConfig && session.endTime ? `${session.time}-${session.endTime}` : session.time) : '';
}

function updateProgress() {
  const summary = $('#selectionSummary');
  const next = $('#nextButton');
  if (!state.date) { summary.textContent = '请选择预约日期'; next.disabled = true; }
  else if (!state.session) { summary.innerHTML = `<strong>${dateData.find(d => d.key === state.date).label}</strong>请选择场次`; next.disabled = true; }
  else if (state.projectsEnabled && !state.project) { summary.innerHTML = `<strong>${dateData.find(d => d.key === state.date).label} · ${sessionDisplayTime(getSelectedSession())}</strong>请选择体验线路`; next.disabled = true; }
  else if (!state.projectsEnabled) { summary.innerHTML = `<strong>${dateData.find(d => d.key === state.date).label} · ${sessionDisplayTime(getSelectedSession())}</strong>无需选择项目`; next.disabled = false; }
  else { summary.innerHTML = `<strong>${dateData.find(d => d.key === state.date).label} · ${sessionDisplayTime(getSelectedSession())}</strong>${getSelectedProject().name}`; next.disabled = false; }
  if (document.body.dataset.previewOnly === 'true') { next.disabled = true; next.textContent = '仅查看展示效果'; }
  else next.textContent = '立即预约';
}

function renderSummary(target, title = '本次预约') {
  const date = dateData.find(d => d.key === state.date);
  const session = getSelectedSession(); const category = getSelectedCategory(); const project = getSelectedProject();
  target.innerHTML = `<div class="summary-title"><h3>${title}</h3><span class="summary-tag">内容已确认</span></div><div class="summary-grid"><div class="summary-item"><span>预约游玩日期</span><strong>${date?.label || '8月15日'}</strong></div><div class="summary-item"><span>预约场次</span><strong>${sessionDisplayTime(session) || '10:00-11:30'}</strong></div>${state.projectsEnabled ? `<div class="summary-item"><span>分类</span><strong>${category?.name || 'VIP私家团'}</strong></div><div class="summary-item"><span>项目</span><strong>${project?.name || 'VIP私家团 A 线'}</strong></div>` : ''}</div>`;
}
function renderParticipantMode() {
  const group = state.participantMode === 'group';
  $('#singlePersonCard').hidden = group;
  $('#groupPeopleCard').hidden = !group;
  $('#editSinglePersonCard').hidden = group;
  $('#editGroupPeopleCard').hidden = !group;
  if (!group) { state.people = 1; state.editPeople = 1; }
  $('#peopleCount').textContent = state.people;
  $('#editPeople').textContent = state.editPeople;
}
function renderFormSummary() { renderSummary($('#formSummary')); renderParticipantMode(); }
function renderEdit() { renderSummary($('#editSummary'), '预约内容'); renderParticipantMode(); }

function validateForm() {
  if (externalPreviewConfig) return true;
  let valid = true;
  const rules = [
    ['#nameInput', v => v.trim().length >= 2, '请输入真实姓名'],
    ['#phoneInput', v => /^1\d{10}$/.test(v), '请输入正确的 11 位手机号'],
    ['#idInput', v => !v || /^\d{17}[\dXx]$/.test(v), '请输入正确的身份证号'],
    ['#sizeInput', v => !!v, '请选择漂流装备尺码']
  ];
  rules.forEach(([selector, check, message]) => {
    const input = $(selector); const field = input.closest('.field'); const ok = check(input.value);
    field.classList.toggle('error', !ok); $('.field-error', field).textContent = ok ? '' : message;
    if (!ok) valid = false;
  });
  if (!$('#agreement').checked) { showToast('请先同意活动预约规则'); valid = false; }
  if (!valid) $('.field.error')?.scrollIntoView({ behavior: 'smooth', block: 'center' });
  return valid;
}

function detailRows() {
  const date = dateData.find(d => d.key === state.date)?.label || '8月15日';
  const session = sessionDisplayTime(getSelectedSession()) || '10:00-11:30';
  const project = getSelectedProject()?.name || '梦幻谷漂流 A 线';
  return `<div class="detail-row"><span>活动名称</span><strong>${activity.name}</strong></div><div class="detail-row"><span>预约游玩日期</span><strong>${date}</strong></div><div class="detail-row"><span>预约场次</span><strong>${session}</strong></div>${state.projectsEnabled ? `<div class="detail-row"><span>体验线路</span><strong>${project}</strong></div>` : ''}<div class="detail-row participant-row"><span>实际参与人数</span><strong>${state.people} 人</strong></div>`;
}

function renderSuccess() { $('#successSummary').innerHTML = detailRows(); }

const recordData = [
  { id: 'active', status: 'active', number: '023', activity: '峡谷漂流场次预约', date: '2026-08-15', session: '10:00-11:30', project: '梦幻谷漂流 A 线', people: 2, created: '08-13 14:32' },
  { id: 'cancelled', status: 'cancelled', number: '007', activity: '雨林观景场次预约', date: '2026-08-09', session: '14:00-16:00', project: '峡谷观景栈道', people: 1, created: '08-05 09:18' }
];

function renderRecords(filter) {
  $$('#recordTabs button').forEach(b => b.classList.toggle('active', b.dataset.filter === filter));
  const records = recordData.filter(r => filter === 'all' || r.status === filter);
  $('#recordList').innerHTML = records.length ? records.map(r => `<button class="record-card" data-record="${r.id}"><div class="record-head"><strong>${r.activity}</strong><span class="status-chip ${r.status}">${r.status === 'active' ? '已约/报名' : '已取消'}</span></div><div class="record-number">游客预约号 ${r.number}</div><div class="record-body"><div><span>预约游玩日期</span><b>${r.date}</b></div><div><span>预约场次</span><b>${r.session}</b></div><div><span>体验线路</span><b>${r.project}</b></div><div><span>实际参与人数</span><b>${r.people} 人</b></div></div><div class="record-foot"><span>提交 ${r.created}</span><span>查看详情 ›</span></div></button>`).join('') : '<div class="empty-state"><div class="empty-icon">▦</div><h3>暂无预约记录</h3><p>完成预约后，记录会显示在这里</p></div>';
}

function renderDetail() {
  const cancelled = state.currentRecord === 'cancelled';
  const current = recordData.find(record => record.id === state.currentRecord) || recordData[0];
  $('#detailBanner').classList.toggle('cancelled', cancelled);
  $('#detailBanner').innerHTML = `<span class="status-symbol">${cancelled ? '×' : '✓'}</span><div><h2>${cancelled ? '预约已取消' : '预约成功'}</h2><p>${cancelled ? '名额已释放，如需参与请重新预约' : '请按预约场次提前到达'}</p></div>`;
  $('#detailBookingRows').innerHTML = detailRows();
  $('#detailReservationNumber').textContent = current.number;
  $('#detailNumberCard').classList.toggle('cancelled', cancelled);
  $('#detailPersonRows').innerHTML = `<div class="detail-row"><span>姓名</span><strong>${cancelled ? '林晓' : ($('#nameInput').value || '苏珊')}</strong></div><div class="detail-row"><span>手机号</span><strong>${cancelled ? '13600136000' : ($('#phoneInput').value || '13800138000')}</strong></div><div class="detail-row"><span>身份证号</span><strong>${cancelled ? '440106199006082014' : ($('#idInput').value || '440106199208136521')}</strong></div><div class="detail-row"><span>漂流装备尺码</span><strong>${$('#sizeInput').value || '成人 M'}</strong></div>`;
  $('.status-chip', $('.detail-card')).textContent = cancelled ? '已取消' : '已约/报名';
  $('.status-chip', $('.detail-card')).classList.toggle('cancelled', cancelled);
  $('#detailActions').style.display = cancelled ? 'none' : 'flex';
  const cancelAllowed = !cancelled && canVisitorCancel(current);
  $('#cancelEntry').hidden = !cancelAllowed;
}

function renderCalendar() {
  const year = 2026; const month = state.calendarMonth;
  $('#monthTitle').textContent = `${year}年${month + 1}月`;
  $('#prevMonth').disabled = month <= 7; $('#nextMonth').disabled = month >= 11;
  const first = new Date(year, month, 1).getDay(); const count = new Date(year, month + 1, 0).getDate();
  const min = dateData[0].key, max = dateData[dateData.length - 1].key;
  let html = Array(first).fill('<button class="calendar-day blank" disabled></button>').join('');
  for (let day = 1; day <= count; day++) {
    const key = `${year}-${String(month + 1).padStart(2, '0')}-${String(day).padStart(2, '0')}`;
    const known = dateData.find(d => d.key === key); const disabled = key < min || key > max || !known || known.paused || known.expired || known.full;
    html += `<button class="calendar-day ${key === todayDateKey ? 'today' : ''} ${key === state.date ? 'selected' : ''} ${known?.special ? 'special' : ''}" data-calendar-date="${key}" ${disabled ? 'disabled' : ''}>${day}</button>`;
  }
  $('#calendarGrid').innerHTML = html;
}

function startNoticeCountdown() {
  const button = $('#noticeConfirm'); let seconds = Math.max(0, Number(externalPreviewConfig?.noticeSeconds ?? 3));
  button.disabled = true; button.textContent = `已读并确认以上内容 (${seconds})`;
  if (seconds <= 0) { button.textContent = '已读并确认以上内容'; button.disabled = false; return; }
  clearInterval(startNoticeCountdown.timer);
  startNoticeCountdown.timer = setInterval(() => {
    seconds -= 1;
    button.textContent = seconds > 0 ? `已读并确认以上内容 (${seconds})` : '已读并确认以上内容';
    if (seconds <= 0) { clearInterval(startNoticeCountdown.timer); button.disabled = false; }
  }, 1000);
}

dateStrip.addEventListener('click', e => {
  const monthButton = e.target.closest('[data-date-month]');
  if (monthButton) { state.dateMonth = Number(monthButton.dataset.dateMonth); renderDates(); return; }
  const button = e.target.closest('[data-date]'); if (button) requestDate(button.dataset.date, false);
});
sessionList.addEventListener('click', e => { const button = e.target.closest('[data-session]'); if (!button || button.disabled) return; state.session = button.dataset.session; state.project = null; renderSessions(); renderProjects(); updateProgress(); });
categoryTabs.addEventListener('click', e => { const button = e.target.closest('[data-category]'); if (!button) return; state.category = button.dataset.category; state.project = null; renderProjects(); updateProgress(); });
projectList.addEventListener('click', e => { const button = e.target.closest('[data-project]'); if (!button || button.disabled) return; state.project = button.dataset.project; renderProjects(); updateProgress(); });

$('#openCalendar').addEventListener('click', () => { renderCalendar(); openModal('calendar'); });
$('#calendarGrid').addEventListener('click', e => { const button = e.target.closest('[data-calendar-date]'); if (button && !button.disabled) requestDate(button.dataset.calendarDate, true); });
$('#prevMonth').addEventListener('click', () => { if (state.calendarMonth > 7) state.calendarMonth -= 1; renderCalendar(); });
$('#nextMonth').addEventListener('click', () => { if (state.calendarMonth < 11) state.calendarMonth += 1; renderCalendar(); });
$('#noticeConfirm').addEventListener('click', () => { const key = state.pendingDate; const reveal = state.pendingDateReveal; if (!key) { closeModal('notice'); return; } state.noticeReadDates.add(key); state.pendingDate = null; state.pendingDateReveal = false; closeModal('notice'); commitDate(key, reveal); });

$$('[data-close]').forEach(button => button.addEventListener('click', () => closeModal(button.dataset.close)));
$$('[data-go]').forEach(button => button.addEventListener('click', () => navigate(button.dataset.go)));
$('#nextButton').addEventListener('click', () => { if (document.body.dataset.previewOnly === 'true') return; if (!$('#nextButton').disabled) navigate('form'); });
$('#wxPhone').addEventListener('click', () => { $('#phoneInput').value = '13800138000'; showToast('已加载微信绑定手机号，可继续修改'); });

function changePeople(delta, edit = false) {
  const key = edit ? 'editPeople' : 'people'; const min = 1; const max = edit ? 4 : 6;
  const next = state[key] + delta;
  if (next < min) { showToast('预约人数不能少于 1 人'); return; }
  if (next > max) { showToast('当前剩余名额不足'); return; }
  state[key] = next;
  (edit ? $('#editPeople') : $('#peopleCount')).textContent = next;
  if (!edit) state.people = next;
}
$('#minusPeople').addEventListener('click', () => changePeople(-1)); $('#addPeople').addEventListener('click', () => changePeople(1));
$('#editMinus').addEventListener('click', () => changePeople(-1, true)); $('#editAdd').addEventListener('click', () => changePeople(1, true));

$('#submitButton').addEventListener('click', () => {
  if (document.body.dataset.previewOnly === 'true') return;
  if (!validateForm()) return;
  const button = $('#submitButton'); button.disabled = true; button.textContent = '正在确认名额…';
  setTimeout(() => { button.disabled = false; button.textContent = '确认预约'; navigate('success'); }, 850);
});

$('#recordTabs').addEventListener('click', e => { const button = e.target.closest('[data-filter]'); if (button) renderRecords(button.dataset.filter); });
$('#recordList').addEventListener('click', e => { const card = e.target.closest('[data-record]'); if (!card) return; state.currentRecord = card.dataset.record; navigate('detail'); });
$('#cancelEntry').addEventListener('click', () => openModal('cancel'));
$('#confirmCancel').addEventListener('click', () => { state.currentRecord = 'cancelled'; closeModal('cancel'); renderDetail(); showToast('预约已取消，名额已释放'); });
$('#saveEdit').addEventListener('click', () => { state.people = state.editPeople; showToast('修改已保存'); setTimeout(() => navigate('detail'), 550); });

$('#expandActivity').addEventListener('click', () => { const copy = $('#activityCopy'); copy.classList.toggle('clamp'); $('#expandActivity').textContent = copy.classList.contains('clamp') ? '展开详情' : '收起详情'; });
$('#activityCopy').addEventListener('click', event => { const image=event.target.closest('img');if(!image)return;$('#detailImageFull').src=image.currentSrc||image.src;$('#detailImageFull').alt=image.alt||'详情图片大图预览';$('#detailImagePreview').classList.add('open');$('#detailImagePreview').setAttribute('aria-hidden','false'); });
function closeDetailImagePreview(){ $('#detailImagePreview').classList.remove('open');$('#detailImagePreview').setAttribute('aria-hidden','true');$('#detailImageFull').removeAttribute('src'); }
$('#closeDetailImage').addEventListener('click',closeDetailImagePreview);$('#closeDetailImageButton').addEventListener('click',closeDetailImagePreview);
$('#backButton').addEventListener('click', () => {
  if (state.page === 'select' && window.self !== window.top) { window.parent.postMessage({ type:'SCENIC_PREVIEW_CLOSE' }, '*'); return; }
  if (state.page === 'select') { showToast('已在预约活动首页'); return; }
  const fallback = state.page === 'form' ? 'select' : state.page === 'detail' ? 'records' : state.page === 'edit' ? 'detail' : 'select';
  navigate(fallback, false);
});

$$('.theme-dot').forEach(button => button.addEventListener('click', () => { document.body.dataset.theme = button.dataset.theme; $$('.theme-dot').forEach(b => b.classList.toggle('active', b === button)); }));
$$('.device-switch button').forEach(button => button.addEventListener('click', () => {
  const phone = $('#phone');
  const width = Number(button.dataset.width);
  phone.style.width = `${width}px`;
  phone.dataset.deviceWidth = String(width);
  $$('.device-switch button').forEach(b => b.classList.toggle('active', b === button));
}));
$$('[data-participant-mode]').forEach(button => button.addEventListener('click', () => {
  state.participantMode = button.dataset.participantMode;
  $$('[data-participant-mode]').forEach(b => b.classList.toggle('active', b === button));
  renderParticipantMode();
}));
$$('[data-date-style]').forEach(button => button.addEventListener('click', () => {
  state.dateStyle = button.dataset.dateStyle;
  if (state.date) state.dateMonth = dateData.find(d => d.key === state.date)?.month || 8;
  $$('[data-date-style]').forEach(b => b.classList.toggle('active', b === button));
  renderDates();
}));
$$('[data-session-style]').forEach(button => button.addEventListener('click', () => {
  state.sessionStyle = button.dataset.sessionStyle;
  $$('[data-session-style]').forEach(b => b.classList.toggle('active', b === button));
  renderSessions();
}));
$$('[data-session-data]').forEach(button => button.addEventListener('click', () => {
  state.sessionData = button.dataset.sessionData; state.session = null; state.project = null;
  state.category = state.sessionData === 'vip' ? 'vip' : 'regular';
  $$('[data-session-data]').forEach(b => b.classList.toggle('active', b === button));
  renderSessions(); renderProjects(); updateProgress();
}));
$$('[data-time-display]').forEach(button => button.addEventListener('click', () => {
  state.timeDisplay = button.dataset.timeDisplay;
  $$('[data-time-display]').forEach(b => b.classList.toggle('active', b === button));
  renderSessions(); updateProgress();
}));
$$('[data-project-style]').forEach(button => button.addEventListener('click', () => {
  state.projectStyle = button.dataset.projectStyle;
  $$('[data-project-style]').forEach(b => b.classList.toggle('active', b === button));
  renderProjects();
}));
$$('[data-inventory-example]').forEach(button => button.addEventListener('click', () => {
  $$('[data-inventory-example]').forEach(b => b.classList.toggle('active', b === button));
  const key = button.dataset.inventoryExample === 'unlimited' ? '2026-08-20' : '2026-08-14';
  commitDate(key);
}));
$$('[data-project-module]').forEach(button => button.addEventListener('click', () => {
  state.projectsEnabled = button.dataset.projectModule === 'on';
  if (!state.projectsEnabled) state.project = null;
  $$('[data-project-module]').forEach(b => b.classList.toggle('active', b === button));
  renderProjects(); updateProgress();
}));
$$('[data-test]').forEach(button => button.addEventListener('click', () => {
  if (button.dataset.test === 'notice') { state.pendingDate = '2026-08-15'; startNoticeCountdown(); openModal('notice'); }
  if (button.dataset.test === 'calendar') { renderCalendar(); openModal('calendar'); }
  if (button.dataset.test === 'reset') { state.date = todayDateKey; state.session = null; state.project = null; state.noticeReadDates.clear(); renderAll(); }
}));

function renderAll() { renderDates(); renderSessions(); renderProjects(); updateProgress(); renderCalendar(); }

function renderExternalFields(fields) {
  if (!Array.isArray(fields)) return;
  const card = $('.page[data-page="form"] .form-card');
  if (!card) return;
  const normalFields = fields.filter(field => field.type !== '多人/团体');
  card.innerHTML = `<div class="form-heading"><h3>预约人信息</h3><span><i>*</i> 为必填项</span></div>${normalFields.map((field,index) => {
    const required = field.required ? ' <i>*</i>' : '';
    if (field.type === '多行文本') return `<label class="field"><span>${field.name}${required}</span><textarea placeholder="请输入${field.name}"></textarea><small class="field-error"></small></label>`;
    if (field.type === '单选') return `<label class="field select-field"><span>${field.name}${required}</span><select><option>请选择</option>${(field.options || ['选项一','选项二']).map(option => `<option>${option}</option>`).join('')}</select><small class="field-error"></small></label>`;
    if (field.type === '多选') return `<label class="field"><span>${field.name}${required}</span><div class="field-inline"><span>${(field.options || ['选项一','选项二']).map(option => `□ ${option}`).join('　')}</span></div><small class="field-error"></small></label>`;
    const inputType = field.type === '手机号' ? 'tel' : field.type === '数字' ? 'number' : field.type === '日期' ? 'date' : 'text';
    const value = field.type === '姓名' ? '苏珊' : field.type === '手机号' ? '13800138000' : field.type === '身份证号' ? '440106199208136521' : '';
    return `<label class="field"><span>${field.name}${required}</span><input type="${inputType}" value="${value}" placeholder="请输入${field.name}"><small class="field-error"></small></label>`;
  }).join('')}`;
}

function applyExternalPreview(payload) {
  if (!payload) return;
  externalPreviewConfig = payload;
  document.body.dataset.previewOnly = payload.previewOnly ? 'true' : 'false';
  document.body.dataset.theme = 'forest';
  $('#phone').style.width = '375px'; $('#phone').dataset.deviceWidth = '375';
  activity.name = payload.activityName || activity.name;
  $('.hero-content h2').textContent = activity.name; $('.activity-info h3').textContent = activity.name;
  const heroBadge=$('#activityHeroBadge');heroBadge.textContent=payload.heroBadge||'';heroBadge.hidden=!payload.heroBadge;
  const heroSubtitle=$('#activityHeroSubtitle');heroSubtitle.textContent=payload.heroSubtitle||'';heroSubtitle.hidden=!payload.heroSubtitle;
  const cover=$('#activityCover');if(payload.coverImage){cover.src=payload.coverImage;cover.hidden=false;}else{cover.hidden=true;}
  if(payload.detailHtml!==undefined)$('#activityCopy').innerHTML=payload.detailHtml||'';
  const contact=$('#activityContact');const contactPhone=$('#activityContactPhone');const hasContact=!!(payload.contactName||payload.contactPhone);
  contact.hidden=!hasContact;$('#activityContactName').textContent=payload.contactName||'咨询电话';contactPhone.textContent=payload.contactPhone||'';contactPhone.href=payload.contactPhone?`tel:${payload.contactPhone.replace(/\s/g,'')}`:'#';
  const categories = payload.categories?.length ? payload.categories : [{ id:'all',name:'' }];
  activity.categories = categories;
  activity.projects = Object.fromEntries(categories.map(category => [category.id, (payload.projects || []).filter(project => project.categoryId === category.id)]));
  if (payload.dates?.length) {
    dateData.splice(0, dateData.length, ...payload.dates.map((item,index) => {
      const value = new Date(`${item.key}T12:00:00`); const month=value.getMonth()+1; const day=value.getDate();
      return { key:item.key,month,day,weekday:item.key===todayDateKey?'今天':weekdayNames[value.getDay()],label:`${month}月${day}日`,short:`${String(month).padStart(2,'0')}/${String(day).padStart(2,'0')}`,special:!!item.special,paused:!!item.paused,expired:!!item.expired,full:item.full===true,unlimited:!!item.unlimited,quota:item.quota||0 };
    }));
  }
  state.dateStyle = 'strip'; state.sessionStyle = 'grid-named'; state.projectsEnabled = !!payload.projectsEnabled;
  state.participantMode = payload.participantMode === 'group' ? 'group' : 'single'; state.category = categories[0].id; state.project = null;
  if (payload.hideExpired) dateData.forEach(item => { const items=getSessions(item.key);if(items.length&&items.every(session=>session.state==='closed'))item.expired=true; });
  const preferredPreviewDate=payload.previewOnly&&payload.previewDate?dateData.find(item=>item.key===payload.previewDate&&!item.paused&&!item.expired&&!item.full):null;
  const firstBookableDate = preferredPreviewDate || dateData.find(item => !item.paused && !item.expired && !item.full) || dateData[0];
  state.date = firstBookableDate?.key || todayDateKey; state.dateMonth = firstBookableDate?.month || 8; state.session = payload.previewOnly&&payload.previewSessionId?payload.previewSessionId:null;
  $('#noticeTitle').textContent = payload.noticeTitle || '溪降预约必读须知';
  if(payload.noticeHtml!==undefined)$('#noticeContent').innerHTML=payload.noticeHtml||'';
  if (!payload.noticeEnabled) dateData.forEach(item => { item.special=false; });
  renderExternalFields(payload.fields); renderParticipantMode(); renderAll();
  if (payload.previewPage === 'form') {
    const firstSession=getSessions(state.date).find(item=>item.state==='open');
    state.session=firstSession?.id||null;
    const sessionRules=payload.projectsBySession?.[state.date]?.[state.session]||null;
    const firstProject=(activity.projects[state.category]||[]).find(project=>!sessionRules||sessionRules[project.id]?.enabled!==false);
    state.project=firstProject?.id||null;
    const submit=$('#submitButton');submit.disabled=true;submit.textContent='仅查看展示效果';
    navigate('form',false);
  } else {
    const submit=$('#submitButton');submit.disabled=false;submit.textContent='确认预约';
    navigate('select',false);
  }
}

window.addEventListener('message', event => {
  if (event.data?.type === 'SCENIC_CONFIG_PREVIEW') applyExternalPreview(event.data.payload);
});
let publishedPreviewConfig=null;
try{const hashPayload=new URLSearchParams(location.hash.slice(1)).get('published');publishedPreviewConfig=hashPayload?JSON.parse(hashPayload):JSON.parse(localStorage.getItem('scenicPublishedConfig')||'null');}catch(error){publishedPreviewConfig=null;}
if(publishedPreviewConfig?.schemaVersion===2)applyExternalPreview(publishedPreviewConfig);else{if(publishedPreviewConfig)localStorage.removeItem('scenicPublishedConfig');renderAll();}
