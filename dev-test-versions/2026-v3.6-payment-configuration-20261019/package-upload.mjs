// 只生成上传快照，不改业务原型、不发布远端。
import fs from 'node:fs/promises';
import path from 'node:path';
import {fileURLToPath} from 'node:url';
import {createHash} from 'node:crypto';
const source=path.dirname(fileURLToPath(import.meta.url));
const workspace=path.resolve(source,'../../..');
const staging=path.resolve(source,'../../交付快照');
const name='2026-v3.6-payment-configuration-20261019';
const dest=path.join(staging,name);
await fs.mkdir(dest,{recursive:true});
const adminOld='prototype/admin/index.html';
const windowOld='prototype/window/index.html';
const rebase=s=>s.replaceAll(adminOld,'prototype/admin/index.html').replaceAll(windowOld,'prototype/window/index.html').replaceAll('../index.html','../index.html').replaceAll('qa/index.html','qa/index.html');
for(const f of await fs.readdir(source)){
  if(!/\.(html|md)$/.test(f))continue;
  let content=rebase(await fs.readFile(path.join(source,f),'utf8'));
  if(f.endsWith('.html'))content=content.replace(/支付配置化专项 · V1\.\d+/g,'支付配置化专项 · V3.6').replaceAll('本地评审稿 · 未发布上传','V3.6 · 开发 / 测试资料').replaceAll('源稿与原型保留，未发布或上传。','源稿与原型保留；本页为V3.6上传副本，不代表生产功能已上线。');
  if(f==='任务索引.md')content=content.replace(/## 阅读与重建[\s\S]*$/,'## 阅读与维护\n\n本目录为V3.6上传快照。打开index.html阅读方案；原型需通过同一HTTP/HTTPS站点访问，以验证后台与窗口配置联动。修改仍在财务项目源目录进行，再运行package-upload.mjs重新生成副本。\n');
  await fs.writeFile(path.join(dest,f),content);
}
await fs.cp(path.join(source,'assets'),path.join(dest,'assets'),{recursive:true});
// 验收资料随当前版本交付，所有往返入口均使用包内相对地址。
const qaSource=path.resolve(source,'../../测试与验收/2026-v3.6-payment-qa-20261102');
const qaDest=path.join(dest,'qa');
await fs.mkdir(qaDest,{recursive:true});
for(const f of await fs.readdir(qaSource)){
  if(!/\.(html|md|json)$/.test(f))continue;
  let content=await fs.readFile(path.join(qaSource,f),'utf8');
  content=content.replaceAll('../../方案与需求/2026-payment-configuration-20261018/','../').replaceAll(adminOld,'../prototype/admin/index.html').replaceAll(windowOld,'../prototype/window/index.html').replaceAll('正式源目录 · 测试与验收 / 2026-v3.6-payment-qa-20261102 · 未自动上传','V3.6 · 测试环境验收资料');
  content=content.replaceAll('../../'+encodeURIComponent('方案与需求')+'/2026-payment-configuration-20261018/','../');
  await fs.writeFile(path.join(qaDest,f),content);
}
await fs.cp(path.join(qaSource,'evidence'),path.join(qaDest,'evidence'),{recursive:true});
for(const [kind,folder] of [['admin','payment-configuration'],['window','payment-window']]){
  const target=path.join(dest,'prototype',kind);
  await fs.cp(path.join(workspace,'outputs/product-preview',folder,'preview'),target,{recursive:true});
  let html=await fs.readFile(path.join(target,'index.html'),'utf8');
  // 上传站点有版本子路径，不能继续跳本机8876或站点根目录/admin、/window。
  html=html.replaceAll('http://127.0.0.1:8876/window/','../window/index.html').replaceAll('http://127.0.0.1:8876/admin/','../admin/index.html').replaceAll("'/window/'","'../window/index.html'").replaceAll("'/admin/'","'../admin/index.html'");
  await fs.writeFile(path.join(target,'index.html'),html);
}
const upload='/Users/susan/Documents/AI文稿/上传更新';
await fs.mkdir(path.join(staging,'indexes'),{recursive:true});
for(const [file,marker,row,out] of [
  ['dev-test-versions/index.html','<h2>当前方案</h2><div class="list">',`<div class="list-row"><span class="version">V3.6 · 20261019</span><div><h3>支付配置化</h3><p>支付方式与场景配置、资源管理及账号/设备绑定；散客、团队、伙伴充值和内导确认弹窗读取资源，每笔支付记录柜台编码/POS编号。</p></div><a href="${name}/index.html">查看开发方案</a></div>`,'category.html'],
  ['index.html','<h2>当前版本</h2><div class="list">',`<div class="list-row"><span class="version">开发 / 测试 · V3.6</span><p>支付配置化：统一配置与资源绑定，售票、充值及内导场景联动，记录并展示每笔支付的柜台编码/POS编号。</p><a href="dev-test-versions/${name}/index.html">查看方案与原型</a></div>`,'root.html']
]){
  const original=await fs.readFile(path.join(upload,file),'utf8');
  if(!original.includes(marker))throw new Error(`入口结构已变化：${file}`);
  await fs.writeFile(path.join(staging,'indexes',out),original.includes(`${name}/index.html`)?original:original.replace(marker,marker+row));
}
const hashes={};
async function walk(dir){for(const e of await fs.readdir(dir,{withFileTypes:true})){const p=path.join(dir,e.name);if(e.isDirectory())await walk(p);else hashes[path.relative(dest,p)]=createHash('sha256').update(await fs.readFile(p)).digest('hex');}}
await walk(dest);
await fs.writeFile(path.join(staging,'v3.6-manifest.json'),JSON.stringify({version:'3.6',source,package:name,files:hashes},null,2));
console.log(JSON.stringify({package:dest,indexes:path.join(staging,'indexes'),fileCount:Object.keys(hashes).length},null,2));
