# Notes

- User: senior data scientist, Azure AI in corporate environment.
- Strong: Azure AI Foundry, IaaS/PaaS (vnet, Container Apps). Skip fundamentals there; use Foundry concepts as anchors/analogies for new material.
- Weak (self-reported): Dynamics 365 apps, Copilot Studio / Power Platform, strategy/governance/ALM/ROI.
- Wants: mix of scenario quizzes + case studies. Exam in 1–2 months. 5+ hrs/week.
- Lesson feedback (2026-08-17): lesson 1 style is good, but go DEEPER/more technical where necessary; lessons can be LONGER — user reserves ≥1 hour/day. Target ~2–2.5x lesson-1 volume.
- AI-103 acceleration (2026-08-17): where AB-100 material overlaps AI-103, include it inline in a blue `.ai103` "AI-103 accelerator" box (component added to assets/lesson.css). Overlap map used: retrieval/indexing↔L2; multi-agent orchestration patterns↔L3; model router/model choice/quotas↔L4; CLU+prompt framework↔L5; speech/voice+OBO auth↔L6; tool schemas/declarative-vs-code-first/fine-tuning↔L7.
- Lesson conventions established (L2+): top `.recall` box with 3 effortful-retrieval prompts from earlier lessons (answers in <details>); 6–10 scenario quiz questions with parallel, near-equal-length options (±2 words, varied correct letters); mid-lesson recall box; case study with reveals; prev/next footer links.
- Ponytail mode: disabled for this repo (2026-08-16).
- Cert plan (2026-08-16): AB-100 first, then **AI-103** (user found AB-100 prereq certs missing; sequence doesn't matter). AI-103 cache lives in `materials/ai-103/` (overview, study-guide, learning-paths). AI-103 suits user's Foundry strength; unit-level module content NOT yet cached — fetch on demand when AI-103 study starts.
- Exam weights: Deploy 40–45% is the biggest domain — bias the lesson sequence toward it once Plan/Design foundations exist.

## Material quality note (from full read-through, 2026-08-16)

Learning path units are high-level and repetitive; the meat is in their linked references (CAF AI agents, product docs). Lessons must compress + add scenario judgment the units lack. Full per-module exam-critical cores are in learning-records/0002.

## Materials cache (2026-08-16)

`materials/` holds one distilled-but-faithful markdown per module: `study-guide.md`, `learning-path.md`, `01-*.md` … `11-*.md`. Objectives, decision tables, limits, and reference URLs preserved. **Write lessons from these files; never re-fetch Microsoft Learn unless the cache looks stale or a gap is found.**

## Lesson sequence (tentative)

1. ✅ 0001 Platform decision ladder (Plan)
2. ✅ 0002 Requirements & grounding data (Plan; M2) — +AI-103: retrieval/indexing
3. ✅ 0003 AI strategy: CAF ↔ agent lifecycle, AI CoE, roles, multi-agent orchestration patterns (Plan; M3) — +AI-103: orchestrated multi-agent. Note: M3 U14 (regional compliance) deferred → fold into lesson 12; U16/U17 (multi-D365 design, prompt training) unplaced — candidates for review lessons.
4. ✅ 0004 ROI/TCO + build-buy-extend + model router + SLM/custom-model economics (Plan; M4 + M3 U9/U11) — +AI-103: model choice, quotas/cost
5. ✅ 0005 Copilot Studio core: anatomy, orchestration modes, knowledge, topics, NLU/CLU/generative, reasoning modes, prompt actions, agent flows (Design; M5/M6) — +AI-103: CLU, prompt framework
6. ✅ 0006 D365 CX Copilot: business terms, customization, connectors, contact center, voice/IVR (Design; M5 + M6 U7 voice) — +AI-103: speech solutions, OBO/managed identity
7. ✅ 0007 Extensibility: custom models, 4 layers, M365 declarative agents, MCP, Computer Use, Teams/SharePoint agents (Design; M6) — +AI-103: tool schemas, fine-tuning paths
8. Prebuilt agents: D365 CS agent types, F&O plugins/knowledge, Copilot for Sales/Service (Design; M7)
9. Monitoring, telemetry, tuning (Deploy; M8)
10. Testing AI solutions (Deploy; M9)
11. ALM: data, agents, models, D365 (Deploy; M10)
12. Security, governance, RAI, residency, audit trails (Deploy; M11 + M3 U14)
13+. Spaced review sessions mixing domains; interleave earlier topics.
