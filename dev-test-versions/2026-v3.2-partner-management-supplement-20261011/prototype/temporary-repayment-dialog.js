/* W06普通收款：本地演示账本；未连接真实系统。 */
(() => {
  const h=React.createElement,{useState}=React;
  const {Modal,Descriptions,Table,Input,DatePicker,Select,Button,Alert,Space,App:AntApp}=antd;
  const model=window.SupplementRepaymentModel,fmt=n=>(n/100).toFixed(2);
  function RepaymentDialog({orders,dateLocale,onCancel,onComplete,baseOrders,initialSource=null,batchProgress,confirmLabel}){
    const fixture=window.paymentFixture,{message,modal}=AntApp.useApp();
    const due=orders.reduce((n,r)=>n+r.amount-r.refunded,0);
    const initial=()=>{if(initialSource)return{date:dayjs().format('YYYY-MM-DD'),total:initialSource.amount.toFixed(2),cash:'',payer:'',note:'',excess:undefined,code:'UNCLAIMED',sourceIds:[initialSource.recordNo]};const code=model.candidates(fixture)[0]?.code,state=model.resourceState(fixture,code);return{date:dayjs().format('YYYY-MM-DD'),total:fmt(due),cash:'',payer:'',note:'',excess:undefined,code,resourceId:state.defaultId,signature:state.signature}};
    const [form,setForm]=useState(initial),[error,setError]=useState(''),[busy,setBusy]=useState(false),[picking,setPicking]=useState(false),[sources,setSources]=useState(()=>initialSource?[initialSource]:[]);
    const set=(key,val)=>{setForm(p=>({...p,[key]:val,...(key==='total'?{excess:undefined}:{})}));setError('')};
    const state=model.resourceState(fixture,form.code),resource=state.options.find(r=>r.id===form.resourceId),total=model.money(form.total),cash=model.money(form.cash),excess=Math.max(0,(total||0)-due);
    const liveCheck=model.validate({orders,ids:orders.map(r=>r.id),form,fixture,today:dayjs().format('YYYY-MM-DD')});
    const insufficient=total!==null&&total<due;
    const selectCode=code=>{setSources([]);const next=model.resourceState(fixture,code);setForm(p=>({...p,code,resourceId:next.defaultId,signature:next.signature,cash:''}));setError('')};
    const submit=()=>{
      const today=dayjs().format('YYYY-MM-DD'),ids=orders.map(r=>r.id),expectedAmounts=Object.fromEntries(orders.map(r=>[r.id,r.amount-r.refunded]));let current;
      try{current=model.apply(baseOrders,model.readLedger())}catch(e){setError(e.message);return}
      const check=model.validate({orders:current,ids,form,fixture,today,expectedAmounts});if(check.error){setError(check.error);return}
      const save=confirmed=>{if(busy)return;setBusy(true);try{const result=model.commit({baseOrders,ids,form,fixture,today,operator:'当前售票员',windowName:'呀诺达售票窗口',confirmedMismatch:confirmed,expectedAmounts});onComplete(result);message.success('回款成功，已更新本地原型订单')}catch(e){setError(e.message||'保存失败，请重试')}finally{setBusy(false)}};
      if(check.mismatch)modal.confirm({title:'请确认已选订单属于同一客户',className:'w06-confirm',width:580,centered:true,okText:'确认同一客户并回款',cancelText:'返回核对',content:h('div',null,h('p',null,'已选订单的客户名称或对接负责人不一致，请确认均为同一客户的订单。若无法确认，请返回列表调整或使用“临时客户转合作伙伴”。'),h('p',null,'确认后将结清 '+orders.length+' 笔订单，应回款 '+fmt(check.due)+' 元；建议后续为该客户建立长期合作伙伴账户。')),onOk:()=>save(true)});else save(false);
    };
    const field=(label,id,control,required=false,full=false)=>h('div',{className:'w06-field'+(full?' w06-full':''),key:id},h('label',{htmlFor:id},required&&h('i',null,'* '),label+'：'),h('div',{className:'w06-control'},control));
    const editMoney=(id,key,placeholder)=>h(Input,{id,value:form[key],readOnly:key==='total'&&form.code==='UNCLAIMED',inputMode:'decimal',placeholder,suffix:'元',onChange:e=>set(key,e.target.value)});
    const columns=[{title:'客户名称',dataIndex:'customer',width:120},{title:'对接负责人',dataIndex:'owner',width:180},{title:'原订单售票员',dataIndex:'cashier',width:120},{title:'订单号',dataIndex:'id',width:220,render:id=>h('a',{href:'order-detail.html?tempOrder='+encodeURIComponent(id),target:'_blank',rel:'noopener'},id)},{title:'应回款金额（元）',width:155,render:(_,r)=>fmt(r.amount-r.refunded)},{title:'订单总金额（元）',dataIndex:'amount',width:155,render:fmt},{title:'已退款金额（元）',dataIndex:'refunded',width:155,render:fmt}];
    const payments=model.candidates(fixture);
    return h(React.Fragment,null,h(Modal,{open:true,title:batchProgress?'公共临时客户回款 · '+batchProgress:'公共临时客户回款',width:940,centered:true,maskClosable:false,onCancel,keyboard:!busy,closable:!busy,className:'w06-modal',footer:h('div',{className:'w06-footer'},h('div',null,'本次收款合计：',h('strong',null,total===null?'—':fmt(total)),' 元'),h(Space,null,h(Button,{onClick:onCancel,disabled:busy},'取消'),h(Button,{type:'primary',onClick:submit,loading:busy,disabled:!!liveCheck.error},confirmLabel||'确认回款')))},
      h(Descriptions,{bordered:true,size:'small',column:2,items:[{key:1,label:'合作伙伴',children:'公共临时客户'},{key:2,label:'账户类型',children:'挂帐'},{key:3,label:'账户号',children:orders[0].accountNo},{key:4,label:'已选订单',children:orders.length+' 笔'}]}),
      h('div',{className:'w06-orders-title'},'已选订单',h('span',null,'应回款合计：',h('strong',null,fmt(due)),' 元')),
      h(Table,{className:'w06-orders',columns,dataSource:orders,rowKey:'id',size:'small',pagination:false,scroll:{x:1205,y:orders.length>2?140:undefined}}),
      h('div',{className:'w06-form'},
        field('支付日期','repayDate',h(DatePicker,{id:'repayDate',value:form.date?dayjs(form.date):null,locale:dateLocale,format:'YYYY-MM-DD',disabledDate:d=>d.isAfter(dayjs(),'day'),onChange:d=>set('date',d?d.format('YYYY-MM-DD'):'')}),true),
        field('客户／付款人','repayPayer',h(Input,{id:'repayPayer',value:form.payer,maxLength:100,placeholder:'选填',onChange:e=>set('payer',e.target.value)})),
        field('本次收款金额','repayTotal',editMoney('repayTotal','total','请输入本次收款金额'),true),
        field('订单应回款','repayDue',h('span',{id:'repayDue',className:'w06-readonly'},fmt(due)+' 元')),
        excess>0&&field('剩余金额处理','repayExcess',h(Select,{id:'repayExcess',value:form.excess,placeholder:'请选择差额 '+fmt(excess)+' 元的处理方式',options:[{value:'income',label:'计入其他收入'}],onChange:v=>set('excess',v)}),true,true),
        excess>0&&h('div',{className:'w06-full'},h(Alert,{type:'warning',showIcon:true,message:'超出应回款的 '+fmt(excess)+' 元归公司其他收入，不留存在公共临时客户账户。若需留作后续消费，请取消并先转为长期合作伙伴。'})),
        field('备注说明','repayNote',h(Input.TextArea,{id:'repayNote',value:form.note,maxLength:500,showCount:true,autoSize:{minRows:2,maxRows:3},placeholder:'选填，最多500字',onChange:e=>set('note',e.target.value)}),false,true)),
      h('section',{className:'w06-payment'},!initialSource&&h('div',{className:'w06-payments'},payments.map(p=>h(Button,{key:p.code,type:form.code===p.code?'primary':'default',onClick:()=>selectCode(p.code),'aria-pressed':form.code===p.code},p.name)),h(Button,{type:form.code==='UNCLAIMED'?'primary':'default',onClick:()=>setPicking(true)},'待认领账户')),
        form.code==='UNCLAIMED'&&h('div',{className:'w04-source-summary'},h('p',null,'已选 '+sources.length+' 笔，共 '+(sources.reduce((n,r)=>n+r.amount,0)).toFixed(2)+' 元；原支付方式：'+(sources[0]?.paymentMethod||'—')+'；编号：'+(sources[0]?.terminalNo||'—')),!initialSource&&h(Button,{onClick:()=>setPicking(true)},'重新选择')),!payments.length&&h(Alert,{type:'error',showIcon:true,message:'当前无可用充值／回款支付方式，请联系管理员配置'}),
        form.code==='CASH'&&h('div',{className:'w06-dynamic'},field('现金实收','repayCash',editMoney('repayCash','cash','请输入现金实收金额'),true),h('div',{className:'w06-change'},'现金找零：',h('strong',null,cash!==null&&total!==null&&cash>=total?fmt(cash-total):'—'),' 元')),
        ['SCAN_PAY','BANK_CARD'].includes(form.code)&&h('div',{className:'w06-dynamic'},field('收款资源','repayResource',h(Select,{id:'repayResource',disabled:state.fixed,value:form.resourceId,showSearch:true,optionFilterProp:'label',filterOption:(input,option)=>option.label.toLowerCase().includes(input.trim().toLowerCase()),notFoundContent:'暂无匹配资源',placeholder:'请选择有效绑定资源',options:state.options.map(r=>({label:r.name,value:r.id})),onChange:id=>set('resourceId',id)}),true),field(form.code==='SCAN_PAY'?'柜台编码':'POS编号','repayTerminal',h(Input,{id:'repayTerminal',readOnly:true,value:resource?model.terminal(resource):'—'}))),
        ['SCAN_PAY','BANK_CARD'].includes(form.code)&&(state.error||resource&&!String(model.terminal(resource)||'').trim())&&h(Alert,{type:'error',showIcon:true,message:state.error||'当前收款资源编号缺失，请联系管理员配置或改用其他方式'})),
      (error||insufficient)&&h(Alert,{className:'w06-error',type:'error',showIcon:true,message:error||'本次收款不足，还差 '+fmt(due-total)+' 元，不能提交回款。'})
    ),picking&&h(window.SupplementUnclaimedPicker,{selected:sources.map(r=>r.recordNo),dateLocale,onCancel:()=>setPicking(false),onSelect:items=>{setSources(items);setForm(f=>({...f,code:'UNCLAIMED',sourceIds:items.map(r=>r.recordNo),total:(items.reduce((n,r)=>n+Math.round(r.amount*100),0)/100).toFixed(2),cash:'',resourceId:undefined,signature:undefined,excess:undefined}));setError('');setPicking(false)}}));
  }
  window.SupplementRepaymentDialog=RepaymentDialog;
})();
