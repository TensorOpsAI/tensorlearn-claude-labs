import { readFile } from 'node:fs/promises';
const value = JSON.parse(await readFile(new URL('./answer.json', import.meta.url), 'utf8'));
if (Object.keys(value).length !== 1 || typeof value.answer !== 'number' || !Number.isFinite(value.answer) || value.answer !== 2) {
 console.error('Practice: set answer to the numeric result of 1 + 1.'); process.exitCode = 1;
} else console.log('Practice passed. Submit your PR and verify TensorLearn separately.');
