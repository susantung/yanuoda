(() => {
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  let currentBooking = null;
  let rosterSession = null;
  let rosterView = 'compact';
  let detailFields = ['name','phone','people'];
  const fieldLabels = { name:'游客姓名', phone:'手机号', idNumber:'身份证号', size:'漂流装备尺码', people:'实际参与人数' };

  Object.assign(bookings[0], { idNumber:'440106199208136521', size:'成人 M', modified:'2026-08-14 10:02' });
  Object.assign(bookings[1], { idNumber:'440106199109182435', size:'成人 L', modified:'-' });
  Object.assign(bookings[2], { idNumber:'440106199507202418', size:'成人 S', modified:'-' });
  Object.assign(bookings[3], { idNumber:'440106198806122013', size:'成人 M', modified:'-', cancelType:'visitor', cancelTime:'2026-08-13 17:05' });

  window.openLayer = id => { const layer = q(`#${id}Layer`); layer.classList.add('open'); layer.setAttribute('aria-hidden','false'); };

  window.renderOperationHome = () => {
    const activity = currentActivity || activities[0];
    q('#operationActivityName').textContent = activity.name;
    q('.operation-hero p').textContent = `更新时间 ${activity.updated} · ${activity.updater}`;
    q('.operation-hero .status').textContent = activity.status === 'published' ? '已发布' : '已下架';
    q('.operation-hero .status').className = `status ${activity.status}`;
    const values = qa('.operation-metrics b'); values[0].textContent = activity.totalPeople; values[1].textContent = activity.todayPeople;
    q('#operationOffline').textContent = activity.status === 'published' ? '下架' : '重新发布';
  };

  function selectedFilters() {
    return { date:q('#filterDate').value, session:q('#filterSession').value, category:q('#filterCategory').value, project:q('#filterProject').value, created:q('#filterCreated').value, cancelType:q('#filterCancelType').value };
  }
  function customFieldHtml(item) {
    return detailFields.map(key => {
      const value = key === 'people' ? `${item.people} 人` : item[key];
      return `<div><span>${fieldLabels[key]}</span><strong>${value || '-'}</strong></div>`;
    }).join('');
  }
  window.renderBookings = () => {
    const activity = currentActivity || activities[0];
    const keyword = q('#recordSearch').value.trim().toLowerCase();
    const filters = selectedFilters();
    let list = bookings.filter(item => item.activityId === activity.id && item.status === recordStatus && [item.number,item.name,item.phone].some(value => value.toLowerCase().includes(keyword)));
    if (filters.date) list = list.filter(item => item.date === filters.date);
    if (filters.session) list = list.filter(item => item.session === filters.session);
    if (filters.category) list = list.filter(item => item.category === filters.category);
    if (filters.project) list = list.filter(item => item.project === filters.project);
    if (filters.created === 'today') list = list.filter(item => item.created.startsWith('08-14'));
    if (filters.created === 'yesterday') list = list.filter(item => item.created.startsWith('08-13'));
    if (recordStatus === 'cancelled' && filters.cancelType) list = list.filter(item => item.cancelType === filters.cancelType);
    const sort = q('#recordSort').value;
    list.sort((a,b) => sort === 'visit-asc' ? `${a.date}${a.session}`.localeCompare(`${b.date}${b.session}`) : b.created.localeCompare(a.created));
    const activeCount = bookings.filter(item => item.activityId === activity.id && item.status === 'active').length;
    const cancelledCount = bookings.filter(item => item.activityId === activity.id && item.status === 'cancelled').length;
    q('[data-record-status="active"]').textContent = `已预约 ${activeCount}`; q('[data-record-status="cancelled"]').textContent = `已取消 ${cancelledCount}`;
    q('#filterCancelType').hidden = recordStatus !== 'cancelled';
    q('#recordActivityName').textContent = activity.name; q('#recordPeopleTotal').textContent = `${activity.totalPeople} 人`;
    q('#recordResultSummary').textContent = `${list.length} 条记录 · ${list.reduce((sum,item)=>sum+item.people,0)} 人`;
    q('#recordEmpty').hidden = list.length > 0;
    const container = q('#bookingList'); container.className = `booking-list ${recordView}`;
    container.innerHTML = list.map(item => recordView === 'compact' ? `<button class="booking-row" data-booking="${item.id}"><div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status==='active'?'已预约':'已取消'}</span></div><div class="booking-person"><strong>${item.name}</strong><span>提交 ${item.created}</span><em>${item.people} 人</em></div><div class="booking-visit"><span>${item.date}</span><span>${item.session}</span><i>›</i></div></button>` : `<button class="booking-card" data-booking="${item.id}"><div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status==='active'?'已预约':'已取消'}</span></div><div class="booking-detail-grid"><div><span>提交时间</span><strong>${item.created}</strong></div><div><span>预约游玩日期</span><strong>${item.date}</strong></div><div><span>场次名称及时间</span><strong>溪降体验场 · ${item.session}</strong></div><div><span>分类／项目</span><strong>${item.category}／${item.project}</strong></div>${customFieldHtml(item)}</div><div class="booking-enter">查看预约详情 ›</div></button>`).join('');
  };

  window.openAdminBooking = id => {
    currentBooking = bookings.find(item => item.id === id); if (!currentBooking) return;
    renderAdminBooking(); navigate('bookingDetail');
  };
  function detailRow(label,value,copy='') { return `<div class="admin-detail-row"><span>${label}</span><strong>${value}</strong>${copy ? `<button data-copy-value="${copy}">复制</button>`:''}</div>`; }
  function renderAdminBooking() {
    const item = currentBooking; const cancelled = item.status === 'cancelled';
    q('#adminDetailNumber').textContent = item.number; q('#adminDetailActivity').textContent = (currentActivity||activities[0]).name;
    q('#adminDetailStatus .booking-status').textContent = cancelled ? '已取消' : '已预约'; q('#adminDetailStatus .booking-status').className = `booking-status ${item.status}`;
    q('#adminBookingInfo').innerHTML = detailRow('提交时间',item.created)+detailRow('最近修改时间',item.modified||'-')+(cancelled?detailRow('取消时间',item.cancelTime)+detailRow('取消方式',item.cancelType==='visitor'?'游客取消':'管理员取消'):'')+detailRow('预约游玩日期',item.date)+detailRow('场次','溪降体验场')+detailRow('场次时间',item.session)+detailRow('分类',item.category)+detailRow('项目',item.project)+detailRow('实际参与人数',`${item.people} 人`);
    q('#adminVisitorInfo').innerHTML = detailRow('姓名',item.name)+detailRow('手机号',item.phone,'phone')+detailRow('身份证号',item.idNumber,'idNumber')+detailRow('漂流装备尺码',item.size);
    q('#adminTimeline').innerHTML = `<div><i></i><b>创建预约</b><span>${item.created} · 游客端 · ${item.name}</span><p>提交预约并占用 ${item.people} 人名额</p></div>${item.modified&&item.modified!=='-'?`<div><i></i><b>游客修改</b><span>${item.modified} · 游客端 · ${item.name}</span><p>更新游客填写资料</p></div>`:''}${cancelled?`<div><i></i><b>取消预约</b><span>${item.cancelTime} · ${item.cancelType==='visitor'?'游客端':'管理端'}</span><p>预约取消，名额已返还</p></div>`:''}`;
    q('#adminDetailActions').style.display = cancelled ? 'none' : 'flex';
  }

  const sessionSamples = [
    { id:'s1', date:'2026-08-14', name:'溪降1场', time:'09:30-10:30', state:'expired', booked:12, limit:15, names:'周宁、陈安等' },
    { id:'s2', date:'2026-08-14', name:'溪降2场', time:'10:30-11:30', state:'open', booked:15, limit:15, names:'林悦、赵凡等' },
    { id:'s3', date:'2026-08-14', name:'溪降3场', time:'11:30-12:30', state:'open', booked:0, limit:15, names:'' },
    { id:'s4', date:'2026-08-14', name:'溪降4场', time:'12:30-13:30', state:'open', booked:3, limit:15, names:'苏珊、陈晓宇' },
    { id:'s5', date:'2026-08-14', name:'VIP不限额场', time:'14:30', state:'paused', booked:2, limit:null, names:'林悦' }
  ];
  function renderSessions() {
    q('#sessionProgressList').innerHTML = sessionSamples.map(item => { const full=item.limit!==null&&item.booked>=item.limit; const stateText=item.state==='expired'?'已过期':item.state==='paused'?'已暂停':'开放中'; const quota=item.limit===null?`已预约 ${item.booked} 人 · 名额不限`:`${item.booked}/${item.limit} 人 · 剩余 ${Math.max(0,item.limit-item.booked)} 人`; return `<article class="session-progress"><div class="session-progress-head"><div><b>${item.name}</b><span>${item.time}</span></div><div><em class="session-admin-state ${item.state}">${stateText}</em>${full?'<em class="quota-full">已满员</em>':''}</div></div><div class="session-quota"><strong>${quota}</strong><span>${item.names||'暂无人选择'}</span></div>${item.booked?`<button data-roster="${item.id}">名单详情 ›</button>`:'<small>暂无人选择</small>'}</article>`; }).join('');
  }
  function renderRoster() {
    const session = rosterSession || sessionSamples[3]; let list=bookings.filter(item=>item.status==='active'&&item.session===session.time); const keyword=q('#rosterSearch').value.trim().toLowerCase(); list=list.filter(item=>[item.number,item.name,item.phone].some(value=>value.toLowerCase().includes(keyword))); if(q('#rosterSort').value==='number') list.sort((a,b)=>a.number.localeCompare(b.number)); else list.sort((a,b)=>a.created.localeCompare(b.created));
    q('#rosterSummary').innerHTML=`<div><span>${session.date} 周五</span><h2>${session.name} · ${session.time}</h2></div><div><b>${session.booked} 人</b><span>${session.limit===null?'名额不限':`名额 ${session.limit} · 剩余 ${session.limit-session.booked}`}</span></div>`;
    q('#rosterCount').textContent=`${list.length} 条记录 · ${list.reduce((s,i)=>s+i.people,0)} 人`; q('#rosterList').className=`roster-list ${rosterView}`;
    q('#rosterList').innerHTML=list.map(item=>`<article class="roster-item"><div><b>${item.name}</b><span>预约号 ${item.number} · 提交 ${item.created}</span>${rosterView==='detail'?`<p>${item.phone} · ${item.category} · ${item.project} · ${item.people} 人</p>`:''}</div><div><button data-booking="${item.id}">详情</button><button class="cancel-link" data-roster-cancel="${item.id}">取消</button></div></article>`).join('')||'<div class="empty-state"><h3>该场次暂无预约</h3></div>';
  }

  document.addEventListener('click', event => {
    const opGo=event.target.closest('[data-op-go]'); if(opGo){ navigate(opGo.dataset.opGo); if(opGo.dataset.opGo==='records')renderBookings(); if(opGo.dataset.opGo==='sessions')renderSessions(); return; }
    if(event.target.closest('[data-op-action="edit"]')){ openConfig(currentActivity||activities[0],false,'operations'); return; }
    const roster=event.target.closest('[data-roster]'); if(roster){ rosterSession=sessionSamples.find(item=>item.id===roster.dataset.roster); navigate('roster'); renderRoster(); return; }
    const rosterCancel=event.target.closest('[data-roster-cancel]'); if(rosterCancel){ currentBooking=bookings.find(item=>item.id===Number(rosterCancel.dataset.rosterCancel)); q('#adminCancelReason').value=''; openLayer('cancelBooking'); return; }
    const copy=event.target.closest('[data-copy-value]'); if(copy){ showToast('已复制'); return; }
  });

  q('#operationOffline').addEventListener('click',()=>{ currentActivity.status=currentActivity.status==='published'?'offline':'published'; renderOperationHome(); showToast(currentActivity.status==='published'?'活动已重新发布':'活动已下架'); });
  q('#operationMore').addEventListener('click',()=>openActions((currentActivity||activities[0]).id));
  q('#adminModifyBooking').addEventListener('click',()=>{ q('#modifyName').value=currentBooking.name;q('#modifyPhone').value=currentBooking.phone;q('#modifyPeople').value=currentBooking.people;openLayer('modify'); });
  q('#saveModify').addEventListener('click',()=>{ const people=Number(q('#modifyPeople').value); if(people<1||people>6){showToast('人数超出当前可用库存');return;} currentBooking.name=q('#modifyName').value;currentBooking.phone=q('#modifyPhone').value;currentBooking.people=people;currentBooking.modified='2026-08-14 11:18';closeLayer('modify');renderAdminBooking();showToast('预约信息已修改'); });
  q('#adminCancelBooking').addEventListener('click',()=>{q('#adminCancelReason').value='';openLayer('cancelBooking');});
  q('#confirmCancelBooking').addEventListener('click',()=>{if(!q('#adminCancelReason').value.trim()){showToast('请填写取消原因');return;}currentBooking.status='cancelled';currentBooking.cancelType='admin';currentBooking.cancelTime='2026-08-14 11:20';closeLayer('cancelBooking');renderAdminBooking();showToast('预约已取消，名额已返还');});
  q('#recordFieldSetting').addEventListener('click',()=>openLayer('field'));
  q('#saveRecordFields').addEventListener('click',()=>{const values=qa('#fieldOptions input:checked').map(input=>input.value);if(values.length<1||values.length>5){showToast('请选择 1–5 个字段');return;}detailFields=values;closeLayer('field');renderBookings();showToast('详情卡片字段已保存');});
  qa('#filterDate,#filterSession,#filterCategory,#filterProject,#filterCreated,#filterCancelType,#recordSort').forEach(input=>input.addEventListener('change',renderBookings));
  qa('[data-roster-view]').forEach(button=>button.addEventListener('click',()=>{rosterView=button.dataset.rosterView;qa('[data-roster-view]').forEach(item=>item.classList.toggle('active',item===button));renderRoster();}));
  q('#rosterSearch').addEventListener('input',renderRoster); q('#rosterSort').addEventListener('change',renderRoster);
  qa('input[name="exportType"]').forEach(input=>input.addEventListener('change',()=>{q('#exportStatusField').hidden=input.value==='roster';}));
  q('#generateExport').addEventListener('click',()=>{const type=q('input[name="exportType"]:checked').value;const row=document.createElement('div');row.innerHTML=`<span>${type==='records'?'预约记录':'场次名单'}_${Date.now()}.xlsx</span><small>刚刚 · 已生成</small><button>下载</button>`;q('#exportHistory').prepend(row);showToast('导出文件已生成');});
})();
