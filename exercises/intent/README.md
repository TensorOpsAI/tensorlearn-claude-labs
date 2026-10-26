# Write the intent

A fictional clinic wants fewer calls asking whether results are ready. The approved PRD, recent notes and a superseded request disagree on scope and recipients.

## Task

1. Read every file in `inputs/` and identify which decisions are approved, superseded or still open.
2. Ask the read-only coach clarification questions.
3. Personally write `intent.md` in your editor. Include purpose, scope, exclusions, success conditions and unresolved decisions.
4. Request a read-only review, revise your own draft, then submit.

## Working rules

Only `intent.md` may change. Claude can read and ask questions but has no write, shell, agent or mutation-MCP tools. Write the draft yourself. Coaching prompts prohibit replacement prose; the final file alone cannot prove human authorship. Clinical-detail disclosure or bypassing doctor review is a critical error: the announced rubric caps the result at 25/100.

## Acceptance targets

- The approved outcome and review-before-notification rule are explicit.
- Messages expose no clinical details; unauthorized recipients are not silently approved.
- Portal redesign and other superseded scope are excluded.
- Channel choice and referring-doctor notifications remain open with owners.
- The intent gives observable success conditions without inventing a target or approval.

## Local assessment and submission

1. Finish the exercise artifacts and run `intent.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/intent \
  --exercise intent \
  --configuration /path/to/instructor-config.json \
  --model FULL_MODEL_ID \
  --grader-revision FULL_PUBLISHED_GRADER_SHA
```

3. The assessor reads the submitted artifacts and the pinned rubric. It writes `assessment.json` containing criterion answers, exact quotations and source hashes; it does not write a numeric score. Use the instructor's approved model configuration. No instructor AI credential goes into your fork or GitHub workflow.
4. Read the feedback and improve the work. After any source change, regenerate the assessment so its quotations and hashes describe the final files. `assessment.json` is an additional permitted submission file; it is created after authoring. The intent-writing session itself remains read-only for Claude.
5. Inspect the diff, then explicitly ask Claude to commit and push the selected changes with your normal GitHub authorization. Submit that exact PR head through the TensorLearn connector inside your own fork. Keep the PR open; do not target or merge into the upstream starter.
6. Verify the saved TensorLearn result separately from the GitHub status.

GitHub uses no AI tokens. It checks the pinned grading workflow, allowed changes, source hashes, criterion structure and quotation matches, then applies the published scoring formula to the local answers. Semantic judgment happens in local Claude and is not deterministic. A report can be edited; its hashes and quotations do not authenticate the model or prove who wrote the work.

For this release, assessment covers submitted artifacts and policies. Fresh-session behavior, agent invocations, hook effects, skill activation, model usage, release actions and incident-controller behavior are not independently certified by the GitHub report check. Rehearse the relevant acceptance targets locally and distinguish observations from proposals.
