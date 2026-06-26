/**
 * GradingDino project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 *
 * Two-lens case-study layout (Overview / Technical). Tech chips in the
 * stack/architecture diagram are language-neutral and stay hardcoded in
 * the HTML; only prose, labels and titles are translated here.
 */

(function() {
    'use strict';
    const extra = {
        /* ---- Hero ---- */
        "project.gradingdino.badge": {
            en: "SCHOOL PROJECT",
            pt: "PROJETO ESCOLAR",
            lu: "SCHOULPROJET",
            de: "SCHULPROJEKT",
            fr: "PROJET SCOLAIRE"
        },
        "project.gradingdino.title": {
            en: "GradingDino",
            pt: "GradingDino",
            lu: "GradingDino",
            de: "GradingDino",
            fr: "GradingDino"
        },
        "project.gradingdino.subtitle": {
            en: "A grade management system built with Django. Teachers create classrooms and manage student grades, while students track their progress. Group project MVP — learned valuable lessons about framework selection.",
            pt: "Um sistema de gestão de notas construído com Django. Os professores criam turmas e gerem as notas dos alunos, enquanto os alunos acompanham o seu progresso. MVP de projeto de grupo — lições valiosas sobre a escolha de frameworks.",
            lu: "E Noteverwaltungssystem mat Django gebaut. D'Enseignanten kreéieren Klassen a verwalten d'Noten, an d'Schüler suivéieren hire Fortschrëtt. Grupp-Projet MVP — wäertvoll Lektiounen iwwer Framework-Auswiel.",
            de: "Ein Notenverwaltungssystem mit Django. Lehrer erstellen Klassen und verwalten Noten, Schüler verfolgen ihren Fortschritt. Gruppenprojekt MVP — wertvolle Lektionen über Framework-Auswahl.",
            fr: "Un système de gestion des notes construit avec Django. Les enseignants créent des classes et gèrent les notes, les étudiants suivent leur progression. MVP de projet de groupe — leçons précieuses sur le choix des frameworks."
        },
        "project.gradingdino.mvp": {
            en: "MVP",
            pt: "MVP",
            lu: "MVP",
            de: "MVP",
            fr: "MVP"
        },

        /* ---- At-a-glance metric chips ---- */
        "project.gradingdino.glance.team.label": {
            en: "teammates, one codebase",
            pt: "colegas, uma só base de código",
            lu: "Teammemberen, eng Codebasis",
            de: "Teammitglieder, eine Codebasis",
            fr: "coéquipiers, une seule base de code"
        },
        "project.gradingdino.glance.roles.label": {
            en: "roles: student, teacher, admin",
            pt: "papéis: aluno, professor, admin",
            lu: "Rollen: Schüler, Enseignant, Admin",
            de: "Rollen: Schüler, Lehrer, Admin",
            fr: "rôles : étudiant, enseignant, admin"
        },
        "project.gradingdino.glance.command.label": {
            en: "command boots the whole stack",
            pt: "comando arranca todo o sistema",
            lu: "Kommando start de ganze Stack",
            de: "Befehl startet den ganzen Stack",
            fr: "commande lance toute la stack"
        },
        "project.gradingdino.glance.stories.label": {
            en: "user stories mapped before code",
            pt: "user stories definidas antes do código",
            lu: "User Stories festgeluecht virum Code",
            de: "User Stories vor dem Code definiert",
            fr: "user stories définies avant le code"
        },

        /* ---- Architecture diagram ---- */
        "project.gradingdino.arch.title": {
            en: "How a request flows",
            pt: "Como flui um pedido",
            lu: "Wéi eng Ufro leeft",
            de: "Wie eine Anfrage fließt",
            fr: "Le parcours d'une requête"
        },
        "project.gradingdino.arch.browser": {
            en: "Browser",
            pt: "Navegador",
            lu: "Browser",
            de: "Browser",
            fr: "Navigateur"
        },
        "project.gradingdino.arch.browser.meta": {
            en: "any device",
            pt: "qualquer dispositivo",
            lu: "all Apparat",
            de: "jedes Gerät",
            fr: "tout appareil"
        },
        "project.gradingdino.arch.browser.spec": {
            en: "student · teacher · admin",
            pt: "aluno · professor · admin",
            lu: "Schüler · Enseignant · Admin",
            de: "Schüler · Lehrer · Admin",
            fr: "étudiant · enseignant · admin"
        },
        "project.gradingdino.arch.http": {
            en: "HTTPS form POST",
            pt: "HTTPS form POST",
            lu: "HTTPS form POST",
            de: "HTTPS form POST",
            fr: "HTTPS form POST"
        },
        "project.gradingdino.arch.compose": {
            en: "docker compose · one host",
            pt: "docker compose · um host",
            lu: "docker compose · ee Host",
            de: "docker compose · ein Host",
            fr: "docker compose · un hôte"
        },
        "project.gradingdino.arch.web.title": {
            en: "Web container",
            pt: "Contentor web",
            lu: "Web-Container",
            de: "Web-Container",
            fr: "Conteneur web"
        },
        "project.gradingdino.arch.web.meta": {
            en: "port 8000",
            pt: "port 8000",
            lu: "port 8000",
            de: "port 8000",
            fr: "port 8000"
        },
        "project.gradingdino.arch.web.spec": {
            en: "django 5.0 · python 3.11-slim · pico.css SSR",
            pt: "django 5.0 · python 3.11-slim · pico.css SSR",
            lu: "django 5.0 · python 3.11-slim · pico.css SSR",
            de: "django 5.0 · python 3.11-slim · pico.css SSR",
            fr: "django 5.0 · python 3.11-slim · pico.css SSR"
        },
        "project.gradingdino.arch.db.title": {
            en: "Database container",
            pt: "Contentor de base de dados",
            lu: "Datebank-Container",
            de: "Datenbank-Container",
            fr: "Conteneur de base de données"
        },
        "project.gradingdino.arch.db.meta": {
            en: "port 5432",
            pt: "port 5432",
            lu: "port 5432",
            de: "port 5432",
            fr: "port 5432"
        },
        "project.gradingdino.arch.db.spec": {
            en: "postgresql 16 · named volume",
            pt: "postgresql 16 · named volume",
            lu: "postgresql 16 · named volume",
            de: "postgresql 16 · named volume",
            fr: "postgresql 16 · named volume"
        },
        "project.gradingdino.arch.note": {
            en: "One <code>docker compose up</code> boots both containers. Django waits for PostgreSQL's health check, applies migrations, then seeds the admin user automatically — no manual setup.",
            pt: "Um <code>docker compose up</code> arranca os dois contentores. O Django espera pelo health check do PostgreSQL, aplica as migrações e cria automaticamente o utilizador admin — sem configuração manual.",
            lu: "Ee <code>docker compose up</code> start déi zwee Container. Django waart op de Health Check vu PostgreSQL, mécht d'Migratiounen an erstellt automatesch den Admin-Benotzer — keng manuell Konfiguratioun.",
            de: "Ein <code>docker compose up</code> startet beide Container. Django wartet auf den Health-Check von PostgreSQL, wendet die Migrationen an und legt den Admin-Benutzer automatisch an — keine manuelle Einrichtung.",
            fr: "Un seul <code>docker compose up</code> démarre les deux conteneurs. Django attend le health check de PostgreSQL, applique les migrations, puis crée automatiquement l'utilisateur admin — sans configuration manuelle."
        },

        /* ---- Overview: "What it does" cards ---- */
        "project.gradingdino.does.title": {
            en: "What it does",
            pt: "O que faz",
            lu: "Wat et mécht",
            de: "Was es macht",
            fr: "Ce qu'il fait"
        },
        "project.gradingdino.does.teacher.title": {
            en: "Teachers run the classroom",
            pt: "Os professores gerem a turma",
            lu: "D'Enseignante féieren d'Klass",
            de: "Lehrer führen die Klasse",
            fr: "Les enseignants gèrent la classe"
        },
        "project.gradingdino.does.teacher.desc": {
            en: "Create classes, enroll students, and enter grades with comments — plus private observations only staff can see.",
            pt: "Criar turmas, inscrever alunos e lançar notas com comentários — além de observações privadas que só o pessoal vê.",
            lu: "Klassen erstellen, Schüler aschreiwen an Noten mat Kommentaren aginn — plus privat Observatiounen déi nëmmen de Personal gesäit.",
            de: "Klassen erstellen, Schüler einschreiben und Noten mit Kommentaren eintragen — plus private Beobachtungen, die nur das Personal sieht.",
            fr: "Créer des classes, inscrire des étudiants et saisir des notes avec commentaires — plus des observations privées visibles uniquement par le personnel."
        },
        "project.gradingdino.does.student.title": {
            en: "Students track their progress",
            pt: "Os alunos acompanham o seu progresso",
            lu: "D'Schüler suivéieren hire Fortschrëtt",
            de: "Schüler verfolgen ihren Fortschritt",
            fr: "Les étudiants suivent leur progression"
        },
        "project.gradingdino.does.student.desc": {
            en: "Sign in to see grades by subject and semester, watch progress build over the year, and jot personal notes.",
            pt: "Iniciar sessão para ver as notas por disciplina e semestre, acompanhar a evolução ao longo do ano e escrever notas pessoais.",
            lu: "Aloggen fir d'Noten pro Fach a Semester ze gesinn, de Fortschrëtt iwwer d'Joer ze verfolgen a perséinlech Notizen ze schreiwen.",
            de: "Anmelden, um Noten nach Fach und Semester zu sehen, den Fortschritt übers Jahr zu verfolgen und persönliche Notizen zu schreiben.",
            fr: "Se connecter pour voir les notes par matière et semestre, suivre la progression sur l'année et noter des remarques personnelles."
        },
        "project.gradingdino.does.roles.title": {
            en: "Everyone in their lane",
            pt: "Cada um no seu lugar",
            lu: "Jiddereen a senger Spuer",
            de: "Jeder in seiner Spur",
            fr: "Chacun à sa place"
        },
        "project.gradingdino.does.roles.desc": {
            en: "Students, teachers and admins each get their own view — nobody sees more than they should.",
            pt: "Alunos, professores e administradores têm cada um a sua vista — ninguém vê mais do que deve.",
            lu: "Schüler, Enseignanten an Admins hu jeeweils hir eege Vue — keen gesäit méi wéi hien soll.",
            de: "Schüler, Lehrer und Admins haben jeweils ihre eigene Ansicht — niemand sieht mehr als nötig.",
            fr: "Étudiants, enseignants et admins ont chacun leur propre vue — personne n'en voit plus qu'il ne le doit."
        },
        "project.gradingdino.does.oneCommand.title": {
            en: "Starts with one command",
            pt: "Arranca com um só comando",
            lu: "Start mat engem Kommando",
            de: "Startet mit einem Befehl",
            fr: "Démarre en une commande"
        },
        "project.gradingdino.does.oneCommand.desc": {
            en: "The whole app and its database boot together — it runs the same on any machine with Docker installed.",
            pt: "A aplicação e a sua base de dados arrancam em conjunto — funciona igual em qualquer máquina com Docker.",
            lu: "Déi ganz App an hir Datebank starten zesummen — et leeft d'selwecht op all Maschinn mat Docker.",
            de: "Die ganze App und ihre Datenbank starten zusammen — sie läuft auf jeder Maschine mit Docker gleich.",
            fr: "L'application et sa base de données démarrent ensemble — ça tourne pareil sur n'importe quelle machine avec Docker."
        },

        /* ---- The Project (intro) ---- */
        "project.gradingdino.theProject": {
            en: "The Project",
            pt: "O Projeto",
            lu: "De Projet",
            de: "Das Projekt",
            fr: "Le Projet"
        },
        "project.gradingdino.intro1": {
            en: "GradingDino was a <strong>BTS Cloud Computing group project</strong> focused on project management methodology. A team of four worked together to build a grade management web application where teachers can create classrooms, add students, and manage grades — while students can log in to view their progress and leave personal notes.",
            pt: "O GradingDino foi um <strong>projeto de grupo do BTS Cloud Computing</strong> focado em metodologia de gestão de projetos. Uma equipa de quatro pessoas trabalhou em conjunto para construir uma aplicação web de gestão de notas onde os professores podem criar turmas, adicionar alunos e gerir notas — enquanto os alunos podem iniciar sessão para ver o seu progresso e deixar notas pessoais.",
            lu: "GradingDino war e <strong>BTS Cloud Computing Grupp-Projet</strong> fokusséiert op Projet-Management Methodologie. Eng Equipe vu véier huet zesummegeschafft fir eng Noten-Verwaltungs-Webapp ze bauen wou Enseignanten Klassen kreéieren, Schüler derbäisetzen an Noten verwalten — während d'Schüler sech aloggen kënnen fir hire Fortschrëtt ze gesinn an perséinlech Notizen ze schreiwen.",
            de: "GradingDino war ein <strong>BTS Cloud Computing Gruppenprojekt</strong> mit Fokus auf Projektmanagement-Methodik. Ein Team von vier arbeitete zusammen, um eine Notenverwaltungs-Webanwendung zu erstellen, in der Lehrer Klassen erstellen, Schüler hinzufügen und Noten verwalten können — während Schüler sich anmelden können, um ihren Fortschritt zu sehen und persönliche Notizen zu hinterlassen.",
            fr: "GradingDino était un <strong>projet de groupe BTS Cloud Computing</strong> axé sur la méthodologie de gestion de projet. Une équipe de quatre a travaillé ensemble pour créer une application web de gestion des notes où les enseignants peuvent créer des classes, ajouter des étudiants et gérer les notes — tandis que les étudiants peuvent se connecter pour voir leur progression et laisser des notes personnelles."
        },

        /* ---- Team structure ---- */
        "project.gradingdino.teamTitle": {
            en: "Team Structure & My Role",
            pt: "Estrutura da Equipa e o Meu Papel",
            lu: "Team Struktur & Meng Roll",
            de: "Teamstruktur & Meine Rolle",
            fr: "Structure de l'équipe & Mon rôle"
        },
        "project.gradingdino.teamIntro": {
            en: "We worked as a team of four with clearly divided responsibilities:",
            pt: "Trabalhámos como uma equipa de quatro com responsabilidades claramente divididas:",
            lu: "Mir hunn als Equipe vu véier geschafft mat kloer opgedeelten Verantwortlechkeeten:",
            de: "Wir arbeiteten als Team von vier mit klar aufgeteilten Verantwortlichkeiten:",
            fr: "Nous avons travaillé en équipe de quatre avec des responsabilités clairement réparties :"
        },
        "project.gradingdino.myRole": {
            en: "<strong>My Role (Lead Developer)</strong>: I handled most of the coding — Django models, views, templates, and Docker configuration. I also collaborated on database design and helped structure the documentation.",
            pt: "<strong>O Meu Papel (Programador Principal)</strong>: Tratei da maior parte da programação — modelos Django, views, templates e configuração Docker. Também colaborei no design da base de dados e ajudei a estruturar a documentação.",
            lu: "<strong>Meng Roll (Lead Developer)</strong>: Ech hunn de gréissten Deel vum Coding gemaach — Django Modeller, Views, Templates, an Docker Konfiguratioun. Ech hunn och um Datebank-Design matgeschafft an d'Dokumentatioun strukturéiert.",
            de: "<strong>Meine Rolle (Lead Developer)</strong>: Ich habe den Großteil der Programmierung übernommen — Django-Modelle, Views, Templates und Docker-Konfiguration. Ich habe auch am Datenbankdesign mitgearbeitet und die Dokumentation strukturiert.",
            fr: "<strong>Mon rôle (Développeur principal)</strong> : J'ai géré la majeure partie du code — modèles Django, vues, templates et configuration Docker. J'ai également collaboré à la conception de la base de données et aidé à structurer la documentation."
        },
        "project.gradingdino.colleagueDB": {
            en: "<strong>Colleague (Database & Docs)</strong>: Worked with me on database schema design and took ownership of technical documentation.",
            pt: "<strong>Colega (Base de Dados e Documentação)</strong>: Trabalhou comigo no design do esquema da base de dados e assumiu a responsabilidade pela documentação técnica.",
            lu: "<strong>Kolleg (Datebank & Docs)</strong>: Huet mat mir um Datebank-Schema Design geschafft an d'technesch Dokumentatioun iwwerholl.",
            de: "<strong>Kollege (Datenbank & Docs)</strong>: Arbeitete mit mir am Datenbankschema-Design und übernahm die technische Dokumentation.",
            fr: "<strong>Collègue (Base de données & Docs)</strong> : A travaillé avec moi sur la conception du schéma de base de données et a pris en charge la documentation technique."
        },
        "project.gradingdino.colleaguesPlanning": {
            en: "<strong>Two Colleagues (Planning)</strong>: Created personas, wrote all 12+ user stories with acceptance criteria, performed MoSCoW prioritization, and managed the MS Planner board.",
            pt: "<strong>Dois Colegas (Planeamento)</strong>: Criaram personas, escreveram todas as 12+ user stories com critérios de aceitação, realizaram a priorização MoSCoW e geriram o quadro MS Planner.",
            lu: "<strong>Zwee Kollegen (Planung)</strong>: Hunn Personas erstallt, all 12+ User Stories mat Akzeptanzkriterien geschriwwen, MoSCoW Prioriséierung gemaach, an de MS Planner Board geréiert.",
            de: "<strong>Zwei Kollegen (Planung)</strong>: Erstellten Personas, schrieben alle 12+ User Stories mit Akzeptanzkriterien, führten MoSCoW-Priorisierung durch und verwalteten das MS Planner Board.",
            fr: "<strong>Deux collègues (Planification)</strong> : Ont créé les personas, écrit toutes les 12+ user stories avec critères d'acceptation, effectué la priorisation MoSCoW et géré le tableau MS Planner."
        },

        /* ---- Technical: layer stack ---- */
        "project.gradingdino.stack.title": {
            en: "Under the Hood",
            pt: "Por Dentro",
            lu: "Ënnert der Hood",
            de: "Unter der Haube",
            fr: "Sous le capot"
        },
        "project.gradingdino.stack.intro": {
            en: "Five containerized layers, all booted together by a single Compose file:",
            pt: "Cinco camadas em contentores, todas arrancadas por um único ficheiro Compose:",
            lu: "Fënnef containeriséiert Schichten, all duerch eng eenzeg Compose-Datei zesumme gestart:",
            de: "Fünf containerisierte Schichten, alle durch eine einzige Compose-Datei gestartet:",
            fr: "Cinq couches conteneurisées, toutes démarrées par un seul fichier Compose :"
        },
        "project.gradingdino.stack.frontend.title": {
            en: "Presentation",
            pt: "Apresentação",
            lu: "Presentatioun",
            de: "Präsentation",
            fr: "Présentation"
        },
        "project.gradingdino.stack.frontend.pico": {
            en: "<strong>Pico.css</strong>: a ~10KB single-file framework that styles semantic HTML5 automatically — no build step, no learning curve, just write HTML.",
            pt: "<strong>Pico.css</strong>: um framework de ficheiro único (~10KB) que estiliza HTML5 semântico automaticamente — sem build, sem curva de aprendizagem, basta escrever HTML.",
            lu: "<strong>Pico.css</strong>: e Single-File Framework (~10KB) dat semantescht HTML5 automatesch stylt — kee Build, keng Léierkurve, just HTML schreiwen.",
            de: "<strong>Pico.css</strong>: ein ~10KB Single-File-Framework, das semantisches HTML5 automatisch stylt — kein Build-Schritt, keine Lernkurve, einfach HTML schreiben.",
            fr: "<strong>Pico.css</strong> : un framework en fichier unique (~10KB) qui stylise automatiquement le HTML5 sémantique — pas de build, pas de courbe d'apprentissage, il suffit d'écrire du HTML."
        },
        "project.gradingdino.stack.frontend.ssr": {
            en: "<strong>Server-side rendering</strong>: Django renders every page and the browser posts back over a standard HTTP cycle, keeping all validation and CSRF protection on the server.",
            pt: "<strong>Renderização no servidor</strong>: o Django renderiza cada página e o navegador devolve via um ciclo HTTP padrão, mantendo toda a validação e a proteção CSRF no servidor.",
            lu: "<strong>Server-Side Rendering</strong>: Django rendert all Säit an de Browser schéckt iwwer e standard HTTP-Zyklus zréck, sou datt all Validatioun an CSRF-Schutz um Server bleiwen.",
            de: "<strong>Server-seitiges Rendering</strong>: Django rendert jede Seite und der Browser sendet über einen Standard-HTTP-Zyklus zurück, sodass Validierung und CSRF-Schutz auf dem Server bleiben.",
            fr: "<strong>Rendu côté serveur</strong> : Django rend chaque page et le navigateur renvoie via un cycle HTTP standard, gardant toute la validation et la protection CSRF sur le serveur."
        },
        "project.gradingdino.stack.backend.title": {
            en: "Application",
            pt: "Aplicação",
            lu: "Applikatioun",
            de: "Anwendung",
            fr: "Application"
        },
        "project.gradingdino.stack.backend.batteries": {
            en: "<strong>Batteries included</strong>: Django 5.0 on Python 3.11-slim shipped auth, forms, an ORM and an admin out of the box, so a small team could build features instead of plumbing.",
            pt: "<strong>Baterias incluídas</strong>: o Django 5.0 em Python 3.11-slim trouxe autenticação, formulários, um ORM e um admin de fábrica, permitindo a uma equipa pequena construir funcionalidades em vez de canalização.",
            lu: "<strong>Batteries included</strong>: Django 5.0 op Python 3.11-slim huet Auth, Formen, en ORM an en Admin direkt matbruecht, sou datt eng kleng Equipe Features baue konnt amplaz Infrastruktur.",
            de: "<strong>Batteries included</strong>: Django 5.0 auf Python 3.11-slim lieferte Auth, Formulare, ein ORM und ein Admin von Haus aus, sodass ein kleines Team Features statt Infrastruktur bauen konnte.",
            fr: "<strong>Batteries incluses</strong> : Django 5.0 sur Python 3.11-slim fournit l'authentification, les formulaires, un ORM et un admin clés en main, permettant à une petite équipe de construire des fonctionnalités plutôt que de la tuyauterie."
        },
        "project.gradingdino.stack.backend.admin": {
            en: "<strong>Built-in admin</strong>: the Django admin manages users, subjects and grading scales (20-point, 60-point and letter grades) with no extra code.",
            pt: "<strong>Admin integrado</strong>: o admin do Django gere utilizadores, disciplinas e escalas de avaliação (20 pontos, 60 pontos e notas por letras) sem código adicional.",
            lu: "<strong>Agebauten Admin</strong>: den Django-Admin verwalt Benotzer, Fächer a Bewäertungsskalen (20-Punkten, 60-Punkten a Buschtaw-Noten) ouni zousätzleche Code.",
            de: "<strong>Eingebautes Admin</strong>: das Django-Admin verwaltet Benutzer, Fächer und Notenskalen (20-Punkte, 60-Punkte und Buchstabennoten) ohne zusätzlichen Code.",
            fr: "<strong>Admin intégré</strong> : l'admin Django gère les utilisateurs, les matières et les barèmes (20 points, 60 points et notes en lettres) sans code supplémentaire."
        },
        "project.gradingdino.stack.backend.orm": {
            en: "<strong>ORM models</strong>: classrooms, enrolments, grades and notes are plain Python models; migrations are generated and applied automatically.",
            pt: "<strong>Modelos ORM</strong>: turmas, inscrições, notas e anotações são modelos Python simples; as migrações são geradas e aplicadas automaticamente.",
            lu: "<strong>ORM-Modeller</strong>: Klassen, Aschreiwungen, Noten an Notizen sinn einfach Python-Modeller; Migratiounen ginn automatesch generéiert an applizéiert.",
            de: "<strong>ORM-Modelle</strong>: Klassen, Einschreibungen, Noten und Notizen sind einfache Python-Modelle; Migrationen werden automatisch generiert und angewendet.",
            fr: "<strong>Modèles ORM</strong> : classes, inscriptions, notes et remarques sont de simples modèles Python ; les migrations sont générées et appliquées automatiquement."
        },
        "project.gradingdino.stack.db.title": {
            en: "Data",
            pt: "Dados",
            lu: "Donnéeën",
            de: "Daten",
            fr: "Données"
        },
        "project.gradingdino.stack.db.postgres": {
            en: "<strong>PostgreSQL 16</strong>: an ACID-compliant relational store that survives container restarts through a named Docker volume.",
            pt: "<strong>PostgreSQL 16</strong>: um armazenamento relacional compatível com ACID que sobrevive a reinícios de contentor através de um volume Docker nomeado.",
            lu: "<strong>PostgreSQL 16</strong>: e relationalen Späicher konform mat ACID deen Container-Neustarte iwwerlieft duerch e benannte Docker-Volume.",
            de: "<strong>PostgreSQL 16</strong>: ein ACID-konformer relationaler Speicher, der Container-Neustarts dank eines benannten Docker-Volumes übersteht.",
            fr: "<strong>PostgreSQL 16</strong> : un stockage relationnel compatible ACID qui survit aux redémarrages de conteneur grâce à un volume Docker nommé."
        },
        "project.gradingdino.stack.db.concurrent": {
            en: "<strong>Concurrent writes</strong>: several teachers can grade at the same time without locking each other out — and the same engine scales to a production deployment.",
            pt: "<strong>Escritas concorrentes</strong>: vários professores podem classificar ao mesmo tempo sem se bloquearem — e o mesmo motor escala para um deploy em produção.",
            lu: "<strong>Konkurréiert Schreifvirgäng</strong>: méi Enseignanten kënnen zur selwechter Zäit noten ouni sech géigesäiteg ze blockéieren — an déiselwecht Engine skaléiert bis op e Produktiouns-Deployment.",
            de: "<strong>Gleichzeitige Schreibvorgänge</strong>: mehrere Lehrer können gleichzeitig benoten, ohne sich gegenseitig zu blockieren — und dieselbe Engine skaliert bis zu einem Produktions-Deployment.",
            fr: "<strong>Écritures concurrentes</strong> : plusieurs enseignants peuvent corriger en même temps sans se bloquer — et le même moteur passe à l'échelle d'un déploiement en production."
        },
        "project.gradingdino.stack.security.title": {
            en: "Security",
            pt: "Segurança",
            lu: "Sécherheet",
            de: "Sicherheit",
            fr: "Sécurité"
        },
        "project.gradingdino.stack.security.argon2": {
            en: "<strong>Argon2 hashing</strong>: winner of the Password Hashing Competition (2015), created at the <strong>University of Luxembourg</strong> — memory-hard and resistant to GPU/ASIC cracking. A proud local choice.",
            pt: "<strong>Hashing Argon2</strong>: vencedor da Password Hashing Competition (2015), criado na <strong>Universidade do Luxemburgo</strong> — memory-hard e resistente a ataques GPU/ASIC. Um orgulho tech local.",
            lu: "<strong>Argon2-Hashing</strong>: Gewënner vun der Password Hashing Competition (2015), entwéckelt op der <strong>Universitéit Lëtzebuerg</strong> — memory-hard a resistent géint GPU/ASIC-Cracking. Eng stolz lokal Wiel.",
            de: "<strong>Argon2-Hashing</strong>: Gewinner der Password Hashing Competition (2015), entwickelt an der <strong>Universität Luxemburg</strong> — memory-hard und resistent gegen GPU/ASIC-Cracking. Eine stolze lokale Wahl.",
            fr: "<strong>Hachage Argon2</strong> : gagnant de la Password Hashing Competition (2015), créé à l'<strong>Université du Luxembourg</strong> — memory-hard et résistant au cassage GPU/ASIC. Une fierté locale."
        },
        "project.gradingdino.stack.security.csrf": {
            en: "<strong>Secure by default</strong>: Django ships CSRF tokens, template auto-escaping against XSS, and a parameterised ORM that blocks SQL injection.",
            pt: "<strong>Seguro por omissão</strong>: o Django traz tokens CSRF, auto-escaping de templates contra XSS e um ORM parametrizado que bloqueia injeção de SQL.",
            lu: "<strong>Sécher par défaut</strong>: Django bréngt CSRF-Tokens, automatescht Template-Escaping géint XSS, an e parametriséierten ORM deen SQL-Injection blockéiert.",
            de: "<strong>Sicher von Haus aus</strong>: Django liefert CSRF-Tokens, automatisches Template-Escaping gegen XSS und ein parametrisiertes ORM, das SQL-Injection blockiert.",
            fr: "<strong>Sécurisé par défaut</strong> : Django fournit des jetons CSRF, l'auto-échappement des templates contre le XSS et un ORM paramétré qui bloque les injections SQL."
        },
        "project.gradingdino.stack.security.session": {
            en: "<strong>Session auth + roles</strong>: signed session cookies plus role checks keep students, teachers and admins to their own views.",
            pt: "<strong>Autenticação por sessão + papéis</strong>: cookies de sessão assinados e verificações de papel mantêm alunos, professores e administradores nas suas próprias vistas.",
            lu: "<strong>Session-Auth + Rollen</strong>: signéiert Session-Cookien plus Rollechecken halen Schüler, Enseignanten an Admins op hiren eegene Vuen.",
            de: "<strong>Session-Auth + Rollen</strong>: signierte Session-Cookies plus Rollenprüfungen halten Schüler, Lehrer und Admins bei ihren eigenen Ansichten.",
            fr: "<strong>Auth par session + rôles</strong> : des cookies de session signés et des vérifications de rôle gardent étudiants, enseignants et admins sur leurs propres vues."
        },
        "project.gradingdino.stack.infra.title": {
            en: "Orchestration",
            pt: "Orquestração",
            lu: "Orchestratioun",
            de: "Orchestrierung",
            fr: "Orchestration"
        },
        "project.gradingdino.stack.infra.compose": {
            en: "<strong>One command</strong>: <code>docker compose up</code> builds and starts the web and database containers together — identical on any machine.",
            pt: "<strong>Um comando</strong>: <code>docker compose up</code> constrói e arranca os contentores web e de base de dados em conjunto — idêntico em qualquer máquina.",
            lu: "<strong>Ee Kommando</strong>: <code>docker compose up</code> baut a start d'Web- an Datebank-Container zesummen — identesch op all Maschinn.",
            de: "<strong>Ein Befehl</strong>: <code>docker compose up</code> baut und startet die Web- und Datenbank-Container zusammen — identisch auf jeder Maschine.",
            fr: "<strong>Une commande</strong> : <code>docker compose up</code> construit et démarre les conteneurs web et base de données ensemble — identique sur toute machine."
        },
        "project.gradingdino.stack.infra.health": {
            en: "<strong>Health-gated startup</strong>: the app waits for PostgreSQL to pass a health check, then runs migrations and seeds the admin user before serving traffic.",
            pt: "<strong>Arranque condicionado por health check</strong>: a app espera que o PostgreSQL passe um health check, depois corre as migrações e cria o utilizador admin antes de servir tráfego.",
            lu: "<strong>Health-Check-gesteierte Start</strong>: d'App waart bis PostgreSQL e Health Check passéiert, leeft dann d'Migratiounen an erstellt den Admin-Benotzer ier se Traffic zerwéiert.",
            de: "<strong>Health-Check-gesteuerter Start</strong>: die App wartet, bis PostgreSQL einen Health-Check besteht, führt dann Migrationen aus und legt den Admin-Benutzer an, bevor sie Traffic bedient.",
            fr: "<strong>Démarrage conditionné par health check</strong> : l'app attend que PostgreSQL passe un health check, puis exécute les migrations et crée l'utilisateur admin avant de servir le trafic."
        },
        "project.gradingdino.stack.infra.volumes": {
            en: "<strong>Persistent volumes + live reload</strong>: data survives restarts via named volumes, and mounted code hot-reloads during development for fast iteration.",
            pt: "<strong>Volumes persistentes + live reload</strong>: os dados sobrevivem a reinícios através de volumes nomeados, e o código montado recarrega a quente durante o desenvolvimento para iterar rápido.",
            lu: "<strong>Persistent Volumen + Live Reload</strong>: d'Donnéeën iwwerliewen Neustarte iwwer benannt Volumen, an de gemounte Code lued waarm nei während dem Développement fir séier ze iteréieren.",
            de: "<strong>Persistente Volumes + Live-Reload</strong>: Daten überstehen Neustarts dank benannter Volumes, und gemounteter Code lädt während der Entwicklung für schnelle Iteration neu.",
            fr: "<strong>Volumes persistants + live reload</strong> : les données survivent aux redémarrages via des volumes nommés, et le code monté se recharge à chaud pendant le développement pour itérer vite."
        },

        /* ---- Why Django (journey) ---- */
        "project.gradingdino.why.title": {
            en: "Why Django — and what it taught us",
            pt: "Porquê Django — e o que nos ensinou",
            lu: "Firwat Django — a wat et eis bäibruecht huet",
            de: "Warum Django — und was es uns lehrte",
            fr: "Pourquoi Django — et ce que ça nous a appris"
        },
        "project.gradingdino.why.body1": {
            en: "Before a line of code, we did the groundwork: personas, 12+ user stories with acceptance criteria, MoSCoW prioritisation, and an MS Planner board. <strong>Planning first</strong> gave us a clear picture of exactly what to build.",
            pt: "Antes de uma linha de código, fizemos o trabalho de base: personas, mais de 12 user stories com critérios de aceitação, priorização MoSCoW e um quadro MS Planner. <strong>Planear primeiro</strong> deu-nos uma ideia clara do que construir.",
            lu: "Virun enger Zeil Code hu mir d'Grondaarbecht gemaach: Personas, 12+ User Stories mat Akzeptanzkriterien, MoSCoW-Prioriséierung an e MS-Planner-Board. <strong>Éischt plangen</strong> huet eis e kloert Bild ginn vu wat genau ze bauen war.",
            de: "Vor der ersten Codezeile machten wir die Grundlagenarbeit: Personas, 12+ User Stories mit Akzeptanzkriterien, MoSCoW-Priorisierung und ein MS-Planner-Board. <strong>Erst planen</strong> gab uns ein klares Bild davon, was genau zu bauen war.",
            fr: "Avant la moindre ligne de code, nous avons posé les bases : personas, plus de 12 user stories avec critères d'acceptation, priorisation MoSCoW et un tableau MS Planner. <strong>Planifier d'abord</strong> nous a donné une image claire de ce qu'il fallait construire."
        },
        "project.gradingdino.why.body2": {
            en: "We compared Django, Flask and FastAPI. Django won on its <strong>\"batteries included\"</strong> philosophy — a built-in admin, auth, forms and ORM meant a small team could move fast without wiring everything from scratch.",
            pt: "Comparámos Django, Flask e FastAPI. O Django ganhou pela sua filosofia <strong>\"baterias incluídas\"</strong> — admin integrado, autenticação, formulários e ORM permitiram a uma equipa pequena avançar rápido sem ligar tudo de raiz.",
            lu: "Mir hunn Django, Flask a FastAPI verglach. Django huet gewonnen mat senger <strong>\"batteries included\"</strong>-Philosophie — en agebauten Admin, Auth, Formen an ORM hunn enger klenger Equipe erlaabt séier virunzekommen ouni alles vun Null ze verkabelen.",
            de: "Wir verglichen Django, Flask und FastAPI. Django gewann mit seiner <strong>\"batteries included\"</strong>-Philosophie — ein eingebautes Admin, Auth, Formulare und ORM ließen ein kleines Team schnell vorankommen, ohne alles von Grund auf zu verdrahten.",
            fr: "Nous avons comparé Django, Flask et FastAPI. Django l'a emporté grâce à sa philosophie <strong>\"batteries incluses\"</strong> — admin intégré, authentification, formulaires et ORM ont permis à une petite équipe d'avancer vite sans tout câbler de zéro."
        },
        "project.gradingdino.why.body3": {
            en: "The catch: Django wants things <strong>done its way</strong>. On a tight deadline we hadn't fully learned its conventions, so we spent time fighting the framework instead of building features. We still shipped a working MVP — and learned the \"batteries\" only pay off once you know how to use them.",
            pt: "O senão: o Django quer as coisas <strong>à maneira dele</strong>. Com um prazo apertado, não tínhamos dominado as suas convenções, por isso perdemos tempo a lutar contra o framework em vez de construir funcionalidades. Ainda assim entregámos um MVP funcional — e aprendemos que as \"baterias\" só compensam quando se sabe usá-las.",
            lu: "De Pemmel: Django wëll d'Saachen <strong>op seng Manéier</strong>. Mat engem enge Delai hate mir seng Konventiounen net ganz geléiert, also hu mir géint de Framework gekämpft amplaz Features ze bauen. Mir hunn awer e funktionnéierende MVP geliwwert — a geléiert datt d'\"Batterien\" sech eréischt auszuelen wann ee se ze benotze weess.",
            de: "Der Haken: Django will Dinge <strong>auf seine Art</strong>. Bei knapper Deadline hatten wir seine Konventionen nicht ganz gelernt, also kämpften wir mit dem Framework, statt Features zu bauen. Wir lieferten trotzdem ein funktionierendes MVP — und lernten, dass die \"Batterien\" sich erst auszahlen, wenn man sie zu nutzen weiß.",
            fr: "Le hic : Django veut faire les choses <strong>à sa manière</strong>. Avec un délai serré, nous n'avions pas tout à fait assimilé ses conventions, alors nous avons lutté contre le framework au lieu de construire des fonctionnalités. Nous avons quand même livré un MVP fonctionnel — et appris que les \"batteries\" ne paient qu'une fois qu'on sait s'en servir."
        },

        /* ---- Lessons learned (cards) ---- */
        "project.gradingdino.lessonsTitle": {
            en: "Lessons Learned",
            pt: "Lições Aprendidas",
            lu: "Geléiert Lektiounen",
            de: "Gelernte Lektionen",
            fr: "Leçons apprises"
        },
        "project.gradingdino.lesson.comm.title": {
            en: "Communication beats speed",
            pt: "A comunicação vence a velocidade",
            lu: "Kommunikatioun schléit Tempo",
            de: "Kommunikation schlägt Tempo",
            fr: "La communication prime sur la vitesse"
        },
        "project.gradingdino.lesson.comm.desc": {
            en: "Splitting work to move faster created silos. Next time, talking to each other gets the same priority as coding.",
            pt: "Dividir o trabalho para ir mais rápido criou silos. Da próxima vez, falar uns com os outros terá a mesma prioridade que programar.",
            lu: "D'Aarbecht opzedeelen fir méi séier ze sinn huet Siloen erstallt. Dat nächst Mol kritt d'Mateneerschwätzen déiselwecht Prioritéit wéi d'Coden.",
            de: "Arbeit aufzuteilen, um schneller zu sein, schuf Silos. Nächstes Mal hat das Miteinanderreden dieselbe Priorität wie das Programmieren.",
            fr: "Diviser le travail pour aller plus vite a créé des silos. La prochaine fois, se parler aura la même priorité que coder."
        },
        "project.gradingdino.lesson.framework.title": {
            en: "Framework choice matters",
            pt: "A escolha do framework importa",
            lu: "D'Framework-Wiel zielt",
            de: "Die Framework-Wahl zählt",
            fr: "Le choix du framework compte"
        },
        "project.gradingdino.lesson.framework.desc": {
            en: "Django was great for prototyping but felt rigid when we needed flexibility. Research up front saves pain later.",
            pt: "O Django foi ótimo para prototipagem mas mostrou-se rígido quando precisávamos de flexibilidade. Pesquisar antes evita dores depois.",
            lu: "Django war super fir Prototyping awer huet steif gewierkt wéi mir Flexibilitéit gebraucht hunn. Recherche am Viraus spuert Péng méi spéit.",
            de: "Django war super zum Prototyping, wirkte aber starr, als wir Flexibilität brauchten. Vorab-Recherche erspart später Schmerzen.",
            fr: "Django était parfait pour le prototypage mais s'est révélé rigide quand il fallait de la flexibilité. Se renseigner en amont évite des soucis plus tard."
        },
        "project.gradingdino.lesson.planning.title": {
            en: "Planning isn't optional",
            pt: "Planear não é opcional",
            lu: "Planung ass net optional",
            de: "Planung ist nicht optional",
            fr: "Planifier n'est pas optionnel"
        },
        "project.gradingdino.lesson.planning.desc": {
            en: "Personas and user stories felt slow at first, but they told us exactly what to build and what to skip.",
            pt: "Personas e user stories pareceram lentas ao início, mas disseram-nos exatamente o que construir e o que deixar de fora.",
            lu: "Personas an User Stories hu sech am Ufank lues ugefillt, awer si hunn eis genee gesot wat ze bauen a wat ze loossen.",
            de: "Personas und User Stories fühlten sich anfangs langsam an, sagten uns aber genau, was zu bauen und was wegzulassen war.",
            fr: "Personas et user stories ont semblé lents au début, mais nous ont dit exactement quoi construire et quoi laisser de côté."
        },
        "project.gradingdino.lesson.learn.title": {
            en: "Learn the tool first",
            pt: "Aprende a ferramenta primeiro",
            lu: "Éischt d'Tool léieren",
            de: "Erst das Werkzeug lernen",
            fr: "Apprendre l'outil d'abord"
        },
        "project.gradingdino.lesson.learn.desc": {
            en: "Django's batteries only help once you know them. Under deadline pressure we fought the framework instead of using it.",
            pt: "As baterias do Django só ajudam quando as conheces. Sob pressão do prazo, lutámos contra o framework em vez de o usar.",
            lu: "Django seng Batterien hëllefen eréischt wann een se kennt. Ënner Delai-Drock hu mir géint de Framework gekämpft amplaz en ze benotzen.",
            de: "Djangos Batterien helfen erst, wenn man sie kennt. Unter Termindruck kämpften wir mit dem Framework, statt es zu nutzen.",
            fr: "Les batteries de Django n'aident qu'une fois qu'on les connaît. Sous la pression du délai, nous avons lutté contre le framework au lieu de l'utiliser."
        },
        "project.gradingdino.lesson.mvp.title": {
            en: "A working MVP wins",
            pt: "Um MVP funcional vence",
            lu: "E funktionnéierende MVP gewënnt",
            de: "Ein funktionierendes MVP gewinnt",
            fr: "Un MVP fonctionnel l'emporte"
        },
        "project.gradingdino.lesson.mvp.desc": {
            en: "It wasn't perfect, but it ran. Shipping something functional taught us more than endless planning could.",
            pt: "Não era perfeito, mas funcionava. Entregar algo funcional ensinou-nos mais do que um planeamento sem fim alguma vez poderia.",
            lu: "Et war net perfekt, awer et huet gelaf. Eppes Funktionnéierendes ze liwweren huet eis méi bäibruecht wéi endlos Planung jeemools kéint.",
            de: "Es war nicht perfekt, aber es lief. Etwas Funktionierendes auszuliefern lehrte uns mehr als endlose Planung je könnte.",
            fr: "Ce n'était pas parfait, mais ça marchait. Livrer quelque chose de fonctionnel nous a appris plus que toute planification sans fin."
        },

        /* ---- Sidebar: tech stack ---- */
        "project.gradingdino.sidebar.tech.django": {
            en: "Django 5.0",
            pt: "Django 5.0",
            lu: "Django 5.0",
            de: "Django 5.0",
            fr: "Django 5.0"
        },
        "project.gradingdino.sidebar.tech.postgres": {
            en: "PostgreSQL 16",
            pt: "PostgreSQL 16",
            lu: "PostgreSQL 16",
            de: "PostgreSQL 16",
            fr: "PostgreSQL 16"
        },
        "project.gradingdino.sidebar.tech.argon2": {
            en: "Argon2 (Luxembourg!)",
            pt: "Argon2 (Luxemburgo!)",
            lu: "Argon2 (Lëtzebuerg!)",
            de: "Argon2 (Luxemburg!)",
            fr: "Argon2 (Luxembourg !)"
        },
        "project.gradingdino.sidebar.tech.docker": {
            en: "Docker & Compose",
            pt: "Docker & Compose",
            lu: "Docker & Compose",
            de: "Docker & Compose",
            fr: "Docker & Compose"
        },
        "project.gradingdino.sidebar.tech.github": {
            en: "GitHub",
            pt: "GitHub",
            lu: "GitHub",
            de: "GitHub",
            fr: "GitHub"
        },
        "project.gradingdino.sidebar.tech.pico": {
            en: "Pico.css",
            pt: "Pico.css",
            lu: "Pico.css",
            de: "Pico.css",
            fr: "Pico.css"
        },
        "project.gradingdino.sidebar.tech.ssr": {
            en: "Server-Side Rendering",
            pt: "Renderização no Servidor",
            lu: "Server-Side Rendering",
            de: "Server-Side Rendering",
            fr: "Rendu côté serveur"
        },
        "project.gradingdino.sidebar.tech.python": {
            en: "Python 3.11",
            pt: "Python 3.11",
            lu: "Python 3.11",
            de: "Python 3.11",
            fr: "Python 3.11"
        },

        /* ---- Sidebar: project management ---- */
        "project.gradingdino.sidebar.projectManagement": {
            en: "Project Management",
            pt: "Gestão de Projeto",
            lu: "Projet Management",
            de: "Projektmanagement",
            fr: "Gestion de projet"
        },
        "project.gradingdino.sidebar.pm.planner": {
            en: "MS Planner Board",
            pt: "Quadro MS Planner",
            lu: "MS Planner Board",
            de: "MS Planner Board",
            fr: "Tableau MS Planner"
        },
        "project.gradingdino.sidebar.pm.stories": {
            en: "User Stories (12+)",
            pt: "User Stories (12+)",
            lu: "User Stories (12+)",
            de: "User Stories (12+)",
            fr: "User Stories (12+)"
        },
        "project.gradingdino.sidebar.pm.moscow": {
            en: "MoSCoW Prioritization",
            pt: "Priorização MoSCoW",
            lu: "MoSCoW Prioritization",
            de: "MoSCoW-Priorisierung",
            fr: "Priorisation MoSCoW"
        },
        "project.gradingdino.sidebar.pm.personas": {
            en: "Personas",
            pt: "Personas",
            lu: "Personas",
            de: "Personas",
            fr: "Personas"
        },
        "project.gradingdino.sidebar.pm.er": {
            en: "ER Diagrams",
            pt: "Diagramas ER",
            lu: "ER Diagrammer",
            de: "ER-Diagramme",
            fr: "Diagrammes ER"
        },

        /* ---- Sidebar: key features ---- */
        "project.gradingdino.sidebar.features.rbac": {
            en: "Role-Based Access",
            pt: "Acesso baseado em papéis",
            lu: "Role-Based Access",
            de: "Rollenbasierter Zugriff",
            fr: "Accès basé sur les rôles"
        },
        "project.gradingdino.sidebar.features.history": {
            en: "Grade History by Year",
            pt: "Histórico de notas por ano",
            lu: "Notenhistorie pro Joer",
            de: "Noten-Historie nach Jahr",
            fr: "Historique des notes par année"
        },
        "project.gradingdino.sidebar.features.scales": {
            en: "Multiple Grading Scales",
            pt: "Várias escalas de avaliação",
            lu: "Multiple Grading Scales",
            de: "Mehrere Notenskalen",
            fr: "Plusieurs barèmes de notation"
        },
        "project.gradingdino.sidebar.features.notes": {
            en: "Personal Notes",
            pt: "Notas pessoais",
            lu: "Perséinlech Notizen",
            de: "Persönliche Notizen",
            fr: "Notes personnelles"
        },
        "project.gradingdino.sidebar.features.observations": {
            en: "Teacher Observations",
            pt: "Observações do professor",
            lu: "Observatiounen vum Enseignant",
            de: "Beobachtungen des Lehrers",
            fr: "Observations des enseignants"
        },

        /* ---- Misc ---- */
        "project.gradingdino.name": {
            en: "GradingDino",
            pt: "GradingDino",
            lu: "GradingDino",
            de: "GradingDino",
            fr: "GradingDino"
        }
    };
    Object.assign(translations, extra);
})();
