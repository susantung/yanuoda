const activities=[
  {id:'ACT000001',name:'呀诺达溪降体验预约',status:'已发布',total:128600,today:32,updated:'2026-08-19 18:23:00',updater:'苏珊',created:'2026-08-18 09:30:12',creator:'苏珊'},
  {id:'ACT000002',name:'雨林观景线路预约',status:'已发布',total:96,today:18,updated:'2026-08-13 18:05:00',updater:'林晓',created:'2026-08-11 10:16:30',creator:'林晓'},
  {id:'ACT000003',name:'VIP 私家团场次预约',status:'已发布',total:42,today:0,updated:'2026-08-12 11:30:00',updater:'苏珊',created:'2026-08-10 14:21:08',creator:'苏珊'},
  {id:'ACT000004',name:'测试活动｜已下架且无预约',status:'已下架',total:0,today:0,updated:'2026-08-19 15:20:00',updater:'当前管理员',created:'2026-08-19 14:05:11',creator:'当前管理员'}
];
const rolePools={
  管理员:[{id:'AD001',name:'苏珊',phone:'15677523123',date:'2026-08-18 09:12:20',status:'启用'},{id:'AD002',name:'王绘明',phone:'18380435205',date:'2026-08-19 11:26:10',status:'启用'},{id:'AD003',name:'赵敏',phone:'13988668866',date:'2026-08-20 08:40:25',status:'禁用'}],
  运营人员:[{id:'OP001',name:'林晓',phone:'13800135608',date:'2026-08-18 10:20:16',status:'启用'},{id:'OP002',name:'陈晨',phone:'18612343142',date:'2026-08-19 09:08:32',status:'启用'},{id:'OP003',name:'李青',phone:'13555667788',date:'2026-08-20 09:05:16',status:'启用'}]
};
const activityBindings={管理员:{ACT000001:['AD001','AD002'],ACT000002:['AD002'],ACT000003:['AD001'],ACT000004:[]},运营人员:{ACT000001:['OP001','OP002'],ACT000002:['OP001'],ACT000003:['OP002'],ACT000004:[]}};
const bindingDates={ACT000001:{OP001:'2026-08-18 10:28:06',OP002:'2026-08-19 09:12:44'},ACT000002:{OP001:'2026-08-18 11:05:30'},ACT000003:{OP002:'2026-08-19 09:20:12'}};
let currentActivity=activities[0];
let currentRole='管理员';
const $=s=>document.querySelector(s),$$=s=>[...document.querySelectorAll(s)];
function toast(text){const el=$('#toast');el.textContent=text;el.classList.add('show');setTimeout(()=>el.classList.remove('show'),1600)}
function renderActivities(list=activities){$('#activityRows').innerHTML=list.map(a=>`<tr><td>${a.id}</td><td title="${a.name}">${a.name}</td><td><span class="status ${a.status==='已发布'?'published':'offline'}">${a.status}</span></td><td>${a.total}</td><td>${a.today}</td><td>${a.updated}</td><td>${a.updater}</td><td>${a.created}</td><td>${a.creator}</td><td class="operation"><button class="link-btn" data-promo="${a.id}">推广</button><button class="link-btn" data-operator="${a.id}">运营管理</button></td></tr>`).join('');$('#totalText').textContent=`共 ${list.length} 条`}
function openModal(id){$(id).classList.add('open');$(id).setAttribute('aria-hidden','false')}
function closeModal(el){const modal=el.closest('.modal');modal.classList.remove('open');modal.setAttribute('aria-hidden','true')}
function setPromotion(a){currentActivity=a;$('#miniPath').value=`/pages/scenicReservation/index?activityId=${a.id}`;$('#h5Path').value=`https://promotion.elong.com/jingqu/scenic-h5/prod/index.html#/h5JumpMiniprogram?business=scenicReservation&activityId=${a.id}`}
function currentPool(){return rolePools[currentRole]}
function boundOperators(){return (activityBindings[currentRole][currentActivity.id]||[]).map(id=>currentPool().find(x=>x.id===id)).filter(Boolean)}
function renderOperators(list=boundOperators()){$('#operatorRows').innerHTML=list.length?list.map(o=>`<tr><td>${o.name}</td><td>${o.phone}</td><td>${bindingDates[currentActivity.id]?.[o.id]||'2026-08-20 10:00:00'}</td><td><span class="status ${o.status==='启用'?'published':'offline'}">${o.status}</span></td></tr>`).join(''):`<tr><td colspan="4" style="text-align:center;color:#909399">暂无已配置人员</td></tr>`;$('#operatorTotal').textContent=`共 ${list.length} 条`}
function renderBindRows(){const selected=new Set(activityBindings[currentRole][currentActivity.id]||[]);$('#bindDialogTitle').textContent=`选择活动/场次${currentRole}`;$('#bindTip').textContent=`从当前景区已创建的“活动/场次${currentRole}”中勾选；同一人员可配置到多个活动。`;$('#bindRows').innerHTML=currentPool().map(o=>`<tr class="${o.status==='禁用'?'disabled-person':''}"><td><input type="checkbox" data-bind-id="${o.id}" ${selected.has(o.id)?'checked':''} ${o.status==='禁用'?'disabled':''}></td><td>${o.name}</td><td>${o.phone}</td><td><span class="status ${o.status==='启用'?'published':'offline'}">${o.status}</span></td></tr>`).join('')}
function renderRoleOperators(list=currentPool()){$('#roleRows').innerHTML=list.map(o=>`<tr><td>${o.name}</td><td>${o.phone}</td><td>${o.date}</td><td><span class="status ${o.status==='启用'?'published':'offline'}">${o.status}</span></td><td><button class="link-btn" data-role-toggle="${o.id}">${o.status==='启用'?'禁用':'启用'}</button><button class="link-btn" data-password="${o.id}">修改密码</button></td></tr>`).join('');$('#roleTotal').textContent=`共 ${list.length} 条`}
function showPage(page){const scenic=page==='scenic';$('#activityPage').classList.toggle('hidden',scenic);$('#scenicRolePage').classList.toggle('hidden',!scenic);$('#tabTitle').textContent=scenic?'景区管理':'活动管理';$('#breadGroup').textContent=scenic?'门票商品':'活动预约管理';$('#breadTitle').textContent=scenic?'景区管理':'活动管理';$('#activityMenu').classList.toggle('active-submenu',!scenic);$('#scenicMenu').classList.toggle('active-submenu',scenic);document.title=scenic?'景区管理':'活动管理'}
document.addEventListener('click',e=>{
  const p=e.target.closest('[data-promo]');if(p){setPromotion(activities.find(x=>x.id===p.dataset.promo));openModal('#promotionModal')}
  const o=e.target.closest('[data-operator]');if(o){currentActivity=activities.find(x=>x.id===o.dataset.operator);$('#operatorTitle').textContent=`活动：${currentActivity.name}`;renderOperators();openModal('#operatorModal')}
  if(e.target.matches('[data-close]'))closeModal(e.target);if(e.target.classList.contains('modal')){e.target.classList.remove('open');e.target.setAttribute('aria-hidden','true')}
  const tab=e.target.closest('[data-promo-tab]');if(tab){$$('[data-promo-tab]').forEach(x=>x.classList.toggle('active',x===tab));$$('[data-promo-panel]').forEach(x=>x.classList.toggle('hidden',x.dataset.promoPanel!==tab.dataset.promoTab))}
  const cp=e.target.closest('[data-copy]');if(cp){navigator.clipboard?.writeText($('#'+cp.dataset.copy).value);toast('已复制')}
  if(e.target.matches('[data-action="downloadQr"]'))toast('已按当前尺寸生成下载文件');if(e.target.matches('[data-action="refreshQr"]'))toast('小程序码已刷新');
  if(e.target.id==='addOperator'){renderBindRows();openModal('#bindOperatorModal')}
  if(e.target.id==='saveBindings'){activityBindings[currentRole][currentActivity.id]=$$('[data-bind-id]:checked').map(x=>x.dataset.bindId);renderOperators();$('#bindOperatorModal').classList.remove('open');toast(`活动/场次${currentRole}已更新`)}
  if(e.target.id==='addRoleOperator'){$('#inviteTip').textContent=`将二维码分享给活动/场次${currentRole}，其扫码注册成功后，即成为当前景区的活动/场次${currentRole}。`;openModal('#inviteRoleModal')}
  const toggle=e.target.closest('[data-role-toggle]');if(toggle){const person=currentPool().find(x=>x.id===toggle.dataset.roleToggle);person.status=person.status==='启用'?'禁用':'启用';renderRoleOperators();toast('角色人员状态已更新')}
  if(e.target.closest('[data-password]'))toast('已打开修改密码流程');
  if(e.target.id==='scenicMenu'){currentRole='管理员';$$('[data-system-role]').forEach(x=>x.classList.toggle('active',x.dataset.systemRole==='管理员'));renderRoleOperators();showPage('scenic')}if(e.target.id==='activityMenu')showPage('activity');
  const bindingRole=e.target.closest('[data-binding-role]');if(bindingRole){currentRole=bindingRole.dataset.bindingRole;$$('[data-binding-role]').forEach(x=>x.classList.toggle('active',x===bindingRole));renderOperators()}
  const systemRole=e.target.closest('[data-system-role]');if(systemRole){currentRole=systemRole.dataset.systemRole;$$('[data-system-role]').forEach(x=>x.classList.toggle('active',x===systemRole));renderRoleOperators()}
});
$('#filterForm').addEventListener('submit',e=>{e.preventDefault();const n=$('#nameFilter').value.trim(),s=$('#statusFilter').value;renderActivities(activities.filter(a=>(!n||a.name.includes(n))&&(!s||a.status===s)))});
$('#resetFilter').addEventListener('click',()=>{$('#nameFilter').value='';$('#statusFilter').value='';renderActivities()});
$('#operatorFilter').addEventListener('submit',e=>{e.preventDefault();const n=$('#operatorName').value.trim(),p=$('#operatorPhone').value.trim();renderOperators(boundOperators().filter(o=>(!n||o.name.includes(n))&&(!p||o.phone.includes(p))))});
$('#resetOperator').addEventListener('click',()=>{$('#operatorName').value='';$('#operatorPhone').value='';renderOperators()});
$('#roleFilter').addEventListener('submit',e=>{e.preventDefault();const n=$('#roleName').value.trim(),p=$('#rolePhone').value.trim();renderRoleOperators(currentPool().filter(o=>(!n||o.name.includes(n))&&(!p||o.phone.includes(p))))});
$('#resetRole').addEventListener('click',()=>{$('#roleName').value='';$('#rolePhone').value='';renderRoleOperators()});
renderActivities();renderOperators();renderRoleOperators();
