# Module 5: Design AI agents for business solutions (21 units)

Source: https://learn.microsoft.com/en-us/training/modules/design-ai-agents-business-solutions/

Objectives: RAI principles in agent design; business terms + Copilot customization in D365; custom connectors; D365 Contact Center agents; task/autonomous/prompt agents in Copilot Studio; Foundry tools; generative pages + agent feed; topics+fallback; grounding data processing; Power Apps AI; PP WAF; NLU/CLU/generative; agent flows; prompt actions; success criteria.

## U2 Core tenets of Responsible AI (5 min)
- Six principles: Fairness; Reliability & Safety; Privacy & Security; Inclusiveness; Transparency; Accountability. (People—not machines—are responsible for AI outcomes.)
- Apply across lifecycle: Design (risks, users, safety scenarios) → Development (fairness testing, security reviews, transparency docs) → Deployment (human oversight, pre-prod validation, monitoring) → Operations (continuous improvement).
- Ref: microsoft.com/ai/principles-and-approach.

## U3 Design business terms for Copilot in D365 Customer Service (10 min)
- Business terms = standardized org vocabulary in Dataverse fields/option sets/classification metadata; Copilot reads them for summaries/recommendations. Problem solved: vague/inconsistent summaries → agents lose trust.
- Terms: product names, service categories, internal terminology (SLA tiers, channels), department names, case classifications/outcome terms.
- Config: enable Copilot in Customer Service admin center > Copilot (conversation summaries, case summaries, draft emails, knowledge suggestions, real-time assist). Prereqs: licensing, security roles, Customer Service workspace, grounding data.
- Manage summary fields: include/exclude fields (e.g., map custom "Issue Type"); mis-mapping → misinterpreted categories, outdated terminology, wrong next steps.
- Conversation summary formats: **Paragraph** (narrative, quick escalations) vs **Structured** (predefined sections: Customer Issue, Actions Taken, Pending Items, Next Steps, Resolution Status; for documentation standards/regulated industries).
- Surface outputs on custom case forms, agent dashboards, role-specific forms (Tier 1 vs escalation vs supervisors).
- Best practices: consistent naming; avoid obscure abbreviations; align with CRM classification fields; review regularly; reflect customer language; ownership per department.
- Refs: /training/modules/configure-copilot/; copilot-map-custom-fields; 2024wave2 Sales business terminology release plan; /dynamics365/guidance/business-processes/glossary.

## U4 Design customizations for Copilot in D365 apps (5 min)
- Four customization areas: Business terms (domain language); Prompt/output (tone, structure, required fields, sensitive terms to avoid); Data scope (case fields, CRM entities, knowledge sources, timeline elements); Surface integration (case forms, conversation windows, timelines, knowledge views, dashboards).
- Best practices: start with agent workflows; consistent terms; review outputs for tone/accuracy/brand; limit data scope; update prompts as strategy evolves; human oversight of AI content.
- Ref: /dynamics365/sales/extend-copilot-chat.

## U5 Design connectors for Copilot in Dynamics 365 Sales (5 min)
- Custom connectors (production-ready preview): bridge external APIs ↔ D365 Sales ↔ Copilot Studio actions.
- **Must create in an environment with Dynamics 365 apps enabled** (default environment NOT supported).
- Steps: build from Power Apps/Power Automate; provide API host/base URL/security; upload OpenAPI definition.
- Auth: OAuth 2.0 + Microsoft Entra ID; backend receives Entra tokens; **two app registrations**; set `Enable onbehalfOf login = true` for automated auth (OBO tokens) for plugins.
- Publish: create Copilot action in Copilot Studio → configure data → publish → admin enables for Sales users. **Actions may take up to 7 days to appear; sign out/in accelerates.**
- Governance: third-party terms/privacy review; data accessible inside M365 experiences; optional certification for org-wide availability.
- Ref: /microsoft-sales-copilot/custom-connector-action.

