/**
 * Teams Broadcast project page translations (two-lens case study)
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        "project.teamsbroadcast.badge": {
            en: "SCHOOL PROJECT",
            pt: "PROJETO ESCOLAR",
            lu: "SCHOULPROJET",
            de: "SCHULPROJEKT",
            fr: "PROJET SCOLAIRE"
        },
        "project.teamsbroadcast.hero.title": {
            en: "Teams Broadcast System",
            pt: "Sistema de Transmissão Teams",
            lu: "Teams Broadcast System",
            de: "Teams Broadcast System",
            fr: "Système de Diffusion Teams"
        },
        "project.teamsbroadcast.hero.subtitle": {
            en: "Power Platform solution that eliminates the manual hassle of broadcasting messages to 20+ Microsoft Teams channels. Built for teachers, students, and organizational leaders.",
            pt: "Solução Power Platform que elimina o trabalho manual de transmitir mensagens para mais de 20 canais do Microsoft Teams. Construído para professores, estudantes e líderes organizacionais.",
            lu: "Power Platform Léisung déi d'manuell Aarbecht ewechhuelt fir Messagen op 20+ Microsoft Teams Kanäl ze schécken. Gebaut fir Enseignanten, Schüler a Leaderen.",
            de: "Power Platform-Lösung, die die manuelle Arbeit beim Broadcasting von Nachrichten an 20+ Microsoft Teams-Kanäle eliminiert. Für Lehrer, Studenten und Organisationsleiter.",
            fr: "Solution Power Platform qui élimine le travail manuel de diffusion de messages vers 20+ canaux Microsoft Teams. Conçu pour les enseignants, étudiants et responsables."
        },

        "project.teamsbroadcast.glance.channels.label": {
            en: "channels reached at once",
            pt: "canais alcançados de uma vez",
            lu: "Kanäl op eemol erreecht",
            de: "Kanäle auf einmal erreicht",
            fr: "canaux atteints en une fois"
        },
        "project.teamsbroadcast.glance.click.label": {
            en: "click to send everywhere",
            pt: "clique para enviar para todos",
            lu: "Klick fir iwwerall ze schécken",
            de: "Klick, um überall zu senden",
            fr: "clic pour envoyer partout"
        },
        "project.teamsbroadcast.glance.services.label": {
            en: "Power Platform services wired together",
            pt: "serviços Power Platform interligados",
            lu: "Power Platform Servicer verbonnen",
            de: "Power Platform-Dienste verbunden",
            fr: "services Power Platform reliés"
        },
        "project.teamsbroadcast.glance.logged.label": {
            en: "of sends tracked and searchable",
            pt: "dos envios rastreados e pesquisáveis",
            lu: "vun de Sendunge verfollegt a sichbar",
            de: "der Sendungen verfolgt und durchsuchbar",
            fr: "des envois suivis et consultables"
        },

        "project.teamsbroadcast.arch.title": {
            en: "How a broadcast flows",
            pt: "Como flui uma transmissão",
            lu: "Wéi e Broadcast leeft",
            de: "Wie ein Broadcast abläuft",
            fr: "Comment circule une diffusion"
        },
        "project.teamsbroadcast.arch.user": {
            en: "User",
            pt: "Utilizador",
            lu: "Benotzer",
            de: "Benutzer",
            fr: "Utilisateur"
        },
        "project.teamsbroadcast.arch.user.meta": {
            en: "any device",
            pt: "qualquer dispositivo",
            lu: "all Apparat",
            de: "beliebiges Gerät",
            fr: "tout appareil"
        },
        "project.teamsbroadcast.arch.user.spec": {
            en: "teacher · student · director",
            pt: "professor · estudante · diretor",
            lu: "Enseignant · Schüler · Direkter",
            de: "Lehrer · Student · Direktor",
            fr: "enseignant · étudiant · directeur"
        },
        "project.teamsbroadcast.arch.apps.title": {
            en: "Power Apps",
            pt: "Power Apps",
            lu: "Power Apps",
            de: "Power Apps",
            fr: "Power Apps"
        },
        "project.teamsbroadcast.arch.apps.meta": {
            en: "canvas app",
            pt: "canvas app",
            lu: "Canvas App",
            de: "Canvas-App",
            fr: "application canvas"
        },
        "project.teamsbroadcast.arch.apps.spec": {
            en: "select channels · compose · state guard",
            pt: "selecionar canais · compor · proteção de estado",
            lu: "Kanäl auswielen · schreiwen · State-Schutz",
            de: "Kanäle wählen · verfassen · State-Schutz",
            fr: "choisir les canaux · composer · garde d'état"
        },
        "project.teamsbroadcast.arch.trigger": {
            en: "selection + message",
            pt: "seleção + mensagem",
            lu: "Auswiel + Message",
            de: "Auswahl + Nachricht",
            fr: "sélection + message"
        },
        "project.teamsbroadcast.arch.tenant": {
            en: "Power Platform · Microsoft 365 tenant",
            pt: "Power Platform · tenant Microsoft 365",
            lu: "Power Platform · Microsoft 365 Tenant",
            de: "Power Platform · Microsoft 365-Tenant",
            fr: "Power Platform · tenant Microsoft 365"
        },
        "project.teamsbroadcast.arch.fetch.title": {
            en: "Fetch flow",
            pt: "Fluxo de obtenção",
            lu: "Fetch-Flow",
            de: "Abruf-Flow",
            fr: "Flux de récupération"
        },
        "project.teamsbroadcast.arch.fetch.meta": {
            en: "on app open",
            pt: "ao abrir a app",
            lu: "beim App-Opmaachen",
            de: "beim App-Start",
            fr: "à l'ouverture de l'app"
        },
        "project.teamsbroadcast.arch.fetch.spec": {
            en: "lists every Team and channel",
            pt: "lista todas as Teams e canais",
            lu: "lëscht all Team a Kanal",
            de: "listet alle Teams und Kanäle",
            fr: "liste chaque Team et canal"
        },
        "project.teamsbroadcast.arch.broadcast.title": {
            en: "Broadcast flow",
            pt: "Fluxo de transmissão",
            lu: "Broadcast-Flow",
            de: "Broadcast-Flow",
            fr: "Flux de diffusion"
        },
        "project.teamsbroadcast.arch.broadcast.meta": {
            en: "apply to each",
            pt: "aplicar a cada",
            lu: "op jiddereen uwenden",
            de: "auf jeden anwenden",
            fr: "appliquer à chacun"
        },
        "project.teamsbroadcast.arch.broadcast.spec": {
            en: "posts the message per channel",
            pt: "publica a mensagem por canal",
            lu: "publizéiert de Message pro Kanal",
            de: "postet die Nachricht je Kanal",
            fr: "publie le message par canal"
        },
        "project.teamsbroadcast.arch.log.title": {
            en: "Dataverse",
            pt: "Dataverse",
            lu: "Dataverse",
            de: "Dataverse",
            fr: "Dataverse"
        },
        "project.teamsbroadcast.arch.log.meta": {
            en: "audit table",
            pt: "tabela de auditoria",
            lu: "Audit-Tabell",
            de: "Audit-Tabelle",
            fr: "table d'audit"
        },
        "project.teamsbroadcast.arch.log.spec": {
            en: "per-channel delivery status",
            pt: "estado de entrega por canal",
            lu: "Liwwerstatus pro Kanal",
            de: "Zustellstatus pro Kanal",
            fr: "statut de livraison par canal"
        },
        "project.teamsbroadcast.arch.connector": {
            en: "Teams connector",
            pt: "conector Teams",
            lu: "Teams-Connector",
            de: "Teams-Connector",
            fr: "connecteur Teams"
        },
        "project.teamsbroadcast.arch.teams.title": {
            en: "Microsoft Teams",
            pt: "Microsoft Teams",
            lu: "Microsoft Teams",
            de: "Microsoft Teams",
            fr: "Microsoft Teams"
        },
        "project.teamsbroadcast.arch.teams.meta": {
            en: "20+ channels",
            pt: "20+ canais",
            lu: "20+ Kanäl",
            de: "20+ Kanäle",
            fr: "20+ canaux"
        },
        "project.teamsbroadcast.arch.teams.spec": {
            en: "message delivered and confirmed",
            pt: "mensagem entregue e confirmada",
            lu: "Message geliwwert a bestätegt",
            de: "Nachricht zugestellt und bestätigt",
            fr: "message livré et confirmé"
        },
        "project.teamsbroadcast.arch.note": {
            en: "Each send returns success or failure per channel, so a failed post is visible instead of silently lost. During development it runs against real Teams with dedicated test channels — no school channel ever gets spammed.",
            pt: "Cada envio devolve sucesso ou falha por canal, por isso uma publicação falhada fica visível em vez de se perder em silêncio. Durante o desenvolvimento corre contra Teams reais com canais de teste dedicados — nenhum canal da escola é incomodado.",
            lu: "All Sendung gëtt Erfolleg oder Feelschlag pro Kanal zréck, sou datt e verflüchtene Post sichtbar ass amplaz roueg verluer ze goen. Während der Entwécklung leeft et géint richteg Teams mat spezielle Test-Kanäl — kee Schoulkanal gëtt jeemools gespamt.",
            de: "Jede Sendung gibt Erfolg oder Fehler pro Kanal zurück, sodass ein fehlgeschlagener Post sichtbar ist, statt still verloren zu gehen. Während der Entwicklung läuft es gegen echte Teams mit dedizierten Testkanälen — kein Schulkanal wird je zugespammt.",
            fr: "Chaque envoi renvoie un succès ou un échec par canal, donc une publication ratée est visible au lieu d'être silencieusement perdue. Pendant le développement, il tourne sur de vrais Teams avec des canaux de test dédiés — aucun canal scolaire n'est jamais spammé."
        },

        "project.teamsbroadcast.does.title": {
            en: "What it does",
            pt: "O que faz",
            lu: "Wat et mécht",
            de: "Was es macht",
            fr: "Ce qu'il fait"
        },
        "project.teamsbroadcast.does.select.title": {
            en: "Pick every channel at once",
            pt: "Escolhe todos os canais de uma vez",
            lu: "Wiel all Kanal op eemol",
            de: "Alle Kanäle auf einmal wählen",
            fr: "Choisir tous les canaux d'un coup"
        },
        "project.teamsbroadcast.does.select.desc": {
            en: "Tick all the channels you want in one list instead of opening 20 conversations one by one.",
            pt: "Marca todos os canais que queres numa única lista em vez de abrir 20 conversas uma a uma.",
            lu: "Hak all d'Kanäl déi s de wëlls an enger Lëscht of, amplaz 20 Gespréicher een no deem aneren opzemaachen.",
            de: "Hake alle gewünschten Kanäle in einer Liste ab, statt 20 Unterhaltungen einzeln zu öffnen.",
            fr: "Coche tous les canaux voulus dans une seule liste au lieu d'ouvrir 20 conversations une par une."
        },
        "project.teamsbroadcast.does.once.title": {
            en: "Write once, send everywhere",
            pt: "Escreve uma vez, envia para todos",
            lu: "Eemol schreiwen, iwwerall schécken",
            de: "Einmal schreiben, überall senden",
            fr: "Écris une fois, envoie partout"
        },
        "project.teamsbroadcast.does.once.desc": {
            en: "Type your subject and message a single time, then broadcast it to every selected channel with one click.",
            pt: "Escreve o assunto e a mensagem uma única vez e transmite-os para cada canal selecionado com um clique.",
            lu: "Schreif däi Betreff a Message ee eenzegt Mol, a verbreet se duerno mat engem Klick op all ausgewielten Kanal.",
            de: "Tippe Betreff und Nachricht ein einziges Mal und sende sie dann mit einem Klick an jeden ausgewählten Kanal.",
            fr: "Saisis l'objet et le message une seule fois, puis diffuse-les vers chaque canal sélectionné en un clic."
        },
        "project.teamsbroadcast.does.realtime.title": {
            en: "Watch it land live",
            pt: "Vê chegar em tempo real",
            lu: "Kuck et live ukommen",
            de: "Live ankommen sehen",
            fr: "Vois-le arriver en direct"
        },
        "project.teamsbroadcast.does.realtime.desc": {
            en: "A clear status shows each message going out and confirms exactly which channels received it.",
            pt: "Um estado claro mostra cada mensagem a sair e confirma exatamente que canais a receberam.",
            lu: "E kloere Status weist all Message erausgoen a bestätegt genee wéi eng Kanäl en kritt hunn.",
            de: "Ein klarer Status zeigt jede ausgehende Nachricht und bestätigt genau, welche Kanäle sie erhalten haben.",
            fr: "Un statut clair montre chaque message partir et confirme exactement quels canaux l'ont reçu."
        },
        "project.teamsbroadcast.does.history.title": {
            en: "Keep a searchable history",
            pt: "Mantém um histórico pesquisável",
            lu: "Halt eng sichbar Geschicht",
            de: "Eine durchsuchbare Historie behalten",
            fr: "Garde un historique consultable"
        },
        "project.teamsbroadcast.does.history.desc": {
            en: "Every broadcast is logged with who sent what, when, and where — searchable any time you need proof.",
            pt: "Cada transmissão é registada com quem enviou o quê, quando e onde — pesquisável sempre que precises de prova.",
            lu: "All Broadcast gëtt geloggt mat wien wat, wéini a wou geschéckt huet — sichbar wann s de e Beweis brauchs.",
            de: "Jeder Broadcast wird protokolliert mit wer was, wann und wohin gesendet hat — durchsuchbar, wann immer du einen Nachweis brauchst.",
            fr: "Chaque diffusion est journalisée avec qui a envoyé quoi, quand et où — consultable dès que tu as besoin d'une preuve."
        },

        "project.teamsbroadcast.problem.title": {
            en: "The Problem",
            pt: "O Problema",
            lu: "De Problem",
            de: "Das Problem",
            fr: "Le Problème"
        },
        "project.teamsbroadcast.problem.body": {
            en: "Sending the same message to 20+ Teams channels manually is tedious. You have to open each one, copy-paste, and hope you didn't forget any. There's no way to track what was sent where.",
            pt: "Enviar a mesma mensagem para mais de 20 canais do Teams manualmente é tedioso. Tens de abrir cada um, copiar e colar, e esperar que não te tenhas esquecido de nenhum. Não há forma de rastrear o que foi enviado para onde.",
            lu: "Déiselwecht Message manuell op 20+ Teams Kanäl ze schécken ass miisam. Du muss jiddereen opmaachen, kopéieren a pasten, an hoffen datt s du keen vergiess hues. Et gëtt kee Wee fir ze verfollegen wat wou geschéckt gouf.",
            de: "Dieselbe Nachricht manuell an 20+ Teams-Kanäle zu senden ist mühsam. Du musst jeden öffnen, kopieren-einfügen und hoffen, dass du keinen vergessen hast. Es gibt keine Möglichkeit zu verfolgen, was wohin gesendet wurde.",
            fr: "Envoyer le même message à 20+ canaux Teams manuellement est fastidieux. Il faut ouvrir chacun, copier-coller, et espérer n'en avoir oublié aucun. Il n'y a aucun moyen de suivre ce qui a été envoyé où."
        },
        "project.teamsbroadcast.problem.solution": {
            en: "This tool flips that around: select all channels at once, write your message once, and broadcast everywhere with one click — with full logs of exactly what was sent where.",
            pt: "Esta ferramenta inverte isso: seleciona todos os canais de uma vez, escreve a mensagem uma vez e transmite para todos com um clique — com registos completos do que foi exatamente enviado para onde.",
            lu: "Dëst Tool dréit dat ëm: wiel all Kanäl op eemol, schreif däi Message eemol, a verbreet iwwerall mat engem Klick — mat komplette Logge vu genee wat wou geschéckt gouf.",
            de: "Dieses Tool dreht das um: alle Kanäle auf einmal auswählen, die Nachricht einmal schreiben und mit einem Klick überall senden — mit vollständigen Logs, was genau wohin gesendet wurde.",
            fr: "Cet outil inverse la situation : sélectionne tous les canaux d'un coup, écris ton message une fois et diffuse partout en un clic — avec des logs complets de ce qui a été envoyé exactement où."
        },
        "project.teamsbroadcast.imagecaption1": {
            en: "Main broadcast interface: channel selection, message composition, and real-time sending status. Uses real Teams with test channels to avoid spamming school channels during development.",
            pt: "Interface principal de transmissão: seleção de canais, composição de mensagens e estado de envio em tempo real. Usa Teams reais com canais de teste para evitar spam nos canais escolares durante o desenvolvimento.",
            lu: "Haaptbroadcast Interface: Kanal Auswiel, Message Kompositioun, an Echtzäit Schéck-Status. Benotzt richteg Teams mat Test-Kanäl fir Spam op Schoulkanäl während der Entwécklung ze vermeiden.",
            de: "Haupt-Broadcast-Oberfläche: Kanalauswahl, Nachrichtenkomposition und Echtzeit-Sendestatus. Verwendet echte Teams mit Testkanälen, um Spam in Schulkanälen während der Entwicklung zu vermeiden.",
            fr: "Interface principale de diffusion : sélection des canaux, composition de messages et statut d'envoi en temps réel. Utilise de vrais Teams avec des canaux de test pour éviter le spam sur les canaux scolaires pendant le développement."
        },

        "project.teamsbroadcast.stack.title": {
            en: "Under the hood",
            pt: "Por dentro",
            lu: "Ënnert der Hued",
            de: "Unter der Haube",
            fr: "Sous le capot"
        },
        "project.teamsbroadcast.stack.intro": {
            en: "Three Power Platform services, cleanly split into UI, logic, and data layers — plus the native Teams connector for delivery.",
            pt: "Três serviços Power Platform, claramente divididos em camadas de UI, lógica e dados — mais o conector nativo do Teams para a entrega.",
            lu: "Dräi Power Platform Servicer, propper opgedeelt an UI-, Logik- an Date-Schichten — plus den nativen Teams-Connector fir d'Liwwerung.",
            de: "Drei Power Platform-Dienste, sauber in UI-, Logik- und Datenschichten getrennt — plus der native Teams-Connector für die Zustellung.",
            fr: "Trois services Power Platform, proprement répartis en couches UI, logique et données — plus le connecteur Teams natif pour la livraison."
        },
        "project.teamsbroadcast.stack.apps.title": {
            en: "Power Apps — Canvas frontend",
            pt: "Power Apps — Frontend canvas",
            lu: "Power Apps — Canvas-Frontend",
            de: "Power Apps — Canvas-Frontend",
            fr: "Power Apps — Frontend canvas"
        },
        "project.teamsbroadcast.stack.apps.ui": {
            en: "<strong>Single-screen UX</strong>: channel multi-select, a subject line, and a rich message body live on one canvas, with input validation before anything can be sent.",
            pt: "<strong>UX de ecrã único</strong>: seleção múltipla de canais, uma linha de assunto e um corpo de mensagem rico vivem num único canvas, com validação de entrada antes de qualquer envio.",
            lu: "<strong>Een-Ecran-UX</strong>: Multi-Auswiel vu Kanäl, eng Betreffzeil an e räiche Message-Kierper liewen op engem Canvas, mat Input-Validatioun ier eppes ka geschéckt ginn.",
            de: "<strong>Einzelbildschirm-UX</strong>: Mehrfachauswahl von Kanälen, eine Betreffzeile und ein Rich-Text-Nachrichtenkörper leben auf einem Canvas, mit Eingabevalidierung, bevor etwas gesendet werden kann.",
            fr: "<strong>UX sur un seul écran</strong> : sélection multiple de canaux, une ligne d'objet et un corps de message enrichi sur un même canvas, avec validation des entrées avant tout envoi."
        },
        "project.teamsbroadcast.stack.apps.state": {
            en: "<strong>Explicit state machine</strong>: idle → sending → success/error drives every button and indicator, so the UI always reflects what the backend is actually doing.",
            pt: "<strong>Máquina de estados explícita</strong>: inativo → a enviar → sucesso/erro comanda cada botão e indicador, por isso a UI reflete sempre o que o backend está realmente a fazer.",
            lu: "<strong>Explizit State-Machine</strong>: idle → schécken → Erfolleg/Fehler steiert all Knäppchen an Indikator, sou datt d'UI ëmmer weist wat de Backend tatsächlech mécht.",
            de: "<strong>Explizite State-Machine</strong>: idle → senden → Erfolg/Fehler steuert jeden Button und Indikator, sodass die UI immer widerspiegelt, was das Backend tatsächlich tut.",
            fr: "<strong>Machine à états explicite</strong> : inactif → envoi → succès/erreur pilote chaque bouton et indicateur, donc l'UI reflète toujours ce que fait réellement le backend."
        },
        "project.teamsbroadcast.stack.apps.guard": {
            en: "<strong>Duplicate-send guard</strong>: the send button locks while a broadcast is in flight, preventing the classic double-click that would post everything twice.",
            pt: "<strong>Proteção contra envio duplicado</strong>: o botão de envio bloqueia enquanto uma transmissão está em curso, evitando o clássico duplo-clique que publicaria tudo duas vezes.",
            lu: "<strong>Schutz géint duebel Schécken</strong>: de Schéck-Knäppchen spaart wärend e Broadcast leeft, fir den klasseschen Duebelklick ze verhënneren deen alles zweemol géif posten.",
            de: "<strong>Schutz vor Doppelsendung</strong>: der Senden-Button sperrt, während ein Broadcast läuft, und verhindert den klassischen Doppelklick, der alles zweimal posten würde.",
            fr: "<strong>Garde anti-doublon</strong> : le bouton d'envoi se verrouille pendant une diffusion en cours, évitant le classique double-clic qui publierait tout en double."
        },
        "project.teamsbroadcast.stack.automate.title": {
            en: "Power Automate — Two cloud flows",
            pt: "Power Automate — Dois fluxos na cloud",
            lu: "Power Automate — Zwee Cloud-Flows",
            de: "Power Automate — Zwei Cloud-Flows",
            fr: "Power Automate — Deux flux cloud"
        },
        "project.teamsbroadcast.stack.automate.fetch": {
            en: "<strong>Fetch flow</strong>: on app open (or \"Refresh channels\") it pulls every Team and channel the user can access and hands the list back to Power Apps.",
            pt: "<strong>Fluxo de obtenção</strong>: ao abrir a app (ou em \"Atualizar canais\") obtém todas as Teams e canais a que o utilizador tem acesso e devolve a lista ao Power Apps.",
            lu: "<strong>Fetch-Flow</strong>: beim App-Opmaachen (oder \"Kanäl aktualiséieren\") hëlt en all Team a Kanal op déi de Benotzer Zougrëff huet a gëtt d'Lëscht zréck un Power Apps.",
            de: "<strong>Abruf-Flow</strong>: beim App-Start (oder \"Kanäle aktualisieren\") holt er jedes Team und jeden Kanal, auf die der Benutzer zugreifen kann, und gibt die Liste an Power Apps zurück.",
            fr: "<strong>Flux de récupération</strong> : à l'ouverture de l'app (ou via « Actualiser les canaux ») il récupère chaque Team et canal accessible à l'utilisateur et renvoie la liste à Power Apps."
        },
        "project.teamsbroadcast.stack.automate.send": {
            en: "<strong>Broadcast flow</strong>: an <em>apply to each</em> loop posts the message to every selected channel through the native Teams connector.",
            pt: "<strong>Fluxo de transmissão</strong>: um ciclo <em>aplicar a cada</em> publica a mensagem em cada canal selecionado através do conector nativo do Teams.",
            lu: "<strong>Broadcast-Flow</strong>: e <em>op jiddereen uwenden</em>-Loop publizéiert de Message op all ausgewielten Kanal iwwer den nativen Teams-Connector.",
            de: "<strong>Broadcast-Flow</strong>: eine <em>auf jeden anwenden</em>-Schleife postet die Nachricht über den nativen Teams-Connector an jeden ausgewählten Kanal.",
            fr: "<strong>Flux de diffusion</strong> : une boucle <em>appliquer à chacun</em> publie le message sur chaque canal sélectionné via le connecteur Teams natif."
        },
        "project.teamsbroadcast.stack.automate.results": {
            en: "<strong>Per-channel results</strong>: each post returns success or failure individually, so a single failed channel never blocks the rest of the broadcast.",
            pt: "<strong>Resultados por canal</strong>: cada publicação devolve sucesso ou falha individualmente, por isso um único canal falhado nunca bloqueia o resto da transmissão.",
            lu: "<strong>Resultater pro Kanal</strong>: all Post gëtt Erfolleg oder Feelschlag eenzel zréck, sou datt ee verflüchtene Kanal ni de Rescht vum Broadcast blockéiert.",
            de: "<strong>Ergebnisse pro Kanal</strong>: jeder Post gibt Erfolg oder Fehler einzeln zurück, sodass ein einzelner fehlgeschlagener Kanal nie den Rest des Broadcasts blockiert.",
            fr: "<strong>Résultats par canal</strong> : chaque publication renvoie un succès ou un échec individuellement, donc un seul canal en échec ne bloque jamais le reste de la diffusion."
        },
        "project.teamsbroadcast.stack.data.title": {
            en: "Dataverse — Audit store",
            pt: "Dataverse — Repositório de auditoria",
            lu: "Dataverse — Audit-Späicher",
            de: "Dataverse — Audit-Speicher",
            fr: "Dataverse — Stockage d'audit"
        },
        "project.teamsbroadcast.stack.data.store": {
            en: "<strong>Every broadcast recorded</strong>: subject, body, sender, timestamp, target channels, and the per-channel delivery status are written on each send.",
            pt: "<strong>Cada transmissão registada</strong>: assunto, corpo, remetente, carimbo de data/hora, canais de destino e o estado de entrega por canal são gravados em cada envio.",
            lu: "<strong>All Broadcast opgeholl</strong>: Betreff, Kierper, Sender, Zäitstempel, Zilkanäl, an de Liwwerstatus pro Kanal ginn bei all Sendung geschriwwen.",
            de: "<strong>Jeder Broadcast erfasst</strong>: Betreff, Text, Absender, Zeitstempel, Zielkanäle und der Zustellstatus pro Kanal werden bei jeder Sendung gespeichert.",
            fr: "<strong>Chaque diffusion enregistrée</strong> : objet, corps, expéditeur, horodatage, canaux cibles et statut de livraison par canal sont écrits à chaque envoi."
        },
        "project.teamsbroadcast.stack.data.search": {
            en: "<strong>Searchable history</strong>: the log screen lets you search and filter past broadcasts, turning \"did it actually go out?\" into a one-second lookup.",
            pt: "<strong>Histórico pesquisável</strong>: o ecrã de registos permite pesquisar e filtrar transmissões passadas, transformando o \"chegou mesmo a sair?\" numa consulta de um segundo.",
            lu: "<strong>Sichbar Geschicht</strong>: den Logg-Ecran léisst dech vergaangen Broadcasts sichen a filteren, an dréit d'\"ass et tatsächlech erausgaangen?\" an eng Eng-Sekonn-Recherche.",
            de: "<strong>Durchsuchbare Historie</strong>: der Log-Bildschirm lässt dich vergangene Broadcasts durchsuchen und filtern und macht aus \"ist es wirklich rausgegangen?\" eine Ein-Sekunden-Abfrage.",
            fr: "<strong>Historique consultable</strong> : l'écran de logs permet de rechercher et filtrer les diffusions passées, transformant « est-ce vraiment parti ? » en une recherche d'une seconde."
        },
        "project.teamsbroadcast.stack.teams.title": {
            en: "Microsoft Teams — Delivery",
            pt: "Microsoft Teams — Entrega",
            lu: "Microsoft Teams — Liwwerung",
            de: "Microsoft Teams — Zustellung",
            fr: "Microsoft Teams — Livraison"
        },
        "project.teamsbroadcast.stack.teams.connector": {
            en: "<strong>Native connector, no custom code</strong>: messages are posted through Microsoft's own Teams connector, so delivery and permissions follow the tenant's existing rules.",
            pt: "<strong>Conector nativo, sem código personalizado</strong>: as mensagens são publicadas através do próprio conector Teams da Microsoft, por isso a entrega e as permissões seguem as regras existentes do tenant.",
            lu: "<strong>Nativen Connector, kee personaliséierte Code</strong>: Messagen ginn iwwer de Microsoft sengem eegene Teams-Connector gepost, sou datt Liwwerung a Permissiounen de bestoende Reegele vum Tenant follegen.",
            de: "<strong>Nativer Connector, kein eigener Code</strong>: Nachrichten werden über Microsofts eigenen Teams-Connector gepostet, sodass Zustellung und Berechtigungen den bestehenden Regeln des Tenants folgen.",
            fr: "<strong>Connecteur natif, aucun code sur mesure</strong> : les messages sont publiés via le connecteur Teams de Microsoft, donc la livraison et les permissions suivent les règles existantes du tenant."
        },
        "project.teamsbroadcast.stack.teams.confirm": {
            en: "<strong>Confirmed delivery</strong>: the connector's response feeds straight back into the status indicator and the Dataverse audit trail.",
            pt: "<strong>Entrega confirmada</strong>: a resposta do conector alimenta diretamente o indicador de estado e a trilha de auditoria do Dataverse.",
            lu: "<strong>Bestätegt Liwwerung</strong>: d'Äntwert vum Connector fléisst direkt zréck an den Status-Indikator an den Dataverse Audit-Trail.",
            de: "<strong>Bestätigte Zustellung</strong>: die Antwort des Connectors fließt direkt zurück in den Statusindikator und den Dataverse-Audit-Trail.",
            fr: "<strong>Livraison confirmée</strong> : la réponse du connecteur alimente directement l'indicateur de statut et la piste d'audit Dataverse."
        },

        "project.teamsbroadcast.why.title": {
            en: "Why I built it",
            pt: "Porque o construí",
            lu: "Firwat ech et gebaut hunn",
            de: "Warum ich es gebaut habe",
            fr: "Pourquoi je l'ai construit"
        },
        "project.teamsbroadcast.why.body1": {
            en: "A teacher mentioned how much of a chore it was to send the same announcement to 20+ Teams channels by hand — open each one, copy, paste, repeat, and still wonder if one got missed. It was a <strong>real, boring problem</strong> begging for automation.",
            pt: "Um professor mencionou como era uma chatice enviar o mesmo anúncio para mais de 20 canais do Teams à mão — abrir cada um, copiar, colar, repetir, e ainda assim ficar na dúvida se faltou algum. Era um <strong>problema real e aborrecido</strong> a pedir automação.",
            lu: "En Enseignant huet ernimmt wéi vill Aarbecht et war déiselwecht Ukënnegung op 20+ Teams Kanäl mat der Hand ze schécken — jiddereen opmaachen, kopéieren, pasten, widderhuelen, an sech nach froen ob ee vergiess gouf. Et war e <strong>richtegen, langweilege Problem</strong> deen no Automatisatioun gefrot huet.",
            de: "Ein Lehrer erwähnte, was für eine Plackerei es war, dieselbe Ankündigung von Hand an 20+ Teams-Kanäle zu senden — jeden öffnen, kopieren, einfügen, wiederholen und sich trotzdem fragen, ob einer vergessen wurde. Es war ein <strong>echtes, langweiliges Problem</strong>, das nach Automatisierung schrie.",
            fr: "Un enseignant a évoqué la corvée d'envoyer la même annonce à 20+ canaux Teams à la main — ouvrir chacun, copier, coller, recommencer, et se demander quand même si l'on en avait oublié un. C'était un <strong>vrai problème ennuyeux</strong> qui appelait l'automatisation."
        },
        "project.teamsbroadcast.why.body2": {
            en: "I chose Power Platform on purpose: it's the low-code stack the school and many organizations already run on. The challenge was to treat it like real engineering — <strong>separate UI, logic, and data layers</strong>, proper state management, and an audit trail from day one.",
            pt: "Escolhi Power Platform de propósito: é a stack low-code que a escola e muitas organizações já usam. O desafio foi tratá-la como engenharia a sério — <strong>camadas separadas de UI, lógica e dados</strong>, gestão de estado adequada e uma trilha de auditoria desde o primeiro dia.",
            lu: "Ech hunn Power Platform mat Absicht gewielt: et ass de Low-Code-Stack op deem d'Schoul a vill Organisatiounen scho lafen. D'Erausfuerderung war et wéi richteg Ingenieurskonscht ze behandelen — <strong>getrennten UI-, Logik- an Date-Schichten</strong>, korrekt State-Management, an en Audit-Trail vum éischten Dag un.",
            de: "Ich habe Power Platform bewusst gewählt: es ist der Low-Code-Stack, auf dem die Schule und viele Organisationen bereits laufen. Die Herausforderung war, es wie echtes Engineering zu behandeln — <strong>getrennte UI-, Logik- und Datenschichten</strong>, ordentliches State-Management und ein Audit-Trail vom ersten Tag an.",
            fr: "J'ai choisi Power Platform à dessein : c'est la stack low-code que l'école et de nombreuses organisations utilisent déjà. Le défi était de la traiter comme de la vraie ingénierie — <strong>couches UI, logique et données séparées</strong>, une gestion d'état correcte et une piste d'audit dès le premier jour."
        },
        "project.teamsbroadcast.why.body3": {
            en: "The result is a tool teachers, students, project leads, and directors can all use to push consistent messaging across many channels — and a graded project that proves <strong>low-code can still be built like a product</strong>.",
            pt: "O resultado é uma ferramenta que professores, estudantes, líderes de projeto e diretores podem usar para enviar mensagens consistentes por muitos canais — e um projeto avaliado que prova que <strong>low-code também pode ser construído como um produto</strong>.",
            lu: "D'Resultat ass en Tool deen Enseignanten, Schüler, Projet-Leaderen an Direkteren all benotze kënne fir konsequent Messagen iwwer vill Kanäl ze schécken — an e bewäerte Projet deen beweist datt <strong>Low-Code och wéi e Produkt gebaut ka ginn</strong>.",
            de: "Das Ergebnis ist ein Werkzeug, das Lehrer, Studenten, Projektleiter und Direktoren alle nutzen können, um konsistente Nachrichten über viele Kanäle zu senden — und ein benotetes Projekt, das beweist, dass <strong>Low-Code trotzdem wie ein Produkt gebaut werden kann</strong>.",
            fr: "Le résultat est un outil que les enseignants, étudiants, chefs de projet et directeurs peuvent tous utiliser pour diffuser des messages cohérents sur de nombreux canaux — et un projet noté qui prouve que <strong>le low-code peut quand même se construire comme un produit</strong>."
        },
        "project.teamsbroadcast.imagecaption2": {
            en: "Broadcast logs: complete history with search, filters, and per-channel delivery status",
            pt: "Registos de transmissão: histórico completo com pesquisa, filtros e estado de entrega por canal",
            lu: "Broadcast Loggen: komplett Geschicht mat Sich, Filteren, a Liwwerstatus pro Kanal",
            de: "Broadcast-Logs: vollständige Historie mit Suche, Filtern und Zustellstatus pro Kanal",
            fr: "Logs de diffusion : historique complet avec recherche, filtres et statut de livraison par canal"
        },

        "project.teamsbroadcast.lessons.title": {
            en: "Lessons learned",
            pt: "Lições aprendidas",
            lu: "Geléiert Lektioune",
            de: "Gelernte Lektionen",
            fr: "Leçons apprises"
        },
        "project.teamsbroadcast.lessons.lowcode.title": {
            en: "Low-code ≠ low-quality",
            pt: "Low-code ≠ baixa qualidade",
            lu: "Low-Code ≠ schlecht Qualitéit",
            de: "Low-Code ≠ niedrige Qualität",
            fr: "Low-code ≠ basse qualité"
        },
        "project.teamsbroadcast.lessons.lowcode.desc": {
            en: "With real design patterns — layered architecture and clean state — low-code tools can absolutely be production-grade.",
            pt: "Com padrões de design a sério — arquitetura em camadas e estado limpo — as ferramentas low-code podem perfeitamente ter qualidade de produção.",
            lu: "Mat richtegen Design-Patternen — geschichtener Architektur a propperem State — kënnen Low-Code-Tools absolut Produktiounsqualitéit hunn.",
            de: "Mit echten Design-Patterns — geschichteter Architektur und sauberem State — können Low-Code-Tools absolut produktionsreif sein.",
            fr: "Avec de vrais patterns de conception — architecture en couches et état propre — les outils low-code peuvent tout à fait être de qualité production."
        },
        "project.teamsbroadcast.lessons.state.title": {
            en: "State management is everything",
            pt: "A gestão de estado é tudo",
            lu: "State-Management ass alles",
            de: "State-Management ist alles",
            fr: "La gestion d'état est essentielle"
        },
        "project.teamsbroadcast.lessons.state.desc": {
            en: "For async sends, a clear idle/sending/success/error model is what keeps the UI honest and prevents double posts.",
            pt: "Para envios assíncronos, um modelo claro de inativo/a enviar/sucesso/erro é o que mantém a UI honesta e evita publicações duplicadas.",
            lu: "Fir async Sendungen ass e kloert idle/schécken/Erfolleg/Fehler-Modell dat wat d'UI éierlech hält an duebel Posts verhënnert.",
            de: "Für asynchrone Sendungen sorgt ein klares idle/senden/Erfolg/Fehler-Modell dafür, dass die UI ehrlich bleibt und Doppelposts verhindert werden.",
            fr: "Pour les envois asynchrones, un modèle clair inactif/envoi/succès/erreur est ce qui garde l'UI honnête et évite les publications en double."
        },
        "project.teamsbroadcast.lessons.limits.title": {
            en: "Work around the platform",
            pt: "Contornar a plataforma",
            lu: "Ronderëm d'Plattform schaffen",
            de: "Um die Plattform herum arbeiten",
            fr: "Contourner la plateforme"
        },
        "project.teamsbroadcast.lessons.limits.desc": {
            en: "Premium features and quirky conventions forced creative workarounds without letting the UX suffer for it.",
            pt: "Funcionalidades premium e convenções peculiares obrigaram a soluções criativas sem deixar a UX sofrer com isso.",
            lu: "Premium-Features a komesch Konventiounen hu kreativ Léisunge gefuerdert ouni datt d'UX dorënner leit.",
            de: "Premium-Funktionen und eigenwillige Konventionen erzwangen kreative Workarounds, ohne die UX darunter leiden zu lassen.",
            fr: "Les fonctionnalités premium et les conventions particulières ont imposé des contournements créatifs sans faire souffrir l'UX."
        },
        "project.teamsbroadcast.lessons.feedback.title": {
            en: "Feedback beats guessing",
            pt: "Feedback é melhor que adivinhar",
            lu: "Feedback ass besser wéi roden",
            de: "Feedback schlägt Raten",
            fr: "Le feedback vaut mieux que deviner"
        },
        "project.teamsbroadcast.lessons.feedback.desc": {
            en: "Users need clear status at every step. Without it they re-click, panic, and lose trust in the tool.",
            pt: "Os utilizadores precisam de um estado claro em cada passo. Sem ele, voltam a clicar, entram em pânico e perdem a confiança na ferramenta.",
            lu: "Benotzer brauche kloere Status op all Schrëtt. Ouni dat klicke se nees, geroden a Panik, a verléieren d'Vertrauen an den Tool.",
            de: "Benutzer brauchen bei jedem Schritt einen klaren Status. Ohne ihn klicken sie erneut, geraten in Panik und verlieren das Vertrauen in das Werkzeug.",
            fr: "Les utilisateurs ont besoin d'un statut clair à chaque étape. Sans cela, ils recliquent, paniquent et perdent confiance dans l'outil."
        },

        "project.teamsbroadcast.projectinfo.title": {
            en: "Project Info",
            pt: "Informações do Projeto",
            lu: "Projet Info",
            de: "Projektinfo",
            fr: "Info Projet"
        },
        "project.teamsbroadcast.projectinfo.body": {
            en: "Solo school project presented in <strong>January 2026</strong>. Graded exercise using Power Platform to solve a real organizational problem.",
            pt: "Projeto escolar individual apresentado em <strong>janeiro de 2026</strong>. Exercício avaliado usando Power Platform para resolver um problema organizacional real.",
            lu: "Solo Schoulprojet presentéiert am <strong>Januar 2026</strong>. Bewäert Übung mat Power Platform fir e richtegt organisatorescht Problem ze léisen.",
            de: "Solo-Schulprojekt präsentiert im <strong>Januar 2026</strong>. Bewertete Übung mit Power Platform zur Lösung eines echten Organisationsproblems.",
            fr: "Projet scolaire solo présenté en <strong>janvier 2026</strong>. Exercice noté utilisant Power Platform pour résoudre un vrai problème organisationnel."
        },
        "project.teamsbroadcast.presentation.title": {
            en: "Presentation",
            pt: "Apresentação",
            lu: "Presentatioun",
            de: "Präsentation",
            fr: "Présentation"
        },
        "project.teamsbroadcast.presentation.desc": {
            en: "View the project presentation slides used during the graded demonstration.",
            pt: "Vê os slides da apresentação do projeto usados durante a demonstração avaliada.",
            lu: "Kuck d'Projet Presentatiounssliden déi während der bewäerter Demonstratioun benotzt goufen.",
            de: "Siehe die Projektpräsentationsfolien, die während der bewerteten Demonstration verwendet wurden.",
            fr: "Voir les diapositives de présentation du projet utilisées lors de la démonstration notée."
        },
        "project.teamsbroadcast.presentation.button": {
            en: "Download Presentation (PDF)",
            pt: "Descarregar Apresentação (PDF)",
            lu: "Presentatioun eroflueden (PDF)",
            de: "Präsentation herunterladen (PDF)",
            fr: "Télécharger la Présentation (PDF)"
        },

        "project.teamsbroadcast.sidebar.feature1": {
            en: "Multi-channel selection interface",
            pt: "Interface de seleção multi-canal",
            lu: "Multi-Kanal Auswiel Interface",
            de: "Multi-Kanal-Auswahlschnittstelle",
            fr: "Interface de sélection multi-canaux"
        },
        "project.teamsbroadcast.sidebar.feature2": {
            en: "Rich text message editor",
            pt: "Editor de mensagens de texto rico",
            lu: "Rich Text Message Editor",
            de: "Rich-Text-Nachrichten-Editor",
            fr: "Éditeur de messages texte enrichi"
        },
        "project.teamsbroadcast.sidebar.feature3": {
            en: "Real-time delivery status",
            pt: "Estado de entrega em tempo real",
            lu: "Echtzäit Liwwerstatus",
            de: "Echtzeit-Zustellstatus",
            fr: "Statut de livraison en temps réel"
        },
        "project.teamsbroadcast.sidebar.feature4": {
            en: "Professional state management",
            pt: "Gestão de estado profissional",
            lu: "Professionnell State Management",
            de: "Professionelles State Management",
            fr: "Gestion d'état professionnelle"
        },
        "project.teamsbroadcast.sidebar.feature5": {
            en: "Complete broadcast history",
            pt: "Histórico completo de transmissões",
            lu: "Komplett Broadcast Geschicht",
            de: "Vollständige Broadcast-Historie",
            fr: "Historique complet de diffusion"
        },
        "project.teamsbroadcast.sidebar.feature6": {
            en: "Search and filter logs",
            pt: "Pesquisar e filtrar registos",
            lu: "Loggen sichen a filteren",
            de: "Logs suchen und filtern",
            fr: "Rechercher et filtrer les logs"
        },
        "project.teamsbroadcast.sidebar.feature7": {
            en: "Enterprise audit trail",
            pt: "Trilha de auditoria empresarial",
            lu: "Entreprise Audit Trail",
            de: "Enterprise Audit-Trail",
            fr: "Piste d'audit d'entreprise"
        },
        "project.teamsbroadcast.sidebar.feature8": {
            en: "Input validation",
            pt: "Validação de entrada",
            lu: "Input Validatioun",
            de: "Eingabevalidierung",
            fr: "Validation des entrées"
        },
        "project.teamsbroadcast.sidebar.feature9": {
            en: "Error prevention",
            pt: "Prevenção de erros",
            lu: "Fehlerverhënnerung",
            de: "Fehlervermeidung",
            fr: "Prévention des erreurs"
        }
    };
    Object.assign(translations, extra);
})();
