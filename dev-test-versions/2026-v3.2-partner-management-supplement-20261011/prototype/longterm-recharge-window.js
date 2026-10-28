/* W02：合作伙伴列表与售票页共用充值弹窗、账本和来源选择。 */
(() => {
  const h=React.createElement,{useState,useRef}=React;
  const {Modal,Descriptions,Input,DatePicker,Select,Button,Alert,Space,ConfigProvider,App}=antd;
  const model=window.SupplementLongtermRecharge,pay=window.SupplementRepaymentModel,core=window.SupplementMigration;
  const money=n=>(n/100).toFixed(2),fixture=window.paymentFixture;
  const dateLocale={lang:{locale:'zh_CN',placeholder:'请选择日期',rangePlaceholder:['开始日期','结束日期'],today:'今天',yearFormat:'YYYY年',monthFormat:'M月',fieldDateFormat:'YYYY-MM-DD',cellDateFormat:'D',cellMonthFormat:'M月',cellYearFormat:'YYYY年',previousMonth:'上个月',nextMonth:'下个月',previousYear:'上一年',nextYear:'下一年',monthBeforeYear:false},timePickerLocale:{placeholder:'请选择时间'}};
  const locale=window.SupplementWindowLocale||{dateLocale,locale:{locale:'zh-cn',DatePicker:dateLocale,Pagination:{items_per_page:'条/页',prev_page:'上一页',next_page:'下一页'},Empty:{description:'暂无数据'}}};
  function Dialog({target,onClose}){
    const first=pay.candidates(fixture)[0]?.code,initial=pay.resourceState(fixture,first);
    const [form,setForm]=useState({date:dayjs().format('YYYY-MM-DD'),amount:'',income:'0.00',payer:'',note:'',code:first,cash:'',resourceId:initial.defaultId,signature:initial.signature});
    const [picking,setPicking]=useState(false),[source,setSource]=useState(null),[error,setError]=useState(''),[busy,setBusy]=useState(false);
    const request=useRef('W02-'+Date.now()+'-'+Math.random()),lock=useRef(false),{message}=App.useApp();
    const set=(key,value)=>{setForm(f=>({...f,[key]:value}));setError('')};
    const amount=pay.money(form.amount),income=pay.money(form.income),total=amount===null||income===null?null:amount+income,cash=pay.money(form.cash),state=pay.resourceState(fixture,form.code),resource=state.options.find(r=>r.id===form.resourceId);
    const mismatch=form.code==='UNCLAIMED'&&source&&total!==Math.round(source.amount*100);
    const invalid=total===null||total<=0||!/^\d{4}-\d{2}-\d{2}$/.test(form.date||'')||!Number.isFinite(Date.parse(form.date))||dayjs(form.date).isAfter(dayjs(),'day')||mismatch||(form.code==='UNCLAIMED'&&(!source||form.date<source.repaymentTime.slice(0,10)))||(form.code==='CASH'&&(cash===null||cash<total))||(form.code!=='UNCLAIMED'&&(state.error||state.signature!==form.signature))||(['SCAN_PAY','BANK_CARD'].includes(form.code)&&(!resource||!String(pay.terminal(resource)||'').trim()));
    const choose=code=>{const s=pay.resourceState(fixture,code);setSource(null);setForm(f=>({...f,code,sourceIds:[],total:undefined,resourceId:s.defaultId,signature:s.signature,cash:''}));setError('')};
    const field=(label,key,control,full=false)=>h('div',{className:'w06-field'+(full?' w06-full':''),key},h('label',{htmlFor:'w02-'+key},label+'：'),h('div',{className:'w06-control'},control));
    const input=(key,placeholder,suffix)=>h(Input,{id:'w02-'+key,value:form[key],placeholder,suffix,inputMode:suffix?'decimal':undefined,onChange:e=>set(key,e.target.value)});
    const save=()=>{if(lock.current)return;lock.current=true;setBusy(true);try{model.commit({accountNo:target.accountNo,expectedTarget:core.signature(target),form,fixture,requestId:request.current});onClose();message.success('充值成功，账户、记录、流水和报表已更新')}catch(e){setError(e.message)}finally{lock.current=false;setBusy(false)}};
    return h(React.Fragment,null,h(Modal,{open:true,title:'合作伙伴充值',width:940,centered:true,maskClosable:false,className:'w06-modal w02-modal',onCancel:onClose,footer:h('div',{className:'w06-footer'},h('div',null,'本次收款合计：',h('strong',null,total===null?'—':money(total)),' 元'),h(Space,null,h(Button,{onClick:onClose,disabled:busy},'取消充值'),h(Button,{type:'primary',loading:busy,disabled:!!invalid,onClick:save},'确认充值')))},
      h(Descriptions,{bordered:true,size:'small',column:2,items:[['合作类型',target.type],['合作伙伴',target.name],['联系人',target.contact],['联系电话',target.phone],['对接负责人',target.owner],['账户类型',target.payType],['充值账号',target.accountNo],['当前'+(target.payType==='挂帐'?'挂帐金额':'预付款余额'),((target.payType==='挂帐'?target.creditAmount:target.prepayBalance)||0).toFixed(2)+' 元']].map(([label,children],key)=>({key,label,children}))}),
      h('div',{className:'w06-form'},field('* 支付日期','date',h(DatePicker,{id:'w02-date',value:form.date?dayjs(form.date):null,locale:locale.dateLocale,format:'YYYY-MM-DD',disabledDate:d=>d.isAfter(dayjs(),'day'),onChange:d=>set('date',d?.format('YYYY-MM-DD')||'')})),field('客户／付款人','payer',input('payer','选填')),
        field('* 充值金额','amount',input('amount','请输入充值金额','元')),field('计入其他收入','income',input('income','0.00','元')),
        field('备注说明','note',h(Input.TextArea,{id:'w02-note',value:form.note,maxLength:500,showCount:true,autoSize:{minRows:2,maxRows:3},placeholder:'选填，最多500字',onChange:e=>set('note',e.target.value)}),true)),
      h('section',{className:'w06-payment'},h('div',{className:'w06-payments'},pay.candidates(fixture).map(p=>h(Button,{key:p.code,type:form.code===p.code?'primary':'default',onClick:()=>choose(p.code)},p.name)),h(Button,{type:form.code==='UNCLAIMED'?'primary':'default',onClick:()=>setPicking(true)},'待认领账户')),
        form.code==='UNCLAIMED'&&source&&h('div',{className:'w02-source'},
          h('div',{className:'w02-source-head'},h('div',{className:'w02-source-record'},h('span',null,'充值记录单号'),h('strong',{title:source.recordNo},source.recordNo)),h(Button,{type:'link',onClick:()=>setPicking(true)},'重新选择')),
          h('div',{className:'w02-source-details'},h('div',null,h('span',null,'来源金额'),h('strong',{className:'w02-source-amount'},source.amount.toFixed(2),h('small',null,' 元'))),h('div',null,h('span',null,'原支付方式'),h('b',null,source.paymentMethod)),h('div',null,h('span',null,'柜台号／POS编号'),h('b',null,source.terminalNo||'—'))),
          h('p',{className:'w02-source-note'},'整笔使用，充值金额与其他收入合计须等于来源金额。其他收入归公司，不进入客户账户。')),
        form.code==='CASH'&&h('div',{className:'w06-dynamic'},field('* 现金实收','cash',input('cash','请输入现金实收金额','元')),h('div',{className:'w06-change'},'现金找零：',h('strong',null,cash!==null&&total!==null&&cash>=total?money(cash-total):'—'),' 元')),
        ['SCAN_PAY','BANK_CARD'].includes(form.code)&&h('div',{className:'w06-dynamic'},field('* 收款资源','resource',h(Select,{id:'w02-resource',value:form.resourceId,disabled:state.fixed,showSearch:true,optionFilterProp:'label',options:state.options.map(r=>({label:r.name,value:r.id})),onChange:v=>set('resourceId',v)})),field(form.code==='SCAN_PAY'?'柜台编码':'POS编号','terminal',h(Input,{readOnly:true,value:resource?pay.terminal(resource):'—'})))),
      mismatch&&h(Alert,{type:'error',showIcon:true,message:'充值金额与其他收入合计必须等于本笔待认领款 '+source.amount.toFixed(2)+' 元'}),error&&h(Alert,{type:'error',showIcon:true,message:error})),
      picking&&h(window.SupplementUnclaimedPicker,{purpose:'longterm',selected:source?[source.recordNo]:[],dateLocale:locale.dateLocale,onCancel:()=>setPicking(false),onSelect:items=>{const r=items[0];setSource(r);setForm(f=>({...f,code:'UNCLAIMED',sourceIds:[r.recordNo],total:r.amount.toFixed(2),amount:r.amount.toFixed(2),income:'0.00',cash:'',resourceId:undefined,signature:undefined}));setError('');setPicking(false)}}));
  }
  const host=document.createElement('div');document.body.appendChild(host);
  const root=ReactDOM.createRoot(host);
  function Shell(){const [target,setTarget]=useState(null);React.useEffect(()=>{const open=e=>setTarget(e.detail);window.addEventListener('supplement:longterm-open',open);return()=>window.removeEventListener('supplement:longterm-open',open)},[]);return h(ConfigProvider,{locale:locale.locale,theme:{token:{colorPrimary:'#1677ff',fontSize:14,controlHeight:32,borderRadius:6}}},h(App,null,target&&h(Dialog,{key:target.accountNo,target,onClose:()=>setTarget(null)})))}
  root.render(h(Shell));
  function refresh(){
    if(typeof partners==='undefined')return;
    core.catalog().filter(core.eligible).forEach(p=>{const existing=partners.find(x=>(x.accountNo||x.account)===p.accountNo);if(!existing)return;const credit=(p.creditAmount||0)-(p.creditMigrationDelta||0)-(p.creditRechargeDelta||0)+core.delta(p.accountNo,'挂帐')+model.delta(p.accountNo,'挂帐'),prepay=(p.prepayBalance||0)-(p.prepayMigrationDelta||0)-(p.prepayRechargeDelta||0)+core.delta(p.accountNo,'预付款')+model.delta(p.accountNo,'预付款');if(existing.account){existing.balance=p.payType==='挂帐'?credit:prepay;existing.available=p.creditLimitEnabled?((p.creditLimit||0)+credit).toFixed(2):'无限额';if(typeof current!=='undefined'&&current?.account===p.accountNo){['sumCreditAmount','sumPrepay'].forEach(id=>{const el=document.getElementById(id);if(el)el.textContent=existing.balance.toFixed(2)+'元'});document.getElementById('sumCredit').textContent=existing.available+(existing.available==='无限额'?'':'元')}}else{existing.credit=credit;existing.prepay=prepay}});
    if(typeof renderReport==='function')renderReport();if(typeof renderRecords==='function'){renderRecords('account');renderRecords('income')}if(typeof renderPartners==='function'&&typeof fixedPartners==='function')renderPartners(fixedPartners());
  }
  ['focus','storage','supplement:repayment'].forEach(n=>window.addEventListener(n,refresh));refresh();
  const oldOpen=window.openRecharge;
  window.openRecharge=id=>{const selected=typeof partners!=='undefined'&&partners.find(p=>p.id===id);if(selected?.type==='待认领客户')return oldOpen(id);const account=selected?.accountNo||(typeof current!=='undefined'?current?.account:null),p=core.catalog().find(p=>p.accountNo===account);if(!core.eligible(p))return typeof showAlert==='function'?showAlert('请选择启用的长期合作伙伴'):undefined;const target={...p,creditAmount:(p.creditAmount||0)-(p.creditMigrationDelta||0)-(p.creditRechargeDelta||0)+core.delta(account,'挂帐')+model.delta(account,'挂帐'),prepayBalance:(p.prepayBalance||0)-(p.prepayMigrationDelta||0)-(p.prepayRechargeDelta||0)+core.delta(account,'预付款')+model.delta(account,'预付款')};window.dispatchEvent(new CustomEvent('supplement:longterm-open',{detail:target}))};
  if(typeof window.viewRecord==='function'){
    const previous=window.viewRecord,esc=v=>String(v??'-').replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&#39;'}[c]));
    window.viewRecord=no=>{
      const r=model.records().find(r=>r.recordNo===no);if(!r)return previous(no);
      const pairs=[['充值记录单号',r.recordNo],['合作类型',r.type],['合作伙伴名称',r.name],['账户号',r.accountNo],['处理操作',r.operation],['账户类型',r.accountType],['金额',r.amount.toFixed(2)+' 元'],['支付时间',r.repaymentTime],['客户／付款人',r.payer],['支付方式',r.paymentMethod],['柜台号／POS编号',r.terminalNo],['申请人',r.applicant],['对接负责人',r.owner],['申请时间',r.applyTime],['完成时间',r.finishTime],['充值状态','充值成功'],['售票员',r.cashier],['售票窗口',r.ticketWindow]];
      const link=id=>'<a href="#" onclick="viewRecord(\''+esc(id)+'\');return false">'+esc(id)+'</a>';
      const full=(label,text)=>'<div class="repayment-detail-full"><span>'+label+'：</span><div>'+text+'</div></div>';
      const sources=(r.fundingSources||[]).map(s=>'<div class="detail-record-reference">来源充值记录单号：'+link(s.id)+'</div>').join('');
      const note=String(r.remark??'').trim(),references=(r.sourceRecordNo?'<div class="detail-record-reference">来源客户充值记录单号：'+link(r.sourceRecordNo)+'</div>':'')+sources;
      const remark=(note&&!['-','—'].includes(note)?esc(note):'')+references||'-';
      document.getElementById('detailGrid').innerHTML=pairs.map(([a,b])=>'<span>'+a+'：</span><b>'+esc(b)+'</b>').join('')+full('备注说明',remark)+(r.targetRecordNo?full('其他收入充值记录单号',link(r.targetRecordNo)):'')+full('充值相关资料','-');
      document.getElementById('detailMask').classList.add('show');
    };
  }
})();