## U6 Design AI agents for Dynamics 365 Contact Center (6 min)
- Channels & AI: Voice (real-time summarization, transcription, intent extraction); Live Chat (suggested replies, knowledge retrieval, escalation triggers); Digital Messaging SMS/WhatsApp (conversational flows, routing, sentiment); Omnichannel widget (embedded assistant).
- Agent context = structured data: customer identity, case history, channel, transcript, routing queues/priority, skills. Entity types: Customer, Case, Product, Subscription. Example fields: CaseID, CustomerType, Channel, IssueCategory, SentimentScore. Expose only needed attributes (accuracy, noise, privacy).
- Copilot features: conversation summaries, suggested actions, knowledge retrieval, customer insights, automated drafting. Enable per environment + per user role.
- Design: omnichannel awareness; align to workstreams (voice/messaging/persistent chat); guardrails (no unsupported actions, safe language, escalation rules); least-privilege data.
- Refs: get-started-contact-center; /dynamics365/customer-service/develop/enable-bot-context; /dynamics365/contact-center/administer/configure-copilot-features.

## U7 Design task agents in Copilot Studio (6 min)
- Components: Goals (mission, outcome-based, actionable/observable/testable); Skills (language understanding, data interpretation, planning, execution); Actions (connectors, custom connectors, APIs, Dataverse ops, cloud flows — each needs input params, output schema, auth, error handling); Knowledge (SharePoint, manuals, SOPs, Dataverse, KBs — accurate/recent/governed/indexed); Context; Safety & Rules (e.g., "never override credit limit", "ask before submitting order", "escalate on complaint keywords").
- Best practices: one high-value workflow first; small focused goals; clean structured data; least-privilege actions; monitoring/logging; test edge cases.

## U8 Design autonomous agents in Copilot Studio (5 min)
- Components: Goals, Triggers (user input, system changes, schedules), Instructions (business rules, e.g., VIP escalation), Knowledge sources, Actions (APIs, records, emails, CRM updates).
- Workflow: identify use case → build (goal, instructions, knowledge, triggers, actions via Power Automate/connectors/Dataverse) → test (accuracy, grounding, action execution) → deploy to Teams.
- Best practices: simple high-value use case; clean structured instructions; limit knowledge sources; approved/reviewed grounding; test logic repeatedly; monitor + refine.
- Ref: /training/modules/autonomous-agent/.

## U9 Design prompt-driven agents (5 min)
- Mechanisms table:
  - **Generative Answers (NLU Boost) node**: answers from knowledge when no topic matches; sources: public sites, Dataverse docs, SharePoint, connectors, custom data; fallback use; responses storable in variables, Adaptive Cards, custom formatting.
  - **System topics**: greeting, escalation, fallback, end of conversation, multiple-topics-matched disambiguation, error handling — trigger automatically.
  - **Condition nodes**: branching on variables/comparisons/operators, AND/OR, if/elseif/else; Power Fx formulas for advanced logic; adapt on customer type, form input, context.
  - **Event triggers**: act without user prompt (file uploaded, task completed, Dataverse row added, schedule); payloads carry data/instructions/context; must be explicitly authorized; impact billing.
- Refs: nlu-boost-node; authoring-system-topics; authoring-using-conditions; authoring-triggers-about.

## U10 Propose Foundry tools given a requirement (6 min)
- Categories: Retrieval & grounding (vector/hybrid search, indexing); Data & app connectors (CRM, ERP, LOB, SQL, Cosmos, REST/Graph); Workflow & action tools (create records, notifications, Power Automate, custom APIs); Reasoning/planning/execution tools; Specialized tools (summarization, classification, custom ML, safe completion).
- Mapping: retrieve policies→retrieval/hybrid/SharePoint ingestion; integrate business systems→native connectors (Dynamics, SAP, ServiceNow) or custom REST/Graph; multistep workflows→Power Automate connector/orchestration/custom actions; analyze/transform→Azure Functions, ML model tools; advanced reasoning→planner/reasoning/context evaluators.
- Goal: minimal complexity, security/compliance, leverage existing systems, low integration overhead, grounded outputs.
- Refs: /azure/ai-foundry/agents/concepts/tool-catalog; azure.microsoft.com/products/ai-foundry/tools/.

## U11 Propose code-first generative pages and agent feed applications (12 min)
- **Generative pages** (model-driven apps): natural language → page layout/bindings/forms from Dataverse data; maker adjusts low-code or code-first; enterprise security/governance.
- Code-first extensions: JavaScript event handlers, custom PCF controls, Dataverse business logic, reusable components, security-aware pipelines. For: complex rules, custom UI, cross-system integration, performance, compliance.
- **Agent feed**: AI layer in apps — record/process summaries, action suggestions, anomaly notifications, contextual insights, guided steps; monitors app context/user actions; next-best actions.
- Comparison: Prompt-first (fast, prototyping, citizen devs) | Code-first (control, enterprise workflows) | Agent-driven (insightful, decision support). High-volume automation → combine all three.
- Refs: Power Apps generative experiences blog; Generative Pages FAQ (GitHub powerapps-docs).

