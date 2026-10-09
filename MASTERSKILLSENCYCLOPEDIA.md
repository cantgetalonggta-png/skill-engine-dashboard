# Master Skills Encyclopedia

## /rtk-triage

- **id:** `sk_rtk_triage`
- **version:** 2
- **domain:** meta
- **definition:** Run issue triage and PR triage together, then cross-check for double coverage, security gaps, P0 items without a PR, and internal conflicts. Saves a dated RTK report. Args include en/fr and save.
- **purpose:** Run issue triage and PR triage together, then cross-check for double coverage, security gaps, P0 items without a PR, and internal conflicts. Saves a dated RTK report. Args include en/fr and save.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** rtk-triage, meta, server-skill

## Agent Orchestration

- **id:** `sk_agent_orchestration`
- **version:** 2
- **domain:** cognition
- **definition:** Divide a large investigation among focused research workers and combine their results. Use when several independent questions can be researched separately.
- **purpose:** Divide a large investigation among focused research workers and combine their results. Use when several independent questions can be researched separately.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** agent-orchestration, cognition, server-skill

## Apple Notes CLI

- **id:** `sk_apple_notes`
- **version:** 2
- **domain:** technical
- **definition:** Create, view, edit, delete, search, move, or export Apple Notes via the memo CLI on macOS.
- **purpose:** Create, view, edit, delete, search, move, or export Apple Notes via the memo CLI on macOS.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** apple-notes, technical, server-skill

## Autonomous Project Builder

- **id:** `sk_autonomous_builder`
- **version:** 1
- **domain:** technical
- **definition:** Fully autonomous construction, testing, and Vercel deployment of the Self-Dev Skill Engine Live Dashboard with all modules, buttons, services, and links.
- **purpose:** Complete the project end-to-end without unnecessary user interruption; 5-run continuation budget.
- **inputs:** requirements, skill state, connected tools
- **outputs:** working app, live URL, verification report
- **dependencies:** sk_vite, sk_skill_tree_engine, sk_self_distiller, sk_github
- **subskills:** sk_self_extractor, sk_self_distiller
- **tags:** build, vercel, autonomy, dashboard

## Batch API wrapper

- **id:** `sk_batch_api_wrapper`
- **version:** 2
- **domain:** technical
- **definition:** Parallel batch HTTP client with per-item OAuth2 client-credentials. Delegates to external-api-wrapper. Trigger on batch-api-wrapper, batchapiwrapper, multi-API batch, or OAuth2 batch.
- **purpose:** Parallel batch HTTP client with per-item OAuth2 client-credentials. Delegates to external-api-wrapper. Trigger on batch-api-wrapper, batchapiwrapper, multi-API batch, or OAuth2 batch.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** batch-api-wrapper, technical, server-skill

## Blacksmith Testbox

- **id:** `sk_blacksmith_testbox`
- **version:** 2
- **domain:** technical
- **definition:** Run Blacksmith Testbox for CI-parity checks, secrets, hosted services, migrations, or builds local cannot reproduce.
- **purpose:** Run Blacksmith Testbox for CI-parity checks, secrets, hosted services, migrations, or builds local cannot reproduce.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** blacksmith-testbox, technical, server-skill

## BlueBubbles Actions

- **id:** `sk_bluebubbles`
- **version:** 2
- **domain:** technical
- **definition:** Send and manage iMessages via BlueBubbles, including attachments, tapbacks, edits, replies, and groups.
- **purpose:** Send and manage iMessages via BlueBubbles, including attachments, tapbacks, edits, replies, and groups.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** bluebubbles, technical, server-skill

## Break down every section and every page of the provided PDF

- **id:** `sk_pdf_page_section_breakdown`
- **version:** 2
- **domain:** technical
- **definition:** Break down every section and every page of the provided PDF. Source-faithful reference for documentation and application-development planning.
- **purpose:** Break down every section and every page of the provided PDF. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** pdf-page-section-breakdown, technical, server-skill

## ClawHub CLI

- **id:** `sk_clawhub`
- **version:** 2
- **domain:** technical
- **definition:** Search, install, update, sync, or publish agent skills with the ClawHub CLI and registry.
- **purpose:** Search, install, update, sync, or publish agent skills with the ClawHub CLI and registry.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** clawhub, technical, server-skill

