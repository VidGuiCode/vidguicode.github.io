/**
 * Homelab project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        "project.homelab.badge": {
            en: "INFRASTRUCTURE",
            pt: "INFRAESTRUTURA",
            lu: "Infrastruktur",
            de: "INFRASTRUKTUR",
            fr: "INFRASTRUCTURE"
        },
        "project.homelab.section.setup.title": {
            en: "The \"Small but Mighty\" Setup",
            pt: "A configuração \"pequena mas poderosa\"",
            lu: "D'\"kleng mee staark\" Opstellung",
            de: "Das \"kleine aber starke\" Setup",
            fr: "La configuration « petite mais puissante »"
        },
        "project.homelab.section.setup.body": {
            en: "This isn't a noisy server rack tucked away in a basement—it's a silent, efficient cluster running in my living room. With only one LAN outlet in the home, I needed the cluster where internet speeds matter most. This constraint pushed me to prioritize silent operation and low power consumption so it wouldn't disturb daily life. What started as a way to learn Docker evolved into a capable personal cloud hosting 6+ custom web applications with unified SSO, a complete media automation stack, and a K3s cluster for containerized services — all running across ~15 containerized services.",
            pt: "Isto não é um rack de servidores barulhento escondido numa cave—é um cluster silencioso e eficiente a funcionar na minha sala. Com apenas uma tomada LAN em casa, precisava do cluster onde a velocidade da internet mais importa. Esta limitação obrigou-me a priorizar operação silenciosa e baixo consumo energético para não perturbar o dia a dia. O que começou como forma de aprender Docker evoluiu para uma cloud pessoal capaz com 6+ aplicações web personalizadas com SSO unificado, uma stack completa de automação multimédia e um cluster K3s para serviços conteinerizados — tudo a correr em ~15 serviços conteinerizados.",
            lu: "Dat ass kee lauten Server Rack verstoppt am Keller—et ass e ruegen, effizienten Cluster deen a mengem Wunnzëmmer leeft. Mat nëmmen enger LAN Outlet doheem, hunn ech de Cluster gebraucht wou Internet Geschwindegkeet am meeschten zielt. Dës Aschränkung huet mech gezwongen roueg Operatioun an niddrege Stroumverbrauch ze priorisséieren fir den Alldag net ze stéieren. Wat als Wee ugefaang huet fir Docker ze léieren huet sech zu enger fäeger perséinlecher Cloud entwéckelt mat 6+ personaliséierten Web Apps mat eenheetlechem SSO, engem komplette Media Automation Stack, an engem K3s Cluster fir containeréiert Servicer — alles iwwer ~15 containeréiert Servicer.",
            de: "Kein lautes Server-Rack im Keller, sondern ein leiser, effizienter Cluster mitten im Wohnzimmer. Da es zu Hause nur eine einzige LAN-Dose gibt, musste der Cluster genau dort stehen, wo die Leitung am meisten bringt. Diese Einschränkung hat mich gezwungen, auf Lautstärke und Stromverbrauch zu achten, damit der Alltag ganz normal weiterläuft. Was als Docker-Lernprojekt begonnen hat, ist heute eine vollwertige persönliche Cloud: 6+ selbst entwickelte Web-Apps mit einheitlichem SSO, ein kompletter Media-Automation-Stack und ein K3s-Cluster für containerisierte Workloads — verteilt auf rund 15 Services.",
            fr: "Ce n'est pas un rack de serveurs bruyant caché dans une cave—c'est un cluster silencieux et efficace dans mon salon. Avec une seule prise LAN à la maison, j'avais besoin du cluster là où la vitesse internet compte le plus. Cette contrainte m'a poussé à prioriser le fonctionnement silencieux et la faible consommation d'énergie pour ne pas perturber la vie quotidienne. Ce qui a commencé comme un moyen d'apprendre Docker a évolué en un cloud personnel capable hébergeant 6+ applications web personnalisées avec SSO unifié, une stack complète d'automatisation multimédia, et un cluster K3s pour services conteneurisés — le tout réparti sur ~15 services conteneurisés."
        },
        "project.homelab.section.what.title": {
            en: "What It Does",
            pt: "O que faz",
            lu: "Wat et mécht",
            de: "Was es tut",
            fr: "Ce que ça fait"
        },
        "project.homelab.section.what.body": {
            en: "The system powers a variety of critical services across two orchestration layers:",
            pt: "O sistema suporta vários serviços críticos em duas camadas de orquestração:",
            lu: "De System bedreiwt vill wichteg Servicer iwwer zwou Orchestratiounsschichten:",
            de: "Das System betreibt verschiedene kritische Dienste über zwei Orchestrierungsebenen:",
            fr: "Le système alimente plusieurs services critiques sur deux couches d’orchestration :"
        },
        "project.homelab.section.what.compose.title": {
            en: "Docker Compose Stack",
            pt: "Stack Docker Compose",
            lu: "Docker Compose Stack",
            de: "Docker-Compose-Stack",
            fr: "Stack Docker Compose"
        },
        "project.homelab.section.what.compose.media": {
            en: "Media Automation: Full *arr stack (Radarr, Sonarr, Bazarr) for automatic media organization, with Jellyfin as the streaming frontend and integrated virus scanning.",
            pt: "Automação multimédia: Stack completa *arr (Radarr, Sonarr, Bazarr) para organização automática de media, com Jellyfin como frontend de streaming e antivírus integrado.",
            lu: "Medien-Automatiséierung: Voll *arr Stack (Radarr, Sonarr, Bazarr) fir automatesch Medien-Organisatioun, mat Jellyfin als Streaming-Frontend a Virenscan.",
            de: "Media-Automatisierung: Vollständiger *arr-Stack (Radarr, Sonarr, Bazarr) für automatische Medienorganisation, mit Jellyfin als Streaming-Frontend und integriertem Virenscan.",
            fr: "Automatisation média : Stack *arr complet (Radarr, Sonarr, Bazarr) pour organiser les médias automatiquement, avec Jellyfin en frontend de streaming et antivirus intégré."
        },
        "project.homelab.section.what.compose.platform": {
            en: "Custom Web Platform: Self-built apps including an AI-powered content digest tool, QR code generator, and centralized app launcher—all sharing a unified authentication system.",
            pt: "Plataforma web personalizada: Apps próprias incluindo ferramenta de resumos com IA, gerador de códigos QR e lançador centralizado — todos com um sistema de autenticação unificado.",
            lu: "Personaliséiert Web Plattform: Selwer gebaut Apps inklusiv AI-gestäerkte Digest-Tool, QR Code Generator, an zentrale App Launcher — all mat engem eenheetleche Auth System.",
            de: "Individuelle Web-Plattform: Eigenentwickelte Apps wie ein KI-gestütztes Digest-Tool, QR-Code-Generator und zentraler App-Launcher – alle teilen sich ein einheitliches Auth-System.",
            fr: "Plateforme web personnalisée : Applications maison dont un outil de digest IA, un générateur de QR codes et un lanceur centralisé — tous avec une authentification unifiée."
        },
        "project.homelab.section.what.compose.sso": {
            en: "Single Sign-On: JWT-based SSO across all subdomains with token blacklisting, audit logging, and role-based access control.",
            pt: "Single Sign-On: SSO baseado em JWT em todos os subdomínios com blacklist de tokens, auditoria e controlo de acesso por papéis.",
            lu: "Single Sign-On: JWT-baséiert SSO iwwer all Subdomaine mat Token Blacklisting, Audit Logging a Rollen-baséierten Zougang.",
            de: "Single Sign-On: JWT-basiertes SSO über alle Subdomains mit Token-Blacklisting, Audit-Logs und rollenbasiertem Zugriff.",
            fr: "Single Sign-On : SSO basé sur JWT pour tous les sous-domaines, avec blacklist de tokens, journalisation d’audit et contrôle d’accès par rôles."
        },
        "project.homelab.section.what.k3s.title": {
            en: "K3s Cluster",
            pt: "Cluster K3s",
            lu: "K3s Cluster",
            de: "K3s-Cluster",
            fr: "Cluster K3s"
        },
        "project.homelab.section.what.k3s.orchestration": {
            en: "Lightweight Orchestration: Kubernetes-based cluster with Traefik ingress for routing and Portainer for management.",
            pt: "Orquestração leve: Cluster baseado em Kubernetes com Traefik ingress para encaminhamento e Portainer para gestão.",
            lu: "Liicht Orchestratioun: Kubernetes-baséierte Cluster mat Traefik Ingress fir Routing a Portainer fir Gestioun.",
            de: "Leichtgewicht-Orchestrierung: Kubernetes-basierter Cluster mit Traefik Ingress fürs Routing und Portainer für das Management.",
            fr: "Orchestration légère : Cluster basé sur Kubernetes avec Traefik Ingress pour le routage et Portainer pour la gestion."
        },
        "project.homelab.section.what.k3s.apps": {
            en: "Containerized Apps: Services like the QR generator run as Kubernetes deployments with proper ingress rules.",
            pt: "Apps conteinerizadas: Serviços como o gerador de QR correm em deployments Kubernetes com regras de ingress adequadas.",
            lu: "Containeriséiert Apps: Servicer wéi de QR Generator lafen als Kubernetes Deployments mat passende Ingress Reegelen.",
            de: "Containerisierte Apps: Dienste wie der QR-Generator laufen als Kubernetes-Deployments mit passenden Ingress-Regeln.",
            fr: "Applications conteneurisées : Des services comme le générateur de QR tournent en déploiements Kubernetes avec les bonnes règles d’ingress."
        },
        "project.homelab.section.what.gateway.title": {
            en: "Cloud Gateway",
            pt: "Gateway na cloud",
            lu: "Cloud Gateway",
            de: "Cloud-Gateway",
            fr: "Passerelle cloud"
        },
        "project.homelab.section.what.gateway.tunnel": {
            en: "Secure Tunnel: WireGuard VPN connects the home cluster to a cloud VPS, enabling public access without exposing home ports.",
            pt: "Túnel seguro: WireGuard VPN liga o cluster doméstico a um VPS na cloud, permitindo acesso público sem expor portas de casa.",
            lu: "Sécheren Tunnel: WireGuard VPN verbënnt den Heem-Cluster mat engem Cloud VPS, ouni Heem-Porten opzemaachen.",
            de: "Sicherer Tunnel: WireGuard VPN verbindet den Heim-Cluster mit einem Cloud-VPS und ermöglicht öffentlichen Zugriff ohne Ports daheim zu öffnen.",
            fr: "Tunnel sécurisé : WireGuard VPN relie le cluster maison à un VPS cloud, offrant un accès public sans exposer les ports domestiques."
        },
        "project.homelab.section.what.gateway.proxy": {
            en: "Reverse Proxy: Caddy handles SSL termination and routes traffic through the encrypted tunnel to home services.",
            pt: "Reverse Proxy: Caddy faz a terminação SSL e encaminha o tráfego pelo túnel encriptado para os serviços em casa.",
            lu: "Reverse Proxy: Caddy këmmert sech ëm SSL Terminatioun a rout de Traffic duerch den encryptéierten Tunnel op Heem Servicer.",
            de: "Reverse Proxy: Caddy terminiert SSL und leitet den Traffic durch den verschlüsselten Tunnel zu den Heimdiensten.",
            fr: "Reverse proxy : Caddy gère la terminaison SSL et route le trafic via le tunnel chiffré vers les services maison."
        },
        "project.homelab.section.what.gateway.monitoring": {
            en: "Uptime Monitoring: Status page tracks all services with alerting capabilities.",
            pt: "Monitorização: Página de estado acompanha todos os serviços com alertas.",
            lu: "Uptime Iwwerwaachung: Status Säit iwwerwaacht all Servicer mat Alarmer.",
            de: "Uptime-Monitoring: Statusseite überwacht alle Dienste mit Alarmierungen.",
            fr: "Supervision : Une page de statut suit tous les services avec alertes."
        },
        "project.homelab.nodes.primary.title": {
            en: "Primary Node",
            pt: "Nó Primário",
            lu: "Primären Node",
            de: "Primärknoten",
            fr: "Nœud primaire"
        },
        "project.homelab.nodes.primary.spec": {
            en: "arm64 / raspberry-pi-5",
            pt: "arm64 / raspberry-pi-5",
            lu: "arm64 / raspberry-pi-5",
            de: "arm64 / raspberry-pi-5",
            fr: "arm64 / raspberry-pi-5"
        },
        "project.homelab.nodes.primary.cores": {
            en: "4 cores",
            pt: "4 núcleos",
            lu: "4 Kären",
            de: "4 Kerne",
            fr: "4 cœurs"
        },
        "project.homelab.nodes.primary.ram": {
            en: "8GB RAM",
            pt: "8GB RAM",
            lu: "8GB RAM",
            de: "8GB RAM",
            fr: "8GB RAM"
        },
        "project.homelab.nodes.primary.body": {
            en: "The heart of the cluster. Efficient, silent, and always on. Handles orchestration and lightweight services.",
            pt: "O coração do cluster. Eficiente, silencioso e sempre ligado. Gere a orquestração e serviços leves.",
            lu: "D’Häerz vum Cluster. Effizient, roueg a stänneg un. Hëlt d’Orchestratioun a liicht Servicer iwwer.",
            de: "Das Herz des Clusters. Effizient, leise und immer an. Übernimmt Orchestrierung und leichte Services.",
            fr: "Le cœur du cluster. Efficace, silencieux et toujours actif. Gère l’orchestration et les services légers."
        },
        "project.homelab.nodes.primary.tag.master": {
            en: "[MASTER]",
            pt: "[MASTER]",
            lu: "[MASTER]",
            de: "[MASTER]",
            fr: "[MASTER]"
        },
        "project.homelab.nodes.primary.tag.arm64": {
            en: "[ARM64]",
            pt: "[ARM64]",
            lu: "[ARM64]",
            de: "[ARM64]",
            fr: "[ARM64]"
        },
        "project.homelab.nodes.primary.tag.lowpower": {
            en: "[LOW-POWER]",
            pt: "[BAIXO CONSUMO]",
            lu: "[NIDDER STRoum]",
            de: "[NIEDRIGER VERBRAUCH]",
            fr: "[BASSE CONSOMMATION]"
        },
        "project.homelab.nodes.worker.title": {
            en: "Worker Node",
            pt: "Nó Worker",
            lu: "Worker Node",
            de: "Worker-Knoten",
            fr: "Nœud worker"
        },
        "project.homelab.nodes.worker.spec": {
            en: "amd64 / ryzen-5-5600u",
            pt: "amd64 / ryzen-5-5600u",
            lu: "amd64 / ryzen-5-5600u",
            de: "amd64 / ryzen-5-5600u",
            fr: "amd64 / ryzen-5-5600u"
        },
        "project.homelab.nodes.worker.cores": {
            en: "6 cores",
            pt: "6 núcleos",
            lu: "6 Kären",
            de: "6 Kerne",
            fr: "6 cœurs"
        },
        "project.homelab.nodes.worker.ram": {
            en: "16GB RAM",
            pt: "16GB RAM",
            lu: "16GB RAM",
            de: "16GB RAM",
            fr: "16GB RAM"
        },
        "project.homelab.nodes.worker.body": {
            en: "The heavy lifter. Repurposed x86 laptop acting as the muscle for demanding containers. Built-in battery serves as a dedicated UPS.",
            pt: "O peso pesado. Portátil x86 reaproveitado como músculo para contentores exigentes. A bateria integrada serve como UPS dedicada.",
            lu: "De Schwéieraarbechter. Ëmgenotzte x86 Laptop als Muskel fir ufuerderend Container. D’Batterie déngt als dedizéierten UPS.",
            de: "Der Lastenträger. Umgenutztes x86-Laptop als Kraft für anspruchsvolle Container. Eingebaute Batterie dient als dedizierte USV.",
            fr: "Le gros bras. Laptop x86 réutilisé pour les conteneurs exigeants. Batterie intégrée servant d’onduleur dédié."
        },
        "project.homelab.nodes.worker.tag.worker": {
            en: "[WORKER]",
            pt: "[WORKER]",
            lu: "[WORKER]",
            de: "[WORKER]",
            fr: "[WORKER]"
        },
        "project.homelab.nodes.worker.tag.x86": {
            en: "[X86_64]",
            pt: "[X86_64]",
            lu: "[X86_64]",
            de: "[X86_64]",
            fr: "[X86_64]"
        },
        "project.homelab.nodes.worker.tag.ups": {
            en: "[BATTERY-UPS]",
            pt: "[BATERIA-UPS]",
            lu: "[BATTERIE-UPS]",
            de: "[BATTERIE-USV]",
            fr: "[BATTERIE-UPS]"
        },
        "project.homelab.nodes.gateway.title": {
            en: "Cloud Gateway",
            pt: "Gateway na Cloud",
            lu: "Cloud Gateway",
            de: "Cloud-Gateway",
            fr: "Passerelle cloud"
        },
        "project.homelab.nodes.gateway.spec": {
            en: "arm64 / oracle-ampere",
            pt: "arm64 / oracle-ampere",
            lu: "arm64 / oracle-ampere",
            de: "arm64 / oracle-ampere",
            fr: "arm64 / oracle-ampere"
        },
        "project.homelab.nodes.gateway.cores": {
            en: "4 cores",
            pt: "4 núcleos",
            lu: "4 Kären",
            de: "4 Kerne",
            fr: "4 cœurs"
        },
        "project.homelab.nodes.gateway.ram": {
            en: "24GB RAM",
            pt: "24GB RAM",
            lu: "24GB RAM",
            de: "24GB RAM",
            fr: "24GB RAM"
        },
        "project.homelab.nodes.gateway.badge": {
            en: "FREE TIER",
            pt: "NÍVEL GRATUITO",
            lu: "GRATIS TIER",
            de: "KOSTENLOS",
            fr: "OFFRE GRATUITE"
        },
        "project.homelab.nodes.gateway.body": {
            en: "The public face. Handles ingress, reverse proxy, and secure tunneling. Connects the home cluster to the world.",
            pt: "A face pública. Trata ingressos, reverse proxy e túnel seguro. Liga o cluster doméstico ao mundo.",
            lu: "Déi ëffentlech Säit. Këmmert sech ëm Ingress, Reverse Proxy, a séchert Tunneling. Verbannt den Heem-Cluster mat der Welt.",
            de: "Die öffentliche Schnittstelle. Übernimmt Ingress, Reverse Proxy und sicheres Tunneling. Verbindet den Heim-Cluster mit der Welt.",
            fr: "La face publique. Gère l’ingress, le reverse proxy et le tunneling sécurisé. Relie le cluster maison au monde."
        },
        "project.homelab.nodes.gateway.tag.gateway": {
            en: "[GATEWAY]",
            pt: "[GATEWAY]",
            lu: "[GATEWAY]",
            de: "[GATEWAY]",
            fr: "[GATEWAY]"
        },
        "project.homelab.nodes.gateway.tag.caddy": {
            en: "[CADDY]",
            pt: "[CADDY]",
            lu: "[CADDY]",
            de: "[CADDY]",
            fr: "[CADDY]"
        },
        "project.homelab.nodes.gateway.tag.wireguard": {
            en: "[WIREGUARD]",
            pt: "[WIREGUARD]",
            lu: "[WIREGUARD]",
            de: "[WIREGUARD]",
            fr: "[WIREGUARD]"
        },
        "project.homelab.section.why.title": {
            en: "Why I Built It",
            pt: "Porque o construí",
            lu: "Firwat ech et gebaut hunn",
            de: "Warum ich es gebaut habe",
            fr: "Pourquoi je l’ai construit"
        },
        "project.homelab.section.why.body1": {
            en: "I needed a sandbox to break things safely. This was my first real personal project that pushed me beyond tutorials and into actual problem-solving. What started with Jellyfin for media streaming grew into a full platform after I built a custom secure tunnel to replace third-party services.",
            pt: "Precisava de um sandbox para partir coisas em segurança. Este foi o meu primeiro projeto pessoal real que me levou para lá dos tutoriais e para a resolução prática de problemas. O que começou com Jellyfin para streaming evoluiu para uma plataforma completa depois de criar um túnel seguro personalizado para substituir serviços de terceiros.",
            lu: "Ech brauchten e Sandbox fir sécher Saachen ze briechen. Dat war mäin éischte richtege perséinleche Projet dee mech iwwer Tutorials eraus gedréckt huet. Wat mat Jellyfin ugefaangen huet, ass zu enger kompletter Plattform gewuess nodeems ech en eegene sécheren Tunnel gebaut hunn.",
            de: "Ich brauchte eine Sandbox, um Dinge sicher kaputtzumachen. Das war mein erstes richtiges persönliches Projekt, das mich über Tutorials hinaus zu echter Problemlösung gebracht hat. Was mit Jellyfin als Streaming begann, wurde zur Plattform, nachdem ich einen eigenen sicheren Tunnel gebaut habe.",
            fr: "J’avais besoin d’un bac à sable pour casser les choses en sécurité. C’était mon premier vrai projet personnel, qui m’a poussé au-delà des tutos vers la résolution concrète de problèmes. Parti de Jellyfin pour le streaming, c’est devenu une plateforme complète après la création d’un tunnel sécurisé maison."
        },
        "project.homelab.section.why.body2": {
            en: "Beyond learning, I kept running into the same frustration: existing tools were either limited, ad-ridden, or just didn't fit what I needed. The QR generator? Most online versions were locked behind paywalls or covered in ads. The Vault app? Nothing out there matched the workflow I had in mind. So instead of settling, I started building my own — and that grew into a full self-hosted ecosystem of custom applications replacing third-party tools on my own terms.",
            pt: "Para além de aprender, continuava a esbarrar na mesma frustração: as ferramentas existentes eram limitadas, cheias de anúncios ou simplesmente não se adequavam ao que precisava. O gerador de QR? A maioria das versões online estavam atrás de paywalls ou cobertas de anúncios. A app Vault? Nada do que existia correspondia ao workflow que tinha em mente. Então, em vez de me conformar, comecei a construir as minhas próprias — e isso cresceu para um ecossistema self-hosted completo de aplicações personalizadas que substituem ferramentas de terceiros nos meus termos.",
            lu: "Nieft dem Léieren, sinn ech ëmmer erëm op déi selwecht Frustratioun gestouss: existéierend Tools waren entweder limitéiert, voller Reklammen, oder hunn einfach net gepasst. De QR Generator? Déi meescht online Versiounen waren hannert Paywalls oder voller Reklammen. D'Vault App? Näischt do baussen huet mäi Workflow getraff. Also, amplaz mech zefriddenzegin, hunn ech ugefaang meng eegen ze bauen — an dat ass zu engem komplette self-hosted Ökosystem vu personaliséierten Applikatiounen gewuess déi Drëtt-Partei Tools ersetzen.",
            de: "Neben dem Lerneffekt gab es immer wieder denselben Nervfaktor: Viele Tools waren eingeschränkt, voller Werbung oder schlicht nicht das, was ich brauchte. Beim QR-Generator landete man oft hinter Paywalls oder zwischen Bannern. Für die Vault-App fand ich nichts, das zu meinem Workflow passte. Also habe ich aufgehört, Kompromisse zu machen, und angefangen, meine eigenen Lösungen zu bauen. Daraus ist Schritt für Schritt ein komplettes Self-Hosted-Ökosystem entstanden, das Drittanbieter-Tools ersetzt — zu meinen Regeln.",
            fr: "Au-delà de l'apprentissage, je me heurtais toujours à la même frustration : les outils existants étaient soit limités, soit bourrés de pubs, soit inadaptés à mes besoins. Le générateur de QR ? La plupart des versions en ligne étaient derrière des paywalls ou couvertes de pubs. L'app Vault ? Rien ne correspondait au workflow que j'avais en tête. Alors plutôt que de me contenter, j'ai commencé à construire les miens — et ça s'est transformé en un écosystème self-hosted complet d'applications personnalisées remplaçant les outils tiers à ma façon."
        },
        "project.homelab.section.why.body3": {
            en: "Along the way I learned: how Docker containers communicate, how to build and deploy FastAPI backends, how JWT authentication flows work, and how to manage a hybrid architecture spanning ARM and x86 nodes. I built 6+ custom web applications from scratch with a unified SSO system — proving that you don't need enterprise gear to build enterprise-grade solutions.",
            pt: "Pelo caminho aprendi: como os contêineres Docker comunicam, como construir e colocar em produção backends FastAPI, como funcionam os fluxos de autenticação JWT e como gerir uma arquitetura híbrida entre nós ARM e x86. Construí 6+ aplicações web de raiz com um sistema SSO unificado — provando que não é preciso hardware empresarial para construir soluções de nível empresarial.",
            lu: "Ënnerwee hunn ech geléiert: wéi Docker Container kommunizéieren, wéi een FastAPI Backends baut a deployéiert, wéi JWT Authentifikatioun leeft, an wéi een eng Hybrid Architektur mat ARM an x86 Noden verwalt. Ech hunn 6+ personaliséiert Web Applikatiounen vun Null gebaut mat engem eenheetleche SSO System — als Beweis datt een keng Enterprise Hardware brauch fir Enterprise Léisungen ze bauen.",
            de: "Dabei habe ich nicht nur Theorie gesammelt, sondern Praxis: wie Docker-Container miteinander sprechen, wie man FastAPI-Backends baut und sauber ausrollt, wie JWT-Flows in der Realität funktionieren und wie man eine hybride ARM/x86-Architektur stabil betreibt. Am Ende standen 6+ selbst entwickelte Web-Apps mit gemeinsamem SSO. Für mich der Beweis: Für starke, professionelle Lösungen braucht man kein Enterprise-Budget.",
            fr: "En chemin j'ai appris : comment les conteneurs Docker communiquent, comment construire et déployer des backends FastAPI, comment fonctionnent les flux d'authentification JWT, et comment gérer une architecture hybride ARM/x86. J'ai construit 6+ applications web personnalisées de zéro avec un système SSO unifié — prouvant qu'on n'a pas besoin de matériel d'entreprise pour construire des solutions d'entreprise."
        },
        "project.homelab.section.lessons.title": {
            en: "Lessons Learned",
            pt: "Lições aprendidas",
            lu: "Geléiert Léieren",
            de: "Gelerntes",
            fr: "Leçons retenues"
        },
        "project.homelab.section.lessons.arm": {
            en: "ARM has quirks — Not all Docker images support ARM64. Finding compatible alternatives and tweaking configs taught me to read docs carefully.",
            pt: "ARM tem quirks — Nem todas as imagens Docker suportam ARM64. Encontrar alternativas compatíveis e ajustar configs ensinou-me a ler a documentação com atenção.",
            lu: "ARM huet seng Launen — Net all Docker Images ënnerstëtzen ARM64. Kompatibel Alternativen fannen an Configs upassen huet mech geléiert d'Dokumentatioun genee ze liesen.",
            de: "ARM hat Eigenheiten — Nicht alle Docker-Images unterstützen ARM64. Kompatible Alternativen zu finden und Configs anzupassen, hat mich gelehrt, Dokus genau zu lesen.",
            fr: "ARM a ses bizarreries — Toutes les images Docker ne gèrent pas ARM64. Chercher des alternatives compatibles et ajuster les configs m’a appris à lire la doc attentivement."
        },
        "project.homelab.section.lessons.dns": {
            en: "DNS is powerful — Managing records in Cloudflare and understanding how traffic flows made the whole system click.",
            pt: "DNS é poderoso — Gerir registos no Cloudflare e entender o fluxo de tráfego fez o sistema ganhar sentido.",
            lu: "DNS ass staark — DNS Records managen a Verkéiersflëss verstoen huet de System klick maachen gelooss.",
            de: "DNS ist mächtig — DNS-Einträge in Cloudflare zu managen und den Traffic-Flow zu verstehen, ließ alles zusammenpassen.",
            fr: "Le DNS est puissant — Gérer les enregistrements dans Cloudflare et comprendre les flux a fait déclic."
        },
        "project.homelab.section.lessons.iterate": {
            en: "Start small, iterate fast — This setup grew organically. Each problem solved unlocked the next improvement.",
            pt: "Começa pequeno, itera rápido — Esta configuração cresceu organicamente. Cada problema resolvido desbloqueou a melhoria seguinte.",
            lu: "Kleng ufänken, séier iteréieren — Dës Opstellung ass organesch gewuess. All geléiste Problem huet déi nächst Verbesserung opgemaach.",
            de: "Klein starten, schnell iterieren — Dieses Setup ist organisch gewachsen. Jedes gelöste Problem öffnete die nächste Verbesserung.",
            fr: "Commencer petit, itérer vite — Cette configuration a grandi organiquement. Chaque problème résolu a débloqué la suite."
        },
        "project.homelab.section.lessons.cost": {
            en: "Cost-conscious infrastructure — Running on low-power devices and free-tier cloud taught me to optimize before scaling.",
            pt: "Infra consciente de custos — Correr em dispositivos de baixo consumo e cloud gratuita ensinou-me a optimizar antes de escalar.",
            lu: "Käschtebewosst Infra — Op niddereg-Stroum Geräter a Free-Tier Cloud lafen huet mech geléiert ze optimiséieren éier ech skalaéieren.",
            de: "Kostenbewusste Infrastruktur — Auf stromsparenden Geräten und Free-Tier-Cloud zu laufen, lehrte mich zu optimieren, bevor ich skaliere.",
            fr: "Infra soucieuse des coûts — Tourner sur du matériel basse conso et du cloud gratuit m’a appris à optimiser avant de scaler."
        },
        "project.homelab.section.lessons.security": {
            en: "Security is a journey — Implementing SSO, token blacklisting, and audit logging taught me that authentication is more than just passwords.",
            pt: "Segurança é uma jornada — Implementar SSO, blacklist de tokens e auditoria mostrou-me que autenticação é mais do que senhas.",
            lu: "Sécherheet ass eng Rees — SSO, Token Blacklisting an Audit Logging ëmsetzen huet gewisen datt Authentifikatioun méi wéi Passwierder ass.",
            de: "Sicherheit ist eine Reise — SSO, Token-Blacklisting und Audit-Logs zu bauen zeigte mir, dass Auth mehr ist als Passwörter.",
            fr: "La sécurité est un parcours — Mettre en place SSO, blacklist de tokens et journaux d’audit m’a montré que l’authentification, ce n’est pas que des mots de passe."
        },
        "project.homelab.section.lessons.hybrid": {
            en: "Hybrid architecture complexity — Coordinating Docker Compose and K3s on the same node, plus a remote VPS gateway, required careful port planning and network design.",
            pt: "Complexidade da arquitetura híbrida — Coordenar Docker Compose e K3s no mesmo nó, mais um gateway VPS remoto, exigiu planeamento cuidadoso de portas e desenho de rede.",
            lu: "Komplexitéit vun der Hybrid Architektur — Docker Compose a K3s um selwechte Node koordinéieren, plus e VPS Gateway, huet genee Port a Netzwierk Planung verlaangt.",
            de: "Komplexität der Hybrid-Architektur — Docker Compose und K3s auf demselben Node plus ein Remote-VPS-Gateway erforderten sorgfältige Port- und Netzplanung.",
            fr: "Complexité de l'architecture hybride — Coordonner Docker Compose et K3s sur le même nœud, plus une passerelle VPS distante, a demandé un vrai travail sur les ports et le réseau."
        },
        "project.homelab.section.lessons.environment.title": {
            en: "Environment matters",
            pt: "O ambiente importa",
            lu: "D'Ëmfeld zielt",
            de: "Die Umgebung zählt",
            fr: "L'environnement compte"
        },
        "project.homelab.section.lessons.environment.body": {
            en: "With only one LAN outlet in the home, the cluster had to live in the living room. This constraint forced smart hardware choices: silent components, low-power ARM processors, and efficient cooling. Adapting to real-world limitations made me a better engineer.",
            pt: "Com apenas uma tomada LAN em casa, o cluster teve de ficar na sala. Esta limitação obrigou-me a fazer escolhas inteligentes de hardware: componentes silenciosos, processadores ARM de baixo consumo e refrigeração eficiente. Adaptar-me às limitações do mundo real tornou-me um melhor engenheiro.",
            lu: "Mat nëmmen enger LAN Outlet doheem, huet de Cluster am Wunnzëmmer missen sinn. Dës Aschränkung huet intelligent Hardware Choixen forcéiert: roueg Komponenten, niddreg-Verbrauch ARM Prozessoren, an effizient Killung. Sech un real-Welt Limitatiounen unzepassen huet mech zu engem besseren Ingenieur gemaach.",
            de: "Mit nur einer LAN-Buchse im Haus musste der Cluster im Wohnzimmer stehen. Diese Einschränkung erzwang kluge Hardware-Entscheidungen: leise Komponenten, stromsparende ARM-Prozessoren und effiziente Kühlung. Die Anpassung an reale Einschränkungen machte mich zu einem besseren Ingenieur.",
            fr: "Avec une seule prise LAN à la maison, le cluster devait vivre dans le salon. Cette contrainte a forcé des choix matériels intelligents : composants silencieux, processeurs ARM basse consommation et refroidissement efficace. S'adapter aux limitations du monde réel a fait de moi un meilleur ingénieur."
        },
        "project.homelab.section.next.title": {
            en: "What's Next",
            pt: "O que vem a seguir",
            lu: "Wat kënnt als nächst",
            de: "Wie geht es weiter",
            fr: "Et après"
        },
        "project.homelab.section.next.body": {
            en: "The platform continues to evolve with planned improvements to the application suite, expanded automation workflows, and additional self-hosted tools. The modular architecture makes it easy to add new services as needs arise.",
            pt: "A plataforma continua a evoluir com melhorias planeadas no conjunto de aplicações, workflows de automação alargados e mais ferramentas self-hosted. A arquitetura modular facilita adicionar novos serviços conforme necessário.",
            lu: "D'Plattform entwéckelt sech weider mat geplangte Verbesserungen un den Apps, méi Automatiséierungs-Workflows an zousätzlech self-hosted Tools. D'modular Architektur mécht et einfach nei Servicer derbäizefügen.",
            de: "Die Plattform entwickelt sich weiter: geplante Verbesserungen an der App-Suite, mehr Automatisierungs-Workflows und zusätzliche Self-Hosted-Tools. Die modulare Architektur erleichtert das Hinzufügen neuer Services.",
            fr: "La plateforme continue d'évoluer : améliorations prévues de la suite d'apps, workflows d'automatisation étendus et nouveaux outils self-hosted. L'architecture modulaire facilite l'ajout de services."
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
        "project.homelab.sidebar.tech.vps": {
            en: "Oracle Cloud (ARM64)",
            pt: "Oracle Cloud (ARM64)",
            lu: "Oracle Cloud (ARM64)",
            de: "Oracle Cloud (ARM64)",
            fr: "Oracle Cloud (ARM64)"
        },
        "project.homelab.sidebar.tech.wireguard": {
            en: "WireGuard VPN",
            pt: "WireGuard VPN",
            lu: "WireGuard VPN",
            de: "WireGuard VPN",
            fr: "WireGuard VPN"
        },
        "project.homelab.sidebar.tech.caddy": {
            en: "Caddy Reverse Proxy",
            pt: "Caddy Reverse Proxy",
            lu: "Caddy Reverse Proxy",
            de: "Caddy Reverse Proxy",
            fr: "Caddy Reverse Proxy"
        },
        "project.homelab.sidebar.tech.cloudflare": {
            en: "Cloudflare DNS",
            pt: "Cloudflare DNS",
            lu: "Cloudflare DNS",
            de: "Cloudflare DNS",
            fr: "Cloudflare DNS"
        },
        "project.homelab.sidebar.tech.fastapi": {
            en: "FastAPI (Python)",
            pt: "FastAPI (Python)",
            lu: "FastAPI (Python)",
            de: "FastAPI (Python)",
            fr: "FastAPI (Python)"
        },
        "project.homelab.sidebar.tech.sqlite": {
            en: "SQLite + Alembic",
            pt: "SQLite + Alembic",
            lu: "SQLite + Alembic",
            de: "SQLite + Alembic",
            fr: "SQLite + Alembic"
        },
        "project.homelab.sidebar.tech.sveltekit": {
            en: "SvelteKit 2 (Svelte 4/5)",
            pt: "SvelteKit 2 (Svelte 4/5)",
            lu: "SvelteKit 2 (Svelte 4/5)",
            de: "SvelteKit 2 (Svelte 4/5)",
            fr: "SvelteKit 2 (Svelte 4/5)"
        },
        "project.homelab.sidebar.tech.react": {
            en: "React 18",
            pt: "React 18",
            lu: "React 18",
            de: "React 18",
            fr: "React 18"
        },
        "project.homelab.sidebar.tech.jwt": {
            en: "JWT Authentication",
            pt: "Autenticação JWT",
            lu: "JWT Authentifizéierung",
            de: "JWT-Authentifizierung",
            fr: "Authentification JWT"
        },
        "project.homelab.sidebar.tech.bcrypt": {
            en: "bcrypt (Passlib)",
            pt: "bcrypt (Passlib)",
            lu: "bcrypt (Passlib)",
            de: "bcrypt (Passlib)",
            fr: "bcrypt (Passlib)"
        },
        "project.homelab.sidebar.tech.traefik": {
            en: "Traefik Ingress",
            pt: "Traefik Ingress",
            lu: "Traefik Ingress",
            de: "Traefik Ingress",
            fr: "Traefik Ingress"
        },
        "project.homelab.sidebar.tech.portainer": {
            en: "Portainer",
            pt: "Portainer",
            lu: "Portainer",
            de: "Portainer",
            fr: "Portainer"
        },
        "project.homelab.sidebar.tech.crowdsec": {
            en: "CrowdSec",
            pt: "CrowdSec",
            lu: "CrowdSec",
            de: "CrowdSec",
            fr: "CrowdSec"
        },
        "project.homelab.sidebar.tech.tailscale": {
            en: "Tailscale Mesh VPN",
            pt: "Tailscale Mesh VPN",
            lu: "Tailscale Mesh VPN",
            de: "Tailscale Mesh VPN",
            fr: "Tailscale Mesh VPN"
        },
        "project.homelab.sidebar.tech.registry": {
            en: "Docker Registry",
            pt: "Docker Registry",
            lu: "Docker Registry",
            de: "Docker Registry",
            fr: "Docker Registry"
        },
        "project.homelab.sidebar.tech.playwright": {
            en: "Playwright",
            pt: "Playwright",
            lu: "Playwright",
            de: "Playwright",
            fr: "Playwright"
        },
        "project.homelab.sidebar.tech.mistral": {
            en: "Mistral AI",
            pt: "Mistral AI",
            lu: "Mistral AI",
            de: "Mistral AI",
            fr: "Mistral AI"
        },
        "project.homelab.sidebar.tech.sharp": {
            en: "Sharp (libvips)",
            pt: "Sharp (libvips)",
            lu: "Sharp (libvips)",
            de: "Sharp (libvips)",
            fr: "Sharp (libvips)"
        },
        "project.homelab.sidebar.tech.jellyfin": {
            en: "Jellyfin",
            pt: "Jellyfin",
            lu: "Jellyfin",
            de: "Jellyfin",
            fr: "Jellyfin"
        },
        "project.homelab.sidebar.tech.arr": {
            en: "*arr Stack (Radarr/Sonarr/Bazarr)",
            pt: "*arr Stack (Radarr/Sonarr/Bazarr)",
            lu: "*arr Stack (Radarr/Sonarr/Bazarr)",
            de: "*arr Stack (Radarr/Sonarr/Bazarr)",
            fr: "*arr Stack (Radarr/Sonarr/Bazarr)"
        },
        "project.homelab.sidebar.tech.clamav": {
            en: "ClamAV",
            pt: "ClamAV",
            lu: "ClamAV",
            de: "ClamAV",
            fr: "ClamAV"
        },
        "project.homelab.sidebar.features.custom": {
            en: "6+ Custom Web Apps (Self-Built)",
            pt: "6+ Aplicações Web Personalizadas (Desenvolvidas por mim)",
            lu: "6+ Personaliséiert Web Apps (Selwer gebaut)",
            de: "6+ Eigene Web-Apps (selbst entwickelt)",
            fr: "6+ Applications web personnalisées (Auto-construites)"
        },
        "project.homelab.sidebar.features.sso": {
            en: "Unified SSO System",
            pt: "Sistema SSO Unificado",
            lu: "Eenheetlech SSO System",
            de: "Einheitliches SSO-System",
            fr: "Système SSO unifié"
        },
        "project.homelab.sidebar.features.hybrid": {
            en: "Hybrid ARM/x86 Architecture",
            pt: "Arquitetura Híbrida ARM/x86",
            lu: "Hybrid ARM/x86 Architektur",
            de: "Hybride ARM/x86-Architektur",
            fr: "Architecture hybride ARM/x86"
        },
        "project.homelab.sidebar.features.silent": {
            en: "Silent Living Room Operation",
            pt: "Funcionamento Silencioso na Sala",
            lu: "Roueg Wunnzëmmer Operatioun",
            de: "Leiser Wohnzimmerbetrieb",
            fr: "Fonctionnement silencieux au salon"
        },
        "project.homelab.sidebar.features.dual": {
            en: "K3s + Docker Compose (~15 services)",
            pt: "K3s + Docker Compose (~15 serviços)",
            lu: "K3s + Docker Compose (~15 Servicer)",
            de: "K3s + Docker Compose (ca. 15 Services)",
            fr: "K3s + Docker Compose (~15 services)"
        },
        "project.homelab.sidebar.features.wireguard": {
            en: "WireGuard Secure Tunnel",
            pt: "Túnel Seguro WireGuard",
            lu: "WireGuard Sécheren Tunnel",
            de: "WireGuard sicherer Tunnel",
            fr: "Tunnel sécurisé WireGuard"
        },
        "project.homelab.sidebar.features.ai": {
            en: "AI-Powered Content Processing",
            pt: "Processamento de Conteúdo com IA",
            lu: "AI-gestäerzte Inhaltsveraarbechtung",
            de: "KI-gestützte Inhaltsverarbeitung",
            fr: "Traitement de contenu par IA"
        },
        "project.homelab.sidebar.features.media": {
            en: "Full Media Automation",
            pt: "Automação Multimédia Completa",
            lu: "Komplett Medien Automatiséierung",
            de: "Vollständige Medienautomatisierung",
            fr: "Automatisation multimédia complète"
        },
        "project.homelab.sidebar.features.offload": {
            en: "Worker Offload Architecture",
            pt: "Arquitetura de Offload de Workers",
            lu: "Worker Offload Architektur",
            de: "Worker-Offload-Architektur",
            fr: "Architecture d'offload workers"
        },
        "project.homelab.sidebar.features.crowdsec": {
            en: "CrowdSec Threat Detection",
            pt: "Deteção de Ameaças CrowdSec",
            lu: "CrowdSec Bedrohungserkennung",
            de: "CrowdSec-Bedrohungserkennung",
            fr: "Détection de menaces CrowdSec"
        },
        "project.homelab.sidebar.features.lowpower": {
            en: "Low-Power ARM Design",
            pt: "Design ARM de Baixo Consumo",
            lu: "Niddreg-Verbrauch ARM Design",
            de: "Stromsparendes ARM-Design",
            fr: "Conception ARM basse consommation"
        },
        "project.homelab.name": {
            en: "Home Lab Personal Cloud",
            pt: "Home Lab Cloud Pessoal",
            lu: "Home Lab Personal Cloud",
            de: "Home Lab Personal Cloud",
            fr: "Home Lab Cloud Personnel"
        }
    };
    Object.assign(translations, extra);
})();
