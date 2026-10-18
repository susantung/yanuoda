/* 现网订单详情结构的离线还原；不调用真实订单接口。 */
(()=>{
const h=React.createElement,{Card,Descriptions,Table,Button,Input,Radio,Space,Badge,ConfigProvider,Checkbox,Popover,message}=antd;
const ticket={key:'1',name:'派生规则重跑1016甲',ticket:'自动化派生校验1016',price:'30',number:'55AVQC25DDJ25',identity:'-',status:'待确认',checked:'0 / 1',print:'1'};
const base=[['订单编号','DD261016170420001001s'],['三方订单编号','-'],['团散类型','散客'],['销售渠道','窗口售票'],['销售来源','B门区售票窗口'],['售票员','王月欣'],['购票人',ticket.name],['联系电话','-'],['下单时间','2026-10-16 17:04:20'],['游玩日期','2026-10-16'],['订单金额','30元'],['订单票数','1张']];
// 支付资源和编号只读订单快照，不从当前配置或资源主表补写历史记录。
const payment=[['支付时间','2026-10-16 17:04:20'],['支付状态','支付成功'],['支付类型','现金'],['支付金额','30元'],['支付流水号','-'],['收款资源','—'],['柜台编码/POS编号','—']];
function descriptions(values){return h(Descriptions,{column:3,items:values.map(([label,children],i)=>({key:i,label,children}))})}
function App(){
 const [draft,setDraft]=React.useState({number:'',name:'',identity:'',ticket:''}),[filters,setFilters]=React.useState({}),[status,setStatus]=React.useState('全部'),[visible,setVisible]=React.useState(['name','ticket','price','number','identity','status','checked','print']);
 const columns=[['游客姓名','name',145],['门票名称','ticket',260],['售卖单价（元）','price',170],['票号','number',200],['证件号','identity',160],['门票状态','status',145],['检票项目数（已检/全部）','checked',200],['打印序号','print',110]].map(([title,dataIndex,width])=>({title,dataIndex,key:dataIndex,width,render:dataIndex==='status'?v=>h(Badge,{color:'#e6a23c',text:v}):undefined}));
 const rows=(status==='全部'||status===ticket.status)&&Object.entries(filters).every(([key,v])=>String(ticket[key]).includes(v))?[ticket]:[];
 const headers=['门票名称','分类','票型种类','价格类型','季节类型','总票数','待付款','待确认','待使用','已取票','部分检票','全部检票','已退票'];
 const values=[ticket.ticket,'晚会演出','雨林项目','优惠票','淡/旺季',1,0,1,0,0,0,0,0];
 const checkCols=headers.map((title,i)=>({title,dataIndex:'c'+i,key:'c'+i,width:i===0?260:i<5?120:95,render:i===0?v=>h('a',{onClick:()=>navigator.clipboard?.writeText(v)},v,' ⧉'):undefined}));
 const exportRows=()=>{const blob=new Blob(['\ufeff'+columns.map(x=>x.title).join(',')+'\n'+rows.map(r=>columns.map(c=>r[c.key]).join(',')).join('\n')],{type:'text/csv;charset=utf-8'});const a=document.createElement('a');a.href=URL.createObjectURL(blob);a.download='游客门票明细.csv';a.click();URL.revokeObjectURL(a.href)};
 return h(ConfigProvider,{theme:{token:{colorPrimary:'#1677ff',borderRadius:6,fontFamily:'"PingFang SC","Microsoft YaHei",Arial,sans-serif',fontSize:14}}},
 h(Card,{title:'订单详情',className:'order-outer',extra:h(Button,{onClick:()=>showPage('payment')},'返 回')},h('div',{className:'order-sections'},
 h(Card,{title:'订单基础信息',extra:h(Badge,{color:'#1677ff',text:'待确认'})},descriptions(base)),
 h(Card,{title:'订单支付信息'},descriptions(payment)),
 h(Card,{title:'订单检票信息'},h('div',{className:'order-counts'},[['未检票数',1,'#1677ff'],['已检票数',0,'#52c41a'],['已退票数',0,'#ff4d4f']].map(([label,count,color])=>h('span',{key:label},label,'：',h('span',{style:{color}},count),' 张'))),h(Table,{bordered:true,pagination:false,columns:checkCols,dataSource:[Object.fromEntries([['key','1'],...values.map((v,i)=>['c'+i,v])])],scroll:{x:1500}})),
 h(Card,{title:'游客/门票详情'},h('div',{className:'order-query'},[['票号','number'],['游客姓名','name'],['游客证件号','identity'],['门票名称','ticket']].map(([label,key])=>h('label',{key},label,'：',h(Input,{placeholder:'请输入'+label,value:draft[key],onChange:e=>setDraft({...draft,[key]:e.target.value})})))),
 h('div',{className:'order-query-buttons'},h(Space,null,h(Button,{type:'primary',onClick:()=>setFilters({...draft})},'查 询'),h(Button,{onClick:()=>{setDraft({number:'',name:'',identity:'',ticket:''});setFilters({})}},'重 置'))),
 h('div',{className:'order-toolbar'},h(Radio.Group,{value:status,onChange:e=>setStatus(e.target.value),optionType:'button',buttonStyle:'solid',options:['全部','待付款','待确认','待使用','已取票','部分检票','全部检票','已退款']}),h(Space,null,h(Button,{type:'primary',onClick:()=>message.info('离线原型，不提交线上导入')},'导 入'),h(Button,{type:'primary',onClick:exportRows},'导 出'),h(Button,{disabled:true},'批量强退'),h(Popover,{trigger:'click',placement:'bottomRight',content:h(Checkbox.Group,{value:visible,onChange:setVisible,options:columns.map(c=>({label:c.title,value:c.key}))})},h(Button,null,'⚙ 配置列')))),
 h(Table,{bordered:true,rowSelection:{getCheckboxProps:()=>({disabled:true})},columns:[...columns.filter(c=>visible.includes(c.key)),{title:'操作',key:'action',fixed:'right',width:120,render:()=>h(Button,{type:'link',onClick:()=>message.info('当前为订单详情还原，门票查看不连接线上接口')},'查看')}],dataSource:rows,scroll:{x:1510},pagination:{total:rows.length,pageSize:10,showSizeChanger:true,locale:{items_per_page:'条/页'},showTotal:n=>'共 '+n+' 条'}})
 ))));
}
ReactDOM.createRoot(document.getElementById('orderDetailRoot')).render(h(App));
})();
