/**
 * Server Virtualization Systems (VIRCL) project page translations.
 * Languages: en, pt, lu, de, fr
 *
 * Two-person BTS Cloud Computing project comparing VMware ESXi/vCenter
 * and Proxmox VE, specialising in Clustering.
 *
 * NOTE: translations were drafted by the assistant — please review the
 * pt / lu / de / fr wording for tone and terminology.
 */

(function () {
    'use strict';
    const extra = {
        "project.vircl-virtualization.badge": {
            en: "VIRTUALIZATION",
            pt: "VIRTUALIZAÇÃO",
            lu: "VIRTUALISÉIERUNG",
            de: "VIRTUALISIERUNG",
            fr: "VIRTUALISATION"
        },
        "project.vircl-virtualization.title": {
            en: "Server Virtualization Systems",
            pt: "Sistemas de Virtualização de Servidores",
            lu: "Server-Virtualiséierungssystemer",
            de: "Server-Virtualisierungssysteme",
            fr: "Systèmes de virtualisation de serveurs"
        },
        "project.vircl-virtualization.subtitle": {
            en: "A two-person BTS Cloud Computing project that deploys and compares VMware ESXi/vCenter and Proxmox VE across four HP servers — every required virtualization feature built on both, plus a Clustering specialisation that uses cross-platform nested nodes to reach a real three-node quorum.",
            pt: "Um projeto de dupla do BTS em Cloud Computing que implementa e compara o VMware ESXi/vCenter e o Proxmox VE em quatro servidores HP — todas as funcionalidades exigidas em ambos, mais uma especialização em Clustering que usa nós aninhados entre plataformas para obter um quórum real de três nós.",
            lu: "E Projet vun zwee Persounen am BTS Cloud Computing, deen de VMware ESXi/vCenter an de Proxmox VE op véier HP-Serveren installéiert a vergläicht — all gefuerdert Funktioun op béide Plattformen, plus eng Spezialisatioun an Clustering, déi nestéiert Noden iwwer d'Plattforme benotzt fir e richtege Quorum mat dräi Noden ze erreechen.",
            de: "Ein Zweier-Projekt im BTS Cloud Computing, das VMware ESXi/vCenter und Proxmox VE auf vier HP-Servern bereitstellt und vergleicht — jede geforderte Virtualisierungsfunktion auf beiden Plattformen, dazu eine Clustering-Spezialisierung, die plattformübergreifend verschachtelte Knoten nutzt, um ein echtes Quorum mit drei Knoten zu erreichen.",
            fr: "Un projet à deux du BTS en Cloud Computing qui déploie et compare VMware ESXi/vCenter et Proxmox VE sur quatre serveurs HP — toutes les fonctionnalités requises sur les deux, plus une spécialisation Clustering qui utilise des nœuds imbriqués entre plateformes pour atteindre un véritable quorum à trois nœuds."
        },

        "project.vircl-virtualization.glance.hypervisors.label": {
            en: "hypervisors, fully compared",
            pt: "hipervisores, totalmente comparados",
            lu: "Hypervisoren, komplett verglach",
            de: "Hypervisoren, vollständig verglichen",
            fr: "hyperviseurs, entièrement comparés"
        },
        "project.vircl-virtualization.glance.servers.label": {
            en: "physical HP servers (HP13–HP16)",
            pt: "servidores HP físicos (HP13–HP16)",
            lu: "physesch HP-Serveren (HP13–HP16)",
            de: "physische HP-Server (HP13–HP16)",
            fr: "serveurs HP physiques (HP13–HP16)"
        },
        "project.vircl-virtualization.glance.features.label": {
            en: "features built on both platforms",
            pt: "funcionalidades em ambas as plataformas",
            lu: "Funktiounen op béide Plattformen",
            de: "Funktionen auf beiden Plattformen",
            fr: "fonctionnalités sur les deux plateformes"
        },
        "project.vircl-virtualization.glance.cluster.label": {
            en: "nodes per cluster, via nesting",
            pt: "nós por cluster, via aninhamento",
            lu: "Noden pro Cluster, duerch Nestéieren",
            de: "Knoten pro Cluster, durch Verschachtelung",
            fr: "nœuds par cluster, par imbrication"
        },

        "project.vircl-virtualization.arch.title": {
            en: "How the two clusters fit together",
            pt: "Como os dois clusters se encaixam",
            lu: "Wéi déi zwee Clusteren zesummespillen",
            de: "Wie die beiden Cluster zusammenpassen",
            fr: "Comment les deux clusters s'assemblent"
        },
        "project.vircl-virtualization.arch.esxiCluster": {
            en: "VMware cluster · VIRCL-Cluster (vCenter)",
            pt: "Cluster VMware · VIRCL-Cluster (vCenter)",
            lu: "VMware-Cluster · VIRCL-Cluster (vCenter)",
            de: "VMware-Cluster · VIRCL-Cluster (vCenter)",
            fr: "Cluster VMware · VIRCL-Cluster (vCenter)"
        },
        "project.vircl-virtualization.arch.pmxCluster": {
            en: "Proxmox cluster · vircl-team4 (Corosync)",
            pt: "Cluster Proxmox · vircl-team4 (Corosync)",
            lu: "Proxmox-Cluster · vircl-team4 (Corosync)",
            de: "Proxmox-Cluster · vircl-team4 (Corosync)",
            fr: "Cluster Proxmox · vircl-team4 (Corosync)"
        },
        "project.vircl-virtualization.arch.storageNote": {
            en: "shared to both clusters — the foundation for migration & HA",
            pt: "partilhado pelos dois clusters — a base para migração e HA",
            lu: "fir béid Clusteren gedeelt — d'Fundament fir Migratioun & HA",
            de: "für beide Cluster freigegeben — die Basis für Migration & HA",
            fr: "partagé par les deux clusters — la base de la migration et de la HA"
        },
        "project.vircl-virtualization.arch.note": {
            en: "Each cluster only has two physical hosts, so a third node was nested inside the opposite hypervisor — Proxmox hosts an ESXi VM and ESXi hosts a Proxmox VM. That gives every cluster three votes, which is what makes quorum (and a real clustering demo) meaningful.",
            pt: "Cada cluster só tem dois hosts físicos, por isso um terceiro nó foi aninhado dentro do hipervisor oposto — o Proxmox aloja uma VM ESXi e o ESXi aloja uma VM Proxmox. Isso dá a cada cluster três votos, o que torna o quórum (e uma demonstração real de clustering) significativo.",
            lu: "All Cluster huet nëmmen zwee physesch Hosten, dofir gouf en drëtten Node am géigeniwwerleienden Hypervisor nestéiert — de Proxmox hält eng ESXi-VM an den ESXi eng Proxmox-VM. Esou kritt all Cluster dräi Stëmmen, wat de Quorum (an eng richteg Clustering-Demo) sënnvoll mécht.",
            de: "Jeder Cluster hat nur zwei physische Hosts, daher wurde ein dritter Knoten im jeweils anderen Hypervisor verschachtelt — Proxmox betreibt eine ESXi-VM und ESXi eine Proxmox-VM. So erhält jeder Cluster drei Stimmen, was Quorum (und eine echte Clustering-Demo) erst sinnvoll macht.",
            fr: "Chaque cluster n'a que deux hôtes physiques, donc un troisième nœud a été imbriqué dans l'hyperviseur opposé — Proxmox héberge une VM ESXi et ESXi héberge une VM Proxmox. Cela donne trois votes à chaque cluster, ce qui rend le quorum (et une vraie démo de clustering) pertinent."
        },

        "project.vircl-virtualization.nodes.hp13.title": {
            en: "HP13 · ESXi + vCenter", pt: "HP13 · ESXi + vCenter", lu: "HP13 · ESXi + vCenter", de: "HP13 · ESXi + vCenter", fr: "HP13 · ESXi + vCenter"
        },
        "project.vircl-virtualization.nodes.hp13.spec": {
            en: "physical host · hosts VCSA",
            pt: "host físico · aloja o VCSA",
            lu: "physeschen Host · hält de VCSA",
            de: "physischer Host · betreibt VCSA",
            fr: "hôte physique · héberge le VCSA"
        },
        "project.vircl-virtualization.nodes.hp15.title": {
            en: "HP15 · ESXi", pt: "HP15 · ESXi", lu: "HP15 · ESXi", de: "HP15 · ESXi", fr: "HP15 · ESXi"
        },
        "project.vircl-virtualization.nodes.hp15.spec": {
            en: "physical host · vMotion target",
            pt: "host físico · destino do vMotion",
            lu: "physeschen Host · vMotion-Ziel",
            de: "physischer Host · vMotion-Ziel",
            fr: "hôte physique · cible vMotion"
        },
        "project.vircl-virtualization.nodes.esxinested.title": {
            en: "esxi-nested", pt: "esxi-nested", lu: "esxi-nested", de: "esxi-nested", fr: "esxi-nested"
        },
        "project.vircl-virtualization.nodes.esxinested.spec": {
            en: "nested ESXi VM, runs on HP14 ↗",
            pt: "VM ESXi aninhada, corre no HP14 ↗",
            lu: "nestéiert ESXi-VM, leeft op HP14 ↗",
            de: "verschachtelte ESXi-VM, läuft auf HP14 ↗",
            fr: "VM ESXi imbriquée, tourne sur HP14 ↗"
        },
        "project.vircl-virtualization.nodes.storage.title": {
            en: "Unraid shared storage",
            pt: "Armazenamento partilhado Unraid",
            lu: "Unraid gedeelten Späicher",
            de: "Unraid Shared Storage",
            fr: "Stockage partagé Unraid"
        },
        "project.vircl-virtualization.nodes.storage.spec": {
            en: "NFS + iSCSI · CLOIF2", pt: "NFS + iSCSI · CLOIF2", lu: "NFS + iSCSI · CLOIF2", de: "NFS + iSCSI · CLOIF2", fr: "NFS + iSCSI · CLOIF2"
        },
        "project.vircl-virtualization.nodes.hp14.title": {
            en: "HP14 · Proxmox VE", pt: "HP14 · Proxmox VE", lu: "HP14 · Proxmox VE", de: "HP14 · Proxmox VE", fr: "HP14 · Proxmox VE"
        },
        "project.vircl-virtualization.nodes.hp14.spec": {
            en: "physical host · migration target",
            pt: "host físico · destino de migração",
            lu: "physeschen Host · Migratiounsziel",
            de: "physischer Host · Migrationsziel",
            fr: "hôte physique · cible de migration"
        },
        "project.vircl-virtualization.nodes.hp16.title": {
            en: "HP16 · Proxmox VE", pt: "HP16 · Proxmox VE", lu: "HP16 · Proxmox VE", de: "HP16 · Proxmox VE", fr: "HP16 · Proxmox VE"
        },
        "project.vircl-virtualization.nodes.hp16.spec": {
            en: "physical host · HA manager",
            pt: "host físico · gestor de HA",
            lu: "physeschen Host · HA-Manager",
            de: "physischer Host · HA-Manager",
            fr: "hôte physique · gestionnaire HA"
        },
        "project.vircl-virtualization.nodes.pvenested.title": {
            en: "pve-nested", pt: "pve-nested", lu: "pve-nested", de: "pve-nested", fr: "pve-nested"
        },
        "project.vircl-virtualization.nodes.pvenested.spec": {
            en: "nested Proxmox VM, runs on HP13 ↖",
            pt: "VM Proxmox aninhada, corre no HP13 ↖",
            lu: "nestéiert Proxmox-VM, leeft op HP13 ↖",
            de: "verschachtelte Proxmox-VM, läuft auf HP13 ↖",
            fr: "VM Proxmox imbriquée, tourne sur HP13 ↖"
        },

        "project.vircl-virtualization.does.title": {
            en: "What it actually does",
            pt: "O que realmente faz",
            lu: "Wat et wierklech mécht",
            de: "Was es tatsächlich macht",
            fr: "Ce que ça fait vraiment"
        },
        "project.vircl-virtualization.does.compare.title": {
            en: "Two platforms, side by side",
            pt: "Duas plataformas, lado a lado",
            lu: "Zwou Plattformen, niewenteneen",
            de: "Zwei Plattformen im Vergleich",
            fr: "Deux plateformes, côte à côte"
        },
        "project.vircl-virtualization.does.compare.desc": {
            en: "The same job done on VMware (the industry-standard paid product) and Proxmox (the free open-source one), so you can see exactly where each is easier, harder, or cheaper.",
            pt: "O mesmo trabalho feito no VMware (o produto pago padrão da indústria) e no Proxmox (o gratuito de código aberto), para ver exatamente onde cada um é mais fácil, mais difícil ou mais barato.",
            lu: "Dee selwechte Job um VMware (de bezuelte Industriestandard) an um Proxmox (déi gratis Open-Source-Léisung) gemaach, fir genee ze gesinn, wou jee méi einfach, méi schwéier oder méi bëlleg ass.",
            de: "Dieselbe Aufgabe auf VMware (dem kostenpflichtigen Industriestandard) und Proxmox (der kostenlosen Open-Source-Lösung), damit man genau sieht, wo welches einfacher, schwieriger oder günstiger ist.",
            fr: "Le même travail réalisé sur VMware (le produit payant standard du secteur) et Proxmox (la solution gratuite open source), pour voir exactement où chacun est plus simple, plus difficile ou moins cher."
        },
        "project.vircl-virtualization.does.consolidate.title": {
            en: "Many servers on one machine",
            pt: "Muitos servidores numa só máquina",
            lu: "Vill Serveren op enger Maschinn",
            de: "Viele Server auf einer Maschine",
            fr: "Plusieurs serveurs sur une machine"
        },
        "project.vircl-virtualization.does.consolidate.desc": {
            en: "One physical server safely runs lots of isolated virtual machines — the idea that lets companies replace racks of hardware with a handful of boxes.",
            pt: "Um servidor físico corre, em segurança, várias máquinas virtuais isoladas — a ideia que permite às empresas substituir racks de hardware por um punhado de máquinas.",
            lu: "Ee physesche Server leeft sécher vill isoléiert virtuell Maschinnen — d'Iddi, déi et de Firmen erlaabt, ganz Racken Hardware duerch e puer Këschten z'ersetzen.",
            de: "Ein physischer Server betreibt sicher viele isolierte virtuelle Maschinen — die Idee, mit der Unternehmen ganze Hardware-Racks durch eine Handvoll Geräte ersetzen.",
            fr: "Un seul serveur physique exécute en toute sécurité de nombreuses machines virtuelles isolées — l'idée qui permet aux entreprises de remplacer des baies de matériel par une poignée de machines."
        },
        "project.vircl-virtualization.does.migrate.title": {
            en: "Move servers while they run",
            pt: "Mover servidores em funcionamento",
            lu: "Serveren beweegen, wärend se lafen",
            de: "Server im laufenden Betrieb verschieben",
            fr: "Déplacer des serveurs en marche"
        },
        "project.vircl-virtualization.does.migrate.desc": {
            en: "A running virtual machine can hop to another physical host with no shutdown, so hardware can be serviced without anyone noticing downtime.",
            pt: "Uma máquina virtual em execução pode saltar para outro host físico sem desligar, permitindo manutenção de hardware sem que ninguém note indisponibilidade.",
            lu: "Eng lafend virtuell Maschinn kann op en aneren physeschen Host wiesselen ouni eraus ze goen, sou datt Hardware gewaart ka ginn ouni datt iergendeen en Ënnerbroch mierkt.",
            de: "Eine laufende virtuelle Maschine wechselt ohne Abschaltung auf einen anderen physischen Host, sodass Hardware gewartet werden kann, ohne dass jemand Ausfallzeit bemerkt.",
            fr: "Une machine virtuelle en marche peut passer sur un autre hôte physique sans extinction, ce qui permet d'entretenir le matériel sans que personne ne remarque d'interruption."
        },
        "project.vircl-virtualization.does.ha.title": {
            en: "Stay online when a host fails",
            pt: "Continuar online quando um host falha",
            lu: "Online bleiwen wann en Host ausfält",
            de: "Online bleiben, wenn ein Host ausfällt",
            fr: "Rester en ligne en cas de panne d'hôte"
        },
        "project.vircl-virtualization.does.ha.desc": {
            en: "Our specialisation: group hosts into a cluster so that if one dies, protected machines automatically restart on another — the heart of high availability.",
            pt: "A nossa especialização: juntar hosts num cluster para que, se um falhar, as máquinas protegidas reiniciem automaticamente noutro — o cerne da alta disponibilidade.",
            lu: "Eis Spezialisatioun: Hosten an engem Cluster gruppéieren, sou datt, wann ee ausfält, geschützte Maschinnen automatesch op engem aneren nei starten — de Kär vun der Héichverfügbarkeet.",
            de: "Unsere Spezialisierung: Hosts zu einem Cluster zusammenfassen, sodass bei Ausfall eines Hosts geschützte Maschinen automatisch auf einem anderen neu starten — der Kern der Hochverfügbarkeit.",
            fr: "Notre spécialisation : regrouper les hôtes en cluster pour que, si l'un tombe, les machines protégées redémarrent automatiquement sur un autre — le cœur de la haute disponibilité."
        },

        "project.vircl-virtualization.section.setup.title": {
            en: "Four bare HP servers, two hypervisors",
            pt: "Quatro servidores HP em branco, dois hipervisores",
            lu: "Véier eidel HP-Serveren, zwee Hypervisoren",
            de: "Vier leere HP-Server, zwei Hypervisoren",
            fr: "Quatre serveurs HP vierges, deux hyperviseurs"
        },
        "project.vircl-virtualization.section.setup.body": {
            en: "For the VIRCL module of the BTS in Cloud Computing, my teammate Andrea Girotto and I were handed four bare HP ProLiant servers (HP13–HP16) and one rule: become experts in two type-1 hypervisors and prove it. We installed VMware ESXi with vCenter on HP13 and HP15, Proxmox VE on HP14 and HP16, wired an Unraid box as shared NFS/iSCSI storage, and then implemented every required feature on both platforms — installing, configuring, breaking, and documenting each one. The images below are each hypervisor's built-in web dashboard — the ESXi Host Client and the Proxmox VE summary — on the HP hosts right after install.",
            pt: "Para o módulo VIRCL do BTS em Cloud Computing, o meu colega Andrea Girotto e eu recebemos quatro servidores HP ProLiant em branco (HP13–HP16) e uma regra: tornar-nos peritos em dois hipervisores de tipo 1 e prová-lo. Instalámos o VMware ESXi com vCenter no HP13 e HP15, o Proxmox VE no HP14 e HP16, ligámos uma máquina Unraid como armazenamento partilhado NFS/iSCSI e implementámos todas as funcionalidades exigidas em ambas as plataformas — instalando, configurando, partindo e documentando cada uma. As imagens abaixo são o painel web integrado de cada hipervisor — o ESXi Host Client e o resumo do Proxmox VE — nos hosts HP logo após a instalação.",
            lu: "Fir de VIRCL-Modul vum BTS Cloud Computing hunn ech a mäi Koleeg Andrea Girotto véier eidel HP ProLiant-Serveren (HP13–HP16) kritt an eng Reegel: Experten an zwee Typ-1-Hypervisoren ze ginn an et ze beweisen. Mir hunn de VMware ESXi mat vCenter op HP13 an HP15 installéiert, de Proxmox VE op HP14 an HP16, eng Unraid-Këscht als gedeelten NFS/iSCSI-Späicher ugeschloss, an dann all gefuerdert Funktioun op béide Plattformen ëmgesat — installéiert, konfiguréiert, futti gemaach an dokumentéiert. D'Biller hei drënner sinn dat agebaute Web-Dashboard vun all Hypervisor — den ESXi Host Client an d'Proxmox-VE-Iwwersiicht — op den HP-Hosten direkt nom Installéieren.",
            de: "Für das VIRCL-Modul des BTS Cloud Computing bekamen mein Teamkollege Andrea Girotto und ich vier leere HP-ProLiant-Server (HP13–HP16) und eine Regel: Experten für zwei Typ-1-Hypervisoren werden und das beweisen. Wir installierten VMware ESXi mit vCenter auf HP13 und HP15, Proxmox VE auf HP14 und HP16, banden eine Unraid-Box als gemeinsamen NFS/iSCSI-Speicher an und setzten dann jede geforderte Funktion auf beiden Plattformen um — installieren, konfigurieren, kaputtmachen und dokumentieren. Die Bilder unten zeigen das integrierte Web-Dashboard beider Hypervisoren — den ESXi Host Client und die Proxmox-VE-Übersicht — auf den HP-Hosts direkt nach der Installation.",
            fr: "Pour le module VIRCL du BTS en Cloud Computing, mon coéquipier Andrea Girotto et moi avons reçu quatre serveurs HP ProLiant vierges (HP13–HP16) et une règle : devenir experts de deux hyperviseurs de type 1 et le prouver. Nous avons installé VMware ESXi avec vCenter sur HP13 et HP15, Proxmox VE sur HP14 et HP16, branché une machine Unraid comme stockage partagé NFS/iSCSI, puis implémenté chaque fonctionnalité requise sur les deux plateformes — installer, configurer, casser et documenter chacune. Les images ci-dessous montrent le tableau de bord web intégré de chaque hyperviseur — l'ESXi Host Client et le résumé Proxmox VE — sur les hôtes HP juste après l'installation."
        },
        "project.vircl-virtualization.image.caption": {
            en: "ESXi Host Client on an HP ProLiant DL380 Gen10",
            pt: "ESXi Host Client num HP ProLiant DL380 Gen10",
            lu: "ESXi Host Client op engem HP ProLiant DL380 Gen10",
            de: "ESXi Host Client auf einem HP ProLiant DL380 Gen10",
            fr: "ESXi Host Client sur un HP ProLiant DL380 Gen10"
        },
        "project.vircl-virtualization.image.caption.pmx": {
            en: "Proxmox VE host summary (HP14)",
            pt: "Resumo do host Proxmox VE (HP14)",
            lu: "Proxmox VE Host-Iwwersiicht (HP14)",
            de: "Proxmox VE Host-Übersicht (HP14)",
            fr: "Résumé de l'hôte Proxmox VE (HP14)"
        },

        "project.vircl-virtualization.section.what.title": {
            en: "What we built on both platforms",
            pt: "O que construímos em ambas as plataformas",
            lu: "Wat mir op béide Plattformen gebaut hunn",
            de: "Was wir auf beiden Plattformen gebaut haben",
            fr: "Ce que nous avons construit sur les deux plateformes"
        },
        "project.vircl-virtualization.section.what.body": {
            en: "The project is organised feature-by-feature rather than server-by-server: every capability below was implemented on VMware ESXi/vCenter and on Proxmox VE, then compared. These are the layers that result.",
            pt: "O projeto está organizado funcionalidade a funcionalidade, e não servidor a servidor: cada capacidade abaixo foi implementada no VMware ESXi/vCenter e no Proxmox VE, e depois comparada. Estas são as camadas resultantes.",
            lu: "De Projet ass Funktioun fir Funktioun organiséiert, net Server fir Server: all Fäegkeet hei drënner gouf um VMware ESXi/vCenter an um Proxmox VE ëmgesat an dann verglach. Dat sinn déi resultéierend Schichten.",
            de: "Das Projekt ist Funktion für Funktion organisiert, nicht Server für Server: jede Fähigkeit unten wurde auf VMware ESXi/vCenter und auf Proxmox VE umgesetzt und dann verglichen. Das sind die daraus entstehenden Schichten.",
            fr: "Le projet est organisé fonctionnalité par fonctionnalité, et non serveur par serveur : chaque capacité ci-dessous a été implémentée sur VMware ESXi/vCenter et sur Proxmox VE, puis comparée. Voici les couches qui en résultent."
        },

        "project.vircl-virtualization.stack.deploy.title": {
            en: "Hypervisor deployment",
            pt: "Implementação do hipervisor",
            lu: "Hypervisor-Deployment",
            de: "Hypervisor-Bereitstellung",
            fr: "Déploiement de l'hyperviseur"
        },
        "project.vircl-virtualization.stack.deploy.vs": {
            en: "VMware: split host/domain fields + a separate vCenter appliance · Proxmox: single Debian-based installer, web UI built in",
            pt: "VMware: campos separados de host/domínio + um appliance vCenter à parte · Proxmox: instalador único baseado em Debian, interface web integrada",
            lu: "VMware: getrennten Host-/Domain-Felder + e separaten vCenter-Appliance · Proxmox: een eenzegen Debian-baséierten Installer, Web-UI agebaut",
            de: "VMware: getrennte Host-/Domain-Felder + eine separate vCenter-Appliance · Proxmox: ein einziger Debian-basierter Installer, Web-UI integriert",
            fr: "VMware : champs hôte/domaine séparés + une appliance vCenter dédiée · Proxmox : un seul installateur basé sur Debian, interface web intégrée"
        },
        "project.vircl-virtualization.stack.deploy.b1": {
            en: "<strong>Bare-metal installs over iLO</strong>: both ISOs mounted from the school NAS as iLO virtual media — no USB stick, both hosts booted from the virtual CD.",
            pt: "<strong>Instalações bare-metal por iLO</strong>: ambos os ISOs montados a partir do NAS da escola como media virtual iLO — sem pen USB, ambos os hosts arrancaram do CD virtual.",
            lu: "<strong>Bare-Metal-Installatiounen iwwer iLO</strong>: béid ISOe vum Schoul-NAS als iLO virtuell Media gemount — keen USB-Stick, béid Hosten hu vum virtuelle CD gestart.",
            de: "<strong>Bare-Metal-Installationen über iLO</strong>: beide ISOs vom Schul-NAS als virtuelle iLO-Medien eingebunden — kein USB-Stick, beide Hosts booteten von der virtuellen CD.",
            fr: "<strong>Installations bare-metal via iLO</strong> : les deux ISO montées depuis le NAS de l'école en média virtuel iLO — pas de clé USB, les deux hôtes ont démarré sur le CD virtuel."
        },
        "project.vircl-virtualization.stack.deploy.b2": {
            en: "<strong>vCenter Server Appliance</strong>: VCSA deployed on HP13 in two stages; PNID set to the IP (not a hostname) to dodge a reverse-DNS check while lab DNS was incomplete.",
            pt: "<strong>vCenter Server Appliance</strong>: VCSA implementado no HP13 em duas fases; PNID definido para o IP (não um hostname) para evitar a verificação de DNS inverso enquanto o DNS do laboratório estava incompleto.",
            lu: "<strong>vCenter Server Appliance</strong>: VCSA op HP13 an zwou Etappe deployéiert; PNID op d'IP gesat (net en Hostnumm) fir e Reverse-DNS-Check ze ëmgoen, soulaang den Labo-DNS net komplett war.",
            de: "<strong>vCenter Server Appliance</strong>: VCSA auf HP13 in zwei Phasen bereitgestellt; PNID auf die IP (statt einen Hostnamen) gesetzt, um eine Reverse-DNS-Prüfung zu umgehen, solange das Labor-DNS unvollständig war.",
            fr: "<strong>vCenter Server Appliance</strong> : VCSA déployé sur HP13 en deux étapes ; PNID réglé sur l'IP (et non un nom d'hôte) pour éviter une vérification DNS inverse tant que le DNS du labo était incomplet."
        },
        "project.vircl-virtualization.stack.deploy.b3": {
            en: "<strong>Proxmox post-install</strong>: enterprise repo swapped for the no-subscription repo, <code>apt dist-upgrade</code>, and the 1.09&nbsp;TiB volume turned into an LVM-thin pool for VM disks.",
            pt: "<strong>Pós-instalação do Proxmox</strong>: repositório enterprise trocado pelo repositório sem subscrição, <code>apt dist-upgrade</code>, e o volume de 1,09&nbsp;TiB convertido num pool LVM-thin para discos de VM.",
            lu: "<strong>Proxmox no der Installatioun</strong>: Enterprise-Repo géint dat ouni Abonnement gewiesselt, <code>apt dist-upgrade</code>, an de 1,09&nbsp;TiB-Volume an en LVM-thin-Pool fir VM-Disken ëmgewandelt.",
            de: "<strong>Proxmox nach der Installation</strong>: Enterprise-Repo gegen das No-Subscription-Repo getauscht, <code>apt dist-upgrade</code>, und das 1,09&nbsp;TiB-Volume in einen LVM-Thin-Pool für VM-Disks umgewandelt.",
            fr: "<strong>Proxmox post-installation</strong> : dépôt enterprise remplacé par le dépôt sans abonnement, <code>apt dist-upgrade</code>, et le volume de 1,09&nbsp;Tio transformé en pool LVM-thin pour les disques de VM."
        },

        "project.vircl-virtualization.stack.lifecycle.title": {
            en: "VM lifecycle — GUI & CLI",
            pt: "Ciclo de vida da VM — GUI e CLI",
            lu: "VM-Liewenszyklus — GUI & CLI",
            de: "VM-Lebenszyklus — GUI & CLI",
            fr: "Cycle de vie de la VM — GUI & CLI"
        },
        "project.vircl-virtualization.stack.lifecycle.vs": {
            en: "VMware: PowerCLI scripting against vCenter · Proxmox: <code>qm</code> commands straight on the node",
            pt: "VMware: scripts PowerCLI contra o vCenter · Proxmox: comandos <code>qm</code> diretamente no nó",
            lu: "VMware: PowerCLI-Scripting géint de vCenter · Proxmox: <code>qm</code>-Kommandoen direkt um Node",
            de: "VMware: PowerCLI-Skripting gegen vCenter · Proxmox: <code>qm</code>-Befehle direkt auf dem Knoten",
            fr: "VMware : scripts PowerCLI contre vCenter · Proxmox : commandes <code>qm</code> directement sur le nœud"
        },
        "project.vircl-virtualization.stack.lifecycle.b1": {
            en: "<strong>Create both ways</strong>: VMs built through the GUI wizard and again from the CLI (PowerCLI on ESXi, <code>qm</code> on Proxmox), then a Windows client and a Linux server installed inside.",
            pt: "<strong>Criar de duas formas</strong>: VMs criadas pelo assistente da GUI e novamente pela CLI (PowerCLI no ESXi, <code>qm</code> no Proxmox), e depois um cliente Windows e um servidor Linux instalados dentro.",
            lu: "<strong>Op zwou Manéieren erstellen</strong>: VMe iwwer den GUI-Assistent a nach eng Kéier iwwer d'CLI gebaut (PowerCLI um ESXi, <code>qm</code> um Proxmox), an dann e Windows-Client an e Linux-Server dran installéiert.",
            de: "<strong>Auf beide Arten erstellen</strong>: VMs über den GUI-Assistenten und erneut über die CLI gebaut (PowerCLI auf ESXi, <code>qm</code> auf Proxmox), dann ein Windows-Client und ein Linux-Server darin installiert.",
            fr: "<strong>Créer des deux manières</strong> : des VM créées via l'assistant GUI puis à nouveau en CLI (PowerCLI sur ESXi, <code>qm</code> sur Proxmox), puis un client Windows et un serveur Linux installés à l'intérieur."
        },
        "project.vircl-virtualization.stack.lifecycle.b2": {
            en: "<strong>Reconfigure & clone</strong>: live CPU/RAM/disk/NIC changes, full clones, and OVF / vzdump exports — proving the everyday admin workflow on each side.",
            pt: "<strong>Reconfigurar e clonar</strong>: alterações de CPU/RAM/disco/NIC em tempo real, clones completos e exportações OVF / vzdump — provando o fluxo de trabalho diário do administrador em cada lado.",
            lu: "<strong>Nei konfiguréieren & klonen</strong>: CPU/RAM/Disk/NIC live geännert, voll Klonen, an OVF-/vzdump-Exporten — beweist den alldeegleche Admin-Workflow op all Säit.",
            de: "<strong>Neu konfigurieren & klonen</strong>: CPU/RAM/Disk/NIC im laufenden Betrieb ändern, vollständige Klone und OVF-/vzdump-Exporte — beweist den täglichen Admin-Workflow auf beiden Seiten.",
            fr: "<strong>Reconfigurer & cloner</strong> : modifications CPU/RAM/disque/NIC à chaud, clones complets et exports OVF / vzdump — la preuve du flux d'administration quotidien de chaque côté."
        },
        "project.vircl-virtualization.stack.lifecycle.b3": {
            en: "<strong>Snapshots & templates</strong>: point-in-time snapshots and golden templates so new VMs come from a known-good base instead of a fresh install each time.",
            pt: "<strong>Snapshots e templates</strong>: snapshots num ponto no tempo e templates de referência para que novas VMs partam de uma base conhecida e fiável em vez de uma instalação de raiz de cada vez.",
            lu: "<strong>Snapshots & Templates</strong>: Snapshots zu engem bestëmmten Zäitpunkt a Golden-Templates, sou datt nei VMe vun enger bekannter, gudder Basis kommen amplaz all Kéier enger neier Installatioun.",
            de: "<strong>Snapshots & Vorlagen</strong>: Zeitpunkt-Snapshots und Golden Templates, sodass neue VMs aus einer bekannten, guten Basis stammen statt jedes Mal aus einer Neuinstallation.",
            fr: "<strong>Snapshots & modèles</strong> : des snapshots ponctuels et des modèles de référence pour que les nouvelles VM partent d'une base éprouvée plutôt que d'une installation neuve à chaque fois."
        },

        "project.vircl-virtualization.stack.storage.title": {
            en: "Shared storage & live migration",
            pt: "Armazenamento partilhado e migração em tempo real",
            lu: "Gedeelten Späicher & Live-Migratioun",
            de: "Gemeinsamer Speicher & Live-Migration",
            fr: "Stockage partagé & migration à chaud"
        },
        "project.vircl-virtualization.stack.storage.vs": {
            en: "VMware: vMotion & Storage vMotion · Proxmox: online migration over the Corosync cluster",
            pt: "VMware: vMotion e Storage vMotion · Proxmox: migração online sobre o cluster Corosync",
            lu: "VMware: vMotion & Storage vMotion · Proxmox: Online-Migratioun iwwer de Corosync-Cluster",
            de: "VMware: vMotion & Storage vMotion · Proxmox: Online-Migration über den Corosync-Cluster",
            fr: "VMware : vMotion & Storage vMotion · Proxmox : migration en ligne via le cluster Corosync"
        },
        "project.vircl-virtualization.stack.storage.b1": {
            en: "<strong>Two protocols from one NAS</strong>: the Unraid box exposes NFS and iSCSI so each hypervisor could mount shared datastores its preferred way.",
            pt: "<strong>Dois protocolos a partir de um NAS</strong>: a máquina Unraid expõe NFS e iSCSI para que cada hipervisor montasse datastores partilhados da forma preferida.",
            lu: "<strong>Zwee Protokoller vun engem NAS</strong>: d'Unraid-Këscht stellt NFS an iSCSI bereet, sou datt all Hypervisor gedeelt Datastoren op seng léifste Manéier mounten konnt.",
            de: "<strong>Zwei Protokolle aus einem NAS</strong>: die Unraid-Box stellt NFS und iSCSI bereit, sodass jeder Hypervisor gemeinsame Datastores auf die bevorzugte Weise einbinden konnte.",
            fr: "<strong>Deux protocoles depuis un seul NAS</strong> : la machine Unraid expose NFS et iSCSI pour que chaque hyperviseur monte les datastores partagés à sa manière."
        },
        "project.vircl-virtualization.stack.storage.b2": {
            en: "<strong>Storage migration</strong>: moving a VM's disk between local and remote storage live — the prerequisite that makes host migration safe.",
            pt: "<strong>Migração de armazenamento</strong>: mover o disco de uma VM entre armazenamento local e remoto em tempo real — o pré-requisito que torna segura a migração de host.",
            lu: "<strong>Späicher-Migratioun</strong>: d'Disk vun enger VM live tëscht lokalem an entferntem Späicher beweegen — d'Viraussetzung, déi d'Host-Migratioun sécher mécht.",
            de: "<strong>Speicher-Migration</strong>: die Disk einer VM im laufenden Betrieb zwischen lokalem und entferntem Speicher verschieben — die Voraussetzung, die Host-Migration sicher macht.",
            fr: "<strong>Migration de stockage</strong> : déplacer à chaud le disque d'une VM entre stockage local et distant — le prérequis qui rend la migration d'hôte sûre."
        },
        "project.vircl-virtualization.stack.storage.b3": {
            en: "<strong>Host migration</strong>: a running VM moved HP13&nbsp;→&nbsp;HP15 (vMotion) and HP14&nbsp;→&nbsp;HP16 (Proxmox online migration) once its disk lived on shared storage.",
            pt: "<strong>Migração de host</strong>: uma VM em execução movida HP13&nbsp;→&nbsp;HP15 (vMotion) e HP14&nbsp;→&nbsp;HP16 (migração online do Proxmox) depois de o disco estar em armazenamento partilhado.",
            lu: "<strong>Host-Migratioun</strong>: eng lafend VM HP13&nbsp;→&nbsp;HP15 (vMotion) an HP14&nbsp;→&nbsp;HP16 (Proxmox Online-Migratioun) beweegt, soubal d'Disk um gedeelte Späicher louch.",
            de: "<strong>Host-Migration</strong>: eine laufende VM von HP13&nbsp;→&nbsp;HP15 (vMotion) und HP14&nbsp;→&nbsp;HP16 (Proxmox-Online-Migration) verschoben, sobald ihre Disk auf gemeinsamem Speicher lag.",
            fr: "<strong>Migration d'hôte</strong> : une VM en marche déplacée HP13&nbsp;→&nbsp;HP15 (vMotion) et HP14&nbsp;→&nbsp;HP16 (migration en ligne Proxmox) une fois son disque sur le stockage partagé."
        },

        "project.vircl-virtualization.stack.ops.title": {
            en: "Backup, users & patching",
            pt: "Backup, utilizadores e atualizações",
            lu: "Backup, Benotzer & Patching",
            de: "Backup, Benutzer & Patching",
            fr: "Sauvegarde, utilisateurs & mises à jour"
        },
        "project.vircl-virtualization.stack.ops.vs": {
            en: "VMware: <code>vim-cmd</code> config bundle + role-based permissions · Proxmox: <code>vzdump</code> + <code>pveum</code> users/ACLs",
            pt: "VMware: pacote de configuração <code>vim-cmd</code> + permissões baseadas em funções · Proxmox: <code>vzdump</code> + utilizadores/ACLs com <code>pveum</code>",
            lu: "VMware: <code>vim-cmd</code> Config-Bundle + rollebaséiert Rechter · Proxmox: <code>vzdump</code> + <code>pveum</code> Benotzer/ACLs",
            de: "VMware: <code>vim-cmd</code> Konfigurations-Bundle + rollenbasierte Rechte · Proxmox: <code>vzdump</code> + <code>pveum</code> Benutzer/ACLs",
            fr: "VMware : bundle de configuration <code>vim-cmd</code> + permissions par rôle · Proxmox : <code>vzdump</code> + utilisateurs/ACL via <code>pveum</code>"
        },
        "project.vircl-virtualization.stack.ops.b1": {
            en: "<strong>Config & VM backups</strong>: host configuration bundles downloaded on the ESXi side, scheduled <code>vzdump</code> archives on the Proxmox side, plus VM-level export/restore.",
            pt: "<strong>Backups de configuração e de VM</strong>: pacotes de configuração do host descarregados no lado ESXi, arquivos <code>vzdump</code> agendados no lado Proxmox, mais exportação/restauro ao nível da VM.",
            lu: "<strong>Config- & VM-Backups</strong>: Host-Konfiguratiounsbündel op der ESXi-Säit erofgelueden, geplangte <code>vzdump</code>-Archiver op der Proxmox-Säit, plus Export/Restore op VM-Niveau.",
            de: "<strong>Konfig- & VM-Backups</strong>: Host-Konfigurationsbundles auf der ESXi-Seite heruntergeladen, geplante <code>vzdump</code>-Archive auf der Proxmox-Seite, plus Export/Restore auf VM-Ebene.",
            fr: "<strong>Sauvegardes de config & de VM</strong> : bundles de configuration d'hôte téléchargés côté ESXi, archives <code>vzdump</code> planifiées côté Proxmox, plus export/restauration au niveau VM."
        },
        "project.vircl-virtualization.stack.ops.b2": {
            en: "<strong>Users & permissions</strong>: role-based access in vCenter and realm/ACL users in Proxmox, so admin rights are scoped instead of shared-root.",
            pt: "<strong>Utilizadores e permissões</strong>: acesso baseado em funções no vCenter e utilizadores realm/ACL no Proxmox, para que os direitos de administração sejam delimitados em vez de root partilhado.",
            lu: "<strong>Benotzer & Rechter</strong>: rollebaséierten Zougang am vCenter a Realm-/ACL-Benotzer am Proxmox, sou datt Admin-Rechter agegrenzt sinn amplaz vu gedeelte Root.",
            de: "<strong>Benutzer & Rechte</strong>: rollenbasierter Zugriff in vCenter und Realm-/ACL-Benutzer in Proxmox, damit Admin-Rechte eingegrenzt sind statt geteiltes Root.",
            fr: "<strong>Utilisateurs & permissions</strong> : accès par rôle dans vCenter et utilisateurs realm/ACL dans Proxmox, pour des droits d'admin délimités plutôt qu'un root partagé."
        },
        "project.vircl-virtualization.stack.ops.b3": {
            en: "<strong>Patching</strong>: both hypervisors brought to the latest updates from their respective repositories.",
            pt: "<strong>Atualizações</strong>: ambos os hipervisores atualizados para as versões mais recentes dos respetivos repositórios.",
            lu: "<strong>Patching</strong>: béid Hypervisoren op déi lescht Updates aus hire jeeweilege Repositoiren bruecht.",
            de: "<strong>Patching</strong>: beide Hypervisoren auf die neuesten Updates aus ihren jeweiligen Repositories gebracht.",
            fr: "<strong>Mises à jour</strong> : les deux hyperviseurs amenés aux dernières mises à jour de leurs dépôts respectifs."
        },

        "project.vircl-virtualization.stack.cluster.title": {
            en: "Specialisation — Clustering",
            pt: "Especialização — Clustering",
            lu: "Spezialisatioun — Clustering",
            de: "Spezialisierung — Clustering",
            fr: "Spécialisation — Clustering"
        },
        "project.vircl-virtualization.stack.cluster.vs": {
            en: "VMware: central vCenter you deploy first · Proxmox: peer-to-peer, any node joins and Corosync handles quorum",
            pt: "VMware: vCenter central que se implementa primeiro · Proxmox: peer-to-peer, qualquer nó adere e o Corosync trata do quórum",
            lu: "VMware: zentrale vCenter, deen ee fir d'éischt deployéiert · Proxmox: Peer-to-Peer, all Node trëtt bäi an de Corosync këmmert sech ëm de Quorum",
            de: "VMware: zentrales vCenter, das man zuerst bereitstellt · Proxmox: Peer-to-Peer, jeder Knoten tritt bei und Corosync übernimmt das Quorum",
            fr: "VMware : un vCenter central déployé en premier · Proxmox : pair-à-pair, n'importe quel nœud rejoint et Corosync gère le quorum"
        },
        "project.vircl-virtualization.stack.cluster.b1": {
            en: "<strong>Real three-node quorum</strong>: with only two physical hosts per platform, a third node was nested inside the other hypervisor so quorum (and split-brain avoidance) could actually be demonstrated.",
            pt: "<strong>Quórum real de três nós</strong>: com apenas dois hosts físicos por plataforma, um terceiro nó foi aninhado dentro do outro hipervisor para que o quórum (e a prevenção de split-brain) pudesse ser realmente demonstrado.",
            lu: "<strong>Richtege Quorum mat dräi Noden</strong>: mat nëmmen zwee physeschen Hosten pro Plattform gouf en drëtten Node am anere Hypervisor nestéiert, sou datt de Quorum (an d'Verhënnere vu Split-Brain) wierklech konnt demonstréiert ginn.",
            de: "<strong>Echtes Drei-Knoten-Quorum</strong>: mit nur zwei physischen Hosts pro Plattform wurde ein dritter Knoten im jeweils anderen Hypervisor verschachtelt, sodass Quorum (und die Vermeidung von Split-Brain) wirklich demonstriert werden konnte.",
            fr: "<strong>Véritable quorum à trois nœuds</strong> : avec seulement deux hôtes physiques par plateforme, un troisième nœud a été imbriqué dans l'autre hyperviseur afin que le quorum (et l'évitement du split-brain) puisse réellement être démontré."
        },
        "project.vircl-virtualization.stack.cluster.b2": {
            en: "<strong>vCenter side</strong>: <code>VIRCL-Cluster</code> with HP13, HP15 and the nested ESXi host; vSphere HA on, DRS fully automated, shared datastores visible to all hosts.",
            pt: "<strong>Lado vCenter</strong>: <code>VIRCL-Cluster</code> com HP13, HP15 e o host ESXi aninhado; vSphere HA ativo, DRS totalmente automatizado, datastores partilhados visíveis para todos os hosts.",
            lu: "<strong>vCenter-Säit</strong>: <code>VIRCL-Cluster</code> mat HP13, HP15 an dem nestéierten ESXi-Host; vSphere HA un, DRS voll automatiséiert, gedeelt Datastoren fir all Hosten siichtbar.",
            de: "<strong>vCenter-Seite</strong>: <code>VIRCL-Cluster</code> mit HP13, HP15 und dem verschachtelten ESXi-Host; vSphere HA an, DRS vollautomatisiert, gemeinsame Datastores für alle Hosts sichtbar.",
            fr: "<strong>Côté vCenter</strong> : <code>VIRCL-Cluster</code> avec HP13, HP15 et l'hôte ESXi imbriqué ; vSphere HA activé, DRS entièrement automatisé, datastores partagés visibles par tous les hôtes."
        },
        "project.vircl-virtualization.stack.cluster.b3": {
            en: "<strong>Proxmox side</strong>: cluster <code>vircl-team4</code> with HP14, HP16 and a witness pve-nested node; an HA group keeping real workloads on the physical hosts only.",
            pt: "<strong>Lado Proxmox</strong>: cluster <code>vircl-team4</code> com HP14, HP16 e um nó testemunha pve-nested; um grupo HA a manter as cargas reais apenas nos hosts físicos.",
            lu: "<strong>Proxmox-Säit</strong>: Cluster <code>vircl-team4</code> mat HP14, HP16 an engem Zeie-Node pve-nested; eng HA-Grupp, déi richteg Workloads nëmmen op de physeschen Hosten hält.",
            de: "<strong>Proxmox-Seite</strong>: Cluster <code>vircl-team4</code> mit HP14, HP16 und einem Witness-Knoten pve-nested; eine HA-Gruppe, die echte Workloads nur auf den physischen Hosts hält.",
            fr: "<strong>Côté Proxmox</strong> : cluster <code>vircl-team4</code> avec HP14, HP16 et un nœud témoin pve-nested ; un groupe HA qui maintient les charges réelles uniquement sur les hôtes physiques."
        },
        "project.vircl-virtualization.stack.cluster.b4": {
            en: "<strong>Honest limits</strong>: cross-hypervisor moves were treated as export/import (never vMotion), HA restart was never called &quot;zero downtime&quot;, and nested nodes were never used as workload targets.",
            pt: "<strong>Limites honestos</strong>: as movimentações entre hipervisores foram tratadas como exportação/importação (nunca vMotion), o reinício de HA nunca foi chamado de &quot;zero downtime&quot; e os nós aninhados nunca foram usados como destino de cargas.",
            lu: "<strong>Éierlech Grenzen</strong>: Réckele tëscht Hypervisoren goufen als Export/Import behandelt (ni als vMotion), den HA-Neistart gouf ni &quot;zero downtime&quot; genannt, an nestéiert Noden goufen ni als Workload-Ziler benotzt.",
            de: "<strong>Ehrliche Grenzen</strong>: Verschiebungen zwischen Hypervisoren wurden als Export/Import behandelt (nie als vMotion), der HA-Neustart wurde nie &quot;zero downtime&quot; genannt, und verschachtelte Knoten wurden nie als Workload-Ziele genutzt.",
            fr: "<strong>Limites assumées</strong> : les déplacements entre hyperviseurs ont été traités comme export/import (jamais vMotion), le redémarrage HA n'a jamais été qualifié de &quot;zéro interruption&quot;, et les nœuds imbriqués n'ont jamais servi de cibles de charge."
        },

        "project.vircl-virtualization.section.cluster.title": {
            en: "The clustering specialisation, in pictures",
            pt: "A especialização em clustering, em imagens",
            lu: "D'Clustering-Spezialisatioun, a Biller",
            de: "Die Clustering-Spezialisierung in Bildern",
            fr: "La spécialisation clustering, en images"
        },
        "project.vircl-virtualization.section.cluster.body": {
            en: "Both clusters ended up with three nodes thanks to the cross-platform nesting trick. On VMware, vCenter manages HP13, HP15 and the nested ESXi host as one cluster with HA and DRS; on Proxmox, Corosync ties HP14, HP16 and the witness node together and an HA group protects a VM on shared storage.",
            pt: "Ambos os clusters acabaram com três nós graças ao truque de aninhamento entre plataformas. No VMware, o vCenter gere HP13, HP15 e o host ESXi aninhado como um cluster com HA e DRS; no Proxmox, o Corosync liga HP14, HP16 e o nó testemunha, e um grupo HA protege uma VM em armazenamento partilhado.",
            lu: "Béid Clusteren haten um Enn dräi Noden dank dem Nestéieren-Trick iwwer d'Plattformen. Um VMware geréiert de vCenter HP13, HP15 an den nestéierten ESXi-Host als ee Cluster mat HA an DRS; um Proxmox verbënnt de Corosync HP14, HP16 an den Zeie-Node, an eng HA-Grupp schützt eng VM um gedeelte Späicher.",
            de: "Beide Cluster endeten dank des plattformübergreifenden Verschachtelungs-Tricks mit drei Knoten. Bei VMware verwaltet vCenter HP13, HP15 und den verschachtelten ESXi-Host als einen Cluster mit HA und DRS; bei Proxmox verbindet Corosync HP14, HP16 und den Witness-Knoten, und eine HA-Gruppe schützt eine VM auf gemeinsamem Speicher.",
            fr: "Les deux clusters ont fini avec trois nœuds grâce à l'astuce d'imbrication inter-plateformes. Sur VMware, vCenter gère HP13, HP15 et l'hôte ESXi imbriqué comme un seul cluster avec HA et DRS ; sur Proxmox, Corosync relie HP14, HP16 et le nœud témoin, et un groupe HA protège une VM sur le stockage partagé."
        },
        "project.vircl-virtualization.shot.vcenter": {
            en: "vCenter: three ESXi hosts, vSphere HA protected",
            pt: "vCenter: três hosts ESXi, vSphere HA protegido",
            lu: "vCenter: dräi ESXi-Hosten, vSphere HA geschützt",
            de: "vCenter: drei ESXi-Hosts, vSphere HA geschützt",
            fr: "vCenter : trois hôtes ESXi, vSphere HA protégé"
        },
        "project.vircl-virtualization.shot.proxmox": {
            en: "Proxmox cluster vircl-team4: HP14, HP16 + nested node",
            pt: "Cluster Proxmox vircl-team4: HP14, HP16 + nó aninhado",
            lu: "Proxmox-Cluster vircl-team4: HP14, HP16 + nestéierten Node",
            de: "Proxmox-Cluster vircl-team4: HP14, HP16 + verschachtelter Knoten",
            fr: "Cluster Proxmox vircl-team4 : HP14, HP16 + nœud imbriqué"
        },
        "project.vircl-virtualization.shot.drs": {
            en: "vSphere DRS, fully automated",
            pt: "vSphere DRS, totalmente automatizado",
            lu: "vSphere DRS, voll automatiséiert",
            de: "vSphere DRS, vollautomatisiert",
            fr: "vSphere DRS, entièrement automatisé"
        },
        "project.vircl-virtualization.shot.migration": {
            en: "Proxmox online migration, HP14 → HP16",
            pt: "Migração online do Proxmox, HP14 → HP16",
            lu: "Proxmox Online-Migratioun, HP14 → HP16",
            de: "Proxmox-Online-Migration, HP14 → HP16",
            fr: "Migration en ligne Proxmox, HP14 → HP16"
        },

        "project.vircl-virtualization.section.why.title": {
            en: "How the project ran",
            pt: "Como decorreu o projeto",
            lu: "Wéi de Projet gelaf ass",
            de: "Wie das Projekt ablief",
            fr: "Comment le projet s'est déroulé"
        },
        "project.vircl-virtualization.section.why.body1": {
            en: "The brief was deliberately broad: <strong>become an expert in two hypervisors and prove it</strong> through a documented report, a video tutorial, and a presentation. Andrea and I split the hosts — he led HP13 (ESXi + vCenter) and HP16 (Proxmox), I led HP14 (Proxmox) and we shared HP15 (ESXi).",
            pt: "O enunciado era propositadamente amplo: <strong>tornar-se perito em dois hipervisores e prová-lo</strong> através de um relatório documentado, um tutorial em vídeo e uma apresentação. O Andrea e eu dividimos os hosts — ele liderou o HP13 (ESXi + vCenter) e o HP16 (Proxmox), eu liderei o HP14 (Proxmox) e partilhámos o HP15 (ESXi).",
            lu: "D'Opgab war bewosst breet: <strong>Expert an zwee Hypervisoren ze ginn an et ze beweisen</strong> mat engem dokumentéierte Rapport, engem Video-Tutorial an enger Presentatioun. Den Andrea an ech hunn d'Hosten opgedeelt — hien huet HP13 (ESXi + vCenter) an HP16 (Proxmox) gemaach, ech HP14 (Proxmox), an HP15 (ESXi) hu mir gedeelt.",
            de: "Die Aufgabe war bewusst breit: <strong>Experte für zwei Hypervisoren werden und es beweisen</strong> — mit einem dokumentierten Bericht, einem Video-Tutorial und einer Präsentation. Andrea und ich teilten die Hosts auf — er übernahm HP13 (ESXi + vCenter) und HP16 (Proxmox), ich HP14 (Proxmox), und HP15 (ESXi) teilten wir uns.",
            fr: "Le sujet était volontairement large : <strong>devenir expert de deux hyperviseurs et le prouver</strong> via un rapport documenté, un tutoriel vidéo et une présentation. Andrea et moi avons réparti les hôtes — il a piloté HP13 (ESXi + vCenter) et HP16 (Proxmox), j'ai piloté HP14 (Proxmox) et nous avons partagé HP15 (ESXi)."
        },
        "project.vircl-virtualization.section.why.body2": {
            en: "We then worked through <strong>seventeen virtualization features on both platforms</strong> — deployment, VM creation by GUI and CLI, guest installs, resource changes, cloning, export, backups, snapshots, templates, shared storage, storage and host migration, users, and patching — comparing each one and writing down the problems honestly.",
            pt: "Depois trabalhámos <strong>dezassete funcionalidades de virtualização em ambas as plataformas</strong> — implementação, criação de VMs por GUI e CLI, instalação de convidados, alterações de recursos, clonagem, exportação, backups, snapshots, templates, armazenamento partilhado, migração de armazenamento e de host, utilizadores e atualizações — comparando cada uma e registando os problemas com honestidade.",
            lu: "Duerno hu mir <strong>siwwzéng Virtualiséierungsfunktiounen op béide Plattformen</strong> duerchgeschafft — Deployment, VM-Erstellung iwwer GUI a CLI, Gaascht-Installatiounen, Ressourcenännerungen, Klonen, Export, Backups, Snapshots, Templates, gedeelte Späicher, Späicher- an Host-Migratioun, Benotzer a Patching — all eenzel verglach an d'Problemer éierlech opgeschriwwen.",
            de: "Dann arbeiteten wir <strong>siebzehn Virtualisierungsfunktionen auf beiden Plattformen</strong> durch — Bereitstellung, VM-Erstellung per GUI und CLI, Gast-Installationen, Ressourcenänderungen, Klonen, Export, Backups, Snapshots, Vorlagen, gemeinsamer Speicher, Speicher- und Host-Migration, Benutzer und Patching — verglichen jede einzeln und hielten die Probleme ehrlich fest.",
            fr: "Nous avons ensuite traité <strong>dix-sept fonctionnalités de virtualisation sur les deux plateformes</strong> — déploiement, création de VM en GUI et CLI, installations invitées, modifications de ressources, clonage, export, sauvegardes, snapshots, modèles, stockage partagé, migration de stockage et d'hôte, utilisateurs et mises à jour — en comparant chacune et en consignant honnêtement les problèmes."
        },
        "project.vircl-virtualization.section.why.body3": {
            en: "Our chosen specialisation was <strong>Clustering</strong>. Four hosts only give two nodes per platform, which is weak for explaining quorum — so we nested a third node inside the opposite hypervisor on each side, giving both clusters a genuine three-vote design with HA, DRS, and live migration to show off.",
            pt: "A nossa especialização escolhida foi <strong>Clustering</strong>. Quatro hosts só dão dois nós por plataforma, o que é fraco para explicar o quórum — por isso aninhámos um terceiro nó dentro do hipervisor oposto de cada lado, dando a ambos os clusters um verdadeiro desenho de três votos com HA, DRS e migração em tempo real para demonstrar.",
            lu: "Eis gewielten Spezialisatioun war <strong>Clustering</strong>. Véier Hosten ginn nëmmen zwee Noden pro Plattform, wat schwaach ass fir de Quorum z'erklären — dofir hu mir op all Säit en drëtten Node am géigeniwwerleienden Hypervisor nestéiert, sou datt béid Clusteren e richtegen Dräi-Stëmmen-Design mat HA, DRS a Live-Migratioun hu fir ze weisen.",
            de: "Unsere gewählte Spezialisierung war <strong>Clustering</strong>. Vier Hosts ergeben nur zwei Knoten pro Plattform, was zum Erklären von Quorum zu schwach ist — also verschachtelten wir auf jeder Seite einen dritten Knoten im jeweils anderen Hypervisor und gaben beiden Clustern ein echtes Drei-Stimmen-Design mit HA, DRS und Live-Migration zum Vorführen.",
            fr: "Notre spécialisation choisie était le <strong>Clustering</strong>. Quatre hôtes ne donnent que deux nœuds par plateforme, ce qui est trop faible pour expliquer le quorum — nous avons donc imbriqué de chaque côté un troisième nœud dans l'hyperviseur opposé, offrant aux deux clusters une vraie conception à trois votes avec HA, DRS et migration à chaud à présenter."
        },

        "project.vircl-virtualization.section.lessons.title": {
            en: "Lessons learned",
            pt: "Lições aprendidas",
            lu: "Geléiert Lektioune",
            de: "Gelernte Lektionen",
            fr: "Leçons apprises"
        },
        "project.vircl-virtualization.lessons.subnet.title": {
            en: "/16 vs /24 bites first",
            pt: "/16 vs /24 morde primeiro",
            lu: "/16 géint /24 bäisst als éischt",
            de: "/16 vs. /24 beißt zuerst",
            fr: "/16 contre /24, le premier piège"
        },
        "project.vircl-virtualization.lessons.subnet.body": {
            en: "Both installers default to a /24 mask, but the lab is /16. Get it wrong and the node is reachable from its own subnet but cut off from everything else. Fixed on HP14, never repeated.",
            pt: "Ambos os instaladores assumem por defeito uma máscara /24, mas o laboratório é /16. Se errar, o nó fica acessível na própria sub-rede mas isolado de tudo o resto. Corrigido no HP14, nunca repetido.",
            lu: "Béid Installateuren huelen standardméisseg eng /24-Mask, mä de Labo ass /16. Mécht een et falsch, ass den Node aus senger eegener Subnet erreechbar, awer vum Rescht ofgeschnidden. Op HP14 gefléckt, ni méi widderholl.",
            de: "Beide Installer nutzen standardmäßig eine /24-Maske, aber das Labor ist /16. Macht man es falsch, ist der Knoten aus dem eigenen Subnetz erreichbar, aber vom Rest abgeschnitten. Auf HP14 behoben, nie wiederholt.",
            fr: "Les deux installateurs utilisent par défaut un masque /24, mais le labo est en /16. En cas d'erreur, le nœud est joignable depuis son propre sous-réseau mais coupé du reste. Corrigé sur HP14, jamais reproduit."
        },
        "project.vircl-virtualization.lessons.hostname.title": {
            en: "ESXi hates dots",
            pt: "O ESXi detesta pontos",
            lu: "ESXi haasst Punkten",
            de: "ESXi hasst Punkte",
            fr: "ESXi déteste les points"
        },
        "project.vircl-virtualization.lessons.hostname.body": {
            en: "The ESXi installer splits hostname and domain into two fields — typing <code>hp13.vircl.local</code> in the hostname box fails silently. Short name in one field, domain in the other.",
            pt: "O instalador do ESXi separa o hostname e o domínio em dois campos — escrever <code>hp13.vircl.local</code> no campo do hostname falha em silêncio. Nome curto num campo, domínio no outro.",
            lu: "Den ESXi-Installer deelt Hostnumm an Domain an zwee Felder op — <code>hp13.vircl.local</code> an d'Hostnumm-Feld ze schreiwen feelt roueg. Kuerznumm an engem Feld, Domain am aneren.",
            de: "Der ESXi-Installer trennt Hostname und Domain in zwei Felder — <code>hp13.vircl.local</code> ins Hostname-Feld zu tippen schlägt stillschweigend fehl. Kurzname in das eine Feld, Domain in das andere.",
            fr: "L'installateur ESXi sépare le nom d'hôte et le domaine en deux champs — saisir <code>hp13.vircl.local</code> dans le champ du nom d'hôte échoue sans message. Nom court dans un champ, domaine dans l'autre."
        },
        "project.vircl-virtualization.lessons.pnid.title": {
            en: "vCenter needs DNS",
            pt: "O vCenter precisa de DNS",
            lu: "vCenter brauch DNS",
            de: "vCenter braucht DNS",
            fr: "vCenter a besoin du DNS"
        },
        "project.vircl-virtualization.lessons.pnid.body": {
            en: "VCSA Stage 2 does a reverse-DNS lookup on the PNID. With lab DNS half-populated, using the IP as the PNID avoided a deployment that would otherwise stall.",
            pt: "A Fase 2 do VCSA faz uma pesquisa de DNS inverso ao PNID. Com o DNS do laboratório meio configurado, usar o IP como PNID evitou uma implementação que de outro modo encravaria.",
            lu: "VCSA Etapp 2 mécht e Reverse-DNS-Lookup um PNID. Mat hallef-konfiguréiertem Labo-DNS huet d'Benotze vun der IP als PNID e Deployment verhënnert, dat soss bliwwe wier.",
            de: "VCSA Stufe 2 macht einen Reverse-DNS-Lookup auf die PNID. Mit halb gepflegtem Labor-DNS verhinderte die Verwendung der IP als PNID eine Bereitstellung, die sonst hängen geblieben wäre.",
            fr: "L'étape 2 de VCSA effectue une résolution DNS inverse sur le PNID. Le DNS du labo étant à moitié rempli, utiliser l'IP comme PNID a évité un déploiement qui aurait sinon bloqué."
        },
        "project.vircl-virtualization.lessons.forged.title": {
            en: "Forged Transmits drops nested traffic",
            pt: "Forged Transmits descarta tráfego aninhado",
            lu: "Forged Transmits verléiert nestéierten Trafic",
            de: "Forged Transmits verwirft verschachtelten Verkehr",
            fr: "Forged Transmits bloque le trafic imbriqué"
        },
        "project.vircl-virtualization.lessons.forged.body": {
            en: "A nested Proxmox node went silent because the ESXi vSwitch rejects &quot;Forged Transmits&quot; by default, killing replies from the inner Linux bridge. One setting, a whole troubleshooting session to find.",
            pt: "Um nó Proxmox aninhado ficou em silêncio porque o vSwitch do ESXi rejeita &quot;Forged Transmits&quot; por defeito, matando as respostas da bridge Linux interna. Uma única definição, uma sessão inteira de diagnóstico para encontrar.",
            lu: "En nestéierten Proxmox-Node ass roueg ginn, well den ESXi-vSwitch &quot;Forged Transmits&quot; standardméisseg refuséiert an d'Äntwerte vun der bannenzeger Linux-Bridge killt. Eng Astellung, eng ganz Troubleshooting-Sessioun fir se ze fannen.",
            de: "Ein verschachtelter Proxmox-Knoten verstummte, weil der ESXi-vSwitch &quot;Forged Transmits&quot; standardmäßig ablehnt und Antworten der inneren Linux-Bridge verwirft. Eine Einstellung, eine ganze Fehlersuche, um sie zu finden.",
            fr: "Un nœud Proxmox imbriqué est devenu muet parce que le vSwitch ESXi rejette &quot;Forged Transmits&quot; par défaut, supprimant les réponses du pont Linux interne. Un seul réglage, toute une session de dépannage pour le trouver."
        },
        "project.vircl-virtualization.lessons.disk.title": {
            en: "Trust size, not /dev/sdX",
            pt: "Confie no tamanho, não em /dev/sdX",
            lu: "Vertrau der Gréisst, net /dev/sdX",
            de: "Auf die Größe vertrauen, nicht auf /dev/sdX",
            fr: "Fiez-vous à la taille, pas à /dev/sdX"
        },
        "project.vircl-virtualization.lessons.disk.body": {
            en: "HPE Smart Array re-enumerates disks on the first reboot, so the device letter you installed onto can change. Always pick the target disk by its size.",
            pt: "O HPE Smart Array volta a enumerar os discos no primeiro reinício, por isso a letra do dispositivo onde instalou pode mudar. Escolha sempre o disco de destino pelo tamanho.",
            lu: "HPE Smart Array zielt d'Disken beim éischte Neistart nei, sou datt de Buschtaf, op deen een installéiert huet, ka wiesselen. Wiel d'Zil-Disk ëmmer no hirer Gréisst.",
            de: "HPE Smart Array nummeriert die Disks beim ersten Neustart neu, sodass sich der Gerätebuchstabe, auf den man installiert hat, ändern kann. Wähle die Ziel-Disk immer nach ihrer Größe.",
            fr: "HPE Smart Array réénumère les disques au premier redémarrage, donc la lettre du périphérique sur lequel vous avez installé peut changer. Choisissez toujours le disque cible par sa taille."
        },
        "project.vircl-virtualization.lessons.foundation.title": {
            en: "Storage first, features later",
            pt: "Primeiro o armazenamento, depois as funcionalidades",
            lu: "Éischt de Späicher, dann d'Funktiounen",
            de: "Erst Speicher, dann Funktionen",
            fr: "Le stockage d'abord, les fonctionnalités ensuite"
        },
        "project.vircl-virtualization.lessons.foundation.body": {
            en: "vMotion, online migration, HA and templates only ever worked once shared storage, clean networking and central management were all correct at the same time.",
            pt: "vMotion, migração online, HA e templates só funcionaram quando o armazenamento partilhado, a rede limpa e a gestão central estavam todos corretos ao mesmo tempo.",
            lu: "vMotion, Online-Migratioun, HA an Templates hunn eréischt funktionéiert, wéi gedeelte Späicher, propper Netzwierk an zentrale Gestioun all gläichzäiteg richteg waren.",
            de: "vMotion, Online-Migration, HA und Vorlagen funktionierten erst, als gemeinsamer Speicher, sauberes Netzwerk und zentrale Verwaltung gleichzeitig korrekt waren.",
            fr: "vMotion, migration en ligne, HA et modèles n'ont fonctionné qu'une fois le stockage partagé, le réseau propre et la gestion centralisée tous corrects en même temps."
        },

        "project.vircl-virtualization.section.deliverables.title": {
            en: "Deliverables",
            pt: "Entregáveis",
            lu: "Liwwerungen",
            de: "Liefergegenstände",
            fr: "Livrables"
        },
        "project.vircl-virtualization.deliverables.docs": {
            en: "A feature-by-feature documentation report comparing both hypervisors",
            pt: "Um relatório de documentação funcionalidade a funcionalidade comparando ambos os hipervisores",
            lu: "E Dokumentatiounsrapport Funktioun fir Funktioun, deen déi zwee Hypervisoren vergläicht",
            de: "Ein Dokumentationsbericht Funktion für Funktion, der beide Hypervisoren vergleicht",
            fr: "Un rapport de documentation fonctionnalité par fonctionnalité comparant les deux hyperviseurs"
        },
        "project.vircl-virtualization.deliverables.video": {
            en: "Video tutorials demonstrating clustering on ESXi/vCenter and Proxmox",
            pt: "Tutoriais em vídeo a demonstrar clustering no ESXi/vCenter e no Proxmox",
            lu: "Video-Tutorialen, déi Clustering um ESXi/vCenter an um Proxmox weisen",
            de: "Video-Tutorials, die Clustering auf ESXi/vCenter und Proxmox demonstrieren",
            fr: "Des tutoriels vidéo démontrant le clustering sur ESXi/vCenter et Proxmox"
        },
        "project.vircl-virtualization.deliverables.pres": {
            en: "A live specialisation presentation on clustering",
            pt: "Uma apresentação ao vivo da especialização em clustering",
            lu: "Eng Live-Presentatioun vun der Spezialisatioun iwwer Clustering",
            de: "Eine Live-Präsentation der Spezialisierung zu Clustering",
            fr: "Une présentation en direct de la spécialisation clustering"
        },
        "project.vircl-virtualization.deliverables.clusters": {
            en: "Two working three-node clusters across four physical servers",
            pt: "Dois clusters funcionais de três nós em quatro servidores físicos",
            lu: "Zwee funktionéierend Dräi-Node-Clusteren iwwer véier physesch Serveren",
            de: "Zwei funktionierende Drei-Knoten-Cluster über vier physische Server",
            fr: "Deux clusters fonctionnels à trois nœuds répartis sur quatre serveurs physiques"
        },

        "project.vircl-virtualization.sidebar.tech.esxi": {
            en: "VMware ESXi 8.0", pt: "VMware ESXi 8.0", lu: "VMware ESXi 8.0", de: "VMware ESXi 8.0", fr: "VMware ESXi 8.0"
        },
        "project.vircl-virtualization.sidebar.tech.vcenter": {
            en: "vCenter Server (VCSA)", pt: "vCenter Server (VCSA)", lu: "vCenter Server (VCSA)", de: "vCenter Server (VCSA)", fr: "vCenter Server (VCSA)"
        },
        "project.vircl-virtualization.sidebar.tech.proxmox": {
            en: "Proxmox VE 9 (KVM + LXC)", pt: "Proxmox VE 9 (KVM + LXC)", lu: "Proxmox VE 9 (KVM + LXC)", de: "Proxmox VE 9 (KVM + LXC)", fr: "Proxmox VE 9 (KVM + LXC)"
        },
        "project.vircl-virtualization.sidebar.tech.cli": {
            en: "PowerCLI + qm / pveum CLI", pt: "PowerCLI + qm / pveum CLI", lu: "PowerCLI + qm / pveum CLI", de: "PowerCLI + qm / pveum CLI", fr: "PowerCLI + qm / pveum CLI"
        },
        "project.vircl-virtualization.sidebar.tech.cluster": {
            en: "vSphere HA/DRS + Corosync", pt: "vSphere HA/DRS + Corosync", lu: "vSphere HA/DRS + Corosync", de: "vSphere HA/DRS + Corosync", fr: "vSphere HA/DRS + Corosync"
        },
        "project.vircl-virtualization.sidebar.tech.storage": {
            en: "Unraid · NFS + iSCSI", pt: "Unraid · NFS + iSCSI", lu: "Unraid · NFS + iSCSI", de: "Unraid · NFS + iSCSI", fr: "Unraid · NFS + iSCSI"
        },
        "project.vircl-virtualization.sidebar.tech.disks": {
            en: "VMFS · LVM-thin", pt: "VMFS · LVM-thin", lu: "VMFS · LVM-thin", de: "VMFS · LVM-thin", fr: "VMFS · LVM-thin"
        },
        "project.vircl-virtualization.sidebar.tech.backup": {
            en: "vzdump + ESXi config backup",
            pt: "vzdump + backup de config do ESXi",
            lu: "vzdump + ESXi-Config-Backup",
            de: "vzdump + ESXi-Konfig-Backup",
            fr: "vzdump + sauvegarde config ESXi"
        },
        "project.vircl-virtualization.sidebar.tech.hardware": {
            en: "HP ProLiant DL380 Gen10 + iLO", pt: "HP ProLiant DL380 Gen10 + iLO", lu: "HP ProLiant DL380 Gen10 + iLO", de: "HP ProLiant DL380 Gen10 + iLO", fr: "HP ProLiant DL380 Gen10 + iLO"
        },
        "project.vircl-virtualization.sidebar.tech.guests": {
            en: "Windows 10 + Lubuntu guests",
            pt: "Convidados Windows 10 + Lubuntu",
            lu: "Windows 10 + Lubuntu Gäscht",
            de: "Windows-10- + Lubuntu-Gäste",
            fr: "Invités Windows 10 + Lubuntu"
        },

        "project.vircl-virtualization.sidebar.features.dual": {
            en: "Two hypervisors fully compared, feature by feature",
            pt: "Dois hipervisores totalmente comparados, funcionalidade a funcionalidade",
            lu: "Zwee Hypervisoren komplett verglach, Funktioun fir Funktioun",
            de: "Zwei Hypervisoren vollständig verglichen, Funktion für Funktion",
            fr: "Deux hyperviseurs entièrement comparés, fonctionnalité par fonctionnalité"
        },
        "project.vircl-virtualization.sidebar.features.lifecycle": {
            en: "VM creation via GUI and CLI on both",
            pt: "Criação de VMs por GUI e CLI em ambos",
            lu: "VM-Erstellung iwwer GUI a CLI op béiden",
            de: "VM-Erstellung per GUI und CLI auf beiden",
            fr: "Création de VM en GUI et CLI sur les deux"
        },
        "project.vircl-virtualization.sidebar.features.snaptpl": {
            en: "Snapshots, templates, clones and exports",
            pt: "Snapshots, templates, clones e exportações",
            lu: "Snapshots, Templates, Klonen an Exporten",
            de: "Snapshots, Vorlagen, Klone und Exporte",
            fr: "Snapshots, modèles, clones et exports"
        },
        "project.vircl-virtualization.sidebar.features.storage": {
            en: "Shared NFS + iSCSI storage from Unraid",
            pt: "Armazenamento partilhado NFS + iSCSI a partir do Unraid",
            lu: "Gedeelten NFS- + iSCSI-Späicher vum Unraid",
            de: "Gemeinsamer NFS- + iSCSI-Speicher von Unraid",
            fr: "Stockage partagé NFS + iSCSI depuis Unraid"
        },
        "project.vircl-virtualization.sidebar.features.migration": {
            en: "Live storage and host migration",
            pt: "Migração de armazenamento e de host em tempo real",
            lu: "Live Späicher- an Host-Migratioun",
            de: "Live-Speicher- und Host-Migration",
            fr: "Migration de stockage et d'hôte à chaud"
        },
        "project.vircl-virtualization.sidebar.features.backup": {
            en: "Hypervisor and VM backups",
            pt: "Backups do hipervisor e de VMs",
            lu: "Hypervisor- a VM-Backups",
            de: "Hypervisor- und VM-Backups",
            fr: "Sauvegardes de l'hyperviseur et des VM"
        },
        "project.vircl-virtualization.sidebar.features.access": {
            en: "Role-based users and permissions",
            pt: "Utilizadores e permissões baseados em funções",
            lu: "Rollebaséiert Benotzer a Rechter",
            de: "Rollenbasierte Benutzer und Rechte",
            fr: "Utilisateurs et permissions par rôle"
        },
        "project.vircl-virtualization.sidebar.features.cluster": {
            en: "Cross-platform nested three-node clusters",
            pt: "Clusters de três nós aninhados entre plataformas",
            lu: "Plattformiwwergräifend nestéiert Dräi-Node-Clusteren",
            de: "Plattformübergreifend verschachtelte Drei-Knoten-Cluster",
            fr: "Clusters à trois nœuds imbriqués entre plateformes"
        },
        "project.vircl-virtualization.sidebar.features.ha": {
            en: "vSphere HA/DRS and Proxmox HA groups",
            pt: "vSphere HA/DRS e grupos HA do Proxmox",
            lu: "vSphere HA/DRS a Proxmox HA-Gruppen",
            de: "vSphere HA/DRS und Proxmox-HA-Gruppen",
            fr: "vSphere HA/DRS et groupes HA Proxmox"
        },
        "project.vircl-virtualization.sidebar.features.team": {
            en: "Two-person team, June 2026",
            pt: "Equipa de duas pessoas, junho de 2026",
            lu: "Team vun zwou Persounen, Juni 2026",
            de: "Zweier-Team, Juni 2026",
            fr: "Équipe de deux personnes, juin 2026"
        },

        "project.vircl-virtualization.sidebar.team.title": {
            en: "Team",
            pt: "Equipa",
            lu: "Team",
            de: "Team",
            fr: "Équipe"
        },
        "project.vircl-virtualization.sidebar.team.size": {
            en: "Duo project · 2 people",
            pt: "Projeto a dois · 2 pessoas",
            lu: "Duo-Projet · 2 Persounen",
            de: "Duo-Projekt · 2 Personen",
            fr: "Projet en duo · 2 personnes"
        },
        "project.vircl-virtualization.sidebar.team.split": {
            en: "I led HP14 (Proxmox) and shared HP15 (ESXi); Andrea led HP13 (ESXi + vCenter) and HP16 (Proxmox).",
            pt: "Liderei o HP14 (Proxmox) e partilhei o HP15 (ESXi); o Andrea liderou o HP13 (ESXi + vCenter) e o HP16 (Proxmox).",
            lu: "Ech hu HP14 (Proxmox) gefouert an HP15 (ESXi) gedeelt; den Andrea huet HP13 (ESXi + vCenter) an HP16 (Proxmox) gefouert.",
            de: "Ich leitete HP14 (Proxmox) und teilte mir HP15 (ESXi); Andrea leitete HP13 (ESXi + vCenter) und HP16 (Proxmox).",
            fr: "J'ai dirigé HP14 (Proxmox) et partagé HP15 (ESXi) ; Andrea a dirigé HP13 (ESXi + vCenter) et HP16 (Proxmox)."
        },

        "project.vircl-virtualization.section.assets.title": {
            en: "Read the full report",
            pt: "Ler o relatório completo",
            lu: "De ganze Rapport liesen",
            de: "Den vollständigen Bericht lesen",
            fr: "Lire le rapport complet"
        },
        "project.vircl-virtualization.section.assets.body": {
            en: "The complete graded deliverables — the feature-by-feature documentation comparing both hypervisors, and the clustering specialisation slides.",
            pt: "Os entregáveis avaliados completos — a documentação funcionalidade a funcionalidade comparando ambos os hipervisores e os slides da especialização em clustering.",
            lu: "Déi komplett bewäert Liwwerungen — d'Dokumentatioun Funktioun fir Funktioun, déi déi zwee Hypervisoren vergläicht, an d'Foilen vun der Clustering-Spezialisatioun.",
            de: "Die vollständigen benoteten Liefergegenstände — die Dokumentation Funktion für Funktion im Vergleich beider Hypervisoren und die Folien der Clustering-Spezialisierung.",
            fr: "Les livrables évalués complets — la documentation fonctionnalité par fonctionnalité comparant les deux hyperviseurs et les diapositives de la spécialisation clustering."
        },
        "project.vircl-virtualization.asset.documentation.title": {
            en: "Documentation",
            pt: "Documentação",
            lu: "Dokumentatioun",
            de: "Dokumentation",
            fr: "Documentation"
        },
        "project.vircl-virtualization.asset.documentation.desc": {
            en: "The full VIRCL documentation report: all 17 virtualization features implemented and compared on VMware ESXi/vCenter and Proxmox VE, with screenshots, commands, and the clustering specialisation.",
            pt: "O relatório de documentação VIRCL completo: as 17 funcionalidades de virtualização implementadas e comparadas no VMware ESXi/vCenter e no Proxmox VE, com capturas de ecrã, comandos e a especialização em clustering.",
            lu: "De ganze VIRCL-Dokumentatiounsrapport: all 17 Virtualiséierungsfunktiounen op VMware ESXi/vCenter a Proxmox VE ëmgesat a verglach, mat Screenshots, Kommandoen an der Clustering-Spezialisatioun.",
            de: "Der vollständige VIRCL-Dokumentationsbericht: alle 17 Virtualisierungsfunktionen auf VMware ESXi/vCenter und Proxmox VE umgesetzt und verglichen, mit Screenshots, Befehlen und der Clustering-Spezialisierung.",
            fr: "Le rapport de documentation VIRCL complet : les 17 fonctionnalités de virtualisation implémentées et comparées sur VMware ESXi/vCenter et Proxmox VE, avec captures d'écran, commandes et la spécialisation clustering."
        },
        "project.vircl-virtualization.asset.documentation.button": {
            en: "Download Documentation (PDF)",
            pt: "Descarregar Documentação (PDF)",
            lu: "Dokumentatioun eroflueden (PDF)",
            de: "Dokumentation herunterladen (PDF)",
            fr: "Télécharger la documentation (PDF)"
        },
        "project.vircl-virtualization.asset.presentation.title": {
            en: "Presentation",
            pt: "Apresentação",
            lu: "Presentatioun",
            de: "Präsentation",
            fr: "Présentation"
        },
        "project.vircl-virtualization.asset.presentation.desc": {
            en: "The specialisation presentation on clustering, used for the graded live demonstration on both hypervisors.",
            pt: "A apresentação da especialização em clustering, usada na demonstração ao vivo avaliada em ambos os hipervisores.",
            lu: "D'Presentatioun vun der Spezialisatioun iwwer Clustering, benotzt fir déi bewäert Live-Demonstratioun op béide Hypervisoren.",
            de: "Die Spezialisierungspräsentation zu Clustering, verwendet für die benotete Live-Demonstration auf beiden Hypervisoren.",
            fr: "La présentation de la spécialisation clustering, utilisée pour la démonstration en direct évaluée sur les deux hyperviseurs."
        },
        "project.vircl-virtualization.asset.presentation.button": {
            en: "Download Presentation (PDF)",
            pt: "Descarregar Apresentação (PDF)",
            lu: "Presentatioun eroflueden (PDF)",
            de: "Präsentation herunterladen (PDF)",
            fr: "Télécharger la présentation (PDF)"
        }
    };

    if (typeof translations === 'undefined') {
        globalThis.translations = {};
    }
    Object.assign(translations, extra);
})();
