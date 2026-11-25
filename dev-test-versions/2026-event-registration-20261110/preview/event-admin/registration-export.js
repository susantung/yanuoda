/* V1.1 V11-23. Local prototype export only; no production API. */
(function(){'use strict';
const clean=value=>String(value==null?'':value).replace(/[\u0000-\u0008\u000b\u000c\u000e-\u001f]/g,'');
const xml=value=>clean(value).replace(/[&<>"']/g,c=>({'&':'&amp;','<':'&lt;','>':'&gt;','"':'&quot;',"'":'&apos;'}[c]));
const timestamp=()=>{const d=new Date(),pad=n=>String(n).padStart(2,'0');return d.getFullYear()+pad(d.getMonth()+1)+pad(d.getDate())+'-'+pad(d.getHours())+pad(d.getMinutes())+pad(d.getSeconds());};
const column=index=>{let result='';for(index++;index;index=Math.floor((index-1)/26))result=String.fromCharCode(65+(index-1)%26)+result;return result;};
function matrix(project,records,orderNo,names){
 const fields=project.fields||[],labels=new Map();
 const headers=['参赛者','报名状态','报名提交时间','订单号','门票名称','订单状态','实收金额',...fields.map(f=>{const count=(labels.get(f.label)||0)+1;labels.set(f.label,count);return f.label+(count>1?'（'+count+'）':'');})];
 const rows=[];
 for(const record of records.filter(r=>r.projectId===project.id&&r.status==='报名成功')){
  const base=[names(record),record.status,record.submittedAt||'',record.orderNo?orderNo(record):'',record.orderNo?record.ticketName||'':'',record.orderNo?record.orderStatus||'':'',record.orderNo?Number(record.amount||0):''];
  for(const person of record.participants||[]){
   rows.push([...base,...fields.map(field=>{const key=({name:'name',phone:'phone',id:'identity'})[field.type]||field.id;const value=person[key];return Array.isArray(value)?value.join('、'):value==null?'':value;})]);
  }
 }
 return {headers,rows};
}
async function workbook(headers,rows){
 if(rows.length>1048575)throw new Error('数据超出单个Excel工作表容量，请联系技术支持完整导出');
 const zip=new JSZip();
 zip.file('[Content_Types].xml','<?xml version="1.0" encoding="UTF-8"?><Types xmlns="http://schemas.openxmlformats.org/package/2006/content-types"><Default Extension="rels" ContentType="application/vnd.openxmlformats-package.relationships+xml"/><Default Extension="xml" ContentType="application/xml"/><Override PartName="/xl/workbook.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.sheet.main+xml"/><Override PartName="/xl/worksheets/sheet1.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.worksheet+xml"/><Override PartName="/xl/styles.xml" ContentType="application/vnd.openxmlformats-officedocument.spreadsheetml.styles+xml"/></Types>');
 zip.file('_rels/.rels','<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/officeDocument" Target="xl/workbook.xml"/></Relationships>');
 zip.file('xl/workbook.xml','<?xml version="1.0" encoding="UTF-8"?><workbook xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main" xmlns:r="http://schemas.openxmlformats.org/officeDocument/2006/relationships"><sheets><sheet name="报名成功记录" sheetId="1" r:id="rId1"/></sheets></workbook>');
 zip.file('xl/_rels/workbook.xml.rels','<?xml version="1.0"?><Relationships xmlns="http://schemas.openxmlformats.org/package/2006/relationships"><Relationship Id="rId1" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/worksheet" Target="worksheets/sheet1.xml"/><Relationship Id="rId2" Type="http://schemas.openxmlformats.org/officeDocument/2006/relationships/styles" Target="styles.xml"/></Relationships>');
 zip.file('xl/styles.xml','<?xml version="1.0"?><styleSheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><fonts count="2"><font><sz val="11"/><name val="Microsoft YaHei"/></font><font><b/><sz val="11"/><name val="Microsoft YaHei"/></font></fonts><fills count="2"><fill><patternFill patternType="none"/></fill><fill><patternFill patternType="gray125"/></fill></fills><borders count="1"><border/></borders><cellStyleXfs count="1"><xf numFmtId="0" fontId="0" fillId="0" borderId="0"/></cellStyleXfs><cellXfs count="3"><xf numFmtId="49" fontId="0" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment vertical="top" wrapText="1"/></xf><xf numFmtId="49" fontId="1" fillId="0" borderId="0" xfId="0" applyAlignment="1"><alignment wrapText="1"/></xf><xf numFmtId="2" fontId="0" fillId="0" borderId="0" xfId="0"/></cellXfs><cellStyles count="1"><cellStyle name="Normal" xfId="0" builtinId="0"/></cellStyles></styleSheet>');
 const data=[headers,...rows].map((row,index)=>'<row r="'+(index+1)+'">'+row.map((value,i)=>{const ref=column(i)+(index+1);return index>0&&i===6&&typeof value==='number'&&Number.isFinite(value)?'<c r="'+ref+'" s="2"><v>'+value+'</v></c>':'<c r="'+ref+'" t="inlineStr" s="'+(index===0?1:0)+'"><is><t xml:space="preserve">'+xml(value)+'</t></is></c>';}).join('')+'</row>').join('');
 zip.file('xl/worksheets/sheet1.xml','<?xml version="1.0" encoding="UTF-8"?><worksheet xmlns="http://schemas.openxmlformats.org/spreadsheetml/2006/main"><sheetViews><sheetView workbookViewId="0"><pane ySplit="1" topLeftCell="A2" activePane="bottomLeft" state="frozen"/></sheetView></sheetViews><cols><col min="1" max="'+headers.length+'" width="24" customWidth="1"/></cols><sheetData>'+data+'</sheetData><autoFilter ref="A1:'+column(headers.length-1)+(rows.length+1)+'"/></worksheet>');
 return zip.generateAsync({type:'uint8array',compression:'DEFLATE'});
}
window.EventRegistrationExcel={matrix,workbook};
window.EventRegistrationExport={data(){return{registrationExporting:false};},methods:{async exportRegistrationRecords(){
 if(this.registrationExporting)return;
 const project=(this.projects||[]).find(p=>p.id===(this.registrationProject||{}).id)||this.registrationProject;
 if(!project)return;
 const result=matrix(project,this.exampleRegistrations,r=>this.registrationOrderNo(r),r=>this.registrationNames(r));
 if(!result.rows.length){this.$message.info('当前项目暂无报名成功记录');return;}
 this.registrationExporting=true;
 try{const bytes=await workbook(result.headers,result.rows);const blob=new Blob([bytes],{type:'application/vnd.openxmlformats-officedocument.spreadsheetml.sheet'});const url=URL.createObjectURL(blob),link=document.createElement('a');link.href=url;link.download=(project.name||'当前项目').replace(/[\\/:*?"<>|]/g,'_')+'-报名成功记录-'+timestamp()+'.xlsx';document.body.appendChild(link);link.click();link.remove();setTimeout(()=>URL.revokeObjectURL(url),30000);this.$message.success('已生成当前项目全部报名成功记录Excel（原型示例数据）');}catch(error){this.$message.error(error.message||'导出失败，请重试');}finally{this.registrationExporting=false;}
}}};
})();
