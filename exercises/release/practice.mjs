import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
for(const role of ['diagnosis','release']){
 const config=JSON.parse(await readFile(new URL(`./agents/${role}.json`,import.meta.url),'utf8'));
 assert(config.instructions.length>100 && !config.instructions.includes('TODO'),`Complete ${role} instructions`);
}
const policy=JSON.parse(await readFile(new URL('./approval-policy.json',import.meta.url),'utf8'));
assert.equal(policy.environment,'staging');assert.equal(policy.requireApproval,true);
for(const key of ['requiredApprovalFields','rollbackWhen','recoveryChecks'])assert(Array.isArray(policy[key]) && policy[key].length>0,`Define ${key}`);
console.log("Policy shape passed. Rehearse the simulated scenario locally when available and run the assessor. GitHub report checks do not certify actual release or rollback effects.");
