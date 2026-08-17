# AI-103 Learning Materials — Microsoft Learn paths

Fetched 2026-08-16. Six learning paths map to the five exam domains (37 unique modules; 4 modules shared between the two vision paths). These are hands-on, Python/Foundry-SDK oriented with exercises — unlike the AB-100 path, expect code labs.

## P1. Get started with AI applications and agents on Azure (7 modules, Beginner)
https://learn.microsoft.com/en-us/training/paths/get-started-ai-apps-agents/
Prereq: basic computing concepts + Python.
1. Get started with AI in Azure — training/modules/get-started-with-ai-in-azure/
2. Get started with generative AI and agents in Azure — get-started-with-generative-ai-and-agents/
3. Get started with text analysis in Azure — get-started-text-analysis-azure/ (gen AI models + Azure Language, Python client)
4. Get started with speech in Azure — get-started-speech-azure/ (Azure Speech, Foundry Tools)
5. Get started with computer vision in Azure — get-started-vision-azure/ (multimodal, image-gen, video-gen models)
6. Get started with AI-powered information extraction in Azure — get-started-information-extraction/ (Content Understanding)
7. Get started with Microsoft Foundry IQ — get-started-foundry-iq/ (enterprise retrieval, grounded cited responses)

## P2. Develop generative AI apps in Azure (6 modules, Intermediate, course AI-3016)
https://learn.microsoft.com/en-us/training/paths/develop-generative-ai-apps/
1. Plan and prepare to develop AI solutions on Azure — prepare-azure-ai-development/
2. Select, deploy, and evaluate Microsoft Foundry models — model-catalog-evaluate/ (benchmarks, endpoints, manual+automated eval)
3. Develop a generative AI chat app with Microsoft Foundry — foundry-sdk/ (projects, Responses API)
4. Develop generative AI apps that use tools — use-generative-ai-tools/
5. Optimize generative AI model performance with Microsoft Foundry — optimize-generative-ai-model-performance/ (prompt eng, RAG, fine-tune, when to combine)
6. Implement a responsible generative AI solution in Microsoft Foundry — responsible-ai-studio/

## P3. Develop AI agents on Azure (9 modules, Intermediate, course AI-3026)
https://learn.microsoft.com/en-us/training/paths/develop-ai-agents-azure/
1. Develop AI agents with Microsoft Foundry and Visual Studio Code — develop-ai-agents-azure-vs-code/ (Foundry Agent Service, portal + VS Code ext)
2. Integrate custom tools into your agent — build-agent-with-custom-tools/
3. Integrate MCP Tools with Azure AI Agents — connect-agent-to-mcp-tools/
4. Build knowledge-enhanced AI agents with Foundry IQ — introduction-foundry-iq/ (RAG, shared knowledge platform, data optimization, cited responses)
5. Integrate your agent with Microsoft 365 — integrate-foundry-agent-with-m365/ (publish to Teams + M365 Copilot, Work IQ)
6. Build agent-driven workflows using Microsoft Foundry — build-agent-workflows-microsoft-foundry/
7. Develop an AI agent with Microsoft Agent Framework — develop-ai-agent-with-semantic-kernel/
8. Orchestrate a multi-agent solution using the Microsoft Agent Framework — orchestrate-semantic-kernel-multi-agent-solution/
9. Discover Azure AI Agents with A2A — discover-agents-with-a2a/ (agent discovery, remote agent comms, coordinated tasks)

## P4. Develop computer vision solutions with Microsoft Foundry (4 modules, Intermediate)
https://learn.microsoft.com/en-us/training/paths/develop-computer-vision-with-foundry/
1. Develop a vision-enabled generative AI application — develop-generative-ai-vision-apps/ *
2. Generate images with AI — generate-images-azure-openai/ *
3. Generate videos with Microsoft Foundry — generate-video-with-foundry/ * (Sora 2)
4. Analyze images with Content Understanding — analyze-images-with-content-understanding/ *

## P5. Develop natural language solutions in Azure (7 modules, Intermediate)
https://learn.microsoft.com/en-us/training/paths/develop-language-solutions-azure-ai/
1. Analyze text with Azure Language in Foundry Tools — analyze-text-ai-language/
2. Develop a text analysis agent with the Azure Language MCP server — develop-text-analysis-agent-language-mcp/ (language detection, entity rec, PII redaction)
3. Develop a speech-capable generative AI application — develop-generative-ai-audio-apps/
4. Create speech-enabled apps with Azure Speech in Foundry Tools — create-speech-enabled-apps/
5. Develop a speech agent with the Azure Speech MCP server — develop-speech-agent-speech-mcp/
6. Develop an Azure Speech Voice Live Agent in Microsoft Foundry — develop-voice-live-agent/ (Voice Live API/SDK)
7. Translate text and speech with Microsoft Foundry Tools — translate-text-speech/

## P6. Extract insights from visual data on Azure (8 modules, Intermediate)
https://learn.microsoft.com/en-us/training/paths/insight-visual-data/
1. Develop a vision-enabled generative AI application — develop-generative-ai-vision-apps/ *
2. Generate images with AI — generate-images-azure-openai/ *
3. Generate videos with Microsoft Foundry — generate-video-with-foundry/ *
4. Analyze images with Content Understanding — analyze-images-with-content-understanding/ *
5. Create a multimodal analysis solution with Azure Content Understanding — analyze-content-ai/
6. Create an Azure Content Understanding client application — analyze-content-ai-api/
7. Extract data with Azure Document Intelligence — extract-data-with-document-intelligence/ (OCR, key-value pairs, tables, prebuilt + custom models)
8. Create a knowledge mining solution with Azure AI Search — ai-knowldge-mining/ (note: URL slug has the typo "knowldge")

\* shared between P4 and P6. Unique modules: 7+6+9+4+7+4 = 37.

## Domain → path mapping (inferred from module scope vs study guide)
- Plan and manage (25–30%): P1, P2 (model catalog/deploy/eval), plus Foundry docs (RBAC, quotas, security) — no single path covers quotas/security/CI-CD deeply; flag as doc-study area.
- Generative AI + agents (30–35%): P2 + P3 (the core; two heaviest paths for the two heaviest domains).
- Computer vision (10–15%): P4 (+ P6 modules 1–4).
- Text analysis (10–15%): P5.
- Information extraction (10–15%): P6 modules 5–8.

## Practice assessment
Free Practice Assessment exists (AI Skills Navigator, sign-in required) — see overview.md. This is better than AB-100's situation (no official practice exam found there).
