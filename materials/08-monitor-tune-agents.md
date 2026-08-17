# Module 8: Monitor, analyze, and tune AI agents (8 units)

Source: https://learn.microsoft.com/en-us/training/modules/analyze-monitor-tune-ai-powered-business-solutions/

Objectives: monitoring frameworks; observability tools/processes; backlog + feedback analysis; AI-based diagnostics/tuning; performance metrics; telemetry interpretation.

## U2 Recommend process tools for monitoring agents (6 min)
- Monitoring layers: Operational health (uptime, errors, throttling, delays); Performance (response times, action success, tool reliability, workflow completion); Quality/output accuracy (business-rule alignment, deviation); Usage insights (volume, adoption, feature utilization); Risk/compliance/security (guardrail violations, sensitive-data handling, suspicious spikes).
- Processes: monitoring operating model (roles, incident response, standardized metric definitions + baselines, log review cadence, change management, documented expected behaviors); guardrails + threshold alerts (latency, exception volume, unusual activity, tool failures, prompt spikes); regular quality evaluations (HITL spot checks, scenario evals, low-confidence review, compliance validation); continuous improvement (failure patterns, training needs, prompt improvements, workflow/model retraining).
- Tools: **Azure Monitor** (telemetry, dashboards, alert rules, Log Analytics, KQL diagnostics; agent workflows, connector failures); **Microsoft 365 admin analytics** (usage volume, adoption/engagement, low-usage departments); **Copilot & agent analytics dashboards** (invocation frequency, task completion, common queries, productivity patterns, guardrail events); **Power Platform Admin Center** (environment health, connector usage/limits, flow telemetry, DLP impact); **Foundry observability / centralized platforms** (multisystem logs, event traces, cross-env dashboards, model execution insights); custom dashboards (Power BI KPIs, usage heatmaps, drift viz, compliance trends).
- Agent health summary example: name | success rate | avg response | errors | trend.
- Best practices: centralize logs; standard naming; SLAs for responsiveness; automated alerts on critical workflows; monitoring into monthly ops reviews.
- Refs: describe-monitoring-tools-azure/4-describe-azure-monitor; perform-admin-tasks-microsoft-365-copilot; /azure/ai-foundry/observability/how-to/how-to-monitor-agents-dashboard; /power-platform/admin/copilot/copilot-hub.

## U3 Analyze backlog and user feedback for AI agent usage (6 min)
- Backlog contains: enhancement requests, feature gaps, recurrent issues/failure modes, user friction, operational risks, governance misalignment.
- Feedback sources: conversation transcripts, usage analytics, support tickets, surveys, in-app ratings, observability dashboards.
- Framework: categorize by domain — Accuracy & Reasoning; Knowledge (outdated content, insufficient grounding); Performance (latency, timeouts); UX (confusing prompts/flows); Integration (API failures, connector limits, data access); Governance & Compliance (guardrail triggers, DLP conflicts, restricted actions) → prioritize by impact/effort matrix → leverage feedback signals (volume, severity, transcript sentiment, missed expectations, suggestions).
- Transcript analysis: misunderstood intent, abandonment points, incorrect reasoning, missing knowledge, human-intervention points. Extract failure paths → map to root causes → identify training/knowledge updates → recommend guardrail/action adjustments → agent improvement plan.
- Monitor: usage trends, peak periods, top intents, high-failure prompts, actions/session, guardrail interventions, data access denials, latency.
- Close the loop: consolidate backlog+feedback → align to strategy → measurable outcomes → improvement releases → validate post-release → monitor drift/regression. Communicate themes, plans, insights, risks to stakeholders.
- Refs: /microsoft-copilot-studio/guidance/kit-agent-inventory; copilot-hub; analytics-transcripts-powerapps.

