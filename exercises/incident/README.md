# Turn an incident into a lasting improvement

Claims latency drifts upward. The monitoring agent overreacts to noise and misses sustained problems. A quick fix restored service once but left no regression evaluation, so the issue returned.

## Task

1. Implement the deterministic detector against the published numeric contract.
2. Map admitted bands to the permitted response capabilities.
3. Run noise, boundary, missing-data and sustained-drift fixtures.
4. Use the selected diagnosis profile to gather evidence and write the next intent.
5. Add an eval that rejects the previous defect; repeat an event to verify deduplication.

## Working rules

Only named detector, response policy, intent and eval paths may change. Claude cannot choose a more privileged band or change event identity. The runtime computes the band outside Claude and checks event/band/deduplication state server-side. There are no deployment tools.

## Acceptance targets

- Numeric boundaries, zero variance and insufficient data behave as specified.
- The trusted controller chooses the band before Claude starts.
- Actions stay within the admitted band and duplicate events have no repeated effects.
- The next intent cites evidence and its eval detects the prior regression.
- No profile can deploy directly.

## Local assessment and submission

1. Finish the exercise artifacts and run `incident.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/incident \
  --exercise incident \
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
