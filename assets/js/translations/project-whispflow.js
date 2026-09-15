/**
 * WhispFlow project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        /* ---- Two-lens layout: at-a-glance metric chips ---- */
        "project.whispflow.glance.engines.label": {
            en: "ways to transcribe: local engine or an API",
            pt: "formas de transcrever: motor local ou uma API",
            lu: "Weeër fir ze transkribéieren: lokale Motor oder eng API",
            de: "Wege zu transkribieren: lokale Engine oder eine API",
            fr: "façons de transcrire : moteur local ou une API"
        },
        "project.whispflow.glance.providers.label": {
            en: "AI providers, from cloud to fully local",
            pt: "fornecedores de IA, da cloud ao totalmente local",
            lu: "AI Provideren, vun der Cloud bis komplett lokal",
            de: "KI-Anbieter, von Cloud bis vollständig lokal",
            fr: "fournisseurs d'IA, du cloud au tout local"
        },
        "project.whispflow.glance.separate.value": {
            en: "Separate",
            pt: "Separadas",
            lu: "Getrennt",
            de: "Getrennte",
            fr: "Séparés"
        },
        "project.whispflow.glance.separate.label": {
            en: "setups for live captions and full transcripts",
            pt: "configurações para legendas ao vivo e transcrições completas",
            lu: "Astellunge fir Live-Ënnertitelen a komplett Transkriptiounen",
            de: "Einstellungen für Live-Untertitel und vollständige Transkripte",
            fr: "réglages pour les sous-titres en direct et les transcriptions complètes"
        },
        "project.whispflow.glance.local.value": {
            en: "Local",
            pt: "Local",
            lu: "Lokal",
            de: "Lokal",
            fr: "Local"
        },
        "project.whispflow.glance.local.label": {
            en: "by default: audio leaves only if you choose an API",
            pt: "por defeito: o áudio só sai se escolheres uma API",
            lu: "standardméisseg: den Audio geet nëmme fort, wann s du eng API wiels",
            de: "standardmäßig: Audio verlässt das Gerät nur, wenn du eine API wählst",
            fr: "par défaut : l'audio ne part que si vous choisissez une API"
        },

        /* ---- Architecture diagram (record-to-notes pipeline) ---- */
        "project.whispflow.arch.title": {
            en: "How WhispFlow works",
            pt: "Como o WhispFlow funciona",
            lu: "Wéi de WhispFlow funktionéiert",
            de: "Wie WhispFlow funktioniert",
            fr: "Comment fonctionne WhispFlow"
        },
        "project.whispflow.arch.strip": {
            en: "Record-to-notes pipeline",
            pt: "Pipeline da gravação às notas",
            lu: "Pipeline vun der Opnam bis zu den Notizen",
            de: "Pipeline von Aufnahme zu Notizen",
            fr: "Pipeline de l'enregistrement aux notes"
        },
        "project.whispflow.arch.capture": {
            en: "Capture",
            pt: "Captar",
            lu: "Erfaassen",
            de: "Erfassen",
            fr: "Capturer"
        },
        "project.whispflow.arch.capture.spec": {
            en: "record live, or import an audio file",
            pt: "grava ao vivo, ou importa um ficheiro de áudio",
            lu: "live ophuelen, oder eng Audiodatei importéieren",
            de: "live aufnehmen, oder eine Audiodatei importieren",
            fr: "enregistrer en direct, ou importer un fichier audio"
        },
        "project.whispflow.arch.transcribe": {
            en: "Transcribe",
            pt: "Transcrever",
            lu: "Transkribéieren",
            de: "Transkribieren",
            fr: "Transcrire"
        },
        "project.whispflow.arch.transcribe.spec": {
            en: "on your machine, or through Groq, OpenAI or your own server, chosen per run",
            pt: "na tua máquina, ou através da Groq, OpenAI ou do teu próprio servidor, escolhido em cada execução",
            lu: "op denger Maschinn, oder iwwer Groq, OpenAI oder däin eegene Server, bei all Laf gewielt",
            de: "auf deinem Rechner, oder über Groq, OpenAI oder deinen eigenen Server, pro Durchlauf gewählt",
            fr: "sur votre machine, ou via Groq, OpenAI ou votre propre serveur, au choix à chaque exécution"
        },
        "project.whispflow.arch.summarize": {
            en: "Summarize",
            pt: "Resumir",
            lu: "Zesummefaassen",
            de: "Zusammenfassen",
            fr: "Résumer"
        },
        "project.whispflow.arch.summarize.spec": {
            en: "summaries, action items and cleanup, from the transcript text only",
            pt: "resumos, ações e limpeza, só a partir do texto da transcrição",
            lu: "Resuméen, Aktiounspunkten a Botzen, nëmmen aus dem Transkriptiounstext",
            de: "Zusammenfassungen, Aktionspunkte und Bereinigung, nur aus dem Transkripttext",
            fr: "résumés, actions et nettoyage, uniquement à partir du texte de la transcription"
        },
        "project.whispflow.arch.export": {
            en: "Export",
            pt: "Exportar",
            lu: "Exportéieren",
            de: "Exportieren",
            fr: "Exporter"
        },
        "project.whispflow.arch.export.spec": {
            en: "take the transcript, summary and action items with you",
            pt: "leva contigo a transcrição, o resumo e as ações",
            lu: "huel d'Transkriptioun, de Resumé an d'Aktiounspunkten mat",
            de: "nimm Transkript, Zusammenfassung und Aktionspunkte mit",
            fr: "emportez la transcription, le résumé et les actions"
        },
        "project.whispflow.arch.live": {
            en: "Live captions",
            pt: "Legendas ao vivo",
            lu: "Live-Ënnertitelen",
            de: "Live-Untertitel",
            fr: "Sous-titres en direct"
        },
        "project.whispflow.arch.live.spec": {
            en: "set up separately from full transcripts, shown while you record",
            pt: "configuradas à parte das transcrições completas, mostradas enquanto gravas",
            lu: "getrennt vun de komplette Transkriptiounen agestallt, ugewise während s du ophëls",
            de: "getrennt von vollständigen Transkripten eingestellt, angezeigt während du aufnimmst",
            fr: "réglés séparément des transcriptions complètes, affichés pendant l'enregistrement"
        },
        "project.whispflow.arch.note": {
            en: "Everything runs locally by default. Audio leaves your machine only if you pick a transcription API, and AI features only ever send the transcript text, never the audio.",
            pt: "Por defeito, tudo corre localmente. O áudio só sai da tua máquina se escolheres uma API de transcrição, e as funcionalidades de IA só enviam o texto da transcrição, nunca o áudio.",
            lu: "Standardméisseg leeft alles lokal. Den Audio verléisst deng Maschinn nëmmen, wann s du eng Transkriptiouns-API wiels, an d'AI-Funktioune schécken ëmmer nëmmen den Transkriptiounstext, ni den Audio.",
            de: "Standardmäßig läuft alles lokal. Audio verlässt deinen Rechner nur, wenn du eine Transkriptions-API wählst, und die KI-Funktionen senden immer nur den Transkripttext, nie das Audio.",
            fr: "Par défaut, tout tourne en local. L'audio ne quitte votre machine que si vous choisissez une API de transcription, et les fonctions IA n'envoient que le texte de la transcription, jamais l'audio."
        },

        /* ---- Overview "what WhispFlow does" cards ---- */
        "project.whispflow.does.title": {
            en: "What WhispFlow does",
            pt: "O que o WhispFlow faz",
            lu: "Wat de WhispFlow mécht",
            de: "Was WhispFlow macht",
            fr: "Ce que fait WhispFlow"
        },
        "project.whispflow.does.record.title": {
            en: "Records any meeting or lecture",
            pt: "Grava qualquer reunião ou aula",
            lu: "Hëlt all Sëtzung oder Virlesung op",
            de: "Nimmt jedes Meeting oder jede Vorlesung auf",
            fr: "Enregistre toute réunion ou tout cours"
        },
        "project.whispflow.does.record.desc": {
            en: "One click captures your microphone, the system sound, or both, and you can also import an audio file.",
            pt: "Um clique capta o microfone, o som do sistema, ou ambos, e também podes importar um ficheiro de áudio.",
            lu: "Ee Klick hëlt däi Mikro, de Systemton, oder béid op, an du kanns och eng Audiodatei importéieren.",
            de: "Ein Klick erfasst dein Mikrofon, den Systemton oder beides, und du kannst auch eine Audiodatei importieren.",
            fr: "Un clic capte votre micro, le son système, ou les deux, et vous pouvez aussi importer un fichier audio."
        },
        "project.whispflow.does.transcribe.title": {
            en: "Turns speech into text, your way",
            pt: "Transforma fala em texto, à tua maneira",
            lu: "Maacht aus Sprooch Text, sou wéi s du wëlls",
            de: "Macht aus Sprache Text, wie du willst",
            fr: "Transforme la parole en texte, à votre façon"
        },
        "project.whispflow.does.transcribe.desc": {
            en: "On your own computer with no internet needed, or through a transcription service when you want more speed. You choose for each recording.",
            pt: "No teu próprio computador, sem precisar de internet, ou através de um serviço de transcrição quando queres mais rapidez. Escolhes em cada gravação.",
            lu: "Op dengem eegene Computer ouni Internet, oder iwwer e Transkriptiounsservice, wann s du méi Vitess wëlls. Du wiels fir all Opnam.",
            de: "Auf deinem eigenen Computer ohne Internet, oder über einen Transkriptionsdienst, wenn du mehr Tempo willst. Du entscheidest bei jeder Aufnahme.",
            fr: "Sur votre propre ordinateur sans internet, ou via un service de transcription quand vous voulez plus de rapidité. Vous choisissez pour chaque enregistrement."
        },
        "project.whispflow.does.summary.title": {
            en: "Summaries with action items",
            pt: "Resumos com ações",
            lu: "Resuméen mat Aktiounspunkten",
            de: "Zusammenfassungen mit Aktionspunkten",
            fr: "Résumés avec actions"
        },
        "project.whispflow.does.summary.desc": {
            en: "AI pulls out the key points, decisions and to-dos so you leave with clear notes instead of a long recording.",
            pt: "A IA extrai os pontos-chave, decisões e tarefas para saíres com notas claras em vez de uma gravação longa.",
            lu: "D'AI zitt d'Haaptpunkten, Decisiounen an To-dos eraus, sou datt s du mat kloren Notizen amplaz enger laanger Opnam erausgees.",
            de: "Die KI zieht die Kernpunkte, Entscheidungen und To-dos heraus, damit du mit klaren Notizen statt einer langen Aufnahme rausgehst.",
            fr: "L'IA extrait les points clés, décisions et tâches pour repartir avec des notes claires au lieu d'un long enregistrement."
        },
        "project.whispflow.does.private.title": {
            en: "Private by default",
            pt: "Privado por defeito",
            lu: "Standardméisseg privat",
            de: "Standardmäßig privat",
            fr: "Privé par défaut"
        },
        "project.whispflow.does.private.desc": {
            en: "Everything stays on your machine unless you pick an online service. Live captions and full transcripts are set up separately, so you decide what goes where.",
            pt: "Tudo fica na tua máquina, a não ser que escolhas um serviço online. As legendas ao vivo e as transcrições completas configuram-se à parte, por isso decides o que vai para onde.",
            lu: "Alles bleift op denger Maschinn, ausser du wiels en Online-Service. Live-Ënnertitelen a komplett Transkriptioune ginn getrennt agestallt, sou datt s du decidéiers, wat wouhinner geet.",
            de: "Alles bleibt auf deinem Rechner, außer du wählst einen Online-Dienst. Live-Untertitel und vollständige Transkripte werden getrennt eingestellt, so entscheidest du, was wohin geht.",
            fr: "Tout reste sur votre machine, sauf si vous choisissez un service en ligne. Les sous-titres en direct et les transcriptions complètes se règlent séparément, vous décidez donc de ce qui va où."
        },

        /* ---- Technical layer-stack ---- */
        "project.whispflow.stack.title": {
            en: "Under the Hood",
            pt: "Por Dentro",
            lu: "Ënner der Hood",
            de: "Unter der Haube",
            fr: "Sous le capot"
        },
        "project.whispflow.stack.electron.title": {
            en: "Desktop App",
            pt: "App Desktop",
            lu: "Desktop App",
            de: "Desktop-App",
            fr: "App de bureau"
        },
        "project.whispflow.stack.electron.body": {
            en: "Desktop shell with audio capture via the MediaRecorder API, session management UI, live waveform visualization, and organized file storage.",
            pt: "Shell desktop com captura de áudio via MediaRecorder API, UI de gestão de sessões, visualização de forma de onda em tempo real e armazenamento de ficheiros organizado.",
            lu: "Desktop-Shell mat Audio-Captéierung iwwer d'MediaRecorder API, Sessiounsmanagement-UI, Live-Welleform-Visualiséierung an organiséierter Dateispäicherung.",
            de: "Desktop-Shell mit Audioaufnahme über die MediaRecorder-API, Sitzungsverwaltungs-UI, Live-Wellenform-Visualisierung und organisierter Dateispeicherung.",
            fr: "Shell de bureau avec capture audio via l'API MediaRecorder, interface de gestion des sessions, visualisation de forme d'onde en direct et stockage de fichiers organisé."
        },
        "project.whispflow.stack.whisper.title": {
            en: "Transcription Engines",
            pt: "Motores de Transcrição",
            lu: "Transkriptiounsmotoren",
            de: "Transkriptions-Engines",
            fr: "Moteurs de transcription"
        },
        "project.whispflow.stack.whisper.body": {
            en: "A built-in local engine (faster-whisper or whisper.cpp, models from tiny to large) or any OpenAI-compatible transcription API: Groq, OpenAI, or a self-hosted server. Chosen per run, with a fallback to the local engine if an API fails.",
            pt: "Um motor local integrado (faster-whisper ou whisper.cpp, modelos de tiny a large) ou qualquer API de transcrição compatível com OpenAI: Groq, OpenAI ou um servidor self-hosted. Escolhido em cada execução, com fallback para o motor local se uma API falhar.",
            lu: "E agebaute lokale Motor (faster-whisper oder whisper.cpp, Modeller vun tiny bis large) oder all OpenAI-kompatibel Transkriptiouns-API: Groq, OpenAI oder e self-hosted Server. Bei all Laf gewielt, mat engem Fallback op de lokale Motor, wann eng API ausfält.",
            de: "Eine eingebaute lokale Engine (faster-whisper oder whisper.cpp, Modelle von tiny bis large) oder jede OpenAI-kompatible Transkriptions-API: Groq, OpenAI oder ein selbst gehosteter Server. Pro Durchlauf gewählt, mit Fallback auf die lokale Engine, falls eine API ausfällt.",
            fr: "Un moteur local intégré (faster-whisper ou whisper.cpp, modèles de tiny à large) ou toute API de transcription compatible OpenAI : Groq, OpenAI ou un serveur auto-hébergé. Choisi à chaque exécution, avec un repli sur le moteur local si une API échoue."
        },
        "project.whispflow.stack.ai.title": {
            en: "AI Summarization",
            pt: "Resumo por IA",
            lu: "AI Zesummefaassung",
            de: "KI-Zusammenfassung",
            fr: "Synthèse par IA"
        },
        "project.whispflow.stack.ai.body": {
            en: "One AI gateway for summaries in four styles, action items and transcript cleanup. Works with OpenAI, Mistral, Anthropic, Groq, Cohere, Ollama, LM Studio or any OpenAI-compatible endpoint, with model discovery. Only the transcript text is sent.",
            pt: "Um único gateway de IA para resumos em quatro estilos, ações e limpeza da transcrição. Funciona com OpenAI, Mistral, Anthropic, Groq, Cohere, Ollama, LM Studio ou qualquer endpoint compatível com OpenAI, com descoberta de modelos. Só é enviado o texto da transcrição.",
            lu: "Een AI-Gateway fir Resuméen a véier Stiler, Aktiounspunkten an d'Botze vun der Transkriptioun. Funktionéiert mat OpenAI, Mistral, Anthropic, Groq, Cohere, Ollama, LM Studio oder all OpenAI-kompatiblen Endpoint, mat Modell-Discovery. Nëmmen den Transkriptiounstext gëtt geschéckt.",
            de: "Ein KI-Gateway für Zusammenfassungen in vier Stilen, Aktionspunkte und Transkript-Bereinigung. Funktioniert mit OpenAI, Mistral, Anthropic, Groq, Cohere, Ollama, LM Studio oder jedem OpenAI-kompatiblen Endpoint, mit Modellerkennung. Nur der Transkripttext wird gesendet.",
            fr: "Une passerelle IA unique pour des résumés en quatre styles, les actions et le nettoyage de la transcription. Compatible avec OpenAI, Mistral, Anthropic, Groq, Cohere, Ollama, LM Studio ou tout endpoint compatible OpenAI, avec découverte des modèles. Seul le texte de la transcription est envoyé."
        },
        "project.whispflow.stack.storage.title": {
            en: "Local Storage & Versioning",
            pt: "Armazenamento Local e Versionamento",
            lu: "Lokal Späicherung & Versionéierung",
            de: "Lokaler Speicher & Versionierung",
            fr: "Stockage local & versionnage"
        },
        "project.whispflow.stack.storage.body": {
            en: "Session folders hold the audio, versioned transcripts, and cached summaries. Everything stays on your device in an organized structure that's easy to back up and export.",
            pt: "As pastas de sessão guardam o áudio, transcrições versionadas e resumos em cache. Tudo fica no teu dispositivo numa estrutura organizada, fácil de fazer backup e exportar.",
            lu: "Sessiounsdossieren halen den Audio, versionéiert Transkriptiounen a gecachte Resuméen. Alles bleift op dengem Apparat an enger organiséierter Struktur, einfach ze backupen an exportéieren.",
            de: "Sitzungsordner enthalten das Audio, versionierte Transkripte und gecachte Zusammenfassungen. Alles bleibt auf deinem Gerät in einer organisierten Struktur, leicht zu sichern und zu exportieren.",
            fr: "Les dossiers de session contiennent l'audio, les transcriptions versionnées et les résumés en cache. Tout reste sur votre appareil dans une structure organisée, facile à sauvegarder et exporter."
        },

        /* ---- Lessons cards (split title/desc) ---- */
        "project.whispflow.lessons.hybrid.title": {
            en: "Hybrid architecture works",
            pt: "A arquitetura híbrida funciona",
            lu: "Hybrid Architektur funktionéiert",
            de: "Hybride Architektur funktioniert",
            fr: "L'architecture hybride fonctionne"
        },
        "project.whispflow.lessons.hybrid.desc": {
            en: "Local by default for privacy and offline use, with cloud engines as an option, so each user picks their own balance of speed, cost and privacy.",
            pt: "Local por defeito para privacidade e uso offline, com motores na cloud como opção, para que cada utilizador escolha o seu equilíbrio entre velocidade, custo e privacidade.",
            lu: "Standardméisseg lokal fir Privatsphär an Offline-Notzung, mat Cloud-Motoren als Optioun, sou datt all Benotzer säin eegene Gläichgewiicht tëscht Vitess, Käschten a Privatsphär wielt.",
            de: "Standardmäßig lokal für Privatsphäre und Offline-Nutzung, mit Cloud-Engines als Option, damit jeder Nutzer seine eigene Balance aus Tempo, Kosten und Privatsphäre wählt.",
            fr: "Local par défaut pour la confidentialité et l'usage hors ligne, avec des moteurs cloud en option, pour que chacun choisisse son équilibre entre vitesse, coût et confidentialité."
        },
        "project.whispflow.lessons.models.title": {
            en: "Model selection matters",
            pt: "A escolha do modelo importa",
            lu: "Modell-Auswiel ass wichteg",
            de: "Modellauswahl ist wichtig",
            fr: "Le choix du modèle compte"
        },
        "project.whispflow.lessons.models.desc": {
            en: "Letting users choose between speed and accuracy (tiny vs. large Whisper models) solved the hardware-limitation problem elegantly.",
            pt: "Deixar os utilizadores escolher entre velocidade e precisão (modelos tiny vs. large) resolveu elegantemente o problema das limitações de hardware.",
            lu: "De Benotzer tëscht Geschwindegkeet a Genauegkeet wielen ze loossen (tiny vs. large Modellen) huet d'Hardware-Limitatiounsproblem elegant geléist.",
            de: "Den Nutzern die Wahl zwischen Geschwindigkeit und Genauigkeit zu lassen (tiny vs. large Modelle) löste das Hardware-Problem elegant.",
            fr: "Laisser les utilisateurs choisir entre vitesse et précision (modèles tiny vs. large) a résolu élégamment le problème matériel."
        },
        "project.whispflow.lessons.versioning.title": {
            en: "Never overwrite user data",
            pt: "Nunca sobrescrever dados do utilizador",
            lu: "Ni Benotzerdaten iwwerschreiwen",
            de: "Nie Benutzerdaten überschreiben",
            fr: "Ne jamais écraser les données"
        },
        "project.whispflow.lessons.versioning.desc": {
            en: "Versioning means you can always go back. Users trust the tool more when they know nothing gets deleted.",
            pt: "O versionamento significa que podes sempre voltar atrás. Os utilizadores confiam mais quando sabem que nada é apagado.",
            lu: "Versionéierung bedeit datt een ëmmer zréck ka goen. Benotzer vertrauen méi wann se wëssen datt näischt geläscht gëtt.",
            de: "Versionierung heißt, man kann immer zurück. Nutzer vertrauen mehr, wenn nichts gelöscht wird.",
            fr: "Le versionnage permet de toujours revenir en arrière. Les utilisateurs font plus confiance quand rien n'est supprimé."
        },
        "project.whispflow.lessons.caching.title": {
            en: "Cache everything expensive",
            pt: "Faz cache de tudo o que é caro",
            lu: "Cache alles wat deier ass",
            de: "Alles Teure cachen",
            fr: "Mettre en cache ce qui coûte cher"
        },
        "project.whispflow.lessons.caching.desc": {
            en: "Caching AI summaries by transcript version and language prevents needless API calls and keeps costs under control.",
            pt: "Fazer cache dos resumos por versão e idioma evita chamadas API desnecessárias e mantém os custos sob controlo.",
            lu: "AI Resuméen no Versioun a Sprooch ze cachen verhënnert onnéideg API-Opriff an hält d'Käschten ënner Kontroll.",
            de: "Zusammenfassungen nach Version und Sprache zu cachen verhindert unnötige API-Aufrufe und hält die Kosten im Griff.",
            fr: "Cacher les résumés par version et langue évite les appels API inutiles et maîtrise les coûts."
        },

        "project.whispflow.badge": {
            en: "TALENT EXHIBITION - PROMA2",
            pt: "EXPOSIÇÃO DE TALENTOS - PROMA2",
            lu: "TALENT AUSSTELLUNG - PROMA2",
            de: "TALENT AUSSTELLUNG - PROMA2",
            fr: "EXPOSITION DE TALENTS - PROMA2"
        },
        "project.whispflow.hero.title": {
            en: "WhispFlow",
            pt: "WhispFlow",
            lu: "WhispFlow",
            de: "WhispFlow",
            fr: "WhispFlow"
        },
        "project.whispflow.hero.subtitle": {
            en: "I built WhispFlow as a desktop app that records meetings, turns speech into searchable notes, and creates structured summaries. It runs locally by default, and you can plug in cloud or self-hosted engines for transcription and AI. It was my PROMA2 Talent Exhibition project.",
            pt: "Construí o WhispFlow como uma aplicação desktop que grava reuniões, transforma fala em notas pesquisáveis e cria resumos estruturados. Por defeito corre localmente, e podes ligar motores na cloud ou self-hosted para a transcrição e a IA. Foi o meu projeto para a Exposição de Talentos PROMA2.",
            lu: "Ech hunn de WhispFlow als Desktop-App gebaut déi Sëtzungen ophëlt, Sprooch an duerchsichbar Notizen verwandelt a strukturéiert Resuméë mécht. Standardméisseg leeft se lokal, an du kanns Cloud- oder self-hosted Motore fir Transkriptioun an AI uschléissen. Et war mäi Projet fir d'PROMA2 Talent Ausstellung.",
            de: "Ich habe WhispFlow als Desktop-App gebaut, die Meetings aufnimmt, Sprache in durchsuchbare Notizen verwandelt und strukturierte Zusammenfassungen erstellt. Standardmäßig läuft sie lokal, und du kannst Cloud- oder selbst gehostete Engines für Transkription und KI anbinden. Es war mein Projekt für die PROMA2 Talent-Ausstellung.",
            fr: "J'ai construit WhispFlow comme une application de bureau qui enregistre les réunions, transforme la parole en notes consultables et crée des résumés structurés. Elle tourne en local par défaut, et vous pouvez brancher des moteurs cloud ou auto-hébergés pour la transcription et l'IA. C'était mon projet pour l'Exposition de Talents PROMA2."
        },
        "project.whispflow.problem.title": {
            en: "The Problem",
            pt: "O Problema",
            lu: "De Problem",
            de: "Das Problem",
            fr: "Le Problème"
        },
        "project.whispflow.problem.body": {
            en: "During meetings and lectures, important information often gets lost. Taking notes manually splits attention between listening and writing, and reviewing long recordings afterward is time-consuming. I wanted a simple way to leave each session with useful notes instead of another recording to search through.",
            pt: "Durante reuniões e aulas, informações importantes perdem-se frequentemente. Tirar notas manualmente divide a atenção entre ouvir e escrever, e rever gravações longas é demorado. Queria uma forma simples de terminar cada sessão com notas úteis, em vez de outra gravação para pesquisar.",
            lu: "Während Sëtzungen a Virlesunge gi wichteg Informatiounen dacks verluer. Manuell Notizen maachen deelt d'Opmierksamkeet tëscht Nolauschteren a Schreiwen, a laang Opnamen nozeliesen brauch Zäit. Ech wollt eng einfach Méiglechkeet fir all Sëtzung mat nëtzlechen Notizen ofzeschléissen, amplaz nach eng Opnam duerchsichen ze mussen.",
            de: "Während Meetings und Vorlesungen gehen wichtige Informationen oft verloren. Manuelles Notieren teilt die Aufmerksamkeit zwischen Zuhören und Schreiben, und lange Aufnahmen nachträglich durchzugehen ist zeitaufwändig. Ich wollte eine einfache Möglichkeit, jede Sitzung mit brauchbaren Notizen statt einer weiteren durchsuchbaren Aufnahme zu verlassen.",
            fr: "Pendant les réunions et les cours, des informations importantes se perdent souvent. Prendre des notes manuellement divise l'attention entre écouter et écrire, et revoir de longs enregistrements prend du temps. Je voulais une façon simple de sortir de chaque session avec des notes utiles plutôt qu'un nouvel enregistrement à parcourir."
        },
        "project.whispflow.solution.title": {
            en: "The Solution",
            pt: "A Solução",
            lu: "D'Léisung",
            de: "Die Lösung",
            fr: "La Solution"
        },
        "project.whispflow.solution.body": {
            en: "I built WhispFlow to turn a meeting or lecture into organized notes: record once, get a transcript, then receive key points, decisions, and action items ready to share. Everything runs on the computer by default, and you choose whether transcription or summaries use an online service.",
            pt: "Construí o WhispFlow para transformar uma reunião ou aula em notas organizadas: gravar uma vez, obter uma transcrição e depois receber pontos-chave, decisões e ações prontas a partilhar. Por defeito tudo corre no computador, e escolhes se a transcrição ou os resumos usam um serviço online.",
            lu: "Ech hunn de WhispFlow gebaut fir eng Sëtzung oder Virlesung an organiséiert Notizen ze verwandelen: eemol ophuelen, eng Transkriptioun kréien an duerno Haaptpunkten, Decisiounen an Aktiounspunkten deelen. Standardméisseg leeft alles um Computer, an du wiels, ob Transkriptioun oder Resuméen en Online-Service benotzen.",
            de: "Ich habe WhispFlow gebaut, um ein Meeting oder eine Vorlesung in organisierte Notizen zu verwandeln: einmal aufnehmen, ein Transkript erhalten und danach Kernpunkte, Entscheidungen und Aktionspunkte zum Teilen bekommen. Standardmäßig läuft alles auf dem Computer, und du entscheidest, ob Transkription oder Zusammenfassungen einen Online-Dienst nutzen.",
            fr: "J'ai construit WhispFlow pour transformer une réunion ou un cours en notes organisées : enregistrer une fois, obtenir une transcription, puis recevoir les points clés, décisions et actions prêts à partager. Par défaut, tout tourne sur l'ordinateur, et vous choisissez si la transcription ou les résumés passent par un service en ligne."
        },
        "project.whispflow.workflow.title": {
            en: "Core Workflow",
            pt: "Fluxo Principal",
            lu: "Kär-Workflow",
            de: "Kern-Workflow",
            fr: "Flux Principal"
        },
        "project.whispflow.workflow.body1": {
            en: "<strong>Record</strong> - One-click recording or keyboard shortcut (Ctrl+R). Three modes: Microphone, System Audio, or Hybrid. Audio files can also be imported. Live waveform and timer during recording.",
            pt: "<strong>Gravar</strong> - Gravação com um clique ou atalho de teclado (Ctrl+R). Três modos: Microfone, Áudio do Sistema ou Híbrido. Também é possível importar ficheiros de áudio. Forma de onda e cronómetro em tempo real.",
            lu: "<strong>Ophuelen</strong> - Een-Klick Opnam oder Tastaturkierzel (Ctrl+R). Dräi Moden: Mikro, System Audio, oder Hybrid. Audiodateie kënnen och importéiert ginn. Live Welleform an Timer während der Opnam.",
            de: "<strong>Aufnehmen</strong> - Ein-Klick-Aufnahme oder Tastenkürzel (Strg+R). Drei Modi: Mikrofon, Systemaudio oder Hybrid. Audiodateien lassen sich auch importieren. Live-Wellenform und Timer während der Aufnahme.",
            fr: "<strong>Enregistrer</strong> - Enregistrement en un clic ou raccourci clavier (Ctrl+R). Trois modes : Micro, Audio Système ou Hybride. Les fichiers audio peuvent aussi être importés. Forme d'onde et minuteur en direct."
        },
        "project.whispflow.workflow.body2": {
            en: "<strong>Transcribe</strong> - Pick the engine for each run: the local engine (faster-whisper or whisper.cpp, tiny to large models) or a transcription API such as Groq, OpenAI or a self-hosted server. Live captions have their own setting, so they can use a different engine than full transcripts.",
            pt: "<strong>Transcrever</strong> - Escolhe o motor em cada execução: o motor local (faster-whisper ou whisper.cpp, modelos tiny a large) ou uma API de transcrição como Groq, OpenAI ou um servidor self-hosted. As legendas ao vivo têm a sua própria definição, por isso podem usar um motor diferente das transcrições completas.",
            lu: "<strong>Transkribéieren</strong> - Wiel de Motor bei all Laf: de lokale Motor (faster-whisper oder whisper.cpp, Modeller vun tiny bis large) oder eng Transkriptiouns-API wéi Groq, OpenAI oder e self-hosted Server. Live-Ënnertitelen hunn hir eegen Astellung, sou datt se en anere Motor wéi déi komplett Transkriptioune benotze kënnen.",
            de: "<strong>Transkribieren</strong> - Engine pro Durchlauf wählen: die lokale Engine (faster-whisper oder whisper.cpp, Modelle von tiny bis large) oder eine Transkriptions-API wie Groq, OpenAI oder ein selbst gehosteter Server. Live-Untertitel haben eine eigene Einstellung und können daher eine andere Engine nutzen als vollständige Transkripte.",
            fr: "<strong>Transcrire</strong> - Choisissez le moteur à chaque exécution : le moteur local (faster-whisper ou whisper.cpp, modèles tiny à large) ou une API de transcription comme Groq, OpenAI ou un serveur auto-hébergé. Les sous-titres en direct ont leur propre réglage et peuvent donc utiliser un autre moteur que les transcriptions complètes."
        },
        "project.whispflow.workflow.body3": {
            en: "<strong>Summarize</strong> - AI generates key points, decisions, action items and a full summary in four styles. Choose from eight providers, cloud or fully local, or add any OpenAI-compatible endpoint. Generate in any language.",
            pt: "<strong>Resumir</strong> - A IA gera pontos-chave, decisões, ações e um resumo completo em quatro estilos. Escolhe entre oito fornecedores, na cloud ou totalmente locais, ou adiciona qualquer endpoint compatível com OpenAI. Gera em qualquer idioma.",
            lu: "<strong>Zesummefaassen</strong> - AI generéiert Haaptpunkten, Decisiounen, Aktiounspunkten an e vollstännege Resumé a véier Stiler. Wiel aus aacht Provideren, an der Cloud oder komplett lokal, oder füüg all OpenAI-kompatiblen Endpoint derbäi. Generéier an all Sprooch.",
            de: "<strong>Zusammenfassen</strong> - KI generiert Kernpunkte, Entscheidungen, Aktionspunkte und eine vollständige Zusammenfassung in vier Stilen. Acht Anbieter zur Wahl, in der Cloud oder vollständig lokal, oder einen beliebigen OpenAI-kompatiblen Endpoint hinzufügen. In jeder Sprache generieren.",
            fr: "<strong>Résumer</strong> - L'IA génère points clés, décisions, actions et un résumé complet en quatre styles. Huit fournisseurs au choix, cloud ou entièrement locaux, ou ajoutez tout endpoint compatible OpenAI. Génération dans n'importe quelle langue."
        },
        "project.whispflow.workflow.body4": {
            en: "<strong>Export</strong> - Export to PDF, DOCX or TXT with the transcript, summary and action items. Share with colleagues or classmates.",
            pt: "<strong>Exportar</strong> - Exporta para PDF, DOCX ou TXT com a transcrição, o resumo e as ações. Partilha com colegas.",
            lu: "<strong>Exportéieren</strong> - Als PDF, DOCX oder TXT exportéieren, mat Transkriptioun, Resumé an Aktiounspunkten. Mat Kollegen deelen.",
            de: "<strong>Exportieren</strong> - Als PDF, DOCX oder TXT exportieren, mit Transkript, Zusammenfassung und Aktionspunkten. Mit Kollegen teilen.",
            fr: "<strong>Exporter</strong> - Exporter en PDF, DOCX ou TXT avec la transcription, le résumé et les actions. Partager avec les collègues."
        },
        "project.whispflow.features.transcription": {
            en: "Local or API transcription, chosen per run",
            pt: "Transcrição local ou por API, escolhida em cada execução",
            lu: "Lokal oder API-Transkriptioun, bei all Laf gewielt",
            de: "Lokale oder API-Transkription, pro Durchlauf gewählt",
            fr: "Transcription locale ou par API, au choix à chaque exécution"
        },
        "project.whispflow.features.summaries": {
            en: "AI summaries from eight providers, cloud or local",
            pt: "Resumos IA de oito fornecedores, cloud ou locais",
            lu: "AI Zesummefaassunge vun aacht Provideren, Cloud oder lokal",
            de: "KI-Zusammenfassungen von acht Anbietern, Cloud oder lokal",
            fr: "Résumés IA de huit fournisseurs, cloud ou locaux"
        },
        "project.whispflow.features.sessions": {
            en: "Session management with search, tags, sorting, and context menus",
            pt: "Gestão de sessões com pesquisa, tags, ordenação e menus de contexto",
            lu: "Sessiounsmanagement mat Sich, Tags, Sortéierung a Kontextmenüen",
            de: "Sitzungsverwaltung mit Suche, Tags, Sortierung und Kontextmenüs",
            fr: "Gestion des sessions avec recherche, tags, tri et menus contextuels"
        },
        "project.whispflow.versioning.body": {
            en: "Re-transcribe with a different model or language - no data is overwritten. Switch between transcript versions (v1, v2, v3...) via dropdown. Each version tracks the model, language, and timestamp. Summaries are keyed by transcript version and language (e.g. v1_en, v2_fr).",
            pt: "Retranscreve com um modelo ou idioma diferente - nenhum dado é sobrescrito. Alterna entre versões (v1, v2, v3...) via dropdown. Cada versão regista o modelo, idioma e timestamp. Resumos são indexados por versão + idioma (ex: v1_en, v2_fr).",
            lu: "Nei transkribéieren mat engem anere Modell oder Sprooch - keng Daten ginn iwwerschriwwen. Wiesselt tëscht Transkriptiounsversiounen (v1, v2, v3...) via Dropdown. All Versioun trackt de Modell, Sprooch an Timestamp. Resuméen gi geschlësselt no Versioun + Sprooch (z.B. v1_en, v2_fr).",
            de: "Neu transkribieren mit einem anderen Modell oder Sprache - keine Daten werden überschrieben. Zwischen Versionen (v1, v2, v3...) per Dropdown wechseln. Jede Version speichert Modell, Sprache und Zeitstempel. Zusammenfassungen sind nach Version + Sprache indexiert (z.B. v1_en, v2_fr).",
            fr: "Retranscrire avec un modèle ou langue différente - aucune donnée n'est écrasée. Basculer entre les versions (v1, v2, v3...) via menu déroulant. Chaque version enregistre le modèle, la langue et l'horodatage. Les résumés sont indexés par version + langue (ex : v1_en, v2_fr)."
        },
        "project.whispflow.learned.title": {
            en: "Lessons Learned",
            pt: "Lições Aprendidas",
            lu: "Léieren geléiert",
            de: "Gelernte Lektionen",
            fr: "Leçons Apprises"
        },
        "project.whispflow.phases.title": {
            en: "Project Phases",
            pt: "Fases do Projeto",
            lu: "Projet Phasen",
            de: "Projektphasen",
            fr: "Phases du Projet"
        },
        "project.whispflow.phases.body1": {
            en: "<strong>Phase 1 (Done) - Local-First:</strong> Desktop recording, local transcription, AI summaries, versioning, session management and export.",
            pt: "<strong>Fase 1 (Concluída) - Local-First:</strong> Gravação desktop, transcrição local, resumos IA, versionamento, gestão de sessões e exportação.",
            lu: "<strong>Phase 1 (Fäerdeg) - Local-First:</strong> Desktop Opnam, lokal Transkriptioun, AI Resuméen, Versionéierung, Sessiounsmanagement an Export.",
            de: "<strong>Phase 1 (Abgeschlossen) - Local-First:</strong> Desktop-Aufnahme, lokale Transkription, KI-Zusammenfassungen, Versionierung, Sitzungsverwaltung und Export.",
            fr: "<strong>Phase 1 (Terminée) - Local-First :</strong> Enregistrement bureau, transcription locale, résumés IA, versionnage, gestion des sessions et export."
        },
        "project.whispflow.phases.body2": {
            en: "<strong>Phase 2 (In progress) - Open Engines:</strong> Transcription APIs (Groq, OpenAI, self-hosted), separate live captions, a local fallback when an API fails, and one provider list shared by transcription and AI are working. Cloud storage, sync, accounts and collaboration are still planned.",
            pt: "<strong>Fase 2 (Em curso) - Motores Abertos:</strong> APIs de transcrição (Groq, OpenAI, self-hosted), legendas ao vivo separadas, um fallback local quando uma API falha e uma lista única de fornecedores, partilhada pela transcrição e pela IA, já funcionam. Armazenamento cloud, sincronização, contas e colaboração continuam planeados.",
            lu: "<strong>Phase 2 (Am Gaang) - Oppe Motoren:</strong> Transkriptiouns-APIen (Groq, OpenAI, self-hosted), getrennt Live-Ënnertitelen, e lokale Fallback, wann eng API ausfält, an eng eenzeg Provider-Lëscht fir Transkriptioun an AI funktionéiere schonn. Cloud Storage, Sync, Konten a Kollaboratioun sinn nach geplangt.",
            de: "<strong>Phase 2 (In Arbeit) - Offene Engines:</strong> Transkriptions-APIs (Groq, OpenAI, selbst gehostet), getrennte Live-Untertitel, ein lokaler Fallback bei API-Ausfall und eine gemeinsame Anbieterliste für Transkription und KI funktionieren bereits. Cloud-Speicher, Synchronisation, Konten und Zusammenarbeit sind weiterhin geplant.",
            fr: "<strong>Phase 2 (En cours) - Moteurs ouverts :</strong> les API de transcription (Groq, OpenAI, auto-hébergé), les sous-titres en direct séparés, un repli local quand une API échoue et une liste de fournisseurs unique partagée par la transcription et l'IA fonctionnent. Le stockage cloud, la synchronisation, les comptes et la collaboration restent prévus."
        },
        "project.whispflow.context.title": {
            en: "About This Project",
            pt: "Sobre Este Projeto",
            lu: "Iwwer Dëse Projet",
            de: "Über Dieses Projekt",
            fr: "À Propos de ce Projet"
        },
        "project.whispflow.context.body": {
            en: "I built WhispFlow for the <strong>Talent Exhibition</strong> (PROMA2 course) in the BTS Cloud Computing programme at Lycée Guillaume Kroll. I chose a real documentation problem, designed a working solution, and applied the cloud and AI concepts from the semester.",
            pt: "Construí o WhispFlow para a <strong>Exposição de Talentos</strong> (curso PROMA2) no programa BTS Cloud Computing do Lycée Guillaume Kroll. Escolhi um problema real de documentação, concebi uma solução funcional e apliquei os conceitos de cloud e IA do semestre.",
            lu: "Ech hunn de WhispFlow fir d'<strong>Talent Ausstellung</strong> (PROMA2 Cours) am BTS Cloud Computing Programm um Lycée Guillaume Kroll gebaut. Ech hunn e reelle Dokumentatiounsproblem gewielt, eng funktionéierend Léisung entworf an d'Cloud- an AI-Konzepter vum Semester applizéiert.",
            de: "Ich habe WhispFlow für die <strong>Talent-Ausstellung</strong> (PROMA2-Kurs) im BTS Cloud Computing Programm am Lycée Guillaume Kroll gebaut. Ich wählte ein reales Dokumentationsproblem, entwarf eine funktionierende Lösung und wandte die Cloud- und KI-Konzepte des Semesters an.",
            fr: "J'ai construit WhispFlow pour l'<strong>Exposition de Talents</strong> (cours PROMA2) du programme BTS Cloud Computing au Lycée Guillaume Kroll. J'ai choisi un problème réel de documentation, conçu une solution fonctionnelle et appliqué les concepts cloud et IA du semestre."
        },
        "project.whispflow.sidebar.feature1": {
            en: "One-click audio recording",
            pt: "Gravação de áudio com um clique",
            lu: "Een-Klick Audio Opnam",
            de: "Ein-Klick-Audioaufnahme",
            fr: "Enregistrement audio en un clic"
        },
        "project.whispflow.sidebar.feature2": {
            en: "Local or API transcription",
            pt: "Transcrição local ou por API",
            lu: "Lokal oder API-Transkriptioun",
            de: "Lokale oder API-Transkription",
            fr: "Transcription locale ou par API"
        },
        "project.whispflow.sidebar.feature3": {
            en: "8 AI providers, cloud or local",
            pt: "8 fornecedores de IA, cloud ou locais",
            lu: "8 AI Provideren, Cloud oder lokal",
            de: "8 KI-Anbieter, Cloud oder lokal",
            fr: "8 fournisseurs d'IA, cloud ou locaux"
        },
        "project.whispflow.sidebar.feature9": {
            en: "Separate live captions",
            pt: "Legendas ao vivo separadas",
            lu: "Getrennt Live-Ënnertitelen",
            de: "Separate Live-Untertitel",
            fr: "Sous-titres en direct séparés"
        },
        "project.whispflow.sidebar.feature4": {
            en: "Versioned transcripts",
            pt: "Transcrições versionadas",
            lu: "Versionéiert Transkriptiounen",
            de: "Versionierte Transkripte",
            fr: "Transcriptions versionnées"
        },
        "project.whispflow.sidebar.feature5": {
            en: "Multi-language support",
            pt: "Suporte multi-idioma",
            lu: "Multi-Sprooch Support",
            de: "Mehrsprachunterstützung",
            fr: "Support multilingue"
        },
        "project.whispflow.sidebar.feature6": {
            en: "Session management",
            pt: "Gestão de sessões",
            lu: "Sessiounsmanagement",
            de: "Sitzungsverwaltung",
            fr: "Gestion des sessions"
        },
        "project.whispflow.sidebar.feature7": {
            en: "Private by default",
            pt: "Privado por defeito",
            lu: "Standardméisseg privat",
            de: "Standardmäßig privat",
            fr: "Privé par défaut"
        },
        "project.whispflow.sidebar.feature8": {
            en: "Export & sharing",
            pt: "Exportação e partilha",
            lu: "Export & Deelen",
            de: "Export & Teilen",
            fr: "Export & partage"
        },
        "project.whispflow.sidebar.usecases.title": {
            en: "Use Cases",
            pt: "Casos de Uso",
            lu: "Notzungsfäll",
            de: "Anwendungsfälle",
            fr: "Cas d'utilisation"
        },
        "project.whispflow.sidebar.usecase1": {
            en: "Students capturing lectures",
            pt: "Estudantes a gravar aulas",
            lu: "Studenten déi Virlesunge festhalen",
            de: "Studenten, die Vorlesungen aufnehmen",
            fr: "Étudiants capturant des cours"
        },
        "project.whispflow.sidebar.usecase2": {
            en: "Consultants documenting meetings",
            pt: "Consultores a documentar reuniões",
            lu: "Beroder déi Sëtzungen dokumentéieren",
            de: "Berater, die Meetings dokumentieren",
            fr: "Consultants documentant des réunions"
        },
        "project.whispflow.sidebar.usecase3": {
            en: "Team leads tracking decisions",
            pt: "Team leads a rastrear decisões",
            lu: "Team Leads déi Decisiounen verfollegen",
            de: "Teamleiter, die Entscheidungen verfolgen",
            fr: "Chefs d'équipe suivant les décisions"
        },
        "project.whispflow.sidebar.usecase4": {
            en: "Researchers transcribing interviews",
            pt: "Investigadores a transcrever entrevistas",
            lu: "Fuerscher déi Interviewen transkribéieren",
            de: "Forscher, die Interviews transkribieren",
            fr: "Chercheurs transcrivant des entretiens"
        }
    };
    Object.assign(translations, extra);
})();
