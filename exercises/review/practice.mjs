import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const policy=await readFile(new URL('./REVIEW.md',import.meta.url),'utf8');
const agent=JSON.parse(await readFile(new URL('./agents/reviewer.json',import.meta.url),'utf8'));
assert(policy.length>300 && !policy.includes('TODO'),'Complete review policy');
assert(agent.instructions.length>80 && !agent.instructions.includes('TODO'),'Complete reviewer instructions');
assert(Object.keys(agent).every(k=>['purpose','instructions','output'].includes(k)),'No model/tool authority in candidate config');
console.log("Basic policy/config checks passed. Rehearse the reviewer locally and run the assessor. GitHub validates the report, not actual review precision.");
