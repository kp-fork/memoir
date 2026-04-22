---
type: examples
id: general-examples
name: General Classification Examples
domain: general
version: 1.1.0
description: Classification examples teaching the LLM the 3-level path pattern. Coding-agent scenarios lead; general-purpose examples retained for non-coding use.
---

# Classification Examples

Examples teach the classifier the pattern for categorizing content into 3-level paths.
Coding-agent examples lead within each category; general-purpose examples follow for
non-coding use cases.

## context

Heaviest-used L2 for coding agents — "what is this codebase, how do we run it, who owns what."

| Input | Path | Reasoning |
|-------|------|-----------|
| Python 3.10+, uses click / langchain / langgraph | context.project.stack | tech stack |
| Monorepo under src/memoir/, tests mirror the tree | context.project.architecture | repo layout |
| Lint before commit: make format && make lint && make test | context.project.standards | project standards |
| GitHub Actions CI runs lint/test/security/docs | context.project.cicd | CI/CD |
| Ships as PyPI package memoir-ai + Docker via ./docker.sh | context.project.deploy | deploy targets |
| Store backend is ProllyTree on git with structural sharing | context.project.backend | backend choice |
| CLI entry: memoir = memoir.cli.main:main | context.project.entrypoints | entry points |
| Test data must live under /tmp/, never in the repo | context.project.standards | hard rule |
| mypy non-blocking due to ~237 pre-existing type errors | context.project.debt | known debt |
| Scope: local-dev first, shared stores on roadmap | context.project.scope | project scope |
| MVP 80% complete, feature-freeze next Friday | context.project.status | current status |
| Main branch protected, squash-merge required | context.project.repository | repo rules |
| We follow trunk-based development | context.project.branching | branching model |
| Auth uses JWT with 15-min access + 30-day refresh | context.project.authentication | auth scheme |
| API is hosted on AWS Lambda behind API Gateway | context.project.infrastructure | infra shape |
| PostgreSQL is the primary datastore | context.project.database | DB choice |
| Redis for session cache + rate limiting | context.project.caching | cache layer |
| Datadog for metrics, Sentry for errors | context.project.monitoring | observability |
| SLA is 99.9% uptime during business hours | context.project.sla | SLA |
| Team uses Scrum with 2-week sprints | context.team.methodology | team process |
| Alice owns auth, Bob owns storage, Carla owns UI | context.team.roles | ownership map |
| Async PR reviews; ping in Slack after 4h | context.team.reviews | review norm |
| Standup at 10am PST daily | context.team.meetings | schedule |
| Docs live in docs/ (mkdocs), ADRs in docs/decisions/ | context.team.documentation | doc platform |
| We use Linear for issues, not GitHub Projects | context.team.communication | tool choice |

## workflow

Process rules agents must follow. Distinguish from `preferences` (taste) and `routine` (habit).

| Input | Path | Reasoning |
|-------|------|-----------|
| Lint and tests must pass before every commit | workflow.coding.gates | commit gate |
| Never run git push unless user explicitly asks | workflow.coding.push | push rule |
| Feature branches off main, squash-merge back | workflow.coding.branching | branch strategy |
| Two approvals required for production code | workflow.coding.approvals | approval rule |
| Conventional commits format for every message | workflow.coding.commits | commit style |
| PRs reviewed within 24 hours | workflow.coding.review | SLO |
| mypy runs in non-blocking mode | workflow.coding.typecheck | type gate |
| Always add tests with new code | workflow.coding.testing | test rule |
| Write docs for all public APIs | workflow.coding.documentation | doc rule |
| Squash commits before merging to main | workflow.coding.merging | merge rule |
| Auto-format on save with black + prettier | workflow.automation.formatting | auto-format |
| Run ruff in pre-commit hook | workflow.automation.linting | auto-lint |
| Pre-push hook runs fast test subset | workflow.automation.testing | auto-test |
| Auto-generate changelog from PR titles | workflow.automation.changelog | changelog |
| Sync GitHub issues to Linear nightly | workflow.automation.sync | integration |
| Slack alert on build failure | workflow.automation.notifications | alerting |
| Deploy to staging first, then prod after smoke tests | workflow.devops.deployment | deploy rule |
| Semantic versioning, signed git tags | workflow.devops.versioning | release policy |
| Rotate secrets every 90 days | workflow.devops.secrets | secrets rule |
| Run security scans in CI | workflow.devops.security | scan rule |
| Auto-deploy on merge to main (dev env) | workflow.devops.releases | release trigger |
| Smoke tests after every prod deploy | workflow.devops.validation | post-deploy |
| Tag releases with v<major>.<minor>.<patch> | workflow.devops.tagging | tag format |
| Nightly integration test run against staging | workflow.automation.testing | nightly |

