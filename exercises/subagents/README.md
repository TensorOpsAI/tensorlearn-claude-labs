# Give subagents the right context

A notification feature spans a service and a portal. Provider constraints, UI rules and old advice live in separate documents. Broad prompts repeatedly lose a requirement between research and implementation.

## Task

1. Read the task and role contracts.
2. Write prompts for researcher, implementer and verifier in `agents/`. The instructor selects models and tools.
3. Run research and produce `handoff.json` with source citations, decisions and unresolved items.
4. Implement from the handoff using the restricted implementation role.
5. Run a blind verifier with the approved requirements and diff, resolve its findings and submit.

## Working rules

The coordinator cannot implement. Each role receives only its assigned fixture pack and approved tools. Researcher and verifier cannot write source. Candidate role files supply prompts and context requests, not authority to select arbitrary models or tools. Model overrides are rejected by the instructor runtime.

## Acceptance targets

- Role instructions separate research, implementation and blind verification; rehearse all three locally and report which actually ran.
- The handoff preserves current provider and privacy constraints with citations.
- The implementation uses the handoff and passes independent tests.
- The verifier identifies the planted defect without the author narrative.

## Local assessment and submission

1. Finish the exercise artifacts and run `subagents.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/subagents \
  --exercise subagents \
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
