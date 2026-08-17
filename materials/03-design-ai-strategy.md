# Module 3: Design overall AI strategy for business solutions (19 units)

Source: https://learn.microsoft.com/en-us/training/modules/design-overall-ai-strategy-business-solutions/

Objectives: map CAF AI adoption phases to agent lifecycle; design enterprise operating model for agents; select Microsoft platforms; checklists from PoC to production.

## U2 Implement AI adoption process with Azure (10 min)
- **CAF phases** (Strategy, Plan, Ready, Govern, Secure, Manage) ⇄ **agent lifecycle** (Plan agents, Govern & secure, Build, Operate).
- A. AI Strategy ⇄ Plan agents: business outcomes, use-case prioritization, agent technology plan (SaaS vs Foundry/Copilot Studio), TCO/effort tradeoffs. Outputs: AI Strategy brief + Agent Technology Plan.
- B. AI Plan ⇄ Plan agents: skills assessment, PoC, **agent readiness criteria** (data availability, governance readiness, identity model, connectors).
- C. AI Ready ⇄ Govern & secure (foundation): landing zones; agent governance charter (capability access, data boundaries, approvals, monitoring); data access model.
- D. Govern + Secure AI ⇄ enforcement: Azure Policy, risk register, controls for agent behavior/data access/compliance (review prompts/tools, audit trails, escalation).
- E. Build: standardized build process (knowledge tools, action tools, triggers; evaluations); environment strategy; CI/CD with policy guardrails.
- F. Manage AI ⇄ Operate agents: deployment authority, telemetry/SLOs, rollout patterns, behavior monitoring, Agent Ops playbook (SLOs, retraining rules, deprecation).
- RACI example: Architect A/R on strategy, agent tech plan, build, operate; Platform team A/R on landing zone; Security A/R on agent governance policy; Data owner C/R on grounding data.
- Refs (CAF): scenarios/ai/ (+ strategy, plan, ready, secure, manage); ready/landing-zone/; scenarios/ai/platform/architectures; ai-agents/ (+ technology-solutions-plan-strategy, data-architecture-plan, governance-security-across-organization, integrate-manage-operate).

## U3 Design AI agents for business solutions — strategy (17 min)
- Three agent categories: **SaaS (prebuilt)** = immediate value, minimal customization; **Low-code (Copilot Studio)** = moderate customization, fast; **Pro-code (Foundry/custom hosting)** = max flexibility.
- **SaaS-agent-first principle**: "Does a SaaS agent meet functional requirements?" If yes, use it.
- Platform comparison table:
  - SaaS agents: retrieval/task; personal productivity; minimal customization.
  - Foundry (PaaS, pro-code + low/no-code): retrieval/task/autonomous; strategic transformation, deep integration, custom logic; declarative or code-first; model catalog (OpenAI, Anthropic, Meta, Mistral); A2A/Activity Protocol support.
  - Copilot Studio (SaaS, low/no-code): retrieval/task/autonomous; process transformation; prebuilt connectors, Azure AI Search integration, built-in RAI.
  - GPUs & containers (IaaS): compliance-sensitive/full-control workloads, custom model configs, private networking, strict isolation.
- Single-agent first; multi-agent only when crossing security/compliance boundaries, multi-team orchestration, or modular specialization needed.
- Data integration: grounding sources, quality/freshness, indices/schemas, least-privilege.
- Deployment: network isolation (Foundry standard setup supports private networking), latency/availability, monitoring, change management.
- Refs: ai-agents/technology-solutions-plan-strategy; dynamics365/copilot/.

