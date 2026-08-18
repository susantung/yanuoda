const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];

const activities = [
  { id: 1, name: '呀诺达溪降体验预约', status: 'published', image:'../../scenic-reservation/preview/assets/activity-hero.jpg', coverImage:'../../scenic-reservation/preview/assets/activity-hero.jpg', heroBadge:'无需验票 · 免费预约', heroSubtitle:'门票已包含溪降体验，请提前预约心仪时段。', contactName:'溪降接待处', contactPhone:'0898-8388 3333', totalPeople: 1286, todayPeople: 32, created: '2026-08-11 16:28', updated: '2026-08-14 09:42', creator: '景区管理员-苏珊', updater: '苏珊' },
  { id: 2, name: '雨林观景线路预约', status: 'published', image:null, totalPeople: 96, todayPeople: 18, created: '2026-08-02 10:16', updated: '2026-08-13 18:05', creator: '运营管理员-林晓', updater: '林晓' },
  { id: 4, name: '呀诺达热带雨林高空滑索亲子探险体验项目预约活动暑期特别专场季', status: 'published', image:null, totalPeople: 735, todayPeople: 9, created: '2026-07-30 11:08', updated: '2026-08-12 16:45', creator: '景区管理员-陈晨', updater: '陈晨' },
  { id: 3, name: 'VIP 私家团场次预约', status: 'offline', image:null, totalPeople: 42, todayPeople: 0, created: '2026-07-28 14:09', updated: '2026-08-12 11:30', creator: '景区管理员-苏珊', updater: '苏珊' }
];
let currentPage = 'workbench';
let currentActivity = null;
let activityStatus = 'published';
let operationActivityStatus = 'all';
let recordStatus = 'active';
let recordView = 'compact';
const bookings = [
  { id:1, activityId:1, status:'active', number:'023', name:'苏珊', phone:'13800138000', date:'2026-08-14', session:'12:30-13:30', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-14 09:56' },
  { id:2, activityId:1, status:'active', number:'024', name:'陈晓宇', phone:'13600136000', date:'2026-08-14', session:'13:30-14:30', category:'常规溪降', project:'常规溪降 B 线', people:1, created:'08-14 10:08' },
  { id:3, activityId:1, status:'active', number:'025', name:'林悦', phone:'13900139000', date:'2026-08-15', session:'10:30-11:30', category:'VIP私家团', project:'VIP 私家团 A 线', people:2, created:'08-14 10:21' },
  { id:4, activityId:1, status:'cancelled', number:'018', name:'周宁', phone:'13500135000', date:'2026-08-14', session:'11:30-12:30', category:'常规溪降', project:'常规溪降 A 线', people:1, created:'08-13 16:40' }
];

function showToast(message) {
  const toast = $('#toast'); toast.textContent = message; toast.classList.add('show');
  clearTimeout(showToast.timer); showToast.timer = setTimeout(() => toast.classList.remove('show'), 1800);
}

function navigate(page) {
  currentPage = page;
  $$('.page').forEach(node => node.classList.toggle('active', node.dataset.page === page));
  const pageTitles = { workbench:'工作台', activities:'预约活动管理', config:'活动配置', operationActivities:'运营管理', operations:'活动运营', records:'全部预约', bookingDetail:'预约详情', sessions:'场次名单', roster:'名单详情', export:'数据导出' };
  $('#navTitle').textContent = pageTitles[page] || '预约管理';
  $('#backButton').style.display = page === 'workbench' ? 'none' : 'grid';
  $$('[data-panel-go]').forEach(button => button.classList.toggle('active', button.dataset.panelGo === page));
  if (page === 'activities') renderActivities();
  if (page === 'operationActivities') renderOperationActivities();
  if (page === 'operations') renderOperationHome();
  if (page === 'records') renderBookings();
}

function renderOperationActivities() {
  const keyword = $('#operationActivitySearch').value.trim().toLowerCase();
  const list = activities
    .filter(item => (operationActivityStatus === 'all' || item.status === operationActivityStatus) && item.name.toLowerCase().includes(keyword))
    .sort((a,b) => b.updated.localeCompare(a.updated));
  $('#operationActivitySummary').textContent = `共 ${list.length} 个预约活动`;
  $('#operationActivityEmpty').hidden = list.length > 0;
  $('#operationActivityList').innerHTML = list.map(item => `
    <button class="operation-activity-card" data-operation-activity="${item.id}">
      ${item.image ? `<img src="${item.image}" alt="活动图片">` : `<span class="operation-activity-cover">${item.name.slice(0,1)}</span>`}
      <span class="operation-activity-main">
        <span class="operation-activity-title"><b>${item.name}</b><i class="status ${item.status}">${item.status === 'published' ? '已发布' : '已下架'}</i></span>
        <span>更新于 ${item.updated.slice(5,16)} · ${item.updater}</span>
        <span class="operation-activity-metrics"><span>总参与<b>${item.totalPeople}</b></span><span>今日预约<b>${item.todayPeople}</b></span></span>
      </span>
      <i class="operation-activity-enter">›</i>
    </button>`).join('');
}

function renderBookings() {
  const activity = currentActivity || activities[0];
  const keyword = $('#recordSearch').value.trim().toLowerCase();
  const list = bookings.filter(item => item.activityId === activity.id && item.status === recordStatus && [item.number,item.name,item.phone].some(value => value.toLowerCase().includes(keyword)));
  const people = list.reduce((sum,item) => sum + item.people,0);
  $('#recordActivityName').textContent = activity.name;
  $('#recordPeopleTotal').textContent = `${activity.totalPeople} 人`;
  $('#recordResultSummary').textContent = `${list.length} 条记录 · ${people} 人`;
  $('#recordEmpty').hidden = list.length > 0;
  const container = $('#bookingList'); container.className = `booking-list ${recordView}`;
  container.innerHTML = list.map(item => recordView === 'compact' ? `
    <button class="booking-row" data-booking="${item.id}">
      <div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status === 'active' ? '已预约' : '已取消'}</span></div>
      <div class="booking-person"><strong>${item.name}</strong><span>${item.phone}</span><em>${item.people} 人</em></div>
      <div class="booking-visit"><span>${item.date}</span><span>${item.session}</span><i>›</i></div>
    </button>` : `
    <button class="booking-card" data-booking="${item.id}">
      <div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status === 'active' ? '已预约' : '已取消'}</span></div>
      <div class="booking-detail-grid"><div><span>游客姓名</span><strong>${item.name}</strong></div><div><span>手机号</span><strong>${item.phone}</strong></div><div><span>预约游玩日期</span><strong>${item.date}</strong></div><div><span>预约场次</span><strong>${item.session}</strong></div><div><span>分类</span><strong>${item.category}</strong></div><div><span>项目</span><strong>${item.project}</strong></div><div><span>实际参与人数</span><strong>${item.people} 人</strong></div><div><span>提交时间</span><strong>${item.created}</strong></div></div>
      <div class="booking-enter">查看预约详情 ›</div>
    </button>`).join('');
}

function renderActivities() {
  const keyword = $('#activitySearch').value.trim().toLowerCase();
  const list = activities
    .filter(item => item.status === activityStatus && item.name.toLowerCase().includes(keyword))
    .sort((a,b) => b.updated.localeCompare(a.updated));
  $('#activityCount').textContent = list.length;
  $('#activityStatusLabel').textContent = activityStatus === 'published' ? '已发布' : '已下架';
  $('#emptyState').hidden = list.length > 0;
  $('#activityList').innerHTML = list.map(item => `
    <article class="activity-card" data-id="${item.id}">
      <button class="activity-main" data-edit="${item.id}">
        <div class="activity-header">
          ${item.image ? `<img class="activity-cover" src="${item.image}" alt="活动图片">` : `<span class="activity-cover activity-cover-fallback" aria-label="未上传活动图片，使用系统占位图">${item.name.slice(0,1)}</span>`}
          <div class="activity-copy">
            <div class="activity-title-row"><h2>${item.name}</h2><span class="status ${item.status}">${item.status === 'published' ? '已发布' : '已下架'}</span></div>
            <div class="activity-meta-row"><span class="activity-meta">更新于 ${item.updated.slice(5,16)} · ${item.updater}</span><span class="activity-edit-hint">编辑 ›</span></div>
          </div>
        </div>
      </button>
      <div class="activity-bottom-panel">
        <div class="compact-metrics">
          <span><svg class="metric-icon metric-icon-outline metric-icon-people" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.25"></circle><path d="M6.5 19c.45-3.65 2.3-5.5 5.5-5.5s5.05 1.85 5.5 5.5"></path></svg><em>总参与</em><b>${item.totalPeople}</b><small>人</small></span>
          <span><svg class="metric-icon metric-icon-outline metric-icon-today" viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="5.5" width="15" height="14" rx="2.5"></rect><path d="M8 3.8v3.4M16 3.8v3.4M4.5 10h15M12 13v4M10 15h4"></path></svg><em>今日预约</em><b>${item.todayPeople}</b><small>人</small></span>
        </div>
        <div class="compact-actions">
          <button class="poster-entry" data-poster="${item.id}"><i class="poster-icon"><u></u></i><span>海报</span></button>
          <button class="expand-button" data-expand="${item.id}"><i class="info-icon">i</i><span>信息</span></button>
        </div>
      </div>
      <div class="activity-detail"><div><span>创建时间</span><b>${item.created}</b></div><div><span>创建人</span><b>${item.creator}</b></div></div>
    </article>`).join('');
}

function openActions(id) {
  currentActivity = activities.find(item => item.id === Number(id));
  $('#actionTitle').textContent = currentActivity.name;
  $('#publishAction').innerHTML = `${currentActivity.status === 'published' ? '下架活动' : '重新发布'} <span>›</span>`;
  $('#actionLayer').classList.add('open'); $('#actionLayer').setAttribute('aria-hidden','false');
}
function closeLayer(id) { const layer = $(`#${id}Layer`); layer.classList.remove('open'); layer.setAttribute('aria-hidden','true'); }

document.addEventListener('click', event => {
  const go = event.target.closest('[data-go],[data-panel-go]');
  if (go) { navigate(go.dataset.go || go.dataset.panelGo); return; }
  const edit = event.target.closest('[data-edit]');
  if (edit) { currentActivity = activities.find(item => item.id === Number(edit.dataset.edit)); openConfig(currentActivity, false, 'activities'); return; }
  const operationActivity = event.target.closest('[data-operation-activity]');
  if (operationActivity) { currentActivity = activities.find(item => item.id === Number(operationActivity.dataset.operationActivity)); navigate('operations'); return; }
  const expand = event.target.closest('[data-expand]');
  if (expand) {
    const card = expand.closest('.activity-card'); const open = card.classList.toggle('expanded');
    $('span', expand).textContent = open ? '收起' : '信息'; return;
  }
  const poster = event.target.closest('[data-poster]');
  if (poster) { showToast('下一批补充海报预览与保存'); return; }
  const records = event.target.closest('[data-records]');
  if (records) {
    currentActivity = activities.find(item => item.id === Number(records.dataset.records)); recordStatus = 'active'; recordView = 'compact'; $('#recordSearch').value = '';
    $$('[data-record-status]').forEach(item => item.classList.toggle('active',item.dataset.recordStatus==='active'));
    $$('[data-record-view]').forEach(item => item.classList.toggle('active',item.dataset.recordView==='compact'));
    navigate('records'); return;
  }
  const booking = event.target.closest('[data-booking]');
  if (booking) { openAdminBooking(Number(booking.dataset.booking)); return; }
  const close = event.target.closest('[data-close]');
  if (close) { closeLayer(close.dataset.close); return; }
  const action = event.target.closest('[data-action]');
  if (!action) return;
  const type = action.dataset.action;
  if (type === 'delete') {
    closeLayer('action'); $('#impactOrders').textContent = '全部预约记录'; $('#impactPeople').textContent = `${currentActivity.totalPeople} 人`;
    $('#deleteLayer').classList.add('open'); $('#deleteLayer').setAttribute('aria-hidden','false'); return;
  }
  if (type === 'publish') {
    currentActivity.status = currentActivity.status === 'published' ? 'offline' : 'published'; closeLayer('action'); renderActivities(); showToast(currentActivity.status === 'published' ? '活动已重新发布' : '活动已下架'); return;
  }
  if (type === 'edit') { closeLayer('action'); openConfig(currentActivity, false, currentPage === 'operations' ? 'operations' : 'activities'); return; }
  if (type === 'copy') { closeLayer('action'); openConfig({ ...currentActivity, name:`${currentActivity.name}（副本）`, status:'offline' }, true, 'activities'); return; }
});

$('#backButton').addEventListener('click', () => {
  const backMap = { activities:'workbench', operationActivities:'workbench', config:(window.configReturnPage || 'activities'), operations:'operationActivities', records:'operations', bookingDetail:'records', sessions:'operations', roster:'sessions', export:'operations' };
  const leave=()=>navigate(backMap[currentPage] || 'workbench');
  if(currentPage==='config'&&window.requestConfigLeave){window.requestConfigLeave(leave);return;}
  leave();
});
$('#specialDateEntry').addEventListener('click', () => showToast('特殊提示日期管理内页待业务确认'));
$('#operationsEntry').addEventListener('click', () => { operationActivityStatus='all'; $('#operationActivitySearch').value=''; $$('[data-operation-activity-status]').forEach(item=>item.classList.toggle('active',item.dataset.operationActivityStatus==='all')); navigate('operationActivities'); });
$('#createActivity').addEventListener('click', () => openConfig({ name:'未命名预约活动', status:'offline' }, true, 'activities'));
$('#activitySearch').addEventListener('input', renderActivities);
$('#operationActivitySearch').addEventListener('input', renderOperationActivities);
$('#operationActivityTabs').addEventListener('click', event => {
  const button=event.target.closest('[data-operation-activity-status]'); if(!button)return;
  operationActivityStatus=button.dataset.operationActivityStatus;
  $$('[data-operation-activity-status]').forEach(item=>item.classList.toggle('active',item===button));
  renderOperationActivities();
});
$('#activityTabs').addEventListener('click', event => {
  const button = event.target.closest('[data-activity-status]');
  if (!button) return;
  activityStatus = button.dataset.activityStatus;
  $$('[data-activity-status]').forEach(item => item.classList.toggle('active', item === button));
  renderActivities();
});
$('#recordSearch').addEventListener('input', renderBookings);
$('#recordTabs').addEventListener('click', event => { const button = event.target.closest('[data-record-status]'); if (!button) return; recordStatus = button.dataset.recordStatus; $$('[data-record-status]').forEach(item => item.classList.toggle('active',item===button)); renderBookings(); });
$$('[data-record-view]').forEach(button => button.addEventListener('click', () => { recordView = button.dataset.recordView; $$('[data-record-view]').forEach(item => item.classList.toggle('active',item===button)); renderBookings(); }));
$('#recordFieldSetting').addEventListener('click', () => openLayer('field'));
$('#confirmDelete').addEventListener('click', () => { closeLayer('delete'); showToast('原型演示：活动数据未实际删除'); });
renderActivities();