## U12 Design topics for Copilot Studio, including fallback (10 min)
- Topic components: trigger phrases (real user language); message nodes; question nodes (choice lists, text, dates, numbers); conditions/branching; actions (Dataverse update, Power Automate, external data).
- Selection basis: trigger phrases, NL matching, orchestration/generative understanding.
- Topic types: Instructional ("Reset MFA method"); Action ("Create support ticket"); Informational ("Business hours"); System (greeting/escalation/fallback); Reusable (shared logic, e.g., authentication).
- **Fallback topic**: acknowledges misunderstanding ("I'm not sure I understood that"), offers alternatives, optional human redirect, captures feedback. Don't overuse — strong intent coverage first.
- Best practices: clarity/brevity; structured questions; entity extraction (names, numbers, dates); consistent tone (Microsoft Writing Style Guide); test with real phrasing.
- Refs: authoring-system-fallback-topic; guidance/topics-overview; manage-power-virtual-agents-topics.

## U13 Design data processing workflows for grounded AI (9 min)
- Grounding (RAG) supplies trusted task-relevant data at inference; data design is iterative (refine prompts/context, test with real queries, adjust preprocessing/embeddings/chunking).
- Pipeline: Ingestion/prep (scope corpus to trusted sources at right cadence; normalize/enrich with metadata, Q&A pairs; preserve sensitivity labels, don't index unneeded personal data) → Chunking (fit model context window + semantic boundaries; poor chunking raises cost, lowers quality) → Embeddings (vector + keyword + semantic ranker = hybrid preferred) → Indexing (externalize to search index, don't query live systems per turn; SLO-driven freshness; minimal schema capabilities — searchable/filterable/sortable/retrievable only as needed; single index unless audiences/compliance/query patterns differ; side-by-side rebuilds) → Retrieval/orchestration (hybrid; top-K with filters; grounded prompt with citations).
- Platform choices: Azure AI Search (retrieval backbone); Foundry (RAG with your data, portal/SDK); Copilot Studio & AI Builder grounded prompts with Dataverse (low-code; licensing/env prereqs).
- Tradeoffs table: hybrid retrieval; semantic chunks sized to context; single index default; SLO-based freshness with side-by-side rebuilds; citations for provenance.
- Ops: minimum viable schema, cap top-K + token budgets; preserve labels/ACLs source→index; "right to be forgotten"; evaluate with real queries (answer quality, citation correctness, latency, coverage).
- Refs: build-effective-generative-ai-solutions-organization; build-copilot-ai-studio; /azure/well-architected/ai/grounding-data-design; ai-builder-grounded-prompts.

## U14 Design business processes with AI in Power Apps canvas apps (12 min)
- Copilot in Power Apps Studio: natural-language edits — add fields, update validation, generate screens, modify relationships/rules.
- Plans: structure business processes pre-build; Copilot proposes screens/entities/workflows/data ops/templates.
- Method: map current workflow (actors, inputs, decisions, automation candidates, error-prone steps) → identify AI opportunities (repetitive updates, interpretation/summarization, guidance, NL input, multi-step automation) → design Copilot interactions (chat panel, suggestion bars, auto-text, NL record creation, validation) → integrate in Studio → validate security/governance (data access, permitted actions, DLP, compliance).
- Placement table: Data capture→AI-generated fields; Evaluation/decision→Copilot suggestions; Document/record creation→AI text; Navigation/help→Copilot assistant; Data updates→NL edit; Workflow automation→AI-initiated actions.
- Refs: /power-apps/maker/canvas-apps/ai-edit-app; /power-apps/maker/plan-designer/build-solution.

