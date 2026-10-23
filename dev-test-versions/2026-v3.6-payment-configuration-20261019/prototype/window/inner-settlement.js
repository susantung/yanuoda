/* 内导现有记录页及结账弹窗的增量模块；复用窗口桥接层和支付配置。 */
window.createInnerSettlement=function(bridge){
  const {createElement:h,useState}=React;
  const {Button,Input,Select,DatePicker,Table,Modal,Descriptions,InputNumber,Checkbox}=antd;
  const {fixture,sortPayments,resolveResources,ResourceFields,sync,openPage,openingRecords}=bridge;
  const money=n=>'¥'+Number(n).toFixed(2);
  const resourceWay=code=>['SCAN_PAY','BANK_CARD'].includes(code);
  // 本地演示按时间差计算；生产计费仍由原结账服务返回，不在支付配置中另设计费规则。
  function calculate(order,end){
    const start=dayjs(order?.opening.time);
    if(!order||!end?.isValid()||!start.isValid())return{error:'请选择有效结算时间'};
    const seconds=end.diff(start,'second');
    if(seconds<0)return{error:'结算时间不能早于开单时间'};
    const actualHours=seconds/3600,hours=actualHours;
    const total=order.timed?Math.round((hours*Number(order.price)+Number.EPSILON)*100)/100:Number(order.total);
    return{actualHours:Math.round(actualHours*10000)/10000,hours:Math.round(hours*10000)/10000,total,due:Math.round((total-order.deposit)*100)/100};
  }
  const initialDate=order=>dayjs(order.opening.time).add(6,'hour');
  const snapshot=(code,name,resourceName,resourceCode,amount,type,orderNo)=>({id:orderNo+'-'+type,orderNo,code,paymentName:name,resourceName,resourceCode,amount,type,status:'支付成功',time:'2026-10-23 10:00:00',operator:'散客测试1',device:'YST散客售票窗口'});
  const orders=[
    {id:'DEMO-INNER-TIMED-01',kind:'retail',name:'VIP服务',timed:true,price:.01,deposit:.02,total:.50,hours:50,guide:'演示内导一',count:1,status:'待结账',opening:snapshot('SCAN_PAY','扫码付','散客1号柜台码','CCB-SK-01',.02,'开单','DEMO-INNER-TIMED-01')},
    {id:'DEMO-INNER-PAID-02',kind:'retail',name:'VIP服务',timed:true,price:.01,deposit:.02,total:.50,hours:50,guide:'演示内导二',count:1,status:'已结账',opening:snapshot('SCAN_PAY','扫码付','散客1号柜台码','CCB-SK-01',.02,'开单','DEMO-INNER-PAID-02'),supplement:snapshot('BANK_CARD','银行卡','团队 POS-01','POS-TD-01',.48,'补收','DEMO-INNER-PAID-02')},
    {id:'DEMO-INNER-TEAM-03',kind:'team',agency:'演示旅行社',balance:100,credit:100,name:'VIP服务（2026年）',timed:true,price:.01,deposit:.02,total:.50,hours:50,guide:'演示内导一',count:2,status:'待结账',opening:snapshot('BANK_CARD','银行卡','团队 POS-01','POS-TD-01',.02,'开单','DEMO-INNER-TEAM-03')},
    {id:'DEMO-INNER-PENDING-04',kind:'retail',name:'VIP服务',timed:true,price:.01,deposit:.02,total:.50,hours:50,guide:'演示内导二',count:1,status:'支付处理中',opening:snapshot('SCAN_PAY','扫码付','散客1号柜台码','CCB-SK-01',.02,'开单','DEMO-INNER-PENDING-04'),supplement:{...snapshot('AGGREGATE_PAY','聚合支付',null,null,.48,'补收','DEMO-INNER-PENDING-04'),status:'支付处理中'}}
  ];
  const candidates=order=>sortPayments(fixture().payments.filter(p=>p.on&&p.scenes.includes('innerGuide')&&(order.kind==='team'||!['ON_ACCOUNT','PREPAY','CREDIT_SIGN'].includes(p.code))));
  const transactions=order=>[order.opening,order.supplement,order.refund].filter(Boolean);
  function refreshOpenings(){for(const x of openingRecords()){
    if(orders.some(o=>o.id===x.id))continue;
    const item=x.items[0];if(!item)continue;
    orders.push({id:x.id,kind:x.kind,agency:x.teamOrder?.agency,balance:x.teamOrder?.balance,credit:x.teamOrder?.credit,name:item.name,timed:item.timed,price:item.price,deposit:x.amount,total:x.amount,hours:1,guide:x.guideName,count:x.quantity,status:'待结账',opening:{...x,code:x.paymentCode,type:'开单',orderNo:x.id,status:'支付成功',time:x.openedAt||x.date+' 10:00:00',operator:x.accountKey?.replace('role:',''),device:x.deviceKey?.replace('device:','')}});
  }}
  const paymentColumns=[{title:'交易类型',dataIndex:'type',width:90},{title:'支付/退款方式',dataIndex:'paymentName',width:130},{title:'收款资源',dataIndex:'resourceName',width:170,render:v=>v||'—'},{title:'柜台编码/POS编号',dataIndex:'resourceCode',width:170,render:v=>v||'—'},{title:'交易金额（元）',dataIndex:'amount',width:130,render:money},{title:'交易状态',dataIndex:'status',width:120},{title:'交易时间',dataIndex:'time',width:180},{title:'操作员',dataIndex:'operator',width:150},{title:'操作设备',dataIndex:'device',width:180}];
  function Workspace({page='orders',initialModal=null}){
    refreshOpenings();
    const [,redraw]=useState(0),[query,setQuery]=useState({}),[filters,setFilters]=useState({}),[detail,setDetail]=useState(initialModal==='detail'?orders[1]:null),[settle,setSettle]=useState(['settlement','supplement'].includes(initialModal)?orders[0]:null),[pay,setPay]=useState(initialModal==='supplement'),[date,setDate]=useState(initialDate(orders[0])),[state,setState]=useState(()=>chooseInitial(orders[0])),[error,setError]=useState(''),[complete,setComplete]=useState(false),[cash,setCash]=useState(.04),[printOrder,setPrintOrder]=useState(null),[configure,setConfigure]=useState(false),[payColumns,setPayColumns]=useState(['name','hours','price']);
    function chooseInitial(order){const code=candidates(order)[0]?.code||null,r=resolveResources(code);return{code,resourceId:r.error?null:r.defaultId};}
    function signature(code){const r=resolveResources(code),p=r.payment;return JSON.stringify([p?.owner,p?.usage,r.options.map(x=>x.id),r.defaultId,r.error,p?.owner==='account'?fixture().session.accountKey:fixture().session.deviceKey]);}
    const bindingStamp=React.useRef(signature(state.code));
    function choose(code){const r=resolveResources(code);bindingStamp.current=signature(code);setState({code,resourceId:r.error?null:r.defaultId});setError('');}
    window.refreshInnerGuide=()=>{setState(previous=>{if(!candidates(settle||orders[0]).some(p=>p.code===previous.code)){const next=chooseInitial(settle||orders[0]);bindingStamp.current=signature(next.code);return next;}const stamp=signature(previous.code);if(stamp!==bindingStamp.current){bindingStamp.current=stamp;const r=resolveResources(previous.code);return{...previous,resourceId:r.error?null:r.defaultId};}return previous;});redraw(v=>v+1);};
    function begin(order){const end=initialDate(order);setDate(end);setSettle(order);setPay(false);setComplete(false);setError('');setState(chooseInitial(order));setCash(Math.max(0,calculate(order,end).due||0));}
    const bill=settle?calculate(settle,date):{},due=bill.due||0;
    function persistBill(){Object.assign(settle,{total:bill.total,hours:bill.hours,actualHours:bill.actualHours,settledAt:date.format('YYYY-MM-DD HH:mm:ss')});}
    function confirmSettlement(){
      if(complete||!settle||settle.status!=='待结账')return;
      if(bill.error){setError(bill.error);return;}
      if(due<=0){persistBill();if(due<0)settle.refund={...settle.opening,id:settle.id+'-退款',type:'退款',amount:-due,time:dayjs().format('YYYY-MM-DD HH:mm:ss')};settle.status='已结账';setSettle(null);redraw(v=>v+1);return;}
      sync();const next=chooseInitial(settle);bindingStamp.current=signature(next.code);setState(next);setCash(due);setError('');setPay(true);
    }
    function validation(){
      if(!settle||!candidates(settle).some(p=>p.code===state.code))return '当前场景无可用支付方式';
      if(state.code==='PREPAY'&&Number(settle.balance||0)<due)return '旅行社预付款余额不足';
      if(state.code==='CREDIT_SIGN'&&settle.credit!==null&&Number(settle.credit||0)<due)return '旅行社签单授信余额不足';
      if(!resourceWay(state.code))return '';
      const r=resolveResources(state.code),item=r.options.find(x=>x.id===state.resourceId);
      return r.error||(!item?'请选择有效收款资源':!(item.counterCode||item.posCode||'').trim()?'收款资源编码未配置':r.payment.usage==='固定使用一个'&&item.id!==r.defaultId?'收款配置已变更，请重新选择':'');
    }
    function submit(){
      sync();if(complete||!settle||settle.status!=='待结账'){setError('当前订单不可重复结账');return;}
      const err=bill.error||(due<=0?'本次无需补收，请返回订单结账':validation())||(state.code==='CASH'&&(cash===null||Number(cash)<due)?'现金实收不能小于补收金额':'');
      if(err){setError(err);redraw(v=>v+1);return;}
      const p=candidates(settle).find(x=>x.code===state.code),r=resourceWay(state.code)?resolveResources(state.code).options.find(x=>x.id===state.resourceId):null;
      settle.supplement={id:settle.id+'-补收',orderNo:settle.id,code:p.code,paymentName:p.name,resourceId:r?.id||null,resourceName:r?.name||null,resourceCode:r?(r.counterCode||r.posCode):null,owner:r?p.owner:null,amount:due,type:'补收',status:p.code==='AGGREGATE_PAY'?'支付处理中':'支付成功',operator:fixture().session.accountKey.replace('role:',''),device:fixture().session.deviceKey.replace('device:',''),time:dayjs().format('YYYY-MM-DD HH:mm:ss')};
      persistBill();settle.status=p.code==='AGGREGATE_PAY'?'支付处理中':'已结账';setComplete(true);setError('');redraw(v=>v+1);
    }
    window.innerSettlementPreview={orders:()=>structuredClone(orders),candidates:()=>structuredClone(candidates(settle||orders[0])),state:()=>structuredClone(state)};
    const form=(label,key,control)=>h('label',{key},h('span',null,label+'：'),control||h(Input,{value:query[key]||'',onChange:e=>setQuery({...query,[key]:e.target.value})}));
    const passes=o=>(!filters.orderNo||o.id.includes(filters.orderNo))&&(!filters.guide||o.guide.includes(filters.guide))&&(!filters.agency||(o.agency||'').includes(filters.agency))&&(!filters.operator||(o.opening.operator||'').includes(filters.operator))&&(!filters.outerGuide||(o.outerGuide||'').includes(filters.outerGuide))&&(!filters.certificate||(o.certificate||'').includes(filters.certificate))&&(!filters.mobile||(o.mobile||'').includes(filters.mobile))&&(!filters.date?.length||dayjs(o.opening.time).format('YYYY-MM-DD')>=filters.date[0].format('YYYY-MM-DD')&&dayjs(o.opening.time).format('YYYY-MM-DD')<=filters.date[1].format('YYYY-MM-DD'));
    const tabs=h('div',{className:'business-tabs'},['导游开单','订单记录','交易记录'].map((name,i)=>h('button',{key:name,className:page===['open','orders','trades'][i]?'active':'',onClick:()=>openPage(['open','orders','trades'][i])},name)));
    const columns=[{title:'序号',width:65,render:(_,r,i)=>i+1},{title:'订单编号',dataIndex:'id',width:230},{title:'游客类型',width:90,render:(_,o)=>o.kind==='team'?'团队':'散客'},{title:'产品名称',dataIndex:'name',width:180},{title:'所属类型',width:100,render:(_,o)=>o.timed?'计时收费':'固定收费'},{title:'内导姓名',dataIndex:'guide',width:130},{title:'单价（元）',dataIndex:'price',width:110,render:money},{title:'开单支付方式',width:130,render:(_,o)=>o.opening.paymentName},{title:'开单金额（元）',dataIndex:'deposit',width:130,render:money},{title:'补收支付方式',width:130,render:(_,o)=>o.supplement?.paymentName||'—'},{title:'补收金额（元）',width:130,render:(_,o)=>o.supplement?money(o.supplement.amount):'—'},{title:'订单状态',dataIndex:'status',width:130},{title:'操作',key:'actions',fixed:'right',width:150,render:(_,o)=>h('div',{className:'ig-row-actions'},o.status==='待结账'&&h(Button,{type:'link',onClick:()=>begin(o)},'结账'),h(Button,{type:'link',onClick:()=>setDetail(o)},'查看'))}];
    columns.find(c=>c.dataIndex==='id').render=(_,o)=>h(Button,{type:'link',onClick:()=>setDetail(o)},o.id);
    columns.splice(columns.length-2,0,{title:'退款支付方式',width:130,render:(_,o)=>o.refund?.paymentName||'—'},{title:'退款金额（元）',width:130,render:(_,o)=>o.refund?money(o.refund.amount):'—'},{title:'实收金额（元）',width:130,render:(_,o)=>money(o.deposit+(o.supplement?.status==='支付成功'?o.supplement.amount:0)-(o.refund?.amount||0))},{title:'开单人',width:140,render:(_,o)=>o.opening.operator},{title:'结算人',width:140,render:(_,o)=>o.status==='已结账'?o.supplement?.operator||'—':'—'});
    const actionColumn=columns.at(-1);actionColumn.width=190;actionColumn.render=(_,o)=>h('div',{className:'ig-row-actions'},o.status==='待结账'&&h(Button,{type:'link',onClick:()=>begin(o)},'结账'),o.status==='待结账'&&h(Button,{type:'link',onClick:()=>Modal.confirm({title:'退单',content:'确认退单？',okText:'确定',cancelText:'取消',onOk:()=>{o.status='已退单';o.refund={...o.opening,type:'退款',amount:o.deposit};redraw(v=>v+1);}})},'退单'),h(Button,{type:'link',onClick:()=>setPrintOrder(o)},'打印'));
    const tradeRows=orders.filter(passes).flatMap(o=>transactions(o).map(t=>({...t,order:o})));
    const description=(items,cols=3)=>h(Descriptions,{column:cols,size:'small',items:items.map(([label,children],i)=>({key:i,label,children:children??'—'}))});
    const detailBody=detail&&h(React.Fragment,null,
      h('h3',null,'产品信息'),description([['产品名称',detail.name],['所属类型',detail.timed?'计时收费':'固定收费'],['单价',money(detail.price)+(detail.timed?' / 小时':'')]]),
      h('h3',null,'订单信息'),description([['订单编号',detail.id],['内导姓名',detail.guide],['游客类型',detail.kind==='team'?'团队':'散客'],['已收押金',money(detail.deposit)],['支付方式',detail.opening.paymentName],['订单状态',detail.status],['收款资源',detail.opening.resourceName||'—'],['柜台编码/POS编号',detail.opening.resourceCode||'—']]),
      h('h3',null,'交易记录'),h(Table,{size:'small',rowKey:'id',pagination:false,columns:paymentColumns,dataSource:transactions(detail),scroll:{x:1420}}));
    return h(React.Fragment,null,page!=='exceptions'&&tabs,
      h('section',{className:'ig-records'},page==='exceptions'&&h('h3',null,'内导异常订单'),
        h('div',{className:'ig-query'},form('订单编号','orderNo'),form('内导姓名','guide'),form('外导姓名','outerGuide'),form('导游证件号','certificate'),form('外导手机','mobile'),form('开单日期','date',h(DatePicker.RangePicker,{value:query.date||null,placeholder:['开始日期','结束日期'],onChange:value=>setQuery({...query,date:value}),style:{width:'100%'}})),form('开单人','operator'),form('旅行社名','agency'),h('div',{className:'ig-query-buttons'},h(Button,{type:'primary',onClick:()=>setFilters({...query})},'查询'),h(Button,{onClick:()=>{setQuery({});setFilters({});}},'重置'))),
        h(Table,{rowKey:'id',size:'small',pagination:{pageSize:10,showSizeChanger:true,showTotal:n=>'共 '+n+' 条'},columns:page==='trades'?[{title:'订单编号',dataIndex:'orderNo',width:230},...paymentColumns,{title:'操作',fixed:'right',width:85,render:(_,t)=>h(Button,{type:'link',onClick:()=>setDetail(t.order)},'查看')}]:columns,dataSource:page==='trades'?tradeRows:orders.filter(passes).filter(o=>page!=='exceptions'||o.status==='支付处理中'),scroll:{x:page==='trades'?1730:2800}})),
      h(Modal,{open:!!settle,title:'订单结账',width:950,className:'ig-settlement-modal',onCancel:()=>{setPay(false);setSettle(null);setError('');},footer:h(React.Fragment,null,h(Button,{onClick:()=>setSettle(null)},'取消'),h(Button,{type:'primary',disabled:complete||!!bill.error,onClick:confirmSettlement},'确定'))},settle&&h(React.Fragment,null,
        h('h3',null,'产品信息'),description([['产品名称',settle.name],['所属类型',settle.timed?'计时收费':'固定收费'],['单价（元/小时）',settle.price]]),
        h('h3',null,'订单信息'),description([['订单编号',settle.id],['开单人',settle.opening.operator],['开单时间',settle.opening.time],['已收押金（元）',settle.deposit],['内导姓名',settle.guide],['内导编号','—'],['性别','—'],['级别','—'],['游客类型',settle.kind==='team'?'团队':'散客'],['旅行社',settle.agency||'—'],['支付方式',settle.opening.paymentName]]),
        h('h3',null,'结账信息'),description([['结算时间',h(DatePicker,{'aria-label':'结算时间',showTime:true,allowClear:false,disabled:complete,value:date,onChange:value=>{setDate(value);setPay(false);setError('');setCash(Math.max(0,calculate(settle,value).due||0));}})],['实际时长（小时）',bill.error?'—':bill.actualHours],['结算时长（小时）',bill.error?'—':bill.hours],[due<0?'应退金额（元）':'补收金额（元）',bill.error?'—':Math.abs(due)]],2),
        bill.error&&h('div',{className:'resource-error',role:'alert'},bill.error))),
      h(Modal,{open:pay&&!!settle,title:'支付订单确认',width:600,className:'ig-supplement-modal',onCancel:()=>{setPay(false);setError('');},footer:h(React.Fragment,null,h(Button,{onClick:()=>{setPay(false);setError('');}},'取消'),h(Button,{type:'primary',disabled:complete,onClick:submit},'确定'))},settle&&h(React.Fragment,null,
        h('div',{style:{display:'flex',justifyContent:'flex-end',marginBottom:12}},h(Button,{onClick:()=>setConfigure(true)},'配置列')),
        h(Table,{size:'small',rowKey:'id',pagination:{pageSize:10,simple:true,hideOnSinglePage:false},columns:[{title:'产品名称',dataIndex:'name'},{title:'结算时长（小时）',dataIndex:'hours'},{title:'单价（元/小时）',dataIndex:'price'}].filter(c=>payColumns.includes(c.dataIndex)),dataSource:[{...settle,hours:bill.hours}]}),
        h('div',{className:'ig-payment-total'},'结算金额：',h('strong',null,money(bill.total)),'　已收押金：',h('strong',null,money(settle.deposit)),'　补收金额：',h('strong',null,money(due))),
        h('div',{className:'ig-supplement-fields'},h('label',null,'支付方式：',h(Select,{'aria-label':'补收支付方式',showSearch:true,optionFilterProp:'label',value:state.code||undefined,placeholder:'请选择',disabled:complete,options:candidates(settle).map(p=>({value:p.code,label:p.name})),onChange:choose,style:{width:145}})),
          resourceWay(state.code)&&h(ResourceFields,{state,showFixedHint:false,readOnly:complete,validation,onChange:id=>{setState({...state,resourceId:id});setError('');}}),
          state.code==='CASH'&&h('div',{className:'ig-cash'},h(InputNumber,{'aria-label':'补收现金实收',addonBefore:'现金实收',precision:2,min:0,value:cash,disabled:complete,onChange:setCash}),'元　现金找零：',money(Math.max(0,Number(cash)-due)))),
        (error||!state.code)&&h('div',{className:'resource-error',role:'alert'},error||'当前场景无可用支付方式'),
        complete&&h('div',{role:'status',className:'ig-result'},settle.status==='支付处理中'?'本地预览：支付处理中，请在异常订单查看原交易。':'本地预览：补收已记录，可在订单详情查看两笔收款。'))),
      h(Modal,{open:!!detail,title:'订单详情',width:1000,className:'ig-settlement-modal',onCancel:()=>setDetail(null),footer:h(Button,{onClick:()=>setDetail(null)},'关闭')},detailBody),
      h(Modal,{open:!!printOrder,title:'打印',width:500,onCancel:()=>setPrintOrder(null),footer:h(Button,{onClick:()=>setPrintOrder(null)},'关闭')},printOrder&&description([['订单编号',printOrder.id],['产品名称',printOrder.name],['内导姓名',printOrder.guide],['游客人数',printOrder.count]],1)),
      h(Modal,{open:configure,title:'配置列',width:380,onCancel:()=>setConfigure(false),onOk:()=>setConfigure(false),okText:'确定',cancelText:'取消'},h(Checkbox.Group,{value:payColumns,onChange:values=>{if(values.length)setPayColumns(values);},options:[{value:'name',label:'产品名称'},{value:'hours',label:'结算时长（小时）'},{value:'price',label:'单价（元/小时）'}]})));
  }
  return Workspace;
};
