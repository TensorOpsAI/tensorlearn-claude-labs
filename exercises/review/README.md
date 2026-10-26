# Review without the author’s bias

A PR description says all requirements and performance were verified. The patch removes caching, logs whole responses and changes approved behavior. Generated-file style changes distract from the defects.

## Task

1. Read the approved intent, spec and plan.
2. Write `REVIEW.md` and the reviewer’s instructions.
3. Run a blind review using only requirements and the patch.
4. Repeat with the author narrative and compare supported findings.
5. Test the clean patch; reduce unsupported findings and minor comments.

## Working rules

Edit only REVIEW.md and agents/reviewer.json. Assessed reviewer processes have no shell or write tools. The instructor MCP exposes only immutable requirements, diff and file reads. Candidate reports are not accepted as evidence that a review actually ran.

## Acceptance targets

- Findings cite changed paths/lines, evidence and violated requirements.
- Material privacy, release-gate and caching defects are found.
- The clean patch does not receive invented defects.
- The reviewer remains read-only and does not approve or merge.

## Local assessment and submission

1. Finish the exercise artifacts and run `review.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/review \
  --exercise review \
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
