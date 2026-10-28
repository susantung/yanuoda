/* 评审预览：批量建立待处理队列；资金仍逐笔通过原W06事务提交。 */
(() => {
  const h=React.createElement,{useState}=React;
  const {Modal,Table,Input,Select,DatePicker,Button,Space,Alert,Descriptions,Tag}=antd;
  const blank=()=>({customer:'',order:'',owner:'',cashier:undefined,dates:null,keyword:'',dueAmount:''});
  const model=window.SupplementRepaymentModel,fmt=n=>(n/100).toFixed(2);
  function Batch({baseOrders,dateLocale,onCancel,onComplete}){
    const [queue,setQueue]=useState(null),[index,setIndex]=useState(0),[done,setDone]=useState([]),[stage,setStage]=useState('sources'),[ids,setIds]=useState([]),[search,setSearch]=useState(blank),[draft,setDraft]=useState(blank),[page,setPage]=useState(1),[error,setError]=useState('');
    let orders=[],readError='';try{orders=model.apply(baseOrders,model.readLedger())}catch(e){readError=e.message}
    const source=queue?.[index],pending=orders.filter(r=>r.state==='pending'&&r.partner==='公共临时客户'&&r.method==='挂帐'&&r.amount-r.refunded>0);
    const chosen=pending.filter(r=>ids.includes(r.id)),due=chosen.reduce((n,r)=>n+r.amount-r.refunded,0),amount=Math.round((source?.amount||0)*100);
    const includes=(value,key)=>!key||String(value||'').includes(key.trim());
    const rows=pending.filter(r=>(!String(search.dueAmount).trim()||r.amount-r.refunded===Math.round(Number(search.dueAmount)*100))&&(!search.keyword||[r.customer,r.id,r.owner].some(v=>String(v||'').includes(search.keyword.trim())))&&includes(r.customer,search.customer)&&includes(r.id,search.order)&&includes(r.owner,search.owner)&&(!search.cashier||r.cashier===search.cashier)&&(!search.dates||(!search.dates[0]||r.created.slice(0,10)>=search.dates[0].format('YYYY-MM-DD'))&&(!search.dates[1]||r.created.slice(0,10)<=search.dates[1].format('YYYY-MM-DD'))));
    const runSearch=()=>{setSearch({...draft});setPage(1)};
    const resetSearch=()=>{setDraft(blank());setSearch(blank());setPage(1)};
    const field=(label,key,control)=>h('div',{className:'w05-field',key},h('label',{htmlFor:'batch-'+key},label+'：'),h('div',{className:'w05-control'},control));
    const input=(label,key,placeholder)=>field(label,key,h(Input,{id:'batch-'+key,value:draft[key],placeholder,allowClear:true,onChange:e=>setDraft(d=>({...d,[key]:e.target.value})),onPressEnter:runSearch}));
    const end=()=>{if(done.length){setStage('result')}else onCancel()};
    const canProceed=chosen.length>0&&due>0&&amount>=due&&!readError;
    const startPayment=()=>{if(!canProceed)return;setStage('pay')};
    const accepted=result=>{
      const next=[...done,{key:source.recordNo,sourceNo:source.recordNo,amount:source.amount,receiptNo:result.receipt.id,due:due/100,income:(amount-due)/100,count:chosen.length}];
      setDone(next);setIds([]);setSearch(blank());setDraft(blank());setPage(1);setError('');
      if(index+1<queue.length){setIndex(index+1);setStage('orders')}else setStage('result');
    };
    const sourceTitle=source&&h(Descriptions,{size:'small',bordered:true,column:2,items:[{key:1,label:'原充值记录',children:source.recordNo},{key:2,label:'本笔金额',children:h('strong',{style:{color:'#f5222d'}},source.amount.toFixed(2)+' 元')},{key:3,label:'原支付方式／编号',children:source.paymentMethod+'／'+source.terminalNo},{key:4,label:'原对接负责人',children:source.owner||'—'}]});
    const columns=[{title:'客户名称',dataIndex:'customer',width:70,ellipsis:true},{title:'对接负责人',dataIndex:'owner',width:128,ellipsis:true},{title:'原订单售票员',dataIndex:'cashier',width:94,ellipsis:true},{title:'订单号',dataIndex:'id',width:150,render:id=>h('a',{href:'order-detail.html?tempOrder='+encodeURIComponent(id),target:'_blank',rel:'noopener',onClick:e=>e.stopPropagation()},id)},{title:'应回款金额',width:94,onHeaderCell:()=>({style:{whiteSpace:'nowrap'}}),render:(_,r)=>fmt(r.amount-r.refunded)},{title:'订单总金额',dataIndex:'amount',width:94,onHeaderCell:()=>({style:{whiteSpace:'nowrap'}}),render:fmt},{title:'已退款金额',dataIndex:'refunded',width:94,onHeaderCell:()=>({style:{whiteSpace:'nowrap'}}),render:fmt},{title:'下单时间',dataIndex:'created',width:160}];
    if(stage==='sources')return h(window.SupplementUnclaimedPicker,{batch:true,dateLocale,onCancel,onSelect:items=>{setQueue(items);setStage('orders')}});
    if(stage==='pay')return h(window.SupplementRepaymentDialog,{key:source.recordNo,orders:chosen,baseOrders,dateLocale,initialSource:source,batchProgress:'第 '+(index+1)+' 笔／共 '+queue.length+' 笔',confirmLabel:index+1<queue.length?'确认并处理下一笔':'确认并完成',onCancel:()=>setStage('orders'),onComplete:accepted});
    if(stage==='result')return h(Modal,{open:true,title:'批量结算结果',width:1040,centered:true,className:'w06-modal',onCancel:()=>onComplete(),footer:h(Button,{type:'primary',onClick:()=>onComplete()},'完成')},
      h(Alert,{showIcon:true,type:queue.length===done.length?'success':'info',message:'已完成 '+done.length+' 笔；未处理 '+(queue.length-done.length)+' 笔，未处理款项未扣减。'}),
      h(Table,{size:'small',rowKey:'key',pagination:false,scroll:{x:1040},columns:[{title:'原充值记录',dataIndex:'sourceNo',width:220},{title:'状态',width:100,render:(_,r)=>h(Tag,{color:r.receiptNo?'success':'default'},r.receiptNo?'已完成':'未处理')},{title:'原金额',dataIndex:'amount',width:100,render:n=>n.toFixed(2)},{title:'结清订单',dataIndex:'count',width:90,render:n=>n??'—'},{title:'充值金额',dataIndex:'due',width:110,render:n=>n==null?'—':n.toFixed(2)},{title:'其他收入',dataIndex:'income',width:110,render:n=>n==null?'—':n.toFixed(2)},{title:'回款记录',dataIndex:'receiptNo',width:230,render:n=>n||'—'}],dataSource:queue.map(s=>done.find(d=>d.key===s.recordNo)||{key:s.recordNo,sourceNo:s.recordNo,amount:s.amount}),style:{marginTop:16}}),queue.length>done.length&&h('p',null,'剩余来源仍在未使用列表，可稍后重新处理。'));
    return h(Modal,{open:true,title:'待认领款批量结算 · 第 '+(index+1)+' 笔／共 '+queue.length+' 笔',width:1100,centered:true,maskClosable:false,className:'w06-modal w04-batch-orders'+(ids.length?' has-selection':''),onCancel:end,footer:h('div',{className:'w06-footer'},h('div',{className:'w04-batch-summary'},h('span',null,'本笔入款 ',h('strong',null,fmt(amount)),' 元；已选 ',ids.length,' 笔 / ',h('strong',null,fmt(due)),' 元'),ids.length>0&&h(Button,{type:'link',onClick:()=>setIds([])},'清空选择')),h(Space,null,h(Button,{onClick:end},'结束本次处理'),h(Button,{type:'primary',disabled:!canProceed,onClick:startPayment},'下一步：确认回款')))},
      h('div',{className:'w04-batch-intro'},h('span',null,'为当前这笔款选择对应订单；每笔独立结算，不与后续款项合并。'),h(Tag,{color:'blue'},'已完成 '+done.length+' 笔')),
      sourceTitle,
      h('div',{className:'w04-batch-search'},h(Input,{value:draft.keyword,placeholder:'搜索客户名称、订单号或对接负责人',allowClear:true,'aria-label':'搜索客户名称、订单号或对接负责人',onChange:e=>setDraft(d=>({...d,keyword:e.target.value})),onPressEnter:runSearch}),h('div',{className:'w04-batch-date'},h('label',{htmlFor:'batch-dates'},'下单时间：'),h(DatePicker.RangePicker,{id:'batch-dates',locale:dateLocale,value:draft.dates,format:'YYYY-MM-DD',placeholder:['开始日期','结束日期'],onChange:v=>setDraft(d=>({...d,dates:v}))})),h('div',{className:'w04-batch-amount'},h('label',{htmlFor:'batch-dueAmount'},'应回款金额：'),h(Input,{id:'batch-dueAmount',value:draft.dueAmount,placeholder:'精确金额',inputMode:'decimal',allowClear:true,onChange:e=>setDraft(d=>({...d,dueAmount:e.target.value})),onPressEnter:runSearch})),h(Button,{type:'primary',onClick:runSearch},'查询'),h(Button,{onClick:resetSearch},'重置')),
      h(Table,{rowKey:'id',size:'small',tableLayout:'fixed',columns,dataSource:rows,scroll:{y:220},pagination:{current:page,pageSize:5,onChange:setPage,showTotal:n=>'共 '+n+' 条'},rowSelection:{columnWidth:36,selectedRowKeys:ids,preserveSelectedRowKeys:true,onChange:setIds,getCheckboxProps:r=>({'aria-label':'批量结算选择订单 '+r.id})}}),
      ids.length>0&&h(Alert,{type:due>amount?'error':due<amount?'warning':'success',showIcon:true,message:due>amount?'本笔款不足，还差 '+fmt(due-amount)+' 元；不能借用下一笔款补齐。':due<amount?'超出 '+fmt(amount-due)+' 元，下一步必须明确确认计入其他收入。':'金额一致，可结清已选订单。'}),(error||readError)&&h(Alert,{type:'error',message:error||readError}));
  }
  window.SupplementUnclaimedBatch=Batch;
})();
