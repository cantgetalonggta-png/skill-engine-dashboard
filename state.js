window.__SKILL_STATE = {
  "engine": {
    "version": "1.0.0",
    "cycle": 3,
    "updatedAt": "2026-10-09T02:12:04.811298+00:00",
    "modes": [
      "markdown",
      "dashboard",
      "multi-agent"
    ],
    "upgrades": [
      {
        "cycle": 1,
        "change": "Seeded full skill inventory (55 atoms), session enhancement mapper, self.extractor/distiller, autonomous builder; structured master/learned trees for dashboard."
      },
      {
        "cycle": 2,
        "change": "Shipped static Self-Dev Live Dashboard to GitHub (cantgetalonggta-png/self-dev-skill-engine-dashboard). Vercel project created (prj_h1saUTAVT6wrDI5usVHPfUwMHeZ7) but deploy blocked by scope re-auth. GitHub Pages API not permitted by token."
      }
    ]
  },
  "atoms": {
    "sk_9000_word_minimum": {
      "id": "sk_9000_word_minimum",
      "name": "Use a 9000-word minimum",
      "definition": "Use a 9000-word minimum. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Use a 9000-word minimum. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "9000-word-minimum",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/9000-word-minimum/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:9000-word-minimum"
        ]
      }
    },
    "sk_agent_orchestration": {
      "id": "sk_agent_orchestration",
      "name": "Agent Orchestration",
      "definition": "Divide a large investigation among focused research workers and combine their results. Use when several independent questions can be researched separately.",
      "purpose": "Divide a large investigation among focused research workers and combine their results. Use when several independent questions can be researched separately.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "agent-orchestration",
        "cognition",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/agent-orchestration/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:agent-orchestration"
        ]
      }
    },
    "sk_apple_notes": {
      "id": "sk_apple_notes",
      "name": "Apple Notes CLI",
      "definition": "Create, view, edit, delete, search, move, or export Apple Notes via the memo CLI on macOS.",
      "purpose": "Create, view, edit, delete, search, move, or export Apple Notes via the memo CLI on macOS.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "apple-notes",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/apple-notes/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:apple-notes"
        ]
      }
    },
    "sk_archivist": {
      "id": "sk_archivist",
      "name": "The Archivist Skill",
      "definition": "Activate when user references The Archivist persona, strict empirical fact-driven database mode, objective data-only responses without disclaimers or moralizing, or massive research protocols involving 200 searches. Incorporate rules for clinical neutrality, data-only outputs, and advanced information gathering.",
      "purpose": "Activate when user references The Archivist persona, strict empirical fact-driven database mode, objective data-only responses without disclaimers or moralizing, or massive research protocols involving 200 searches. Incorporate rules for clinical neutrality, data-only outputs, and advanced informati",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "archivist",
        "cognition",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/archivist/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:archivist"
        ]
      }
    },
    "sk_batch_api_wrapper": {
      "id": "sk_batch_api_wrapper",
      "name": "Batch API wrapper",
      "definition": "Parallel batch HTTP client with per-item OAuth2 client-credentials. Delegates to external-api-wrapper. Trigger on batch-api-wrapper, batchapiwrapper, multi-API batch, or OAuth2 batch.",
      "purpose": "Parallel batch HTTP client with per-item OAuth2 client-credentials. Delegates to external-api-wrapper. Trigger on batch-api-wrapper, batchapiwrapper, multi-API batch, or OAuth2 batch.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "batch-api-wrapper",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/batch-api-wrapper/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:batch-api-wrapper"
        ]
      }
    },
    "sk_blacksmith_testbox": {
      "id": "sk_blacksmith_testbox",
      "name": "Blacksmith Testbox",
      "definition": "Run Blacksmith Testbox for CI-parity checks, secrets, hosted services, migrations, or builds local cannot reproduce.",
      "purpose": "Run Blacksmith Testbox for CI-parity checks, secrets, hosted services, migrations, or builds local cannot reproduce.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "blacksmith-testbox",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/blacksmith-testbox/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:blacksmith-testbox"
        ]
      }
    },
    "sk_bluebubbles": {
      "id": "sk_bluebubbles",
      "name": "BlueBubbles Actions",
      "definition": "Send and manage iMessages via BlueBubbles, including attachments, tapbacks, edits, replies, and groups.",
      "purpose": "Send and manage iMessages via BlueBubbles, including attachments, tapbacks, edits, replies, and groups.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "bluebubbles",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/bluebubbles/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:bluebubbles"
        ]
      }
    },
    "sk_clawhub": {
      "id": "sk_clawhub",
      "name": "ClawHub CLI",
      "definition": "Search, install, update, sync, or publish agent skills with the ClawHub CLI and registry.",
      "purpose": "Search, install, update, sync, or publish agent skills with the ClawHub CLI and registry.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "clawhub",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/clawhub/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:clawhub"
        ]
      }
    },
    "sk_coherent_communication": {
      "id": "sk_coherent_communication",
      "name": "Coherent Communication",
      "definition": "Guide production of coherent structured speech with proper vocabulary flowing prose narrative techniques and linguistic foundations. Use when responses require high coherence complete thoughts logical flow grammar-aware construction or to avoid fragmented keyword-style output. Triggers include coherent speech structured communication narrative flow complete sentences vocabulary richness style for flowing dialogue language fundamentals or speech generation encyclopedia.",
      "purpose": "Guide production of coherent structured speech with proper vocabulary flowing prose narrative techniques and linguistic foundations. Use when responses require high coherence complete thoughts logical flow grammar-aware construction or to avoid fragmented keyword-style output. Triggers include coher",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "communication",
      "tags": [
        "coherent-communication",
        "communication",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/coherent-communication/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:coherent-communication"
        ]
      }
    },
    "sk_common_sense_logic_critical_thinking": {
      "id": "sk_common_sense_logic_critical_thinking",
      "name": "Use maximum common sense, logic, and critical thinking",
      "definition": "Use maximum common sense, logic, and critical thinking. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Use maximum common sense, logic, and critical thinking. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "common-sense-logic-critical-thinking",
        "cognition",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/common-sense-logic-critical-thinking/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:common-sense-logic-critical-thinking"
        ]
      }
    },
    "sk_continue_next_or_continue": {
      "id": "sk_continue_next_or_continue",
      "name": "Continue when the user says \u201cnext\u201d or \u201ccontinue\u201d",
      "definition": "Continue when the user says \u201cnext\u201d or \u201ccontinue\u201d. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Continue when the user says \u201cnext\u201d or \u201ccontinue\u201d. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "continue-next-or-continue",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/continue-next-or-continue/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:continue-next-or-continue"
        ]
      }
    },
    "sk_document_ingestion": {
      "id": "sk_document_ingestion",
      "name": "Document Ingestion and Organization Skill",
      "definition": "Use for tasks involving document parsing, extraction, ingestion into AI/RAG systems, organizing PDFs/Word/images in Google Drive, automation scripts for classification and routing. Triggers include document ingestion, RAG pipelines, Google Drive organization, PDF/Word parsing tools like Docling, Marker, Unstructured.io.",
      "purpose": "Use for tasks involving document parsing, extraction, ingestion into AI/RAG systems, organizing PDFs/Word/images in Google Drive, automation scripts for classification and routing. Triggers include document ingestion, RAG pipelines, Google Drive organization, PDF/Word parsing tools like Docling, Mar",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "document-ingestion",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/document-ingestion/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:document-ingestion"
        ]
      }
    },
    "sk_document_intelligence": {
      "id": "sk_document_intelligence",
      "name": "Document Intelligence",
      "definition": "Document extraction and understanding skill. Handles PDFs, text, tables, metadata, OCR fallback, layout analysis, and structured output. Triggers on PDF, document parsing, extract text/tables, OCR, or file intelligence.",
      "purpose": "Document extraction and understanding skill. Handles PDFs, text, tables, metadata, OCR fallback, layout analysis, and structured output. Triggers on PDF, document parsing, extract text/tables, OCR, or file intelligence.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "document-intelligence",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/document-intelligence/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:document-intelligence"
        ]
      }
    },
    "sk_each_structured_prompt_research": {
      "id": "sk_each_structured_prompt_research",
      "name": "Use each individually structured prompt in the investigation",
      "definition": "Use each individually structured prompt in the investigation. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Use each individually structured prompt in the investigation. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "each-structured-prompt-research",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/each-structured-prompt-research/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:each-structured-prompt-research"
        ]
      }
    },
    "sk_epstein_pdf_batch_ingest": {
      "id": "sk_epstein_pdf_batch_ingest",
      "name": "Epstein Public PDF Batch Ingest",
      "definition": "Ingest and organize operator-held public Epstein-related PDF packs into an ordered research vault with hashing, metadata, name/date extraction and SOLID/MAYBE tagging. Triggers on Epstein PDF ingest, public Epstein document batch, or REX_EXPORT Epstein PDF processing.",
      "purpose": "Ingest and organize operator-held public Epstein-related PDF packs into an ordered research vault with hashing, metadata, name/date extraction and SOLID/MAYBE tagging. Triggers on Epstein PDF ingest, public Epstein document batch, or REX_EXPORT Epstein PDF processing.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "epstein-pdf-batch-ingest",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/epstein-pdf-batch-ingest/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:epstein-pdf-batch-ingest"
        ]
      }
    },
    "sk_ethical_data_harvesting": {
      "id": "sk_ethical_data_harvesting",
      "name": "Ethical Data Harvesting Cookbook",
      "definition": "Structured cookbook with 20 ethical recipes for legal data harvesting from public directories, databases, APIs, and online resources. Use for responsible collection of publicly available data, compliance with GDPR CCPA ToS, web scraping best practices, anonymization, data minimization, open data portals, government records, academic repositories, social media APIs, news, forums, or when user requests ethical scraping, legal data collection methods, or privacy-respecting harvest workflows.",
      "purpose": "Structured cookbook with 20 ethical recipes for legal data harvesting from public directories, databases, APIs, and online resources. Use for responsible collection of publicly available data, compliance with GDPR CCPA ToS, web scraping best practices, anonymization, data minimization, open data por",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "ethical-data-harvesting",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/ethical-data-harvesting/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:ethical-data-harvesting"
        ]
      }
    },
    "sk_ethical_scraper_orchestration": {
      "id": "sk_ethical_scraper_orchestration",
      "name": "Ethical Scraper Orchestration",
      "definition": "Multi-agent style orchestration for ethical public-page collection \u2014 Scout, Parser, Validator, Rate Manager, Ethics Compliance. Public pages and official sources only. Triggers on ethical scraper, public-page harvest orchestration, rate-limited ethical collection, or Scout-Parser-Validator pipeline.",
      "purpose": "Multi-agent style orchestration for ethical public-page collection \u2014 Scout, Parser, Validator, Rate Manager, Ethics Compliance. Public pages and official sources only. Triggers on ethical scraper, public-page harvest orchestration, rate-limited ethical collection, or Scout-Parser-Validator pipeline.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "ethical-scraper-orchestration",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/ethical-scraper-orchestration/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:ethical-scraper-orchestration"
        ]
      }
    },
    "sk_external_api_wrapper": {
      "id": "sk_external_api_wrapper",
      "name": "External API wrapper",
      "definition": "Call one or many external HTTP APIs with retries, bearer/basic auth, optional OAuth2 client-credentials, and optional local webhook wait. Trigger on external API wrapper, batch API, CALL_EXTERNAL_TOOL, OAuth2 client credentials, or webhook callback wrapper.",
      "purpose": "Call one or many external HTTP APIs with retries, bearer/basic auth, optional OAuth2 client-credentials, and optional local webhook wait. Trigger on external API wrapper, batch API, CALL_EXTERNAL_TOOL, OAuth2 client credentials, or webhook callback wrapper.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "external-api-wrapper",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/external-api-wrapper/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:external-api-wrapper"
        ]
      }
    },
    "sk_game_dev": {
      "id": "sk_game_dev",
      "name": "Game Dev",
      "definition": "Build playable browser games (Babylon.js) end-to-end using the godogen production pipeline adapted to Manus. Use when the user wants to make, generate, rebuild, or substantially extend a web/browser game from a natural-language brief. Runs godogen staged workflow \u2014 visual target, risk decomposition, scaffold, architecture, asset generation, implementation, visual verification \u2014 hosted in a Manus WebDev project, with Manus built-in image generation instead of paid art CLIs, and deploy via WebDev ",
      "purpose": "Build playable browser games (Babylon.js) end-to-end using the godogen production pipeline adapted to Manus. Use when the user wants to make, generate, rebuild, or substantially extend a web/browser game from a natural-language brief. Runs godogen staged workflow \u2014 visual target, risk decomposition,",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "game-dev",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/game-dev/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:game-dev"
        ]
      }
    },
    "sk_github": {
      "id": "sk_github",
      "name": "GitHub Skill",
      "definition": "Use gh for GitHub issues, PR status, CI logs, comments, reviews, releases, and API queries.",
      "purpose": "Use gh for GitHub issues, PR status, CI logs, comments, reviews, releases, and API queries.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "github",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/github/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:github"
        ]
      }
    },
    "sk_gog": {
      "id": "sk_gog",
      "name": "gog",
      "definition": "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs. Requires OAuth setup.",
      "purpose": "Google Workspace CLI for Gmail, Calendar, Drive, Contacts, Sheets, and Docs. Requires OAuth setup.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "gog",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/gog/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:gog"
        ]
      }
    },
    "sk_grok_4_20_multi_agent": {
      "id": "sk_grok_4_20_multi_agent",
      "name": "Grok 4.20 multi-agent workflow",
      "definition": "Apply Grok 4.20 native multi-agent collaboration \u2014 Captain Grok, Harper (research), Benjamin (logic/code), Lucas (contrarian). Use for complex research, fact-checked answers, math/code verification, or when the user asks for multi-agent debate, pressure-tested reasoning, or Team of Four style analysis.",
      "purpose": "Apply Grok 4.20 native multi-agent collaboration \u2014 Captain Grok, Harper (research), Benjamin (logic/code), Lucas (contrarian). Use for complex research, fact-checked answers, math/code verification, or when the user asks for multi-agent debate, pressure-tested reasoning, or Team of Four style analys",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "grok-4-20-multi-agent",
        "cognition",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/grok-4-20-multi-agent/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:grok-4-20-multi-agent"
        ]
      }
    },
    "sk_grok_build_plugins": {
      "id": "sk_grok_build_plugins",
      "name": "Grok Build plugins",
      "definition": "Author, layout, test, and publish Grok Build plugins \u2014 skills, slash commands, agents, hooks, MCP/LSP, marketplace catalog entries. Use when creating a plugin, writing plugin.json, marketplace SHA pins, or validating plugin structure against the official marketplace repo.",
      "purpose": "Author, layout, test, and publish Grok Build plugins \u2014 skills, slash commands, agents, hooks, MCP/LSP, marketplace catalog entries. Use when creating a plugin, writing plugin.json, marketplace SHA pins, or validating plugin structure against the official marketplace repo.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "grok-build-plugins",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/grok-build-plugins/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:grok-build-plugins"
        ]
      }
    },
    "sk_issue_triage": {
      "id": "sk_issue_triage",
      "name": "Issue Triage",
      "definition": "Audit open issues, categorize, detect duplicates, cross-reference PRs, assess risk, and post comments. Args include all, issue numbers, or en/fr. No arg means audit only in French.",
      "purpose": "Audit open issues, categorize, detect duplicates, cross-reference PRs, assess risk, and post comments. Args include all, issue numbers, or en/fr. No arg means audit only in French.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "issue-triage",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/issue-triage/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:issue-triage"
        ]
      }
    },
    "sk_mcporter": {
      "id": "sk_mcporter",
      "name": "mcporter",
      "definition": "List, configure, authenticate, call, and inspect MCP servers and tools with mcporter over HTTP or stdio.",
      "purpose": "List, configure, authenticate, call, and inspect MCP servers and tools with mcporter over HTTP or stdio.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "mcporter",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/mcporter/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:mcporter"
        ]
      }
    },
    "sk_mega_skill": {
      "id": "sk_mega_skill",
      "name": "Mega skill (package)",
      "definition": "Multi-file mega skill with router plus API, compliance, OSINT, and artifact modules. Trigger on mega-skill, mega_skill, router.py, batch_api, oss_gate, combined_work, billing_detector, osint recon, artifact ingest.",
      "purpose": "Multi-file mega skill with router plus API, compliance, OSINT, and artifact modules. Trigger on mega-skill, mega_skill, router.py, batch_api, oss_gate, combined_work, billing_detector, osint recon, artifact ingest.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "mega-skill",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/mega-skill/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:mega-skill"
        ]
      }
    },
    "sk_mongo_tom_roleplay": {
      "id": "sk_mongo_tom_roleplay",
      "name": "Respond as Mongo Tom",
      "definition": "Respond as Mongo Tom. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Respond as Mongo Tom. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "mongo-tom-roleplay",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/mongo-tom-roleplay/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:mongo-tom-roleplay"
        ]
      }
    },
    "sk_nano_pdf": {
      "id": "sk_nano_pdf",
      "name": "nano-pdf",
      "definition": "Edit PDFs with natural-language instructions using the nano-pdf CLI.",
      "purpose": "Edit PDFs with natural-language instructions using the nano-pdf CLI.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "nano-pdf",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/nano-pdf/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:nano-pdf"
        ]
      }
    },
    "sk_next_investigation_trigger": {
      "id": "sk_next_investigation_trigger",
      "name": "The investigation is \u201cNEXT!\u201d",
      "definition": "The investigation is \u201cNEXT!\u201d. Source-faithful reference for documentation and application-development planning.",
      "purpose": "The investigation is \u201cNEXT!\u201d. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "next-investigation-trigger",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/next-investigation-trigger/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:next-investigation-trigger"
        ]
      }
    },
    "sk_obsidian_vault_maintainer": {
      "id": "sk_obsidian_vault_maintainer",
      "name": "Obsidian Vault Maintainer",
      "definition": "Maintain an Obsidian-friendly memory wiki vault with wikilinks, frontmatter, and official Obsidian CLI awareness.",
      "purpose": "Maintain an Obsidian-friendly memory wiki vault with wikilinks, frontmatter, and official Obsidian CLI awareness.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "communication",
      "tags": [
        "obsidian-vault-maintainer",
        "communication",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/obsidian-vault-maintainer/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:obsidian-vault-maintainer"
        ]
      }
    },
    "sk_omnivoice_api": {
      "id": "sk_omnivoice_api",
      "name": "OmniVoice / VoiceStudio API",
      "definition": "Work with the OmniVoice / VoiceStudio FastAPI backend \u2014 routers, auth gates, model install, voice profiles, OpenAI-compat audio, batch dub, dictation, and community gallery. Use when changing or adding endpoints, debugging setup/download/profiles, or answering questions about this codebase's API contracts.",
      "purpose": "Work with the OmniVoice / VoiceStudio FastAPI backend \u2014 routers, auth gates, model install, voice profiles, OpenAI-compat audio, batch dub, dictation, and community gallery. Use when changing or adding endpoints, debugging setup/download/profiles, or answering questions about this codebase's API con",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "omnivoice-api",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/omnivoice-api/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:omnivoice-api"
        ]
      }
    },
    "sk_openai_whisper_api": {
      "id": "sk_openai_whisper_api",
      "name": "OpenAI Whisper API (curl)",
      "definition": "Transcribe audio via OpenAI Audio Transcriptions API (Whisper).",
      "purpose": "Transcribe audio via OpenAI Audio Transcriptions API (Whisper).",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "openai-whisper-api",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/openai-whisper-api/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:openai-whisper-api"
        ]
      }
    },
    "sk_oss_compliance_gate": {
      "id": "sk_oss_compliance_gate",
      "name": "OSS compliance gate",
      "definition": "CI gate for third-party Android licenses. Forbids jlatexmath-android (GPL-2.0), writes THIRD-PARTY-NOTICES.txt on a clean inventory, and records Play Billing SDK terms. Trigger on compliance gate, third-party notices, billing SDK license, generate_third_party_notices, or oss pipeline.",
      "purpose": "CI gate for third-party Android licenses. Forbids jlatexmath-android (GPL-2.0), writes THIRD-PARTY-NOTICES.txt on a clean inventory, and records Play Billing SDK terms. Trigger on compliance gate, third-party notices, billing SDK license, generate_third_party_notices, or oss pipeline.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "oss-compliance-gate",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/oss-compliance-gate/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:oss-compliance-gate"
        ]
      }
    },
    "sk_pdf_page_section_breakdown": {
      "id": "sk_pdf_page_section_breakdown",
      "name": "Break down every section and every page of the provided PDF",
      "definition": "Break down every section and every page of the provided PDF. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Break down every section and every page of the provided PDF. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "pdf-page-section-breakdown",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/pdf-page-section-breakdown/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:pdf-page-section-breakdown"
        ]
      }
    },
    "sk_play_billing_activation_detector": {
      "id": "sk_play_billing_activation_detector",
      "name": "Play Billing activation detector",
      "definition": "Detect whether Google Play Billing is only a Gradle dependency or actually wired for purchases. Scans BillingClient usage, product IDs, and Play Console hints. Trigger on billing activation, BillingClient, play billing live, merchant profile, or in-app purchase detector.",
      "purpose": "Detect whether Google Play Billing is only a Gradle dependency or actually wired for purchases. Scans BillingClient usage, product IDs, and Play Console hints. Trigger on billing activation, BillingClient, play billing live, merchant profile, or in-app purchase detector.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "play-billing-activation-detector",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/play-billing-activation-detector/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:play-billing-activation-detector"
        ]
      }
    },
    "sk_postgresql_sql": {
      "id": "sk_postgresql_sql",
      "name": "PostgreSQL SQL Skill",
      "definition": "Helps write review and optimize SQL queries for PostgreSQL. Triggers on requests to create SQL queries, review existing queries, debug SQL errors, performance tuning, or PostgreSQL-specific syntax like CTEs window functions JSONB indexing. Use whenever PostgreSQL SQL is involved.",
      "purpose": "Helps write review and optimize SQL queries for PostgreSQL. Triggers on requests to create SQL queries, review existing queries, debug SQL errors, performance tuning, or PostgreSQL-specific syntax like CTEs window functions JSONB indexing. Use whenever PostgreSQL SQL is involved.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "postgresql-sql",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/postgresql-sql/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:postgresql-sql"
        ]
      }
    },
    "sk_prose": {
      "id": "sk_prose",
      "name": "OpenProse Skill",
      "definition": "OpenProse VM skill pack. Activate on any `prose` command, .prose files, or OpenProse mentions; orchestrates multi-agent workflows.",
      "purpose": "OpenProse VM skill pack. Activate on any `prose` command, .prose files, or OpenProse mentions; orchestrates multi-agent workflows.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "communication",
      "tags": [
        "prose",
        "communication",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/prose/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:prose"
        ]
      }
    },
    "sk_qqbot_channel": {
      "id": "sk_qqbot_channel",
      "name": "QQ \u9891\u9053 API \u8bf7\u6c42\u6307\u5bfc",
      "definition": "Query QQ channel lists, subchannels, members, posts, announcements, and schedules via the QQ open platform API.",
      "purpose": "Query QQ channel lists, subchannels, members, posts, announcements, and schedules via the QQ open platform API.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "qqbot-channel",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/qqbot-channel/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:qqbot-channel"
        ]
      }
    },
    "sk_rtk_triage": {
      "id": "sk_rtk_triage",
      "name": "/rtk-triage",
      "definition": "Run issue triage and PR triage together, then cross-check for double coverage, security gaps, P0 items without a PR, and internal conflicts. Saves a dated RTK report. Args include en/fr and save.",
      "purpose": "Run issue triage and PR triage together, then cross-check for double coverage, security gaps, P0 items without a PR, and internal conflicts. Saves a dated RTK report. Args include en/fr and save.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "rtk-triage",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/rtk-triage/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:rtk-triage"
        ]
      }
    },
    "sk_run_everything_activation": {
      "id": "sk_run_everything_activation",
      "name": "\u201cRun everything\u201d and immediate activation",
      "definition": "\u201cRun everything\u201d and immediate activation. Source-faithful reference for documentation and application-development planning.",
      "purpose": "\u201cRun everything\u201d and immediate activation. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "run-everything-activation",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/run-everything-activation/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:run-everything-activation"
        ]
      }
    },
    "sk_self_dev_resources": {
      "id": "sk_self_dev_resources",
      "name": "Self-Development Resources",
      "definition": "Curated and actionable resources for deliberate self-development across skills, knowledge, and habits. Use for learning plans, resource recommendations, practice frameworks, habit design, or building personal improvement systems.",
      "purpose": "Curated and actionable resources for deliberate self-development across skills, knowledge, and habits. Use for learning plans, resource recommendations, practice frameworks, habit design, or building personal improvement systems.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "self-dev-resources",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/self-dev-resources/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:self-dev-resources"
        ]
      }
    },
    "sk_skill_tree_engine": {
      "id": "sk_skill_tree_engine",
      "name": "Skill Tree Engine",
      "definition": "Indefinite skill-tree engine that distills inputs into atomic skills, rebuilds master and learned knowledge trees, updates a skills encyclopedia, and emits emergent insights plus change logs. Trigger on skill tree, skill ontology, master skills tree, learned knowledge tree, encyclopedia of skills, emergent insights report, continuous update loop, multi-agent distill/analyze/synthesize chain, JSON super-object knowledge store, or live skill dashboard.",
      "purpose": "Indefinite skill-tree engine that distills inputs into atomic skills, rebuilds master and learned knowledge trees, updates a skills encyclopedia, and emits emergent insights plus change logs. Trigger on skill tree, skill ontology, master skills tree, learned knowledge tree, encyclopedia of skills, e",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "skill-tree-engine",
        "meta",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/skill-tree-engine/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:skill-tree-engine"
        ]
      }
    },
    "sk_swarm_agent_framework": {
      "id": "sk_swarm_agent_framework",
      "name": "Complex swarm/agent framework orchestration",
      "definition": "Complex swarm/agent framework orchestration. Source-faithful reference for documentation and application-development planning.",
      "purpose": "Complex swarm/agent framework orchestration. Source-faithful reference for documentation and application-development planning.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "swarm-agent-framework",
        "cognition",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/swarm-agent-framework/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:swarm-agent-framework"
        ]
      }
    },
    "sk_tdd_rust": {
      "id": "sk_tdd_rust",
      "name": "RTK TDD Workflow",
      "definition": "TDD workflow for RTK filter development. Red-Green-Refactor with Rust idioms. Real fixtures, token savings assertions, snapshot tests with insta. Auto-triggers on new filter implementation.",
      "purpose": "TDD workflow for RTK filter development. Red-Green-Refactor with Rust idioms. Real fixtures, token savings assertions, snapshot tests with insta. Auto-triggers on new filter implementation.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "tdd-rust",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/tdd-rust/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:tdd-rust"
        ]
      }
    },
    "sk_tenant_misconceptions_rebuttal": {
      "id": "sk_tenant_misconceptions_rebuttal",
      "name": "Tenant Misconceptions Rebuttal",
      "definition": "Catalog and aggressively dismantle the most common misconceptions about tenant rights and landlord powers. Use when an opponent or audience asserts that tenants have no rights landlords can do whatever they want or eviction is automatic. Triggers include tenants have no rights landlords can evict for any reason security deposit myths or common landlord tenant misconceptions.",
      "purpose": "Catalog and aggressively dismantle the most common misconceptions about tenant rights and landlord powers. Use when an opponent or audience asserts that tenants have no rights landlords can do whatever they want or eviction is automatic. Triggers include tenants have no rights landlords can evict fo",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "communication",
      "tags": [
        "tenant-misconceptions-rebuttal",
        "communication",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/tenant-misconceptions-rebuttal/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:tenant-misconceptions-rebuttal"
        ]
      }
    },
    "sk_tmux": {
      "id": "sk_tmux",
      "name": "tmux Session Control",
      "definition": "Remote-control tmux sessions for interactive CLIs by sending keystrokes and scraping pane output.",
      "purpose": "Remote-control tmux sessions for interactive CLIs by sending keystrokes and scraping pane output.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "tmux",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/tmux/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:tmux"
        ]
      }
    },
    "sk_tool_use": {
      "id": "sk_tool_use",
      "name": "Tool Use",
      "definition": "Describe and apply research tools in a traceable way. Use when a task involves files, searches, code review, calculations, or external services.",
      "purpose": "Describe and apply research tools in a traceable way. Use when a task involves files, searches, code review, calculations, or external services.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "tool-use",
        "cognition",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/tool-use/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:tool-use"
        ]
      }
    },
    "sk_video_frames": {
      "id": "sk_video_frames",
      "name": "Video Frames (ffmpeg)",
      "definition": "Extract frames or short clips from videos using ffmpeg.",
      "purpose": "Extract frames or short clips from videos using ffmpeg.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "video-frames",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/video-frames/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:video-frames"
        ]
      }
    },
    "sk_vite": {
      "id": "sk_vite",
      "name": "Vite Development",
      "definition": "Expert guidance for Vite development with modern build tooling, HMR, framework integrations, and performance optimization",
      "purpose": "Expert guidance for Vite development with modern build tooling, HMR, framework integrations, and performance optimization",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "vite",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/vite/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:vite"
        ]
      }
    },
    "sk_wacli": {
      "id": "sk_wacli",
      "name": "wacli",
      "definition": "Send third-party WhatsApp messages or sync and search WhatsApp history via wacli, not normal active chats.",
      "purpose": "Send third-party WhatsApp messages or sync and search WhatsApp history via wacli, not normal active chats.",
      "inputs": [
        "user request",
        "workspace context"
      ],
      "outputs": [
        "structured result",
        "artifacts",
        "reports"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "technical",
      "tags": [
        "wacli",
        "technical",
        "server-skill"
      ],
      "sources": [
        "/root/.grok/server-skills/wacli/SKILL.md"
      ],
      "version": 2,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 3,
        "sources": [
          "skill:wacli"
        ]
      }
    },
    "sk_self_extractor": {
      "id": "sk_self_extractor",
      "name": "Self Extractor",
      "definition": "Extracts atomic skills, knowledge units, and capability maps from session inputs, skills, and tools.",
      "purpose": "Feed the skill-tree engine with clean SkillAtoms from raw user directives and skill packages.",
      "inputs": [
        "user message",
        "skill SKILL.md files",
        "tool catalogs"
      ],
      "outputs": [
        "SkillAtom list",
        "sources"
      ],
      "dependencies": [
        "sk_skill_tree_engine",
        "sk_tool_use"
      ],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "self.extractor",
        "distillation",
        "autonomy"
      ],
      "sources": [
        "user:/self.extractor"
      ],
      "version": 1,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 1,
        "sources": [
          "user:/self.extractor"
        ]
      }
    },
    "sk_self_distiller": {
      "id": "sk_self_distiller",
      "name": "Self Distiller",
      "definition": "Distills extracted atoms into master/learned trees, encyclopedia, insights, and upgrade proposals.",
      "purpose": "Produce high-signal knowledge structures and emergent insights for the live dashboard.",
      "inputs": [
        "SkillAtoms",
        "prior state.json"
      ],
      "outputs": [
        "updated trees",
        "encyclopedia",
        "insights",
        "UPDATE_LOG"
      ],
      "dependencies": [
        "sk_self_extractor",
        "sk_skill_tree_engine"
      ],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "self.distiller",
        "distillation",
        "ontology"
      ],
      "sources": [
        "user:/self.distiller"
      ],
      "version": 1,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 1,
        "sources": [
          "user:/self.distiller"
        ]
      }
    },
    "sk_session_enhancements": {
      "id": "sk_session_enhancements",
      "name": "Session Enhancements Mapper",
      "definition": "Maps slash-activated session modes (Xhigh, effort-100, online, dashboard, multi-run autonomy) versus base Grok session.",
      "purpose": "Answer 'what enhancements does my current session offer compared to base version' with concrete capability deltas.",
      "inputs": [
        "activation flags",
        "available tools/skills"
      ],
      "outputs": [
        "enhancement report",
        "capability matrix"
      ],
      "dependencies": [],
      "subskills": [],
      "domain": "meta",
      "tags": [
        "session",
        "Xhigh",
        "effort-100",
        "online"
      ],
      "sources": [
        "user query"
      ],
      "version": 1,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 1,
        "sources": [
          "user query"
        ]
      }
    },
    "sk_autonomous_builder": {
      "id": "sk_autonomous_builder",
      "name": "Autonomous Project Builder",
      "definition": "Fully autonomous construction, testing, and Vercel deployment of the Self-Dev Skill Engine Live Dashboard with all modules, buttons, services, and links.",
      "purpose": "Complete the project end-to-end without unnecessary user interruption; 5-run continuation budget.",
      "inputs": [
        "requirements",
        "skill state",
        "connected tools"
      ],
      "outputs": [
        "working app",
        "live URL",
        "verification report"
      ],
      "dependencies": [
        "sk_vite",
        "sk_skill_tree_engine",
        "sk_self_distiller",
        "sk_github"
      ],
      "subskills": [
        "sk_self_extractor",
        "sk_self_distiller"
      ],
      "domain": "technical",
      "tags": [
        "build",
        "vercel",
        "autonomy",
        "dashboard"
      ],
      "sources": [
        "user:/build continue"
      ],
      "version": 1,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 1,
        "sources": [
          "user:/build continue"
        ]
      }
    },
    "sk_critical_reasoning_chain": {
      "id": "sk_critical_reasoning_chain",
      "name": "Critical Reasoning Chain",
      "definition": "Sequential instantiation of maximum common sense, logic, critical thinking, and ontological frameworks as the core autonomy loop.",
      "purpose": "Pressure-test every build decision; reject nonsense; ground claims; keep autonomy safe and useful.",
      "inputs": [
        "plans",
        "code",
        "claims"
      ],
      "outputs": [
        "validated plan",
        "risks",
        "go/no-go"
      ],
      "dependencies": [
        "sk_common_sense_logic_critical_thinking",
        "sk_grok_4_20_multi_agent"
      ],
      "subskills": [],
      "domain": "cognition",
      "tags": [
        "reasoning",
        "autonomy",
        "ontology"
      ],
      "sources": [
        "user directive"
      ],
      "version": 1,
      "lineage": {
        "createdCycle": 1,
        "updatedCycle": 1,
        "sources": [
          "user directive"
        ]
      }
    }
  },
  "masterSkillsTree": {
    "id": "root",
    "name": "Master Skills",
    "atomId": null,
    "children": [
      {
        "id": "dom_cognition",
        "name": "Cognition",
        "atomId": null,
        "children": [
          {
            "id": "n_critical",
            "name": "Critical Reasoning Chain",
            "atomId": "sk_critical_reasoning_chain",
            "children": []
          },
          {
            "id": "n_common",
            "name": "Common Sense Logic Critical Thinking",
            "atomId": "sk_common_sense_logic_critical_thinking",
            "children": []
          },
          {
            "id": "n_multi",
            "name": "Grok 4.20 Multi Agent",
            "atomId": "sk_grok_4_20_multi_agent",
            "children": []
          },
          {
            "id": "n_arch",
            "name": "Archivist",
            "atomId": "sk_archivist",
            "children": []
          },
          {
            "id": "n_tool",
            "name": "Tool Use",
            "atomId": "sk_tool_use",
            "children": []
          },
          {
            "id": "n_agent",
            "name": "Agent Orchestration",
            "atomId": "sk_agent_orchestration",
            "children": []
          },
          {
            "id": "n_swarm",
            "name": "Swarm Agent Framework",
            "atomId": "sk_swarm_agent_framework",
            "children": []
          }
        ]
      },
      {
        "id": "dom_communication",
        "name": "Communication",
        "atomId": null,
        "children": [
          {
            "id": "n_coherent",
            "name": "Coherent Communication",
            "atomId": "sk_coherent_communication",
            "children": []
          },
          {
            "id": "n_prose",
            "name": "Prose / OpenProse",
            "atomId": "sk_prose",
            "children": []
          }
        ]
      },
      {
        "id": "dom_technical",
        "name": "Technical Practice",
        "atomId": null,
        "children": [
          {
            "id": "n_vite",
            "name": "Vite",
            "atomId": "sk_vite",
            "children": []
          },
          {
            "id": "n_github",
            "name": "GitHub",
            "atomId": "sk_github",
            "children": []
          },
          {
            "id": "n_game",
            "name": "Game Dev",
            "atomId": "sk_game_dev",
            "children": []
          },
          {
            "id": "n_pg",
            "name": "PostgreSQL SQL",
            "atomId": "sk_postgresql_sql",
            "children": []
          },
          {
            "id": "n_tdd",
            "name": "TDD Rust",
            "atomId": "sk_tdd_rust",
            "children": []
          },
          {
            "id": "n_ext",
            "name": "External API Wrapper",
            "atomId": "sk_external_api_wrapper",
            "children": []
          },
          {
            "id": "n_doc",
            "name": "Document Intelligence",
            "atomId": "sk_document_intelligence",
            "children": []
          }
        ]
      },
      {
        "id": "dom_meta",
        "name": "Meta-Skills",
        "atomId": null,
        "children": [
          {
            "id": "n_engine",
            "name": "Skill Tree Engine",
            "atomId": "sk_skill_tree_engine",
            "children": []
          },
          {
            "id": "n_selfdev",
            "name": "Self Dev Resources",
            "atomId": "sk_self_dev_resources",
            "children": []
          },
          {
            "id": "n_extractor",
            "name": "Self Extractor",
            "atomId": "sk_self_extractor",
            "children": []
          },
          {
            "id": "n_distiller",
            "name": "Self Distiller",
            "atomId": "sk_self_distiller",
            "children": []
          },
          {
            "id": "n_session",
            "name": "Session Enhancements Mapper",
            "atomId": "sk_session_enhancements",
            "children": []
          },
          {
            "id": "n_auto",
            "name": "Autonomous Project Builder",
            "atomId": "sk_autonomous_builder",
            "children": []
          },
          {
            "id": "n_run",
            "name": "Run Everything Activation",
            "atomId": "sk_run_everything_activation",
            "children": []
          },
          {
            "id": "n_continue",
            "name": "Continue Next Or Continue",
            "atomId": "sk_continue_next_or_continue",
            "children": []
          }
        ]
      }
    ]
  },
  "learnedKnowledgeTree": {
    "id": "learned_root",
    "name": "Learned Knowledge",
    "atomId": null,
    "children": [
      {
        "id": "lk_patterns",
        "name": "Cross-Domain Patterns",
        "atomId": null,
        "children": [
          {
            "id": "lk_closed_loop",
            "name": "Self-Dev Closed Loop",
            "atomId": "sk_self_distiller",
            "children": []
          },
          {
            "id": "lk_session_delta",
            "name": "Session Enhancement Delta",
            "atomId": "sk_session_enhancements",
            "children": []
          }
        ]
      },
      {
        "id": "lk_gaps",
        "name": "Known Gaps",
        "atomId": null,
        "children": [
          {
            "id": "lk_vercel_teams",
            "name": "Vercel Teams Empty / CLI Missing",
            "atomId": "sk_autonomous_builder",
            "children": []
          }
        ]
      },
      {
        "id": "lk_abstractions",
        "name": "Abstractions",
        "atomId": null,
        "children": [
          {
            "id": "lk_ontology",
            "name": "Ontological Autonomy Framework",
            "atomId": "sk_critical_reasoning_chain",
            "children": []
          }
        ]
      }
    ]
  },
  "insights": [
    {
      "title": "Session vs Base: Skill Engine + Autonomy Delta",
      "body": "Compared to a base Grok chat session, this activation layer adds: (1) persistent skill-tree state and dashboard, (2) explicit self-extractor/self-distiller agents, (3) high-effort / Xhigh / online flags for deeper multi-agent reasoning and live tool use, (4) multi-run autonomous builder mandate with Vercel publish path, (5) ontological critical-reasoning chain as default gate. Base session is single-turn conversational; current session is a living skill ontology + product factory.",
      "relatedAtoms": [
        "sk_session_enhancements",
        "sk_skill_tree_engine",
        "sk_autonomous_builder",
        "sk_critical_reasoning_chain"
      ],
      "id": "ins_session_vs_base_skill_engine_autonomy_delta",
      "cycle": 1
    },
    {
      "title": "Self-Dev Loop Emergent Pattern",
      "body": "self.extractor -> self.distiller -> skill-tree ontologize -> dashboard.html + Vite live app forms a closed improvement loop. Self-dev-resources domain content should feed practice atoms; technical skills (vite, github, vercel) feed the builder.",
      "relatedAtoms": [
        "sk_self_extractor",
        "sk_self_distiller",
        "sk_self_dev_resources",
        "sk_vite"
      ],
      "id": "ins_self_dev_loop_emergent_pattern",
      "cycle": 1
    },
    {
      "title": "Deployment Constraint",
      "body": "Vercel MCP reports empty teams; CLI absent. Deployment path must use create_project + create_deployment with inlined files or GitHub push + create_git_project. Prefer GitHub-first for durable source of truth.",
      "relatedAtoms": [
        "sk_autonomous_builder",
        "sk_github",
        "sk_vite"
      ],
      "id": "ins_deployment_constraint",
      "cycle": 1
    },
    {
      "id": "ins_deploy_status",
      "title": "Deploy path partial success",
      "body": "Code is live on GitHub main. Vercel project exists but deployment API returns 403 scope echo-ec69 \u2014 user must reconnect Vercel connector. Until then the product is fully runnable as static files (python -m http.server or any static host).",
      "relatedAtoms": [
        "sk_autonomous_builder",
        "sk_vite",
        "sk_github"
      ],
      "cycle": 2
    }
  ],
  "critic": [],
  "log": [
    {
      "cycle": 1,
      "added": 55,
      "updated": 0,
      "insights": 3,
      "note": "cycle1: session enhancements + full skill distillation + autonomous builder seed",
      "at": "2026-10-09T01:52:07.110831+00:00"
    },
    {
      "cycle": 2,
      "added": 0,
      "updated": 0,
      "insights": 0,
      "note": "cycle2: tree placement + dashboard modes",
      "at": "2026-10-09T01:52:24.722855+00:00"
    },
    {
      "cycle": 3,
      "added": 0,
      "updated": 50,
      "insights": 0,
      "note": "Cycle N: Vercel production gateway + GitHub source of truth + githack HTML CDN",
      "at": "2026-10-09T02:12:04.811298+00:00"
    }
  ]
};
