/**
 * Projects list page translations - loaded only on projects.html
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        "projects.badge": {
            en: "PORTFOLIO PROJECTS",
            pt: "PROJETOS DO PORTFÓLIO",
            lu: "PORTFOLIO PROJETEN",
            de: "PORTFOLIO-PROJEKTE",
            fr: "PROJETS PORTFOLIO"
        },
        "projects.heading": {
            en: "Projects",
            pt: "Projetos",
            lu: "Projeten",
            de: "Projekte",
            fr: "Projets"
        },
        "projects.assemblash.title": {
            en: "Assemblash",
            pt: "Assemblash",
            lu: "Assemblash",
            de: "Assemblash",
            fr: "Assemblash"
        },
        "projects.assemblash.desc": {
            en: "An open-source, local-first visual document engine where people and AI agents can work on the same editable document through a web editor, CLI, HTTP API, or MCP.",
            pt: "Um motor de documentos visuais, open source e local-first, onde pessoas e agentes de IA podem trabalhar no mesmo documento editável através de um editor web, CLI, API HTTP ou MCP.",
            lu: "En Open-Source, local-first Engine fir visuell Dokumenter, wou Mënschen an AI-Agenten um selwechten editéierbare Dokument iwwer e Web-Editor, CLI, HTTP API oder MCP kënne schaffen.",
            de: "Eine Open-Source- und Local-first-Engine für visuelle Dokumente, in der Menschen und KI-Agenten über Web-Editor, CLI, HTTP-API oder MCP am selben bearbeitbaren Dokument arbeiten können.",
            fr: "Un moteur de documents visuels open source et local-first, où humains et agents IA peuvent travailler sur le même document modifiable via un éditeur web, une CLI, une API HTTP ou MCP."
        },
        "projects.subtitle": {
            en: "A project directory spanning infrastructure, open-source tools, web work, AI, and school projects. Use the filters to explore it.",
            pt: "Um diretório de projetos com infraestrutura, ferramentas open source, trabalho web, IA e projetos escolares. Usa os filtros para o explorar.",
            lu: "E Projet-Dossier mat Infrastruktur, Open-Source-Tools, Web-Aarbecht, AI a Schoulprojeten. Benotz d'Filtere fir en z'entdecken.",
            de: "Ein Projektverzeichnis mit Infrastruktur, Open-Source-Tools, Webarbeit, KI und Schulprojekten. Nutze die Filter, um es zu erkunden.",
            fr: "Un répertoire de projets couvrant l’infrastructure, les outils open source, le web, l’IA et les projets scolaires. Utilisez les filtres pour l’explorer."
        },
        "projects.back": {
            en: "Back to Portfolio",
            pt: "Voltar ao Portfólio",
            lu: "Zréck op de Portfolio",
            de: "Zurück zum Portfolio",
            fr: "Retour au Portfolio"
        },
        "projects.filter.all": {
            en: "All",
            pt: "Todos",
            lu: "All",
            de: "Alle",
            fr: "Tous"
        },
        "projects.filter.recent": {
            en: "Recent",
            pt: "Recentes",
            lu: "Rezent",
            de: "Neueste",
            fr: "Récents"
        },
        "projects.empty": {
            en: "No projects found for this category.",
            pt: "Nenhum projeto encontrado para esta categoria.",
            lu: "Keng Projeten fir dës Kategorie fonnt.",
            de: "Keine Projekte für diese Kategorie gefunden.",
            fr: "Aucun projet trouvé pour cette catégorie."
        },
        "projects.modal.viewProject": {
            en: "View Project",
            pt: "Ver Projeto",
            lu: "Projet kucken",
            de: "Projekt ansehen",
            fr: "Voir le Projet"
        },
        "projects.viewDetails": {
            en: "View Details",
            pt: "Ver Detalhes",
            lu: "Detailer kucken",
            de: "Details ansehen",
            fr: "Voir les Détails"
        },
        "projects.githubRepository": {
            en: "GitHub repository",
            pt: "Repositório GitHub",
            lu: "GitHub-Repository",
            de: "GitHub-Repository",
            fr: "Dépôt GitHub"
        },
        "projects.caseStudy": {
            en: "Case study",
            pt: "Estudo de caso",
            lu: "Case Study",
            de: "Fallstudie",
            fr: "Étude de cas"
        },
        "projects.filter.label": {
            en: "Filter",
            pt: "Filtrar",
            lu: "Filteren",
            de: "Filter",
            fr: "Filtrer"
        },
        "projects.filter.modal.title": {
            en: "Filter Categories",
            pt: "Filtrar Categorias",
            lu: "Kategorien filteren",
            de: "Kategorien filtern",
            fr: "Filtrer les Catégories"
        },
        "projects.filter.modal.clear": {
            en: "Clear all",
            pt: "Limpar tudo",
            lu: "Alläi läschen",
            de: "Alle zurücksetzen",
            fr: "Tout effacer"
        },
        "projects.filter.modal.showResults": {
            en: "Show results",
            pt: "Mostrar resultados",
            lu: "Resultater weisen",
            de: "Ergebnisse anzeigen",
            fr: "Afficher les résultats"
        },
        "projects.filter.modal.noneSelected": {
            en: "None selected",
            pt: "Nenhum selecionado",
            lu: "Nichts ausgewielt",
            de: "Keine ausgewählt",
            fr: "Aucune sélection"
        },
        "projects.filter.modal.allSelected": {
            en: "All selected",
            pt: "Todos selecionados",
            lu: "Alles ausgewielt",
            de: "Alle ausgewählt",
            fr: "Tout sélectionné"
        },
        "projects.filter.modal.close": {
            en: "Close filter",
            pt: "Fechar filtro",
            lu: "Filter zoumaachen",
            de: "Filter schließen",
            fr: "Fermer le filtre"
        },
        "projects.filter.modal.selectedCount": {
            en: "{count} selected",
            pt: "{count} selecionado(s)",
            lu: "{count} ausgewielt",
            de: "{count} ausgewählt",
            fr: "{count} sélectionné(s)"
        },
        "projects.card.assemblash": {
            en: "An open-source design tool where people and AI agents can edit the same local document.",
            pt: "Uma ferramenta de design de código aberto onde pessoas e agentes de IA podem editar o mesmo documento local.",
            lu: "En Open-Source-Designtool, mat deem Mënschen an AI-Agenten dat selwecht lokaalt Dokument beaarbechte kënnen.",
            de: "Ein Open-Source-Designtool, mit dem Menschen und KI-Agenten dasselbe lokale Dokument bearbeiten können.",
            fr: "Un outil de création open source où humains et agents IA peuvent modifier le même document local."
        },
        "projects.card.cylro": {
            en: "A platform in development for managing access, content, and publishing across multiple websites from one workspace.",
            pt: "Uma plataforma em desenvolvimento para gerir acessos, conteúdos e publicações de vários sites num só espaço.",
            lu: "Eng Plattform an Entwécklung fir Zougrëff, Inhalt a Publikatioune vu méi Websäiten an engem Aarbechtsberäich ze geréieren.",
            de: "Eine Plattform in Entwicklung, um Zugriffe, Inhalte und Veröffentlichungen mehrerer Websites zentral zu verwalten.",
            fr: "Une plateforme en développement pour gérer les accès, les contenus et la publication de plusieurs sites depuis un même espace."
        },
        "projects.card.pif": {
            en: "A self-watering plant monitor with live touchscreen readings and nightly backups.",
            pt: "Um sistema de monitorização de plantas com rega automática, leituras num ecrã tátil e cópias de segurança noturnas.",
            lu: "E Planzemonitor mat automatescher Bewässerung, Live-Moosswäerter um Touchscreen an nuetleche Backups.",
            de: "Eine Pflanzenüberwachung mit automatischer Bewässerung, Live-Messwerten auf dem Touchscreen und nächtlichen Backups.",
            fr: "Un système de suivi des plantes avec arrosage automatique, relevés en direct sur écran tactile et sauvegardes nocturnes."
        },
        "projects.card.ai-hermes-agent": {
            en: "A self-hosted assistant that remembers Matrix conversations, runs scheduled tasks, and sends homelab alerts.",
            pt: "Um assistente autoalojado que se lembra das conversas no Matrix, executa tarefas agendadas e envia alertas do homelab.",
            lu: "En Assistent, deen ech selwer hosten, dee Matrix-Gespréicher behält, geplangten Aufgaben ausféiert an Homelab-Alarmer schéckt.",
            de: "Ein selbst gehosteter Assistent, der Matrix-Gespräche im Gedächtnis behält, geplante Aufgaben ausführt und Homelab-Warnungen sendet.",
            fr: "Un assistant auto-hébergé qui se souvient des conversations Matrix, exécute des tâches planifiées et envoie des alertes du homelab."
        },
        "projects.card.whispflow": {
            en: "A desktop app that records meetings and creates searchable transcripts and summaries, with local processing by default.",
            pt: "Uma aplicação de computador que grava reuniões e cria transcrições pesquisáveis e resumos, com processamento local por defeito.",
            lu: "Eng Desktop-App, déi Sëtzungen ophëlt an duerchsichbar Transkriptiounen a Resuméë erstellt. D’Veraarbechtung leeft standardméisseg lokal.",
            de: "Eine Desktop-App für Meetingaufnahmen, durchsuchbare Transkripte und Zusammenfassungen. Die Verarbeitung läuft standardmäßig lokal.",
            fr: "Une application de bureau qui enregistre les réunions et crée des transcriptions consultables et des résumés, avec traitement local par défaut."
        },
        "projects.card.az-where": {
            en: "A command-line tool that checks where Azure resources can deploy using policy, availability, and live quota.",
            pt: "Uma ferramenta de linha de comandos que verifica onde é possível implementar recursos Azure, consoante políticas, disponibilidade e quotas atuais.",
            lu: "En Tool fir d’Kommandozeil, dat iwwerpréift, wou Azure-Ressourcen agesat kënne ginn, jee no Reegelen, Disponibilitéit an aktuelle Quoten.",
            de: "Ein Kommandozeilentool, das anhand von Richtlinien, Verfügbarkeit und aktuellen Kontingenten prüft, wo Azure-Ressourcen bereitgestellt werden können.",
            fr: "Un outil en ligne de commande qui vérifie où déployer des ressources Azure selon les règles, la disponibilité et les quotas actuels."
        },
        "projects.card.aws-image-converter": {
            en: "An AWS lab portal that converts and resizes images, previews the result, and provides a temporary download link.",
            pt: "Um portal de laboratório AWS que converte e redimensiona imagens, mostra o resultado e fornece uma ligação temporária para o descarregar.",
            lu: "En AWS-Laboportal, dat Biller konvertéiert a skaléiert, d’Resultat virweist an en temporären Downloadlink ubitt.",
            de: "Ein AWS-Laborportal, das Bilder konvertiert und skaliert, das Ergebnis in einer Vorschau zeigt und einen temporären Downloadlink bereitstellt.",
            fr: "Un portail de laboratoire AWS qui convertit et redimensionne les images, affiche le résultat et fournit un lien de téléchargement temporaire."
        },
        "projects.card.minicfl-az104": {
            en: "A CFL train simulator that demonstrates Azure administration across two regions, from permissions to monitoring.",
            pt: "Um simulador de comboios CFL que demonstra a administração do Azure em duas regiões, das permissões à monitorização.",
            lu: "En CFL-Zuchsimulator, deen d’Azure-Administratioun an zwou Regioune weist, vun de Rechter bis zur Iwwerwaachung.",
            de: "Ein CFL-Zugsimulator, der Azure-Administration in zwei Regionen zeigt, von Berechtigungen bis zur Überwachung.",
            fr: "Un simulateur de train CFL qui illustre l’administration Azure dans deux régions, de la gestion des accès à la supervision."
        },
        "projects.card.plane-cli": {
            en: "Manage Plane issues, projects, and cycles from the terminal, including on self-hosted instances.",
            pt: "Gere tarefas, projetos e ciclos do Plane a partir do terminal, incluindo em instâncias autoalojadas.",
            lu: "Verwalt Plane-Issuen, Projeten an Zyklen am Terminal, och op selwer gehosten Instanzen.",
            de: "Verwalte Plane-Issues, Projekte und Zyklen im Terminal, auch auf selbst gehosteten Instanzen.",
            fr: "Gérez les tickets, projets et cycles de Plane depuis le terminal, y compris sur les instances auto-hébergées."
        },
        "projects.card.solidtime-cli": {
            en: "Track time and manage tasks and projects from the terminal on self-hosted Solidtime or Solidtime Cloud.",
            pt: "Regista horas e gere tarefas e projetos no terminal, no Solidtime autoalojado ou no Solidtime Cloud.",
            lu: "Erfaass Zäit a verwalt Aufgaben a Projeten am Terminal, op selwer gehostetem Solidtime oder an der Solidtime Cloud.",
            de: "Erfasse Zeiten und verwalte Aufgaben und Projekte im Terminal, mit selbst gehostetem Solidtime oder Solidtime Cloud.",
            fr: "Suivez le temps et gérez les tâches et projets dans le terminal, avec Solidtime auto-hébergé ou Solidtime Cloud."
        },
        "projects.card.dolibarr-cli": {
            en: "Manage Dolibarr ERP records from the terminal, with machine-readable output and a dry-run option.",
            pt: "Gere registos do ERP Dolibarr no terminal, com saída legível por máquina e uma opção de simulação.",
            lu: "Verwalt Dolibarr-ERP-Donnéeën am Terminal, mat enger Ausgab fir Scripten an enger Optioun fir en Testlaf.",
            de: "Verwalte Datensätze im Dolibarr-ERP im Terminal, mit maschinenlesbarer Ausgabe und einem Testlauf ohne Änderungen.",
            fr: "Gérez les données de l’ERP Dolibarr depuis le terminal, avec une sortie exploitable par des scripts et un mode simulation."
        },
        "projects.card.infomaniak-cli": {
            en: "Manage Infomaniak mail, files, contacts, calendars, and kChat from the terminal.",
            pt: "Gere o correio, os ficheiros, os contactos, os calendários e o kChat da Infomaniak a partir do terminal.",
            lu: "Verwalt E-Mailen, Fichieren, Kontakter, Kalenneren a kChat vun Infomaniak am Terminal.",
            de: "Verwalte Infomaniak-Mails, Dateien, Kontakte, Kalender und kChat im Terminal.",
            fr: "Gérez les e-mails, fichiers, contacts, calendriers et kChat d’Infomaniak depuis le terminal."
        },
        "projects.card.sentinel": {
            en: "A Linux terminal monitor for system metrics, containers, and security logs, designed for low-power devices.",
            pt: "Um monitor de terminal para Linux que acompanha métricas do sistema, contentores e registos de segurança em dispositivos de baixo consumo.",
            lu: "En Linux-Monitor am Terminal fir Systemmetrieken, Container a Sécherheetsloggen, fir Apparater mat nidderegem Stroumverbrauch.",
            de: "Ein Linux-Terminalmonitor für Systemmetriken, Container und Sicherheitsprotokolle auf stromsparenden Geräten.",
            fr: "Un outil de supervision Linux dans le terminal pour les métriques, conteneurs et journaux de sécurité, conçu pour les appareils basse consommation."
        },
        "projects.card.teams-broadcast": {
            en: "Send one announcement to 20+ Teams channels and check delivery for each channel.",
            pt: "Envia um anúncio para mais de 20 canais do Teams e verifica a entrega em cada canal.",
            lu: "Schéck eng Ukënnegung un iwwer 20 Teams-Kanäl a préif fir all Kanal, ob se ukomm ass.",
            de: "Sende eine Ankündigung an mehr als 20 Teams-Kanäle und prüfe die Zustellung für jeden Kanal.",
            fr: "Diffusez une annonce dans plus de 20 canaux Teams et vérifiez sa livraison dans chaque canal."
        },
        "projects.card.gradingdino": {
            en: "A working Django app for teachers to enter grades and students to track their progress.",
            pt: "Uma aplicação funcional em Django que permite aos professores lançar notas e aos alunos acompanhar o seu progresso.",
            lu: "Eng funktionéierend Django-App, mat där Enseignanten Notten androen a Schüler hire Fortschrëtt verfollegen.",
            de: "Eine funktionsfähige Django-App, mit der Lehrkräfte Noten eintragen und Lernende ihren Fortschritt verfolgen können.",
            fr: "Une application Django fonctionnelle pour saisir les notes côté enseignants et suivre les progrès côté élèves."
        },
        "projects.card.rds-documentation": {
            en: "A Windows Server lab that lets students open managed desktops and apps from their own laptops.",
            pt: "Um laboratório Windows Server onde os alunos podem abrir ambientes de trabalho e aplicações geridos a partir dos seus portáteis.",
            lu: "E Windows-Server-Labo, an deem Schüler geréiert Desktopen an Apps vun hirem eegene Laptop aus opmaache kënnen.",
            de: "Ein Windows-Server-Labor, in dem Lernende verwaltete Desktops und Apps auf ihrem eigenen Laptop öffnen können.",
            fr: "Un laboratoire Windows Server où les élèves peuvent ouvrir des bureaux et applications administrés depuis leur propre ordinateur."
        },
        "projects.card.unraid-nas": {
            en: "A shared file server with per-user permissions, fault-tolerant storage, and an iSCSI disk tested from Windows.",
            pt: "Um servidor de ficheiros partilhado com permissões por utilizador, armazenamento tolerante a falhas e um disco iSCSI testado no Windows.",
            lu: "E gemeinsame Fichierserver mat Rechter pro Benotzer, feelertolerantem Späicher an engem iSCSI-Disk, dee vu Windows aus getest gouf.",
            de: "Ein gemeinsamer Dateiserver mit individuellen Zugriffsrechten, fehlertolerantem Speicher und einem unter Windows getesteten iSCSI-Datenträger.",
            fr: "Un serveur de fichiers partagé avec droits par utilisateur, stockage tolérant aux pannes et disque iSCSI testé depuis Windows."
        },
        "projects.card.vircl-virtualization": {
            en: "Two three-node clusters on four physical servers, with live migration demonstrated on VMware and Proxmox.",
            pt: "Dois clusters de três nós em quatro servidores físicos, com migração em direto demonstrada no VMware e no Proxmox.",
            lu: "Zwee Cluster mat jee dräi Noden op véier physesche Serveren, mat enger Demo vu Live-Migratioun op VMware a Proxmox.",
            de: "Zwei Cluster mit je drei Knoten auf vier physischen Servern, mit demonstrierter Live-Migration auf VMware und Proxmox.",
            fr: "Deux clusters de trois nœuds sur quatre serveurs physiques, avec une démonstration de migration à chaud sur VMware et Proxmox."
        },
        "projects.card.portfolio": {
            en: "A five-language portfolio built with HTML, CSS, and JavaScript, with global search and light and dark themes.",
            pt: "Um portfólio em cinco línguas, feito com HTML, CSS e JavaScript, com pesquisa global e temas claro e escuro.",
            lu: "E Portfolio a fënnef Sproochen, gebaut mat HTML, CSS a JavaScript, mat enger globaler Sich an hellem an donkelem Design.",
            de: "Ein Portfolio in fünf Sprachen, gebaut mit HTML, CSS und JavaScript, mit globaler Suche sowie hellem und dunklem Design.",
            fr: "Un portfolio en cinq langues réalisé en HTML, CSS et JavaScript, avec une recherche globale et des thèmes clair et sombre."
        },
        "projects.status.released": {
            en: "Released",
            pt: "Lançado",
            lu: "Verëffentlecht",
            de: "Veröffentlicht",
            fr: "Publié"
        },
        "projects.status.maintained": {
            en: "Maintained",
            pt: "Mantido",
            lu: "Gepfleegt",
            de: "Gepflegt",
            fr: "Maintenu"
        }
    };
    Object.assign(translations, extra);
})();
