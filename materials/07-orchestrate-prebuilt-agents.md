# Module 7: Orchestrate configuration of prebuilt agents and apps (10 units)

Source: https://learn.microsoft.com/en-us/training/modules/orchestrate-configuration-prebuilt-agents-apps/
(Note: unit numbering on the site is out of order — unit 2 covers Finance/Supply Chain, units 3–8 the rest.)

Objectives: orchestrate AI features/Copilot agents across D365 + M365; secure/compliant/extensible design; configure prebuilt agents for finance, supply chain, sales, service; RAI, workflow integration, success measurement.

## U2 Orchestrate AI features in D365 Finance and Supply Chain (6 min)
- Three AI experience models:
  - **Sidecar**: chat alongside the app — generative help/guidance; workflow summaries (journal history, approvals, status); chat with F&O data (NL queries on business data models). Considerations: domain-vocabulary prompts; role-based access; standardized entity metadata for cross-module queries.
  - **Embedded**: in-page contextual AI — purchase order change analysis, customer collections summaries, demand planning insights, supplier communication drafting. Implications: authoritative data entities; business-rule alignment; extensions must handle AI workflow changes.
  - **Outside**: external agents orchestrating beyond the app UI — cross-app automations, role-specific copilots in Teams, workflow routing/notifications. Use Dataverse/custom APIs; honor residency/privacy; external triggers must match D365 security/approval constraints.
- Finance capabilities: collections coordinator summaries; customer page summaries; statement posting summaries; opportunity/risk analysis.
- Supply Chain capabilities: AI demand planning; warehouse workload insights; supplier communication agent; confirmed-PO change review.
- Cross-app: generative help, feedback loops, NL data assistance.
- Extensibility: custom scripts/extensions via developer framework; prompt-defined behaviors in sidecar; custom data sources; business event triggers → Power Automate/Azure Functions; custom actions. **Application context** (3 types) embeds Copilot in the flow of work; **client plugins** invoke client code (X++ method required in-app).
- Best practices: modular extensions within solution boundaries; RAI on all prompts/instructions; align with existing workflows.
- Refs: copilot-for-finance-operations; extend-copilot; copilot-client-plugins; copilot-architecture; copilot-application-context (all under /dynamics365/fin-ops-core/).

## U3 Design AI solutions for D365 Customer Service (7 min)
- Three AI capability types:
  1. **Agent hub** — one-stop admin/supervisor hub to adopt autonomous agents safely, monitor impact, make responsible decisions.
  2. **Autonomous service agents** — **Customer Intent Agent** (discovers intents from past/current cases + conversations); **Case Management Agent** (automates case lifecycle: create/update/resolve/close); **Customer Knowledge Management Agent**; **Quality Evaluation Agent**.
  3. **Copilot in Contact Center** — real-time assistance: ask questions, compose email, summarize case/conversation; embedded or standalone; availability varies.
- AI experience models: Conversational Copilot (sidecar); Embedded intelligent features (case forms, timelines, knowledge articles — proactive suggestions); Automated AI behaviors (case routing, sentiment tagging, predictive escalation).
- Design considerations: data quality (CRM fields, history, SLAs, knowledge); security/privacy; service consistency (policies, tone, approved workflows); extensibility (custom prompts, Power Automate, plugins, Azure OpenAI, knowledge retrieval extensions). Modularize AI behaviors.
- Orchestration models: case-centric (read description/notes/conversations → suggest actions → resolution summaries); interaction-centric (messages, KB links, troubleshooting procedures); multi-system (Customer Service + Field Service / Finance / Power Automate).
- Refs: overview-agent-hub; overview-customer-intent-agent; use-case-creation-agent; admin-km-agent-insights; manage-quality-evaluation-agent; configure-copilot-features; use-microsoft-365-copilot; csw-overview.

