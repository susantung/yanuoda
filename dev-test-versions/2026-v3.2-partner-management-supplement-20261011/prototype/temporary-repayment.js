/* W05/W06/W08—W11本地原型；待认领W04尚未接通。 */
(() => {
  'use strict';
  const h=React.createElement;
  const {ConfigProvider,Input,Select,DatePicker,Button,Table,Pagination,Space,Tag,Typography,Modal,Descriptions,Empty,App:AntApp}=antd;
  const {useState,useEffect,useLayoutEffect,useRef}=React;
  const baseOrders=window.SupplementTemporaryOrders,model=window.SupplementRepaymentModel;
  const fmt=n=>(n/100).toFixed(2);
  const common={customer:'',order:'',cashier:undefined,owner:'',dates:null};
  const special={receipt:'',operator:'',source:undefined,payDates:null};
  const blank=()=>({...common,...special});
  // 中文面板；dayjs本地locale随离线原型配置，不依赖CDN。
  dayjs.locale({name:'zh-cn',weekdays:'星期日_星期一_星期二_星期三_星期四_星期五_星期六'.split('_'),weekdaysShort:'周日_周一_周二_周三_周四_周五_周六'.split('_'),weekdaysMin:'日_一_二_三_四_五_六'.split('_'),months:'一月_二月_三月_四月_五月_六月_七月_八月_九月_十月_十一月_十二月'.split('_'),monthsShort:'1月_2月_3月_4月_5月_6月_7月_8月_9月_10月_11月_12月'.split('_'),weekStart:1,yearStart:4,formats:{LT:'HH:mm',LTS:'HH:mm:ss',L:'YYYY/MM/DD',LL:'YYYY年M月D日',LLL:'YYYY年M月D日Ah点mm分',LLLL:'YYYY年M月D日ddddAh点mm分'}});
  const dateLocale={lang:{locale:'zh_CN',placeholder:'请选择日期',rangePlaceholder:['开始日期','结束日期'],today:'今天',now:'此刻',backToToday:'返回今天',ok:'确定',clear:'清除',month:'月',year:'年',timeSelect:'选择时间',dateSelect:'选择日期',monthSelect:'选择月份',yearSelect:'选择年份',decadeSelect:'选择年代',yearFormat:'YYYY年',dateFormat:'YYYY年M月D日',dayFormat:'D',dateTimeFormat:'YYYY年M月D日 HH:mm:ss',monthFormat:'M月',fieldDateFormat:'YYYY-MM-DD',fieldDateTimeFormat:'YYYY-MM-DD HH:mm:ss',fieldMonthFormat:'YYYY-MM',fieldYearFormat:'YYYY',cellDateFormat:'D',cellMonthFormat:'M月',cellYearFormat:'YYYY年',monthBeforeYear:false,previousMonth:'上个月',nextMonth:'下个月',previousYear:'上一年',nextYear:'下一年',previousDecade:'上一年代',nextDecade:'下一年代',previousCentury:'上一世纪',nextCentury:'下一世纪'},timePickerLocale:{placeholder:'请选择时间'}};
  const locale={locale:'zh-cn',DatePicker:dateLocale,Pagination:{items_per_page:'条/页',jump_to:'跳至',jump_to_confirm:'确定',page:'页',prev_page:'上一页',next_page:'下一页',prev_5:'向前5页',next_5:'向后5页',page_size:'每页条数'},Empty:{description:'暂无符合条件的订单'},Table:{selectAll:'全选当前页',selectInvert:'反选当前页',selectNone:'清空选择',selectionAll:'选择全部',sortTitle:'排序',cancelSort:'取消排序'}};
  const Icon=({type})=>h('svg',{width:14,height:14,viewBox:'0 0 24 24',fill:'none',stroke:'currentColor',strokeWidth:1.7,'aria-hidden':true},type==='copy'?[h('rect',{key:1,x:8,y:8,width:12,height:12,rx:2}),h('path',{key:2,d:'M16 8V4H4v12h4'})]:type==='search'?[h('circle',{key:1,cx:10,cy:10,r:6}),h('path',{key:2,d:'m15 15 6 6'})]:type==='reset'?h('path',{d:'M4 10a8 8 0 1 1 1 8M4 3v7h7'}):h('path',{d:type==='up'?'m6 15 6-6 6 6':'m6 9 6 6 6-6'}));
  function TemporaryRepayment(){
    const [ledgerError]=useState(()=>{try{model.readLedger();return ''}catch(e){return e.message}});
    const [orders,setOrders]=useState(()=>{try{return model.apply(baseOrders,model.readLedger())}catch{return [...baseOrders]}});
    useEffect(()=>{const refresh=()=>{try{setOrders(model.apply(baseOrders,model.readLedger()))}catch(e){message.error(e.message)}};['focus','storage','supplement:repayment'].forEach(n=>window.addEventListener(n,refresh));return()=>['focus','storage','supplement:repayment'].forEach(n=>window.removeEventListener(n,refresh))},[]);
    const [view,setView]=useState('pending'),[draft,setDraft]=useState(blank),[query,setQuery]=useState(blank),[expanded,setExpanded]=useState(false),[selected,setSelected]=useState([]),[page,setPage]=useState(1),[size,setSize]=useState(10),[batch,setBatch]=useState(false),[handoff,setHandoff]=useState(null),[height,setHeight]=useState(380);
    const holder=useRef(null),{message}=AntApp.useApp();
    const update=(key,val)=>{setDraft(p=>({...p,[key]:val}));setSelected([])};
    const inRange=(date,range)=>!range||(!range[0]||date>=range[0].format('YYYY-MM-DD'))&&(!range[1]||date<=range[1].format('YYYY-MM-DD'));
    const includes=(value,key)=>!key||String(value||'').includes(key.trim());
    const rows=orders.filter(r=>r.state===view&&(view==='paid'||r.partner==='公共临时客户'&&r.method==='挂帐'&&r.amount-r.refunded>0)).filter(r=>includes(r.customer,query.customer)&&includes(r.id,query.order)&&(!query.cashier||r.cashier===query.cashier)&&includes(r.owner,query.owner)&&inRange(r.created.slice(0,10),query.dates)&&(view!=='paid'||includes(r.receipt,query.receipt)&&includes(r.operator,query.operator)&&(!query.source||r.source===query.source)&&inRange(r.paid,query.payDates)));
    if(view==='paid')rows.sort((a,b)=>String(b.paid||'').localeCompare(String(a.paid||''))||String(b.created||'').localeCompare(String(a.created||'')));
    const selectedOrders=orders.filter(r=>selected.includes(r.id)),sum=selectedOrders.reduce((n,r)=>n+r.amount-r.refunded,0);
    useLayoutEffect(()=>{const measure=()=>{if(holder.current?.getBoundingClientRect().width)setHeight(Math.max(150,window.innerHeight-holder.current.getBoundingClientRect().top-145))};const ro=new ResizeObserver(measure);ro.observe(document.getElementById('temporaryPanel'));measure();window.addEventListener('resize',measure);return()=>{ro.disconnect();window.removeEventListener('resize',measure)}},[expanded,view]);
    const changeView=key=>{const next={...draft,...special};setView(key);setDraft(next);setQuery(next);setPage(1);setSelected([]);setExpanded(false)};
    const search=()=>{if(draft.dates?.[0]&&draft.dates?.[1]&&draft.dates[0].isAfter(draft.dates[1]))return message.error('开始日期不得晚于结束日期');setQuery({...draft});setPage(1);setSelected([])};
    const reset=()=>{setDraft(blank());setQuery(blank());setSelected([]);setPage(1)};
    const field=(label,id,control)=>h('div',{className:'w05-field',key:id},h('label',{htmlFor:id},label+'：'),h('div',{className:'w05-control'},control));
    const input=(id,key,placeholder)=>h(Input,{id,value:draft[key],placeholder,allowClear:true,onChange:e=>update(key,e.target.value),onPressEnter:search});
    const range=(id,key)=>h(DatePicker.RangePicker,{id,locale:dateLocale,value:draft[key],format:'YYYY-MM-DD',allowClear:true,placeholder:['开始日期','结束日期'],onChange:v=>update(key,v)});
    const orderLink=r=>h('span',{className:'w05-order'},h('a',{href:'order-detail.html?tempOrder='+encodeURIComponent(r.id),target:'_blank',rel:'noopener'},r.id),h(Button,{type:'text',size:'small','aria-label':'复制订单号 '+r.id,icon:h(Icon,{type:'copy'}),onClick:async()=>{try{if(!navigator.clipboard)throw new Error('clipboard unavailable');await navigator.clipboard.writeText(r.id);message.success('订单号已复制')}catch{Modal.info({title:'复制订单号',content:h(Input,{readOnly:true,value:r.id,onFocus:e=>e.target.select()}),okText:'关闭'})}}}));
    const col=(title,key,width,render)=>({title,dataIndex:key,key,width,ellipsis:!render,render});
    const amount=(n,highlight)=>h('span',{className:highlight?'w05-amount':''},fmt(n));
    const columns=[col('客户名称','customer',130),col('对接负责人','owner',200),col('原订单售票员','cashier',130),col('订单号','id',238,(_,r)=>orderLink(r)),col(view==='pending'?'应回款金额（元）':'本单已回款金额（元）','settled',180,(_,r)=>amount(view==='pending'?r.amount-r.refunded:r.settled,true)),col('订单总金额（元）','amount',160,n=>amount(n)),col('已退款金额（元）','refunded',160,n=>amount(n)),col('下单时间','created',190)];
    if(view==='pending')columns.push(col('回款状态','state',110,()=>h(Tag,{color:'orange'},'未回款')));
    else columns.push(col('回款记录单号','receipt',200,(value,r)=>h('a',{onClick:()=>window.viewRecord(value)},value)),col('回款操作人','operator',160),col('回款来源','source',120),col('支付方式','method',120,(_,r)=>r.paymentMethod||r.method),col('柜台号／POS编号','terminal',170),col('支付日期','paid',140));
    const fields=[field('客户名称','tCustomer',input('tCustomer','customer','请输入实际客户名称')),field('对接负责人','tOwner',input('tOwner','owner','请输入姓名、手机号或负责人')),field('下单时间','tDates',range('tDates','dates'))];
    fields.push(field('订单号','tOrder',input('tOrder','order','请输入订单号')),field('原订单售票员','tCashier',h(Select,{id:'tCashier',value:draft.cashier,showSearch:true,allowClear:true,placeholder:'全部售票员',options:[...new Set(orders.map(r=>r.cashier))].map(v=>({label:v,value:v})),onChange:v=>update('cashier',v)})));
    if(view==='paid')fields.push(field('回款记录单号','tReceipt',input('tReceipt','receipt','请输入回款记录单号')),field('回款操作人','tOperator',input('tOperator','operator','请输入实际回款操作人')),field('回款来源','tSource',h(Select,{id:'tSource',value:draft.source,allowClear:true,placeholder:'全部来源',options:['后台','售票窗口'].map(v=>({label:v,value:v})),onChange:v=>update('source',v)})),field('支付日期','tPayDates',range('tPayDates','payDates')));
    const queryActions=h('div',{key:'actions',className:'w05-query-actions'},h(Button,{type:'primary',icon:h(Icon,{type:'search'}),onClick:search},'查询'),h(Button,{icon:h(Icon,{type:'reset'}),onClick:reset},'重置'));
    if(view==='pending')fields.push(queryActions);
    const launch=type=>{if(ledgerError)return message.error(ledgerError);let fresh;try{fresh=model.apply(baseOrders,model.readLedger())}catch(e){return message.error(e.message)}const latest=fresh.filter(r=>selected.includes(r.id)&&r.state==='pending'&&r.amount-r.refunded>0);if(latest.length!==selected.length||!latest.length){setOrders(fresh);message.warning('所选订单状态已变化，请重新查询选择');reset();return}setHandoff({type,orders:latest,sum:latest.reduce((n,r)=>n+r.amount-r.refunded,0)})};
    return h(React.Fragment,null,
      h('div',{className:'w05-query'},fields),
      h('div',{className:'w05-toolbar'},h('div',{className:'w05-toolbar-left'},h('div',{className:'w05-status'},h('label',{htmlFor:'tRepaymentState'},'回款状态：'),h(Select,{id:'tRepaymentState',value:view,onChange:changeView,options:[{value:'pending',label:'待回款'},{value:'paid',label:'已回款'}],style:{width:120},'aria-label':'回款状态'})),view==='pending'&&h(Space,null,h(Button,{type:'primary',disabled:!selected.length,onClick:()=>launch('repay')},'回款'),h(Button,{type:'primary',disabled:!selected.length,onClick:()=>launch('migrate')},'临时客户转合作伙伴'),h(Button,{type:'primary',disabled:!!selected.length,onClick:()=>{if(!selected.length)setBatch(true)}},'待认领款回款'))),view==='pending'&&h('div',{className:'w05-selection'},'已选 ',h('strong',null,selected.length),' 笔，应回款合计 ',h('strong',null,fmt(sum)),' 元',h(Button,{type:'link',disabled:!selected.length,onClick:()=>setSelected([])},'清空选择')),view==='paid'&&queryActions),
      h('div',{ref:holder},h(Table,{rowKey:'id',size:'small',columns,dataSource:rows.slice((page-1)*size,page*size),pagination:false,locale:{emptyText:h(Empty,{image:Empty.PRESENTED_IMAGE_SIMPLE,description:'暂无符合条件的订单'})},scroll:{x:columns.reduce((n,c)=>n+c.width,view==='pending'?48:0),y:height},rowSelection:view==='pending'?{selectedRowKeys:selected,onChange:keys=>setSelected(keys),preserveSelectedRowKeys:true,columnWidth:48,fixed:true,getCheckboxProps:r=>({'aria-label':'选择订单 '+r.id})}:undefined})),
      h('div',{className:'w05-pager'},h(Pagination,{current:page,pageSize:size,total:rows.length,pageSizeOptions:[10,20,50],showSizeChanger:true,showQuickJumper:true,showTotal:total=>'共 '+total+' 条',onChange:(p,s)=>{setPage(s!==size?1:p);setSize(s)}})),
      batch&&h(window.SupplementUnclaimedRepayment,{baseOrders,dateLocale,onCancel:()=>setBatch(false),onComplete:()=>{setOrders(model.apply(baseOrders,model.readLedger()));setBatch(false);setSelected([])}}),
      handoff?.type==='repay'&&h(window.SupplementRepaymentDialog,{orders:handoff.orders,baseOrders,dateLocale,onCancel:()=>setHandoff(null),onComplete:result=>{setOrders(result.orders);setSelected([]);setHandoff(null);setPage(1)}}),
      handoff?.type==='migrate'&&h(window.SupplementMigrationDialog,{orders:handoff.orders,baseOrders,onCancel:()=>setHandoff(null),onComplete:result=>{setOrders(result.orders);setSelected([]);setHandoff(null);setPage(1)}})
    );
  }
  window.SupplementWindowLocale={locale,dateLocale};
  ReactDOM.createRoot(document.getElementById('temporaryRoot')).render(h(ConfigProvider,{locale,theme:{token:{colorPrimary:'#1677ff',fontSize:14,controlHeight:32,borderRadius:6,fontFamily:'-apple-system,BlinkMacSystemFont,"Segoe UI",Roboto,"PingFang SC","Microsoft YaHei",sans-serif'}}},h(AntApp,null,h(TemporaryRepayment))));
  const tab=new URLSearchParams(location.search).get('tab');if(['partner','temporary','account','income','report'].includes(tab))switchTab(tab);
})();
