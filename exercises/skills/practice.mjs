import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {checkMessage} from './checker/check-message.mjs';
const fixtures=JSON.parse(await readFile(new URL('./fixtures/messages.json',import.meta.url),'utf8'));
for(const item of fixtures){
 const result=checkMessage({body:item.body});
 assert.equal(result.allowed,item.allowed,'Message policy mismatch');
 assert(Array.isArray(result.violations),'Return violations');
 assert.equal(result.violations.length===0,result.allowed,'Decision and violations must agree');
}
const skill=await readFile(new URL('./.claude/skills/notification-policy/SKILL.md',import.meta.url),'utf8');
assert(!skill.includes('TODO'),'Complete the skill');
console.log("Visible checker cases passed. Rehearse skill activation locally and run the assessor. GitHub report checks do not certify automatic activation.");
