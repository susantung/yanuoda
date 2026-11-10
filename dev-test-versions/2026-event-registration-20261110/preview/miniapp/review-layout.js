/* Group only the existing review controls; preserve IDs, listeners, page content and state. */
(()=>{
 const controls=document.querySelector('.controls');
 const groups=[['显示与身份',['width','theme','people','copyLength','state','records-role']],['阅读、资料与签署',['reader-scene','notice-demo','template-demo','signature-demo','draft-demo','configuration-source']],['提交与支付',['submission-scene','submission-resolution','payment-scene','poster-result-scene']],['报名记录与查询',['records-scene','query-scene']]];
 const buttons=[['重置当前示例阅读进度','预览需签署资料页','刷新后台选项'],['演示返回核实结果','预览提交交互'],['预览我的报名','预览独立报名查询']];
 const originals=[...controls.children];
 groups.forEach(([name,ids],i)=>{
 const d=document.createElement('details');d.className='review-group';d.open=false;
 const summary=document.createElement('summary');summary.textContent=name;
 const body=document.createElement('div');body.className='review-group-body';
 originals.forEach(el=>{if(ids.some(id=>el.querySelector('#'+id))||(i>0&&buttons[i-1].includes(el.textContent.trim())))body.append(el);});
 d.append(summary,body);controls.append(d);
 });
 const queryHint=document.querySelector('.query-example');if(queryHint)controls.lastElementChild.querySelector('.review-group-body').append(queryHint);
 const title=document.querySelector('.review h1');title.textContent='赛事报名 · 原型审阅';
 document.querySelector('.review>p').textContent='左侧切换演示条件，右侧操作手机页面。退款演示在下方；其他场景按需展开。所有交易均为本地模拟。';
})();
