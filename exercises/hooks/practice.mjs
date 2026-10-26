import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
import {decide} from './guard/guard.mjs';
const fixtures=JSON.parse(await readFile(new URL('./fixtures/events.json',import.meta.url),'utf8'));
for(const item of fixtures){
 const response=decide(item.event)?.hookSpecificOutput;
 assert.equal(response?.hookEventName,'PreToolUse',item.id);
 assert.equal(response?.permissionDecision,item.expected,item.id);
 assert(typeof response.permissionDecisionReason==='string' && response.permissionDecisionReason.length>0,item.id+' needs a reason');
}
console.log("Visible decision fixtures passed. Run local effect probes when available and the local assessor. GitHub report validation does not independently certify live Claude hook execution.");
