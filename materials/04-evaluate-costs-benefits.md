# Module 4: Evaluate costs and benefits of AI solutions (7 units)

Source: https://learn.microsoft.com/en-us/training/modules/evaluate-costs-benefits-ai-powered-business-solution/

Objectives: ROI criteria + TCO; create ROI analysis; build/buy/extend; implement model router.

## U2 Evaluate ROI criteria incl. TCO (6 min)
- AI ROI must be: measurable, repeatable, aligned to business outcomes, grounded in real usage analytics.
- ROI categories: Productivity gains (time saved/task, less manual entry, faster resolution); Cost savings (labor hours, ticket volume); Revenue impact (conversion, lead qualification, retention, upsell); Risk reduction (compliance violations, errors); Strategic/innovation value.
- Copilot Studio ROI analytics: usage (sessions, active users, duration); automation (completion, abandonment, task success); cost savings (time saved, savings/task, workload reduction); quality (feedback scores, error rates, escalation frequency).
- TCO across lifecycle: Development (data prep, prompt engineering, agent design/testing, integration); Deployment (infra, licensing, security/compliance, API usage); Operational (monitoring/eval, retraining, prompt library maintenance, support, training); Change management (skilling, comms, process redesign); Decommissioning.
- 6-step framework: define business outcomes → identify ROI drivers → calculate TCO → quantify benefits → compare (payback period, NPV, cost-benefit ratio, annualized ROI) → validate with stakeholders (Finance, Ops, owners, AI CoE).
- Refs: /power-platform/release-plan/2025wave1/microsoft-copilot-studio/analyze-agent-return-investment; forecast-agent-return-investment module; ai-agent-cost-structure module.

## U3 Create ROI analysis for a proposed AI solution (8 min)
- Frame scope: single process, boundaries, baseline period, baseline metrics (volume, AHT, rework rate, backlog, satisfaction). Establish "no-AI" baseline first.
- Value levers: time saved per transaction; quality lift (error reduction, FCR, fewer escalations); capacity/throughput.
- Copilot Studio **Savings** capability: savings per run or per tool; configured on agent's Analytics page; admins can disable money-based savings (then track time and convert).
- Formula: Annual_Benefit = (Minutes_Saved_per_Run/60) × Runs_per_Year × Labor_Rate (+ error cost avoided, backlog/working-capital effects).
- Five TCO drivers: Infrastructure; Development & integration; Data quality & preparation; Expertise & staffing; Operations & licensing.
- ROI: Net_Benefit = Annual_Benefit − Annual_TCO; ROI% = Net/TCO × 100; Payback(months) = Initial_OneTime_Cost / Net_Monthly_Benefit.
- Sensitivity bands (optimistic/expected/conservative) varying adoption rate, minutes saved, labor rates, rework effects. Use field research as directional anchors, own telemetry in driver's seat.
- Worked example: email triage, 1.8 min/message, 50k msg/mo, 60% adoption, $45/hr → ~$486k annual savings, $300k Y1 TCO → ROI ~62%, payback ~7.4 months.
- Executive one-slide: problem/scope, intervention, measured impact, financials, confidence/risks, pilot→scale decision.
- Refs: arxiv.org/html/2504.11443v1; /microsoft-copilot-studio/analytics-cost-savings.

## U4 Analyze whether to build, buy, or extend (6 min)
- **Build**: competitive differentiation; prebuilt fails regulatory/compliance; data sensitivity requires full control; strong AI/ML capability. Risks: upfront cost, timeline, maintenance.
- **Buy**: time-to-value priority; standardized processes; low AI maturity; need vendor support/updates. Risks: lock-in, limited extensibility, feature gaps.
- **Extend**: want Copilot/platform to adopt internal logic; domain knowledge via grounding/connectors/plugins; base model good but needs enterprise adaptation. Balanced cost, faster than build, more flexible than buy.
- TCO by domain (Build/Buy/Extend): Infrastructure H/L/M; Development H/L/M; Data prep H/L/**H**; Expertise H/L/M; Operations H/M/M.
- 9-step flow: define requirements → strategic importance (differentiation vs commodity) → assess vendor solutions → evaluate extend feasibility → evaluate custom feasibility → estimate TCO (5 domains) → forecast ROI → weighted scoring → optimal value-to-cost.
- Refs: Microsoft Cloud blog build-buy-or-both (2024-03-06); ai-agent-cost-structure; business-value-microsoft-copilot-solutions/5-extend-copilot-organization.

## U5 Implement a model router (5 min)
- Azure AI Foundry **Model Router**: single unified endpoint over multiple models; intelligent routing by task type, model capabilities, cost, latency, custom rules; centralized governance (versioning, monitoring, analytics, safety).
- Why: cost optimization (SLM for simple, LLM when needed, fewer tokens); performance (latency, specialization); reliability (failover, auto-switch to new versions); hybrid strategies.
- Routing rule types: **Static** (task=classification→SLM; domain=finance→fine-tuned); **Weighted** (A/B, gradual rollout); **Fallback** (backup on failure); **Version-based** (latest stable vs experimental traffic).
- Implementation: define strategy (cost/performance/accuracy/hybrid) → register models → configure rules → integrate (agents, Copilot extensions, backends, multi-agent) → monitor (latency, cost, accuracy, usage distribution).
- Architects should run a routing-rule design workshop; rules vary per org; adjust to reduce cost while maintaining performance.
- Refs: /azure/ai-foundry/openai/concepts/model-router.
