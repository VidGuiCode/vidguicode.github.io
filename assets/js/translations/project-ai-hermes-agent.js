/**
 * Hermes AI Agent project page translations (two-lens case study).
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 *
 * NOTE: pt / lu / de / fr were authored for this rebuild and should be
 * reviewed by a fluent speaker before deploy (lu especially).
 * Tech product names (Matrix, Synapse, ntfy, Groq, Piper, Docker, MCP,
 * Mobiliteit.lu, CrowdSec…) are intentionally left untranslated.
 */

(function() {
    'use strict';

    const extra = {
        /* ---- Hero / identity ---- */
        "project.ai-hermes-agent.badge": {
            en: "AI AUTOMATION",
            pt: "AUTOMAÇÃO COM IA",
            lu: "AI-AUTOMATISATIOUN",
            de: "KI-AUTOMATISIERUNG",
            fr: "AUTOMATISATION IA"
        },
        "project.ai-hermes-agent.hero.title": {
            en: "Hermes AI Agent", pt: "Hermes AI Agent", lu: "Hermes AI Agent", de: "Hermes AI Agent", fr: "Hermes AI Agent"
        },
        "project.ai-hermes-agent.hero.subtitle": {
            en: "A self-hosted AI agent that runs 24/7 on its own VPS. It researches, monitors, automates and talks back — all from a single conversation that remembers what happened yesterday.",
            pt: "Um agente de IA self-hosted que corre 24/7 no seu próprio VPS. Pesquisa, monitoriza, automatiza e responde — tudo a partir de uma única conversa que se lembra do que aconteceu ontem.",
            lu: "En self-hosted AI-Agent deen 24/7 op sengem eegene VPS leeft. Hie recherchéiert, iwwerwaacht, automatiséiert an äntwert zréck — alles aus enger eenzeger Konversatioun déi sech un dat erënnert wat gëschter geschitt ass.",
            de: "Ein selbstgehosteter KI-Agent, der rund um die Uhr auf seinem eigenen VPS läuft. Er recherchiert, überwacht, automatisiert und antwortet zurück — alles aus einer einzigen Konversation, die sich an das erinnert, was gestern passiert ist.",
            fr: "Un agent IA auto-hébergé qui tourne 24/7 sur son propre VPS. Il recherche, surveille, automatise et répond — le tout depuis une seule conversation qui se souvient de ce qui s'est passé hier."
        },
        "project.ai-hermes-agent.console": {
            en: "online since May 2026 · memory: persistent · channel: matrix",
            pt: "online desde maio de 2026 · memória: persistente · canal: matrix",
            lu: "online zënter Mee 2026 · Erënnerung: persistent · Kanal: matrix",
            de: "online seit Mai 2026 · Speicher: persistent · Kanal: matrix",
            fr: "en ligne depuis mai 2026 · mémoire : persistante · canal : matrix"
        },

        /* ---- Glance metrics ---- */
        "project.ai-hermes-agent.glance.uptime.label": {
            en: "always on, no prompt needed",
            pt: "sempre ativo, sem precisar de pedir",
            lu: "ëmmer un, ouni Nofro néideg",
            de: "immer an, ganz ohne Aufforderung",
            fr: "toujours actif, sans rien demander"
        },
        "project.ai-hermes-agent.glance.skills.label": {
            en: "self-healing skills it reuses",
            pt: "skills auto-reparáveis que reutiliza",
            lu: "selbst-reparéierend Skills déi en nees benotzt",
            de: "selbstheilende Skills, die es wiederverwendet",
            fr: "compétences auto-réparatrices réutilisées"
        },
        "project.ai-hermes-agent.glance.services.label": {
            en: "services wired into one chat",
            pt: "serviços ligados a um único chat",
            lu: "Servicer, déi an engem eenzege Chat verbonne sinn",
            de: "Dienste, verdrahtet in einem einzigen Chat",
            fr: "services reliés à une seule conversation"
        },
        "project.ai-hermes-agent.glance.domains.label": {
            en: "domains it runs day to day",
            pt: "domínios que gere no dia a dia",
            lu: "Beräicher, déi en all Dag bedreift",
            de: "Bereiche, die es täglich abdeckt",
            fr: "domaines qu'il gère au quotidien"
        },

        /* ---- Architecture / message-flow diagram ---- */
        "project.ai-hermes-agent.arch.title": {
            en: "How a message flows through Hermes",
            pt: "Como uma mensagem flui pelo Hermes",
            lu: "Wéi eng Noriicht duerch Hermes leeft",
            de: "Wie eine Nachricht durch Hermes fließt",
            fr: "Comment un message circule dans Hermes"
        },
        "project.ai-hermes-agent.arch.col.in": {
            en: "channels", pt: "canais", lu: "Kanäl", de: "Kanäle", fr: "canaux"
        },
        "project.ai-hermes-agent.arch.col.core": {
            en: "Hermes core — agent loop (vps / docker)",
            pt: "Núcleo Hermes — ciclo do agente (vps / docker)",
            lu: "Hermes-Kär — Agent-Loop (vps / docker)",
            de: "Hermes-Kern — Agenten-Loop (vps / docker)",
            fr: "Cœur Hermes — boucle de l'agent (vps / docker)"
        },
        "project.ai-hermes-agent.arch.col.out": {
            en: "tools", pt: "ferramentas", lu: "Tools", de: "Werkzeuge", fr: "outils"
        },
        "project.ai-hermes-agent.arch.you": {
            en: "You", pt: "Tu", lu: "Du", de: "Du", fr: "Vous"
        },
        "project.ai-hermes-agent.arch.voice": {
            en: "Voice notes", pt: "Notas de voz", lu: "Voice-Noten", de: "Sprachnachrichten", fr: "Notes vocales"
        },
        "project.ai-hermes-agent.arch.cron": {
            en: "Schedule", pt: "Agenda", lu: "Zäitplang", de: "Zeitplan", fr: "Planification"
        },
        "project.ai-hermes-agent.arch.route": {
            en: "route", pt: "rota", lu: "Route", de: "Route", fr: "router"
        },
        "project.ai-hermes-agent.arch.call": {
            en: "call", pt: "chama", lu: "Opruff", de: "Aufruf", fr: "appel"
        },
        "project.ai-hermes-agent.arch.memory": {
            en: "Memory vault", pt: "Cofre de memória", lu: "Erënnerungs-Vault", de: "Gedächtnis-Vault", fr: "Coffre mémoire"
        },
        "project.ai-hermes-agent.arch.skills": {
            en: "Skill system", pt: "Sistema de skills", lu: "Skill-System", de: "Skill-System", fr: "Système de compétences"
        },
        "project.ai-hermes-agent.arch.router": {
            en: "Model router", pt: "Roteador de modelos", lu: "Modell-Router", de: "Modell-Router", fr: "Routeur de modèles"
        },
        "project.ai-hermes-agent.arch.research": {
            en: "Research", pt: "Pesquisa", lu: "Recherche", de: "Recherche", fr: "Recherche"
        },
        "project.ai-hermes-agent.arch.transport": {
            en: "Transport", pt: "Transportes", lu: "Transport", de: "Verkehr", fr: "Transports"
        },
        "project.ai-hermes-agent.arch.personal": {
            en: "Email & calendar", pt: "Email e calendário", lu: "Email & Kalenner", de: "E-Mail & Kalender", fr: "E-mail et agenda"
        },
        "project.ai-hermes-agent.arch.infra": {
            en: "Server health", pt: "Saúde do servidor", lu: "Server-Gesondheet", de: "Server-Zustand", fr: "Santé du serveur"
        },
        "project.ai-hermes-agent.arch.image": {
            en: "Image gen", pt: "Geração de imagens", lu: "Bild-Generéierung", de: "Bildgenerierung", fr: "Génération d'images"
        },
        "project.ai-hermes-agent.arch.note": {
            en: "Answers stream back to the same chat — as a Matrix message, a Piper-spoken reply, or an ntfy push when it can't wait. Heavy jobs run in isolated subagents so the main conversation stays clean.",
            pt: "As respostas voltam para o mesmo chat — como mensagem de Matrix, resposta falada por Piper, ou um push de ntfy quando não pode esperar. As tarefas pesadas correm em subagentes isolados para manter a conversa principal limpa.",
            lu: "D'Äntwerten kommen an deeselwechte Chat zréck — als Matrix-Noriicht, als vum Piper geschwaten Äntwert, oder als ntfy-Push wann et net waarde kann. Schwéier Aufgabe lafen an isoléierte Subagenten, sou datt déi Haaptkonversatioun proper bleift.",
            de: "Antworten kommen in denselben Chat zurück — als Matrix-Nachricht, als von Piper gesprochene Antwort oder als ntfy-Push, wenn es nicht warten kann. Schwere Aufgaben laufen in isolierten Subagenten, damit die Hauptkonversation sauber bleibt.",
            fr: "Les réponses reviennent dans la même conversation — sous forme de message Matrix, de réponse vocale via Piper, ou d'une notification ntfy quand ça ne peut pas attendre. Les tâches lourdes tournent dans des sous-agents isolés pour garder la conversation principale propre."
        },

        /* ---- Overview: what it actually does ---- */
        "project.ai-hermes-agent.does.title": {
            en: "What it actually does",
            pt: "O que faz na prática",
            lu: "Wat et tatsächlech mécht",
            de: "Was es tatsächlich macht",
            fr: "Ce qu'il fait concrètement"
        },
        "project.ai-hermes-agent.does.talk.title": {
            en: "Talk to it like a person",
            pt: "Fala com ele como com uma pessoa",
            lu: "Schwätz mat em wéi mat enger Persoun",
            de: "Sprich mit ihm wie mit einem Menschen",
            fr: "Parlez-lui comme à une personne"
        },
        "project.ai-hermes-agent.does.talk.desc": {
            en: "Type or send a voice note in a private chat. It understands the voice note and can even answer back out loud.",
            pt: "Escreve ou envia uma nota de voz num chat privado. Ele percebe a nota de voz e até consegue responder em voz alta.",
            lu: "Schreif oder schéck eng Voice-Note an engem privaten Chat. Hie versteet d'Voice-Note a kann esouguer haart äntweren.",
            de: "Schreib oder schick eine Sprachnachricht in einem privaten Chat. Er versteht die Sprachnachricht und kann sogar laut antworten.",
            fr: "Écrivez ou envoyez une note vocale dans une conversation privée. Il comprend la note vocale et peut même répondre à voix haute."
        },
        "project.ai-hermes-agent.does.memory.title": {
            en: "It actually remembers",
            pt: "Lembra-se mesmo",
            lu: "Et erënnert sech wierklech",
            de: "Es erinnert sich wirklich",
            fr: "Il se souvient vraiment"
        },
        "project.ai-hermes-agent.does.memory.desc": {
            en: "Hermes keeps notes in its own wiki, so it carries context across days instead of forgetting the moment you close the chat.",
            pt: "O Hermes guarda notas no seu próprio wiki, por isso mantém o contexto ao longo dos dias em vez de esquecer assim que fechas o chat.",
            lu: "Den Hermes hält Noten an sengem eegene Wiki, sou datt en de Kontext iwwer Deeg bäibehält amplaz ze vergiessen soubal s du de Chat zoumaachs.",
            de: "Hermes hält Notizen in seinem eigenen Wiki, sodass er den Kontext über Tage hinweg behält, statt zu vergessen, sobald du den Chat schließt.",
            fr: "Hermes garde des notes dans son propre wiki, il conserve donc le contexte au fil des jours au lieu d'oublier dès que vous fermez la conversation."
        },
        "project.ai-hermes-agent.does.schedule.title": {
            en: "It works on a schedule",
            pt: "Trabalha de forma agendada",
            lu: "Et schafft no engem Zäitplang",
            de: "Es arbeitet nach Zeitplan",
            fr: "Il travaille selon un planning"
        },
        "project.ai-hermes-agent.does.schedule.desc": {
            en: "Morning briefings, reminders and alerts arrive on their own — Hermes does the routine checks without being asked.",
            pt: "Resumos matinais, lembretes e alertas chegam sozinhos — o Hermes faz as verificações de rotina sem que seja preciso pedir.",
            lu: "Moiesbriefingen, Erënnerungen an Alarmer kommen vu selwer — den Hermes mécht d'Routine-Kontrollen ouni datt een et froen muss.",
            de: "Morgen-Briefings, Erinnerungen und Warnungen kommen von selbst — Hermes erledigt die Routinechecks, ohne gefragt zu werden.",
            fr: "Briefings du matin, rappels et alertes arrivent tout seuls — Hermes fait les vérifications de routine sans qu'on le lui demande."
        },
        "project.ai-hermes-agent.does.many.title": {
            en: "One assistant, many jobs",
            pt: "Um assistente, muitas tarefas",
            lu: "Een Assistent, vill Aufgaben",
            de: "Ein Assistent, viele Aufgaben",
            fr: "Un assistant, plein de tâches"
        },
        "project.ai-hermes-agent.does.many.desc": {
            en: "Deep research, the next bus home, your inbox and your server's health — all handled in the same conversation.",
            pt: "Pesquisa aprofundada, o próximo autocarro para casa, a tua caixa de entrada e a saúde do teu servidor — tudo tratado na mesma conversa.",
            lu: "Déif Recherche, deen nächste Bus heem, däi Postfach an d'Gesondheet vun dengem Server — alles an der selwechter Konversatioun erleedegt.",
            de: "Tiefe Recherche, der nächste Bus nach Hause, dein Posteingang und der Zustand deines Servers — alles in derselben Konversation erledigt.",
            fr: "Recherche approfondie, le prochain bus pour rentrer, votre boîte mail et la santé de votre serveur — le tout géré dans la même conversation."
        },

        /* ---- Shared intro ---- */
        "project.ai-hermes-agent.idea.title": {
            en: "The idea", pt: "A ideia", lu: "D'Iddi", de: "Die Idee", fr: "L'idée"
        },
        "project.ai-hermes-agent.idea.body": {
            en: "Hermes is my attempt at a <strong>JARVIS of my own</strong> — not a chatbot I open when I need help, but a personal AI layer I own end to end. It runs continuously on its own VPS, reachable through my own Matrix server, with ntfy delivering anything that can't wait straight to my devices.",
            pt: "O Hermes é a minha tentativa de ter um <strong>JARVIS só meu</strong> — não um chatbot que abro quando preciso de ajuda, mas uma camada de IA pessoal que controlo de uma ponta à outra. Corre continuamente no seu próprio VPS, acessível através do meu próprio servidor Matrix, com o ntfy a entregar tudo o que não pode esperar diretamente nos meus dispositivos.",
            lu: "Den Hermes ass mäi Versuch fir e <strong>JARVIS deen mir gehéiert</strong> — net e Chatbot deen ech opmaachen wann ech Hëllef brauchen, mä eng perséinlech AI-Schicht déi ech vun A bis Z kontrolléieren. Et leeft permanent op sengem eegene VPS, erreechbar iwwer mäin eegene Matrix-Server, mam ntfy dat alles wat net waarde kann direkt op meng Geräter liwwert.",
            de: "Hermes ist mein Versuch eines <strong>eigenen JARVIS</strong> — kein Chatbot, den ich bei Bedarf öffne, sondern eine persönliche KI-Schicht, die mir von vorne bis hinten gehört. Sie läuft durchgehend auf ihrem eigenen VPS, erreichbar über meinen eigenen Matrix-Server, wobei ntfy alles, was nicht warten kann, direkt auf meine Geräte liefert.",
            fr: "Hermes, c'est ma tentative d'avoir un <strong>JARVIS à moi</strong> — non pas un chatbot que j'ouvre quand j'ai besoin d'aide, mais une couche d'IA personnelle que je maîtrise de bout en bout. Il tourne en continu sur son propre VPS, joignable via mon propre serveur Matrix, ntfy livrant directement sur mes appareils tout ce qui ne peut pas attendre."
        },

        /* ---- Technical: what runs under the hood ---- */
        "project.ai-hermes-agent.what.title": {
            en: "What runs under the hood",
            pt: "O que corre por baixo do capô",
            lu: "Wat ënnert der Hood leeft",
            de: "Was unter der Haube läuft",
            fr: "Ce qui tourne sous le capot"
        },
        "project.ai-hermes-agent.what.body": {
            en: "Six layers sit between a message and an answer: the messaging interface, the agent core that holds memory and skills, the scheduler, a research pipeline, personal-ops integrations, and the infrastructure layer that keeps the whole thing alive.",
            pt: "Seis camadas ficam entre uma mensagem e uma resposta: a interface de mensagens, o núcleo do agente que guarda memória e skills, o agendador, um pipeline de pesquisa, as integrações de operações pessoais e a camada de infraestrutura que mantém tudo vivo.",
            lu: "Sechs Schichten leien tëscht enger Noriicht an enger Äntwert: d'Messaging-Interface, de Agent-Kär deen Erënnerung a Skills hält, de Scheduler, eng Recherche-Pipeline, d'Integratioune fir perséinlech Operatiounen, an d'Infrastruktur-Schicht déi dat Ganzt um Liewen hält.",
            de: "Sechs Schichten liegen zwischen einer Nachricht und einer Antwort: die Messaging-Schnittstelle, der Agenten-Kern mit Gedächtnis und Skills, der Scheduler, eine Recherche-Pipeline, die Integrationen für persönliche Abläufe und die Infrastrukturschicht, die das Ganze am Leben hält.",
            fr: "Six couches se trouvent entre un message et une réponse : l'interface de messagerie, le cœur de l'agent qui détient la mémoire et les compétences, le planificateur, un pipeline de recherche, les intégrations d'opérations personnelles, et la couche d'infrastructure qui maintient l'ensemble en vie."
        },

        /* ---- Technical stack: Interface & Messaging ---- */
        "project.ai-hermes-agent.stack.iface.title": {
            en: "Interface & Messaging",
            pt: "Interface e mensagens",
            lu: "Interface & Messaging",
            de: "Schnittstelle & Messaging",
            fr: "Interface et messagerie"
        },
        "project.ai-hermes-agent.stack.iface.matrix": {
            en: "<strong>Matrix-first control</strong>: A self-hosted Synapse server is the primary channel, holding long-term session context so the conversation never resets.",
            pt: "<strong>Controlo via Matrix em primeiro lugar</strong>: um servidor Synapse self-hosted é o canal principal, mantendo o contexto de sessão a longo prazo para que a conversa nunca recomece do zero.",
            lu: "<strong>Matrix-first Kontroll</strong>: e self-hosted Synapse-Server ass den Haaptkanal, deen de Sessiounskontext op laang Zäit hält, sou datt d'Konversatioun ni zréckgesat gëtt.",
            de: "<strong>Matrix-first-Steuerung</strong>: Ein selbstgehosteter Synapse-Server ist der Hauptkanal und hält den Sitzungskontext langfristig, sodass die Konversation nie zurückgesetzt wird.",
            fr: "<strong>Contrôle d'abord par Matrix</strong> : un serveur Synapse auto-hébergé est le canal principal, conservant le contexte de session sur le long terme pour que la conversation ne reparte jamais de zéro."
        },
        "project.ai-hermes-agent.stack.iface.voice": {
            en: "<strong>Voice in and out</strong>: Groq transcribes voice notes for free; Piper TTS speaks answers back when reading is inconvenient.",
            pt: "<strong>Voz à entrada e à saída</strong>: o Groq transcreve notas de voz gratuitamente; o Piper TTS lê as respostas em voz alta quando ler não é prático.",
            lu: "<strong>Stëmm eran an eraus</strong>: de Groq transkribéiert Voice-Noten gratis; de Piper TTS schwätzt d'Äntwerten zréck wann d'Liesen onpraktesch ass.",
            de: "<strong>Sprache rein und raus</strong>: Groq transkribiert Sprachnachrichten kostenlos; Piper TTS spricht Antworten vor, wenn Lesen unpraktisch ist.",
            fr: "<strong>La voix en entrée et en sortie</strong> : Groq transcrit les notes vocales gratuitement ; Piper TTS lit les réponses à voix haute quand lire n'est pas pratique."
        },
        "project.ai-hermes-agent.stack.iface.ntfy": {
            en: "<strong>ntfy push</strong>: Time-sensitive alerts and attachments are pushed straight to my phone through a self-hosted ntfy instance.",
            pt: "<strong>Push via ntfy</strong>: alertas urgentes e anexos são enviados diretamente para o meu telemóvel através de uma instância ntfy self-hosted.",
            lu: "<strong>ntfy-Push</strong>: zäitkritesch Alarmer an Unhäng ginn direkt op mäin Handy iwwer eng self-hosted ntfy-Instanz geschéckt.",
            de: "<strong>ntfy-Push</strong>: Zeitkritische Warnungen und Anhänge werden über eine selbstgehostete ntfy-Instanz direkt auf mein Handy geschickt.",
            fr: "<strong>Push via ntfy</strong> : les alertes urgentes et les pièces jointes sont envoyées directement sur mon téléphone via une instance ntfy auto-hébergée."
        },
        "project.ai-hermes-agent.stack.iface.subagents": {
            en: "<strong>Subagent delegation</strong>: Heavy tasks run in isolated worker sessions, keeping the main conversation's context clean.",
            pt: "<strong>Delegação a subagentes</strong>: tarefas pesadas correm em sessões de worker isoladas, mantendo limpo o contexto da conversa principal.",
            lu: "<strong>Subagent-Delegatioun</strong>: schwéier Aufgabe lafen an isoléierte Worker-Sessiounen, sou datt de Kontext vun der Haaptkonversatioun proper bleift.",
            de: "<strong>Delegation an Subagenten</strong>: Schwere Aufgaben laufen in isolierten Worker-Sitzungen und halten den Kontext der Hauptkonversation sauber.",
            fr: "<strong>Délégation à des sous-agents</strong> : les tâches lourdes s'exécutent dans des sessions de worker isolées, gardant propre le contexte de la conversation principale."
        },

        /* ---- Technical stack: Agent Core & Memory ---- */
        "project.ai-hermes-agent.stack.core.title": {
            en: "Agent Core & Memory",
            pt: "Núcleo do agente e memória",
            lu: "Agent-Kär & Erënnerung",
            de: "Agenten-Kern & Gedächtnis",
            fr: "Cœur de l'agent et mémoire"
        },
        "project.ai-hermes-agent.stack.core.memory": {
            en: "<strong>Persistent memory vault</strong>: Searchable Markdown notes with YAML frontmatter are pushed to a personal git server — durable long-term memory, not just chat history.",
            pt: "<strong>Cofre de memória persistente</strong>: notas em Markdown pesquisáveis com frontmatter YAML são enviadas para um servidor git pessoal — memória de longo prazo durável, não apenas histórico de chat.",
            lu: "<strong>Persistente Erënnerungs-Vault</strong>: duerchsichbar Markdown-Noten mat YAML-Frontmatter ginn op e perséinleche git-Server geschéckt — dauerhaft Laangzäit-Erënnerung, net just Chat-Historik.",
            de: "<strong>Persistenter Gedächtnis-Vault</strong>: Durchsuchbare Markdown-Notizen mit YAML-Frontmatter werden auf einen persönlichen Git-Server gepusht — dauerhaftes Langzeitgedächtnis, nicht nur Chatverlauf.",
            fr: "<strong>Coffre de mémoire persistant</strong> : des notes Markdown indexables avec frontmatter YAML sont poussées vers un serveur git personnel — une mémoire durable à long terme, pas un simple historique de chat."
        },
        "project.ai-hermes-agent.stack.core.skills": {
            en: "<strong>Self-healing skills</strong>: 80+ reusable procedure files that auto-patch when a step drifts, so a skill that breaks once gets fixed for good.",
            pt: "<strong>Skills auto-reparáveis</strong>: mais de 80 ficheiros de procedimentos reutilizáveis que se corrigem sozinhos quando um passo se desvia, por isso uma skill que falha uma vez fica corrigida de vez.",
            lu: "<strong>Selbst-reparéierend Skills</strong>: méi wéi 80 erëmbenotzbar Prozedur-Fichieren déi sech selwer flécken wann e Schrëtt ofdriff, sou datt eng Skill déi eemol kabutt geet fir gutt gefléckt gëtt.",
            de: "<strong>Selbstheilende Skills</strong>: 80+ wiederverwendbare Prozedur-Dateien, die sich automatisch patchen, wenn ein Schritt abweicht — ein Skill, der einmal bricht, wird dauerhaft repariert.",
            fr: "<strong>Compétences auto-réparatrices</strong> : plus de 80 fichiers de procédures réutilisables qui se corrigent automatiquement quand une étape dérive, si bien qu'une compétence qui casse une fois est réparée pour de bon."
        },
        "project.ai-hermes-agent.stack.core.mcp": {
            en: "<strong>Model Context Protocol</strong>: MCP integrations bridge the agent to external tools and private homelab services behind a clean interface.",
            pt: "<strong>Model Context Protocol</strong>: as integrações MCP ligam o agente a ferramentas externas e a serviços privados do homelab por trás de uma interface limpa.",
            lu: "<strong>Model Context Protocol</strong>: MCP-Integratioune verbannen den Agent mat externen Tools a private Homelab-Servicer hannert engem propperen Interface.",
            de: "<strong>Model Context Protocol</strong>: MCP-Integrationen verbinden den Agenten über eine saubere Schnittstelle mit externen Tools und privaten Homelab-Diensten.",
            fr: "<strong>Model Context Protocol</strong> : les intégrations MCP relient l'agent à des outils externes et à des services privés du homelab derrière une interface propre."
        },

        /* ---- Technical stack: Scheduled Automation ---- */
        "project.ai-hermes-agent.stack.auto.title": {
            en: "Scheduled Automation",
            pt: "Automação agendada",
            lu: "Geplangten Automatisatioun",
            de: "Geplante Automatisierung",
            fr: "Automatisation planifiée"
        },
        "project.ai-hermes-agent.stack.auto.cron": {
            en: "<strong>Isolated cron sessions</strong>: Each scheduled job runs in a clean session — collect, summarize, deliver — with no tangled state machines.",
            pt: "<strong>Sessões cron isoladas</strong>: cada tarefa agendada corre numa sessão limpa — recolher, resumir, entregar — sem máquinas de estado emaranhadas.",
            lu: "<strong>Isoléiert Cron-Sessiounen</strong>: all geplangten Job leeft an enger propperer Sessioun — sammelen, zesummefaassen, liwweren — ouni verwéckelt State-Machinen.",
            de: "<strong>Isolierte Cron-Sitzungen</strong>: Jeder geplante Job läuft in einer sauberen Sitzung — sammeln, zusammenfassen, ausliefern — ohne verworrene State Machines.",
            fr: "<strong>Sessions cron isolées</strong> : chaque tâche planifiée s'exécute dans une session propre — collecter, résumer, livrer — sans machines à états alambiquées."
        },
        "project.ai-hermes-agent.stack.auto.routing": {
            en: "<strong>Cost-aware routing</strong>: Cheap models handle routine watchdog checks; frontier models are reserved strictly for deep synthesis.",
            pt: "<strong>Roteamento consciente do custo</strong>: modelos baratos tratam das verificações de rotina; os modelos de topo ficam reservados estritamente para a síntese aprofundada.",
            lu: "<strong>Käschtebewosst Routing</strong>: bëlleg Modeller maachen d'Routine-Watchdog-Kontrollen; Spëtzemodeller ginn strikt fir déif Synthees reservéiert.",
            de: "<strong>Kostenbewusstes Routing</strong>: Günstige Modelle übernehmen Routine-Watchdog-Checks; Spitzenmodelle sind strikt der tiefen Synthese vorbehalten.",
            fr: "<strong>Routage attentif aux coûts</strong> : les modèles bon marché gèrent les vérifications de routine ; les modèles de pointe sont strictement réservés à la synthèse approfondie."
        },
        "project.ai-hermes-agent.stack.auto.chained": {
            en: "<strong>Chained pipelines</strong>: A notifier job consumes the structured summary of a collector job, so workflows compose without rewrites.",
            pt: "<strong>Pipelines encadeados</strong>: uma tarefa notificadora consome o resumo estruturado de uma tarefa de recolha, por isso os fluxos compõem-se sem reescrever nada.",
            lu: "<strong>Verkettete Pipelines</strong>: e Notifier-Job benotzt de struktureierte Resumé vun engem Collector-Job, sou datt Workflows sech ouni Neischreiwen zesummesetzen.",
            de: "<strong>Verkettete Pipelines</strong>: Ein Notifier-Job verarbeitet die strukturierte Zusammenfassung eines Collector-Jobs, sodass sich Workflows ohne Umschreiben zusammensetzen.",
            fr: "<strong>Pipelines chaînés</strong> : une tâche de notification consomme le résumé structuré d'une tâche de collecte, si bien que les workflows se composent sans réécriture."
        },

        /* ---- Technical stack: Research & Knowledge ---- */
        "project.ai-hermes-agent.stack.research.title": {
            en: "Research & Knowledge",
            pt: "Pesquisa e conhecimento",
            lu: "Recherche & Wëssen",
            de: "Recherche & Wissen",
            fr: "Recherche et connaissances"
        },
        "project.ai-hermes-agent.stack.research.rewrite": {
            en: "<strong>Autonomous deep research</strong>: Hermes rewrites the query, fetches pages, and synthesizes a cited answer instead of dumping links.",
            pt: "<strong>Pesquisa aprofundada autónoma</strong>: o Hermes reescreve a consulta, vai buscar as páginas e sintetiza uma resposta com citações em vez de despejar links.",
            lu: "<strong>Autonom déif Recherche</strong>: den Hermes schreift d'Ufro nei, hëlt d'Säiten, a synthetiséiert eng zitéiert Äntwert amplaz Linken ofzelueden.",
            de: "<strong>Autonome Tiefenrecherche</strong>: Hermes schreibt die Anfrage um, holt die Seiten und synthetisiert eine zitierte Antwort, statt nur Links auszuwerfen.",
            fr: "<strong>Recherche approfondie autonome</strong> : Hermes reformule la requête, récupère les pages et synthétise une réponse sourcée au lieu de déverser des liens."
        },
        "project.ai-hermes-agent.stack.research.extract": {
            en: "<strong>Beyond plain web</strong>: Extractors pull YouTube/TikTok transcripts and Twitter threads into the same analysis.",
            pt: "<strong>Para além da web simples</strong>: extratores trazem transcrições de YouTube/TikTok e threads do Twitter para a mesma análise.",
            lu: "<strong>Méi wéi just de Web</strong>: Extraktoren zéien YouTube-/TikTok-Transkriptiounen an Twitter-Threads an déiselwecht Analys.",
            de: "<strong>Mehr als nur Web</strong>: Extraktoren ziehen YouTube-/TikTok-Transkripte und Twitter-Threads in dieselbe Analyse.",
            fr: "<strong>Au-delà du simple web</strong> : des extracteurs intègrent les transcriptions YouTube/TikTok et les fils Twitter à la même analyse."
        },
        "project.ai-hermes-agent.stack.research.vault": {
            en: "<strong>Results that last</strong>: Every report lands in the structured Markdown vault, referenceable from any later session.",
            pt: "<strong>Resultados que perduram</strong>: cada relatório fica no cofre Markdown estruturado, referenciável a partir de qualquer sessão posterior.",
            lu: "<strong>Resultater déi bleiwen</strong>: all Bericht landet am struktureierte Markdown-Vault, referenzéierbar aus all spéiderer Sessioun.",
            de: "<strong>Ergebnisse, die bleiben</strong>: Jeder Bericht landet im strukturierten Markdown-Vault und ist aus jeder späteren Sitzung referenzierbar.",
            fr: "<strong>Des résultats qui durent</strong> : chaque rapport atterrit dans le coffre Markdown structuré, référençable depuis n'importe quelle session ultérieure."
        },

        /* ---- Technical stack: Personal Operations ---- */
        "project.ai-hermes-agent.stack.personal.title": {
            en: "Personal Operations",
            pt: "Operações pessoais",
            lu: "Perséinlech Operatiounen",
            de: "Persönliche Abläufe",
            fr: "Opérations personnelles"
        },
        "project.ai-hermes-agent.stack.personal.mailcal": {
            en: "<strong>Inbox & calendar</strong>: Hermes checks email, parses events, and turns natural-language requests into reminders and tasks.",
            pt: "<strong>Caixa de entrada e calendário</strong>: o Hermes verifica o email, analisa eventos e transforma pedidos em linguagem natural em lembretes e tarefas.",
            lu: "<strong>Postfach & Kalenner</strong>: den Hermes kontrolléiert d'Email, analyséiert Evenementer, a mécht aus Ufroen an natierlecher Sprooch Erënnerungen an Aufgaben.",
            de: "<strong>Posteingang & Kalender</strong>: Hermes prüft E-Mails, analysiert Termine und macht aus Anfragen in natürlicher Sprache Erinnerungen und Aufgaben.",
            fr: "<strong>Boîte mail et agenda</strong> : Hermes consulte les e-mails, analyse les événements et transforme des demandes en langage naturel en rappels et tâches."
        },
        "project.ai-hermes-agent.stack.personal.transport": {
            en: "<strong>Real transport, not a demo</strong>: Reverse-engineered Mobiliteit.lu endpoints return live route options for the commutes I actually take.",
            pt: "<strong>Transportes reais, não uma demo</strong>: endpoints da Mobiliteit.lu obtidos por engenharia inversa devolvem opções de rota em tempo real para os trajetos que faço mesmo.",
            lu: "<strong>Richteg Transport, keng Demo</strong>: reverse-engineered Mobiliteit.lu-Endpunkten ginn live Routenoptiounen fir d'Strecken déi ech tatsächlech huelen.",
            de: "<strong>Echter Verkehr, keine Demo</strong>: Per Reverse Engineering erschlossene Mobiliteit.lu-Endpunkte liefern Live-Routenoptionen für die Strecken, die ich wirklich fahre.",
            fr: "<strong>Des transports réels, pas une démo</strong> : des points d'accès Mobiliteit.lu reconstitués par rétro-ingénierie renvoient des itinéraires en temps réel pour les trajets que je fais vraiment."
        },

        /* ---- Technical stack: Infrastructure, Runtime & Recovery ---- */
        "project.ai-hermes-agent.stack.infra.title": {
            en: "Infrastructure, Runtime & Recovery",
            pt: "Infraestrutura, execução e recuperação",
            lu: "Infrastruktur, Runtime & Erhuelung",
            de: "Infrastruktur, Laufzeit & Wiederherstellung",
            fr: "Infrastructure, exécution et récupération"
        },
        "project.ai-hermes-agent.stack.infra.monitor": {
            en: "<strong>Multi-node watchdog</strong>: Monitors CPU, RAM, temperature and container state, with deterministic health scoring so an LLM never invents an outage.",
            pt: "<strong>Watchdog multi-nó</strong>: monitoriza CPU, RAM, temperatura e estado dos contentores, com pontuação de saúde determinística para que um LLM nunca invente uma falha.",
            lu: "<strong>Multi-Node-Watchdog</strong>: iwwerwaacht CPU, RAM, Temperatur an de Container-Zoustand, mat deterministeschem Gesondheets-Scoring sou datt en LLM ni eng Pann erfënnt.",
            de: "<strong>Multi-Node-Watchdog</strong>: Überwacht CPU, RAM, Temperatur und Container-Zustand, mit deterministischem Health-Scoring, damit ein LLM nie einen Ausfall erfindet.",
            fr: "<strong>Surveillance multi-nœuds</strong> : surveille CPU, RAM, température et état des conteneurs, avec un score de santé déterministe pour qu'un LLM n'invente jamais une panne."
        },
        "project.ai-hermes-agent.stack.infra.security": {
            en: "<strong>Security triage</strong>: Correlates CrowdSec logs to surface what's worth my attention from the noise.",
            pt: "<strong>Triagem de segurança</strong>: correlaciona os logs do CrowdSec para destacar, no meio do ruído, o que merece a minha atenção.",
            lu: "<strong>Sécherheets-Triage</strong>: korreléiert CrowdSec-Logbicher fir aus dem Kaméidi erauszehiewen wat meng Opmierksamkeet verdéngt.",
            de: "<strong>Sicherheits-Triage</strong>: Korreliert CrowdSec-Logs, um aus dem Rauschen herauszufiltern, was meine Aufmerksamkeit verdient.",
            fr: "<strong>Tri de sécurité</strong> : corrèle les journaux CrowdSec pour faire ressortir, parmi le bruit, ce qui mérite mon attention."
        },
        "project.ai-hermes-agent.stack.infra.docker": {
            en: "<strong>Contained & recoverable</strong>: Runs in Docker with persistent volumes and least-privilege tooling; git history makes any agent action inspectable and revertible.",
            pt: "<strong>Contido e recuperável</strong>: corre em Docker com volumes persistentes e ferramentas de privilégio mínimo; o histórico git torna qualquer ação do agente inspecionável e reversível.",
            lu: "<strong>Agekapselt an erhuelbar</strong>: leeft an Docker mat persistente Volumen an Tooling mat Mindestprivileg; d'git-Historik mécht all Aktioun vum Agent iwwerpréifbar an ëmkéierbar.",
            de: "<strong>Gekapselt & wiederherstellbar</strong>: Läuft in Docker mit persistenten Volumes und Least-Privilege-Tooling; die Git-Historie macht jede Agentenaktion prüf- und rückgängig machbar.",
            fr: "<strong>Cloisonné et récupérable</strong> : tourne dans Docker avec des volumes persistants et des outils à moindre privilège ; l'historique git rend chaque action de l'agent inspectable et réversible."
        },

        /* ---- Why I built it (journey) ---- */
        "project.ai-hermes-agent.why.title": {
            en: "Why I built it",
            pt: "Porque o construí",
            lu: "Firwat ech et gebaut hunn",
            de: "Warum ich es gebaut habe",
            fr: "Pourquoi je l'ai construit"
        },
        "project.ai-hermes-agent.why.step1": {
            en: "Honestly, it started with curiosity and a sci-fi itch — I wanted a <strong>JARVIS of my own</strong>. Seeing a friend self-host his own agent was the nudge: the timing was right, so I rented a box and put Hermes on it to see how far I could take it.",
            pt: "Sinceramente, começou com curiosidade e um fascínio de ficção científica — eu queria um <strong>JARVIS só meu</strong>. Ver um amigo a alojar o seu próprio agente foi o empurrão: o momento era o certo, por isso aluguei um servidor e pus lá o Hermes para ver até onde o conseguia levar.",
            lu: "Éierlech gesot huet et mat Neigéier an enger Science-Fiction-Loscht ugefaangen — ech wollt e <strong>JARVIS deen mir gehéiert</strong>. Ze gesinn wéi e Frënd säin eegenen Agent selwer hostet war den Ustouss: den Timing huet gepasst, also hunn ech e Server gelount an den Hermes draufgesat fir ze kucken wéi wäit ech en dréine kann.",
            de: "Ehrlich gesagt fing es mit Neugier und einer Science-Fiction-Sehnsucht an — ich wollte einen <strong>eigenen JARVIS</strong>. Ein Freund, der seinen eigenen Agenten selbst hostete, gab den Anstoß: das Timing passte, also mietete ich einen Server und setzte Hermes darauf, um zu sehen, wie weit ich damit komme.",
            fr: "Honnêtement, ça a commencé par de la curiosité et une envie de science-fiction — je voulais un <strong>JARVIS à moi</strong>. Voir un ami auto-héberger son propre agent a été le déclic : le moment était bien choisi, alors j'ai loué un serveur et y ai installé Hermes pour voir jusqu'où je pouvais le pousser."
        },
        "project.ai-hermes-agent.why.step2": {
            en: "Hermes isn't my coding setup — I have plenty of agents for that. It fills a different gap: instead of opening a throwaway ChatGPT tab that forgets me by tomorrow, I just ask Hermes. It <strong>remembers either way</strong>, holds context across days, and can act on my own services.",
            pt: "O Hermes não é o meu ambiente de programação — para isso tenho agentes que cheguem. Ele preenche outra lacuna: em vez de abrir um separador descartável do ChatGPT que amanhã já se esqueceu de mim, pergunto ao Hermes. Ele <strong>lembra-se à mesma</strong>, mantém o contexto ao longo dos dias e consegue agir sobre os meus próprios serviços.",
            lu: "Den Hermes ass net mäi Kodéier-Setup — dofir hunn ech genuch Agenten. Hien decken eng aner Lück of: amplaz en eemolege ChatGPT-Tab opzemaachen deen mech muer scho vergiess huet, froen ech einfach den Hermes. Hien <strong>erënnert sech esou wéi esou</strong>, hält de Kontext iwwer Deeg, a kann op meng eege Servicer agéieren.",
            de: "Hermes ist nicht mein Coding-Setup — dafür habe ich genug Agenten. Er füllt eine andere Lücke: statt einen Wegwerf-ChatGPT-Tab zu öffnen, der mich morgen schon vergessen hat, frage ich einfach Hermes. Er <strong>erinnert sich sowieso</strong>, hält den Kontext über Tage und kann auf meinen eigenen Diensten handeln.",
            fr: "Hermes n'est pas mon environnement de code — j'ai largement assez d'agents pour ça. Il comble un autre manque : au lieu d'ouvrir un onglet ChatGPT jetable qui m'aura oublié demain, je demande simplement à Hermes. Il <strong>se souvient de toute façon</strong>, garde le contexte sur plusieurs jours et peut agir sur mes propres services."
        },
        "project.ai-hermes-agent.why.step3": {
            en: "What matters most is that it's <strong>mine</strong> — not a rented product from Claude or any other provider. I own the data, the infrastructure and the skills, and I decide what it's allowed to do. The AI model is the only piece I can't self-host yet, and that doesn't change whose agent this is.",
            pt: "O que mais importa é que é <strong>meu</strong> — não um produto alugado da Claude nem de qualquer outro fornecedor. Sou dono dos dados, da infraestrutura e das skills, e sou eu que decido o que ele pode fazer. O modelo de IA é a única peça que ainda não consigo alojar eu próprio, e isso não muda de quem é este agente.",
            lu: "Wat am wichtegsten ass: et ass <strong>mengt</strong> — kee gelounte Produkt vun der Claude oder iergendengem anere Fournisseur. D'Donnéeën, d'Infrastruktur an d'Skills gehéieren mir, an ech decidéieren wat en däerf maachen. De AI-Modell ass dat eenzegt Stéck dat ech nach net selwer hoste kann, an dat ännert näischt drun wiem dësen Agent gehéiert.",
            de: "Am wichtigsten ist, dass er <strong>mir gehört</strong> — kein gemietetes Produkt von Claude oder einem anderen Anbieter. Die Daten, die Infrastruktur und die Skills gehören mir, und ich entscheide, was er darf. Das KI-Modell ist das einzige Stück, das ich noch nicht selbst hosten kann, und das ändert nichts daran, wessen Agent das ist.",
            fr: "Le plus important, c'est qu'il est <strong>à moi</strong> — pas un produit loué chez Claude ou un autre fournisseur. Les données, l'infrastructure et les compétences m'appartiennent, et c'est moi qui décide de ce qu'il a le droit de faire. Le modèle d'IA est la seule pièce que je ne peux pas encore auto-héberger, et ça ne change rien à qui appartient cet agent."
        },
        "project.ai-hermes-agent.why.step4": {
            en: "Then one uncompacted session loop on pay-as-you-go cost me <strong>€107 in a single week</strong>. That bill taught me cost-routing and session hygiene the hard way — and turned model routing into a core discipline of the project.",
            pt: "Depois, um ciclo de sessão sem compactação em pay-as-you-go custou-me <strong>107 € numa só semana</strong>. Essa fatura ensinou-me cost-routing e higiene de sessões à força — e tornou o roteamento de modelos numa disciplina central do projeto.",
            lu: "Duerno huet eng net-kompaktéiert Sessiounsschleef op Pay-as-you-go mech <strong>107 € an enger eenzeger Woch</strong> kascht. Déi Rechnung huet mir Cost-Routing a Sessiounshygiène op déi haart Manéier bäibruecht — an huet Modell-Routing zu enger Kärdisziplin vum Projet gemaach.",
            de: "Dann kostete mich eine nicht komprimierte Sitzungsschleife im Pay-as-you-go-Modell <strong>107 € in einer einzigen Woche</strong>. Diese Rechnung brachte mir Cost-Routing und Sitzungshygiene auf die harte Tour bei — und machte Modell-Routing zu einer Kerndisziplin des Projekts.",
            fr: "Puis une boucle de session non compactée en paiement à l'usage m'a coûté <strong>107 € en une seule semaine</strong>. Cette facture m'a appris le routage par coût et l'hygiène des sessions à la dure — et a fait du routage de modèles une discipline centrale du projet."
        },

        /* ---- Lessons learned ---- */
        "project.ai-hermes-agent.lessons.title": {
            en: "What it taught me",
            pt: "O que me ensinou",
            lu: "Wat et mech geléiert huet",
            de: "Was es mich gelehrt hat",
            fr: "Ce que ça m'a appris"
        },
        "project.ai-hermes-agent.lessons.memory.title": {
            en: "Memory is the moat",
            pt: "A memória é a vantagem",
            lu: "D'Erënnerung ass de Virsprong",
            de: "Gedächtnis ist der Burggraben",
            fr: "La mémoire fait la différence"
        },
        "project.ai-hermes-agent.lessons.memory.body": {
            en: "A chatbot without memory is a search engine with extra steps. Persistent context is what makes Hermes feel like an assistant.",
            pt: "Um chatbot sem memória é um motor de busca com passos a mais. É o contexto persistente que faz o Hermes parecer um assistente.",
            lu: "E Chatbot ouni Erënnerung ass eng Sichmaschinn mat zousätzleche Schrëtt. Et ass de persistente Kontext deen den Hermes wéi en Assistent wierke léisst.",
            de: "Ein Chatbot ohne Gedächtnis ist eine Suchmaschine mit Extraschritten. Erst der persistente Kontext lässt Hermes wie einen Assistenten wirken.",
            fr: "Un chatbot sans mémoire est un moteur de recherche avec des étapes en plus. C'est le contexte persistant qui donne à Hermes des airs d'assistant."
        },
        "project.ai-hermes-agent.lessons.cost.title": {
            en: "Cheap beats clever",
            pt: "Barato vence inteligente",
            lu: "Bëlleg schléit clever",
            de: "Günstig schlägt clever",
            fr: "Pas cher l'emporte sur malin"
        },
        "project.ai-hermes-agent.lessons.cost.body": {
            en: "Don't spend a frontier model on \"is Docker up?\". Cost control beats raw model quality for everyday work.",
            pt: "Não gastes um modelo de topo no \"o Docker está de pé?\". O controlo de custos vence a qualidade bruta do modelo no trabalho do dia a dia.",
            lu: "Verbrauch keen Spëtzemodell fir \"leeft den Docker?\". Käschtekontroll schléit déi reng Modellqualitéit fir d'alldeeglech Aarbecht.",
            de: "Verschwende kein Spitzenmodell für \"läuft Docker?\". Für die tägliche Arbeit schlägt Kostenkontrolle die reine Modellqualität.",
            fr: "Ne gaspillez pas un modèle de pointe pour \"Docker tourne-t-il ?\". Pour le travail quotidien, le contrôle des coûts l'emporte sur la qualité brute du modèle."
        },
        "project.ai-hermes-agent.lessons.skills.title": {
            en: "Skills compound",
            pt: "As skills acumulam valor",
            lu: "Skills bauen sech op",
            de: "Skills summieren sich",
            fr: "Les compétences se cumulent"
        },
        "project.ai-hermes-agent.lessons.skills.body": {
            en: "A one-shot prompt is disposable. A skill that gets patched when it breaks gets better every time it runs.",
            pt: "Um prompt único é descartável. Uma skill que é corrigida quando falha melhora a cada vez que corre.",
            lu: "E One-Shot-Prompt ass fortzegeheien. Eng Skill déi gefléckt gëtt wann se kabutt geet gëtt all Kéier besser wann se leeft.",
            de: "Ein Einmal-Prompt ist Wegwerfware. Ein Skill, der bei einem Fehler gepatcht wird, wird mit jedem Lauf besser.",
            fr: "Un prompt unique est jetable. Une compétence corrigée quand elle casse s'améliore à chaque exécution."
        },
        "project.ai-hermes-agent.lessons.hosting.title": {
            en: "Own the whole stack",
            pt: "Domina toda a stack",
            lu: "Bemeeschter déi ganz Stack",
            de: "Beherrsche den ganzen Stack",
            fr: "Maîtriser toute la stack"
        },
        "project.ai-hermes-agent.lessons.hosting.body": {
            en: "Self-hosting means no managed service to blame — you learn the infrastructure, networking and secrets for real.",
            pt: "Self-hosting significa que não há serviço gerido a quem culpar — aprendes a infraestrutura, a rede e os segredos a sério.",
            lu: "Self-hosting heescht datt et kee gemanagete Service gëtt fir d'Schold ze ginn — du léiers d'Infrastruktur, d'Netzwierk an d'Geheimnisser richteg.",
            de: "Self-Hosting heißt: kein Managed Service, dem man die Schuld geben kann — du lernst Infrastruktur, Netzwerk und Secrets wirklich.",
            fr: "L'auto-hébergement, c'est aucun service géré à blâmer — on apprend pour de vrai l'infrastructure, le réseau et les secrets."
        },
        "project.ai-hermes-agent.lessons.subagents.title": {
            en: "Isolate heavy work",
            pt: "Isola o trabalho pesado",
            lu: "Isoléier déi schwéier Aarbecht",
            de: "Isoliere schwere Arbeit",
            fr: "Isoler le travail lourd"
        },
        "project.ai-hermes-agent.lessons.subagents.body": {
            en: "Pushing big tasks into worker subagents keeps the main conversation focused and stops context from flooding.",
            pt: "Empurrar tarefas grandes para subagentes worker mantém a conversa principal focada e impede o contexto de transbordar.",
            lu: "Grouss Aufgaben an Worker-Subagenten ze schubsen hält d'Haaptkonversatioun fokusséiert a verhënnert datt de Kontext iwwerleeft.",
            de: "Große Aufgaben in Worker-Subagenten zu schieben hält die Hauptkonversation fokussiert und verhindert, dass der Kontext überflutet.",
            fr: "Pousser les grosses tâches dans des sous-agents worker garde la conversation principale concentrée et évite que le contexte ne déborde."
        },
        "project.ai-hermes-agent.lessons.cron.title": {
            en: "Keep cron boring",
            pt: "Mantém o cron aborrecido",
            lu: "Halt de Cron langweileg",
            de: "Halte Cron langweilig",
            fr: "Gardez le cron ennuyeux"
        },
        "project.ai-hermes-agent.lessons.cron.body": {
            en: "Collect, summarize, deliver. The most reliable automation pipelines are the ones with no clever state machine.",
            pt: "Recolher, resumir, entregar. Os pipelines de automação mais fiáveis são os que não têm máquina de estados engenhosa.",
            lu: "Sammelen, zesummefaassen, liwweren. Déi zouverléissegst Automatisatiouns-Pipelines sinn déi ouni clever State-Machine.",
            de: "Sammeln, zusammenfassen, ausliefern. Die zuverlässigsten Automatisierungs-Pipelines sind die ohne clevere State Machine.",
            fr: "Collecter, résumer, livrer. Les pipelines d'automatisation les plus fiables sont ceux sans machine à états astucieuse."
        },

        /* ---- What's next ---- */
        "project.ai-hermes-agent.next.title": {
            en: "What's next",
            pt: "O que se segue",
            lu: "Wat als nächst kënnt",
            de: "Was als Nächstes kommt",
            fr: "La suite"
        },
        "project.ai-hermes-agent.next.dashboard": {
            en: "Tighter homelab metrics in one dashboard",
            pt: "Métricas do homelab mais integradas num só painel",
            lu: "Méi enk Homelab-Metriken an engem eenzegen Dashboard",
            de: "Engere Homelab-Metriken in einem Dashboard",
            fr: "Des métriques homelab mieux intégrées dans un tableau de bord"
        },
        "project.ai-hermes-agent.next.transport": {
            en: "More public-transport destinations",
            pt: "Mais destinos de transportes públicos",
            lu: "Méi Destinatioune fir den ëffentlechen Transport",
            de: "Mehr Ziele im öffentlichen Nahverkehr",
            fr: "Plus de destinations en transport public"
        },
        "project.ai-hermes-agent.next.skills": {
            en: "Smarter skill self-healing",
            pt: "Auto-reparação de skills mais inteligente",
            lu: "Méi schlau Selbst-Reparatur vu Skills",
            de: "Intelligentere Selbstheilung von Skills",
            fr: "Auto-réparation des compétences plus intelligente"
        },
        "project.ai-hermes-agent.next.cost": {
            en: "Continuous cost-routing tuning",
            pt: "Afinação contínua do cost-routing",
            lu: "Kontinuéierlech Ofstëmmung vum Cost-Routing",
            de: "Kontinuierliche Feinabstimmung des Cost-Routings",
            fr: "Réglage continu du routage par coût"
        },

        /* ---- Sidebar: tech stack ---- */
        "project.ai-hermes-agent.sidebar.tech.agent": {
            en: "Hermes Agent", pt: "Hermes Agent", lu: "Hermes Agent", de: "Hermes Agent", fr: "Hermes Agent"
        },
        "project.ai-hermes-agent.sidebar.tech.vps": {
            en: "Dedicated VPS", pt: "VPS dedicado", lu: "Dedizéierte VPS", de: "Dedizierter VPS", fr: "VPS dédié"
        },
        "project.ai-hermes-agent.sidebar.tech.voice": {
            en: "Groq transcription", pt: "Transcrição Groq", lu: "Groq-Transkriptioun", de: "Groq-Transkription", fr: "Transcription Groq"
        },
        "project.ai-hermes-agent.sidebar.tech.mail": {
            en: "Email + calendar", pt: "Email + calendário", lu: "Email + Kalenner", de: "E-Mail + Kalender", fr: "E-mail + agenda"
        },
        "project.ai-hermes-agent.sidebar.tech.git": {
            en: "Personal git server", pt: "Servidor git pessoal", lu: "Perséinleche git-Server", de: "Persönlicher Git-Server", fr: "Serveur git personnel"
        },
        "project.ai-hermes-agent.sidebar.tech.vault": {
            en: "Markdown wiki vault", pt: "Cofre wiki em Markdown", lu: "Markdown-Wiki-Vault", de: "Markdown-Wiki-Vault", fr: "Coffre wiki Markdown"
        },

        /* ---- Sidebar: key features ---- */
        "project.ai-hermes-agent.sidebar.feature1": {
            en: "Matrix-first communication", pt: "Comunicação Matrix-first", lu: "Matrix-first Kommunikatioun", de: "Matrix-first-Kommunikation", fr: "Communication Matrix-first"
        },
        "project.ai-hermes-agent.sidebar.feature2": {
            en: "Groq voice transcription", pt: "Transcrição de voz Groq", lu: "Groq Voice-Transkriptioun", de: "Groq-Sprachtranskription", fr: "Transcription vocale Groq"
        },
        "project.ai-hermes-agent.sidebar.feature3": {
            en: "Cost-aware model routing", pt: "Roteamento de modelos consciente do custo", lu: "Käschtebewosst Modell-Routing", de: "Kostenbewusstes Modell-Routing", fr: "Routage de modèles attentif aux coûts"
        },
        "project.ai-hermes-agent.sidebar.feature4": {
            en: "Chained scheduled automation", pt: "Automação agendada encadeada", lu: "Verkettet geplangten Automatisatioun", de: "Verkettete geplante Automatisierung", fr: "Automatisation planifiée et chaînée"
        },
        "project.ai-hermes-agent.sidebar.feature5": {
            en: "Autonomous deep research", pt: "Pesquisa aprofundada autónoma", lu: "Autonom déif Recherche", de: "Autonome Tiefenrecherche", fr: "Recherche approfondie autonome"
        },
        "project.ai-hermes-agent.sidebar.feature6": {
            en: "Docker infrastructure watchdogs", pt: "Watchdogs de infraestrutura em Docker", lu: "Docker-Infrastruktur-Watchdogs", de: "Docker-Infrastruktur-Watchdogs", fr: "Surveillances d'infrastructure Docker"
        },
        "project.ai-hermes-agent.sidebar.feature7": {
            en: "Self-healing markdown skills", pt: "Skills em markdown auto-reparáveis", lu: "Selbst-reparéierend Markdown-Skills", de: "Selbstheilende Markdown-Skills", fr: "Compétences markdown auto-réparatrices"
        },
        "project.ai-hermes-agent.sidebar.feature8": {
            en: "Model Context Protocol (MCP)", pt: "Model Context Protocol (MCP)", lu: "Model Context Protocol (MCP)", de: "Model Context Protocol (MCP)", fr: "Model Context Protocol (MCP)"
        }
    };

    Object.assign(translations, extra);
})();
