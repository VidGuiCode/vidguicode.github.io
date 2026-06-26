/**
 * RDS Documentation project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        "project.rds.meta.title": {
            en: "Remote Desktop Services (RDS) Documentation | VidGuiCode",
            pt: "Documentação de Remote Desktop Services (RDS) | VidGuiCode",
            lu: "Remote Desktop Services (RDS) Dokumentatioun | VidGuiCode",
            de: "Remote Desktop Services (RDS) Dokumentation | VidGuiCode",
            fr: "Documentation Remote Desktop Services (RDS) | VidGuiCode"
        },
        "project.rds.meta.desc": {
            en: "RDS documentation project: Windows Server 2022 single-server deployment with AD DS, DNS, RD Web Access, and session-based desktops.",
            pt: "Projeto de documentação RDS: implementação de servidor único no Windows Server 2022 com AD DS, DNS, RD Web Access e desktops baseados em sessão.",
            lu: "RDS Dokumentatiounsprojet: Windows Server 2022 Single-Server Umsetzung mat AD DS, DNS, RD Web Access an Session-baséierte Desktops.",
            de: "RDS-Dokumentationsprojekt: Windows Server 2022 Single-Server-Bereitstellung mit AD DS, DNS, RD Web Access und sitzungsbasierten Desktops.",
            fr: "Projet de documentation RDS : déploiement mono-serveur Windows Server 2022 avec AD DS, DNS, RD Web Access et bureaux basés sur des sessions."
        },
        "project.rds.badge": {
            en: "SCHOOL PROJECT",
            pt: "PROJETO ESCOLAR",
            lu: "SCHOULPROJET",
            de: "SCHULPROJEKT",
            fr: "PROJET SCOLAIRE"
        },
        "project.rds.title": {
            en: "Remote Desktop Services (RDS)",
            pt: "Remote Desktop Services (RDS)",
            lu: "Remote Desktop Services (RDS)",
            de: "Remote Desktop Services (RDS)",
            fr: "Remote Desktop Services (RDS)"
        },
        "project.rds.subtitle": {
            en: "Documentation and demo project covering a full Windows Server 2022 RDS deployment with AD DS, DNS, and RD Web Access.",
            pt: "Projeto de documentação e demonstração cobrindo um deployment completo de RDS no Windows Server 2022 com AD DS, DNS e RD Web Access.",
            lu: "Dokumentatiouns- a Demo-Projet fir eng komplett Windows Server 2022 RDS Umsetzung mat AD DS, DNS an RD Web Access.",
            de: "Dokumentations- und Demo-Projekt für eine vollständige Windows Server 2022 RDS-Bereitstellung mit AD DS, DNS und RD Web Access.",
            fr: "Projet de documentation et de démonstration d'un déploiement RDS complet sur Windows Server 2022 avec AD DS, DNS et RD Web Access."
        },
        "project.rds.labBadge": {
            en: "LAB 08 - WINDOWS SERVER SERVICES",
            pt: "LAB 08 - SERVIÇOS DO WINDOWS SERVER",
            lu: "LAB 08 - WINDOWS SERVER SERVICER",
            de: "LAB 08 - WINDOWS SERVER DIENSTE",
            fr: "LAB 08 - SERVICES WINDOWS SERVER"
        },

        "project.rds.glance.server.label": {
            en: "Windows Server running every role",
            pt: "Windows Server a executar todas as funções",
            lu: "Windows Server deen all Roll leeft",
            de: "Windows Server mit allen Rollen",
            fr: "Windows Server assurant tous les rôles"
        },
        "project.rds.glance.roles.label": {
            en: "core roles on one box (AD DS · DNS · RDS)",
            pt: "funções principais numa só máquina (AD DS · DNS · RDS)",
            lu: "Haaptrollen op enger eenzeger Maschinn (AD DS · DNS · RDS)",
            de: "Kernrollen auf einem Server (AD DS · DNS · RDS)",
            fr: "rôles clés sur une seule machine (AD DS · DNS · RDS)"
        },
        "project.rds.glance.connect.label": {
            en: "ways to connect (Remote Desktop + web)",
            pt: "formas de ligar (Remote Desktop + web)",
            lu: "Weeër fir ze verbannen (Remote Desktop + web)",
            de: "Verbindungswege (Remotedesktop + Web)",
            fr: "façons de se connecter (Bureau à distance + web)"
        },
        "project.rds.glance.byod.label": {
            en: "personal PCs, never domain-joined",
            pt: "PCs pessoais, nunca juntos ao domínio",
            lu: "perséinlech PCs, ni an d'Domain gemaach",
            de: "private PCs, nie der Domäne beigetreten",
            fr: "PC personnels, jamais joints au domaine"
        },

        "project.rds.arch.title": {
            en: "How a session reaches the user",
            pt: "Como uma sessão chega ao utilizador",
            lu: "Wéi eng Sessioun bei de Benotzer kënnt",
            de: "Wie eine Sitzung den Benutzer erreicht",
            fr: "Comment une session atteint l'utilisateur"
        },
        "project.rds.arch.strip": {
            en: "Clients to desktops",
            pt: "Dos clientes aos desktops",
            lu: "Vu Clienten zu Desktops",
            de: "Von Clients zu Desktops",
            fr: "Des clients aux bureaux"
        },
        "project.rds.arch.clients": {
            en: "Student PCs",
            pt: "PCs dos alunos",
            lu: "Schüler-PCs",
            de: "Schüler-PCs",
            fr: "PC des élèves"
        },
        "project.rds.arch.clients.spec": {
            en: "bridged LAN · domain login",
            pt: "LAN em bridge · login de domínio",
            lu: "Bridged LAN · Domain-Login",
            de: "Bridged LAN · Domänenanmeldung",
            fr: "LAN en bridge · connexion domaine"
        },
        "project.rds.arch.adds.spec": {
            en: "domain controller · access group",
            pt: "controlador de domínio · grupo de acesso",
            lu: "Domain-Controller · Zougangsgrupp",
            de: "Domänencontroller · Zugriffsgruppe",
            fr: "contrôleur de domaine · groupe d'accès"
        },
        "project.rds.arch.dns.spec": {
            en: "name resolution",
            pt: "resolução de nomes",
            lu: "Nimm-Opléisung",
            de: "Namensauflösung",
            fr: "résolution de noms"
        },
        "project.rds.arch.rds.meta": {
            en: "session-based",
            pt: "baseado em sessão",
            lu: "session-baséiert",
            de: "sitzungsbasiert",
            fr: "basé sur des sessions"
        },
        "project.rds.arch.rds.spec": {
            en: "shared desktop + RemoteApps",
            pt: "desktop partilhado + RemoteApps",
            lu: "gedeelten Desktop + RemoteApps",
            de: "geteilter Desktop + RemoteApps",
            fr: "bureau partagé + RemoteApps"
        },
        "project.rds.arch.web.spec": {
            en: "self-signed certificate",
            pt: "certificado autoassinado",
            lu: "self-signed Zertifikat",
            de: "selbstsigniertes Zertifikat",
            fr: "certificat auto-signé"
        },
        "project.rds.arch.desktop": {
            en: "Desktop session",
            pt: "Sessão de desktop",
            lu: "Desktop-Sessioun",
            de: "Desktop-Sitzung",
            fr: "Session de bureau"
        },
        "project.rds.arch.desktop.spec": {
            en: "full Windows desktop",
            pt: "desktop Windows completo",
            lu: "voll Windows Desktop",
            de: "vollständiger Windows-Desktop",
            fr: "bureau Windows complet"
        },
        "project.rds.arch.remoteapp.spec": {
            en: "single published apps",
            pt: "aplicações publicadas individuais",
            lu: "eenzel publizéiert Apps",
            de: "einzelne veröffentlichte Apps",
            fr: "applications publiées individuelles"
        },
        "project.rds.arch.note": {
            en: "Only members of the <code>RDS_Students</code> security group get a session. RD Web Access is published over a self-signed certificate, and clients resolve the server name through a local hosts-file entry — no client ever joins the domain.",
            pt: "Só os membros do grupo de segurança <code>RDS_Students</code> recebem uma sessão. O RD Web Access é publicado com um certificado autoassinado e os clientes resolvem o nome do servidor através de uma entrada local no ficheiro hosts — nenhum cliente se junta ao domínio.",
            lu: "Nëmmen d'Memberen vun der Sécherheetsgrupp <code>RDS_Students</code> kréien eng Sessioun. RD Web Access gëtt iwwert e self-signed Zertifikat publizéiert, an d'Clienten léisen den Server-Numm iwwert eng lokal hosts-Datei Entrée op — kee Client kënnt jeemools an d'Domain.",
            de: "Nur Mitglieder der Sicherheitsgruppe <code>RDS_Students</code> erhalten eine Sitzung. RD Web Access wird über ein selbstsigniertes Zertifikat bereitgestellt, und Clients lösen den Servernamen über einen lokalen Hosts-Datei-Eintrag auf — kein Client tritt jemals der Domäne bei.",
            fr: "Seuls les membres du groupe de sécurité <code>RDS_Students</code> obtiennent une session. RD Web Access est publié via un certificat auto-signé, et les clients résolvent le nom du serveur grâce à une entrée locale dans le fichier hosts — aucun client ne rejoint jamais le domaine."
        },

        "project.rds.does.title": {
            en: "What it actually does",
            pt: "O que faz na prática",
            lu: "Wat et tatsächlech mécht",
            de: "Was es konkret leistet",
            fr: "Ce qu'il fait concrètement"
        },
        "project.rds.does.desktop.title": {
            en: "One Windows desktop for everyone",
            pt: "Um desktop Windows para todos",
            lu: "Een Windows Desktop fir jiddereen",
            de: "Ein Windows-Desktop für alle",
            fr: "Un bureau Windows pour tous"
        },
        "project.rds.does.desktop.desc": {
            en: "Students open the same managed Windows desktop and apps from their own laptops — nothing to install.",
            pt: "Os alunos abrem o mesmo desktop Windows gerido e as aplicações a partir dos seus próprios portáteis — sem nada para instalar.",
            lu: "d'Schüler maachen dee selwechte verwalte Windows Desktop an d'Apps vun hiren eegene Laptopen op — näischt z'installéieren.",
            de: "Schüler öffnen denselben verwalteten Windows-Desktop und die Apps von ihren eigenen Laptops — ohne Installation.",
            fr: "Les élèves ouvrent le même bureau Windows géré et les applications depuis leur propre portable — rien à installer."
        },
        "project.rds.does.login.title": {
            en: "Sign in with your school account",
            pt: "Inicie sessão com a sua conta escolar",
            lu: "Mellt iech mat ärem Schoul-Konto un",
            de: "Mit dem Schulkonto anmelden",
            fr: "Connectez-vous avec votre compte scolaire"
        },
        "project.rds.does.login.desc": {
            en: "Your domain username and password decide what you can open. No setup is needed on each PC.",
            pt: "O seu nome de utilizador e palavra-passe de domínio decidem o que pode abrir. Não é preciso configurar cada PC.",
            lu: "Äre Domain-Benotzernumm a Passwuert entscheeden wat Dir opmaache kënnt. Et muss näischt op all PC agestallt ginn.",
            de: "Ihr Domänen-Benutzername und -Passwort entscheiden, was Sie öffnen können. Auf den einzelnen PCs ist keine Einrichtung nötig.",
            fr: "Votre nom d'utilisateur et mot de passe de domaine déterminent ce que vous pouvez ouvrir. Aucune configuration n'est nécessaire sur chaque PC."
        },
        "project.rds.does.web.title": {
            en: "Launch it from a browser",
            pt: "Inicie a partir de um navegador",
            lu: "Start et vun engem Browser",
            de: "Aus dem Browser starten",
            fr: "Lancez-le depuis un navigateur"
        },
        "project.rds.does.web.desc": {
            en: "A web page (RD Web Access) lets you start the full desktop or a single app with one click.",
            pt: "Uma página web (RD Web Access) permite iniciar o desktop completo ou uma só aplicação com um clique.",
            lu: "Eng Websäit (RD Web Access) léisst iech de ganzen Desktop oder eng eenzel App mat engem Klick starten.",
            de: "Eine Webseite (RD Web Access) lässt Sie den vollen Desktop oder eine einzelne App mit einem Klick starten.",
            fr: "Une page web (RD Web Access) permet de lancer le bureau complet ou une seule application en un clic."
        },
        "project.rds.does.secure.title": {
            en: "Your PC stays untouched",
            pt: "O seu PC fica intacto",
            lu: "Äre PC bleift onberéiert",
            de: "Ihr PC bleibt unangetastet",
            fr: "Votre PC reste intact"
        },
        "project.rds.does.secure.desc": {
            en: "Personal computers never join the school domain — everything runs on the server over the local network.",
            pt: "Os computadores pessoais nunca se juntam ao domínio da escola — tudo corre no servidor através da rede local.",
            lu: "Perséinlech Computeren kommen ni an d'Schoul-Domain — alles leeft um Server iwwert dat lokaalt Netzwierk.",
            de: "Private Computer treten nie der Schuldomäne bei — alles läuft auf dem Server über das lokale Netzwerk.",
            fr: "Les ordinateurs personnels ne rejoignent jamais le domaine de l'école — tout s'exécute sur le serveur via le réseau local."
        },

        "project.rds.section.overview.title": {
            en: "Overview",
            pt: "Visão Geral",
            lu: "Iwwersiicht",
            de: "Überblick",
            fr: "Vue d'ensemble"
        },
        "project.rds.section.overview.body": {
            en: "This project documents a centralized Remote Desktop Services environment where students sign in to a shared Windows desktop and applications securely from their own devices using domain credentials, without joining the domain.",
            pt: "Este projeto documenta um ambiente centralizado de Remote Desktop Services onde os alunos acedem com segurança a um desktop Windows partilhado e a aplicações a partir dos seus próprios dispositivos usando credenciais de domínio, sem se juntarem ao domínio.",
            lu: "Dëst Projet dokumentéiert eng zentraliséiert Remote Desktop Services Ëmwelt, wou d'Schüler sécher op en deelen Windows Desktop an Applikatioune vun hiren eegene Geräter mat Domain-Login zougräifen, ouni an d'Domain ze kommen.",
            de: "Dieses Projekt dokumentiert eine zentralisierte Remote-Desktop-Services-Umgebung, in der Schüler sicher auf einen gemeinsamen Windows-Desktop und Anwendungen von ihren eigenen Geräten mit Domänenanmeldedaten zugreifen, ohne der Domäne beizutreten.",
            fr: "Ce projet documente un environnement Remote Desktop Services centralisé où les élèves accèdent en toute sécurité à un bureau Windows partagé et à des applications depuis leurs propres appareils avec des identifiants de domaine, sans joindre le domaine."
        },

        "project.rds.stack.title": {
            en: "What Runs On The Server",
            pt: "O Que Corre no Servidor",
            lu: "Wat um Server leeft",
            de: "Was auf dem Server läuft",
            fr: "Ce qui tourne sur le serveur"
        },
        "project.rds.stack.intro": {
            en: "A single Windows Server 2022 box (<code>RDS-SRV01</code>, domain <code>lab8.local</code>) carries every role: the directory, DNS, the session host, and the web access portal.",
            pt: "Uma única máquina Windows Server 2022 (<code>RDS-SRV01</code>, domínio <code>lab8.local</code>) assume todas as funções: o diretório, o DNS, o session host e o portal de acesso web.",
            lu: "Eng eenzeg Windows Server 2022 Maschinn (<code>RDS-SRV01</code>, Domain <code>lab8.local</code>) iwwerhëlt all Roll: den Annuaire, den DNS, de Session Host an de Web-Access-Portal.",
            de: "Ein einzelner Windows-Server-2022-Rechner (<code>RDS-SRV01</code>, Domäne <code>lab8.local</code>) übernimmt jede Rolle: Verzeichnis, DNS, Sitzungshost und Web-Access-Portal.",
            fr: "Une seule machine Windows Server 2022 (<code>RDS-SRV01</code>, domaine <code>lab8.local</code>) assure tous les rôles : l'annuaire, le DNS, l'hôte de session et le portail d'accès web."
        },
        "project.rds.stack.adds.title": {
            en: "Active Directory Domain Services",
            pt: "Active Directory Domain Services",
            lu: "Active Directory Domain Services",
            de: "Active Directory-Domänendienste",
            fr: "Services de domaine Active Directory"
        },
        "project.rds.stack.adds.body": {
            en: "<strong>Domain controller for <code>lab8.local</code></strong>: holds the user accounts and the <code>RDS_Students</code> security group that decides who is allowed a remote session.",
            pt: "<strong>Controlador de domínio de <code>lab8.local</code></strong>: guarda as contas de utilizador e o grupo de segurança <code>RDS_Students</code> que decide quem pode ter uma sessão remota.",
            lu: "<strong>Domain-Controller fir <code>lab8.local</code></strong>: hält d'Benotzerkonten an d'Sécherheetsgrupp <code>RDS_Students</code>, déi entscheet wien eng Remote-Sessioun ka kréien.",
            de: "<strong>Domänencontroller für <code>lab8.local</code></strong>: enthält die Benutzerkonten und die Sicherheitsgruppe <code>RDS_Students</code>, die festlegt, wer eine Remotesitzung erhalten darf.",
            fr: "<strong>Contrôleur de domaine pour <code>lab8.local</code></strong> : contient les comptes utilisateurs et le groupe de sécurité <code>RDS_Students</code> qui décide qui a droit à une session distante."
        },
        "project.rds.stack.dns.title": {
            en: "DNS & Name Resolution",
            pt: "DNS e Resolução de Nomes",
            lu: "DNS & Nimm-Opléisung",
            de: "DNS & Namensauflösung",
            fr: "DNS & Résolution de noms"
        },
        "project.rds.stack.dns.body": {
            en: "<strong>DNS runs on the same server</strong> to resolve the domain. External client PCs reach the host through a <code>hosts</code>-file entry that maps the server name to its LAN IP.",
            pt: "<strong>O DNS corre no mesmo servidor</strong> para resolver o domínio. Os PCs cliente externos chegam ao host através de uma entrada no ficheiro <code>hosts</code> que mapeia o nome do servidor para o seu IP de LAN.",
            lu: "<strong>Den DNS leeft um selwechte Server</strong> fir d'Domain opzeléisen. Extern Client-PCs erreechen den Host iwwert eng <code>hosts</code>-Datei Entrée déi den Server-Numm op seng LAN-IP mappt.",
            de: "<strong>DNS läuft auf demselben Server</strong>, um die Domäne aufzulösen. Externe Client-PCs erreichen den Host über einen <code>hosts</code>-Datei-Eintrag, der den Servernamen auf seine LAN-IP abbildet.",
            fr: "<strong>Le DNS tourne sur le même serveur</strong> pour résoudre le domaine. Les PC clients externes atteignent l'hôte via une entrée du fichier <code>hosts</code> qui associe le nom du serveur à son IP LAN."
        },
        "project.rds.stack.rds.title": {
            en: "Remote Desktop Services",
            pt: "Remote Desktop Services",
            lu: "Remote Desktop Services",
            de: "Remotedesktopdienste",
            fr: "Services Bureau à distance"
        },
        "project.rds.stack.rds.body": {
            en: "<strong>Single-server session-based deployment</strong> (Quick Start): the RD Session Host serves a shared Windows desktop and published RemoteApps, brokered on the same box.",
            pt: "<strong>Deployment de servidor único baseado em sessão</strong> (Quick Start): o RD Session Host serve um desktop Windows partilhado e RemoteApps publicadas, com o broker na mesma máquina.",
            lu: "<strong>Single-Server session-baséiert Umsetzung</strong> (Quick Start): den RD Session Host servéiert e gedeelten Windows Desktop a publizéiert RemoteApps, gebrokert op der selwechter Maschinn.",
            de: "<strong>Sitzungsbasierte Single-Server-Bereitstellung</strong> (Quick Start): der RD-Sitzungshost stellt einen geteilten Windows-Desktop und veröffentlichte RemoteApps bereit, vermittelt auf demselben Rechner.",
            fr: "<strong>Déploiement mono-serveur basé sur des sessions</strong> (Quick Start) : l'hôte de session RD fournit un bureau Windows partagé et des RemoteApps publiées, avec le broker sur la même machine."
        },
        "project.rds.stack.web.title": {
            en: "RD Web Access",
            pt: "RD Web Access",
            lu: "RD Web Access",
            de: "RD Web Access",
            fr: "RD Web Access"
        },
        "project.rds.stack.web.body": {
            en: "<strong>Browser portal over HTTPS</strong>: students sign in and launch <code>.rdp</code> files for a full desktop or individual apps. Served with a self-signed certificate for the lab network.",
            pt: "<strong>Portal de navegador sobre HTTPS</strong>: os alunos iniciam sessão e lançam ficheiros <code>.rdp</code> para um desktop completo ou aplicações individuais. Servido com um certificado autoassinado para a rede do lab.",
            lu: "<strong>Browser-Portal iwwer HTTPS</strong>: d'Schüler mellen sech un a starten <code>.rdp</code> Dateien fir e ganzen Desktop oder eenzel Apps. Mat engem self-signed Zertifikat fir d'Lab-Netzwierk geliwwert.",
            de: "<strong>Browser-Portal über HTTPS</strong>: Schüler melden sich an und starten <code>.rdp</code>-Dateien für einen vollen Desktop oder einzelne Apps. Bereitgestellt mit einem selbstsignierten Zertifikat für das Labornetzwerk.",
            fr: "<strong>Portail navigateur en HTTPS</strong> : les élèves se connectent et lancent des fichiers <code>.rdp</code> pour un bureau complet ou des applications individuelles. Servi avec un certificat auto-signé pour le réseau du lab."
        },
        "project.rds.stack.clients.title": {
            en: "Clients & Networking",
            pt: "Clientes e Rede",
            lu: "Clienten & Netzwierk",
            de: "Clients & Netzwerk",
            fr: "Clients & Réseau"
        },
        "project.rds.stack.clients.body": {
            en: "<strong>Physical Windows 11 PCs</strong> on a bridged LAN connect with <code>mstsc</code> using domain credentials — without ever joining the domain.",
            pt: "<strong>PCs Windows 11 físicos</strong> numa LAN em bridge ligam-se com o <code>mstsc</code> usando credenciais de domínio — sem nunca se juntarem ao domínio.",
            lu: "<strong>Physesch Windows 11 PCs</strong> op enger Bridged LAN verbannen sech mat <code>mstsc</code> mat Domain-Login — ouni jeemools an d'Domain ze kommen.",
            de: "<strong>Physische Windows-11-PCs</strong> in einem Bridged LAN verbinden sich mit <code>mstsc</code> über Domänenanmeldedaten — ohne jemals der Domäne beizutreten.",
            fr: "<strong>Des PC Windows 11 physiques</strong> sur un LAN en bridge se connectent avec <code>mstsc</code> à l'aide d'identifiants de domaine — sans jamais joindre le domaine."
        },

        "project.rds.practiced.title": {
            en: "What I Practiced",
            pt: "O Que Pratiquei",
            lu: "Wat ech praktizéiert hunn",
            de: "Was ich geübt habe",
            fr: "Ce que j'ai pratiqué"
        },
        "project.rds.practiced.ad.title": {
            en: "Active Directory & groups",
            pt: "Active Directory e grupos",
            lu: "Active Directory & Gruppen",
            de: "Active Directory & Gruppen",
            fr: "Active Directory & groupes"
        },
        "project.rds.practiced.ad.desc": {
            en: "Standing up a domain, creating users, and gating access with a security group.",
            pt: "Montar um domínio, criar utilizadores e controlar o acesso com um grupo de segurança.",
            lu: "Eng Domain opbauen, Benotzer uleeën an den Zougang mat enger Sécherheetsgrupp kontrolléieren.",
            de: "Eine Domäne aufbauen, Benutzer anlegen und den Zugriff mit einer Sicherheitsgruppe steuern.",
            fr: "Monter un domaine, créer des utilisateurs et contrôler l'accès avec un groupe de sécurité."
        },
        "project.rds.practiced.rds.title": {
            en: "Centralized desktop delivery",
            pt: "Entrega centralizada de desktops",
            lu: "Zentraliséiert Desktop-Liwwerung",
            de: "Zentrale Desktop-Bereitstellung",
            fr: "Livraison de bureaux centralisée"
        },
        "project.rds.practiced.rds.desc": {
            en: "Configuring session-based RDS so one server serves desktops and apps to many clients.",
            pt: "Configurar RDS baseado em sessão para que um servidor sirva desktops e aplicações a muitos clientes.",
            lu: "Session-baséiert RDS konfiguréieren, sou datt ee Server Desktops an Apps fir vill Clienten servéiert.",
            de: "Sitzungsbasiertes RDS konfigurieren, damit ein Server Desktops und Apps für viele Clients bereitstellt.",
            fr: "Configurer un RDS basé sur des sessions pour qu'un serveur fournisse bureaux et applications à de nombreux clients."
        },
        "project.rds.practiced.security.title": {
            en: "Access & certificates",
            pt: "Acesso e certificados",
            lu: "Zougang & Zertifikater",
            de: "Zugriff & Zertifikate",
            fr: "Accès & certificats"
        },
        "project.rds.practiced.security.desc": {
            en: "Group-based authorization, a self-signed TLS certificate, and client-side name resolution.",
            pt: "Autorização por grupo, um certificado TLS autoassinado e resolução de nomes no cliente.",
            lu: "Grupp-baséiert Autorisatioun, e self-signed TLS Zertifikat a Nimm-Opléisung um Client.",
            de: "Gruppenbasierte Autorisierung, ein selbstsigniertes TLS-Zertifikat und clientseitige Namensauflösung.",
            fr: "Autorisation par groupe, un certificat TLS auto-signé et résolution de noms côté client."
        },

        "project.rds.section.assets.title": {
            en: "Deliverables & Assets",
            pt: "Entregáveis e Ficheiros",
            lu: "Liwwerungen & Dateien",
            de: "Abgaben & Dateien",
            fr: "Livrables & Fichiers"
        },
        "project.rds.section.assets.body": {
            en: "Scenario description, step-by-step documentation, presentation, and live demonstration.",
            pt: "Descrição do cenário, documentação passo-a-passo, apresentação e demonstração ao vivo.",
            lu: "Szenario-Beschreiwung, Step-by-step Dokumentatioun, Presentatioun an Live-Demo.",
            de: "Szenariobeschreibung, Schritt-für-Schritt-Dokumentation, Präsentation und Live-Demonstration.",
            fr: "Description du scénario, documentation pas à pas, présentation et démonstration en direct."
        },
        "project.rds.asset.documentation.title": {
            en: "Documentation",
            pt: "Documentação",
            lu: "Dokumentatioun",
            de: "Dokumentation",
            fr: "Documentation"
        },
        "project.rds.asset.documentation.desc": {
            en: "View the full RDS implementation documentation used for the lab delivery.",
            pt: "Ver a documentação completa da implementação RDS usada para a entrega do lab.",
            lu: "Kuckt d'ganz RDS Umsetzungs-Dokumentatioun déi fir d'Lab Ofgab benotzt gouf.",
            de: "Sehen Sie die vollständige RDS-Implementierungsdokumentation für die Lab-Abgabe.",
            fr: "Consultez la documentation complète de l'implémentation RDS utilisée pour la remise du lab."
        },
        "project.rds.asset.documentation.button": {
            en: "Download Documentation (PDF)",
            pt: "Descarregar Documentação (PDF)",
            lu: "Dokumentatioun eroflueden (PDF)",
            de: "Dokumentation herunterladen (PDF)",
            fr: "Télécharger la documentation (PDF)"
        },
        "project.rds.asset.presentation.title": {
            en: "Presentation",
            pt: "Apresentação",
            lu: "Presentatioun",
            de: "Präsentation",
            fr: "Présentation"
        },
        "project.rds.asset.presentation.desc": {
            en: "View the project presentation slides used during the graded demonstration.",
            pt: "Ver os slides da apresentação usados durante a demonstração avaliada.",
            lu: "Kuckt d'Presentatiouns-Slides déi bei der bewerteter Demo benotzt goufen.",
            de: "Sehen Sie die Präsentationsfolien, die während der bewerteten Demonstration verwendet wurden.",
            fr: "Consultez les diapositives de présentation utilisées pendant la démonstration notée."
        },
        "project.rds.asset.presentation.button": {
            en: "Download Presentation (PDF)",
            pt: "Descarregar Apresentação (PDF)",
            lu: "Presentatioun eroflueden (PDF)",
            de: "Präsentation herunterladen (PDF)",
            fr: "Télécharger la présentation (PDF)"
        },

        "project.rds.sidebar.tech.server2022": {
            en: "Windows Server 2022",
            pt: "Windows Server 2022",
            lu: "Windows Server 2022",
            de: "Windows Server 2022",
            fr: "Windows Server 2022"
        },
        "project.rds.sidebar.tech.adds": {
            en: "Active Directory Domain Services",
            pt: "Active Directory Domain Services",
            lu: "Active Directory Domain Services",
            de: "Active Directory-Domänendienste",
            fr: "Services de domaine Active Directory"
        },
        "project.rds.sidebar.tech.dns": {
            en: "DNS Server",
            pt: "Servidor DNS",
            lu: "DNS Server",
            de: "DNS-Server",
            fr: "Serveur DNS"
        },
        "project.rds.sidebar.tech.rds": {
            en: "Remote Desktop Services",
            pt: "Remote Desktop Services",
            lu: "Remote Desktop Services",
            de: "Remotedesktopdienste",
            fr: "Services Bureau à distance"
        },
        "project.rds.sidebar.tech.rdweb": {
            en: "RD Web Access",
            pt: "RD Web Access",
            lu: "RD Web Access",
            de: "RD Web Access",
            fr: "RD Web Access"
        },
        "project.rds.sidebar.config.title": {
            en: "Key Configuration",
            pt: "Configuração Principal",
            lu: "Wichteg Konfiguratioun",
            de: "Wichtige Konfiguration",
            fr: "Configuration Clés"
        },
        "project.rds.sidebar.config.sessionBased": {
            en: "Session-based deployment",
            pt: "Deployment baseado em sessão",
            lu: "Session-baséiert Umsetzung",
            de: "Sitzungsbasierte Bereitstellung",
            fr: "Déploiement basé sur des sessions"
        },
        "project.rds.sidebar.config.groupAccess": {
            en: "Security group access control",
            pt: "Controlo de acesso por grupo",
            lu: "Zougangskontroll iwwer Grupp",
            de: "Zugriffssteuerung per Sicherheitsgruppe",
            fr: "Contrôle d'accès par groupe"
        },
        "project.rds.sidebar.config.selfSigned": {
            en: "Self-signed certificate",
            pt: "Certificado autoassinado",
            lu: "Self-signed Zertifikat",
            de: "Selbstsigniertes Zertifikat",
            fr: "Certificat auto-signé"
        },
        "project.rds.sidebar.config.hostsFile": {
            en: "Hosts file name resolution",
            pt: "Resolução de nome via hosts",
            lu: "Nimm-Opléisung iwwert hosts Datei",
            de: "Namensauflösung über Hosts-Datei",
            fr: "Résolution de nom via fichier hosts"
        },
        "project.rds.sidebar.config.bridgedLan": {
            en: "Bridged LAN access",
            pt: "Acesso LAN em bridge",
            lu: "Bridged LAN Zougang",
            de: "Bridged-LAN-Zugriff",
            fr: "Accès LAN en mode bridge"
        },
        "project.rds.sidebar.deliverables.title": {
            en: "Deliverables",
            pt: "Entregáveis",
            lu: "Liwwerungen",
            de: "Abgaben",
            fr: "Livrables"
        },
        "project.rds.sidebar.deliverables.docPdf": {
            en: "Documentation PDF",
            pt: "PDF da documentação",
            lu: "Dokumentatioun PDF",
            de: "Dokumentation (PDF)",
            fr: "PDF de documentation"
        },
        "project.rds.sidebar.deliverables.presentation": {
            en: "Presentation",
            pt: "Apresentação",
            lu: "Presentatioun",
            de: "Präsentation",
            fr: "Présentation"
        },
        "project.rds.sidebar.deliverables.demo": {
            en: "Live demo",
            pt: "Demonstração ao vivo",
            lu: "Live Demo",
            de: "Live-Demo",
            fr: "Démo en direct"
        }
    };
    Object.assign(translations, extra);
})();
