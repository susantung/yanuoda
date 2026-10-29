/* W04共用来源选择：只选择与回填，不写资金、不标记已使用。 */
(() => {
  const h=React.createElement,{useState,useEffect}=React;
  const {Modal,Input,Select,DatePicker,Button,Table,Space,Alert,Descriptions}=antd;
  const core=()=>window.SupplementUnclaimed;
  const eligible=()=>core().records().filter(r=>r.unclaimedReceipt&&r.status==='success'&&r.usage==='unused');
  const blank=()=>({amount:'',no:'',method:undefined,terminal:'',dates:null,cashier:'',owner:''});
  function Picker({selected=[],dateLocale,onCancel,onSelect,purpose='repayment'}){
    const [rows,setRows]=useState(eligible),[keys,setKeys]=useState(()=>selected.length===1?selected:[]),[draft,setDraft]=useState(blank),[query,setQuery]=useState(blank),[expanded,setExpanded]=useState(false),[error,setError]=useState(''),[detail,setDetail]=useState(null);
    useEffect(()=>{const sync=()=>setRows(eligible());['focus','storage','supplement:unclaimed'].forEach(n=>window.addEventListener(n,sync));return()=>['focus','storage','supplement:unclaimed'].forEach(n=>window.removeEventListener(n,sync))},[]);
    const chosen=rows.filter(r=>keys.includes(r.recordNo));
    const total=chosen.reduce((n,r)=>n+Math.round(r.amount*100),0)/100;
    const contains=(v,q)=>!q||String(v||'').includes(q.trim());
    const filtered=rows.filter(r=>(!query.amount||Math.round(r.amount*100)===window.SupplementRepaymentModel.money(query.amount))&&contains(r.recordNo,query.no)&&(!query.method||r.paymentMethod===query.method)&&contains(r.terminalNo,query.terminal)&&contains(r.cashier,query.cashier)&&contains(r.owner,query.owner)&&(!query.dates||r.repaymentTime.slice(0,10)>=query.dates[0].format('YYYY-MM-DD')&&r.repaymentTime.slice(0,10)<=query.dates[1].format('YYYY-MM-DD'))).sort((a,b)=>b.repaymentTime.localeCompare(a.repaymentTime)||b.finishTime.localeCompare(a.finishTime));
    const set=(key,v)=>setDraft(d=>({...d,[key]:v}));
    const field=(label,control)=>h('div',{className:'w04-field',key:label},h('label',null,label+'：'),control);
    const input=(key,placeholder)=>h(Input,{value:draft[key],placeholder,allowClear:true,onChange:e=>set(key,e.target.value)});
    const search=()=>{if(draft.amount&&window.SupplementRepaymentModel.money(draft.amount)===null){setError('金额请输入最多两位小数的有效金额');return}setQuery({...draft});setError('')};
    const change=next=>{if(next.length>1){setError('每次只能选择一笔待认领充值记录，请分次处理');return}setKeys(next);setError('')};
    const confirm=()=>{if(keys.length!==1){setError('每次只能选择一笔待认领充值记录，请分次处理');return}const fresh=eligible(),items=fresh.filter(r=>keys.includes(r.recordNo));if(items.length!==keys.length){setRows(fresh);setError('所选记录已使用或状态变化，请重新选择');return}onSelect(items)};
    const columns=[{title:'充值记录单号',dataIndex:'recordNo',width:205,render:(v,r)=>h(Button,{type:'link',title:v,style:{padding:0,maxWidth:'100%',overflow:'hidden',textOverflow:'ellipsis',display:'block',textAlign:'left'},onClick:()=>setDetail(r)},v)},{title:'充值金额（元）',dataIndex:'amount',width:105,render:n=>n.toFixed(2)},{title:'支付日期',dataIndex:'repaymentTime',width:100,render:v=>v.slice(0,10)},{title:'支付方式',dataIndex:'paymentMethod',width:80},{title:'柜台号／POS编号',dataIndex:'terminalNo',width:125,ellipsis:true},{title:'对接负责人',dataIndex:'owner',width:140,ellipsis:true},{title:'原充值售票员',dataIndex:'cashier',width:105,ellipsis:true}];
    return h(React.Fragment,null,h(Modal,{open:true,title:purpose==='sourceFirst'?'待认领款回款：选择款项':'选择待认领充值记录',width:1100,centered:true,maskClosable:false,className:'w06-modal w04-modal',onCancel,footer:h('div',{className:'w06-footer'},h(Space,null,h('div',null,'已选 '+chosen.length+' 笔，合计：',h('strong',null,total.toFixed(2)),' 元'),h(Button,{type:'link',disabled:!keys.length,onClick:()=>{setKeys([]);setError('')}},'清空选择')),h(Space,null,h(Button,{onClick:onCancel},'取消'),h(Button,{type:'primary',disabled:!keys.length,onClick:confirm},purpose==='sourceFirst'?'下一步：选择订单':'确定选择')))},
      h('div',{className:'w04-query'},field('充值金额',input('amount','按每笔金额精确查询')),field('支付日期',h(DatePicker.RangePicker,{value:draft.dates,locale:dateLocale,format:'YYYY-MM-DD',onChange:v=>set('dates',v)})),field('对接负责人',input('owner','请输入姓名或手机号')),field('原充值售票员',input('cashier','请输入原充值售票员')),field('支付方式',h(Select,{value:draft.method,allowClear:true,placeholder:'全部',options:['现金','扫码付','银行卡','微信','支付宝'].map(v=>({label:v,value:v})),onChange:v=>set('method',v)})),field('柜台号／POS编号',input('terminal','请输入柜台号／POS编号')),
        expanded&&field('充值记录单号',input('no','请输入充值记录单号')),
        h(Space,{className:'w04-query-actions'},h(Button,{type:'primary',onClick:search},'查询'),h(Button,{onClick:()=>{setDraft(blank());setQuery(blank());setError('')}},'重置'),h(Button,{type:'link',onClick:()=>setExpanded(!expanded)},expanded?'收起':'展开'))),
      h(Alert,{type:'info',showIcon:true,message:purpose==='longterm'?'每次选择一笔未使用的充值记录，整笔使用。客户充值与其他收入合计必须等于来源金额。':'每次只能选择一笔未使用的充值记录，整笔使用；可结清多笔订单，不足禁止提交，超额须确认计入其他收入。'}),
      error&&h(Alert,{type:'error',showIcon:true,message:error,style:{marginTop:8}}),
      h(Table,{className:'w04-table',rowKey:'recordNo',size:'small',tableLayout:'fixed',columns,dataSource:filtered,scroll:{y:240},locale:{emptyText:'暂无符合条件的未使用充值记录'},pagination:{pageSize:10,showTotal:n=>'共 '+n+' 条'},rowSelection:{columnWidth:40,type:'radio',selectedRowKeys:keys,preserveSelectedRowKeys:true,onChange:change,getCheckboxProps:r=>({'aria-label':'选择充值记录 '+r.recordNo})}})),
      detail&&h(Modal,{open:true,title:'待认领充值记录详情',width:760,centered:true,className:'w06-modal',onCancel:()=>setDetail(null),footer:h(Button,{onClick:()=>setDetail(null)},'关闭')},h(Descriptions,{bordered:true,size:'small',column:2,items:[['充值记录单号',detail.recordNo],['充值金额',detail.amount.toFixed(2)+' 元'],['支付时间',detail.repaymentTime],['完成时间',detail.finishTime],['支付方式',detail.paymentMethod],['柜台号／POS编号',detail.terminalNo],['收款资源',detail.resourceName],['对接负责人',detail.owner],['原充值售票员',detail.cashier],['售票窗口',detail.ticketWindow],['使用状态','未使用'],['备注说明',detail.remark]].map(([label,children],key)=>({key,label,children,span:label==='备注说明'?2:1}))})));
  }
  window.SupplementUnclaimedPicker=Picker;
})();