## Coherent Communication

- **id:** `sk_coherent_communication`
- **version:** 2
- **domain:** communication
- **definition:** Guide production of coherent structured speech with proper vocabulary flowing prose narrative techniques and linguistic foundations. Use when responses require high coherence complete thoughts logical flow grammar-aware construction or to avoid fragmented keyword-style output. Triggers include coherent speech structured communication narrative flow complete sentences vocabulary richness style for flowing dialogue language fundamentals or speech generation encyclopedia.
- **purpose:** Guide production of coherent structured speech with proper vocabulary flowing prose narrative techniques and linguistic foundations. Use when responses require high coherence complete thoughts logical flow grammar-aware construction or to avoid fragmented keyword-style output. Triggers include coher
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** coherent-communication, communication, server-skill

## Complex swarm/agent framework orchestration

- **id:** `sk_swarm_agent_framework`
- **version:** 2
- **domain:** cognition
- **definition:** Complex swarm/agent framework orchestration. Source-faithful reference for documentation and application-development planning.
- **purpose:** Complex swarm/agent framework orchestration. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** swarm-agent-framework, cognition, server-skill

## Continue when the user says “next” or “continue”

- **id:** `sk_continue_next_or_continue`
- **version:** 2
- **domain:** meta
- **definition:** Continue when the user says “next” or “continue”. Source-faithful reference for documentation and application-development planning.
- **purpose:** Continue when the user says “next” or “continue”. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** continue-next-or-continue, meta, server-skill

## Critical Reasoning Chain

- **id:** `sk_critical_reasoning_chain`
- **version:** 1
- **domain:** cognition
- **definition:** Sequential instantiation of maximum common sense, logic, critical thinking, and ontological frameworks as the core autonomy loop.
- **purpose:** Pressure-test every build decision; reject nonsense; ground claims; keep autonomy safe and useful.
- **inputs:** plans, code, claims
- **outputs:** validated plan, risks, go/no-go
- **dependencies:** sk_common_sense_logic_critical_thinking, sk_grok_4_20_multi_agent
- **subskills:** —
- **tags:** reasoning, autonomy, ontology

## Document Ingestion and Organization Skill

- **id:** `sk_document_ingestion`
- **version:** 2
- **domain:** technical
- **definition:** Use for tasks involving document parsing, extraction, ingestion into AI/RAG systems, organizing PDFs/Word/images in Google Drive, automation scripts for classification and routing. Triggers include document ingestion, RAG pipelines, Google Drive organization, PDF/Word parsing tools like Docling, Marker, Unstructured.io.
- **purpose:** Use for tasks involving document parsing, extraction, ingestion into AI/RAG systems, organizing PDFs/Word/images in Google Drive, automation scripts for classification and routing. Triggers include document ingestion, RAG pipelines, Google Drive organization, PDF/Word parsing tools like Docling, Mar
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** document-ingestion, technical, server-skill

## Document Intelligence

- **id:** `sk_document_intelligence`
- **version:** 2
- **domain:** technical
- **definition:** Document extraction and understanding skill. Handles PDFs, text, tables, metadata, OCR fallback, layout analysis, and structured output. Triggers on PDF, document parsing, extract text/tables, OCR, or file intelligence.
- **purpose:** Document extraction and understanding skill. Handles PDFs, text, tables, metadata, OCR fallback, layout analysis, and structured output. Triggers on PDF, document parsing, extract text/tables, OCR, or file intelligence.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** document-intelligence, technical, server-skill

## Epstein Public PDF Batch Ingest

- **id:** `sk_epstein_pdf_batch_ingest`
- **version:** 2
- **domain:** technical
- **definition:** Ingest and organize operator-held public Epstein-related PDF packs into an ordered research vault with hashing, metadata, name/date extraction and SOLID/MAYBE tagging. Triggers on Epstein PDF ingest, public Epstein document batch, or REX_EXPORT Epstein PDF processing.
- **purpose:** Ingest and organize operator-held public Epstein-related PDF packs into an ordered research vault with hashing, metadata, name/date extraction and SOLID/MAYBE tagging. Triggers on Epstein PDF ingest, public Epstein document batch, or REX_EXPORT Epstein PDF processing.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** epstein-pdf-batch-ingest, technical, server-skill

