/* 本地增补迁移规则：与普通回款共用一个账本，一次写入；无真实接口。金额单位为分。 */
(() => {
  'use strict';
  const model=window.SupplementRepaymentModel,clone=x=>JSON.parse(JSON.stringify(x));
  const catalogKey='supplement-20261011-migration-catalog-v1';
  const defaults=[
    {key:'1',type:'企业',name:'三亚山海旅行服务有限公司',accountNo:'CPP202608050001',payType:'挂帐',contact:'陈晓',phone:'13800000001',owner:'张敏 13800000011',ownerId:'EMP10011',status:'enabled',creditAmount:300,creditLimit:1000,creditLimitEnabled:true,prepayBalance:0},
    {key:'2',type:'个人',name:'王先生',accountNo:'CPP202608050002',payType:'预付款',contact:'王先生',phone:'13800000002',owner:'李晨 13800000012',ownerId:'EMP10012',status:'enabled',creditAmount:0,creditLimit:500,creditLimitEnabled:false,prepayBalance:-40},
    {key:'3',type:'临时客户',name:'公共临时客户',accountNo:'CPP202608050003',payType:'挂帐',contact:'-',phone:'-',owner:'-',status:'enabled'}
  ];
  const stamp=v=>{const d=new Date(v),p=n=>String(n).padStart(2,'0');return `${d.getFullYear()}-${p(d.getMonth()+1)}-${p(d.getDate())} ${p(d.getHours())}:${p(d.getMinutes())}:${p(d.getSeconds())}`};
  const migrations=(storage=localStorage)=>model.readLedger(storage).migrations||[];
  function catalog(storage=localStorage){
    const raw=storage.getItem(catalogKey),saved=raw?JSON.parse(raw):clone(defaults);
    if(!Array.isArray(saved))throw new Error('本地合作伙伴资料无法读取，请刷新后台核对');
    const created=migrations(storage).filter(m=>m.isNew).map(m=>m.target);
    return [...saved,...created.filter(p=>!saved.some(s=>s.accountNo===p.accountNo))];
  }
  const eligible=p=>p&&['企业','个人'].includes(p.type)&&p.status==='enabled';
  const signature=p=>JSON.stringify(p&&[p.accountNo,p.name,p.type,p.payType,p.status,p.owner,p.contact,p.phone]);
  function publish(partners,credit,prepay){
    const next=partners.map(p=>{const c=credit.find(r=>r.accountNo===p.accountNo),b=prepay.find(r=>r.accountNo===p.accountNo);return {...p,creditAmount:c?.amount||0,creditLimit:c?.limit??null,creditLimitEnabled:c?.limitEnabled??null,prepayBalance:b?.balance||0,prepayLimitEnabled:b?.limitEnabled??null,creditMigrationDelta:c?._migrationDelta||0,prepayMigrationDelta:b?._migrationDelta||0}});
    next.forEach(p=>{p.creditRechargeDelta=credit.find(r=>r.accountNo===p.accountNo)?._rechargeDelta||0;p.prepayRechargeDelta=prepay.find(r=>r.accountNo===p.accountNo)?._rechargeDelta||0});
    localStorage.setItem(catalogKey,JSON.stringify(next));
  }
  function checkOrders(baseOrders,ids,ledger,expectedAmounts){
    if(!ids.length||new Set(ids).size!==ids.length)throw new Error('请至少选择一笔待迁移订单');
    const current=model.apply(baseOrders,ledger),selected=ids.map(id=>current.find(r=>r.id===id));
    if(selected.some(r=>!r||r.state!=='pending'||r.partner!=='公共临时客户'||r.method!=='挂帐'||r.amount-r.refunded<=0))throw new Error('所选订单已回款、迁移或退款，请返回列表重新选择');
    if(selected.some(r=>!Number.isSafeInteger(r.amount)||!Number.isSafeInteger(r.refunded)||r.refunded<0||r.refunded>r.amount))throw new Error('订单金额无效，请重新核对');
    if(selected.some(r=>r.afterSales&&r.afterSales.reduce((n,a)=>n+a.amount,0)!==r.refunded))throw new Error('订单与成功售后退款金额不一致，请重新核对');
    if(expectedAmounts&&selected.some(r=>expectedAmounts[r.id]!==r.amount-r.refunded))throw new Error('所选订单金额已变化，请返回列表重新核对');
    return {selected,mismatch:new Set(selected.map(r=>r.customer.trim())).size>1||new Set(selected.map(r=>r.owner.trim())).size>1};
  }
  function commit({baseOrders,ids,mode,targetAccountNo,expectedTarget,newPartner,expectedAmounts,confirmedMismatch=false,operator,windowName='',source='售票窗口',storage=localStorage,now=new Date()}){
    const ledger=model.readLedger(storage),{selected,mismatch}=checkOrders(baseOrders,ids,ledger,expectedAmounts);
    if(mismatch&&!confirmedMismatch)throw new Error('请先确认已选订单属于同一客户');
    const all=catalog(storage),token=now.getTime()+'-'+Math.random().toString(36).slice(2,7),id='RGZ'+token;
    let target;
    if(mode==='existing'){
      target=all.find(p=>p.accountNo===targetAccountNo);
      if(!eligible(target))throw new Error('请选择启用的企业或个人合作伙伴');
      if(expectedTarget&&signature(target)!==expectedTarget)throw new Error('目标合作伙伴资料或默认账户类型已变化，请重新选择确认');
      target=clone(target);
    }else if(mode==='new'){
      const p=Object.fromEntries(Object.entries(newPartner||{}).map(([k,v])=>[k,typeof v==='string'?v.trim():v]));
      if(!['企业','个人'].includes(p.type)||!['挂帐','预付款'].includes(p.payType))throw new Error('请选择合作类型和默认账户类型');
      if(!p.name||p.name.length>25)throw new Error('请输入不超过25字符的合作伙伴名称');
      if(all.some(r=>r.name.trim()===p.name))throw new Error('合作伙伴名称已存在，请重新输入');
      if(!p.contact||p.contact.length>15||!p.phone||p.phone.length>15)throw new Error('请填写不超过15字符的联系人和联系电话');
      if(!p.owner)throw new Error('请选择对接负责人');
      if((p.remark||'').length>500)throw new Error('备注最多500字');
      target={...p,key:'partner-'+token,accountNo:'CPP'+token,status:'enabled',hasHistory:true,creditAmount:0,prepayBalance:0,updatedAt:stamp(now),updater:operator};
    }else throw new Error('请选择创建新伙伴或已有伙伴');
    if(!['挂帐','预付款'].includes(target.payType))throw new Error('目标默认账户类型无效，请重新选择');
    const amount=selected.reduce((sum,r)=>sum+r.amount-r.refunded,0);
    const entry={id,createdAt:now.toISOString(),completedAt:now.toISOString(),operator,windowName,source,target,isNew:mode==='new',amount,owners:[...new Set(selected.map(r=>r.owner))],orders:selected.map(r=>({...clone(r),afterSales:r.afterSales|| (r.refunded?[{id:'LS-'+r.id,amount:r.refunded}]:[])})),confirmation:mismatch?{operator,at:now.toISOString(),orders:ids}:null};
    // 用户确认：迁移不校验额度／余额；不得改额度开关。不是新的售票或实收。
    const next=clone(ledger);next.migrations=[...(next.migrations||[]),entry];next.accountDelta+=amount;
    storage.setItem(model.key,JSON.stringify(next));
    if(storage===window.localStorage)window.dispatchEvent(new Event('supplement:repayment'));
    return{ledger:next,orders:model.apply(baseOrders,next),migration:entry};
  }
  function orderChanges(storage=localStorage){return migrations(storage).flatMap(m=>m.orders.map(r=>({orderNo:r.id,afterSaleNos:r.afterSales.map(a=>a.id),recordNo:m.id,targetPartner:m.target.name,targetType:m.target.type,targetAccountNo:m.target.accountNo,targetOwner:m.target.owner,targetContact:m.target.contact,targetPhone:m.target.phone,targetPayType:m.target.payType,netAmount:(r.amount-r.refunded)/100,operator:m.operator,time:stamp(m.completedAt)})));}
  function delta(accountNo,type,storage=localStorage){return -migrations(storage).filter(m=>m.target.accountNo===accountNo&&m.target.payType===type).reduce((n,m)=>n+m.amount,0)/100;}
  function projectAccounts(rows,prepay=false){
    const type=prepay?'预付款':'挂帐',field=prepay?'balance':'amount',made=migrations().filter(m=>m.isNew).map(m=>({key:(prepay?'p':'c')+m.target.key,createdAt:Date.parse(m.createdAt),type:m.target.type,name:m.target.name,accountNo:m.target.accountNo,[field]:0,limit:0,limitEnabled:false,status:'enabled',records:[]}));
    const all=[...rows,...made.filter(p=>!rows.some(r=>r.accountNo===p.accountNo))];
    return all.map(r=>{const d=delta(r.accountNo,type),recharge=window.SupplementLongtermRecharge?.delta(r.accountNo,type)||0;return {...r,[field]:Math.round(((r[field]||0)-(r._migrationDelta||0)-(r._rechargeDelta||0)+d+recharge)*100)/100,_migrationDelta:d,_rechargeDelta:recharge}});
  }
  function restoreAccounts(rows,prepay=false){
    const saved=catalog(),field=prepay?'balance':'amount',prefix=prepay?'prepay':'credit';
    return rows.map(row=>{const p=saved.find(p=>p.accountNo===row.accountNo);if(!p)return row;return {...row,[field]:p[prepay?'prepayBalance':'creditAmount']??row[field],limit:prepay?row.limit:(p.creditLimit??row.limit),limitEnabled:p[prefix+'LimitEnabled']??row.limitEnabled,_migrationDelta:p[prefix+'MigrationDelta']||0,_rechargeDelta:p[prefix+'RechargeDelta']||0}});
  }
  function records(){return migrations().map(m=>{const afterSaleItems=m.orders.flatMap(r=>r.afterSales.map(a=>({afterSaleNo:a.id,orderNo:r.id,amount:a.amount/100}))),date=stamp(m.completedAt),owner=m.owners.join('、');const row={key:m.id,recordNo:m.id,kind:'account',type:'临时客户',name:'公共临时客户',accountNo:'CPP202608050003',operation:'调账-往来',rechargeType:'调账-往来',accountType:'挂帐',amount:m.amount/100,settleAmount:m.amount/100,surplus:0,surplusTarget:'-',applicant:m.operator,cashier:m.source==='售票窗口'?m.operator:'-',ticketWindow:m.windowName||'-',owner,repaymentTime:'-',paymentMethod:'-',terminalNo:'-',payer:'-',applyTime:stamp(m.createdAt),finishTime:date,status:'success',remark:'临时客户转合作伙伴往来调账',adjustReason:'临时客户转合作伙伴往来调账',attachments:[],targetPartner:m.target.name,targetType:m.target.type,targetAccountNo:m.target.accountNo,orders:m.orders.map(r=>r.id),afterSales:afterSaleItems.map(a=>a.afterSaleNo),orderItems:m.orders.map(r=>({id:r.id,orderNo:r.id,amount:r.amount/100})),afterSaleItems,orderTotalAmount:m.orders.reduce((n,r)=>n+r.amount,0)/100,afterSaleRefundAmount:afterSaleItems.reduce((n,r)=>n+r.amount,0),mismatchConfirmation:m.confirmation};row.flow={key:'flow-'+m.id,type:row.type,name:row.name,accountNo:row.accountNo,operation:row.operation,accountType:'挂帐',amount:row.amount,documentType:'充值记录单号',documentNo:m.id,owner,time:date,category:'transferAdjust',paymentMethod:'-',terminalNo:'-',repaymentStatus:'-',remark:'临时客户转合作伙伴-'+m.target.name+' 往来调账，订单号：'+row.orders.join('、')+'；售票员：'+m.operator+'；窗口：'+(m.windowName||'-')};return row});}
  function flows(){return migrations().flatMap(m=>m.orders.flatMap(r=>{const common={type:m.target.type,name:m.target.name,accountNo:m.target.accountNo,accountType:m.target.payType,owner:m.target.owner,time:stamp(m.completedAt),paymentMethod:m.target.payType,terminalNo:'-',repaymentStatus:'-',remark:'临时客户转合作伙伴生成，来源公共临时客户，转移单号：'+m.id,orderNo:r.id};return[{...common,key:'migration-consume-'+m.id+'-'+r.id,operation:'消费',amount:-r.amount/100,documentType:'订单号',documentNo:r.id,category:'consume'},...r.afterSales.map(a=>({...common,key:'migration-refund-'+m.id+'-'+a.id,operation:'退款',amount:a.amount/100,documentType:'售后单号',documentNo:a.id,category:'refund'}))]}));}
  window.SupplementMigration={catalogKey,catalog,eligible,signature,publish,checkOrders,commit,migrations,orderChanges,delta,projectAccounts,restoreAccounts,records,flows,stamp};
})();
