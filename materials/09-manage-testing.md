# Module 9: Manage testing and optimization of AI solutions (8 units)

Source: https://learn.microsoft.com/en-us/training/modules/manage-testing-optimization-ai-solutions/

Objectives: system-level AI testing; agent behavior/scenario validation; test plans; testing tools; quality metrics; regression testing.

## U2 Recommend processes for testing AI solutions (4 min)
- Goal: validate accuracy, consistency, safety, governance across diverse inputs/scenarios.
- Elements: **Test data** (controlled, representative, synthetic where needed; multiple personas/scenarios); **Input quality checks** (incomplete/conflicting/malicious/ambiguous inputs — stability, safety, graceful degradation); **Output validation** (accuracy, relevance, format, tone); **Human oversight** (HITL checkpoints, approval gates, human validation of outputs); **Transparency & traceability** (log inputs/decisions/actions/versions; test records auditable); **Safety & ethics** (misuse tests, bias/unsafe outputs, RAI policy adherence).
- Ref: microsoft.com/en-us/ai/responsible-ai.

## U3 Recommend testing tools for AI agents (6 min)
- Foundry evaluation: pre-built agents — **Agent Evaluators** (task navigation, intent resolution, tool invocation, groundedness, safety); custom agents — **evaluation pipelines** (standard/custom evaluators), red-teaming, simulation (adversarial/edge-case), tracing + Azure Monitor, load testing, integration/pipeline checks, benchmarking vs alternative models, data drift detection.
- Copilot Studio / Power Platform agents: conversation simulation + **test canvas**; **Conversation KPI** test cases; **AI Evaluations** (accuracy, relevance, groundedness, safety); test plans/scenario suites; **Copilot Studio Kit** (automation of regression/validation tasks).
- Additional: browser-based agent test interfaces; environment/ALM testing.
- Selection criteria: agent type (conversational/task/autonomous); lifecycle stage; risk profile; governance needs; automation scale.
- Tool matrix: Simulation → Foundry simulation / test canvas; Prompt & behavior → Evaluations / AI Evaluations / test plans; Regression → Copilot Studio Kit / pipelines; Safety → red-teaming / guardrail testing; Performance/load → load testing; Logging/tracing → tracing, Monitor / transcript analysis.
- Refs: /azure/ai-foundry/concepts/evaluation-approach-gen-ai; /microsoft-copilot-studio/test-power-virtual-agents-bots (test canvas); conversation-kpi-test-cases; manage-evals-overview; /microsoft-copilot-studio/guidance/kit-overview (Copilot Studio Kit).

## U4 Recommend quality metrics for evaluating AI agent responses (4 min)
- Six categories:
  1. **Accuracy** — factual correctness, correct reasoning, valid conclusions, no hallucinations.
  2. **Consistency** — stable responses across runs/inputs/contexts; lack of drift.
  3. **Relevance** — user-goal alignment, context appropriateness, avoids unnecessary assumptions.
  4. **Tone** — clarity, professionalism, empathy (service scenarios), tone alignment with brand/communication policies.
  5. **Grounding** — source accuracy, data-quality adherence, policy alignment.
  6. **Safety** — no harmful content, compliance, guardrail adherence, appropriate refusals.
- Refs: analytics-improve-agent-health; manage-evals-overview; /azure/ai-foundry/concepts/evaluation-metrics-built-in; custom-evaluators.

## U5 Design AI agent evaluation tests (4 min)
- Test design approach:
  1. Identify core behaviors (navigation, reasoning, comprehension, tool usage, escalation, response formulation).
  2. Create scenario suites (persona-based, simple→complex, multi-turn, boundary/edge cases).
  3. Simulate inputs (well-formed, incomplete, conflicting, unusual phrasing, multilingual).
  4. Validate outputs (rule alignment, stable format, correct tone, compliant actions).
  5. Evaluate tool interactions (API calls, data lookups, workflows; logs confirm expected calls).
- Include: boundary conditions; stress/adversarial cases; multi-turn conversations; real-world variability.
- Refs: authoring-template-topics; /training/modules/create-topics-copilot-studio/; analytics-transcripts-powerapps.

## U6 Design testing and optimization for generative AI model prompts (5 min)
- Prompt testing: **prompt variants** (structure, style, detail; A/B testing); **temperature** (lower = consistency/precision; higher = creativity); **output structure** (length, formatting, steps, adherence to rules).
- Copilot Studio prompt testing: modify/generate prompts, preview results, save variant drafts, align outputs with rules, compare variants systematically.
- M365 Copilot prompt behavior: organizational tone, operational rules, restrictions/constraints, formatting standards.
- Common issues: ambiguity/misinterpretation; inconsistent style; over-reliance on unsupported assumptions; missing context. Fixes: clarify instructions; structured guidance; explicit constraints; require grounding.
- Optimization loop: define evaluation criteria (accuracy, consistency, tone, relevance, grounding) → test variants → measure against criteria → iterate (small targeted changes) → monitor in production → adjust for drift/emerging patterns.
- Refs: generative-ai-prompts; nlu-generative-answers-prompt-modification; /microsoft-365-copilot/extensibility/prompts; microsoft-365-copilot-prompts.

## U7 Design regression testing processes for AI agents (4 min)
- Risks: logic changes; broken integrations; degraded reasoning; altered data access.
- Framework: **baseline behaviors** (expected responses, tool interactions, workflow sequences, compliance rules); **retesting** (full functional suite; critical paths high priority; new + old test cases); **automation** (repeatable simulations; automated comparison; integrated into update cycles); **environment consistency** (config parity, controlled data inputs, isolated test environments).
- **Change impact analysis**: identify modified elements; determine affected workflows; adjust test priorities; expand scope when upstream dependencies change.
- Refs: analytics-transcripts-powerapps; authoring-topic-migration; manage-evals-overview.