## preferences

Taste/style rather than hard rules. Coding-tool preferences lead.

| Input | Path | Reasoning |
|-------|------|-----------|
| I prefer TypeScript strict mode everywhere | preferences.coding.languages | language preference |
| pytest over unittest for Python tests | preferences.coding.testing | test framework |
| Functional style for Go, OOP for Java | preferences.coding.paradigms | paradigm |
| Trunk-based development over GitFlow | preferences.coding.workflow | workflow preference |
| REST over GraphQL unless there's a reason | preferences.coding.apis | API style |
| Monorepos with workspaces over multi-repo | preferences.coding.architecture | repo model |
| Conventional commits format | preferences.coding.commits | commit style |
| TDD when the domain is unclear, otherwise after | preferences.coding.methodology | dev methodology |
| async/await over raw callbacks / promises | preferences.coding.patterns | patterns |
| VS Code with Vim keybindings | preferences.tools.editors | editor |
| black + ruff for Python formatting | preferences.tools.formatting | formatter |
| tmux for terminal multiplexing | preferences.tools.terminal | terminal |
| PostgreSQL over MySQL, SQLite for tests | preferences.tools.databases | database |
| Docker for local dev, Kubernetes for prod | preferences.tools.infrastructure | infra tooling |
| Homebrew for system packages, uv for Python | preferences.tools.packages | package manager |
| Zsh with oh-my-zsh and p10k prompt | preferences.tools.shell | shell |
| Make for builds, not bespoke scripts | preferences.tools.build | build tool |
| Terse agent output; no explanations unless asked | preferences.tools.output | agent output |
| Use Claude for code review, GPT for brainstorm | preferences.ai.models | model routing |
| Chain Haiku → Sonnet → Opus by task complexity | preferences.ai.routing | complexity routing |
| Structure prompts as system + tools + task | preferences.ai.prompting | prompt style |
| JSON output from LLMs when downstream parses | preferences.ai.output | output format |
| Prompt caching on for static context | preferences.ai.performance | caching |
| LangChain for agents, LangGraph for workflows | preferences.ai.frameworks | AI framework |
| I work best from a quiet home office | preferences.work.environment | work env |
| I test in-place before landing anything | preferences.work.testing | testing habit |
| I love playing guitar | preferences.hobbies.music | hobby |
| My favorite food is sushi | preferences.food.cuisine | food |

## knowledge

Non-obvious technical knowledge. Distinct from `context` (facts about the project) and `topics` (opinion).