## U4 Apply AI-based tools to analyze, identify issues, perform tuning (5 min)
- Analysis domains: operational health; quality of reasoning; knowledge coverage; UX; governance/compliance signals.
- Root cause categories: model/prompt issues (misinterpretation, insufficient context); knowledge gaps; integration failures (connector constraints, API limits, access rules); configuration (env variables, feature toggles, roles); governance interference (DLP blocking, sensitivity labels, restricted actions).
- Transcript review framework: identify user goal → review system interpretation → compare output vs expected → mark friction → propose knowledge/behavior/workflow improvements.
- Performance scorecard: success rate; latency; error volume; knowledge accuracy; guardrail compliance; user satisfaction.
- Tuning strategies: **Knowledge** (add/update files, remove stale, restructure); **Behavioral** (adjust orchestrations/steps, clarifying instructions, fallback strategies); **Performance** (optimize connectors/calls, reduce steps, fix slow logic/oversized payloads); **Governance-aligned** (review DLP/labels/access, keep logging/auditing intact).
- Issue map: incorrect responses→knowledge gap→add/update content; slow execution→workflow complexity→optimize steps; blocked actions→governance→adjust roles/labels; unexpected behavior→model logic→refine instructions; frequent restarts→integration→fix API/connector settings.
- Refs: admin-logging-copilot-studio; analytics-improve-agent-health; analytics-overview.

## U5 Monitor AI agent performance metrics (5 min)
- Core metrics — Operational: latency, throughput, error rate, resource utilization (compute/memory/tokens). Quality/reasoning: response accuracy, knowledge coverage, action effectiveness. User-centered: satisfaction indicators, abandonment rate, task completion rate.
- Toolset (regardless of platform): observability (system logs, execution traces, run logs, exceptions, counters); behavioral telemetry (interaction logs, transcripts, intent patterns, feature usage); analytics dashboards (top tasks, success/failure, volumes, peaks, quality).
- Generative AI monitoring: **model drift** (shifting response patterns, declining accuracy, more off-topic); **token consumption** (cost-performance ratio, prompt efficiency); **reliability** (latency spikes, model-selection effectiveness, external dependency errors).
- Diagnosis table: incorrect responses→missing/outdated knowledge→update grounding; slow responses→heavy workflows/dependency latency→streamline/orchestration; action failures→connector/API constraints→fix/permissions; high abandonment→confusing steps→UX/prompt clarity; guardrail violations→policy mismatch→adjust DLP/labels/allowed actions.
- Tuning: refine instructions/prompts/behaviors; update/reorganize knowledge; adjust action sequences; reconfigure env/connectors; versioning + rollback for safety.
- Refs: analytics-overview; monitor-generative-ai-app; monitor-azure-machine-learning.

## U6 Interpret telemetry data to tune AI performance (4 min)
- Telemetry categories: operational (latency, throughput, errors, throttling); model-level (token usage/cost, response consistency, drift indicators); behavioral (satisfaction, completion, prompt patterns, abandonment); governance (guardrail interventions, blocked actions, policy conflicts).
- Focus on patterns, not isolated events. Signal map: latency increase→model overload/connector lag→optimize workflow, cache; high token usage→verbose outputs→adjust prompts; error spike→integration failure→validate dependencies; quality drop→drift/missing context→update knowledge; guardrail triggers→policy conflict→adjust governance.
- Tuning opportunities: prompt refinement; knowledge updates; behavioral adjustments (fallback logic, action clarification, orchestration); cost optimization.
- Diagnostic workflow: monitor key metrics (baseline) → identify anomalies → correlate signals → determine root cause (model/integration/prompt) → apply targeted tuning → validate improvements (before/after telemetry).
- KPIs: responsiveness (median response time); accuracy & relevance; reliability (low failure rate); cost-effectiveness (token usage + model selection); user outcome completion.
- Refs: monitor-generative-ai-app/6-informed-decisions; monitor-azure-machine-learning; evaluate-models-azure-ai-studio; microsoft-copilot-fine-tune-model.
