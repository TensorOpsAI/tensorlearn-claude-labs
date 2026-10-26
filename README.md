# Claude workshop code-lab templates

Public fictional training exercises owned by TensorOps. Use these starters with
TensorLearn's existing GitHub PR submission and grader App flow. No customer
records, credentials, invitations or workshop memberships are included.

**Release status:** preflight and bug-fix have deterministic graders. The other
eleven starter packages are drafts; their full assessments are not yet released.
They can be inspected and practiced locally, but must not be presented as fully
graded TensorLearn labs. See each exercise README and the pinned grader's
`VALIDATION.md` for the exact scope.

| Exercise | Time | Official assessment |
| --- | ---: | --- |
| [Preflight: 1 + 1](exercises/preflight) | 5–10 min | Deterministic grader |
| [Write the intent](exercises/intent) | 25 min | Draft; semantic evaluator pending |
| [Fix the bug and prove it](exercises/bug-fix) | 25 min | Deterministic functional + regression grader |
| [Stop the recurring regressions](exercises/recurring-regressions) | 30 min | Draft; fresh-session replay pending |
| [Build a scoped agent team](exercises/subagents) | 35 min | Draft; observed agent replay pending |
| [Protect the file](exercises/hooks) | 30 min | Draft; controlled hook replay pending |
| [Make spec and plan traceable](exercises/spec-plan) | 30 min | Draft; semantic assessment pending |
| [Build a reliable skill](exercises/skills) | 30 min | Draft; activation replay pending |
| [Write a regression eval](exercises/evals) | 30 min | Draft; independent variant assessment pending |
| [Review without author bias](exercises/review) | 25 min | Draft; blind review replay pending |
| [Route models and compress context](exercises/model-routing) | 35 min | Draft; metered model gateway pending |
| [Release safely](exercises/release) | 35 min | Draft; staging service/replay pending |
| [Turn an incident into an improvement](exercises/incident) | 40 min | Draft; complete assessment pending |

## Student setup

1. Fork this repository into your own GitHub account. TensorLearn's self-service
   connection recognizes a fork of the instructor-selected starter.
2. Clone the fork and create a solution branch. Keep `main` at the pinned starter;
   do not merge exercise solutions into it.
3. Open the assigned `exercises/<key>/README.md` and follow its task.
4. Use the instructor-provided pinned authoring runtime from
   [tensorlearn-claude-graders](https://github.com/TensorOpsAI/tensorlearn-claude-graders),
   installed outside this checkout. Your instructor supplies the approved model
   and worker configuration. Do not paste API tokens into repository files.
5. Run the permitted local practice checks. They are advisory, not official scores.
6. Finish authoring. In a separate submission phase, explicitly ask Claude to
   commit/push the intended files and submit that exact PR head using TensorLearn.
   The PR targets `main` **inside your fork**, not this upstream repository.
7. Verify the saved result in TensorLearn; a green GitHub check alone is not an
   official saved result. A changed answer requires a new explicit submission.

The restricted launcher preserves ordinary project guidance and disables automatic
memory. For the intent exercise it has no writing capability; use your own editor.
For other exercises its scoped file tool controls permitted writes. It never
provides arbitrary shell access. Local restrictions are not proof of authorship.

## Instructor reuse

GitHub's **Use this template** creates an independent content copy; **Fork** is the
default learner flow supported by TensorLearn's self-service repository verifier.
An independent copy may need explicit facilitator repository approval.

Select and retain full starter and grader commit pins when preparing an organization
lab. Copy only the exercise definition and facilitator notes; create fresh sessions,
enrollments and attempts. Keep the frozen pinned workflows unchanged.

The current TensorLearn HTTP API supports creating a blank organization code lab
and adding definitions, but does not expose platform code-lab template publication
or native template copying. Instructor import bundles are prepared separately;
this repository is not proof of a saved TensorLearn library record.

## Boundaries

Candidate code, submitted hooks and tests must run in the instructor's disposable
no-network worker, without model/provider/GitHub credentials. Public reusable
workflows do not inherit upstream secrets. The future AI assessments require an
instructor-controlled grading service, not a secret added to each student fork.