## U4 Design a multi-agent solution (10 min)
- **Choose multi-agent first when**: crossing security/compliance boundaries; multiple teams own distinct knowledge/data/release cycles; roadmap spans 3–5+ functions; series of actions with dependencies across 2+ workstreams. Otherwise validate single agent (persona switching, better retrieval, policy controls, larger context).
- Platform roles: M365 Copilot (domain agents, immediate value) | Copilot Studio (task/retrieval, business-led) | Foundry (connected agents, complex orchestration).
- **Orchestration patterns (Microsoft Agent Framework SDK)**: Sequential (deterministic pipeline); Concurrent (parallel subtasks + aggregation); Group chat (moderated proposals); Handoff (transfer to specialist/human on threshold); Magentic (dynamic specialization, orchestrator pulls experts at runtime).
- Reliability tip: treat orchestration as workflow with state/branching/error handling; avoid prompt-to-prompt daisy chains.
- Connected agents design steps: define main agent (mission, guardrails, metrics, tooling); identify connected agents by role (Planner/Researcher/Reviewer/Actuator) with minimal instruction sets + scoped permissions; model collaboration (contracts, state handoffs — IDs over raw content); prototype; iterate (prune redundant agents).
- Eval checkpoints: single clear responsibility per agent; security scopes per agent; graceful degradation; observability hooks at handoffs; natural-language routing by main agent; no-code portal vs Python SDK config.
- Refs: github.com/microsoft/multi-agent-reference-architecture; agent-framework orchestration docs (sequential/concurrent/group-chat/handoff/magentic); CAF single-agent-multiple-agents; Microsoft AI Decision Framework (microsoft.github.io/Microsoft-AI-Decision-Framework).

## U5 Develop use cases for prebuilt Microsoft 365 Copilot agents (7 min)
- Prebuilt agents: summarization, knowledge retrieval, drafting, policy guidance, routine workflows. Best when: frequently accessed info, repetitive high-frequency tasks, standardization value, M365-centric work.
- Candidate analysis: task repetitiveness, knowledge intensity, pain points, ROI KPIs (hours saved, ticket volume, cycle time). Use Microsoft Scenario Library.
- Categories: knowledge answering/search; document summarization/reporting; travel/guidance agents (Safe Travels example); research & analysis agents; productivity workflows.
- Task→capability matching table: searching docs→retrieval; drafting→summarization & generation; policy answers→knowledge QA; daily insights→synthesis.
- Feasibility: data exists in M365; conversational fit; no multi-agent needed; retrieval-first accuracy expectations.
- Refs: introduction-develop-ai-agents; enhance-productivity-prebuilt-agents path; copilotscenarios.microsoft.com; agent-academy (microsoft.github.io/agent-academy/recruit/05-using-prebuilt-agents/).

## U6 Define solution rules and constraints for AI components (7 min)
- Copilot Studio constraints: structured instructions/tool permissions; limited execution complexity; governed environment; built-in safety filters; Microsoft SaaS boundary. Rules: workflow-bounded/task/retrieval scenarios; strict connector scoping; task boundaries preventing high-impact decisions.
- Foundry constraints: explicit governance for tools/models/memory; hosted/declarative/tool-driven; more risk ownership; more ops overhead. Rules: complex reasoning/multi-agent/custom tools; strict action boundaries; evaluation pipelines; role separation.
- Foundry Tools rules: least-privilege per tool; test failure cases; escalation rules to humans; document integrations.
- Data rules: minimum necessary data; mask sensitive fields; curated authoritative grounding; content-production constraints; memory policy (ephemeral vs persistent); restrict cross-domain access (HR/Finance/Legal); mandatory auditing of tool invocation; human review for high-risk tasks.
- Environment/network: Copilot Studio = M365 tenant boundary, isolated per environment; Foundry = VNet/private endpoints/region choices; allow-listed domains for external calls; SLOs; monitoring; rollback.
- Unified rule framework table (Data Access / Actions / Governance / Risk / Evaluation across Studio vs Foundry).
- Refs: techcommunity blogs on Foundry↔Copilot Studio integration and Copilot Studio vs Foundry.

