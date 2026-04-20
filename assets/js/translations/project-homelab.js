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
            en: "What started as a quiet Raspberry Pi cluster in my living room has grown into a four-node self-hosted platform: an ARM edge gateway in the cloud, an ARM home server, an x86_64 laptop for compute offload, and a dedicated ZFS NAS for storage. The on-site gear now lives in a compact 10U rack with monitored power and airflow, while public traffic still reaches the platform only through a self-operated WireGuard tunnel.",
            pt: "O que começou como um cluster silencioso com Raspberry Pi na minha sala cresceu para uma plataforma self-hosted de quatro nós: um gateway ARM na cloud, um home server ARM, um portátil x86_64 para offload computacional e uma NAS ZFS dedicada ao armazenamento. O equipamento local vive agora num rack compacto de 10U com energia e fluxo de ar monitorizados, enquanto o tráfego público continua a chegar à plataforma apenas através de um túnel WireGuard operado por mim.",
            lu: "Wat als rouege Raspberry Pi Cluster a mengem Wunnzëmmer ugefaangen huet, ass zu enger self-hosted Plattform mat véier Noden gewuess: en ARM Edge Gateway an der Cloud, en ARM Home Server, en x86_64 Laptop fir Compute-Offload, an eng dedizéiert ZFS NAS fir Storage. D'Hardware um Site lieft elo an engem kompakte 10U Rack mat iwwerwaachter Stroumversuergung a Loftfloss, an den ëffentleche Verkéier kënnt nach ëmmer nëmmen iwwer e selwer bedriwwene WireGuard Tunnel eran.",
            de: "Was als leiser Raspberry-Pi-Cluster im Wohnzimmer begann, ist heute eine Self-Hosted-Plattform mit vier Knoten: ein ARM-Edge-Gateway in der Cloud, ein ARM-Home-Server, ein x86_64-Laptop für Compute-Offload und ein dediziertes ZFS-NAS für Storage. Die lokale Hardware sitzt jetzt in einem kompakten 10U-Rack mit überwachter Stromversorgung und Luftstrom, während öffentlicher Traffic die Plattform weiterhin nur über einen selbst betriebenen WireGuard-Tunnel erreicht.",
            fr: "Ce qui a commencé comme un cluster Raspberry Pi silencieux dans mon salon est devenu une plateforme self-hosted à quatre nœuds : une passerelle ARM en cloud, un serveur maison ARM, un laptop x86_64 pour l'offload de calcul, et un NAS ZFS dédié au stockage. Le matériel sur site vit désormais dans un rack compact 10U avec alimentation et flux d'air surveillés, tandis que le trafic public n'atteint toujours la plateforme qu'à travers un tunnel WireGuard opéré par moi-même."
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
        "project.homelab.section.what.compose.title": {
            en: "Docker Compose Stack",
            pt: "Stack Docker Compose",
            lu: "Docker Compose Stack",
            de: "Docker-Compose-Stack",
            fr: "Stack Docker Compose"
        },
        "project.homelab.section.what.compose.media": {
            en: "Self-hosted Media: Jellyfin for personal media streaming, Immich for photo backup with ML features, Nextcloud for file sync, and Navidrome for music.",
            pt: "Media self-hosted: Jellyfin para streaming de media pessoal, Immich para backup de fotos com recursos de ML, Nextcloud para sincronização de ficheiros e Navidrome para música.",
            lu: "Self-hosted Medien: Jellyfin fir perséinleche Streaming, Immich fir Foto-Backup mat ML Features, Nextcloud fir File-Sync, a Navidrome fir Musek.",
            de: "Selbst-gehostete Medien: Jellyfin für persönliches Streaming, Immich für Foto-Backup mit ML-Funktionen, Nextcloud für Dateisynchronisation und Navidrome für Musik.",
            fr: "Médias auto-hébergés : Jellyfin pour le streaming personnel, Immich pour la sauvegarde photo avec ML, Nextcloud pour la synchronisation de fichiers et Navidrome pour la musique."
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
            en: "Cloud Gateway (Oracle VPS)",
            pt: "Gateway na cloud (Oracle VPS)",
            lu: "Cloud-Gateway (Oracle VPS)",
            de: "Cloud-Gateway (Oracle VPS)",
            fr: "Passerelle cloud (Oracle VPS)"
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
            en: "The control plane. Runs the main Docker Compose stack, hosts the backend and custom apps, and acts as the K3s control node.",
            pt: "O plano de controlo. Executa a stack principal em Docker Compose, aloja o backend e as apps personalizadas, e atua como nó de controlo do K3s.",
            lu: "De Control Plane. Leeft de wichtegsten Docker-Compose Stack, host de Backend an d'custom Apps, a déngt als K3s Control Node.",
            de: "Die Control-Plane. Betreibt den Haupt-Docker-Compose-Stack, hostet Backend und eigene Apps und fungiert als K3s-Control-Node.",
            fr: "Le plan de contrôle. Exécute la stack Docker Compose principale, héberge le backend et les apps maison, et sert de nœud de contrôle K3s."
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
            lu: "[NIDDER-VERBRAUCH]",
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
            en: "The offload node. Handles Playwright, Sharp/libvips, private search, and other heavier workloads that are faster on x86_64.",
            pt: "O nó de offload. Trata do Playwright, Sharp/libvips, pesquisa privada e outras cargas pesadas que correm melhor em x86_64.",
            lu: "Den Offload-Node. Këmmert sech ëm Playwright, Sharp/libvips, privat Sich an aner schwéier Workloads déi op x86_64 méi séier sinn.",
            de: "Der Offload-Knoten. Übernimmt Playwright, Sharp/libvips, private Suche und andere schwerere Workloads, die auf x86_64 schneller laufen.",
            fr: "Le nœud d'offload. Gère Playwright, Sharp/libvips, la recherche privée et d'autres charges plus lourdes qui tournent plus vite sur x86_64."
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
        "project.homelab.nodes.gateway.badge": {
            en: "FREE TIER",
            pt: "NÍVEL GRATUITO",
            lu: "GRATIS-STUF",
            de: "KOSTENLOS",
            fr: "OFFRE GRATUITE"
        },
        "project.homelab.nodes.gateway.body": {
            en: "The internet-facing edge. Terminates TLS, filters traffic with CrowdSec, exposes a VPN-only gateway API, and carries ingress over WireGuard.",
            pt: "A edge virada para a internet. Termina TLS, filtra tráfego com CrowdSec, expõe uma API de gateway acessível só por VPN e transporta o ingress via WireGuard.",
            lu: "D'Edge op der Internetsäit. Terminéiert TLS, filtert de Verkéier mat CrowdSec, stellt eng nëmme per VPN accessibel Gateway-API bereet a transportéiert den Ingress iwwer WireGuard.",
            de: "Die internetseitige Edge. Terminiert TLS, filtert Traffic mit CrowdSec, stellt eine nur per VPN erreichbare Gateway-API bereit und transportiert Ingress über WireGuard.",
            fr: "La couche edge exposée à Internet. Termine TLS, filtre le trafic avec CrowdSec, expose une API de passerelle accessible uniquement par VPN, et transporte l'ingress via WireGuard."
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
        "project.homelab.nodes.storage.body": {
            en: "The storage plane. Hosts ZFS pools, the media stack, photo backup, file sync, music services, and hot/cold S3-compatible object storage.",
            pt: "O plano de armazenamento. Aloja pools ZFS, a stack multimédia, backup de fotos, sincronização de ficheiros, serviços de música e armazenamento S3 compatível em camadas hot/cold.",
            lu: "D'Späicher-Ebene. Host ZFS-Pools, de Media-Stack, Foto-Backup, File-Sync, Museksservicer an hot/cold S3-kompatibele Object-Storage.",
            de: "Die Storage-Ebene. Hostet ZFS-Pools, den Media-Stack, Foto-Backup, Dateisynchronisierung, Musikdienste und S3-kompatiblen Hot/Cold-Object-Storage.",
            fr: "Le plan de stockage. Héberge les pools ZFS, la stack média, la sauvegarde photo, la sync de fichiers, les services musicaux et un stockage objet compatible S3 en hot/cold."
        },
        "project.homelab.nodes.storage.tag.storage": {
            en: "[STORAGE]",
            pt: "[STORAGE]",
            lu: "[STORAGE]",
            de: "[STORAGE]",
            fr: "[STORAGE]"
        },
        "project.homelab.nodes.storage.tag.zfs": {
            en: "[ZFS]",
            pt: "[ZFS]",
            lu: "[ZFS]",
            de: "[ZFS]",
            fr: "[ZFS]"
        },
        "project.homelab.nodes.storage.tag.object": {
            en: "[OBJECT]",
            pt: "[OBJECT]",
            lu: "[OBJECT]",
            de: "[OBJECT]",
            fr: "[OBJECT]"
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
        "project.homelab.nodes.switch.type": {
            en: "Easy Smart Managed",
            pt: "Easy Smart Managed",
            lu: "Easy Smart Managed",
            de: "Easy Smart Managed",
            fr: "Easy Smart Managed"
        },
        "project.homelab.nodes.switch.body": {
            en: "Connects the home server, compute node, and NAS on the local network. Managed switch with QoS and IGMP snooping — sits in the rack and links all on-site nodes to the home router.",
            pt: "Liga o home server, o nó de computação e a NAS na rede local. Switch gerido com QoS e IGMP snooping — está no rack e liga todos os nós locais ao router doméstico.",
            lu: "Verbënnt de Home Server, de Compute Node an d'NAS am lokale Netz. Gemanagten Switch mat QoS a IGMP Snooping — steet am Rack a verbënnt all On-Site Noden mam Heemrouter.",
            de: "Verbindet Home-Server, Compute-Node und NAS im lokalen Netzwerk. Managed Switch mit QoS und IGMP Snooping — sitzt im Rack und verbindet alle On-Site-Knoten mit dem Heimrouter.",
            fr: "Relie le serveur maison, le nœud de calcul et le NAS sur le réseau local. Switch managé avec QoS et IGMP snooping — installé dans le rack, il connecte tous les nœuds sur site au routeur domestique."
        },
        "project.homelab.nodes.switch.tag.managed": {
            en: "[MANAGED]",
            pt: "[MANAGED]",
            lu: "[MANAGED]",
            de: "[MANAGED]",
            fr: "[MANAGED]"
        },
        "project.homelab.nodes.switch.tag.gigabit": {
            en: "[GIGABIT]",
            pt: "[GIGABIT]",
            lu: "[GIGABIT]",
            de: "[GIGABIT]",
            fr: "[GIGABIT]"
        },
        "project.homelab.nodes.switch.tag.ports": {
            en: "[8-PORT]",
            pt: "[8-PORT]",
            lu: "[8-PORT]",
            de: "[8-PORT]",
            fr: "[8-PORT]"
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
            en: "I needed a sandbox to break things safely. This was my <strong>first real personal project</strong> that pushed me beyond tutorials and into actual problem-solving. What started with Jellyfin for media streaming grew into a full platform after I built a custom secure tunnel to replace third-party services.",
            pt: "Precisava de um sandbox para partir coisas em segurança. Este foi o meu <strong>primeiro projeto pessoal a sério</strong>, que me levou para lá dos tutoriais e para a resolução prática de problemas. O que começou com Jellyfin para streaming evoluiu para uma plataforma completa depois de criar um túnel seguro personalizado para substituir serviços de terceiros.",
            lu: "Ech hu eng Sandbox gebraucht fir Saache sécher futti ze maachen. Dat war mäin <strong>éischt richtegt perséinlecht Projet</strong>, dat mech iwwer Tutorials eraus an an déi richteg Problemléisung gedréckt huet. Wat mat Jellyfin fir Media-Streaming ugefaangen huet, ass zu enger kompletter Plattform gewuess nodeems ech en eegene sécheren Tunnel gebaut hunn fir Drëtt-Partei-Servicer ze ersetzen.",
            de: "Ich brauchte eine Sandbox, um Dinge sicher kaputtzumachen. Das war mein <strong>erstes richtiges persönliches Projekt</strong>, das mich über Tutorials hinaus zu echter Problemlösung gebracht hat. Was mit Jellyfin als Streaming begann, wurde zur vollständigen Plattform, nachdem ich einen eigenen sicheren Tunnel gebaut hatte, um Drittanbieter-Dienste zu ersetzen.",
            fr: "J’avais besoin d’un bac à sable pour casser les choses en sécurité. C’était mon <strong>premier vrai projet personnel</strong>, celui qui m’a poussé au-delà des tutos vers la résolution concrète de problèmes. Parti de Jellyfin pour le streaming, c’est devenu une plateforme complète après la création d’un tunnel sécurisé maison pour remplacer les services tiers."
        },
        "project.homelab.section.why.body2": {
            en: "Beyond learning, I kept running into the same frustration: existing tools were either limited, ad-ridden, or just didn't fit what I needed. The QR generator? Most online versions were locked behind paywalls or covered in ads. The Vault app? Nothing out there matched the workflow I had in mind. So instead of settling, <strong>I started building my own</strong> — and that grew into a full self-hosted ecosystem of custom applications replacing third-party tools on my own terms.",
            pt: "Para além de aprender, continuava a esbarrar na mesma frustração: as ferramentas existentes eram limitadas, cheias de anúncios ou simplesmente não se adequavam ao que precisava. O gerador de QR? A maioria das versões online estava atrás de paywalls ou coberta de anúncios. A app Vault? Nada do que existia correspondia ao workflow que tinha em mente. Então, em vez de me conformar, <strong>comecei a construir as minhas próprias ferramentas</strong> — e isso cresceu para um ecossistema self-hosted completo de aplicações personalizadas que substituem ferramentas de terceiros nos meus termos.",
            lu: "Nieft dem Léieren, sinn ech ëmmer erëm op déi selwecht Frustratioun gestouss: déi existéierend Tools waren entweder limitéiert, voller Reklammen oder hu guer net zu menge Besoine gepasst. De QR-Generator? Déi meescht Online-Versioune waren hannert Paywalls oder voller Annoncen. D'Vault-App? Näischt dobaussen huet dem Workflow entspriecht, deen ech am Kapp hat. Also, amplaz mech domat zefridden ze ginn, <strong>hunn ech ugefaang meng eegen Tools ze bauen</strong> — an dat ass zu engem komplette self-hosted Ecosystem vu personaliséierten Applikatiounen gewuess, dat Drëtt-Partei-Tools op meng Aart ersetzt.",
            de: "Neben dem Lerneffekt gab es immer wieder denselben Frust: Viele Tools waren eingeschränkt, voller Werbung oder schlicht nicht das, was ich brauchte. Beim QR-Generator landete man oft hinter Paywalls oder zwischen Bannern. Für die Vault-App fand ich nichts, das zu meinem Workflow passte. Also habe ich aufgehört, Kompromisse zu machen, und <strong>angefangen, meine eigenen Lösungen zu bauen</strong> — daraus ist Schritt für Schritt ein komplettes Self-Hosted-Ökosystem entstanden, das Drittanbieter-Tools zu meinen Bedingungen ersetzt.",
            fr: "Au-delà de l'apprentissage, je me heurtais toujours à la même frustration : les outils existants étaient soit limités, soit bourrés de pubs, soit inadaptés à mes besoins. Le générateur de QR ? La plupart des versions en ligne étaient derrière des paywalls ou couvertes de pubs. L'app Vault ? Rien ne correspondait au workflow que j'avais en tête. Alors plutôt que de me contenter, <strong>j'ai commencé à construire les miens</strong> — et ça s'est transformé en un écosystème self-hosted complet d'applications personnalisées remplaçant les outils tiers à ma façon."
        },
        "project.homelab.section.why.body3": {
            en: "Along the way I learned how to design around real constraints: mixed architectures, separate storage and compute planes, zero-trust ingress, and applications that share auth without sharing security shortcuts. <strong>I built 8+ custom apps and an agent framework from scratch</strong>, which proved to me that serious systems design is possible long before you have enterprise hardware.",
            pt: "Pelo caminho aprendi a desenhar em torno de limitações reais: arquiteturas mistas, planos separados de storage e compute, ingress zero-trust e aplicações que partilham autenticação sem partilhar atalhos de segurança. <strong>Construí 8+ apps personalizadas e um framework de agentes de raiz</strong>, o que me provou que é possível fazer engenharia séria de sistemas muito antes de ter hardware empresarial.",
            lu: "Ënnerwee hunn ech geléiert ronderëm richteg Aschränkungen ze designen: gemëschten Architekturen, getrennte Storage- a Compute-Ebenen, Zero-Trust-Ingress an Applikatiounen, déi Auth deelen ouni Sécherheets-Ofkierzungen ze iwwerhuelen. <strong>Ech hunn 8+ personaliséiert Apps an en Agent-Framework vun Null op gebaut</strong>, an domat fir mech bewisen, datt eescht Systemdesign scho laang virun Enterprise-Hardware méiglech ass.",
            de: "Dabei habe ich gelernt, um echte Einschränkungen herum zu entwerfen: gemischte Architekturen, getrennte Storage- und Compute-Ebenen, Zero-Trust-Ingress und Anwendungen, die Auth teilen, ohne Sicherheitsabkürzungen zu übernehmen. <strong>Ich habe 8+ eigene Apps und ein Agent-Framework von Grund auf gebaut</strong>, was mir bewiesen hat, dass ernsthaftes Systemdesign lange vor Enterprise-Hardware möglich ist.",
            fr: "En chemin, j'ai appris à concevoir autour de contraintes réelles : architectures mixtes, plans de calcul et de stockage séparés, ingress zero-trust, et applications qui partagent l'auth sans partager de raccourcis de sécurité. <strong>J'ai construit 8+ apps maison et un framework d'agents from scratch</strong>, ce qui m'a prouvé qu'un vrai design de systèmes est possible bien avant d'avoir du matériel d'entreprise."
        },
        "project.homelab.section.lessons.title": {
            en: "Lessons Learned",
            pt: "Lições aprendidas",
            lu: "Wat ech geléiert hunn",
            de: "Gelerntes",
            fr: "Leçons retenues"
        },
        "project.homelab.section.lessons.arm.title": { en: "ARM has quirks", pt: "ARM tem quirks", lu: "ARM huet seng Launen", de: "ARM hat Eigenheiten", fr: "ARM a ses bizarreries" },
        "project.homelab.section.lessons.arm.body": { en: "Not all Docker images support ARM64. Finding compatible alternatives and tweaking configs taught me to read docs carefully.", pt: "Nem todas as imagens Docker suportam ARM64. Encontrar alternativas compatíveis e ajustar configs ensinou-me a ler a documentação com atenção.", lu: "Net all Docker-Images ënnerstëtzen ARM64. Kompatibel Alternativen ze fannen an d'Configs unzepassen huet mech geléiert, d'Dokumentatioun genee ze liesen.", de: "Nicht alle Docker-Images unterstützen ARM64. Kompatible Alternativen zu finden und Configs anzupassen, hat mich gelehrt, Dokus genau zu lesen.", fr: "Toutes les images Docker ne gèrent pas ARM64. Chercher des alternatives compatibles et ajuster les configs m’a appris à lire la doc attentivement." },
        "project.homelab.section.lessons.dns.title": { en: "DNS is powerful", pt: "DNS é poderoso", lu: "DNS ass staark", de: "DNS ist mächtig", fr: "Le DNS est puissant" },
        "project.homelab.section.lessons.dns.body": { en: "Managing records in Cloudflare and understanding how traffic flows made the whole system click.", pt: "Gerir registos no Cloudflare e entender o fluxo de tráfego fez o sistema ganhar sentido.", lu: "Duerch d'Managen vun den DNS-Records an d'Verstoe vum Traffic-Floss huet de System fir mech Sënn gemaach.", de: "DNS-Einträge in Cloudflare zu managen und den Traffic-Flow zu verstehen, ließ alles zusammenpassen.", fr: "Gérer les enregistrements dans Cloudflare et comprendre les flux a fait déclic." },
        "project.homelab.section.lessons.iterate.title": { en: "Start small, iterate fast", pt: "Começa pequeno, itera rápido", lu: "Kleng ufänken, séier iteréieren", de: "Klein starten, schnell iterieren", fr: "Commencer petit, itérer vite" },
        "project.homelab.section.lessons.iterate.body": { en: "This setup grew organically. Each problem solved unlocked the next improvement.", pt: "Esta configuração cresceu organicamente. Cada problema resolvido desbloqueou a melhoria seguinte.", lu: "Dës Opstellung ass organesch gewuess. All geléiste Problem huet déi nächst Verbesserung opgemaach.", de: "Dieses Setup ist organisch gewachsen. Jedes gelöste Problem öffnete die nächste Verbesserung.", fr: "Cette configuration a grandi organiquement. Chaque problème résolu a débloqué la suite." },
        "project.homelab.section.lessons.cost.title": { en: "Cost-conscious infrastructure", pt: "Infra consciente de custos", lu: "Käschtebewosst Infra", de: "Kostenbewusste Infrastruktur", fr: "Infra soucieuse des coûts" },
        "project.homelab.section.lessons.cost.body": { en: "Running on low-power devices and free-tier cloud taught me to optimize before scaling.", pt: "Correr em dispositivos de baixo consumo e cloud gratuita ensinou-me a optimizar antes de escalar.", lu: "Op niddereg-Stroum Geräter a Free-Tier Cloud lafen huet mech geléiert ze optimiséieren éier ech skalaéieren.", de: "Auf stromsparenden Geräten und Free-Tier-Cloud zu laufen, lehrte mich zu optimieren, bevor ich skaliere.", fr: "Tourner sur du matériel basse conso et du cloud gratuit m’a appris à optimiser avant de scaler." },
        "project.homelab.section.lessons.security.title": { en: "Security is a journey", pt: "Segurança é uma jornada", lu: "Sécherheet ass eng Rees", de: "Sicherheit ist eine Reise", fr: "La sécurité est un parcours" },
        "project.homelab.section.lessons.security.body": { en: "Implementing SSO, token blacklisting, and audit logging taught me that authentication is more than just passwords.", pt: "Implementar SSO, blacklist de tokens e auditoria mostrou-me que autenticação é mais do que senhas.", lu: "SSO, Token Blacklisting an Audit Logging ëmsetzen huet gewisen datt Authentifikatioun méi wéi Passwierder ass.", de: "SSO, Token-Blacklisting und Audit-Logs zu bauen zeigte mir, dass Auth mehr ist als Passwörter.", fr: "Mettre en place SSO, blacklist de tokens et journaux d’audit m’a montré que l’authentification, ce n’est pas que des mots de passe." },
        "project.homelab.section.lessons.hybrid.title": { en: "Hybrid architecture complexity", pt: "Complexidade da arquitetura híbrida", lu: "Komplexitéit vun der Hybrid Architektur", de: "Komplexität der Hybrid-Architektur", fr: "Complexité de l'architecture hybride" },
        "project.homelab.section.lessons.hybrid.body": { en: "Coordinating Docker Compose and K3s on the same node, plus a remote VPS gateway, required careful port planning and network design.", pt: "Coordenar Docker Compose e K3s no mesmo nó, mais um gateway VPS remoto, exigiu planeamento cuidadoso de portas e desenho de rede.", lu: "Docker Compose a K3s um selwechte Node koordinéieren, plus e VPS Gateway, huet genee Port a Netzwierk Planung verlaangt.", de: "Docker Compose und K3s auf demselben Node plus ein Remote-VPS-Gateway erforderten sorgfältige Port- und Netzplanung.", fr: "Coordonner Docker Compose et K3s sur le même nœud, plus une passerelle VPS distante, a demandé un vrai travail sur les ports et le réseau." },
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
        "project.homelab.section.next.title": {
            en: "What's Next",
            pt: "O que vem a seguir",
            lu: "Wat kënnt als nächst",
            de: "Wie geht es weiter",
            fr: "Et après"
        },
        "project.homelab.section.next.body": {
            en: "Next steps are deeper K3s adoption for selected microservices, more agent-driven workflows, continued hardening of the edge and auth stack, and expanding the platform with new internal tools only when they solve a real gap in my day-to-day workflows.",
            pt: "Os próximos passos passam por uma adoção mais profunda de K3s para microserviços selecionados, mais workflows orientados por agentes, endurecimento contínuo da stack de edge e autenticação, e expansão da plataforma com novas ferramentas internas apenas quando resolverem uma lacuna real no meu dia a dia.",
            lu: "Als nächst kënnt eng méi déif K3s-Notzung fir ausgewielte Microservices, méi agent-gedriwwen Workflows, weider Hardening vum Edge- an Auth-Stack, an d'Erweiderung vun der Plattform mat neien internen Tools nëmmen dann, wann se eng richteg Lück a mengem Alldag léisen.",
            de: "Als Nächstes stehen eine tiefere K3s-Nutzung für ausgewählte Microservices, mehr agentengesteuerte Workflows, weiteres Hardening von Edge- und Auth-Stack und der Ausbau der Plattform mit neuen internen Tools an — aber nur dann, wenn sie eine echte Lücke in meinem Alltag schließen.",
            fr: "La suite : une adoption plus poussée de K3s pour certains microservices, davantage de workflows pilotés par agents, un durcissement continu de la couche edge et de l'auth, et l'ajout de nouveaux outils internes uniquement lorsqu'ils répondent à un vrai manque dans mon quotidien."
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
            en: "Jellyfin, Immich, Nextcloud, Navidrome",
            pt: "Jellyfin, Immich, Nextcloud, Navidrome",
            lu: "Jellyfin, Immich, Nextcloud, Navidrome",
            de: "Jellyfin, Immich, Nextcloud, Navidrome",
            fr: "Jellyfin, Immich, Nextcloud, Navidrome"
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
        "project.homelab.hardware.body": {
            en: "All on-site hardware is organized around the same real-world constraints that shaped the first version of the lab: quiet operation, low idle power, minimal cable mess, and hardware that earns its spot in the rack by solving an actual problem.",
            pt: "Todo o hardware local está organizado em torno das mesmas limitações do mundo real que moldaram a primeira versão do lab: funcionamento silencioso, baixo consumo em idle, o mínimo de confusão com cabos e hardware que só ganha lugar no rack se resolver um problema real.",
            lu: "All Hardware um Site ass ronderëm déiselwecht praktesch Aschränkunge organiséiert, déi schonn déi éischt Versioun vum Lab gepräägt hunn: rouege Betrib, niddrege Stroumverbrauch am Idle, sou wéineg Kabelchaos wéi méiglech, an Hardware, déi hir Plaz am Rack nëmme verdéngt, wann se e richtege Problem léist.",
            de: "Die gesamte lokale Hardware ist nach denselben realen Einschränkungen organisiert, die schon die erste Version des Labs geprägt haben: leiser Betrieb, niedriger Idle-Verbrauch, möglichst wenig Kabelchaos und Hardware, die ihren Platz im Rack nur verdient, wenn sie ein echtes Problem löst.",
            fr: "Tout le matériel sur site est organisé autour des mêmes contraintes réelles qui ont façonné la première version du lab : fonctionnement silencieux, faible consommation au repos, minimum de câbles en désordre, et du matériel qui mérite sa place dans le rack uniquement s'il résout un vrai problème."
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
        "project.homelab.section.what.core.suite": {
            en: "<strong>Custom product suite</strong>: Identity portal, app hub, admin console, content digest, vault, term-mastery app, task log, career workspace, and a QR generator microservice.",
            pt: "<strong>Suite de produtos personalizada</strong>: Portal de identidade, hub de apps, consola de administração, digest de conteúdo, vault, app de term-mastery, task log, workspace de carreira e um microsserviço gerador de QR.",
            lu: "<strong>Personaliséiert Produkt-Suite</strong>: Identity-Portal, App-Hub, Admin-Konsole, Content-Digest, Vault, Term-Mastery-App, Task-Log, Career-Workspace an e QR-Generator-Microservice.",
            de: "<strong>Eigene Produktsuite</strong>: Identity-Portal, App-Hub, Admin-Konsole, Content-Digest, Vault, Term-Mastery-App, Task-Log, Career-Workspace und ein QR-Generator-Microservice.",
            fr: "<strong>Suite de produits personnalisée</strong> : Portail d'identité, hub d'apps, console d'administration, digest de contenu, vault, app de term-mastery, journal de tâches, espace carrière et un microservice générateur de QR."
        },
        "project.homelab.section.what.core.compose": {
            en: "<strong>Compose-first runtime</strong>: The home server still runs the main Docker Compose stack for day-to-day services and hot-reload development, while K3s is reserved for isolated microservices.",
            pt: "<strong>Runtime orientado ao Compose</strong>: O home server continua a correr a stack principal em Docker Compose para os serviços do dia a dia e desenvolvimento com hot reload, enquanto o K3s fica reservado para microsserviços isolados.",
            lu: "<strong>Compose-first Runtime</strong>: De Home Server leeft nach ëmmer mam Haapt-Docker-Compose-Stack fir Alldagsservicer a Hot-Reload-Entwécklung, wärend K3s fir isoléiert Microservices reservéiert ass.",
            de: "<strong>Compose-first-Runtime</strong>: Der Home-Server betreibt weiterhin den Haupt-Docker-Compose-Stack für Alltagsdienste und Hot-Reload-Entwicklung, während K3s für isolierte Microservices reserviert bleibt.",
            fr: "<strong>Runtime orientée Compose</strong> : Le serveur maison exécute toujours la stack Docker Compose principale pour les services du quotidien et le développement avec hot reload, tandis que K3s reste réservé aux microservices isolés."
        },
        "project.homelab.section.what.core.killswitch": {
            en: "<strong>Hard application kill switch</strong>: Every custom frontend is registered centrally, so disabling an app immediately blocks access even on direct URL visits.",
            pt: "<strong>Kill switch rígido para aplicações</strong>: Cada frontend personalizado é registado centralmente, por isso desativar uma app bloqueia de imediato o acesso, mesmo através do URL direto.",
            lu: "<strong>Harde Kill-Switch fir Applikatiounen</strong>: All personaliséierte Frontend ass zentral registréiert, also blockéiert d'Desaktivéiere vun enger App direkt den Zougang, och bei engem direkten URL-Opruff.",
            de: "<strong>Harter Application-Kill-Switch</strong>: Jedes eigene Frontend ist zentral registriert, sodass das Deaktivieren einer App den Zugriff sofort blockiert, selbst bei direktem URL-Aufruf.",
            fr: "<strong>Kill switch applicatif strict</strong> : Chaque frontend personnalisé est enregistré centralement, donc désactiver une app bloque immédiatement l'accès, même via une URL directe."
        },
        "project.homelab.section.what.apps.title": {
            en: "Agent + Worker Layer",
            pt: "Camada de agentes + workers",
            lu: "Agenten- a Worker-Schicht",
            de: "Agenten- und Worker-Schicht",
            fr: "Couche agents + workers"
        },
        "project.homelab.section.what.apps.retriever": {
            en: "<strong>Retriever agent</strong>: Researches the web through a private meta-search backend and headless browsing, then returns structured briefs.",
            pt: "<strong>Agente Retriever</strong>: Pesquisa a web através de um backend de meta-pesquisa privado e navegação headless, devolvendo depois briefs estruturados.",
            lu: "<strong>Retriever-Agent</strong>: Fuerscht am Web iwwer e private Meta-Search-Backend an Headless-Browsing an liwwert dono strukturéiert Briefings zeréck.",
            de: "<strong>Retriever-Agent</strong>: Recherchiert im Web über ein privates Meta-Search-Backend und Headless-Browsing und liefert anschließend strukturierte Briefings zurück.",
            fr: "<strong>Agent Retriever</strong> : Recherche sur le web via un backend de méta-recherche privé et de la navigation headless, puis renvoie des briefs structurés."
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
        "project.homelab.section.what.apps.offload": {
            en: "<strong>Compute offload pattern</strong>: The laptop handles Playwright scraping, Sharp image optimization, SearXNG, and audio feature extraction, with local fallbacks on the home server.",
            pt: "<strong>Padrão de offload computacional</strong>: O portátil trata do scraping com Playwright, otimização de imagem com Sharp, SearXNG e extração de características de áudio, com fallbacks locais no home server.",
            lu: "<strong>Compute-Offload-Muster</strong>: De Laptop iwwerhëlt Playwright-Scraping, Bildoptimiséierung mat Sharp, SearXNG an d'Extraktioun vun Audio-Features, mat lokale Fallbacks um Home Server.",
            de: "<strong>Compute-Offload-Muster</strong>: Der Laptop übernimmt Playwright-Scraping, Bildoptimierung mit Sharp, SearXNG und Audio-Feature-Extraktion, mit lokalen Fallbacks auf dem Home-Server.",
            fr: "<strong>Modèle d'offload de calcul</strong> : Le laptop gère le scraping Playwright, l'optimisation d'image avec Sharp, SearXNG et l'extraction de caractéristiques audio, avec des fallbacks locaux sur le serveur maison."
        },
        "project.homelab.section.what.apps.guardrails": {
            en: "<strong>Shared guardrails</strong>: Every agent runs behind kill switches, token/cost/runtime budgets, tool allowlists, concurrency caps, and blocked-action logging.",
            pt: "<strong>Guardrails partilhados</strong>: Cada agente corre atrás de kill switches, orçamentos de tokens/custos/runtime, allowlists de ferramentas, limites de concorrência e registo de ações bloqueadas.",
            lu: "<strong>Gedeelt Guardrails</strong>: All Agent leeft hannert Kill-Switches, Token-/Käschten-/Runtime-Budgeten, Tool-Allowlists, Concurrency-Limiten an engem Logging vu blockéierten Aktiounen.",
            de: "<strong>Geteilte Guardrails</strong>: Jeder Agent läuft hinter Kill-Switches, Token-/Kosten-/Laufzeit-Budgets, Tool-Allowlists, Concurrency-Limits und der Protokollierung blockierter Aktionen.",
            fr: "<strong>Guardrails partagés</strong> : Chaque agent fonctionne derrière des kill switches, des budgets de jetons/coûts/runtime, des allowlists d'outils, des plafonds de concurrence et une journalisation des actions bloquées."
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
            en: "<strong>Self-hosted media services</strong>: Jellyfin for streaming personal media libraries, Immich for photo backup with ML-powered organization, Nextcloud for file sync and collaboration, and Navidrome for music streaming.",
            pt: "<strong>Serviços multimédia self-hosted</strong>: Jellyfin para streaming de bibliotecas multimédia pessoais, Immich para backup de fotos com organização assistida por ML, Nextcloud para sync e colaboração em ficheiros, e Navidrome para streaming de música.",
            lu: "<strong>Self-hosted Mediaservicer</strong>: Jellyfin fir d'Streaming vu perséinleche Medienbibliothéiken, Immich fir Foto-Backup mat ML-gestëtzter Organisatioun, Nextcloud fir File-Sync a Kollaboratioun, an Navidrome fir Musek-Streaming.",
            de: "<strong>Self-hosted-Mediendienste</strong>: Jellyfin für das Streaming persönlicher Medienbibliotheken, Immich für Foto-Backups mit ML-gestützter Organisation, Nextcloud für Dateisynchronisation und Zusammenarbeit sowie Navidrome für Musik-Streaming.",
            fr: "<strong>Services média auto-hébergés</strong> : Jellyfin pour le streaming de bibliothèques média personnelles, Immich pour la sauvegarde photo avec organisation assistée par ML, Nextcloud pour la synchronisation et la collaboration sur les fichiers, et Navidrome pour le streaming musical."
        },
        "project.homelab.section.what.media.object": {
            en: "<strong>S3-compatible object storage</strong>: Dual MinIO tiers keep hot objects on SSD and move colder data to HDD through lifecycle rules.",
            pt: "<strong>Armazenamento de objetos compatível com S3</strong>: Dois tiers de MinIO mantêm os objetos quentes em SSD e movem os dados mais frios para HDD através de regras de ciclo de vida.",
            lu: "<strong>S3-kompatibele Object-Storage</strong>: Zwee MinIO-Tiers halen waarm Objeten op SSD a verréckelen déi méi kal Donnéeën iwwer Lifecycle-Reegelen op HDD.",
            de: "<strong>S3-kompatibler Object-Storage</strong>: Zwei MinIO-Tiers halten heiße Objekte auf SSD und verschieben kältere Daten per Lifecycle-Regeln auf HDD.",
            fr: "<strong>Stockage objet compatible S3</strong> : Deux tiers MinIO gardent les objets chauds sur SSD et déplacent les données plus froides vers HDD via des règles de cycle de vie."
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
            en: "JWT + TOTP 2FA",
            pt: "JWT + TOTP 2FA",
            lu: "JWT + TOTP 2FA",
            de: "JWT + TOTP 2FA",
            fr: "JWT + TOTP 2FA"
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
            en: "Compact 10U rack with monitored power",
            pt: "Rack compacto de 10U com energia monitorizada",
            lu: "Kompakte 10U-Rack mat iwwerwaachter Stroumversuergung",
            de: "Kompaktes 10U-Rack mit überwachter Stromversorgung",
            fr: "Rack compact 10U avec alimentation surveillée"
        },
        "project.homelab.sidebar.features.exposure": {
            en: "Zero direct internet exposure for the home server",
            pt: "Zero exposição direta à internet para o home server",
            lu: "Keng direkt Internet-Expositioun fir de Home Server",
            de: "Keine direkte Internet-Exposition für den Home-Server",
            fr: "Aucune exposition directe à Internet pour le serveur maison"
        },
        "project.homelab.sidebar.features.auth": {
            en: "Custom JWT SSO + TOTP + trusted devices",
            pt: "SSO JWT personalizado + TOTP + dispositivos de confiança",
            lu: "Personaliséiert JWT-SSO + TOTP + vertrauenswierdeg Geräter",
            de: "Eigenes JWT-SSO + TOTP + vertrauenswürdige Geräte",
            fr: "SSO JWT personnalisé + TOTP + appareils de confiance"
        },
        "project.homelab.sidebar.features.apps": {
            en: "8+ custom apps sharing one backend control plane",
            pt: "8+ apps personalizadas a partilhar o mesmo plano de controlo backend",
            lu: "8+ personaliséiert Apps, déi ee gemeinsame Backend-Control-Plane deelen",
            de: "8+ eigene Apps mit gemeinsamer Backend-Control-Plane",
            fr: "8+ apps personnalisées partageant un même plan de contrôle backend"
        },
        "project.homelab.sidebar.features.agents": {
            en: "Autonomous agents with hard guardrails",
            pt: "Agentes autónomos com guardrails rígidos",
            lu: "Autonom Agenten mat haarde Guardrails",
            de: "Autonome Agenten mit harten Guardrails",
            fr: "Agents autonomes avec guardrails stricts"
        },
        "project.homelab.sidebar.features.nas": {
            en: "Dedicated NAS with hot/cold object storage",
            pt: "NAS dedicado com armazenamento de objetos hot/cold",
            lu: "Dedizéierten NAS mat Hot/Cold-Object-Storage",
            de: "Dediziertes NAS mit Hot/Cold-Object-Storage",
            fr: "NAS dédié avec stockage objet hot/cold"
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
    };
    Object.assign(translations, extra);
})();
