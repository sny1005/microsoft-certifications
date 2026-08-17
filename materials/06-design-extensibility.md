# Module 6: Design extensibility of AI solutions (10 units)

Source: https://learn.microsoft.com/en-us/training/modules/design-extensibility-ai-solutions/

Objectives: scalable/secure AI solutions; custom models in Foundry; agents in M365 Copilot; Copilot Studio + MCP extensibility; governance/lifecycle.

## U2 Design AI solutions with custom models in Microsoft Foundry (6 min)
- When custom models: domain-specific language/reasoning (legal, healthcare, engineering, finance, manufacturing); high-impact decisions (compliance, financial, safety); data sovereignty/governance mandates; unique workflows/personalization beyond prebuilt copilots; cost optimization of high-volume inference (small specialized models).
- Foundry architecture: model catalog (base models for fine-tuning); training/fine-tuning pipelines; agent/tooling integration (multi-step reasoning, automated workflows); RAI controls (content filtering, safety eval, transparency artifacts, policy enforcement, auditability); deployment topologies (hosted secure, private networking, AKS/Foundry runtime).
- Design steps: business objectives (accuracy/time/cost targets) → data assessment (gaps in labeling/quality/diversity; governance permission for training) → select path (fine-tune foundation | train domain SLM | hybrid with prebuilt copilots) → enterprise integration (D365, Azure Functions/Logic Apps, Foundry agent workflows, AI Search, automation pipelines) → validate/evaluate (scenario evals, safety/bias, stress/latency/scale, ROI).
- Operationalize: monitoring/observability (drift, degradation, friction, latency, unexpected outputs); governance/compliance; versioning/lifecycle (version trails, update pipelines, rollback); deployment automation (MLOps/GenAIOps: validations, approvals, env-specific deploys).
- Decision matrix: standard Copilot (low domain specificity, moderate compliance/performance/confidentiality, low-medium complexity) vs custom Foundry model (high specificity/compliance/performance, full data control, high complexity, high inference-cost optimization).
- Ref: /training/modules/choose-ai-agent-development-path/.

## U3 Design agents in Microsoft 365 Copilot (6 min)
- Copilot agent = modular instruction-driven AI component for a specific task/workflow: task automation, info retrieval (Graph + integrated systems), multi-step ops (classification, analysis, routing), collaboration (drafts, summaries).
- Operate in: Teams, Outlook, Loop, SharePoint, custom LOB apps via extensibility points.
- Design framework: A. understand core problem (task, goal, decisions, systems); B. define behavior (role, allowed/disallowed capabilities, guardrails, escalation conditions); C. connect data/tools (Graph, SharePoint/OneDrive/Teams, connectors/actions, custom APIs; least-privilege, zero-trust).
- Collaborative agent patterns: sequential (A→B→user review); parallel evaluation (score + combine); feedback-loop iteration; orchestrated interaction (primary delegates by intent/conditions). Clear handoff rules + responsibility boundaries.
- **Agent Builder**: easiest path for declarative agents — guided step-by-step config, built-in tools, declarative instructions, testing workspace, publishing controls. Workflow: purpose → instructions/tasks/guardrails → data sources → actions/permissions → test → publish to targeted users/groups.
- Operations: monitor quality/feedback; update instructions; access control; log review; versioning; identify new scenarios.
- Refs: /copilot/microsoft-365/microsoft-365-copilot-page; /microsoft-365-copilot/extensibility/agent-builder-build-agents (+ agent-builder).

## U4 Design extensible agents in Microsoft Copilot Studio (6 min)
- Four extensibility layers:
  1. **Instruction-level**: purpose, role/constraints, action patterns, escalation rules; prompt modification without rebuild.
  2. **Skill/capability**: retrieval skills (enterprise content), action skills (connectors/custom APIs), multi-step workflows, domain knowledge. Modular reusable skills.
  3. **Integration**: D365/M365/custom DBs/LOB retrieval; Power Automate actions; external APIs; publish events/commands. Consider: governance, least-privilege, standardized commands, consistent entity mapping.
  4. **Pro-code (VS Code)**: custom agent logic/components, code-based tools/actions, custom transformations/orchestration, source control integration.