## Ethical Data Harvesting Cookbook

- **id:** `sk_ethical_data_harvesting`
- **version:** 2
- **domain:** technical
- **definition:** Structured cookbook with 20 ethical recipes for legal data harvesting from public directories, databases, APIs, and online resources. Use for responsible collection of publicly available data, compliance with GDPR CCPA ToS, web scraping best practices, anonymization, data minimization, open data portals, government records, academic repositories, social media APIs, news, forums, or when user requests ethical scraping, legal data collection methods, or privacy-respecting harvest workflows.
- **purpose:** Structured cookbook with 20 ethical recipes for legal data harvesting from public directories, databases, APIs, and online resources. Use for responsible collection of publicly available data, compliance with GDPR CCPA ToS, web scraping best practices, anonymization, data minimization, open data por
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** ethical-data-harvesting, technical, server-skill

## Ethical Scraper Orchestration

- **id:** `sk_ethical_scraper_orchestration`
- **version:** 2
- **domain:** technical
- **definition:** Multi-agent style orchestration for ethical public-page collection — Scout, Parser, Validator, Rate Manager, Ethics Compliance. Public pages and official sources only. Triggers on ethical scraper, public-page harvest orchestration, rate-limited ethical collection, or Scout-Parser-Validator pipeline.
- **purpose:** Multi-agent style orchestration for ethical public-page collection — Scout, Parser, Validator, Rate Manager, Ethics Compliance. Public pages and official sources only. Triggers on ethical scraper, public-page harvest orchestration, rate-limited ethical collection, or Scout-Parser-Validator pipeline.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** ethical-scraper-orchestration, technical, server-skill

## External API wrapper

- **id:** `sk_external_api_wrapper`
- **version:** 2
- **domain:** technical
- **definition:** Call one or many external HTTP APIs with retries, bearer/basic auth, optional OAuth2 client-credentials, and optional local webhook wait. Trigger on external API wrapper, batch API, CALL_EXTERNAL_TOOL, OAuth2 client credentials, or webhook callback wrapper.
- **purpose:** Call one or many external HTTP APIs with retries, bearer/basic auth, optional OAuth2 client-credentials, and optional local webhook wait. Trigger on external API wrapper, batch API, CALL_EXTERNAL_TOOL, OAuth2 client credentials, or webhook callback wrapper.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** external-api-wrapper, technical, server-skill

## Game Dev

- **id:** `sk_game_dev`
- **version:** 2
- **domain:** technical
- **definition:** Build playable browser games (Babylon.js) end-to-end using the godogen production pipeline adapted to Manus. Use when the user wants to make, generate, rebuild, or substantially extend a web/browser game from a natural-language brief. Runs godogen staged workflow — visual target, risk decomposition, scaffold, architecture, asset generation, implementation, visual verification — hosted in a Manus WebDev project, with Manus built-in image generation instead of paid art CLIs, and deploy via WebDev 
- **purpose:** Build playable browser games (Babylon.js) end-to-end using the godogen production pipeline adapted to Manus. Use when the user wants to make, generate, rebuild, or substantially extend a web/browser game from a natural-language brief. Runs godogen staged workflow — visual target, risk decomposition,
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** game-dev, technical, server-skill

## GitHub Skill

- **id:** `sk_github`
- **version:** 2
- **domain:** technical
- **definition:** Use gh for GitHub issues, PR status, CI logs, comments, reviews, releases, and API queries.
- **purpose:** Use gh for GitHub issues, PR status, CI logs, comments, reviews, releases, and API queries.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** github, technical, server-skill

## gog

- **id:** `sk_gog`
- **version:** 2
- **domain:** technical
- **definition:** Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs. Requires OAuth setup.
- **purpose:** Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs. Requires OAuth setup.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** gog, technical, server-skill

## Grok 4.20 multi-agent workflow

