(() => {
  const specialTemplates = {
    water: { activityId: 1, name: '水位风险提示', title: '漂流水位安全提示', content: '受当日水位影响，携带 1.2—1.5 米以下儿童的游客请谨慎参与，并以现场工作人员评估为准。', seconds: 3 },
    holiday: { activityId: 1, name: '节假日集合提醒', title: '节假日集合提醒', content: '节假日期间客流较大，请至少提前 30 分钟抵达集合点，听从现场工作人员安排。', seconds: 3 },
    weather: { activityId: 1, name: '天气变化提醒', title: '天气变化温馨提示', content: '如遇天气变化，活动安排可能调整，请以当天现场通知为准。', seconds: 3 },
  };
  const today = new Date(2026, 7, 24);
  const rangeEnd = new Date(2026, 9, 31);
  const specialRules = {
    1: { '2026-08-24': 'water', '2026-08-27': 'holiday', '2026-09-03': 'water', '2026-10-10': 'weather' },
    2: { '2026-08-25': 'weather' }, 4: {},
  };
  const specialUpdates = { 1: { time: '2026-08-24 07:15', operator: '林晓' }, 2: { time: '2026-08-23 18:20', operator: '苏珊' }, 4: { time: '-', operator: '-' } };
  const specialStoreKey = 'scenicSpecialDateNoticeV34';
  function persistSpecialDateData() {
    try { localStorage.setItem(specialStoreKey, JSON.stringify({ templates: specialTemplates, rules: specialRules })); } catch (error) {}
  }
  try {
    const saved = JSON.parse(localStorage.getItem(specialStoreKey) || 'null');
    if (saved?.templates && typeof saved.templates === 'object') Object.assign(specialTemplates, saved.templates);
    if (saved?.rules && typeof saved.rules === 'object') Object.entries(saved.rules).forEach(([activityId, rules]) => { specialRules[activityId] = { ...(specialRules[activityId] || {}), ...(rules || {}) }; });
  } catch (error) {}
  Object.values(specialTemplates).forEach(template => { if (!template.activityId) template.activityId = 1; });
  const allowedIds = new Set([1, 2, 4]);
  let specialStatus = 'published', specialActivity = null, specialTemplate = null, specialPendingDates = new Set(), specialMonthOffset = 0, editingTemplateId = null, pendingTemplateDelete = null;
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const esc = value => String(value).replace(/[&<>"']/g, char => ({ '&': '&amp;', '<': '&lt;', '>': '&gt;', '"': '&quot;', "'": '&#39;' }[char]));
  const iso = date => `${date.getFullYear()}-${String(date.getMonth() + 1).padStart(2, '0')}-${String(date.getDate()).padStart(2, '0')}`;
  const inRange = key => key >= iso(today) && key <= iso(rangeEnd);
  const templatesForCurrentActivity = () => Object.entries(specialTemplates).filter(([, template]) => template.activityId === specialActivity?.id);
  const dateKeysFor = id => Object.entries(specialRules[specialActivity?.id] || {}).filter(([key, value]) => value === id && inRange(key)).map(([key]) => key).sort();
  const monthDate = () => new Date(today.getFullYear(), today.getMonth() + specialMonthOffset, 1);
  const monthLabel = date => `${date.getFullYear()}年${date.getMonth() + 1}月`;
  const monthKeys = () => {
    const month = monthDate(), start = new Date(month.getFullYear(), month.getMonth(), 1), end = new Date(month.getFullYear(), month.getMonth() + 1, 0), result = [];
    for (let value = new Date(start); value <= end; value.setDate(value.getDate() + 1)) result.push(new Date(value));
    return result.filter(date => iso(date) >= iso(today) && iso(date) <= iso(rangeEnd));
  };
  const activityList = () => activities.filter(item => allowedIds.has(item.id) && (specialStatus === 'all' || item.status === specialStatus));
  const hasNoticeContent = value => String(value || '').replace(/<[^>]*>/g, '').trim().length > 0;
  const templateHtml = value => {
    const source = String(value || '').trim();
    return /<[^>]+>/.test(source) ? source : '<p>' + esc(source).replace(/\n/g, '<br>') + '</p>';
  };

  // 游客端统一按此优先级解析：C02 开关 -> 特殊日期模板最新内容 -> 全局须知 -> 不展示。
  window.resolveSpecialDateNotice = ({ activityId, date, noticeEnabled, globalNotice = {} }) => {
    if (!noticeEnabled) return null;
    const templateId = specialRules[activityId]?.[date];
    const template = templateId && specialTemplates[templateId];
    if (template) return { source: 'special', templateId, title: template.title, html: templateHtml(template.content), seconds: Math.max(0, Number(template.seconds) || 0) };
    if (!String(globalNotice.title || '').trim() || !hasNoticeContent(globalNotice.html)) return null;
    return { source: 'global', title: globalNotice.title, html: globalNotice.html };
  };

  window.renderSpecialDateActivities = () => {
    const keyword = q('#specialDateSearch').value.trim().toLowerCase();
    const list = activityList().filter(item => item.name.toLowerCase().includes(keyword)).sort((a, b) => (specialUpdates[b.id]?.time || '').localeCompare(specialUpdates[a.id]?.time || ''));
    const state = specialStatus === 'published' ? '已发布' : specialStatus === 'offline' ? '已下架' : '';
    q('#specialDateSummary').textContent = `共 ${list.length} 个${state}活动`;
    q('#specialDateList').innerHTML = list.length ? list.map(item => {
      const update = specialUpdates[item.id] || { time: '-', operator: '-' };
      return `<article class="special-date-card"><button class="special-date-open" data-special-activity="${item.id}">${item.image ? `<span class="special-date-cover"><img src="${resolveAdminAsset(item.image)}" alt="活动图片"></span>` : `<span class="special-date-cover">${esc(item.name.slice(0, 1))}</span>`}<span class="special-date-main"><span class="special-date-title"><b>${esc(item.name)}</b></span><span class="special-date-update">更新于 ${update.time} · ${esc(update.operator)}</span></span></button><span class="status ${item.status === 'published' ? 'published' : 'offline'}">${item.status === 'published' ? '已发布' : '已下架'}</span><i class="special-date-enter">›</i></article>`;
    }).join('') : '<div class="empty-state"><span>⌕</span><h3>未找到相关活动</h3><p>请更换关键词或状态</p></div>';
    qa('[data-special-activity]').forEach(element => { element.onclick = () => openSpecialDateActivity(Number(element.dataset.specialActivity)); });
  };

  function openSpecialDateActivity(id) {
    specialActivity = activities.find(item => item.id === id);
    const ids = templatesForCurrentActivity().map(([id]) => id);
    specialTemplate = ids.length === 1 ? ids[0] : null;
    specialPendingDates = specialTemplate ? new Set(dateKeysFor(specialTemplate)) : new Set();
    specialMonthOffset = 0;
    q('#specialDateActivityCover').innerHTML = specialActivity.image ? `<img src="${resolveAdminAsset(specialActivity.image)}" alt="活动图片">` : esc(specialActivity.name.slice(0, 1));
    q('#specialDateActivityName').textContent = specialActivity.name;
    window.navigate('specialDateDetail');
  }

  function renderPicker() {
    const template = specialTemplate && specialTemplates[specialTemplate];
    q('#specialDatePicker').classList.toggle('is-empty', !template);
    q('#specialDatePickerName').textContent = template ? template.name : '请选择模板';
    q('#specialDatePickerInfo').textContent = template ? '点击可切换模板或查看关联日期' : '选择模板后可批量维护日期';
  }

  function renderCalendar() {
    const panel = q('#specialDateCalendarPanel');
    panel.classList.toggle('show', !!specialTemplate);
    if (!specialTemplate) return;
    const month = monthDate();
    q('#specialDateMonthLabel').textContent = monthLabel(month);
    q('#specialDateMonthPrev').disabled = specialMonthOffset === 0;
    q('#specialDateMonthNext').disabled = specialMonthOffset === 2;
    const offset = (new Date(month.getFullYear(), month.getMonth(), 1).getDay() + 6) % 7;
    const weeks = ['一', '二', '三', '四', '五', '六', '日'].map(day => `<span>${day}</span>`).join('');
    const blanks = Array.from({ length: offset }, () => '<span class="calendar-day calendar-blank"></span>').join('');
    const dates = monthKeys().map(date => {
      const key = iso(date);
      return `<button class="calendar-day ${key === iso(today) ? 'today ' : ''}${specialPendingDates.has(key) ? 'selected ' : ''}" data-special-day="${key}">${date.getDate()}</button>`;
    }).join('');
    q('#specialDateCalendar').innerHTML = weeks + blanks + dates;
    qa('[data-special-day]').forEach(element => { element.onclick = () => {
      const key = element.dataset.specialDay;
      specialPendingDates.has(key) ? specialPendingDates.delete(key) : specialPendingDates.add(key);
      renderPicker(); renderCalendar();
    }; });
    q('#specialDateSelectionCount').textContent = `${specialPendingDates.size} 个日期`;
    const template = specialTemplates[specialTemplate];
    q('#specialDateTemplateTitle').textContent = template.title;
    q('#specialDateTemplateContent').innerHTML = templateHtml(template.content);
  }

  function renderDetail() { renderPicker(); renderCalendar(); }
  window.renderSpecialDateDetail = () => { if (!specialActivity) return openSpecialDateActivity(1); renderDetail(); };

  function renderTemplateSheet() {
    q('#specialDateTemplateOptions').innerHTML = templatesForCurrentActivity().map(([id, template]) => `<button class="special-template-option ${id === specialTemplate ? 'selected' : ''}" data-special-template="${id}"><i>!</i><span><b>${esc(template.name)}</b><small>${dateKeysFor(id).length} 个关联日期</small></span><em>${id === specialTemplate ? '✓' : '›'}</em></button>`).join('');
    qa('[data-special-template]').forEach(element => { element.onclick = () => {
      specialTemplate = element.dataset.specialTemplate;
      specialPendingDates = new Set(dateKeysFor(specialTemplate));
      specialMonthOffset = 0;
      q('#specialDateTemplateLayer').classList.remove('open');
      renderDetail();
      showToast(`已选择“${specialTemplates[specialTemplate].name}”`);
    }; });
  }

  window.renderSpecialDateTemplates = () => {
    q('#specialDateTemplateList').innerHTML = templatesForCurrentActivity().map(([id, template]) => `<article class="special-template-list-card ${id === specialTemplate ? 'active' : ''}"><div class="special-template-list-top"><i>!</i><b>${esc(template.name)}</b>${id === specialTemplate ? '<em><span class="special-template-dot"></span>当前模板</em>' : ''}<button data-edit-template="${id}">编辑</button></div></article>`).join('');
    qa('[data-edit-template]').forEach(element => { element.onclick = () => openTemplateEditor(element.dataset.editTemplate); });
  };

  function openTemplateEditor(id = null) {
    editingTemplateId = id;
    const template = id ? specialTemplates[id] : { activityId: specialActivity?.id || 1, name: '', title: '', content: '', seconds: 3 };
    q('#specialDateTemplateEditorHeading').textContent = id ? '编辑活动提示模板' : '新建活动提示模板';
    q('#specialDateTemplateEditorName').value = template.name;
    q('#specialDateTemplateEditorTitle').value = template.title;
    q('#specialDateTemplateEditorContent').innerHTML = templateHtml(template.content);
    q('#specialDateTemplateEditorSeconds').value = Math.max(0, Number(template.seconds) || 0);
    q('#specialDateTemplateEditorHint').textContent = '游客按钮统一显示“已读并确认以上内容（' + q('#specialDateTemplateEditorSeconds').value + '）”，倒计时结束后可点击；允许点击遮罩关闭。';
    q('#specialDateTemplateDelete').hidden = !id;
    window.navigate('specialDateTemplateEditor');
  }
  window.renderSpecialDateTemplateEditor = () => {};

  q('#specialDateSearch').addEventListener('input', window.renderSpecialDateActivities);
  q('#specialDateStatusTabs').addEventListener('click', event => {
    const button = event.target.closest('[data-special-date-status]'); if (!button) return;
    specialStatus = button.dataset.specialDateStatus;
    qa('[data-special-date-status]').forEach(item => item.classList.toggle('active', item === button));
    window.renderSpecialDateActivities();
  });
  q('#specialDatePicker').onclick = () => { renderTemplateSheet(); q('#specialDateTemplateLayer').classList.add('open'); };
  q('#specialDateTemplateLayer').onclick = event => { if (event.target === q('#specialDateTemplateLayer')) q('#specialDateTemplateLayer').classList.remove('open'); };
  q('#specialDateTemplateCancel').onclick = () => q('#specialDateTemplateLayer').classList.remove('open');
  q('#specialDateTemplateManage').onclick = () => navigate('specialDateTemplates');
  q('#specialDateManageLink').onclick = () => navigate('specialDateTemplates');
  q('#specialDateMonthPrev').onclick = () => { if (specialMonthOffset > 0) { specialMonthOffset--; renderCalendar(); } };
  q('#specialDateMonthNext').onclick = () => { if (specialMonthOffset < 2) { specialMonthOffset++; renderCalendar(); } };
  q('#specialDateReset').onclick = () => {
    if (!specialTemplate) return;
    specialPendingDates = new Set(dateKeysFor(specialTemplate));
    renderDetail(); showToast('已恢复为已保存的关联日期');
  };
  q('#specialDateSave').onclick = () => {
    if (!specialTemplate) return showToast('请先选择提示模板');
    const rules = specialRules[specialActivity.id];
    Object.keys(rules).forEach(key => { if (rules[key] === specialTemplate && !specialPendingDates.has(key)) delete rules[key]; });
    // 同一日期可从其他模板再次保存；这里直接覆盖 date -> templateId，即最后一次保存生效。
    specialPendingDates.forEach(key => { rules[key] = specialTemplate; });
    specialUpdates[specialActivity.id] = { time: '2026-08-24 11:20', operator: '苏珊' };
    persistSpecialDateData();
    renderDetail(); showToast(`已保存当前模板的 ${specialPendingDates.size} 个日期`);
  };
  q('#specialDateTemplateCreate').onclick = () => {
    if (templatesForCurrentActivity().length >= 10) return showToast('当前活动最多可创建 10 个提示模板');
    openTemplateEditor();
  };
  persistSpecialDateData();
  q('#specialDateTemplateEditorTools').onclick = event => {
    const editor = q('#specialDateTemplateEditorContent');
    const command = event.target.closest('[data-template-rich-command]');
    const action = event.target.closest('[data-template-rich-action]');
    if (command) { editor.focus(); document.execCommand(command.dataset.templateRichCommand, false, null); return; }
    if (!action) return;
    if (action.dataset.templateRichAction === 'image') return showToast('原型演示：正式接入后从本地相册选择图片');
    const url = window.prompt('请输入链接地址');
    if (!url) return;
    editor.focus();
    document.execCommand('insertHTML', false, '<a href="' + url.replace(/"/g, '&quot;') + '" target="_blank">' + esc(window.getSelection()?.toString() || url) + '</a>');
  };
  q('#specialDateTemplateEditorSize').onchange = event => {
    q('#specialDateTemplateEditorContent').focus();
    document.execCommand('fontSize', false, '7');
    qa('font[size="7"]', q('#specialDateTemplateEditorContent')).forEach(node => { node.removeAttribute('size'); node.style.fontSize = event.target.value + 'px'; });
  };
  q('#specialDateTemplateEditorColor').oninput = event => { q('#specialDateTemplateEditorContent').focus(); document.execCommand('foreColor', false, event.target.value); };
  q('#specialDateTemplateEditorSeconds').oninput = event => {
    const seconds = Math.max(0, Number(event.target.value) || 0);
    event.target.value = seconds;
    q('#specialDateTemplateEditorHint').textContent = '游客按钮统一显示“已读并确认以上内容（' + seconds + '）”，倒计时结束后可点击；允许点击遮罩关闭。';
  };
  q('#specialDateTemplateDelete').onclick = () => {
    if (!editingTemplateId || !specialActivity) return;
    const template = specialTemplates[editingTemplateId];
    const rules = specialRules[specialActivity.id] || {};
    const dates = Object.entries(rules).filter(([key, templateId]) => templateId === editingTemplateId && inRange(key)).map(([key]) => key);
    pendingTemplateDelete = { id: editingTemplateId, dates };
    q('#templateDeleteName').textContent = template.name;
    q('#templateDeleteImpact').textContent = '删除后将解除当前活动今天及以后的 ' + dates.length + ' 个日期关联；历史日期不受影响。该操作不可恢复。';
    openLayer('templateDelete');
  };
  q('#confirmTemplateDelete').onclick = () => {
    if (!pendingTemplateDelete || !specialActivity) { closeLayer('templateDelete'); return; }
    const { id, dates } = pendingTemplateDelete;
    const rules = specialRules[specialActivity.id] || {};
    dates.forEach(key => delete rules[key]);
    delete specialTemplates[id];
    persistSpecialDateData();
    pendingTemplateDelete = null;
    editingTemplateId = null;
    specialTemplate = null;
    closeLayer('templateDelete');
    navigate('specialDateTemplates');
    showToast('模板已删除，未来日期关联已解除');
  };
  q('#specialDateTemplateEditorSave').onclick = () => {
    const name = q('#specialDateTemplateEditorName').value.trim();
    const title = q('#specialDateTemplateEditorTitle').value.trim();
    const content = q('#specialDateTemplateEditorContent').innerHTML.trim();
    const seconds = Math.max(0, Number(q('#specialDateTemplateEditorSeconds').value) || 0);
    if (!name || !title || !hasNoticeContent(content)) return showToast('请完整填写模板名称、弹窗标题和内容');
    const duplicateName = templatesForCurrentActivity().some(([id, template]) => id !== editingTemplateId && template.name.trim() === name);
    if (duplicateName) return showToast('当前活动已存在同名提示模板，请修改名称');
    if (!editingTemplateId && templatesForCurrentActivity().length >= 10) return showToast('当前活动最多可创建 10 个提示模板');
    const id = editingTemplateId || `template_${Date.now()}`;
    specialTemplates[id] = { activityId: specialActivity?.id || specialTemplates[id]?.activityId || 1, name, title, content, seconds };
    persistSpecialDateData();
    editingTemplateId = null;
    navigate('specialDateTemplates');
    showToast('模板已保存');
  };
})();