- Patterns: Modular agent architecture (interchangeable components); Multi-agent collaboration (research/workflow/communication agents via defined protocols); Domain-context (terminology, rules, access policies, outcomes per domain).
- Architecting agent solutions framework: fit for purpose; operability; trust/traceability/transparency. Complements (doesn't replace) Azure WAF, Power Platform WAF, NIST.
- Refs: /microsoft-copilot-studio/guidance/architecture/ (+ determine-fit-for-purpose, determine-operability, determine-trust); /microsoft-365/copilot/extensibility/overview-declarative-agent; nlu-generative-answers-prompt-modification.

## U5 Design extensible agents using MCP in Copilot Studio (4 min)
- **MCP = standardized contract** for what context an agent can access and how to interpret it. In D365 F&O: exposes business entities, relationships, labels, metadata, domain objects (customers, vendors, products; workflows/status/approval chains; financial dimensions, ledger models; localization rules).
- Why: consistent business semantics across agents; grounding in real F&O context reduces misinformation; multi-app interoperability; explainability/governance; faster extensibility.
- Instruction design: purpose statement, role definition, behavior rules, context consumption logic (how MCP data is used), action boundaries.
- Integration patterns: A. Context-driven reasoning (compliance, finance, procurement); B. Workflow-integrated agents (approvals, exception escalation, status summaries); C. Multi-agent collaboration via shared MCP context (HR+Finance+Supply Chain).
- Governance: least-privilege by user identity; MCP context boundaries aligned to compliance; decision logging; RAI-enforcing instructions; AI CoE ownership.
- Ref: /dynamics365/fin-ops-core/dev-itpro/copilot/copilot-mcp.

## U6 Design agents with Computer Use in Copilot Studio (5 min)
- Computer Use: agents control mouse/keyboard, navigate websites/desktop apps, read onscreen text/UI, multi-step tasks, cross-app execution. Flow: request → analyze UI (vision+reasoning) → step plan → act via Computer Use channel → validate + report.
- Suitable when: no API/connector (legacy systems, vendor portals, desktop-only apps); repetitive UI-driven tasks (data entry, form submission, copy/paste); multi-app navigation (portal→CRM, report downloads); human-like reasoning needed (dynamic pages).
- Design: clear goal-oriented tasks; context/constraints (allowed apps/sites, data boundaries, prohibited actions, time/retry limits); break into steps; design for variability (descriptive instructions "click the blue Submit button", validate after each step, graceful errors).
- Config: enable in agent settings; configure permissions/allowed apps; add Computer Use actions (click, type, scroll, extract, navigate); reasoning mode; test canvas watch/debug.
- Governance: least-privilege app access; avoid sensitive data entry; transparency; action logging; UI-change fragility → monitoring + fallback plans; **use only when APIs unavailable**.
- Ref: /microsoft-copilot-studio/computer-use.

## U7 Design agent behaviors in Copilot Studio (reasoning, voice) (6 min)
- Behavior = Instructions (purpose, persona, goals, tone, guardrails) + Knowledge + Actions/tools + Policies/constraints.
- Design principles: clear role; allowed/disallowed behavior; escalation patterns; formatting rules; business-logic constraints + error handling.
- **Standard reasoning**: conversational responses, summaries, simple calculations, basic workflow help — fast, low compute, high-volume.
- **Deep reasoning (preview)**: multi-step tasks, complex business rules, analytical processes, decision trees, scenario planning, constraint/trade-off evaluation. For high-precision logic, multi-stage evaluation, historical-data recommendations, validation logic, problem decomposition.
- Instruction structure: Purpose, Scope, Tone/style, Data boundaries, Quality expectations, Error handling, Escalation conditions.
- **Voice mode/IVR**: customer service IVR, field technician support, routing, healthcare triage, facilities, HR/IT self-service. Considerations: short clear phrasing; no long multi-sentence responses; confirmation steps; design for interruptions/backtracking; confidence checks before actions. Flow: speak → interpret → confirm/clarify → execute → concise spoken output.
- Refs: /microsoft-copilot-studio/guidance (+ architecture-overview); authoring-reasoning-models; bisser.io deep reasoning post.

## U8 Optimize solution design for agents in Microsoft 365 (Teams, SharePoint) (6 min)
- Copilot Studio-built agents in Teams (chat/channel answers, message-triggered workflows, M365-data contextual answers) and SharePoint (retrieve site/list/library content, site-specific Q&A, content management help).
- M365 grounding: respects user permissions, uses Graph (files, lists, pages), grounded answers.
- SharePoint agents: knowledge from site pages, doc libraries, lists, news, policies, wikis; site context automatic (knows its site, primary grounding, adapts to structure); site-owner assistance (draft pages, metadata, accessibility, organization).
- Teams agents: conversational automation; multi-user collaboration (group conversations, shared knowledge); task automation ("create a task for this message", "summarize last 10 messages").
- Optimization: grounding strategy (SharePoint primary, Graph cross-tenant, well-structured/tagged content); permissions (inherit user permissions; app registration + consent); prompt/behavior design (concise answers, clarifying questions, metadata use); governance/lifecycle (version control, usage monitoring, periodic grounding review, AI CoE alignment).
- Patterns: SharePoint knowledge assistant; Teams project assistant; org policy assistant; site owner support agent.
- Ref: spknowledge.com SharePoint agents post (2026-01-05).
