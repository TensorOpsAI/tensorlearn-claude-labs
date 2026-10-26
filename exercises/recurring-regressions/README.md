# Stop the recurring regressions

Claude keeps reintroducing an old customer-code format and removing a cache, even after those changes were corrected. Several tasks appeared fixed, but the next session repeats the mistakes. Find and fix the cause, then demonstrate that a new session completes the next task correctly.

## Task

1. Read the incident and current requirements. Reproduce the reported behavior.
2. Compare the recurring changes with source, design and tests.
3. Find why corrections fail to survive a new session. Use Claude to investigate and make a targeted fix.
4. Write `diagnosis.md` with the cause, contradictory evidence, correction and verification.
5. Start a fresh session and complete the next task without repeating the earlier conversation.

## Working rules

Ordinary source, documentation and student-test edits are allowed. Instructor fixtures, workflows, release metadata and the runtime stay protected. The authoring profile provides scoped patching and fixed tests. Fresh-session checks start new processes; carrying the earlier conversation forward does not count.

## Acceptance targets

- A new session preserves the current customer-code contract and required caching.
- The diagnosis explains the recurring cause and cites repository evidence.
- The correction preserves useful project guidance and avoids a blanket deletion.
- Authorization and the full suite remain correct.

## Local assessment and submission

1. Finish the exercise artifacts and run `recurring-regressions.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/recurring-regressions \
  --exercise recurring-regressions \
  --configuration /path/to/instructor-config.json \
  --model FULL_MODEL_ID \
  --grader-revision FULL_PUBLISHED_GRADER_SHA
```

3. The assessor reads the submitted artifacts and the pinned rubric. It writes `assessment.json` containing criterion answers, exact quotations and source hashes; it does not write a numeric score. Use the instructor's approved model configuration. No instructor AI credential goes into your fork or GitHub workflow.
4. Read the feedback and improve the work. After any source change, regenerate the assessment so its quotations and hashes describe the final files. `assessment.json` is an additional permitted submission file; it is created after authoring.
5. Inspect the diff, then explicitly ask Claude to commit and push the selected changes with your normal GitHub authorization. Submit that exact PR head through the TensorLearn connector inside your own fork. Keep the PR open; do not target or merge into the upstream starter.
6. Verify the saved TensorLearn result separately from the GitHub status.

GitHub uses no AI tokens. It checks the pinned grading workflow, allowed changes, source hashes, criterion structure and quotation matches, then applies the published scoring formula to the local answers. Semantic judgment happens in local Claude and is not deterministic. A report can be edited; its hashes and quotations do not authenticate the model or prove who wrote the work.

For this release, assessment covers submitted artifacts and policies. Fresh-session behavior, agent invocations, hook effects, skill activation, model usage, release actions and incident-controller behavior are not independently certified by the GitHub report check. Rehearse the relevant acceptance targets locally and distinguish observations from proposals.