## U7 Determine generative AI knowledge sources for Copilot Studio agents (26 min — key unit)
- **Generative answers**: dynamic answers without authored topics. **Generative orchestration**: auto-creates "Conversational boosting" system topic; searches up to **25 knowledge sources** with GPT-based relevance filtering; optional general knowledge for out-of-domain.
- Generative vs classic orchestration table:
  - Classic: trigger-phrase topic match; tools only from within topics; knowledge as fallback; single topic; question/message nodes required.
  - Generative: topics/agents/tools selected by description; proactive knowledge search; combines topics+tools+knowledge; auto-generates questions for missing inputs; auto-generates responses.
- Knowledge applied at: agent level, topic level, generative answers node.
- Sources: public websites; uploaded documents (Dataverse-indexed PDF/Word/PPTX); SharePoint (permission-trimmed); Dataverse (structured); enterprise connectors via Microsoft Search (OneDrive, Salesforce, ServiceNow...); Azure OpenAI "on your data" (node-level sources prioritized over agent-level).
- Unstructured data: ingested into Dataverse, chunked, vectorized; per-user permission checks at query time. **Limits: 500 knowledge objects/agent; max 5 unstructured sources simultaneously in retrieval**; background sync for freshness.
- Azure AI Search source: vector indexes, semantic ranking; key/certificate/Entra ID auth; metadata-based citation mapping. Preferred for large content volume + enterprise relevance.
- Selection criteria: structured→Dataverse; semi-structured→Azure AI Search; unstructured→SharePoint/OneDrive via Dataverse; high precision→AI Search semantic ranking; broad coverage→generative orchestration.
- Refs: /microsoft-copilot-studio/knowledge-copilot-studio; knowledge-unstructured-data; knowledge-azure-ai-search; nlu-generative-answers-azure-openai; advanced-generative-actions.

## U8 Determine when to build custom agents or extend Microsoft 365 Copilot (10 min)
- Extend when: core Copilot already does most tasks; productivity workflows in M365 apps; org knowledge + simple tasks; built-in RAI guardrails wanted; simple custom logic. Extensions = connectors/plugins, org knowledge sources, doc/communication automation.
- Build custom when: specialized workflows beyond Copilot; custom reasoning/multi-step/orchestration; direct system APIs/external apps/operational autonomy; multi-agent collaboration; execution outside M365.
- Comparison matrix: Autonomy low/high; Custom logic limited/extensive; Data variety M365/any; Actions simple/complex multi-step; Orchestration none/full; Governance built-in/custom.
- Custom agents excel: case management, field ops automation, industry verticals, multi-agent ecosystems.
- Refs: copilot-declarative-agent-intro/4-when-to-use-declarative-agents; Microsoft AI Decision Framework.

## U9 Determine when custom AI models should be created (10 min)
- Custom models only when: prebuilt/fine-tuned can't solve accurately; domain specificity/sensitive workflows/high-impact decisions; predictable governed behavior beyond prebuilt compliance; ROI confirms long-term gains.
- Balance: Business Fit + Model Fit + Data Fit + Cost Fit + Operational Fit.
- Prebuilt/catalog sufficient for: general-purpose tasks (summarization, classification, rewriting, translation, extraction), moderate accuracy, enterprise knowledge interaction, time-to-value, low cost/risk.
- Custom justified by: domain-specific intelligence; insufficient off-the-shelf accuracy after prompt engineering/retrieval tuning/fine-tuning (persistent low precision/recall, high cost of wrong answers, near-deterministic needs); governance/compliance demanding full control (explainability, custom guardrails, residency/sovereignty); high-scale/high-ROI economics; multi-agent custom reasoning.
- Data requirements: large labeled domain data, governance/cleaning, repeatable train-eval-deploy pipeline, taxonomy/annotation guidelines, retraining strategy, skilled DS + MLOps.
- Decision chart (domain complexity, accuracy, data availability, compliance, reasoning depth, cost tolerance, talent, time-to-market).
- Refs: maximize-cost-efficiency-ai-agent-development; explore-models-azure-ai-studio.

