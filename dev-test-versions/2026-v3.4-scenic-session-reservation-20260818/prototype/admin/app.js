const $ = (selector, root = document) => root.querySelector(selector);
const $$ = (selector, root = document) => [...root.querySelectorAll(selector)];
const adminVisitorBase = /\/prototype\/admin\//.test(location.pathname) ? '../visitor' : '../../scenic-reservation/preview';
window.adminVisitorBase = adminVisitorBase;
const resolveAdminAsset = value => {
  if (!value || typeof value !== 'string' || /^(data:|blob:|https?:|\/)/.test(value)) return value;
  const file = value.match(/(?:scenic-reservation\/preview|visitor)\/assets\/([^?#]+)/)?.[1];
  return file ? new URL(`${adminVisitorBase}/assets/${file}`, document.baseURI).href : value;
};
window.resolveAdminAsset = resolveAdminAsset;

const activities = [
  { id: 1, name: '呀诺达溪降体验预约', status: 'published', image:'../../scenic-reservation/preview/assets/activity-hero.jpg', coverImage:'../../scenic-reservation/preview/assets/activity-hero.jpg', heroBadge:'无需验票 · 免费预约', heroSubtitle:'门票已包含溪降体验，请提前预约心仪时段。', contactName:'溪降接待处', contactPhone:'0898-8388 3333', totalPeople: 128600, todayPeople: 10000, created: '2026-08-11 16:28', updated: '2026-08-14 09:42', creator: '景区管理员-苏珊', updater: '苏珊' },
  { id: 2, name: '雨林观景线路预约', status: 'published', image:null, totalPeople: 96, todayPeople: 18, created: '2026-08-02 10:16', updated: '2026-08-13 18:05', creator: '运营管理员-林晓', updater: '林晓' },
  { id: 4, name: '呀诺达热带雨林高空滑索亲子探险体验项目预约活动暑期特别专场季', status: 'published', image:null, totalPeople: 735, todayPeople: 9, created: '2026-07-30 11:08', updated: '2026-08-12 16:45', creator: '景区管理员-陈晨', updater: '陈晨' },
  { id: 3, name: 'VIP 私家团场次预约', status: 'offline', image:null, totalPeople: 42, todayPeople: 0, created: '2026-07-28 14:09', updated: '2026-08-12 11:30', creator: '景区管理员-苏珊', updater: '苏珊' },
  { id: 5, name: '测试活动｜已下架且无预约可删除', status: 'offline', image:null, totalPeople: 0, todayPeople: 0, created: '2026-08-19 15:20', updated: '2026-08-19 15:20', creator: '当前管理员', updater: '当前管理员' }
];
function syncVisitorActivityCatalog(publishId=null,removeId=null){
  let catalog=[];
  try{catalog=JSON.parse(localStorage.getItem('scenicPublishedActivityCatalogV34')||'[]');}catch(error){catalog=[];}
  if(!Array.isArray(catalog)||!catalog.length){
    catalog=activities.filter(item=>item.status==='published').map(item=>({id:String(item.id),name:item.name,status:'published',image:resolveAdminAsset(item.image)||'',coverImage:resolveAdminAsset(item.coverImage)||'',heroBadge:item.heroBadge||'',heroSubtitle:item.heroSubtitle||'',updated:item.updated||''}));
  }
  if(removeId!==null){catalog=catalog.filter(item=>String(item.id)!==String(removeId));}
  if(publishId!==null){
    const source=activities.find(item=>String(item.id)===String(publishId));
    if(source){
      const snapshot={id:String(source.id),name:source.name,status:'published',image:resolveAdminAsset(source.image)||'',coverImage:resolveAdminAsset(source.coverImage)||'',heroBadge:source.heroBadge||'',heroSubtitle:source.heroSubtitle||'',updated:source.updated||''};
      catalog=[snapshot,...catalog.filter(item=>String(item.id)!==String(source.id))];
    }
  }
  localStorage.setItem('scenicPublishedActivityCatalogV34',JSON.stringify(catalog));
}
window.syncVisitorActivityCatalog=syncVisitorActivityCatalog;
let currentPage = 'workbench';
let currentActivity = null;
let activityStatus = 'published';
let operationActivityStatus = 'published';
let recordStatus = 'active';
let recordView = 'compact';
const bookings = [
  { id:1, activityId:1, status:'active', number:'023', name:'苏珊', phone:'13800138000', date:'2026-08-19', session:'09:30-10:30', sessionName:'溪降上午体验场', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-19 09:56', singleChoice:'需要教练陪同', multiChoice:'儿童护具、成人防滑鞋、防水储物袋', customNumber:'3', customDate:'2026-08-19', singleText:'从游客中心集合', multiText:'同行人员包含儿童，请提前准备儿童安全装备并安排靠前位置。' },
  { id:2, activityId:1, status:'active', number:'024', name:'陈晓宇', phone:'13600136000', date:'2026-08-19', session:'10:30-11:30', sessionName:'溪降中午体验场', category:'', project:'', people:1, created:'08-19 10:08', singleChoice:'无需教练陪同', multiChoice:'成人防滑鞋', customNumber:'1', customDate:'2026-08-20', singleText:'酒店接驳点集合', multiText:'无其他特殊说明。' },
  { id:3, activityId:1, status:'active', number:'025', name:'林悦', phone:'13900139000', date:'2026-08-19', session:'11:30-12:30', sessionName:'VIP私家团体验场', category:'VIP私家团', project:'VIP 私家团 A 线', people:2, created:'08-19 10:21', singleChoice:'需要教练陪同', multiChoice:'儿童护具、防水储物袋', customNumber:'2', customDate:'2026-08-21', singleText:'景区正门集合', multiText:'希望安排熟悉亲子接待的教练。' },
  { id:4, activityId:1, status:'cancelled', number:'018', name:'周宁', phone:'13500135000', date:'2026-08-19', session:'12:30-13:30', sessionName:'溪降下午体验场', category:'常规溪降', project:'常规溪降 A 线', people:1, created:'08-18 16:40', singleChoice:'无需教练陪同', multiChoice:'成人防滑鞋', customNumber:'1', customDate:'2026-08-19', singleText:'自行到场', multiText:'临时行程变化。' },
  { id:5, activityId:1, status:'active', number:'026', name:'许安然', phone:'13700137000', date:'2026-08-20', session:'12:30-13:30', sessionName:'溪降4场', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-20 09:18', singleChoice:'需要教练陪同', multiChoice:'儿童护具、防水储物袋', customNumber:'2', customDate:'2026-08-20', singleText:'游客中心集合', multiText:'同行有一名儿童，请协助准备儿童护具。' },
  { id:6, activityId:1, status:'active', number:'027', name:'顾晨', phone:'13400134000', date:'2026-08-20', session:'12:30-13:30', sessionName:'溪降4场', category:'常规溪降', project:'常规溪降 B 线', people:1, created:'08-20 09:32', singleChoice:'无需教练陪同', multiChoice:'成人防滑鞋', customNumber:'1', customDate:'2026-08-20', singleText:'景区正门集合', multiText:'无其他特殊说明。' },
  { id:7, activityId:1, status:'active', number:'028', name:'唐一诺', phone:'13300133000', date:'2026-08-20', session:'14:30', sessionName:'VIP不限额场', category:'VIP私家团', project:'VIP 私家团 A 线', people:2, created:'08-20 10:05', singleChoice:'需要教练陪同', multiChoice:'防水储物袋', customNumber:'2', customDate:'2026-08-20', singleText:'贵宾接待处集合', multiText:'希望由亲子接待教练带队。' },
  { id:8, activityId:1, status:'active', number:'029', name:'宋妍', phone:'13200132001', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-19 14:08', singleChoice:'需要教练陪同', multiChoice:'儿童护具', customNumber:'2', customDate:'2026-08-20', singleText:'游客中心集合', multiText:'同行有儿童。' },
  { id:9, activityId:1, status:'active', number:'030', name:'陆川', phone:'13200132002', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 B 线', people:1, created:'08-19 14:22', singleChoice:'无需教练陪同', multiChoice:'成人防滑鞋', customNumber:'1', customDate:'2026-08-20', singleText:'景区正门集合', multiText:'无。' },
  { id:10, activityId:1, status:'active', number:'031', name:'方宁', phone:'13200132003', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-19 14:35', singleChoice:'需要教练陪同', multiChoice:'儿童护具、防水储物袋', customNumber:'2', customDate:'2026-08-20', singleText:'游客中心集合', multiText:'请安排亲子教练。' },
  { id:11, activityId:1, status:'active', number:'032', name:'魏嘉', phone:'13200132004', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 B 线', people:1, created:'08-19 14:49', singleChoice:'无需教练陪同', multiChoice:'成人防滑鞋', customNumber:'1', customDate:'2026-08-20', singleText:'酒店接驳点集合', multiText:'无。' },
  { id:12, activityId:1, status:'active', number:'033', name:'叶晴', phone:'13200132005', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-19 15:03', singleChoice:'需要教练陪同', multiChoice:'儿童护具', customNumber:'2', customDate:'2026-08-20', singleText:'游客中心集合', multiText:'同行有儿童。' },
  { id:13, activityId:1, status:'active', number:'034', name:'韩峰', phone:'13200132006', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 B 线', people:1, created:'08-19 15:17', singleChoice:'无需教练陪同', multiChoice:'防水储物袋', customNumber:'1', customDate:'2026-08-20', singleText:'景区正门集合', multiText:'无。' },
  { id:14, activityId:1, status:'active', number:'035', name:'杜一凡', phone:'13200132007', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 A 线', people:2, created:'08-19 15:31', singleChoice:'需要教练陪同', multiChoice:'成人防滑鞋、防水储物袋', customNumber:'2', customDate:'2026-08-20', singleText:'游客中心集合', multiText:'需要教练讲解安全事项。' },
  { id:15, activityId:1, status:'active', number:'036', name:'蒋文', phone:'13200132008', date:'2026-08-20', session:'09:30-10:30', sessionName:'溪降1场', category:'常规溪降', project:'常规溪降 B 线', people:1, created:'08-19 15:45', singleChoice:'无需教练陪同', multiChoice:'成人防滑鞋', customNumber:'1', customDate:'2026-08-20', singleText:'酒店接驳点集合', multiText:'无。' }
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
  const statusName=operationActivityStatus==='published'?'已发布':operationActivityStatus==='offline'?'已下架':'';
  $('#operationActivitySummary').textContent = `共 ${list.length} 个${statusName}活动`;
  $('#operationActivityEmpty').hidden = list.length > 0;
  $('#operationActivityList').innerHTML = list.map(item => `
    <article class="operation-activity-card">
      <button class="operation-activity-open" data-operation-activity="${item.id}" aria-label="进入${item.name}运营管理">
        ${item.image ? `<img src="${resolveAdminAsset(item.image)}" alt="活动图片">` : `<span class="operation-activity-cover">${item.name.slice(0,1)}</span>`}
        <span class="operation-activity-main">
          <span class="operation-activity-title"><b>${item.name}</b></span>
          <span class="operation-activity-update">更新于 ${item.updated.slice(5,16)} · ${item.updater}</span>
        </span>
      </button>
      <div class="operation-activity-footer">
        <span class="operation-activity-metrics">
          <span class="operation-metric-item"><svg class="operation-metric-icon people" viewBox="0 0 24 24" aria-hidden="true"><circle cx="12" cy="8" r="3.25"></circle><path d="M6.5 19c.45-3.65 2.3-5.5 5.5-5.5s5.05 1.85 5.5 5.5"></path></svg><em>总参与</em><b>${item.totalPeople}</b></span>
          <span class="operation-metric-item"><svg class="operation-metric-icon today" viewBox="0 0 24 24" aria-hidden="true"><rect x="4.5" y="5.5" width="15" height="14" rx="2.5"></rect><path d="M8 3.8v3.4M16 3.8v3.4M4.5 10h15M12 13v4M10 15h4"></path></svg><em>今日预约</em><b>${item.todayPeople}</b></span>
        </span>
      </div>
      <span class="operation-activity-side"><i class="status ${item.status}">${item.status === 'published' ? '已发布' : '已下架'}</i></span>
      <button class="operation-activity-poster" data-poster="${item.id}" aria-label="分享${item.name}"><svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5"></circle><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="19" r="2.5"></circle><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/></svg><span>分享</span></button>
    </article>`).join('');
}

function renderBookings() {
  const activity = currentActivity || activities[0];
  const keyword = $('#recordSearch').value.trim().toLowerCase();
  const list = bookings.filter(item => item.activityId === activity.id && item.status === recordStatus && [item.number,item.name,item.phone].some(value => value.toLowerCase().includes(keyword)));
  const people = list.reduce((sum,item) => sum + item.people,0);
  $('#recordResultSummary').textContent = `${list.length} 条记录 · ${people} 人`;
  $('#recordEmpty').hidden = list.length > 0;
  const container = $('#bookingList'); container.className = `booking-list ${recordView}`;
  container.innerHTML = list.map(item => recordView === 'compact' ? `
    <button class="booking-row" data-booking="${item.id}">
      <div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status === 'active' ? '已预约' : '已取消'}</span></div>
      <div class="booking-person"><strong>${item.name}</strong><span class="phone-link" data-phone-call="${item.phone}">${item.phone}</span><em>${item.people} 人</em></div>
      <div class="booking-visit"><span>${item.date}</span><span>${item.session}</span><i>›</i></div>
    </button>` : `
    <button class="booking-card" data-booking="${item.id}">
      <div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status === 'active' ? '已预约' : '已取消'}</span></div>
      <div class="booking-detail-grid"><div><span>游客姓名</span><strong>${item.name}</strong></div><div><span>手机号</span><strong><span class="phone-link" data-phone-call="${item.phone}">${item.phone}</span></strong></div><div><span>预约游玩日期</span><strong>${item.date}</strong></div><div><span>预约场次</span><strong>${item.session}</strong></div>${item.category?`<div><span>分类</span><strong>${item.category}</strong></div>`:''}${item.project?`<div><span>项目</span><strong>${item.project}</strong></div>`:''}<div><span>实际参与人数</span><strong>${item.people} 人</strong></div><div><span>提交时间</span><strong>${item.created}</strong></div></div>
      <div class="booking-enter">查看预约详情 ›</div>
    </button>`).join('');
}

function renderActivities() {
  syncVisitorActivityCatalog();
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
          ${item.image ? `<img class="activity-cover" src="${resolveAdminAsset(item.image)}" alt="活动图片">` : `<span class="activity-cover activity-cover-fallback" aria-label="未上传活动图片，使用系统占位图">${item.name.slice(0,1)}</span>`}
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
          <button class="poster-entry" data-poster="${item.id}" aria-label="分享${item.name}"><svg class="share-icon" viewBox="0 0 24 24" aria-hidden="true"><circle cx="18" cy="5" r="2.5"></circle><circle cx="6" cy="12" r="2.5"></circle><circle cx="18" cy="19" r="2.5"></circle><path d="m8.2 10.8 7.6-4.4M8.2 13.2l7.6 4.4"/></svg><span>分享</span></button>
          <button class="expand-button" data-expand="${item.id}"><i class="info-icon">i</i><span>信息</span></button>
          ${item.status==='published'?`<button class="activity-offline-entry" data-offline-activity="${item.id}"><i>↓</i><span>下架</span></button>`:''}
          ${item.status==='offline'?`<button class="activity-delete-entry ${Number(item.totalPeople||0)>0?'is-disabled':''}" data-delete-activity="${item.id}" aria-disabled="${Number(item.totalPeople||0)>0}"><i>×</i><span>删除</span></button>`:''}
        </div>
      </div>
      <div class="activity-detail"><div><span>创建时间</span><b>${item.created}</b></div><div><span>创建人</span><b>${item.creator}</b></div></div>
    </article>`).join('');
}

function openActions(id) {
  currentActivity = activities.find(item => item.id === Number(id));
  $('#actionTitle').textContent = currentActivity.name;
  $('#actionLayer').classList.add('open'); $('#actionLayer').setAttribute('aria-hidden','false');
}
function openPoster(id) {
  const activity = activities.find(item => item.id === Number(id));
  if (!activity) return;
  currentActivity = activity;
  $('#posterActivityName').textContent = activity.name;
  $('#posterActivityName').title = activity.name;
  const posterCover = $('#posterCover');
  const cover = resolveAdminAsset(activity.coverImage || activity.image || '');
  posterCover.classList.toggle('has-image', Boolean(cover));
  posterCover.style.backgroundImage = cover ? `url("${cover}")` : '';
  $('#posterLayer').classList.add('open');
  $('#posterLayer').setAttribute('aria-hidden', 'false');
}
function closeLayer(id) { const layer = $(`#${id}Layer`); layer.classList.remove('open'); layer.setAttribute('aria-hidden','true'); }

document.addEventListener('click', event => {
  const go = event.target.closest('[data-go],[data-panel-go]');
  if (go) { navigate(go.dataset.go || go.dataset.panelGo); return; }
  const edit = event.target.closest('[data-edit]');
  if (edit) { currentActivity = activities.find(item => item.id === Number(edit.dataset.edit)); openConfig(currentActivity, false, 'activities'); return; }
  const poster = event.target.closest('[data-poster]');
  if (poster) { openPoster(poster.dataset.poster); return; }
  const operationActivity = event.target.closest('[data-operation-activity]');
  if (operationActivity) { currentActivity = activities.find(item => item.id === Number(operationActivity.dataset.operationActivity)); navigate('operations'); return; }
  const expand = event.target.closest('[data-expand]');
  if (expand) {
    const card = expand.closest('.activity-card'); const open = card.classList.toggle('expanded');
    $('span', expand).textContent = open ? '收起' : '信息'; return;
  }
  const offlineActivity=event.target.closest('[data-offline-activity]');
  if(offlineActivity){
    currentActivity=activities.find(item=>item.id===Number(offlineActivity.dataset.offlineActivity));if(!currentActivity)return;
    $('#offlineActivityName').textContent=currentActivity.name;
    $('#offlineActivityLayer').classList.add('open');$('#offlineActivityLayer').setAttribute('aria-hidden','false');return;
  }
  const deleteActivity = event.target.closest('[data-delete-activity]');
  if(deleteActivity){
    currentActivity=activities.find(item=>item.id===Number(deleteActivity.dataset.deleteActivity));
    if(!currentActivity)return;
    if(currentActivity.status!=='offline'){showToast('已上架活动不能删除，请先下架');return;}
    if(Number(currentActivity.totalPeople||0)>0){showToast('该活动已有预约数据，只能保持下架，不允许删除');return;}
    $('#deleteActivityName').textContent=currentActivity.name;
    $('#deleteLayer').classList.add('open');$('#deleteLayer').setAttribute('aria-hidden','false');return;
  }
  const records = event.target.closest('[data-records]');
  if (records) {
    currentActivity = activities.find(item => item.id === Number(records.dataset.records)); recordStatus = 'active'; recordView = 'compact'; $('#recordSearch').value = '';
    $('#filterDateMode').value = 'single'; $('#filterSingleDate').value = '2026-08-19'; $('#filterSingleDateWrap').hidden = false; $('#filterSession').value = ''; $('#filterCategory').value = ''; $('#filterProject').value = ''; $('#recordSort').value = 'created-desc';
    $('#recordFilterPanel').hidden = true; $('#recordFilterToggle').setAttribute('aria-expanded','false'); $('#recordFilterToggle i').textContent = '⌄';
    $$('[data-record-status]').forEach(item => item.classList.toggle('active',item.dataset.recordStatus==='active'));
    $$('[data-record-view]').forEach(item => item.classList.toggle('active',item.dataset.recordView==='compact'));
    navigate('records'); return;
  }
  const phoneCall = event.target.closest('[data-phone-call]');
  if (phoneCall) { event.stopPropagation(); window.location.href = `tel:${phoneCall.dataset.phoneCall}`; return; }
  const booking = event.target.closest('[data-booking]');
  if (booking) { openAdminBooking(Number(booking.dataset.booking)); return; }
  const close = event.target.closest('[data-close]');
  if (close) { closeLayer(close.dataset.close); return; }
  const action = event.target.closest('[data-action]');
  if (!action) return;
  const type = action.dataset.action;
  if (type === 'delete') {
    closeLayer('action');
    if(currentActivity.status!=='offline'){showToast('已上架活动不能删除，请先下架');return;}
    if(Number(currentActivity.totalPeople||0)>0){showToast('该活动已有预约数据，只能保持下架，不允许删除');return;}
    $('#deleteActivityName').textContent=currentActivity.name;
    $('#deleteLayer').classList.add('open'); $('#deleteLayer').setAttribute('aria-hidden','false'); return;
  }
  if (type === 'edit') { closeLayer('action'); openConfig(currentActivity, false, currentPage === 'operations' ? 'operations' : 'activities'); return; }
  if (type === 'copy') { closeLayer('action'); openConfig({ ...currentActivity, name:`${currentActivity.name}（副本）`, status:'offline' }, true, 'activities'); return; }
});

$('#backButton').addEventListener('click', () => {
  const backMap = { activities:'workbench', operationActivities:'workbench', config:(window.configReturnPage || 'activities'), operations:'operationActivities', records:'operations', bookingDetail:(window.bookingDetailReturnPage || 'records'), sessions:'operations', roster:'sessions', export:'operations' };
  const leave=()=>navigate(backMap[currentPage] || 'workbench');
  if(currentPage==='config'&&window.requestConfigLeave){window.requestConfigLeave(leave);return;}
  leave();
});
$('#specialDateEntry').addEventListener('click', () => showToast('特殊提示日期管理内页待业务确认'));
$('#operationsEntry').addEventListener('click', () => { operationActivityStatus='published'; $('#operationActivitySearch').value=''; $$('[data-operation-activity-status]').forEach(item=>item.classList.toggle('active',item.dataset.operationActivityStatus==='published')); navigate('operationActivities'); });
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
$('#recordSearch').addEventListener('input', () => window.renderBookings());
$('#recordTabs').addEventListener('click', event => { const button = event.target.closest('[data-record-status]'); if (!button) return; recordStatus = button.dataset.recordStatus; $$('[data-record-status]').forEach(item => item.classList.toggle('active',item===button)); window.renderBookings(); });
$$('[data-record-view]').forEach(button => button.addEventListener('click', () => { recordView = button.dataset.recordView; $$('[data-record-view]').forEach(item => item.classList.toggle('active',item===button)); window.renderBookings(); }));
$('#recordFieldSetting').addEventListener('click', () => openLayer('field'));
$('#posterSave').addEventListener('click', () => showToast('分享图片已生成，请长按图片保存'));
$('#confirmDelete').addEventListener('click', () => {
  if(!currentActivity||currentActivity.status!=='offline'||Number(currentActivity.totalPeople||0)>0){closeLayer('delete');showToast('当前活动不满足删除条件');return;}
  const index=activities.findIndex(item=>item.id===currentActivity.id);if(index>=0)activities.splice(index,1);
  try{const publishedMap=JSON.parse(localStorage.getItem('scenicPublishedActivitiesV34')||'{}');delete publishedMap[String(currentActivity.id)];localStorage.setItem('scenicPublishedActivitiesV34',JSON.stringify(publishedMap));}catch(error){}
  try{const drafts=JSON.parse(localStorage.getItem('scenicActivityDraftsV34')||'{}');delete drafts[String(currentActivity.id)];localStorage.setItem('scenicActivityDraftsV34',JSON.stringify(drafts));}catch(error){}
  syncVisitorActivityCatalog(null,currentActivity.id);closeLayer('delete');currentActivity=null;renderActivities();showToast('活动已删除');
});
$('#confirmOfflineActivity').addEventListener('click',()=>{
  if(!currentActivity||currentActivity.status!=='published'){closeLayer('offlineActivity');showToast('当前活动状态已变化');return;}
  currentActivity.status='offline';currentActivity.updated=new Date().toISOString().slice(0,16).replace('T',' ');
  try{const publishedMap=JSON.parse(localStorage.getItem('scenicPublishedActivitiesV34')||'{}');delete publishedMap[String(currentActivity.id)];localStorage.setItem('scenicPublishedActivitiesV34',JSON.stringify(publishedMap));}catch(error){}
  try{const drafts=JSON.parse(localStorage.getItem('scenicActivityDraftsV34')||'{}');if(drafts[String(currentActivity.id)]?.currentActivity)drafts[String(currentActivity.id)].currentActivity.status='offline';localStorage.setItem('scenicActivityDraftsV34',JSON.stringify(drafts));}catch(error){}
  syncVisitorActivityCatalog(null,currentActivity.id);closeLayer('offlineActivity');activityStatus='published';renderActivities();showToast('活动已下架，历史预约继续保留');
});
renderActivities();
