/**
 * PIF (Smart Plant Monitoring) project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 */

(function() {
    'use strict';
    const extra = {
        "project.pif.badge": {
            en: "FINAL PROJECT",
            pt: "PROJETO FINAL",
            lu: "Finalprojet",
            de: "ABSCHLUSSPROJEKT",
            fr: "PROJET FINAL"
        },
        "project.pif.title": {
            en: "Smart Plant Monitoring - Final Project",
            pt: "Monitorização Inteligente de Plantas - Projeto Final",
            lu: "Smart Planz Iwwerwaachung - Final Projet",
            de: "Smart Plant Monitoring - Abschlussprojekt",
            fr: "Surveillance Intelligente des Plantes - Projet Final"
        },
        "project.pif.score": {
            en: "59/60",
            pt: "59/60",
            lu: "59/60",
            de: "59/60",
            fr: "59/60"
        },
        "project.pif.subtitle": {
            en: "Final project from September 2024 to June 2025: Full IoT system with ESP8266 nodes, Raspberry Pi hub, web dashboard, enterprise networking, and automated backups. Presented the completed product as part of the Computer Technician diploma.",
            pt: "Projeto final de setembro de 2024 a junho de 2025: Sistema IoT completo com nós ESP8266, hub Raspberry Pi, dashboard web, rede empresarial e backups automatizados. Apresentei o produto concluído como parte do diploma de Técnico de Informática.",
            lu: "Finale Projet vum September 2024 bis Juni 2025: Vollstännegt IoT System mat ESP8266 Noden, Raspberry Pi Hub, Web Dashboard, Enterprise Netzwierk, an automatesche Backups. Hunn de komplett Produit presentéiert als Deel vum Computer Technician Diplom.",
            de: "Abschlussprojekt von September 2024 bis Juni 2025: Vollständiges IoT-System mit ESP8266-Nodes, Raspberry Pi Hub, Web-Dashboard, Enterprise-Netzwerk und automatisierten Backups. Präsentierte das fertige Produkt als Teil des Computer-Techniker-Diploms.",
            fr: "Projet final de septembre 2024 à juin 2025 : Système IoT complet avec nœuds ESP8266, hub Raspberry Pi, tableau de bord web, réseau d'entreprise et sauvegardes automatisées. Présenté le produit terminé dans le cadre du diplôme de Technicien en informatique."
        },
        "project.pif.section.system.title": {
            en: "The \"Plantimeter\" System",
            pt: "O Sistema \"Plantimeter\"",
            lu: "De \"Plantimeter\" System",
            de: "Das \"Plantimeter\"-System",
            fr: "Le système \"Plantimeter\""
        },
        "project.pif.section.system.body": {
            en: "This was my <strong>PIF (Projet Intégré Final)</strong> — the capstone project for my Computer Technician diploma. I built a complete IoT plant monitoring and automation system from scratch: hardware nodes, firmware, backend server, web dashboard, and enterprise networking.",
            pt: "Este foi o meu <strong>PIF (Projet Intégré Final)</strong> — o projeto de final de curso do diploma de Técnico de Informática. Construí um sistema IoT completo de monitorização e automação de plantas do zero: nós de hardware, firmware, servidor backend, dashboard web e rede empresarial.",
            lu: "Dëst war mäin <strong>PIF (Projet Intégré Final)</strong> — de Capstone Projet fir mäin Computer Technician Diplom. Ech hunn e komplette IoT Planz-Monitoring an Automatisatiouns-System vu Null un gebaut: Hardware Noden, Firmware, Backend Server, Web Dashboard, an Enterprise Netzwierk.",
            de: "Dies war mein <strong>PIF (Projet Intégré Final)</strong> — das Abschlussprojekt für mein Computer-Techniker-Diplom. Ich habe ein komplettes IoT-System zur Pflanzenüberwachung und -automatisierung von Grund auf gebaut: Hardware-Nodes, Firmware, Backend-Server, Web-Dashboard und Enterprise-Netzwerk.",
            fr: "C’était mon <strong>PIF (Projet Intégré Final)</strong> — le projet de fin d’études pour mon diplôme de Technicien en informatique. J’ai construit un système IoT complet de monitoring et d’automatisation des plantes de A à Z : nœuds matériels, firmware, serveur backend, tableau de bord web et réseau d’entreprise."
        },
        "project.pif.nodes.sensor.title": {
            en: "Sensor Node",
            pt: "Nó Sensor",
            lu: "Sensor Node",
            de: "Sensor-Knoten",
            fr: "Nœud capteur"
        },
        "project.pif.nodes.sensor.spec": {
            en: "ESP8266 / Wemos D1 Mini",
            pt: "ESP8266 / Wemos D1 Mini",
            lu: "ESP8266 / Wemos D1 Mini",
            de: "ESP8266 / Wemos D1 Mini",
            fr: "ESP8266 / Wemos D1 Mini"
        },
        "project.pif.nodes.sensor.detail1": {
            en: "Custom PCB",
            pt: "PCB Personalizada",
            lu: "Benotzerdefinéiert PCB",
            de: "Individuelle PCB",
            fr: "PCB personnalisé"
        },
        "project.pif.nodes.sensor.detail2": {
            en: "Wi-Fi + SQL",
            pt: "Wi‑Fi + SQL",
            lu: "Wi‑Fi + SQL",
            de: "Wi‑Fi + SQL",
            fr: "Wi‑Fi + SQL"
        },
        "project.pif.nodes.sensor.body": {
            en: "Measures soil moisture, temperature, humidity, and light. Controls water pump and grow LED. Authenticates via MAC address and syncs with the hub.",
            pt: "Mede humidade do solo, temperatura, humidade e luz. Controla a bomba de água e o LED de crescimento. Autentica via endereço MAC e sincroniza com o hub.",
            lu: "Miess Buedemfiichtegkeet, Temperatur, Fiichtegkeet a Liicht. Kontrolléiert Waasserpompel a Grow LED. Authentifikatioun iwwer MAC Adress a Sync mam Hub.",
            de: "Misst Bodenfeuchte, Temperatur, Luftfeuchte und Licht. Steuert Wasserpumpe und Grow-LED. Authentifiziert über MAC-Adresse und synchronisiert mit dem Hub.",
            fr: "Mesure l’humidité du sol, la température, l’humidité et la lumière. Contrôle la pompe à eau et la LED de croissance. Authentifie via l’adresse MAC et se synchronise avec le hub."
        },
        "project.pif.nodes.sensor.tag.dht22": {
            en: "[DHT22]",
            pt: "[DHT22]",
            lu: "[DHT22]",
            de: "[DHT22]",
            fr: "[DHT22]"
        },
        "project.pif.nodes.sensor.tag.bh1750": {
            en: "[BH1750]",
            pt: "[BH1750]",
            lu: "[BH1750]",
            de: "[BH1750]",
            fr: "[BH1750]"
        },
        "project.pif.nodes.sensor.tag.sen0193": {
            en: "[SEN0193]",
            pt: "[SEN0193]",
            lu: "[SEN0193]",
            de: "[SEN0193]",
            fr: "[SEN0193]"
        },
        "project.pif.nodes.sensor.tag.uln2803": {
            en: "[ULN2803]",
            pt: "[ULN2803]",
            lu: "[ULN2803]",
            de: "[ULN2803]",
            fr: "[ULN2803]"
        },
        "project.pif.nodes.hub.title": {
            en: "Hub Server",
            pt: "Servidor Hub",
            lu: "Hub Server",
            de: "Hub-Server",
            fr: "Serveur hub"
        },
        "project.pif.nodes.hub.spec": {
            en: "Raspberry Pi 4 / FullpageOS",
            pt: "Raspberry Pi 4 / FullpageOS",
            lu: "Raspberry Pi 4 / FullpageOS",
            de: "Raspberry Pi 4 / FullpageOS",
            fr: "Raspberry Pi 4 / FullpageOS"
        },
        "project.pif.nodes.hub.detail1": {
            en: "Touchscreen",
            pt: "Ecrã tátil",
            lu: "Touchscreen",
            de: "Touchscreen",
            fr: "Écran tactile"
        },
        "project.pif.nodes.hub.detail2": {
            en: "LAMP Stack",
            pt: "Pilha LAMP",
            lu: "LAMP Stack",
            de: "LAMP-Stack",
            fr: "Stack LAMP"
        },
        "project.pif.nodes.hub.body": {
            en: "Runs Apache, PHP, MariaDB. Hosts admin dashboard, touch UI for kiosk mode, and log API. Handles task scheduling and node management.",
            pt: "Corre Apache, PHP, MariaDB. Aloja o painel de admin, UI tátil para modo quiosque e API de logs. Gere agendamento de tarefas e gestão de nós.",
            lu: "Laféiert Apache, PHP, MariaDB. Host den Admin Dashboard, Touch UI fir Kiosk Modus, an Log API. Gestioun vu Aufgaben an Noden.",
            de: "Betreibt Apache, PHP, MariaDB. Hostet Admin-Dashboard, Touch-UI für Kiosk-Modus und Log-API. Übernimmt Aufgabenplanung und Node-Verwaltung.",
            fr: "Fait tourner Apache, PHP, MariaDB. Héberge le tableau de bord admin, l’interface tactile en mode kiosque et l’API de logs. Gère la planification des tâches et les nœuds."
        },
        "project.pif.nodes.hub.tag.apache": {
            en: "[APACHE]",
            pt: "[APACHE]",
            lu: "[APACHE]",
            de: "[APACHE]",
            fr: "[APACHE]"
        },
        "project.pif.nodes.hub.tag.mariadb": {
            en: "[MARIADB]",
            pt: "[MARIADB]",
            lu: "[MARIADB]",
            de: "[MARIADB]",
            fr: "[MARIADB]"
        },
        "project.pif.nodes.hub.tag.php": {
            en: "[PHP]",
            pt: "[PHP]",
            lu: "[PHP]",
            de: "[PHP]",
            fr: "[PHP]"
        },
        "project.pif.nodes.hub.tag.ssl": {
            en: "[SSL]",
            pt: "[SSL]",
            lu: "[SSL]",
            de: "[SSL]",
            fr: "[SSL]"
        },
        "project.pif.nodes.backup.title": {
            en: "Backup Server",
            pt: "Servidor de Backups",
            lu: "Backup Server",
            de: "Backup-Server",
            fr: "Serveur de sauvegarde"
        },
        "project.pif.nodes.backup.spec": {
            en: "Ubuntu Server VM / RAID1",
            pt: "VM Ubuntu Server / RAID1",
            lu: "Ubuntu Server VM / RAID1",
            de: "Ubuntu Server VM / RAID1",
            fr: "VM Ubuntu Server / RAID1"
        },
        "project.pif.nodes.backup.detail1": {
            en: "2× 30GB",
            pt: "2× 30GB",
            lu: "2× 30GB",
            de: "2× 30GB",
            fr: "2× 30Go"
        },
        "project.pif.nodes.backup.detail2": {
            en: "Mirrored",
            pt: "Espelhado",
            lu: "Gespigelt",
            de: "Gespiegelt",
            fr: "En miroir"
        },
        "project.pif.nodes.backup.body": {
            en: "Receives daily backups via rsync over SSH. Stores database dumps, logs, and web content with 30-day rotation.",
            pt: "Recebe backups diários via rsync sobre SSH. Guarda dumps de base de dados, logs e conteúdo web com rotação de 30 dias.",
            lu: "Kritt deeglech Backups via rsync iwwer SSH. Späichert DB Dumps, Logs, a Web Inhalt mat 30-Deeg Rotatioun.",
            de: "Erhält tägliche Backups per rsync über SSH. Speichert Datenbank-Dumps, Logs und Web-Inhalte mit 30-tägiger Rotation.",
            fr: "Reçoit des sauvegardes quotidiennes via rsync sur SSH. Stocke dumps DB, logs et contenu web avec rotation de 30 jours."
        },
        "project.pif.nodes.backup.tag.raid1": {
            en: "[RAID1]",
            pt: "[RAID1]",
            lu: "[RAID1]",
            de: "[RAID1]",
            fr: "[RAID1]"
        },
        "project.pif.nodes.backup.tag.rsync": {
            en: "[RSYNC]",
            pt: "[RSYNC]",
            lu: "[RSYNC]",
            de: "[RSYNC]",
            fr: "[RSYNC]"
        },
        "project.pif.nodes.backup.tag.cron": {
            en: "[CRON]",
            pt: "[CRON]",
            lu: "[CRON]",
            de: "[CRON]",
            fr: "[CRON]"
        },
        "project.pif.nodes.backup.tag.ufw": {
            en: "[UFW]",
            pt: "[UFW]",
            lu: "[UFW]",
            de: "[UFW]",
            fr: "[UFW]"
        },
        "project.pif.section.what.title": {
            en: "What It Does",
            pt: "O que faz",
            lu: "Wat et mécht",
            de: "Was es tut",
            fr: "Ce que ça fait"
        },
        "project.pif.section.what.body": {
            en: "The system automates plant care and provides real-time monitoring:",
            pt: "O sistema automatiza o cuidado das plantas e fornece monitorização em tempo real:",
            lu: "De System automatiséiert Planzepfleeg a bitt Echtzäit Iwwerwaachung:",
            de: "Das System automatisiert die Pflanzenpflege und bietet Echtzeitüberwachung:",
            fr: "Le système automatise l’entretien des plantes et offre une surveillance en temps réel :"
        },
        "project.pif.section.what.env": {
            en: "Environmental Sensing: Measures soil moisture, air temperature, humidity, and ambient light using calibrated sensors.",
            pt: "Sensores ambientais: Mede humidade do solo, temperatura do ar, humidade e luz ambiente com sensores calibrados.",
            lu: "Ëmweltmessung: Miess Buedemfiichtegkeet, Lofttemperatur, Fiichtegkeet a Liicht mat kalibréierte Sensoren.",
            de: "Umweltmessung: Misst Bodenfeuchte, Lufttemperatur, Luftfeuchte und Umgebungslicht mit kalibrierten Sensoren.",
            fr: "Mesure environnementale : Mesure humidité du sol, température de l’air, humidité et lumière ambiante avec capteurs calibrés."
        },
        "project.pif.section.what.watering": {
            en: "Automated Watering: Triggers the water pump based on soil moisture thresholds or scheduled tasks.",
            pt: "Rega automatizada: Aciona a bomba de água com base em limites de humidade do solo ou tarefas agendadas.",
            lu: "Automatiséiert Bewässerung: Aktivéiert d’Waasserpompel op Basis vu Buedemfiichtegkeet-Thresholds oder geplangte Aufgaben.",
            de: "Automatisierte Bewässerung: Aktiviert die Wasserpumpe basierend auf Bodenfeuchte-Grenzwerten oder geplanten Aufgaben.",
            fr: "Arrosage automatisé : Déclenche la pompe à eau selon des seuils d’humidité du sol ou des tâches planifiées."
        },
        "project.pif.section.what.light": {
            en: "Grow Light Control: Activates 1W LED when light levels drop below optimal range.",
            pt: "Controlo da luz de crescimento: Ativa LED de 1W quando a luminosidade fica abaixo do ideal.",
            lu: "Grow Light Kontroll: Aktivéiert 1W LED wann d’Liichtniveauen ënner den optimalen Beräich falen.",
            de: "Grow-Light-Steuerung: Aktiviert 1W-LED, wenn die Lichtwerte unter den optimalen Bereich fallen.",
            fr: "Contrôle de la lumière de croissance : Active la LED 1W quand la lumière passe sous la plage optimale."
        },
        "project.pif.section.what.dashboard": {
            en: "Web Dashboard: Admin panel with real-time charts (ApexCharts), task scheduling, user management, and plant variations.",
            pt: "Painel Web: Painel de administração com gráficos em tempo real (ApexCharts), agendamento de tarefas, gestão de utilizadores e variações de plantas.",
            lu: "Web Dashboard: Admin Panel mat Echtzäit Charts (ApexCharts), Aufgab Plangung, Benotzer Gestioun, a Planzen Variatiounen.",
            de: "Web-Dashboard: Admin-Panel mit Echtzeitdiagrammen (ApexCharts), Aufgabenplanung, Benutzerverwaltung und Pflanzenvariationen.",
            fr: "Tableau de bord Web : Panneau d'administration avec graphiques en temps réel (ApexCharts), planification des tâches, gestion des utilisateurs et variations de plantes."
        },
        "project.pif.section.what.backend": {
            en: "Dynamic Backend: PHP API-driven architecture for real-time updates, log history viewer, and seamless data management.",
            pt: "Backend Dinâmico: Arquitetura PHP orientada a API para atualizações em tempo real, visualizador de histórico de logs e gestão de dados sem interrupções.",
            lu: "Dynameschen Backend: PHP API-gedriwwen Architektur fir Echtzäit Updates, Log Geschicht Viewer, a seamless Daten Gestioun.",
            de: "Dynamisches Backend: PHP-API-gesteuerte Architektur für Echtzeit-Updates, Log-Verlauf-Viewer und nahtloses Datenmanagement.",
            fr: "Backend dynamique : Architecture PHP pilotée par API pour mises à jour en temps réel, visualiseur d'historique des journaux et gestion de données transparente."
        },
        "project.pif.section.what.ux": {
            en: "User Experience: Login security, separated user/admin views, fuzzy search throughout, and modals for improved workflow.",
            pt: "Experiência do Utilizador: Segurança de login, vistas separadas utilizador/admin, pesquisa fuzzy em todo o lado, e modais para melhor fluxo de trabalho.",
            lu: "Benotzer Erfarung: Login Sécherheet, getrennt Benotzer/Admin Vueën, Fuzzy Search iwwerall, a Modalen fir verbessert Workflow.",
            de: "Benutzererfahrung: Login-Sicherheit, getrennte Benutzer/Admin-Ansichten, Fuzzy-Suche überall und Modals für verbesserte Arbeitsabläufe.",
            fr: "Expérience utilisateur : Sécurité de connexion, vues séparées utilisateur/admin, recherche floue partout et modales pour un flux de travail amélioré."
        },
        "project.pif.section.what.kiosk": {
            en: "Touch Kiosk UI: Optimized interface for the Raspberry Pi touchscreen display, designed for better usability despite the small screen size.",
            pt: "UI tátil de quiosque: Interface otimizada para o ecrã tátil do Raspberry Pi, desenhada para melhor usabilidade apesar do tamanho reduzido do ecrã.",
            lu: "Touch Kiosk UI: Optiméiert Interface fir den Raspberry Pi Touchscreen, designt fir besser Benotzbarkeet trotz dem klengen Ecran.",
            de: "Touch-Kiosk-UI: Optimierte Oberfläche für das Raspberry Pi Touchscreen-Display, für bessere Benutzerfreundlichkeit trotz kleiner Bildschirmgröße entwickelt.",
            fr: "UI kiosque tactile : Interface optimisée pour l'écran tactile Raspberry Pi, conçue pour une meilleure utilisabilité malgré la petite taille de l'écran."
        },
        "project.pif.section.network.title": {
            en: "The Network",
            pt: "A Rede",
            lu: "D'Netzwierk",
            de: "Das Netzwerk",
            fr: "Le réseau"
        },
        "project.pif.section.network.body": {
            en: "I designed and configured a complete enterprise-style network in Cisco Packet Tracer:",
            pt: "Desenhei e configurei uma rede empresarial completa no Cisco Packet Tracer:",
            lu: "Ech hunn en Enterprise-Netzwierk am Cisco Packet Tracer designt a konfiguréiert:",
            de: "Ich habe ein vollständiges Enterprise-Netzwerk in Cisco Packet Tracer entworfen und konfiguriert:",
            fr: "J’ai conçu et configuré un réseau de style entreprise dans Cisco Packet Tracer :"
        },
        "project.pif.section.network.firm": {
            en: "Company Network: VLANs (10/20), DHCP server, ISR4331 router with NAT/PAT and ACLs.",
            pt: "Rede da Empresa: VLANs (10/20), servidor DHCP, router ISR4331 com NAT/PAT e ACLs.",
            lu: "Firmennetz: VLANs (10/20), DHCP Server, ISR4331 Router mat NAT/PAT an ACLen.",
            de: "Firmennetzwerk: VLANs (10/20), DHCP-Server, ISR4331-Router mit NAT/PAT und ACLs.",
            fr: "Réseau d'entreprise : VLANs (10/20), serveur DHCP, routeur ISR4331 avec NAT/PAT et ACLs."
        },
        "project.pif.section.network.home": {
            en: "Home Network: Separate WLAN for nodes (PlantimeterAP) with WPA2-PSK, routed to the company network.",
            pt: "Rede Doméstica: WLAN separado para os nós (PlantimeterAP) com WPA2-PSK, encaminhado para a rede da empresa.",
            lu: "Heemnetz: Separat WLAN fir Noden (PlantimeterAP) mat WPA2-PSK, geriicht op d'Firmennetz.",
            de: "Heimnetzwerk: Separates WLAN für Nodes (PlantimeterAP) mit WPA2-PSK, ins Firmennetz geroutet.",
            fr: "Réseau domestique : WLAN séparé pour les nœuds (PlantimeterAP) avec WPA2-PSK, routé vers le réseau de l'entreprise."
        },
        "project.pif.section.network.isp": {
            en: "ISP Simulation: Dedicated router simulating internet provider with DNS (Google 8.8.8.8) and fiber link.",
            pt: "Simulação de ISP: Router dedicado simulando o provedor de internet com DNS (Google 8.8.8.8) e ligação de fibra.",
            lu: "ISP Simulatioun: Dedizéierte Router simuléiert den Internet Provider mat DNS (Google 8.8.8.8) an Fiber Link.",
            de: "ISP-Simulation: Dedizierter Router simuliert den Internetanbieter mit DNS (Google 8.8.8.8) und Glasfaserverbindung.",
            fr: "Simulation ISP : Routeur dédié simulant le fournisseur internet avec DNS (Google 8.8.8.8) et liaison fibre."
        },
        "project.pif.section.network.security": {
            en: "Security: Port-based ACLs, NAT for web/FTP access, proper routing tables.",
            pt: "Segurança: ACLs baseadas em portas, NAT para acesso web/FTP, tabelas de routing adequadas.",
            lu: "Sécherheet: Port-baséiert ACLen, NAT fir Web/FTP Zougang, richteg Routing Dëscher.",
            de: "Sicherheit: Port-basierte ACLs, NAT für Web/FTP-Zugriff, korrekte Routing-Tabellen.",
            fr: "Sécurité : ACLs basées sur les ports, NAT pour l'accès web/FTP, tables de routage correctes."
        },
        "project.pif.section.network.gigabit": {
            en: "Gigabit Architecture: Full Gigabit speeds throughout. Implemented copper-to-fiber converter bridge where router interfaces couldn't connect directly, maintaining performance.",
            pt: "Arquitetura Gigabit: Velocidades Gigabit completas em toda a rede. Implementei ponte conversor cobre-fibra onde interfaces do router não podiam conectar diretamente, mantendo desempenho.",
            lu: "Gigabit Architektur: Vollstänneg Gigabit Vitessen duerch d'ganzt Netzwierk. Kupfer-zu-Faser Converter Bréck ëmgesat wou Router Interfaces net direkt verbonne konnten, Vitess behal.",
            de: "Gigabit-Architektur: Volle Gigabit-Geschwindigkeiten durchgehend. Kupfer-zu-Faser-Konverter-Brücke implementiert, wo Router-Schnittstellen nicht direkt verbunden werden konnten, Leistung beibehalten.",
            fr: "Architecture Gigabit : Vitesses Gigabit complètes dans tout le réseau. Pont convertisseur cuivre-fibre implémenté où les interfaces du routeur ne pouvaient pas se connecter directement, performance maintenue."
        },
        "project.pif.images.sensor": {
            en: "ESP8266 Sensor Node: Wemos D1 Mini with DHT22, BH1750, SEN0193 sensors and LED grow light",
            pt: "Nó Sensor ESP8266: Wemos D1 Mini com sensores DHT22, BH1750, SEN0193 e LED de crescimento",
            lu: "ESP8266 Sensor Node: Wemos D1 Mini mat DHT22, BH1750, SEN0193 Sensoren an LED Grow Liicht",
            de: "ESP8266 Sensor-Node: Wemos D1 Mini mit DHT22, BH1750, SEN0193 Sensoren und LED-Wachstumslicht",
            fr: "Nœud capteur ESP8266 : Wemos D1 Mini avec capteurs DHT22, BH1750, SEN0193 et LED de croissance"
        },
        "project.pif.images.display": {
            en: "Raspberry Pi 4 Hub Server with touchscreen display running the kiosk mode interface",
            pt: "Servidor Hub Raspberry Pi 4 com ecrã tátil executando a interface em modo quiosque",
            lu: "Raspberry Pi 4 Hub Server mat Touchscreen Display deen de Kiosk Modus Interface bedreiwen",
            de: "Raspberry Pi 4 Hub-Server mit Touchscreen-Display, der die Kiosk-Modus-Oberfläche ausführt",
            fr: "Serveur hub Raspberry Pi 4 avec écran tactile exécutant l'interface en mode kiosque"
        },
        "project.pif.images.water": {
            en: "Automated watering system: Water pump mechanism controlled by soil moisture sensors",
            pt: "Sistema de rega automatizado: Mecanismo de bomba de água controlado por sensores de humidade do solo",
            lu: "Automatesche Bewässerungssystem: Waasserpompel Mechanismus kontrolléiert vun Buedemfiichtegkeet Sensoren",
            de: "Automatisches Bewässerungssystem: Wasserpumpen-Mechanismus gesteuert von Bodenfeuchtesensoren",
            fr: "Système d'arrosage automatisé : Mécanisme de pompe à eau contrôlé par des capteurs d'humidité du sol"
        },
        "project.pif.images.network": {
            en: "The whole network — including the simulated internet/ISP side — designed and tested in Cisco Packet Tracer: the home network (IoT nodes, PlantimeterAP) connects to the company office (servers, VLANs) through an ISR4331 router, with DNS routing to Google Public DNS.",
            pt: "Toda a rede — incluindo o lado simulado de internet/ISP — concebida e testada no Cisco Packet Tracer: a rede doméstica (nós IoT, PlantimeterAP) liga-se ao escritório da empresa (servidores, VLANs) através de um router ISR4331, com roteamento DNS para o Google Public DNS.",
            lu: "Dat ganzt Netzwierk — inklusiv déi simuléiert Internet-/ISP-Säit — am Cisco Packet Tracer entworf an getest: d'Heemnetz (IoT-Noden, PlantimeterAP) verbënnt sech mam Firmebüro (Server, VLANen) iwwer en ISR4331-Router, mat DNS-Routing op de Google Public DNS.",
            de: "Das gesamte Netzwerk — einschließlich der simulierten Internet-/ISP-Seite — in Cisco Packet Tracer entworfen und getestet: das Heimnetzwerk (IoT-Knoten, PlantimeterAP) verbindet sich über einen ISR4331-Router mit dem Firmenbüro (Server, VLANs), mit DNS-Routing zum Google Public DNS.",
            fr: "L'ensemble du réseau — y compris le côté internet/FAI simulé — conçu et testé dans Cisco Packet Tracer : le réseau domestique (nœuds IoT, PlantimeterAP) se connecte au bureau de l'entreprise (serveurs, VLANs) via un routeur ISR4331, avec routage DNS vers Google Public DNS."
        },
        "project.pif.section.why.title": {
            en: "Why I Built It",
            pt: "Porque o Construí",
            lu: "Firwat ech et gebaut hunn",
            de: "Warum ich es gebaut habe",
            fr: "Pourquoi je l’ai construit"
        },
        "project.pif.section.why.body1": {
            en: "This was my <strong>final exam project</strong> for the Computer Technician diploma. It had to demonstrate skills across hardware, software, networking, and documentation. I chose to go beyond the requirements — implementing \"Should\" and \"Could\" features, plus my own innovations like fuzzy search and a 80°C safety cutoff.",
            pt: "Este foi o meu <strong>projeto final de exame</strong> para o diploma de Técnico de Informática. Tinha de demonstrar competências em hardware, software, redes e documentação. Decidi ir além dos requisitos — implementando funcionalidades \"Should\" e \"Could\", além de inovações próprias como fuzzy search e um cutoff de segurança a 80°C.",
            lu: "Dëst war mäin <strong>finalen Examen Projet</strong> fir den Computer Technician Diplom. Ech misst Fäegkeeten an Hardware, Software, Netzwierker an Dokumentatioun weisen. Ech sinn iwwer d'Ufuerderunge gaangen — hunn \"Should\" an \"Could\" Features ëmgesat plus meng eege Innovatiounen wéi Fuzzy Search an en 80°C Sécherheets-Cutoff.",
            de: "Dies war mein <strong>Abschlussprojekt</strong> für das Computer-Techniker-Diplom. Es musste Fähigkeiten in Hardware, Software, Netzwerk und Dokumentation zeigen. Ich bin über die Anforderungen hinausgegangen — habe \"Should\"- und \"Could\"-Features implementiert sowie eigene Innovationen wie Fuzzy Search und einen 80°C Sicherheits-Cutoff.",
            fr: "C’était mon <strong>projet de fin d’études</strong> pour le diplôme de Technicien en informatique. Il devait démontrer des compétences en matériel, logiciel, réseau et documentation. J’ai choisi d’aller au-delà des exigences — en implémentant des fonctionnalités \"Should\" et \"Could\", ainsi que mes propres innovations comme la recherche floue et une coupure de sécurité à 80°C."
        },
        "project.pif.section.why.body2": {
            en: "The project was developed in sprints (A1–A7 for hardware/firmware, L1–L7 for server/network), each with clear goals, tests, and documented difficulties. The final documentation was over 100 pages.",
            pt: "O projeto foi desenvolvido em sprints (A1–A7 para hardware/firmware, L1–L7 para servidor/rede), cada um com objetivos claros, testes e dificuldades documentadas. A documentação final tinha mais de 100 páginas.",
            lu: "De Projet gouf an Sprints entwéckelt (A1–A7 fir Hardware/Firmware, L1–L7 fir Server/Netzwierk), all mat kloere Ziler, Tester, an dokumentéierte Schwieregkeeten. D'final Dokumentatioun hat iwwer 100 Säiten.",
            de: "Das Projekt wurde in Sprints entwickelt (A1–A7 für Hardware/Firmware, L1–L7 für Server/Netzwerk), jeweils mit klaren Zielen, Tests und dokumentierten Schwierigkeiten. Die Abschlussdokumentation umfasste über 100 Seiten.",
            fr: "Le projet a été développé en sprints (A1–A7 pour le matériel/firmware, L1–L7 pour le serveur/réseau), chacun avec des objectifs clairs, des tests et des difficultés documentées. La documentation finale dépassait les 100 pages."
        },
        "project.pif.section.lessons.title": {
            en: "Lessons Learned",
            pt: "Lições Aprendidas",
            lu: "Geléiert Lektiounen",
            de: "Gelernte Lektionen",
            fr: "Leçons apprises"
        },
        "project.pif.section.lessons.hardware": {
            en: "<strong>Hardware debugging is humbling</strong> — Swapped resistors, wrong pin soldering, and sensor calibration taught me patience and attention to detail.",
            pt: "<strong>Debug de hardware é humilde</strong> — Resistores trocados, soldadura no pino errado e calibração de sensores ensinaram-me paciência e atenção ao detalhe.",
            lu: "<strong>Hardware Debugging ass bescheiden</strong> — Verwiesselt Resistore, falsch Pin Lötung, an Sensor Kalibratioun hunn mech Gedold a Detailpräzisioun geléiert.",
            de: "<strong>Hardware-Debugging ist demütigend</strong> — Vertauschte Widerstände, falsches Pin-Löten und Sensorkalibrierung lehrten mich Geduld und Liebe zum Detail.",
            fr: "<strong>Le débogage matériel est humble</strong> — Résistances échangées, soudure de mauvais pin et calibration des capteurs m’ont appris la patience et le sens du détail."
        },
        "project.pif.section.lessons.fullstack": {
            en: "<strong>Full-stack means full responsibility</strong> — From PCB to PHP, every layer had to work together. One bug anywhere breaks everything.",
            pt: "<strong>Full-stack significa responsabilidade total</strong> — Do PCB ao PHP, cada camada tinha de funcionar em conjunto. Um bug em qualquer ponto quebra tudo.",
            lu: "<strong>Full-stack heescht voll Responsabilitéit</strong> — Vum PCB bis PHP, all Schicht misst zesummeschaffen. Een Bug iergendwou brécht alles.",
            de: "<strong>Full-Stack heißt volle Verantwortung</strong> — Vom PCB bis PHP musste jede Schicht zusammenarbeiten. Ein Bug irgendwo bricht alles.",
            fr: "<strong>Full-stack signifie pleine responsabilité</strong> — Du PCB au PHP, chaque couche devait fonctionner ensemble. Un bug n’importe où casse tout."
        },
        "project.pif.section.lessons.docs": {
            en: "<strong>Documentation is a skill</strong> — Writing 100+ pages of structured documentation with user stories, diagrams, and test results was as challenging as the code.",
            pt: "<strong>Documentar é uma competência</strong> — Escrever 100+ páginas de documentação estruturada com user stories, diagramas e resultados de testes foi tão desafiante quanto o código.",
            lu: "<strong>Dokumentatioun ass eng Fäegkeet</strong> — 100+ Säiten strukturéiert Dokumentatioun mat User Stories, Diagrammer, an Testresultater schreiwen war esou usprochsvoll wéi de Code.",
            de: "<strong>Dokumentation ist eine Fähigkeit</strong> — Über 100 Seiten strukturierte Dokumentation mit User Stories, Diagrammen und Testergebnissen zu schreiben war so herausfordernd wie der Code.",
            fr: "<strong>La documentation est une compétence</strong> — Rédiger plus de 100 pages de documentation structurée avec user stories, diagrammes et résultats de tests était aussi difficile que le code."
        },
        "project.pif.section.lessons.security": {
            en: "<strong>Security matters from day one</strong> — Fail2Ban, SSL, UFW, prepared statements — I learned to think about security at every layer.",
            pt: "<strong>A segurança importa desde o primeiro dia</strong> — Fail2Ban, SSL, UFW, prepared statements — aprendi a pensar em segurança em todas as camadas.",
            lu: "<strong>Sécherheet zielt vum éischten Dag un</strong> — Fail2Ban, SSL, UFW, prepared Statements — ech hunn geléiert Sécherheet op all Schicht ze bedenken.",
            de: "<strong>Sicherheit zählt von Tag eins an</strong> — Fail2Ban, SSL, UFW, Prepared Statements — ich habe gelernt, Sicherheit in jeder Schicht mitzudenken.",
            fr: "<strong>La sécurité compte dès le premier jour</strong> — Fail2Ban, SSL, UFW, requêtes préparées — j’ai appris à penser la sécurité à chaque couche."
        },
        "project.pif.sidebar.tech.esp": {
            en: "ESP8266 (Wemos D1 Mini)",
            pt: "ESP8266 (Wemos D1 Mini)",
            lu: "ESP8266 (Wemos D1 Mini)",
            de: "ESP8266 (Wemos D1 Mini)",
            fr: "ESP8266 (Wemos D1 Mini)"
        },
        "project.pif.sidebar.tech.rpi": {
            en: "Raspberry Pi 4",
            pt: "Raspberry Pi 4",
            lu: "Raspberry Pi 4",
            de: "Raspberry Pi 4",
            fr: "Raspberry Pi 4"
        },
        "project.pif.sidebar.tech.mariadb": {
            en: "MariaDB + phpMyAdmin",
            pt: "MariaDB + phpMyAdmin",
            lu: "MariaDB + phpMyAdmin",
            de: "MariaDB + phpMyAdmin",
            fr: "MariaDB + phpMyAdmin"
        },
        "project.pif.sidebar.tech.apache": {
            en: "Apache + PHP",
            pt: "Apache + PHP",
            lu: "Apache + PHP",
            de: "Apache + PHP",
            fr: "Apache + PHP"
        },
        "project.pif.sidebar.tech.security": {
            en: "SSL, Fail2Ban, UFW",
            pt: "SSL, Fail2Ban, UFW",
            lu: "SSL, Fail2Ban, UFW",
            de: "SSL, Fail2Ban, UFW",
            fr: "SSL, Fail2Ban, UFW"
        },
        "project.pif.sidebar.tech.cisco": {
            en: "Cisco Networking (VLANs, NAT)",
            pt: "Redes Cisco (VLANs, NAT)",
            lu: "Cisco Networking (VLANen, NAT)",
            de: "Cisco Networking (VLANs, NAT)",
            fr: "Réseau Cisco (VLAN, NAT)"
        },
        "project.pif.sidebar.tech.raid": {
            en: "RAID1 Backup Server",
            pt: "Servidor de Backup RAID1",
            lu: "RAID1 Backup Server",
            de: "RAID1 Backup-Server",
            fr: "Serveur de sauvegarde RAID1"
        },
        "project.pif.sidebar.tech.bash": {
            en: "Bash Automation",
            pt: "Automação Bash",
            lu: "Bash Automatisatioun",
            de: "Bash-Automatisierung",
            fr: "Automatisation Bash"
        },
        "project.pif.sidebar.sensors.dht22": {
            en: "DHT22 (Temp/Humidity)",
            pt: "DHT22 (Temp/Humidade)",
            lu: "DHT22 (Temp/Fiichtegkeet)",
            de: "DHT22 (Temp/Feuchtigkeit)",
            fr: "DHT22 (Temp/Humidité)"
        },
        "project.pif.sidebar.sensors.bh1750": {
            en: "BH1750 (Light)",
            pt: "BH1750 (Luz)",
            lu: "BH1750 (Liicht)",
            de: "BH1750 (Licht)",
            fr: "BH1750 (Lumière)"
        },
        "project.pif.sidebar.sensors.sen0193": {
            en: "SEN0193 (Soil Moisture)",
            pt: "SEN0193 (Humidade do Solo)",
            lu: "SEN0193 (Buedemfiichtegkeet)",
            de: "SEN0193 (Bodenfeuchte)",
            fr: "SEN0193 (Humidité du sol)"
        },
        "project.pif.sidebar.sensors.uln2803": {
            en: "ULN2803 Driver",
            pt: "Driver ULN2803",
            lu: "ULN2803 Treiber",
            de: "ULN2803 Treiber",
            fr: "Pilote ULN2803"
        },
        "project.pif.sidebar.sensors.pump": {
            en: "Water Pump",
            pt: "Bomba de Água",
            lu: "Waasserpompel",
            de: "Wasserpumpe",
            fr: "Pompe à eau"
        },
        "project.pif.sidebar.sensors.growled": {
            en: "1W Grow LED",
            pt: "LED de Crescimento 1W",
            lu: "1W Grow LED",
            de: "1W Grow-LED",
            fr: "LED de croissance 1W"
        },
        "project.pif.sidebar.sensors.rgb": {
            en: "RGB Status LED",
            pt: "LED RGB de Estado",
            lu: "RGB Status LED",
            de: "RGB-Status-LED",
            fr: "LED de statut RGB"
        },
        "project.pif.sidebar.features.dashboard": {
            en: "Real-time Dashboard",
            pt: "Dashboard em tempo real",
            lu: "Echtzäit Dashboard",
            de: "Echtzeit-Dashboard",
            fr: "Tableau de bord en temps réel"
        },
        "project.pif.sidebar.features.scheduling": {
            en: "Task Scheduling",
            pt: "Agendamento de Tarefas",
            lu: "Aufgabenplanung",
            de: "Aufgabenplanung",
            fr: "Planification des tâches"
        },
        "project.pif.sidebar.features.backups": {
            en: "Automated Backups",
            pt: "Backups automatizados",
            lu: "Automatiséiert Backups",
            de: "Automatisierte Backups",
            fr: "Sauvegardes automatisées"
        },
        "project.pif.sidebar.features.search": {
            en: "Fuzzy Search",
            pt: "Pesquisa Fuzzy",
            lu: "Fuzzy Search",
            de: "Fuzzy Search",
            fr: "Recherche floue"
        },
        "project.pif.sidebar.features.cutoff": {
            en: "80°C Safety Cutoff",
            pt: "Corte de segurança a 80°C",
            lu: "80°C Sécherheets-Cutoff",
            de: "80°C Sicherheitsabschaltung",
            fr: "Arrêt de sécurité à 80°C"
        },

        /* ---- Two-lens layout: at-a-glance metric chips ---- */
        "project.pif.glance.machines.label": {
            en: "networked machines",
            pt: "máquinas em rede",
            lu: "vernetzte Maschinnen",
            de: "vernetzte Maschinen",
            fr: "machines en réseau"
        },
        "project.pif.glance.sensors.label": {
            en: "environmental sensors",
            pt: "sensores ambientais",
            lu: "Ëmweltsensoren",
            de: "Umweltsensoren",
            fr: "capteurs environnementaux"
        },
        "project.pif.glance.zones.label": {
            en: "VLAN-segmented zones",
            pt: "zonas segmentadas por VLAN",
            lu: "VLAN-segmentéiert Zonen",
            de: "VLAN-segmentierte Zonen",
            fr: "zones segmentées par VLAN"
        },
        "project.pif.glance.docs.label": {
            en: "pages of documentation",
            pt: "páginas de documentação",
            lu: "Säiten Dokumentatioun",
            de: "Seiten Dokumentation",
            fr: "pages de documentation"
        },

        /* ---- Architecture diagram ---- */
        "project.pif.arch.title": {
            en: "How the system fits together",
            pt: "Como o sistema se encaixa",
            lu: "Wéi de System zesummespillt",
            de: "Wie das System zusammenpasst",
            fr: "Comment le système s'articule"
        },
        "project.pif.arch.strip": {
            en: "System & network flow",
            pt: "Fluxo do sistema e da rede",
            lu: "System- a Netzwierkfluss",
            de: "System- und Netzwerkfluss",
            fr: "Flux système et réseau"
        },
        "project.pif.arch.plant": {
            en: "Plant + Sensors",
            pt: "Planta + Sensores",
            lu: "Planz + Sensoren",
            de: "Pflanze + Sensoren",
            fr: "Plante + Capteurs"
        },
        "project.pif.arch.wifi": {
            en: "Wi-Fi (WPA2)",
            pt: "Wi-Fi (WPA2)",
            lu: "Wi-Fi (WPA2)",
            de: "Wi-Fi (WPA2)",
            fr: "Wi-Fi (WPA2)"
        },
        "project.pif.arch.cabinet": {
            en: "Server & network cabinet",
            pt: "Armário de servidores e rede",
            lu: "Server- a Netzwierkschaf",
            de: "Server- und Netzwerkschrank",
            fr: "Armoire serveurs et réseau"
        },
        "project.pif.arch.router": {
            en: "Router",
            pt: "Router",
            lu: "Router",
            de: "Router",
            fr: "Routeur"
        },
        "project.pif.arch.internet": {
            en: "Internet (ISP)",
            pt: "Internet (ISP)",
            lu: "Internet (ISP)",
            de: "Internet (ISP)",
            fr: "Internet (FAI)"
        },
        "project.pif.arch.note": {
            en: "Sensor nodes authenticate by MAC address and only reach the hub over the local Wi-Fi; web and FTP access from outside passes through the router's NAT and port-based ACLs.",
            pt: "Os nós sensores autenticam-se por endereço MAC e só chegam ao hub pela Wi-Fi local; o acesso web e FTP do exterior passa pelo NAT do router e por ACLs baseadas em portas.",
            lu: "Sensor-Noden authentifizéiere sech iwwer hir MAC-Adress an erreechen den Hub nëmmen iwwer dat lokaalt Wi-Fi; Web- a FTP-Zougang vu baussen leeft iwwer den NAT vum Router an iwwer port-baséiert ACLen.",
            de: "Sensor-Nodes authentifizieren sich per MAC-Adresse und erreichen den Hub nur über das lokale Wi-Fi; Web- und FTP-Zugriff von außen läuft über das NAT des Routers und port-basierte ACLs.",
            fr: "Les nœuds capteurs s'authentifient par adresse MAC et n'atteignent le hub que via le Wi-Fi local ; l'accès web et FTP depuis l'extérieur passe par le NAT du routeur et des ACL basées sur les ports."
        },

        /* ---- Overview "what it actually does" cards ---- */
        "project.pif.does.title": {
            en: "What it actually does",
            pt: "O que faz na prática",
            lu: "Wat et tatsächlech mécht",
            de: "Was es tatsächlich macht",
            fr: "Ce qu'il fait concrètement"
        },
        "project.pif.does.water.title": {
            en: "Waters plants on its own",
            pt: "Rega as plantas sozinho",
            lu: "Begéisst d'Planzen vu selwer",
            de: "Gießt Pflanzen von selbst",
            fr: "Arrose les plantes tout seul"
        },
        "project.pif.does.water.desc": {
            en: "It senses dry soil and runs the pump automatically, and switches on a grow light when the room gets too dark.",
            pt: "Deteta o solo seco e liga a bomba automaticamente, e acende uma luz de crescimento quando o ambiente fica demasiado escuro.",
            lu: "Et erkennt drëschene Buedem a leeft d'Pompel automatesch, an et mécht e Grow-Liicht un, wann et am Raum ze däischter gëtt.",
            de: "Es erkennt trockene Erde und startet die Pumpe automatisch und schaltet ein Wachstumslicht ein, wenn es im Raum zu dunkel wird.",
            fr: "Il détecte un sol sec et lance la pompe automatiquement, et allume une lampe de croissance quand la pièce devient trop sombre."
        },
        "project.pif.does.dashboard.title": {
            en: "Live dashboard on a touchscreen",
            pt: "Painel ao vivo num ecrã tátil",
            lu: "Live-Dashboard op engem Touchscreen",
            de: "Live-Dashboard auf einem Touchscreen",
            fr: "Tableau de bord en direct sur écran tactile"
        },
        "project.pif.does.dashboard.desc": {
            en: "Real-time charts for temperature, light and moisture — with schedules and history, on a small touchscreen and in any browser.",
            pt: "Gráficos em tempo real de temperatura, luz e humidade — com agendamentos e histórico, num pequeno ecrã tátil e em qualquer navegador.",
            lu: "Echtzäit-Diagrammer fir Temperatur, Liicht a Fiichtegkeet — mat Zäitpläng an Historik, op engem klengen Touchscreen an an all Browser.",
            de: "Echtzeit-Diagramme für Temperatur, Licht und Feuchtigkeit — mit Zeitplänen und Verlauf, auf einem kleinen Touchscreen und in jedem Browser.",
            fr: "Des graphiques en temps réel pour la température, la lumière et l'humidité — avec planifications et historique, sur un petit écran tactile et dans n'importe quel navigateur."
        },
        "project.pif.does.network.title": {
            en: "An enterprise-style network",
            pt: "Uma rede ao estilo empresarial",
            lu: "E Netzwierk am Firmestil",
            de: "Ein Netzwerk im Unternehmensstil",
            fr: "Un réseau de type entreprise"
        },
        "project.pif.does.network.desc": {
            en: "A complete company-style network — separate secured zones, proper routing and a simulated internet provider — designed and tested end to end in Cisco Packet Tracer.",
            pt: "Uma rede completa ao estilo empresarial — zonas separadas e seguras, roteamento adequado e um fornecedor de internet simulado — concebida e testada de ponta a ponta no Cisco Packet Tracer.",
            lu: "E komplett Netzwierk am Firmestil — getrennten, geséchertene Zonen, richtegt Routing an e simuléierten Internet-Provider — vun A bis Z am Cisco Packet Tracer entworf an getest.",
            de: "Ein vollständiges Netzwerk im Unternehmensstil — getrennte, gesicherte Zonen, korrektes Routing und ein simulierter Internetanbieter — durchgängig in Cisco Packet Tracer entworfen und getestet.",
            fr: "Un réseau complet de type entreprise — zones séparées et sécurisées, routage correct et un fournisseur internet simulé — conçu et testé de bout en bout dans Cisco Packet Tracer."
        },
        "project.pif.does.backup.title": {
            en: "Backs itself up every night",
            pt: "Faz backup de si próprio todas as noites",
            lu: "Mécht all Nuecht selwer e Backup",
            de: "Sichert sich jede Nacht selbst",
            fr: "Se sauvegarde chaque nuit"
        },
        "project.pif.does.backup.desc": {
            en: "Every night it copies all its data to a second, mirrored server, so nothing is ever lost.",
            pt: "Todas as noites copia todos os seus dados para um segundo servidor espelhado, para que nada se perca.",
            lu: "All Nuecht kopéiert et all seng Donnéeën op en zweete, gespigelte Server, sou datt ni eppes verluer geet.",
            de: "Jede Nacht kopiert es alle Daten auf einen zweiten, gespiegelten Server, sodass nie etwas verloren geht.",
            fr: "Chaque nuit, il copie toutes ses données sur un second serveur en miroir, pour que rien ne soit jamais perdu."
        },

        /* ---- Technical layer-stack ---- */
        "project.pif.stack.title": {
            en: "What Runs On It",
            pt: "O que corre nele",
            lu: "Wat doudrop leeft",
            de: "Was darauf läuft",
            fr: "Ce qui tourne dessus"
        },
        "project.pif.stack.body": {
            en: "Four layers, built and wired together by hand: the sensor node and its firmware, the Raspberry Pi web platform, an automated backup server, and the enterprise network that ties them together.",
            pt: "Quatro camadas, construídas e ligadas à mão: o nó sensor e o seu firmware, a plataforma web em Raspberry Pi, um servidor de backups automatizado e a rede empresarial que os une.",
            lu: "Véier Schichten, mat der Hand gebaut a verbonnen: de Sensor-Node a säi Firmware, d'Raspberry-Pi-Web-Plattform, en automatiséierte Backup-Server, an d'Enterprise-Netzwierk dat se zesummebréngt.",
            de: "Vier Schichten, von Hand gebaut und verdrahtet: der Sensor-Node und seine Firmware, die Raspberry-Pi-Webplattform, ein automatisierter Backup-Server und das Enterprise-Netzwerk, das sie verbindet.",
            fr: "Quatre couches, construites et câblées à la main : le nœud capteur et son firmware, la plateforme web Raspberry Pi, un serveur de sauvegarde automatisé et le réseau d'entreprise qui les relie."
        },
        "project.pif.stack.node.title": {
            en: "Sensor Node & Firmware",
            pt: "Nó Sensor e Firmware",
            lu: "Sensor-Node & Firmware",
            de: "Sensor-Node & Firmware",
            fr: "Nœud capteur et firmware"
        },
        "project.pif.stack.node.auth": {
            en: "MAC-address auth & 80°C safety cutoff: each node identifies itself by MAC address before syncing, and the firmware force-stops the heater at 80°C.",
            pt: "Autenticação por endereço MAC e corte de segurança a 80°C: cada nó identifica-se pelo endereço MAC antes de sincronizar, e o firmware força a paragem do aquecedor aos 80°C.",
            lu: "Authentifikatioun iwwer MAC-Adress a 80°C Sécherheets-Cutoff: all Node identifizéiert sech iwwer seng MAC-Adress ier en synchroniséiert, an de Firmware stoppt d'Heizung forcéiert bei 80°C.",
            de: "MAC-Adress-Authentifizierung & 80°C-Sicherheitsabschaltung: Jeder Node identifiziert sich vor dem Sync per MAC-Adresse, und die Firmware stoppt die Heizung bei 80°C zwangsweise.",
            fr: "Authentification par adresse MAC et coupure de sécurité à 80°C : chaque nœud s'identifie par son adresse MAC avant de synchroniser, et le firmware arrête de force le chauffage à 80°C."
        },
        "project.pif.stack.hub.title": {
            en: "Hub Server & Web Platform",
            pt: "Servidor Hub e Plataforma Web",
            lu: "Hub-Server & Web-Plattform",
            de: "Hub-Server & Web-Plattform",
            fr: "Serveur hub et plateforme web"
        },
        "project.pif.stack.backup.title": {
            en: "Backup & Recovery",
            pt: "Backup e Recuperação",
            lu: "Backup & Erhuelung",
            de: "Backup & Wiederherstellung",
            fr: "Sauvegarde et restauration"
        },
        "project.pif.stack.backup.raid": {
            en: "Mirrored RAID1 storage: two 30 GB disks mirror each other, so a single drive failure loses no data.",
            pt: "Armazenamento RAID1 espelhado: dois discos de 30 GB espelham-se mutuamente, por isso a falha de um único disco não perde dados.",
            lu: "Gespigelte RAID1-Späicher: zwee 30-GB-Disken spigelen sech géigesäiteg, sou datt den Ausfall vun engem eenzegen Disk keng Donnéeë verléiert.",
            de: "Gespiegelter RAID1-Speicher: zwei 30-GB-Festplatten spiegeln sich gegenseitig, sodass der Ausfall einer einzelnen Platte keine Daten verliert.",
            fr: "Stockage RAID1 en miroir : deux disques de 30 Go se reflètent mutuellement, de sorte que la panne d'un seul disque ne perd aucune donnée."
        },
        "project.pif.stack.backup.auto": {
            en: "Fully automated: a scheduled Bash job runs every night, keeps a 30-day rotation, and logs every run.",
            pt: "Totalmente automatizado: uma tarefa Bash agendada corre todas as noites, mantém uma rotação de 30 dias e regista cada execução.",
            lu: "Komplett automatiséiert: e geplangte Bash-Job leeft all Nuecht, hält eng 30-Deeg-Rotatioun, a protokolléiert all Laf.",
            de: "Vollautomatisch: ein geplanter Bash-Job läuft jede Nacht, hält eine 30-Tage-Rotation und protokolliert jeden Lauf.",
            fr: "Entièrement automatisé : une tâche Bash planifiée s'exécute chaque nuit, conserve une rotation de 30 jours et journalise chaque exécution."
        },
        "project.pif.stack.net.title": {
            en: "Enterprise Network & Security",
            pt: "Rede Empresarial e Segurança",
            lu: "Enterprise-Netzwierk & Sécherheet",
            de: "Enterprise-Netzwerk & Sicherheit",
            fr: "Réseau d'entreprise et sécurité"
        },
        "project.pif.stack.net.hardening": {
            en: "Server hardening: SSL/TLS, Fail2Ban, a UFW firewall and prepared statements protect the hub against intrusion and SQL injection.",
            pt: "Endurecimento do servidor: SSL/TLS, Fail2Ban, uma firewall UFW e prepared statements protegem o hub contra intrusões e injeção de SQL.",
            lu: "Server-Härtung: SSL/TLS, Fail2Ban, eng UFW-Firewall a prepared Statements schützen den Hub géint Andréngen a SQL-Injektioun.",
            de: "Server-Härtung: SSL/TLS, Fail2Ban, eine UFW-Firewall und Prepared Statements schützen den Hub vor Eindringen und SQL-Injection.",
            fr: "Durcissement du serveur : SSL/TLS, Fail2Ban, un pare-feu UFW et des requêtes préparées protègent le hub contre les intrusions et l'injection SQL."
        },

        /* ---- Lessons cards (split title/desc) ---- */
        "project.pif.lessons.hardware.title": {
            en: "Hardware debugging is humbling",
            pt: "Depurar hardware ensina humildade",
            lu: "Hardware-Debugging mécht bescheiden",
            de: "Hardware-Debugging macht demütig",
            fr: "Le débogage matériel rend humble"
        },
        "project.pif.lessons.hardware.desc": {
            en: "Swapped resistors, wrong-pin soldering and sensor calibration taught me patience and attention to detail.",
            pt: "Resistores trocados, soldadura no pino errado e calibração de sensores ensinaram-me paciência e atenção ao detalhe.",
            lu: "Verwiesselt Resistoren, falsch Pin-Lötungen a Sensor-Kalibratioun hu mech Gedold an Detailpräzisioun geléiert.",
            de: "Vertauschte Widerstände, falsches Pin-Löten und Sensorkalibrierung lehrten mich Geduld und Liebe zum Detail.",
            fr: "Des résistances échangées, des soudures sur le mauvais pin et la calibration des capteurs m'ont appris la patience et le souci du détail."
        },
        "project.pif.lessons.fullstack.title": {
            en: "Full-stack means full responsibility",
            pt: "Full-stack significa responsabilidade total",
            lu: "Full-stack heescht voll Responsabilitéit",
            de: "Full-Stack heißt volle Verantwortung",
            fr: "Full-stack signifie pleine responsabilité"
        },
        "project.pif.lessons.fullstack.desc": {
            en: "From PCB to PHP, every layer had to work together — one bug anywhere breaks everything.",
            pt: "Do PCB ao PHP, cada camada tinha de funcionar em conjunto — um bug em qualquer ponto quebra tudo.",
            lu: "Vum PCB bis PHP huet all Schicht missen zesummeschaffen — ee Bug iergendwou brécht alles.",
            de: "Vom PCB bis PHP musste jede Schicht zusammenarbeiten — ein Bug irgendwo bricht alles.",
            fr: "Du PCB au PHP, chaque couche devait fonctionner ensemble — un bug n'importe où casse tout."
        },
        "project.pif.lessons.docs.title": {
            en: "Documentation is a skill",
            pt: "Documentar é uma competência",
            lu: "Dokumentatioun ass eng Fäegkeet",
            de: "Dokumentation ist eine Fähigkeit",
            fr: "La documentation est une compétence"
        },
        "project.pif.lessons.docs.desc": {
            en: "Writing 100+ pages of structured documentation with user stories, diagrams and test results was as challenging as the code.",
            pt: "Escrever mais de 100 páginas de documentação estruturada com user stories, diagramas e resultados de testes foi tão desafiante quanto o código.",
            lu: "Méi wéi 100 Säiten strukturéiert Dokumentatioun mat User Stories, Diagrammer an Testresultater ze schreiwen war esou usprochsvoll wéi de Code.",
            de: "Über 100 Seiten strukturierte Dokumentation mit User Stories, Diagrammen und Testergebnissen zu schreiben war so herausfordernd wie der Code.",
            fr: "Rédiger plus de 100 pages de documentation structurée avec user stories, diagrammes et résultats de tests était aussi difficile que le code."
        },
        "project.pif.lessons.security.title": {
            en: "Security matters from day one",
            pt: "A segurança importa desde o primeiro dia",
            lu: "Sécherheet zielt vum éischten Dag un",
            de: "Sicherheit zählt von Tag eins an",
            fr: "La sécurité compte dès le premier jour"
        },
        "project.pif.lessons.security.desc": {
            en: "Fail2Ban, SSL, UFW and prepared statements taught me to think about security at every layer.",
            pt: "Fail2Ban, SSL, UFW e prepared statements ensinaram-me a pensar em segurança em todas as camadas.",
            lu: "Fail2Ban, SSL, UFW a prepared Statements hu mech geléiert, Sécherheet op all Schicht ze bedenken.",
            de: "Fail2Ban, SSL, UFW und Prepared Statements lehrten mich, Sicherheit in jeder Schicht mitzudenken.",
            fr: "Fail2Ban, SSL, UFW et les requêtes préparées m'ont appris à penser la sécurité à chaque couche."
        },

        "project.pif.name": {
            en: "PIF - Personal Information Form",
            pt: "PIF - Formulário de Informações Pessoais",
            lu: "PIF - Personal Informatiouns Formular",
            de: "PIF - Persönliches Informationsformular",
            fr: "PIF - Formulaire d'Informations Personnelles"
        }
    };
    Object.assign(translations, extra);
})();
