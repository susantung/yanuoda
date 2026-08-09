import fs from 'node:fs';
import path from 'node:path';
import { fileURLToPath } from 'node:url';

const here = path.dirname(fileURLToPath(import.meta.url));
const root = path.resolve(here, '../../../partner-management/preview');
const source = path.join(root, 'index.html');
const target = path.join(here, 'index.html');

let html = fs.readFileSync(source, 'utf8');
html = html
  .replace('合作伙伴管理｜程程票票务系统原型', 'V3.2 散客合作伙伴管理-20260805｜程程票票务系统原型')
  .replace('h(Kn,{type:"primary",className:"ticket-window-btn",onClick:()=>location.href="ticket-window.html"},"售票窗口")', 'h(Kn,{type:"primary",className:"ticket-window-btn",disabled:true},"售票窗口（待后续确认）")');
fs.writeFileSync(target, html, 'utf8');
console.log('restored V3.2 prototype from the V1 Ant Design baseline');