## U4 Propose Microsoft 365 agents for business scenarios (13 min)
- M365 agents retrieve/reason/act across apps. Design principle: **treat an agent like a product, not a prompt** — backlog, guardrails, metrics.
- Agent attributes: defined mission/scope; grounding data + tools; operational guardrails (identity, authorization, DLP, reviewability); telemetered outcomes (usage, quality, cost, business impact).
- **Readiness checklist**: business value (owner, users, measurable outcome, definition of done); identity & access (runs-as model: user/app/service; least-privilege); data scope (corpus enumerated, sensitivity labeled, access validated); actions & tools (connectors, failure paths, human approval points); security & compliance (DLP, eDiscovery/audit, logging); change control (versioning, rollout rings, rollback, sunset); measurement (adoption, quality, latency, cost, KPIs); support (ownership, incident runbook, ethics review, comms/adoption plan).
- 5-step design framework: frame the job-to-be-done → map inputs/knowledge/actions → define guardrails → prototype critical path (narrow happy path, real artifacts) → operationalize (telemetry, quality checks, cost controls, rollout rings, training).
- **Agent Management Essentials** docs: prerequisites, blueprint, checklist, visual guide, admin guide, FAQ (/copilot/microsoft-365/agent-essentials/*). Include long-term + licensing costs (/copilot/microsoft-365/microsoft-365-copilot-licensing).
- Assess OOB pilots before custom agents. Ready-to-pilot catalog examples: Executive Briefing Pack Generator; Portfolio Risk Insights Analyzer; Content Localization Workpack Builder; Compliance-Aware Content Redactor; Alignment & Quality Checker; Adoption Scenario & Lab Designer; Research Synthesis & Brief Creator; Telemetry-to-Insights Report Generator. Each with entry point, inputs/tools, guardrails, KPIs.
- Baseline RACI (Architect/Product owner/Security/Support): use case triage R/A/C/C; data scoping C/A/R/C; tool setup R/C/C/A; guardrails C/A/R/C; telemetry & cost R/A/C/C; change control C/A/R/R.
- Starter KPI targets (pilot): adoption ≥30% weekly active of target cohort; quality ≥70% first-output acceptance; speed ≥25% median time saved; safety ≤1 policy violation per 1,000 runs; cost baseline ±10%.
- Instructor prompts: where do HITL checkpoints most reduce risk; what single win justifies the agent; which trusted data most improves first-run quality.
- Refs: manage-copilot-scenarios; microsoft-365-copilot hub; understand-foundations-generative-ai-business-leaders; agent-essentials-overview.

## U5 Orchestrate and configure Microsoft 365 Copilot for Sales and Service (6 min)
- Copilot behaviors: retrieve customer/case context (emails, CRM, meetings, docs); summarize interactions; generate responses/proposals/resolution steps; multi-step workflows via Power Platform actions.
- **Copilot for Sales config**: prereqs — CRM connected/synced (D365 Sales or third-party); complete standardized opportunity/account/contact/activity fields; sensitivity-labeled docs in OneDrive/SharePoint; role visibility controls. Workflow: enable in M365 + D365 → connect CRM via approved connectors → map fields for grounding consistency → least-privilege permissions → configure content sources (email summarization, opportunity review, proposal drafting, meeting prep). Sales flow: inbound email → Copilot summary → CRM opportunity update → proposal draft → seller review → engagement.
- **Copilot for Service config**: grounding on case forms, records, transcripts, knowledge articles, SLA targets, escalation paths, agent notes. Workflow: connect case engine → validate KB repositories → enable Copilot actions (summarization, knowledge lookup, guided resolution) → Power Automate for escalation/routing/approvals → role-based access for sensitive actions. Case loop: intake → summary → knowledge retrieval → suggested actions → agent review → resolution logged.
- AI Builder use cases: classify case types; extract from emails/attachments; predict lead quality/sentiment; multi-step reasoning.
- Governance: sensitivity labels on customer-facing docs; DLP; audit trails for Copilot actions; residency/retention; human review before external sends; restricted high-risk actions; versioning/rollback; telemetry (adoption, drift, misuse).
- KPIs — Sales: prep time reduction, lead→opportunity speed, proposal consistency. Service: handle/resolution time, first-contact resolution, KB accuracy/retrieval speed. Operational: adoption rate, response accuracy, rework reduction.
- Ref: /training/modules/configure-copilot/.

## U6 Propose Microsoft Power Platform AI features (AI hub) (6 min)
- Components: **AI Hub** (central experience to manage/discover/orchestrate AI across Power Apps, Power Automate, Copilot Studio); **Copilot in Power Platform** (NL creation of apps, flows, tables, controls, logic); **AI Builder** (prebuilt + custom models: classification, prediction, extraction, detection, translation, document understanding); **Copilot Studio**.
- AI Builder prebuilt: document processing, object detection, category classification, sentiment, payment detection, business card reader, receipt/invoice extraction. Custom: prediction (churn, lead scoring), classification, entity extraction. Model lifecycle: data acquisition/labeling → training/validation → deployment → drift/accuracy monitoring → retraining/retirement triggers.
- Copilot in Power Apps (screens from NL, Dataverse tables/fields/sample data, conversational logic, UI modernization); Power Automate (flow generation from intent, trigger/action/connector suggestions, flow-logic summaries for governance); Power Pages (NL site pages, forms, data models); Copilot Studio (multi-turn copilots, external data/APIs, Teams/M365/web publishing, DLP/audit).
- Architect responsibilities: governance/security (environment strategy, labels, DLP, RBAC, connector validation); data strategy (sources/quality, Dataverse mapping, compliant training data, refresh/retention); extensibility (connectors, CRM/ERP/HRIS integration, automation pipelines, AI Builder insights); monitoring/optimization (model performance, Copilot adoption metrics, telemetry, iteration).
- Feature selection matrix: text generation→Copilot/AI Hub/Copilot Studio; prediction→AI Builder/AI Hub; document extraction→AI Builder/AI Hub; conversational agent→Copilot Studio; automation creation→Copilot/AI Hub.
- Refs: /power-platform/copilot; /ai-builder/overview.

## U7 Design interoperable agent experiences for Finance and Operations (5 min)
- F&O Copilot supports **client plugins**: extend built-in agent with additional knowledge sources, custom actions, domain logic.
- How interoperability works: user asks → agent determines intent → selects source (F&O data / plugin action / external KB) → synthesizes grounded response → optionally acts (e.g., create record).
- Additional knowledge sources: external KBs (SharePoint, policy docs, vendor portals, product catalogs, SOPs); LOB systems via plugins/APIs (CRM, HR, procurement, MES); custom datastores (Azure SQL, Dataverse, Azure Cognitive Search); domain content (compliance rules, financial policies, inventory classification, pricing).
- Plugin capabilities: custom actions, structured responses, business-logic enforcement, multi-step workflows. Design: what's missing from F&O, what external system, what logic/validations.
- Design patterns: map business questions to sources ("vendor credit limit"→F&O; "compliance certificate"→SharePoint; "update payment terms"→plugin action); plugins bridge gaps (fetch, validate, trigger, write back); combine sources in one response; ensure grounding (authoritative sources, validate external data).
- Governance: plugins respect F&O security roles; external sources enforce access control; RAI (transparency, no unsupported assumptions, log plugin actions); monitoring/maintenance (usage tracking, source updates, response review).
- Ref: /dynamics365/fin-ops-core/dev-itpro/copilot/copilot-client-plugins.

## U8 Recommend process knowledge sources for in-app help in D365 (5 min)
- In-app help = product docs + custom org knowledge (knowledge articles, process guides, structured files, operational docs) + generative responses (when enabled).
- Supported: PDF/RTF/Word with validated business processes; KB articles for Finance/Supply Chain workflows; task guides; task-connected policy docs. **Not supported/recommended**: Dataverse virtual entities from F&O; content unrelated to product usage (contaminates results); sensitive unclassified data.
- **End-to-end process**: 1. Prepare (validate accuracy, task-connected, consistent terminology, sensitivity labels). 2. Ingest via **Copilot Studio** (select F&O environment → Agents → open agent → Knowledge tab → Add knowledge → upload → wait for **Ready** status). 3. Test (scenario-based questioning; responses reflect source; no unrelated contamination; adjust + reprocess). 4. Publish (Publish button; close/reopen Copilot sessions to refresh; review early feedback). 5. Govern (version control; labeling/DLP; quarterly review or per release wave; test after each D365 release).
- General knowledge (LLM/external): enable only when NL explanations help and risks mitigated; restrict when precision is critical (regulatory/financial workflows).
- Recommendation framework: knowledge scope (allowed/prohibited); data governance; operational workflows (content owners); risk mitigation; success metrics (content usage, reduced support calls, task completion).
- Refs: copilot-generative-help; extend-copilot-generative-help (fin-ops-core).
