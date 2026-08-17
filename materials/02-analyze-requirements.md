# Module 2: Analyze requirements for AI-powered business solutions (6 units)

Source: https://learn.microsoft.com/en-us/training/modules/analyze-requirements-ai-powered-business-solutions/

Objectives: agents in task automation/analytics/decision-making; Copilot + generative AI productivity role; assess measurable-value scenarios; evaluate grounding data across 5 dimensions; organize data for AI readiness.

## U2 Assess the use of agents in task automation, data analytics, decision-making (5 min)
- Task automation examples table: Communication (draft emails, Teams summaries — M365 Copilot); Documentation (first drafts — Word/OneNote/Loop/M365 Copilot); Process Automation (Copilot Studio, Power Automate); Knowledge Retrieval (Copilot Search, Graph grounding).
- Data analytics: natural language → insights; trends/outliers; on-demand visualizations; dashboard interpretation.
- Decision-making: scenario recommendations, risk identification via patterns, context summaries, knowledge-backed recommendations.
- Best practices: start with business outcome; automate repetitive work (not critical thinking); RAI principles; monitor performance; train teams.
- Refs: business-value-microsoft-copilot-solutions/3-explore-copilot-experiences; generative-ai-productivity.

## U3 Review data for grounding: accuracy, relevance, timeliness, cleanliness, availability (5 min)
- Grounding = agent responds using trusted, domain-specific org data. Copilot/Copilot Studio use **semantic indexing** over Microsoft Graph. **Copilot Retrieval API** retrieves passages from SharePoint/OneDrive/connectors honoring user permissions.
- Five dimensions table:
  - Accuracy — correct, verified (SMEs, authoritative sources) → reduces misinformation
  - Relevance — matches task/intent → avoids conceptually-similar-but-wrong retrieval
  - Timeliness — current; semantic index continuously updates; refresh schedules
  - Cleanliness — structured, no dupes, minimal noise metadata → better embeddings/retrieval precision (term: **data pollution**)
  - Availability — accessible + indexable; Retrieval API won't return content beyond user access
- Best practices: evaluate content before upload; store authoritative content in SharePoint/OneDrive; consistent formatting; review permissions; collaborate with SMEs.
- Refs: agents-copilot-studio-online-workshop/add-knowledge; build-effective-generative-ai-solutions-organization/3-ground-ai-using-trusted-data; /microsoftsearch/semantic-index-for-copilot; /microsoft-365-copilot/extensibility/api/ai-services/retrieval/copilotroot-retrieval; /azure/ai-foundry/agents/how-to/manage-grounding-with-bing.

## U4 Organize business solution data for AI systems (6 min)
- RAG pipeline definition: ingestion, streaming, cleaning, chunking, embedding, indexing, retrieval, prompt assembly, orchestration, monitoring. Advantages: real-time data access, privacy preservation, misinformation mitigation.
- Azure data estate layers: Operational DBs (Cosmos DB, SQL, PostgreSQL) → Analytical stores (Fabric Lakehouse/Warehouse) → Intelligence layer (Azure AI Search, semantic ranking, embeddings, vector search) → AI apps/agents.
- CAF data architecture for AI agents: centralized knowledge sources (SharePoint/OneDrive/Dataverse/Azure Storage); semantic indexing; governance (RBAC, sensitivity labels, Purview); APIs/connectors; RAG-ready (vector stores, embedding models, retrieval pipelines).
- AI-ready databases: Azure SQL (vector data, semantic search, JSON); Cosmos DB (low latency, native vector search); PostgreSQL on Azure (ML extensions, embeddings); Fabric (unified analytics).
- Best practices: centralize data; normalize/structure; semantic indexing; multiple access paths (APIs, search indexes, RAG, Graph connectors, SQL endpoints); governance early (Purview: access policies, labels, lineage, quality rules); keep data authoritative/updated.
- Refs: leverage-ai-tools/6-drive-transformation-azure-platforms; techcommunity blog "Building intelligent AI apps with Microsoft databases"; /azure/cloud-adoption-framework/ai-agents/data-architecture-plan.