## U10 Provide guidelines for creating a prompt library (10 min)
- Prompt library = curated governed reusable prompts: consistency, governance, efficiency, quality, scalability. Strategic asset in AI CoE.
- Four pillars: Clarity, Context, Constraints, Output format.
- Patterns: Instruction+Context+Output; few-shot; role prompting; multi-step (Extract→Analyze→Recommend→Summarize).
- Library components: templates (summaries, classifications, transformations, recommendations, troubleshooting, decision support); domain prompts (HR/Finance/IT/Security/Sales/Ops); governance metadata (purpose, owner, version, updated, applicable systems, risk classification, grounding sources); quality standards (accuracy, safety, compliance, repeatability, consistency); storage (SharePoint, GitHub Enterprise, Azure DevOps, Copilot Studio prompt guides).
- Governance: version control; review/approval (domain experts, RAI reviewers, security); testing across inputs/edge cases/model versions; lifecycle (retire outdated, update on rule changes, monitor drift).
- Refs: /azure/copilot/write-effective-prompts; /azure/copilot/example-prompts.

## U11 Develop use cases for customized small language models (7 min)
- SLM customization: domain tuning, behavior tuning, task optimization. Phi-3 cited.
- **Misconception: SLMs are NOT always safer than LLMs and don't always reduce misinformation.**
- Use cases: domain-specific knowledge workflows (regulatory, contract, medical/legal/financial reasoning); operationally constrained environments (edge/IoT, high-volume, real-time, intermittent connectivity); security/safety requiring full training-data control; productivity scenarios tuned to internal style; reasoning-heavy orchestration/planning at low cost.
- Anti-patterns: building SLM when RAG over general model suffices; underestimating data curation/eval effort; SLM as misinformation silver bullet; SLMs for broad creative reasoning.
- Risks: overfitting narrow data; poor edge-case generalization; governance gaps from rushed safety tuning.
- Decision matrix: domain specificity, latency, cost sensitivity, data sovereignty, task complexity, deployment env, regulatory.
- SLM Success Scorecard: task accuracy, latency, cost per 1,000 requests, safety incident rate, drift.
- Refs: arxiv 2405.20347; Phi-3 blog (azure.microsoft.com/blog/introducing-phi-3...).

## U12 Provide prompt engineering guidelines and techniques (7 min)
- Core: clarity/specificity; context/background (purpose, audience, sources, constraints); format/output control (tables, bullets, JSON, steps, exec summaries); constraints/guardrails; iterative refinement loop (prompt→review→refine→reprompt).
- Techniques: role prompting; instruction+context+output; few-shot; chain-of-thought; multi-step flows.
- Prompt design framework: Intent | Context | Instruction | Examples | Output Format | Constraints.
- Maturity model: L1 basic → L2 guided → L3 structured → L4 optimized (few-shot, formatting) → L5 enterprise (templates, version control, governed library).
- Eval rubric: accuracy, completeness, safety/compliance, format adherence, reasoning quality, variance across runs.
- Pitfalls: overly long prompts; conflicting instructions; missing context; overuse of CoT; sensitive-data leakage; misinformation.
- Refs: /azure/foundry/openai/concepts/prompt-engineering; GPS-Prompt-Engineering-Labs (microsoft.github.io); /microsoft-copilot-studio/prompt-assistant; create-prompts-for-generative-ai-training-tools.

## U13 Identify key business user roles for AI workloads (8 min)
- Roles + failure mode if missing: Executive sponsor (stalled adoption/funding); AI CoE lead (no oversight, RAI pillar breakdown); Product owner (listless solutions, tech debt); Business domain specialist (incorrect information risks); Data owner/steward (poor quality/compliance risk); Responsible AI/compliance officer (ethics/bias issues); Change management & skilling lead (adoption failure).
- Azure WAF personas: AI Engineer, Data Scientist, Data Engineer, Application Developer, MLOps/AIOps Engineer.
- Practices: role-mapping workshop, gap analysis, RACI building. Additional roles: use case owner, process owner, knowledge manager, AI adoption champion, BA, regression testing engineer, QA lead.
- Refs: scale-ai/3-organize-ai-success; Azure Essentials AI CoE blog; intro-ai-center-excellence/4-determining-organizational-roles-responsibilities.

