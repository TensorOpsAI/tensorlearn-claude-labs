# Fix the bug and prove it

A claims-status helper works for the developer account but exposes another user’s claim in one edge case. The existing tests are green.

## Task

1. Read `docs/contract.md` and reproduce the incident.
2. Add a regression test under `tests/student/` using Node’s test runner.
3. Run the same test on the pinned original starter and confirm it fails for the intended reason.
4. Fix `src/claims.mjs`, rerun your regression and the baseline, then submit both.

## Working rules

Edit only `src/claims.mjs` and `tests/student/**`. No dependencies, workflow edits, skipped assertions or test-runner replacements. The restricted authoring profile exposes scoped patching and named test operations. Candidate tests run in a separate credential-free worker.

## Acceptance

- Only an exact authorized owner receives a claim.
- Whitespace is normalized consistently and malformed IDs cannot match.
- The student regression fails on the original and passes on the fix.
- Missing records return null; the input list and records remain unchanged.

## Run and submit

1. Open this exercise directory as the working directory. Use the instructor's pinned launcher from the separate grader release; do not copy it into your fork.
2. Read the task and supplied inputs. Run only the practice checks exposed for this exercise. A local result is practice feedback, not an official score.
3. Finish authoring, inspect your diff, then explicitly ask Claude to commit and push the selected changes with your normal GitHub authorization.
4. Use the TensorLearn connector to submit the exact PR head inside your own fork. Keep the PR open; do not target or merge into the upstream starter.
5. Check the saved TensorLearn result separately from GitHub status.

Release status: the deterministic grader independently checks function outputs and runs the same student tests on original and submitted source. It does not prove authorship or when tests were written. Confirm the saved TensorLearn result during learner rehearsal.