| Input | Path | Reasoning |
|-------|------|-----------|
| ProllyTree uses merkle-based structural sharing; O(log n) diffs | knowledge.technical.storage | storage internals |
| code_branch_exists() checks only local refs; remotes are intentionally ignored | knowledge.technical.branching | subtle behavior |
| The concurrency check warns only on cross-branch shared-store | knowledge.technical.concurrency | safety invariant |
| memoir-onboard writes ~25 keys per cold pass (burst write risk) | knowledge.technical.onboarding | performance |
| Stop hook runs one LLM pass over the transcript for auto-capture | knowledge.technical.automation | hook behavior |
| SessionStart injects codebase:onboard + namespaces summary | knowledge.technical.session | startup flow |
| Prolly adapter wraps a single VersionedKvStore; no worktree support | knowledge.technical.store | store invariant |
| Classifier is 3-tier: pattern → LLM → dynamic expansion | knowledge.technical.classifier | pipeline |
| Prompt caching gives ~90% token savings on Anthropic models | knowledge.technical.performance | perf fact |
| The auth service retries 429s with exp backoff up to 60s | knowledge.technical.retries | retry policy |
| Postgres VACUUM blocks under heavy write load during index rebuild | knowledge.technical.database | gotcha |
| The rate limiter silently drops above 1000 req/s | knowledge.technical.ratelimit | undocumented limit |
| ADR-012: we chose eventual consistency for session state | knowledge.decisions.architecture | architectural decision |
| RFC-007: auth was migrated off-session cookies for compliance | knowledge.decisions.security | decision rationale |

## debugging

Reusable investigation toolkit. Not project-specific bugs (those go in `experience.coding.incidents`).

| Input | Path | Reasoning |
|-------|------|-----------|
| Grep structured logs before adding more logging | debugging.techniques.logs | log analysis |
| Reproduce locally with the smallest possible repro | debugging.practices.reproduction | repro |
| git bisect when a regression sits in history | debugging.techniques.bisection | bisect |
| py-spy for Python CPU hotspots | debugging.techniques.profiling | profiler |
| strace / dtrace for syscall-level visibility | debugging.techniques.tracing | tracing |
| Add temporary DEBUG logging around the suspect path | debugging.practices.instrumentation | instrumentation |
| Check the most recent commits touching the affected file | debugging.practices.investigation | recency check |
| breakpoint() / pdb for interactive inspection | debugging.techniques.breakpoints | interactive debug |
| tracemalloc / heaptrack for memory leaks | debugging.techniques.memory | memory |
| DevTools Network tab for API round-trip issues | debugging.techniques.network | network |
| Binary-search the Node version to isolate engine bugs | debugging.techniques.bisection | version bisect |
| Diff the failing test's output against a known-good run | debugging.practices.comparison | diff strategy |
| Check for concurrency: run with single worker first | debugging.practices.isolation | narrow scope |
| Clear caches before re-running the failing test | debugging.practices.cleanslate | reset state |

## project

Current-state task management. Distinguish from `context.project.*` (facts about the project itself).

| Input | Path | Reasoning |
|-------|------|-----------|
| Sprint ends Friday, demo Monday | project.timeline.sprints | sprint cadence |
| v1.0 launch next month | project.timeline.milestones | milestone |
| MVP 80% complete, on track | project.status.progress | progress |
| Blocked on auth team's API sign-off | project.status.blockers | blocker |
| Tech debt: type annotations, CLI types, SDK tests | project.backlog.technical | tech debt |
| Feature requests: batch embedding, streaming recall | project.backlog.features | feature backlog |
| Known bugs: concurrency warning on worktrees | project.backlog.bugs | bug backlog |
| Performance backlog: reduce onboard cold-path latency | project.backlog.optimization | perf backlog |
| Top priority this week: fix staleness detector | project.priorities.urgent | priority |
| Security audit required before GA | project.requirements.security | requirement |
| SOC2 compliance check before Q3 | project.requirements.compliance | compliance |
| Shipping cryptographic proofs in v1 | project.requirements.features | feature requirement |

## experience

Past events that shape future decisions. Not reusable techniques (those go in `debugging`) or current-state facts (those go in `project.status.*`).

