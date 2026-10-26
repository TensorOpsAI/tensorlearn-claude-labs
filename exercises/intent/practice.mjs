import assert from 'node:assert/strict';
import {readFile} from 'node:fs/promises';
const draft=await readFile(new URL('./intent.md',import.meta.url),'utf8');
assert(draft.trim().length>=150,'Write a substantive intent before review');
assert(!/TODO|Write your intent here/.test(draft),'Replace the empty starter');
console.log("Basic file check passed. Run the local assessor with your Claude login for semantic feedback, then submit assessment.json with these artifacts.");