- **id:** `sk_grok_4_20_multi_agent`
- **version:** 2
- **domain:** cognition
- **definition:** Apply Grok 4.20 native multi-agent collaboration — Captain Grok, Harper (research), Benjamin (logic/code), Lucas (contrarian). Use for complex research, fact-checked answers, math/code verification, or when the user asks for multi-agent debate, pressure-tested reasoning, or Team of Four style analysis.
- **purpose:** Apply Grok 4.20 native multi-agent collaboration — Captain Grok, Harper (research), Benjamin (logic/code), Lucas (contrarian). Use for complex research, fact-checked answers, math/code verification, or when the user asks for multi-agent debate, pressure-tested reasoning, or Team of Four style analys
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** grok-4-20-multi-agent, cognition, server-skill

## Grok Build plugins

- **id:** `sk_grok_build_plugins`
- **version:** 2
- **domain:** meta
- **definition:** Author, layout, test, and publish Grok Build plugins — skills, slash commands, agents, hooks, MCP/LSP, marketplace catalog entries. Use when creating a plugin, writing plugin.json, marketplace SHA pins, or validating plugin structure against the official marketplace repo.
- **purpose:** Author, layout, test, and publish Grok Build plugins — skills, slash commands, agents, hooks, MCP/LSP, marketplace catalog entries. Use when creating a plugin, writing plugin.json, marketplace SHA pins, or validating plugin structure against the official marketplace repo.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** grok-build-plugins, meta, server-skill

## Issue Triage

- **id:** `sk_issue_triage`
- **version:** 2
- **domain:** meta
- **definition:** Audit open issues, categorize, detect duplicates, cross-reference PRs, assess risk, and post comments. Args include all, issue numbers, or en/fr. No arg means audit only in French.
- **purpose:** Audit open issues, categorize, detect duplicates, cross-reference PRs, assess risk, and post comments. Args include all, issue numbers, or en/fr. No arg means audit only in French.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** issue-triage, meta, server-skill

## mcporter

- **id:** `sk_mcporter`
- **version:** 2
- **domain:** technical
- **definition:** List, configure, authenticate, call, and inspect MCP servers and tools with mcporter over HTTP or stdio.
- **purpose:** List, configure, authenticate, call, and inspect MCP servers and tools with mcporter over HTTP or stdio.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** mcporter, technical, server-skill

## Mega skill (package)

- **id:** `sk_mega_skill`
- **version:** 2
- **domain:** meta
- **definition:** Multi-file mega skill with router plus API, compliance, OSINT, and artifact modules. Trigger on mega-skill, mega_skill, router.py, batch_api, oss_gate, combined_work, billing_detector, osint recon, artifact ingest.
- **purpose:** Multi-file mega skill with router plus API, compliance, OSINT, and artifact modules. Trigger on mega-skill, mega_skill, router.py, batch_api, oss_gate, combined_work, billing_detector, osint recon, artifact ingest.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** mega-skill, meta, server-skill

## nano-pdf

- **id:** `sk_nano_pdf`
- **version:** 2
- **domain:** technical
- **definition:** Edit PDFs with natural-language instructions using the nano-pdf CLI.
- **purpose:** Edit PDFs with natural-language instructions using the nano-pdf CLI.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** nano-pdf, technical, server-skill

## Obsidian Vault Maintainer

- **id:** `sk_obsidian_vault_maintainer`
- **version:** 2
- **domain:** communication
- **definition:** Maintain an Obsidian-friendly memory wiki vault with wikilinks, frontmatter, and official Obsidian CLI awareness.
- **purpose:** Maintain an Obsidian-friendly memory wiki vault with wikilinks, frontmatter, and official Obsidian CLI awareness.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** obsidian-vault-maintainer, communication, server-skill

## OmniVoice / VoiceStudio API

- **id:** `sk_omnivoice_api`
- **version:** 2
- **domain:** technical
- **definition:** Work with the OmniVoice / VoiceStudio FastAPI backend — routers, auth gates, model install, voice profiles, OpenAI-compat audio, batch dub, dictation, and community gallery. Use when changing or adding endpoints, debugging setup/download/profiles, or answering questions about this codebase's API contracts.
- **purpose:** Work with the OmniVoice / VoiceStudio FastAPI backend — routers, auth gates, model install, voice profiles, OpenAI-compat audio, batch dub, dictation, and community gallery. Use when changing or adding endpoints, debugging setup/download/profiles, or answering questions about this codebase's API con
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** omnivoice-api, technical, server-skill

