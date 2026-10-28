/* W08—W11：既有订单迁移，复用窗口Ant弹窗与统一账本。 */
(() => {
  const h=React.createElement,{useState,useRef}=React;
  const {Modal,Steps,Table,Descriptions,Form,Input,Select,Radio,Button,Space,Alert,App:AntApp}=antd;
  const core=window.SupplementMigration,model=window.SupplementRepaymentModel,fmt=n=>(n/100).toFixed(2);
  function MigrationDialog({orders,baseOrders,onCancel,onComplete}){
    const {message,modal}=AntApp.useApp(),[form]=Form.useForm(),[step,setStep]=useState(0),[busy,setBusy]=useState(false),[error,setError]=useState(''),lock=useRef(false),[confirmed,setConfirmed]=useState(false);
    const [partners,setPartners]=useState(()=>core.catalog()),[selectedTarget,setSelectedTarget]=useState(null);
    const mode=Form.useWatch('mode',form)||'new',due=orders.reduce((n,r)=>n+r.amount-r.refunded,0);
    const ids=orders.map(r=>r.id),expectedAmounts=Object.fromEntries(orders.map(r=>[r.id,r.amount-r.refunded]));
    const advance=()=>{try{const c=core.checkOrders(baseOrders,ids,model.readLedger(),expectedAmounts);if(c.mismatch&&!confirmed){modal.confirm({title:'请确认已选订单属于同一客户',centered:true,width:580,okText:'确认继续',cancelText:'返回修改',content:'已选订单的客户名称或对接负责人不一致，正常临时客户只能有一笔订单，请确定已选订单是同一客户的再操作。',onOk:()=>{setConfirmed(true);setStep(1)}})}else setStep(1);setError('')}catch(e){setError(e.message)}};
    const submit=async()=>{if(lock.current)return;let v;try{v=await form.validateFields()}catch{return}lock.current=true;setBusy(true);try{const result=core.commit({baseOrders,ids,expectedAmounts,mode:v.mode,targetAccountNo:v.targetAccountNo,expectedTarget:core.signature(selectedTarget),newPartner:{type:v.type,name:v.name,contact:v.contact,phone:v.phone,owner:v.owner,ownerId:v.owner==='张敏 13800000011'?'EMP10011':'EMP10012',payType:v.payType,remark:v.remark},confirmedMismatch:confirmed,operator:'当前售票员',windowName:'呀诺达售票窗口'});onComplete(result);message.success('迁移成功，已生成调账-往来记录')}catch(e){setError(e.message);setPartners(core.catalog())}finally{lock.current=false;setBusy(false)}};
    const item=(label,name,control,rules=[],full=false)=>h(Form.Item,{label,name,rules,className:full?'w08-full':undefined},control);
    const required=message=>[{required:true,whitespace:true,message}];
    const money=n=>n==null?'—':Number(n).toLocaleString('en-US',{minimumFractionDigits:2,maximumFractionDigits:2});
    const profileItem=(label,value,balance=false)=>h('div',{className:'w08-profile-item'+(balance?' balance':'')},h('span',null,label),h('b',null,value||'—'));
    const credit=selectedTarget?selectedTarget.creditAmount-(selectedTarget.creditMigrationDelta||0)+core.delta(selectedTarget.accountNo,'挂帐'):0;
    const prepay=selectedTarget?selectedTarget.prepayBalance-(selectedTarget.prepayMigrationDelta||0)+core.delta(selectedTarget.accountNo,'预付款'):0;
    const profile=selectedTarget&&h('section',{className:'w08-profile'},
      h('div',{className:'w08-profile-head'},h('strong',null,'已选合作伙伴资料 · '+selectedTarget.name),h('span',null,'账户资料实时带入')),
      h('div',{className:'w08-profile-grid'},
        profileItem('合作类型',selectedTarget.type),profileItem('账户号',selectedTarget.accountNo),
        profileItem('联系人',selectedTarget.contact),profileItem('联系电话',selectedTarget.phone),
        profileItem('对接负责人',selectedTarget.owner),profileItem('默认账户类型',selectedTarget.payType),
        profileItem('当前挂帐金额',money(credit),true),profileItem('挂帐额度',money(selectedTarget.creditLimit),true),
        profileItem('可用挂帐额度',selectedTarget.creditLimitEnabled===false?'无限额':selectedTarget.creditLimitEnabled===true&&selectedTarget.creditLimit!=null?money(Math.max(selectedTarget.creditLimit+credit,0)):'—',true),
        profileItem('当前预付款余额',money(prepay),true)));
    const columns=[{title:'客户名称',dataIndex:'customer',width:120},{title:'对接负责人',dataIndex:'owner',width:180},{title:'原订单售票员',dataIndex:'cashier',width:120},{title:'订单号',dataIndex:'id',width:220,render:id=>h('a',{href:'order-detail.html?tempOrder='+encodeURIComponent(id),target:'_blank',rel:'noopener'},id)},{title:'应迁移金额（元）',width:155,render:(_,r)=>fmt(r.amount-r.refunded)},{title:'订单总金额（元）',dataIndex:'amount',width:155,render:fmt},{title:'已退款金额（元）',dataIndex:'refunded',width:155,render:fmt}];
    return h(Modal,{open:true,title:'临时客户转合作伙伴',width:940,centered:true,maskClosable:false,keyboard:!busy,closable:!busy,onCancel,className:'w06-modal w08-modal',footer:h('div',{className:'w06-footer'},h('div',null,'迁移金额合计：',h('strong',null,fmt(due)),' 元'),h(Space,null,step===1&&h(Button,{disabled:busy,onClick:()=>{setStep(0);setError('')}},'上一步'),h(Button,{disabled:busy,onClick:onCancel},'取消'),h(Button,{type:'primary',loading:busy,onClick:step===0?advance:submit},step===0?'下一步':'确认迁移')))},
      h(Steps,{size:'small',current:step,items:[{title:'确认待迁移订单'},{title:'目标合作伙伴'}],className:'w08-steps'}),
      step===0&&h(React.Fragment,null,h(Descriptions,{bordered:true,size:'small',column:2,items:[{key:1,label:'原合作伙伴',children:'公共临时客户'},{key:2,label:'账户类型',children:'挂帐'},{key:3,label:'账户号',children:'CPP202608050003'},{key:4,label:'已选订单',children:orders.length+' 笔'}]}),h('div',{className:'w06-orders-title'},'已选订单'),h(Table,{columns,dataSource:orders,rowKey:'id',size:'small',pagination:false,scroll:{x:1205,y:orders.length>3?180:undefined}})),
      h('div',{style:{display:step===1?'block':'none'}},h('div',{className:'w08-summary'},'已选 '+orders.length+' 笔订单，净迁移金额 '+fmt(due)+' 元'),h(Form,{form,layout:'horizontal',labelCol:{flex:'124px'},wrapperCol:{flex:1},initialValues:{mode:'new'},requiredMark:true},
        item('目标方式','mode',h(Radio.Group,{onChange:()=>setError(''),options:[{label:'创建新的长期合作伙伴',value:'new'},{label:'选择已有合作伙伴',value:'existing'}]})),
        h('div',{className:'w08-form-grid',style:{display:mode==='new'?'grid':'none'}},
          item('合作类型','type',h(Select,{placeholder:'请选择合作类型',options:['企业','个人'].map(v=>({label:v,value:v}))}),mode==='new'?required('请选择合作类型'):[]),
          item('合作伙伴名称','name',h(Input,{maxLength:25,placeholder:'请输入合作伙伴名称'}),mode==='new'?[...required('请输入合作伙伴名称'),{max:25}]:[]),
          item('联系人','contact',h(Input,{maxLength:15,placeholder:'请输入联系人'}),mode==='new'?required('请输入联系人'):[]),
          item('联系电话','phone',h(Input,{maxLength:15,placeholder:'请输入联系电话'}),mode==='new'?required('请输入联系电话'):[]),
          item('对接负责人','owner',h(Select,{showSearch:true,optionFilterProp:'label',placeholder:'请输入姓名或手机号搜索',options:['张敏 13800000011','李晨 13800000012'].map(v=>({label:v,value:v}))}),mode==='new'?required('请选择对接负责人'):[]),
          item('默认账户类型','payType',h(Select,{placeholder:'请选择默认账户类型',options:['挂帐','预付款'].map(v=>({label:v,value:v}))}),mode==='new'?required('请选择默认账户类型'):[]),
          h(Form.Item,{label:'账户号'},h(Input,{value:'—',readOnly:true})),
          item('备注','remark',h(Input.TextArea,{maxLength:500,showCount:true,autoSize:{minRows:2,maxRows:3},placeholder:'选填，最多500字'}),[],true)),
        h('div',{style:{display:mode==='existing'?'block':'none'}},item('目标合作伙伴','targetAccountNo',h(Select,{showSearch:true,optionFilterProp:'search',placeholder:'按伙伴名称、负责人姓名或手机号查找',options:partners.filter(core.eligible).map(p=>({label:p.name+'（'+p.type+'）',value:p.accountNo,search:p.name+' '+p.owner+' '+p.accountNo})),onChange:no=>{setSelectedTarget(partners.find(p=>p.accountNo===no));setError('')}}),mode==='existing'?required('请选择已有合作伙伴'):[]),profile))),
      error&&h(Alert,{className:'w06-error',type:'error',showIcon:true,message:error})
    );
  }
  window.SupplementMigrationDialog=MigrationDialog;
})();
