(function(){'use strict';
const copy=x=>JSON.parse(JSON.stringify(x));
const modes={none:'不需要信息',one:'仅需要一位客人信息',all:'需要所有客人信息',per:'每一张券需要'};
const label={name:'姓名',phone:'手机号',id:'身份证'};
const dayMs=86400000;
const dateMs=s=>{if(!s)return NaN;const d=String(s).replace(' ','T');return new Date(d.length===10?d+'T00:00:00':d).getTime();};
const dateText=d=>{const pad=n=>String(n).padStart(2,'0');return d.getFullYear()+'-'+pad(d.getMonth()+1)+'-'+pad(d.getDate());};
const shiftDate=(s,n)=>{const d=new Date(dateMs(s));d.setDate(d.getDate()+n);return dateText(d);};
const validRange=r=>Array.isArray(r)&&r.length===2&&r.every(x=>Number.isFinite(dateMs(x)))&&dateMs(r[0])<=dateMs(r[1]);
const covers=(outer,inner)=>validRange(outer)&&validRange(inner)&&dateMs(inner[0])>=dateMs(outer[0])&&dateMs(inner[1])<=dateMs(outer[1]);
const templates=[
{name:'免游客资料日历票',mode:'none',k:0,required:[],min:1},
{name:'单人姓名日历票',mode:'one',k:1,required:['name'],min:1},
{name:'双人实名日历票',mode:'per',k:2,required:['name','id'],min:1},
{name:'六人实名日历票',mode:'per',k:6,required:['name','id'],min:1},
{name:'最低两张起售票',mode:'all',k:1,required:['name'],min:2},
{name:'手机号限购日历票',mode:'one',k:1,required:['name'],min:1,limit:'phone'},
{name:'固定有效期票',mode:'none',k:0,required:[],min:1,usage:'fixed'},
{name:'身份证限购资格票',mode:'one',k:1,required:['name','id'],min:1,limit:'id',gender:'男性',area:'海南',age:'18–60周岁（含）'},
{name:'选择日期起三天有效票',mode:'none',k:0,required:[],min:1,usage:'selected-span',days:3},
{name:'固定期且下单后生效票',mode:'none',k:0,required:[],min:1,usage:'fixed-delay',delay:2},
{name:'可订当日提前两小时说明票',mode:'none',k:0,required:[],min:1,closeMode:'hours',hours:2},
{name:'比赛前七天开放票',mode:'none',k:0,required:[],min:1,openDays:7},
{name:'当天十二点截止票',mode:'none',k:0,required:[],min:1,closeMode:'clock',closeClock:'12:00:00'},
{name:'早鸟示例日历票',mode:'none',k:0,required:[],min:1,salesEnd:'2026-11-30 23:59:59'},
{name:'正价示例日历票',mode:'none',k:0,required:[],min:1,salesStart:'2026-12-01 00:00:00'},
{name:'其他比赛日期票',mode:'none',k:0,required:[],min:1,otherDate:true}];
const yearDates=Array.from({length:365},(_,i)=>shiftDate('2027-01-01',i));
const catalog=Array.from({length:240},(_,i)=>{
  const t=copy(templates[i%templates.length]),index=i+1;
  return Object.assign({usage:'calendar',openDays:null,closeMode:'advance',closeDays:1,closeClock:'23:59:59'},t,{
    id:'DEMO-'+String(index).padStart(4,'0'),selfId:String(382936+i),externalCode:'TK2GOUO'+String(index).padStart(5,'0'),
    name:'【演示】'+t.name+' '+String(Math.floor(i/templates.length)+1).padStart(2,'0'),scenic:'演示景区',
    issue:i%2?'三方系统发码':'自营发码',system:i%2?'演示票务系统':'—',price:i%16===13?398:i%16===14?498:500,
    stock:i%16===6?-1:100,status:i%24===23?'待上架':'已上架',
    playStart:t.otherDate?'2027-11-06':'2027-01-03',playEnd:t.otherDate?'2027-11-06':t.usage==='fixed'||t.usage==='fixed-delay'||t.usage==='selected-span'?'2027-01-05':'2027-01-03',
    calendarDates:t.usage&&t.usage!=='calendar'?null:t.otherDate?['2027-11-06']:i%16===0?yearDates.slice():i%16===1?['2027-01-01','2027-01-03','2027-01-08']:['2027-01-03'],
    saleStart:t.salesStart||'2026-10-01 00:00:00',saleEnd:t.salesEnd||'2027-01-05 23:59:59'
  });
});
catalog.forEach(t=>{if(!['fixed','fixed-delay'].includes(t.usage)){const dates=t.usage==='selected-span'?Array.from({length:Math.round((dateMs(t.playEnd)-dateMs(t.playStart))/dayMs)+1},(_,i)=>shiftDate(t.playStart,i)):t.calendarDates;t.calendarInventory=(dates||[]).map(date=>({date,price:t.price,stock:t.stock}));}});
window.EventTicketConfig={
 data(){return{ticketDialog:false,ticketDetailDialog:false,ticketDetail:null,ticketDetailEntry:null,ticketEditingIndex:-1,ticketPending:null,ticketFilters:{name:'',id:''},ticketQuery:{name:'',id:''},ticketPage:1,ticketPageSize:10,ticketError:''};},
 computed:{
  ticketRows(){return catalog.filter(t=>this.ticketVisible(t)&&(!this.ticketQuery.name||t.name.includes(this.ticketQuery.name))&&(!this.ticketQuery.id||this.ticketCode(t).toLowerCase().includes(this.ticketQuery.id.toLowerCase()))).map((t,index)=>({t,index,selectable:this.ticketCanSelect(t),sales:this.ticketSaleRange(t)})).sort((a,b)=>Number(b.selectable)-Number(a.selectable)||String(a.sales[0]||'9999').localeCompare(String(b.sales[0]||'9999'))||String(a.sales[1]||'9999').localeCompare(String(b.sales[1]||'9999'))||a.index-b.index).map(row=>row.t);},
  pagedTickets(){return this.ticketRows.slice((this.ticketPage-1)*this.ticketPageSize,this.ticketPage*this.ticketPageSize);},
  pendingTicket(){return this.ticketById(this.ticketPending);},
  projectTicketEntries(){return this.projectForm.ticketOptions||[];},
  projectCapacity(){return this.capacityInfo(this.projectTicketEntries);}
 },
 methods:{
 ticketVisible(t){return t.status==='已上架'||this.projectTicketEntries.some(e=>e.ticketId===t.id);},
 ticketById(id){return catalog.find(t=>t.id===id)||null;},
 ticketCode(t){return t.issue==='自营发码'?t.selfId:t.externalCode;},
 ticketQuote(t){if(['fixed','fixed-delay'].includes(t.usage))return{price:t.price,stock:t.stock};const r=this.projectForm.raceDates;if(!validRange(r)||r[0]!==r[1])return null;return(t.calendarInventory||[]).find(x=>x.date===r[0])||null;},
 ticketPriceText(t){const q=this.ticketQuote(t);return q&&q.price!=null?'￥'+q.price:'—';},
 ticketStockText(t){const q=this.ticketQuote(t);return q&&q.stock!=null?q.stock===-1?'99999张':q.stock+'张':'—';},
 ticketIdentity(t){return t.issue+' / '+this.ticketCode(t);},
 formatRange(r){return validRange(r)?r[0].replace(/-/g,'/')+' — '+r[1].replace(/-/g,'/'):'未配置';},
 raceDateText(){const r=this.projectForm.raceDates||[];return validRange(r)?r[0]===r[1]?r[0]:r.join(' 至 '):'未配置';},
 ticketMode(t){return t.mode==='per'?'每一张券需要 '+t.k+' 位游客信息':modes[t.mode];},
 ticketOpenRule(t){return t.openDays==null?'上架后立即开放预约':'游玩日期前'+t.openDays+'天开放';},
 ticketCloseRule(t){const clock=(t.closeClock||'23:59:59').split(':');if(t.closeMode==='hours')return'可订当日，需提前 '+t.hours+' 小时预定（仅做文案说明，不进行真实核销校验）';if(t.closeMode==='clock')return'可订当日，并在 '+Number(clock[0])+' 时 '+Number(clock[1])+' 分前预定';return'需提前 '+t.closeDays+' 天，并在 '+Number(clock[0])+' 时 '+Number(clock[1])+' 分前预定';},
 ticketUsageRule(t){if(t.usage==='fixed')return'下单不需要选择日期，固定日期内可使用 '+t.playStart+' 至 '+t.playEnd;if(t.usage==='fixed-delay')return'下单不需要选择日期，固定日期内 '+t.playStart+' 至 '+t.playEnd+'，且下单 '+t.delay+' 天后可使用';if(t.usage==='selected-span')return'下单选择日期起 '+t.days+' 天内可使用';return'下单选择日期当日可验证使用';},
 ticketSaleRange(t){let start=t.saleStart,end=t.saleEnd;const race=this.projectForm.raceDates||[];
  if(!['fixed','fixed-delay'].includes(t.usage)&&validRange(race)){
    const useDate=race[0];
    if(t.openDays!=null)start=[start,shiftDate(useDate,-t.openDays)+' 00:00:00'].sort().pop();
    const cutoff=t.closeMode==='hours'?useDate+' 23:59:59':t.closeMode==='clock'?useDate+' '+t.closeClock:shiftDate(useDate,-t.closeDays)+' '+(t.closeClock||'23:59:59');
    end=[end,cutoff].sort()[0];
  }
  return[start,end];
 },
 ticketInputSummary(t){const required=t.required||[];return ['name','id'].map(type=>(type==='name'?'姓名':'身份证')+'：'+(required.includes(type)?'已勾选（必填）':'未勾选')).join('；');},
 ticketRegistrationRange(t){
  const project=this.projectForm.registrationDates,sales=this.ticketSaleRange(t);
  if(!validRange(project)||!validRange(sales))return null;
  const result=[dateMs(project[0])>=dateMs(sales[0])?project[0]:sales[0],dateMs(project[1])<=dateMs(sales[1])?project[1]:sales[1]];
  return validRange(result)?result:null;
 },
 effectiveEntryRange(entry){const t=this.ticketById(entry.ticketId);return t?this.ticketRegistrationRange(t):null;},
 matchTicket(t,entry){const fields=this.projectForm.fields||[],n=this.projectForm.participants||0,k=t.mode==='none'?0:t.mode==='per'?t.k:1,rows=[];
  const add=(rule,source,result,ok=true)=>rows.push({rule,source,result,ok});
  const peopleOK=t.mode==='per'?n===k:n>=k;
  add('预订信息',this.ticketMode(t),'报名'+n+'人；'+(t.mode==='per'?'要求报名人数与每张票要求'+k+'位游客信息一致':k?'原票要求至少1位资料':'原票不要求游客资料'),peopleOK);
  const missing=t.required.filter(type=>!fields.some(f=>f.type===type&&f.required));
  add('输入信息',t.required.length?t.required.map(type=>(label[type]||type)+'必填').join('、'):'不要求姓名、身份证',missing.length?missing.map(type=>{const f=fields.find(f=>f.type===type),title=label[type]||type;return f?'报名'+title+'仅选填':'报名资料未配置'+title;}).join('；'):'报名资料满足原票要求',missing.length===0);
  add('起售限制',t.min>1?'最低'+t.min+'张起售':'不限','报名固定购买1张；此处不新增起售量拦截，提交沿用原下单校验');
  add('预订限制',t.limit?'每个'+(t.limit==='id'?'身份证':'手机号')+'限购1张':'不限',t.limit==='phone'?'购票人使用报名发起人授权手机号':t.limit?'全部报名人员资料传入，提交时沿用原票限购校验':'沿用原票规则');
  const idField=fields.find(f=>f.type==='id'&&f.required),hasId=!!idField;
  for(const [title,value]of[['性别限制',t.gender],['允许购买区域',t.area],['允许购买年龄',t.age]])add(title,value||'不限',value?(hasId?'报名资料已配置必填身份证':'原票限制依赖身份证，缺少必填身份证来源'):'无额外证件要求',!value||hasId);
  add('上下架状态',t.status,t.status==='已上架'?'已上架':'关联门票已下架',t.status==='已上架');
  const dates=this.projectForm.raceDates||[];let dateOK=false;
  if(validRange(dates)){
    if(t.usage==='fixed')dateOK=covers([t.playStart,t.playEnd],dates);
    else if(t.usage==='selected-span')dateOK=dates[0]===dates[1]&&(t.calendarInventory||[]).some(x=>x.date===dates[0]);
    else if(t.usage==='calendar')dateOK=dates[0]===dates[1]&&(t.calendarInventory||[]).some(x=>x.date===dates[0]);
  }
  add('使用日期',this.ticketUsageRule(t),t.usage==='fixed-delay'?'此类门票暂不支持关联，请选择其他门票':dates[0]!==dates[1]&&t.usage!=='fixed'?'多日比赛须选择固定有效期且完整覆盖比赛日期的门票':t.usage==='calendar'?(dateOK?'比赛当天已配置价格库存日期':'比赛当天未配置价格库存日期'):dateOK?'完整覆盖比赛日期':'未完整覆盖比赛日期',dateOK);
  const sales=this.ticketSaleRange(t),effective=this.ticketRegistrationRange(t);
  add('可售时间',this.formatRange(sales),effective?'可报名时间：'+this.formatRange(effective):'报名时间与门票可售时间不匹配',!!effective);
  return rows;
 },
 ticketDetailRows(t,entry){return this.matchTicket(t,entry).filter(r=>r.rule!=='起售限制').map(r=>Object.assign({},r,{rule:({'预订信息':'预定信息','预订限制':'预定限制'})[r.rule]||r.rule,result:r.rule==='使用日期'?'比赛日期：'+this.raceDateText()+'；'+r.result:r.result}));},
 ticketMatchLabel(t,entry){const bad=this.matchTicket(t,entry).filter(x=>!x.ok);if(!bad.length)return'匹配';const idMissing=!(this.projectForm.fields||[]).some(f=>f.type==='id'&&f.required),qualifications=['性别限制','允许购买区域','允许购买年龄'],parts=bad.filter(x=>!(idMissing&&qualifications.includes(x.rule))).map(x=>x.rule+'：'+x.result);if(idMissing&&bad.some(x=>qualifications.includes(x.rule)))parts.push('原票有'+bad.filter(x=>qualifications.includes(x.rule)).map(x=>x.rule).join('、')+'，需报名身份证必填');return parts.join('；');},
 ticketCanSelect(t){const duplicate=this.projectTicketEntries.some((e,i)=>e.ticketId===t.id&&i!==this.ticketEditingIndex);return !duplicate&&this.matchTicket(t).every(x=>x.ok);},
 ticketDuplicate(t){return this.projectTicketEntries.some((e,i)=>e.ticketId===t.id&&i!==this.ticketEditingIndex);},
 openTicketPicker(index){this.ticketEditingIndex=Number.isInteger(index)?index:-1;this.ticketFilters={name:'',id:''};this.ticketQuery={name:'',id:''};this.ticketPage=1;const e=this.projectTicketEntries[this.ticketEditingIndex];this.ticketPending=e?e.ticketId:null;this.ticketDialog=true;},
 searchTickets(){this.ticketQuery={name:this.ticketFilters.name.trim(),id:this.ticketFilters.id.trim()};this.ticketPage=1;},
 resetTickets(){this.ticketFilters={name:'',id:''};this.searchTickets();},
 showTicketDetail(t,entry){this.ticketDetail=t;this.ticketDetailEntry=entry||null;this.ticketDetailDialog=true;},
 confirmTicket(){const t=this.pendingTicket;if(!t||!this.ticketCanSelect(t)){this.$message.error('请选择可匹配且未重复关联的门票');return;}
  if(!Array.isArray(this.projectForm.ticketOptions))this.$set(this.projectForm,'ticketOptions',[]);
  const old=this.projectTicketEntries[this.ticketEditingIndex],entry=old?Object.assign({},old,{ticketId:t.id}):{id:'ticket-option-'+Date.now(),ticketId:t.id,name:'',restrictionNotice:''};
  if(old)this.projectForm.ticketOptions.splice(this.ticketEditingIndex,1,entry);else this.projectForm.ticketOptions.push(entry);
  this.$delete(this.projectForm,'ticketId');this.$set(this.projectForm,'ticketDemo',true);this.ticketError='';this.ticketDialog=false;
 },
 async removeTicketOption(entry){if(this.ticketAssociationLocked(entry)){this.$message.error('该关联门票已有订单，不能移除');return;}try{await this.$confirm('确认移除该关联门票？','提示',{confirmButtonText:'移除',cancelButtonText:'取消',type:'warning'});this.projectForm.ticketOptions=this.projectTicketEntries.filter(e=>e.id!==entry.id);}catch(e){}},
 capacityInfo(entries){let tickets=0,unlimited=false;for(const e of entries){const t=this.ticketById(e.ticketId);if(!t)continue;const q=this.ticketQuote(t);if(!q)continue;if(q.stock===-1)unlimited=true;else tickets+=Math.max(0,q.stock||0);}const n=this.projectForm.participants||0;return{unlimited,tickets,people:tickets*n};},
 capacityLabel(){const c=this.projectCapacity;return c.unlimited?'关联票中有不限库存票':c.tickets+'张 × '+this.projectForm.participants+'人 = '+c.people+'人';},
 capacityError(){if(this.projectHasRegistration)return'';if(this.projectForm.placesLimited===false)return'';const c=this.projectCapacity;return !c.unlimited&&c.people<this.projectForm.totalPlaces?'各票库存折算合计'+c.people+'人，少于项目总报名名额'+this.projectForm.totalPlaces+'人':'';},
 checkTicket(){if(!this.projectTicketEntries.length){this.ticketError='请至少关联一张门票';return false;}
  const ids=new Set();for(const e of this.projectTicketEntries){const t=this.ticketById(e.ticketId);if(!t){this.ticketError='关联门票不存在，请重新选择';return false;}if(ids.has(t.id)){this.ticketError='同一张门票不能重复关联';return false;}ids.add(t.id);if(!e.name||!e.name.trim()){this.ticketError='请填写各报名选项的展示名称';return false;}if(!this.matchTicket(t,e).every(r=>r.ok)){this.ticketError='“'+e.name+'”配置不匹配：'+this.ticketMatchLabel(t,e);return false;}}
  const error=this.capacityError();if(error){this.ticketError=error;return false;}this.ticketError='';return true;
 },
 finishTicketProject(){if(!this.checkTicket())return;if(!this.persistProjectStep(true))return;this.$message.success('演示配置已保存，未接入真实门票和下单');this.view='projects';this.$nextTick(()=>this.$refs.workspace.scrollTop=0);},
 ticketGuestSource(){return'全部'+this.projectForm.participants+'位参赛者已收集的资料均传入；不按原票前端信息框数量截取。购票人使用报名发起人授权手机号。';}
 }
};
})();
