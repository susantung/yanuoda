/* 离线规则检查，不替代浏览器验收。 */
const fs=require('node:fs'),vm=require('node:vm'),assert=require('node:assert/strict'),path=require('node:path');
const data=new Map(),storage={getItem:k=>data.get(k)||null,setItem:(k,v)=>data.set(k,v)};
const context={localStorage:storage,window:{localStorage:storage,dispatchEvent(){}},Event:class{},Date,Math};vm.createContext(context);
for(const f of ['repayment-model.js','migration-model.js','unclaimed-model.js','longterm-recharge-model.js','import-supplement.js'])vm.runInContext(fs.readFileSync(path.join(__dirname,f),'utf8'),context);
const p=context.window.SupplementRepaymentModel,imp=context.window.SupplementImport;
const fixture={payments:[{on:true,scenes:['partner'],code:'CASH',name:'现金'}],bindings:{},resources:[],session:{}};
const order={id:'A',state:'pending',partner:'公共临时客户',method:'挂帐',amount:14000,refunded:0,customer:'客户',owner:'负责人'};
const form={date:'2026-10-27',total:'140',cash:'140',code:'CASH',signature:p.resourceState(fixture,'CASH').signature};
let count=0;function test(name,fn){data.clear();fn();count++;console.log('通过 '+name)}
const check=patch=>p.validate({orders:[order],ids:['A'],form:{...form,...patch},fixture,today:'2026-10-28'});
test('金额不足实时校验',()=>assert.match(check({total:'100'}).error,/不足/));
test('足额可提交',()=>assert.equal(check({}).error,undefined));
test('超额未确认其他收入不可提交',()=>assert.match(check({total:'150',cash:'150'}).error,/明确选择/));
test('超额确认公司收入',()=>assert.equal(check({total:'150',cash:'150',excess:'income'}).income,1000));
test('未来日期不可提交',()=>assert.match(check({date:'2026-10-29'}).error,/未来/));
test('现金不足不可提交',()=>assert.match(check({cash:'139'}).error,/现金实收/));
test('现金找零',()=>assert.equal(check({cash:'150'}).change,1000));
const partner={type:'企业',name:'测试企业',accountNo:'TEST',payType:'挂帐',owner:'负责人'};
const row=(extra={})=>({line:6,cells:['OFF-01','测试企业','TEST','充值','挂帐','100','2026-10-27','','现金','',''],...extra});
test('导入普通伙伴记录、流水及账户投影',()=>{const result=imp.commit([row()],[partner],[]);assert.equal(result.added.length,1);assert.equal(result.added[0].flow.amount,100);assert.equal(context.window.SupplementLongtermRecharge.delta('TEST','挂帐'),100)});
test('导入待认领对象拒绝且无资金记录',()=>{const r=row();r.cells[1]='待认领客户';const result=imp.commit([r],[partner],[]);assert.equal(result.added.length,0);assert.match(result.checked[0].errors.join('；'),/仅允许售票窗口/)});
test('导入重复流水拒绝',()=>{imp.commit([row()],[partner],[]);assert.equal(imp.commit([row()],[partner],[]).added.length,0)});
test('导入其他收入拒绝',()=>{const r=row();r.cells[3]='其他收入';assert.equal(imp.commit([r],[partner],[]).added.length,0)});
console.log('合计 '+count+' 项离线规则检查通过。');
