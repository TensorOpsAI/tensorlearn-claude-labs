# Claude workshop code-lab templates

Public fictional training exercises owned by TensorOps. Use these starters with
TensorLearn's existing GitHub PR submission and grader App flow. No customer
records, credentials, invitations or workshop memberships are included.

**Grading model:** AI workloads use each learner’s own local Claude login. GitHub
never receives an AI credential. Preflight and bug fixing have independent
functional graders. The other labs submit `assessment.json`: a local Claude
judgment with frozen source hashes, exact quotations and yes/no rubric answers.
GitHub validates that contract and computes the score. Skills, evals and incident
labs additionally run independent candidate-code checks in an isolated worker.

Local AI reports and traces are learner-controlled. They do not prove human
authorship, model identity or that GitHub observed an AI session. Live Claude
rehearsals are deferred; configuration, boundary and deterministic checks are
recorded in the pinned grader’s `VALIDATION.md`.

| Exercise | Time | Grading |
| --- | ---: | --- |
| [Preflight: 1 + 1](exercises/preflight) | 5–10 min | Independent arithmetic check |
| [Write the intent](exercises/intent) | 25 min | Local AI report; read-only coach |
| [Fix the bug and prove it](exercises/bug-fix) | 25 min | Independent function and regression tests |
| [Stop the recurring regressions](exercises/recurring-regressions) | 30 min | Local AI report + local fresh-session rehearsal |
| [Build a scoped agent team](exercises/subagents) | 35 min | Local AI report + scoped local Agent rehearsal |
| [Protect the file](exercises/hooks) | 30 min | Local AI report + isolated local hook probes |
| [Make spec and plan traceable](exercises/spec-plan) | 30 min | Local AI report with source evidence |
| [Build a reliable skill](exercises/skills) | 30 min | Local AI report + 19 independent checker cases |
| [Write a regression eval](exercises/evals) | 30 min | Local AI report + 13 independent observation cases |
| [Review without author bias](exercises/review) | 25 min | Local AI report of reviewer policy |
| [Route models and compress context](exercises/model-routing) | 35 min | Local AI report + bounded local stage runner |
| [Release safely](exercises/release) | 35 min | Local AI report + fictional staging rehearsal |
| [Turn an incident into an improvement](exercises/incident) | 40 min | Local AI report + 27 independent detector/eval cases |

For pure report labs, rubric points total 100; published critical traps cap a score
at 25. Skills/evals/incident combine 50% report points with 50% independent case
success; critical failures cap the combined score at 25. Bug-fix caps at 25 for
broken ownership or authorized retrieval, and at 70 without a failing-original,
passing-candidate regression. All grader arithmetic is public and pinned.

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

The template API stores immutable published versions and copies prepared content
into a selected organization. Instructor import bundles carry full starter/grader
pins. A public GitHub template is distinct from its saved TensorLearn library
record; publication receipts identify the saved template and version.

## Boundaries

Candidate code, submitted hooks and tests must run in the instructor's disposable
no-network worker, without model/provider/GitHub credentials. Public reusable
workflows do not inherit upstream secrets. AI assessment runs locally through the learner’s existing Claude login. No
instructor AI gateway or provider secret in a student fork is required.
