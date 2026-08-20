(() => {
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  let currentBooking = null;
  let rosterSession = null;
  let rosterView = 'compact';
  const currentAdminName = '苏珊';
  let detailFields = ['name','phone','idNumber','people','singleChoice','multiChoice','customNumber','customDate','singleText','multiText'];
  const fieldLabels = { name:'预约人姓名', phone:'手机号码', idNumber:'身份证号', people:'实际参与人数', singleChoice:'是否需要教练陪同', multiChoice:'需要准备的装备', customNumber:'同行儿童人数', customDate:'预计到达日期', singleText:'集合地点', multiText:'其他需求说明' };
  const fieldTypes = { name:'姓名',phone:'手机号',idNumber:'身份证号',people:'多人/团体',singleChoice:'单选',multiChoice:'多选',customNumber:'数字',customDate:'日期',singleText:'单行文本',multiText:'多行文本' };
  const fieldOptions = { singleChoice:['需要教练陪同','无需教练陪同'],multiChoice:['儿童护具','成人防滑鞋','防水储物袋'] };
  const snapshotFor = item => Object.keys(fieldLabels).map(id=>({id,name:fieldLabels[id],type:fieldTypes[id],required:['name','phone','people','singleChoice','multiChoice'].includes(id),options:fieldOptions[id]?[...fieldOptions[id]]:undefined,value:id==='people'?item.people:item[id]}));
  const currentConfiguredFields = () => window.getCurrentReservationFieldConfig?.() || Object.keys(fieldLabels).map(id=>({id,name:fieldLabels[id],type:fieldTypes[id]}));
  const snapshotMap = item => new Map((item.fieldSnapshot||[]).map(field=>[field.id,field]));
  const phoneLink = value => value ? `<a class="phone-link" href="tel:${String(value).replace(/\s/g,'')}">${value}</a>` : '-';
  const phoneAction = value => value ? `<span class="phone-link" data-phone-call="${String(value).replace(/\s/g,'')}">${value}</span>` : '-';
  const projectSelectionHtml = item => item.category || item.project ? `<div class="booking-selection-card"><span>分类／项目</span><strong>${[item.category,item.project].filter(Boolean).join(' / ')}</strong></div>` : '';
  const sessionTitle = item => [item.name, item.time].filter(Boolean).join(' · ');

  Object.assign(bookings[0], { idNumber:'440106199208136521', modified:'2026-08-19 10:02', operationLogs:[
    { type:'create', time:'2026-08-19 09:42', actor:'游客' },
    { type:'visitor_modify', time:'2026-08-19 10:02', actor:'游客', changedFields:['手机号码','需要准备的装备'] },
    { type:'admin_modify', time:'2026-08-19 10:16', actor:'苏珊', changedFields:['实际参与人数'], beforePeople:1, afterPeople:2 }
  ] });
  Object.assign(bookings[1], { idNumber:'440106199109182435', modified:'-' });
  Object.assign(bookings[2], { idNumber:'440106199507202418', modified:'-' });
  Object.assign(bookings[3], { idNumber:'440106198806122013', modified:'-', cancelType:'visitor', cancelTime:'2026-08-18 17:05' });
  bookings.forEach(item=>{if(!item.fieldSnapshot)item.fieldSnapshot=snapshotFor(item);});

  window.openLayer = id => { const layer = q(`#${id}Layer`); layer.classList.add('open'); layer.setAttribute('aria-hidden','false'); };

  window.renderOperationHome = () => {
    const activity = currentActivity || activities[0];
    q('#operationActivityName').textContent = activity.name;
    q('.operation-hero p').textContent = `更新时间 ${activity.updated} · ${activity.updater}`;
    q('.operation-hero .status').textContent = activity.status === 'published' ? '已发布' : '已下架';
    q('.operation-hero .status').className = `status ${activity.status}`;
    const values = qa('.operation-metrics b'); values[0].textContent = activity.totalPeople; values[1].textContent = activity.todayPeople;
  };

  function selectedFilters() {
    return { dateMode:q('#filterDateMode').value, date:q('#filterSingleDate').value, session:q('#filterSession').value, category:q('#filterCategory').value, project:q('#filterProject').value };
  }
  function syncSessionFilter() {
    const activity = currentActivity || activities[0];
    const filters = selectedFilters();
    const current = q('#filterSession').value;
    const sessions = [...new Set(bookings.filter(item => item.activityId === activity.id && (filters.dateMode === 'all' || item.date === filters.date)).map(item => item.session))].sort((a,b)=>a.localeCompare(b));
    q('#filterSession').innerHTML = '<option value="">全部场次</option>' + sessions.map(value => `<option>${value}</option>`).join('');
    q('#filterSession').value = sessions.includes(current) ? current : '';
  }
  function customFieldHtml(item, excluded=[]) {
    const enabled = new Set(detailFields);
    const hidden = new Set(excluded);
    const currentFields=currentConfiguredFields();
    const snapshots=snapshotMap(item);
    const pairedRows = [['name','phone'],['idNumber','people'],['customNumber','customDate']];
    const fullRows = ['singleChoice','multiChoice','singleText','multiText'];
    const paired = pairedRows.map(keys => {
      const visible = keys.filter(key => !hidden.has(key)&&enabled.has(key)&&currentFields.some(field=>field.id===key));
      return visible.map(key => {
        const configField=currentFields.find(field=>field.id===key);const snap=snapshots.get(key);
        const value = key === 'people' ? `${snap?.value??item.people} 人` : snap?.value;
        return `<div class="booking-field ${visible.length === 1 ? 'span-2' : ''} field-${key}"><span>${configField?.name||snap?.name||fieldLabels[key]}</span><strong>${key==='phone'?phoneAction(value):(value || '-')}</strong></div>`;
      }).join('');
    }).join('');
    const full = fullRows.filter(key => !hidden.has(key)&&enabled.has(key)&&currentFields.some(field=>field.id===key)).map(key => {const configField=currentFields.find(field=>field.id===key);const snap=snapshots.get(key);return `<div class="booking-field span-2 ${key === 'multiChoice' || key === 'multiText' ? 'allow-wrap' : ''}"><span>${configField?.name||snap?.name||fieldLabels[key]}</span><strong>${snap?.value || '-'}</strong></div>`;}).join('');
    return paired + full;
  }
  window.renderBookings = () => {
    const activity = currentActivity || activities[0];
    const keyword = q('#recordSearch').value.trim().toLowerCase();
    const filters = selectedFilters();
    const requiresKeyword = filters.dateMode === 'all' && !keyword;
    let list = bookings.filter(item => item.activityId === activity.id && item.status === recordStatus && [item.number,item.name,item.phone].some(value => String(value||'').toLowerCase().includes(keyword)));
    if (filters.dateMode === 'single') list = list.filter(item => item.date === filters.date);
    if (requiresKeyword) list = [];
    if (filters.session) list = list.filter(item => item.session === filters.session);
    if (filters.category) list = list.filter(item => item.category === filters.category);
    if (filters.project) list = list.filter(item => item.project === filters.project);
    const sort = q('#recordSort').value;
    list.sort((a,b) => sort === 'created-asc' ? a.created.localeCompare(b.created,'zh-CN',{numeric:true}) : b.created.localeCompare(a.created,'zh-CN',{numeric:true}));
    q('[data-record-status="active"]').textContent = '已预约'; q('[data-record-status="cancelled"]').textContent = '已取消';
    q('#recordActivityName').textContent = activity.name; q('#recordPeopleTotal').textContent = `${activity.todayPeople} 人`;
    q('#recordResultSummary').textContent = `${list.length} 条记录 · ${list.reduce((sum,item)=>sum+item.people,0)} 人`;
    q('#recordEmpty').hidden = list.length > 0;
    q('#recordEmptyTitle').textContent = requiresKeyword ? '请输入查询条件' : '暂无相关预约';
    q('#recordEmptyText').textContent = requiresKeyword ? '查询全部日期时，请填写预约号、姓名或手机号' : '请更换状态、筛选条件或搜索关键词';
    const container = q('#bookingList'); container.className = `booking-list ${recordView}`;
    container.innerHTML = list.map(item => recordView === 'compact' ? `<button class="booking-row" data-booking="${item.id}"><div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status==='active'?'已预约':'已取消'}</span></div><div class="booking-person"><strong>${item.name||'未填写姓名'}</strong><span>提交 ${item.created}</span><em>${item.people} 人</em></div><div class="booking-visit"><span>${item.date}</span><span>${item.session}</span><i>›</i></div></button>` : `<button class="booking-card" data-booking="${item.id}"><div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status ${item.status}">${item.status==='active'?'已预约':'已取消'}</span></div><div class="booking-base-grid"><div><span>提交时间</span><strong>${item.created}</strong></div><div><span>预约游玩日期</span><strong>${item.date}</strong></div></div><div class="booking-selection-card"><span>场次名称及时间</span><strong>${item.sessionName || '未设置场次名称'} · ${item.session}</strong></div>${projectSelectionHtml(item)}<div class="booking-detail-grid">${customFieldHtml(item)}</div><div class="booking-enter">查看预约详情 ›</div></button>`).join('');
  };

  window.openAdminBooking = id => {
    currentBooking = bookings.find(item => item.id === id); if (!currentBooking) return;
    window.bookingDetailReturnPage = currentPage;
    renderAdminBooking(); navigate('bookingDetail');
  };
  function detailRow(label,value,copy='') { const hasCopyButton=copy&&copy!=='phone'; return `<div class="admin-detail-row${hasCopyButton ? ' has-action' : ''}"><span>${label}</span><strong>${copy==='phone'?phoneLink(value):value}</strong>${hasCopyButton ? `<button data-copy-value="${copy}">复制</button>`:''}</div>`; }
  function operationLogHtml(item) {
    const fallback = [
      { type:'create', time:item.created, actor:'游客' },
      ...(item.modified && item.modified !== '-' ? [{ type:'visitor_modify', time:item.modified, actor:'游客', changedFields:['游客填写资料'] }] : []),
      ...(item.status === 'cancelled' ? [{ type:item.cancelType === 'visitor' ? 'visitor_cancel' : 'admin_cancel', time:item.cancelTime, actor:item.cancelType === 'visitor' ? '游客' : (item.cancelActor || currentAdminName) }] : [])
    ];
    const logs = item.operationLogs || fallback;
    return logs.map(log => {
      const fields = (log.changedFields || []).join('、');
      const content = {
        create:`提交预约，实际参与人数 ${item.people} 人`,
        visitor_modify:fields ? `修改：${fields}` : '修改预约资料',
        admin_modify:log.beforePeople && log.afterPeople ? `修改实际参与人数：${log.beforePeople} 人改为 ${log.afterPeople} 人` : (fields ? `修改：${fields}` : '修改预约资料'),
        visitor_cancel:'取消预约，预约状态改为已取消，相关名额已返还',
        admin_cancel:'取消预约，预约状态改为已取消，相关名额已返还'
      }[log.type] || '更新预约信息';
      const title = { create:'创建预约', visitor_modify:'修改预约', admin_modify:'修改预约', visitor_cancel:'取消预约', admin_cancel:'取消预约' }[log.type] || '更新预约';
      return `<div><i></i><b>${title}</b><span>${log.time} · ${log.actor}</span><p>${content}</p></div>`;
    }).join('');
  }
  function renderAdminBooking() {
    const item = currentBooking; const cancelled = item.status === 'cancelled';
    q('#adminDetailNumber').textContent = item.number; q('#adminDetailActivity').textContent = (currentActivity||activities[0]).name;
    q('#adminDetailStatus .booking-status').textContent = cancelled ? '已取消' : '已预约'; q('#adminDetailStatus .booking-status').className = `booking-status ${item.status}`;
    q('#adminBookingInfo').innerHTML = detailRow('提交时间',item.created)+detailRow('最近修改时间',item.modified||'-')+(cancelled?detailRow('取消时间',item.cancelTime)+detailRow('取消方式',item.cancelType==='visitor'?'游客取消':'管理员取消'):'')+detailRow('预约游玩日期',item.date)+detailRow('场次名称',item.sessionName||'未设置场次名称')+detailRow('场次时间',item.session)+(item.category?detailRow('分类',item.category):'')+(item.project?detailRow('项目',item.project):'')+detailRow('实际参与人数',`${item.people} 人`);
    q('#adminVisitorInfo').innerHTML = item.fieldSnapshot.map(field=>detailRow(field.name,field.id==='people'?`${field.value} 人`:(field.value||'-'),field.id==='phone'?'phone':field.id==='idNumber'?'idNumber':'')).join('');
    q('#adminTimeline').innerHTML = operationLogHtml(item);
    q('#adminDetailActions').style.display = cancelled ? 'none' : 'flex';
  }

  const sessionSamples = [
    { id:'s1', date:'2026-08-20', name:'溪降1场', time:'09:30-10:30', state:'expired', booked:12, orders:8, limit:15 },
    { id:'s2', date:'2026-08-20', name:'溪降2场', time:'10:30-11:30', state:'open', booked:15, orders:10, limit:15 },
    { id:'s3', date:'2026-08-20', name:'', time:'11:30-12:30', state:'open', booked:0, orders:0, limit:15 },
    { id:'s4', date:'2026-08-20', name:'溪降4场', time:'12:30-13:30', state:'paused', booked:3, orders:2, limit:15 },
    { id:'s5', date:'2026-08-20', name:'VIP不限额场', time:'14:30', state:'paused', booked:2, orders:2, limit:null }
  ];
  function renderSessions() {
    const date=q('#sessionFilterDate').value;const list=sessionSamples.filter(item=>item.date===date).sort((a,b)=>a.time.localeCompare(b.time));const parsed=new Date(`${date}T00:00:00`);const weekdays=['周日','周一','周二','周三','周四','周五','周六'];q('#sessionResultDate').textContent=`${parsed.getMonth()+1}月${parsed.getDate()}日 ${weekdays[parsed.getDay()]}`;q('.session-result b').textContent=`共 ${list.length} 个场次`;
    q('#sessionProgressList').innerHTML = list.length?list.map(item => { const full=item.limit!==null&&item.booked>=item.limit; const stateText=item.state==='expired'?'已过期':item.state==='paused'?'已暂停':'开放中'; const quota=item.limit===null?'名额不限':`总名额 ${item.limit} · 剩余 ${Math.max(0,item.limit-item.booked)} 人`; return `<article class="session-progress"><div class="session-progress-head"><div><b>${sessionTitle(item)}</b></div><div><em class="session-admin-state ${item.state}">${stateText}</em>${full?'<em class="quota-full">已满员</em>':''}</div></div><div class="session-quota"><strong>${quota}</strong><span>已预约 <b>${item.booked} 人</b> · ${item.orders} 单</span></div>${item.booked?`<button data-roster="${item.id}">名单详情 ›</button>`:'<small>暂无人选择</small>'}</article>`; }).join(''):'<div class="empty-state"><h3>该日期暂无场次</h3><p>请选择其他预约日期</p></div>';
  }
  function renderRoster() {
    const session=rosterSession||sessionSamples[3];
    const allActive=bookings.filter(item=>item.activityId===1&&item.status==='active'&&item.date===session.date&&item.session===session.time);
    const projectSelect=q('#rosterProjectFilter');const currentProject=projectSelect.value;const projects=[...new Set(allActive.map(item=>item.project).filter(Boolean))];projectSelect.innerHTML='<option value="">全部项目</option>'+projects.map(project=>`<option value="${project}">${project}</option>`).join('');projectSelect.value=projects.includes(currentProject)?currentProject:'';
    let list=allActive;const keyword=q('#rosterSearch').value.trim().toLowerCase();const project=projectSelect.value;list=list.filter(item=>[item.number,item.name,item.phone].some(value=>String(value).toLowerCase().includes(keyword))&&(!project||item.project===project));list.sort((a,b)=>q('#rosterSort').value==='created-asc'?a.created.localeCompare(b.created):b.created.localeCompare(a.created));
    const stateText=session.state==='expired'?'已过期':session.state==='paused'?'已暂停':'开放中';
    q('#rosterSummary').innerHTML=`<div class="roster-session-head"><span>${session.date}</span><em class="session-admin-state ${session.state}">${stateText}</em><h2>${sessionTitle(session)}</h2></div><div class="roster-session-metrics"><div><span>已预约人数</span><b>${session.booked} 人</b></div><div><span>预约单数</span><b>${session.orders} 单</b></div><div><span>场次名额</span><b>${session.limit===null?'名额不限':`${session.limit} 人 · 剩余 <em>${Math.max(0,session.limit-session.booked)}</em> 人`}</b></div></div>`;
    q('#rosterCount').textContent=`${list.length} 条记录 · ${list.reduce((sum,item)=>sum+item.people,0)} 人`;q('#rosterList').className=`booking-list ${rosterView} roster-list`;
    q('#rosterList').innerHTML=list.map(item=>`<article class="roster-booking">${rosterView==='compact'?`<button class="booking-row" data-booking="${item.id}"><div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status active">已预约</span></div><div class="booking-person"><strong>${item.name||'未填写姓名'}</strong><span>提交 ${item.created}</span><em>${item.people} 人</em></div>${item.category||item.project?`<div class="booking-visit"><span>${[item.category,item.project].filter(Boolean).join(' / ')}</span><i>›</i></div>`:''}</button>`:`<button class="booking-card" data-booking="${item.id}"><div class="booking-row-head"><b>预约号 ${item.number}</b><span class="booking-status active">已预约</span></div><div class="booking-base-grid"><div><span>提交时间</span><strong>${item.created}</strong></div><div><span>实际参与人数</span><strong>${item.people} 人</strong></div></div>${projectSelectionHtml(item)}<div class="booking-detail-grid">${customFieldHtml(item,['people'])}</div></button>`}<button class="roster-cancel-action" data-roster-cancel="${item.id}">取消预约</button></article>`).join('')||'<div class="empty-state"><h3>该场次暂无有效预约</h3><p>已取消预约可在全部预约中查看</p></div>';
  }

  document.addEventListener('click', event => {
    const opGo=event.target.closest('[data-op-go]'); if(opGo){ if(opGo.dataset.opGo==='records'){recordStatus='active';recordView='compact';q('#recordSearch').value='';q('#filterDateMode').value='single';q('#filterSingleDate').value='2026-08-19';q('#filterSingleDateWrap').hidden=false;q('#filterCategory').value='';q('#filterProject').value='';q('#recordSort').value='created-desc';q('#recordFilterPanel').hidden=true;q('#recordFilterToggle').setAttribute('aria-expanded','false');q('#recordFilterToggle i').textContent='⌄';qa('[data-record-status]').forEach(item=>item.classList.toggle('active',item.dataset.recordStatus==='active'));qa('[data-record-view]').forEach(item=>item.classList.toggle('active',item.dataset.recordView==='compact'));syncSessionFilter();} navigate(opGo.dataset.opGo); if(opGo.dataset.opGo==='records')renderBookings(); if(opGo.dataset.opGo==='sessions')renderSessions(); return; }
    const roster=event.target.closest('[data-roster]'); if(roster){ rosterSession=sessionSamples.find(item=>item.id===roster.dataset.roster); navigate('roster'); renderRoster(); return; }
    const rosterCancel=event.target.closest('[data-roster-cancel]'); if(rosterCancel){ currentBooking=bookings.find(item=>item.id===Number(rosterCancel.dataset.rosterCancel)); q('#adminCancelReason').value=''; openLayer('cancelBooking'); return; }
    const copy=event.target.closest('[data-copy-value]'); if(copy){ showToast('已复制'); return; }
  });

  function modifyFieldHtml(field){const id=`modify-${field.id}`;const value=field.value??'';if(field.type==='多行文本')return `<label><span>${field.name}</span><textarea id="${id}" data-snapshot-field="${field.id}">${value}</textarea></label>`;if(field.type==='单选')return `<label><span>${field.name}</span><select id="${id}" data-snapshot-field="${field.id}">${(field.options||[]).map(option=>`<option ${option===value?'selected':''}>${option}</option>`).join('')}</select></label>`;if(field.type==='多选'){const selected=new Set(String(value).split('、'));return `<fieldset><legend>${field.name}</legend>${(field.options||[]).map(option=>`<label class="modify-check"><input type="checkbox" data-snapshot-multi="${field.id}" value="${option}" ${selected.has(option)?'checked':''}>${option}</label>`).join('')}</fieldset>`;}const type=field.type==='手机号'?'tel':field.type==='数字'||field.type==='多人/团体'?'number':field.type==='日期'?'date':'text';return `<label><span>${field.name}</span><input id="${id}" data-snapshot-field="${field.id}" type="${type}" value="${value}" ${field.type==='多人/团体'?'min="1"':''}></label>`;}
  q('#adminModifyBooking').addEventListener('click',()=>{q('#modifySnapshotFields').innerHTML=currentBooking.fieldSnapshot.map(modifyFieldHtml).join('');openLayer('modify');});
  q('#saveModify').addEventListener('click',()=>{const changes=currentBooking.fieldSnapshot.map(field=>{const value=field.type==='多选'?qa(`[data-snapshot-multi="${field.id}"]:checked`,q('#modifySnapshotFields')).map(input=>input.value).join('、'):(q(`[data-snapshot-field="${field.id}"]`,q('#modifySnapshotFields'))?.value??field.value);return {field,value};});const emptyRequired=changes.find(({field,value})=>field.required&&!String(value).trim());if(emptyRequired){showToast(`请填写${emptyRequired.field.name}`);return;}const peopleChange=changes.find(({field})=>field.type==='多人/团体');const people=peopleChange?Number(peopleChange.value):1;if(people<1){showToast('实际参与人数不能少于1人');return;}const beforePeople=currentBooking.people;const changedFields=[];changes.forEach(({field,value})=>{if(String(field.value??'')!==String(value)){changedFields.push(field.name);field.value=field.type==='多人/团体'?Number(value):value;currentBooking[field.id]=field.value;}});currentBooking.people=people;currentBooking.modified='2026-08-19 10:18';currentBooking.operationLogs=currentBooking.operationLogs||[{type:'create',time:currentBooking.created,actor:'游客'}];currentBooking.operationLogs.push({type:'admin_modify',time:currentBooking.modified,actor:currentAdminName,changedFields,beforePeople,afterPeople:people});closeLayer('modify');renderAdminBooking();showToast('预约信息已修改'); });
  q('#adminCancelBooking').addEventListener('click',()=>{q('#adminCancelReason').value='';openLayer('cancelBooking');});
  q('#confirmCancelBooking').addEventListener('click',()=>{if(!q('#adminCancelReason').value.trim()){showToast('请填写取消原因');return;}currentBooking.status='cancelled';currentBooking.cancelType='admin';currentBooking.cancelActor=currentAdminName;currentBooking.cancelTime='2026-08-20 13:16';currentBooking.operationLogs=currentBooking.operationLogs||[{type:'create',time:currentBooking.created,actor:'游客'}];currentBooking.operationLogs.push({type:'admin_cancel',time:currentBooking.cancelTime,actor:currentAdminName});if(rosterSession&&currentBooking.date===rosterSession.date&&currentBooking.session===rosterSession.time){rosterSession.booked=Math.max(0,rosterSession.booked-currentBooking.people);rosterSession.orders=Math.max(0,rosterSession.orders-1);}closeLayer('cancelBooking');if(currentPage==='roster')renderRoster();else renderAdminBooking();showToast('预约已取消，名额已返还');});
  function openCardFieldSetting(){const fields=currentConfiguredFields();q('#fieldOptions').innerHTML=fields.map(field=>`<label><input type="checkbox" value="${field.id}" ${detailFields.includes(field.id)?'checked':''}> ${field.name}</label>`).join('');openLayer('field');}
  q('#recordFieldSetting').addEventListener('click',openCardFieldSetting);q('#rosterFieldSetting').addEventListener('click',openCardFieldSetting);
  q('#saveRecordFields').addEventListener('click',()=>{const values=qa('#fieldOptions input:checked').map(input=>input.value);if(values.length<1){showToast('至少保留 1 个卡片字段');return;}detailFields=values;closeLayer('field');if(currentPage==='roster')renderRoster();else renderBookings();showToast('详情卡片字段已保存');});
  q('#filterDateMode').addEventListener('change',()=>{q('#filterSingleDateWrap').hidden=q('#filterDateMode').value==='all';syncSessionFilter();renderBookings();});
  q('#filterSingleDate').addEventListener('change',()=>{syncSessionFilter();renderBookings();});
  qa('#filterSession,#filterCategory,#filterProject,#recordSort').forEach(input=>input.addEventListener('change',renderBookings));
  q('#recordFilterToggle').addEventListener('click',()=>{const panel=q('#recordFilterPanel');const open=panel.hidden;panel.hidden=!open;q('#recordFilterToggle').setAttribute('aria-expanded',String(open));q('#recordFilterToggle i').textContent=open?'⌃':'⌄';});
  const filterStrip=q('.filter-strip'); let filterDrag=null; let filterDragged=false;
  filterStrip.addEventListener('wheel',event=>{if(Math.abs(event.deltaY)>Math.abs(event.deltaX)){filterStrip.scrollLeft+=event.deltaY;event.preventDefault();}},{passive:false});
  filterStrip.addEventListener('pointerdown',event=>{filterDrag={x:event.clientX,left:filterStrip.scrollLeft};filterDragged=false;});
  filterStrip.addEventListener('pointermove',event=>{if(!filterDrag)return;const distance=event.clientX-filterDrag.x;if(Math.abs(distance)>6){filterDragged=true;filterStrip.setPointerCapture(event.pointerId);filterStrip.scrollLeft=filterDrag.left-distance;event.preventDefault();}});
  filterStrip.addEventListener('pointerup',event=>{if(filterStrip.hasPointerCapture(event.pointerId))filterStrip.releasePointerCapture(event.pointerId);filterDrag=null;});filterStrip.addEventListener('pointercancel',()=>{filterDrag=null;filterDragged=false;});
  filterStrip.addEventListener('click',event=>{if(!filterDragged)return;event.preventDefault();event.stopPropagation();filterDragged=false;},true);
  qa('[data-roster-view]').forEach(button=>button.addEventListener('click',()=>{rosterView=button.dataset.rosterView;qa('[data-roster-view]').forEach(item=>item.classList.toggle('active',item===button));renderRoster();}));
  q('#rosterSearch').addEventListener('input',renderRoster); q('#rosterSort').addEventListener('change',renderRoster); q('#rosterProjectFilter').addEventListener('change',renderRoster);
  q('#rosterFilterToggle').addEventListener('click',()=>{const panel=q('#rosterFilterPanel');const open=panel.hidden;panel.hidden=!open;q('#rosterFilterToggle').setAttribute('aria-expanded',String(open));q('#rosterFilterToggle i').textContent=open?'⌃':'⌄';});
  q('#sessionFilterDate').addEventListener('change',renderSessions);
  qa('input[name="exportType"]').forEach(input=>input.addEventListener('change',()=>{q('#exportStatusField').hidden=input.value==='roster';}));
  q('#generateExport').addEventListener('click',()=>{const type=q('input[name="exportType"]:checked').value;const row=document.createElement('div');row.innerHTML=`<span>${type==='records'?'预约记录':'场次名单'}_${Date.now()}.xlsx</span><small>刚刚 · 已生成</small><button>下载</button>`;q('#exportHistory').prepend(row);showToast('导出文件已生成');});
})();
