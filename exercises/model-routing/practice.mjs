import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const routing=JSON.parse(await readFile(new URL('./routing.json',import.meta.url),'utf8'));
assert(Array.isArray(routing.routes) && routing.routes.length>=2,'Define routes for the task pack');
for(const route of routing.routes)assert(['extract','reason'].includes(route.stage) && typeof route.taskType==='string','Use a declared stage');
for(const stage of Object.values(routing.stages)){
 assert(typeof stage.modelAlias==='string' && stage.modelAlias.length>0,'Use an instructor model alias');
 for(const key of ['maxInputTokens','maxOutputTokens'])assert(Number.isInteger(stage[key]) && stage[key]>0,'Use positive integer token limits');
 assert(Number.isInteger(stage.maxRetries) && stage.maxRetries>=0 && stage.maxRetries<=2,'Bound retries');
}
assert(!routing.escalationPolicy.includes('TODO') && routing.escalationPolicy.length>80,'Define observable escalation criteria');
console.log("Routing shape passed. Rehearse routing locally and run the assessor. Report/config checks do not prove measured usage or an enforced allowance.");
