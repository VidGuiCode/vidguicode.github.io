/**
 * Hermes AI Agent project page translations.
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';

    const extra = {
        "project.ai-hermes-agent.badge": { en: "AI AUTOMATION", pt: "AI AUTOMATION", lu: "AI AUTOMATION", de: "AI AUTOMATION", fr: "AI AUTOMATION" },
        "project.ai-hermes-agent.hero.title": { en: "Hermes AI Agent", pt: "Hermes AI Agent", lu: "Hermes AI Agent", de: "Hermes AI Agent", fr: "Hermes AI Agent" },
        "project.ai-hermes-agent.hero.subtitle": {
            en: "From May 2026 to today: a self-hosted AI agent running 24/7 on a rented VPS. It researches, monitors, automates, and communicates — all from a single conversation that remembers what happened yesterday.",
            pt: "From May 2026 to today: a self-hosted AI agent running 24/7 on a rented VPS. It researches, monitors, automates, and communicates — all from a single conversation that remembers what happened yesterday.",
            lu: "From May 2026 to today: a self-hosted AI agent running 24/7 on a rented VPS. It researches, monitors, automates, and communicates — all from a single conversation that remembers what happened yesterday.",
            de: "From May 2026 to today: a self-hosted AI agent running 24/7 on a rented VPS. It researches, monitors, automates, and communicates — all from a single conversation that remembers what happened yesterday.",
            fr: "From May 2026 to today: a self-hosted AI agent running 24/7 on a rented VPS. It researches, monitors, automates, and communicates — all from a single conversation that remembers what happened yesterday."
        },

        "project.ai-hermes-agent.context.title": { en: "The Idea", pt: "The Idea", lu: "The Idea", de: "The Idea", fr: "The Idea" },
        "project.ai-hermes-agent.context.body": {
            en: "Hermes is not just a chatbot; it is a personal AI layer running continuously on its own VPS. Most interaction happens through a local Synapse server using Matrix for context retention, while ntfy delivers time-sensitive alerts and attachments directly to my devices.",
            pt: "Hermes is not just a chatbot; it is a personal AI layer running continuously on its own VPS. Most interaction happens through a local Synapse server using Matrix for context retention, while ntfy delivers time-sensitive alerts and attachments directly to my devices.",
            lu: "Hermes is not just a chatbot; it is a personal AI layer running continuously on its own VPS. Most interaction happens through a local Synapse server using Matrix for context retention, while ntfy delivers time-sensitive alerts and attachments directly to my devices.",
            de: "Hermes is not just a chatbot; it is a personal AI layer running continuously on its own VPS. Most interaction happens through a local Synapse server using Matrix for context retention, while ntfy delivers time-sensitive alerts and attachments directly to my devices.",
            fr: "Hermes is not just a chatbot; it is a personal AI layer running continuously on its own VPS. Most interaction happens through a local Synapse server using Matrix for context retention, while ntfy delivers time-sensitive alerts and attachments directly to my devices."
        },
        "project.ai-hermes-agent.problem.title": { en: "Why I Built It", pt: "Why I Built It", lu: "Why I Built It", de: "Why I Built It", fr: "Why I Built It" },
        "project.ai-hermes-agent.problem.body": {
            en: "I was constantly jumping between a browser, terminal, chat app, note app, and scheduler — none of them remembered anything from the session before. I wanted an assistant that could keep context across days, work with my services, and run on a schedule without waiting for a prompt. Hermes integrates persistent memory and a reusable skill system into one conversation that runs alongside me.",
            pt: "I was constantly jumping between a browser, terminal, chat app, note app, and scheduler — none of them remembered anything from the session before. I wanted an assistant that could keep context across days, work with my services, and run on a schedule without waiting for a prompt. Hermes integrates persistent memory and a reusable skill system into one conversation that runs alongside me.",
            lu: "I was constantly jumping between a browser, terminal, chat app, note app, and scheduler — none of them remembered anything from the session before. I wanted an assistant that could keep context across days, work with my services, and run on a schedule without waiting for a prompt. Hermes integrates persistent memory and a reusable skill system into one conversation that runs alongside me.",
            de: "I was constantly jumping between a browser, terminal, chat app, note app, and scheduler — none of them remembered anything from the session before. I wanted an assistant that could keep context across days, work with my services, and run on a schedule without waiting for a prompt. Hermes integrates persistent memory and a reusable skill system into one conversation that runs alongside me.",
            fr: "I was constantly jumping between a browser, terminal, chat app, note app, and scheduler — none of them remembered anything from the session before. I wanted an assistant that could keep context across days, work with my services, and run on a schedule without waiting for a prompt. Hermes integrates persistent memory and a reusable skill system into one conversation that runs alongside me."
        },
        "project.ai-hermes-agent.solution.title": { en: "How I Use It", pt: "How I Use It", lu: "How I Use It", de: "How I Use It", fr: "How I Use It" },
        "project.ai-hermes-agent.solution.body": {
            en: "I send text or voice notes to Hermes, which uses Groq to transcribe them and responds using Piper TTS for natural audio feedback. Hermes executes deep research, gathers public transport schedules, checks server health, and saves structured summaries directly into my personal wiki vault.",
            pt: "I send text or voice notes to Hermes, which uses Groq to transcribe them and responds using Piper TTS for natural audio feedback. Hermes executes deep research, gathers public transport schedules, checks server health, and saves structured summaries directly into my personal wiki vault.",
            lu: "I send text or voice notes to Hermes, which uses Groq to transcribe them and responds using Piper TTS for natural audio feedback. Hermes executes deep research, gathers public transport schedules, checks server health, and saves structured summaries directly into my personal wiki vault.",
            de: "I send text or voice notes to Hermes, which uses Groq to transcribe them and responds using Piper TTS for natural audio feedback. Hermes executes deep research, gathers public transport schedules, checks server health, and saves structured summaries directly into my personal wiki vault.",
            fr: "I send text or voice notes to Hermes, which uses Groq to transcribe them and responds using Piper TTS for natural audio feedback. Hermes executes deep research, gathers public transport schedules, checks server health, and saves structured summaries directly into my personal wiki vault."
        },
        "project.ai-hermes-agent.layers.title": { en: "Core Workflows", pt: "Core Workflows", lu: "Core Workflows", de: "Core Workflows", fr: "Core Workflows" },

        "project.ai-hermes-agent.flow.matrix.title": { en: "Matrix & Platform Communication", pt: "Matrix & Platform Communication", lu: "Matrix & Platform Communication", de: "Matrix & Platform Communication", fr: "Matrix & Platform Communication" },
        "project.ai-hermes-agent.flow.matrix.kicker": { en: "Synapse & ntfy integration", pt: "Synapse & ntfy integration", lu: "Synapse & ntfy integration", de: "Synapse & ntfy integration", fr: "Synapse & ntfy integration" },
        "project.ai-hermes-agent.flow.matrix.body": {
            en: "Hermes is controlled through Matrix, maintaining long-term session context. It processes links, transcribes voice notes with Groq STT, responds with Piper TTS, and alerts via ntfy. Subagent delegation runs isolated workers for heavy lifting.",
            pt: "Hermes is controlled through Matrix, maintaining long-term session context. It processes links, transcribes voice notes with Groq STT, responds with Piper TTS, and alerts via ntfy. Subagent delegation runs isolated workers for heavy lifting.",
            lu: "Hermes is controlled through Matrix, maintaining long-term session context. It processes links, transcribes voice notes with Groq STT, responds with Piper TTS, and alerts via ntfy. Subagent delegation runs isolated workers for heavy lifting.",
            de: "Hermes is controlled through Matrix, maintaining long-term session context. It processes links, transcribes voice notes with Groq STT, responds with Piper TTS, and alerts via ntfy. Subagent delegation runs isolated workers for heavy lifting.",
            fr: "Hermes is controlled through Matrix, maintaining long-term session context. It processes links, transcribes voice notes with Groq STT, responds with Piper TTS, and alerts via ntfy. Subagent delegation runs isolated workers for heavy lifting."
        },
        "project.ai-hermes-agent.flow.daily.title": { en: "Scheduled Automation", pt: "Scheduled Automation", lu: "Scheduled Automation", de: "Scheduled Automation", fr: "Scheduled Automation" },
        "project.ai-hermes-agent.flow.daily.kicker": { en: "Cron scheduler & cost routing", pt: "Cron scheduler & cost routing", lu: "Cron scheduler & cost routing", de: "Cron scheduler & cost routing", fr: "Cron scheduler & cost routing" },
        "project.ai-hermes-agent.flow.daily.body": {
            en: "Jobs run in isolated sessions. Cost-aware routing targets cheap models for routine checks, reserving Claude for deep tasks. Chained jobs let a notifier consume summaries of structured data collected on schedule.",
            pt: "Jobs run in isolated sessions. Cost-aware routing targets cheap models for routine checks, reserving Claude for deep tasks. Chained jobs let a notifier consume summaries of structured data collected on schedule.",
            lu: "Jobs run in isolated sessions. Cost-aware routing targets cheap models for routine checks, reserving Claude for deep tasks. Chained jobs let a notifier consume summaries of structured data collected on schedule.",
            de: "Jobs run in isolated sessions. Cost-aware routing targets cheap models for routine checks, reserving Claude for deep tasks. Chained jobs let a notifier consume summaries of structured data collected on schedule.",
            fr: "Jobs run in isolated sessions. Cost-aware routing targets cheap models for routine checks, reserving Claude for deep tasks. Chained jobs let a notifier consume summaries of structured data collected on schedule."
        },
        "project.ai-hermes-agent.flow.research.title": { en: "Research & Knowledge Vault", pt: "Research & Knowledge Vault", lu: "Research & Knowledge Vault", de: "Research & Knowledge Vault", fr: "Research & Knowledge Vault" },
        "project.ai-hermes-agent.flow.research.kicker": { en: "Autonomous deep research", pt: "Autonomous deep research", lu: "Autonomous deep research", de: "Autonomous deep research", fr: "Autonomous deep research" },
        "project.ai-hermes-agent.flow.research.body": {
            en: "Hermes rewrites queries, fetches pages, extracts YouTube/TikTok transcripts and Twitter threads, and synthesizes answers with citations. Results land in a structured Markdown vault referenceable across sessions.",
            pt: "Hermes rewrites queries, fetches pages, extracts YouTube/TikTok transcripts and Twitter threads, and synthesizes answers with citations. Results land in a structured Markdown vault referenceable across sessions.",
            lu: "Hermes rewrites queries, fetches pages, extracts YouTube/TikTok transcripts and Twitter threads, and synthesizes answers with citations. Results land in a structured Markdown vault referenceable across sessions.",
            de: "Hermes rewrites queries, fetches pages, extracts YouTube/TikTok transcripts and Twitter threads, and synthesizes answers with citations. Results land in a structured Markdown vault referenceable across sessions.",
            fr: "Hermes rewrites queries, fetches pages, extracts YouTube/TikTok transcripts and Twitter threads, and synthesizes answers with citations. Results land in a structured Markdown vault referenceable across sessions."
        },
        "project.ai-hermes-agent.flow.personal.title": { en: "Personal Operations", pt: "Personal Operations", lu: "Personal Operations", de: "Personal Operations", fr: "Personal Operations" },
        "project.ai-hermes-agent.flow.personal.kicker": { en: "Email, calendar, tasks", pt: "Email, calendar, tasks", lu: "Email, calendar, tasks", de: "Email, calendar, tasks", fr: "Email, calendar, tasks" },
        "project.ai-hermes-agent.flow.personal.body": {
            en: "Hermes checks emails, parses calendar events, and schedules reminders. It links information together, allowing natural language scheduling and task generation to organize daily administrative routines.",
            pt: "Hermes checks emails, parses calendar events, and schedules reminders. It links information together, allowing natural language scheduling and task generation to organize daily administrative routines.",
            lu: "Hermes checks emails, parses calendar events, and schedules reminders. It links information together, allowing natural language scheduling and task generation to organize daily administrative routines.",
            de: "Hermes checks emails, parses calendar events, and schedules reminders. It links information together, allowing natural language scheduling and task generation to organize daily administrative routines.",
            fr: "Hermes checks emails, parses calendar events, and schedules reminders. It links information together, allowing natural language scheduling and task generation to organize daily administrative routines."
        },
        "project.ai-hermes-agent.flow.homelab.title": { en: "Infrastructure & Security", pt: "Infrastructure & Security", lu: "Infrastructure & Security", de: "Infrastructure & Security", fr: "Infrastructure & Security" },
        "project.ai-hermes-agent.flow.homelab.kicker": { en: "Multi-node health watchdog", pt: "Multi-node health watchdog", lu: "Multi-node health watchdog", de: "Multi-node health watchdog", fr: "Multi-node health watchdog" },
        "project.ai-hermes-agent.flow.homelab.body": {
            en: "Monitors CPU, RAM, temperature, and Docker container states. It performs security triage on CrowdSec logs, with deterministic health scoring to prevent LLM variance in critical infrastructure watchdogs.",
            pt: "Monitors CPU, RAM, temperature, and Docker container states. It performs security triage on CrowdSec logs, with deterministic health scoring to prevent LLM variance in critical infrastructure watchdogs.",
            lu: "Monitors CPU, RAM, temperature, and Docker container states. It performs security triage on CrowdSec logs, with deterministic health scoring to prevent LLM variance in critical infrastructure watchdogs.",
            de: "Monitors CPU, RAM, temperature, and Docker container states. It performs security triage on CrowdSec logs, with deterministic health scoring to prevent LLM variance in critical infrastructure watchdogs.",
            fr: "Monitors CPU, RAM, temperature, and Docker container states. It performs security triage on CrowdSec logs, with deterministic health scoring to prevent LLM variance in critical infrastructure watchdogs."
        },
        "project.ai-hermes-agent.flow.git.title": { en: "Skill System & MCP", pt: "Skill System & MCP", lu: "Skill System & MCP", de: "Skill System & MCP", fr: "Skill System & MCP" },
        "project.ai-hermes-agent.flow.git.kicker": { en: "Model Context Protocol & self-healing", pt: "Model Context Protocol & self-healing", lu: "Model Context Protocol & self-healing", de: "Model Context Protocol & self-healing", fr: "Model Context Protocol & self-healing" },
        "project.ai-hermes-agent.flow.git.body": {
            en: "Powered by 80+ reusable procedure files (markdown skills) that self-heal and auto-patch when steps drift. Model Context Protocol (MCP) integrations connect the agent to external tools and private services.",
            pt: "Powered by 80+ reusable procedure files (markdown skills) that self-heal and auto-patch when steps drift. Model Context Protocol (MCP) integrations connect the agent to external tools and private services.",
            lu: "Powered by 80+ reusable procedure files (markdown skills) that self-heal and auto-patch when steps drift. Model Context Protocol (MCP) integrations connect the agent to external tools and private services.",
            de: "Powered by 80+ reusable procedure files (markdown skills) that self-heal and auto-patch when steps drift. Model Context Protocol (MCP) integrations connect the agent to external tools and private services.",
            fr: "Powered by 80+ reusable procedure files (markdown skills) that self-heal and auto-patch when steps drift. Model Context Protocol (MCP) integrations connect the agent to external tools and private services."
        },

        "project.ai-hermes-agent.features.title": { en: "What Makes It Interesting", pt: "What Makes It Interesting", lu: "What Makes It Interesting", de: "What Makes It Interesting", fr: "What Makes It Interesting" },
        "project.ai-hermes-agent.features.voice": {
            en: "Voice interaction: Free-form voice notes are transcribed instantly by Groq, while Piper TTS enables natural spoken feedback when reading is inconvenient.",
            pt: "Voice interaction: Free-form voice notes are transcribed instantly by Groq, while Piper TTS enables natural spoken feedback when reading is inconvenient.",
            lu: "Voice interaction: Free-form voice notes are transcribed instantly by Groq, while Piper TTS enables natural spoken feedback when reading is inconvenient.",
            de: "Voice interaction: Free-form voice notes are transcribed instantly by Groq, while Piper TTS enables natural spoken feedback when reading is inconvenient.",
            fr: "Voice interaction: Free-form voice notes are transcribed instantly by Groq, while Piper TTS enables natural spoken feedback when reading is inconvenient."
        },
        "project.ai-hermes-agent.features.transport": {
            en: "Public transport API: Reverse engineered Mobiliteit.lu endpoints fetch real-time route options for my regular commutes directly inside the chat.",
            pt: "Public transport API: Reverse engineered Mobiliteit.lu endpoints fetch real-time route options for my regular commutes directly inside the chat.",
            lu: "Public transport API: Reverse engineered Mobiliteit.lu endpoints fetch real-time route options for my regular commutes directly inside the chat.",
            de: "Public transport API: Reverse engineered Mobiliteit.lu endpoints fetch real-time route options for my regular commutes directly inside the chat.",
            fr: "Public transport API: Reverse engineered Mobiliteit.lu endpoints fetch real-time route options for my regular commutes directly inside the chat."
        },
        "project.ai-hermes-agent.features.knowledge": {
            en: "Knowledge vault: Searchable Markdown notes organized with YAML frontmatter are pushed to a personal git server, providing persistent long-term memory.",
            pt: "Knowledge vault: Searchable Markdown notes organized with YAML frontmatter are pushed to a personal git server, providing persistent long-term memory.",
            lu: "Knowledge vault: Searchable Markdown notes organized with YAML frontmatter are pushed to a personal git server, providing persistent long-term memory.",
            de: "Knowledge vault: Searchable Markdown notes organized with YAML frontmatter are pushed to a personal git server, providing persistent long-term memory.",
            fr: "Knowledge vault: Searchable Markdown notes organized with YAML frontmatter are pushed to a personal git server, providing persistent long-term memory."
        },
        "project.ai-hermes-agent.features.images": {
            en: "Model routing: Vision and image tasks are dynamically routed to specific models, while cheaper text models handle routine infrastructure checks to control costs.",
            pt: "Model routing: Vision and image tasks are dynamically routed to specific models, while cheaper text models handle routine infrastructure checks to control costs.",
            lu: "Model routing: Vision and image tasks are dynamically routed to specific models, while cheaper text models handle routine infrastructure checks to control costs.",
            de: "Model routing: Vision and image tasks are dynamically routed to specific models, while cheaper text models handle routine infrastructure checks to control costs.",
            fr: "Model routing: Vision and image tasks are dynamically routed to specific models, while cheaper text models handle routine infrastructure checks to control costs."
        },
        "project.ai-hermes-agent.features.recovery": {
            en: "Docker recovery: Run in Docker containers with volume persistence, allowing the system to monitor its own state and recover from session or service failures.",
            pt: "Docker recovery: Run in Docker containers with volume persistence, allowing the system to monitor its own state and recover from session or service failures.",
            lu: "Docker recovery: Run in Docker containers with volume persistence, allowing the system to monitor its own state and recover from session or service failures.",
            de: "Docker recovery: Run in Docker containers with volume persistence, allowing the system to monitor its own state and recover from session or service failures.",
            fr: "Docker recovery: Run in Docker containers with volume persistence, allowing the system to monitor its own state and recover from session or service failures."
        },

        "project.ai-hermes-agent.providers.title": { en: "Provider and Cost Lessons", pt: "Provider and Cost Lessons", lu: "Provider and Cost Lessons", de: "Provider and Cost Lessons", fr: "Provider and Cost Lessons" },
        "project.ai-hermes-agent.providers.body": {
            en: "Building this system taught me crucial lessons about API pricing, session hygiene, and context cost. Early on, an uncompacted session loop on Alibaba Cloud PAYG cost me 107 EUR in a single week. This highlighted that session management, compacting, and starting clean logs are not minor details — they are absolute necessities.",
            pt: "Building this system taught me crucial lessons about API pricing, session hygiene, and context cost. Early on, an uncompacted session loop on Alibaba Cloud PAYG cost me 107 EUR in a single week. This highlighted that session management, compacting, and starting clean logs are not minor details — they are absolute necessities.",
            lu: "Building this system taught me crucial lessons about API pricing, session hygiene, and context cost. Early on, an uncompacted session loop on Alibaba Cloud PAYG cost me 107 EUR in a single week. This highlighted that session management, compacting, and starting clean logs are not minor details — they are absolute necessities.",
            de: "Building this system taught me crucial lessons about API pricing, session hygiene, and context cost. Early on, an uncompacted session loop on Alibaba Cloud PAYG cost me 107 EUR in a single week. This highlighted that session management, compacting, and starting clean logs are not minor details — they are absolute necessities.",
            fr: "Building this system taught me crucial lessons about API pricing, session hygiene, and context cost. Early on, an uncompacted session loop on Alibaba Cloud PAYG cost me 107 EUR in a single week. This highlighted that session management, compacting, and starting clean logs are not minor details — they are absolute necessities."
        },
        "project.ai-hermes-agent.providers.body2": {
            en: "Without massive local hardware, I route tasks intelligently: using lightweight models for cron watchdogs, vision models only when processing images, and high-tier models strictly for deep synthesis. Keeping the system cheap requires continuous model-routing adjustments.",
            pt: "Without massive local hardware, I route tasks intelligently: using lightweight models for cron watchdogs, vision models only when processing images, and high-tier models strictly for deep synthesis. Keeping the system cheap requires continuous model-routing adjustments.",
            lu: "Without massive local hardware, I route tasks intelligently: using lightweight models for cron watchdogs, vision models only when processing images, and high-tier models strictly for deep synthesis. Keeping the system cheap requires continuous model-routing adjustments.",
            de: "Without massive local hardware, I route tasks intelligently: using lightweight models for cron watchdogs, vision models only when processing images, and high-tier models strictly for deep synthesis. Keeping the system cheap requires continuous model-routing adjustments.",
            fr: "Without massive local hardware, I route tasks intelligently: using lightweight models for cron watchdogs, vision models only when processing images, and high-tier models strictly for deep synthesis. Keeping the system cheap requires continuous model-routing adjustments."
        },
        "project.ai-hermes-agent.isolation.title": { en: "Isolation and Recovery", pt: "Isolation and Recovery", lu: "Isolation and Recovery", de: "Isolation and Recovery", fr: "Isolation and Recovery" },
        "project.ai-hermes-agent.isolation.body": {
            en: "Running Hermes in Docker forces clean architectural boundaries. Separating persistent data volumes, limiting terminal tool privileges, and using git history to inspect or revert agent actions ensures mistakes can be recovered from without manual rebuilds.",
            pt: "Running Hermes in Docker forces clean architectural boundaries. Separating persistent data volumes, limiting terminal tool privileges, and using git history to inspect or revert agent actions ensures mistakes can be recovered from without manual rebuilds.",
            lu: "Running Hermes in Docker forces clean architectural boundaries. Separating persistent data volumes, limiting terminal tool privileges, and using git history to inspect or revert agent actions ensures mistakes can be recovered from without manual rebuilds.",
            de: "Running Hermes in Docker forces clean architectural boundaries. Separating persistent data volumes, limiting terminal tool privileges, and using git history to inspect or revert agent actions ensures mistakes can be recovered from without manual rebuilds.",
            fr: "Running Hermes in Docker forces clean architectural boundaries. Separating persistent data volumes, limiting terminal tool privileges, and using git history to inspect or revert agent actions ensures mistakes can be recovered from without manual rebuilds."
        },

        "project.ai-hermes-agent.lessons.title": { en: "Lessons Learned", pt: "Lessons Learned", lu: "Lessons Learned", de: "Lessons Learned", fr: "Lessons Learned" },
        "project.ai-hermes-agent.lessons.memory": {
            en: "Memory is the differentiator: A chatbot without memory is a search engine with extra steps.",
            pt: "Memory is the differentiator: A chatbot without memory is a search engine with extra steps.",
            lu: "Memory is the differentiator: A chatbot without memory is a search engine with extra steps.",
            de: "Memory is the differentiator: A chatbot without memory is a search engine with extra steps.",
            fr: "Memory is the differentiator: A chatbot without memory is a search engine with extra steps."
        },
        "project.ai-hermes-agent.lessons.cost": {
            en: "Cost control beats model quality: Don't burn Claude on \"is Docker up\". Cheap models handle routine checks fine.",
            pt: "Cost control beats model quality: Don't burn Claude on \"is Docker up\". Cheap models handle routine checks fine.",
            lu: "Cost control beats model quality: Don't burn Claude on \"is Docker up\". Cheap models handle routine checks fine.",
            de: "Cost control beats model quality: Don't burn Claude on \"is Docker up\". Cheap models handle routine checks fine.",
            fr: "Cost control beats model quality: Don't burn Claude on \"is Docker up\". Cheap models handle routine checks fine."
        },
        "project.ai-hermes-agent.lessons.skills": {
            en: "Skills beat prompts: A one-shot prompt is disposable. A skill that gets patched when it breaks compounds over time.",
            pt: "Skills beat prompts: A one-shot prompt is disposable. A skill that gets patched when it breaks compounds over time.",
            lu: "Skills beat prompts: A one-shot prompt is disposable. A skill that gets patched when it breaks compounds over time.",
            de: "Skills beat prompts: A one-shot prompt is disposable. A skill that gets patched when it breaks compounds over time.",
            fr: "Skills beat prompts: A one-shot prompt is disposable. A skill that gets patched when it breaks compounds over time."
        },
        "project.ai-hermes-agent.lessons.hosting": {
            en: "Self-hosting teaches the stack: No managed service to blame — you own the infrastructure, networking, and secrets.",
            pt: "Self-hosting teaches the stack: No managed service to blame — you own the infrastructure, networking, and secrets.",
            lu: "Self-hosting teaches the stack: No managed service to blame — you own the infrastructure, networking, and secrets.",
            de: "Self-hosting teaches the stack: No managed service to blame — you own the infrastructure, networking, and secrets.",
            fr: "Self-hosting teaches the stack: No managed service to blame — you own the infrastructure, networking, and secrets."
        },
        "project.ai-hermes-agent.lessons.subagents": {
            en: "Subagents prevent context flooding: Isolating heavy tasks inside worker subagents keeps the main conversation clean.",
            pt: "Subagents prevent context flooding: Isolating heavy tasks inside worker subagents keeps the main conversation clean.",
            lu: "Subagents prevent context flooding: Isolating heavy tasks inside worker subagents keeps the main conversation clean.",
            de: "Subagents prevent context flooding: Isolating heavy tasks inside worker subagents keeps the main conversation clean.",
            fr: "Subagents prevent context flooding: Isolating heavy tasks inside worker subagents keeps the main conversation clean."
        },
        "project.ai-hermes-agent.lessons.cron": {
            en: "Cron jobs stay boring: Keep automation pipelines simple — collect data, summarize, and deliver. No complex state machines.",
            pt: "Cron jobs stay boring: Keep automation pipelines simple — collect data, summarize, and deliver. No complex state machines.",
            lu: "Cron jobs stay boring: Keep automation pipelines simple — collect data, summarize, and deliver. No complex state machines.",
            de: "Cron jobs stay boring: Keep automation pipelines simple — collect data, summarize, and deliver. No complex state machines.",
            fr: "Cron jobs stay boring: Keep automation pipelines simple — collect data, summarize, and deliver. No complex state machines."
        },
        "project.ai-hermes-agent.lessons.routing": {
            en: "Platform routing is invaluable: Sending to Matrix, ntfy, or local files without rewriting the job makes workflows modular.",
            pt: "Platform routing is invaluable: Sending to Matrix, ntfy, or local files without rewriting the job makes workflows modular.",
            lu: "Platform routing is invaluable: Sending to Matrix, ntfy, or local files without rewriting the job makes workflows modular.",
            de: "Platform routing is invaluable: Sending to Matrix, ntfy, or local files without rewriting the job makes workflows modular.",
            fr: "Platform routing is invaluable: Sending to Matrix, ntfy, or local files without rewriting the job makes workflows modular."
        },

        "project.ai-hermes-agent.next.title": { en: "Next Steps", pt: "Next Steps", lu: "Next Steps", de: "Next Steps", fr: "Next Steps" },
        "project.ai-hermes-agent.next.body": {
            en: "Next steps include tighter homelab integration to pull metrics directly into unified dashboards, voice interaction via Piper TTS, more autonomous skill workflows, and ongoing cost routing tuning so the agent remains highly capable yet affordable.",
            pt: "Next steps include tighter homelab integration to pull metrics directly into unified dashboards, voice interaction via Piper TTS, more autonomous skill workflows, and ongoing cost routing tuning so the agent remains highly capable yet affordable.",
            lu: "Next steps include tighter homelab integration to pull metrics directly into unified dashboards, voice interaction via Piper TTS, more autonomous skill workflows, and ongoing cost routing tuning so the agent remains highly capable yet affordable.",
            de: "Next steps include tighter homelab integration to pull metrics directly into unified dashboards, voice interaction via Piper TTS, more autonomous skill workflows, and ongoing cost routing tuning so the agent remains highly capable yet affordable.",
            fr: "Next steps include tighter homelab integration to pull metrics directly into unified dashboards, voice interaction via Piper TTS, more autonomous skill workflows, and ongoing cost routing tuning so the agent remains highly capable yet affordable."
        },

        "project.ai-hermes-agent.sidebar.tech.agent": { en: "Hermes Agent", pt: "Hermes Agent", lu: "Hermes Agent", de: "Hermes Agent", fr: "Hermes Agent" },
        "project.ai-hermes-agent.sidebar.tech.vps": { en: "Dedicated VPS", pt: "Dedicated VPS", lu: "Dedicated VPS", de: "Dedicated VPS", fr: "Dedicated VPS" },
        "project.ai-hermes-agent.sidebar.tech.voice": { en: "Groq transcription", pt: "Groq transcription", lu: "Groq transcription", de: "Groq transcription", fr: "Groq transcription" },
        "project.ai-hermes-agent.sidebar.tech.mail": { en: "Email + calendar", pt: "Email + calendar", lu: "Email + calendar", de: "Email + calendar", fr: "Email + calendar" },
        "project.ai-hermes-agent.sidebar.tech.git": { en: "Personal git server", pt: "Personal git server", lu: "Personal git server", de: "Personal git server", fr: "Personal git server" },
        "project.ai-hermes-agent.sidebar.tech.vault": { en: "Markdown wiki vault", pt: "Markdown wiki vault", lu: "Markdown wiki vault", de: "Markdown wiki vault", fr: "Markdown wiki vault" },
        
        "project.ai-hermes-agent.sidebar.feature1": { en: "Matrix-first communication", pt: "Matrix-first communication", lu: "Matrix-first communication", de: "Matrix-first communication", fr: "Matrix-first communication" },
        "project.ai-hermes-agent.sidebar.feature2": { en: "Groq voice transcription", pt: "Groq voice transcription", lu: "Groq voice transcription", de: "Groq voice transcription", fr: "Groq voice transcription" },
        "project.ai-hermes-agent.sidebar.feature3": { en: "Cost-aware model routing", pt: "Cost-aware model routing", lu: "Cost-aware model routing", de: "Cost-aware model routing", fr: "Cost-aware model routing" },
        "project.ai-hermes-agent.sidebar.feature4": { en: "Chained scheduled automation", pt: "Chained scheduled automation", lu: "Chained scheduled automation", de: "Chained scheduled automation", fr: "Chained scheduled automation" },
        "project.ai-hermes-agent.sidebar.feature5": { en: "Autonomous deep research", pt: "Autonomous deep research", lu: "Autonomous deep research", de: "Autonomous deep research", fr: "Autonomous deep research" },
        "project.ai-hermes-agent.sidebar.feature6": { en: "Docker infrastructure watchdogs", pt: "Docker infrastructure watchdogs", lu: "Docker infrastructure watchdogs", de: "Docker infrastructure watchdogs", fr: "Docker infrastructure watchdogs" },
        "project.ai-hermes-agent.sidebar.feature7": { en: "Self-healing markdown skills", pt: "Self-healing markdown skills", lu: "Self-healing markdown skills", de: "Self-healing markdown skills", fr: "Self-healing markdown skills" },
        "project.ai-hermes-agent.sidebar.feature8": { en: "Model Context Protocol (MCP)", pt: "Model Context Protocol (MCP)", lu: "Model Context Protocol (MCP)", de: "Model Context Protocol (MCP)", fr: "Model Context Protocol (MCP)" }
    };

    Object.assign(translations, extra);
})();
