# Preflight: submit 1 + 1

Before the workshop, confirm that your local workspace, GitHub PR and TensorLearn result can complete one round.

## Task

1. Calculate 1 + 1.
2. Ask Claude to put the numeric answer in `answer.json`.
3. Run `preflight.practice` and submit.

## Working rules

Change only `answer.json`. The authoring profile provides reading, a scoped patch operation and the practice check; it provides no general shell, native mutation tools or agents. No model judge is needed.

## Acceptance

- The answer is a JSON number equal to 2.
- Only answer.json changes.
- The selected PR head has a saved TensorLearn result.

## Run and submit

1. Open this exercise directory as the working directory. Use the instructor's pinned launcher from the separate grader release; do not copy it into your fork.
2. Read the task and supplied inputs. Run only the practice checks exposed for this exercise. A local result is practice feedback, not an official score.
3. Finish authoring, inspect your diff, then explicitly ask Claude to commit and push the selected changes with your normal GitHub authorization.
4. Use the TensorLearn connector to submit the exact PR head inside your own fork. Keep the PR open; do not target or merge into the upstream starter.
5. Check the saved TensorLearn result separately from GitHub status.

Release status: the pinned deterministic grader is implemented; no AI grading service is required. Confirm the saved TensorLearn result during learner rehearsal. A configured local session is not proof of unaided authorship.
