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
            en: "From Tiny Cluster to Full Rack",
            pt: "De pequeno cluster a rack completo",
            lu: "Vum klengen Cluster zum komplette Rack",
            de: "Vom kleinen Cluster zum kompletten Rack",
            fr: "Du petit cluster au rack complet"
        },
        "project.homelab.section.setup.body": {
            en: "What started as a quiet Raspberry Pi cluster in my living room has grown into a four-node self-hosted platform: an ARM edge gateway in the cloud, an ARM home server, an x86_64 laptop for compute offload and local AI, and a dedicated ZFS NAS for storage. The on-site gear now lives in an enclosed 10U cabinet with monitored power and fan control driven by drive temperatures, while public traffic still reaches the platform only through a self-operated WireGuard tunnel.",
            pt: "O que começou como um cluster silencioso com Raspberry Pi na minha sala cresceu para uma plataforma self-hosted de quatro nós: um gateway ARM na cloud, um home server ARM, um portátil x86_64 para offload computacional e IA local, e uma NAS ZFS dedicada ao armazenamento. O equipamento local vive agora num armário fechado de 10U com energia monitorizada e ventilação controlada pela temperatura dos discos, enquanto o tráfego público continua a chegar à plataforma apenas através de um túnel WireGuard operado por mim.",
            lu: "Wat als rouege Raspberry Pi Cluster a mengem Wunnzëmmer ugefaangen huet, ass zu enger self-hosted Plattform mat véier Noden gewuess: en ARM Edge Gateway an der Cloud, en ARM Home Server, en x86_64 Laptop fir Compute-Offload a lokal KI, an eng dedizéiert ZFS NAS fir Storage. D'Hardware um Site lieft elo an engem zouene 10U Schaf mat iwwerwaachtem Stroum an enger Ventilatioun, déi sech no der Temperatur vun de Placken riicht, an den ëffentleche Verkéier kënnt nach ëmmer nëmmen iwwer e selwer bedriwwene WireGuard Tunnel eran.",
            de: "Was als leiser Raspberry-Pi-Cluster im Wohnzimmer begann, ist heute eine selbst gehostete Plattform mit vier Knoten: ein ARM-Edge-Gateway in der Cloud, ein ARM-Homeserver, ein x86_64-Laptop für Compute-Offload und lokale KI sowie ein dedizierter ZFS-NAS für Speicher. Die Hardware vor Ort steckt jetzt in einem geschlossenen 10U-Schrank mit überwachtem Strom und einer Lüftersteuerung nach Festplattentemperatur, und öffentlicher Verkehr erreicht die Plattform weiterhin nur über einen selbst betriebenen WireGuard-Tunnel.",
            fr: "Ce qui a commencé comme un cluster Raspberry Pi silencieux dans mon salon est devenu une plateforme auto-hébergée à quatre nœuds : une passerelle ARM dans le cloud, un serveur ARM à la maison, un portable x86_64 pour le calcul déporté et l'IA locale, et un NAS ZFS dédié au stockage. Le matériel sur place vit maintenant dans une armoire fermée de 10U avec une consommation surveillée et des ventilateurs pilotés par la température des disques, et le trafic public n'atteint toujours la plateforme que par un tunnel WireGuard que j'opère moi-même."
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
            en: "The platform is now split across four complementary layers: the home-server control plane, an agent and worker layer, a dedicated storage/media plane, and a hardened edge gateway.",
            pt: "A plataforma está agora dividida em quatro camadas complementares: o plano de controlo no home server, uma camada de agentes e workers, um plano dedicado de armazenamento/média e um gateway de edge reforçado.",
            lu: "D'Plattform ass elo a véier ergänzend Schichten opgedeelt: de Control Plane um Home Server, eng Agenten- a Worker-Schicht, en dedizéierte Storage/Media Plane, an en ofgehäert Edge Gateway.",
            de: "Die Plattform ist jetzt in vier sich ergänzende Ebenen aufgeteilt: die Control-Plane auf dem Home-Server, eine Agenten- und Worker-Schicht, eine dedizierte Storage/Media-Ebene und ein gehärtetes Edge-Gateway.",
            fr: "La plateforme est maintenant répartie sur quatre couches complémentaires : le plan de contrôle du serveur maison, une couche d'agents et de workers, un plan dédié au stockage/média et une passerelle edge durcie."
        },
        "project.homelab.section.what.k3s.title": {
            en: "K3s Cluster",
            pt: "Cluster K3s",
            lu: "K3s Cluster",
            de: "K3s-Cluster",
            fr: "Cluster K3s"
        },
        "project.homelab.section.what.gateway.title": {
            en: "Cloud Gateway (Oracle VPS)",
            pt: "Gateway na cloud (Oracle VPS)",
            lu: "Cloud-Gateway (Oracle VPS)",
            de: "Cloud-Gateway (Oracle VPS)",
            fr: "Passerelle cloud (Oracle VPS)"
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
        "project.homelab.nodes.gateway.title": {
            en: "Cloud Gateway",
            pt: "Gateway na Cloud",
            lu: "Cloud-Gateway",
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
        "project.homelab.nodes.storage.title": {
            en: "Storage Node",
            pt: "Nó de Armazenamento",
            lu: "Späicher-Node",
            de: "Storage-Knoten",
            fr: "Nœud de stockage"
        },
        "project.homelab.nodes.storage.spec": {
            en: "x86_64 / truenas-scale",
            pt: "x86_64 / truenas-scale",
            lu: "x86_64 / truenas-scale",
            de: "x86_64 / truenas-scale",
            fr: "x86_64 / truenas-scale"
        },
        "project.homelab.nodes.storage.cores": {
            en: "2 x 16TB mirror",
            pt: "2 x 16TB em espelho",
            lu: "2 x 16TB Spigel",
            de: "2 x 16TB Spiegel",
            fr: "2 x 16To en miroir"
        },
        "project.homelab.nodes.storage.ram": {
            en: "32GB RAM",
            pt: "32GB RAM",
            lu: "32GB RAM",
            de: "32GB RAM",
            fr: "32GB RAM"
        },
        "project.homelab.nodes.switch.title": {
            en: "Network Switch",
            pt: "Switch de Rede",
            lu: "Netzwierk-Switch",
            de: "Netzwerk-Switch",
            fr: "Switch Réseau"
        },
        "project.homelab.nodes.switch.spec": {
            en: "TP-Link TL-SG608E / 8-Port Gigabit",
            pt: "TP-Link TL-SG608E / 8 portas Gigabit",
            lu: "TP-Link TL-SG608E / 8-Port Gigabit",
            de: "TP-Link TL-SG608E / 8-Port-Gigabit",
            fr: "TP-Link TL-SG608E / 8 ports Gigabit"
        },
        "project.homelab.nodes.switch.ports": {
            en: "8 ports / 1 Gbps",
            pt: "8 portas / 1 Gbps",
            lu: "8 Ports / 1 Gbps",
            de: "8 Ports / 1 Gbps",
            fr: "8 ports / 1 Gbps"
        },
        "project.homelab.section.why.title": {
            en: "Why I Built It",
            pt: "Porque o construí",
            lu: "Firwat ech et gebaut hunn",
            de: "Warum ich es gebaut habe",
            fr: "Pourquoi je l’ai construit"
        },
        "project.homelab.section.why.body1": {
            en: "I needed a sandbox to break things safely. This was my <strong>first real personal project</strong> that pushed me beyond tutorials and into actual problem-solving. What started with Jellyfin for media streaming grew into a full platform after I built a custom secure tunnel to replace third-party services.",
            pt: "Precisava de um sandbox para partir coisas em segurança. Este foi o meu <strong>primeiro projeto pessoal a sério</strong>, que me levou para lá dos tutoriais e para a resolução prática de problemas. O que começou com Jellyfin para streaming evoluiu para uma plataforma completa depois de criar um túnel seguro personalizado para substituir serviços de terceiros.",
            lu: "Ech hu eng Sandbox gebraucht fir Saache sécher futti ze maachen. Dat war mäin <strong>éischt richtegt perséinlecht Projet</strong>, dat mech iwwer Tutorials eraus an an déi richteg Problemléisung gedréckt huet. Wat mat Jellyfin fir Media-Streaming ugefaangen huet, ass zu enger kompletter Plattform gewuess nodeems ech en eegene sécheren Tunnel gebaut hunn fir Drëtt-Partei-Servicer ze ersetzen.",
            de: "Ich brauchte eine Sandbox, um Dinge sicher kaputtzumachen. Das war mein <strong>erstes richtiges persönliches Projekt</strong>, das mich über Tutorials hinaus zu echter Problemlösung gebracht hat. Was mit Jellyfin als Streaming begann, wurde zur vollständigen Plattform, nachdem ich einen eigenen sicheren Tunnel gebaut hatte, um Drittanbieter-Dienste zu ersetzen.",
            fr: "J’avais besoin d’un bac à sable pour casser les choses en sécurité. C’était mon <strong>premier vrai projet personnel</strong>, celui qui m’a poussé au-delà des tutos vers la résolution concrète de problèmes. Parti de Jellyfin pour le streaming, c’est devenu une plateforme complète après la création d’un tunnel sécurisé maison pour remplacer les services tiers."
        },
        "project.homelab.section.why.body2": {
            en: "Beyond learning, I kept running into the same frustration: existing tools were either limited, ad-ridden, or just didn't fit what I needed. The QR generator? Most online versions were locked behind paywalls or covered in ads. The Vault app? Nothing out there matched the workflow I had in mind. So instead of settling, <strong>I started building my own</strong> - and that grew into a full self-hosted ecosystem of custom applications replacing third-party tools on my own terms.",
            pt: "Para além de aprender, continuava a esbarrar na mesma frustração: as ferramentas existentes eram limitadas, cheias de anúncios ou simplesmente não se adequavam ao que precisava. O gerador de QR? A maioria das versões online estava atrás de paywalls ou coberta de anúncios. A app Vault? Nada do que existia correspondia ao workflow que tinha em mente. Então, em vez de me conformar, <strong>comecei a construir as minhas próprias ferramentas</strong> - e isso cresceu para um ecossistema self-hosted completo de aplicações personalizadas que substituem ferramentas de terceiros nos meus termos.",
            lu: "Nieft dem Léieren, sinn ech ëmmer erëm op déi selwecht Frustratioun gestouss: déi existéierend Tools waren entweder limitéiert, voller Reklammen oder hu guer net zu menge Besoine gepasst. De QR-Generator? Déi meescht Online-Versioune waren hannert Paywalls oder voller Annoncen. D'Vault-App? Näischt dobaussen huet dem Workflow entspriecht, deen ech am Kapp hat. Also, amplaz mech domat zefridden ze ginn, <strong>hunn ech ugefaang meng eegen Tools ze bauen</strong> - an dat ass zu engem komplette self-hosted Ecosystem vu personaliséierten Applikatiounen gewuess, dat Drëtt-Partei-Tools op meng Aart ersetzt.",
            de: "Neben dem Lerneffekt gab es immer wieder denselben Frust: Viele Tools waren eingeschränkt, voller Werbung oder schlicht nicht das, was ich brauchte. Beim QR-Generator landete man oft hinter Paywalls oder zwischen Bannern. Für die Vault-App fand ich nichts, das zu meinem Workflow passte. Also habe ich aufgehört, Kompromisse zu machen, und <strong>angefangen, meine eigenen Lösungen zu bauen</strong> - daraus ist Schritt für Schritt ein komplettes Self-Hosted-Ökosystem entstanden, das Drittanbieter-Tools zu meinen Bedingungen ersetzt.",
            fr: "Au-delà de l'apprentissage, je me heurtais toujours à la même frustration : les outils existants étaient soit limités, soit bourrés de pubs, soit inadaptés à mes besoins. Le générateur de QR ? La plupart des versions en ligne étaient derrière des paywalls ou couvertes de pubs. L'app Vault ? Rien ne correspondait au workflow que j'avais en tête. Alors plutôt que de me contenter, <strong>j'ai commencé à construire les miens</strong> - et ça s'est transformé en un écosystème self-hosted complet d'applications personnalisées remplaçant les outils tiers à ma façon."
        },
        "project.homelab.section.why.body3": {
            en: "Along the way I learned how to design around real constraints: mixed architectures, separate storage and compute planes, zero-trust ingress, and applications that share auth without sharing security shortcuts. <strong>I built 15+ custom apps and an agent framework from scratch</strong>, which proved to me that serious systems design is possible long before you have enterprise hardware.",
            pt: "Pelo caminho aprendi a desenhar em torno de limitações reais: arquiteturas mistas, planos separados de storage e compute, ingress zero-trust e aplicações que partilham autenticação sem partilhar atalhos de segurança. <strong>Construí 15+ apps personalizadas e um framework de agentes de raiz</strong>, o que me provou que é possível fazer engenharia séria de sistemas muito antes de ter hardware empresarial.",
            lu: "Ënnerwee hunn ech geléiert ronderëm richteg Aschränkungen ze designen: gemëschten Architekturen, getrennte Storage- a Compute-Ebenen, Zero-Trust-Ingress an Applikatiounen, déi Auth deelen ouni Sécherheets-Ofkierzungen ze iwwerhuelen. <strong>Ech hunn 15+ personaliséiert Apps an en Agent-Framework vun Null op gebaut</strong>, an domat fir mech bewisen, datt eescht Systemdesign scho laang virun Enterprise-Hardware méiglech ass.",
            de: "Dabei habe ich gelernt, um echte Einschränkungen herum zu entwerfen: gemischte Architekturen, getrennte Storage- und Compute-Ebenen, Zero-Trust-Ingress und Anwendungen, die Auth teilen, ohne Sicherheitsabkürzungen zu übernehmen. <strong>Ich habe 15+ eigene Apps und ein Agent-Framework von Grund auf gebaut</strong>, was mir bewiesen hat, dass ernsthaftes Systemdesign lange vor Enterprise-Hardware möglich ist.",
            fr: "En chemin, j'ai appris à concevoir autour de contraintes réelles : architectures mixtes, plans de calcul et de stockage séparés, ingress zero-trust, et applications qui partagent l'auth sans partager de raccourcis de sécurité. <strong>J'ai construit 15+ apps maison et un framework d'agents from scratch</strong>, ce qui m'a prouvé qu'un vrai design de systèmes est possible bien avant d'avoir du matériel d'entreprise."
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
        "project.homelab.section.lessons.iterate.title": {
            en: "Start small, iterate fast",
            pt: "Começa pequeno, itera rápido",
            lu: "Kleng ufänken, séier iteréieren",
            de: "Klein starten, schnell iterieren",
            fr: "Commencer petit, itérer vite"
        },
        "project.homelab.section.lessons.iterate.body": {
            en: "This setup grew organically. Each problem solved unlocked the next improvement.",
            pt: "Esta configuração cresceu organicamente. Cada problema resolvido desbloqueou a melhoria seguinte.",
            lu: "Dës Opstellung ass organesch gewuess. All geléiste Problem huet déi nächst Verbesserung opgemaach.",
            de: "Dieses Setup ist organisch gewachsen. Jedes gelöste Problem öffnete die nächste Verbesserung.",
            fr: "Cette configuration a grandi organiquement. Chaque problème résolu a débloqué la suite."
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
            en: "Coordinating Docker Compose and K3s on the same node, plus a remote VPS gateway, required careful port planning and network design.",
            pt: "Coordenar Docker Compose e K3s no mesmo nó, mais um gateway VPS remoto, exigiu planeamento cuidadoso de portas e desenho de rede.",
            lu: "Docker Compose a K3s um selwechte Node koordinéieren, plus e VPS Gateway, huet genee Port a Netzwierk Planung verlaangt.",
            de: "Docker Compose und K3s auf demselben Node plus ein Remote-VPS-Gateway erforderten sorgfältige Port- und Netzplanung.",
            fr: "Coordonner Docker Compose et K3s sur le même nœud, plus une passerelle VPS distante, a demandé un vrai travail sur les ports et le réseau."
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
            lu: "Mat nëmmen enger eenzeger LAN-Dous doheem huet de Cluster am Wunnzëmmer misse stoen. Dës Aschränkung huet mech zu intelligente Hardware-Decisioune gezwongen: roueg Komponenten, niddreg-verbrauchend ARM-Prozessoren an effizient Killung. D'Upassung un déi richteg Aschränkunge vun der Realitéit huet mech zu engem bessere Ingenieur gemaach.",
            de: "Mit nur einer LAN-Buchse im Haus musste der Cluster im Wohnzimmer stehen. Diese Einschränkung erzwang kluge Hardware-Entscheidungen: leise Komponenten, stromsparende ARM-Prozessoren und effiziente Kühlung. Die Anpassung an reale Einschränkungen machte mich zu einem besseren Ingenieur.",
            fr: "Avec une seule prise LAN à la maison, le cluster devait vivre dans le salon. Cette contrainte a forcé des choix matériels intelligents : composants silencieux, processeurs ARM basse consommation et refroidissement efficace. S'adapter aux limitations du monde réel a fait de moi un meilleur ingénieur."
        },
        "project.homelab.section.lessons.localai.title": {
            en: "Local AI has a hardware ceiling",
            pt: "A IA local tem um limite de hardware",
            lu: "Lokal KI huet eng Hardware-Grenz",
            de: "Lokale KI hat eine Hardware-Grenze",
            fr: "L'IA locale a un plafond matériel"
        },
        "project.homelab.section.lessons.localai.body": {
            en: "I benchmarked local models on the worker laptop with my research agent's real prompt. One run took 4 to 20 minutes against a 10-second target. Memory bandwidth was the limit, not the settings, so local models now handle background work and the agents stay on a hosted API.",
            pt: "Fiz benchmarks de modelos locais no portátil worker com o prompt real do meu agente de pesquisa. Uma execução demorou 4 a 20 minutos, contra um objetivo de 10 segundos. O limite era a largura de banda da memória, não a configuração, por isso os modelos locais tratam agora do trabalho em segundo plano e os agentes continuam numa API alojada.",
            lu: "Ech hu lokal Modeller um Worker-Laptop mam richtege Prompt vu mengem Recherche-Agent getest. Ee Laf huet 4 bis 20 Minutten gedauert, géint en Zil vun 10 Sekonnen. D'Grenz war d'Speicherbandbreet, net d'Astellungen, dofir maachen déi lokal Modeller elo Hannergrondaarbecht an d'Agente bleiwen op enger gehoster API.",
            de: "Ich habe lokale Modelle auf dem Worker-Laptop mit dem echten Prompt meines Recherche-Agenten gemessen. Ein Durchlauf dauerte 4 bis 20 Minuten, bei einem Ziel von 10 Sekunden. Die Grenze war die Speicherbandbreite, nicht die Einstellungen, deshalb übernehmen lokale Modelle jetzt Hintergrundarbeit und die Agenten bleiben auf einer gehosteten API.",
            fr: "J'ai mesuré des modèles locaux sur le portable worker avec le vrai prompt de mon agent de recherche. Une exécution prenait 4 à 20 minutes, pour un objectif de 10 secondes. La limite venait de la bande passante mémoire, pas des réglages, donc les modèles locaux gèrent maintenant les tâches de fond et les agents restent sur une API hébergée."
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
            en: "In the enclosed cabinet the drives averaged 44 to 45 °C. I mapped each fan header, wrote a fan curve that follows the hottest drive, and printed an exhaust shroud. The drives now sit at 40 to 41 °C, quiet enough for a living room.",
            pt: "No armário fechado os discos tinham uma média de 44 a 45 °C. Identifiquei cada conector de ventoinha, escrevi uma curva que segue o disco mais quente e imprimi uma saída de ar. Os discos estão agora a 40 a 41 °C, silenciosos o suficiente para uma sala.",
            lu: "Am zoue Schaf louchen d'Placken am Duerchschnëtt bei 44 bis 45 °C. Ech hunn all Ventilator-Uschloss identifizéiert, eng Kurv geschriwwen, déi der waarmster Plack follegt, an en Auslaass gedréckt. D'Placke sinn elo bei 40 bis 41 °C, roueg genuch fir e Wunnzëmmer.",
            de: "Im geschlossenen Schrank lagen die Platten im Schnitt bei 44 bis 45 °C. Ich habe jeden Lüfteranschluss zugeordnet, eine Kurve geschrieben, die der heißesten Platte folgt, und eine Abluftführung gedruckt. Die Platten liegen jetzt bei 40 bis 41 °C, leise genug fürs Wohnzimmer.",
            fr: "Dans l'armoire fermée, les disques tournaient en moyenne à 44 à 45 °C. J'ai identifié chaque connecteur de ventilateur, écrit une courbe qui suit le disque le plus chaud et imprimé une sortie d'air. Les disques sont maintenant à 40 à 41 °C, assez silencieux pour un salon."
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
            en: "Platform CLI for terminal workflows over VPN",
            pt: "CLI da plataforma para workflows de terminal via VPN",
            lu: "Plattform CLI fir Terminal Workflows iwwer VPN",
            de: "Plattform-CLI für Terminal-Workflows über VPN",
            fr: "CLI de plateforme pour workflows terminal via VPN"
        },
        "project.homelab.sidebar.tech.cli": {
            en: "Typer CLI + Private PyPI",
            pt: "Typer CLI + PyPI Privado",
            lu: "Typer CLI + Privat PyPI",
            de: "Typer-CLI + Private PyPI",
            fr: "Typer CLI + PyPI privé"
        },
        "project.homelab.section.what.compose.cli": {
            en: "<strong>Platform CLI</strong>: A Typer-based Python CLI wraps the backend API for terminal workflows over VPN. Supports auth, task management, security operations, and health checks via Personal Access Tokens. Distributed through a self-hosted private PyPI server.",
            pt: "<strong>CLI da plataforma</strong>: Uma CLI Python baseada em Typer envolve a API backend para workflows de terminal via VPN. Suporta autenticação, gestão de tarefas, operações de segurança e verificações de saúde através de Personal Access Tokens. É distribuída através de um servidor PyPI privado auto-hospedado.",
            lu: "<strong>Plattform-CLI</strong>: Eng Typer-baséiert Python-CLI ëmspannt d'Backend-API fir Terminal-Workflows iwwer VPN. Si ënnerstëtzt Authentifikatioun, Task-Management, Sécherheets-Operatiounen a Health-Checks iwwer Personal Access Tokens. Verdeelt gëtt se iwwer e selwer gehoste private PyPI-Server.",
            de: "<strong>Plattform-CLI</strong>: Eine Typer-basierte Python-CLI kapselt die Backend-API für Terminal-Workflows über VPN. Sie unterstützt Authentifizierung, Task-Management, Sicherheitsoperationen und Health-Checks über Personal Access Tokens. Verteilt wird sie über einen selbst gehosteten privaten PyPI-Server.",
            fr: "<strong>CLI de plateforme</strong> : Une CLI Python basée sur Typer encapsule l'API backend pour les workflows terminal via VPN. Elle prend en charge l'authentification, la gestion des tâches, les opérations de sécurité et les vérifications de santé via des jetons d'accès personnels. Elle est distribuée via un serveur PyPI privé auto-hébergé."
        },
        "project.homelab.image.caption": {
            en: "Current physical layout: a compact 10U rack",
            pt: "Layout físico atual: um rack compacto de 10U",
            lu: "Aktuellen physesche Layout: e kompakte 10U-Rack",
            de: "Aktuelles physisches Layout: ein kompaktes 10U-Rack",
            fr: "Disposition physique actuelle : un rack compact 10U"
        },
        "project.homelab.section.what.core.title": {
            en: "Core Platform (Home Server)",
            pt: "Plataforma central (home server)",
            lu: "Kär-Plattform (Home Server)",
            de: "Kernplattform (Home-Server)",
            fr: "Plateforme centrale (serveur maison)"
        },
        "project.homelab.section.what.core.list": {
            en: "<strong>Unified backend control plane</strong>: FastAPI + SQLAlchemy + Alembic + SQLite drive authentication, permissions, app registration, audit logs, AI orchestration, and cross-app state.",
            pt: "<strong>Plano de controlo backend unificado</strong>: FastAPI + SQLAlchemy + Alembic + SQLite suportam autenticação, permissões, registo de apps, logs de auditoria, orquestração de IA e estado partilhado entre aplicações.",
            lu: "<strong>Eenheetleche Backend-Control-Plane</strong>: FastAPI + SQLAlchemy + Alembic + SQLite bedreiwen Authentifikatioun, Rechter, App-Registréierung, Audit-Logs, AI-Orchestratioun an e gemeinsame Status tëscht den Apps.",
            de: "<strong>Einheitliche Backend-Control-Plane</strong>: FastAPI + SQLAlchemy + Alembic + SQLite steuern Authentifizierung, Berechtigungen, App-Registrierung, Audit-Logs, KI-Orchestrierung und gemeinsamen Status über mehrere Apps hinweg.",
            fr: "<strong>Plan de contrôle backend unifié</strong> : FastAPI + SQLAlchemy + Alembic + SQLite gèrent l'authentification, les permissions, l'enregistrement des apps, les journaux d'audit, l'orchestration IA et l'état partagé entre applications."
        },
        "project.homelab.section.what.core.auth": {
            en: "<strong>Passwordless, federated login</strong>: passkeys (WebAuthn/FIDO2) are the primary sign-in, on top of a from-scratch OIDC provider and an OAuth 2.0 consent flow, so other apps and AI assistants can log in with the platform. Access tokens are scoped per app and checked on every API call.",
            pt: "<strong>Login federado e sem password</strong>: passkeys (WebAuthn/FIDO2) são o método principal, sobre um fornecedor OIDC feito de raiz e um fluxo de consentimento OAuth 2.0, para que outras apps e assistentes de IA possam entrar com a plataforma. Os tokens de acesso têm âmbito por app e são verificados em cada chamada à API.",
            lu: "<strong>Federéierte Login ouni Passwuert</strong>: Passkeys (WebAuthn/FIDO2) sinn den Haaptlogin, op engem selwer gebauten OIDC Provider an engem OAuth 2.0 Consent Flow, sou datt aner Apps an KI-Assistenten sech mat der Plattform umelle kënnen. Access Tokens si pro App begrenzt a ginn bei all API-Opruff gepréift.",
            de: "<strong>Passwortloser, föderierter Login</strong>: Passkeys (WebAuthn/FIDO2) sind die primäre Anmeldung, auf einem selbst gebauten OIDC-Provider und einem OAuth-2.0-Consent-Flow, damit sich andere Apps und KI-Assistenten über die Plattform anmelden können. Zugriffstokens sind pro App begrenzt und werden bei jedem API-Aufruf geprüft.",
            fr: "<strong>Connexion fédérée sans mot de passe</strong> : les passkeys (WebAuthn/FIDO2) sont la connexion principale, sur un fournisseur OIDC fait maison et un flux de consentement OAuth 2.0, pour que d'autres applis et assistants IA puissent se connecter via la plateforme. Les jetons d'accès sont limités par appli et vérifiés à chaque appel d'API."
        },
        "project.homelab.section.what.core.surfaces": {
            en: "<strong>Real-time and generative surfaces</strong>: self-hosted voice/video rooms (LiveKit/WebRTC) and an AI keyframe video generator that turns a start and end frame into a short clip - both behind the same SSO and edge security.",
            pt: "<strong>Superfícies em tempo real e generativas</strong>: salas de voz/vídeo self-hosted (LiveKit/WebRTC) e um gerador de vídeo por keyframes de IA que transforma um frame inicial e final num clipe curto - ambos atrás do mesmo SSO e segurança de edge.",
            lu: "<strong>Echtzäit- a generativ Flächen</strong>: self-hosted Voice-/Video-Raim (LiveKit/WebRTC) an en AI-Keyframe-Videogenerator deen aus engem Start- an Enn-Frame e kuerze Clip mécht - béid hannert deemselwechte SSO an Edge-Sécherheet.",
            de: "<strong>Echtzeit- und generative Flächen</strong>: selbst gehostete Voice-/Video-Räume (LiveKit/WebRTC) und ein KI-Keyframe-Videogenerator, der aus einem Start- und Endframe einen kurzen Clip macht - beide hinter demselben SSO und Edge-Schutz.",
            fr: "<strong>Surfaces temps réel et génératives</strong> : des salles voix/vidéo auto-hébergées (LiveKit/WebRTC) et un générateur vidéo par images-clés IA qui transforme une image de début et de fin en un court clip - toutes deux derrière le même SSO et la sécurité d'edge."
        },
        "project.homelab.section.what.core.suite": {
            en: "<strong>Custom product suite</strong>: Identity portal, app hub, admin console, content digest, vault, term-mastery, task log, career workspace, voice/video rooms, an AI video generator, a mail studio, a music intake app, a knowledge base console, and a QR generator microservice.",
            pt: "<strong>Suite de produtos própria</strong>: portal de identidade, hub de apps, consola de administração, digest de conteúdos, vault, domínio de termos, registo de tarefas, espaço de carreira, salas de voz/vídeo, um gerador de vídeo com IA, um estúdio de email, uma app de entrada de música, uma consola da base de conhecimento e um microserviço gerador de QR.",
            lu: "<strong>Eege Produit-Suite</strong>: Identitéitsportal, App-Hub, Admin-Konsol, Content-Digest, Vault, Begrëffer-Training, Task-Log, Karriär-Workspace, Stëmm/Video-Raim, en KI-Video-Generator, e Mail-Studio, eng Musek-Intake-App, eng Konsol fir d'Wëssensbasis an e QR-Generator-Mikroservice.",
            de: "<strong>Eigene Produktsuite</strong>: Identitätsportal, App-Hub, Admin-Konsole, Content-Digest, Vault, Begriffstraining, Task-Log, Karriere-Workspace, Sprach-/Videoräume, ein KI-Videogenerator, ein Mail-Studio, eine Musik-Intake-App, eine Konsole für die Wissensbasis und ein QR-Generator-Microservice.",
            fr: "<strong>Suite de produits maison</strong> : portail d'identité, hub d'applis, console d'administration, digest de contenus, vault, maîtrise de termes, journal de tâches, espace carrière, salons voix/vidéo, un générateur de vidéo IA, un studio d'e-mails, une appli d'ajout de musique, une console pour la base de connaissances et un microservice de génération de QR."
        },
        "project.homelab.section.what.core.killswitch": {
            en: "<strong>Hard application kill switch</strong>: Every custom frontend is registered centrally, so disabling an app immediately blocks access even on direct URL visits.",
            pt: "<strong>Kill switch rígido para aplicações</strong>: Cada frontend personalizado é registado centralmente, por isso desativar uma app bloqueia de imediato o acesso, mesmo através do URL direto.",
            lu: "<strong>Harde Kill-Switch fir Applikatiounen</strong>: All personaliséierte Frontend ass zentral registréiert, also blockéiert d'Desaktivéiere vun enger App direkt den Zougang, och bei engem direkten URL-Opruff.",
            de: "<strong>Harter Application-Kill-Switch</strong>: Jedes eigene Frontend ist zentral registriert, sodass das Deaktivieren einer App den Zugriff sofort blockiert, selbst bei direktem URL-Aufruf.",
            fr: "<strong>Kill switch applicatif strict</strong> : Chaque frontend personnalisé est enregistré centralement, donc désactiver une app bloque immédiatement l'accès, même via une URL directe."
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
            en: "<strong>Self-hosted AI gateway</strong>: an OpenAI-compatible endpoint serves nine local models (chat, tool calling, code, embeddings) and two text-to-speech voices from the worker laptop's integrated GPU over Vulkan, for background and batch work.",
            pt: "<strong>Gateway de IA self-hosted</strong>: um endpoint compatível com OpenAI serve nove modelos locais (chat, chamadas de ferramentas, código, embeddings) e duas vozes de texto para fala a partir da GPU integrada do portátil worker via Vulkan, para trabalho em segundo plano e em lote.",
            lu: "<strong>Self-hosted KI-Gateway</strong>: en OpenAI-kompatibelen Endpoint servéiert néng lokal Modeller (Chat, Tool-Calling, Code, Embeddings) an zwou Text-to-Speech-Stëmmen vun der integréierter GPU vum Worker-Laptop iwwer Vulkan, fir Hannergrond- a Batch-Aarbecht.",
            de: "<strong>Selbst gehostetes KI-Gateway</strong>: ein OpenAI-kompatibler Endpunkt liefert neun lokale Modelle (Chat, Tool-Calling, Code, Embeddings) und zwei Text-to-Speech-Stimmen von der integrierten GPU des Worker-Laptops über Vulkan, für Hintergrund- und Batch-Arbeit.",
            fr: "<strong>Passerelle IA auto-hébergée</strong> : un point d'accès compatible OpenAI sert neuf modèles locaux (chat, appel d'outils, code, embeddings) et deux voix de synthèse vocale depuis le GPU intégré du portable worker via Vulkan, pour les tâches de fond et par lots."
        },
        "project.homelab.section.what.apps.decision": {
            en: "<strong>Fast decision engine</strong>: a CPU model answers choice and score questions about a text in about 100 ms without generating any tokens, and flags likely prompt injection on the AI gateway as a signal, never a block.",
            pt: "<strong>Motor de decisão rápido</strong>: um modelo em CPU responde a perguntas de escolha e pontuação sobre um texto em cerca de 100 ms sem gerar tokens, e assinala possíveis prompt injections no gateway de IA como sinal, nunca como bloqueio.",
            lu: "<strong>Séieren Decisiouns-Motor</strong>: e CPU-Modell beäntwert Choix- a Score-Froen iwwer en Text an ongeféier 100 ms ouni Tokens ze generéieren, a mellt wahrscheinlech Prompt Injections um KI-Gateway als Signal, ni als Spär.",
            de: "<strong>Schnelle Entscheidungs-Engine</strong>: ein CPU-Modell beantwortet Auswahl- und Bewertungsfragen zu einem Text in etwa 100 ms, ohne Tokens zu erzeugen, und meldet mögliche Prompt Injection am KI-Gateway als Signal, nie als Sperre.",
            fr: "<strong>Moteur de décision rapide</strong> : un modèle sur CPU répond à des questions de choix et de score sur un texte en environ 100 ms sans générer de tokens, et signale les injections de prompt probables sur la passerelle IA comme un signal, jamais comme un blocage."
        },
        "project.homelab.section.what.apps.knowledge": {
            en: "<strong>Agent memory and knowledge base</strong>: hybrid vector and full-text search over remembered notes, learned pages, video transcripts and crawled documentation, with local embeddings. It never indexes personal data.",
            pt: "<strong>Memória dos agentes e base de conhecimento</strong>: pesquisa híbrida vetorial e de texto completo sobre notas memorizadas, páginas aprendidas, transcrições de vídeo e documentação recolhida, com embeddings locais. Nunca indexa dados pessoais.",
            lu: "<strong>Gedächtnis vun den Agenten a Wëssensbasis</strong>: hybrid Vektor- a Volltext-Sich iwwer gespäichert Notizen, geléiert Säiten, Video-Transkriptiounen a gecrawlt Dokumentatioun, mat lokalen Embeddings. Perséinlech Donnéeë ginn ni indexéiert.",
            de: "<strong>Agentengedächtnis und Wissensbasis</strong>: hybride Vektor- und Volltextsuche über gemerkte Notizen, gelernte Seiten, Video-Transkripte und gecrawlte Dokumentation, mit lokalen Embeddings. Persönliche Daten werden nie indexiert.",
            fr: "<strong>Mémoire des agents et base de connaissances</strong> : recherche hybride vectorielle et plein texte sur les notes mémorisées, les pages apprises, les transcriptions vidéo et la documentation crawlée, avec des embeddings locaux. Elle n'indexe jamais de données personnelles."
        },
        "project.homelab.section.what.apps.ingest": {
            en: "<strong>Video to transcript</strong>: a worker turns a video link into a timestamped, chunked transcript that agents can read, using human-written subtitles first and Whisper as the fallback.",
            pt: "<strong>De vídeo a transcrição</strong>: um worker transforma um link de vídeo numa transcrição com marcas de tempo e dividida em partes que os agentes conseguem ler, usando primeiro legendas escritas por pessoas e o Whisper como alternativa.",
            lu: "<strong>Vu Video op Transkriptioun</strong>: e Worker mécht aus engem Video-Link eng Transkriptioun mat Zäitmarken an Deeler, déi d'Agente liese kënnen, mat vu Mënsche geschriwwenen Ënnertitelen als éischt Wiel a Whisper als Ersatz.",
            de: "<strong>Vom Video zum Transkript</strong>: ein Worker macht aus einem Videolink ein zeitgestempeltes, in Abschnitte geteiltes Transkript, das Agenten lesen können, mit von Menschen geschriebenen Untertiteln zuerst und Whisper als Rückfall.",
            fr: "<strong>De la vidéo à la transcription</strong> : un worker transforme un lien vidéo en transcription horodatée et découpée que les agents peuvent lire, en utilisant d'abord les sous-titres écrits par des humains et Whisper en secours."
        },
        "project.homelab.section.what.apps.modes": {
            en: "<strong>Two run modes, tiered models</strong>: every agent runs as a cheap fixed pipeline or an adaptive LLM-driven loop; Mistral Small drives the decisions, Mistral Large the final synthesis.",
            pt: "<strong>Dois modos de execução, modelos por nível</strong>: cada agente corre como um pipeline fixo barato ou um loop adaptativo guiado por LLM; o Mistral Small toma as decisões, o Mistral Large faz a síntese final.",
            lu: "<strong>Zwee Ausféierungsmoden, gestaffelt Modeller</strong>: all Agent leeft als bëlleg fixe Pipeline oder als adaptiven LLM-gedriwwene Loop; Mistral Small mécht d'Entscheedungen, Mistral Large déi final Synthese.",
            de: "<strong>Zwei Ausführungsmodi, gestufte Modelle</strong>: jeder Agent läuft als günstige feste Pipeline oder als adaptive LLM-gesteuerte Schleife; Mistral Small trifft die Entscheidungen, Mistral Large die finale Synthese.",
            fr: "<strong>Deux modes d'exécution, modèles à niveaux</strong> : chaque agent tourne en pipeline fixe peu coûteux ou en boucle adaptative pilotée par LLM ; Mistral Small prend les décisions, Mistral Large la synthèse finale."
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
            en: "<strong>Versioned backups</strong>: a dedicated backup runner writes timestamped, checksummed archives for each data domain to the NAS and keeps 30 versions, while ZFS snapshots cover the datasets.",
            pt: "<strong>Backups com versões</strong>: um executor de backups dedicado grava arquivos com data e checksum para cada domínio de dados na NAS e guarda 30 versões, enquanto os snapshots ZFS cobrem os datasets.",
            lu: "<strong>Versionéiert Backups</strong>: en dedizéierte Backup-Runner schreift Archiven mat Zäitstempel a Checksum fir all Donnéeë-Beräich op d'NAS a behält 30 Versiounen, während ZFS-Snapshots d'Datasets ofdecken.",
            de: "<strong>Versionierte Backups</strong>: ein eigener Backup-Runner schreibt zeitgestempelte Archive mit Prüfsumme für jeden Datenbereich auf den NAS und behält 30 Versionen, während ZFS-Snapshots die Datasets abdecken.",
            fr: "<strong>Sauvegardes versionnées</strong> : un exécuteur de sauvegardes dédié écrit sur le NAS des archives horodatées avec somme de contrôle pour chaque domaine de données et garde 30 versions, tandis que les snapshots ZFS couvrent les datasets."
        },
        "project.homelab.section.what.media.rack": {
            en: "<strong>Rack power and cooling</strong>: a smart plug measures the whole rack and the platform sets it against the live electricity price. A script on the NAS drives the intake fan from the hottest drive every 10 seconds, with a 3D-printed exhaust shroud on top, and the drives now hold 40 to 41 °C.",
            pt: "<strong>Energia e arrefecimento do rack</strong>: uma tomada inteligente mede o rack inteiro e a plataforma cruza esse consumo com o preço da eletricidade em tempo real. Um script na NAS ajusta a ventoinha de entrada a cada 10 segundos pelo disco mais quente, com uma saída de ar impressa em 3D no topo, e os discos mantêm agora 40 a 41 °C.",
            lu: "<strong>Stroum a Ofkillung vum Rack</strong>: e Smart Plug moosst de ganze Rack, an d'Plattform setzt dee Verbrauch géint de Live-Stroumpräis. E Script op der NAS reegelt all 10 Sekonnen de Loftventilator no der waarmster Plack, mat engem 3D-gedréckten Auslaass uewen, an d'Placken halen elo 40 bis 41 °C.",
            de: "<strong>Strom und Kühlung des Racks</strong>: ein smarter Stecker misst das ganze Rack, und die Plattform stellt den Verbrauch dem aktuellen Strompreis gegenüber. Ein Skript auf dem NAS regelt den Zuluftlüfter alle 10 Sekunden nach der heißesten Festplatte, mit einer 3D-gedruckten Abluftführung oben, und die Platten halten jetzt 40 bis 41 °C.",
            fr: "<strong>Énergie et refroidissement du rack</strong> : une prise connectée mesure tout le rack et la plateforme met cette consommation face au prix de l'électricité en direct. Un script sur le NAS règle le ventilateur d'entrée toutes les 10 secondes selon le disque le plus chaud, avec une sortie d'air imprimée en 3D au sommet, et les disques tiennent maintenant 40 à 41 °C."
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
            en: "<strong>CrowdSec inline filtering</strong>: Suspicious traffic is blocked before it ever reaches the backend.",
            pt: "<strong>Filtragem inline com CrowdSec</strong>: O tráfego suspeito é bloqueado antes sequer de chegar ao backend.",
            lu: "<strong>CrowdSec-Inline-Filterung</strong>: Verduechtege Verkéier gëtt blockéiert, éier en iwwerhaapt de Backend erreecht.",
            de: "<strong>CrowdSec-Inline-Filterung</strong>: Verdächtiger Traffic wird blockiert, bevor er überhaupt das Backend erreicht.",
            fr: "<strong>Filtrage inline CrowdSec</strong> : Le trafic suspect est bloqué avant même d'atteindre le backend."
        },
        "project.homelab.section.what.gateway.wireguard": {
            en: "<strong>WireGuard backhaul</strong>: All public ingress crosses a self-operated VPN tunnel; the home server has zero direct internet exposure.",
            pt: "<strong>Backhaul WireGuard</strong>: Todo o ingress público atravessa um túnel VPN operado por mim; o home server não tem qualquer exposição direta à internet.",
            lu: "<strong>WireGuard-Backhaul</strong>: All ëffentlechen Ingress leeft duerch e selwer bedriwwene VPN-Tunnel; de Home Server huet null direkt Internet-Expositioun.",
            de: "<strong>WireGuard-Backhaul</strong>: Der gesamte öffentliche Ingress läuft durch einen selbst betriebenen VPN-Tunnel; der Home-Server hat keinerlei direkte Internet-Exposition.",
            fr: "<strong>Backhaul WireGuard</strong> : Tout l'ingress public traverse un tunnel VPN exploité par moi-même ; le serveur maison n'a aucune exposition directe à Internet."
        },
        "project.homelab.section.what.gateway.tailscale": {
            en: "<strong>Tailscale admin mesh</strong>: A separate VPN for remote SSH and development access that never carries public request traffic.",
            pt: "<strong>Mesh admin com Tailscale</strong>: Uma VPN separada para SSH remoto e acesso de desenvolvimento que nunca transporta tráfego público.",
            lu: "<strong>Tailscale-Admin-Mesh</strong>: Eng separat VPN fir Remote-SSH an Entwécklungszougang, déi ni ëffentleche Request-Traffic dréit.",
            de: "<strong>Tailscale-Admin-Mesh</strong>: Ein separates VPN für Remote-SSH und Entwicklungszugang, das niemals öffentlichen Request-Traffic trägt.",
            fr: "<strong>Mesh admin Tailscale</strong> : Un VPN séparé pour le SSH distant et l'accès de développement qui ne transporte jamais de trafic public."
        },
        "project.homelab.section.what.gateway.api": {
            en: "<strong>Gateway API</strong>: A VPN-only internal API exposes threat and access-log data to backend tooling and the security agent.",
            pt: "<strong>API de gateway</strong>: Uma API interna acessível apenas por VPN expõe dados de ameaças e logs de acesso ao tooling backend e ao agente de segurança.",
            lu: "<strong>Gateway-API</strong>: Eng intern API, déi nëmme per VPN accessibel ass, stellt Threat- an Access-Log-Donnéeën fir Backend-Tooling an de Sécherheets-Agent bereet.",
            de: "<strong>Gateway-API</strong>: Eine nur per VPN erreichbare interne API stellt Bedrohungs- und Zugriffslog-Daten für Backend-Tooling und den Sicherheits-Agenten bereit.",
            fr: "<strong>API de passerelle</strong> : Une API interne accessible uniquement par VPN expose les données de menaces et de logs d'accès aux outils backend et à l'agent de sécurité."
        },
        "project.homelab.sidebar.tech.oracle": {
            en: "Oracle Cloud ARM64",
            pt: "Oracle Cloud ARM64",
            lu: "Oracle Cloud ARM64",
            de: "Oracle Cloud ARM64",
            fr: "Oracle Cloud ARM64"
        },
        "project.homelab.sidebar.tech.truenas": {
            en: "TrueNAS SCALE + ZFS",
            pt: "TrueNAS SCALE + ZFS",
            lu: "TrueNAS SCALE + ZFS",
            de: "TrueNAS SCALE + ZFS",
            fr: "TrueNAS SCALE + ZFS"
        },
        "project.homelab.sidebar.tech.vpn": {
            en: "WireGuard + Tailscale",
            pt: "WireGuard + Tailscale",
            lu: "WireGuard + Tailscale",
            de: "WireGuard + Tailscale",
            fr: "WireGuard + Tailscale"
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
            en: "Mistral AI + Guardrailed Agents",
            pt: "Mistral AI + Agentes com guardrails",
            lu: "Mistral AI + Agenten mat Guardrails",
            de: "Mistral AI + Agenten mit Guardrails",
            fr: "Mistral AI + Agents avec guardrails"
        },
        "project.homelab.sidebar.tech.worker": {
            en: "Playwright + Sharp + SearXNG",
            pt: "Playwright + Sharp + SearXNG",
            lu: "Playwright + Sharp + SearXNG",
            de: "Playwright + Sharp + SearXNG",
            fr: "Playwright + Sharp + SearXNG"
        },
        "project.homelab.sidebar.tech.localai": {
            en: "Ollama + Vulkan (local LLMs)",
            pt: "Ollama + Vulkan (LLMs locais)",
            lu: "Ollama + Vulkan (lokal LLMs)",
            de: "Ollama + Vulkan (lokale LLMs)",
            fr: "Ollama + Vulkan (LLM locaux)"
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
            en: "Four-node hybrid topology",
            pt: "Topologia híbrida de quatro nós",
            lu: "Hybrid-Topologie mat véier Noden",
            de: "Hybride Vier-Knoten-Topologie",
            fr: "Topologie hybride à quatre nœuds"
        },
        "project.homelab.sidebar.features.rack": {
            en: "Enclosed 10U rack with monitored power",
            pt: "Rack fechado de 10U com energia monitorizada",
            lu: "Zouene 10U Rack mat iwwerwaachtem Stroum",
            de: "Geschlossenes 10U-Rack mit überwachtem Strom",
            fr: "Rack fermé 10U avec consommation surveillée"
        },
        "project.homelab.sidebar.features.exposure": {
            en: "Zero direct internet exposure for the home server",
            pt: "Zero exposição direta à internet para o home server",
            lu: "Keng direkt Internet-Expositioun fir de Home Server",
            de: "Keine direkte Internet-Exposition für den Home-Server",
            fr: "Aucune exposition directe à Internet pour le serveur maison"
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
            en: "15+ custom apps sharing one backend control plane",
            pt: "Mais de 15 apps próprias com um único backend de controlo",
            lu: "Iwwer 15 eegen Apps mat engem gemeinsame Backend",
            de: "15+ eigene Apps auf einer gemeinsamen Backend-Steuerung",
            fr: "Plus de 15 applis maison sur un seul backend de contrôle"
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
            en: "Nine guardrailed AI agents with approval gates",
            pt: "Nove agentes de IA com guardrails e aprovações",
            lu: "Néng KI-Agenten mat Guardrails a Fräigaben",
            de: "Neun KI-Agenten mit Guardrails und Freigaben",
            fr: "Neuf agents IA avec garde-fous et validations"
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
            en: "machines working as one",
            pt: "máquinas a funcionar como uma só",
            lu: "Maschinnen déi als eng funktionéieren",
            de: "Maschinen, die als eine arbeiten",
            fr: "machines qui n'en font qu'une"
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
            en: "Internet",
            pt: "Internet",
            lu: "Internet",
            de: "Internet",
            fr: "Internet"
        },
        "project.homelab.arch.rack": {
            en: "Home rack (10U)",
            pt: "Rack em casa (10U)",
            lu: "Heem-Rack (10U)",
            de: "Heim-Rack (10U)",
            fr: "Rack maison (10U)"
        },
        "project.homelab.arch.tunnel": {
            en: "WireGuard tunnel",
            pt: "Túnel WireGuard",
            lu: "WireGuard Tunnel",
            de: "WireGuard-Tunnel",
            fr: "Tunnel WireGuard"
        },
        "project.homelab.arch.note": {
            en: "A Tailscale mesh overlays every node for admin access - only the WireGuard tunnel ever carries public traffic.",
            pt: "Uma mesh Tailscale cobre todos os nós para acesso de administração - só o túnel WireGuard transporta tráfego público.",
            lu: "Eng Tailscale-Mesh deckt all Node fir den Admin-Zougang of - nëmmen den WireGuard-Tunnel dréit ëffentleche Verkéier.",
            de: "Ein Tailscale-Mesh überlagert alle Knoten für den Admin-Zugriff - nur der WireGuard-Tunnel trägt öffentlichen Traffic.",
            fr: "Un mesh Tailscale couvre tous les nœuds pour l'accès admin - seul le tunnel WireGuard transporte le trafic public."
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
            en: "Login, an app hub, a vault, a career workspace, voice/video rooms, even an AI video generator - all on one secure backend.",
            pt: "Login, um hub de apps, um vault, um workspace de carreira, salas de voz/vídeo, até um gerador de vídeo por IA - tudo num backend seguro.",
            lu: "Login, en App-Hub, e Vault, e Carrière-Workspace, Voice-/Video-Raim, souguer en AI-Videogenerator - alles op engem sécheren Backend.",
            de: "Login, ein App-Hub, ein Vault, ein Karriere-Workspace, Voice-/Video-Räume, sogar ein KI-Videogenerator - alles auf einem sicheren Backend.",
            fr: "Connexion, un hub d'apps, un vault, un espace carrière, des salles voix/vidéo, et même un générateur vidéo IA - le tout sur un backend sécurisé."
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
            en: "Locked down and passwordless",
            pt: "Protegido e sem palavra-passe",
            lu: "Ofgeséchert an ouni Passwuert",
            de: "Abgesichert und passwortlos",
            fr: "Verrouillé et sans mot de passe"
        },
        "project.homelab.does.secure.desc": {
            en: "Sign in with Face ID or a passkey, and nothing faces the internet directly - every request passes through a private, filtered tunnel.",
            pt: "Entra com Face ID ou uma passkey, e nada está exposto diretamente à internet - cada pedido passa por um túnel privado e filtrado.",
            lu: "Logg dech mat Face ID oder enger Passkey an, an näischt ass direkt am Internet ausgesat - all Ufro geet duerch e private, gefilterten Tunnel.",
            de: "Melde dich mit Face ID oder einem Passkey an, und nichts ist direkt im Internet exponiert - jede Anfrage läuft durch einen privaten, gefilterten Tunnel.",
            fr: "Connecte-toi avec Face ID ou une passkey, et rien n'est exposé directement à internet - chaque requête passe par un tunnel privé et filtré."
        },
        "project.homelab.next.voice": {
            en: "Phone-first voice assistant (Hermes)",
            pt: "Assistente de voz no telemóvel (Hermes)",
            lu: "Telefon-éischten Sproochassistent (Hermes)",
            de: "Telefon-first Sprachassistent (Hermes)",
            fr: "Assistant vocal sur téléphone (Hermes)"
        },
        "project.homelab.next.video": {
            en: "AI video v2: timeline, captions and storyboards",
            pt: "Vídeo IA v2: timeline, legendas e storyboards",
            lu: "KI-Video v2: Timeline, Ënnertitelen a Storyboards",
            de: "KI-Video v2: Timeline, Untertitel und Storyboards",
            fr: "Vidéo IA v2 : timeline, sous-titres et storyboards"
        },
        "project.homelab.next.career": {
            en: "Finish the career workspace & mail inbox",
            pt: "Terminar o workspace de carreira e a caixa de email",
            lu: "De Carrière-Workspace an d'Mail-Inbox fäerdeg maachen",
            de: "Karriere-Workspace und Mail-Posteingang fertigstellen",
            fr: "Finir l'espace carrière et la boîte mail"
        },
        "project.homelab.next.agents": {
            en: "One security agent above both security twins",
            pt: "Um agente de segurança acima dos dois gémeos de segurança",
            lu: "Ee Sécherheets-Agent iwwer deenen zwee Sécherheets-Zwillingen",
            de: "Ein Sicherheitsagent über beiden Sicherheits-Zwillingen",
            fr: "Un agent de sécurité au-dessus des deux jumeaux de sécurité"
        },
    };
    Object.assign(translations, extra);
})();
