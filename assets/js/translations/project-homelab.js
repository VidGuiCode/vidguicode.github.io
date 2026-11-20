/**
 * Homelab project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        "project.homelab.subtitle": {
            en: "My home lab grew from a media server into a self-hosted platform I use for file storage, streaming, custom apps, and AI workflows.",
            pt: "O meu laboratório doméstico evoluiu de um servidor multimédia para uma plataforma que alojo e utilizo para armazenar ficheiros, fazer streaming, executar aplicações próprias e automatizar tarefas com IA.",
            lu: "Mäi Homelab ass vun engem Medieserver zu enger Plattform gewuess, déi ech selwer hosten a fir Dateien, Streaming, eegen Apps an AI-Workflows benotzen.",
            de: "Mein Homelab entwickelte sich von einem Medienserver zu einer selbst gehosteten Plattform, die ich für Dateispeicherung, Streaming, eigene Apps und KI-Workflows nutze.",
            fr: "Mon homelab est passé d’un serveur multimédia à une plateforme que j’héberge et que j’utilise pour stocker des fichiers, diffuser des médias, faire tourner mes applications et automatiser des tâches avec l’IA."
        },
        "project.homelab.contribution": {
            en: "I designed the lab to separate incoming traffic, application workloads, and storage. I built shared passkey sign-in and apps for job applications and vocabulary practice.",
            pt: "Concebi o laboratório para separar o tráfego de entrada, as aplicações e o armazenamento. Criei um início de sessão partilhado com passkeys e aplicações para candidaturas a empregos e prática de vocabulário.",
            lu: "Ech hunn de Lab esou entworf, datt erakommenden Trafic, d’Aarbechtslaascht vun den Apps an d’Späichere getrennt sinn. Ech hunn e gemeinsame Login mat Passkeys an Apps fir Bewerbungen a Vokabeltraining gebaut.",
            de: "Ich entwarf das Lab so, dass eingehender Datenverkehr, Anwendungslast und Speicher getrennt sind. Ich entwickelte eine gemeinsame Passkey-Anmeldung und Apps für Bewerbungen und Vokabeltraining.",
            fr: "J’ai conçu le lab pour séparer le trafic entrant, l’exécution des applications et le stockage. J’ai mis en place une connexion commune par passkey et créé des applications pour les candidatures et l’apprentissage du vocabulaire."
        },
        "project.homelab.examples.title": {
            en: "Apps I built",
            pt: "Aplicações que criei",
            lu: "Apps, déi ech gebaut hunn",
            de: "Anwendungen, die ich gebaut habe",
            fr: "Les applications que j’ai créées"
        },
        "project.homelab.examples.career": {
            en: "<strong>Job application workspace.</strong> I built a tool that imports CVs into structured fields, suggests edits for a specific job, and exports a PDF. I accept or reject each suggested edit.",
            pt: "<strong>Área de candidaturas.</strong> Criei uma ferramenta que importa currículos para campos estruturados, sugere alterações para uma vaga e exporta um PDF. Aceito ou rejeito cada sugestão.",
            lu: "<strong>Bewerbungsplattform.</strong> Ech hunn en Tool gebaut, dat CVen a strukturéiert Felder importéiert, Ännerunge fir eng konkret Plaz virschléit an e PDF exportéiert. Ech huelen all Virschlag un oder refuséieren en.",
            de: "<strong>Bewerbungsplattform.</strong> Ich habe ein Tool gebaut, das Lebensläufe in strukturierte Felder importiert, Änderungen für eine konkrete Stelle vorschlägt und ein PDF exportiert. Jeden Vorschlag kann ich annehmen oder ablehnen.",
            fr: "<strong>Espace de candidature.</strong> J’ai créé un outil qui importe les CV dans des champs structurés, propose des modifications adaptées à une offre et exporte un PDF. J’accepte ou je refuse chaque proposition."
        },
        "project.homelab.examples.learning": {
            en: "<strong>Vocabulary trainer.</strong> I built a tool that turns a term into a short explanation, flashcards, and links to related terms. Spaced repetition brings difficult terms back for review.",
            pt: "<strong>Treino de vocabulário.</strong> Criei uma ferramenta que gera uma explicação curta, cartões de estudo e ligações a termos relacionados. A repetição espaçada volta a apresentar os termos mais difíceis.",
            lu: "<strong>Vokabeltrainer.</strong> Ech hunn en Tool gebaut, dat fir e Begrëff eng kuerz Erklärung, Léierkaarten a Linken op verbonne Begrëffer erstellt. Schwéier Begrëffer kommen a mat Ofstand geplangte Widderhuelungen erëm.",
            de: "<strong>Vokabeltrainer.</strong> Ich habe ein Tool gebaut, das zu einem Begriff eine kurze Erklärung, Karteikarten und Links zu verwandten Begriffen erstellt. Schwierige Begriffe tauchen in zeitlich verteilten Wiederholungen erneut auf.",
            fr: "<strong>Outil d’apprentissage du vocabulaire.</strong> J’ai créé un outil qui produit une courte explication, des cartes mémoire et des liens vers des termes associés. La répétition espacée fait revenir les termes difficiles."
        },
        "project.homelab.examples.video": {
            en: "<strong>AI video generator.</strong> I choose a start and an end image, see the estimated cost, and submit a background job. The page shows progress until the short clip is ready.",
            pt: "<strong>Gerador de vídeo com IA.</strong> Escolho uma imagem inicial e uma final, vejo o custo estimado e envio a tarefa para execução em segundo plano. A página mostra o progresso até o vídeo estar pronto.",
            lu: "<strong>KI-Videogenerator.</strong> Ech wielen e Start- an e Schlussbild, gesinn déi geschate Käschten a starten eng Aufgab am Hannergrond. D’Säit weist de Fortschrëtt, bis de kuerze Clip fäerdeg ass.",
            de: "<strong>KI-Videogenerator.</strong> Ich wähle ein Start- und ein Endbild, sehe die geschätzten Kosten und starte einen Hintergrundauftrag. Die Seite zeigt den Fortschritt an, bis der kurze Clip fertig ist.",
            fr: "<strong>Générateur vidéo par IA.</strong> Je choisis une image de départ et une image de fin, je vois le coût estimé et je lance une tâche en arrière-plan. La page affiche la progression jusqu’à ce que le clip soit prêt."
        },
        "project.homelab.examples.knowledge": {
            en: "<strong>Searchable knowledge base.</strong> AI assistants can save notes and transcripts through MCP. Keyword search and local embeddings help them retrieve relevant passages for later tasks.",
            pt: "<strong>Base de conhecimento pesquisável.</strong> Os assistentes de IA podem guardar notas e transcrições através de MCP. A pesquisa por palavras-chave e os embeddings locais ajudam a recuperar passagens relevantes para outras tarefas.",
            lu: "<strong>Wëssensbasis mat Sichfunktioun.</strong> KI-Assistenten kënnen Notizen an Transkriptiounen iwwer MCP späicheren. Mat enger Schlësselwuertsich a lokalen Embeddings fanne si passend Passagë fir spéider Aufgaben.",
            de: "<strong>Durchsuchbare Wissensbasis.</strong> KI-Assistenten können Notizen und Transkripte über MCP speichern. Stichwortsuche und lokale Embeddings helfen ihnen, später passende Passagen abzurufen.",
            fr: "<strong>Base de connaissances consultable.</strong> Les assistants IA peuvent enregistrer des notes et des transcriptions via MCP. La recherche par mots-clés et les embeddings locaux les aident à retrouver des passages pertinents pour d’autres tâches."
        },
        "project.homelab.section.what.core.analytics": {
            en: "<strong>Administration dashboard.</strong> I can check how long agent runs take and what they cost.",
            pt: "<strong>Painel de administração.</strong> Posso consultar a duração e o custo das execuções dos agentes.",
            lu: "<strong>Administratiounspanel.</strong> Ech gesinn, wéi laang d’Agenten hir Aufgaben ausféieren a wat dat kascht.",
            de: "<strong>Admin-Dashboard.</strong> Ich kann Dauer und Kosten der Agentenläufe einsehen.",
            fr: "<strong>Tableau de bord d’administration.</strong> Je consulte la durée et le coût des exécutions des agents."
        },
        "project.homelab.section.what.media.game": {
            en: "<strong>Game server plan</strong>: I planned a containerized game server with persistent world data.",
            pt: "<strong>Plano para um servidor de jogo</strong>: Planeei um servidor de jogo em contentor com dados persistentes do mundo.",
            lu: "<strong>Plang fir e Spillserver</strong>: Ech hunn e Spillserver am Container mat persistente Weltdaten geplangt.",
            de: "<strong>Spielserver-Plan</strong>: Ich plante einen containerisierten Spielserver mit persistenten Weltdaten.",
            fr: "<strong>Projet de serveur de jeu</strong> : J’ai préparé le plan d’un serveur de jeu conteneurisé avec des données de monde persistantes."
        },
        "project.homelab.section.what.media.zfs": {
            en: "<strong>ZFS memory tuning</strong>: I limited the filesystem cache to leave memory available for applications running alongside storage.",
            pt: "<strong>Ajuste da memória ZFS</strong>: Limitei a cache do sistema de ficheiros para reservar memória para as aplicações que partilham o ambiente de armazenamento.",
            lu: "<strong>ZFS-Späicher optiméieren</strong>: Ech hunn de Cache vum Dateisystem limitéiert, fir datt Apps nieft dem Späicherservice genuch RAM hunn.",
            de: "<strong>ZFS-Speicheroptimierung</strong>: Ich begrenzte den Dateisystem-Cache, damit Anwendungen neben dem Speicherdienst genug Arbeitsspeicher haben.",
            fr: "<strong>Réglage de la mémoire ZFS</strong> : J’ai limité le cache du système de fichiers afin de laisser de la mémoire aux applications qui partagent l’environnement de stockage."
        },
        "project.homelab.arch.strip": {
            en: "Architecture overview",
            pt: "Visão geral da arquitetura",
            lu: "Iwwersiicht vun der Architektur",
            de: "Architekturübersicht",
            fr: "Vue d’ensemble de l’architecture"
        },
        "project.homelab.glance.agents.value": {
            en: "AI",
            pt: "IA",
            lu: "KI",
            de: "KI",
            fr: "IA"
        },
        "project.homelab.glance.apps.value": {
            en: "Apps",
            pt: "Apps",
            lu: "Apps",
            de: "Apps",
            fr: "Apps"
        },
        "project.homelab.glance.nodes.value": {
            en: "Hybrid",
            pt: "Híbrida",
            lu: "Hybrid",
            de: "Hybrid",
            fr: "Hybride"
        },
        "project.homelab.badge": {
            en: "INFRASTRUCTURE",
            pt: "INFRAESTRUTURA",
            lu: "Infrastruktur",
            de: "INFRASTRUKTUR",
            fr: "INFRASTRUCTURE"
        },
        "project.homelab.section.setup.title": {
            en: "From Media Server to Personal Cloud",
            pt: "De servidor multimédia a cloud pessoal",
            lu: "Vum Medieserver zur perséinlecher Cloud",
            de: "Vom Medienserver zur persönlichen Cloud",
            fr: "Du serveur multimédia au cloud personnel"
        },
        "project.homelab.section.setup.body": {
            en: "I started with media streaming and expanded the lab into a platform for my own applications, shared sign-in, AI workflows, and storage. I use it to test changes and solve problems that come up when you run your own services.",
            pt: "Comecei pelo streaming multimédia e transformei o laboratório numa plataforma para as minhas aplicações, autenticação partilhada, fluxos de IA e armazenamento. Uso-a para testar alterações e resolver problemas reais de operação.",
            lu: "Ech hu mat Mediestreaming ugefaangen an doraus eng Plattform fir meng Apps, e gemeinsame Login, KI-Workflows a Späicher gebaut. Ech benotze se fir Ännerungen ze testen a Problemer aus dem reelle Betrib ze léisen.",
            de: "Ich begann mit Medienstreaming und entwickelte daraus eine Plattform für eigene Anwendungen, gemeinsame Anmeldung, KI-Workflows und Speicher. Damit teste ich Änderungen und löse Probleme aus dem laufenden Betrieb.",
            fr: "J’ai commencé par le streaming multimédia, puis j’ai ajouté mes applications, une connexion partagée, des workflows IA et du stockage. Je m’en sers pour tester des changements et résoudre des problèmes d’exploitation concrets."
        },
        "project.homelab.technical.goal.title": {
            en: "Technical design goal",
            pt: "Objetivo técnico de conceção",
            lu: "Technescht Designzil",
            de: "Technisches Designziel",
            fr: "Objectif de conception technique"
        },
        "project.homelab.technical.goal.body": {
            en: "I designed this as a real-world learning environment, not a lab that only works on paper. The architecture separates public entry, compute and storage so I can experiment safely, keep services recoverable and work within the limits of quiet, low-power hardware at home.",
            pt: "Concebi isto como um ambiente de aprendizagem do mundo real, não como um laboratório que só funciona no papel. A arquitetura separa a entrada pública, a computação e o armazenamento para que eu possa experimentar em segurança, manter os serviços recuperáveis e trabalhar dentro dos limites de hardware silencioso e de baixo consumo em casa.",
            lu: "Ech hunn dëst als Léierëmfeld aus der realer Welt entworf, net als Lab dat nëmmen um Pabeier funktionéiert. D'Architektur trennt den ëffentlechen Zougang, Compute a Storage, fir datt ech sécher experimentéiere kann, Servicer erëmhierstellbar halen an an de Grenze vu roueger, energiespuerender Hardware doheem schaffe kann.",
            de: "Ich habe dies als Lernumgebung für die reale Welt entworfen, nicht als Labor, das nur auf dem Papier funktioniert. Die Architektur trennt öffentlichen Zugang, Rechenleistung und Speicher, damit ich sicher experimentieren, Dienste wiederherstellbar halten und innerhalb der Grenzen leiser, stromsparender Hardware zu Hause arbeiten kann.",
            fr: "J'ai conçu cela comme un environnement d'apprentissage concret, pas comme un laboratoire qui ne fonctionne que sur le papier. L'architecture sépare l'entrée publique, le calcul et le stockage afin que je puisse expérimenter en sécurité, garder les services récupérables et travailler dans les limites d'un matériel domestique silencieux et peu énergivore."
        },
        "project.homelab.section.what.title": {
            en: "What Runs On It",
            pt: "O que corre nele",
            lu: "Wat drop leeft",
            de: "Was darauf läuft",
            fr: "Ce qui tourne dessus"
        },
        "project.homelab.section.what.body": {
            en: "The main roles are edge traffic, shared application services, workers, and storage.",
            pt: "As principais funções são o tráfego de entrada, os serviços comuns das aplicações, as tarefas em segundo plano e o armazenamento.",
            lu: "D’Haaptrolle sinn den erakommende Verkéier, gemeinsam Servicer fir Apps, Hannergrondaarbechten a Späicher.",
            de: "Die wichtigsten Rollen sind eingehender Datenverkehr, gemeinsame Anwendungsdienste, Hintergrundaufgaben und Speicher.",
            fr: "Les principaux rôles sont le trafic entrant, les services partagés des applications, les tâches de fond et le stockage."
        },
        "project.homelab.section.what.k3s.title": {
            en: "K3s Cluster",
            pt: "Cluster K3s",
            lu: "K3s Cluster",
            de: "K3s-Cluster",
            fr: "Cluster K3s"
        },
        "project.homelab.section.what.gateway.title": {
            en: "Cloud Gateway",
            pt: "Gateway na cloud",
            lu: "Cloud-Gateway",
            de: "Cloud-Gateway",
            fr: "Passerelle cloud"
        },
        "project.homelab.nodes.primary.title": {
            en: "Application platform",
            pt: "Plataforma de aplicações",
            lu: "Plattform fir Apps",
            de: "Anwendungsplattform",
            fr: "Plateforme d’applications"
        },
        "project.homelab.nodes.worker.title": {
            en: "Compute workloads",
            pt: "Tarefas de computação",
            lu: "Rechenaarbechten",
            de: "Rechenaufgaben",
            fr: "Charges de calcul"
        },
        "project.homelab.nodes.gateway.title": {
            en: "Cloud Gateway",
            pt: "Gateway na Cloud",
            lu: "Cloud-Gateway",
            de: "Cloud-Gateway",
            fr: "Passerelle cloud"
        },
        "project.homelab.nodes.storage.title": {
            en: "Storage and backups",
            pt: "Armazenamento e cópias de segurança",
            lu: "Späicher a Backuppen",
            de: "Speicher und Backups",
            fr: "Stockage et sauvegardes"
        },
        "project.homelab.section.why.title": {
            en: "Why I Built It",
            pt: "Porque o construí",
            lu: "Firwat ech et gebaut hunn",
            de: "Warum ich es gebaut habe",
            fr: "Pourquoi je l’ai construit"
        },
        "project.homelab.section.why.body1": {
            en: "I wanted a safe place to experiment. This was my <strong>first substantial personal project</strong>. I started with Jellyfin and grew the setup into a platform for services I could run and maintain myself.",
            pt: "Queria um espaço seguro para experimentar. Foi o meu <strong>primeiro projeto pessoal de maior dimensão</strong>. Comecei com Jellyfin e ampliei o sistema até ter uma plataforma para serviços que podia correr e manter.",
            lu: "Ech wollt eng sécher Plaz fir ze experimentéieren. Dat war mäin <strong>éischte gréissere perséinleche Projet</strong>. Ech hu mat Jellyfin ugefaangen an doraus eng Plattform fir Servicer gebaut, déi ech selwer bedreiwen an ënnerhale konnt.",
            de: "Ich wollte einen sicheren Ort zum Experimentieren. Das war mein <strong>erstes größeres persönliches Projekt</strong>. Ich begann mit Jellyfin und baute die Einrichtung zu einer Plattform für Dienste aus, die ich selbst betreiben und warten konnte.",
            fr: "Je voulais un espace sûr pour expérimenter. C’était mon <strong>premier projet personnel d’envergure</strong>. Je suis parti de Jellyfin pour créer une plateforme de services que je pouvais héberger et entretenir moi-même."
        },
        "project.homelab.section.why.body2": {
            en: "I wanted tools that fit the way I work. Two examples are a QR generator and an app for tracking items and payments.",
            pt: "Queria ferramentas adaptadas à minha forma de trabalhar. Dois exemplos são um gerador de códigos QR e uma aplicação para registar artigos e pagamentos.",
            lu: "Ech wollt Tools, déi zu menger Aarbechtsweis passen. Zwee Beispiller sinn en QR-Code-Generator an eng App fir Artikelen a Bezuelungen ze verfollegen.",
            de: "Ich wollte Werkzeuge, die zu meiner Arbeitsweise passen. Zwei Beispiele sind ein QR-Code-Generator und eine App für Artikel und Zahlungen.",
            fr: "Je voulais des outils adaptés à ma façon de travailler. Deux exemples sont un générateur de codes QR et une application de suivi des articles et des paiements."
        },
        "project.homelab.section.why.body3": {
            en: "Working within limits on power, memory, and compute taught me to separate workloads and share sign-in between applications. <strong>I built custom apps and an agent framework</strong> to put those design decisions to work.",
            pt: "Trabalhar com limites de energia, memória e computação ensinou-me a separar cargas e a partilhar a autenticação. <strong>Criei aplicações próprias e um framework de agentes</strong> para pôr essas escolhas em prática.",
            lu: "Limite bei Stroum, RAM a Rechenleeschtung hu mech geléiert, Workloads ze trennen an de Login fir méi Apps ze deelen. <strong>Ech hunn eegen Apps an en Agent-Framework gebaut</strong>, fir dës Entscheedungen ëmzesetzen.",
            de: "Grenzen bei Strom, Speicher und Rechenleistung haben mir gezeigt, wie ich Aufgaben trenne und die Anmeldung zwischen Anwendungen teile. <strong>Ich entwickelte eigene Apps und ein Agenten-Framework</strong>, um diese Entscheidungen umzusetzen.",
            fr: "Les limites d’énergie, de mémoire et de calcul m’ont appris à séparer les charges et à partager l’authentification entre les applications. <strong>J’ai créé des applications et un framework d’agents</strong> pour mettre ces choix en pratique."
        },
        "project.homelab.section.lessons.title": {
            en: "Lessons Learned",
            pt: "Lições aprendidas",
            lu: "Wat ech geléiert hunn",
            de: "Gelerntes",
            fr: "Leçons retenues"
        },
        "project.homelab.section.lessons.arm.title": {
            en: "ARM has quirks",
            pt: "ARM tem quirks",
            lu: "ARM huet seng Launen",
            de: "ARM hat Eigenheiten",
            fr: "ARM a ses bizarreries"
        },
        "project.homelab.section.lessons.arm.body": {
            en: "Not all Docker images support ARM64. Finding compatible alternatives and tweaking configs taught me to read docs carefully.",
            pt: "Nem todas as imagens Docker suportam ARM64. Encontrar alternativas compatíveis e ajustar configs ensinou-me a ler a documentação com atenção.",
            lu: "Net all Docker-Images ënnerstëtzen ARM64. Kompatibel Alternativen ze fannen an d'Configs unzepassen huet mech geléiert, d'Dokumentatioun genee ze liesen.",
            de: "Nicht alle Docker-Images unterstützen ARM64. Kompatible Alternativen zu finden und Configs anzupassen, hat mich gelehrt, Dokus genau zu lesen.",
            fr: "Toutes les images Docker ne gèrent pas ARM64. Chercher des alternatives compatibles et ajuster les configs m’a appris à lire la doc attentivement."
        },
        "project.homelab.section.lessons.dns.title": {
            en: "DNS is powerful",
            pt: "DNS é poderoso",
            lu: "DNS ass staark",
            de: "DNS ist mächtig",
            fr: "Le DNS est puissant"
        },
        "project.homelab.section.lessons.dns.body": {
            en: "Managing records in Cloudflare and understanding how traffic flows made the whole system click.",
            pt: "Gerir registos no Cloudflare e entender o fluxo de tráfego fez o sistema ganhar sentido.",
            lu: "Duerch d'Managen vun den DNS-Records an d'Verstoe vum Traffic-Floss huet de System fir mech Sënn gemaach.",
            de: "DNS-Einträge in Cloudflare zu managen und den Traffic-Flow zu verstehen, ließ alles zusammenpassen.",
            fr: "Gérer les enregistrements dans Cloudflare et comprendre les flux a fait déclic."
        },
        "project.homelab.section.lessons.speech.title": {
            en: "Faster local speech",
            pt: "Síntese de voz local mais rápida",
            lu: "Méi séier lokal Sproochsynthes",
            de: "Schnellere lokale Sprachsynthese",
            fr: "Synthèse vocale locale plus rapide"
        },
        "project.homelab.section.lessons.speech.body": {
            en: "In a July 2026 test, a lighter text-to-speech engine cut response time from about 2.5 seconds to roughly half a second per sentence through the same gateway. The faster voice sounded less natural.",
            pt: "Num teste em julho de 2026, um motor de síntese de voz mais leve reduziu o tempo de resposta de cerca de 2,5 segundos para cerca de meio segundo por frase, através do mesmo gateway. A voz mais rápida soava menos natural.",
            lu: "An engem Test am Juli 2026 huet eng méi liicht Sproochsynthes d’Äntwertzäit iwwer dee selwechte Gateway vun ongeféier 2,5 Sekonnen op ronn eng hallef Sekonn pro Saz verkierzt. Déi méi séier Stëmm huet manner natierlech geklongen.",
            de: "In einem Test im Juli 2026 verkürzte eine schlankere Sprachsynthese die Antwortzeit über dasselbe Gateway von etwa 2,5 Sekunden auf rund eine halbe Sekunde pro Satz. Die schnellere Stimme klang weniger natürlich.",
            fr: "Lors d’un test en juillet 2026, un moteur de synthèse vocale plus léger a ramené le temps de réponse d’environ 2,5 secondes à près d’une demi-seconde par phrase via la même passerelle. La voix plus rapide sonnait moins naturelle."
        },
        "project.homelab.section.lessons.cost.title": {
            en: "Cost-conscious infrastructure",
            pt: "Infra consciente de custos",
            lu: "Käschtebewosst Infra",
            de: "Kostenbewusste Infrastruktur",
            fr: "Infra soucieuse des coûts"
        },
        "project.homelab.section.lessons.cost.body": {
            en: "Running on low-power devices and free-tier cloud taught me to optimize before scaling.",
            pt: "Correr em dispositivos de baixo consumo e cloud gratuita ensinou-me a optimizar antes de escalar.",
            lu: "Op niddereg-Stroum Geräter a Free-Tier Cloud lafen huet mech geléiert ze optimiséieren éier ech skalaéieren.",
            de: "Auf stromsparenden Geräten und Free-Tier-Cloud zu laufen, lehrte mich zu optimieren, bevor ich skaliere.",
            fr: "Tourner sur du matériel basse conso et du cloud gratuit m’a appris à optimiser avant de scaler."
        },
        "project.homelab.section.lessons.security.title": {
            en: "Security is a journey",
            pt: "Segurança é uma jornada",
            lu: "Sécherheet ass eng Rees",
            de: "Sicherheit ist eine Reise",
            fr: "La sécurité est un parcours"
        },
        "project.homelab.section.lessons.security.body": {
            en: "Implementing SSO, token blacklisting, and audit logging taught me that authentication is more than just passwords.",
            pt: "Implementar SSO, blacklist de tokens e auditoria mostrou-me que autenticação é mais do que senhas.",
            lu: "SSO, Token Blacklisting an Audit Logging ëmsetzen huet gewisen datt Authentifikatioun méi wéi Passwierder ass.",
            de: "SSO, Token-Blacklisting und Audit-Logs zu bauen zeigte mir, dass Auth mehr ist als Passwörter.",
            fr: "Mettre en place SSO, blacklist de tokens et journaux d’audit m’a montré que l’authentification, ce n’est pas que des mots de passe."
        },
        "project.homelab.section.lessons.hybrid.title": {
            en: "Hybrid architecture complexity",
            pt: "Complexidade da arquitetura híbrida",
            lu: "Komplexitéit vun der Hybrid Architektur",
            de: "Komplexität der Hybrid-Architektur",
            fr: "Complexité de l'architecture hybride"
        },
        "project.homelab.section.lessons.hybrid.body": {
            en: "Using Docker Compose and K3s together taught me to plan how workloads discover and reach each other.",
            pt: "Usar Docker Compose e K3s em conjunto ensinou-me a planear como as cargas de trabalho se descobrem e comunicam entre si.",
            lu: "Docker Compose a K3s zesumme benotzen huet mech geléiert, ze plangen, wéi d’Workloads sech fannen a matenee kommunizéieren.",
            de: "Docker Compose und K3s gemeinsam einzusetzen, lehrte mich, die Erreichbarkeit und Diensterkennung von Workloads zu planen.",
            fr: "Utiliser Docker Compose et K3s ensemble m’a appris à planifier comment les charges de travail se découvrent et communiquent."
        },
        "project.homelab.section.lessons.environment.title": {
            en: "Environment matters",
            pt: "O ambiente importa",
            lu: "D'Ëmfeld zielt",
            de: "Die Umgebung zählt",
            fr: "L'environnement compte"
        },
        "project.homelab.section.lessons.environment.body": {
            en: "Limited power, noise, and space shaped my hardware choices. I favored efficient components and measured how the system behaved under load.",
            pt: "Os limites de energia, ruído e espaço orientaram as escolhas de hardware. Preferi componentes eficientes e medi o comportamento do sistema sob carga.",
            lu: "Limite bei Stroum, Kaméidi a Plaz hu meng Hardwarewiel bestëmmt. Ech hu spuersam Komponente gewielt a gemooss, wéi de System ënner Laascht leeft.",
            de: "Stromverbrauch, Lärm und Platz waren bei der Hardwarewahl entscheidend. Ich setzte auf effiziente Komponenten und maß das Verhalten unter Last.",
            fr: "Les contraintes d’énergie, de bruit et d’espace ont orienté mes choix de matériel. J’ai privilégié les composants efficaces et mesuré le comportement du système en charge."
        },
        "project.homelab.section.lessons.localai.title": {
            en: "Local AI has a hardware ceiling",
            pt: "A IA local tem um limite de hardware",
            lu: "Lokal KI huet eng Hardware-Grenz",
            de: "Lokale KI hat eine Hardware-Grenze",
            fr: "L'IA locale a un plafond matériel"
        },
        "project.homelab.section.lessons.localai.body": {
            en: "I tested local models on a real research prompt. Responses took 4 to 20 minutes against a 10-second target. That led me to use local models for background tasks and hosted models when response time matters.",
            pt: "Testei modelos locais com um pedido real de pesquisa. As respostas demoraram entre 4 e 20 minutos, perante um objetivo de 10 segundos. Passei a usar modelos locais para tarefas em segundo plano e modelos alojados quando o tempo de resposta é importante.",
            lu: "Ech hu lokal Modeller mat enger reeller Rechercheufro getest. D’Äntwerten hu 4 bis 20 Minutte gebraucht, bei engem Zil vun 10 Sekonnen. Dofir benotzen ech lokal Modeller fir Hannergrondaarbechten a gehost Modeller, wann d’Äntwertzäit wichteg ass.",
            de: "Ich testete lokale Modelle mit einer echten Rechercheanfrage. Die Antworten dauerten 4 bis 20 Minuten bei einem Ziel von 10 Sekunden. Daher nutze ich lokale Modelle für Hintergrundaufgaben und gehostete Modelle, wenn die Antwortzeit wichtig ist.",
            fr: "J’ai testé des modèles locaux sur une vraie demande de recherche. Les réponses ont pris de 4 à 20 minutes pour un objectif de 10 secondes. J’utilise donc les modèles locaux pour les tâches de fond et des modèles hébergés lorsque le temps de réponse compte."
        },
        "project.homelab.section.lessons.mobile.title": {
            en: "Works on Wi-Fi, fails on mobile",
            pt: "Funciona no Wi-Fi, falha nos dados móveis",
            lu: "Leeft um WLAN, net op mobilen Donnéeën",
            de: "Geht im WLAN, scheitert mobil",
            fr: "Ça marche en Wi-Fi, pas en données mobiles"
        },
        "project.homelab.section.lessons.mobile.body": {
            en: "Every service timed out on roaming mobile data while Wi-Fi worked instantly. The cause was oversized TCP packets lost inside the carrier's tunnel. Capping the packet size at the edge fixed it, and the obvious suspect, HTTP/3, turned out to be a red herring.",
            pt: "Todos os serviços davam timeout com dados móveis em roaming, enquanto o Wi-Fi funcionava logo. A causa eram pacotes TCP demasiado grandes perdidos dentro do túnel do operador. Limitar o tamanho dos pacotes no edge resolveu, e o suspeito óbvio, o HTTP/3, era uma pista falsa.",
            lu: "All Service ass mat mobilen Donnéeën am Roaming an en Timeout gelaf, während WLAN direkt funktionéiert huet. D'Ursaach waren ze grouss TCP-Paketen, déi am Tunnel vum Provider verluer gaange sinn. D'Paketgréisst um Edge ze begrenzen huet et geléist, an den offensichtleche Verdächtegen, HTTP/3, war eng falsch Spuer.",
            de: "Jeder Dienst lief mit mobilen Daten im Roaming in einen Timeout, während WLAN sofort funktionierte. Die Ursache waren zu große TCP-Pakete, die im Tunnel des Netzbetreibers verloren gingen. Die Paketgröße am Edge zu begrenzen löste es, und der naheliegende Verdacht, HTTP/3, war eine falsche Fährte.",
            fr: "Tous les services expiraient en données mobiles à l'étranger alors que le Wi-Fi marchait tout de suite. La cause : des paquets TCP trop gros perdus dans le tunnel de l'opérateur. Limiter la taille des paquets en bordure a réglé le problème, et le suspect évident, HTTP/3, était une fausse piste."
        },
        "project.homelab.section.lessons.cooling.title": {
            en: "Measure, then cool",
            pt: "Medir primeiro, arrefecer depois",
            lu: "Fir d'éischt moossen, dann killen",
            de: "Erst messen, dann kühlen",
            fr: "Mesurer, puis refroidir"
        },
        "project.homelab.section.lessons.cooling.body": {
            en: "I added fan control based on the warmest drive. The fans switch to full speed if a sensor fails. The readings recorded after the change were lower.",
            pt: "Adicionei um controlo das ventoinhas com base no disco mais quente. Se um sensor falhar, as ventoinhas passam à velocidade máxima. As temperaturas registadas após a alteração foram mais baixas.",
            lu: "Ech hunn d’Ventilatore sou agestallt, datt si sech no der wäermster Festplack riichten. Wann e Sensor ausfält, lafe si mat voller Vitess. D’Temperaturen no der Ännerung ware méi niddreg.",
            de: "Ich habe eine Lüftersteuerung eingerichtet, die sich nach dem wärmsten Laufwerk richtet. Fällt ein Sensor aus, laufen die Lüfter auf voller Drehzahl. Nach der Änderung waren die gemessenen Temperaturen niedriger.",
            fr: "J’ai ajouté un contrôle des ventilateurs basé sur le disque le plus chaud. Si un capteur tombe en panne, les ventilateurs passent à pleine vitesse. Les températures relevées après la modification étaient plus basses."
        },
        "project.homelab.section.next.title": {
            en: "What's Next",
            pt: "O que vem a seguir",
            lu: "Wat kënnt als nächst",
            de: "Wie geht es weiter",
            fr: "Et après"
        },
        "project.homelab.sidebar.tech.k3s": {
            en: "K3s Kubernetes",
            pt: "K3s Kubernetes",
            lu: "K3s Kubernetes",
            de: "K3s Kubernetes",
            fr: "K3s Kubernetes"
        },
        "project.homelab.sidebar.tech.compose": {
            en: "Docker Compose",
            pt: "Docker Compose",
            lu: "Docker Compose",
            de: "Docker Compose",
            fr: "Docker Compose"
        },
        "project.homelab.sidebar.features.cli": {
            en: "Packaged CLI for terminal workflows",
            pt: "CLI empacotada para fluxos no terminal",
            lu: "Paketéiert CLI fir Aarbecht am Terminal",
            de: "Paketierte CLI für Terminal-Workflows",
            fr: "CLI empaquetée pour les workflows dans le terminal"
        },
        "project.homelab.sidebar.tech.cli": {
            en: "Python + Typer CLI",
            pt: "CLI em Python com Typer",
            lu: "Python + Typer CLI",
            de: "CLI mit Python und Typer",
            fr: "CLI Python avec Typer"
        },
        "project.homelab.section.what.compose.cli": {
            en: "<strong>Task workflow across CLI and MCP.</strong> I built a Python CLI that lets a coding agent pick up a task and log its progress. The agent can check service health through MCP, then record its result in the shared task log.",
            pt: "<strong>Fluxo de tarefas com CLI e MCP.</strong> Criei uma CLI em Python que permite a um agente de programação assumir uma tarefa e registar o progresso. O agente pode consultar o estado dos serviços via MCP e guardar o resultado no registo partilhado.",
            lu: "<strong>Aufgaben iwwer CLI a MCP.</strong> Ech hunn eng Python-CLI gebaut, mat där e Codéierungsagent eng Aufgab iwwerhëlt a säi Fortschrëtt festhält. Iwwer MCP kann hien de Status vu Servicer nokucken an d’Resultat am gemeinsamen Aufgabeprotokoll späicheren.",
            de: "<strong>Aufgabenablauf über CLI und MCP.</strong> Ich habe eine Python-CLI gebaut, mit der ein Coding-Agent eine Aufgabe übernehmen und den Fortschritt protokollieren kann. Über MCP kann er den Zustand von Diensten prüfen und das Ergebnis im gemeinsamen Aufgabenprotokoll festhalten.",
            fr: "<strong>Suivi des tâches avec la CLI et MCP.</strong> J’ai créé une CLI en Python qui permet à un agent de code de prendre une tâche et de consigner sa progression. Il peut vérifier l’état des services via MCP, puis inscrire le résultat dans le journal partagé."
        },
        "project.homelab.section.what.core.title": {
            en: "Application Platform",
            pt: "Plataforma de aplicações",
            lu: "Plattform fir Apps",
            de: "Anwendungsplattform",
            fr: "Plateforme d’applications"
        },
        "project.homelab.section.what.core.list": {
            en: "<strong>Unified backend control plane</strong>: FastAPI + SQLAlchemy + Alembic + SQLite drive authentication, permissions, app registration, audit logs, AI orchestration, and cross-app state.",
            pt: "<strong>Plano de controlo backend unificado</strong>: FastAPI + SQLAlchemy + Alembic + SQLite suportam autenticação, permissões, registo de apps, logs de auditoria, orquestração de IA e estado partilhado entre aplicações.",
            lu: "<strong>Eenheetleche Backend-Control-Plane</strong>: FastAPI + SQLAlchemy + Alembic + SQLite bedreiwen Authentifikatioun, Rechter, App-Registréierung, Audit-Logs, AI-Orchestratioun an e gemeinsame Status tëscht den Apps.",
            de: "<strong>Einheitliche Backend-Control-Plane</strong>: FastAPI + SQLAlchemy + Alembic + SQLite steuern Authentifizierung, Berechtigungen, App-Registrierung, Audit-Logs, KI-Orchestrierung und gemeinsamen Status über mehrere Apps hinweg.",
            fr: "<strong>Plan de contrôle backend unifié</strong> : FastAPI + SQLAlchemy + Alembic + SQLite gèrent l'authentification, les permissions, l'enregistrement des apps, les journaux d'audit, l'orchestration IA et l'état partagé entre applications."
        },
        "project.homelab.section.what.core.auth": {
            en: "<strong>Passwordless, federated login</strong>: I built an OIDC provider and an OAuth 2.0 consent flow. Users sign in with passkeys, and applications and AI assistants receive scoped tokens.",
            pt: "<strong>Autenticação federada sem palavra-passe</strong>: Criei um fornecedor OIDC e um fluxo de consentimento OAuth 2.0. Os utilizadores entram com chaves de acesso, e as aplicações e assistentes de IA recebem tokens com permissões limitadas.",
            lu: "<strong>Federéierte Login ouni Passwuert</strong>: Ech hunn en OIDC-Provider an en OAuth-2.0-Accordsprozess gebaut. Leit melle sech mat Passkeys un, an Apps a KI-Assistente kréien Tokenen mat begrenzte Rechter.",
            de: "<strong>Passwortlose, föderierte Anmeldung</strong>: Ich entwickelte einen OIDC-Anbieter und einen OAuth-2.0-Zustimmungsablauf. Nutzer melden sich mit Passkeys an. Anwendungen und KI-Assistenten erhalten Tokens mit begrenzten Berechtigungen.",
            fr: "<strong>Connexion fédérée sans mot de passe</strong> : J’ai créé un fournisseur OIDC et un parcours de consentement OAuth 2.0. Les utilisateurs se connectent avec des clés d’accès. Les applications et assistants IA reçoivent des jetons aux permissions limitées."
        },
        "project.homelab.section.what.core.surfaces": {
            en: "<strong>Real-time and generative surfaces</strong>: self-hosted voice/video rooms (LiveKit/WebRTC) and an AI keyframe video generator that turns a start and end frame into a short clip - both behind the same SSO and edge security.",
            pt: "<strong>Superfícies em tempo real e generativas</strong>: salas de voz/vídeo self-hosted (LiveKit/WebRTC) e um gerador de vídeo por keyframes de IA que transforma um frame inicial e final num clipe curto - ambos atrás do mesmo SSO e segurança de edge.",
            lu: "<strong>Echtzäit- a generativ Flächen</strong>: self-hosted Voice-/Video-Raim (LiveKit/WebRTC) an en AI-Keyframe-Videogenerator deen aus engem Start- an Enn-Frame e kuerze Clip mécht - béid hannert deemselwechte SSO an Edge-Sécherheet.",
            de: "<strong>Echtzeit- und generative Flächen</strong>: selbst gehostete Voice-/Video-Räume (LiveKit/WebRTC) und ein KI-Keyframe-Videogenerator, der aus einem Start- und Endframe einen kurzen Clip macht - beide hinter demselben SSO und Edge-Schutz.",
            fr: "<strong>Surfaces temps réel et génératives</strong> : des salles voix/vidéo auto-hébergées (LiveKit/WebRTC) et un générateur vidéo par images-clés IA qui transforme une image de début et de fin en un court clip - toutes deux derrière le même SSO et la sécurité d'edge."
        },
        "project.homelab.section.what.core.suite": {
            en: "<strong>Other custom apps.</strong> An app launcher brings together tools for web captures, item and payment tracking, agent activity, music intake, voice and video rooms, and QR codes.",
            pt: "<strong>Outras aplicações próprias.</strong> Um portal reúne ferramentas para guardar páginas, registar artigos e pagamentos, consultar a atividade dos agentes, importar música, usar salas de voz e vídeo e gerar códigos QR.",
            lu: "<strong>Aner eegen Apps.</strong> En App-Portal bréngt Tools zesumme fir Websäiten ze späicheren, Artikelen a Bezuelungen ze verfollegen, Agentenaktivitéit ze gesinn, Musek bäizefügen, Stëmm- a Videoraim ze benotzen an QR-Coden ze generéieren.",
            de: "<strong>Weitere eigene Anwendungen.</strong> Ein Portal bündelt Werkzeuge für Webinhalte, Artikel und Zahlungen, Agentenaktivität, Musikimport, Sprach- und Videoräume sowie QR-Codes.",
            fr: "<strong>Autres applications maison.</strong> Un portail réunit des outils de capture web, de suivi des articles et paiements, de suivi des agents, d’ajout de musique, de salons audio et vidéo et de génération de codes QR."
        },
        "project.homelab.section.what.core.killswitch": {
            en: "<strong>Central app controls</strong>: A shared application registry lets me disable access to individual apps.",
            pt: "<strong>Controlo central das aplicações</strong>: Um registo comum permite desativar o acesso a aplicações individuais.",
            lu: "<strong>Zentral Kontroll vun Apps</strong>: Iwwer e gemeinsame Regëster kann ech den Zougang zu eenzelnen Apps ausschalten.",
            de: "<strong>Zentrale App-Steuerung</strong>: Über ein gemeinsames Anwendungsverzeichnis kann ich den Zugriff auf einzelne Apps deaktivieren.",
            fr: "<strong>Gestion centralisée des applications</strong> : Un registre commun me permet de désactiver l’accès à une application."
        },
        "project.homelab.section.what.core.mcp": {
            en: "<strong>AI assistant bridge (MCP)</strong>: AI clients connect through single sign-on and consent, the server mints a scoped token for them, and they get tools for tasks, research, calendars, mail and security briefs.",
            pt: "<strong>Ponte para assistentes de IA (MCP)</strong>: os clientes de IA ligam-se por single sign-on e consentimento, o servidor cria-lhes um token com âmbito limitado e recebem ferramentas para tarefas, pesquisa, calendários, email e resumos de segurança.",
            lu: "<strong>Bréck fir KI-Assistenten (MCP)</strong>: KI-Clienten verbanne sech iwwer Single Sign-on an Zoustëmmung, de Server erstellt hinnen e begrenzten Token, a si kréien Tools fir Aufgaben, Recherche, Kalenneren, Mail a Sécherheetsiwwersiichten.",
            de: "<strong>Brücke für KI-Assistenten (MCP)</strong>: KI-Clients verbinden sich per Single Sign-on und Zustimmung, der Server erstellt ihnen ein begrenztes Token, und sie erhalten Tools für Aufgaben, Recherche, Kalender, Mail und Sicherheitsberichte.",
            fr: "<strong>Pont pour assistants IA (MCP)</strong> : les clients IA se connectent par authentification unique et consentement, le serveur leur crée un jeton limité, et ils obtiennent des outils pour les tâches, la recherche, les calendriers, les e-mails et les synthèses de sécurité."
        },
        "project.homelab.section.what.apps.title": {
            en: "Agent + Worker Layer",
            pt: "Camada de agentes + workers",
            lu: "Agenten- a Worker-Schicht",
            de: "Agenten- und Worker-Schicht",
            fr: "Couche agents + workers"
        },
        "project.homelab.section.what.apps.retriever": {
            en: "<strong>Research agent</strong>: Researches the web through a private meta-search backend and headless browsing, then returns structured briefs.",
            pt: "<strong>Agente de pesquisa</strong>: Pesquisa a web através de um backend de meta-pesquisa privado e navegação headless, devolvendo depois briefs estruturados.",
            lu: "<strong>Recherche-Agent</strong>: Fuerscht am Web iwwer e private Meta-Search-Backend an Headless-Browsing an liwwert dono strukturéiert Briefings zeréck.",
            de: "<strong>Recherche-Agent</strong>: Recherchiert im Web über ein privates Meta-Search-Backend und Headless-Browsing und liefert anschließend strukturierte Briefings zurück.",
            fr: "<strong>Agent de recherche</strong> : Recherche sur le web via un backend de méta-recherche privé et de la navigation headless, puis renvoie des briefs structurés."
        },
        "project.homelab.section.what.apps.term": {
            en: "<strong>Term-mastery agent</strong>: Generates summaries, flashcards, and remediation workflows for learning content.",
            pt: "<strong>Agente de term-mastery</strong>: Gera resumos, flashcards e workflows de remediação para conteúdos de aprendizagem.",
            lu: "<strong>Term-Mastery-Agent</strong>: Generéiert Resuméen, Flashcards a Remediation-Workflows fir Léierinhalter.",
            de: "<strong>Term-Mastery-Agent</strong>: Generiert Zusammenfassungen, Lernkarten und Remediation-Workflows für Lerninhalte.",
            fr: "<strong>Agent term-mastery</strong> : Génère des résumés, flashcards et workflows de remédiation pour le contenu d'apprentissage."
        },
        "project.homelab.section.what.apps.security": {
            en: "<strong>Security triage agent</strong>: Correlates edge alerts, access logs, sessions, and approval-gated write actions for admin review.",
            pt: "<strong>Agente de triagem de segurança</strong>: Correlaciona alertas de edge, logs de acesso, sessões e ações de escrita sujeitas a aprovação para revisão do admin.",
            lu: "<strong>Security-Triage-Agent</strong>: Korreléiert Edge-Alerts, Access-Logs, Sessiounen an approval-gated Schreib-Aktioune fir d'Admin-Review.",
            de: "<strong>Security-Triage-Agent</strong>: Korreliert Edge-Alerts, Zugriffslogs, Sitzungen und genehmigungspflichtige Schreibaktionen für die Admin-Prüfung.",
            fr: "<strong>Agent de triage sécurité</strong> : Corrèle les alertes edge, logs d'accès, sessions et actions d'écriture soumises à approbation pour revue admin."
        },
        "project.homelab.section.what.apps.guardrails": {
            en: "<strong>Shared guardrails</strong>: Every agent runs behind kill switches, token/cost/runtime budgets, tool allowlists, concurrency caps, and blocked-action logging.",
            pt: "<strong>Guardrails partilhados</strong>: Cada agente corre atrás de kill switches, orçamentos de tokens/custos/runtime, allowlists de ferramentas, limites de concorrência e registo de ações bloqueadas.",
            lu: "<strong>Gedeelt Guardrails</strong>: All Agent leeft hannert Kill-Switches, Token-/Käschten-/Runtime-Budgeten, Tool-Allowlists, Concurrency-Limiten an engem Logging vu blockéierten Aktiounen.",
            de: "<strong>Geteilte Guardrails</strong>: Jeder Agent läuft hinter Kill-Switches, Token-/Kosten-/Laufzeit-Budgets, Tool-Allowlists, Concurrency-Limits und der Protokollierung blockierter Aktionen.",
            fr: "<strong>Guardrails partagés</strong> : Chaque agent fonctionne derrière des kill switches, des budgets de jetons/coûts/runtime, des allowlists d'outils, des plafonds de concurrence et une journalisation des actions bloquées."
        },
        "project.homelab.section.what.apps.governance": {
            en: "<strong>Governance triage agent</strong>: watches internal session, permission, and account anomalies with a graded action policy - low-risk fixes auto-execute, high-blast-radius actions enter a human approval queue.",
            pt: "<strong>Agente de triagem de governança</strong>: vigia anomalias internas de sessões, permissões e contas com uma política de ações graduada - correções de baixo risco executam automaticamente, ações de grande impacto entram numa fila de aprovação humana.",
            lu: "<strong>Governance-Triage-Agent</strong>: iwwerwaacht intern Anomalien bei Sessiounen, Permissiounen a Konten mat enger graduéierter Aktiounspolitik - Korrekturen mat klengem Risiko lafen automatesch, Aktiounen mat groussem Impakt kommen an eng mënschlech Genehmegungs-Schlaang.",
            de: "<strong>Governance-Triage-Agent</strong>: überwacht interne Anomalien bei Sessions, Berechtigungen und Konten mit einer abgestuften Aktionspolitik - risikoarme Korrekturen laufen automatisch, Aktionen mit großer Tragweite landen in einer menschlichen Freigabe-Warteschlange.",
            fr: "<strong>Agent de triage de gouvernance</strong> : surveille les anomalies internes de sessions, permissions et comptes avec une politique d'actions graduée - les correctifs à faible risque s'exécutent automatiquement, les actions à fort impact passent par une file d'approbation humaine."
        },
        "project.homelab.section.what.apps.infra": {
            en: "<strong>Infrastructure monitoring agent</strong>: runs probes across nodes, containers, temperatures, and backup freshness, then an optional AI layer triages findings into a recovery-aware signal feed. A paired repair agent proposes a bounded fix and only applies it after my approval.",
            pt: "<strong>Agente de monitorização da infraestrutura</strong>: corre verificações em nós, containers, temperaturas e frescura dos backups, e uma camada de IA opcional faz a triagem dos resultados num feed de sinais que acompanha a recuperação. Um agente de reparação associado propõe uma correção limitada e só a aplica depois da minha aprovação.",
            lu: "<strong>Infrastruktur-Monitoring-Agent</strong>: leeft Proben iwwer Noden, Container, Temperaturen an d'Aktualitéit vun de Backups, an eng optional KI-Schicht sortéiert d'Resultater an e Signal-Feed, deen d'Erhuelung matverfollegt. E Reparatur-Agent dobäi proposéiert eng begrenzte Léisung a setzt se eréischt no menger Zoustëmmung ëm.",
            de: "<strong>Infrastruktur-Monitoring-Agent</strong>: führt Prüfungen über Knoten, Container, Temperaturen und Backup-Aktualität aus, und eine optionale KI-Schicht sortiert die Funde in einen Signal-Feed, der die Wiederherstellung mitverfolgt. Ein zugehöriger Reparatur-Agent schlägt eine begrenzte Korrektur vor und wendet sie erst nach meiner Freigabe an.",
            fr: "<strong>Agent de supervision de l'infrastructure</strong> : lance des sondes sur les nœuds, les conteneurs, les températures et la fraîcheur des sauvegardes, puis une couche IA optionnelle trie les résultats dans un flux de signaux qui suit la reprise. Un agent de réparation associé propose un correctif limité et ne l'applique qu'après mon accord."
        },
        "project.homelab.section.what.apps.quality": {
            en: "<strong>Quality-check agent</strong>: verifies content summaries and crawls, spots login walls and empty captures, and tries one bounded rescue scrape before it refreshes the result.",
            pt: "<strong>Agente de controlo de qualidade</strong>: verifica resumos e crawls de conteúdo, deteta páginas de login e capturas vazias, e tenta uma recuperação limitada antes de atualizar o resultado.",
            lu: "<strong>Qualitéitskontroll-Agent</strong>: iwwerpréift Resuméen a Crawls, erkennt Login-Mauere an eidel Captures, a probéiert eng begrenzte Rettung, ier en d'Resultat aktualiséiert.",
            de: "<strong>Qualitätsprüfungs-Agent</strong>: prüft Zusammenfassungen und Crawls, erkennt Login-Sperren und leere Erfassungen und versucht einen begrenzten Rettungs-Scrape, bevor er das Ergebnis aktualisiert.",
            fr: "<strong>Agent de contrôle qualité</strong> : vérifie les résumés et les crawls, repère les murs de connexion et les captures vides, et tente une récupération limitée avant de mettre le résultat à jour."
        },
        "project.homelab.section.what.apps.drafting": {
            en: "<strong>Drafting and CV agents</strong>: one writes replies to a conversation for mandatory human review and never sends anything itself. The other reviews a CV, tailors it to a job posting and returns edits that I accept or reject.",
            pt: "<strong>Agentes de redação e de CV</strong>: um escreve respostas a uma conversa para revisão humana obrigatória e nunca envia nada sozinho. O outro revê um CV, adapta-o a uma oferta de emprego e devolve alterações que eu aceito ou rejeito.",
            lu: "<strong>Redaktiouns- a CV-Agenten</strong>: deen een schreift Äntwerten op e Gespréich fir eng obligatoresch mënschlech Kontroll a schéckt selwer ni eppes of. Deen aneren iwwerpréift e CV, passt en un eng Stellenannonce un a gëtt Ännerunge zréck, déi ech unhuelen oder refuséieren.",
            de: "<strong>Entwurfs- und CV-Agenten</strong>: einer schreibt Antworten auf ein Gespräch zur verpflichtenden menschlichen Prüfung und versendet nie selbst etwas. Der andere prüft einen Lebenslauf, passt ihn an eine Stellenanzeige an und liefert Änderungen, die ich annehme oder ablehne.",
            fr: "<strong>Agents de rédaction et de CV</strong> : l'un rédige des réponses à une conversation pour une relecture humaine obligatoire et n'envoie jamais rien lui-même. L'autre relit un CV, l'adapte à une offre d'emploi et renvoie des modifications que j'accepte ou refuse."
        },
        "project.homelab.section.what.apps.localai": {
            en: "<strong>Local AI</strong>: I use Ollama to run language models and generate embeddings. Local inference handles background and batch workloads. Hosted models handle latency-sensitive agent workflows.",
            pt: "<strong>IA local</strong>: Uso Ollama para executar modelos de linguagem e gerar embeddings. A inferência local serve tarefas em segundo plano e em lote. Os modelos alojados servem fluxos de agentes sensíveis à latência.",
            lu: "<strong>Lokal KI</strong>: Mat Ollama lafen Sproochmodeller an ech generéieren Embeddings. Lokal Inferenz iwwerhëlt Hannergrond- a Batchaarbechten. Gehost Modeller déngen Agent-Workflows mat kuerzer Äntwertzäit.",
            de: "<strong>Lokale KI</strong>: Mit Ollama betreibe ich Sprachmodelle und erzeuge Embeddings. Lokale Inferenz übernimmt Hintergrund- und Stapelaufgaben. Gehostete Modelle übernehmen zeitkritische Agenten-Workflows.",
            fr: "<strong>IA locale</strong> : J’utilise Ollama pour exécuter des modèles de langage et produire des embeddings. L’inférence locale sert aux tâches de fond et aux traitements par lots. Les modèles hébergés servent aux workflows d’agents sensibles à la latence."
        },
        "project.homelab.section.what.apps.decision": {
            en: "<strong>Decision engine</strong>: A lightweight model scores or classifies text and flags potential prompt injection for review.",
            pt: "<strong>Motor de decisão</strong>: Um modelo leve pontua ou classifica texto e assinala possíveis injeções de prompts para análise.",
            lu: "<strong>Entscheedungsmotor</strong>: E liichte Modell bewäert oder klasséiert Text a markéiert méiglech Prompt-Injektioune fir eng Iwwerpréiwung.",
            de: "<strong>Entscheidungsmodul</strong>: Ein leichtgewichtiges Modell bewertet oder klassifiziert Text und markiert mögliche Prompt-Injection-Versuche zur Prüfung.",
            fr: "<strong>Moteur de décision</strong> : Un modèle léger note ou classe les textes et signale les tentatives potentielles d’injection de prompt."
        },
        "project.homelab.section.what.apps.knowledge": {
            en: "<strong>Agent memory and knowledge base</strong>: Combines full-text and vector search over curated notes, documentation, and transcripts, using local embeddings.",
            pt: "<strong>Memória e base de conhecimento dos agentes</strong>: Combina pesquisa textual e vetorial sobre notas, documentação e transcrições selecionadas, com embeddings locais.",
            lu: "<strong>Agentegediechtnes a Wëssensbasis</strong>: Kombinéiert Volltext- a Vektorsich iwwer ausgewielten Notizen, Dokumentatioun an Transkriptioune mat lokalen Embeddings.",
            de: "<strong>Agentengedächtnis und Wissensbasis</strong>: Kombiniert Volltext- und Vektorsuche in ausgewählten Notizen, Dokumentationen und Transkripten mit lokalen Embeddings.",
            fr: "<strong>Mémoire et base de connaissances des agents</strong> : Combine recherche plein texte et vectorielle dans des notes, de la documentation et des transcriptions sélectionnées, avec des embeddings locaux."
        },
        "project.homelab.section.what.apps.ingest": {
            en: "<strong>Video to transcript</strong>: a worker turns a video link into a timestamped, chunked transcript that agents can read, using human-written subtitles first and Whisper as the fallback.",
            pt: "<strong>De vídeo a transcrição</strong>: um worker transforma um link de vídeo numa transcrição com marcas de tempo e dividida em partes que os agentes conseguem ler, usando primeiro legendas escritas por pessoas e o Whisper como alternativa.",
            lu: "<strong>Vu Video op Transkriptioun</strong>: e Worker mécht aus engem Video-Link eng Transkriptioun mat Zäitmarken an Deeler, déi d'Agente liese kënnen, mat vu Mënsche geschriwwenen Ënnertitelen als éischt Wiel a Whisper als Ersatz.",
            de: "<strong>Vom Video zum Transkript</strong>: ein Worker macht aus einem Videolink ein zeitgestempeltes, in Abschnitte geteiltes Transkript, das Agenten lesen können, mit von Menschen geschriebenen Untertiteln zuerst und Whisper als Rückfall.",
            fr: "<strong>De la vidéo à la transcription</strong> : un worker transforme un lien vidéo en transcription horodatée et découpée que les agents peuvent lire, en utilisant d'abord les sous-titres écrits par des humains et Whisper en secours."
        },
        "project.homelab.section.what.apps.modes": {
            en: "<strong>Two run modes</strong>: Fixed pipelines handle predictable tasks, and adaptive model-driven workflows handle tasks that need more judgment.",
            pt: "<strong>Dois modos de execução</strong>: Fluxos fixos tratam tarefas previsíveis e fluxos adaptativos com modelos tratam as que exigem mais avaliação.",
            lu: "<strong>Zwee Modi</strong>: Fix Prozesser iwwerhuele viraussehbar Aufgaben. Adaptiv Prozesser mat Modeller iwwerhuelen Aufgaben, déi méi Ofweie verlaangen.",
            de: "<strong>Zwei Ausführungsmodi</strong>: Feste Abläufe übernehmen planbare Aufgaben. Adaptive, modellgestützte Abläufe werden für Aufgaben eingesetzt, die mehr Abwägung brauchen.",
            fr: "<strong>Deux modes d’exécution</strong> : Des workflows fixes traitent les tâches prévisibles, et des workflows adaptatifs pilotés par des modèles traitent celles qui demandent davantage de discernement."
        },
        "project.homelab.section.what.media.title": {
            en: "Storage + Media Plane (NAS)",
            pt: "Plano de armazenamento + multimédia (NAS)",
            lu: "Storage- a Medien-Ebene (NAS)",
            de: "Storage- und Medien-Ebene (NAS)",
            fr: "Plan stockage + média (NAS)"
        },
        "project.homelab.section.what.media.truenas": {
            en: "<strong>TrueNAS SCALE + ZFS</strong>: Separate storage node with mirrored HDD bulk storage, SSD hot tier, and service-specific datasets.",
            pt: "<strong>TrueNAS SCALE + ZFS</strong>: Nó de armazenamento separado com armazenamento massivo em HDD espelhado, camada hot em SSD e datasets específicos por serviço.",
            lu: "<strong>TrueNAS SCALE + ZFS</strong>: Separéierte Storage-Node mat gespigeltem HDD-Bulk-Storage, enger SSD-Hot-Tier a service-spezifeschen Datasets.",
            de: "<strong>TrueNAS SCALE + ZFS</strong>: Separater Storage-Knoten mit gespiegeltetem HDD-Bulk-Storage, SSD-Hot-Tier und dienstspezifischen Datasets.",
            fr: "<strong>TrueNAS SCALE + ZFS</strong> : Nœud de stockage séparé avec stockage massif sur HDD en miroir, tier hot sur SSD et datasets spécifiques par service."
        },
        "project.homelab.section.what.media.services": {
            en: "<strong>Full self-hosted media</strong>: Jellyfin with hardware transcoding, fed by a Radarr/Sonarr/Jellyseerr/Bazarr/Jackett acquisition pipeline with ClamAV scanning; Immich for photos; Nextcloud for files; Navidrome + Lidarr + Soulseek for music; Forgejo for Git hosting.",
            pt: "<strong>Media completa e self-hosted</strong>: Jellyfin com transcodificação por hardware, alimentado por um pipeline Radarr/Sonarr/Jellyseerr/Bazarr/Jackett com análise ClamAV; Immich para fotos; Nextcloud para ficheiros; Navidrome + Lidarr + Soulseek para música; Forgejo para alojamento Git.",
            lu: "<strong>Komplett self-hosted Medien</strong>: Jellyfin mat Hardware-Transcoding, gefiddert vun enger Radarr/Sonarr/Jellyseerr/Bazarr/Jackett Pipeline mat ClamAV-Scan; Immich fir Fotoen; Nextcloud fir Fichieren; Navidrome + Lidarr + Soulseek fir Musek; Forgejo fir Git-Hosting.",
            de: "<strong>Vollständig selbst gehostete Medien</strong>: Jellyfin mit Hardware-Transcoding, gespeist von einer Radarr/Sonarr/Jellyseerr/Bazarr/Jackett-Pipeline mit ClamAV-Scan; Immich für Fotos; Nextcloud für Dateien; Navidrome + Lidarr + Soulseek für Musik; Forgejo für Git-Hosting.",
            fr: "<strong>Médias entièrement auto-hébergés</strong> : Jellyfin avec transcodage matériel, alimenté par un pipeline Radarr/Sonarr/Jellyseerr/Bazarr/Jackett avec analyse ClamAV ; Immich pour les photos ; Nextcloud pour les fichiers ; Navidrome + Lidarr + Soulseek pour la musique ; Forgejo pour l'hébergement Git."
        },
        "project.homelab.section.what.media.object": {
            en: "<strong>S3-compatible object storage</strong>: Dual MinIO tiers keep hot objects on SSD and move colder data to HDD through lifecycle rules.",
            pt: "<strong>Armazenamento de objetos compatível com S3</strong>: Dois tiers de MinIO mantêm os objetos quentes em SSD e movem os dados mais frios para HDD através de regras de ciclo de vida.",
            lu: "<strong>S3-kompatibele Object-Storage</strong>: Zwee MinIO-Tiers halen waarm Objeten op SSD a verréckelen déi méi kal Donnéeën iwwer Lifecycle-Reegelen op HDD.",
            de: "<strong>S3-kompatibler Object-Storage</strong>: Zwei MinIO-Tiers halten heiße Objekte auf SSD und verschieben kältere Daten per Lifecycle-Regeln auf HDD.",
            fr: "<strong>Stockage objet compatible S3</strong> : Deux tiers MinIO gardent les objets chauds sur SSD et déplacent les données plus froides vers HDD via des règles de cycle de vie."
        },
        "project.homelab.section.what.media.backup": {
            en: "<strong>Versioned backups.</strong> A nightly job copies core databases and service configuration. It keeps previous versions and records checksums.",
            pt: "<strong>Cópias de segurança com versões.</strong> Uma tarefa noturna copia as bases de dados principais e a configuração dos serviços. Mantém versões anteriores e regista somas de verificação.",
            lu: "<strong>Versionéiert Backuppen.</strong> All Nuecht kopéiert eng Aufgab déi wichtegst Datebanken an d’Konfiguratioun vun de Servicer. Si behält al Versiounen a späichert Prüfsummen.",
            de: "<strong>Versionierte Sicherungen.</strong> Ein nächtlicher Auftrag kopiert die wichtigsten Datenbanken und Dienstkonfigurationen. Er behält frühere Versionen und speichert Prüfsummen.",
            fr: "<strong>Sauvegardes versionnées.</strong> Une tâche nocturne copie les principales bases de données et les configurations des services. Elle conserve les versions précédentes et enregistre les sommes de contrôle."
        },
        "project.homelab.section.what.media.rack": {
            en: "<strong>Power and cooling</strong>: I monitor power use and use drive temperatures to control airflow.",
            pt: "<strong>Energia e arrefecimento</strong>: Monitorizo o consumo e ajusto o fluxo de ar em função das temperaturas dos discos.",
            lu: "<strong>Stroum a Killung</strong>: Ech iwwerwaachen de Stroumverbrauch a steieren de Loftstroum no der Temperatur vun de Placken.",
            de: "<strong>Strom und Kühlung</strong>: Ich überwache den Stromverbrauch und steuere den Luftstrom nach den Laufwerkstemperaturen.",
            fr: "<strong>Énergie et refroidissement</strong> : Je surveille la consommation et règle le flux d’air selon la température des disques."
        },
        "project.homelab.section.what.k3s.ingress": {
            en: "<strong>Traefik ingress</strong>: Host-based routing and a clean path to declarative microservice deployments.",
            pt: "<strong>Traefik ingress</strong>: Routing baseado em hosts e um caminho limpo para deployments declarativos de microsserviços.",
            lu: "<strong>Traefik-Ingress</strong>: Host-baséiert Routing an e propperen Wee fir deklarativ Microservice-Deployments.",
            de: "<strong>Traefik-Ingress</strong>: Host-basiertes Routing und ein sauberer Weg zu deklarativen Microservice-Deployments.",
            fr: "<strong>Ingress Traefik</strong> : Routage basé sur l'hôte et voie claire vers des déploiements déclaratifs de microservices."
        },
        "project.homelab.section.what.k3s.portainer": {
            en: "<strong>Portainer</strong>: Cluster visibility and day-to-day Kubernetes management.",
            pt: "<strong>Portainer</strong>: Visibilidade do cluster e gestão diária de Kubernetes.",
            lu: "<strong>Portainer</strong>: Visibilitéit iwwer de Cluster an deeglecht Kubernetes-Management.",
            de: "<strong>Portainer</strong>: Sichtbarkeit über den Cluster und tägliches Kubernetes-Management.",
            fr: "<strong>Portainer</strong> : Visibilité sur le cluster et gestion quotidienne de Kubernetes."
        },
        "project.homelab.section.what.k3s.qr": {
            en: "<strong>QR microservice</strong>: A React + Vite service running in K3s as the current reference workload for the cluster.",
            pt: "<strong>Microsserviço QR</strong>: Um serviço em React + Vite a correr em K3s como workload de referência atual do cluster.",
            lu: "<strong>QR-Microservice</strong>: E React- + Vite-Service, deen am K3s leeft an am Moment d'Referenz-Workload fir de Cluster ass.",
            de: "<strong>QR-Microservice</strong>: Ein React- + Vite-Service, der in K3s läuft und aktuell als Referenz-Workload für den Cluster dient.",
            fr: "<strong>Microservice QR</strong> : Un service React + Vite exécuté dans K3s comme workload de référence actuel du cluster."
        },
        "project.homelab.section.what.k3s.images": {
            en: "<strong>Private multi-arch image flow</strong>: Images are prepared for ARM64 and x86_64 and distributed through a private registry workflow.",
            pt: "<strong>Fluxo privado de imagens multi-arquitetura</strong>: As imagens são preparadas para ARM64 e x86_64 e distribuídas através de um workflow com registry privado.",
            lu: "<strong>Private Multi-Arch-Image-Flow</strong>: D'Images gi fir ARM64 an x86_64 preparéiert an iwwer e private Registry-Workflow verdeelt.",
            de: "<strong>Privater Multi-Arch-Image-Flow</strong>: Images werden für ARM64 und x86_64 vorbereitet und über einen privaten Registry-Workflow verteilt.",
            fr: "<strong>Flux privé d'images multi-architecture</strong> : Les images sont préparées pour ARM64 et x86_64 puis distribuées via un workflow de registre privé."
        },
        "project.homelab.section.what.gateway.caddy": {
            en: "<strong>Caddy at the edge</strong>: Automatic TLS, strict security headers, structured logs, compression, and route-level rate limits.",
            pt: "<strong>Caddy na edge</strong>: TLS automático, cabeçalhos de segurança rigorosos, logs estruturados, compressão e rate limits ao nível da rota.",
            lu: "<strong>Caddy un der Edge</strong>: Automateschen TLS, strikt Sécherheets-Headeren, strukturéiert Logs, Kompressioun a Rate-Limits op Route-Niveau.",
            de: "<strong>Caddy an der Edge</strong>: Automatisches TLS, strikte Sicherheits-Header, strukturierte Logs, Kompression und Rate-Limits auf Routenebene.",
            fr: "<strong>Caddy à l'edge</strong> : TLS automatique, en-têtes de sécurité stricts, logs structurés, compression et limitations de débit au niveau des routes."
        },
        "project.homelab.section.what.gateway.crowdsec": {
            en: "<strong>CrowdSec</strong>: Filters suspicious traffic at the edge.",
            pt: "<strong>CrowdSec</strong>: Filtra tráfego suspeito à entrada.",
            lu: "<strong>CrowdSec</strong>: Filtert verdächtege Verkéier um Gateway.",
            de: "<strong>CrowdSec</strong>: Filtert verdächtigen Datenverkehr am Gateway.",
            fr: "<strong>CrowdSec</strong> : Filtre le trafic suspect en entrée."
        },
        "project.homelab.section.what.gateway.wireguard": {
            en: "<strong>WireGuard</strong>: Used to protect traffic between infrastructure components.",
            pt: "<strong>WireGuard</strong>: Protege o tráfego entre os componentes da infraestrutura.",
            lu: "<strong>WireGuard</strong>: Schützt de Verkéier tëscht de Komponente vun der Infrastruktur.",
            de: "<strong>WireGuard</strong>: Schützt den Datenverkehr zwischen Infrastrukturkomponenten.",
            fr: "<strong>WireGuard</strong> : Protège le trafic entre les composants de l’infrastructure."
        },
        "project.homelab.section.what.gateway.admin": {
            en: "<strong>Administrative access</strong>: Management access is separate from application traffic.",
            pt: "<strong>Acesso administrativo</strong>: O acesso de gestão está separado do tráfego das aplicações.",
            lu: "<strong>Administrativen Zougang</strong>: Zougang fir d’Verwaltung ass vum Verkéier vun den Apps getrennt.",
            de: "<strong>Administrationszugriff</strong>: Der Verwaltungszugriff ist vom Anwendungsverkehr getrennt.",
            fr: "<strong>Accès d’administration</strong> : L’accès de gestion est séparé du trafic des applications."
        },
        "project.homelab.section.what.gateway.api": {
            en: "<strong>Security telemetry</strong>: Gateway logs and alerts inform monitoring and incident triage.",
            pt: "<strong>Telemetria de segurança</strong>: Os registos e alertas do gateway ajudam a monitorizar e a analisar incidentes.",
            lu: "<strong>Sécherheetsdaten</strong>: Loggen an Alerte vum Gateway hëllefe bei der Iwwerwaachung an der Analys vun Incidenten.",
            de: "<strong>Sicherheitstelemetrie</strong>: Gateway-Protokolle und Warnungen unterstützen die Überwachung und die Analyse von Vorfällen.",
            fr: "<strong>Télémétrie de sécurité</strong> : Les journaux et les alertes de la passerelle alimentent la supervision et le tri des incidents."
        },
        "project.homelab.sidebar.tech.truenas": {
            en: "TrueNAS SCALE + ZFS",
            pt: "TrueNAS SCALE + ZFS",
            lu: "TrueNAS SCALE + ZFS",
            de: "TrueNAS SCALE + ZFS",
            fr: "TrueNAS SCALE + ZFS"
        },
        "project.homelab.sidebar.tech.vpn": {
            en: "WireGuard",
            pt: "WireGuard",
            lu: "WireGuard",
            de: "WireGuard",
            fr: "WireGuard"
        },
        "project.homelab.sidebar.tech.edge": {
            en: "Caddy + CrowdSec",
            pt: "Caddy + CrowdSec",
            lu: "Caddy + CrowdSec",
            de: "Caddy + CrowdSec",
            fr: "Caddy + CrowdSec"
        },
        "project.homelab.sidebar.tech.cluster": {
            en: "Traefik + Portainer",
            pt: "Traefik + Portainer",
            lu: "Traefik + Portainer",
            de: "Traefik + Portainer",
            fr: "Traefik + Portainer"
        },
        "project.homelab.sidebar.tech.backend": {
            en: "FastAPI + SQLAlchemy",
            pt: "FastAPI + SQLAlchemy",
            lu: "FastAPI + SQLAlchemy",
            de: "FastAPI + SQLAlchemy",
            fr: "FastAPI + SQLAlchemy"
        },
        "project.homelab.sidebar.tech.data": {
            en: "SQLite + Alembic + MinIO",
            pt: "SQLite + Alembic + MinIO",
            lu: "SQLite + Alembic + MinIO",
            de: "SQLite + Alembic + MinIO",
            fr: "SQLite + Alembic + MinIO"
        },
        "project.homelab.sidebar.tech.auth": {
            en: "Passkeys + JWT SSO + OIDC/OAuth",
            pt: "Passkeys + JWT SSO + OIDC/OAuth",
            lu: "Passkeys + JWT SSO + OIDC/OAuth",
            de: "Passkeys + JWT SSO + OIDC/OAuth",
            fr: "Passkeys + JWT SSO + OIDC/OAuth"
        },
        "project.homelab.sidebar.tech.rtc": {
            en: "LiveKit (WebRTC rooms)",
            pt: "LiveKit (salas WebRTC)",
            lu: "LiveKit (WebRTC-Raim)",
            de: "LiveKit (WebRTC-Räume)",
            fr: "LiveKit (salles WebRTC)"
        },
        "project.homelab.sidebar.tech.video": {
            en: "Qwen Wan + Seedance (image-to-video)",
            pt: "Qwen Wan + Seedance (imagem para vídeo)",
            lu: "Qwen Wan + Seedance (Bild op Video)",
            de: "Qwen Wan + Seedance (Bild zu Video)",
            fr: "Qwen Wan + Seedance (image vers vidéo)"
        },
        "project.homelab.sidebar.tech.email": {
            en: "Resend (transactional email)",
            pt: "Resend (email transacional)",
            lu: "Resend (transaktionnel E-Mail)",
            de: "Resend (transaktionale E-Mail)",
            fr: "Resend (email transactionnel)"
        },
        "project.homelab.sidebar.tech.frontend": {
            en: "SvelteKit, React, TypeScript",
            pt: "SvelteKit, React, TypeScript",
            lu: "SvelteKit, React, TypeScript",
            de: "SvelteKit, React, TypeScript",
            fr: "SvelteKit, React, TypeScript"
        },
        "project.homelab.sidebar.tech.agents": {
            en: "AI Agents with Guardrails",
            pt: "Agentes de IA com salvaguardas",
            lu: "KI-Agenten mat Sécherheetsreegelen",
            de: "KI-Agenten mit Sicherheitsregeln",
            fr: "Agents IA avec garde-fous"
        },
        "project.homelab.sidebar.tech.worker": {
            en: "Playwright + Sharp + SearXNG",
            pt: "Playwright + Sharp + SearXNG",
            lu: "Playwright + Sharp + SearXNG",
            de: "Playwright + Sharp + SearXNG",
            fr: "Playwright + Sharp + SearXNG"
        },
        "project.homelab.sidebar.tech.localai": {
            en: "Ollama (local models and embeddings)",
            pt: "Ollama (modelos locais e embeddings)",
            lu: "Ollama (lokal Modeller an Embeddings)",
            de: "Ollama (lokale Modelle und Embeddings)",
            fr: "Ollama (modèles locaux et embeddings)"
        },
        "project.homelab.sidebar.tech.search": {
            en: "sqlite-vec + FTS5 (hybrid search)",
            pt: "sqlite-vec + FTS5 (pesquisa híbrida)",
            lu: "sqlite-vec + FTS5 (hybrid Sich)",
            de: "sqlite-vec + FTS5 (hybride Suche)",
            fr: "sqlite-vec + FTS5 (recherche hybride)"
        },
        "project.homelab.sidebar.tech.speech": {
            en: "Whisper, Kokoro, Piper (speech)",
            pt: "Whisper, Kokoro, Piper (voz)",
            lu: "Whisper, Kokoro, Piper (Sprooch)",
            de: "Whisper, Kokoro, Piper (Sprache)",
            fr: "Whisper, Kokoro, Piper (voix)"
        },
        "project.homelab.sidebar.tech.media": {
            en: "Jellyfin, Immich, Nextcloud, Navidrome",
            pt: "Jellyfin, Immich, Nextcloud, Navidrome",
            lu: "Jellyfin, Immich, Nextcloud, Navidrome",
            de: "Jellyfin, Immich, Nextcloud, Navidrome",
            fr: "Jellyfin, Immich, Nextcloud, Navidrome"
        },
        "project.homelab.sidebar.features.topology": {
            en: "Hybrid cloud and local infrastructure",
            pt: "Infraestrutura híbrida na cloud e local",
            lu: "Hybrid Infrastruktur an der Cloud a lokal",
            de: "Hybride Cloud- und lokale Infrastruktur",
            fr: "Infrastructure hybride cloud et locale"
        },
        "project.homelab.sidebar.features.rack": {
            en: "Power monitoring and temperature-based cooling",
            pt: "Monitorização do consumo e arrefecimento por temperatura",
            lu: "Stroum iwwerwaachen a jee no Temperatur killen",
            de: "Stromüberwachung und temperaturabhängige Kühlung",
            fr: "Suivi de la consommation et refroidissement piloté par la température"
        },
        "project.homelab.sidebar.features.exposure": {
            en: "Protected gateway and separate administrative access",
            pt: "Gateway protegido e acesso administrativo separado",
            lu: "Geschützte Gateway a getrennten administrativen Zougang",
            de: "Geschütztes Gateway und getrennter Administrationszugriff",
            fr: "Passerelle protégée et accès d’administration séparé"
        },
        "project.homelab.sidebar.features.auth": {
            en: "Passwordless passkeys + custom JWT SSO + 2FA",
            pt: "Passkeys sem palavra-passe + SSO JWT personalizado + 2FA",
            lu: "Passkeys ouni Passwuert + personaliséiert JWT-SSO + 2FA",
            de: "Passwortlose Passkeys + eigenes JWT-SSO + 2FA",
            fr: "Passkeys sans mot de passe + SSO JWT personnalisé + 2FA"
        },
        "project.homelab.sidebar.features.federated": {
            en: "OIDC provider + OAuth 2.0 for AI connectors",
            pt: "Provedor OIDC + OAuth 2.0 para conectores de IA",
            lu: "OIDC-Provider + OAuth 2.0 fir AI-Connectoren",
            de: "OIDC-Provider + OAuth 2.0 für KI-Connectoren",
            fr: "Fournisseur OIDC + OAuth 2.0 pour connecteurs IA"
        },
        "project.homelab.sidebar.features.apps": {
            en: "Custom apps sharing a backend and sign-in",
            pt: "Aplicações próprias com backend e autenticação partilhados",
            lu: "Eegen Apps mat gemeinsamem Backend a Login",
            de: "Eigene Apps mit gemeinsamem Backend und gemeinsamer Anmeldung",
            fr: "Applications avec backend et authentification partagés"
        },
        "project.homelab.sidebar.features.realtime": {
            en: "Self-hosted voice/video rooms (LiveKit)",
            pt: "Salas de voz/vídeo self-hosted (LiveKit)",
            lu: "Self-hosted Voice-/Video-Raim (LiveKit)",
            de: "Selbst gehostete Voice-/Video-Räume (LiveKit)",
            fr: "Salles voix/vidéo auto-hébergées (LiveKit)"
        },
        "project.homelab.sidebar.features.video": {
            en: "AI keyframe-to-video generation",
            pt: "Geração de vídeo por keyframes de IA",
            lu: "AI-Keyframe-zu-Video-Generéierung",
            de: "KI-Keyframe-zu-Video-Generierung",
            fr: "Génération vidéo par images-clés IA"
        },
        "project.homelab.sidebar.features.agents": {
            en: "AI agents with approval controls",
            pt: "Agentes de IA com controlos de aprovação",
            lu: "KI-Agenten mat Geneemegungskontrollen",
            de: "KI-Agenten mit Freigabekontrollen",
            fr: "Agents IA avec contrôles d’approbation"
        },
        "project.homelab.sidebar.features.localai": {
            en: "Self-hosted OpenAI-compatible AI gateway",
            pt: "Gateway de IA self-hosted compatível com OpenAI",
            lu: "Self-hosted KI-Gateway, OpenAI-kompatibel",
            de: "Selbst gehostetes, OpenAI-kompatibles KI-Gateway",
            fr: "Passerelle IA auto-hébergée compatible OpenAI"
        },
        "project.homelab.sidebar.features.nas": {
            en: "Dedicated NAS with hot/cold object storage",
            pt: "NAS dedicado com armazenamento de objetos hot/cold",
            lu: "Dedizéierten NAS mat Hot/Cold-Object-Storage",
            de: "Dediziertes NAS mit Hot/Cold-Object-Storage",
            fr: "NAS dédié avec stockage objet hot/cold"
        },
        "project.homelab.sidebar.features.cooling": {
            en: "Fan control driven by drive temperatures",
            pt: "Ventoinhas controladas pela temperatura dos discos",
            lu: "Ventilatioun no der Temperatur vun de Placken",
            de: "Lüftersteuerung nach Festplattentemperatur",
            fr: "Ventilation pilotée par la température des disques"
        },
        "project.homelab.sidebar.features.mediafull": {
            en: "Full media, photos, files, and music stack",
            pt: "Stack completa de multimédia, fotos, ficheiros e música",
            lu: "Komplett Stack fir Medien, Fotoen, Fichieren a Musek",
            de: "Vollständiger Stack für Medien, Fotos, Dateien und Musik",
            fr: "Stack complète pour médias, photos, fichiers et musique"
        },
        "project.homelab.sidebar.features.compute": {
            en: "Compute offload for browser and image workloads",
            pt: "Offload computacional para workloads de browser e imagem",
            lu: "Compute-Offload fir Browser- a Bild-Workloads",
            de: "Compute-Offload für Browser- und Bild-Workloads",
            fr: "Offload de calcul pour les workloads navigateur et image"
        },
        "project.homelab.sidebar.features.deploy": {
            en: "Mixed Docker Compose + K3s deployment model",
            pt: "Modelo de deployment misto com Docker Compose + K3s",
            lu: "Gemëschte Deployment-Modell mat Docker Compose + K3s",
            de: "Gemischtes Deployment-Modell mit Docker Compose + K3s",
            fr: "Modèle de déploiement mixte Docker Compose + K3s"
        },
        "project.homelab.glance.nodes.label": {
            en: "cloud and local infrastructure",
            pt: "infraestrutura na cloud e local",
            lu: "Cloud a lokal Infrastruktur",
            de: "Cloud und lokale Infrastruktur",
            fr: "infrastructure cloud et locale"
        },
        "project.homelab.glance.uptime.label": {
            en: "maintained since March 2025",
            pt: "mantido desde março de 2025",
            lu: "zënter Mäerz 2025 gepflegt",
            de: "seit März 2025 gepflegt",
            fr: "maintenu depuis mars 2025"
        },
        "project.homelab.glance.status.value": {
            en: "Active",
            pt: "Ativo",
            lu: "Aktiv",
            de: "Aktiv",
            fr: "Actif"
        },
        "project.homelab.glance.apps.label": {
            en: "custom web apps I built",
            pt: "apps web criadas por mim",
            lu: "Web-Apps déi ech selwer gebaut hunn",
            de: "selbst gebaute Web-Apps",
            fr: "apps web que j'ai créées"
        },
        "project.homelab.glance.agents.label": {
            en: "AI assistants with guardrails",
            pt: "assistentes de IA com salvaguardas",
            lu: "AI-Assistenten mat Sécherheetsgrenzen",
            de: "KI-Assistenten mit Schutzmechanismen",
            fr: "assistants IA avec garde-fous"
        },
        "project.homelab.arch.title": {
            en: "How it fits together",
            pt: "Como tudo se encaixa",
            lu: "Wéi alles zesummespillt",
            de: "Wie alles zusammenspielt",
            fr: "Comment tout s'articule"
        },
        "project.homelab.arch.internet": {
            en: "Incoming requests",
            pt: "Pedidos recebidos",
            lu: "Entréeënd Ufroen",
            de: "Eingehende Anfragen",
            fr: "Requêtes entrantes"
        },
        "project.homelab.arch.rack": {
            en: "Self-hosted services",
            pt: "Serviços autoalojados",
            lu: "Selwer gehost Servicer",
            de: "Selbst gehostete Dienste",
            fr: "Services auto-hébergés"
        },
        "project.homelab.arch.tunnel": {
            en: "Protected connection",
            pt: "Ligação protegida",
            lu: "Geschützte Verbindung",
            de: "Geschützte Verbindung",
            fr: "Connexion protégée"
        },
        "project.homelab.arch.note": {
            en: "The gateway handles incoming requests. Applications, compute, and data storage have separate roles.",
            pt: "O gateway trata os pedidos recebidos. As aplicações, a computação e o armazenamento têm funções distintas.",
            lu: "De Gateway behandelt erakommend Ufroen. Apps, Rechenaarbecht a Späicher hunn ënnerschiddlech Rollen.",
            de: "Das Gateway verarbeitet eingehende Anfragen. Anwendungen, Rechenleistung und Datenspeicher haben getrennte Aufgaben.",
            fr: "La passerelle traite les requêtes entrantes. Les applications, le calcul et le stockage ont des rôles distincts."
        },
        "project.homelab.does.title": {
            en: "What it actually does",
            pt: "O que faz na prática",
            lu: "Wat et tatsächlech mécht",
            de: "Was es tatsächlich macht",
            fr: "Ce qu'il fait concrètement"
        },
        "project.homelab.does.media.title": {
            en: "Your own Netflix, Photos & Drive",
            pt: "O teu próprio Netflix, Fotos e Drive",
            lu: "Däin eegene Netflix, Fotoen & Drive",
            de: "Dein eigenes Netflix, Fotos & Drive",
            fr: "Ton propre Netflix, Photos et Drive"
        },
        "project.homelab.does.media.desc": {
            en: "Stream films, back up phone photos, sync files and play music - self-hosted, no monthly subscriptions.",
            pt: "Vê filmes, faz backup das fotos do telemóvel, sincroniza ficheiros e ouve música - tudo self-hosted, sem subscrições mensais.",
            lu: "Filmer kucken, Telefon-Fotoen sécheren, Fichiere synchroniséieren a Musek lauschteren - alles self-hosted, ouni méintlech Abonnementer.",
            de: "Filme streamen, Handy-Fotos sichern, Dateien synchronisieren und Musik hören - self-hosted, ohne monatliche Abos.",
            fr: "Regarder des films, sauvegarder les photos du téléphone, synchroniser des fichiers et écouter de la musique - self-hosted, sans abonnements mensuels."
        },
        "project.homelab.does.apps.title": {
            en: "A suite of web apps I built",
            pt: "Um conjunto de apps web que construí",
            lu: "Eng Rei Web-Apps déi ech gebaut hunn",
            de: "Eine ganze Reihe selbst gebauter Web-Apps",
            fr: "Toute une série d'apps web que j'ai construites"
        },
        "project.homelab.does.apps.desc": {
            en: "Apps for job applications, vocabulary, video, and knowledge search share one sign-in.",
            pt: "As aplicações para candidaturas, vocabulário, vídeo e pesquisa de conhecimento partilham a mesma autenticação.",
            lu: "Apps fir Bewerbungen, Vokabelen, Videoen an d’Sich a menge Notizen deelen ee Login.",
            de: "Anwendungen für Bewerbungen, Vokabeltraining, Video und Wissenssuche nutzen dieselbe Anmeldung.",
            fr: "Les applications de candidature, de vocabulaire, de vidéo et de recherche partagent la même connexion."
        },
        "project.homelab.does.agents.title": {
            en: "AI agents that do real work",
            pt: "Agentes de IA que fazem trabalho real",
            lu: "AI-Agenten déi richteg Aarbecht maachen",
            de: "KI-Agenten, die echte Arbeit leisten",
            fr: "Des agents IA qui font un vrai travail"
        },
        "project.homelab.does.agents.desc": {
            en: "Research, study, security, writing, CV coaching and infrastructure helpers that run safely behind strict limits and ask before they act.",
            pt: "Ajudantes de pesquisa, estudo, segurança, escrita, CV e infraestrutura que correm em segurança dentro de limites rígidos e pedem autorização antes de agir.",
            lu: "Hëllefe fir Recherche, Léieren, Sécherheet, Schreiwen, CV an Infrastruktur, déi sécher bannent strenge Grenze lafen a froen, ier se handelen.",
            de: "Helfer für Recherche, Lernen, Sicherheit, Schreiben, Lebenslauf und Infrastruktur, die sicher in strengen Grenzen laufen und fragen, bevor sie handeln.",
            fr: "Des assistants pour la recherche, l'étude, la sécurité, l'écriture, le CV et l'infrastructure, qui tournent en sécurité dans des limites strictes et demandent avant d'agir."
        },
        "project.homelab.does.secure.title": {
            en: "Shared sign-in with passkeys",
            pt: "Autenticação partilhada com passkeys",
            lu: "Gemeinsame Login mat Passkeys",
            de: "Gemeinsame Anmeldung mit Passkeys",
            fr: "Connexion commune avec des clés d’accès"
        },
        "project.homelab.does.secure.desc": {
            en: "Sign in with a passkey. A protected gateway handles traffic, and applications share identity and permission checks.",
            pt: "Inicie sessão com uma chave de acesso. Um gateway protegido trata o tráfego e as aplicações partilham a identidade e a verificação de permissões.",
            lu: "Mell dech mat engem Passkey un. E geschützte Gateway iwwerhëlt de Verkéier, an d’Apps deelen d’Identitéit an d’Kontroll vun de Rechter.",
            de: "Die Anmeldung erfolgt per Passkey. Ein geschütztes Gateway verarbeitet den Datenverkehr, und die Anwendungen nutzen gemeinsame Identitäts- und Berechtigungsprüfungen.",
            fr: "La connexion se fait avec une clé d’accès. Une passerelle protégée traite le trafic, et les applications partagent la gestion des identités et des permissions."
        },
        "project.homelab.next.voice": {
            en: "Improve the voice assistant workflow",
            pt: "Melhorar o fluxo do assistente de voz",
            lu: "Den Oflaf mam Stëmmassistent verbesseren",
            de: "Den Ablauf mit dem Sprachassistenten verbessern",
            fr: "Améliorer le fonctionnement de l’assistant vocal"
        },
        "project.homelab.next.video": {
            en: "Explore a node-based editor for video workflows",
            pt: "Explorar um editor de nós para fluxos de vídeo",
            lu: "En Editor mat Kniet fir Video-Workflows ausprobéieren",
            de: "Einen knotenbasierten Editor für Videoabläufe erproben",
            fr: "Explorer un éditeur à nœuds pour les workflows vidéo"
        },
        "project.homelab.next.career": {
            en: "Keep improving the job application workspace",
            pt: "Continuar a melhorar a área de candidaturas",
            lu: "D’Bewerbungsplattform weider verbesseren",
            de: "Die Bewerbungsplattform weiter verbessern",
            fr: "Continuer à améliorer l’espace de candidature"
        },
        "project.homelab.next.restore": {
            en: "Test a database restore in isolation",
            pt: "Testar o restauro da base de dados num ambiente isolado",
            lu: "D’Restauratioun vun enger Datebank isoléiert testen",
            de: "Eine Datenbankwiederherstellung isoliert testen",
            fr: "Tester la restauration d’une base de données dans un environnement isolé"
        },
    };
    Object.assign(translations, extra);
})();
