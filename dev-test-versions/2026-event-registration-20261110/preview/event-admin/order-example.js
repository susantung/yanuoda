(function(){
'use strict';
const projectId='project-ordered-example';
window.EventOrderExampleProject={id:projectId,eventId:'event-yanoda-2027',name:'专业竞技组（已有订单示例）',description:'双人组队报名。',raceDates:['2027-01-03','2027-01-03'],registrationDates:['2026-11-06 00:00:00','2026-11-21 23:59:59'],configurationComplete:true,participants:2,signature:true,ticketLinked:true,placesLimited:true,totalPlaces:100,sort:3,registrationNotice:'<p>请核对参赛资料，完成全员签署后，由发起人统一提交并付款。</p>',fields:[{id:'name',type:'name',label:'姓名',required:true},{id:'phone',type:'phone',label:'联系电话',required:true},{id:'identity',type:'id',label:'身份证',required:true}],materials:[{id:'example-declaration',title:'参赛声明',content:'<p>本人已阅读参赛说明，了解比赛相关要求并自愿参加。</p>',mode:'bottom',seconds:5}],ticketOptions:[{id:'ordered-ticket-example',ticketId:'DEMO-0003',name:'双人报名'}]};
const registration={id:'BM202611090001',projectId,orderNo:'DD202611090001',ticketEntryId:'ordered-ticket-example',ticketId:'DEMO-0003',ticketName:'【演示】双人实名日历票 01',displayName:'双人报名',quantity:1,amount:500,status:'报名成功',orderStatus:'已付款',submittedAt:'2026-11-09 09:00:00',paidAt:'2026-11-09 09:02:00',raceDates:['2027-01-03','2027-01-03'],purchaserPhone:'13800000001',participants:[{name:'张测试',phone:'13800000001',identity:'110101199001010000',signedAt:'2026-11-09 08:55:00'},{name:'李测试',phone:'13800000002',identity:'110101199002020000',signedAt:'2026-11-09 08:58:00'}]};
registration.fieldsSnapshot=JSON.parse(JSON.stringify(window.EventOrderExampleProject.fields));
const registrations=[registration];
const examples=[
 {id:'BM202611090002',status:'资料待完善',participants:[{name:'王测试',phone:'13800000003',identity:''},{name:'',phone:'',identity:''}]},
 {id:'BM202611090003',status:'待签署',participants:[{name:'赵测试',phone:'13800000004',identity:'110101199003030000',signedAt:'2026-11-09 09:10:00'},{name:'陈测试',phone:'13800000005',identity:'110101199004040000'}]},
 {id:'BM202611090004',status:'待提交',participants:[{name:'刘测试',phone:'13800000006',identity:'110101199005050000',signedAt:'2026-11-09 09:15:00'},{name:'周测试',phone:'13800000007',identity:'110101199006060000',signedAt:'2026-11-09 09:18:00'}]},
 {id:'BM202611090006',status:'已取消',orderNo:'DD202611090006',orderStatus:'已退款',submittedAt:'2026-11-09 09:30:00',participants:JSON.parse(JSON.stringify(registration.participants))},
 {id:'BM202611090005',status:'待付款',orderNo:'202611090005',ticketSystemOrderNo:'DD202611090005',issuanceType:'third',orderStatus:'待付款',submittedAt:'2026-11-09 09:25:00',participants:[{name:'吴测试',phone:'13800000008',identity:'110101199007070000',signedAt:'2026-11-09 09:20:00'},{name:'郑测试',phone:'13800000009',identity:'110101199008080000',signedAt:'2026-11-09 09:23:00'}]}
];
examples.forEach(example=>{const record=JSON.parse(JSON.stringify(registration));Object.assign(record,{orderNo:'',orderStatus:'',submittedAt:'',paidAt:'',amount:0},example);if(!record.submittedAt)delete record.fieldsSnapshot;if(!record.orderNo){record.ticketName='';record.ticketId='';record.ticketEntryId='';record.displayName='';}registrations.push(record);});
const emptyFilters=()=>({name:'',phone:'',identity:'',status:'',orderNo:'',orderStatus:''});
window.EventOrderExample={
 data(){return{registrationNow:Date.now(),registrationProject:null,exampleRegistrations:registrations,selectedRegistration:null,registrationFiltersExpanded:false,registrationFilters:emptyFilters(),appliedRegistrationFilters:emptyFilters(),registrationPage:1,registrationPageSize:10,registrationStatuses:['资料待完善','待签署','待提交','待付款','报名成功','已取消']};},
 mounted(){this._registrationClock=setInterval(()=>{this.registrationNow=Date.now();},1000);},
 beforeDestroy(){clearInterval(this._registrationClock);},
 computed:{registrationProjectName(){return this.registrationProject?this.registrationProject.name:'';},projectHasOrder(){return this.exampleRegistrations.some(r=>r.projectId===this.projectEditingId&&(r.orderNo||r.ticketSystemOrderNo));},projectHasRegistration(){return this.exampleRegistrations.some(r=>r.projectId===this.projectEditingId);},registrationRows(){const f=this.appliedRegistrationFilters;return this.exampleRegistrations.filter(r=>r.projectId===(this.registrationProject||{}).id&&(!f.status||r.status===f.status)&&(!f.orderStatus||r.orderStatus===f.orderStatus)&&(!f.orderNo||this.registrationOrderNo(r).includes(f.orderNo.trim()))&&r.participants.some(p=>['name','phone','identity'].every(k=>!f[k]||String(p[k]||'').includes(f[k].trim()))));},pagedRegistrationRows(){return this.registrationRows.slice((this.registrationPage-1)*this.registrationPageSize,this.registrationPage*this.registrationPageSize);},registrationDisplayNames(){return (this.registrationProject&&this.registrationProject.ticketOptions||[]).map(t=>t.name).filter(Boolean).join('、')||'—';}},
 methods:{
 projectRegistrationStatus(project,now=this.registrationNow){const dates=project&&project.registrationDates;if(!dates||dates.length!==2)return '未配置';const times=dates.map(d=>Date.parse(String(d).replace(' ','T')+'+08:00'));if(times.some(t=>!Number.isFinite(t))||times[0]>times[1])return '未配置';return now<times[0]?'未开始':now>times[1]?'已截止':'进行中';},
 projectRegistrationStatusType(project){return {'未开始':'info','进行中':'success','已截止':'warning'}[this.projectRegistrationStatus(project)]||'info';},

 registeredParticipantCount(project){return this.exampleRegistrations.filter(r=>r.projectId===project.id&&r.status==='报名成功').reduce((n,r)=>n+r.participants.length,0);},
 projectRegistrationSummary(project){return this.registeredParticipantCount(project)+'/'+(project.placesLimited===false?'不限':project.totalPlaces>0?project.totalPlaces:'未配置');},
 eventRegistrationSummary(event){const list=this.projects.filter(p=>p.eventId===event.id);const count=list.reduce((n,p)=>n+this.registeredParticipantCount(p),0);const limit=list.some(p=>p.placesLimited===false)?'不限':list.some(p=>!(p.totalPlaces>0))?'未配置':list.reduce((n,p)=>n+Number(p.totalPlaces),0);return count+'/'+limit;},
 registrationOrderNo(r){return r.issuanceType==='third'?r.ticketSystemOrderNo||'待返回':r.orderNo||'—';},
 searchRegistrationRecords(){this.appliedRegistrationFilters=Object.assign({},this.registrationFilters);this.registrationPage=1;},
 resetRegistrationRecords(){this.registrationFilters=emptyFilters();this.searchRegistrationRecords();},
 openRegistrationDetail(record){const key='registrationDetail:'+record.id;if(this.openTabs.some(t=>t.key===key)){this.activateTab(key);return;}this.stashCurrentTab();this.selectedRegistration=record;this.view='registrationDetail';this.$nextTick(()=>this.$refs.workspace.scrollTop=0);},
 registrationFields(record){if(record.submittedAt)return record.fieldsSnapshot||[];const latest=(this.projects||[]).find(p=>p.id===record.projectId)||this.registrationProject;return latest&&latest.fields||[];},
 participantFieldValue(person,field){const keys={name:'name',phone:'phone',id:'identity'};const value=person[ keys[field.type]||field.id ];return Array.isArray(value)?value.join('、'):value===undefined||value===''?'未填写':value;},
 registrationSignature(person){if(!person.signedAt)return '';return person.signatureUrl||'data:image/svg+xml;charset=utf-8,'+encodeURIComponent('<svg xmlns="http://www.w3.org/2000/svg" width="360" height="120"><rect width="100%" height="100%" fill="white"/><text x="30" y="82" font-family="KaiTi,STKaiti,serif" font-size="50">'+person.name.replace(/[<>&]/g,'')+'</text></svg>');},
 openRegistrationOrder(record){if(record.orderUrl){window.open(record.orderUrl,'_blank','noopener');return;}this.$message.info('订单详情跳转将在接入现有订单页面后启用');},
 registrationNames(record){return record.participants.map(p=>p.name||'未填写').join('、');},
 hasRegistrationRecord(project){return this.exampleRegistrations.some(r=>r.projectId===project.id);},
 openRegistrationRecords(project){const key='registrations:'+project.id;if(this.openTabs.some(t=>t.key===key)){this.activateTab(key);return;}this.stashCurrentTab();this.registrationProject=project;this.registrationFiltersExpanded=false;this.resetRegistrationRecords();this.currentEventId=project.eventId;this.view='registrations';this.$nextTick(()=>this.$refs.workspace.scrollTop=0);},
 ticketAssociationLocked(entry){return this.exampleRegistrations.some(r=>r.projectId===this.projectEditingId&&(r.ticketEntryId===entry.id||r.ticketId===entry.ticketId)&&r.orderNo);},
 validateRecordedProjectChanges(next){
 const old=this.projects.find(p=>p.id===this.projectEditingId);if(!old||!this.projectHasRegistration)return true;
 if(this.projectHasOrder&&next.ticketLinked!==old.ticketLinked){this.$message.error('项目已有订单，不能切换免费报名或关联门票收费');return false;}
 for(const field of old.fields||[]){const current=(next.fields||[]).find(f=>f.id===field.id);if(!current||JSON.stringify(current)!==JSON.stringify(field)){this.$message.error('已有报名，已配置的填写项不能修改或删除，只能新增');return false;}}
 for(const key of ['participants','placesLimited','signature']){if(JSON.stringify(next[key])!==JSON.stringify(old[key])){this.$message.error('项目已有报名记录，不能修改单次报名人数、限制模式或签署要求');return false;}}
 if(old.placesLimited!==false&&(!Number.isSafeInteger(next.totalPlaces)||next.totalPlaces<old.totalPlaces)){this.$message.error('已有报名，总报名名额不能减少');return false;}
 for(const entry of old.ticketOptions||[]){if(!this.ticketAssociationLocked(entry))continue;const current=(next.ticketOptions||[]).find(e=>e.id===entry.id);const association=x=>{const value=Object.assign({},x);delete value.name;delete value.restrictionNotice;return JSON.stringify(value);};if(!current||association(current)!==association(entry)){this.$message.error('该关联门票已有订单，不能更换或移除');return false;}}
 return true;
 }
 }
};
})();
