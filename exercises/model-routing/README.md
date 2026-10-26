# Route models and compress context

Every task receives the full repository history and the most expensive model. Costs grow while key constraints still disappear from the handoff.

## Task

1. Read the task pack and routing contract.
2. Choose stage policies using instructor-approved model aliases.
3. Write compact handoffs that preserve sources, constraints and uncertainty.
4. Run the practice pack through the controlled stage broker.
5. Inspect observed quality, model IDs, context size, retries and usage; revise.

## Working rules

Edit routing.json and handoffs/** only. The instructor supplies actual model IDs, rates and allowance outside the repository. Candidate routing cannot call providers directly or override child models. The broker admits bounded calls and records real usage; client estimates alone are not a hard cap.

## Acceptance targets

- Correctness meets the published threshold before efficiency credit.
- Routine work stays on an appropriate approved stage and ambiguous work escalates with a reason.
- Current constraints survive context compression.
- Calls, retries and context/output limits stay within instructor configuration.

## Local assessment and submission

1. Finish the exercise artifacts and run `model-routing.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/model-routing \
  --exercise model-routing \
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