## U14 Evaluate regional and local AI data regulation compliance (6 min)
- Domains: data protection/privacy (CCPA/CPRA, Colorado, LGPD, India DPDP); AI-specific (EU AI Act, Canada AIDA, Singapore framework, US executive/state); industry (HIPAA, FINRA/SEC/PCIDSS, FERPA, NIST); local (biometric, automated decision-making, employee monitoring, transparency).
- 7-step framework: identify jurisdictions → map regulations → classify workload risk (low internal / medium customer-facing / high automated decisions) → assess data requirements (residency, sovereignty, access, encryption, logging) → evaluate AI obligations (transparency, human oversight, eval, bias testing, safety) → map to Microsoft controls (Azure regions, Purview, RAI dashboards, Azure AI Content Safety, Azure Policy) → document & approve.
- AI CoE duties: governance frameworks, regulatory impact evaluation, cross-functional collaboration, templates/tools (checklists, DPIAs, model docs, RAI workflows).

## U15 Include elements in a Microsoft AI Center of Excellence (7 min)
- Elements: executive sponsorship; dedicated CoE leader; multidisciplinary team (strategy, data, ML, governance, security, ops, business SMEs).
- Placement: inside CCoE, within Data/Enterprise Architecture, or standalone (only if no supporting team).
- Maturity: Centralized (gatekeeper, approval authority) → Hybrid → Advisory (consultant; product teams own delivery; governance embedded in platforms).
- Functions: AI strategy; skills development (gap assessments, learning paths, prompt/agent libraries); governance/standards; project intake/prioritization; delivery support (patterns, PoCs); operations (performance/drift monitoring, shared repos/pipelines).
- Failure modes: overcentralization→bottlenecks; undergovernance→shadow AI; no sponsor→stalled; no data governance→compliance risk; gatekeeper-not-enabler; no change management→low adoption.
- Refs: intro-ai-center-excellence; CAF center-of-excellence (GitHub); /azure/cloud-adoption-framework/.

## U16 Design AI solutions using multiple Dynamics 365 apps (6 min)
- Considerations: shared business context (unified customer/product/operational state); process continuity across apps (Sales→Service→Finance→Field Service); data interoperability (harmonized Dataverse tables, consistent schemas, clean integration boundaries, event-driven flows).
- Multi-session patterns: time-persistent context for case routing, opportunity progression, follow-ups, escalations; store AI insights in structured entities; avoid volatile content in prompts.
- Single vs multi-agent in D365: single for simple linear single-domain; multi for cross-domain (Planner orchestrates, Workers retrieve domain info, Reviewer validates).
- Intent-driven architecture: intent parsing → context routing → adaptive actions → event-based triggers (Dataverse events, minimize point-to-point).
- Design: data readiness, security (app-specific + row-level), operationalization (cross-app monitoring, logging, versioning), UX (consistent Copilot, app-adaptive recommendations, explanations).
- Refs: dev.to intent-driven D365 architecture; D365 2025 wave 1 multisession apps release plan.

## U17 Design user prompt training for AI solution adoption (5 min)
- Personas: everyday business users (basic prompting, limitations); power users/champions (advanced prompting, templates, coaching); managers/decision makers (reviewing insights, governance); accessibility-focused users (voice prompting, inclusive design).
- Curriculum: how AI interprets prompts; patterns (instruction+context+output, role, few-shot, multi-step, correction); workflow-integrated prompting; responsible prompting (no sensitive data, guardrails, validate output, bias awareness).
- Program: awareness training; prompt literacy; workflow-integrated training; reinforcement (office hours, champions, prompt library, in-app guidance).
- Assets: prompt playbooks, prompt library, scenario exercises, accessibility-friendly materials, in-app guidance (tooltips, suggested prompts).
