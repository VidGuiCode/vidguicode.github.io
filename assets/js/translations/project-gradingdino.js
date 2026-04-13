/**
 * GradingDino project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
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
        "project.gradingdino.mvp": {
            en: "MVP",
            pt: "MVP",
            lu: "MVP",
            de: "MVP",
            fr: "MVP"
        },
        "project.gradingdino.cards.docker.title": {
            en: "Containerized",
            pt: "Containerizado",
            lu: "Containerized",
            de: "Containerisiert",
            fr: "Conteneurisé"
        },
        "project.gradingdino.cards.docker.spec": {
            en: "Docker & Docker Compose",
            pt: "Docker & Docker Compose",
            lu: "Docker & Docker Compose",
            de: "Docker & Docker Compose",
            fr: "Docker & Docker Compose"
        },
        "project.gradingdino.cards.docker.detail1": {
            en: "One Command",
            pt: "Um Comando",
            lu: "Ee Kommando",
            de: "Ein Befehl",
            fr: "Une commande"
        },
        "project.gradingdino.cards.docker.detail2": {
            en: "docker compose up",
            pt: "docker compose up",
            lu: "docker compose up",
            de: "docker compose up",
            fr: "docker compose up"
        },
        "project.gradingdino.cards.docker.body": {
            en: "Everything runs in containers. PostgreSQL + Django orchestrated with health checks, auto-migrations, persistent volumes, and live code reloading for development.",
            pt: "Tudo corre em contentores. PostgreSQL + Django orquestrados com health checks, migrações automáticas, volumes persistentes e live reload em desenvolvimento.",
            lu: "Alles leeft a Containere. PostgreSQL + Django mat Health Checks, automatesche Migratiounen, persistente Volumen, a Live Reload am Développement.",
            de: "Alles läuft in Containern. PostgreSQL + Django orchestriert mit Health-Checks, automatischen Migrationen, persistenten Volumes und Live-Code-Reload im Development.",
            fr: "Tout tourne dans des conteneurs. PostgreSQL + Django orchestrés avec health checks, migrations automatiques, volumes persistants et rechargement live en développement."
        },
        "project.gradingdino.cards.docker.tag.compose": {
            en: "[COMPOSE]",
            pt: "[COMPOSE]",
            lu: "[COMPOSE]",
            de: "[COMPOSE]",
            fr: "[COMPOSE]"
        },
        "project.gradingdino.cards.docker.tag.volumes": {
            en: "[VOLUMES]",
            pt: "[VOLUMES]",
            lu: "[VOLUMES]",
            de: "[VOLUMES]",
            fr: "[VOLUMES]"
        },
        "project.gradingdino.cards.docker.tag.health": {
            en: "[HEALTH-CHECKS]",
            pt: "[HEALTH-CHECKS]",
            lu: "[HEALTH-CHECKS]",
            de: "[HEALTH-CHECKS]",
            fr: "[HEALTH-CHECKS]"
        },
        "project.gradingdino.cards.django.title": {
            en: "Backend",
            pt: "Backend",
            lu: "Backend",
            de: "Backend",
            fr: "Backend"
        },
        "project.gradingdino.cards.django.spec": {
            en: "Django 5.0 / Python 3.11-slim",
            pt: "Django 5.0 / Python 3.11-slim",
            lu: "Django 5.0 / Python 3.11-slim",
            de: "Django 5.0 / Python 3.11-slim",
            fr: "Django 5.0 / Python 3.11-slim"
        },
        "project.gradingdino.cards.django.detail1": {
            en: "Server-Side",
            pt: "Server-Side",
            lu: "Server-Side",
            de: "Server-Side",
            fr: "Côté serveur"
        },
        "project.gradingdino.cards.django.detail2": {
            en: "Batteries Included",
            pt: "Baterias Incluídas",
            lu: "Batteries Included",
            de: "Batteries Included",
            fr: "Batteries incluses"
        },
        "project.gradingdino.cards.django.body": {
            en: "Django's \"batteries included\" philosophy gave us built-in admin panel, authentication, forms with server-side validation, and ORM. Security features like CSRF, XSS, and SQL injection protection come by default. Custom Dockerfile with layer optimization for fast rebuilds.",
            pt: "A filosofia \"baterias incluídas\" do Django deu-nos painel de admin incorporado, autenticação, formulários com validação no servidor e ORM. Funcionalidades de segurança como CSRF, XSS e proteção contra SQL injection vêm por padrão. Dockerfile customizado com otimização de camadas para rebuilds rápidos.",
            lu: "Django seng \"batteries included\" Philosophie huet eis integréierten Admin, Auth, Forme mat Server-Side Validatioun an ORM ginn. Sécherheets-Features wéi CSRF, XSS an SQL Injection Schutz kommen standardméisseg. Custom Dockerfile mat Layer Optimiséierung fir séier Rebuilds.",
            de: "Djangos \"batteries included\"-Philosophie gab uns eingebautes Admin-Panel, Authentifizierung, Forms mit serverseitiger Validierung und ORM. Sicherheitsfeatures wie CSRF, XSS und SQL-Injection-Schutz sind standardmäßig enthalten. Custom Dockerfile mit Layer-Optimierung für schnelle Rebuilds.",
            fr: "La philosophie \"batteries incluses\" de Django nous a offert admin intégré, authentification, formulaires avec validation côté serveur et ORM. Les fonctionnalités de sécurité comme CSRF, XSS et la protection contre les injections SQL sont incluses par défaut. Dockerfile custom avec optimisation des couches pour des rebuilds rapides."
        },
        "project.gradingdino.cards.django.tag.orm": {
            en: "[DJANGO-ORM]",
            pt: "[DJANGO-ORM]",
            lu: "[DJANGO-ORM]",
            de: "[DJANGO-ORM]",
            fr: "[DJANGO-ORM]"
        },
        "project.gradingdino.cards.django.tag.admin": {
            en: "[ADMIN-PANEL]",
            pt: "[ADMIN-PANEL]",
            lu: "[ADMIN-PANEL]",
            de: "[ADMIN-PANEL]",
            fr: "[ADMIN-PANEL]"
        },
        "project.gradingdino.cards.django.tag.csrf": {
            en: "[CSRF]",
            pt: "[CSRF]",
            lu: "[CSRF]",
            de: "[CSRF]",
            fr: "[CSRF]"
        },
        "project.gradingdino.cards.postgres.title": {
            en: "Database",
            pt: "Base de Dados",
            lu: "Datebank",
            de: "Datenbank",
            fr: "Base de données"
        },
        "project.gradingdino.cards.postgres.spec": {
            en: "PostgreSQL 16",
            pt: "PostgreSQL 16",
            lu: "PostgreSQL 16",
            de: "PostgreSQL 16",
            fr: "PostgreSQL 16"
        },
        "project.gradingdino.cards.postgres.detail1": {
            en: "Relational",
            pt: "Relacional",
            lu: "Relational",
            de: "Relational",
            fr: "Relationnel"
        },
        "project.gradingdino.cards.postgres.detail2": {
            en: "ACID Compliant",
            pt: "Compatível com ACID",
            lu: "ACID konform",
            de: "ACID-konform",
            fr: "Compatible ACID"
        },
        "project.gradingdino.cards.postgres.body": {
            en: "Docker-native integration, concurrent write support for multiple professors grading simultaneously, and production-ready deployment path.",
            pt: "Integração nativa com Docker, suporte a escritas concorrentes para vários professores a classificar em simultâneo e caminho de deploy pronto para produção.",
            lu: "Docker-nativ Integratioun, parallel Schreif-Support fir verschidde Proffen gläichzäiteg ze notéieren, a Produktions-bereete Deploy Wee.",
            de: "Docker-native Integration, parallele Schreibunterstützung für mehrere Professoren gleichzeitig und produktionsreifer Deployment-Pfad.",
            fr: "Intégration native Docker, support d’écritures concurrentes pour plusieurs profs corrigeant en simultané, et chemin de déploiement prêt pour la production."
        },
        "project.gradingdino.cards.postgres.tag.docker": {
            en: "[DOCKER]",
            pt: "[DOCKER]",
            lu: "[DOCKER]",
            de: "[DOCKER]",
            fr: "[DOCKER]"
        },
        "project.gradingdino.cards.postgres.tag.concurrent": {
            en: "[CONCURRENT]",
            pt: "[CONCURRENT]",
            lu: "[CONCURRENT]",
            de: "[CONCURRENT]",
            fr: "[CONCURRENT]"
        },
        "project.gradingdino.cards.postgres.tag.prod": {
            en: "[PRODUCTION-READY]",
            pt: "[PRODUCTION-READY]",
            lu: "[PRODUCTION-READY]",
            de: "[PRODUCTION-READY]",
            fr: "[PRODUCTION-READY]"
        },
        "project.gradingdino.cards.security.title": {
            en: "Security",
            pt: "Segurança",
            lu: "Sécherheet",
            de: "Sicherheit",
            fr: "Sécurité"
        },
        "project.gradingdino.cards.security.spec": {
            en: "Argon2 Password Hashing",
            pt: "Hashing de Passwords com Argon2",
            lu: "Argon2 Passwuert Hashing",
            de: "Argon2 Passwort-Hashing",
            fr: "Hachage de mots de passe Argon2"
        },
        "project.gradingdino.cards.security.badge": {
            en: "Made in Luxembourg 🇱🇺",
            pt: "Feito no Luxemburgo 🇱🇺",
            lu: "Made in Luxembourg 🇱🇺",
            de: "Made in Luxembourg 🇱🇺",
            fr: "Fabriqué au Luxembourg 🇱🇺"
        },
        "project.gradingdino.cards.security.body": {
            en: "Winner of the Password Hashing Competition (2015), developed at the <strong>University of Luxembourg</strong>. Memory-hard algorithm resistant to GPU/ASIC attacks. A proud local tech choice!",
            pt: "Vencedor da Password Hashing Competition (2015), desenvolvido na <strong>Universidade do Luxemburgo</strong>. Algoritmo memory-hard resistente a ataques GPU/ASIC. Um orgulho tech local!",
            lu: "Gewënner vun der Password Hashing Competition (2015), entwéckelt op der <strong>Universitéit Lëtzebuerg</strong>. Memory-hard Algorithmus resistent géint GPU/ASIC Attacken. Eng lokal Tech-Prouf!",
            de: "Gewinner der Password Hashing Competition (2015), entwickelt an der <strong>Universität Luxemburg</strong>. Memory-hard Algorithmus, resistent gegen GPU/ASIC-Angriffe. Eine stolze lokale Tech-Wahl!",
            fr: "Gagnant de la Password Hashing Competition (2015), développé à l’<strong>Université du Luxembourg</strong>. Algorithme memory-hard résistant aux attaques GPU/ASIC. Une fierté tech locale !"
        },
        "project.gradingdino.cards.security.tag.argon2": {
            en: "[ARGON2]",
            pt: "[ARGON2]",
            lu: "[ARGON2]",
            de: "[ARGON2]",
            fr: "[ARGON2]"
        },
        "project.gradingdino.cards.security.tag.csrf": {
            en: "[CSRF-PROTECTION]",
            pt: "[CSRF-PROTECTION]",
            lu: "[CSRF-PROTECTION]",
            de: "[CSRF-PROTECTION]",
            fr: "[CSRF-PROTECTION]"
        },
        "project.gradingdino.cards.security.tag.session": {
            en: "[SESSION-AUTH]",
            pt: "[SESSION-AUTH]",
            lu: "[SESSION-AUTH]",
            de: "[SESSION-AUTH]",
            fr: "[SESSION-AUTH]"
        },
        "project.gradingdino.cards.frontend.title": {
            en: "Frontend",
            pt: "Frontend",
            lu: "Frontend",
            de: "Frontend",
            fr: "Frontend"
        },
        "project.gradingdino.cards.frontend.spec": {
            en: "Pico.css + Server-Side Rendering",
            pt: "Pico.css + Renderização no Servidor",
            lu: "Pico.css + Server-Side Rendering",
            de: "Pico.css + Server-Side Rendering",
            fr: "Pico.css + Rendu côté serveur"
        },
        "project.gradingdino.cards.frontend.detail1": {
            en: "Minimalist",
            pt: "Minimalista",
            lu: "Minimalistesch",
            de: "Minimalistisch",
            fr: "Minimaliste"
        },
        "project.gradingdino.cards.frontend.detail2": {
            en: "~10KB",
            pt: "~10KB",
            lu: "~10KB",
            de: "~10KB",
            fr: "~10KB"
        },
        "project.gradingdino.cards.frontend.body": {
            en: "Pico.css is a minimalist single-file CSS framework that automatically styles semantic HTML5 elements. Zero learning curve — just write HTML. We chose server-side rendering for security (all validation server-side), simplicity (standard HTTP POST cycle), and seamless Django CSRF protection.",
            pt: "Pico.css é um framework CSS minimalista de ficheiro único que estiliza automaticamente elementos HTML5 semânticos. Zero curva de aprendizagem — apenas escrever HTML. Escolhemos renderização no servidor pela segurança (toda a validação no servidor), simplicidade (ciclo HTTP POST padrão) e proteção CSRF do Django sem complicações.",
            lu: "Pico.css ass e minimalistescht Single-File CSS Framework dat automatesch semantesch HTML5 Elementer stylt. Null Léierkurve — just HTML schreiwen. Mir hunn Server-Side Rendering gewielt fir Sécherheet (all Validatioun server-side), Simplizitéit (standard HTTP POST Zyklus), an nahtlos Django CSRF Schutz.",
            de: "Pico.css ist ein minimalistisches Single-File-CSS-Framework, das automatisch semantische HTML5-Elemente stylt. Keine Lernkurve — einfach HTML schreiben. Wir haben Server-Side Rendering für Sicherheit (alle Validierung serverseitig), Einfachheit (standard HTTP-POST-Zyklus) und nahtlosen Django-CSRF-Schutz gewählt.",
            fr: "Pico.css est un framework CSS minimaliste en fichier unique qui stylise automatiquement les éléments HTML5 sémantiques. Aucune courbe d'apprentissage — il suffit d'écrire du HTML. Nous avons choisi le rendu côté serveur pour la sécurité (toute la validation côté serveur), la simplicité (cycle HTTP POST standard) et la protection CSRF Django sans complications."
        },
        "project.gradingdino.cards.frontend.tag.semantic": {
            en: "[SEMANTIC-HTML]",
            pt: "[SEMANTIC-HTML]",
            lu: "[SEMANTIC-HTML]",
            de: "[SEMANTIC-HTML]",
            fr: "[SEMANTIC-HTML]"
        },
        "project.gradingdino.cards.frontend.tag.ssr": {
            en: "[SERVER-SIDE]",
            pt: "[SERVER-SIDE]",
            lu: "[SERVER-SIDE]",
            de: "[SERVER-SIDE]",
            fr: "[SERVER-SIDE]"
        },
        "project.gradingdino.cards.frontend.tag.csrf": {
            en: "[CSRF-SAFE]",
            pt: "[CSRF-SAFE]",
            lu: "[CSRF-SAFE]",
            de: "[CSRF-SAFE]",
            fr: "[CSRF-SAFE]"
        },
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
        "project.gradingdino.subtitle": {
            en: "A grade management system built with Django. Teachers create classrooms and manage student grades, while students track their progress. Group project MVP — learned valuable lessons about framework selection.",
            pt: "Um sistema de gestão de notas construído com Django. Os professores criam turmas e gerem as notas dos alunos, enquanto os alunos acompanham o seu progresso. MVP de projeto de grupo — lições valiosas sobre a escolha de frameworks.",
            lu: "E Noteverwaltungssystem mat Django gebaut. D'Enseignanten kreéieren Klassen a verwalten d'Noten, an d'Schüler suivéieren hire Fortschrëtt. Grupp-Projet MVP — wäertvoll Lektiounen iwwer Framework-Auswiel.",
            de: "Ein Notenverwaltungssystem mit Django. Lehrer erstellen Klassen und verwalten Noten, Schüler verfolgen ihren Fortschritt. Gruppenprojekt MVP — wertvolle Lektionen über Framework-Auswahl.",
            fr: "Un système de gestion des notes construit avec Django. Les enseignants créent des classes et gèrent les notes, les étudiants suivent leur progression. MVP de projet de groupe — leçons précieuses sur le choix des frameworks."
        },
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
        "project.gradingdino.intro2": {
            en: "The project wasn't just about coding — it was about <strong>planning, research, and teamwork</strong>. We had to create personas, write user stories with acceptance criteria, prioritize features using MoSCoW, and manage tasks in MS Planner before writing a single line of code.",
            pt: "O projeto não era apenas sobre programação — era sobre <strong>planeamento, pesquisa e trabalho em equipa</strong>. Tivemos de criar personas, escrever user stories com critérios de aceitação, priorizar funcionalidades usando MoSCoW e gerir tarefas no MS Planner antes de escrever uma única linha de código.",
            lu: "De Projet war net nëmmen iwwer Coding — et war iwwer <strong>Planung, Recherche, an Teamaarbecht</strong>. Mir hunn Personas missen erstellen, User Stories mat Akzeptanzkriterien schreiwen, Features mat MoSCoW prioriséieren, an Aufgaben am MS Planner verwalten ier mir eng eenzeg Zeil Code geschriwwen hunn.",
            de: "Das Projekt ging nicht nur ums Programmieren — es ging um <strong>Planung, Recherche und Teamarbeit</strong>. Wir mussten Personas erstellen, User Stories mit Akzeptanzkriterien schreiben, Features mit MoSCoW priorisieren und Aufgaben im MS Planner verwalten, bevor wir eine einzige Zeile Code geschrieben haben.",
            fr: "Le projet n'était pas seulement une question de code — il s'agissait de <strong>planification, recherche et travail d'équipe</strong>. Nous avons dû créer des personas, écrire des user stories avec des critères d'acceptation, prioriser les fonctionnalités avec MoSCoW et gérer les tâches dans MS Planner avant d'écrire une seule ligne de code."
        },
        "project.gradingdino.intro3": {
            en: "A key requirement: <strong>the entire system must start with a single command</strong>: <code>docker compose up</code>. Everything runs in Docker — PostgreSQL database, Django application, automatic migrations, and even admin user creation.",
            pt: "Um requisito chave: <strong>todo o sistema deve iniciar com um único comando</strong>: <code>docker compose up</code>. Tudo corre em Docker — base de dados PostgreSQL, aplicação Django, migrações automáticas e até criação do utilizador administrador.",
            lu: "Eng wichteg Ufuerderung: <strong>de ganzen System muss mat engem eenzege Kommando starten</strong>: <code>docker compose up</code>. Alles leeft an Docker — PostgreSQL Datebank, Django Applikatioun, automatesch Migratiounen, an esouguer Admin-Benotzer Kreatioun.",
            de: "Eine wichtige Anforderung: <strong>das gesamte System muss mit einem einzigen Befehl starten</strong>: <code>docker compose up</code>. Alles läuft in Docker — PostgreSQL-Datenbank, Django-Anwendung, automatische Migrationen und sogar Admin-Benutzer-Erstellung.",
            fr: "Une exigence clé : <strong>tout le système doit démarrer avec une seule commande</strong> : <code>docker compose up</code>. Tout fonctionne dans Docker — base de données PostgreSQL, application Django, migrations automatiques et même création de l'utilisateur admin."
        },
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
        "project.gradingdino.whatWeBuilt": {
            en: "What We Built",
            pt: "O Que Construímos",
            lu: "Wat mir gebaut hunn",
            de: "Was wir gebaut haben",
            fr: "Ce que nous avons construit"
        },
        "project.gradingdino.builtIntro": {
            en: "The system provides role-based access for different users:",
            pt: "O sistema fornece acesso baseado em funções para diferentes utilizadores:",
            lu: "De System bitt rollebaséierten Zougang fir verschidden Benotzer:",
            de: "Das System bietet rollenbasierten Zugriff für verschiedene Benutzer:",
            fr: "Le système fournit un accès basé sur les rôles pour différents utilisateurs :"
        },
        "project.gradingdino.studentPortal": {
            en: "<strong>Student Portal</strong>: Students log in to view their grades across subjects, track progress by semester, and write personal notes.",
            pt: "<strong>Portal do Aluno</strong>: Os alunos iniciam sessão para ver as suas notas em todas as disciplinas, acompanhar o progresso por semestre e escrever notas pessoais.",
            lu: "<strong>Schüler Portal</strong>: Schüler loggen sech an fir hir Noten iwwer Fächer ze gesinn, Fortschrëtt pro Semester ze suivéieren, a perséinlech Notizen ze schreiwen.",
            de: "<strong>Schülerportal</strong>: Schüler melden sich an, um ihre Noten über alle Fächer zu sehen, den Fortschritt pro Semester zu verfolgen und persönliche Notizen zu schreiben.",
            fr: "<strong>Portail étudiant</strong> : Les étudiants se connectent pour voir leurs notes dans toutes les matières, suivre leur progression par semestre et écrire des notes personnelles."
        },
        "project.gradingdino.teacherDashboard": {
            en: "<strong>Teacher Dashboard</strong>: Teachers create classrooms, enroll students, assign grades with comments, and write private observations.",
            pt: "<strong>Painel do Professor</strong>: Os professores criam turmas, inscrevem alunos, atribuem notas com comentários e escrevem observações privadas.",
            lu: "<strong>Enseignant Dashboard</strong>: Enseignanten kreéieren Klassen, schreiwen Schüler an, ginn Noten mat Kommentaren, a schreiwen privat Observatiounen.",
            de: "<strong>Lehrer-Dashboard</strong>: Lehrer erstellen Klassen, schreiben Schüler ein, vergeben Noten mit Kommentaren und schreiben private Beobachtungen.",
            fr: "<strong>Tableau de bord enseignant</strong> : Les enseignants créent des classes, inscrivent des étudiants, attribuent des notes avec commentaires et écrivent des observations privées."
        },
        "project.gradingdino.adminPanel": {
            en: "<strong>Admin Panel</strong>: Django's built-in admin for managing users, subjects, grading scales (20-point, 60-point, letter grades).",
            pt: "<strong>Painel de Administração</strong>: O painel de administração integrado do Django para gerir utilizadores, disciplinas, escalas de avaliação (20 pontos, 60 pontos, notas por letras).",
            lu: "<strong>Admin Panel</strong>: Django säin agebauten Admin fir Benotzer, Fächer, Bewäertungsskalen (20-Punkten, 60-Punkten, Buschtaw-Noten) ze verwalten.",
            de: "<strong>Admin-Panel</strong>: Djangos eingebautes Admin-Panel zur Verwaltung von Benutzern, Fächern, Bewertungsskalen (20-Punkte, 60-Punkte, Buchstabennoten).",
            fr: "<strong>Panneau d'administration</strong> : L'admin intégré de Django pour gérer les utilisateurs, les matières, les échelles de notation (20 points, 60 points, notes en lettres)."
        },
        "project.gradingdino.dockerDeployment": {
            en: "<strong>Docker Deployment</strong>: Single <code>docker compose up</code> command starts the entire system — PostgreSQL + Django.",
            pt: "<strong>Implementação Docker</strong>: Um único comando <code>docker compose up</code> inicia todo o sistema — PostgreSQL + Django.",
            lu: "<strong>Docker Deployment</strong>: Een eenzegen <code>docker compose up</code> Kommando start de ganzen System — PostgreSQL + Django.",
            de: "<strong>Docker-Deployment</strong>: Ein einziger <code>docker compose up</code> Befehl startet das gesamte System — PostgreSQL + Django.",
            fr: "<strong>Déploiement Docker</strong> : Une seule commande <code>docker compose up</code> démarre tout le système — PostgreSQL + Django."
        },
        "project.gradingdino.whyDjango": {
            en: "Why Django (And What We Learned)",
            pt: "Porquê Django (E o Que Aprendemos)",
            lu: "Firwat Django (A Wat mir geléiert hunn)",
            de: "Warum Django (Und was wir gelernt haben)",
            fr: "Pourquoi Django (Et ce que nous avons appris)"
        },
        "project.gradingdino.djangoIntro1": {
            en: "We researched Django, Flask, and FastAPI before choosing. Django won because of its <strong>\"batteries included\"</strong> approach — built-in admin, authentication, forms, and ORM meant we could build fast.",
            pt: "Pesquisámos Django, Flask e FastAPI antes de escolher. Django ganhou pela sua abordagem <strong>\"baterias incluídas\"</strong> — admin integrado, autenticação, formulários e ORM permitiram-nos construir rapidamente.",
            lu: "Mir hunn Django, Flask a FastAPI recherchéiert ier mir gewielt hunn. Django huet gewonnen wéinst senger <strong>\"Batterien abegraff\"</strong> Approche — agebauten Admin, Authentifikatioun, Formularen an ORM hunn eis erlaabt séier ze bauen.",
            de: "Wir haben Django, Flask und FastAPI recherchiert, bevor wir uns entschieden haben. Django gewann wegen seines <strong>\"Batterien inklusive\"</strong>-Ansatzes — eingebautes Admin, Authentifizierung, Formulare und ORM ermöglichten schnelles Bauen.",
            fr: "Nous avons recherché Django, Flask et FastAPI avant de choisir. Django a gagné grâce à son approche <strong>\"piles incluses\"</strong> — admin intégré, authentification, formulaires et ORM ont permis de construire rapidement."
        },
        "project.gradingdino.djangoIntro2": {
            en: "However, Django has a steep learning curve because you must do things <strong>their way</strong> — specific conventions, project structure, and patterns. With our tight deadline, we didn't have time to properly learn it, which slowed us down.",
            pt: "No entanto, Django tem uma curva de aprendizagem íngreme porque tens de fazer as coisas à <strong>maneira deles</strong> — convenções específicas, estrutura de projeto e padrões. Com o nosso prazo apertado, não tivemos tempo para aprender adequadamente, o que nos atrasou.",
            lu: "Awer Django huet eng steil Léierkurve well een d'Saachen <strong>op hir Manéier</strong> maache muss — spezifesch Konventiounen, Projet-Struktur a Patternen. Mat eisem enge Deadline hunn mir net genuch Zäit gehat fir et richteg ze léieren, wat eis verlaangsaamt huet.",
            de: "Django hat jedoch eine steile Lernkurve, weil man Dinge <strong>auf ihre Weise</strong> machen muss — spezifische Konventionen, Projektstruktur und Muster. Mit unserer knappen Deadline hatten wir keine Zeit, es richtig zu lernen, was uns verlangsamte.",
            fr: "Cependant, Django a une courbe d'apprentissage raide car il faut faire les choses <strong>à leur manière</strong> — conventions spécifiques, structure de projet et modèles. Avec notre délai serré, nous n'avions pas le temps de l'apprendre correctement, ce qui nous a ralentis."
        },
        "project.gradingdino.djangoIntro3": {
            en: "<strong>The lesson:</strong> Django is great for rapid development, but the \"batteries\" only help if you know how to use them. Learning a new framework adds hidden time costs.",
            pt: "<strong>A lição:</strong> Django é ótimo para desenvolvimento rápido, mas as \"baterias\" só ajudam se souberes como usá-las. Aprender um novo framework adiciona custos de tempo ocultos.",
            lu: "<strong>D'Lektioun:</strong> Django ass super fir séier Entwécklung, awer d'\"Batterien\" hëllefen nëmme wann een weess wéi een se benotzt. E neit Framework ze léieren setzt versteckte Zäitkäschten dobäi.",
            de: "<strong>Die Lektion:</strong> Django ist großartig für schnelle Entwicklung, aber die \"Batterien\" helfen nur, wenn man weiß, wie man sie verwendet. Ein neues Framework zu lernen fügt versteckte Zeitkosten hinzu.",
            fr: "<strong>La leçon :</strong> Django est excellent pour le développement rapide, mais les \"piles\" n'aident que si vous savez comment les utiliser. Apprendre un nouveau framework ajoute des coûts de temps cachés."
        },
        "project.gradingdino.lessonsTitle": {
            en: "Lessons Learned",
            pt: "Lições Aprendidas",
            lu: "Geléiert Lektiounen",
            de: "Gelernte Lektionen",
            fr: "Leçons apprises"
        },
        "project.gradingdino.lesson1": {
            en: "<strong>Communication is everything</strong> — We divided work to move faster, but this created silos. Misunderstandings cost us time we could have spent on features. In the future, we'll treat communication with the same priority as coding.",
            pt: "<strong>A comunicação é tudo</strong> — Dividimos o trabalho para avançar mais rápido, mas isso criou silos. Mal-entendidos custaram-nos tempo que podíamos ter gasto em funcionalidades. No futuro, trataremos a comunicação com a mesma prioridade que a programação.",
            lu: "<strong>Kommunikatioun ass alles</strong> — Mir hunn d'Aarbecht opgedeelt fir méi séier virunzekommen, awer dat huet Silos geschaaft. Mëssverständnesser hunn eis Zäit kascht déi mir op Features hätte kënne verbréngen. An Zukunft behandele mir Kommunikatioun mat der selwechter Prioritéit wéi Coding.",
            de: "<strong>Kommunikation ist alles</strong> — Wir haben die Arbeit aufgeteilt, um schneller voranzukommen, aber das hat Silos geschaffen. Missverständnisse kosteten uns Zeit, die wir für Features hätten nutzen können. In Zukunft behandeln wir Kommunikation mit der gleichen Priorität wie Programmieren.",
            fr: "<strong>La communication est tout</strong> — Nous avons divisé le travail pour avancer plus vite, mais cela a créé des silos. Les malentendus nous ont coûté du temps que nous aurions pu consacrer aux fonctionnalités. À l'avenir, nous traiterons la communication avec la même priorité que le code."
        },
        "project.gradingdino.lesson2": {
            en: "<strong>Framework selection matters</strong> — Django was great for rapid prototyping, but its conventions felt limiting when we needed flexibility. Research upfront saves pain later.",
            pt: "<strong>A escolha do framework importa</strong> — O Django foi ótimo para prototipagem rápida, mas as suas convenções pareciam limitadoras quando precisávamos de flexibilidade. Pesquisar antecipadamente poupa dores de cabeça depois.",
            lu: "<strong>Framework Auswiel ass wichteg</strong> — Django war super fir séier Prototyping, awer seng Konventiounen hunn limitéierend gefillt wann mir Flexibilitéit gebraucht hunn. Recherche am Viraus spuert Péng méi spéit.",
            de: "<strong>Framework-Auswahl ist wichtig</strong> — Django war großartig für schnelles Prototyping, aber seine Konventionen fühlten sich einschränkend an, wenn wir Flexibilität brauchten. Vorab-Recherche spart später Schmerzen.",
            fr: "<strong>Le choix du framework compte</strong> — Django était excellent pour le prototypage rapide, mais ses conventions semblaient limitantes quand nous avions besoin de flexibilité. La recherche en amont évite des problèmes plus tard."
        },
        "project.gradingdino.lesson3": {
            en: "<strong>Planning isn't optional</strong> — Writing personas and user stories before coding felt slow, but it gave us clarity. We knew exactly what to build and could prioritize effectively.",
            pt: "<strong>O planeamento não é opcional</strong> — Escrever personas e user stories antes de programar pareceu lento, mas deu-nos clareza. Sabíamos exatamente o que construir e conseguimos priorizar eficazmente.",
            lu: "<strong>Planung ass net optional</strong> — Personas an User Stories schreiwen ier een codéiert huet sech lues ugefillt, awer et huet eis Kloerheet ginn. Mir wossten genee wat mir baue sollten a konnten effektiv prioriséieren.",
            de: "<strong>Planung ist nicht optional</strong> — Personas und User Stories vor dem Programmieren zu schreiben fühlte sich langsam an, aber es gab uns Klarheit. Wir wussten genau, was wir bauen sollten und konnten effektiv priorisieren.",
            fr: "<strong>La planification n'est pas optionnelle</strong> — Écrire des personas et des user stories avant de coder semblait lent, mais cela nous a donné de la clarté. Nous savions exactement quoi construire et pouvions prioriser efficacement."
        },
        "project.gradingdino.lesson4": {
            en: "<strong>Learn the tool before the deadline</strong> — Django's \"batteries included\" only help if you understand how to use them. We spent time fighting the framework instead of building features.",
            pt: "<strong>Aprende a ferramenta antes do prazo</strong> — As \"baterias incluídas\" do Django só ajudam se souberes como usá-las. Gastámos tempo a lutar contra o framework em vez de construir funcionalidades.",
            lu: "<strong>Léier d'Tool virum Deadline</strong> — Django seng \"Batterien abegraff\" hëllefen nëmmen wann een weess wéi een se benotzt. Mir hunn Zäit verbruecht géint de Framework ze kämpfen amplaz Features ze bauen.",
            de: "<strong>Lerne das Tool vor der Deadline</strong> — Djangos \"Batterien inklusive\" helfen nur, wenn man weiß, wie man sie benutzt. Wir haben Zeit damit verbracht, gegen das Framework zu kämpfen, statt Features zu bauen.",
            fr: "<strong>Apprends l'outil avant la deadline</strong> — Les \"piles incluses\" de Django n'aident que si tu sais comment les utiliser. Nous avons passé du temps à lutter contre le framework au lieu de construire des fonctionnalités."
        },
        "project.gradingdino.lesson5": {
            en: "<strong>MVP is okay</strong> — The project wasn't perfect, but it worked. Shipping something functional taught us more than endless planning ever could.",
            pt: "<strong>MVP está bem</strong> — O projeto não foi perfeito, mas funcionou. Entregar algo funcional ensinou-nos mais do que um planeamento interminável alguma vez poderia.",
            lu: "<strong>MVP ass ok</strong> — De Projet war net perfekt, awer et huet funktionéiert. Eppes Funktionelles ze liwweren huet eis méi geléiert wéi endlos Planung jeemools kéint.",
            de: "<strong>MVP ist okay</strong> — Das Projekt war nicht perfekt, aber es funktionierte. Etwas Funktionales zu liefern hat uns mehr gelehrt als endlose Planung es je könnte.",
            fr: "<strong>MVP c'est ok</strong> — Le projet n'était pas parfait, mais il fonctionnait. Livrer quelque chose de fonctionnel nous a appris plus que la planification sans fin ne le pourrait jamais."
        },
        "project.gradingdino.assets.title": {
            en: "Deliverables & Assets",
            pt: "Entregáveis e Ficheiros",
            lu: "Liwwerungen & Dateien",
            de: "Abgaben & Dateien",
            fr: "Livrables & Fichiers"
        },
        "project.gradingdino.assets.body": {
            en: "Research document covering framework selection, project planning methodology, and technical implementation.",
            pt: "Documento de pesquisa cobrindo seleção de frameworks, metodologia de planeamento de projeto e implementação técnica.",
            lu: "Forschungsdokument iwwer Framework-Auswiel, Projet-Planungsmethodologie an technesch Implementatioun.",
            de: "Forschungsdokument zur Framework-Auswahl, Projektplanungsmethodik und technischen Implementierung.",
            fr: "Document de recherche couvrant la sélection de frameworks, la méthodologie de planification de projet et l'implémentation technique."
        },
        "project.gradingdino.asset.research.title": {
            en: "Research Document",
            pt: "Documento de Pesquisa",
            lu: "Forschungsdokument",
            de: "Forschungsdokument",
            fr: "Document de recherche"
        },
        "project.gradingdino.asset.research.desc": {
            en: "View the research document covering framework comparison, project planning methodology, and technical decisions.",
            pt: "Ver o documento de pesquisa cobrindo comparação de frameworks, metodologia de planeamento de projeto e decisões técnicas.",
            lu: "Kuckt d'Forschungsdokument iwwer Framework-Verglach, Projet-Planungsmethodologie an technesch Decisiounen.",
            de: "Sehen Sie das Forschungsdokument zur Framework-Vergleich, Projektplanungsmethodik und technischen Entscheidungen.",
            fr: "Consultez le document de recherche couvrant la comparaison des frameworks, la méthodologie de planification de projet et les décisions techniques."
        },
        "project.gradingdino.asset.research.button": {
            en: "Download Research Document (PDF)",
            pt: "Descarregar Documento de Pesquisa (PDF)",
            lu: "Forschungsdokument eroflueden (PDF)",
            de: "Forschungsdokument herunterladen (PDF)",
            fr: "Télécharger le document de recherche (PDF)"
        },
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
