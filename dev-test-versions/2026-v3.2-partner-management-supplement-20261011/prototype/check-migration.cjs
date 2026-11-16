/* 本地规则检查，不替代浏览器操作或真实接口验收。 */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const data=new Map(),storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};
const ctx={localStorage:storage,window:{localStorage:storage,dispatchEvent:()=>{}},Event:class{},Date,Math};vm.createContext(ctx);
for(const file of ['repayment-model.js','migration-model.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,file),'utf8'),ctx);
const m=ctx.window.SupplementMigration,r=ctx.window.SupplementRepaymentModel;
const base=[{id:'A',partner:'公共临时客户',method:'挂帐',state:'pending',customer:'客户甲',owner:'负责人甲',cashier:'原售票员',amount:36000,refunded:6000,afterSales:[{id:'S1',amount:2000},{id:'S2',amount:4000}]},{id:'B',partner:'公共临时客户',method:'挂帐',state:'pending',customer:'客户乙',owner:'负责人乙',cashier:'原售票员',amount:12000,refunded:0}];
const reset=()=>data.clear(),run=(extra={})=>m.commit({baseOrders:base,ids:['A'],mode:'existing',targetAccountNo:'CPP202608050002',operator:'验证售票员',windowName:'验证窗口',...extra});
let count=0;function test(name,fn){reset();fn();count++;console.log('通过 '+name)}
test('预付款不足仍迁移，消费与多售后重建',()=>{let out=run();assert.equal(out.migration.amount,30000);assert.equal(m.delta('CPP202608050002','预付款'),-300);assert.equal(m.flows().length,3);assert.equal(m.flows().reduce((n,x)=>n+x.amount,0),-300);assert.equal(m.records()[0].operation,'调账-往来');assert.equal(m.records()[0].afterSales.length,2);assert.equal(out.orders[0].cashier,'原售票员');assert.equal(out.orders[0].state,'migrated');assert.equal(out.ledger.receipts.length,0);assert.equal(out.ledger.accountDelta,30000)});
test('重复迁移拦截且账本不变',()=>{run();let before=storage.getItem(r.key);assert.throws(()=>run(),/已回款、迁移或退款/);assert.equal(storage.getItem(r.key),before)});
test('客户负责人不同需确认，可确认合并',()=>{assert.throws(()=>run({ids:['A','B']}),/先确认/);let out=run({ids:['A','B'],confirmedMismatch:true});assert.equal(out.migration.amount,42000);assert.equal(out.migration.owners.length,2);assert.ok(out.migration.confirmation)});
test('金额变化拦截，无结果写入',()=>{assert.throws(()=>run({expectedAmounts:{A:29999}}),/金额已变化/);assert.equal(storage.getItem(r.key),null)});
test('目标默认账户改变拦截',()=>{assert.throws(()=>run({expectedTarget:'旧资料'}),/资料或默认账户类型已变化/)});
test('禁用目标拦截',()=>{let p=m.catalog();p[1].status='disabled';storage.setItem(m.catalogKey,JSON.stringify(p));assert.throws(()=>run(),/启用的企业或个人/)});
test('已回款及全退订单拦截',()=>{assert.throws(()=>run({baseOrders:[{...base[0],state:'paid'}]}),/已回款、迁移或退款/);assert.throws(()=>run({baseOrders:[{...base[0],refunded:36000}]}),/已回款、迁移或退款/)});
test('新伙伴同账号双账户，投影不重复扣款',()=>{let out=run({mode:'new',newPartner:{type:'个人',name:'新伙伴',contact:'联系人',phone:'13800000000',owner:'目标负责人',payType:'预付款'}});let p=m.projectAccounts([],true),c=m.projectAccounts([],false);assert.equal(p.length,1);assert.equal(c[0].accountNo,p[0].accountNo);assert.equal(p[0].balance,-300);assert.equal(c[0].amount,0);assert.equal(m.projectAccounts(p,true)[0].balance,-300);assert.equal(out.orders[0].owner,'目标负责人')});
test('名字重复拦截',()=>assert.throws(()=>run({mode:'new',newPartner:{type:'个人',name:'王先生',contact:'联系人',phone:'13800000000',owner:'负责人',payType:'挂帐'}}),/名称已存在/));
test('写入失败不生成孤立档案或账务',()=>{const failing={getItem:storage.getItem,setItem:()=>{throw Error('模拟写入失败')}};assert.throws(()=>run({storage:failing}),/模拟写入失败/);assert.equal(storage.getItem(r.key),null)});
for(const type of ['挂帐','预付款'])for(const enabled of [true,false])test(type+'额度限制'+enabled+'不足仍迁移且不改开关',()=>{let p=m.catalog();p[1].payType=type;p[1].limitEnabled=enabled;p[1].limit=0;p[1].prepayBalance=-100;p[1].creditAmount=-100;storage.setItem(m.catalogKey,JSON.stringify(p));run();assert.equal(m.delta(p[1].accountNo,type),-300);assert.equal(m.catalog()[1].limitEnabled,enabled)});
test('后台账户资料发布包含额度和已投影金额',()=>{m.publish(m.catalog(),[{accountNo:'CPP202608050001',amount:212,limit:1000,limitEnabled:true,_migrationDelta:-88}],[{accountNo:'CPP202608050001',balance:0}]);const p=m.catalog()[0];assert.equal(p.creditAmount,212);assert.equal(p.creditLimit,1000);assert.equal(p.creditLimitEnabled,true);assert.equal(p.creditMigrationDelta,-88);assert.equal(p.prepayBalance,0)});
test('跨页恢复预付款额度开关且投影不重复扣款',()=>{run();m.publish(m.catalog(),[],[{accountNo:'CPP202608050002',balance:-340,limitEnabled:true,_migrationDelta:-300}]);let rows=m.restoreAccounts([{accountNo:'CPP202608050002',balance:-40,limitEnabled:false}],true);assert.equal(rows[0].limitEnabled,true);assert.equal(rows[0].balance,-340);assert.equal(m.projectAccounts(rows,true)[0].balance,-340)});
console.log('合计 '+count+' 项规则检查通过。');
