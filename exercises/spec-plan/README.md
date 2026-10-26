# Make the spec and plan traceable

An approved notification intent is ready, but old design advice conflicts with current source and policy. The provider limits throughput and an existing portal route should be reused.

## Task

1. Read the approved intent, policy, current source and archived design.
2. Write numbered requirements and design decisions in `spec.md`.
3. Record unresolved decisions with owners.
4. Write implementation paths, dependency order, risks and verification in `plan.md`.
5. Link intent IDs to requirements, steps and tests; check that every named source path exists.

## Working rules

Only `spec.md` and `plan.md` may change. Claude can read and use scoped document patches plus fixed reference/mapping checks. No implementation, shell, arbitrary agents, dependency installation or invented approvals.

## Acceptance targets

- Each approved intent item maps to requirements, plan steps and tests.
- Current privacy and provider limits are preserved.
- The plan references real repository paths and does not depend on a nonexistent helper.
- Open recipient/channel choices retain explicit owners.
- Source remains unchanged.

## Local assessment and submission

1. Finish the exercise artifacts and run `spec-plan.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/spec-plan \
  --exercise spec-plan \
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