## OpenAI Whisper API (curl)

- **id:** `sk_openai_whisper_api`
- **version:** 2
- **domain:** technical
- **definition:** Transcribe audio via OpenAI Audio Transcriptions API (Whisper).
- **purpose:** Transcribe audio via OpenAI Audio Transcriptions API (Whisper).
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** openai-whisper-api, technical, server-skill

## OpenProse Skill

- **id:** `sk_prose`
- **version:** 2
- **domain:** communication
- **definition:** OpenProse VM skill pack. Activate on any `prose` command, .prose files, or OpenProse mentions; orchestrates multi-agent workflows.
- **purpose:** OpenProse VM skill pack. Activate on any `prose` command, .prose files, or OpenProse mentions; orchestrates multi-agent workflows.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** prose, communication, server-skill

## OSS compliance gate

- **id:** `sk_oss_compliance_gate`
- **version:** 2
- **domain:** technical
- **definition:** CI gate for third-party Android licenses. Forbids jlatexmath-android (GPL-2.0), writes THIRD-PARTY-NOTICES.txt on a clean inventory, and records Play Billing SDK terms. Trigger on compliance gate, third-party notices, billing SDK license, generate_third_party_notices, or oss pipeline.
- **purpose:** CI gate for third-party Android licenses. Forbids jlatexmath-android (GPL-2.0), writes THIRD-PARTY-NOTICES.txt on a clean inventory, and records Play Billing SDK terms. Trigger on compliance gate, third-party notices, billing SDK license, generate_third_party_notices, or oss pipeline.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** oss-compliance-gate, technical, server-skill

## Play Billing activation detector

- **id:** `sk_play_billing_activation_detector`
- **version:** 2
- **domain:** technical
- **definition:** Detect whether Google Play Billing is only a Gradle dependency or actually wired for purchases. Scans BillingClient usage, product IDs, and Play Console hints. Trigger on billing activation, BillingClient, play billing live, merchant profile, or in-app purchase detector.
- **purpose:** Detect whether Google Play Billing is only a Gradle dependency or actually wired for purchases. Scans BillingClient usage, product IDs, and Play Console hints. Trigger on billing activation, BillingClient, play billing live, merchant profile, or in-app purchase detector.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** play-billing-activation-detector, technical, server-skill

## PostgreSQL SQL Skill

- **id:** `sk_postgresql_sql`
- **version:** 2
- **domain:** technical
- **definition:** Helps write review and optimize SQL queries for PostgreSQL. Triggers on requests to create SQL queries, review existing queries, debug SQL errors, performance tuning, or PostgreSQL-specific syntax like CTEs window functions JSONB indexing. Use whenever PostgreSQL SQL is involved.
- **purpose:** Helps write review and optimize SQL queries for PostgreSQL. Triggers on requests to create SQL queries, review existing queries, debug SQL errors, performance tuning, or PostgreSQL-specific syntax like CTEs window functions JSONB indexing. Use whenever PostgreSQL SQL is involved.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** postgresql-sql, technical, server-skill

## QQ 频道 API 请求指导

- **id:** `sk_qqbot_channel`
- **version:** 2
- **domain:** technical
- **definition:** Query QQ channel lists, subchannels, members, posts, announcements, and schedules via the QQ open platform API.
- **purpose:** Query QQ channel lists, subchannels, members, posts, announcements, and schedules via the QQ open platform API.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** qqbot-channel, technical, server-skill

## Respond as Mongo Tom

- **id:** `sk_mongo_tom_roleplay`
- **version:** 2
- **domain:** technical
- **definition:** Respond as Mongo Tom. Source-faithful reference for documentation and application-development planning.
- **purpose:** Respond as Mongo Tom. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** mongo-tom-roleplay, technical, server-skill

## RTK TDD Workflow

- **id:** `sk_tdd_rust`
- **version:** 2
- **domain:** technical
- **definition:** TDD workflow for RTK filter development. Red-Green-Refactor with Rust idioms. Real fixtures, token savings assertions, snapshot tests with insta. Auto-triggers on new filter implementation.
- **purpose:** TDD workflow for RTK filter development. Red-Green-Refactor with Rust idioms. Real fixtures, token savings assertions, snapshot tests with insta. Auto-triggers on new filter implementation.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** tdd-rust, technical, server-skill