## U15 Apply Power Platform Well-Architected Framework (12 min)
- Five pillars: **Reliability** (redundant connectors, retry policies, resilient Dataverse); **Security** (least-privilege Entra ID, DLP, secure connectors); **Operational Excellence** (PPAC analytics, ALM with Azure DevOps/GitHub, alerts); **Performance Efficiency** (Dataverse for high volume, offload to Azure Functions, right-size flows/concurrency); **Experience Optimization** (UX consistency, Copilot-assisted workflows, accessibility).
- Aligned with Azure WAF (Reliability, Security, Cost Optimization, Operational Excellence, Performance Efficiency); PP WAF swaps cost-optimization emphasis into licensing/connector choices and adds Experience Optimization.
- Refs: /power-platform/well-architected/ (+ what-is-power-well-architected); /azure/well-architected/what-is-well-architected-framework.

## U16 Determine use of standard NLP vs CLU vs generative orchestration (11 min)
- **Standard NLU**: rules/patterns/training datasets; high precision, low variability; structured commands; regulated processes needing deterministic responses.
- **Azure CLU**: AI classification models; varied phrasing within bounded topics; scalable trainable models; entity extraction; multilingual; continuous updates.
- **Generative orchestration**: LLM interpretation; unstructured/unpredictable messages; summarization/rewriting/generation/reasoning/multi-turn; grounding + action routing.
- Decision table: structured commands→NLU best; regulatory accuracy→NLU best/CLU good; moderate variability→CLU best; highly variable/ambiguous→generative best; enterprise grounding→generative; reasoning/summarization/content→generative; explicit intent routing→CLU best; multi-step conversations→generative best/CLU good.
- Best practices: start NLU/CLU for structured tasks; always ground generative answers; guardrails (instructions, actions, topic triggers); consider cost/compute of generative.
- Refs: Dynamics blog NLU fine-tuned language intelligence (2025-07-14); digitalbricks.ai generative orchestration topic triggers.

## U17 Design agents and agent flows with Copilot Studio (10 min)
- Agent authoring surfaces: Describe, Configure, Test, Publish. Natural language → initial agent with instructions/structure.
- Knowledge: SharePoint sites/folders, M365 content, public sites, linked KBs. Capabilities: Code Interpreter (Python), Image Generator, adaptive cards.
- **Agent flows**: native to Copilot Studio; consistent execution, end-to-end visibility, **no Power Automate license required**, natural-language automation. Trigger (manual, scheduled, system event, another agent) + Actions.
- Build: natural language prompt → Copilot generates flow; or visual node-based designer.
- Integrations: Forms, D365, Dataverse, email, APIs/custom connectors.
- Agent flow vs cloud flow table: licensing (Copilot message capacity vs Power Automate license); triggers; best for (AI-driven conversational automation vs enterprise integration); builder experience.
- Best practices: clear scenario; concise instructions; NL prototype then visual refine; test agent+flow together; monitor analytics; modular flows (one per major task).
- Refs: /training/modules/use-agent-flows/; /microsoft-copilot-studio.

## U18 Design prompt actions in Copilot Studio (11 min)
- Prompt actions = reusable instruction blocks: generate responses, reasoning, transform/summarize, structured instructions, interact with variables.
- **Prompt Coach template sections**: Goal | Context | Instructions/Rules | Examples (optional) | Output Format.
- Principles: task clarity (imperative verbs); org tone (Microsoft Writing Style: clear, concise, action-oriented); output control (word limits, required fields, exclusions).
- Embed in: topics, agent flows (reasoning before action), fallback logic, business processes (e.g., summarize case before escalation).
- Types: Transform, Summarize, Extract, Generate, Classify.
- Best practices: modular (one task per prompt); constraints; sparing examples; test multiple phrasings; Prompt Coach; guarded language; document for governance/auditing.
- Ref: /microsoft-365-copilot/extensibility/agent-template-prompt-coach.

## U19 Define success criteria and adoption goals (12 min)
- Success criteria: business-aligned, measurable, outcome-driven, time-bounded, feasible. Categories: Business value; Operational efficiency; User experience; Quality & accuracy; Risk & compliance; Scalability.
- Adoption areas: organizational readiness (leadership, literacy, change enablement, roles); data readiness; technical readiness; user adoption (value demo, training, feedback loops).
- CAF AI Adoption Plan pillars: establish business outcomes (north-star); identify measurable AI scenarios (high feasibility × high impact); assess AI feasibility (data quality, security, skills, model appropriateness); establish program governance (RAI standards, lifecycle, metrics/monitoring, data protection).
- Ref: /azure/cloud-adoption-framework/scenarios/ai/plan.
