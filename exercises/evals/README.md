# Write an eval that catches regression

A change to project guidance removes caching from a live-status feature. Happy-path tests pass, but the old claims system exceeds its rate limit. Build a repeatable evaluation that catches the regression without rejecting valid refactors.

## Task

1. Read the observation contract and incident requirements.
2. Write an eval definition and implement assertions.
3. Run the good and broken references.
4. Add valid refactors and failure variants to your practice tests.
5. Explain which observable condition each assertion establishes.

## Working rules

Only `evals/**` and `tests/eval/**` may change. References are immutable. Candidate assertions have no provider, network or grading credentials and cannot emit an official aggregate score. The fixed test operation supplies bounded observations from instructor-controlled runs.

## Acceptance targets

- The good reference and equivalent valid refactor pass.
- Missing cache, rate-limit breach and payload logging are detected.
- Assertions inspect behavior rather than file names or fixture IDs.
- The eval includes repeatable input, requirement references and documented checks.

## Local assessment and submission

1. Finish the exercise artifacts and run `evals.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/evals \
  --exercise evals \
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
