import fs from 'node:fs/promises';
import {fileURLToPath} from 'node:url';
import {FileBlob, SpreadsheetFile} from '@oai/artifact-tool';
const source='/Users/susan/Downloads/合作伙伴充值批量导入模板 (2).xlsx';
const base=fileURLToPath(new URL('.',import.meta.url));
const tag='QA-PM1114-R03-IMPORT';
const row=(id,name='QA-PM1114迁移企业G',account='A3618964766937858049')=>[id,name,account,'充值','预付款',0.01,'2026-11-14','QA验收导入','现金','管理员',id];
const cases={
 'valid-one':[row(tag+'-ONE')],
 'duplicate':[row(tag+'-ONE')],
 'unclaimed':[row(tag+'-UNCLAIM','待认领客户','A3597284940257984512')],
 'valid-fifty':Array.from({length:50},(_,i)=>row(tag+'-B50-'+String(i+1).padStart(2,'0'))),
 'reject-fiftyone':Array.from({length:51},(_,i)=>row(tag+'-B51-'+String(i+1).padStart(2,'0')))
};
const original=await SpreadsheetFile.importXlsx(await FileBlob.load(source));
console.log((await original.inspect({kind:'sheet',include:'id,name',maxChars:1000})).ndjson);
if(process.argv.includes('--preview-only')){
 const pre=await original.render({sheetName:'充值导入模板',range:'A1:K8',scale:1,format:'png'});
 await fs.writeFile(base+'template-before.png',new Uint8Array(await pre.arrayBuffer()));
 process.exit(0);
}
for(const [name,rows] of Object.entries(cases)){
 const wb=await SpreadsheetFile.importXlsx(await FileBlob.load(source));
 const sh=wb.worksheets.getItem('充值导入模板');
 sh.getRange('A6:K56').clear({applyTo:'contents'});
 sh.getRange(`A6:K${5+rows.length}`).values=rows;
 wb.recalculate();
 const got=sh.getRange(`A6:K${5+rows.length}`).values;
 if(JSON.stringify(got)!==JSON.stringify(rows))throw Error('Mismatch '+name);
 if(name==='valid-one'){
  const png=await wb.render({sheetName:'充值导入模板',range:'A1:K8',scale:1,format:'png'});
  await fs.writeFile(base+'sample-after.png',new Uint8Array(await png.arrayBuffer()));
 }
 await (await SpreadsheetFile.exportXlsx(wb)).save(base+name+'.xlsx');
 console.log(name,rows.length,rows[0][0],rows.at(-1)[0]);
}
await fs.writeFile(base+'sample-manifest.json',JSON.stringify({source,tag,cases},null,2));
