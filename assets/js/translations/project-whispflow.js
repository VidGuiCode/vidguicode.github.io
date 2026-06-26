/**
 * WhispFlow project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        /* ---- Two-lens layout: at-a-glance metric chips ---- */
        "project.whispflow.glance.steps.label": {
            en: "steps, record to notes",
            pt: "passos, da gravação às notas",
            lu: "Schrëtt, vun der Opnam bis zu den Notizen",
            de: "Schritte, von Aufnahme zu Notizen",
            fr: "étapes, de l'enregistrement aux notes"
        },
        "project.whispflow.glance.providers.label": {
            en: "interchangeable AI providers",
            pt: "fornecedores de IA intercambiáveis",
            lu: "auswiesselbar AI Provideren",
            de: "austauschbare KI-Anbieter",
            fr: "fournisseurs d'IA interchangeables"
        },
        "project.whispflow.glance.local.label": {
            en: "on-device transcription",
            pt: "transcrição no dispositivo",
            lu: "Transkriptioun um Apparat",
            de: "Transkription auf dem Gerät",
            fr: "transcription sur l'appareil"
        },
        "project.whispflow.glance.private.label": {
            en: "audio files leave your device",
            pt: "ficheiros de áudio saem do dispositivo",
            lu: "Audiodateie verloossen däin Apparat",
            de: "Audiodateien verlassen dein Gerät",
            fr: "fichiers audio quittent votre appareil"
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
        "project.whispflow.arch.audio": {
            en: "Audio in",
            pt: "Entrada de áudio",
            lu: "Audio-Input",
            de: "Audio-Eingang",
            fr: "Entrée audio"
        },
        "project.whispflow.arch.device": {
            en: "Your device — offline",
            pt: "O teu dispositivo — offline",
            lu: "Däin Apparat — offline",
            de: "Dein Gerät — offline",
            fr: "Votre appareil — hors ligne"
        },
        "project.whispflow.arch.record": {
            en: "Record",
            pt: "Gravar",
            lu: "Ophuelen",
            de: "Aufnehmen",
            fr: "Enregistrer"
        },
        "project.whispflow.arch.transcribe": {
            en: "Transcribe",
            pt: "Transcrever",
            lu: "Transkribéieren",
            de: "Transkribieren",
            fr: "Transcrire"
        },
        "project.whispflow.arch.export": {
            en: "Export",
            pt: "Exportar",
            lu: "Exportéieren",
            de: "Exportieren",
            fr: "Exporter"
        },
        "project.whispflow.arch.summary": {
            en: "AI Summary",
            pt: "Resumo IA",
            lu: "AI Resumé",
            de: "KI-Zusammenfassung",
            fr: "Résumé IA"
        },
        "project.whispflow.arch.note": {
            en: "Recording, transcription and storage all run on your device — only the transcript text is sent to a cloud AI for the summary. Your audio never leaves.",
            pt: "Gravação, transcrição e armazenamento correm todos no teu dispositivo — só o texto da transcrição é enviado a uma IA na cloud para o resumo. O teu áudio nunca sai.",
            lu: "Opnam, Transkriptioun a Späicherung lafen all op dengem Apparat — nëmmen den Transkriptiounstext gëtt un eng Cloud-AI fir de Resumé geschéckt. Däin Audio verléisst ni den Apparat.",
            de: "Aufnahme, Transkription und Speicherung laufen alle auf deinem Gerät — nur der Transkripttext wird für die Zusammenfassung an eine Cloud-KI gesendet. Dein Audio verlässt das Gerät nie.",
            fr: "Enregistrement, transcription et stockage tournent tous sur votre appareil — seul le texte de la transcription est envoyé à une IA cloud pour le résumé. Votre audio ne quitte jamais l'appareil."
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
            en: "One click captures your microphone, the system sound, or both — with a live waveform so you know it's working.",
            pt: "Um clique capta o microfone, o som do sistema, ou ambos — com forma de onda em tempo real para saberes que está a funcionar.",
            lu: "Ee Klick hëlt däi Mikro, de Systemton, oder béid op — mat enger Live-Welleform sou datt s du weess datt et leeft.",
            de: "Ein Klick erfasst dein Mikrofon, den Systemton oder beides — mit Live-Wellenform, damit du siehst, dass es läuft.",
            fr: "Un clic capte votre micro, le son système, ou les deux — avec une forme d'onde en direct pour savoir que ça marche."
        },
        "project.whispflow.does.transcribe.title": {
            en: "Turns speech into text, offline",
            pt: "Transforma fala em texto, offline",
            lu: "Maacht aus Sprooch Text, offline",
            de: "Macht aus Sprache Text, offline",
            fr: "Transforme la parole en texte, hors ligne"
        },
        "project.whispflow.does.transcribe.desc": {
            en: "Your words become text right on your computer using Whisper — no internet required and nothing uploaded.",
            pt: "As tuas palavras tornam-se texto no teu computador com o Whisper — sem internet e sem nada enviado.",
            lu: "Deng Wierder ginn um Computer zu Text mam Whisper — keng Internet néideg an näischt eropgelueden.",
            de: "Deine Worte werden direkt auf deinem Computer mit Whisper zu Text — kein Internet nötig und nichts hochgeladen.",
            fr: "Vos mots deviennent du texte directement sur votre ordinateur avec Whisper — sans internet et sans rien envoyer."
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
            en: "Your audio stays private",
            pt: "O teu áudio fica privado",
            lu: "Däin Audio bleift privat",
            de: "Dein Audio bleibt privat",
            fr: "Votre audio reste privé"
        },
        "project.whispflow.does.private.desc": {
            en: "Recordings and notes live on your machine. Only the transcript text is ever sent away — just for the summary.",
            pt: "Gravações e notas ficam na tua máquina. Só o texto da transcrição é enviado — apenas para o resumo.",
            lu: "Opnamen an Notizen bleiwen op denger Maschinn. Nëmmen den Transkriptiounstext gëtt verschéckt — just fir de Resumé.",
            de: "Aufnahmen und Notizen bleiben auf deiner Maschine. Nur der Transkripttext wird je verschickt — nur für die Zusammenfassung.",
            fr: "Enregistrements et notes restent sur votre machine. Seul le texte de la transcription est envoyé — juste pour le résumé."
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
            en: "Local Transcription",
            pt: "Transcrição Local",
            lu: "Lokal Transkriptioun",
            de: "Lokale Transkription",
            fr: "Transcription locale"
        },
        "project.whispflow.stack.whisper.body": {
            en: "Local transcription with multiple Whisper models (tiny → large), multi-language with auto-detection. Works fully offline — no data leaves your device.",
            pt: "Transcrição local com múltiplos modelos Whisper (tiny → large), multi-idioma com deteção automática. Funciona totalmente offline — nenhum dado sai do dispositivo.",
            lu: "Lokal Transkriptioun mat verschiddene Whisper-Modellen (tiny → large), multi-Sprooch mat Auto-Detektioun. Funktionéiert komplett offline — keng Daten verloossen den Apparat.",
            de: "Lokale Transkription mit mehreren Whisper-Modellen (tiny → large), mehrsprachig mit Auto-Erkennung. Funktioniert komplett offline — keine Daten verlassen das Gerät.",
            fr: "Transcription locale avec plusieurs modèles Whisper (tiny → large), multilingue avec détection automatique. Fonctionne entièrement hors ligne — aucune donnée ne quitte l'appareil."
        },
        "project.whispflow.stack.ai.title": {
            en: "AI Summarization",
            pt: "Resumo por IA",
            lu: "AI Zesummefaassung",
            de: "KI-Zusammenfassung",
            fr: "Synthèse par IA"
        },
        "project.whispflow.stack.ai.body": {
            en: "Structured output — key points, decisions, action items — from OpenAI, Mistral, or Anthropic. Multi-language summaries, cached to save cost.",
            pt: "Output estruturado — pontos-chave, decisões, ações — da OpenAI, Mistral ou Anthropic. Resumos multi-idioma, em cache para poupar custos.",
            lu: "Strukturéierten Output — Haaptpunkten, Decisiounen, Aktiounspunkten — vun OpenAI, Mistral oder Anthropic. Multi-Sprooch Resuméen, gecached fir Käschten ze spueren.",
            de: "Strukturierter Output — Kernpunkte, Entscheidungen, Aktionspunkte — von OpenAI, Mistral oder Anthropic. Mehrsprachige Zusammenfassungen, gecacht um Kosten zu sparen.",
            fr: "Sortie structurée — points clés, décisions, actions — depuis OpenAI, Mistral ou Anthropic. Résumés multilingues, mis en cache pour économiser."
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
            en: "Local-first for privacy and offline use, cloud for intelligence — users get the best of both worlds.",
            pt: "Local-first para privacidade e uso offline, cloud para inteligência — os utilizadores obtêm o melhor dos dois mundos.",
            lu: "Local-first fir Privatsphär an Offline-Notzung, Cloud fir Intelligenz — Benotzer kréien dat Bescht vu béide Welten.",
            de: "Local-first für Privatsphäre und Offline-Nutzung, Cloud für Intelligenz — Benutzer bekommen das Beste aus beiden Welten.",
            fr: "Local-first pour la confidentialité et l'usage hors ligne, cloud pour l'intelligence — le meilleur des deux mondes."
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
            en: "TALENT EXHIBITION — PROMA2",
            pt: "EXPOSIÇÃO DE TALENTOS — PROMA2",
            lu: "TALENT AUSSTELLUNG — PROMA2",
            de: "TALENT AUSSTELLUNG — PROMA2",
            fr: "EXPOSITION DE TALENTS — PROMA2"
        },
        "project.whispflow.hero.title": {
            en: "WhispFlow",
            pt: "WhispFlow",
            lu: "WhispFlow",
            de: "WhispFlow",
            fr: "WhispFlow"
        },
        "project.whispflow.hero.subtitle": {
            en: "A desktop application that records audio, transcribes it locally using faster-whisper, and generates structured AI summaries — built for the PROMA2 Talent Exhibition.",
            pt: "Aplicação desktop que grava áudio, transcreve localmente com faster-whisper e gera resumos IA estruturados — desenvolvida para a Exposição de Talentos PROMA2.",
            lu: "Desktop Applikatioun déi Audio opnëmmt, et lokal mat faster-whisper transkribéiert, an strukturéiert AI Resuméen generéiert — gebaut fir d'PROMA2 Talent Ausstellung.",
            de: "Desktop-Anwendung die Audio aufnimmt, lokal mit faster-whisper transkribiert und strukturierte KI-Zusammenfassungen generiert — gebaut für die PROMA2 Talent-Ausstellung.",
            fr: "Application de bureau qui enregistre l'audio, le transcrit localement avec faster-whisper et génère des résumés IA structurés — conçue pour l'Exposition de Talents PROMA2."
        },
        "project.whispflow.problem.title": {
            en: "The Problem",
            pt: "O Problema",
            lu: "De Problem",
            de: "Das Problem",
            fr: "Le Problème"
        },
        "project.whispflow.problem.body": {
            en: "During meetings and lectures, important information often gets lost. Taking notes manually splits attention between listening and writing, and reviewing long recordings afterward is time-consuming. This project explores how local AI and cloud services can automate the documentation workflow.",
            pt: "Durante reuniões e aulas, informações importantes perdem-se frequentemente. Tirar notas manualmente divide a atenção entre ouvir e escrever, e rever gravações longas é demorado. Este projeto explora como IA local e serviços cloud podem automatizar o fluxo de documentação.",
            lu: "Während Sëtzungen a Virlesunge gi wichteg Informatiounen dacks verluer. Manuell Notizen maachen deelt d'Opmierksamkeet tëscht Nolauschteren a Schreiwen, a laang Opnamen nozeliesen brauch Zäit. Dëse Projet exploréiert wéi lokal AI a Cloud-Servicer de Dokumentatiounsworkflow automatiséiere kënnen.",
            de: "Während Meetings und Vorlesungen gehen wichtige Informationen oft verloren. Manuelles Notieren teilt die Aufmerksamkeit zwischen Zuhören und Schreiben, und lange Aufnahmen nachträglich durchzugehen ist zeitaufwändig. Dieses Projekt untersucht, wie lokale KI und Cloud-Dienste den Dokumentations-Workflow automatisieren können.",
            fr: "Pendant les réunions et les cours, des informations importantes se perdent souvent. Prendre des notes manuellement divise l'attention entre écouter et écrire, et revoir de longs enregistrements prend du temps. Ce projet explore comment l'IA locale et les services cloud peuvent automatiser le flux de documentation."
        },
        "project.whispflow.solution.title": {
            en: "The Solution",
            pt: "A Solução",
            lu: "D'Léisung",
            de: "Die Lösung",
            fr: "La Solution"
        },
        "project.whispflow.solution.body": {
            en: "WhispFlow combines local speech-to-text with cloud-based AI summarization. It records audio, transcribes it on-device using faster-whisper, then sends the transcript to a cloud AI provider for structured output — key points, decisions, and action items. The entire workflow runs from a single desktop application, from recording to organized notes ready to share.",
            pt: "O WhispFlow combina speech-to-text local com resumos IA na cloud. Grava áudio, transcreve no dispositivo com faster-whisper, e depois envia a transcrição a um fornecedor cloud para output estruturado — pontos-chave, decisões e ações. Todo o fluxo corre numa única aplicação desktop, da gravação a notas organizadas prontas a partilhar.",
            lu: "WhispFlow kombinéiert lokal Speech-to-Text mat Cloud-baséierter AI Zesummefaassung. Et hëlt Audio op, transkribéiert et um Apparat mat faster-whisper, a schéckt dann d'Transkriptioun un e Cloud AI Provider fir strukturéierten Output — Haaptpunkten, Decisiounen an Aktiounspunkten. De ganze Workflow leeft vun enger eenzeger Desktop Applikatioun, vun der Opnam bis zu organiséierten Notizen fäerdeg fir ze deelen.",
            de: "WhispFlow kombiniert lokale Spracherkennung mit Cloud-basierter KI-Zusammenfassung. Es nimmt Audio auf, transkribiert es auf dem Gerät mit faster-whisper und sendet das Transkript dann an einen Cloud-KI-Anbieter für strukturierten Output — Kernpunkte, Entscheidungen und Aktionspunkte. Der gesamte Workflow läuft in einer einzigen Desktop-Anwendung, von der Aufnahme bis zu organisierten Notizen zum Teilen.",
            fr: "WhispFlow combine la reconnaissance vocale locale avec la synthèse IA en cloud. Il enregistre l'audio, le transcrit sur l'appareil avec faster-whisper, puis envoie la transcription à un fournisseur IA cloud pour une sortie structurée — points clés, décisions et actions. Tout le flux fonctionne depuis une seule application de bureau, de l'enregistrement aux notes organisées prêtes à partager."
        },
        "project.whispflow.workflow.title": {
            en: "Core Workflow",
            pt: "Fluxo Principal",
            lu: "Kär-Workflow",
            de: "Kern-Workflow",
            fr: "Flux Principal"
        },
        "project.whispflow.workflow.body1": {
            en: "<strong>Record</strong> — One-click recording or keyboard shortcut (Ctrl+R). Three modes: Microphone, System Audio, or Hybrid. Live waveform and timer during recording.",
            pt: "<strong>Gravar</strong> — Gravação com um clique ou atalho de teclado (Ctrl+R). Três modos: Microfone, Áudio do Sistema ou Híbrido. Forma de onda e cronómetro em tempo real.",
            lu: "<strong>Ophuelen</strong> — Een-Klick Opnam oder Tastaturkierzel (Ctrl+R). Dräi Moden: Mikro, System Audio, oder Hybrid. Live Welleform an Timer während der Opnam.",
            de: "<strong>Aufnehmen</strong> — Ein-Klick-Aufnahme oder Tastenkürzel (Strg+R). Drei Modi: Mikrofon, Systemaudio oder Hybrid. Live-Wellenform und Timer während der Aufnahme.",
            fr: "<strong>Enregistrer</strong> — Enregistrement en un clic ou raccourci clavier (Ctrl+R). Trois modes : Micro, Audio Système ou Hybride. Forme d'onde et minuteur en direct."
        },
        "project.whispflow.workflow.body2": {
            en: "<strong>Transcribe</strong> — Local transcription using faster-whisper. Choose your model (tiny to large) based on speed vs. accuracy. Multi-language with auto-detection. Live transcription available during recording.",
            pt: "<strong>Transcrever</strong> — Transcrição local usando faster-whisper. Escolhe o modelo (tiny a large) baseado em velocidade vs. precisão. Multi-idioma com deteção automática. Transcrição em tempo real durante a gravação.",
            lu: "<strong>Transkribéieren</strong> — Lokal Transkriptioun mat faster-whisper. Wiel deen Modell (tiny bis large) baséiert op Geschwindegkeet vs. Genauegkeet. Multi-Sprooch mat Auto-Detektioun. Live Transkriptioun während der Opnam.",
            de: "<strong>Transkribieren</strong> — Lokale Transkription mit faster-whisper. Modell wählen (tiny bis large) basierend auf Geschwindigkeit vs. Genauigkeit. Mehrsprachig mit Auto-Erkennung. Live-Transkription während der Aufnahme.",
            fr: "<strong>Transcrire</strong> — Transcription locale avec faster-whisper. Choisissez le modèle (tiny à large) selon vitesse vs. précision. Multi-langue avec détection auto. Transcription en direct pendant l'enregistrement."
        },
        "project.whispflow.workflow.body3": {
            en: "<strong>Summarize</strong> — AI generates structured output: key points, decisions, action items, and a full summary. Pick from 3 providers. Generate in any language. Results are cached to save API costs.",
            pt: "<strong>Resumir</strong> — A IA gera output estruturado: pontos-chave, decisões, ações e um resumo completo. Escolhe entre 3 fornecedores. Gera em qualquer idioma. Resultados em cache para poupar custos.",
            lu: "<strong>Zesummefaassen</strong> — AI generéiert strukturéierten Output: Haaptpunkten, Decisiounen, Aktiounspunkten an e vollstännege Resumé. Wiel aus 3 Provideren. Generéier an all Sprooch. Resultater ginn gecached fir API-Käschten ze spueren.",
            de: "<strong>Zusammenfassen</strong> — KI generiert strukturierten Output: Kernpunkte, Entscheidungen, Aktionspunkte und eine vollständige Zusammenfassung. 3 Anbieter zur Wahl. In jeder Sprache generieren. Ergebnisse werden gecacht um API-Kosten zu sparen.",
            fr: "<strong>Résumer</strong> — L'IA génère une sortie structurée : points clés, décisions, actions et un résumé complet. 3 fournisseurs au choix. Génération dans n'importe quelle langue. Résultats mis en cache pour économiser les coûts API."
        },
        "project.whispflow.workflow.body4": {
            en: "<strong>Export</strong> — Copy to clipboard or export to file. Open session folders directly in file explorer. Share with colleagues or classmates.",
            pt: "<strong>Exportar</strong> — Copiar para a área de transferência ou exportar para ficheiro. Abrir pastas de sessão diretamente no explorador. Partilhar com colegas.",
            lu: "<strong>Exportéieren</strong> — An d'Clipboard kopéieren oder an e Fichier exportéieren. Sessiounsdossieren direkt am Datei-Explorer opmaachen. Mat Kollegen deelen.",
            de: "<strong>Exportieren</strong> — In die Zwischenablage kopieren oder als Datei exportieren. Sitzungsordner direkt im Datei-Explorer öffnen. Mit Kollegen teilen.",
            fr: "<strong>Exporter</strong> — Copier dans le presse-papiers ou exporter en fichier. Ouvrir les dossiers de session directement dans l'explorateur. Partager avec les collègues."
        },
        "project.whispflow.features.title": {
            en: "Key Features",
            pt: "Funcionalidades Principais",
            lu: "Haaptfunktiounen",
            de: "Hauptfunktionen",
            fr: "Fonctionnalités Clés"
        },
        "project.whispflow.features.recording": {
            en: "One-click recording with 3 audio modes (mic, system, hybrid)",
            pt: "Gravação com um clique em 3 modos (micro, sistema, híbrido)",
            lu: "Een-Klick Opnam mat 3 Audio-Moden (Mikro, System, Hybrid)",
            de: "Ein-Klick-Aufnahme mit 3 Audio-Modi (Mikro, System, Hybrid)",
            fr: "Enregistrement en un clic avec 3 modes audio (micro, système, hybride)"
        },
        "project.whispflow.features.transcription": {
            en: "Local transcription with multiple Whisper models — works offline",
            pt: "Transcrição local com múltiplos modelos Whisper — funciona offline",
            lu: "Lokal Transkriptioun mat verschiddene Whisper Modellen — funktionéiert offline",
            de: "Lokale Transkription mit mehreren Whisper-Modellen — funktioniert offline",
            fr: "Transcription locale avec plusieurs modèles Whisper — fonctionne hors ligne"
        },
        "project.whispflow.features.summaries": {
            en: "AI summaries from 3 providers with multi-language support",
            pt: "Resumos IA de 3 fornecedores com suporte multi-idioma",
            lu: "AI Zesummefaassungen vun 3 Provideren mat Multi-Sprooch Support",
            de: "KI-Zusammenfassungen von 3 Anbietern mit Mehrsprachunterstützung",
            fr: "Résumés IA de 3 fournisseurs avec support multilingue"
        },
        "project.whispflow.features.versioning": {
            en: "Versioned transcripts and summaries — re-transcribe without losing data",
            pt: "Transcrições e resumos versionados — retranscrever sem perder dados",
            lu: "Versionéiert Transkriptiounen a Resuméen — nei transkribéieren ouni Daten ze verléieren",
            de: "Versionierte Transkripte und Zusammenfassungen — neu transkribieren ohne Datenverlust",
            fr: "Transcriptions et résumés versionnés — retranscrire sans perdre de données"
        },
        "project.whispflow.features.sessions": {
            en: "Session management with search, tags, sorting, and context menus",
            pt: "Gestão de sessões com pesquisa, tags, ordenação e menus de contexto",
            lu: "Sessiounsmanagement mat Sich, Tags, Sortéierung a Kontextmenüen",
            de: "Sitzungsverwaltung mit Suche, Tags, Sortierung und Kontextmenüs",
            fr: "Gestion des sessions avec recherche, tags, tri et menus contextuels"
        },
        "project.whispflow.features.export": {
            en: "Export and sharing: clipboard, file, or open folder directly",
            pt: "Exportação e partilha: clipboard, ficheiro, ou abrir pasta diretamente",
            lu: "Exportéieren a Deelen: Clipboard, Fichier, oder Dossier direkt opmaachen",
            de: "Export und Teilen: Zwischenablage, Datei oder Ordner direkt öffnen",
            fr: "Export et partage : presse-papiers, fichier, ou ouvrir le dossier directement"
        },
        "project.whispflow.versioning.title": {
            en: "Versioned Transcripts",
            pt: "Transcrições Versionadas",
            lu: "Versionéiert Transkriptiounen",
            de: "Versionierte Transkripte",
            fr: "Transcriptions Versionnées"
        },
        "project.whispflow.versioning.body": {
            en: "Re-transcribe with a different model or language — no data is overwritten. Switch between transcript versions (v1, v2, v3...) via dropdown. Each version tracks the model, language, and timestamp. Summaries are keyed by transcript version and language (e.g. v1_en, v2_fr).",
            pt: "Retranscreve com um modelo ou idioma diferente — nenhum dado é sobrescrito. Alterna entre versões (v1, v2, v3...) via dropdown. Cada versão regista o modelo, idioma e timestamp. Resumos são indexados por versão + idioma (ex: v1_en, v2_fr).",
            lu: "Nei transkribéieren mat engem anere Modell oder Sprooch — keng Daten ginn iwwerschriwwen. Wiesselt tëscht Transkriptiounsversiounen (v1, v2, v3...) via Dropdown. All Versioun trackt de Modell, Sprooch an Timestamp. Resuméen gi geschlësselt no Versioun + Sprooch (z.B. v1_en, v2_fr).",
            de: "Neu transkribieren mit einem anderen Modell oder Sprache — keine Daten werden überschrieben. Zwischen Versionen (v1, v2, v3...) per Dropdown wechseln. Jede Version speichert Modell, Sprache und Zeitstempel. Zusammenfassungen sind nach Version + Sprache indexiert (z.B. v1_en, v2_fr).",
            fr: "Retranscrire avec un modèle ou langue différente — aucune donnée n'est écrasée. Basculer entre les versions (v1, v2, v3...) via menu déroulant. Chaque version enregistre le modèle, la langue et l'horodatage. Les résumés sont indexés par version + langue (ex : v1_en, v2_fr)."
        },
        "project.whispflow.learned.title": {
            en: "Lessons Learned",
            pt: "Lições Aprendidas",
            lu: "Léieren geléiert",
            de: "Gelernte Lektionen",
            fr: "Leçons Apprises"
        },
        "project.whispflow.learned.hybrid": {
            en: "<strong>Hybrid architecture works</strong> — Local-first for privacy and offline use, cloud for intelligence. Users get the best of both worlds.",
            pt: "<strong>Arquitetura híbrida funciona</strong> — Local-first para privacidade e uso offline, cloud para inteligência. Os utilizadores obtêm o melhor dos dois mundos.",
            lu: "<strong>Hybrid Architektur funktionéiert</strong> — Local-first fir Privatsphär an Offline-Notzung, Cloud fir Intelligenz. Benotzer kréien dat Bescht vu béide Welten.",
            de: "<strong>Hybride Architektur funktioniert</strong> — Local-first für Privatsphäre und Offline-Nutzung, Cloud für Intelligenz. Benutzer bekommen das Beste aus beiden Welten.",
            fr: "<strong>L'architecture hybride fonctionne</strong> — Local-first pour la vie privée et l'utilisation hors ligne, cloud pour l'intelligence. Les utilisateurs profitent du meilleur des deux mondes."
        },
        "project.whispflow.learned.models": {
            en: "<strong>Model selection matters</strong> — Giving users a choice between speed and accuracy (tiny vs. large Whisper models) solved the hardware limitation problem elegantly.",
            pt: "<strong>A seleção do modelo importa</strong> — Dar aos utilizadores escolha entre velocidade e precisão (modelos tiny vs. large) resolveu elegantemente o problema de limitações de hardware.",
            lu: "<strong>Modell-Auswiel ass wichteg</strong> — De Benotzer eng Wiel tëscht Geschwindegkeet an Genauegkeet ze ginn (tiny vs. large Whisper Modellen) huet d'Hardware-Limitatiounsproblem elegant geléist.",
            de: "<strong>Modellauswahl ist wichtig</strong> — Den Benutzern die Wahl zwischen Geschwindigkeit und Genauigkeit zu geben (tiny vs. large Whisper-Modelle) löste das Hardware-Limitierungsproblem elegant.",
            fr: "<strong>Le choix du modèle compte</strong> — Donner aux utilisateurs le choix entre vitesse et précision (modèles Whisper tiny vs. large) a résolu élégamment le problème des limitations matérielles."
        },
        "project.whispflow.learned.versioning": {
            en: "<strong>Never overwrite user data</strong> — The versioning system means you can always go back. Users trust the tool more when they know nothing gets deleted.",
            pt: "<strong>Nunca sobrescrever dados do utilizador</strong> — O sistema de versionamento significa que podes sempre voltar atrás. Os utilizadores confiam mais na ferramenta quando sabem que nada é apagado.",
            lu: "<strong>Ni Benotzerdaten iwwerschreiwen</strong> — De Versionéierungssystem bedeit datt een ëmmer zréck ka goen. Benotzer vertrauen dem Tool méi wann se wëssen datt näischt geläscht gëtt.",
            de: "<strong>Nie Benutzerdaten überschreiben</strong> — Das Versionierungssystem bedeutet, dass man immer zurückgehen kann. Benutzer vertrauen dem Tool mehr, wenn sie wissen, dass nichts gelöscht wird.",
            fr: "<strong>Ne jamais écraser les données utilisateur</strong> — Le système de versionnage permet de toujours revenir en arrière. Les utilisateurs font plus confiance à l'outil quand ils savent que rien n'est supprimé."
        },
        "project.whispflow.learned.caching": {
            en: "<strong>Cache everything expensive</strong> — Caching AI summaries by transcript version + language prevents unnecessary API calls and keeps costs under control.",
            pt: "<strong>Cache em tudo que é caro</strong> — Fazer cache dos resumos IA por versão + idioma evita chamadas API desnecessárias e mantém os custos controlados.",
            lu: "<strong>Alles cache wat deier ass</strong> — AI Resuméen no Transkriptiounsversioun + Sprooch ze cachen verhënnert onnéideg API-Opriff a hält d'Käschten ënner Kontroll.",
            de: "<strong>Alles Teure cachen</strong> — KI-Zusammenfassungen nach Transkriptversion + Sprache zu cachen verhindert unnötige API-Aufrufe und hält die Kosten unter Kontrolle.",
            fr: "<strong>Mettre en cache tout ce qui coûte cher</strong> — Cacher les résumés IA par version + langue évite les appels API inutiles et garde les coûts sous contrôle."
        },
        "project.whispflow.phases.title": {
            en: "Project Phases",
            pt: "Fases do Projeto",
            lu: "Projet Phasen",
            de: "Projektphasen",
            fr: "Phases du Projet"
        },
        "project.whispflow.phases.body1": {
            en: "<strong>Phase 1 (Current) — Local-First:</strong> All core features are implemented and working. Desktop recording, local transcription, AI summaries, versioning, session management, and export.",
            pt: "<strong>Fase 1 (Atual) — Local-First:</strong> Todas as funcionalidades core estão implementadas e a funcionar. Gravação desktop, transcrição local, resumos IA, versionamento, gestão de sessões e exportação.",
            lu: "<strong>Phase 1 (Aktuell) — Local-First:</strong> All Kär-Funktiounen sinn implementéiert a funktionéieren. Desktop Opnam, lokal Transkriptioun, AI Resuméen, Versionéierung, Sessiounsmanagement an Export.",
            de: "<strong>Phase 1 (Aktuell) — Local-First:</strong> Alle Kernfunktionen sind implementiert und funktionieren. Desktop-Aufnahme, lokale Transkription, KI-Zusammenfassungen, Versionierung, Sitzungsverwaltung und Export.",
            fr: "<strong>Phase 1 (Actuelle) — Local-First :</strong> Toutes les fonctionnalités principales sont implémentées et fonctionnelles. Enregistrement bureau, transcription locale, résumés IA, versionnage, gestion des sessions et export."
        },
        "project.whispflow.phases.body2": {
            en: "<strong>Phase 2 (Planned) — Cloud-First:</strong> Cloud storage, remote transcription, cross-device sync, user accounts, collaboration, and offline fallback mode.",
            pt: "<strong>Fase 2 (Planeada) — Cloud-First:</strong> Armazenamento cloud, transcrição remota, sincronização entre dispositivos, contas de utilizador, colaboração e modo offline de fallback.",
            lu: "<strong>Phase 2 (Geplangt) — Cloud-First:</strong> Cloud Storage, Remote Transkriptioun, Cross-Device Sync, Benotzerkonten, Kollaboratioun an Offline Fallback Modus.",
            de: "<strong>Phase 2 (Geplant) — Cloud-First:</strong> Cloud-Speicher, Remote-Transkription, geräteübergreifende Synchronisation, Benutzerkonten, Zusammenarbeit und Offline-Fallback-Modus.",
            fr: "<strong>Phase 2 (Prévue) — Cloud-First :</strong> Stockage cloud, transcription à distance, synchronisation multi-appareils, comptes utilisateur, collaboration et mode hors ligne de secours."
        },
        "project.whispflow.context.title": {
            en: "About This Project",
            pt: "Sobre Este Projeto",
            lu: "Iwwer Dëse Projet",
            de: "Über Dieses Projekt",
            fr: "À Propos de ce Projet"
        },
        "project.whispflow.context.body": {
            en: "Built for the <strong>Talent Exhibition</strong> (PROMA2 course) in the BTS Cloud Computing programme at Lycée Guillaume Kroll. The goal: pick a real problem, design a technical solution, and deliver a working prototype that applies cloud and AI concepts from the semester.",
            pt: "Desenvolvido para a <strong>Exposição de Talentos</strong> (curso PROMA2) no programa BTS Cloud Computing no Lycée Guillaume Kroll. O objetivo: escolher um problema real, conceber uma solução técnica e entregar um protótipo funcional que aplique conceitos de cloud e IA do semestre.",
            lu: "Gebaut fir d'<strong>Talent Ausstellung</strong> (PROMA2 Cours) am BTS Cloud Computing Programm um Lycée Guillaume Kroll. D'Zil: e reelle Problem erkennen, eng technesch Léisung designen, an e funktionéierende Prototyp ofliwweren deen Cloud- an AI-Konzepter vum Semester applizéiert.",
            de: "Gebaut für die <strong>Talent-Ausstellung</strong> (PROMA2-Kurs) im BTS Cloud Computing Programm am Lycée Guillaume Kroll. Das Ziel: ein reales Problem wählen, eine technische Lösung entwerfen und einen funktionierenden Prototyp liefern, der Cloud- und KI-Konzepte des Semesters anwendet.",
            fr: "Conçu pour l'<strong>Exposition de Talents</strong> (cours PROMA2) dans le programme BTS Cloud Computing au Lycée Guillaume Kroll. L'objectif : choisir un problème réel, concevoir une solution technique et livrer un prototype fonctionnel qui applique les concepts cloud et IA du semestre."
        },
        "project.whispflow.sidebar.feature1": {
            en: "One-click audio recording",
            pt: "Gravação de áudio com um clique",
            lu: "Een-Klick Audio Opnam",
            de: "Ein-Klick-Audioaufnahme",
            fr: "Enregistrement audio en un clic"
        },
        "project.whispflow.sidebar.feature2": {
            en: "Local AI transcription",
            pt: "Transcrição IA local",
            lu: "Lokal AI Transkriptioun",
            de: "Lokale KI-Transkription",
            fr: "Transcription IA locale"
        },
        "project.whispflow.sidebar.feature3": {
            en: "3 AI summary providers",
            pt: "3 fornecedores de resumos IA",
            lu: "3 AI Resumé Provideren",
            de: "3 KI-Zusammenfassungsanbieter",
            fr: "3 fournisseurs de résumés IA"
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
            en: "Privacy-first architecture",
            pt: "Arquitetura privacy-first",
            lu: "Privacy-first Architektur",
            de: "Privacy-first-Architektur",
            fr: "Architecture privacy-first"
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
