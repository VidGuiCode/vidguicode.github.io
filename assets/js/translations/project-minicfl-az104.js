/**
 * MiniCFL — Azure AZ-104 Demonstration project page translations.
 * Languages: en, pt, lu, de, fr
 *
 * Card title/desc live in core.js (projects.minicfl-az104.title / .desc).
 * Page-specific keys are prefixed project.minicfl-az104.* and defined here.
 * Tech chips are language-neutral and hardcoded in the HTML (no keys).
 */

(function () {
    'use strict';
    const extra = {
        "project.minicfl-az104.badge": {
            en: "CLOUD · AZ-104",
            pt: "CLOUD · AZ-104",
            lu: "CLOUD · AZ-104",
            de: "CLOUD · AZ-104",
            fr: "CLOUD · AZ-104"
        },

        "project.minicfl-az104.glance.domains.label": {
            en: "AZ-104 skill areas proven",
            pt: "áreas de competência AZ-104 comprovadas",
            lu: "AZ-104 Kompetenzberäicher bewisen",
            de: "nachgewiesene AZ-104-Kompetenzbereiche",
            fr: "domaines de compétences AZ-104 prouvés"
        },
        "project.minicfl-az104.glance.regions.label": {
            en: "environments in two Azure regions",
            pt: "ambientes em duas regiões Azure",
            lu: "Ëmgéigenden an zwou Azure-Regiounen",
            de: "Umgebungen in zwei Azure-Regionen",
            fr: "environnements dans deux régions Azure"
        },
        "project.minicfl-az104.glance.stations.label": {
            en: "stations on the simulated line",
            pt: "estações na linha simulada",
            lu: "Statiounen op der simuléierter Streck",
            de: "Stationen auf der simulierten Strecke",
            fr: "gares sur la ligne simulée"
        },
        "project.minicfl-az104.glance.timer.label": {
            en: "train state refresh by a timer",
            pt: "atualização do estado do comboio por um timer",
            lu: "Zuchstatus-Aktualiséierung duerch en Timer",
            de: "Zugstatus-Aktualisierung durch einen Timer",
            fr: "actualisation de l'état du train par un minuteur"
        },

        "project.minicfl-az104.arch.title": {
            en: "How it fits together",
            pt: "Como tudo se encaixa",
            lu: "Wéi alles zesummespillt",
            de: "Wie alles zusammenpasst",
            fr: "Comment tout s'assemble"
        },
        "project.minicfl-az104.arch.users": {
            en: "Users (browser)",
            pt: "Utilizadores (navegador)",
            lu: "Benotzer (Browser)",
            de: "Benutzer (Browser)",
            fr: "Utilisateurs (navigateur)"
        },
        "project.minicfl-az104.arch.app.title": {
            en: "Web App for Containers",
            pt: "Web App for Containers",
            lu: "Web App for Containers",
            de: "Web App for Containers",
            fr: "Web App for Containers"
        },
        "project.minicfl-az104.arch.app.meta": {
            en: "App Service · image from ACR",
            pt: "App Service · imagem do ACR",
            lu: "App Service · Image aus dem ACR",
            de: "App Service · Image aus der ACR",
            fr: "App Service · image depuis l'ACR"
        },
        "project.minicfl-az104.arch.vnetlink": {
            en: "VNet integration",
            pt: "Integração com VNet",
            lu: "VNet-Integratioun",
            de: "VNet-Integration",
            fr: "Intégration VNet"
        },
        "project.minicfl-az104.arch.vnet": {
            en: "Private VNet (snet-web / snet-db · NSGs)",
            pt: "VNet privada (snet-web / snet-db · NSGs)",
            lu: "Privat VNet (snet-web / snet-db · NSGen)",
            de: "Privates VNet (snet-web / snet-db · NSGs)",
            fr: "VNet privé (snet-web / snet-db · NSGs)"
        },
        "project.minicfl-az104.arch.db.title": {
            en: "PostgreSQL database VM",
            pt: "VM de base de dados PostgreSQL",
            lu: "PostgreSQL-Datebank-VM",
            de: "PostgreSQL-Datenbank-VM",
            fr: "VM de base de données PostgreSQL"
        },
        "project.minicfl-az104.arch.db.meta": {
            en: "snet-db · managed disk · public DB access denied",
            pt: "snet-db · disco gerido · acesso público à BD negado",
            lu: "snet-db · managed Disk · ëffentlechen DB-Zougrëff verweigert",
            de: "snet-db · Managed Disk · öffentlicher DB-Zugriff verweigert",
            fr: "snet-db · disque managé · accès public à la BD refusé"
        },
        "project.minicfl-az104.arch.fn.title": {
            en: "Azure Function (timer)",
            pt: "Azure Function (timer)",
            lu: "Azure Function (Timer)",
            de: "Azure Function (Timer)",
            fr: "Azure Function (minuteur)"
        },
        "project.minicfl-az104.arch.fn.meta": {
            en: "runs every minute · writes train state",
            pt: "executa a cada minuto · grava o estado do comboio",
            lu: "leeft all Minutt · schreift den Zuchstatus",
            de: "läuft jede Minute · schreibt den Zugstatus",
            fr: "s'exécute chaque minute · écrit l'état du train"
        },
        "project.minicfl-az104.arch.mon.title": {
            en: "Azure Monitor",
            pt: "Azure Monitor",
            lu: "Azure Monitor",
            de: "Azure Monitor",
            fr: "Azure Monitor"
        },
        "project.minicfl-az104.arch.mon.meta": {
            en: "metrics · logs · alerts · action groups",
            pt: "métricas · logs · alertas · action groups",
            lu: "Metriken · Logs · Alerten · Action Groups",
            de: "Metriken · Logs · Alerts · Action Groups",
            fr: "métriques · logs · alertes · action groups"
        },
        "project.minicfl-az104.arch.note": {
            en: "Everything sits under a management-group hierarchy with Entra ID + RBAC, Azure Policy, tags and budget alerts. The whole stack is duplicated across rg-minicfl-dev (France Central) and rg-minicfl-prod (Sweden Central).",
            pt: "Tudo assenta numa hierarquia de grupos de gestão com Entra ID + RBAC, Azure Policy, tags e alertas de orçamento. Toda a stack está duplicada entre rg-minicfl-dev (France Central) e rg-minicfl-prod (Sweden Central).",
            lu: "Alles läit ënner enger Management-Group-Hierarchie mat Entra ID + RBAC, Azure Policy, Tags a Budget-Alerten. De ganze Stack ass duebel opgebaut iwwer rg-minicfl-dev (France Central) a rg-minicfl-prod (Sweden Central).",
            de: "Alles liegt unter einer Management-Group-Hierarchie mit Entra ID + RBAC, Azure Policy, Tags und Budget-Alerts. Der gesamte Stack ist über rg-minicfl-dev (France Central) und rg-minicfl-prod (Sweden Central) dupliziert.",
            fr: "Tout repose sur une hiérarchie de groupes d'administration avec Entra ID + RBAC, Azure Policy, étiquettes et alertes de budget. Toute la stack est dupliquée entre rg-minicfl-dev (France Central) et rg-minicfl-prod (Sweden Central)."
        },

        "project.minicfl-az104.does.title": {
            en: "What it actually does",
            pt: "O que realmente faz",
            lu: "Wat et tatsächlech mécht",
            de: "Was es tatsächlich macht",
            fr: "Ce qu'il fait vraiment"
        },
        "project.minicfl-az104.does.track.title": {
            en: "A live train tracker",
            pt: "Um rastreador de comboio ao vivo",
            lu: "E live Zuch-Tracker",
            de: "Ein Live-Zugtracker",
            fr: "Un suivi de train en direct"
        },
        "project.minicfl-az104.does.track.desc": {
            en: "A web page shows one CFL train moving between Petange and Luxembourg — where it is, the next stop, planned vs. real arrival, and how late it is.",
            pt: "Uma página web mostra um comboio CFL a circular entre Petange e Luxemburgo — onde está, a próxima paragem, a chegada prevista vs. real e o atraso.",
            lu: "Eng Websäit weist ee CFL-Zuch deen tëscht Petange a Lëtzebuerg fiert — wou en ass, déi nächst Statioun, geplangten géint reellen Arrivée an de Retard.",
            de: "Eine Webseite zeigt einen CFL-Zug, der zwischen Petange und Luxemburg fährt — wo er ist, die nächste Station, geplante vs. tatsächliche Ankunft und die Verspätung.",
            fr: "Une page web montre un train CFL circulant entre Petange et Luxembourg — où il se trouve, le prochain arrêt, l'arrivée prévue vs. réelle et le retard."
        },
        "project.minicfl-az104.does.admin.title": {
            en: "Built like a cloud admin",
            pt: "Construído como um administrador de cloud",
            lu: "Opgebaut wéi e Cloud-Administrateur",
            de: "Aufgebaut wie ein Cloud-Administrator",
            fr: "Conçu comme un administrateur cloud"
        },
        "project.minicfl-az104.does.admin.desc": {
            en: "Real users, groups and permissions, organised subscriptions, and rules that decide who can change what — the everyday job of an Azure administrator.",
            pt: "Utilizadores, grupos e permissões reais, subscrições organizadas e regras que decidem quem pode alterar o quê — o trabalho diário de um administrador Azure.",
            lu: "Reell Benotzer, Gruppen a Permissiounen, organiséiert Subscriptiounen a Reegelen déi entscheeden wien wat ka änneren — den alldeegleche Job vun engem Azure-Administrateur.",
            de: "Echte Benutzer, Gruppen und Berechtigungen, organisierte Subscriptions und Regeln, die festlegen, wer was ändern darf — die tägliche Arbeit eines Azure-Administrators.",
            fr: "De vrais utilisateurs, groupes et permissions, des abonnements organisés et des règles qui décident qui peut modifier quoi — le travail quotidien d'un administrateur Azure."
        },
        "project.minicfl-az104.does.secure.title": {
            en: "Private by design",
            pt: "Privado por conceção",
            lu: "Privat vun Design",
            de: "Privat durch Design",
            fr: "Privé par conception"
        },
        "project.minicfl-az104.does.secure.desc": {
            en: "Only the web page faces the internet. The database lives on a private network and can't be reached from outside.",
            pt: "Apenas a página web está exposta à internet. A base de dados vive numa rede privada e não pode ser acedida do exterior.",
            lu: "Nëmmen d'Websäit ass um Internet. D'Datebank läit op engem private Netzwierk a kann net vu baussen erreecht ginn.",
            de: "Nur die Webseite ist mit dem Internet verbunden. Die Datenbank liegt in einem privaten Netzwerk und ist von außen nicht erreichbar.",
            fr: "Seule la page web est exposée à Internet. La base de données réside sur un réseau privé et n'est pas accessible de l'extérieur."
        },
        "project.minicfl-az104.does.watch.title": {
            en: "Watched and on budget",
            pt: "Monitorizado e dentro do orçamento",
            lu: "Iwwerwaacht an am Budget",
            de: "Überwacht und im Budget",
            fr: "Surveillé et dans le budget"
        },
        "project.minicfl-az104.does.watch.desc": {
            en: "Dashboards, alerts and spending limits keep an eye on health and cost, so nothing breaks or overspends silently.",
            pt: "Dashboards, alertas e limites de gasto mantêm a saúde e o custo sob controlo, para que nada falhe ou gaste em excesso silenciosamente.",
            lu: "Dashboards, Alerten a Ausgabelimitten halen e Bléck op Gesondheet a Käschten, sou datt näischt roueg kabutt geet oder ze vill ausgëtt.",
            de: "Dashboards, Alerts und Ausgabenlimits behalten Zustand und Kosten im Blick, damit nichts unbemerkt ausfällt oder zu viel kostet.",
            fr: "Tableaux de bord, alertes et limites de dépenses surveillent la santé et le coût, pour que rien ne tombe en panne ou ne dépense trop en silence."
        },

        "project.minicfl-az104.section.intro.title": {
            en: "A train you can see, an environment you can administer",
            pt: "Um comboio que se vê, um ambiente que se administra",
            lu: "En Zuch deen ee gesäit, eng Ëmgéigend déi een administréiert",
            de: "Ein Zug, den man sieht, eine Umgebung, die man administriert",
            fr: "Un train que l'on voit, un environnement que l'on administre"
        },
        "project.minicfl-az104.section.intro.body": {
            en: "MiniCFL is a three-person AZ-104 (Azure Administrator) demonstration project we built for the BTS Cloud Computing course. The visible part is deliberately small: a simulator that moves one CFL train along the real Petange → Luxembourg line and shows its live position, next stop, delay and timetable. The train exists to give every Azure resource a concrete reason to be there. Around it our team built — and administered — a complete environment covering the five AZ-104 skill areas, deployed across a development and a production environment in two different Azure regions.",
            pt: "O MiniCFL é um projeto de demonstração AZ-104 (Administrador Azure) de três pessoas que construímos para o curso BTS Cloud Computing. A parte visível é deliberadamente pequena: um simulador que move um comboio CFL ao longo da linha real Petange → Luxemburgo e mostra a sua posição ao vivo, próxima paragem, atraso e horário. O comboio existe para dar a cada recurso Azure uma razão concreta de existir. À sua volta, a nossa equipa construiu — e administrou — um ambiente completo que cobre as cinco áreas de competência do AZ-104, implementado num ambiente de desenvolvimento e num de produção em duas regiões Azure diferentes.",
            lu: "MiniCFL ass en AZ-104 (Azure Administrateur) Demonstratiounsprojet vun dräi Persounen, dee mir fir de BTS Cloud Computing Cours gebaut hunn. Den siichtbaren Deel ass bewosst kleng: e Simulator deen ee CFL-Zuch laanscht déi reell Streck Petange → Lëtzebuerg beweegt an seng live Positioun, déi nächst Statioun, de Retard an den Horaire weist. Den Zuch existéiert fir all Azure-Ressource e konkrete Grond ze ginn do ze sinn. Ronderëm huet eis Equipe eng komplett Ëmgéigend gebaut — a administréiert — déi déi fënnef AZ-104 Kompetenzberäicher ofdeckt, deployéiert op enger Dev- an enger Prod-Ëmgéigend an zwou verschiddenen Azure-Regiounen.",
            de: "MiniCFL ist ein AZ-104- (Azure-Administrator-) Demonstrationsprojekt von drei Personen, das wir für den BTS-Cloud-Computing-Kurs gebaut haben. Der sichtbare Teil ist bewusst klein: ein Simulator, der einen CFL-Zug entlang der echten Strecke Petange → Luxemburg bewegt und seine Live-Position, die nächste Station, Verspätung und den Fahrplan zeigt. Der Zug existiert, um jeder Azure-Ressource einen konkreten Daseinsgrund zu geben. Darum herum hat unser Team eine vollständige Umgebung gebaut — und administriert —, die die fünf AZ-104-Kompetenzbereiche abdeckt und über eine Entwicklungs- und eine Produktionsumgebung in zwei verschiedenen Azure-Regionen bereitgestellt ist.",
            fr: "MiniCFL est un projet de démonstration AZ-104 (Administrateur Azure) à trois personnes que nous avons construit pour le cursus BTS Cloud Computing. La partie visible est volontairement modeste : un simulateur qui fait circuler un train CFL le long de la vraie ligne Petange → Luxembourg et affiche sa position en direct, le prochain arrêt, le retard et l'horaire. Le train existe pour donner à chaque ressource Azure une raison d'être concrète. Autour de lui, notre équipe a bâti — et administré — un environnement complet couvrant les cinq domaines de compétences AZ-104, déployé sur un environnement de développement et un de production dans deux régions Azure différentes."
        },
        "project.minicfl-az104.image.sim.caption": {
            en: "The MiniCFL web app: the train lane, six stations, the live status panel and the timetable.",
            pt: "A aplicação web MiniCFL: a faixa do comboio, seis estações, o painel de estado ao vivo e o horário.",
            lu: "D'MiniCFL Web-App: d'Zuchstreck, sechs Statiounen, de live Status-Panel an den Horaire.",
            de: "Die MiniCFL-Web-App: die Zugstrecke, sechs Stationen, das Live-Status-Panel und der Fahrplan.",
            fr: "L'application web MiniCFL : la voie du train, six gares, le panneau d'état en direct et l'horaire."
        },

        "project.minicfl-az104.team.title": {
            en: "Who built what",
            pt: "Quem fez o quê",
            lu: "Wien huet wat gebaut",
            de: "Wer was gebaut hat",
            fr: "Qui a fait quoi"
        },
        "project.minicfl-az104.team.intro": {
            en: "Three of us split the environment by AZ-104 skill area, so each part had a clear owner.",
            pt: "Os três dividimos o ambiente por área de competência do AZ-104, para que cada parte tivesse um responsável claro.",
            lu: "Mir dräi hunn d'Ëmgéigend no AZ-104 Kompetenzberäich opgedeelt, sou datt all Deel e kloere Responsabelen hat.",
            de: "Wir drei haben die Umgebung nach AZ-104-Kompetenzbereich aufgeteilt, sodass jeder Teil einen klaren Verantwortlichen hatte.",
            fr: "À trois, nous avons réparti l'environnement par domaine de compétences AZ-104, pour que chaque partie ait un responsable clair."
        },
        "project.minicfl-az104.team.donnny.role": {
            en: "Identity & governance — the management-group hierarchy, RBAC role assignments, users and groups, and budgets.",
            pt: "Identidade e governação — a hierarquia de grupos de gestão, as atribuições de funções RBAC, os utilizadores e grupos, e os orçamentos.",
            lu: "Identitéit & Governance — d'Management-Group-Hierarchie, d'RBAC-Rolle-Zouweisungen, d'Benotzer a Gruppen, an d'Budgeten.",
            de: "Identität & Governance — die Management-Group-Hierarchie, die RBAC-Rollenzuweisungen, Benutzer und Gruppen sowie die Budgets.",
            fr: "Identité et gouvernance — la hiérarchie de groupes d'administration, les attributions de rôles RBAC, les utilisateurs et groupes, et les budgets."
        },
        "project.minicfl-az104.team.marios.role": {
            en: "Networking & database — the NSGs, the VNet, and the VM running the PostgreSQL database.",
            pt: "Rede e base de dados — as NSGs, a VNet e a VM que executa a base de dados PostgreSQL.",
            lu: "Networking & Datebank — d'NSGen, d'VNet, an d'VM op där d'PostgreSQL-Datebank leeft.",
            de: "Networking & Datenbank — die NSGs, das VNet und die VM, auf der die PostgreSQL-Datenbank läuft.",
            fr: "Réseau et base de données — les NSGs, le VNet, et la VM qui exécute la base de données PostgreSQL."
        },
        "project.minicfl-az104.team.me.name": {
            en: "Guilherme (me)",
            pt: "Guilherme (eu)",
            lu: "Guilherme (ech)",
            de: "Guilherme (ich)",
            fr: "Guilherme (moi)"
        },
        "project.minicfl-az104.team.me.role": {
            en: "Compute, app & monitoring — the containerised web app on App Service, ACR, the Azure Function timer, and Azure Monitor.",
            pt: "Computação, app e monitorização — a aplicação web em contentor no App Service, o ACR, o timer da Azure Function e o Azure Monitor.",
            lu: "Compute, App & Monitoring — déi containeriséiert Web-App um App Service, den ACR, den Azure-Function-Timer, an den Azure Monitor.",
            de: "Compute, App & Monitoring — die containerisierte Web-App auf App Service, die ACR, der Azure-Function-Timer und Azure Monitor.",
            fr: "Calcul, app et surveillance — l'application web conteneurisée sur App Service, l'ACR, le minuteur Azure Function et Azure Monitor."
        },
        "project.minicfl-az104.section.what.title": {
            en: "What runs underneath",
            pt: "O que corre por baixo",
            lu: "Wat ënnendrënner leeft",
            de: "Was darunter läuft",
            fr: "Ce qui tourne en dessous"
        },
        "project.minicfl-az104.section.what.body": {
            en: "The environment is organised the way the exam expects: governance and identity first, then compute, networking, and operations. Each layer maps to an AZ-104 skill area and to evidence collected in the final report.",
            pt: "O ambiente está organizado como o exame espera: governação e identidade primeiro, depois computação, rede e operações. Cada camada corresponde a uma área de competência do AZ-104 e a evidências recolhidas no relatório final.",
            lu: "D'Ëmgéigend ass organiséiert wéi den Examen et erwaart: Governance an Identitéit fir d'éischt, dann Compute, Networking an Operatiounen. All Schicht entsprécht engem AZ-104 Kompetenzberäich an Evidenz déi am finale Rapport gesammelt gëtt.",
            de: "Die Umgebung ist so organisiert, wie es die Prüfung erwartet: zuerst Governance und Identität, dann Compute, Networking und Operations. Jede Schicht entspricht einem AZ-104-Kompetenzbereich und den im Abschlussbericht gesammelten Nachweisen.",
            fr: "L'environnement est organisé comme l'attend l'examen : d'abord la gouvernance et l'identité, puis le calcul, le réseau et l'exploitation. Chaque couche correspond à un domaine de compétences AZ-104 et aux preuves recueillies dans le rapport final."
        },

        "project.minicfl-az104.section.what.identity.title": {
            en: "Identity & Governance",
            pt: "Identidade e Governação",
            lu: "Identitéit & Governance",
            de: "Identität & Governance",
            fr: "Identité et gouvernance"
        },
        "project.minicfl-az104.section.what.identity.hierarchy": {
            en: "<strong>Management-group hierarchy</strong>: Tenant Root → Students → B1CLC → b1clc-beelen, with two student subscriptions (GloDo, VidGu) underneath — a real governance scope above the resource-group level.",
            pt: "<strong>Hierarquia de grupos de gestão</strong>: Tenant Root → Students → B1CLC → b1clc-beelen, com duas subscrições de estudante (GloDo, VidGu) por baixo — um âmbito de governação real acima do nível dos grupos de recursos.",
            lu: "<strong>Management-Group-Hierarchie</strong>: Tenant Root → Students → B1CLC → b1clc-beelen, mat zwou Studente-Subscriptiounen (GloDo, VidGu) drënner — e reelle Governance-Scope iwwer dem Resource-Group-Niveau.",
            de: "<strong>Management-Group-Hierarchie</strong>: Tenant Root → Students → B1CLC → b1clc-beelen, mit zwei Studenten-Subscriptions (GloDo, VidGu) darunter — ein echter Governance-Scope oberhalb der Resource-Group-Ebene.",
            fr: "<strong>Hiérarchie de groupes d'administration</strong> : Tenant Root → Students → B1CLC → b1clc-beelen, avec deux abonnements étudiants (GloDo, VidGu) en dessous — une véritable portée de gouvernance au-dessus du niveau des groupes de ressources."
        },
        "project.minicfl-az104.section.what.identity.rbac": {
            en: "<strong>Least-privilege RBAC</strong>: Entra ID users and groups for admins, developers and readers, with roles assigned at resource-group scope (Contributor / Reader) instead of handing out Owner.",
            pt: "<strong>RBAC com privilégio mínimo</strong>: utilizadores e grupos do Entra ID para admins, programadores e leitores, com funções atribuídas ao âmbito do grupo de recursos (Contributor / Reader) em vez de distribuir Owner.",
            lu: "<strong>RBAC mat mannste Privileg</strong>: Entra-ID-Benotzer a Gruppen fir Admins, Developer a Lieser, mat Rollen um Resource-Group-Scope (Contributor / Reader) zougewisen amplaz Owner ze verdeelen.",
            de: "<strong>RBAC mit geringsten Rechten</strong>: Entra-ID-Benutzer und -Gruppen für Admins, Entwickler und Leser, mit Rollen auf Resource-Group-Ebene (Contributor / Reader) statt verteiltem Owner.",
            fr: "<strong>RBAC au moindre privilège</strong> : utilisateurs et groupes Entra ID pour les admins, développeurs et lecteurs, avec des rôles attribués au niveau du groupe de ressources (Contributor / Reader) plutôt que de distribuer Owner."
        },
        "project.minicfl-az104.section.what.identity.policy": {
            en: "<strong>Policy, tags & budgets</strong>: Azure Policy enforces allowed regions and required tags; budget alerts protect the student credit before it runs out.",
            pt: "<strong>Policy, tags e orçamentos</strong>: o Azure Policy impõe regiões permitidas e tags obrigatórias; os alertas de orçamento protegem o crédito de estudante antes de se esgotar.",
            lu: "<strong>Policy, Tags & Budgeten</strong>: Azure Policy erzwéngt erlaabt Regiounen an obligatoresch Tags; Budget-Alerten schützen de Studentekredit ier en eidel ass.",
            de: "<strong>Policy, Tags & Budgets</strong>: Azure Policy erzwingt erlaubte Regionen und Pflicht-Tags; Budget-Alerts schützen das Studentenguthaben, bevor es aufgebraucht ist.",
            fr: "<strong>Policy, étiquettes et budgets</strong> : Azure Policy impose les régions autorisées et les étiquettes obligatoires ; les alertes de budget protègent le crédit étudiant avant qu'il ne s'épuise."
        },

        "project.minicfl-az104.section.what.compute.title": {
            en: "Compute",
            pt: "Computação",
            lu: "Compute",
            de: "Compute",
            fr: "Calcul"
        },
        "project.minicfl-az104.section.what.compute.web": {
            en: "<strong>Containerised web UI</strong>: the simulator is built as a Docker image, pushed to Azure Container Registry, and run on App Service (Web App for Containers) — the live <code>app-minicfl-web-dev</code> site.",
            pt: "<strong>UI web em contentor</strong>: o simulador é construído como uma imagem Docker, enviado para o Azure Container Registry e executado no App Service (Web App for Containers) — o site ao vivo <code>app-minicfl-web-dev</code>.",
            lu: "<strong>Containeriséiert Web-UI</strong>: de Simulator gëtt als Docker-Image gebaut, an d'Azure Container Registry gepusht an um App Service (Web App for Containers) ausgefouert — déi live <code>app-minicfl-web-dev</code> Säit.",
            de: "<strong>Containerisierte Web-UI</strong>: der Simulator wird als Docker-Image gebaut, in die Azure Container Registry gepusht und auf App Service (Web App for Containers) ausgeführt — die Live-Site <code>app-minicfl-web-dev</code>.",
            fr: "<strong>Interface web conteneurisée</strong> : le simulateur est construit en image Docker, envoyé vers Azure Container Registry et exécuté sur App Service (Web App for Containers) — le site en direct <code>app-minicfl-web-dev</code>."
        },
        "project.minicfl-az104.section.what.compute.vm": {
            en: "<strong>Database VM (IaaS)</strong>: a small Azure VM with a managed disk hosts the PostgreSQL database that stores the route, stops, train state and update history.",
            pt: "<strong>VM de base de dados (IaaS)</strong>: uma pequena VM Azure com um disco gerido aloja a base de dados PostgreSQL que guarda o trajeto, paragens, estado do comboio e histórico de atualizações.",
            lu: "<strong>Datebank-VM (IaaS)</strong>: eng kleng Azure-VM mat engem managed Disk hostet d'PostgreSQL-Datebank déi d'Streck, d'Statiounen, den Zuchstatus an d'Update-Geschicht späichert.",
            de: "<strong>Datenbank-VM (IaaS)</strong>: eine kleine Azure-VM mit Managed Disk hostet die PostgreSQL-Datenbank, die Route, Stationen, Zugstatus und Update-Verlauf speichert.",
            fr: "<strong>VM de base de données (IaaS)</strong> : une petite VM Azure avec un disque managé héberge la base de données PostgreSQL qui stocke l'itinéraire, les arrêts, l'état du train et l'historique des mises à jour."
        },
        "project.minicfl-az104.section.what.compute.fn": {
            en: "<strong>Azure Function timer</strong>: a timer-triggered function fires every minute, recalculates the train's position, segment progress and delay, writes the new state to the database, and logs each run. It is backed by a storage account (<code>stminicfl001</code>) and authenticates with a managed identity.",
            pt: "<strong>Timer com Azure Function</strong>: uma função acionada por timer dispara a cada minuto, recalcula a posição do comboio, o progresso no segmento e o atraso, grava o novo estado na base de dados e regista cada execução. É suportada por uma conta de armazenamento (<code>stminicfl001</code>) e autentica-se com uma identidade gerida.",
            lu: "<strong>Azure-Function-Timer</strong>: eng Timer-ausgeléist Funktioun feiert all Minutt, berechent d'Zuchpositioun, de Segment-Fortschrëtt an de Retard nei, schreift den neie Status an d'Datebank a loggt all Laf. Si gëtt vun engem Storage Account (<code>stminicfl001</code>) ënnerstëtzt an authentifizéiert sech mat enger Managed Identity.",
            de: "<strong>Azure-Function-Timer</strong>: eine zeitgesteuerte Funktion löst jede Minute aus, berechnet Zugposition, Segmentfortschritt und Verspätung neu, schreibt den neuen Status in die Datenbank und protokolliert jeden Lauf. Sie wird von einem Storage Account (<code>stminicfl001</code>) gestützt und authentifiziert sich mit einer Managed Identity.",
            fr: "<strong>Minuteur Azure Function</strong> : une fonction déclenchée par minuteur s'exécute chaque minute, recalcule la position du train, l'avancement sur le segment et le retard, écrit le nouvel état dans la base de données et journalise chaque exécution. Elle s'appuie sur un compte de stockage (<code>stminicfl001</code>) et s'authentifie avec une identité managée."
        },

        "project.minicfl-az104.section.what.network.title": {
            en: "Networking",
            pt: "Rede",
            lu: "Networking",
            de: "Networking",
            fr: "Réseau"
        },
        "project.minicfl-az104.section.what.network.vnet": {
            en: "<strong>Segmented VNet</strong>: <code>vnet-minicfl-dev</code> splits a web subnet (<code>snet-web-dev</code>) from a database subnet (<code>snet-db-dev</code>) so the two tiers are isolated.",
            pt: "<strong>VNet segmentada</strong>: a <code>vnet-minicfl-dev</code> separa uma subnet web (<code>snet-web-dev</code>) de uma subnet de base de dados (<code>snet-db-dev</code>) para isolar as duas camadas.",
            lu: "<strong>Segmentéiert VNet</strong>: <code>vnet-minicfl-dev</code> trennt e Web-Subnet (<code>snet-web-dev</code>) vun engem Datebank-Subnet (<code>snet-db-dev</code>) sou datt déi zwou Schichten isoléiert sinn.",
            de: "<strong>Segmentiertes VNet</strong>: <code>vnet-minicfl-dev</code> trennt ein Web-Subnet (<code>snet-web-dev</code>) von einem Datenbank-Subnet (<code>snet-db-dev</code>), sodass die beiden Ebenen isoliert sind.",
            fr: "<strong>VNet segmenté</strong> : <code>vnet-minicfl-dev</code> sépare un sous-réseau web (<code>snet-web-dev</code>) d'un sous-réseau de base de données (<code>snet-db-dev</code>) afin d'isoler les deux niveaux."
        },
        "project.minicfl-az104.section.what.network.nsg": {
            en: "<strong>NSG rules</strong>: <code>nsg-web-dev</code> allows HTTP/HTTPS and restricts admin access; <code>nsg_db_dev</code> allows the app/function to reach the DB but denies all inbound public database access — proven with connectivity tests.",
            pt: "<strong>Regras de NSG</strong>: a <code>nsg-web-dev</code> permite HTTP/HTTPS e restringe o acesso de administração; a <code>nsg_db_dev</code> permite que a app/função aceda à BD mas nega todo o acesso público de entrada à base de dados — comprovado com testes de conectividade.",
            lu: "<strong>NSG-Reegelen</strong>: <code>nsg-web-dev</code> erlaabt HTTP/HTTPS a restrëngt den Admin-Zougrëff; <code>nsg_db_dev</code> erlaabt der App/Funktioun op d'DB zouzegräifen, mä verbitt all ëffentlechen Datebank-Zougrëff vu baussen — bewisen mat Konnektivitéits-Tester.",
            de: "<strong>NSG-Regeln</strong>: <code>nsg-web-dev</code> erlaubt HTTP/HTTPS und beschränkt den Admin-Zugriff; <code>nsg_db_dev</code> erlaubt der App/Funktion den Zugriff auf die DB, verweigert aber jeglichen öffentlichen eingehenden Datenbankzugriff — nachgewiesen mit Konnektivitätstests.",
            fr: "<strong>Règles NSG</strong> : <code>nsg-web-dev</code> autorise HTTP/HTTPS et restreint l'accès admin ; <code>nsg_db_dev</code> autorise l'app/fonction à atteindre la BD mais refuse tout accès public entrant à la base de données — prouvé par des tests de connectivité."
        },
        "project.minicfl-az104.section.what.network.watcher": {
            en: "<strong>Network Watcher</strong>: connectivity checks confirm the web tier is reachable while the database stays private inside the VNet.",
            pt: "<strong>Network Watcher</strong>: as verificações de conectividade confirmam que a camada web está acessível enquanto a base de dados permanece privada dentro da VNet.",
            lu: "<strong>Network Watcher</strong>: Konnektivitéits-Checks bestätegen datt d'Web-Schicht erreechbar ass, wärend d'Datebank privat bannent der VNet bleift.",
            de: "<strong>Network Watcher</strong>: Konnektivitätsprüfungen bestätigen, dass die Web-Ebene erreichbar ist, während die Datenbank privat innerhalb des VNet bleibt.",
            fr: "<strong>Network Watcher</strong> : des vérifications de connectivité confirment que le niveau web est accessible tandis que la base de données reste privée à l'intérieur du VNet."
        },

        "project.minicfl-az104.section.what.ops.title": {
            en: "Monitoring & Operations",
            pt: "Monitorização e Operações",
            lu: "Monitoring & Operatiounen",
            de: "Monitoring & Operations",
            fr: "Surveillance et exploitation"
        },
        "project.minicfl-az104.section.what.ops.dash": {
            en: "<strong>One dashboard</strong>: a shared Azure Monitor dashboard, backed by Application Insights and a Log Analytics workspace, collects metrics for the VM, the App Service and the Function in a single view of platform health.",
            pt: "<strong>Um dashboard</strong>: um dashboard partilhado do Azure Monitor, suportado por Application Insights e por uma workspace de Log Analytics, recolhe métricas da VM, do App Service e da Function numa única vista da saúde da plataforma.",
            lu: "<strong>Ee Dashboard</strong>: e gedeelten Azure-Monitor-Dashboard, ënnerstëtzt vun Application Insights an enger Log-Analytics-Workspace, sammelt Metriken fir d'VM, den App Service an d'Function an enger eenzeger Vue vun der Plattform-Gesondheet.",
            de: "<strong>Ein Dashboard</strong>: ein gemeinsames Azure-Monitor-Dashboard, gestützt auf Application Insights und einen Log-Analytics-Workspace, sammelt Metriken für die VM, den App Service und die Function in einer einzigen Ansicht des Plattformzustands.",
            fr: "<strong>Un tableau de bord</strong> : un tableau de bord Azure Monitor partagé, appuyé sur Application Insights et un workspace Log Analytics, collecte les métriques de la VM, de l'App Service et de la Function dans une vue unique de la santé de la plateforme."
        },
        "project.minicfl-az104.section.what.ops.alerts": {
            en: "<strong>Alerts & smart detection</strong>: a Failure Anomalies smart detector and alert rules wired to an action group fire when the app is unavailable or the timer stops updating the train.",
            pt: "<strong>Alertas e deteção inteligente</strong>: um detetor inteligente de Failure Anomalies e regras de alerta ligadas a um action group disparam quando a aplicação fica indisponível ou o timer deixa de atualizar o comboio.",
            lu: "<strong>Alerten & Smart Detection</strong>: e Failure-Anomalies-Smart-Detector an Alert-Reegelen mat engem Action Group verbonne feieren wann d'App net verfügbar ass oder den Timer den Zuch net méi aktualiséiert.",
            de: "<strong>Alerts & Smart Detection</strong>: ein Failure-Anomalies-Smart-Detector und mit einer Action Group verknüpfte Alert-Regeln lösen aus, wenn die App nicht verfügbar ist oder der Timer den Zug nicht mehr aktualisiert.",
            fr: "<strong>Alertes et détection intelligente</strong> : un détecteur intelligent Failure Anomalies et des règles d'alerte reliées à un action group se déclenchent lorsque l'application est indisponible ou que le minuteur cesse de mettre à jour le train."
        },
        "project.minicfl-az104.section.what.ops.logs": {
            en: "<strong>Logs & cost</strong>: Log Analytics queries trace each simulation update, while budget alerts track spend against the project's total cost.",
            pt: "<strong>Logs e custo</strong>: consultas de Log Analytics rastreiam cada atualização da simulação, enquanto os alertas de orçamento acompanham os gastos face ao custo total do projeto.",
            lu: "<strong>Logs & Käschten</strong>: Log-Analytics-Ufroen verfollegen all Simulatiouns-Update, wärend Budget-Alerten d'Ausgaben am Verhältnis zu de Gesamtkäschte vum Projet verfollegen.",
            de: "<strong>Logs & Kosten</strong>: Log-Analytics-Abfragen verfolgen jedes Simulations-Update, während Budget-Alerts die Ausgaben gegen die Gesamtkosten des Projekts verfolgen.",
            fr: "<strong>Logs et coût</strong> : des requêtes Log Analytics tracent chaque mise à jour de la simulation, tandis que les alertes de budget suivent les dépenses par rapport au coût total du projet."
        },

        "project.minicfl-az104.section.what.sim.title": {
            en: "The simulation itself",
            pt: "A própria simulação",
            lu: "D'Simulatioun selwer",
            de: "Die Simulation selbst",
            fr: "La simulation elle-même"
        },
        "project.minicfl-az104.section.what.sim.route": {
            en: "<strong>Real route</strong>: Petange → Niederkorn → Differdange → Esch-sur-Alzette → Bettembourg → Luxembourg, then back, on a roughly 30-minute timetable.",
            pt: "<strong>Trajeto real</strong>: Petange → Niederkorn → Differdange → Esch-sur-Alzette → Bettembourg → Luxemburgo, e de volta, num horário de cerca de 30 minutos.",
            lu: "<strong>Reell Streck</strong>: Petange → Niederkorn → Déifferdeng → Esch-Uelzecht → Beetebuerg → Lëtzebuerg, an zréck, op engem Horaire vun ongeféier 30 Minutten.",
            de: "<strong>Echte Strecke</strong>: Petange → Niederkorn → Differdange → Esch-sur-Alzette → Bettembourg → Luxemburg, dann zurück, auf einem Fahrplan von etwa 30 Minuten.",
            fr: "<strong>Itinéraire réel</strong> : Petange → Niederkorn → Differdange → Esch-sur-Alzette → Bettembourg → Luxembourg, puis retour, sur un horaire d'environ 30 minutes."
        },
        "project.minicfl-az104.section.what.sim.state": {
            en: "<strong>Train state model</strong>: direction, previous/next stop, status (<code>between_stops</code>, <code>waiting_at_station</code>, <code>late</code>, <code>returning</code>, <code>stopped_for_night</code>…), segment progress %, planned vs. estimated arrival, and delay in minutes.",
            pt: "<strong>Modelo de estado do comboio</strong>: direção, paragem anterior/seguinte, estado (<code>between_stops</code>, <code>waiting_at_station</code>, <code>late</code>, <code>returning</code>, <code>stopped_for_night</code>…), % de progresso no segmento, chegada prevista vs. estimada e atraso em minutos.",
            lu: "<strong>Zuchstatus-Modell</strong>: Richtung, viregt/nächst Statioun, Status (<code>between_stops</code>, <code>waiting_at_station</code>, <code>late</code>, <code>returning</code>, <code>stopped_for_night</code>…), Segment-Fortschrëtt %, geplangten géint geschätzten Arrivée, an de Retard a Minutten.",
            de: "<strong>Zugstatus-Modell</strong>: Richtung, vorherige/nächste Station, Status (<code>between_stops</code>, <code>waiting_at_station</code>, <code>late</code>, <code>returning</code>, <code>stopped_for_night</code>…), Segmentfortschritt %, geplante vs. geschätzte Ankunft und Verspätung in Minuten.",
            fr: "<strong>Modèle d'état du train</strong> : direction, arrêt précédent/suivant, statut (<code>between_stops</code>, <code>waiting_at_station</code>, <code>late</code>, <code>returning</code>, <code>stopped_for_night</code>…), % d'avancement sur le segment, arrivée prévue vs. estimée et retard en minutes."
        },
        "project.minicfl-az104.section.what.sim.ui": {
            en: "<strong>Visual lane</strong>: the UI shows the line, station dots, the moving train, direction, planned/estimated arrival, a delay badge and the last update time.",
            pt: "<strong>Faixa visual</strong>: a UI mostra a linha, os pontos das estações, o comboio em movimento, a direção, a chegada prevista/estimada, um selo de atraso e a hora da última atualização.",
            lu: "<strong>Visuell Streck</strong>: d'UI weist d'Linn, d'Statiouns-Punkten, den fuerenden Zuch, d'Richtung, geplangten/geschätzten Arrivée, e Retard-Badge an d'Zäit vun der leschter Aktualiséierung.",
            de: "<strong>Visuelle Strecke</strong>: die UI zeigt die Linie, die Stationspunkte, den fahrenden Zug, die Richtung, geplante/geschätzte Ankunft, ein Verspätungs-Badge und die letzte Aktualisierungszeit.",
            fr: "<strong>Voie visuelle</strong> : l'interface montre la ligne, les points des gares, le train en mouvement, la direction, l'arrivée prévue/estimée, un badge de retard et l'heure de la dernière mise à jour."
        },

        "project.minicfl-az104.arch.real.title": {
            en: "The deployed Azure architecture",
            pt: "A arquitetura Azure implementada",
            lu: "Déi deployéiert Azure-Architektur",
            de: "Die bereitgestellte Azure-Architektur",
            fr: "L'architecture Azure déployée"
        },
        "project.minicfl-az104.image.arch.caption": {
            en: "The real deployed environment: management groups and budgets, subscriptions, RBAC, the VNet boundary with NSGs, ACR, the container web app, the Function timer and the PostgreSQL database VM.",
            pt: "O ambiente real implementado: grupos de gestão e orçamentos, subscrições, RBAC, o limite da VNet com NSGs, ACR, a app web em contentor, o timer da Function e a VM de base de dados PostgreSQL.",
            lu: "Déi reell deployéiert Ëmgéigend: Management-Gruppen a Budgeten, Subscriptiounen, RBAC, d'VNet-Grenz mat NSGen, ACR, d'Container-Web-App, den Function-Timer an d'PostgreSQL-Datebank-VM.",
            de: "Die real bereitgestellte Umgebung: Management-Gruppen und Budgets, Subscriptions, RBAC, die VNet-Grenze mit NSGs, ACR, die Container-Web-App, der Function-Timer und die PostgreSQL-Datenbank-VM.",
            fr: "L'environnement réellement déployé : groupes d'administration et budgets, abonnements, RBAC, la frontière VNet avec NSGs, ACR, l'app web conteneurisée, le minuteur Function et la VM de base de données PostgreSQL."
        },

        "project.minicfl-az104.section.why.title": {
            en: "Why I built it this way",
            pt: "Porque o construí assim",
            lu: "Firwat ech et esou gebaut hunn",
            de: "Warum ich es so gebaut habe",
            fr: "Pourquoi je l'ai construit ainsi"
        },
        "project.minicfl-az104.section.why.body1": {
            en: "The AZ-104 course needed a demonstration, not just notes. We wanted a scenario that was <strong>small enough to finish but real enough to administer properly</strong>, so we picked something familiar: the CFL train that runs the Petange → Luxembourg line.",
            pt: "O curso AZ-104 precisava de uma demonstração, não apenas de apontamentos. Queríamos um cenário <strong>pequeno o suficiente para terminar mas real o suficiente para administrar corretamente</strong>, por isso escolhemos algo familiar: o comboio CFL que circula na linha Petange → Luxemburgo.",
            lu: "De AZ-104 Cours huet eng Demonstratioun gebraucht, net just Notizen. Mir wollten e Szenario dat <strong>kleng genuch war fir fäerdeg ze maachen, awer reell genuch fir richteg ze administréieren</strong>, also hu mir eppes Vertraut geholl: de CFL-Zuch deen op der Streck Petange → Lëtzebuerg fiert.",
            de: "Der AZ-104-Kurs brauchte eine Demonstration, nicht nur Notizen. Wir wollten ein Szenario, das <strong>klein genug zum Fertigstellen, aber echt genug zum richtigen Administrieren</strong> war, also wählten wir etwas Vertrautes: den CFL-Zug, der auf der Strecke Petange → Luxemburg fährt.",
            fr: "Le cursus AZ-104 avait besoin d'une démonstration, pas seulement de notes. Nous voulions un scénario <strong>assez petit pour être terminé mais assez réel pour être administré correctement</strong>, alors nous avons choisi quelque chose de familier : le train CFL qui circule sur la ligne Petange → Luxembourg."
        },
        "project.minicfl-az104.section.why.body2": {
            en: "The train is only the excuse. The point is the <strong>Azure environment around it</strong>: identity and access, governance, compute, networking, monitoring and cost control. Every resource exists because the simulator needs it — the Function updates the train, the VM stores it, the network protects it, monitoring watches it.",
            pt: "O comboio é apenas o pretexto. O essencial é o <strong>ambiente Azure à sua volta</strong>: identidade e acesso, governação, computação, rede, monitorização e controlo de custos. Cada recurso existe porque o simulador precisa dele — a Function atualiza o comboio, a VM guarda-o, a rede protege-o, a monitorização vigia-o.",
            lu: "Den Zuch ass nëmmen d'Ausried. De Punkt ass d'<strong>Azure-Ëmgéigend ronderëm</strong>: Identitéit an Zougrëff, Governance, Compute, Networking, Monitoring a Käschtekontroll. All Ressource existéiert well de Simulator se brauch — d'Function aktualiséiert den Zuch, d'VM späichert en, d'Netzwierk schützt en, d'Monitoring iwwerwaacht en.",
            de: "Der Zug ist nur der Vorwand. Worum es geht, ist die <strong>Azure-Umgebung darum herum</strong>: Identität und Zugriff, Governance, Compute, Networking, Monitoring und Kostenkontrolle. Jede Ressource existiert, weil der Simulator sie braucht — die Function aktualisiert den Zug, die VM speichert ihn, das Netzwerk schützt ihn, das Monitoring überwacht ihn.",
            fr: "Le train n'est que le prétexte. L'essentiel, c'est l'<strong>environnement Azure qui l'entoure</strong> : identité et accès, gouvernance, calcul, réseau, surveillance et maîtrise des coûts. Chaque ressource existe parce que le simulateur en a besoin — la Function met à jour le train, la VM le stocke, le réseau le protège, la surveillance le surveille."
        },
        "project.minicfl-az104.section.why.body3": {
            en: "We deployed it twice — <strong>dev in France Central and prod in Sweden Central</strong>, across two student subscriptions — and mapped each resource back to an AZ-104 skill area with screenshots in the report. The goal isn't only that the app works, but that we can explain why every piece is there.",
            pt: "Implementámo-lo duas vezes — <strong>dev em France Central e prod em Sweden Central</strong>, em duas subscrições de estudante — e associámos cada recurso a uma área de competência do AZ-104 com capturas de ecrã no relatório. O objetivo não é apenas que a aplicação funcione, mas que consigamos explicar porque cada peça está lá.",
            lu: "Mir hunn et zweemol deployéiert — <strong>Dev a France Central a Prod a Sweden Central</strong>, iwwer zwou Studente-Subscriptiounen — an all Ressource zréck op en AZ-104 Kompetenzberäich mat Screenshots am Rapport zougeuerdnet. D'Zil ass net nëmmen datt d'App funktionéiert, mä datt mir kënnen erklären firwat all Stéck do ass.",
            de: "Wir haben es zweimal bereitgestellt — <strong>Dev in France Central und Prod in Sweden Central</strong>, über zwei Studenten-Subscriptions — und jede Ressource mit Screenshots im Bericht einem AZ-104-Kompetenzbereich zugeordnet. Das Ziel ist nicht nur, dass die App funktioniert, sondern dass wir erklären können, warum jedes Teil da ist.",
            fr: "Nous l'avons déployé deux fois — <strong>dev en France Central et prod en Sweden Central</strong>, sur deux abonnements étudiants — et nous avons relié chaque ressource à un domaine de compétences AZ-104 avec des captures d'écran dans le rapport. Le but n'est pas seulement que l'application fonctionne, mais que nous puissions expliquer pourquoi chaque élément est là."
        },

        "project.minicfl-az104.section.lessons.title": {
            en: "What I learned",
            pt: "O que aprendi",
            lu: "Wat ech geléiert hunn",
            de: "Was ich gelernt habe",
            fr: "Ce que j'ai appris"
        },
        "project.minicfl-az104.lessons.rbac.title": {
            en: "Least privilege over Owner",
            pt: "Privilégio mínimo em vez de Owner",
            lu: "Mannste Privileg amplaz Owner",
            de: "Geringste Rechte statt Owner",
            fr: "Moindre privilège plutôt qu'Owner"
        },
        "project.minicfl-az104.lessons.rbac.body": {
            en: "Assigning roles at resource-group scope and testing what a Reader actually can't do made permissions click far more than handing out Owner ever would.",
            pt: "Atribuir funções ao âmbito do grupo de recursos e testar o que um Reader realmente não pode fazer fez as permissões fazerem sentido muito mais do que distribuir Owner alguma vez faria.",
            lu: "Rollen um Resource-Group-Scope zouzeweisen an ze testen wat e Reader tatsächlech net ka maachen huet d'Permissiounen vill méi kloer gemaach wéi Owner ze verdeelen et jeemools géif.",
            de: "Rollen auf Resource-Group-Ebene zuzuweisen und zu testen, was ein Reader tatsächlich nicht darf, hat Berechtigungen viel verständlicher gemacht, als verteiltes Owner es je könnte.",
            fr: "Attribuer des rôles au niveau du groupe de ressources et tester ce qu'un Reader ne peut réellement pas faire a rendu les permissions bien plus claires que ne le ferait jamais la distribution d'Owner."
        },
        "project.minicfl-az104.lessons.private.title": {
            en: "Keep the database private",
            pt: "Manter a base de dados privada",
            lu: "D'Datebank privat halen",
            de: "Die Datenbank privat halten",
            fr: "Garder la base de données privée"
        },
        "project.minicfl-az104.lessons.private.body": {
            en: "Splitting subnets and proving with NSGs that the DB is unreachable from the internet taught me network security by doing, not by reading.",
            pt: "Separar subnets e provar com NSGs que a BD é inacessível a partir da internet ensinou-me segurança de rede na prática, não a ler.",
            lu: "Subneten ze trennen a mat NSGen ze beweisen datt d'DB net vum Internet aus erreechbar ass huet mech Netzwierk-Sécherheet duerch Maachen geléiert, net duerch Liesen.",
            de: "Subnets zu trennen und mit NSGs zu beweisen, dass die DB aus dem Internet nicht erreichbar ist, hat mir Netzwerksicherheit durch Tun beigebracht, nicht durch Lesen.",
            fr: "Séparer les sous-réseaux et prouver avec des NSGs que la BD est inaccessible depuis Internet m'a appris la sécurité réseau par la pratique, pas par la lecture."
        },
        "project.minicfl-az104.lessons.cost.title": {
            en: "Tag and budget everything",
            pt: "Etiquetar e orçamentar tudo",
            lu: "Alles taggen a budgetéieren",
            de: "Alles taggen und budgetieren",
            fr: "Étiqueter et budgéter tout"
        },
        "project.minicfl-az104.lessons.cost.body": {
            en: "On student credit, budget alerts and consistent tags are not optional — they are how you avoid waking up to an empty subscription.",
            pt: "Com crédito de estudante, alertas de orçamento e tags consistentes não são opcionais — são como se evita acordar com uma subscrição vazia.",
            lu: "Mat Studentekredit sinn Budget-Alerten a konsequent Tags net optional — si sinn d'Manéier wéi ee verhënnert moies mat enger eidler Subscriptioun opzewächen.",
            de: "Mit Studentenguthaben sind Budget-Alerts und konsistente Tags nicht optional — sie verhindern, dass man mit einer leeren Subscription aufwacht.",
            fr: "Avec un crédit étudiant, les alertes de budget et des étiquettes cohérentes ne sont pas optionnelles — c'est ainsi qu'on évite de se réveiller avec un abonnement vide."
        },
        "project.minicfl-az104.lessons.pressure.title": {
            en: "Scope under pressure",
            pt: "Definir âmbito sob pressão",
            lu: "Ëmfang ënner Drock",
            de: "Umfang unter Druck",
            fr: "Cadrer sous pression"
        },
        "project.minicfl-az104.lessons.pressure.body": {
            en: "We built this under real time pressure, so we cut what didn't fit — a planned Load Balancer demo stayed on the backlog. Knowing what to drop to still ship a coherent environment is its own skill.",
            pt: "Construímos isto sob real pressão de tempo, por isso cortámos o que não cabia — uma demonstração de Load Balancer planeada ficou no backlog. Saber o que deixar de fora para ainda entregar um ambiente coerente é uma competência por si só.",
            lu: "Mir hunn dat ënner reellem Zäitdrock gebaut, also hu mir geschnidden wat net gepasst huet — eng geplangte Load-Balancer-Demo ass um Backlog bliwwen. Ze wëssen wat falezelooss fir nach ëmmer eng kohärent Ëmgéigend ze liwweren ass eng eege Kompetenz.",
            de: "Wir haben das unter echtem Zeitdruck gebaut, also haben wir gestrichen, was nicht passte — eine geplante Load-Balancer-Demo blieb im Backlog. Zu wissen, was man weglässt, um trotzdem eine kohärente Umgebung zu liefern, ist eine eigene Fähigkeit.",
            fr: "Nous avons construit cela sous une réelle pression de temps, alors nous avons coupé ce qui ne rentrait pas — une démo de Load Balancer prévue est restée dans le backlog. Savoir quoi abandonner pour livrer malgré tout un environnement cohérent est une compétence à part entière."
        },

        "project.minicfl-az104.section.next.title": {
            en: "What's next",
            pt: "O que se segue",
            lu: "Wat als nächst kënnt",
            de: "Was als Nächstes kommt",
            fr: "Et ensuite"
        },
        "project.minicfl-az104.next.iac": {
            en: "Rebuild it with Terraform / Bicep",
            pt: "Reconstruir com Terraform / Bicep",
            lu: "Mat Terraform / Bicep nei opbauen",
            de: "Mit Terraform / Bicep neu aufbauen",
            fr: "Le reconstruire avec Terraform / Bicep"
        },
        "project.minicfl-az104.next.cicd": {
            en: "CI/CD pipeline for the container",
            pt: "Pipeline CI/CD para o contentor",
            lu: "CI/CD-Pipeline fir de Container",
            de: "CI/CD-Pipeline für den Container",
            fr: "Pipeline CI/CD pour le conteneur"
        },
        "project.minicfl-az104.next.lb": {
            en: "Add the Load Balancer + scale set",
            pt: "Adicionar o Load Balancer + scale set",
            lu: "De Load Balancer + Scale Set derbäisetzen",
            de: "Load Balancer + Scale Set hinzufügen",
            fr: "Ajouter le Load Balancer + scale set"
        },
        "project.minicfl-az104.next.backup": {
            en: "Backup & recovery drills",
            pt: "Exercícios de backup e recuperação",
            lu: "Backup- a Recovery-Übungen",
            de: "Backup- und Recovery-Übungen",
            fr: "Exercices de sauvegarde et de récupération"
        },

        "project.minicfl-az104.sidebar.tech.identity": {
            en: "Microsoft Entra ID + RBAC",
            pt: "Microsoft Entra ID + RBAC",
            lu: "Microsoft Entra ID + RBAC",
            de: "Microsoft Entra ID + RBAC",
            fr: "Microsoft Entra ID + RBAC"
        },
        "project.minicfl-az104.sidebar.tech.governance": {
            en: "Management Groups + Azure Policy + Tags",
            pt: "Management Groups + Azure Policy + Tags",
            lu: "Management Groups + Azure Policy + Tags",
            de: "Management Groups + Azure Policy + Tags",
            fr: "Management Groups + Azure Policy + Tags"
        },
        "project.minicfl-az104.sidebar.tech.budgets": {
            en: "Budgets + Cost alerts",
            pt: "Orçamentos + Alertas de custo",
            lu: "Budgeten + Käschten-Alerten",
            de: "Budgets + Kosten-Alerts",
            fr: "Budgets + Alertes de coût"
        },
        "project.minicfl-az104.sidebar.tech.app": {
            en: "ACR + App Service (Web App for Containers)",
            pt: "ACR + App Service (Web App for Containers)",
            lu: "ACR + App Service (Web App for Containers)",
            de: "ACR + App Service (Web App for Containers)",
            fr: "ACR + App Service (Web App for Containers)"
        },
        "project.minicfl-az104.sidebar.tech.vm": {
            en: "Azure VM + Managed Disk",
            pt: "Azure VM + Disco gerido",
            lu: "Azure VM + Managed Disk",
            de: "Azure VM + Managed Disk",
            fr: "Azure VM + Disque managé"
        },
        "project.minicfl-az104.sidebar.tech.db": {
            en: "PostgreSQL (train state)",
            pt: "PostgreSQL (estado do comboio)",
            lu: "PostgreSQL (Zuchstatus)",
            de: "PostgreSQL (Zugstatus)",
            fr: "PostgreSQL (état du train)"
        },
        "project.minicfl-az104.sidebar.tech.storage": {
            en: "Storage account (stminicfl001)",
            pt: "Conta de armazenamento (stminicfl001)",
            lu: "Storage Account (stminicfl001)",
            de: "Storage Account (stminicfl001)",
            fr: "Compte de stockage (stminicfl001)"
        },
        "project.minicfl-az104.sidebar.tech.fn": {
            en: "Azure Functions (timer trigger)",
            pt: "Azure Functions (timer trigger)",
            lu: "Azure Functions (Timer-Trigger)",
            de: "Azure Functions (Timer-Trigger)",
            fr: "Azure Functions (déclencheur minuteur)"
        },
        "project.minicfl-az104.sidebar.tech.network": {
            en: "VNet + Subnets + NSGs",
            pt: "VNet + Subnets + NSGs",
            lu: "VNet + Subneten + NSGen",
            de: "VNet + Subnets + NSGs",
            fr: "VNet + Sous-réseaux + NSGs"
        },
        "project.minicfl-az104.sidebar.tech.monitor": {
            en: "Azure Monitor + Application Insights + Log Analytics",
            pt: "Azure Monitor + Application Insights + Log Analytics",
            lu: "Azure Monitor + Application Insights + Log Analytics",
            de: "Azure Monitor + Application Insights + Log Analytics",
            fr: "Azure Monitor + Application Insights + Log Analytics"
        },
        "project.minicfl-az104.sidebar.tech.watcher": {
            en: "Network Watcher",
            pt: "Network Watcher",
            lu: "Network Watcher",
            de: "Network Watcher",
            fr: "Network Watcher"
        },
        "project.minicfl-az104.sidebar.tech.docker": {
            en: "Docker",
            pt: "Docker",
            lu: "Docker",
            de: "Docker",
            fr: "Docker"
        },

        "project.minicfl-az104.sidebar.features.team": {
            en: "Built by a three-person team",
            pt: "Construído por uma equipa de três pessoas",
            lu: "Vun enger Equipe vun dräi Persoune gebaut",
            de: "Von einem dreiköpfigen Team gebaut",
            fr: "Réalisé par une équipe de trois personnes"
        },
        "project.minicfl-az104.sidebar.features.hierarchy": {
            en: "Management-group hierarchy with two subscriptions",
            pt: "Hierarquia de grupos de gestão com duas subscrições",
            lu: "Management-Group-Hierarchie mat zwou Subscriptiounen",
            de: "Management-Group-Hierarchie mit zwei Subscriptions",
            fr: "Hiérarchie de groupes d'administration avec deux abonnements"
        },
        "project.minicfl-az104.sidebar.features.envs": {
            en: "Dev + prod across two Azure regions",
            pt: "Dev + prod em duas regiões Azure",
            lu: "Dev + Prod iwwer zwou Azure-Regiounen",
            de: "Dev + Prod über zwei Azure-Regionen",
            fr: "Dev + prod sur deux régions Azure"
        },
        "project.minicfl-az104.sidebar.features.rbac": {
            en: "Least-privilege RBAC at resource-group scope",
            pt: "RBAC com privilégio mínimo ao âmbito do grupo de recursos",
            lu: "RBAC mat mannste Privileg um Resource-Group-Scope",
            de: "RBAC mit geringsten Rechten auf Resource-Group-Ebene",
            fr: "RBAC au moindre privilège au niveau du groupe de ressources"
        },
        "project.minicfl-az104.sidebar.features.container": {
            en: "Containerised web UI from ACR on App Service",
            pt: "UI web em contentor a partir do ACR no App Service",
            lu: "Containeriséiert Web-UI aus dem ACR um App Service",
            de: "Containerisierte Web-UI aus der ACR auf App Service",
            fr: "Interface web conteneurisée depuis l'ACR sur App Service"
        },
        "project.minicfl-az104.sidebar.features.private": {
            en: "Public access to the PostgreSQL DB denied by NSGs",
            pt: "Acesso público à BD PostgreSQL negado por NSGs",
            lu: "Ëffentlechen Zougrëff op d'PostgreSQL-DB duerch NSGen verweigert",
            de: "Öffentlicher Zugriff auf die PostgreSQL-DB durch NSGs verweigert",
            fr: "Accès public à la BD PostgreSQL refusé par les NSGs"
        },
        "project.minicfl-az104.sidebar.features.timer": {
            en: "Function recalculates train state every minute",
            pt: "A Function recalcula o estado do comboio a cada minuto",
            lu: "D'Function berechent den Zuchstatus all Minutt nei",
            de: "Die Function berechnet den Zugstatus jede Minute neu",
            fr: "La Function recalcule l'état du train chaque minute"
        },
        "project.minicfl-az104.sidebar.features.monitor": {
            en: "Azure Monitor dashboard, alerts and action groups",
            pt: "Dashboard, alertas e action groups do Azure Monitor",
            lu: "Azure-Monitor-Dashboard, Alerten an Action Groups",
            de: "Azure-Monitor-Dashboard, Alerts und Action Groups",
            fr: "Tableau de bord, alertes et action groups Azure Monitor"
        },
        "project.minicfl-az104.sidebar.features.governance": {
            en: "Azure Policy, tags and budget alerts",
            pt: "Azure Policy, tags e alertas de orçamento",
            lu: "Azure Policy, Tags a Budget-Alerten",
            de: "Azure Policy, Tags und Budget-Alerts",
            fr: "Azure Policy, étiquettes et alertes de budget"
        }
    };

    if (typeof translations === 'undefined') {
        globalThis.translations = {};
    }
    Object.assign(translations, extra);
})();
