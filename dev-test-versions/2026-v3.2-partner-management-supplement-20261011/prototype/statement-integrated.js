/* 对帐单只读投影：由后台传入同一份记录、流水和账户状态，不另建业务账本。 */
window.createIntegratedStatement=function(React,components){
 const h=React.createElement,{Button,Select,Input,Tabs}=components;
 return function Statement({partners,recharges,flows,credit,prepay}){
  const today=new Date().toLocaleDateString('sv-SE');
  const [mode,setMode]=React.useState('day'),[account,setAccount]=React.useState(),[start,setStart]=React.useState(today),[end,setEnd]=React.useState(today),[query,setQuery]=React.useState(null);
  const cents=n=>Math.round(Number(n||0)*100),money=n=>(n/100).toLocaleString('zh-CN',{minimumFractionDigits:2,maximumFractionDigits:2});
  const unique=(list,key)=>[...new Map(list.map(r=>[key(r),r])).values()];
  const p=partners.find(p=>p.accountNo===query?.account),unclaimed=p?.type==='待认领客户';
  const prefix=mode==='day'?'当日':'当月';
  const rows=new Map();
  const bucket=date=>{const key=String(date||'').slice(0,query?.mode==='month'?7:10);if(!query||!/^\d{4}-\d{2}/.test(key)||key<query.start||key>query.end)return null;if(!rows.has(key))rows.set(key,{key,date:key,spend:0,receipt:0});return rows.get(key)};
  let adjustment=0;
  if(p){
   unique(recharges,r=>r.recordNo).filter(r=>r.accountNo===p.accountNo&&r.status==='success').forEach(r=>{
    const row=bucket(/^\d{4}-\d{2}-\d{2}/.test(r.repaymentTime||'')?r.repaymentTime:r.finishTime);if(!row)return;
    const op=r.operation||r.rechargeType,amount=cents(r.amount);
    if(op==='充值')row.receipt+=amount;
    else if(op==='调账-认领款转出'&&unclaimed)row.spend+=Math.abs(amount);
    else if(['调账','调账-往来'].includes(op)&&!unclaimed)adjustment+=amount;
   });
   if(!unclaimed)unique(flows,r=>[r.accountNo,r.category,r.documentNo].join('|')).filter(r=>r.accountNo===p.accountNo&&['consume','refund'].includes(r.category)).forEach(r=>{const row=bucket(r.time);if(row)row.spend-=cents(r.amount)});
  }
  const values=[...rows.values()].filter(r=>r.spend||r.receipt).sort((a,b)=>a.key.localeCompare(b.key));
  if(adjustment)values.push({key:'adjustment',date:'调账',spend:Math.max(-adjustment,0),receipt:Math.max(adjustment,0)});
  const total=values.reduce((s,r)=>({spend:s.spend+r.spend,receipt:s.receipt+r.receipt}),{spend:0,receipt:0});
  const creditAmount=credit.find(r=>r.accountNo===p?.accountNo)?.amount,prepayAmount=prepay.find(r=>r.accountNo===p?.accountNo)?.balance;
  const cell=(value,key)=>h('td',{key},value);
  const heading=["日期","人数",prefix+(unclaimed?'认领转出':'消费'),prefix+'到款','当前预付款余额','当前挂帐金额'];
  const exportReport=()=>{
   if(!p)return;
   const quote=v=>'"'+String(v??'').replaceAll('"','""')+'"';
   const data=[heading,...values.map(r=>[r.date,'-',money(r.spend),money(r.receipt),'','']),['合计','-',money(total.spend),money(total.receipt),prepayAmount==null?'-':money(cents(prepayAmount)),unclaimed||creditAmount==null?'-':money(cents(creditAmount))]];
   const blob=new Blob(['\ufeff'+data.map(r=>r.map(quote).join(',')).join('\r\n')],{type:'text/csv;charset=utf-8'}),url=URL.createObjectURL(blob),a=document.createElement('a');
   a.href=url;a.download='合作伙伴对帐单-'+p.name+'-'+query.start+'-'+query.end+'.csv';a.click();setTimeout(()=>URL.revokeObjectURL(url),1000);
  };
  return h('section',{className:'page-container integrated-statement'},
   h(Tabs,{activeKey:mode,items:[{key:'day',label:'按日对帐统计'},{key:'month',label:'按月对帐统计'}],onChange:value=>{setMode(value);setStart(value==='month'?today.slice(0,7):today);setEnd(value==='month'?today.slice(0,7):today);setQuery(null)}}),
   h('div',{className:'statement-query'},h('label',null,'统计时间：'),h(Input,{type:mode==='month'?'month':'date',value:start,onChange:e=>setStart(e.target.value),'aria-label':'统计开始时间'}),h('span',null,'→'),h(Input,{type:mode==='month'?'month':'date',value:end,onChange:e=>setEnd(e.target.value),'aria-label':'统计结束时间'}),h('label',null,'合作伙伴：'),h(Select,{showSearch:true,allowClear:true,optionFilterProp:'label',placeholder:'请选择合作伙伴',value:account,onChange:setAccount,options:partners.map(p=>({value:p.accountNo,label:p.name+'　'+(p.status==='enabled'?'启用':'禁用')})),style:{width:320,maxWidth:'100%'}}),h(Button,{type:'primary',disabled:!account||!start||!end||start>end,onClick:()=>setQuery({account,start,end,mode})},'查询'),h(Button,{onClick:()=>{setAccount(undefined);setQuery(null);setStart(mode==='month'?today.slice(0,7):today);setEnd(mode==='month'?today.slice(0,7):today)}},'重置')),
   h('div',{style:{display:'flex',justifyContent:'flex-end',margin:'12px 0'}},h(Button,{type:'primary',disabled:!p,onClick:exportReport},'导出')),
   h('div',{className:'statement-report'},h('h3',null,p?'合作伙伴-'+p.name+'对帐单':'合作伙伴对帐单'),h('div',{className:'statement-period'},'开始日期 '+(query?.start||start)+'　结束日期 '+(query?.end||end)),h('table',null,h('thead',null,h('tr',null,...heading.map((v,i)=>h('th',{key:i},v)))),h('tbody',null,...values.map(r=>h('tr',{key:r.key},cell(r.date,0),cell('-',1),cell(money(r.spend),2),cell(money(r.receipt),3),cell('',4),cell('',5))),p?h('tr',{className:'statement-total'},cell('合计',0),cell('-',1),cell(money(total.spend),2),cell(money(total.receipt),3),cell(prepayAmount==null?'-':money(cents(prepayAmount)),4),cell(!unclaimed&&creditAmount!=null?money(cents(creditAmount)):'-',5)):h('tr',null,h('td',{colSpan:6,style:{height:168,textAlign:'center',color:'#999'}},'请选择合作伙伴后查询')))),h('div',{className:'statement-print'},'制单人：当前登录用户')),
   p&&!unclaimed?h('div',{style:{color:'#8c8c8c',marginTop:8}},'人数暂不展示：当前原型订单源未提供可核验的大门票人数及退票人数，不以订单笔数代替。'):null,
   null);
 };
};