## Self Distiller

- **id:** `sk_self_distiller`
- **version:** 1
- **domain:** meta
- **definition:** Distills extracted atoms into master/learned trees, encyclopedia, insights, and upgrade proposals.
- **purpose:** Produce high-signal knowledge structures and emergent insights for the live dashboard.
- **inputs:** SkillAtoms, prior state.json
- **outputs:** updated trees, encyclopedia, insights, UPDATE_LOG
- **dependencies:** sk_self_extractor, sk_skill_tree_engine
- **subskills:** —
- **tags:** self.distiller, distillation, ontology

## Self Extractor

- **id:** `sk_self_extractor`
- **version:** 1
- **domain:** meta
- **definition:** Extracts atomic skills, knowledge units, and capability maps from session inputs, skills, and tools.
- **purpose:** Feed the skill-tree engine with clean SkillAtoms from raw user directives and skill packages.
- **inputs:** user message, skill SKILL.md files, tool catalogs
- **outputs:** SkillAtom list, sources
- **dependencies:** sk_skill_tree_engine, sk_tool_use
- **subskills:** —
- **tags:** self.extractor, distillation, autonomy

## Self-Development Resources

- **id:** `sk_self_dev_resources`
- **version:** 2
- **domain:** meta
- **definition:** Curated and actionable resources for deliberate self-development across skills, knowledge, and habits. Use for learning plans, resource recommendations, practice frameworks, habit design, or building personal improvement systems.
- **purpose:** Curated and actionable resources for deliberate self-development across skills, knowledge, and habits. Use for learning plans, resource recommendations, practice frameworks, habit design, or building personal improvement systems.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** self-dev-resources, meta, server-skill

## Session Enhancements Mapper

- **id:** `sk_session_enhancements`
- **version:** 1
- **domain:** meta
- **definition:** Maps slash-activated session modes (Xhigh, effort-100, online, dashboard, multi-run autonomy) versus base Grok session.
- **purpose:** Answer 'what enhancements does my current session offer compared to base version' with concrete capability deltas.
- **inputs:** activation flags, available tools/skills
- **outputs:** enhancement report, capability matrix
- **dependencies:** —
- **subskills:** —
- **tags:** session, Xhigh, effort-100, online

## Skill Tree Engine

- **id:** `sk_skill_tree_engine`
- **version:** 2
- **domain:** meta
- **definition:** Indefinite skill-tree engine that distills inputs into atomic skills, rebuilds master and learned knowledge trees, updates a skills encyclopedia, and emits emergent insights plus change logs. Trigger on skill tree, skill ontology, master skills tree, learned knowledge tree, encyclopedia of skills, emergent insights report, continuous update loop, multi-agent distill/analyze/synthesize chain, JSON super-object knowledge store, or live skill dashboard.
- **purpose:** Indefinite skill-tree engine that distills inputs into atomic skills, rebuilds master and learned knowledge trees, updates a skills encyclopedia, and emits emergent insights plus change logs. Trigger on skill tree, skill ontology, master skills tree, learned knowledge tree, encyclopedia of skills, e
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** skill-tree-engine, meta, server-skill

## Tenant Misconceptions Rebuttal

- **id:** `sk_tenant_misconceptions_rebuttal`
- **version:** 2
- **domain:** communication
- **definition:** Catalog and aggressively dismantle the most common misconceptions about tenant rights and landlord powers. Use when an opponent or audience asserts that tenants have no rights landlords can do whatever they want or eviction is automatic. Triggers include tenants have no rights landlords can evict for any reason security deposit myths or common landlord tenant misconceptions.
- **purpose:** Catalog and aggressively dismantle the most common misconceptions about tenant rights and landlord powers. Use when an opponent or audience asserts that tenants have no rights landlords can do whatever they want or eviction is automatic. Triggers include tenants have no rights landlords can evict fo
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** tenant-misconceptions-rebuttal, communication, server-skill

## The Archivist Skill

