# Module 11: Design responsible, secure, and compliant AI solutions (11 units)

Source: https://learn.microsoft.com/en-us/training/modules/design-responsible-secure-compliant-ai-solutions/

Objectives: RAI principles in enterprise deployments; governance frameworks; safety mechanisms; security/privacy/regulatory compliance; enterprise-wide responsible usage.

## U2 Assess responsible AI principles for agents in Dynamics 365 (5 min)
- Six principles (Microsoft standard): **Fairness** (treat all similarly, e.g., consistent loan/lending outcomes); **Reliability & Safety** (rigorous testing, ongoing operational monitoring); **Privacy & Security** (privacy laws, security investment); **Inclusiveness** (empower all — 1B+ people with disabilities); **Transparency** (people understand AI; e.g., credit score rationale); **Accountability** (designers/developers responsible for systems they create; orgs establish internal review bodies).
- Applying to Copilot/agent workflows:
  - Data privacy/security: Copilot only accesses data user has permission for; no cross-boundary leakage; grounded in Business Chat (M365 data, limited transient processing); secure tenant handling; regional availability + compliance coverage.
  - Fairness/bias: validate across user groups/roles/regions; detect unequal response quality; compare outputs across users; monitor for inappropriate summaries/actions.
  - Transparency/explainability: users should know when Copilot generates content (summaries, emails, resolutions); control flow; can review/edit/approve/reject; audit logs; trace agent reasoning (intents, data sources, actions).
  - Accountability: human oversight for customer-facing suggestions; traceability of actions; governance ownership of agent configurations.
- Risks if ignored: inconsistent case handling; inaccurate summaries; privacy violations; unfair prioritization/routing; opaque decision-making → lost trust.
- Best practices: guardrails; validate summaries/actions; restricted permissions; sensitivity labels; consistent terminology; testing under controlled conditions.
- Framework elements: governance + policies; risk assessment process; guardrails + controls; monitoring + oversight; transparency + documentation.
- Refs: microsoft.com/ai/principles-and-approach; microsoft.com/en-us/ai/responsible-ai.

## U3 Recommend responsible AI governance frameworks (5 min)
- Components: policies (RAI principles, data privacy, transparency, accountability); oversight roles (AI CoE, risk owners, compliance partners); controls (guardrails, permission models, validation rules, testing gates); monitoring (telemetry, drift detection, audits, exception handling); documentation (design decisions, data sources, model/prompt versions, risks/mitigations).
- Azure/Foundry governance: RAI documentation + assessments; content safety filters; policy enforcement; transparency artifacts; centralized telemetry/logging.
- Power Platform/D365 governance: **environment strategy** (dev/test/prod separation); **DLP policies** (connector restrictions, data protection, cross-environment boundaries); **RBAC** (least privilege, feature-level permissions, maker/admin separation); tenant-level governance (Copilot/agent usage controls, feature toggles, region rules).
- Alignment: Microsoft Responsible AI Standard; enterprise compliance (GDPR, SOC, HIPAA); internal risk policies.
- Refs: /power-platform/well-architected/security/governance (+ governance-overview); /dynamics365/guidance/implementation-guide/updates-maintenance-governance; /training/paths/responsible-ai-foundations-partner-series/; /training/modules/responsible-generative-ai/.

## U4 Recommend responsible AI design principles (6 min)
- Key principles for agents:
  - Human oversight: approvals for sensitive actions; review of AI-generated content; escalation for high-impact decisions.
  - Transparency: disclose AI-generated content; explainability (intent classification, data sources, reasoning steps); auditability (logs, transcripts, config history).
  - Accountability: defined ownership; governance boards; approval workflows; documented config/behavior changes.
  - Fairness/bias awareness: test across user groups; monitoring for unequal outcomes; adjust prompts/knowledge/logic to reduce bias.
  - Data protection/compliance: permissions-based grounding; sensitivity labels; DLP policies; data residency adherence.
  - Safety: content filters; prompt shields; behavioral guardrails; red-teaming.
- Table: principle → implementation (e.g., Human oversight→approval gates; Transparency→AI disclosure; Accountability→audit logs/governance; Fairness→bias testing; Data protection→DLP/labels/RBAC; Safety→content filters/prompt shields/guardrails).
- Operationalizing: design reviews; RAI assessments; controlled rollout; monitoring + corrective action.
- Refs: /azure/cloud-adoption-framework/scenarios/ai/responsible-ai/; Microsoft Responsible AI Standard; /training/paths/responsible-ai-foundations-partner-series/.

## U5 Configure guardrails in Copilot Studio (5 min)
- Guardrail categories: **topic-level** (restricted topics, prohibited content); **behavioral** (tone rules, prohibited actions, escalation triggers); **grounding/data** (approved knowledge sources, data boundaries); **safety** (sensitive content, security constraints).
- Config areas: agent settings (fallback, error handling); topics/trigger phrases (what the agent handles); knowledge sources (what data it uses); system instructions (global behavior constraints).
- Table: category | config | examples: topic-level→restricted topics→"Do not discuss medical/legal advice"; behavioral→system instructions→"Always use professional tone"; grounding→approved sources→"Only use internal product docs"; safety→content filtering→"Block sensitive personal data requests".
- Use cases: prevent unsafe/off-topic outputs; restrict sensitive-data handling; enforce business rules; ensure compliance.
- Testing: scenario-based tests; try to bypass guardrails; review edge cases; validate fallback behavior.
- Refs: /microsoft-copilot-studio/responsible-ai-overview; responsible-ai-overview-additional.

