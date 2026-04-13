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
        "project.rds.section.overview.title": {
            en: "Overview",
            pt: "Visão Geral",
            lu: "Iwwersiicht",
            de: "Überblick",
            fr: "Vue d'ensemble"
        },
        "project.rds.section.overview.body": {
            en: "This project documents a centralized Remote Desktop Services environment where students can access a shared Windows desktop and applications securely from their own devices using domain credentials.",
            pt: "Este projeto documenta um ambiente centralizado de Remote Desktop Services onde os alunos podem aceder com segurança a um desktop Windows partilhado e aplicações a partir dos seus próprios dispositivos usando credenciais de domínio.",
            lu: "Dëst Projet dokumentéiert eng zentraliséiert Remote Desktop Services Ëmwelt, wou d'Schüler sécher op en deelen Windows Desktop an Applikatioune vun hiren eegene Geräter mat Domain-Login zougräife kënnen.",
            de: "Dieses Projekt dokumentiert eine zentralisierte Remote-Desktop-Services-Umgebung, in der Schüler sicher auf einen gemeinsamen Windows-Desktop und Anwendungen von ihren eigenen Geräten mit Domänenanmeldedaten zugreifen können.",
            fr: "Ce projet documente un environnement Remote Desktop Services centralisé où les élèves peuvent accéder en toute sécurité à un bureau Windows partagé et à des applications depuis leurs propres appareils avec des identifiants de domaine."
        },
        "project.rds.section.scenario.title": {
            en: "Scenario",
            pt: "Cenário",
            lu: "Szenario",
            de: "Szenario",
            fr: "Scénario"
        },
        "project.rds.card.single.title": {
            en: "Single-Server RDS",
            pt: "RDS em Servidor Único",
            lu: "Single-Server RDS",
            de: "Single-Server RDS",
            fr: "RDS sur Serveur Unique"
        },
        "project.rds.card.single.spec": {
            en: "Windows Server 2022",
            pt: "Windows Server 2022",
            lu: "Windows Server 2022",
            de: "Windows Server 2022",
            fr: "Windows Server 2022"
        },
        "project.rds.card.single.detail1": {
            en: "Lab 08",
            pt: "Lab 08",
            lu: "Lab 08",
            de: "Lab 08",
            fr: "Lab 08"
        },
        "project.rds.card.single.detail2": {
            en: "School Project",
            pt: "Projeto Escolar",
            lu: "Schoulprojet",
            de: "Schulprojekt",
            fr: "Projet scolaire"
        },
        "project.rds.card.single.body": {
            en: "Centralized RDS environment with AD DS, DNS, and RD Web Access. Students connect from external Windows 11 PCs using domain credentials without domain-joining.",
            pt: "Ambiente RDS centralizado com AD DS, DNS e RD Web Access. Os alunos ligam-se a partir de PCs Windows 11 externos usando credenciais de domínio sem juntar ao domínio.",
            lu: "Zentraliséiert RDS Ëmwelt mat AD DS, DNS an RD Web Access. d'Schüler verbannen sech vun externe Windows 11 PCs mat Domain-Login ouni de PC an d'Domain ze huelen.",
            de: "Zentralisierte RDS-Umgebung mit AD DS, DNS und RD Web Access. Schüler verbinden sich von externen Windows-11-PCs mit Domänenanmeldedaten ohne Domänenbeitritt.",
            fr: "Environnement RDS centralisé avec AD DS, DNS et RD Web Access. Les élèves se connectent depuis des PC Windows 11 externes avec des identifiants de domaine sans joindre le domaine."
        },
        "project.rds.section.core.title": {
            en: "Core Components",
            pt: "Componentes Principais",
            lu: "Haaptkomponenten",
            de: "Kernkomponenten",
            fr: "Composants Clés"
        },
        "project.rds.section.core.body": {
            en: "<strong>Server:</strong> <code>RDS-SRV01</code> on domain <code>lab8.local</code> with AD DS, DNS Server, and Remote Desktop Services. The RDS deployment is session-based (Quick Start) with RD Web Access. <strong>Clients:</strong> Physical Windows 11 PCs using bridged networking.",
            pt: "<strong>Servidor:</strong> <code>RDS-SRV01</code> no domínio <code>lab8.local</code> com AD DS, DNS Server e Remote Desktop Services. O deployment RDS é baseado em sessão (Quick Start) com RD Web Access. <strong>Clientes:</strong> PCs Windows 11 físicos com networking em bridge.",
            lu: "<strong>Server:</strong> <code>RDS-SRV01</code> am Domain <code>lab8.local</code> mat AD DS, DNS Server an Remote Desktop Services. D'RDS Umsetzung ass session-baséiert (Quick Start) mat RD Web Access. <strong>Clienten:</strong> Physesch Windows 11 PCs mat Bridged Networking.",
            de: "<strong>Server:</strong> <code>RDS-SRV01</code> in der Domäne <code>lab8.local</code> mit AD DS, DNS-Server und Remote Desktop Services. Die RDS-Bereitstellung ist sitzungsbasiert (Quick Start) mit RD Web Access. <strong>Clients:</strong> Physische Windows-11-PCs mit Bridged Networking.",
            fr: "<strong>Serveur :</strong> <code>RDS-SRV01</code> sur le domaine <code>lab8.local</code> avec AD DS, serveur DNS et Remote Desktop Services. Le déploiement RDS est basé sur des sessions (Quick Start) avec RD Web Access. <strong>Clients :</strong> PC Windows 11 physiques en mode bridge."
        },
        "project.rds.section.security.title": {
            en: "Access & Security",
            pt: "Acesso e Segurança",
            lu: "Zougang & Sécherheet",
            de: "Zugriff & Sicherheit",
            fr: "Accès & Sécurité"
        },
        "project.rds.section.security.body": {
            en: "Access is controlled via the <code>RDS_Students</code> Active Directory group. RD Web Access uses a self-signed certificate, and client name resolution is handled with a hosts file entry for the server hostname.",
            pt: "O acesso é controlado pelo grupo do Active Directory <code>RDS_Students</code>. O RD Web Access usa um certificado autoassinado e a resolução de nome no cliente é feita com uma entrada no ficheiro hosts para o hostname do servidor.",
            lu: "De Zougang ass iwwert d'Active Directory Grupp <code>RDS_Students</code> kontrolléiert. RD Web Access benotzt e self-signed Zertifikat, an d'Nimm-Opléisung um Client gëtt iwwert eng hosts Datei Entrée fir den Server-Hostname gemaach.",
            de: "Der Zugriff wird über die Active-Directory-Gruppe <code>RDS_Students</code> gesteuert. RD Web Access verwendet ein selbstsigniertes Zertifikat, und die Namensauflösung auf dem Client erfolgt über einen Hosts-Datei-Eintrag für den Server-Hostname.",
            fr: "L'accès est contrôlé via le groupe Active Directory <code>RDS_Students</code>. RD Web Access utilise un certificat auto-signé et la résolution de nom côté client est gérée via une entrée dans le fichier hosts pour le nom d'hôte du serveur."
        },
        "project.rds.section.connect.title": {
            en: "How Users Connect",
            pt: "Como os Utilizadores se Ligam",
            lu: "Wéi verbannen d'Benotzer",
            de: "So verbinden sich Benutzer",
            fr: "Comment les utilisateurs se connectent"
        },
        "project.rds.section.connect.body": {
            en: "Users connect via Remote Desktop (<code>mstsc</code>) using domain credentials or through RD Web Access by launching <code>.rdp</code> files for full desktop sessions or RemoteApps.",
            pt: "Os utilizadores ligam-se via Remote Desktop (<code>mstsc</code>) usando credenciais de domínio ou através do RD Web Access ao iniciar ficheiros <code>.rdp</code> para sessões completas ou RemoteApps.",
            lu: "Benotzer verbannen sech iwwert Remote Desktop (<code>mstsc</code>) mat Domain-Login oder iwwert RD Web Access andeems se <code>.rdp</code> Dateien fir voll Desktop Sessions oder RemoteApps starten.",
            de: "Benutzer verbinden sich per Remote Desktop (<code>mstsc</code>) mit Domänenanmeldedaten oder über RD Web Access durch Starten von <code>.rdp</code>-Dateien für volle Desktop-Sitzungen oder RemoteApps.",
            fr: "Les utilisateurs se connectent via Remote Desktop (<code>mstsc</code>) avec des identifiants de domaine ou via RD Web Access en lançant des fichiers <code>.rdp</code> pour des sessions de bureau complètes ou des RemoteApps."
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
