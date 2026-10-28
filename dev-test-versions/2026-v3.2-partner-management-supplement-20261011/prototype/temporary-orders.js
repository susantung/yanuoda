/* 仅本地原型的虚构样例；W05与R01读取同一订单源，不请求任何平台接口。金额单位：分。 */
window.SupplementTemporaryOrders = (() => {
  const owners = ['张敏 13800000011','李晨 13800000012','市场王经理（手填）'];
  const cashiers = ['王月欣','陈晓','当前售票员'];
  const customers = ['张先生','海口陈女士','李先生','三亚周女士','王先生','赵女士'];
  const pending = Array.from({length:23},(_,i)=>({
    id:'DD202610'+String(25-Math.floor(i/3)).padStart(2,'0')+String(i+1).padStart(4,'0'),
    customer:customers[i%6], owner:owners[i%3], cashier:cashiers[Math.floor(i/3)%3],
    amount:[36000,12000,20000,8800,6000,15000][i%6], refunded:i%4===0?6000:0,
    created:'2026-10-'+String(25-Math.floor(i/3)).padStart(2,'0')+' '+String(14-i%5).padStart(2,'0')+':20:00',
    partner:'公共临时客户',accountNo:'CPP202608050003',method:'挂帐',state:'pending'
  }));
  const paid = [
    {id:'DD202610180101',customer:'林先生',owner:owners[0],cashier:'王月欣',amount:6000,refunded:0,settled:6000,receipt:'RGW202610240001',operator:'陈晓',source:'售票窗口',method:'扫码付',terminal:'001',created:'2026-10-18 09:20:00',paid:'2026-10-24'},
    {id:'DD202610180102',customer:'林先生',owner:owners[0],cashier:'王月欣',amount:4000,refunded:0,settled:4000,receipt:'RGW202610240001',operator:'陈晓',source:'售票窗口',method:'扫码付',terminal:'001',created:'2026-10-18 10:20:00',paid:'2026-10-24'},
    {id:'DD202610170103',customer:'黄女士',owner:owners[1],cashier:'陈晓',amount:18000,refunded:3000,settled:18000,receipt:'RG202610230002',operator:'市场业务刘经理',source:'后台',method:'银行转账',terminal:'—',created:'2026-10-17 12:20:00',paid:'2026-10-23'},
    {id:'DD202610150104',customer:'吴先生',owner:owners[2],cashier:'当前售票员',amount:26000,refunded:0,settled:26000,receipt:'RGW202610220003',operator:'王月欣',source:'售票窗口',method:'银行卡',terminal:'POS002',created:'2026-10-15 14:20:00',paid:'2026-10-22'},
    {id:'DD202609290105',customer:'钱女士',owner:owners[0],cashier:'王月欣',amount:9800,refunded:0,settled:9800,receipt:'RGW202610010004',operator:'当前售票员',source:'售票窗口',method:'现金',terminal:'—',created:'2026-09-29 15:20:00',paid:'2026-10-01'}
  ].map(r=>({...r,partner:'公共临时客户',accountNo:'CPP202608050003',state:'paid'}));
  return Object.freeze([...pending,...paid].map(Object.freeze));
})();