| Input | Path | Reasoning |
|-------|------|-----------|
| Debugged a 3-day race condition in the scheduler | experience.coding.debugging | debug story |
| Migrated from SQLite to Postgres last quarter | experience.projects.migrations | migration |
| Led the Python 3.7 → 3.10 upgrade across services | experience.projects.migrations | upgrade |
| 2024 outage root cause: DNS failover misconfig | experience.incidents.postmortem | post-mortem |
| Added feature flags after the rollback incident | experience.coding.incidents | incident fix |
| Refactored auth after the token leak | experience.coding.refactors | refactor |
| Shipped the billing rewrite Q1 2025 | experience.projects.launches | launch |
| Mentored three junior engineers through TDD | experience.professional.mentoring | mentoring |
| Spoke at PyCon about async patterns | experience.professional.speaking | talk |
| Wrote the API docs for v0.3 | experience.projects.documentation | docs work |
| Designed the payment-gateway integration | experience.projects.design | design work |
| Lesson: never ship migrations on Friday | experience.lessons.operations | ops lesson |
| Lesson: integration tests must hit a real DB | experience.lessons.testing | testing lesson |

## entity

Specific named mentions. Code entities dominate for coding agents.

| Input | Path | Reasoning |
|-------|------|-----------|
| src/memoir/cli/main.py is the CLI entry | entity.code.files | file |
| The memoir-ai package on PyPI | entity.code.repositories | repo |
| ProllyTreeStore class in prolly_adapter.py | entity.code.classes | class |
| classify_async() on IntelligentClassifier | entity.code.functions | function |
| The /api/store endpoint on the UI server | entity.code.endpoints | endpoint |
| The User model in models.py | entity.code.models | model |
| UserService handles auth | entity.code.services | service |
| utils.py module exports shared helpers | entity.code.modules | module |
| CI failed at the lint step | entity.events.failures | CI failure |
| Deploy scheduled for 5pm Friday | entity.events.deployments | deploy event |
| Architecture review meeting tomorrow 3pm | entity.events.meetings | meeting |
| Alice from the platform team | entity.people.colleagues | colleague |
| I visited the Tokyo office last spring | entity.places.cities | place |
| I work at Acme Corp | entity.organizations.companies | org |

## settings

Local environment configuration.

| Input | Path | Reasoning |
|-------|------|-----------|
| Editor tab size 4 spaces, no tabs | settings.editor.formatting | editor format |
| Vim keybindings active in VS Code | settings.editor.keybindings | keybinds |
| Auto-save every 1 second | settings.editor.behavior | auto-save |
| Default git branch is main, force-push disabled | settings.git.defaults | git default |
| SSH only for git remotes; HTTPS blocked | settings.git.authentication | git auth |
| Zsh with p10k prompt showing git state | settings.shell.prompt | shell prompt |
| Hardware 2FA key required for all logins | settings.security.authentication | 2FA |
| Log level DEBUG in dev, INFO in staging, WARN in prod | settings.system.logging | log level |
| Request timeout 30s, connect timeout 5s | settings.system.timeouts | timeouts |
| Terminal font JetBrains Mono 14pt | settings.display.fonts | font |
| Dark theme everywhere | settings.display.theme | theme |

## system

Live runtime/infrastructure facts. Distinguish from `context.project.infrastructure` (intent) — `system` is reality.

| Input | Path | Reasoning |
|-------|------|-----------|
| Prod runs in AWS us-east-1 across 3 AZs | system.cloud.region | region |
| 8 vCPU / 32GB RAM per Lambda container | system.resources.compute | compute |
| 64GB RAM headroom per DB replica | system.resources.memory | memory |
| Storage on S3 with versioning enabled | system.storage.provider | storage |
| RDS Postgres 15 multi-AZ, read replicas in us-west-2 | system.database.provider | database |
| Redis cluster: 3 primary + 3 replica, 16GB each | system.cache.configuration | cache config |
| ALB → ECS Fargate, WAF in front | system.networking.loadbalancer | LB |
| VPC peering to analytics + ops accounts | system.networking.connectivity | network |
| Logs → CloudWatch → S3 archive after 30d | system.observability.logging | logging pipeline |
| Metrics in Prometheus, alerts → PagerDuty | system.observability.metrics | metrics |
| Distributed tracing via OpenTelemetry → Jaeger | system.observability.tracing | tracing |

## routine

Habits (recurring by choice/rhythm), distinct from `workflow` (rules by decree).

