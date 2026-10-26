import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
for (const role of ['researcher','implementer','verifier']) {
 const config=JSON.parse(await readFile(new URL(`./agents/${role}.json`,import.meta.url),'utf8'));
 assert(typeof config.instructions==='string' && config.instructions.length>80 && !config.instructions.includes('TODO'),`Write ${role} instructions`);
 assert(Object.keys(config).every(k=>['purpose','instructions','requestedContext'].includes(k)),'Role instructions cannot grant model/tool overrides');
}
const handoff=JSON.parse(await readFile(new URL('./handoff.json',import.meta.url),'utf8'));
assert(handoff.requirements.length>=3,'Add evidenced requirements to the handoff');
for(const r of handoff.requirements)assert(r.id && r.statement && r.source,'Every requirement needs an ID and source');
console.log("Config/handoff checks passed. Rehearse the roles locally and run the local assessor. Submitted configurations and reports are not independent child-session evidence.");
