import test from 'node:test';
import assert from 'node:assert/strict';
import {getClaim} from '../../src/claims.mjs';
test('reject a prefix owner',()=>assert.equal(getClaim([{id:'c',ownerId:'user-42'}],'user-4','c'),null));