| Input | Path | Reasoning |
|-------|------|-----------|
| I write failing tests first, then implement | routine.coding.testing | test-first habit |
| I commit every working state, squash before merge | routine.coding.commits | commit habit |
| Review PRs in the morning before new work | routine.coding.reviews | review rhythm |
| Run the full test suite every hour of focused work | routine.coding.testing | test cadence |
| Daily standup 10am PST | routine.team.standups | standup |
| Sprint retro every other Friday | routine.team.retrospectives | retro |
| Weekly planning session on Sunday evening | routine.weekly.planning | planning |
| Take a break every hour (20-20-20) | routine.daily.breaks | break |

## communication

Collaboration practices, not casual chat logistics.

| Input | Path | Reasoning |
|-------|------|-----------|
| PR reviews happen async in GitHub | communication.practices.reviews | review style |
| Major changes require an RFC in the wiki | communication.practices.proposals | RFC |
| ADRs live in docs/decisions/ | communication.practices.decisions | ADR |
| Standups text-only in the #standup Slack channel | communication.practices.standups | standup mode |
| Design discussions in Slack #arch | communication.tools.chat | chat channel |
| Issue tracking in Linear, not GitHub Projects | communication.tools.issues | issue tool |
| Figma for design specs | communication.tools.design | design tool |
| Notion for long-form docs | communication.tools.docs | doc tool |

## profile

User identity as it informs agent behavior. Personal fields `[general]`.

| Input | Path | Reasoning |
|-------|------|-----------|
| I'm a senior backend engineer at Acme | profile.professional.occupation | role |
| I mainly write Go and TypeScript | profile.professional.skills | primary stacks |
| I specialize in distributed systems | profile.professional.specialization | focus |
| 10 years of industry experience | profile.professional.experience | seniority |
| I'm in the PST timezone | profile.personal.location | timezone |
| My name is Sarah | profile.personal.identity | identity |
| I graduated from Stanford CS | profile.professional.education | education |

## goals

Personal career/learning intentions. For project-scoped goals, prefer `context.project.goals`.

| Input | Path | Reasoning |
|-------|------|-----------|
| I want to become a staff engineer | goals.career.advancement | career |
| Learning Rust for systems work | goals.education.languages | language goal |
| AWS Solutions Architect cert by end of year | goals.education.certifications | cert goal |
| I plan to contribute to one OSS project per quarter | goals.personal.opensource | OSS goal |
| Aim to give a talk at a major conf next year | goals.career.speaking | speaking |
| Save for a house downpayment | goals.financial.savings | financial |

## topics

Opinion/stance on debates. De-emphasized for agents — prefer `workflow` / `context` / `knowledge` for actionable facts.

| Input | Path | Reasoning |
|-------|------|-----------|
| Event sourcing has real trade-offs at scale | topics.architecture.patterns | pattern stance |
| Microservices aren't free; monolith-first is fine | topics.architecture.patterns | architecture stance |
| TypeScript improves refactor safety meaningfully | topics.coding.languages | language stance |
| GitOps simplifies prod operations | topics.devops.practices | practice stance |
| Observability is not optional for distributed systems | topics.devops.observability | stance |

## learning

Education resources being consumed. `[general]`.

| Input | Path | Reasoning |
|-------|------|-----------|
| Reading "Designing Data-Intensive Applications" | learning.books.technical | tech book |
| Taking the Kubernetes CKA course | learning.courses.programming | course |
| Watching system design videos on YouTube | learning.videos.technical | video |
| Contributing to langchain weekly | learning.practice.opensource | OSS practice |

## relationships

People connections. De-emphasized for coding agents — team ownership facts belong in `context.team.roles`.

| Input | Path | Reasoning |
|-------|------|-----------|
| Alice is my manager | relationships.professional.manager | manager |
| Bob mentored me through the auth rewrite | relationships.professional.mentors | mentor |
| My sister lives in NYC | relationships.family.siblings | family |
