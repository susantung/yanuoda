/* 冲红联动原型：只操作本机模拟记录，不请求订单、支付或账户接口。 */
(() => {
  const h=React.createElement,{useState,useEffect}=React;
  const {ConfigProvider,Table,Tabs,Button,Space,Form,Input,Select,DatePicker,Modal,Descriptions,Alert,Tag,Checkbox,Radio,message}=antd;
  const KEY='tc-ticket-reversal-preview:v1',CONFIG='tc-ticket-payment-preview:yanoda-demo:v1',admin=!!window.reversalAdmin;
  const now=()=>dayjs().format('YYYY-MM-DD HH:mm:ss'),clone=x=>JSON.parse(JSON.stringify(x));
  const names={CASH:'现金',SCAN_PAY:'扫码付',BANK_CARD:'银行卡',WECHAT:'微信',ALIPAY:'支付宝',AGGREGATE_PAY:'聚合支付',ON_ACCOUNT:'挂帐',PREPAY:'预付款',CREDIT_SIGN:'授信签单'};
  const needs=code=>['SCAN_PAY','BANK_CARD'].includes(code);
  function config(){if(admin)return window.reversalAdmin.fixture();const current=window.paymentPreview.fixture();try{const saved=JSON.parse(localStorage.getItem(CONFIG));if(saved?.scenicId===current.scenicId)return {...saved,session:current.session};}catch{}return current;}
  const identity=()=>config().session||{accountKey:'role:retail-test-01 / 散客测试1',deviceKey:'device:YST散客售票窗口'};
  const codeOf=r=>r?.counterCode||r?.posCode||'';
  const snapshot=(code,r)=>({code,name:names[code],resourceId:r?.id||'',resourceName:r?.name||'',number:codeOf(r)});
  const same=(a,b)=>a.code===b.code&&a.resourceId===b.resourceId&&a.number===b.number;
  function resolve(code,subject,scene){
    const f=config(),p=f.payments.find(x=>x.code===code);
    if(!p?.on||!p.scenes.includes(scene))return {error:'该支付方式已停用或不适用当前业务场景',options:[]};
    if(!needs(code))return {options:[],payment:p,signature:JSON.stringify({on:p.on,scenes:p.scenes})};
    const bindingKey=p.owner==='account'?subject.accountKey:subject.deviceKey,binding=f.bindings[bindingKey],scan=code==='SCAN_PAY';
    const ids=binding?.[scan?'scanSelected':'bankSelected']||[],defaultId=binding?.[scan?'scanDefault':'bankDefault'];
    const options=f.resources.filter(r=>r.enabled&&r.type===(scan?'scan':'pos')&&ids.includes(r.id)&&codeOf(r)),fixed=p.usage==='固定使用一个';
    const error=!options.length?'当前申请账号/设备未配置有效收款资源':!options.some(r=>r.id===defaultId)?'默认收款资源已失效，请检查收款配置':fixed&&options.length!==1?'固定使用一个资源的配置不正确':'';
    return {options,defaultId,fixed,error,payment:p,signature:JSON.stringify({owner:p.owner,usage:p.usage,scenes:p.scenes,bindingKey,ids,defaultId,resources:options})};
  }
  function initial(){
    const subject=identity(),f=config(),scan=f.resources.find(x=>x.id==='scan-1'),bank=f.resources.find(x=>x.id==='pos-1');
    return {version:1,orders:[['DD261021145953001001s','散客','retail','SCAN_PAY',scan,false],['DEMO-CASH-001','散客','retail','CASH',null,false],['DEMO-POS-001','散客','retail','BANK_CARD',bank,false],['DEMO-AGGREGATE-001','散客','retail','AGGREGATE_PAY',null,false],['DEMO-REFUND-001','散客','retail','SCAN_PAY',scan,true],['DEMO-TEAM-001','团队','team','CASH',null,false]].map(([id,kind,scene,code,r,refunded])=>({id,kind,scene,quantity:2,amount:0.02,payment:snapshot(code,r),refunded,subject:clone(subject),createdAt:now(),ticketNo:'T-'+id,document:'—',guide:'—',partner:scene==='team'?'演示合作伙伴':'—'})),records:[]};
  }
  function withDemoRecords(s){
    if(s.demoSeedVersion===2)return s;
    const f=config(),subject={accountKey:'role:retail-test-01 / 散客测试1',deviceKey:'device:YST散客售票窗口'},posSubject={...subject,deviceKey:'device:YST散客售票窗口2'};
    const resource=id=>f.resources.find(r=>r.id===id),time=now();
    const scan=resolve('SCAN_PAY',subject,'retail'),pos=resolve('BANK_CARD',posSubject,'retail');
    const scanAfter=scan.options.find(r=>r.id==='scan-2')||scan.options.find(r=>r.id===scan.defaultId)||scan.options[0];
    const bankAfter=pos.options.find(r=>r.id==='pos-3')||pos.options.find(r=>r.id===pos.defaultId)||pos.options[0];
    const examples=[
      ['SCAN','SCAN_PAY',resource('scan-1'),'SCAN_PAY',scanAfter,subject,'待审批','支付方式仍为扫码付，更正误选的柜台码'],
      ['POS','BANK_CARD',resource('pos-1'),'BANK_CARD',bankAfter,posSubject,'待审批','支付方式仍为银行卡，更正误选的POS编号'],
      ['METHOD','CASH',null,'SCAN_PAY',scanAfter,subject,'待审批','原记录为现金，申请更正为扫码付并记录柜台编码'],
      ['APPROVED','CASH',null,'BANK_CARD',bankAfter,posSubject,'已同意','更正支付方式为银行卡并记录实际POS编号'],
      ['REJECTED','BANK_CARD',resource('pos-1'),'CASH',null,subject,'已驳回','申请改为现金；审核驳回，保留原银行卡及POS编号'],
      ['APPROVED-SCAN','SCAN_PAY',resource('scan-1'),'SCAN_PAY',scanAfter,subject,'已同意','扫码付柜台码更正已通过：详情展示生效后的收款资源与柜台编码'],
      ['APPROVED-POS','BANK_CARD',resource('pos-1'),'BANK_CARD',bankAfter,posSubject,'已同意','银行卡POS更正已通过：详情展示生效后的收款资源与POS编号']
    ];
    for(const [key,beforeCode,beforeResource,afterCode,afterResource,applicant,status,reason] of examples){
      if(needs(afterCode)&&!afterResource)continue;
      const orderId='DEMO-CH-ORDER-'+key,recordId='DEMO-CH-'+key;
      if(s.records.some(r=>r.id===recordId)||s.orders.some(o=>o.id===orderId))continue;
      const before=snapshot(beforeCode,beforeResource),after=snapshot(afterCode,afterResource),approved=status==='已同意';
      s.orders[key.startsWith('APPROVED-')?'unshift':'push']({id:orderId,kind:'散客',scene:'retail',quantity:2,amount:0.02,payment:clone(approved?after:before),refunded:false,subject:clone(applicant),createdAt:time,ticketNo:'T-'+orderId,document:'—',guide:'—',partner:'—',demo:true});
      s.records.push({id:recordId,orderId,kind:'散客',quantity:2,amount:0.02,partner:'—',before,after,subject:clone(applicant),signature:resolve(afterCode,applicant,'retail').signature,reason,status,appliedAt:time,reviewer:status==='待审批'?'':'俞苏桐',reviewedAt:status==='待审批'?'':time,opinion:status==='已同意'?'同意，更正支付信息':status==='已驳回'?'原支付记录无误，驳回申请':'',demo:true});
    }
    s.demoSeedVersion=2;return s;
  }
  function read(){let s;try{const saved=JSON.parse(localStorage.getItem(KEY));if(saved?.version===1)s=saved;}catch{}s=withDemoRecords(s||initial());localStorage.setItem(KEY,JSON.stringify(s));return s;}
  function save(s){localStorage.setItem(KEY,JSON.stringify(s));window.dispatchEvent(new Event('reversal-change'));}
  function available(order){const payments=config().payments,rank=p=>Number.isSafeInteger(p.sortOrder)&&p.sortOrder>0?p.sortOrder:Number.MAX_SAFE_INTEGER;return payments.filter(p=>p.on&&p.scenes.includes(order.scene)&&p.code!=='AGGREGATE_PAY'&&(p.code!==order.payment.code||needs(p.code))&&['CASH','SCAN_PAY','BANK_CARD','WECHAT','ALIPAY','ON_ACCOUNT','PREPAY','CREDIT_SIGN'].includes(p.code)).sort((a,b)=>rank(a)-rank(b)||payments.indexOf(a)-payments.indexOf(b));}
  function qualification(order,s){return order.payment.code==='AGGREGATE_PAY'?'聚合支付订单不支持冲红':order.refunded?'订单存在退票，不支持冲红':s.records.some(x=>x.orderId===order.id&&x.status==='待审批')?'该订单已有待审批冲红申请':'';}
  function validate(draft,scene){const result=resolve(draft.after.code,draft.subject,scene);if(result.error)throw Error(result.error);if(draft.signature!==result.signature)throw Error('支付配置、绑定或资源编号已变更，请重新申请');if(needs(draft.after.code)){const r=result.options.find(x=>x.id===draft.after.resourceId);if(!r||!same(snapshot(draft.after.code,r),draft.after))throw Error('申请收款资源已失效或编号已变更，请重新申请');}}
  function submit(orderId,draft){
    const s=read(),order=s.orders.find(x=>x.id===orderId),error=qualification(order,s);if(error)throw Error(error);
    if(!available(order).some(p=>p.code===draft.after.code))throw Error('该支付方式不可用于本次冲红');
    if(!same(order.payment,draft.before))throw Error('订单支付信息已更新，请重新打开申请');
    if(same(order.payment,draft.after))throw Error('支付信息未发生调整');validate(draft,order.scene);
    const record={...clone(draft),id:'CH'+Date.now(),orderId,amount:order.amount,kind:order.kind,quantity:order.quantity,partner:order.partner,status:'待审批',appliedAt:now(),reviewer:'',reviewedAt:'',opinion:''};s.records.unshift(record);save(s);return record;
  }
  function review(id,approved,opinion){
    if(!opinion?.trim())throw Error('请输入审核意见');const s=read(),record=s.records.find(x=>x.id===id),order=s.orders.find(x=>x.id===record?.orderId);
    if(!record||record.status!=='待审批')throw Error('该申请已处理，请刷新列表');
    if(approved){if(!same(order.payment,record.before))throw Error('订单支付信息已变更');if(order.refunded)throw Error('订单已有退票，不能同意');validate(record,order.scene);order.payment=clone(record.after);}
    record.status=approved?'已同意':'已驳回';record.reviewer='俞苏桐';record.reviewedAt=now();record.opinion=opinion.trim();save(s);return record;
  }
  const desc=items=>h(Descriptions,{bordered:true,size:'small',column:2,items:items.map(([label,children],i)=>({key:i,label,children:children||'—'}))});
  function PaymentInfo({value,amount=0.02}){return desc([['支付方式',value.name],['支付金额','¥'+amount.toFixed(2)],['收款资源',value.resourceName],['柜台编码/POS编号',value.number]]);}
  function Heading({children}){return h('h3',{className:'reversal-heading'},children);}
  function Base({order}){return desc([['订单编号',order.id],['订单类型',order.kind],['订单总额','¥'+order.amount.toFixed(2)],['门票数量',order.quantity+'张']]);}
  // 窗口销售记录的查看走独立订单详情；冲红记录仍使用各次申请详情。
  function WindowOrderDetail({order,records,columns,onBack,onRecord}){
    const [form]=Form.useForm(),[filters,setFilters]=useState({}),[state,setState]=useState('全部'),[hidden,setHidden]=useState([]),[settings,setSettings]=useState(false),[ticket,setTicket]=useState(null),[selected,setSelected]=useState([]);
    const created=order.createdAt,payment=order.payment;
    const items=order.items?.length?order.items:[{name:order.ticketName||'门+1号缆车上+1号缆车下（雨林项目）',qty:order.quantity,price:order.amount/order.quantity}];
    const tickets=items.flatMap((item,itemIndex)=>Array.from({length:item.qty||item.quantity||1},(_,i)=>({key:itemIndex+'-'+i,name:item.name||item.title||'—',visitor:item.visitors?.[i]?.name||'—',document:item.visitors?.[i]?.document||'—',price:item.price??order.amount/order.quantity,no:(order.ticketNo||'T-'+order.id)+(order.quantity>1?'-'+(i+1):''),status:order.refunded?'已退款':order.status||'待确认',printIndex:i+1})));
    const rows=tickets.filter(t=>(state==='全部'||state===t.status)&&[['no','ticketNo'],['visitor','visitor'],['document','document'],['name','name']].every(([key,filter])=>!filters[filter]||String(t[key]).includes(filters[filter].trim())));
    const section=(title,body,extra)=>h('section',{className:'window-order-card',key:title},h('div',{className:'window-order-card-head'},h('h3',null,title),extra),h('div',{className:'window-order-card-body'},body));
    const info=items=>h(ApplyInfo,{items});
    const ticketColumns=[{title:'游客姓名',dataIndex:'visitor',width:120},{title:'门票名称',dataIndex:'name',width:280},{title:'售卖单价（元）',dataIndex:'price',width:140,render:v=>Number(v).toFixed(2)},{title:'票号',dataIndex:'no',width:240},{title:'证件号',dataIndex:'document',width:160},{title:'门票状态',dataIndex:'status',width:100},{title:'检票项目数（已检/全部）',width:200,render:()=> '0/3'},{title:'打印序号',dataIndex:'printIndex',width:100},{title:'操作',fixed:'right',width:140,render:(_,r)=>h(Space,null,h(Button,{type:'link',onClick:()=>message.info('本地预览不连接打印设备')},'打印'),h(Button,{type:'link',onClick:()=>setTicket(r)},'查看'))}].map((c,i)=>({...c,key:c.dataIndex||'column-'+i}));
    const checks=['总票数','待付款','待确认','待使用','已取票','部分检票','全部检票','已退票'];
    const approved=records.filter(r=>r.status==='已同意');
    const adjustmentPayment=value=>h('div',{className:'window-order-adjustment-payment'},h('div',null,value.name),needs(value.code)&&h(React.Fragment,null,h('div',null,'收款资源：'+(value.resourceName||'—')),h('div',null,'柜台编码/POS编号：'+(value.number||'—'))));
    const adjustmentColumns=[{title:'冲红单号',dataIndex:'id',width:210,render:(_,r)=>h(Button,{type:'link',onClick:()=>onRecord(r)},r.id)},{title:'原支付类型',width:260,render:(_,r)=>adjustmentPayment(r.before)},{title:'冲红后支付类型',width:260,render:(_,r)=>adjustmentPayment(r.after)},{title:'申请人',width:200,render:(_,r)=>r.subject.accountKey.slice(5)},{title:'申请时间',dataIndex:'appliedAt',width:180},{title:'支付金额（元）',dataIndex:'amount',width:140,render:v=>v.toFixed(2)},{title:'审批人',dataIndex:'reviewer',width:120},{title:'审核状态',dataIndex:'status',width:110},{title:'审核时间',dataIndex:'reviewedAt',width:180}];
    return h('div',{className:'window-order-detail'},
      h('div',{className:'window-order-title'},h('h2',null,'订单详情'),h(Button,{onClick:onBack},'返 回')),
      h('div',{className:'window-order-scroll'},
        section('订单基础信息',info([['订单编号',order.id],['三方订单编号',order.externalOrderNo],['团散类型',order.kind],['销售渠道',order.salesChannel||'窗口售票'],['销售来源',order.salesSource||order.subject?.deviceKey?.slice(7)],['售票员',order.salesperson||order.subject?.accountKey?.slice(5)],['购票人',order.buyer],['联系电话',order.phone],['下单时间',created],['游玩日期',order.playDate||created?.slice(0,10)],['订单金额',order.amount.toFixed(2)+'元'],['订单票数',order.quantity+'张']]),h('span',{className:'reversal-order-status'},h('i'),order.refunded?'已退票':order.status||'待确认')),
        section('订单支付信息',h(React.Fragment,null,info([['支付时间',order.paidAt||created],['支付状态','支付成功'],['支付类型',payment.name],['支付金额',order.amount.toFixed(2)+'元'],['支付流水号',order.paymentFlowNo]]),needs(payment.code)&&info([['收款资源',payment.resourceName||'—'],['柜台编码/POS编号',payment.number||'—']]))),
        approved.length>0&&section('冲红调整信息',h(Table,{rowKey:'id',size:'small',bordered:true,columns:adjustmentColumns,dataSource:approved,scroll:{x:1760},pagination:false})),
        section('订单检票信息',h(React.Fragment,null,h('div',{className:'window-order-counts'},[['未检票数',order.refunded?0:order.quantity],['已检票数',0],['已退票数',order.refunded?order.quantity:0]].map(([label,value])=>h('div',{key:label},h('span',null,label),h('strong',null,value+'张')))),h(Table,{rowKey:'key',size:'small',pagination:false,scroll:{x:1650},columns:[{title:'门票名称',dataIndex:'name',width:300},...['分类','票型种类','价格类型','季节类型','票型打印'].map(title=>({title,width:110,render:()=>title==='分类'?'YST测试票':title==='票型种类'?'雨林项目':title==='价格类型'?'限时秒杀':title==='票型打印'?'打印':'-'})),...checks.map(title=>({title,width:100,render:(_,r)=>title==='总票数'||title===(order.refunded?'已退票':'待确认')?r.qty:0}))],dataSource:items.map((item,key)=>({key,name:item.name||item.title,qty:item.qty||item.quantity||1}))}))),
        section('游客门票详情',h(React.Fragment,null,h(Form,{form,layout:'inline',className:'window-order-ticket-filters',onFinish:setFilters},[['票号','ticketNo'],['游客姓名','visitor'],['游客证件号','document'],['门票名称','name']].map(([label,name])=>h(Form.Item,{label,name,key:name},h(Input,{allowClear:true,placeholder:name==='name'?'请输入门票名称':undefined}))),h(Space,null,h(Button,{type:'primary',htmlType:'submit'},'查 询'),h(Button,{onClick:()=>{form.resetFields();setFilters({});}},'重 置'))),h(Radio.Group,{value:state,onChange:e=>setState(e.target.value),className:'window-order-ticket-states'},['全部','待付款','待确认','待使用','已取票','部分检票','全部检票','已退款'].map(value=>h(Radio.Button,{value,key:value},value))),h('div',{className:'window-order-ticket-tools'},h(Button,{onClick:()=>message.info('本地预览不执行真实导入')},'导入'),h(Button,{onClick:()=>message.info('本地预览不执行真实导出')},'导出'),h(Button,{onClick:()=>message.info(selected.length?'本地预览不连接打印设备':'请先选择门票')},'批量打印'),h(Button,{onClick:()=>setSettings(true)},'配置列')),h(Table,{rowKey:'key',size:'small',rowSelection:{selectedRowKeys:selected,onChange:setSelected},columns:ticketColumns.filter(c=>!hidden.includes(c.key)),dataSource:rows,scroll:{x:1500},pagination:{defaultPageSize:10,showSizeChanger:true,showTotal:total=>'共 '+total+' 条',locale:{items_per_page:'条/页'}},locale:{emptyText:'暂无数据'}}))),
        ),
      settings&&h(Modal,{open:true,title:'配置列',footer:null,onCancel:()=>setSettings(false)},ticketColumns.map(c=>h('div',{key:c.key},h(Checkbox,{checked:!hidden.includes(c.key),onChange:e=>setHidden(e.target.checked?hidden.filter(k=>k!==c.key):[...hidden,c.key])},c.title)))),
      ticket&&h(Modal,{open:true,title:'门票详情',footer:h(Button,{onClick:()=>setTicket(null)},'关闭'),onCancel:()=>setTicket(null)},info([['票号',ticket.no],['游客姓名',ticket.visitor],['门票名称',ticket.name],['门票状态',ticket.status],['售卖单价',Number(ticket.price).toFixed(2)+'元']])));
  }
  // 申请页沿用现网无边框信息布局；其余详情、审核页不受此局部样式影响。
  function ApplyInfo({items,className=''}){return h('div',{className:'reversal-apply-info '+className},items.map(([label,value])=>h('div',{className:'reversal-apply-info-item',key:label},h('span',{className:'reversal-apply-label'},label+'：'),h('span',null,value||'-'))));}
  function Apply({order,onClose,onDone}){
    const subject=identity(),[code,setCode]=useState(),[resourceId,setResource]=useState(),[reason,setReason]=useState(''),[error,setError]=useState(''),[observed,setObserved]=useState('');
    const result=code?resolve(code,subject,order.scene):{options:[]},selected=result.options.find(r=>r.id===resourceId);
    const choose=c=>{const next=resolve(c,subject,order.scene);setCode(c);setResource(next.defaultId);setObserved(next.signature);setError('');};
    const example=order.id==='DD261021145953001001s',createdAt=example?'2026-10-21 14:59:53':order.createdAt;
    return h(Modal,{open:true,title:'冲红申请',width:900,centered:true,className:'reversal-modal reversal-apply-modal',onCancel:onClose,okText:'提交申请',cancelText:'取消申请',onOk:()=>{try{if(!code)throw Error('请选择冲红后支付类型');if(result.error)throw Error(result.error);if(needs(code)&&!selected)throw Error('请选择冲红后收款资源');submit(order.id,{before:order.payment,after:snapshot(code,selected),subject,reason,signature:observed});message.success('申请已提交，待审核');onDone();}catch(e){setError(e.message);}}},
      h('div',{className:'reversal-apply-section-title'},h(Heading,null,'订单基础信息'),h('span',{className:'reversal-order-status'},h('i'),order.refunded?'已退票':'待确认')),
      h(ApplyInfo,{items:[['订单编号',order.id],['三方订单编号',order.externalOrderNo],['团散类型',order.kind],['销售渠道',order.salesChannel||'窗口售票'],['销售来源',order.salesSource||(example?'B门区售票窗口':order.subject?.deviceKey?.slice(7))],['售票员',order.salesperson||(example?'王月欣':order.subject?.accountKey?.slice(5))],['购票人',order.buyer],['联系电话',order.phone],['下单时间',createdAt],['游玩日期',order.playDate||createdAt?.slice(0,10)],['订单金额',order.amount.toFixed(2)+'元'],['订单票数',order.quantity+'张']]}),
      h(Heading,null,'订单支付信息'),h(ApplyInfo,{items:[['支付时间',order.paidAt||createdAt],['支付状态','支付成功'],['支付类型',order.payment.name],['支付金额',order.amount.toFixed(2)+'元'],['支付流水号',order.paymentFlowNo]]}),
      needs(order.payment.code)&&h(ApplyInfo,{items:[['收款资源',order.payment.resourceName||'—'],['柜台编码/POS编号',order.payment.number||'—']]}),
      order.scene==='team'&&h(React.Fragment,null,h(Heading,null,'团队信息'),h(ApplyInfo,{items:[['合作伙伴',order.partner],['导游',order.guide]]})),h(Heading,null,'冲红调整信息'),
      h(ApplyInfo,{className:'reversal-apply-applicant',items:[['冲红申请售票员',subject.accountKey?.slice(5)],['冲红申请来源',subject.deviceKey?.slice(7)]]}),
      h(Form,{layout:'horizontal',className:'reversal-apply-form'},
        h('div',{className:'reversal-apply-payment-row'},
          h(Form.Item,{label:'冲红后支付类型',required:true},h(Select,{value:code,placeholder:'请选择',options:available(order).map(p=>({value:p.code,label:p.name})),onChange:choose})),
          needs(code)&&h(Form.Item,{label:'收款资源',required:true},result.fixed?h(Input,{value:selected?.name||'',disabled:true}):h(Select,{showSearch:true,optionFilterProp:'label',filterOption:(input,option)=>option.label.toLowerCase().includes(input.trim().toLowerCase()),value:resourceId,placeholder:'请选择收款资源',options:result.options.map(r=>({value:r.id,label:r.name})),onChange:id=>{setResource(id);setObserved(resolve(code,subject,order.scene).signature);setError('');}})),
          needs(code)&&h(Form.Item,{label:'柜台编码/POS编号'},h(Input,{disabled:true,value:codeOf(selected)}))),
        h(Form.Item,{label:'冲红申请原因',className:'reversal-apply-reason'},h(Input.TextArea,{value:reason,onChange:e=>setReason(e.target.value),maxLength:500,showCount:true,rows:3}))),
      (error||result.error)&&h(Alert,{type:'error',showIcon:true,message:error||result.error}));
  }
  function RecordBody({record,order}){return h(React.Fragment,null,h(Heading,null,'订单基础信息'),h(Base,{order}),h(Heading,null,'原支付信息'),h(PaymentInfo,{value:record.before,amount:record.amount}),h(Heading,null,'冲红调整信息'),h(PaymentInfo,{value:record.after,amount:record.amount}),desc([['冲红编号',record.id],['申请状态',record.status],['申请售票员',record.subject.accountKey.slice(5)],['申请来源',record.subject.deviceKey.slice(7)],['申请时间',record.appliedAt],['申请原因',record.reason],['审批人员',record.reviewer],['审批时间',record.reviewedAt],['审核意见',record.opinion]]),h(Heading,null,'审核日志'),h(Table,{size:'small',bordered:true,rowKey:'node',pagination:false,scroll:{x:780},columns:[{title:'节点名称',dataIndex:'node',width:110},{title:'操作人员',dataIndex:'operator',width:180},{title:'操作状态',dataIndex:'status',width:100},{title:'审核意见',dataIndex:'opinion',width:150},{title:'操作时间',dataIndex:'time',width:180}],dataSource:[{node:'发起申请',operator:record.subject.accountKey.slice(5),status:'已提交',opinion:record.reason||'—',time:record.appliedAt},...(record.status==='待审批'?[]:[{node:'审核',operator:record.reviewer,status:record.status,opinion:record.opinion,time:record.reviewedAt}])]}));}
  // 后台按现网 p__team__financialManage__chManage__index 恢复；仅增加资源快照展示。
  function AdminRecord({record,order,logs=false}){
    const info=(title,items)=>h(Descriptions,{title,column:3,items:items.map(([label,children,span],key)=>({key,label,children:children??'-',span:span||1}))});
    const source=order.salesSource||order.subject?.deviceKey?.slice(7),seller=order.salesperson||order.subject?.accountKey?.slice(5),created=order.createdAt;
    return h('div',{className:'reversal-admin-record'},
      info('订单基础信息', [['订单编号',order.id],['三方订单编号',order.externalOrderNo||'-'],['团散类型',order.kind],['销售渠道',order.salesChannel||'窗口售票'],['销售来源',source],['售票员',seller],['购票人',order.buyer||'-'],['联系电话',order.phone||'-'],['下单时间',created],['游玩日期',order.playDate||created?.slice(0,10)],['订单金额（元）',order.amount],['订单票数(张）',order.quantity]]),
      info('订单支付信息', [['支付时间',order.paidAt||created],['支付状态','支付成功'],['支付类型',record.before.name],['支付金额（元）',record.amount],['支付流水号',order.paymentFlowNo||'-'],...(needs(record.before.code)?[['收款资源',record.before.resourceName||'-'],['柜台编码/POS编号',record.before.number||'-']]:[])]),
      order.scene==='team'&&info('团队基础信息',[['集团名称',order.groupName||'-'],['旅行社名',order.partner||'-'],['付款账户类型',order.accountType||'-'],['账户余额',order.accountBalance===undefined?'-':order.accountBalance+'元'],['签单授信余额',order.creditBalance??'-']]),
      info('冲红调整信息',[['冲红后支付类型',record.after.name],['冲红申请售票员',record.subject.accountKey.slice(5)],['冲红申请来源',record.subject.deviceKey.slice(7)],...(needs(record.after.code)?[['冲红后收款资源',record.after.resourceName||'-'],['冲红后柜台编码/POS编号',record.after.number||'-',2],['冲红申请原因',record.reason||'-',3]]:[['冲红申请原因',record.reason||'-',3]])]),
      logs&&h(AdminLogs,{record}));
  }
  function AdminLogs({record}){
    const [hidden,setHidden]=useState([]),[show,setShow]=useState(false);
    const columns=[{title:'节点',dataIndex:'node',width:120},{title:'操作人',dataIndex:'operator',width:120},{title:'操作状态',dataIndex:'status',width:120},{title:'操作意见',dataIndex:'opinion',width:250},{title:'操作时间',dataIndex:'time',width:120},{title:'耗时',dataIndex:'duration',width:120}];
    const rows=[{node:'发起申请',operator:record.subject.accountKey.slice(5),status:'提交申请',opinion:record.reason||'-',time:record.appliedAt,duration:'-'},...(record.status==='待审批'?[]:[{node:'领导审核',operator:record.reviewer,status:record.status==='已同意'?'同意':'驳回',opinion:record.opinion,time:record.reviewedAt,duration:Math.max(1,dayjs(record.reviewedAt).diff(dayjs(record.appliedAt),'minute'))+'分钟'}])];
    return h(React.Fragment,null,h('div',{className:'reversal-admin-toolbar'},h(Button,{onClick:()=>setShow(true)},'⚙ 配置列')),h(Table,{rowKey:'node',size:'small',bordered:true,pagination:false,scroll:{x:850},columns:columns.filter(c=>!hidden.includes(c.dataIndex)),dataSource:rows}),show&&h(Modal,{open:true,title:'配置列',footer:null,onCancel:()=>setShow(false)},h('div',{className:'reversal-admin-columns'},columns.map(c=>h('div',{key:c.dataIndex},h(Checkbox,{checked:!hidden.includes(c.dataIndex),onChange:e=>setHidden(e.target.checked?hidden.filter(k=>k!==c.dataIndex):[...hidden,c.dataIndex])},c.title))))));
  }
  function Review({record,order,approve,onClose,onDone,detail=false}){const [opinion,setOpinion]=useState(approve?'同意':'驳回'),[error,setError]=useState('');return h(Modal,{open:true,title:'订单冲红申请',width:960,centered:true,className:'reversal-modal reversal-admin-modal',onCancel:onClose,cancelText:'取消',okText:approve?'同意':'驳回',...(detail?{footer:h(Button,{onClick:onClose},'关闭')}:{}),onOk:()=>{try{if(!opinion.trim())throw Error('请填写原因说明');review(record.id,approve,opinion);message.success('审核完成');onDone();}catch(e){setError(e.message);}}},h(AdminRecord,{record,order,logs:detail}),!detail&&h(Form,{layout:'horizontal'},h(Form.Item,{label:'原因说明',required:true,validateStatus:error?'error':undefined,help:error},h(Input.TextArea,{value:opinion,onChange:e=>{setOpinion(e.target.value);setError('');},maxLength:500,rows:4,showCount:true}))),error&&opinion.trim()&&h(Alert,{type:'error',message:error,showIcon:true}));}
  function AdminFilters({form,tab,onSearch,onReset}){return h(Form,{form,layout:'horizontal',className:'reversal-admin-filters '+(tab==='pending'?'is-pending':'is-reviewed'),onFinish:onSearch},h(Form.Item,{label:'订单编号',name:'orderId'},h(Input,{placeholder:'请输入订单编号'})),h(Form.Item,{label:'申请人',name:'applicant'},h(Input,{placeholder:'请输入申请人'})),tab==='reviewed'&&h(Form.Item,{label:'申请日期',name:'date'},h(DatePicker.RangePicker,{showTime:true,format:'YYYY-MM-DD HH:mm:ss',placeholder:['开始时间','结束时间']})),tab==='reviewed'&&h(Form.Item,{label:'表单状态',name:'status'},h(Select,{allowClear:true,placeholder:'请选择表单状态',options:[{value:'已同意',label:'同意'},{value:'已驳回',label:'驳回'}]})),h('div',{className:'reversal-admin-filter-actions'},h(Button,{type:'primary',htmlType:'submit'},'查 询'),h(Button,{onClick:onReset},'重 置')));}
  function AdminColumns({pending,open}){return [
    {title:'冲红单号',dataIndex:'id'},{title:'订单编码',dataIndex:'orderId'},{title:'团散类型',dataIndex:'kind'},{title:'门票张数',dataIndex:'quantity'},
    {title:'申请人',render:(_,r)=>r.subject.accountKey.slice(5)},{title:'申请时间',dataIndex:'appliedAt'},
    {title:'订单金额（元）',dataIndex:'amount'},{title:'支付金额（元）',dataIndex:'amount'},{title:'原支付类型',render:(_,r)=>r.before.name},{title:'冲红后支付类型',render:(_,r)=>r.after.name},
    {title:'支付日期',render:(_,r)=>r.paidAt||r.appliedAt},...(!pending?[{title:'表单状态',render:(_,r)=>r.status==='已同意'?'同意':'驳回'}]:[]),
    {title:'操作',fixed:'right',width:180,render:(_,r)=>h(Space,{size:0},pending?h(React.Fragment,null,h(Button,{type:'link',onClick:()=>open(r,true)},'同意'),h(Button,{type:'link',onClick:()=>open(r,false)},'驳回')):h(Button,{type:'link',onClick:()=>open(r,true,true)},'详情'))}
  ].map(c=>({width:120,...c,key:c.title}));}
  const status=value=>h(Tag,{color:value==='待审批'?'processing':value==='已同意'?'success':'default'},value);
  function App(){
    const [orderPage,setOrderPage]=useState(false);
    useEffect(()=>{const change=e=>setOrderPage(e.detail==='订单详情');window.addEventListener('reversal-page',change);return()=>window.removeEventListener('reversal-page',change);},[]);
    const openOrder=id=>{setDetail({orderId:id});let tab=document.querySelector('.page-tab[data-page="订单详情"]');if(!tab){tab=document.createElement('button');tab.className='page-tab';tab.dataset.page='订单详情';tab.innerHTML='订单详情 <span class="tab-close" role="button" aria-label="关闭订单详情页">×</span>';document.getElementById('keepTabs').insertBefore(tab,document.getElementById('previewSessionControls'));tab.onclick=e=>{if(e.target.closest('.tab-close')){tab.remove();document.querySelector('.page-tab[data-page="统计"]').click();return;}document.querySelectorAll('.page-tab').forEach(t=>t.classList.toggle('active',t===tab));};}tab.click();setOrderPage(true);};
    const defaultFilters=key=>admin?(key==='reviewed'?{date:[dayjs().startOf('day'),dayjs().endOf('day')]}:{}):({date:[dayjs().subtract(key==='sales'?0:1,'month').startOf('day'),dayjs().endOf('day')]});
    const [data,setData]=useState(read),[tab,setTab]=useState(admin?'pending':'sales'),[dialog,setDialog]=useState(null),[detail,setDetail]=useState(null),[filters,setFilters]=useState(()=>defaultFilters(admin?'pending':'sales')),[form]=Form.useForm(),[expanded,setExpanded]=useState(false),[columnSettings,setColumnSettings]=useState({}),[dragColumn,setDragColumn]=useState(null);
    useEffect(()=>{if(admin)return;const id=new URLSearchParams(location.search).get('orderId');if(id&&data.orders.some(o=>o.id===id))openOrder(id);},[]);
    useEffect(()=>{const refresh=()=>setData(read());window.addEventListener('storage',refresh);window.addEventListener('reversal-change',refresh);return()=>{window.removeEventListener('storage',refresh);window.removeEventListener('reversal-change',refresh);};},[]);
    const done=()=>{setDialog(null);setData(read());},changeTab=key=>{setTab(key);setDetail(null);setFilters(defaultFilters(key));form.resetFields();form.setFieldsValue(defaultFilters(key));};
    const order=detail&&data.orders.find(o=>o.id===detail.orderId);
    const recColumns=[{title:'冲红编号',dataIndex:'id',width:190},{title:'订单编号',dataIndex:'orderId',width:220},{title:'订单类型',dataIndex:'kind',width:100},{title:'门票数量',dataIndex:'quantity',width:100},{title:'订单金额',dataIndex:'amount',width:100,render:v=>'¥'+v.toFixed(2)},{title:'原支付类型',width:120,render:(_,r)=>r.before.name},{title:'冲红后支付类型',width:140,render:(_,r)=>r.after.name},{title:'申请售票员',width:200,render:(_,r)=>r.subject.accountKey.slice(5)},{title:'申请时间',dataIndex:'appliedAt',width:180},{title:'审批人员',dataIndex:'reviewer',width:120,render:v=>v||'—'},{title:'申请状态',dataIndex:'status',width:110,render:status},{title:'审批时间',dataIndex:'reviewedAt',width:180,render:v=>v||'—'},{title:'操作',fixed:'right',width:admin&&tab==='pending'?180:90,render:(_,r)=>h(Space,{size:0},admin&&r.status==='待审批'&&h(Button,{type:'link',onClick:()=>setDialog({kind:'review',record:r,approve:true})},'同意'),admin&&r.status==='待审批'&&h(Button,{type:'link',onClick:()=>setDialog({kind:'review',record:r,approve:false})},'驳回'),h(Button,{type:'link',onClick:()=>setDetail({orderId:r.orderId,recordId:r.id})},'查看'))}];
    const salesColumns=[{title:'订单编号',dataIndex:'id',width:225},{title:'订单类型',dataIndex:'kind',width:100},{title:'门票数量',dataIndex:'quantity',width:100},{title:'合作伙伴',dataIndex:'partner',width:140},{title:'订单金额',dataIndex:'amount',width:100,render:v=>'¥'+v.toFixed(2)},{title:'支付类型',width:110,render:(_,r)=>r.payment.name},{title:'支付金额',width:100,render:(_,r)=>'¥'+r.amount.toFixed(2)},{title:'支付状态',width:110,render:()=> '支付成功'},{title:'支付时间',dataIndex:'createdAt',width:180},{title:'订单状态',width:100,render:(_,r)=>r.refunded?'已退票':'已确认'},{title:'操作',fixed:'right',width:190,render:(_,r)=>h(Space,{size:0},h(Button,{type:'link',onClick:()=>openOrder(r.id)},'查看'),!data.records.some(x=>x.orderId===r.id&&x.status==='待审批')&&h(Button,{type:'link',onClick:()=>{const error=qualification(r,data);if(error)message.warning(error);else setDialog({kind:'apply',order:r});}},'冲红申请'))}];
    const match=(value,field)=>!filters[field]||String(value).toLowerCase().includes(String(filters[field]).trim().toLowerCase());
    const rangeMatch=value=>!filters.date||(dayjs(value).valueOf()>=(admin?filters.date[0]:filters.date[0].startOf('day')).valueOf()&&dayjs(value).valueOf()<=(admin?filters.date[1]:filters.date[1].endOf('day')).valueOf());
    const rows=tab==='sales'?data.orders.filter(r=>match(r.id,'orderId')&&match(r.ticketNo,'ticketNo')&&match(r.document,'document')&&match(r.guide,'guide')&&rangeMatch(r.createdAt)):data.records.filter(r=>(!admin||(tab==='pending'?r.status==='待审批':r.status!=='待审批'))&&match(r.id,'recordId')&&match(r.orderId,'orderId')&&match(r.subject.accountKey,'applicant')&&(!filters.status||r.status===filters.status)&&rangeMatch(r.appliedAt));
    const input=(label,name)=>h(Form.Item,{label,name,key:name},h(Input,{allowClear:true}));
    if(admin){
      const open=(record,approve,detail=false)=>setDialog({kind:'review',record,approve,detail});
      const columns=AdminColumns({pending:tab==='pending',open});
      const settings=columnSettings[tab]||columns.map(c=>({key:c.key,visible:true}));
      const visibleColumns=settings.filter(c=>c.visible).map(s=>columns.find(c=>c.key===s.key)).filter(Boolean);
      const updateColumns=value=>setColumnSettings(previous=>({...previous,[tab]:value}));
      return h(ConfigProvider,{theme:{token:{colorPrimary:'#1677ff',fontSize:14,controlHeight:32,borderRadius:6}}},h('div',{className:'reversal-content reversal-admin-content'},
        h(Tabs,{activeKey:tab,onChange:changeTab,items:[{key:'pending',label:'待审批'},{key:'reviewed',label:'已审批'}]}),
        h(AdminFilters,{form,tab,onSearch:values=>setFilters(values),onReset:()=>{form.resetFields();form.setFieldsValue(defaultFilters(tab));setFilters(defaultFilters(tab));}}),
        h('div',{className:'reversal-admin-toolbar'},h(Button,{type:'primary',onClick:()=>{
          const text=[columns.filter(c=>c.title!=='操作').map(c=>c.title),...rows.map(r=>columns.filter(c=>c.title!=='操作').map(c=>c.dataIndex?r[c.dataIndex]:c.title==='申请人'?r.subject.accountKey.slice(5):c.title==='原支付类型'?r.before.name:c.title==='冲红后支付类型'?r.after.name:c.title==='支付日期'?r.appliedAt:r.status==='已同意'?'同意':'驳回'))].map(row=>row.map(v=>'"'+String(v??'-').replaceAll('"','""')+'"').join(',')).join('\r\n');
          const url=URL.createObjectURL(new Blob(['\uFEFF'+text],{type:'text/csv;charset=utf-8'})),link=document.createElement('a');link.href=url;link.download='冲红审批列表.csv';link.click();URL.revokeObjectURL(url);
        }},'导出'),h(Button,{onClick:()=>setDialog({kind:'columns'})},'⚙ 配置列')),
        h(Table,{rowKey:'id',bordered:true,size:'small',columns:visibleColumns,dataSource:rows,scroll:{x:'max-content',y:'calc(100vh - 440px)'},pagination:{defaultPageSize:10,showQuickJumper:true,showSizeChanger:true,showTotal:total=>'共 '+total+' 条',locale:{items_per_page:'条/页',jump_to:'跳至',page:'页'}},locale:{emptyText:'暂无数据'}}),
        dialog?.kind==='review'&&h(Review,{record:dialog.record,order:data.orders.find(o=>o.id===dialog.record.orderId),approve:dialog.approve,detail:dialog.detail,onClose:()=>setDialog(null),onDone:done}),
        dialog?.kind==='columns'&&h(Modal,{open:true,title:'配置列',onCancel:()=>setDialog(null),footer:null},h('div',{className:'reversal-admin-columns'},settings.map(item=>h('div',{key:item.key,draggable:true,onDragStart:()=>setDragColumn(item.key),onDragOver:e=>e.preventDefault(),onDrop:e=>{e.preventDefault();if(!dragColumn||dragColumn===item.key)return;const next=[...settings],from=next.findIndex(c=>c.key===dragColumn),to=next.findIndex(c=>c.key===item.key);next.splice(to,0,next.splice(from,1)[0]);updateColumns(next);setDragColumn(null);}},h(Checkbox,{checked:item.visible,onChange:e=>updateColumns(settings.map(c=>c.key===item.key?{...c,visible:e.target.checked}:c))},item.key)))))));
    }
    if(orderPage&&order)return h(ConfigProvider,{theme:{token:{colorPrimary:'#1677ff',fontSize:14,controlHeight:32,borderRadius:6}}},h(WindowOrderDetail,{key:order.id,order,records:data.records.filter(r=>r.orderId===order.id),columns:recColumns,onBack:()=>document.querySelector('.page-tab[data-page="统计"]').click(),onRecord:r=>setDialog({kind:'record',record:r})}),dialog?.kind==='record'&&h(Modal,{open:true,title:'冲红详情',width:960,className:'reversal-modal',footer:h(Button,{onClick:()=>setDialog(null)},'关闭'),onCancel:()=>setDialog(null)},h(RecordBody,{record:dialog.record,order})));
    return h(ConfigProvider,{theme:{token:{colorPrimary:'#1677ff',fontSize:14,controlHeight:32,borderRadius:6}}},h('div',{className:'reversal-content'},h(Tabs,{activeKey:tab,onChange:changeTab,items:(admin?[['pending','待审批'],['reviewed','已审批']]:[['sales','销售记录'],['records','冲红记录']]).map(([key,label])=>({key,label}))}),
      detail?.recordId?h(React.Fragment,null,h(Button,{onClick:()=>setDetail(null),className:'reversal-back'},'返回列表'),h(RecordBody,{record:data.records.find(r=>r.id===detail.recordId),order})):
      h(React.Fragment,null,h(Form,{form,initialValues:defaultFilters(tab),layout:'horizontal',className:'reversal-filters',onFinish:values=>{if(values.date&&values.date[1].diff(values.date[0],'day')>366){message.warning('查询时间不能超过一年');return;}setFilters(values);}},input('订单编号','orderId'),tab==='sales'?input('门票编号','ticketNo'):input('冲红编号','recordId'),tab!=='sales'&&input('申请售票员','applicant'),tab!=='sales'&&h(Form.Item,{label:'申请状态',name:'status'},h(Select,{allowClear:true,options:['待审批','已同意','已驳回'].map(value=>({value,label:value}))})),tab==='sales'&&expanded&&input('游客证件号','document'),tab==='sales'&&expanded&&input('导游证件号','guide'),h(Form.Item,{label:tab==='sales'?'支付时间':'申请时间',name:'date'},h(DatePicker.RangePicker,{allowClear:true,placeholder:['开始日期','结束日期']})),h('div',{className:'reversal-filter-actions'},h(Button,{type:'primary',htmlType:'submit'},'查 询'),h(Button,{onClick:()=>{form.resetFields();form.setFieldsValue(defaultFilters(tab));setFilters(defaultFilters(tab));}},'重 置'),tab==='sales'&&h(Button,{type:'link',onClick:()=>setExpanded(!expanded)},expanded?'收起':'展开'))),h(Table,{rowKey:'id',bordered:true,size:'middle',columns:tab==='sales'?salesColumns:recColumns,dataSource:rows,scroll:{x:tab==='sales'?1555:2040},pagination:{pageSize:10,showQuickJumper:true,showSizeChanger:true,showTotal:total=>'共 '+total+' 条',locale:{items_per_page:'条/页',jump_to:'跳至',page:'页',prev_page:'上一页',next_page:'下一页'}},locale:{emptyText:'暂无数据'}})),
      dialog?.kind==='apply'&&h(Apply,{order:dialog.order,onClose:()=>setDialog(null),onDone:done}),dialog?.kind==='review'&&h(Review,{record:dialog.record,order:data.orders.find(o=>o.id===dialog.record.orderId),approve:dialog.approve,onClose:()=>setDialog(null),onDone:done})));
  }
  const host=document.createElement('section');host.id='reversalWorkspace';
  if(admin){host.className='page-container hidden';host.id='page-reversal';document.querySelector('.main>.page').append(host);window.reversalAdmin.register();const group=document.createElement('div');group.className='menu-group open';group.innerHTML='<div class="submenu-title"><span class="menu-icon">↶</span><span class="menu-label">冲红管理</span><span class="menu-arrow">⌄</span></div><div class="submenu"><div class="submenu-item" data-page="reversal">冲红审核</div></div>';document.querySelector('#menu').append(group);group.querySelector('.submenu-title').onclick=()=>group.classList.toggle('open');group.querySelector('[data-page]').onclick=()=>window.reversalAdmin.show();if(new URLSearchParams(location.search).get('page')==='reversal')window.reversalAdmin.show();}
  else{
    host.hidden=true;host.className='reversal-window';document.body.append(host);
    const nav=[...document.querySelectorAll('.mainnav button')];
    function route(page){const show=page==='统计'||page==='订单详情';host.hidden=!show;host.classList.toggle('is-order-detail',page==='订单详情');window.dispatchEvent(new CustomEvent('reversal-page',{detail:page}));document.querySelector('main.page').style.display=show?'none':'';if(show){document.querySelector('main.page').hidden=true;for(const selector of ['#partnerWorkspace','#innerGuideWorkspace']){const other=document.querySelector(selector);if(other)other.hidden=true;}nav.forEach(b=>b.classList.toggle('active',b.textContent.trim()===page));}}
    nav.forEach(button=>button.addEventListener('click',()=>route(button.textContent.trim())));
    document.getElementById('keepTabs').addEventListener('click',()=>queueMicrotask(()=>route(document.querySelector('.page-tab.active')?.dataset.page)));
    if(new URLSearchParams(location.search).get('view')==='reversal')nav.find(b=>b.textContent.trim()==='统计').click();
  }
  ReactDOM.createRoot(host).render(h(App));
  window.reversalPreview={read:()=>clone(read()),resolve,submit,review,reset:()=>save(initial()),key:KEY};
})();
