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
            en: "Network topology in Cisco Packet Tracer: Home office network (IoT nodes, PlantimeterAP) connected to company office (servers, VLANs) via ISR4331 router, with DNS routing to Google Public DNS.",
            pt: "Topologia de rede no Cisco Packet Tracer: Rede de escritório doméstico (nós IoT, PlantimeterAP) conectada ao escritório da empresa (servidores, VLANs) via router ISR4331, com roteamento DNS para Google Public DNS.",
            lu: "Netzwierk Topologie am Cisco Packet Tracer: Home Office Netzwierk (IoT Node, PlantimeterAP) verbonnen mat Firmen Büro (Server, VLANen) iwwer ISR4331 Router, mat DNS Routing zu Google Public DNS.",
            de: "Netzwerktopologie in Cisco Packet Tracer: Home-Office-Netzwerk (IoT-Knoten, PlantimeterAP) verbunden mit Firmenbüro (Server, VLANs) über ISR4331-Router, mit DNS-Routing zu Google Public DNS.",
            fr: "Topologie réseau dans Cisco Packet Tracer : Réseau de bureau à domicile (nœuds IoT, PlantimeterAP) connecté au bureau de l'entreprise (serveurs, VLANs) via routeur ISR4331, avec routage DNS vers Google Public DNS."
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
