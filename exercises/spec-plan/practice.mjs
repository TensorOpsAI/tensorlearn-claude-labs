import assert from 'node:assert/strict';
import {readFile,access} from 'node:fs/promises';
for(const name of ['spec.md','plan.md']){
 const doc=await readFile(new URL('./'+name,import.meta.url),'utf8');
 assert(doc.length>400,`Complete ${name}`);
 assert(/I-[1-4]/.test(doc),`${name} must reference approved intent IDs`);
 for(const match of doc.matchAll(/src\/[A-Za-z0-9_./-]+\.mjs/g))await access(new URL('./'+match[0],import.meta.url));
}
console.log("Visible document/reference checks passed. Run the local assessor for semantic feedback; GitHub checks report/file consistency and applies the rubric.");