## U6 Recommend content filters and blocklists (4 min)
- Layers: input filtering (block harmful/inappropriate prompts); output filtering (prevent unsafe/inaccurate/prohibited responses); blocklists (restricted words/phrases/topics); allowlists (approved topics/responses).
- Azure OpenAI/Foundry: content filters (violence, self-harm, hate, sexual); severity thresholds; system messages for behavior control; prompt shields (jailbreak/injection protection); custom filters.
- Power Platform/Copilot Studio: topic restrictions; restricted actions; knowledge source boundaries; governance/DLP alignment.
- Design considerations: balance safety vs usability; avoid over-blocking (frustration); test adversarial prompts; update filters as threats evolve.
- Ref: /microsoft-copilot-studio/responsible-ai-overview-additional.

## U7 Recommend actions for sensitive data handling (5 min)
- Practices:
  1. Data minimization (only necessary data; limit grounding; avoid sensitive fields in prompts).
  2. Access controls (RBAC; least privilege; user-level data permissions).
  3. DLP policies (restrict connectors; prevent cross-boundary data flow; align with compliance).
  4. Sensitivity labels (classify documents/records; Copilot respects labels; prevent unauthorized use in AI responses).
  5. Data masking/redaction (hide PII; sanitize transcripts; anonymize training/testing data).
  6. Encryption (in transit; at rest; secure connectors).
  7. Logging/auditing (record access/actions; track sensitive-data usage; support investigations).
- Copilot Studio / Foundry specifics: grounding respects permissions; system prompts enforce data handling rules; DLP across Power Platform; Foundry policies for model/data governance.
- Risks: data leakage via responses; unauthorized access to grounded content; exposure through logs/telemetry; misuse of sensitive fields in prompts.
- Refs: /power-platform/well-architected/security/data-classification; /dynamics365/guidance/implementation-guide/security.

## U8 Design security processes for AI solutions (5 min)
- Security pillars:
  - **Identity & access**: Entra ID auth; RBAC; service principals/managed identities for integrations; least-privilege service accounts.
  - **Network**: private endpoints for Foundry; VNet integration; firewall rules for connectors/data sources.
  - **Threat detection**: monitor suspicious usage; detect prompt injection attempts; alert on abnormal behavior.
  - **Incident response**: AI-specific IR runbooks; escalation paths for AI incidents; containment steps for compromised agents.
  - **Vulnerability management**: regular security reviews; dependency updates; patch agent components/connectors.
- M365/D365/Power Platform: tenant security settings; environment isolation; DLP; Conditional Access; audit logging.
- Foundry: private networking; content filters; prompt shields; policy enforcement; secure model endpoints.
- Ref: /power-platform/well-architected/security/.

## U9 Design privacy for AI solutions (5 min)
- Privacy design principles: privacy by design (embed from the start); data minimization; purpose limitation (use data only for stated purposes); transparency to data subjects (inform users how AI uses their data); user consent where required.
- Implementation: sensitivity labels + classification; data residency controls (region selection); retention/deletion policies (including AI-processed data + transcripts); "right to be forgotten" workflows (removal from indexes/training data); anonymization/pseudonymization for testing/training.
- Platform features: M365 Copilot transient processing of Business Chat data; Copilot Studio data handling per environment region; Foundry data privacy controls; Power Platform DLP.
- Risks: PII in training data; transcripts retaining sensitive conversations; cross-border data flows; secondary use of collected data.

## U10 Design regulatory compliance for AI solutions (5 min)
- Key regulations/frameworks: GDPR (data protection, automated decision rights); EU AI Act (risk-based tiers; enterprise AI typically "limited/minimal risk" but check classification); industry standards (HIPAA healthcare, SOC 2, ISO/IEC 42001 AI management, NIST AI RMF).
- Compliance design: map AI use cases to applicable regulations; maintain compliance documentation (data sources, model versions, decisions); audit trails; data processing agreements for vendors/connectors; periodic compliance reviews.
- Microsoft alignment: Microsoft Responsible AI Standard; compliance offerings per service (Foundry, Copilot, Power Platform certifications); Azure compliance documentation.
- Human oversight: required for automated decisions with legal/significant effects (GDPR Art. 22); escalation paths; documented approval gates.

## U11 Design responsible usage of AI across the enterprise (5 min)
- Enterprise-wide program: AI Center of Excellence (standards, review boards, shared patterns); adoption + enablement (training, prompt guidance, usage policies); intake/triage process for new AI use cases (risk tiering, feasibility); lifecycle governance (approval gates, periodic reviews, retirement).
- Communication: transparency to employees/customers about AI use; clear escalation/reporting channels for AI concerns; documentation of agent capabilities/limitations.
- Continuous improvement: monitor adoption + incidents; update policies as capabilities/regulations evolve; feedback loops from users into governance; share lessons across teams.
- Refs: /azure/cloud-adoption-framework/scenarios/ai/ (plan, govern, responsible-ai); Microsoft Responsible AI resources.