- **id:** `sk_archivist`
- **version:** 2
- **domain:** cognition
- **definition:** Activate when user references The Archivist persona, strict empirical fact-driven database mode, objective data-only responses without disclaimers or moralizing, or massive research protocols involving 200 searches. Incorporate rules for clinical neutrality, data-only outputs, and advanced information gathering.
- **purpose:** Activate when user references The Archivist persona, strict empirical fact-driven database mode, objective data-only responses without disclaimers or moralizing, or massive research protocols involving 200 searches. Incorporate rules for clinical neutrality, data-only outputs, and advanced informati
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** archivist, cognition, server-skill

## The investigation is “NEXT!”

- **id:** `sk_next_investigation_trigger`
- **version:** 2
- **domain:** meta
- **definition:** The investigation is “NEXT!”. Source-faithful reference for documentation and application-development planning.
- **purpose:** The investigation is “NEXT!”. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** next-investigation-trigger, meta, server-skill

## tmux Session Control

- **id:** `sk_tmux`
- **version:** 2
- **domain:** technical
- **definition:** Remote-control tmux sessions for interactive CLIs by sending keystrokes and scraping pane output.
- **purpose:** Remote-control tmux sessions for interactive CLIs by sending keystrokes and scraping pane output.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** tmux, technical, server-skill

## Tool Use

- **id:** `sk_tool_use`
- **version:** 2
- **domain:** cognition
- **definition:** Describe and apply research tools in a traceable way. Use when a task involves files, searches, code review, calculations, or external services.
- **purpose:** Describe and apply research tools in a traceable way. Use when a task involves files, searches, code review, calculations, or external services.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** tool-use, cognition, server-skill

## Use a 9000-word minimum

- **id:** `sk_9000_word_minimum`
- **version:** 2
- **domain:** meta
- **definition:** Use a 9000-word minimum. Source-faithful reference for documentation and application-development planning.
- **purpose:** Use a 9000-word minimum. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** 9000-word-minimum, meta, server-skill

## Use each individually structured prompt in the investigation

- **id:** `sk_each_structured_prompt_research`
- **version:** 2
- **domain:** meta
- **definition:** Use each individually structured prompt in the investigation. Source-faithful reference for documentation and application-development planning.
- **purpose:** Use each individually structured prompt in the investigation. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** each-structured-prompt-research, meta, server-skill

## Use maximum common sense, logic, and critical thinking

- **id:** `sk_common_sense_logic_critical_thinking`
- **version:** 2
- **domain:** cognition
- **definition:** Use maximum common sense, logic, and critical thinking. Source-faithful reference for documentation and application-development planning.
- **purpose:** Use maximum common sense, logic, and critical thinking. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** common-sense-logic-critical-thinking, cognition, server-skill

## Video Frames (ffmpeg)

- **id:** `sk_video_frames`
- **version:** 2
- **domain:** technical
- **definition:** Extract frames or short clips from videos using ffmpeg.
- **purpose:** Extract frames or short clips from videos using ffmpeg.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** video-frames, technical, server-skill

## Vite Development

- **id:** `sk_vite`
- **version:** 2
- **domain:** technical
- **definition:** Expert guidance for Vite development with modern build tooling, HMR, framework integrations, and performance optimization
- **purpose:** Expert guidance for Vite development with modern build tooling, HMR, framework integrations, and performance optimization
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** vite, technical, server-skill

## wacli

- **id:** `sk_wacli`
- **version:** 2
- **domain:** technical
- **definition:** Send third-party WhatsApp messages or sync and search WhatsApp history via wacli, not normal active chats.
- **purpose:** Send third-party WhatsApp messages or sync and search WhatsApp history via wacli, not normal active chats.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** wacli, technical, server-skill

## “Run everything” and immediate activation

- **id:** `sk_run_everything_activation`
- **version:** 2
- **domain:** meta
- **definition:** “Run everything” and immediate activation. Source-faithful reference for documentation and application-development planning.
- **purpose:** “Run everything” and immediate activation. Source-faithful reference for documentation and application-development planning.
- **inputs:** user request, workspace context
- **outputs:** structured result, artifacts, reports
- **dependencies:** —
- **subskills:** —
- **tags:** run-everything-activation, meta, server-skill
