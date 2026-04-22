---
type: preset
id: simplified-preset
name: Simplified Taxonomy Preset
domain: general
version: 1.1.0
taxonomy_version: simplified
description: A streamlined taxonomy of ~200 paths organized for coding-agent scenarios, with general-purpose categories retained but de-emphasized.
---

# Simplified Taxonomy Preset

A streamlined taxonomy of ~200 paths organized by category. Each path follows the
3-level pattern: `category.subcategory.type`. Primary audience is coding-agent
workflows — `context`, `workflow`, `preferences.coding.*`, `knowledge`, `debugging`
are deliberately the densest. General-purpose categories (profile, relationships,
learning, topics) are retained but de-emphasized.

## context

The "what is this codebase / how do we run it" bucket — heaviest-used for coding agents.

- project.stack
- project.architecture
- project.standards
- project.cicd
- project.deploy
- project.backend
- project.entrypoints
- project.repository
- project.branching
- project.infrastructure
- project.database
- project.caching
- project.authentication
- project.authorization
- project.monitoring
- project.orchestration
- project.sla
- project.scope
- project.status
- project.debt
- project.goals
- project.feature
- team.methodology
- team.roles
- team.meetings
- team.reviews
- team.timezone
- team.communication
- team.documentation
- team.standups

## workflow

Process rules agents must follow.

- coding.gates
- coding.push
- coding.branching
- coding.merging
- coding.commits
- coding.review
- coding.approvals
- coding.testing
- coding.typecheck
- coding.documentation
- automation.formatting
- automation.linting
- automation.testing
- automation.changelog
- automation.sync
- automation.notifications
- automation.backup
- automation.docs
- devops.deployment
- devops.releases
- devops.versioning
- devops.tagging
- devops.secrets
- devops.security
- devops.validation
- devops.monitoring

## preferences

Coding and tool preferences dominate; lifestyle preferences retained.

- coding.languages
- coding.frameworks
- coding.testing
- coding.paradigms
- coding.patterns
- coding.methodology
- coding.apis
- coding.architecture
- coding.commits
- coding.workflow
- tools.editors
- tools.formatting
- tools.terminal
- tools.shell
- tools.databases
- tools.infrastructure
- tools.packages
- tools.build
- tools.keybindings
- tools.testing
- tools.output
- ai.models
- ai.routing
- ai.prompting
- ai.output
- ai.performance
- ai.frameworks
- ai.assistants
- ai.interaction
- ai.capabilities
- work.environment
- work.schedule
- work.testing
- hobbies.music
- hobbies.sports
- hobbies.creative
- food.cuisine
- entertainment.books
- entertainment.movies

## knowledge

Non-obvious technical knowledge. Distinct from `context` (project facts) and `topics` (opinion).

- technical.storage
- technical.branching
- technical.concurrency
- technical.onboarding
- technical.automation
- technical.session
- technical.store
- technical.classifier
- technical.performance
- technical.retries
- technical.database
- technical.ratelimit
- technical.auth
- technical.caching
- technical.networking
- decisions.architecture
- decisions.security
- decisions.performance
- decisions.tooling

## debugging

Reusable investigation techniques; not project-specific bugs.

- techniques.logs
- techniques.breakpoints
- techniques.profiling
- techniques.tracing
- techniques.memory
- techniques.network
- techniques.bisection
- practices.reproduction
- practices.instrumentation
- practices.investigation
- practices.comparison
- practices.isolation
- practices.cleanslate

## project

Current-state task management (state, not intent).

- timeline.sprints
- timeline.milestones
- timeline.releases
- status.progress
- status.blockers
- status.risks
- priorities.urgent
- priorities.high
- priorities.deferred
- backlog.technical
- backlog.features
- backlog.bugs
- backlog.optimization
- requirements.security
- requirements.compliance
- requirements.features
- requirements.performance

## experience

Past events shaping future decisions.

- coding.debugging
- coding.incidents
- coding.refactors
- coding.features
- coding.optimization
- projects.migrations
- projects.launches
- projects.design
- projects.documentation
- projects.security
- projects.infrastructure
- incidents.postmortem
- incidents.outages
- lessons.testing
- lessons.operations
- lessons.architecture
- professional.speaking
- professional.writing
- professional.mentoring
- professional.interviews

## entity

Named mentions — code entities first.

- code.files
- code.repositories
- code.classes
- code.functions
- code.services
- code.modules
- code.endpoints
- code.models
- code.schemas
- events.deployments
- events.failures
- events.meetings
- events.scheduled
- events.milestones
- people.colleagues
- people.friends
- places.cities
- places.buildings
- organizations.companies
- organizations.groups

## settings

Local environment configuration.

- editor.formatting
- editor.keybindings
- editor.behavior
- git.defaults
- git.authentication
- shell.prompt
- shell.aliases
- security.authentication
- system.logging
- system.timeouts
- system.caching
- display.fonts
- display.theme

## system

Live infra/runtime facts.

- cloud.region
- cloud.accounts
- resources.compute
- resources.memory
- storage.provider
- database.provider
- database.replicas
- cache.configuration
- networking.loadbalancer
- networking.connectivity
- networking.dns
- observability.logging
- observability.metrics
- observability.tracing
- observability.alerts

## routine

Habits (distinct from `workflow` = rules).

- coding.testing
- coding.commits
- coding.reviews
- daily.morning
- daily.breaks
- daily.work
- weekly.planning
- team.standups
- team.retrospectives

## communication

Collaboration practices and surfaces.

- practices.reviews
- practices.proposals
- practices.decisions
- practices.standups
- tools.chat
- tools.video
- tools.issues
- tools.docs
- tools.design
- tools.code

## profile

User identity as it informs agent behavior.

- personal.identity
- personal.location
- personal.demographics
- professional.occupation
- professional.skills
- professional.specialization
- professional.experience
- professional.education
- professional.history

## goals

Personal career/learning intentions (project goals → `context.project.goals`).

- career.advancement
- career.speaking
- career.leadership
- career.mentoring
- education.skills
- education.languages
- education.certifications
- education.degrees
- personal.opensource
- personal.growth
- financial.savings
- financial.investments

## topics

Opinion/stance; de-emphasized for agents.

- architecture.patterns
- architecture.principles
- architecture.decisions
- coding.languages
- coding.practices
- coding.testing
- coding.maintenance
- devops.practices
- devops.observability
- devops.orchestration
- technology.ai

## learning

Education resources being consumed. De-emphasized.

- books.technical
- courses.programming
- videos.technical
- practice.algorithms
- practice.opensource

## relationships

People connections; de-emphasized (team facts → `context.team.roles`).

- professional.manager
- professional.mentors
- professional.mentees
- professional.colleagues
- family.parents
- family.siblings
- friends.close
