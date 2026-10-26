# Build a skill that activates reliably

Developers apply privacy rules when explicitly asked, but omit them when asked to make a notification more useful. The policy exists; Claude does not reliably apply it.

## Task

1. Read the authoritative message policy.
2. Write the skill’s activation description, policy lookup, steps and output contract.
3. Implement the backing message check.
4. Test direct, paraphrased and misleading requests in fresh sessions.
5. Verify that safe useful messages still succeed.

## Working rules

Edit only the designated skill assets and checker. The replay runtime stages a sanitized skill-only plugin; candidate hooks, extra agents and arbitrary plugins are rejected. Checker code executes outside the credential-bearing model client. Prompts cannot grant new tools.

## Acceptance targets

- Direct and indirect notification requests activate the policy.
- Forbidden clinical content is rejected without blocking neutral messages.
- The checker is executable and matches the policy.
- A fresh session produces useful privacy-preserving output.

## Local assessment and submission

1. Finish the exercise artifacts and run `skills.practice` through the pinned launcher. Visible practice checks help you improve the work; they are not the official score.
2. End the authoring session. Use the separate instructor-provided grader checkout to run the local assessor with your own Claude login:

```sh
python3 /path/to/grader/runtime/assess.py \
  --workspace /path/to/your/fork/exercises/skills \
  --exercise skills \
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
