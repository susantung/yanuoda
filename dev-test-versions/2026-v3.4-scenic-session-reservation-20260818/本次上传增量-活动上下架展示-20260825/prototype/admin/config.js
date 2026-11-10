(() => {
  const q = (selector, root = document) => root.querySelector(selector);
  const qa = (selector, root = document) => [...root.querySelectorAll(selector)];
  const steps = [
    ['C01','基础信息'],['C02','必读须知'],['C03','项目配置'],['C04','日期与场次'],
    ['C05','展示设置'],['C06','游客预约配置'],['C07','活动发布']
  ];
  let stepIndex = 0;
  let isNewActivity = false;
  let stepDirty = false;
  const markDirty = (label='当前步骤未保存') => { stepDirty=true; q('#configSaveState').textContent=label; };
  window.configReturnPage = 'activities';
  const config = {
    noticeEnabled:true, noticeScope:'combined', noticeTitle:'溪降预约必读须知', noticeSeconds:3, dateMode:'custom', projectModuleEnabled:true, categoryEnabled:true, visitorCancel:true, bookingCutoffMode:'start', bookingCutoffValue:30, visitorCancelMode:'unlimited', visitorCancelValue:30,
    selectedDates:['2026-08-14','2026-08-15','2026-08-16','2026-08-22','2026-08-24','2026-08-25','2026-08-26','2026-08-27','2026-08-28','2026-08-29','2026-08-30','2026-08-31','2026-09-01','2026-09-02','2026-09-03','2026-09-04','2026-09-05'], dateBookedCounts:{'2026-08-22':2}, pausedDates:[], pendingRemovalDates:[], calendarMonth:'2026-08', sessionMonth:'2026-08', sessionOperationLogs:[], sessionTemplates:[{name:'溪降每日7场',sessions:[{name:'溪降1场',time:'09:30-10:30',limit:15,booked:0},{name:'溪降2场',time:'10:30-11:30',limit:15,booked:0},{name:'溪降3场',time:'11:30-12:30',limit:15,booked:0}]}], sessionModes:{'2026-08-22':{type:'configured',count:3,time:'09:30—12:30'},'2026-08-24':{type:'configured',count:3,time:'09:30—12:30'},'2026-08-25':{type:'configured',count:2,time:'10:00—12:00'},'2026-09-03':{type:'configured',count:2,time:'10:00—12:00'}}, showQuota:true, hideExpired:true,
    projectTheme:'选择体验线路', projectSessionQuotas:{}, projectSessionBooked:{},
    detailHtml:'<p>尊敬的游客，该门票包含“溪降”体验项目。为确保安全与体验质量，请提前选择预约时段，并仔细阅读预约说明。</p><img src="../../scenic-reservation/preview/assets/activity-source.jpg" alt="溪降项目环境示例图">', noticeHtml:'<p>当日部分区域有安全提示，请根据同行人员情况谨慎选择是否预约。</p><p>预约成功后请提前15分钟到达溪降接待处。</p>', draftLogo:null, draftCover:null,
    sessions:[
      {name:'溪降 1 场',time:'09:30-10:30',limit:15,booked:12,projectIds:[1,2],separateProjectQuota:true},
      {name:'溪降 2 场',time:'10:30-11:30',limit:15,booked:15,projectIds:[1,2],separateProjectQuota:false},
      {name:'溪降 3 场',time:'11:30-12:30',limit:15,booked:0,projectIds:[],separateProjectQuota:false}
    ],
    projects:[
      {id:1,name:'常规溪降 A 线',category:'常规溪降',image:true,description:'适合首次体验溪降的游客，全程由专业教练带领。',enabled:true,booked:8},
      {id:2,name:'常规溪降 B 线',category:'常规溪降',image:false,description:'适合亲友同行，路线节奏舒缓。',enabled:true,booked:0},
      {id:3,name:'VIP 私家团 A 线',category:'VIP私家团',image:false,description:'专属教练带队，提供更灵活的体验安排。',enabled:false,booked:3}
    ],
    categories:['常规溪降','VIP私家团'], categoryStates:{'常规溪降':true,'VIP私家团':true},
    fields:[
      {id:'name',name:'预约人姓名',type:'姓名',required:true,autoFill:true,badge:''},
      {id:'phone',name:'手机号码',type:'手机号',required:true,autoFill:true,badge:''},
      {id:'idNumber',name:'身份证号',type:'身份证号',required:false,badge:''},
      {id:'people',name:'实际参与人数',type:'多人/团体',required:true,minPeople:1,maxPeople:6,badge:'group'},
      {id:'singleChoice',name:'是否需要教练陪同',type:'单选',required:true,options:['需要教练陪同','无需教练陪同'],badge:''},
      {id:'multiChoice',name:'需要准备的装备',type:'多选',required:true,options:['儿童护具','成人防滑鞋','防水储物袋'],minSelect:2,maxSelect:3,badge:''},
      {id:'customNumber',name:'同行儿童人数',type:'数字',required:false,maxDigits:15,badge:''},
      {id:'customDate',name:'预计到达日期',type:'日期',required:false,format:'ymd',badge:''},
      {id:'singleText',name:'集合地点',type:'单行文本',required:false,maxLength:50,badge:''},
      {id:'multiText',name:'其他需求说明',type:'多行文本',required:false,maxLength:200,badge:''}
    ]
  };
  const fieldIdFor = (field,index=0) => field.id || ({'姓名':'name','手机号':'phone','身份证号':'idNumber','多人/团体':'people'}[field.type] || `custom-${field.type}-${index}`);
  window.getCurrentReservationFieldConfig = () => config.fields.map((field,index)=>({...field,id:fieldIdFor(field,index),options:field.options?[...field.options]:undefined}));
  config.sessionsByDate={
    '2026-08-16':[
      {name:'历史上午场',time:'10:00-11:00',limit:15,booked:8,projectIds:[1,2],separateProjectQuota:false},
      {name:'历史中午场',time:'11:00-12:00',limit:15,booked:15,projectIds:[1,2],separateProjectQuota:false}
    ],
    '2026-08-22':config.sessions.map(item=>({...item})),
    '2026-08-24':config.sessions.map(item=>({...item,booked:0})),
    '2026-08-25':[
      {name:'雨林溪降上午体验场次',time:'10:00-11:00',limit:12,booked:0},
      {name:'中午场',time:'11:00-12:00',limit:12,booked:0}
    ],
    '2026-09-03':[
      {name:'上午场',time:'10:00-11:00',limit:12,booked:0},
      {name:'中午场',time:'11:00-12:00',limit:12,booked:0}
    ]
  };
  const activityHasBookings = () => Object.values(config.dateBookedCounts).some(Number)||config.projects.some(item=>item.booked>0);
  let savedConfigSnapshot = JSON.stringify(config);
  let savedActivitySnapshot = '';
  function restoreActivityDraft(target,saved){
    if(!target||!saved)return;
    const operationalStats={totalPeople:target.totalPeople,todayPeople:target.todayPeople};
    Object.assign(target,saved,operationalStats);
  }
  function captureSavedState(){savedConfigSnapshot=JSON.stringify(config);savedActivitySnapshot=JSON.stringify(currentActivity||{});}
  function restoreSavedState(){const restored=JSON.parse(savedConfigSnapshot);Object.keys(config).forEach(key=>delete config[key]);Object.assign(config,restored);if(savedActivitySnapshot&&currentActivity)Object.assign(currentActivity,JSON.parse(savedActivitySnapshot));stepDirty=false;q('#configSaveState').textContent='配置已保存';}
  function requestLeave(action){
    if(stepDirty)restoreSavedState();
    action();
  }

  const heading = (index, description) => `<header class="config-page-title"><div><i>${steps[index][0]}</i><h2>${steps[index][1]}</h2></div><p>${description}</p></header>`;
  const switchRow = (key, title, note, on=config[key]) => `<div class="switch-row"><div><b>${title}</b><span>${note}</span></div><button class="mini-switch ${on?'on':''}" data-switch="${key}" aria-label="${title}"></button></div>`;
  const choice = (name, value, title, note, checked, disabled=false) => `<label class="choice-card ${disabled?'choice-card-disabled':''}"><input type="radio" name="${name}" value="${value}" ${checked?'checked':''} ${disabled?'disabled':''}><b>${title}</b><span>${note}</span></label>`;
  const selectionCalendar = () => {
    const [year,month]=config.calendarMonth.split('-').map(Number);
    const firstWeekday=(new Date(year,month-1,1).getDay()+6)%7;
    const dayCount=new Date(year,month,0).getDate();
    const blanks=Array.from({length:firstWeekday},()=>'<span class="calendar-day calendar-blank" aria-hidden="true"></span>').join('');
    const days=Array.from({length:dayCount},(_,index)=>{
      const day=index+1;
      const date=`${year}-${String(month).padStart(2,'0')}-${String(day).padStart(2,'0')}`;
      const past=date<'2026-08-18';
      const booked=(config.dateBookedCounts[date]||0)>0;
      const paused=config.pausedDates.includes(date);
      return `<button class="calendar-day ${config.selectedDates.includes(date)?'selected':''} ${past?'past':''} ${booked?'booked':''} ${paused?'paused':''}" data-calendar-date="${date}" ${booked?`data-booked-date="${date}"`:''} ${past?'disabled':''}>${day}</button>`;
    }).join('');
    return `<div class="calendar-month"><button data-calendar-month-shift="-1">‹ 上月</button><b>${year}年${month}月</b><button data-calendar-month-shift="1">下月 ›</button></div><div class="calendar-grid"><span>一</span><span>二</span><span>三</span><span>四</span><span>五</span><span>六</span><span>日</span>${blanks}${days}</div>`;
  };
  const categoryIsEnabled = name => config.categoryStates?.[name]!==false;
  const enabledProjects = () => config.projectModuleEnabled?config.projects.filter(item=>item.enabled&&(!item.category||categoryIsEnabled(item.category))):[];
  const displayInitial = name => (String(name||'项').trim().charAt(0)||'项').toUpperCase();
  const visitorBase = window.adminVisitorBase || '../../scenic-reservation/preview';
  const assetUrl = value => window.resolveAdminAsset?.(value)||value;
  const normalizeRichAssetPaths = html => String(html||'').replace(/(?:\.\.\/)+(?:scenic-reservation\/preview|visitor)\/assets\/([^"']+)/g,`${visitorBase}/assets/$1`);
  const dragHandle = kind => `<button class="sort-drag-handle" data-sort-handle="${kind}" aria-label="按住拖动排序"><i></i><i></i><i></i></button>`;
  const projectRows = () => config.projects.map((item,index)=>`<article class="project-summary project-manage-card" data-sort-item="project" data-sort-id="${item.id}">${dragHandle('project')}<div class="project-card-body"><div class="project-card-summary">${item.image?`<img src="${typeof item.image==='string'?assetUrl(item.image):assetUrl('../../scenic-reservation/preview/assets/activity-hero.jpg')}" alt="项目图片">`:`<span class="project-placeholder project-initial">${displayInitial(item.name)}</span>`}<div class="project-main"><div class="project-title-row"><b title="${item.name}">${item.name}</b><i class="project-status ${item.enabled?'visible':''}">${item.enabled?'展示中':'已隐藏'}</i></div>${item.description?`<span class="project-description">${item.description}</span>`:'<span class="project-description empty">未填写简介</span>'}</div></div><div class="project-row-actions"><button class="project-state-action ${item.enabled?'is-on':''}" data-toggle-project="${index}">${item.enabled?'禁用':'启用'}</button><button data-edit-project="${index}">编辑</button>${item.booked?'<small>有预约不可删除</small>':`<button class="danger-link" data-delete-project="${index}">删除</button>`}</div></div></article>`).join('');
  const categoryRows = () => config.categories.map((name,index)=>{const count=config.projects.filter(item=>item.category===name).length;const enabled=categoryIsEnabled(name);return `<div class="category-row ${enabled?'':'is-disabled'}" data-sort-item="category" data-sort-id="${encodeURIComponent(name)}">${dragHandle('category')}<div><div class="category-name-line"><b>${name}</b><i class="project-status ${enabled?'visible':''}">${enabled?'启用中':'已禁用'}</i></div><span>${count}个项目${enabled?'':' · 该分类项目不对游客展示'}</span></div><div class="category-actions"><button class="project-state-action ${enabled?'is-on':''}" data-toggle-category="${index}">${enabled?'禁用':'启用'}</button><button data-category-edit="${index}">编辑</button><button class="danger-link" data-category-delete="${index}">删除</button></div></div>`;}).join('');
  const normalizedCategoryName = name => String(name||'').trim().replace(/\s+/g,'').toLocaleLowerCase();
  const categoryNameExists = (name,ignoreIndex=-1) => config.categories.some((item,index)=>index!==ignoreIndex&&normalizedCategoryName(item)===normalizedCategoryName(name));
  const sessionStartMinutes = session => {const start=String(session?.time||'').split('-')[0];const [hour,minute]=start.split(':').map(Number);return Number.isFinite(hour)&&Number.isFinite(minute)?hour*60+minute:Number.MAX_SAFE_INTEGER;};
  const sortSessions = sessions => sessions.sort((a,b)=>sessionStartMinutes(a)-sessionStartMinutes(b));
  const ensureSessionIds = (date,sessions) => sessions.forEach((session,index)=>{if(!session.id)session.id=`${date}-session-${index+1}-${sessionStartMinutes(session)}`;});
  const sessionProjectKey = (date,sessionRef,projectId) => {const session=typeof sessionRef==='number'?(config.sessionsByDate[date]||[])[sessionRef]:sessionRef;const sessionId=typeof session==='object'?(session.id||`session-${sessionStartMinutes(session)}`):String(session||'session');return `${date}|${sessionId}|${projectId}`;};
  Object.entries(config.sessionsByDate).forEach(([date,sessions])=>ensureSessionIds(date,sessions));
  {
    const bookedSession=config.sessionsByDate['2026-08-22'][0];
    config.projectSessionQuotas[sessionProjectKey('2026-08-22',bookedSession,1)]=8;
    config.projectSessionQuotas[sessionProjectKey('2026-08-22',bookedSession,2)]=7;
    config.projectSessionBooked[sessionProjectKey('2026-08-22',bookedSession,1)]=7;
    config.projectSessionBooked[sessionProjectKey('2026-08-22',bookedSession,2)]=5;
    const futureSeparateSession=config.sessionsByDate['2026-08-24'][0];
    config.projectSessionQuotas[sessionProjectKey('2026-08-24',futureSeparateSession,1)]=8;
    config.projectSessionQuotas[sessionProjectKey('2026-08-24',futureSeparateSession,2)]=7;
  }
  const cloneDateSessions = (sourceDate,targetDate) => {
    const source=config.sessionsByDate[sourceDate]||[];ensureSessionIds(sourceDate,source);
    const stamp=Date.now();
    const cloned=source.map((item,index)=>({...item,id:`${targetDate}-copy-${stamp}-${index}`,booked:0,projectIds:[...(item.projectIds||[])]}));
    cloned.forEach((target,index)=>{
      if(!target.separateProjectQuota)return;
      (target.projectIds||[]).forEach(projectId=>{
        const project=config.projects.find(item=>item.id===projectId);if(!project)return;
        const sourceKey=sessionProjectKey(sourceDate,source[index],project.id);
        const targetKey=sessionProjectKey(targetDate,target,project.id);
        if(Object.prototype.hasOwnProperty.call(config.projectSessionQuotas,sourceKey))config.projectSessionQuotas[targetKey]=config.projectSessionQuotas[sourceKey];
      });
    });
    return cloned;
  };
  // 历史场次必须按当时保存的关联关系回显；项目后来被禁用时仍在配置中留痕，不能因保存操作被误删。
  const sessionProjectItems = session => config.projects.filter(item=>(session?.projectIds||[]).includes(item.id));
  const sessionProjectRows = (date,sessionIndex,session) => {
    const projects=sessionProjectItems(session);ensureSessionIds(date,config.sessionsByDate[date]||[]);
    if(!projects.length)return '';
    const rows=projects.map(project=>{const key=sessionProjectKey(date,session,project.id);const booked=config.projectSessionBooked[key]||0;const quota=config.projectSessionQuotas[key];return `<div class="session-project-row"><span class="session-project-initial">${displayInitial(project.name)}</span><div><b title="${project.name}">${project.name}</b><small>${booked?`已预约 ${booked} 人`:'暂无预约'}</small></div><label class="session-project-quota"><input data-session-project-quota data-date="${date}" data-session="${session.id}" data-project="${project.id}" type="number" min="${Math.max(1,booked)}" inputmode="numeric" value="${quota??''}" placeholder="不限额"><span>名额</span></label></div>`;}).join('');
    return `<div class="session-project-panel"><div class="session-project-panel-head"><b>场次项目与名额</b><span>${session.separateProjectQuota?'单独项目名额':'共用场次库存'}</span></div>${rows}</div>`;
  };
  const projectSetupFields = (prefix,session=null) => {
    if(!config.projectModuleEnabled)return '';
    const activeProjects=enabledProjects();
    const associated=session?[...(session.projectIds||[])]:activeProjects.map(item=>item.id);
    // 编辑已有场次时：当前启用项目可供新增关联，历史已关联项目即使现在禁用也必须显示并保留勾选。
    // 新建场次时：只列出当前启用项目，并默认勾选；取消全部后，游客端不展示项目选择。
    const projects=session?config.projects.filter(item=>activeProjects.includes(item)||associated.includes(item.id)):activeProjects;
    if(!projects.length)return '<p class="config-hint warn">请先在项目配置中启用至少一个项目</p>';
    const locked=Boolean(session?.booked);
    const rows=projects.map(project=>{const checked=associated.includes(project.id);const key=session?sessionProjectKey(window.editingSessionDate,session,project.id):'';const booked=key?(config.projectSessionBooked[key]||0):0;const quota=key?config.projectSessionQuotas[key]:undefined;const historicalDisabled=!activeProjects.includes(project)&&checked;const disabled=locked||historicalDisabled;const state=historicalDisabled?'已禁用，保留历史关联':booked?`已预约 ${booked} 人`:'暂无预约';return `<div class="session-project-select-row"><label title="${project.name}"><input type="checkbox" data-project-association="${prefix}" value="${project.id}" ${checked?'checked':''} ${disabled?'disabled':''}><b>${project.name}</b></label><small>${state}</small><input class="project-setup-quota" data-project-setup-quota="${project.id}" type="number" min="${Math.max(1,booked)}" inputmode="numeric" value="${quota??''}" placeholder="必填名额" ${disabled?'disabled':''}></div>`;}).join('');
    const shared=!session?.separateProjectQuota;
    const hint=locked?'已有预约，关联项目和库存方式已锁定':session?'已按该场次历史保存的关联项目回显；之后启用的新项目默认不关联':'新建场次默认勾选当前全部启用项目；可取消勾选';
    return `<section class="session-project-setup ${shared?'':'is-separate'}"><label class="separate-project-quota inventory-mode-first"><span><b>已选项目共用场次库存</b><small>默认勾选；取消后分别设置各项目名额</small></span><input id="${prefix}ShareProjectInventory" type="checkbox" ${shared?'checked':''} ${locked?'disabled':''}></label><div class="session-project-setup-head"><b>关联项目</b><span>${hint}</span></div><div class="session-project-select-list">${rows}</div><div id="${prefix}ProjectQuotaPanel" class="quick-project-quota-panel" ${shared?'hidden':''}><div class="project-quota-total"><span>场次总名额</span><b id="${prefix}ProjectQuotaTotal">0 名</b><small id="${prefix}ProjectQuotaPending"></small></div></div></section>`;
  };
  const readProjectSetup = (prefix,session=null) => {
    if(!config.projectModuleEnabled)return {projectIds:[],separateProjectQuota:false,quotas:{}};
    const projectIds=qa(`[data-project-association="${prefix}"]:checked`,q('#configSheet')).map(input=>Number(input.value));
    const separate=projectIds.length>0&&!Boolean(q(`#${prefix}ShareProjectInventory`)?.checked);
    const quotas={};qa('[data-project-setup-quota]',q('#configSheet')).forEach(input=>{if(projectIds.includes(Number(input.dataset.projectSetupQuota))&&input.value!=='')quotas[input.dataset.projectSetupQuota]=Number(input.value);});
    return {projectIds,separateProjectQuota:separate,quotas};
  };
  const fieldRuleSummary = field => {
    const parts=[field.required?'必填':'选填'];
    if(['姓名','手机号'].includes(field.type))parts.push('自动填充');
    if(field.type==='手机号')parts.push('支持微信授权加载');
    if(field.type==='身份证号')parts.push('大陆身份证格式校验');
    if(field.type==='数字')parts.push('仅整数');
    if(field.type==='单选')parts.push(`${(field.options||[]).length||2}个下拉选项`);
    if(field.type==='多选')parts.push(`最少选${field.minSelect??(field.required?2:0)}项`,`最多选${field.maxSelect||'全部'}项`);
    if(field.type==='日期')parts.push(field.dateFormat==='datetime'?'年月日＋时间':'年月日');
    if(field.type==='多人/团体')parts.push(`1—${field.maxPeople||6}人`);
    return parts.join(' · ');
  };
  const defaultFieldForType = type => {
    const defaults={
      '姓名':{name:'预约人姓名',required:true,autoFill:true},
      '手机号':{name:'手机号码',required:true,autoFill:true},
      '身份证号':{name:'身份证号',required:false},
      '单行文本':{name:'单行文本',required:false,maxLength:50},
      '多行文本':{name:'多行文本',required:false,maxLength:200},
      '数字':{name:'数字',required:false,digitLimit:15,integerOnly:true},
      '单选':{name:'单选',required:false,options:['选项一','选项二'],selectMode:'dropdown'},
      '多选':{name:'多选',required:true,options:['选项一','选项二'],minSelect:2,maxSelect:2},
      '日期':{name:'日期',required:false,dateFormat:'date'},
      '多人/团体':{name:'实际参与人数',required:true,minPeople:1,maxPeople:6,badge:'group'}
    };
    return {type,badge:'',...(defaults[type]||{name:type,required:false})};
  };
  const syncFieldDraftFromSheet = () => {
    const draft=window.fieldDraft;if(!draft)return;
    const name=q('#sheetFieldName');if(name)draft.name=name.value;
    const required=q('#sheetFieldRequired');if(required)draft.required=required.checked;
    const maxLength=q('#sheetFieldMaxLength');if(maxLength)draft.maxLength=Number(maxLength.value)||1;
    const digitLimit=q('#sheetFieldDigitLimit');if(digitLimit)draft.digitLimit=Number(digitLimit.value)||1;
    const minSelect=q('#sheetFieldMinSelect');if(minSelect)draft.minSelect=Number(minSelect.value)||0;
    const maxSelect=q('#sheetFieldMaxSelect');if(maxSelect)draft.maxSelect=Number(maxSelect.value)||1;
    const maxPeople=q('#sheetFieldMaxPeople');if(maxPeople)draft.maxPeople=Number(maxPeople.value)||1;
    const options=qa('[data-field-option-input]',q('#configSheet'));if(options.length)draft.options=options.map(input=>input.value.trim());
  };
  const fieldOptionEditor = draft => `<div class="field-option-editor"><div class="field-option-head"><b>选项</b><span>至少配置2项</span></div>${(draft.options||[]).map((option,index)=>`<div class="field-option-row"><input data-field-option-input data-field-option-index="${index}" maxlength="50" value="${option}" placeholder="请输入选项"><button class="danger-link" data-remove-field-option="${index}" ${draft.options.length<=2?'disabled':''}>删除</button></div>`).join('')}<button class="config-outline-button compact-outline" data-add-field-option>＋ 添加选项</button></div>`;
  const fieldSpecificEditor = draft => {
    if(draft.type==='单行文本')return `<label class="config-field"><span>字数限制 <small>最多50字</small></span><input id="sheetFieldMaxLength" type="number" min="1" max="50" inputmode="numeric" value="${draft.maxLength||50}"></label>`;
    if(draft.type==='多行文本')return `<label class="config-field"><span>字数限制 <small>最多200字</small></span><input id="sheetFieldMaxLength" type="number" min="1" max="200" inputmode="numeric" value="${draft.maxLength||200}"></label>`;
    if(draft.type==='数字')return `<label class="config-field"><span>位数限制 <small>仅允许非负整数</small></span><input id="sheetFieldDigitLimit" type="number" min="1" max="15" inputmode="numeric" value="${draft.digitLimit||15}"></label>`;
    if(draft.type==='单选')return `<div class="fixed-setting-row"><span>游客端选择方式</span><b>下拉框</b></div>${fieldOptionEditor(draft)}`;
    if(draft.type==='多选')return `${fieldOptionEditor(draft)}<div class="two-fields"><label class="config-field"><span>最少选择</span><input id="sheetFieldMinSelect" type="number" min="0" max="${(draft.options||[]).length}" inputmode="numeric" value="${draft.minSelect??(draft.required?2:0)}"></label><label class="config-field"><span>最多选择</span><input id="sheetFieldMaxSelect" type="number" min="1" max="${(draft.options||[]).length}" inputmode="numeric" value="${draft.maxSelect||draft.options?.length||2}"></label></div>`;
    if(draft.type==='日期')return `<div class="fixed-setting-row"><span>日期格式</span><b>年月日</b></div>`;
    if(draft.type==='多人/团体')return `<div class="two-fields"><label class="config-field"><span>最少人数</span><input type="number" value="1" disabled></label><label class="config-field"><span>最多人数</span><input id="sheetFieldMaxPeople" type="number" min="1" inputmode="numeric" value="${draft.maxPeople||6}"></label></div>`;
    if(draft.type==='姓名')return `<div class="fixed-setting-row"><span>自动填充</span><b>默认加载最近填写姓名</b></div>`;
    if(draft.type==='手机号')return `<div class="fixed-setting-row"><span>自动填充</span><b>默认加载，可使用微信授权手机号</b></div>`;
    if(draft.type==='身份证号')return `<div class="fixed-setting-row"><span>格式校验</span><b>中国大陆身份证号码</b></div>`;
    return '';
  };
  function openFieldEditor(index=null,type=null,draftOverride=null){
    const source=draftOverride||(index===null?defaultFieldForType(type):config.fields[index]);
    window.fieldDraft=JSON.parse(JSON.stringify(source));window.editingFieldIndex=index;
    const draft=window.fieldDraft;
    const fixedRequired=['姓名','多人/团体'].includes(draft.type);
    openSheet(`<h2>${index===null?'添加':'编辑'}${draft.type}</h2><label class="config-field"><span>填写项名称 <small><b class="required">*</b></small></span><input id="sheetFieldName" type="text" maxlength="18" value="${draft.name||''}"></label><label class="config-field"><span>填写项类型</span><input type="text" value="${draft.type}" disabled></label>${fieldSpecificEditor(draft)}<label class="field-required-row"><span><b>是否必填</b><small>${draft.type==='姓名'?'预约列表主显示字段，固定必填':draft.type==='多人/团体'?'多人统计控件固定必填':'游客提交时是否必须填写'}</small></span><input id="sheetFieldRequired" type="checkbox" ${fixedRequired||draft.required?'checked':''} ${fixedRequired?'disabled':''}></label><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-save-field-editor>${index===null?'确认添加':'保存填写项'}</button></div>`);
  }
  const publishChecks = () => {
    const futureDates=config.selectedDates.filter(date=>date>='2026-08-18');
    const configuredDates=futureDates.filter(date=>(config.sessionsByDate[date]||[]).length);
    const overallProjects=enabledProjects();
    const projectSessions=config.projectModuleEnabled?configuredDates.flatMap(date=>(config.sessionsByDate[date]||[]).map(session=>({date,session}))):[];
    const projectSessionReady=overallProjects.length>0;
    const quotaSafe=projectSessions.every(({date,session})=>!session.separateProjectQuota||(session.projectIds||[]).every(projectId=>{const key=sessionProjectKey(date,session,projectId);const quota=config.projectSessionQuotas[key],booked=config.projectSessionBooked[key]||0;return Number.isFinite(quota)&&quota>0&&quota>=booked;}));
    return [
      ['基础资料',!!String(currentActivity?.name||'').trim(),'活动名称已填写'],
      (()=>{const title=String(config.noticeTitle||'').trim();const content=String(config.noticeHtml||'').replace(/<[^>]*>/g,'').trim();const complete=Boolean(title)===Boolean(content);return ['必读须知',!config.noticeEnabled||complete,!config.noticeEnabled?'未启用，无需检查':title&&content?'已配置默认全局提示；特殊日期可另行配置':'未配置默认全局提示；仅命中特殊日期时展示'];})(),
      ['开放日期',configuredDates.length>0,configuredDates.length?`已配置 ${configuredDates.length} 个未来日期`:'至少配置 1 个未来日期及场次'],
      ['场次时间',configuredDates.every(date=>(config.sessionsByDate[date]||[]).every(session=>/^\d{2}:\d{2}/.test(session.time))), '所有场次均有开始时间'],
      ['项目配置',!config.projectModuleEnabled||overallProjects.length>0,config.projectModuleEnabled?`总体启用 ${overallProjects.length} 个项目`:'项目模块已关闭'],
      ['场次项目',!config.projectModuleEnabled||(projectSessionReady&&quotaSafe),!config.projectModuleEnabled?'仅使用场次库存':projectSessionReady&&quotaSafe?'关联项目与库存模式有效':'请检查项目关联和项目名额'],
      ['游客资料',config.fields.some(field=>field.type==='姓名'&&field.required),config.fields.some(field=>field.type==='姓名'&&field.required)?'已配置必填姓名字段':'必须配置 1 个必填的姓名类型字段'],
      ['唯一资料类型',['姓名','手机号','身份证号'].every(type=>config.fields.filter(field=>field.type===type).length<=1),['姓名','手机号','身份证号'].every(type=>config.fields.filter(field=>field.type===type).length<=1)?'姓名、手机号、身份证号各不超过1份':'姓名、手机号、身份证号类型不能重复'],
      ['人数统计',config.fields.filter(field=>field.type==='多人/团体').length<=1,config.fields.some(field=>field.type==='多人/团体')?'多人统计模式，最少 1 人':'单人统计模式'],
      ['开放与取消规则',config.bookingCutoffMode!=='advance'||config.bookingCutoffValue>0,config.bookingCutoffMode==='advance'?`预约提前 ${config.bookingCutoffValue} 分钟截止`:`预约截止：${config.bookingCutoffMode==='unlimited'?'不限制':'到场次开始时间'}`],
      ['游客取消规则',!config.visitorCancel||config.visitorCancelMode!=='advance'||config.visitorCancelValue>0,!config.visitorCancel?'游客不可自行取消':config.visitorCancelMode==='advance'?`场次开始前 ${config.visitorCancelValue} 分钟截止取消`:`取消截止：${config.visitorCancelMode==='unlimited'?'不限制':'到场次开始时间'}`]
    ];
  };

  const views = [
    () => `${heading(0,'维护活动名称、LOGO、图文详情与游客咨询方式。')}
      <section class="config-card"><h3>活动资料</h3>
        <label class="config-field"><span>活动名称 <small><b class="required">*</b> 30字内</small></span><input id="cfgActivityName" type="text" maxlength="30" value="${currentActivity?.name||'呀诺达溪降体验预约'}"></label>
        <div class="config-field"><span>活动LOGO <small>选填 · 建议400×400px</small></span>${config.draftLogo?`<div class="upload-cover logo-upload"><img src="${config.draftLogo}" alt="活动LOGO"></div><div class="date-toolbar"><button data-config-action="replaceLogo">更换LOGO</button><button data-config-action="removeLogo">删除LOGO</button></div>`:`<div class="logo-empty-wrap"><button class="upload-cover logo-upload logo-empty" data-config-action="replaceLogo"><i>＋</i><b>上传活动LOGO</b></button><small class="logo-empty-note">未上传时，活动列表显示活动名称首字</small></div>`}</div>
        <div class="config-field"><span>封面图片 <small>选填 · 建议750×420px</small></span>${config.draftCover?`<div class="upload-cover cover-upload"><img src="${config.draftCover}" alt="活动封面图片"></div><div class="date-toolbar"><button data-config-action="replaceCover">更换封面</button><button data-config-action="removeCover">删除封面</button></div>`:`<button class="upload-cover cover-upload logo-empty" data-config-action="replaceCover"><i>＋</i><b>上传封面图片</b></button>`}</div>
        <label class="config-field"><span>封面标签 <small>选填 · 16字内</small></span><input id="cfgHeroBadge" type="text" maxlength="16" value="${currentActivity?.heroBadge||''}" placeholder="如：无需验票 · 免费预约"></label>
        <label class="config-field"><span>封面副标题 <small>选填 · 40字内</small></span><input id="cfgHeroSubtitle" type="text" maxlength="40" value="${currentActivity?.heroSubtitle||''}" placeholder="补充一句活动说明"></label>
        <div class="config-field"><span>详情介绍 <small>选填 · 图文内容</small></span>
          <div class="rich-tools" role="toolbar" aria-label="详情介绍编辑工具">
            <select class="rich-size" data-rich-size aria-label="字体大小"><option value="11">11px</option><option value="12">12px</option><option value="14">14px</option><option value="16" selected>16px</option><option value="18">18px</option><option value="24">24px</option></select>
            <label class="rich-color" title="文字颜色"><input type="color" data-rich-color value="#1f2329"><span>A</span></label>
            <button type="button" data-rich-command="bold" aria-label="加粗"><b>B</b></button>
            <button type="button" data-rich-action="image" class="rich-tool-wide">插入图片</button>
            <button type="button" data-rich-action="link" class="rich-tool-wide">插入链接</button>
          </div>
          <div id="cfgDetailEditor" class="rich-editor rich-editor-content" contenteditable="true" data-placeholder="请输入活动详情，可设置文字大小、颜色并插入图片和链接">${config.detailHtml}</div>
        </div>
      </section>
      <section class="config-card"><h3>联系方式</h3><div class="two-fields"><label class="config-field"><span>联系人</span><input id="cfgContactName" type="text" value="${currentActivity?.contactName||''}"></label><label class="config-field"><span>联系电话</span><input id="cfgContactPhone" type="tel" value="${currentActivity?.contactPhone||''}"></label></div><p class="config-hint">联系方式将展示在游客端活动详情中，便于游客咨询。</p></section>`,

    () => `${heading(1,'每个活动可配置一份默认提示；特殊日期命中时优先展示日期提示。')}
      <section class="config-card"><h3>展示规则</h3>${switchRow('noticeEnabled','展示必读须知','关闭后游客选择日期时不展示须知')}
        ${config.noticeEnabled?'<div class="notice-rule-summary"><div class="notice-rule-global"><b>全局弹窗提示</b><span>填写下方标题和内容后，游客每次选择任意日期，都会弹出这份须知。</span></div><div class="notice-rule-special"><b>特殊日期覆盖提示</b><span>在工作台“特殊提示日期管理”中配置；游客选择命中日期时，优先弹出该日期的特殊提示。</span></div></div><p class="config-hint notice-rule-note"><b>仅做特殊日期提示：</b>下方标题和内容均可留空。<br><b>两种提示同时使用：</b>填写下方内容，并配置特殊日期。</p>':''}
      </section>
      ${config.noticeEnabled?`<section class="config-card"><h3>须知内容</h3><label class="config-field"><span>弹窗标题</span><input id="cfgNoticeTitle" type="text" value="${config.noticeTitle}"></label><div class="config-field"><span>须知内容 <small>图文内容</small></span><div class="rich-tools" role="toolbar" aria-label="必读须知编辑工具"><select class="rich-size" data-rich-size aria-label="字体大小"><option value="11">11px</option><option value="12">12px</option><option value="14">14px</option><option value="16" selected>16px</option><option value="18">18px</option><option value="24">24px</option></select><label class="rich-color" title="文字颜色"><input type="color" data-rich-color value="#1f2329"><span>A</span></label><button type="button" data-rich-command="bold" aria-label="加粗"><b>B</b></button><button type="button" data-rich-action="image" class="rich-tool-wide">插入图片</button><button type="button" data-rich-action="link" class="rich-tool-wide">插入链接</button></div><div id="cfgNoticeEditor" class="rich-editor rich-editor-content" contenteditable="true" data-placeholder="请输入须知内容，可设置文字大小、颜色并插入图片和链接">${config.noticeHtml}</div></div><label class="config-field"><span>阅读时长 <small>游客需等待后确认</small></span><div class="two-fields"><input id="cfgNoticeSeconds" type="number" min="0" value="${config.noticeSeconds}"><select disabled><option>秒</option></select></div></label><p class="config-hint">游客按钮统一显示“已读并确认以上内容（${config.noticeSeconds}）”，倒计时结束后可点击；允许点击遮罩关闭。</p></section>`:''}`,

    () => `${heading(3,'在同一页配置开放日期、各日期场次及场次项目名额。')}
      <section class="config-card"><h3>日期模式</h3><div class="choice-grid">${choice('dateMode','custom','自选可约日期','月历单点选择不连续日期，或批量选择连续范围',true)}${choice('dateMode','weekly','每周规律循环-敬请期待','后续版本开放',false,true)}</div></section>
      <section class="config-card"><h3>选择可约日期</h3>${selectionCalendar()}<div class="date-operation-grid two-actions"><button data-config-action="dateRange"><b>添加连续日期</b><span>按开始、截止日期添加</span></button><button data-config-action="removeDateRange"><b>删除连续日期</b><span>按开始、截止日期删除</span></button></div><p class="config-hint change-scope-note">已有预约只代表该日期受保护，不代表本次一定会修改。系统只在你确认具体日期或应用范围后，校验实际受影响的日期。</p><div class="calendar-legend"><span><i class="legend-unselected"></i><b>未选择</b> 点击后加入</span><span><i class="legend-selected"></i><b>已选择</b> 再点即可取消</span><span><i class="legend-past"></i><b>历史日期</b> 仅供查看</span><span><i class="legend-booked"></i><b>已有预约</b> 受影响时才需处理</span></div></section>
      <section class="config-card session-config-card"><div class="session-config-title"><div><h3>各日期场次</h3><p>本月 ${config.selectedDates.filter(date=>date.startsWith(config.sessionMonth)&&date>='2026-08-17').length} 个可约日期</p></div></div><div class="month-list-head"><button data-session-month-shift="-1">‹ 上月</button><b>${Number(config.sessionMonth.slice(0,4))}年${Number(config.sessionMonth.slice(5))}月</b><button data-session-month-shift="1">下月 ›</button></div><div class="date-session-list">${config.selectedDates.filter(date=>date.startsWith(config.sessionMonth)&&date>='2026-08-17').map(date=>{const day=Number(date.slice(-2));const month=Number(date.slice(5,7));const sessions=config.sessionsByDate[date]||[];const mode=sessions.length?{count:sessions.length,time:sessionTimeSummary(sessions)}:null;const booked=config.dateBookedCounts[date]||0;const paused=config.pausedDates.includes(date);const status=paused?'已暂停':booked?'已有预约':'已配置';const statusClass=paused?'paused-tag':booked?'locked-tag':'configured-tag';return `<button class="date-session-row ${paused?'paused-row':booked?'locked-row':''}" data-session-date="${date}"><span class="date-badge"><b>${day}</b><small>${month}月</small></span><span class="date-session-main">${mode?`<b>${mode.count}个场次 <i class="${statusClass}">${status}</i></b><small>${mode.time}${booked?` · ${booked}笔预约`:''}</small>`:'<b>未配置场次 <i class="empty-tag">待配置</i></b><small>点击进入配置，或复用其他日期</small>'}</span><span class="row-chevron">›</span></button>`;}).join('')||'<div class="month-empty">本月暂无已选可约日期</div>'}</div><p class="config-hint">先配置任意一天；其他日期相同时，从该日期复制到目标范围。复制后各日期独立维护。</p></section>`,

    () => `${heading(4,'控制游客端剩余名额以及已截止日期、场次的展示方式。')}
      <section class="config-card"><h3>游客端场次展示</h3>${switchRow('showQuota','向游客展示剩余名额','开启后日期、场次和项目显示“剩余 X 名”或“不限额”；关闭后仅显示“可预约”')}${switchRow('hideExpired','隐藏已截止日期和场次','开启后隐藏已截止场次；当天全部场次截止后，当天日期一并隐藏')}<p class="selection-rule-tip"><i>i</i>每次预约固定选择 1 个场次</p></section>`,

    () => `${heading(2,'先配置项目资料和分类，再进入日期与场次设置。')}
      <section class="config-card project-overview-card"><h3>项目模块</h3><div class="switch-row"><div><b>启用项目模块</b><span>${activityHasBookings()?'当前活动已有预约，项目模块状态不可修改':'活动产生预约后，项目模块状态将锁定，不能再切换'}</span></div><button class="mini-switch ${config.projectModuleEnabled?'on':''} ${activityHasBookings()?'is-locked':''}" data-switch="projectModuleEnabled" ${activityHasBookings()?'disabled':''} aria-label="启用项目模块"></button></div>${config.projectModuleEnabled?`<label class="config-field project-theme-field"><span>模块名称 <small><b class="required">*</b> 游客端标题</small></span><input id="projectThemeInput" type="text" value="${config.projectTheme}"></label><p class="selection-rule-tip"><i>i</i>场次可关联一个或多个项目；未关联项目时仍使用场次库存</p>`:`<p class="selection-rule-tip"><i>i</i>游客端不展示项目选择，所有场次只使用场次库存</p>`}</section>
      ${config.projectModuleEnabled?`<section class="config-card"><div class="config-card-head"><div><h3>项目列表 <small>${config.projects.length}项</small></h3></div><button class="compact-add-button" data-config-action="addProject">＋ 添加项目</button></div>${projectRows()||'<div class="project-empty"><b>尚未添加项目</b><span>请先添加并启用至少一个项目</span></div>'}</section>
      <section class="config-card"><h3>项目分类</h3>${switchRow('categoryEnabled','启用项目分类','关闭后展示中的项目直接平铺')}${config.categoryEnabled?`<div class="category-compact-list">${categoryRows()}</div><button class="config-outline-button compact-outline" data-config-action="addCategory">＋ 新增分类</button>`:''}</section>
      `:''}`,

    () => `${heading(5,'配置游客填写项、人员统计方式、预约开放截止和取消规则。')}
      <section class="config-card"><h3>游客填写项 <small>拖动排序</small></h3>${config.fields.map((field,index)=>`<div class="field-row" data-sort-item="field" data-sort-id="${index}">${dragHandle('field')}<div class="field-main"><div class="field-title-line"><b title="${field.name}">${field.name}</b><i class="field-badge ${field.badge}">${field.type}</i></div><span title="${fieldRuleSummary(field)}">${fieldRuleSummary(field)}</span></div><div class="row-actions"><button data-field-edit="${index}">编辑</button><button class="danger-link" data-field-delete="${index}">删除</button></div></div>`).join('')}<button class="config-outline-button" style="width:100%;margin-top:10px" data-config-action="addField">＋ 添加填写项</button><p class="config-hint">必须配置 1 个姓名类型字段，作为预约列表主显示字段，且固定必填；显示名称可以修改。手机号、身份证号类型各最多配置 1 份。添加“多人/团体”控件即进入多人统计模式；所有填写项编辑过程中仍允许删除，但缺少姓名时不能发布。</p></section>
      <section class="config-card"><h3>预约开放与截止</h3><div class="fixed-setting-row"><span>开放规则</span><b>立即开放</b></div><label class="config-field"><span>预约截止</span><select id="bookingCutoffMode"><option value="unlimited" ${config.bookingCutoffMode==='unlimited'?'selected':''}>不限制</option><option value="start" ${config.bookingCutoffMode==='start'?'selected':''}>到场次开始时间截止</option><option value="advance" ${config.bookingCutoffMode==='advance'?'selected':''}>场次开始前 N 分钟截止</option></select></label><div id="bookingCutoffAdvance" ${config.bookingCutoffMode==='advance'?'':'hidden'}><label class="config-field"><span>提前分钟数</span><input id="bookingCutoffValue" type="number" min="1" inputmode="numeric" value="${config.bookingCutoffValue}" placeholder="请输入分钟数"></label></div><p class="config-hint">游客与管理员均可修改预约资料；日期、场次、分类和项目不可修改，选错需取消后重新预约。</p></section>
      <section class="config-card"><h3>游客取消规则</h3>${switchRow('visitorCancel','允许游客取消预约','管理员始终可以取消预约',true)}${config.visitorCancel?`<label class="config-field" style="margin-top:10px"><span>游客取消截止</span><select id="visitorCancelMode"><option value="unlimited" ${config.visitorCancelMode==='unlimited'?'selected':''}>不限制</option><option value="start" ${config.visitorCancelMode==='start'?'selected':''}>到场次开始时间截止</option><option value="advance" ${config.visitorCancelMode==='advance'?'selected':''}>场次开始前 N 分钟截止</option></select></label><div id="visitorCancelAdvance" ${config.visitorCancelMode==='advance'?'':'hidden'}><label class="config-field"><span>提前分钟数</span><input id="visitorCancelValue" type="number" min="1" inputmode="numeric" value="${config.visitorCancelValue}" placeholder="请输入分钟数"></label></div>`:''}<p class="config-hint">修改实际参与人数时重新校验库存；取消成功后返还场次及项目名额。</p></section>`,

    () => `${heading(6,'根据当前活动状态完成发布更新、正式发布或下架。')}
      <section class="config-card publish-status-card"><div class="publish-status-line"><span>当前活动状态</span><b class="${currentActivity?.status==='published'?'is-published':'is-offline'}">${currentActivity?.status==='published'?'已上架':'已下架'}</b></div><p>${currentActivity?.status==='published'?'游客端正在使用已发布版本。点击“发布更新”后，当前已保存配置将替换线上版本。':'当前不接受新预约。可先保存配置并检查游客端效果，确认无误后再单独发布。'}</p></section>
      <section class="config-card"><div class="publish-page-head"><div><h3>发布检查</h3><p>全部必备项通过后才允许${currentActivity?.status==='published'?'发布更新':'发布'}</p></div><span>${publishChecks().filter(item=>item[1]).length}/${publishChecks().length}</span></div><div class="publish-check detailed">${publishChecks().map(([title,passed,note])=>`<div class="${passed?'':'missing'}"><i>${passed?'✓':'!'}</i><span><b>${title}</b><small>${note}</small></span></div>`).join('')}</div></section>
      <section class="config-card publish-action-card"><h3>${currentActivity?.status==='published'?'发布更新':'发布活动'}</h3><p class="publish-summary">${currentActivity?.status==='published'?'将当前已保存配置更新到线上；未保存的修改不会发布。':'将已保存配置发布到游客端，并把活动状态变为已上架。'}</p><button class="publish-button ${publishChecks().some(item=>!item[1])?'is-blocked':''}" id="publishConfig" aria-disabled="${publishChecks().some(item=>!item[1])}">${currentActivity?.status==='published'?'发布更新':'发布上架'}</button>${currentActivity?.status==='published'?'<button class="publish-button offline" id="offlineConfig">下架活动</button>':''}</section>`
  ];

  views.splice(0,views.length,views[0],views[1],views[4],views[2],views[3],views[5],views[6]);

  function renderRail() {
    q('#configStepRail').innerHTML = steps.map((step,index)=>`<button class="${index===stepIndex?'active':''}" data-config-step="${index}">${step[0]} ${step[1]}</button>`).join('');
    requestAnimationFrame(()=>{ const rail=q('#configStepRail'); const active=q('[data-config-step].active',rail); if(active) rail.scrollLeft=Math.max(0,active.offsetLeft-(rail.clientWidth-active.offsetWidth)/2); window.scrollTo(0,0); });
  }
  function enableRailScrolling(){
    const rail=q('#configStepRail');
    let pointerId=null,startX=0,startScroll=0,dragged=false,pressedStep=null;
    const resetPointer=()=>{pointerId=null;dragged=false;pressedStep=null;rail.classList.remove('dragging');};
    rail.addEventListener('pointerdown',event=>{
      if(event.pointerType!=='mouse'||event.button!==0)return;
      pointerId=event.pointerId;startX=event.clientX;startScroll=rail.scrollLeft;dragged=false;
      pressedStep=event.target.closest('[data-config-step]');
      rail.setPointerCapture?.(event.pointerId);event.preventDefault();
    });
    rail.addEventListener('pointermove',event=>{
      if(event.pointerId!==pointerId)return;
      const distance=event.clientX-startX;
      if(Math.abs(distance)>8){dragged=true;rail.classList.add('dragging');}
      if(dragged)rail.scrollLeft=startScroll-distance;
    });
    rail.addEventListener('pointerup',event=>{
      if(event.pointerId!==pointerId)return;
      const shouldClick=!dragged&&pressedStep;
      rail.releasePointerCapture?.(event.pointerId);resetPointer();event.preventDefault();
      if(shouldClick)shouldClick.click();
    });
    rail.addEventListener('pointercancel',event=>{if(event.pointerId===pointerId)resetPointer();});
    rail.addEventListener('wheel',event=>{
      if(Math.abs(event.deltaY)<=Math.abs(event.deltaX))return;
      rail.scrollLeft+=event.deltaY;event.preventDefault();
    },{passive:false});
  }
  function enableItemSorting(){
    let state=null;
    document.addEventListener('pointerdown',event=>{
      const handle=event.target.closest('[data-sort-handle]');if(!handle)return;
      const item=handle.closest('[data-sort-item]');if(!item)return;
      state={handle,item,kind:item.dataset.sortItem,list:item.parentElement,pointerId:event.pointerId,moved:false,startY:event.clientY};
      handle.setPointerCapture?.(event.pointerId);item.classList.add('sorting');event.preventDefault();
    });
    document.addEventListener('pointermove',event=>{
      if(!state||event.pointerId!==state.pointerId)return;
      if(Math.abs(event.clientY-state.startY)>5)state.moved=true;
      const target=document.elementFromPoint(event.clientX,event.clientY)?.closest(`[data-sort-item="${state.kind}"]`);
      if(!target||target===state.item||target.parentElement!==state.list)return;
      const rect=target.getBoundingClientRect();
      state.list.insertBefore(state.item,event.clientY<rect.top+rect.height/2?target:target.nextSibling);
      event.preventDefault();
    },{passive:false});
    const finish=event=>{
      if(!state||event.pointerId!==state.pointerId)return;
      state.handle.releasePointerCapture?.(event.pointerId);state.item.classList.remove('sorting');
      if(state.moved){const ids=qa(`[data-sort-item="${state.kind}"]`,state.list).map(item=>item.dataset.sortId);if(state.kind==='project'){const byId=new Map(config.projects.map(item=>[String(item.id),item]));config.projects=ids.map(id=>byId.get(id)).filter(Boolean);}else if(state.kind==='category'){config.categories=ids.map(decodeURIComponent);}else if(state.kind==='field'){const fields=[...config.fields];config.fields=ids.map(id=>fields[Number(id)]).filter(Boolean);}markDirty();renderConfig(true);showToast('排序已调整，请保存当前步骤');}
      state=null;
    };
    document.addEventListener('pointerup',finish);document.addEventListener('pointercancel',finish);
  }
  function enhanceMiniPickers(root=document){
    root.querySelectorAll('input[type="date"],input[type="time"]').forEach((input,index)=>{
      input.dataset.miniPicker=input.type;
      input.type='text';input.readOnly=true;
      input.placeholder=input.dataset.miniPicker==='date'?'请选择日期':'请选择时间';
      if(!input.id)input.id=`miniPicker_${Date.now()}_${index}`;
    });
  }
  function renderConfig(preserveScroll=false) {
    const content=q('#configContent');const previousScroll=content.scrollTop;
    renderRail();
    q('#configContent').innerHTML = views[stepIndex]();enhanceMiniPickers(q('#configContent'));
    if(stepIndex===3){const title=q('.session-config-title');if(title&&!q('.session-config-head-actions',title)){const actions=document.createElement('div');actions.className='session-config-head-actions';actions.innerHTML='<button data-manage-session-templates>模板管理</button>';title.appendChild(actions);}}
    q('#configPrev').textContent = stepIndex === 0 ? '返回列表' : '上一步';
    q('#configSave').textContent = '保存';q('#configSave').hidden=stepIndex===6&&currentActivity?.status==='published';q('#configNext').hidden=stepIndex===steps.length-1;
    content.scrollTop = preserveScroll?previousScroll:0;
  }
  const defaultActivityConfigSnapshot=JSON.stringify(config);
  const buildNewActivityConfig = () => {
    const fresh=JSON.parse(defaultActivityConfigSnapshot);
    Object.assign(fresh,{
      noticeEnabled:false,noticeScope:'combined',noticeTitle:'预约必读须知',noticeSeconds:3,noticeHtml:'',detailHtml:'',
      projectModuleEnabled:false,categoryEnabled:true,projectTheme:'选择项目',projects:[],categories:[],categoryStates:{},
      selectedDates:[],dateBookedCounts:{},pausedDates:[],pendingRemovalDates:[],calendarMonth:'2026-08',sessionMonth:'2026-08',
      sessions:[],sessionsByDate:{},sessionModes:{},sessionOperationLogs:[],sessionTemplates:[],projectSessionQuotas:{},projectSessionBooked:{},
      draftLogo:null,draftCover:null,
      fields:fresh.fields.filter(field=>field.type!=='多人/团体').map(field=>({...field}))
    });
    return fresh;
  };
  window.openConfig = (activity=activities[0], isNew=false, returnPage='activities') => {
    currentActivity = activity || activities[0]; isNewActivity = isNew; window.configReturnPage = returnPage; stepIndex = 0;
    if(isNewActivity&&!currentActivity.id){
      const time=new Date(),pad=value=>String(value).padStart(2,'0');
      const now=`${time.getFullYear()}-${pad(time.getMonth()+1)}-${pad(time.getDate())} ${pad(time.getHours())}:${pad(time.getMinutes())}`;
      currentActivity.id=Math.max(0,...activities.map(item=>Number(item.id)||0))+1;
      Object.assign(currentActivity,{image:null,coverImage:null,totalPeople:0,todayPeople:0,created:now,updated:now,creator:'当前管理员',updater:'当前管理员'});
    }
    const saved=currentActivity.id?readActivityDrafts()[currentActivity.id]:null;
    const restored=saved?.config?JSON.parse(JSON.stringify(saved.config)):(isNewActivity?buildNewActivityConfig():JSON.parse(defaultActivityConfigSnapshot));
    restored.categoryStates=Object.fromEntries((restored.categories||[]).map(name=>[name,restored.categoryStates?.[name]!==false]));
    Object.keys(config).forEach(key=>delete config[key]);Object.assign(config,restored);
    Object.entries(config.sessionsByDate||{}).forEach(([date,sessions])=>ensureSessionIds(date,sessions));
    if(saved?.currentActivity&&saved.currentActivity.id===currentActivity.id)restoreActivityDraft(currentActivity,saved.currentActivity);
    stepDirty=false;
    currentActivity.image=assetUrl(currentActivity.image)||null;currentActivity.coverImage=assetUrl(currentActivity.coverImage)||null;config.detailHtml=normalizeRichAssetPaths(config.detailHtml);config.projects.forEach(item=>{item.image=assetUrl(item.image)||null;});
    config.draftLogo=currentActivity.image||null;config.draftCover=currentActivity.coverImage||null;
    q('#configMode').textContent = isNew ? '新建预约活动' : '编辑预约活动'; q('#configActivityName').textContent = currentActivity.name;
    q('#configSaveState').textContent = isNew ? '尚未发布' : '配置已保存';captureSavedState();navigate('config'); renderConfig();
  };
  function saveCurrent(silent=false) {
    const name = q('#cfgActivityName')?.value.trim(); if (name) { currentActivity.name = name; q('#configActivityName').textContent = name; }
    const detail = q('#cfgDetailEditor'); if (detail) config.detailHtml = detail.innerHTML.trim(); const notice=q('#cfgNoticeEditor');const noticeTitle=q('#cfgNoticeTitle');const noticeText=notice?String(notice.innerHTML||'').replace(/<[^>]*>/g,'').trim():String(config.noticeHtml||'').replace(/<[^>]*>/g,'').trim();const noticeTitleText=noticeTitle?noticeTitle.value.trim():String(config.noticeTitle||'').trim();if(stepIndex===1&&config.noticeEnabled&&Boolean(noticeTitleText)!==Boolean(noticeText)){if(!silent)showToast('默认全局提示请同时填写标题和内容，或全部留空');return false;}if(notice)config.noticeHtml=notice.innerHTML.trim();if(noticeTitle)config.noticeTitle=noticeTitleText;const noticeSeconds=q('#cfgNoticeSeconds');if(noticeSeconds)config.noticeSeconds=Math.max(0,Number(noticeSeconds.value)||0);
    if(stepIndex===0){currentActivity.image=config.draftLogo;currentActivity.coverImage=config.draftCover;}
    const contactName=q('#cfgContactName');if(contactName)currentActivity.contactName=contactName.value.trim();
    const contactPhone=q('#cfgContactPhone');if(contactPhone)currentActivity.contactPhone=contactPhone.value.trim();
    const heroBadge=q('#cfgHeroBadge');if(heroBadge)currentActivity.heroBadge=heroBadge.value.trim();
    const heroSubtitle=q('#cfgHeroSubtitle');if(heroSubtitle)currentActivity.heroSubtitle=heroSubtitle.value.trim();
    const theme = q('#projectThemeInput')?.value.trim(); if (theme) config.projectTheme = theme;
    if(isNewActivity&&!activities.some(item=>item.id===currentActivity.id)){
      activities.push(currentActivity);isNewActivity=false;q('#configMode').textContent='编辑预约活动';
    }
    const updateTime=new Date(),pad=value=>String(value).padStart(2,'0');
    currentActivity.updated=`${updateTime.getFullYear()}-${pad(updateTime.getMonth()+1)}-${pad(updateTime.getDate())} ${pad(updateTime.getHours())}:${pad(updateTime.getMinutes())}`;
    saveActivityDraft();
    stepDirty=false;captureSavedState();q('#configSaveState').textContent = '已保存到预览'; if(!silent) showToast('当前步骤已保存，可查看游客端效果');
  }
  function openSheet(html) { const sheet=q('#configSheet');sheet.classList.remove('session-date-sheet');sheet.innerHTML = `<div class="sheet-handle"></div>${html}`;enhanceMiniPickers(sheet);openLayer('configSheet'); }
  function openDialog(html) { q('#configDialog').innerHTML = html; openLayer('configDialog'); }
  function projectLogoEditorHtml(name,image){
    const source=typeof image==='string'?assetUrl(image):assetUrl('../../scenic-reservation/preview/assets/activity-hero.jpg');
    return image?`<div class="project-logo-preview"><img src="${source}" alt="项目LOGO预览"></div><div class="date-toolbar project-logo-actions"><button type="button" data-project-image-action="replace">更换LOGO</button><button type="button" data-project-image-action="remove">删除LOGO</button></div>`:`<div class="logo-empty-wrap project-logo-empty-wrap"><button type="button" class="upload-cover logo-upload logo-empty project-logo-upload-empty" data-project-image-action="replace"><i id="projectLogoInitial">${displayInitial(name)}</i><b>上传项目LOGO</b></button><small class="logo-empty-note">未上传时，项目列表以主题色底＋项目名称首字展示</small></div>`;
  }
  function updateProjectLogoEditor(){const wrap=q('#projectLogoEditor');if(wrap)wrap.innerHTML=projectLogoEditorHtml(q('#sheetProjectName')?.value,window.projectDraftImage);}
  function openProjectEditor(index=null){
    const firstEnabledCategory=config.categories.find(categoryIsEnabled)||config.categories[0]||'';
    const item=index===null?{name:'',category:firstEnabledCategory,image:false,description:'',enabled:true,booked:0}:config.projects[index];
    window.editingProjectIndex=index;window.projectDraftImage=item.image||false;
    openSheet(`<h2>${index===null?'添加项目':'编辑项目'}</h2>
      <label class="config-field"><span>项目名称 <small><b class="required">*</b> 30字内</small></span><input id="sheetProjectName" type="text" maxlength="30" value="${item.name}" placeholder="请输入项目名称"></label>
      <label class="config-field"><span>所属分类 <small>${config.categoryEnabled?'<b class="required">*</b> 必选':'分类功能已关闭'}</small></span><select id="sheetProjectCategory" ${config.categoryEnabled?'':'disabled'}>${config.categories.map((name,categoryIndex)=>`<option value="${name}" ${name===item.category||(!config.categories.includes(item.category)&&categoryIndex===0)?'selected':''} ${!categoryIsEnabled(name)&&name!==item.category?'disabled':''}>${name}${categoryIsEnabled(name)?'（启用中）':'（已禁用）'}</option>`).join('')}</select></label>
      <div class="config-field"><span>项目LOGO <small>选填 · 建议400×400px</small></span><div id="projectLogoEditor">${projectLogoEditorHtml(item.name,item.image)}</div></div>
      <label class="config-field"><span>项目简介 <small>选填 · 60字内</small></span><textarea id="sheetProjectDescription" maxlength="60" placeholder="简要说明项目特色、适用人群等">${item.description||''}</textarea></label>
      ${item.booked?'<p class="config-hint warn">该项目已有预约，不能删除；禁用后仅影响后续新预约，历史预约继续有效并占用原库存。</p>':''}
      <div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-save-project="${index===null?'new':index}">保存项目</button></div>`);
  }
  function openProjectSessionInventory(date=null,sessionIndex=0){
    const dates=config.selectedDates.filter(item=>(config.sessionsByDate[item]||[]).length);
    const selectedDate=date&&dates.includes(date)?date:dates[0];
    const sessions=config.sessionsByDate[selectedDate]||[];
    const safeIndex=Math.min(Math.max(0,Number(sessionIndex)||0),Math.max(0,sessions.length-1));
    const session=sessions[safeIndex];
    const projects=enabledProjects();
    openSheet(`<h2>按日期和场次配置项目名额</h2>
      <label class="config-field"><span>预约日期</span><select id="projectStockDate" data-project-stock-date>${dates.map(item=>`<option value="${item}" ${item===selectedDate?'selected':''}>${item}</option>`).join('')}</select></label>
      <label class="config-field"><span>预约场次</span><select id="projectStockSession" data-project-stock-session>${sessions.map((item,index)=>`<option value="${index}" ${index===safeIndex?'selected':''}>${item.time}${item.name?` · ${item.name}`:''}</option>`).join('')}</select></label>
      <div class="project-stock-list">${projects.map(item=>{const key=sessionProjectKey(selectedDate,session,item.id);return `<label><span><b>${item.name}</b><small>${item.category||''}</small></span><input data-project-stock-id="${item.id}" type="number" min="1" inputmode="numeric" value="${config.projectSessionQuotas[key]??''}" placeholder="不限额"></label>`;}).join('')||'<p class="config-hint">请先启用至少一个项目。</p>'}</div>
      <p class="config-hint">名额只属于当前日期、当前场次和当前项目；留空表示该项目在本场次不限额。</p>
      <div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-save-project-session-stock data-date="${selectedDate}" data-session="${safeIndex}">保存名额</button></div>`);
  }
  function openBatchProjectSessionInventory(){
    const projects=enabledProjects();
    openSheet(`<h2>批量配置项目名额</h2>
      <div class="choice-grid"><label class="choice-card"><input type="radio" name="batchProjectStockScope" value="all" checked><b>全部未来已配置日期</b><span>应用到今天及以后所有已有场次的日期</span></label><label class="choice-card"><input type="radio" name="batchProjectStockScope" value="range"><b>指定日期范围</b><span>仅应用到范围内已经配置的日期和场次</span></label></div>
      <div class="batch-stock-range" id="batchProjectStockRange" hidden><div class="two-fields"><label class="config-field"><span>开始日期</span><input id="batchProjectStockStart" type="date" min="2026-08-18"></label><label class="config-field"><span>截止日期</span><input id="batchProjectStockEnd" type="date" min="2026-08-18"></label></div></div>
      <section class="sheet-subsection project-batch-stock"><h3>各项目统一名额</h3><div class="project-stock-list">${projects.map(item=>`<label><span><b>${item.name}</b><small>${item.category||''}</small></span><input data-batch-project-stock-id="${item.id}" type="number" min="1" inputmode="numeric" placeholder="不限额"></label>`).join('')||'<p class="config-hint">请先启用至少一个项目。</p>'}</div><p class="config-hint">同一项目填写一个名额，批量应用到范围内每个已有场次；留空表示不限额。</p></section>
      <div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-save-batch-project-stock>确认批量配置</button></div>`);
  }
  function openMiniPicker(input){
    window.miniPickerTarget=input.id;const kind=input.dataset.miniPicker;const current=input.value;
    if(kind==='time'){
      const [selectedHour='09',selectedMinute='30']=current.split(':');
      const hours=Array.from({length:24},(_,i)=>String(i).padStart(2,'0'));
      const minutes=Array.from({length:12},(_,i)=>String(i*5).padStart(2,'0'));
      openDialog(`<div class="mini-wheel-picker"><div class="mini-wheel-head"><button data-close="configDialog">取消</button><b>选择时间</b><button data-confirm-mini-picker="time">确定</button></div><div class="wheel-column-labels"><span>小时</span><span>分钟</span></div><div class="mini-wheel-columns time-columns"><select id="wheelHour" size="5">${hours.map(value=>`<option ${value===selectedHour?'selected':''}>${value}</option>`).join('')}</select><select id="wheelMinute" size="5">${minutes.map(value=>`<option ${value===selectedMinute?'selected':''}>${value}</option>`).join('')}</select></div><button class="wheel-clear-action" data-clear-mini-picker-dialog>清除当前时间</button></div>`);return;
    }
    const today=new Date();const [selectedYear=String(today.getFullYear()),selectedMonth=String(today.getMonth()+1).padStart(2,'0'),selectedDay=String(today.getDate()).padStart(2,'0')]=current.split('-');
    const years=Array.from({length:4},(_,i)=>String(today.getFullYear()+i));const values=length=>Array.from({length},(_,i)=>String(i+1).padStart(2,'0'));
    openDialog(`<div class="mini-wheel-picker"><div class="mini-wheel-head"><button data-close="configDialog">取消</button><b>选择日期</b><button data-confirm-mini-picker="date">确定</button></div><div class="wheel-column-labels date-labels"><span>年</span><span>月</span><span>日</span></div><div class="mini-wheel-columns date-columns"><select id="wheelYear" size="5">${years.map(value=>`<option ${value===selectedYear?'selected':''}>${value}</option>`).join('')}</select><select id="wheelMonth" size="5">${values(12).map(value=>`<option ${value===selectedMonth?'selected':''}>${value}</option>`).join('')}</select><select id="wheelDay" size="5">${values(31).map(value=>`<option ${value===selectedDay?'selected':''}>${value}</option>`).join('')}</select></div><button class="wheel-clear-action" data-clear-mini-picker-dialog>清除当前日期</button></div>`);
  }
  function sessionTimeSummary(list){
    if(!list.length)return '未设置时间';
    const firstStart=list[0].time.split('-')[0];
    const lastParts=list.at(-1).time.split('-');
    if(lastParts[1])return `${firstStart}—${lastParts[1]}`;
    if(list.length===1)return firstStart;
    return `${firstStart}起 · 最晚${lastParts[0]}`;
  }
  function openSessionTemplateManager(){
    const rows=config.sessionTemplates.map((template,index)=>`<div class="template-manage-row"><div><b>${template.name}</b><span>${template.sessions.length}个场次 · ${sessionTimeSummary(template.sessions)}</span></div><button data-delete-session-template="${index}">删除</button></div>`).join('');
    openSheet(`<h2>场次模板</h2>${rows?`<div class="template-manage-list">${rows}</div>`:'<div class="unconfigured-date"><b>还没有场次模板</b><span>在某一天的场次配置中点击“保存为模板”</span></div>'}<div class="config-sheet-actions"><button class="secondary" data-close="configSheet">关闭</button></div>`);
  }
  function openSessionDateEditor(date){
    window.editingSessionDate=date;
    const dateSessions=config.sessionsByDate[date]||[];
    const mode=dateSessions.length?config.sessionModes[date]:null;
    if(!mode&&!Object.prototype.hasOwnProperty.call(config.sessionsByDate,date)){openSheet(`<h2>配置 ${date}</h2><div class="unconfigured-date"><b>当天还没有场次</b><span>选择一种方式开始配置</span></div><button class="config-outline-button date-manage-action" data-init-session-date="${date}">手动添加场次</button><button class="config-outline-button date-manage-action" data-apply-date-template="${date}">应用场次模板</button><button class="config-outline-button date-manage-action" data-reuse-session-date="${date}">复用其他日期配置</button><div class="config-sheet-actions"><button class="secondary" data-cancel-session-date>取消</button><button class="primary" data-confirm-session-date>确认</button></div>`);q('#configSheet').classList.add('session-date-sheet');return;}
    ensureSessionIds(date,dateSessions);sortSessions(dateSessions);if(config.sessionModes[date]){config.sessionModes[date].count=dateSessions.length;config.sessionModes[date].time=sessionTimeSummary(dateSessions);}window.editingSessionDate=date;
    const lockedCount=dateSessions.filter(item=>item.booked>0).length;
    const totalLimit=dateSessions.some(item=>item.limit===null)?'不限额':`${dateSessions.reduce((sum,item)=>sum+(item.limit||0),0)}人`;
    const cards=dateSessions.map((item,index)=>{
      const locked=item.booked>0;const [start,end]=item.time.split('-');
      return `<div class="session-edit-row ${locked?'locked-session-row':''}">
        <div class="session-time-row ${locked?'is-locked':''}" ${locked?'':`data-edit-session-time="${index}"`}>
          <span><b>${start}</b><small>${end?'开始':'开始时间'}</small></span>${end?`<i>→</i><span><b>${end}</b><small>结束</small></span>`:''}${locked?'<mark>已锁定</mark>':'<mark>修改时间</mark>'}
        </div>
        <div class="session-name-row"><strong>${item.name||'未设置场次名称'}</strong><button data-edit-session="${index}">${item.name?'修改名称':'添加名称'}</button></div>
        <div class="session-row-bottom"><span>已预约 ${item.booked} 人${locked?' · 时间已锁定':''}</span><div class="session-row-actions"><button class="quota-shortcut" data-quick-quota="${index}">${item.limit===null?'不限额':`名额 ${item.limit}`} ›</button>${locked?'':`<button class="session-delete-link" data-delete-session="${index}">删除</button>`}</div></div>
      </div>`;
    }).join('');
    openSheet(`<h2>编辑 ${date}</h2><div class="session-sheet-summary"><span>${lockedCount?`${lockedCount}个场次时间已锁定`:'当天场次均可编辑'}</span><b>当日合计 ${totalLimit}</b></div><div class="date-section session-compact-list">${cards}</div><div class="session-add-actions"><button data-add-session-date="${date}">＋ 添加单个场次</button><button data-batch-add-session-date="${date}">批量添加场次</button></div><div class="session-template-actions"><button data-save-date-template="${date}">保存为模板</button><button data-apply-date-template="${date}">应用场次模板</button></div><button class="config-outline-button date-manage-action" data-copy-session-date="${date}">复制当天配置到其他日期</button><div class="config-sheet-actions"><button class="secondary" data-cancel-session-date>取消</button><button class="primary" data-confirm-session-date>确认</button></div>`);
    q('#configSheet').classList.add('session-date-sheet');
  }
  function applySessionMode(targets,sourceDate=null,templateName=''){
    const unique=[...new Set(targets)].filter(date=>date>='2026-08-17');
    const blocked=unique.filter(date=>(config.dateBookedCounts[date]||0)>0&&date!==sourceDate);
    const applied=unique.filter(date=>!blocked.includes(date)&&date!==sourceDate);
    const sourceMode=sourceDate?(config.sessionModes[sourceDate]||{count:3,time:'09:30—12:30'}):null;
    applied.forEach(date=>{
      if(templateName){config.sessionModes[date]={type:'configured',count:12,time:'10:00—15:30'};return;}
      if(sourceDate){config.sessionModes[date]={type:'configured',count:sourceMode.count||3,time:sourceMode.time||'09:30—12:30'};config.sessionsByDate[date]=cloneDateSessions(sourceDate,date);return;}
      delete config.sessionModes[date];
    });
    if(sourceDate||templateName)config.sessionOperationLogs.push({type:sourceDate?'copy-date':'apply-template',source:sourceDate||templateName,targets:[...applied],skipped:[...blocked],operatedAt:new Date().toISOString()});
    window.sessionCopySource=null;closeLayer('configSheet');markDirty();renderConfig(true);
    showToast(`已更新 ${applied.length} 个日期${blocked.length?`，跳过 ${blocked.length} 个有预约日期`:''}`);
  }

  let previewTab = 'select';
  function syncVisibleConfig() {
    const name=q('#cfgActivityName')?.value.trim(); if(name){currentActivity.name=name;q('#configActivityName').textContent=name;}
    const detail=q('#cfgDetailEditor');if(detail)config.detailHtml=detail.innerHTML.trim();const notice=q('#cfgNoticeEditor');if(notice)config.noticeHtml=notice.innerHTML.trim();
    const contactName=q('#cfgContactName');if(contactName)currentActivity.contactName=contactName.value.trim();
    const contactPhone=q('#cfgContactPhone');if(contactPhone)currentActivity.contactPhone=contactPhone.value.trim();
    const theme=q('#projectThemeInput')?.value.trim(); if(theme) config.projectTheme=theme;
  }
  function previewField(field) {
    const required=field.required?'<b>*</b>':'';
    if(field.type==='多人/团体') return `<label class="visitor-form-field"><span>${required} ${field.name}</span><div class="people-control"><button>−</button><strong>1 人</strong><button>＋</button></div></label>`;
    if(field.type==='多行文本') return `<label class="visitor-form-field"><span>${required} ${field.name}</span><textarea placeholder="请填写${field.name}"></textarea></label>`;
    if(field.type==='单选') return `<label class="visitor-form-field"><span>${required} ${field.name}</span><select><option>请选择</option>${(field.options||['选项一','选项二']).map(option=>`<option>${option}</option>`).join('')}</select></label>`;
    if(field.type==='多选') return `<label class="visitor-form-field"><span>${required} ${field.name}</span><div class="people-control"><span>${(field.options||['选项一','选项二']).map(option=>`□ ${option}`).join('　')}</span></div></label>`;
    const inputType=field.type==='手机号'?'tel':field.type==='数字'?'number':field.type==='日期'?'date':'text';
    const value=field.type==='姓名'?'苏珊':field.type==='手机号'?'13800138000':field.type==='身份证号'?'440106199208136521':'';
    return `<label class="visitor-form-field"><span>${required} ${field.name}</span><input type="${inputType}" value="${value}" placeholder="请填写${field.name}"></label>`;
  }
  function renderPreview() {
    const container=q('#configPreviewContent');
    qa('[data-preview-tab]').forEach(button=>button.classList.toggle('active',button.dataset.previewTab===previewTab));
    if(previewTab==='notice') {
      const title=String(config.noticeTitle||'').trim();const content=String(config.noticeHtml||'').replace(/<[^>]*>/g,'').trim();const hasDefault=title&&content;container.innerHTML=!config.noticeEnabled?`<div class="notice-off"><b>必读须知未启用</b><span>游客选择日期时不会出现必读提示</span></div>`:hasDefault?`<div class="preview-source-note">默认全局提示预览：特殊日期命中时将优先展示对应模板</div><div class="notice-preview"><article class="notice-preview-card"><i>!</i><h2>${config.noticeTitle}</h2><div class="notice-rich-preview">${config.noticeHtml}</div><button>已读并确认以上内容（${config.noticeSeconds}）</button></article></div>`:`<div class="notice-off"><b>未配置默认全局提示</b><span>仅命中特殊日期配置时，游客才会看到对应提示</span></div>`; return;
    }
    if(previewTab==='form') {
      const firstProject=enabledProjects()[0];
      container.innerHTML=`<div class="preview-source-note">以下字段来自“C06 游客预约配置”的当前配置，仅展示页面效果，不提交预约</div><section class="visitor-section"><div class="visitor-section-title"><h3>本次预约</h3><span>日期和场次不可修改</span></div><div class="visitor-summary"><div><span>预约日期</span><b>2026-08-15</b></div><div><span>预约场次</span><b>${config.sessions[0]?.time||'09:30-10:30'}</b></div>${firstProject?`<div><span>分类</span><b>${firstProject.category||''}</b></div><div><span>项目</span><b>${firstProject.name}</b></div>`:''}</div></section><section class="visitor-section"><div class="visitor-section-title"><h3>预约人信息</h3><span>${config.fields.some(f=>f.type==='多人/团体')?'多人统计模式':'单人统计模式'}</span></div>${config.fields.map(previewField).join('')}</section><div class="preview-bottom"><button disabled>仅查看展示效果</button></div>`; return;
    }
    const visibleProjects=config.categoryEnabled?enabledProjects().filter(item=>config.categories.includes(item.category)&&categoryIsEnabled(item.category)):enabledProjects();
    const previewDate=config.selectedDates.find(date=>(config.sessionsByDate[date]||[]).length)||'2026-08-22';
    const previewDateSessions=config.sessionsByDate[previewDate]||config.sessions;
    const previewSession=previewDateSessions[0]||{limit:null,booked:0};
    const sharedProjectQuota=previewSession.limit===null?{unlimited:true,quota:0}:{unlimited:false,quota:Math.max(0,previewSession.limit-previewSession.booked)};
    const previewDateSession=previewSession;
    const previewProjects=visibleProjects.filter(project=>(previewSession.projectIds||[]).includes(project.id));
    const dates=config.selectedDates.slice(0,7).map((date,index)=>{const day=Number(date.slice(-2));return `<button class="visitor-date ${index===0?'selected':''}"><span>${index===0?'今天':`周${['日','一','二','三','四','五','六'][new Date(`${date}T12:00:00`).getDay()]}`}</span><b>${day}</b><span>${index===0?'已选':'可约'}</span></button>`;}).join('');
    const sessions=previewDateSessions.map((item,index)=>{const full=item.limit!==null&&item.booked>=item.limit;const quota=full?'已满员':item.limit===null?'不限额':config.showQuota?`剩余${item.limit-item.booked}名`:'可预约';return `<button class="visitor-session ${full?'full':''} ${index===0?'selected':''}"><b>${item.time}</b>${item.name?`<span>${item.name}</span>`:''}<em>${quota}</em></button>`;}).join('');
    container.innerHTML=`<div class="preview-source-note">预览已应用：日期、场次、项目、分类与库存配置；本窗口只展示，不提交预约</div><article class="visitor-hero"><img src="${assetUrl('../../scenic-reservation/preview/assets/activity-hero.jpg')}" alt="活动图"><div class="visitor-hero-copy"><h2>${currentActivity?.name||'呀诺达溪降体验预约'}</h2><p>尊敬的游客，该门票包含“溪降”体验项目。为确保安全与体验质量，请提前选择预约时段。</p></div></article><section class="visitor-section"><div class="visitor-section-title"><h3>选择预约日期</h3><span>月历 ›</span></div><div class="visitor-date-rail">${dates}</div></section><section class="visitor-section"><div class="visitor-section-title"><h3>选择预约场次</h3><span>${config.hideExpired?'已隐藏截止场次':'展示截止场次'}</span></div><div class="visitor-session-rail">${sessions}</div></section>${previewProjects.length?`<section class="visitor-section"><div class="visitor-section-title"><h3>${config.projectTheme}</h3><span>单选</span></div>${config.categoryEnabled?`<div class="visitor-category-rail">${[...new Set(previewProjects.map(item=>item.category).filter(Boolean))].map((name,index)=>`<button class="${index===0?'active':''}">${name}</button>`).join('')}</div>`:''}<div class="visitor-project-list">${previewProjects.map((item,index)=>{const key=sessionProjectKey(previewDate,previewDateSession,item.id);const separate=Boolean(previewDateSession.separateProjectQuota);const quota=separate?config.projectSessionQuotas[key]:previewDateSession.limit;const booked=separate?(config.projectSessionBooked[key]||0):previewDateSession.booked;const status=quota===undefined||quota===null?'不限额':quota<=booked?'已满员':config.showQuota?`剩余${quota-booked}名`:'可预约';return `<article class="visitor-project ${index===0?'selected':''}">${item.image?`<img src="${typeof item.image==='string'?assetUrl(item.image):assetUrl('../../scenic-reservation/preview/assets/activity-hero.jpg')}" alt="项目图">`:''}<div><b>${item.name}</b>${item.description?`<span>${item.description}</span>`:''}</div><em>${status}</em></article>`;}).join('')}</div></section>`:''}<div class="preview-bottom"><button disabled>仅查看展示效果</button></div>`;
  }
  function buildVisitorConfig() {
    const enabledProjectItems=enabledProjects();
    const visibleProjects=config.categoryEnabled?enabledProjectItems.filter(item=>config.categories.includes(item.category)&&categoryIsEnabled(item.category)):enabledProjectItems;
    const visibleCategoryNames=[...new Set(visibleProjects.map(item=>item.category).filter(Boolean))];
    const categories=config.categoryEnabled?visibleCategoryNames.map((name,index)=>({id:`category-${index}`,name})):[{id:'all',name:''}];
    const categoryId=name=>config.categoryEnabled?`category-${Math.max(0,visibleCategoryNames.indexOf(name||''))}`:'all';
    const visitorSessions=(items,dateKey='default')=>sortSessions([...(items||[])]).map((item,index)=>{const [start,end]=item.time.split('-');return {id:item.id||`${dateKey}-${index}`,time:start,endTime:end||'',name:item.name||'',state:item.limit!==null&&item.booked>=item.limit?'full':'open',unlimited:item.limit===null,quota:item.limit===null?0:Math.max(0,item.limit-item.booked)};});
    const visitorToday='2026-08-18';
    const globalNotice={title:config.noticeTitle,html:config.noticeHtml};
    const hasGlobalNotice=String(globalNotice.title||'').trim()&&String(globalNotice.html||'').replace(/<[^>]*>/g,'').trim();
    const effectiveNoticeFor=date=>window.resolveSpecialDateNotice?.({activityId:currentActivity?.id,date,noticeEnabled:config.noticeEnabled,globalNotice})||(config.noticeEnabled&&hasGlobalNotice?{source:'global',title:globalNotice.title,html:globalNotice.html}:null);
    const configuredDates=config.selectedDates.filter(date=>(config.sessionsByDate[date]||[]).length>0);
    const visibleDates=configuredDates.filter(date=>!(config.hideExpired&&date<visitorToday));
    const projectsBySession=Object.fromEntries(visibleDates.map(date=>{
      const items=config.sessionsByDate[date]||[];ensureSessionIds(date,items);sortSessions(items);
      return [date,Object.fromEntries(items.map(session=>[
        session.id,
        Object.fromEntries(visibleProjects.filter(project=>(session.projectIds||[]).includes(project.id)).map(project=>{
          const key=sessionProjectKey(date,session,project.id);const separate=Boolean(session.separateProjectQuota);const quota=separate?config.projectSessionQuotas[key]:session.limit;const booked=separate?(config.projectSessionBooked[key]||0):session.booked;
          return [`project-${project.id}`,{enabled:true,state:quota!==undefined&&quota!==null&&booked>=quota?'full':'open',unlimited:quota===undefined||quota===null,quota:quota===undefined||quota===null?0:Math.max(0,quota-booked),showQuota:config.showQuota}];
        }))
      ]))];
    }));
    const previewConfig={
      schemaVersion:2,
      activityId:String(currentActivity?.id||''),
      activityName:currentActivity?.name||'呀诺达溪降体验预约',
      coverImage:currentActivity?.coverImage||'', detailHtml:config.detailHtml,
      heroBadge:currentActivity?.heroBadge||'', heroSubtitle:currentActivity?.heroSubtitle||'',
      contactName:currentActivity?.contactName||'', contactPhone:currentActivity?.contactPhone||'',
      theme:'forest', deviceWidth:375, dateStyle:'strip', sessionStyle:'grid-named',
      projectTheme:config.projectTheme, projectsEnabled:visibleProjects.length>0, categoryEnabled:config.categoryEnabled,
      showSessionQuota:config.showQuota, hideExpired:config.hideExpired, showProjectQuota:config.showQuota, participantMode:config.fields.some(field=>field.type==='多人/团体')?'group':'single',
      noticeEnabled:config.noticeEnabled, noticeScope:config.noticeScope, noticeTitle:config.noticeTitle, noticeHtml:config.noticeHtml, noticeSeconds:config.noticeSeconds, categories,
      bookingCutoffMode:config.bookingCutoffMode, bookingCutoffMinutes:config.bookingCutoffMode==='advance'?config.bookingCutoffValue:0,
      visitorCancel:config.visitorCancel, visitorCancelMode:config.visitorCancelMode, visitorCancelMinutes:config.visitorCancelMode==='advance'?config.visitorCancelValue:0,
      dates:visibleDates.map(date=>{const items=config.sessionsByDate[date]||[];const expired=date<visitorToday;const unlimited=items.some(item=>item.limit===null);const full=!unlimited&&items.every(item=>item.limit!==null&&item.booked>=item.limit);const notice=effectiveNoticeFor(date);return {key:date,special:!!notice,notice,paused:config.pausedDates.includes(date),expired,full,unlimited,quota:items.reduce((sum,item)=>sum+(item.limit===null?0:Math.max(0,item.limit-item.booked)),0)};}),
      sessions:visitorSessions(config.sessions),
      sessionsByDate:Object.fromEntries(visibleDates.map(date=>[date,visitorSessions(config.sessionsByDate[date]||[],date)])),
      projects:visibleProjects.map(item=>({id:`project-${item.id}`,name:item.name,categoryId:categoryId(item.category),desc:item.description||'',image:item.image,state:'open',unlimited:true,quota:0,showQuota:config.showQuota,inventoryMode:'project-session'})),projectsBySession,
      fields:config.fields.map((field,index)=>({...field,id:fieldIdFor(field,index),options:field.options?[...field.options]:undefined}))
    };
    return previewConfig;
  }
  function openPreview() {
    if(stepDirty){showToast('请先保存当前步骤');return;}
    const previewConfig={...buildVisitorConfig(),previewOnly:true,previewPage:stepIndex===5?'form':'select',previewDate:config.previewDate||'',previewSessionId:config.previewSessionId||''};
    const layer=q('#configPreviewLayer');const frame=q('#configPreviewFrame');
    const send=()=>frame.contentWindow?.postMessage({type:'SCENIC_CONFIG_PREVIEW',payload:previewConfig},'*');
    layer.classList.add('open');layer.setAttribute('aria-hidden','false');frame.onload=send;
    frame.src=`${visitorBase}/index.html?configPreview=${Date.now()}`;
  }

  document.addEventListener('click', event => {
    const projectStateButton=event.target.closest('[data-toggle-project]');
    if(projectStateButton){const item=config.projects[Number(projectStateButton.dataset.toggleProject)];if(item.enabled){const bookedFuture=[];Object.entries(config.sessionsByDate).forEach(([date,sessions])=>{if(date<'2026-08-18')return;(sessions||[]).forEach(session=>{if((session.projectIds||[]).includes(item.id)&&session.booked>0)bookedFuture.push(`${date} ${session.time}`);});});if(bookedFuture.length){showToast('该项目已被有预约的未来场次使用，不能禁用');return;}Object.entries(config.sessionsByDate).forEach(([date,sessions])=>{if(date<'2026-08-18')return;(sessions||[]).forEach(session=>{if(!(session.projectIds||[]).includes(item.id))return;session.projectIds=session.projectIds.filter(id=>id!==item.id);const key=sessionProjectKey(date,session,item.id);delete config.projectSessionQuotas[key];delete config.projectSessionBooked[key];if(session.separateProjectQuota&&session.projectIds.length){session.limit=session.projectIds.reduce((sum,projectId)=>sum+(config.projectSessionQuotas[sessionProjectKey(date,session,projectId)]||0),0);}else if(!session.projectIds.length){session.separateProjectQuota=false;}});});item.enabled=false;markDirty();renderConfig(true);showToast('项目已禁用，未来无预约场次已移除该项目');return;}item.enabled=true;markDirty();renderConfig(true);showToast('项目已启用，保存后可关联到场次');return;}
    const projectSetupPrefix=event.target.closest('[data-create-session]')?'single':event.target.closest('[data-confirm-batch-sessions]')?'batch':event.target.closest('[data-save-quick-quota]')?'quick':'';
    if(projectSetupPrefix){const setup=readProjectSetup(projectSetupPrefix);if(setup.separateProjectQuota&&setup.projectIds.some(projectId=>!Number.isFinite(setup.quotas[String(projectId)])||setup.quotas[String(projectId)]<1)){showToast('不共用场次库存时，请填写每个已选项目的有限名额');return;}if(projectSetupPrefix==='single'&&!setup.separateProjectQuota&&q('input[name="singleQuotaMode"]:checked')?.value==='limited'&&(!q('#sheetSessionLimit')?.value||Number(q('#sheetSessionLimit').value)<1)){showToast('请输入场次名额');return;}}
    const miniPickerField=event.target.closest('[data-mini-picker]');if(miniPickerField){event.preventDefault();openMiniPicker(miniPickerField);return;}
    const clearMiniPickerDialog=event.target.closest('[data-clear-mini-picker-dialog]');if(clearMiniPickerDialog){const input=q(`#${window.miniPickerTarget}`);if(input){input.value='';input.dispatchEvent(new Event('change',{bubbles:true}));}closeLayer('configDialog');return;}
    const confirmMiniPicker=event.target.closest('[data-confirm-mini-picker]');if(confirmMiniPicker){const input=q(`#${window.miniPickerTarget}`);if(!input){closeLayer('configDialog');return;}if(confirmMiniPicker.dataset.confirmMiniPicker==='time'){input.value=`${q('#wheelHour').value}:${q('#wheelMinute').value}`;}else{const year=q('#wheelYear').value,month=q('#wheelMonth').value;const maxDay=new Date(Number(year),Number(month),0).getDate();const day=String(Math.min(Number(q('#wheelDay').value),maxDay)).padStart(2,'0');input.value=`${year}-${month}-${day}`;}input.dispatchEvent(new Event('change',{bubbles:true}));closeLayer('configDialog');return;}
    const step = event.target.closest('[data-config-step]'); if(step){const target=Number(step.dataset.configStep);requestLeave(()=>{stepIndex=target;renderConfig();});return;}
    const sw = event.target.closest('[data-switch]'); if(sw){ const key=sw.dataset.switch; config[key]=!config[key]; markDirty(); renderConfig(true); return; }
    const bookedDay=event.target.closest('[data-booked-date]');if(bookedDay){const date=bookedDay.dataset.bookedDate;openSheet(`<h2>管理 ${date}</h2><p class="config-hint warn">该日期有 ${config.dateBookedCounts[date]} 笔有效预约。历史日期不受本操作影响。</p><button class="config-outline-button date-manage-action" data-pause-date="${date}">${config.pausedDates.includes(date)?'恢复该日期预约':'暂停该日期预约'}</button><button class="config-outline-button date-manage-action danger-action" data-cancel-date="${date}">取消该日期全部预约</button><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">关闭</button></div>`);return;}
    const pauseDate=event.target.closest('[data-pause-date]');if(pauseDate){const date=pauseDate.dataset.pauseDate;config.pausedDates=config.pausedDates.includes(date)?config.pausedDates.filter(item=>item!==date):[...config.pausedDates,date];closeLayer('configSheet');markDirty();renderConfig();showToast(config.pausedDates.includes(date)?'该日期已暂停新预约，保存后生效':'该日期已恢复预约，保存后生效');return;}
    const cancelDate=event.target.closest('[data-cancel-date]');if(cancelDate){const date=cancelDate.dataset.cancelDate;openDialog(`<h2>确认取消该日期全部预约？</h2><p>${date} 当前有 ${config.dateBookedCounts[date]} 笔有效预约。取消后不可恢复，并返还对应场次和项目名额。</p><label class="config-field"><span>取消原因</span><textarea id="cancelDateReason" placeholder="请输入取消原因"></textarea></label><div class="dialog-actions"><button class="secondary" data-close="configDialog">暂不取消</button><button class="primary" data-confirm-cancel-date="${date}">确认全部取消</button></div>`);return;}
    const confirmCancelDate=event.target.closest('[data-confirm-cancel-date]');if(confirmCancelDate){const date=confirmCancelDate.dataset.confirmCancelDate;config.dateBookedCounts[date]=0;closeLayer('configDialog');markDirty();renderConfig();showToast('该日期全部预约已取消，保存后可移除日期');return;}
    const confirmDateRange=event.target.closest('[data-confirm-date-range]');if(confirmDateRange){const start=q('#rangeStartDate').value;const end=q('#rangeEndDate').value;if(!start||!end||start>end){showToast('请选择正确的开始和截止日期');return;}const dates=[];for(let cursor=new Date(`${start}T00:00:00`),last=new Date(`${end}T00:00:00`);cursor<=last;cursor.setDate(cursor.getDate()+1))dates.push(`${cursor.getFullYear()}-${String(cursor.getMonth()+1).padStart(2,'0')}-${String(cursor.getDate()).padStart(2,'0')}`);config.selectedDates=[...new Set([...config.selectedDates,...dates])].sort();closeLayer('configSheet');markDirty();renderConfig(true);return;}
    const confirmRemoveDates=event.target.closest('[data-confirm-remove-dates]');if(confirmRemoveDates){config.selectedDates=config.selectedDates.filter(date=>!config.pendingRemovalDates.includes(date));config.pendingRemovalDates=[];closeLayer('configDialog');markDirty();renderConfig(true);return;}
    const confirmRemoveRange=event.target.closest('[data-confirm-remove-range]');if(confirmRemoveRange){const start=q('#removeRangeStart').value;const end=q('#removeRangeEnd').value;if(!start||!end||start>end){showToast('请选择正确的开始和截止日期');return;}const affected=config.selectedDates.filter(date=>date>=start&&date<=end&&date>='2026-08-17');const blocked=affected.filter(date=>(config.dateBookedCounts[date]||0)>0);const removable=affected.filter(date=>!blocked.includes(date));if(!affected.length){showToast('所选范围内没有已选日期');return;}if(!removable.length){showToast('范围内已选日期均有预约记录，暂不能删除');return;}config.pendingRemovalDates=removable;closeLayer('configSheet');openDialog(`<h2>确认删除连续日期？</h2><p>${start} 至 ${end} 范围内将删除 ${removable.length} 个无预约的已选日期。${blocked.length?`<br>${blocked.join('、')} 有预约记录，将保留。`:''}</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">暂不删除</button><button class="primary" data-confirm-remove-dates>确认删除</button></div>`);return;}
    const calendarMonthShift=event.target.closest('[data-calendar-month-shift]');if(calendarMonthShift){const [year,month]=config.calendarMonth.split('-').map(Number);const target=new Date(year,month-1+Number(calendarMonthShift.dataset.calendarMonthShift),1);config.calendarMonth=`${target.getFullYear()}-${String(target.getMonth()+1).padStart(2,'0')}`;renderConfig(true);return;}
    const day = event.target.closest('[data-calendar-date]'); if(day){const date=day.dataset.calendarDate;if(config.selectedDates.includes(date)){config.selectedDates=config.selectedDates.filter(item=>item!==date);}else{config.selectedDates=[...config.selectedDates,date].sort();}markDirty();renderConfig(true);return;}
    const monthShift=event.target.closest('[data-session-month-shift]');if(monthShift){const [year,month]=config.sessionMonth.split('-').map(Number);const target=new Date(year,month-1+Number(monthShift.dataset.sessionMonthShift),1);config.sessionMonth=`${target.getFullYear()}-${String(target.getMonth()+1).padStart(2,'0')}`;renderConfig(true);return;}
    const sessionDate=event.target.closest('[data-session-date]');if(sessionDate){const date=sessionDate.dataset.sessionDate;window.sessionDateSnapshot={date,sessions:config.sessionsByDate[date]?JSON.parse(JSON.stringify(config.sessionsByDate[date])):null,mode:config.sessionModes[date]?JSON.parse(JSON.stringify(config.sessionModes[date])):null,projectQuotas:JSON.parse(JSON.stringify(config.projectSessionQuotas)),projectBooked:JSON.parse(JSON.stringify(config.projectSessionBooked)),dirty:stepDirty};openSessionDateEditor(date);return;}
    const cancelSessionDate=event.target.closest('[data-cancel-session-date]');if(cancelSessionDate){const snapshot=window.sessionDateSnapshot;if(snapshot){if(snapshot.sessions)config.sessionsByDate[snapshot.date]=snapshot.sessions;else delete config.sessionsByDate[snapshot.date];if(snapshot.mode)config.sessionModes[snapshot.date]=snapshot.mode;else delete config.sessionModes[snapshot.date];config.projectSessionQuotas=snapshot.projectQuotas;config.projectSessionBooked=snapshot.projectBooked;stepDirty=snapshot.dirty;q('#configSaveState').textContent=stepDirty?'当前步骤未保存':'配置已保存';}closeLayer('configSheet');renderConfig(true);showToast('已撤销本次当天场次调整');return;}
    const confirmSessionDate=event.target.closest('[data-confirm-session-date]');if(confirmSessionDate){const date=window.editingSessionDate;const sessions=config.sessionsByDate[date]||[];if(!sessions.length){delete config.sessionsByDate[date];delete config.sessionModes[date];showToast('当天至少需要 1 个场次');return;}config.sessionModes[date]={type:'configured',count:sessions.length,time:sessionTimeSummary(sessions)};config.previewDate=date;config.previewSessionId=sessions[0]?.id||'';window.sessionDateSnapshot=null;closeLayer('configSheet');markDirty();renderConfig(true);showToast('当天场次已确认，请保存当前步骤');return;}
    const initSessionDate=event.target.closest('[data-init-session-date]');if(initSessionDate){const date=initSessionDate.dataset.initSessionDate;config.sessionsByDate[date]=config.sessionsByDate[date]||[];window.editingSessionDate=date;openSessionDateEditor(date);return;}
    const addSessionDate=event.target.closest('[data-add-session-date]');if(addSessionDate){window.editingSessionDate=addSessionDate.dataset.addSessionDate;openSheet(`<h2>添加单个场次</h2><label class="config-field"><span>场次名称 <small>选填，最多10个字</small></span><input id="sheetSessionName" type="text" maxlength="10" placeholder="请输入场次名称"></label><div class="two-fields"><label class="config-field"><span>开始时间 <b class="required">*</b></span><input id="sheetSessionStart" type="time" value=""></label><label class="config-field"><span>结束时间 <small>选填</small></span><input id="sheetSessionEnd" type="time" value=""></label></div><label class="config-field"><span>场次名额 <small>选填，留空为不限</small></span><input id="sheetSessionLimit" type="number" min="1" value="" placeholder="请输入名额"></label>${projectSetupFields('single')}<div class="config-sheet-actions"><button class="secondary" data-back-date-editor>取消</button><button class="primary" data-create-session>添加场次</button></div>`);return;}
    const createSession=event.target.closest('[data-create-session]');if(createSession){const date=window.editingSessionDate;const start=q('#sheetSessionStart').value.trim();const end=q('#sheetSessionEnd').value.trim();if(!start){showToast('请填写开始时间');return;}if(end&&end<=start){showToast('结束时间必须晚于开始时间');return;}const setup=readProjectSetup('single');const id=`${date}-session-${Date.now()}`;const separateUnlimited=setup.separateProjectQuota&&setup.projectIds.some(projectId=>!Object.prototype.hasOwnProperty.call(setup.quotas,String(projectId)));const configuredLimit=q('#sheetSessionLimit').value===''?null:Number(q('#sheetSessionLimit').value);const limit=setup.separateProjectQuota?(separateUnlimited?null:Object.values(setup.quotas).reduce((sum,value)=>sum+value,0)):configuredLimit;const session={id,name:q('#sheetSessionName').value.trim(),time:end?`${start}-${end}`:start,limit,booked:0,projectIds:setup.projectIds,separateProjectQuota:setup.separateProjectQuota};config.sessionsByDate[date]=config.sessionsByDate[date]||[];config.sessionsByDate[date].push(session);Object.entries(setup.quotas).forEach(([projectId,quota])=>config.projectSessionQuotas[sessionProjectKey(date,session,projectId)]=quota);const list=config.sessionsByDate[date];sortSessions(list);config.sessionModes[date]={type:'configured',count:list.length,time:sessionTimeSummary(list)};markDirty();renderConfig(true);openSessionDateEditor(date);return;}
    const batchAddSession=event.target.closest('[data-batch-add-session-date]');if(batchAddSession){window.editingSessionDate=batchAddSession.dataset.batchAddSessionDate;openSheet(`<h2>批量添加场次</h2><div class="two-fields"><label class="config-field"><span>开始时间 <b class="required">*</b></span><input id="batchSessionStart" type="time" value=""></label><label class="config-field"><span>结束时间 <b class="required">*</b></span><input id="batchSessionEnd" type="time" value=""></label></div><label class="config-field"><span>场次间隔</span><select id="batchSessionInterval">${Array.from({length:36},(_,index)=>(index+1)*5).map(minutes=>`<option value="${minutes}" ${minutes===30?'selected':''}>${minutes}分钟</option>`).join('')}</select></label><div class="quota-mode-card"><span>统一场次名额</span><div class="quota-mode-options"><label><input type="radio" name="batchQuotaMode" value="unlimited" checked> 不限额</label><label><input type="radio" name="batchQuotaMode" value="limited"> 统一限额</label></div><input id="batchSessionQuota" class="quota-number-input" type="number" min="1" inputmode="numeric" placeholder="请输入统一名额" disabled></div>${projectSetupFields('batch')}<div class="batch-session-result" id="batchSessionResult">选择开始和结束时间后计算拆分数量</div><div class="config-sheet-actions"><button class="secondary" data-back-date-editor>取消</button><button class="primary" data-confirm-batch-sessions>确认添加</button></div>`);return;}
    const confirmBatchSessions=event.target.closest('[data-confirm-batch-sessions]');if(confirmBatchSessions){const start=q('#batchSessionStart').value,end=q('#batchSessionEnd').value,interval=Number(q('#batchSessionInterval').value);const quotaMode=document.querySelector('input[name="batchQuotaMode"]:checked')?.value||'unlimited';const quotaValue=q('#batchSessionQuota').value;const baseLimit=quotaMode==='unlimited'?null:Number(quotaValue);const setup=readProjectSetup('batch');const separateUnlimited=setup.separateProjectQuota&&setup.projectIds.some(projectId=>!Object.prototype.hasOwnProperty.call(setup.quotas,String(projectId)));const limit=setup.separateProjectQuota?(separateUnlimited?null:Object.values(setup.quotas).reduce((sum,value)=>sum+value,0)):baseLimit;const toMinutes=value=>{const [h,m]=value.split(':').map(Number);return h*60+m;};if(!start||!end){showToast('请选择开始和结束时间');return;}if(!setup.separateProjectQuota&&quotaMode==='limited'&&(!quotaValue||limit<1)){showToast('请输入统一场次名额');return;}const total=toMinutes(end)-toMinutes(start);if(total<=0){showToast('结束时间必须晚于开始时间');return;}if(total%interval!==0){showToast(`总时长${total}分钟不能按${interval}分钟整除，请调整结束时间或间隔`);return;}const count=total/interval;const format=value=>`${String(Math.floor(value/60)).padStart(2,'0')}:${String(value%60).padStart(2,'0')}`;const base=toMinutes(start);const date=window.editingSessionDate;const batchId=Date.now();const generated=Array.from({length:count},(_,index)=>({id:`${date}-batch-${batchId}-${index}`,name:'',time:`${format(base+index*interval)}-${format(base+(index+1)*interval)}`,limit,booked:0,projectIds:[...setup.projectIds],separateProjectQuota:setup.separateProjectQuota}));generated.forEach(session=>Object.entries(setup.quotas).forEach(([projectId,quota])=>config.projectSessionQuotas[sessionProjectKey(date,session,projectId)]=quota));config.sessionsByDate[date]=config.sessionsByDate[date]||[];config.sessionsByDate[date].push(...generated);const list=config.sessionsByDate[date];sortSessions(list);config.sessionModes[date]={type:'configured',count:list.length,time:sessionTimeSummary(list)};markDirty();renderConfig(true);openSessionDateEditor(date);return;}
    const quickQuota=event.target.closest('[data-quick-quota]');if(quickQuota){window.adjustingSessionIndex=Number(quickQuota.dataset.quickQuota);const item=config.sessionsByDate[window.editingSessionDate][window.adjustingSessionIndex];openSheet(`<h2>快捷设置场次名额</h2><p class="config-hint quick-quota-time">${item.time}${item.booked?` · 已预约 ${item.booked} 人`:''}</p><div class="quota-mode-card"><div class="quota-mode-options"><label><input type="radio" name="quickQuotaMode" value="unlimited" ${item.limit===null?'checked':''} ${item.separateProjectQuota?'disabled':''}> 不限额</label><label><input type="radio" name="quickQuotaMode" value="limited" ${item.limit!==null?'checked':''} ${item.separateProjectQuota?'disabled':''}> 限额</label></div><input id="quickSessionQuota" class="quota-number-input" type="number" inputmode="numeric" min="${Math.max(1,item.booked)}" value="${item.limit??''}" placeholder="请输入名额" ${item.limit===null||item.separateProjectQuota?'disabled':''}></div>${projectSetupFields('quick',item)}<div class="config-sheet-actions"><button class="secondary" data-back-date-editor>取消</button><button class="primary" data-save-quick-quota>保存名额</button></div>`);return;}
    const saveQuickQuota=event.target.closest('[data-save-quick-quota]');if(saveQuickQuota){const item=config.sessionsByDate[window.editingSessionDate][window.adjustingSessionIndex];const setup=readProjectSetup('quick',item);if(item.booked>0&&(setup.separateProjectQuota!==Boolean(item.separateProjectQuota)||setup.projectIds.join(',')!==(item.projectIds||[]).join(','))){showToast('该场次已有预约，关联项目和库存模式不能修改');return;}if(setup.separateProjectQuota){let invalid='';let total=0;let unlimited=false;setup.projectIds.forEach(projectId=>{const key=sessionProjectKey(window.editingSessionDate,item,projectId);const booked=config.projectSessionBooked[key]||0;const quota=setup.quotas[String(projectId)];if(quota===undefined)unlimited=true;else if(quota<booked)invalid=`${config.projects.find(p=>p.id===projectId)?.name||'项目'}名额不能低于已预约 ${booked} 人`;else total+=quota;});if(invalid){showToast(invalid);return;}item.projectIds=setup.projectIds;item.separateProjectQuota=true;item.limit=unlimited?null:total;Object.entries(setup.quotas).forEach(([projectId,quota])=>config.projectSessionQuotas[sessionProjectKey(window.editingSessionDate,item,projectId)]=quota);}else{const mode=document.querySelector('input[name="quickQuotaMode"]:checked')?.value||'unlimited';const value=q('#quickSessionQuota').value;const next=mode==='unlimited'?null:Number(value);if(mode==='limited'&&(!value||next<Math.max(1,item.booked))){showToast(item.booked?`名额不能低于已预约 ${item.booked} 人`:'请输入有效名额');return;}item.projectIds=setup.projectIds;item.separateProjectQuota=false;item.limit=next;}markDirty();renderConfig(true);openSessionDateEditor(window.editingSessionDate);return;}
    const adjustQuota=event.target.closest('[data-adjust-quota]');if(adjustQuota){window.adjustingSessionIndex=Number(adjustQuota.dataset.adjustQuota);const item=config.sessionsByDate[window.editingSessionDate][window.adjustingSessionIndex];openDialog(`<h2>调整场次名额</h2><p>场次时间和结构已锁定，只能调整名额；新名额不得低于当前已预约 ${item.booked} 人。</p><label class="config-field"><span>场次名额</span><input id="lockedSessionQuota" type="number" min="${item.booked}" value="${item.limit??item.booked}"></label><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary" data-confirm-locked-quota>确认</button></div>`);return;}
    const confirmLockedQuota=event.target.closest('[data-confirm-locked-quota]');if(confirmLockedQuota){const item=config.sessionsByDate[window.editingSessionDate][window.adjustingSessionIndex];const next=Number(q('#lockedSessionQuota').value);if(next<item.booked){showToast(`名额不能低于已预约 ${item.booked} 人`);return;}item.limit=next;closeLayer('configDialog');markDirty();renderConfig(true);return;}
    const reuseDate=event.target.closest('[data-reuse-session-date]');if(reuseDate){window.sessionCopyTarget=reuseDate.dataset.reuseSessionDate;openSheet(`<h2>选择复用来源日期</h2><div class="copy-scope-list">${Object.entries(config.sessionModes).filter(([date])=>date!==window.sessionCopyTarget).map(([date,mode])=>`<button data-reuse-source-date="${date}"><b>${date} · ${mode.count}个场次</b><span>${mode.time}</span></button>`).join('')}</div><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button></div>`);return;}
    const reuseSource=event.target.closest('[data-reuse-source-date]');if(reuseSource){const source=reuseSource.dataset.reuseSourceDate;const target=window.sessionCopyTarget;const sourceMode=config.sessionModes[source];config.sessionModes[target]={type:'configured',count:sourceMode.count,time:sourceMode.time};config.sessionsByDate[target]=cloneDateSessions(source,target);config.sessionOperationLogs.push({type:'copy-date',source,targets:[target],skipped:[],operatedAt:new Date().toISOString()});window.sessionCopyTarget=null;closeLayer('configSheet');markDirty();renderConfig(true);return;}
    const copySessionDate=event.target.closest('[data-copy-session-date]');if(copySessionDate){window.sessionCopySource=copySessionDate.dataset.copySessionDate;openSheet(`<h2>复制 ${window.sessionCopySource} 的场次</h2><div class="copy-scope-list"><button data-apply-session-scope="range"><b>指定日期范围</b><span>选择开始、截止日期</span></button><button data-apply-session-scope="month"><b>本月全部已选日期</b><span>仅处理 ${Number(config.sessionMonth.slice(5))} 月</span></button><button data-apply-session-scope="all"><b>全部未来已选日期</b><span>适合全年使用同一套场次</span></button></div><p class="config-hint warn">有预约记录的目标日期将跳过，不覆盖其原场次。</p><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button></div>`);return;}
    const manageSessionTemplates=event.target.closest('[data-manage-session-templates]');if(manageSessionTemplates){openSessionTemplateManager();return;}
    const deleteSessionTemplate=event.target.closest('[data-delete-session-template]');if(deleteSessionTemplate){const index=Number(deleteSessionTemplate.dataset.deleteSessionTemplate);const template=config.sessionTemplates[index];openDialog(`<h2>删除场次模板？</h2><p>“${template.name}”删除后不能再应用，已经应用到日期的场次不受影响。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary" data-confirm-delete-session-template="${index}">确认删除</button></div>`);return;}
    const confirmDeleteSessionTemplate=event.target.closest('[data-confirm-delete-session-template]');if(confirmDeleteSessionTemplate){config.sessionTemplates.splice(Number(confirmDeleteSessionTemplate.dataset.confirmDeleteSessionTemplate),1);closeLayer('configDialog');markDirty();renderConfig(true);openSessionTemplateManager();return;}
    const saveDateTemplate=event.target.closest('[data-save-date-template]');if(saveDateTemplate){window.templateSourceDate=saveDateTemplate.dataset.saveDateTemplate;openDialog(`<h2>保存场次模板</h2><label class="config-field"><span>模板名称</span><input id="sessionTemplateName" type="text" maxlength="20" placeholder="如：节假日场次"></label><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary" data-confirm-save-date-template>确认保存</button></div>`);return;}
    const confirmSaveDateTemplate=event.target.closest('[data-confirm-save-date-template]');if(confirmSaveDateTemplate){const name=q('#sessionTemplateName').value.trim();if(!name){showToast('请输入模板名称');return;}const date=window.templateSourceDate;const sessions=config.sessionsByDate[date]||[];if(!sessions.length){showToast('当天还没有可保存的场次');return;}config.sessionTemplates.push({name,sessions:sessions.map(item=>({...item,booked:0,projectIds:[...(item.projectIds||[])],projectQuotas:Object.fromEntries((item.projectIds||[]).filter(projectId=>Object.prototype.hasOwnProperty.call(config.projectSessionQuotas,sessionProjectKey(date,item,projectId))).map(projectId=>[projectId,config.projectSessionQuotas[sessionProjectKey(date,item,projectId)]]))}))});closeLayer('configDialog');markDirty();showToast('场次模板已保存');return;}
    const applyDateTemplate=event.target.closest('[data-apply-date-template]');if(applyDateTemplate){const date=applyDateTemplate.dataset.applyDateTemplate;if((config.sessionsByDate[date]||[]).some(item=>item.booked>0)){showToast('当天有已预约场次，不能整体应用模板');return;}window.templateTargetDate=date;openSheet(`<h2>应用场次模板</h2><div class="copy-scope-list">${config.sessionTemplates.map((template,index)=>`<button data-select-session-template="${index}"><b>${template.name}</b><span>${template.sessions.length}个场次 · ${sessionTimeSummary(template.sessions)}</span></button>`).join('')}</div><div class="config-sheet-actions"><button class="secondary" data-back-date-editor>取消</button></div>`);return;}
    const selectSessionTemplate=event.target.closest('[data-select-session-template]');if(selectSessionTemplate){const template=config.sessionTemplates[Number(selectSessionTemplate.dataset.selectSessionTemplate)];const date=window.templateTargetDate;config.sessionsByDate[date]=template.sessions.map((item,index)=>({...item,id:`${date}-template-${Date.now()}-${index}`,booked:0,projectIds:[...(item.projectIds||[])],projectQuotas:undefined}));config.sessionsByDate[date].forEach((session,index)=>Object.entries(template.sessions[index].projectQuotas||{}).forEach(([projectId,quota])=>config.projectSessionQuotas[sessionProjectKey(date,session,projectId)]=quota));config.sessionModes[date]={type:'configured',count:template.sessions.length,time:sessionTimeSummary(template.sessions)};config.sessionOperationLogs.push({type:'apply-template',source:template.name,targets:[date],skipped:[],operatedAt:new Date().toISOString()});markDirty();renderConfig(true);openSessionDateEditor(date);return;}
    const applyScope=event.target.closest('[data-apply-session-scope]');if(applyScope){const scope=applyScope.dataset.applySessionScope;if(scope==='range'){openSheet(`<h2>选择应用范围</h2><div class="date-range-form"><label class="config-field"><span>开始日期</span><input id="sessionRangeStart" type="date" min="2026-08-18"></label><label class="config-field"><span>截止日期</span><input id="sessionRangeEnd" type="date" min="2026-08-18"></label></div><p class="config-hint">确认后只校验范围内真正会被覆盖的已选日期。</p><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-confirm-session-range>确认应用</button></div>`);return;}const targets=config.selectedDates.filter(date=>date>='2026-08-18'&&(scope==='all'||date.startsWith(config.sessionMonth)));applySessionMode(targets,window.sessionCopySource||null);return;}
    const confirmSessionRange=event.target.closest('[data-confirm-session-range]');if(confirmSessionRange){const start=q('#sessionRangeStart').value,end=q('#sessionRangeEnd').value;if(!start||!end||start>end){showToast('请选择正确日期范围');return;}applySessionMode(config.selectedDates.filter(date=>date>=start&&date<=end),window.sessionCopySource||null);return;}
    const applyTemplate=event.target.closest('[data-apply-session-template]');if(applyTemplate){applySessionMode(config.selectedDates, null, applyTemplate.dataset.applySessionTemplate);return;}
    const editSessionTime=event.target.closest('[data-edit-session-time]');if(editSessionTime){const index=Number(editSessionTime.dataset.editSessionTime);const item=(config.sessionsByDate[window.editingSessionDate]||[])[index];if(item.booked>0){showToast('该场次已有预约，时间不能修改');return;}const [start,end]=item.time.split('-');openSheet(`<h2>修改场次时间</h2><label class="config-field"><span>开始时间 <b class="required">*</b></span><div class="picker-field-with-clear"><input id="sheetSessionStart" type="time" value="${start}"><button data-clear-picker-target="sheetSessionStart">清除</button></div></label><label class="config-field"><span>结束时间 <small>选填，清除后仅显示开始时间</small></span><div class="picker-field-with-clear"><input id="sheetSessionEnd" type="time" value="${end||''}"><button data-clear-picker-target="sheetSessionEnd">清除</button></div></label><div class="config-sheet-actions"><button class="secondary" data-back-date-editor>取消</button><button class="primary" data-save-session-time="${index}">保存时间</button></div>`);return;}
    const clearPicker=event.target.closest('[data-clear-picker-target]');if(clearPicker){const input=q(`#${clearPicker.dataset.clearPickerTarget}`);if(input){input.value='';input.dispatchEvent(new Event('change',{bubbles:true}));}return;}
    const saveSessionTime=event.target.closest('[data-save-session-time]');if(saveSessionTime){const date=window.editingSessionDate;const item=config.sessionsByDate[date][Number(saveSessionTime.dataset.saveSessionTime)];const start=q('#sheetSessionStart').value.trim(),end=q('#sheetSessionEnd').value.trim();if(!start){showToast('请选择开始时间');return;}if(end&&end<=start){showToast('结束时间必须晚于开始时间');return;}item.time=end?`${start}-${end}`:start;const list=config.sessionsByDate[date];sortSessions(list);config.sessionModes[date].time=sessionTimeSummary(list);markDirty();renderConfig(true);openSessionDateEditor(date);return;}
    const session = event.target.closest('[data-edit-session]'); if(session){ const item=(config.sessionsByDate[window.editingSessionDate]||[])[Number(session.dataset.editSession)]; openSheet(`<h2>${item.name?'修改':'添加'}场次名称</h2><label class="config-field"><span>场次名称 <small>选填，最多10个字</small></span><input id="sheetSessionName" type="text" maxlength="10" value="${item.name}" placeholder="不填则只展示场次时间"></label><div class="config-sheet-actions"><button class="secondary" data-back-date-editor>取消</button><button class="primary" data-save-session="${session.dataset.editSession}">保存名称</button></div>`); return; }
    const deleteSession=event.target.closest('[data-delete-session]');if(deleteSession){const index=Number(deleteSession.dataset.deleteSession);const item=config.sessionsByDate[window.editingSessionDate][index];if(item.booked>0){showToast('该场次已有预约，不能删除');return;}openDialog(`<h2>确认删除该场次？</h2><p>${item.time} 删除后将不再对游客开放。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary" data-confirm-delete-session="${index}">确认删除</button></div>`);return;}
    const confirmDeleteSession=event.target.closest('[data-confirm-delete-session]');if(confirmDeleteSession){const date=window.editingSessionDate;config.sessionsByDate[date].splice(Number(confirmDeleteSession.dataset.confirmDeleteSession),1);const list=config.sessionsByDate[date];if(list.length){config.sessionModes[date].count=list.length;config.sessionModes[date].time=sessionTimeSummary(list);}else{delete config.sessionModes[date];delete config.sessionsByDate[date];}closeLayer('configDialog');markDirty();renderConfig(true);openSessionDateEditor(date);return;}
    const backDateEditor=event.target.closest('[data-back-date-editor]');if(backDateEditor){openSessionDateEditor(window.editingSessionDate);return;}
    const saveSession=event.target.closest('[data-save-session]'); if(saveSession){const date=window.editingSessionDate;const item=config.sessionsByDate[date][Number(saveSession.dataset.saveSession)];item.name=q('#sheetSessionName').value.trim().slice(0,10);markDirty();renderConfig(true);openSessionDateEditor(date);return;}
    const toggleSessionProject=event.target.closest('[data-session-project-toggle]');if(toggleSessionProject){const key=sessionProjectKey(toggleSessionProject.dataset.date,toggleSessionProject.dataset.session,toggleSessionProject.dataset.project);const next=config.projectSessionEnabled[key]===false;config.projectSessionEnabled[key]=next;toggleSessionProject.classList.toggle('on',next);toggleSessionProject.setAttribute('aria-label',toggleSessionProject.getAttribute('aria-label').replace(next?'已禁用':'已启用',next?'已启用':'已禁用'));const row=toggleSessionProject.closest('.session-project-row');row?.classList.toggle('is-disabled',!next);const quota=row?.querySelector('[data-session-project-quota]');if(quota)quota.disabled=!next;markDirty();return;}
    const editProject=event.target.closest('[data-edit-project]');if(editProject){openProjectEditor(Number(editProject.dataset.editProject));return;}
    const toggleCategory=event.target.closest('[data-toggle-category]');if(toggleCategory){const index=Number(toggleCategory.dataset.toggleCategory);const name=config.categories[index];const next=!categoryIsEnabled(name);if(!next){const projectIds=config.projects.filter(item=>item.category===name).map(item=>item.id);const bookedFuture=[];Object.entries(config.sessionsByDate).forEach(([date,sessions])=>{if(date<'2026-08-18')return;(sessions||[]).forEach(session=>{if(session.booked>0&&(session.projectIds||[]).some(id=>projectIds.includes(id)))bookedFuture.push(`${date} ${session.time}`);});});if(bookedFuture.length){showToast('该分类下项目仍被有预约的未来场次使用，不能禁用');return;}Object.entries(config.sessionsByDate).forEach(([date,sessions])=>{if(date<'2026-08-18')return;(sessions||[]).forEach(session=>{const removed=(session.projectIds||[]).filter(id=>projectIds.includes(id));if(!removed.length)return;session.projectIds=session.projectIds.filter(id=>!projectIds.includes(id));removed.forEach(projectId=>{delete config.projectSessionQuotas[sessionProjectKey(date,session,projectId)];delete config.projectSessionBooked[sessionProjectKey(date,session,projectId)];});if(session.separateProjectQuota&&session.projectIds.length){session.limit=session.projectIds.reduce((sum,projectId)=>sum+(config.projectSessionQuotas[sessionProjectKey(date,session,projectId)]||0),0);}else if(!session.projectIds.length){session.separateProjectQuota=false;}});});}config.categoryStates=config.categoryStates||{};config.categoryStates[name]=next;markDirty();renderConfig(true);showToast(next?'分类已启用，分类下启用项目可重新关联场次':'分类已禁用，分类下项目不再对游客展示');return;}
    const deleteProject=event.target.closest('[data-delete-project]');if(deleteProject){const index=Number(deleteProject.dataset.deleteProject);const item=config.projects[index];if(item.booked){showToast('项目已有预约，不能删除');return;}openDialog(`<h2>确认删除项目？</h2><p>“${item.name}”尚无预约记录，删除后不可恢复。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary" data-confirm-delete-project="${index}">确认删除</button></div>`);return;}
    const confirmDeleteProject=event.target.closest('[data-confirm-delete-project]');if(confirmDeleteProject){config.projects.splice(Number(confirmDeleteProject.dataset.confirmDeleteProject),1);closeLayer('configDialog');markDirty();renderConfig(true);showToast('项目已删除，请保存当前步骤');return;}
    const projectImageAction=event.target.closest('[data-project-image-action]');if(projectImageAction){if(projectImageAction.dataset.projectImageAction==='remove'){window.projectDraftImage=false;updateProjectLogoEditor();return;}const input=document.createElement('input');input.type='file';input.accept='image/*';input.addEventListener('change',()=>{const file=input.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{window.projectDraftImage=reader.result;updateProjectLogoEditor();};reader.readAsDataURL(file);});input.click();return;}
    const saveProject=event.target.closest('[data-save-project]');if(saveProject){const name=q('#sheetProjectName').value.trim();if(!name){showToast('请输入项目名称');return;}const category=q('#sheetProjectCategory')?.value||'';if(config.categoryEnabled&&!category){showToast('请选择项目分类');return;}if(config.categoryEnabled&&!categoryIsEnabled(category)){showToast('所选分类已禁用，请选择启用中的分类');return;}const original=saveProject.dataset.saveProject==='new'?null:config.projects[Number(saveProject.dataset.saveProject)];const next={id:original?.id||Date.now(),name:name.slice(0,30),category,image:window.projectDraftImage||false,description:q('#sheetProjectDescription').value.trim().slice(0,60),enabled:original?.enabled??true,booked:original?.booked||0};if(original)Object.assign(original,next);else config.projects.push(next);closeLayer('configSheet');markDirty();renderConfig(true);showToast(original?'项目已更新，请保存当前步骤':'项目已添加并默认启用，请保存当前步骤');return;}
    const editCategory=event.target.closest('[data-category-edit]');if(editCategory){const index=Number(editCategory.dataset.categoryEdit);openSheet(`<h2>编辑分类</h2><label class="config-field"><span>分类名称 <small><b class="required">*</b></small></span><input id="sheetCategoryName" type="text" maxlength="20" value="${config.categories[index]}"></label><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-save-category="${index}">保存分类</button></div>`);return;}
    const deleteCategory=event.target.closest('[data-category-delete]');if(deleteCategory){const index=Number(deleteCategory.dataset.categoryDelete);const name=config.categories[index];const count=config.projects.filter(item=>item.category===name).length;if(count){showToast(`“${name}”下还有 ${count} 个项目，请先将项目移至其他分类`);return;}openDialog(`<h2>确认删除分类？</h2><p>“${name}”下没有项目，删除后不可恢复。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary" data-confirm-delete-category="${index}">确认删除</button></div>`);return;}
    const confirmDeleteCategory=event.target.closest('[data-confirm-delete-category]');if(confirmDeleteCategory){const index=Number(confirmDeleteCategory.dataset.confirmDeleteCategory);const name=config.categories[index];config.categories.splice(index,1);if(config.categoryStates)delete config.categoryStates[name];closeLayer('configDialog');markDirty();renderConfig(true);showToast('分类已删除，请保存当前步骤');return;}
    const saveCategory=event.target.closest('[data-save-category]');if(saveCategory){const index=Number(saveCategory.dataset.saveCategory);const oldName=config.categories[index];const name=q('#sheetCategoryName').value.trim();if(!name){showToast('请输入分类名称');return;}if(categoryNameExists(name,index)){showToast('分类名称已存在，请更换');return;}config.categories[index]=name;config.categoryStates=config.categoryStates||{};config.categoryStates[name]=categoryIsEnabled(oldName);if(name!==oldName)delete config.categoryStates[oldName];config.projects.forEach(item=>{if(item.category===oldName)item.category=name;});closeLayer('configSheet');markDirty();renderConfig(true);showToast('分类已更新，请保存当前步骤');return;}
    const saveNewCategory=event.target.closest('[data-save-new-category]');if(saveNewCategory){const name=q('#sheetCategoryName').value.trim();if(!name){showToast('请输入分类名称');return;}if(categoryNameExists(name)){showToast('分类名称已存在，请更换');return;}config.categories.push(name);config.categoryStates=config.categoryStates||{};config.categoryStates[name]=true;closeLayer('configSheet');markDirty();renderConfig(true);showToast('分类已添加并启用，请保存当前步骤');return;}
    const saveProjectStock=event.target.closest('[data-save-project-session-stock]');if(saveProjectStock){const date=saveProjectStock.dataset.date;const sessionIndex=Number(saveProjectStock.dataset.session);qa('[data-project-stock-id]',q('#configSheet')).forEach(input=>{const key=sessionProjectKey(date,sessionIndex,input.dataset.projectStockId);if(input.value==='')delete config.projectSessionQuotas[key];else config.projectSessionQuotas[key]=Math.max(1,Number(input.value)||1);});closeLayer('configSheet');markDirty();renderConfig(true);showToast('当前日期和场次的项目名额已保存');return;}
    const saveBatchProjectStock=event.target.closest('[data-save-batch-project-stock]');if(saveBatchProjectStock){const scope=q('input[name="batchProjectStockScope"]:checked')?.value||'all';const start=q('#batchProjectStockStart')?.value,end=q('#batchProjectStockEnd')?.value;if(scope==='range'&&(!start||!end||start>end)){showToast('请选择正确的开始和截止日期');return;}const dates=config.selectedDates.filter(date=>date>='2026-08-18'&&(config.sessionsByDate[date]||[]).length&&(scope==='all'||(date>=start&&date<=end)));if(!dates.length){showToast('所选范围内没有已配置场次的日期');return;}const values={};qa('[data-batch-project-stock-id]',q('#configSheet')).forEach(input=>values[input.dataset.batchProjectStockId]=input.value===''?null:Math.max(1,Number(input.value)||1));const blocked=[];dates.forEach(date=>(config.sessionsByDate[date]||[]).forEach(session=>Object.entries(values).forEach(([projectId,quota])=>{const key=sessionProjectKey(date,session,projectId);const booked=config.projectSessionBooked[key]||0;if(quota!==null&&quota<booked)blocked.push(`${date} ${session.time}`);})));if(blocked.length){showToast(`有 ${blocked.length} 个项目场次名额低于已预约人数，请单独调整`);return;}let sessionCount=0;dates.forEach(date=>(config.sessionsByDate[date]||[]).forEach(session=>{sessionCount++;Object.entries(values).forEach(([projectId,quota])=>{const key=sessionProjectKey(date,session,projectId);if(quota===null)delete config.projectSessionQuotas[key];else config.projectSessionQuotas[key]=quota;});}));closeLayer('configSheet');markDirty();renderConfig(true);showToast(`已应用到 ${dates.length} 个日期、${sessionCount} 个场次`);return;}
    const editField=event.target.closest('[data-field-edit]');if(editField){openFieldEditor(Number(editField.dataset.fieldEdit));return;}
    const deleteField=event.target.closest('[data-field-delete]');if(deleteField){const index=Number(deleteField.dataset.fieldDelete);const field=config.fields[index];openDialog(`<h2>确认删除填写项？</h2><p>将删除“${field.name}”。历史预约仍保留提交时的字段内容。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">取消</button><button class="primary danger" data-confirm-delete-field="${index}">确认删除</button></div>`);return;}
    const confirmDeleteField=event.target.closest('[data-confirm-delete-field]');if(confirmDeleteField){config.fields.splice(Number(confirmDeleteField.dataset.confirmDeleteField),1);closeLayer('configDialog');markDirty();renderConfig(true);showToast(config.fields.some(field=>field.type==='姓名')?'填写项已删除，请保存当前步骤':'姓名字段已删除；发布前必须重新添加姓名类型字段');return;}
    const addFieldOption=event.target.closest('[data-add-field-option]');if(addFieldOption){syncFieldDraftFromSheet();window.fieldDraft.options=[...(window.fieldDraft.options||[]),`选项${(window.fieldDraft.options||[]).length+1}`];openFieldEditor(window.editingFieldIndex,window.fieldDraft.type,window.fieldDraft);return;}
    const removeFieldOption=event.target.closest('[data-remove-field-option]');if(removeFieldOption){syncFieldDraftFromSheet();if(window.fieldDraft.options.length<=2){showToast('单选、多选至少保留2个选项');return;}window.fieldDraft.options.splice(Number(removeFieldOption.dataset.removeFieldOption),1);openFieldEditor(window.editingFieldIndex,window.fieldDraft.type,window.fieldDraft);return;}
    const saveFieldEditor=event.target.closest('[data-save-field-editor]');if(saveFieldEditor){syncFieldDraftFromSheet();const draft=window.fieldDraft;draft.name=String(draft.name||'').trim();if(!draft.name){showToast('请输入填写项名称');return;}if(draft.type==='姓名')draft.required=true;if(['单选','多选'].includes(draft.type)){draft.options=(draft.options||[]).map(item=>item.trim()).filter(Boolean);if(draft.options.length<2){showToast('请至少配置2个有效选项');return;}if(new Set(draft.options).size!==draft.options.length){showToast('选项名称不能重复');return;}}if(draft.type==='多选'){draft.minSelect=draft.required?Math.max(2,draft.minSelect||2):Math.max(0,draft.minSelect||0);draft.maxSelect=Math.min(draft.options.length,Math.max(1,draft.maxSelect||draft.options.length));if(draft.minSelect>draft.maxSelect){showToast('最少选择数量不能大于最多选择数量');return;}}if(draft.type==='多人/团体'){draft.required=true;draft.minPeople=1;draft.maxPeople=Math.max(1,draft.maxPeople||1);if(window.editingFieldIndex===null&&config.fields.some(field=>field.type==='多人/团体')){showToast('一个活动最多添加1个多人/团体控件');return;}}if(window.editingFieldIndex===null){draft.id=fieldIdFor(draft,Date.now());config.fields.push(draft);}else{draft.id=config.fields[window.editingFieldIndex].id||fieldIdFor(draft,window.editingFieldIndex);config.fields[window.editingFieldIndex]=draft;}closeLayer('configSheet');window.fieldDraft=null;window.editingFieldIndex=null;markDirty();renderConfig(true);showToast('填写项已更新，请保存当前步骤');return;}
    const action=event.target.closest('[data-config-action]'); if(!action) return; const type=action.dataset.configAction;
    if(type==='replaceLogo'){
      const input=document.createElement('input');input.type='file';input.accept='image/*';
      input.addEventListener('change',()=>{const file=input.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{config.draftLogo=reader.result;stepDirty=true;q('#configSaveState').textContent='LOGO待保存';renderConfig();showToast('活动LOGO已更新，保存后同步到列表');};reader.readAsDataURL(file);});
      input.click();return;
    }
    if(type==='removeLogo'){config.draftLogo=null;stepDirty=true;q('#configSaveState').textContent='LOGO待保存';renderConfig();showToast('已删除LOGO，列表将显示活动名首字');return;}
    if(type==='replaceCover'){
      const input=document.createElement('input');input.type='file';input.accept='image/*';
      input.addEventListener('change',()=>{const file=input.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{config.draftCover=reader.result;stepDirty=true;q('#configSaveState').textContent='封面待保存';renderConfig();showToast('封面图片已更新');};reader.readAsDataURL(file);});input.click();return;
    }
    if(type==='removeCover'){config.draftCover=null;stepDirty=true;q('#configSaveState').textContent='封面待保存';renderConfig();showToast('封面图片已删除');return;}
    if(type==='dateRange'){openSheet('<h2>添加连续日期</h2><div class="date-range-form"><label class="config-field"><span>开始日期</span><input id="rangeStartDate" type="date" min="2026-08-18"></label><label class="config-field"><span>截止日期</span><input id="rangeEndDate" type="date" min="2026-08-18"></label></div><p class="config-hint">包含开始和截止当天。</p><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-confirm-date-range>确认添加</button></div>');return;}
    if(type==='removeDateRange'){openSheet('<h2>删除连续日期</h2><div class="date-range-form"><label class="config-field"><span>开始日期</span><input id="removeRangeStart" type="date" min="2026-08-18"></label><label class="config-field"><span>截止日期</span><input id="removeRangeEnd" type="date" min="2026-08-18"></label></div><p class="config-hint">确认范围后才计算受影响日期；无预约日期删除，有预约日期自动保留。</p><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-confirm-remove-range>确认删除</button></div>');return;}
    if(type==='batchSessions'){window.sessionCopySource=null;openSheet('<h2>批量应用统一场次</h2><div class="copy-scope-list"><button data-apply-session-scope="all"><b>全部未来已选日期</b><span>应用上方统一场次方案</span></button><button data-apply-session-scope="range"><b>指定日期范围</b><span>范围内已选日期使用统一方案</span></button><button data-apply-session-template="VIP半小时场次"><b>全部日期套用“VIP半小时场次”模板</b><span>10:00—15:30 · 12个场次</span></button></div><p class="config-hint">应用后各目标日期生成独立场次，仍可分别修改。</p><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button></div>');return;}
    if(type==='editDefaultSessions'){openSheet(`<h2>编辑统一场次方案</h2><div class="date-section">${config.sessions.map((item,index)=>`<div class="session-edit-row"><div><strong>${item.name} · ${item.time}</strong><span>${item.limit===null?'名额不限':`每场 ${item.limit} 人`}</span></div><button data-edit-session="${index}">编辑 ›</button></div>`).join('')}</div><button class="config-outline-button date-manage-action" data-config-action="addSession">＋ 添加场次</button><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">关闭</button></div>`);return;}
    if(type==='confirmRemoveDate'){if(!config.pendingRemovalDates.length)return;openDialog(`<h2>确认移除 ${config.pendingRemovalDates.length} 个可约日期？</h2><p>${config.pendingRemovalDates.join('、')} 将不再对游客开放。仅无有效预约的日期可进入此步骤。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">暂不移除</button><button class="primary" data-confirm-remove-dates>确认移除</button></div>`);return;}
    if(type==='addSession'){config.sessions.push({name:'',time:'14:30',limit:null,booked:0});markDirty();renderConfig();showToast('已添加场次，保存后更新预览');return;}
    if(type==='addProject'){openProjectEditor();return;}
    if(type==='addCategory'){openSheet('<h2>新增分类</h2><label class="config-field"><span>分类名称 <small><b class="required">*</b></small></span><input id="sheetCategoryName" type="text" maxlength="20" placeholder="请输入分类名称"></label><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button><button class="primary" data-save-new-category>保存分类</button></div>');return;}
    if(type==='projectSessionInventory'){openProjectSessionInventory();return;}
    if(type==='batchProjectSessionInventory'){openBatchProjectSessionInventory();return;}
    if(type==='addField'){openSheet(`<h2>选择填写项类型</h2><div class="field-type-grid">${[['姓名','默认自动填充'],['手机号','支持微信授权加载'],['身份证号','大陆身份证校验'],['单行文本','最多50字'],['多行文本','最多200字'],['数字','非负整数，最多15位'],['单选','下拉框文字选项'],['多选','必填时最少选2项'],['日期','仅年月日'],['多人/团体','按填写人数统计，最少1人']].map(item=>`<button data-add-field-type="${item[0]}"><b>${item[0]}</b><span>${item[1]}</span></button>`).join('')}</div><div class="config-sheet-actions"><button class="secondary" data-close="configSheet">取消</button></div>`);return;}
    if(type==='hideRange'){showToast('已打开日期与场次选择');return;}
  });
  document.addEventListener('click',event=>{
    const command=event.target.closest('[data-rich-command]');if(command){event.preventDefault();const editor=command.closest('.rich-tools')?.nextElementSibling;editor?.focus();document.execCommand(command.dataset.richCommand,false);if(editor?.id==='cfgNoticeEditor')config.noticeHtml=editor.innerHTML;else if(editor)config.detailHtml=editor.innerHTML;return;}
    const action=event.target.closest('[data-rich-action]');if(!action)return;event.preventDefault();const editor=action.closest('.rich-tools')?.nextElementSibling;if(!editor)return;editor.focus();
    if(action.dataset.richAction==='image'){
      const input=document.createElement('input');input.type='file';input.accept='image/*';input.addEventListener('change',()=>{const file=input.files?.[0];if(!file)return;const reader=new FileReader();reader.onload=()=>{document.execCommand('insertImage',false,reader.result);if(editor.id==='cfgNoticeEditor')config.noticeHtml=editor.innerHTML;else config.detailHtml=editor.innerHTML;showToast('已插入示例图片；正式环境将先上传素材');};reader.readAsDataURL(file);});input.click();return;
    }
    if(action.dataset.richAction==='link'){
      const url=window.prompt('请输入链接地址','https://');if(!url)return;const text=window.getSelection()?.toString()||'查看详情';document.execCommand('insertHTML',false,`<a href="${url.replace(/"/g,'&quot;')}" target="_blank">${text}</a>`);if(editor.id==='cfgNoticeEditor')config.noticeHtml=editor.innerHTML;else config.detailHtml=editor.innerHTML;showToast('链接已插入');
    }
  });
  document.addEventListener('change',event=>{
    if(event.target.matches('[data-rich-size]')){const editor=event.target.closest('.rich-tools')?.nextElementSibling;editor?.focus();document.execCommand('fontSize',false,'7');editor?.querySelectorAll('font[size="7"]').forEach(node=>{node.removeAttribute('size');node.style.fontSize=`${event.target.value}px`;});if(editor?.id==='cfgNoticeEditor')config.noticeHtml=editor.innerHTML;else if(editor)config.detailHtml=editor.innerHTML;}
    if(event.target.matches('[data-rich-color]')){const editor=event.target.closest('.rich-tools')?.nextElementSibling;editor?.focus();document.execCommand('foreColor',false,event.target.value);if(editor?.id==='cfgNoticeEditor')config.noticeHtml=editor.innerHTML;else if(editor)config.detailHtml=editor.innerHTML;}
  });
  document.addEventListener('change',event=>{
    if(event.target.name==='noticeScope'){config.noticeScope=event.target.value;markDirty();renderConfig();}
    if(event.target.name==='batchProjectStockScope'){const range=q('#batchProjectStockRange');if(range)range.hidden=event.target.value!=='range';}
    if(event.target.matches('[data-session-project-quota]')){const input=event.target;const key=sessionProjectKey(input.dataset.date,input.dataset.session,input.dataset.project);const booked=config.projectSessionBooked[key]||0;if(input.value===''){delete config.projectSessionQuotas[key];markDirty();return;}const quota=Math.max(1,Number(input.value)||1);if(quota<booked){showToast(`名额不能低于已预约 ${booked} 人`);input.value=config.projectSessionQuotas[key]??booked;return;}config.projectSessionQuotas[key]=quota;input.value=quota;markDirty();}
    if(event.target.matches('[data-project-stock-date]')){openProjectSessionInventory(event.target.value,0);}
    if(event.target.matches('[data-project-stock-session]')){openProjectSessionInventory(q('#projectStockDate')?.value,Number(event.target.value));}
    if(event.target.name==='batchQuotaMode'){const input=q('#batchSessionQuota');if(input){input.disabled=event.target.value==='unlimited';if(input.disabled)input.value='';}}
    if(event.target.name==='quickQuotaMode'){const input=q('#quickSessionQuota');if(input){input.disabled=event.target.value==='unlimited';if(input.disabled)input.value='';else input.focus();}}
    if(/ShareProjectInventory$/.test(event.target.id)){const section=event.target.closest('.session-project-setup');const separate=!event.target.checked;section?.classList.toggle('is-separate',separate);const panel=section?.querySelector('.quick-project-quota-panel');if(panel)panel.hidden=!separate;}
    if(event.target.id==='bookingCutoffMode'){config.bookingCutoffMode=event.target.value;markDirty();const panel=q('#bookingCutoffAdvance');if(panel)panel.hidden=event.target.value!=='advance';}
    if(event.target.id==='bookingCutoffValue'){config.bookingCutoffValue=Math.max(1,Number(event.target.value)||1);markDirty();}
    if(event.target.id==='visitorCancelMode'){config.visitorCancelMode=event.target.value;markDirty();const panel=q('#visitorCancelAdvance');if(panel)panel.hidden=event.target.value!=='advance';}
    if(event.target.id==='visitorCancelValue'){config.visitorCancelValue=Math.max(1,Number(event.target.value)||1);markDirty();}
  });
  function updateBatchSessionResult(){
    const result=q('#batchSessionResult');
    if(!result)return;
    const start=q('#batchSessionStart')?.value||'';
    const end=q('#batchSessionEnd')?.value||'';
    const interval=Number(q('#batchSessionInterval')?.value||30);
    result.classList.remove('success','error');
    if(!start||!end){result.textContent='填写开始和结束时间后计算拆分数量';return;}
    const toMinutes=value=>{const [hour,minute]=value.split(':').map(Number);return hour*60+minute;};
    const total=toMinutes(end)-toMinutes(start);
    if(total<=0){result.classList.add('error');result.textContent='结束时间必须晚于开始时间';return;}
    if(total%interval!==0){result.classList.add('error');result.textContent=`总时长 ${total} 分钟不能按 ${interval} 分钟整除，请调整结束时间或间隔`;return;}
    result.classList.add('success');result.innerHTML=`将拆分为 <b>${total/interval}</b> 个场次`;
  }
  document.addEventListener('input',event=>{if(['batchSessionStart','batchSessionEnd'].includes(event.target.id))updateBatchSessionResult();if(event.target.id==='sheetProjectName'&&!window.projectDraftImage){const initial=q('#projectLogoInitial');if(initial)initial.textContent=displayInitial(event.target.value);}});
  document.addEventListener('change',event=>{if(['batchSessionStart','batchSessionEnd','batchSessionInterval'].includes(event.target.id))updateBatchSessionResult();});
  document.addEventListener('click',event=>{const add=event.target.closest('[data-add-field-type]');if(add){const type=add.dataset.addFieldType;if(['姓名','手机号','身份证号'].includes(type)&&config.fields.some(field=>field.type===type)){showToast(`${type}类型最多配置1份`);return;}openFieldEditor(null,type);return;}const confirm=event.target.closest('[data-confirm-config]');if(confirm){closeLayer('configSheet');markDirty();showToast(`${confirm.dataset.confirmConfig}，请保存当前步骤`);}});
  document.addEventListener('click',event=>{if(!event.target.closest('[data-config-action="addField"]'))return;queueMicrotask(()=>['姓名','手机号','身份证号'].forEach(type=>{if(!config.fields.some(field=>field.type===type))return;const button=q(`[data-add-field-type="${type}"]`,q('#configSheet'));if(!button)return;button.disabled=true;const note=q('span',button);if(note)note.textContent='已添加，仅可配置一份';}));});
  q('#configPrev').addEventListener('click',()=>{requestLeave(()=>{if(stepIndex===0){navigate(window.configReturnPage||'activities');return;}stepIndex--;renderConfig();});});
  q('#configSave').addEventListener('click',()=>{saveCurrent();});
  q('#configNext').addEventListener('click',()=>{requestLeave(()=>{if(stepIndex<steps.length-1){stepIndex++;renderConfig();}});});
  q('#configContent').addEventListener('input',()=>markDirty());
  q('#configContent').addEventListener('change',()=>markDirty());
  document.addEventListener('click',event=>{if(event.target.id==='publishConfig'){if(stepDirty){showToast('请先保存当前配置，再进行发布');return;}const failed=publishChecks().filter(item=>!item[1]);if(failed.length){showToast(`还有 ${failed.length} 项发布检查未通过`);q('.publish-check .missing')?.scrollIntoView({behavior:'smooth',block:'center'});return;}const wasPublished=currentActivity.status==='published';const visitorConfig=buildVisitorConfig();localStorage.setItem('scenicPublishedConfig',JSON.stringify(visitorConfig));const publishedMap=JSON.parse(localStorage.getItem('scenicPublishedActivitiesV34')||'{}');publishedMap[String(currentActivity.id)]={activityId:String(currentActivity.id),publishedAt:new Date().toISOString(),config:visitorConfig};localStorage.setItem('scenicPublishedActivitiesV34',JSON.stringify(publishedMap));currentActivity.status='published';isNewActivity=false;saveActivityDraft();window.syncVisitorActivityCatalog?.(currentActivity.id);q('#configMode').textContent='编辑预约活动';q('#configSaveState').textContent='已上架 · 刚刚更新';renderConfig(true);renderActivities();showToast(wasPublished?'发布更新成功，线上版本已更新':'发布成功，活动已上架');}});
  document.addEventListener('click',event=>{if(event.target.id==='offlineConfig'){openDialog('<h2>确认下架活动？</h2><p>下架后停止接受新预约；历史预约仍可查看、修改和取消。已保存配置继续保留，之后可重新发布。</p><div class="dialog-actions"><button class="secondary" data-close="configDialog">暂不下架</button><button class="danger" id="confirmOfflineConfig">确认下架</button></div>');return;}if(event.target.id==='confirmOfflineConfig'){currentActivity.status='offline';saveActivityDraft();window.syncVisitorActivityCatalog?.(null,currentActivity.id);closeLayer('configDialog');q('#configSaveState').textContent='已下架 · 配置已保存';renderConfig(true);renderActivities();showToast('活动已下架，停止接受新预约');}});
  q('#configPreviewOpen').addEventListener('click',()=>{previewTab=stepIndex===5?'form':stepIndex===1?'notice':'select';openPreview();});
  window.requestConfigLeave=requestLeave;
  q('#configPreviewTabs')?.addEventListener('click',event=>{const button=event.target.closest('[data-preview-tab]');if(!button)return;previewTab=button.dataset.previewTab;renderPreview();});
  qa('[data-preview-theme]').forEach(button=>button.addEventListener('click',()=>{const layer=q('#configPreviewLayer');layer.classList.toggle('theme-blue',button.dataset.previewTheme==='blue');layer.classList.toggle('theme-warm',button.dataset.previewTheme==='warm');qa('[data-preview-theme]').forEach(item=>item.classList.toggle('active',item===button));}));
  window.addEventListener('message',event=>{if(event.data?.type==='SCENIC_PREVIEW_CLOSE'){const layer=q('#configPreviewLayer');layer.classList.remove('open');layer.setAttribute('aria-hidden','true');}});

  function syncSharedInventoryUi(prefix){
    const share=q(`#${prefix}ShareProjectInventory`);if(!share)return;
    const separate=!share.checked;
    const quotaCard=prefix==='single'?q('#sheetSessionLimit')?.closest('.config-field'):prefix==='batch'?q('#batchSessionQuota')?.closest('.quota-mode-card'):q('#quickSessionQuota')?.closest('.quota-mode-card');
    if(quotaCard)quotaCard.hidden=separate;
    if(prefix==='single'&&!separate&&quotaCard&&!q('input[name="singleQuotaMode"]',quotaCard)){
      quotaCard.classList.add('quota-mode-card','shared-session-quota');
      quotaCard.innerHTML='<span>场次库存</span><div class="quota-mode-options"><label><input type="radio" name="singleQuotaMode" value="unlimited" checked> 不限额</label><label><input type="radio" name="singleQuotaMode" value="limited"> 限额</label></div><input id="sheetSessionLimit" class="quota-number-input" type="number" min="1" inputmode="numeric" placeholder="请输入场次名额" disabled>';
    }
    updateProjectQuotaTotal(prefix);
  }
  function updateProjectQuotaTotal(prefix){
    const totalNode=q(`#${prefix}ProjectQuotaTotal`),pendingNode=q(`#${prefix}ProjectQuotaPending`);if(!totalNode)return;
    const selected=qa(`[data-project-association="${prefix}"]:checked`,q('#configSheet')).map(input=>Number(input.value));let total=0,pending=0;
    selected.forEach(projectId=>{const input=q(`[data-project-setup-quota="${projectId}"]`,q('#configSheet'));if(!input?.value)pending++;else total+=Math.max(0,Number(input.value)||0);});
    totalNode.textContent=`${total} 名`;pendingNode.textContent=pending?`还有 ${pending} 个项目待填写`:`已选 ${selected.length} 个项目名额之和`;
    pendingNode.classList.toggle('warn',pending>0);
  }
  document.addEventListener('click',event=>{if(event.target.closest('[data-add-session-date]'))queueMicrotask(()=>syncSharedInventoryUi('single'));if(event.target.closest('[data-batch-add-session-date]'))queueMicrotask(()=>syncSharedInventoryUi('batch'));if(event.target.closest('[data-quick-quota]'))queueMicrotask(()=>syncSharedInventoryUi('quick'));});
  document.addEventListener('change',event=>{if(/ShareProjectInventory$/.test(event.target.id)){syncSharedInventoryUi(event.target.id.replace('ShareProjectInventory',''));}if(event.target.matches('[data-project-association]'))updateProjectQuotaTotal(event.target.dataset.projectAssociation);if(event.target.matches('[data-project-setup-quota]')){const section=event.target.closest('.session-project-setup');const share=section?.querySelector('[id$="ShareProjectInventory"]');if(share)updateProjectQuotaTotal(share.id.replace('ShareProjectInventory',''));}if(event.target.name==='singleQuotaMode'){const input=q('#sheetSessionLimit');if(input){input.disabled=event.target.value==='unlimited';if(input.disabled)input.value='';else input.focus();}}});
  document.addEventListener('input',event=>{if(event.target.matches('[data-project-setup-quota]')){const share=event.target.closest('.session-project-setup')?.querySelector('[id$="ShareProjectInventory"]');if(share)updateProjectQuotaTotal(share.id.replace('ShareProjectInventory',''));}});

  const draftStorageKey = 'scenicActivityDraftsV34';
  function readActivityDrafts(){try{return JSON.parse(localStorage.getItem(draftStorageKey)||'{}')||{};}catch(error){localStorage.removeItem(draftStorageKey);return {};}}
  function saveActivityDraft(){if(!currentActivity?.id)return;const drafts=readActivityDrafts();drafts[currentActivity.id]={config,currentActivity:{...currentActivity}};localStorage.setItem(draftStorageKey,JSON.stringify(drafts));localStorage.removeItem('scenicDraftConfigV34');}
  const storedActivityDrafts=readActivityDrafts();
  activities.forEach(activity=>{const savedActivity=storedActivityDrafts[activity.id]?.currentActivity;if(savedActivity?.id===activity.id)restoreActivityDraft(activity,savedActivity);});
  currentActivity = currentActivity || activities[0];
  try{
    const drafts=readActivityDrafts();
    const saved=drafts[currentActivity.id];
    if(saved?.config){Object.assign(config,saved.config);Object.entries(config.sessionsByDate||{}).forEach(([date,sessions])=>ensureSessionIds(date,sessions));}
    if(saved?.currentActivity&&saved.currentActivity.id===currentActivity.id)restoreActivityDraft(currentActivity,saved.currentActivity);
    const legacy=JSON.parse(localStorage.getItem('scenicDraftConfigV34')||'null');
    if(legacy?.currentActivity?.id){const matched=activities.find(item=>item.id===legacy.currentActivity.id);if(matched)restoreActivityDraft(matched,legacy.currentActivity);localStorage.removeItem('scenicDraftConfigV34');}
  }catch(error){localStorage.removeItem('scenicDraftConfigV34');}
  config.categoryStates=Object.fromEntries((config.categories||[]).map(name=>[name,config.categoryStates?.[name]!==false]));
  if(config.categoryEnabled){const fallbackCategory=config.categories.find(categoryIsEnabled)||config.categories[0]||'';config.projects.forEach(item=>{if(!config.categories.includes(item.category))item.category=fallbackCategory;});}
  currentActivity.image=assetUrl(currentActivity.image)||null;currentActivity.coverImage=assetUrl(currentActivity.coverImage)||null;config.detailHtml=normalizeRichAssetPaths(config.detailHtml);config.projects.forEach(item=>{item.image=assetUrl(item.image)||null;});
  config.draftLogo=currentActivity.image||null;config.draftCover=currentActivity.coverImage||null;
  q('#configActivityName').textContent = currentActivity.name;
  captureSavedState();
  // 草稿恢复可能改变活动上下架状态；恢复后立即刷新游客端状态目录。
  window.syncVisitorActivityCatalog?.();
  enableRailScrolling();
  enableItemSorting();
  renderConfig();
})();
