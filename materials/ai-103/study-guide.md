# AI-103 Study Guide — Skills Measured (as of 2026-04-16)

Source: https://learn.microsoft.com/en-us/credentials/certifications/resources/study-guides/ai-103 (via aka.ms/AI103-StudyGuide). Fetched 2026-08-16.
Bullets under each skill illustrate how the skill is assessed; related topics may be covered.

## 1. Plan and manage an Azure AI solution (25–30%)

### Choose the appropriate Foundry services for generative AI and agents
- Choose an appropriate model for each task: LLMs, small language models, multimodal models, Foundry Tools
- Choose appropriate Foundry services for generative tasks, grounding, vector search, agent workflows, multimodal processing
- Choose an appropriate method for retrieval and indexing
- Choose appropriate memory, tool, and knowledge integration services for agent solutions

### Set up AI solutions in Foundry
- Design Azure infrastructure for AI apps and agent-based solutions
- Choose appropriate deployment options
- Configure model and agent deployments
- Integrate Foundry projects with CI/CD pipelines

### Manage, monitor, and secure AI systems
- Manage quotas, scaling, rate limits, cost footprints for model and agent workloads
- Monitor model performance, drift, safety events, grounding quality
- Monitor data ingestion quality, search index health, relevance performance
- Configure security: managed identity, private networking, keyless credentials, role policies

### Implement responsible AI across generative AI and agentic systems
- Configure safety filters, guardrails, risk detection, content moderation
- Apply responsible AI instrumentation: evaluators, safety evaluations, explanation tooling
- Implement auditing: trace logging, provenance metadata, approval workflows
- Govern agent behavior: oversight modes, constraints, tool-access controls

## 2. Implement generative AI and agentic solutions (30–35%)

### Build generative applications by using Foundry
- Deploy and consume LLMs, small models, code models, multimodal models
- Implement retrieval-augmented generation (RAG) in an application
- Design workflows, tool-augmented flows, multistep reasoning pipelines
- Evaluate models and apps: fabrications, relevance, quality, safety
- Integrate generative workflows into applications using Foundry SDKs and connectors
- Configure an application to connect to a Foundry project

### Build agents by using Foundry
- Define agent roles, goals, conversation-tracking approach, tool schemas
- Build agents that integrate retrieval, function-calling, conversation memory
- Integrate agent tools: APIs, knowledge stores, search, content understanding, custom functions
- Implement orchestrated multi-agent solutions
- Build autonomous or semiautonomous workflows with safeguards and approval flow controls
- Integrate monitoring into deployed agents, evaluate agent behavior, perform error analysis

### Optimize and operationalize generative AI systems
- Tune generation behavior: prompt engineering, model parameters
- Implement model reflection, chain-of-thought evaluations, self-critique loops
- Set up observability: tracing, token analytics, safety signals, latency breakdowns
- Orchestrate multiple models, flows, or hybrid LLM + rules engines

## 3. Implement computer vision solutions (10–15%)

### Design and implement image- and video-generation solutions
- Generate images from text prompts and reference media
- Generate videos from text prompts and reference media
- Configure image-editing workflows: inpainting, mask-based edits, prompt-driven modifications
- Implement workflows to edit generated videos
- Select and apply appropriate generation and editing controls

### Design and implement multimodal understanding workflows
- Analyze visual context with multimodal models
- Produce concise or detailed captions for single/multiple images
- Question-answering grounded in visual evidence
- Generate alt-text and extended image descriptions per accessibility guidelines
- Visual understanding via Azure Content Understanding in Foundry Tools (extract visual characteristics)
- Video analysis workflows to process and interpret video segments
- Configure single-task and pro-mode Content Understanding pipelines
- Identify objects, components, regions within images or video

### Implement responsible AI for multimodal content
- Filters to classify unsafe or disallowed visual content
- Detect and mitigate indirect prompt injection via embedded text in images
- Enforce visual policy rules: watermarks, prohibited symbols, brand usage, inappropriate-content detection

## 4. Implement text analysis solutions (10–15%)

### Apply language model text analysis
- Extract entities, topics, summaries, structured JSON outputs via generative prompting and Foundry Tools
- Detect sentiment, tone, safety issues, sensitive content
- Translate text via Azure Translator in Foundry Tools or LLM-powered translation flows
- Customize language model outputs for domain tasks (compliance summarization, domain extraction)

### Implement speech solutions
- Speech-to-text and text-to-speech workflows for agentic interactions
- Integrate speech as an agent modality, including custom speech models
- Enable multimodal reasoning from audio inputs
- Translate speech into other languages (language models + Foundry Tools)

## 5. Implement information extraction solutions (10–15%)

### Build retrieval and grounding pipelines
- Ingest and index content: documents, images, audio, video
- Configure semantic search, hybrid search, vector search for grounding
- Implement enrichment with custom or built-in skills (text, images, layout)
- Configure RAG ingestion flow, including documents and OCR
- Connect retrieval pipelines directly to workflows and agent tools

### Extract content from documents
- Multimodal pipelines combining OCR, layout analysis, field extraction
- Produce clean grounded representations for agents and RAG via Content Understanding
- Implement analyzers for structured or markdown outputs for downstream reasoning (Content Understanding)

## Documentation links from the study guide
- Azure AI services: /azure/ai-services/
- Azure AI Vision: /azure/cognitive-services/computer-vision/
- Azure AI Video Indexer: /azure/azure-video-indexer/
- Azure AI Language: /azure/cognitive-services/luis/
- Azure AI Speech: /azure/ai-services/speech-service/
- Azure AI Search: /azure/search/
- Azure OpenAI: /azure/ai-services/openai/
- Azure AI Document Intelligence: /azure/ai-services/document-intelligence/
- Community: Microsoft Q&A, AI - Machine Learning Tech Community + blog, The AI Show
