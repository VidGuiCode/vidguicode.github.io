/**
 * UnRAID Storage Server (NAS) project page translations.
 * Languages: en, pt, lu, de, fr
 *
 * Keys follow the project.unraid.* convention. Card-listing keys
 * (projects.unraid.title / .desc) live in translations/core.js.
 */

(function () {
    'use strict';
    const extra = {
        "project.unraid.meta.title": {
            en: "UnRAID Storage Server (NAS) | VidGuiCode",
            pt: "Servidor de Armazenamento UnRAID (NAS) | VidGuiCode",
            lu: "UnRAID Späicherserver (NAS) | VidGuiCode",
            de: "UnRAID Speicherserver (NAS) | VidGuiCode",
            fr: "Serveur de stockage UnRAID (NAS) | VidGuiCode"
        },
        "project.unraid.meta.desc": {
            en: "School NAS project: staging and configuring an Intel 2U rack server with UnRAID, hardware RAID 5 (Areca ARC-1880), Btrfs RAID 1, SMB shares, per-user permissions, and an iSCSI block-storage target.",
            pt: "Projeto escolar de NAS: preparação e configuração de um servidor rack Intel 2U com UnRAID, RAID 5 por hardware (Areca ARC-1880), RAID 1 Btrfs, partilhas SMB, permissões por utilizador e um alvo de armazenamento em bloco iSCSI.",
            lu: "Schoulprojet NAS: Opbau a Konfiguratioun vun engem Intel 2U Rackserver mat UnRAID, Hardware-RAID 5 (Areca ARC-1880), Btrfs-RAID 1, SMB-Deelungen, Rechter pro Benotzer an engem iSCSI-Block-Späicher-Zil.",
            de: "Schul-NAS-Projekt: Aufbau und Konfiguration eines Intel-2U-Rackservers mit UnRAID, Hardware-RAID 5 (Areca ARC-1880), Btrfs-RAID 1, SMB-Freigaben, Rechten pro Benutzer und einem iSCSI-Blockspeicher-Ziel.",
            fr: "Projet scolaire NAS : préparation et configuration d'un serveur rack Intel 2U avec UnRAID, RAID 5 matériel (Areca ARC-1880), RAID 1 Btrfs, partages SMB, permissions par utilisateur et une cible de stockage en bloc iSCSI."
        },
        "project.unraid.badge": {
            en: "SCHOOL PROJECT",
            pt: "PROJETO ESCOLAR",
            lu: "SCHOULPROJET",
            de: "SCHULPROJEKT",
            fr: "PROJET SCOLAIRE"
        },
        "project.unraid.title": {
            en: "UnRAID Storage Server (NAS)",
            pt: "Servidor de Armazenamento UnRAID (NAS)",
            lu: "UnRAID Späicherserver (NAS)",
            de: "UnRAID Speicherserver (NAS)",
            fr: "Serveur de stockage UnRAID (NAS)"
        },
        "project.unraid.subtitle": {
            en: "A rack server taken from bare metal to a working multi-user NAS. Hardware RAID 5, a Btrfs mirror, SMB shares with per-user permissions, and an iSCSI block-storage target.",
            pt: "Um servidor rack levado do zero até um NAS multiutilizador a funcionar. RAID 5 por hardware, um espelho Btrfs, partilhas SMB com permissões por utilizador e um alvo de armazenamento em bloco iSCSI.",
            lu: "E Rackserver, vu blank Hardware bis zu engem funktionnellen Multi-User-NAS. Hardware-RAID 5, e Btrfs-Spigel, SMB-Deelungen mat Rechter pro Benotzer an en iSCSI-Block-Späicher-Zil.",
            de: "Ein Rackserver, von blanker Hardware bis zu einem laufenden Mehrbenutzer-NAS. Hardware-RAID 5, ein Btrfs-Spiegel, SMB-Freigaben mit Rechten pro Benutzer und ein iSCSI-Blockspeicher-Ziel.",
            fr: "Un serveur rack mené du matériel nu jusqu'à un NAS multi-utilisateurs fonctionnel. RAID 5 matériel, un miroir Btrfs, des partages SMB avec permissions par utilisateur et une cible de stockage en bloc iSCSI."
        },
        "project.unraid.labBadge": {
            en: "CLOUD INFRASTRUCTURE 2 · NAS",
            pt: "CLOUD INFRASTRUCTURE 2 · NAS",
            lu: "CLOUD INFRASTRUCTURE 2 · NAS",
            de: "CLOUD INFRASTRUCTURE 2 · NAS",
            fr: "CLOUD INFRASTRUCTURE 2 · NAS"
        },
        "project.unraid.section.overview.title": {
            en: "Overview",
            pt: "Visão geral",
            lu: "Iwwersiicht",
            de: "Überblick",
            fr: "Aperçu"
        },
        "project.unraid.section.overview.body": {
            en: "For the Cloud Infrastructure 2 module of my BTS Cloud Computing, my team of two was handed a bare Intel 2U rack server and told to turn it into a working storage box. We fitted the hardware, set up a hardware RAID controller, installed UnRAID, racked it, and built a full family file-sharing setup on top. To finish, we tested iSCSI block storage from a Windows machine.",
            pt: "No módulo Cloud Infrastructure 2 do meu BTS Cloud Computing, a minha equipa de duas pessoas recebeu um servidor rack Intel 2U vazio para transformar num aparelho de armazenamento funcional. Montámos o hardware, configurámos um controlador RAID por hardware, instalámos o UnRAID, colocámo-lo no rack e construímos por cima um cenário completo de partilha de ficheiros em família. No fim, testámos armazenamento em bloco iSCSI a partir de uma máquina Windows.",
            lu: "Fir de Modul Cloud Infrastructure 2 vu mengem BTS Cloud Computing huet meng Equipe vun zwee Persounen e blanke Intel 2U Rackserver kritt, fir en an e funktionnéiert Späichergerät ze maachen. Mir hunn d'Hardware agebaut, e Hardware-RAID-Controller agestallt, UnRAID installéiert, en am Rack montéiert an dorop e komplette Familljen-Fichier-Deelungs-Szenario opgebaut. Um Enn hu mir iSCSI-Block-Späicher vun enger Windows-Maschinn getest.",
            de: "Für das Modul Cloud Infrastructure 2 meines BTS Cloud Computing bekam mein Zweier-Team einen blanken Intel-2U-Rackserver, um daraus ein funktionierendes Speichergerät zu machen. Wir bauten die Hardware ein, richteten einen Hardware-RAID-Controller ein, installierten UnRAID, montierten ihn im Rack und bauten darauf ein komplettes Familien-Dateifreigabe-Szenario auf. Zum Schluss testeten wir iSCSI-Blockspeicher von einem Windows-Rechner aus.",
            fr: "Pour le module Cloud Infrastructure 2 de mon BTS Cloud Computing, mon équipe de deux personnes a reçu un serveur rack Intel 2U nu à transformer en appareil de stockage fonctionnel. Nous avons monté le matériel, configuré un contrôleur RAID matériel, installé UnRAID, posé le serveur dans le rack et construit par-dessus un scénario complet de partage de fichiers familial. Pour finir, nous avons testé le stockage en bloc iSCSI depuis une machine Windows."
        },
        "project.unraid.section.hardware.title": {
            en: "The Hardware",
            pt: "O Hardware",
            lu: "D'Hardware",
            de: "Die Hardware",
            fr: "Le matériel"
        },
        "project.unraid.section.hardware.body": {
            en: "The machine we got is an <strong>Intel SR2600 2U rack server</strong> on an S5520UR board, with <strong>dual Intel Xeon X5650</strong> (12 cores total) and <strong>16 GB of DDR3 ECC</strong> across six channels. Staging meant fitting the RAM, the native SATA disks and the SAS disks, slotting the RAID controller into the PCIe riser, testing the redundant power supplies for failover, and going through the BIOS to make sure everything was detected before any OS touched the disks.",
            pt: "A máquina que recebemos é um <strong>servidor rack Intel SR2600 2U</strong> com placa S5520UR, com <strong>dois Intel Xeon X5650</strong> (12 núcleos no total) e <strong>16 GB de DDR3 ECC</strong> em seis canais. A preparação envolveu montar a RAM, os discos SATA nativos e os discos SAS, encaixar o controlador RAID no riser PCIe, testar o failover das fontes de alimentação redundantes e percorrer a BIOS para garantir que tudo era detetado antes de qualquer SO tocar nos discos.",
            lu: "D'Maschinn, déi mir kritt hunn, ass en <strong>Intel SR2600 2U Rackserver</strong> op enger S5520UR-Plack, mat <strong>zwee Intel Xeon X5650</strong> (12 Cores am Ganzen) an <strong>16 GB DDR3 ECC</strong> iwwer sechs Kanäl. De Staging huet bedeit, de RAM, déi native SATA-Disken an d'SAS-Disken anzebauen, de RAID-Controller an de PCIe-Riser ze setzen, d'redundant Stroumversuergung op Failover ze testen an duerch d'BIOS ze goen, fir sécher ze sinn datt alles erkannt gouf, ier en OS d'Disken beréiert huet.",
            de: "Die Maschine, die wir bekamen, ist ein <strong>Intel-SR2600-2U-Rackserver</strong> auf einem S5520UR-Board, mit <strong>zwei Intel Xeon X5650</strong> (insgesamt 12 Kerne) und <strong>16 GB DDR3 ECC</strong> über sechs Kanäle. Das Staging hieß: den RAM, die nativen SATA-Disks und die SAS-Disks einbauen, den RAID-Controller in den PCIe-Riser setzen, die redundanten Netzteile auf Failover testen und durch das BIOS gehen, um sicherzustellen, dass alles erkannt wurde, bevor ein OS die Disks berührte.",
            fr: "La machine que nous avons reçue est un <strong>serveur rack Intel SR2600 2U</strong> sur carte S5520UR, avec <strong>deux Intel Xeon X5650</strong> (12 cœurs au total) et <strong>16 Go de DDR3 ECC</strong> répartis sur six canaux. La préparation a consisté à monter la RAM, les disques SATA natifs et les disques SAS, à placer le contrôleur RAID dans le riser PCIe, à tester le basculement des alimentations redondantes et à parcourir le BIOS pour vérifier que tout était détecté avant qu'un OS ne touche aux disques."
        },
        "project.unraid.card.raid5.title": {
            en: "Hardware RAID 5",
            pt: "RAID 5 por hardware",
            lu: "Hardware-RAID 5",
            de: "Hardware-RAID 5",
            fr: "RAID 5 matériel"
        },
        "project.unraid.card.raid5.spec": {
            en: "Areca ARC-1880 · 3 × SAS",
            pt: "Areca ARC-1880 · 3 × SAS",
            lu: "Areca ARC-1880 · 3 × SAS",
            de: "Areca ARC-1880 · 3 × SAS",
            fr: "Areca ARC-1880 · 3 × SAS"
        },
        "project.unraid.card.raid5.detail1": {
            en: "280 GB usable",
            pt: "280 GB utilizáveis",
            lu: "280 GB notzbar",
            de: "280 GB nutzbar",
            fr: "280 Go utilisables"
        },
        "project.unraid.card.raid5.detail2": {
            en: "XFS",
            pt: "XFS",
            lu: "XFS",
            de: "XFS",
            fr: "XFS"
        },
        "project.unraid.card.raid5.body": {
            en: "Three enterprise 15K SAS disks that a dedicated RAID controller presents as one logical volume. All the redundancy happens in hardware, so UnRAID just sees a single disk.",
            pt: "Três discos SAS empresariais de 15K que um controlador RAID dedicado apresenta como um único volume lógico. Toda a redundância acontece em hardware, por isso o UnRAID vê apenas um disco.",
            lu: "Dräi Enterprise-15K-SAS-Disken, déi en dedizéierte RAID-Controller als ee logesche Volume presentéiert. D'ganz Redundanz geschitt an der Hardware, also gesäit UnRAID just eng eenzeg Disk.",
            de: "Drei Enterprise-15K-SAS-Disks, die ein dedizierter RAID-Controller als ein logisches Volume darstellt. Die gesamte Redundanz passiert in Hardware, also sieht UnRAID nur eine einzige Disk.",
            fr: "Trois disques SAS 15K d'entreprise qu'un contrôleur RAID dédié présente comme un seul volume logique. Toute la redondance se fait en matériel, donc UnRAID ne voit qu'un seul disque."
        },
        "project.unraid.card.raid1.title": {
            en: "Software RAID 1",
            pt: "RAID 1 por software",
            lu: "Software-RAID 1",
            de: "Software-RAID 1",
            fr: "RAID 1 logiciel"
        },
        "project.unraid.card.raid1.spec": {
            en: "Btrfs mirror · 2 × SATA",
            pt: "Espelho Btrfs · 2 × SATA",
            lu: "Btrfs-Spigel · 2 × SATA",
            de: "Btrfs-Spiegel · 2 × SATA",
            fr: "Miroir Btrfs · 2 × SATA"
        },
        "project.unraid.card.raid1.detail1": {
            en: "160 GB",
            pt: "160 GB",
            lu: "160 GB",
            de: "160 GB",
            fr: "160 Go"
        },
        "project.unraid.card.raid1.detail2": {
            en: "Btrfs",
            pt: "Btrfs",
            lu: "Btrfs",
            de: "Btrfs",
            fr: "Btrfs"
        },
        "project.unraid.card.raid1.body": {
            en: "Two native SATA disks mirrored as a Btrfs RAID 1 pool. Each disk holds a full copy, so losing one drive loses no data. This is where the Backup share lives.",
            pt: "Dois discos SATA nativos espelhados como um pool Btrfs RAID 1. Cada disco guarda uma cópia completa, por isso perder um disco não perde dados. É aqui que vive a partilha Backup.",
            lu: "Zwee native SATA-Disken, gespigelt als Btrfs-RAID-1-Pool. All Disk hält eng komplett Kopie, also verléiert een keng Daten, wann eng Disk ausfält. Hei läit d'Backup-Deelung.",
            de: "Zwei native SATA-Disks, gespiegelt als Btrfs-RAID-1-Pool. Jede Disk hält eine vollständige Kopie, also gehen beim Ausfall einer Disk keine Daten verloren. Hier liegt die Backup-Freigabe.",
            fr: "Deux disques SATA natifs en miroir sous forme de pool Btrfs RAID 1. Chaque disque garde une copie complète, donc perdre un disque ne perd aucune donnée. C'est ici que vit le partage Backup."
        },
        "project.unraid.section.os.title": {
            en: "The Software: UnRAID",
            pt: "O Software: UnRAID",
            lu: "D'Software: UnRAID",
            de: "Die Software: UnRAID",
            fr: "Le logiciel : UnRAID"
        },
        "project.unraid.section.os.body": {
            en: "The module ran as a comparison across teams. Several NAS platforms were on the table and each team took a different one. Ours was <strong>UnRAID</strong> by Lime Technology, a Linux-based NAS OS that is good at mixing disks of different sizes in one parity-protected array, with a friendly web UI, Docker, VMs and a plugin store (Community Apps). Alongside the build we dug into where a NAS fits, how <strong>DAS, NAS and SAN</strong> differ, why compute and storage get separated in production, and the trade-offs of UnRAID's paid licensing.",
            pt: "O módulo funcionou como uma comparação entre equipas. Estavam disponíveis várias plataformas de NAS e cada equipa escolheu uma diferente. A nossa foi o <strong>UnRAID</strong> da Lime Technology, um SO de NAS baseado em Linux que combina bem discos de tamanhos diferentes num único array com proteção por paridade, com uma interface web amigável, Docker, VMs e uma loja de plugins (Community Apps). A par da construção, explorámos onde se encaixa um NAS, como diferem <strong>DAS, NAS e SAN</strong>, porque é que computação e armazenamento são separados em produção e os compromissos do licenciamento pago do UnRAID.",
            lu: "De Modul war e Verglach tëscht den Equipen. E puer NAS-Plattforme stoungen zur Verfügung an all Equipe huet eng aner geholl. Eis war <strong>UnRAID</strong> vu Lime Technology, e Linux-baséierten NAS-OS, dee gutt Disken vu verschiddene Gréissten an engem eenzege Paritéits-geschützten Array mëscht, mat enger frëndlecher Web-UI, Docker, VMen an enger Plugin-Boutique (Community Apps). Niewent dem Build hu mir eis ugekuckt, wou e NAS passt, wéi <strong>DAS, NAS a SAN</strong> ënnerscheeden, firwat Berechnung a Späicher an der Produktioun getrennt ginn, an d'Ofwiegunge vun UnRAID sengem bezuelte Lizenzmodell.",
            de: "Das Modul lief als Vergleich zwischen den Teams. Mehrere NAS-Plattformen standen zur Verfügung und jedes Team nahm eine andere. Unsere war <strong>UnRAID</strong> von Lime Technology, ein Linux-basiertes NAS-OS, das gut darin ist, Disks unterschiedlicher Größe in einem paritätsgeschützten Array zu mischen, mit einer freundlichen Web-UI, Docker, VMs und einem Plugin-Store (Community Apps). Neben dem Aufbau haben wir uns angesehen, wo ein NAS passt, wie sich <strong>DAS, NAS und SAN</strong> unterscheiden, warum Rechenleistung und Speicher in der Produktion getrennt werden, und die Kompromisse von UnRAIDs kostenpflichtigem Lizenzmodell.",
            fr: "Le module s'est déroulé comme une comparaison entre les équipes. Plusieurs plateformes NAS étaient disponibles et chaque équipe en a pris une différente. La nôtre était <strong>UnRAID</strong> de Lime Technology, un OS de NAS basé sur Linux qui sait bien mélanger des disques de tailles différentes dans un même array protégé par parité, avec une interface web conviviale, Docker, des VM et une boutique de plugins (Community Apps). En parallèle de la construction, nous avons creusé où se situe un NAS, en quoi diffèrent <strong>DAS, NAS et SAN</strong>, pourquoi le calcul et le stockage sont séparés en production, et les compromis de la licence payante d'UnRAID."
        },
        "project.unraid.section.sharing.title": {
            en: "File Sharing & Permissions",
            pt: "Partilha de Ficheiros e Permissões",
            lu: "Fichier-Deelung & Rechter",
            de: "Dateifreigabe & Berechtigungen",
            fr: "Partage de fichiers et permissions"
        },
        "project.unraid.section.sharing.body": {
            en: "The setup was a family with three accounts and four SMB shares. <code>Photos</code>, <code>Media</code> and <code>Documents</code> live on the big RAID 5 array, and <code>Backup</code> sits on the mirrored RAID 1 pool. The two parent accounts get full read/write, while the child account is read-only on the libraries and can't touch Backup at all. Every share works straight from Windows, Linux and macOS, and we checked both the transfers and the permission limits with real test files.",
            pt: "O cenário era uma família com três contas e quatro partilhas SMB. <code>Photos</code>, <code>Media</code> e <code>Documents</code> ficam no grande array RAID 5, e <code>Backup</code> fica no pool RAID 1 espelhado. As duas contas de pais têm leitura/escrita total, enquanto a conta da criança é só de leitura nas bibliotecas e não pode tocar no Backup. Cada partilha funciona diretamente a partir de Windows, Linux e macOS, e verificámos tanto as transferências como os limites de permissões com ficheiros de teste reais.",
            lu: "D'Szenario war eng Famill mat dräi Konten a véier SMB-Deelungen. <code>Photos</code>, <code>Media</code> an <code>Documents</code> leien um grousse RAID-5-Array, an <code>Backup</code> um gespigelte RAID-1-Pool. Déi zwee Elteren-Konten kréien voll Lies-/Schreifrechter, wärend d'Kannerkont nëmme-liesen op de Bibliothéiken ass a guer net op de Backup zougräife kann. All Deelung funktionnéiert direkt vu Windows, Linux a macOS, a mir hunn souwuel d'Transferten wéi och d'Rechtergrenze mat richtegen Testfichiere kontrolléiert.",
            de: "Das Szenario war eine Familie mit drei Konten und vier SMB-Freigaben. <code>Photos</code>, <code>Media</code> und <code>Documents</code> liegen auf dem großen RAID-5-Array, und <code>Backup</code> sitzt auf dem gespiegelten RAID-1-Pool. Die beiden Elternkonten bekommen vollen Lese-/Schreibzugriff, während das Kinderkonto auf den Bibliotheken nur lesend ist und Backup gar nicht anfassen kann. Jede Freigabe funktioniert direkt von Windows, Linux und macOS, und wir haben sowohl die Übertragungen als auch die Berechtigungsgrenzen mit echten Testdateien geprüft.",
            fr: "Le scénario était une famille avec trois comptes et quatre partages SMB. <code>Photos</code>, <code>Media</code> et <code>Documents</code> vivent sur le grand array RAID 5, et <code>Backup</code> se trouve sur le pool RAID 1 en miroir. Les deux comptes parents ont un accès complet en lecture/écriture, tandis que le compte enfant est en lecture seule sur les bibliothèques et ne peut pas toucher à Backup. Chaque partage fonctionne directement depuis Windows, Linux et macOS, et nous avons vérifié à la fois les transferts et les limites de permissions avec de vrais fichiers de test."
        },
        "project.unraid.section.iscsi.title": {
            en: "iSCSI Block Storage",
            pt: "Armazenamento em Bloco iSCSI",
            lu: "iSCSI-Block-Späicher",
            de: "iSCSI-Blockspeicher",
            fr: "Stockage en bloc iSCSI"
        },
        "project.unraid.section.iscsi.body": {
            en: "On top of file shares, we handed out <strong>block storage over iSCSI</strong>. UnRAID has no target built in, so we added a Community Apps plugin, created a file-based LUN on the hardware RAID 5 array, and published it as a target with an ACL locked to one approved Windows initiator (by IQN). On Windows the LUN turns up in Disk Management like a brand-new local disk, so we initialised it, formatted it NTFS, and copied files over to prove the whole path works. The page also breaks down how <strong>iSCSI compares to NFS and SMB</strong>: block versus file, and who actually owns the filesystem.",
            pt: "Além das partilhas de ficheiros, disponibilizámos <strong>armazenamento em bloco por iSCSI</strong>. O UnRAID não tem alvo integrado, por isso adicionámos um plugin do Community Apps, criámos um LUN baseado em ficheiro no array RAID 5 por hardware e publicámo-lo como alvo com uma ACL restrita a um iniciador Windows aprovado (por IQN). No Windows, o LUN aparece no Gestor de Discos como um disco local novo, por isso inicializámo-lo, formatámos em NTFS e copiámos ficheiros para provar que todo o caminho funciona. A página também explica como o <strong>iSCSI se compara a NFS e SMB</strong>: bloco versus ficheiro, e quem é realmente dono do sistema de ficheiros.",
            lu: "Niewent de Fichier-Deelunge hu mir <strong>Block-Späicher iwwer iSCSI</strong> zur Verfügung gestallt. UnRAID huet keen agebaute Zil, also hu mir e Community-Apps-Plugin derbäigesat, en Datei-baséierte LUN um Hardware-RAID-5-Array erstallt an et als Zil publizéiert mat enger ACL, déi op ee guttgeheeschene Windows-Initiator (iwwer IQN) limitéiert ass. Op Windows erschéngt de LUN am Disk Management wéi eng nei lokal Disk, also hu mir en initialiséiert, an NTFS formatéiert a Fichiere kopéiert, fir ze beweisen datt de ganze Wee funktionnéiert. D'Säit erkläert och, wéi <strong>iSCSI mat NFS a SMB</strong> vergläicht: Block versus Datei, a wien de Fichiersystem tatsächlech besëtzt.",
            de: "Zusätzlich zu den Dateifreigaben stellten wir <strong>Blockspeicher über iSCSI</strong> bereit. UnRAID hat kein Ziel eingebaut, also fügten wir ein Community-Apps-Plugin hinzu, erstellten ein dateibasiertes LUN auf dem Hardware-RAID-5-Array und veröffentlichten es als Ziel mit einer ACL, die auf einen freigegebenen Windows-Initiator (per IQN) beschränkt ist. Unter Windows taucht das LUN in der Datenträgerverwaltung wie eine brandneue lokale Disk auf, also initialisierten wir es, formatierten es NTFS und kopierten Dateien hinüber, um zu beweisen, dass der ganze Weg funktioniert. Die Seite erklärt auch, wie sich <strong>iSCSI mit NFS und SMB</strong> vergleicht: Block versus Datei, und wem das Dateisystem tatsächlich gehört.",
            fr: "En plus des partages de fichiers, nous avons fourni du <strong>stockage en bloc via iSCSI</strong>. UnRAID n'a pas de cible intégrée, nous avons donc ajouté un plugin Community Apps, créé un LUN basé sur fichier sur l'array RAID 5 matériel et l'avons publié comme cible avec une ACL limitée à un seul initiateur Windows approuvé (par IQN). Sous Windows, le LUN apparaît dans le Gestionnaire de disques comme un tout nouveau disque local, nous l'avons donc initialisé, formaté en NTFS et y avons copié des fichiers pour prouver que tout le chemin fonctionne. La page explique aussi comment <strong>iSCSI se compare à NFS et SMB</strong> : bloc contre fichier, et qui possède vraiment le système de fichiers."
        },
        "project.unraid.section.management.title": {
            en: "Rack & Remote Management",
            pt: "Rack e Gestão Remota",
            lu: "Rack & Fernverwaltung",
            de: "Rack & Fernverwaltung",
            fr: "Rack et gestion à distance"
        },
        "project.unraid.section.management.body": {
            en: "Once it was working on the bench, the server went onto rails in a 24U rack with tidy cabling for the data NIC, the RAID controller's management port and the out-of-band link. Remote management runs over <strong>Intel RMM3</strong> (IPMI 2.0), which gives remote KVM, power control and BIOS access even when the OS is down, next to the UnRAID web interface for everyday admin.",
            pt: "Assim que ficou a funcionar na bancada, o servidor foi montado em calhas num rack de 24U com cablagem organizada para a NIC de dados, a porta de gestão do controlador RAID e a ligação out-of-band. A gestão remota corre sobre <strong>Intel RMM3</strong> (IPMI 2.0), que dá KVM remoto, controlo de energia e acesso à BIOS mesmo com o SO desligado, ao lado da interface web do UnRAID para a administração do dia a dia.",
            lu: "Soubal et op der Bench gelaf ass, ass de Server op Schinnen an engem 24U-Rack montéiert ginn, mat propperer Verkabelung fir d'Daten-NIC, de Verwaltungsport vum RAID-Controller an de Out-of-Band-Link. D'Fernverwaltung leeft iwwer <strong>Intel RMM3</strong> (IPMI 2.0), dat Fern-KVM, Stroumkontroll a BIOS-Zougang gëtt, och wann den OS ënnen ass, niewent der UnRAID-Web-Interface fir d'deeglech Administratioun.",
            de: "Sobald er auf dem Tisch lief, kam der Server auf Schienen in ein 24U-Rack, mit sauberer Verkabelung für die Daten-NIC, den Management-Port des RAID-Controllers und die Out-of-Band-Verbindung. Die Fernverwaltung läuft über <strong>Intel RMM3</strong> (IPMI 2.0), das Remote-KVM, Stromsteuerung und BIOS-Zugriff bietet, selbst wenn das OS aus ist, neben der UnRAID-Weboberfläche für die tägliche Administration.",
            fr: "Une fois qu'il fonctionnait sur l'établi, le serveur est passé sur rails dans un rack 24U, avec un câblage soigné pour la NIC de données, le port de gestion du contrôleur RAID et le lien hors bande. La gestion à distance s'appuie sur <strong>Intel RMM3</strong> (IPMI 2.0), qui offre le KVM distant, le contrôle de l'alimentation et l'accès au BIOS même quand l'OS est éteint, aux côtés de l'interface web UnRAID pour l'administration quotidienne."
        },
        "project.unraid.section.troubleshooting.title": {
            en: "Problems Worth Remembering",
            pt: "Problemas que Vale a Pena Lembrar",
            lu: "Problemer déi sech ze erënnere loune",
            de: "Probleme, die im Gedächtnis bleiben",
            fr: "Des problèmes à retenir"
        },
        "project.unraid.section.troubleshooting.body": {
            en: "Two problems taught us the most. After a config reset the web UI wouldn't load (nginx threw a 502 and PHP came back blank), so we restarted the services by hand (<code>nginx</code>, <code>php-fpm</code>, <code>emhttp</code>) and then made it stick by adding the daemon to UnRAID's startup <code>go</code> file. The Btrfs pool also refused to start with <em>\"Too many wrong and/or missing disks\"</em>. The fix was a fresh disk assignment (New Config, keeping the assignments) and then formatting the unmounted disks into a proper Btrfs filesystem.",
            pt: "Dois problemas foram os que mais nos ensinaram. Após um reset de configuração, a interface web não carregava (o nginx dava um 502 e o PHP vinha em branco), por isso reiniciámos os serviços à mão (<code>nginx</code>, <code>php-fpm</code>, <code>emhttp</code>) e tornámo-lo permanente adicionando o daemon ao ficheiro de arranque <code>go</code> do UnRAID. O pool Btrfs também se recusava a arrancar com <em>\"Too many wrong and/or missing disks\"</em>. A solução foi uma nova atribuição de discos (New Config, mantendo as atribuições) e depois formatar os discos não montados num sistema de ficheiros Btrfs válido.",
            lu: "Zwee Problemer hunn eis am meeschte beigebruecht. No engem Konfiguratiouns-Reset huet d'Web-UI net gelueden (nginx huet e 502 ginn an PHP koum eidel zréck), also hu mir d'Servicer mat der Hand nei gestart (<code>nginx</code>, <code>php-fpm</code>, <code>emhttp</code>) an et duerno permanent gemaach, andeems mir den Daemon an d'Startfichier <code>go</code> vun UnRAID derbäigesat hunn. De Btrfs-Pool huet och refuséiert ze starten mat <em>\"Too many wrong and/or missing disks\"</em>. D'Léisung war eng nei Disk-Zouweisung (New Config, mat den Zouweisungen behalen) an duerno d'Formatéiere vun den net gemounten Disken an e valabele Btrfs-Fichiersystem.",
            de: "Zwei Probleme haben uns am meisten gelehrt. Nach einem Konfigurations-Reset lud die Web-UI nicht (nginx warf einen 502 und PHP kam leer zurück), also starteten wir die Dienste von Hand neu (<code>nginx</code>, <code>php-fpm</code>, <code>emhttp</code>) und machten es dann dauerhaft, indem wir den Daemon zur Startdatei <code>go</code> von UnRAID hinzufügten. Der Btrfs-Pool weigerte sich ebenfalls zu starten mit <em>\"Too many wrong and/or missing disks\"</em>. Die Lösung war eine neue Disk-Zuweisung (New Config, unter Beibehaltung der Zuweisungen) und danach das Formatieren der nicht eingehängten Disks zu einem gültigen Btrfs-Dateisystem.",
            fr: "Deux problèmes nous ont le plus appris. Après une réinitialisation de la configuration, l'interface web ne chargeait pas (nginx renvoyait une 502 et PHP revenait vide), nous avons donc redémarré les services à la main (<code>nginx</code>, <code>php-fpm</code>, <code>emhttp</code>) puis rendu cela permanent en ajoutant le démon au fichier de démarrage <code>go</code> d'UnRAID. Le pool Btrfs refusait aussi de démarrer avec <em>\"Too many wrong and/or missing disks\"</em>. La solution a été une nouvelle affectation des disques (New Config, en gardant les affectations) puis le formatage des disques non montés en un système de fichiers Btrfs valide."
        },
        "project.unraid.sidebar.tech.unraid": {
            en: "UnRAID (Lime Technology)",
            pt: "UnRAID (Lime Technology)",
            lu: "UnRAID (Lime Technology)",
            de: "UnRAID (Lime Technology)",
            fr: "UnRAID (Lime Technology)"
        },
        "project.unraid.sidebar.tech.server": {
            en: "Intel SR2600 2U · Dual Xeon X5650",
            pt: "Intel SR2600 2U · Dois Xeon X5650",
            lu: "Intel SR2600 2U · Zwee Xeon X5650",
            de: "Intel SR2600 2U · Zwei Xeon X5650",
            fr: "Intel SR2600 2U · Deux Xeon X5650"
        },
        "project.unraid.sidebar.tech.areca": {
            en: "Areca ARC-1880 RAID 5",
            pt: "Areca ARC-1880 RAID 5",
            lu: "Areca ARC-1880 RAID 5",
            de: "Areca ARC-1880 RAID 5",
            fr: "Areca ARC-1880 RAID 5"
        },
        "project.unraid.sidebar.tech.btrfs": {
            en: "Btrfs RAID 1 mirror",
            pt: "Espelho Btrfs RAID 1",
            lu: "Btrfs-RAID-1-Spigel",
            de: "Btrfs-RAID-1-Spiegel",
            fr: "Miroir Btrfs RAID 1"
        },
        "project.unraid.sidebar.tech.smb": {
            en: "SMB file shares",
            pt: "Partilhas de ficheiros SMB",
            lu: "SMB-Fichier-Deelungen",
            de: "SMB-Dateifreigaben",
            fr: "Partages de fichiers SMB"
        },
        "project.unraid.sidebar.tech.iscsi": {
            en: "iSCSI target / initiator",
            pt: "Alvo / iniciador iSCSI",
            lu: "iSCSI-Zil / -Initiator",
            de: "iSCSI-Ziel / -Initiator",
            fr: "Cible / initiateur iSCSI"
        },
        "project.unraid.sidebar.tech.rmm": {
            en: "Intel RMM3 (IPMI 2.0)",
            pt: "Intel RMM3 (IPMI 2.0)",
            lu: "Intel RMM3 (IPMI 2.0)",
            de: "Intel RMM3 (IPMI 2.0)",
            fr: "Intel RMM3 (IPMI 2.0)"
        },
        "project.unraid.sidebar.config.title": {
            en: "Key Configuration",
            pt: "Configuração Principal",
            lu: "Haaptkonfiguratioun",
            de: "Wichtige Konfiguration",
            fr: "Configuration clé"
        },
        "project.unraid.sidebar.config.hwRaid": {
            en: "Hardware RAID 5 (XFS, 280 GB)",
            pt: "RAID 5 por hardware (XFS, 280 GB)",
            lu: "Hardware-RAID 5 (XFS, 280 GB)",
            de: "Hardware-RAID 5 (XFS, 280 GB)",
            fr: "RAID 5 matériel (XFS, 280 Go)"
        },
        "project.unraid.sidebar.config.swRaid": {
            en: "Software RAID 1 (Btrfs, 160 GB)",
            pt: "RAID 1 por software (Btrfs, 160 GB)",
            lu: "Software-RAID 1 (Btrfs, 160 GB)",
            de: "Software-RAID 1 (Btrfs, 160 GB)",
            fr: "RAID 1 logiciel (Btrfs, 160 Go)"
        },
        "project.unraid.sidebar.config.shares": {
            en: "4 SMB shares, multi-platform",
            pt: "4 partilhas SMB, multiplataforma",
            lu: "4 SMB-Deelungen, Multi-Plattform",
            de: "4 SMB-Freigaben, plattformübergreifend",
            fr: "4 partages SMB, multiplateforme"
        },
        "project.unraid.sidebar.config.rbac": {
            en: "Per-user access control",
            pt: "Controlo de acesso por utilizador",
            lu: "Zougangskontroll pro Benotzer",
            de: "Zugriffskontrolle pro Benutzer",
            fr: "Contrôle d'accès par utilisateur"
        },
        "project.unraid.sidebar.config.iscsi": {
            en: "iSCSI LUN on RAID 5",
            pt: "LUN iSCSI no RAID 5",
            lu: "iSCSI-LUN um RAID 5",
            de: "iSCSI-LUN auf RAID 5",
            fr: "LUN iSCSI sur RAID 5"
        },
        "project.unraid.sidebar.config.oob": {
            en: "Out-of-band management",
            pt: "Gestão out-of-band",
            lu: "Out-of-Band-Verwaltung",
            de: "Out-of-Band-Verwaltung",
            fr: "Gestion hors bande"
        },
        "project.unraid.sidebar.learned.title": {
            en: "What I Practiced",
            pt: "O Que Pratiquei",
            lu: "Wat ech geüübt hunn",
            de: "Was ich geübt habe",
            fr: "Ce que j'ai pratiqué"
        },
        "project.unraid.sidebar.learned.staging": {
            en: "Bare-metal server staging",
            pt: "Preparação de servidor bare-metal",
            lu: "Bare-Metal-Server-Opbau",
            de: "Bare-Metal-Server-Staging",
            fr: "Préparation de serveur bare-metal"
        },
        "project.unraid.sidebar.learned.raid": {
            en: "Hardware vs. software RAID",
            pt: "RAID por hardware vs. software",
            lu: "Hardware- vs. Software-RAID",
            de: "Hardware- vs. Software-RAID",
            fr: "RAID matériel vs. logiciel"
        },
        "project.unraid.sidebar.learned.block": {
            en: "Block vs. file storage",
            pt: "Armazenamento em bloco vs. ficheiro",
            lu: "Block- vs. Datei-Späicher",
            de: "Block- vs. Datei-Speicher",
            fr: "Stockage en bloc vs. fichier"
        },
        "project.unraid.sidebar.learned.rack": {
            en: "Rack mounting & cabling",
            pt: "Montagem em rack e cablagem",
            lu: "Rack-Montage & Verkabelung",
            de: "Rack-Montage & Verkabelung",
            fr: "Montage en rack et câblage"
        },
        "project.unraid.sidebar.learned.troubleshoot": {
            en: "Linux service troubleshooting",
            pt: "Resolução de problemas de serviços Linux",
            lu: "Linux-Service-Fehlersich",
            de: "Linux-Dienst-Fehlerbehebung",
            fr: "Dépannage des services Linux"
        },
        "project.unraid.image.server.caption": {
            en: "The Intel SR2600 opened up during staging, showing the dual-CPU mainboard, the DDR3 modules and the front drive bays.",
            pt: "O Intel SR2600 aberto durante a preparação, a mostrar a placa principal de dois CPUs, os módulos DDR3 e as baias de discos frontais.",
            lu: "Den Intel SR2600 opgemaach beim Staging, weist de Mainboard mat zwee CPUen, d'DDR3-Moduler an déi vir Disk-Baien.",
            de: "Der geöffnete Intel SR2600 während des Stagings, mit dem Dual-CPU-Mainboard, den DDR3-Modulen und den vorderen Laufwerksschächten.",
            fr: "L'Intel SR2600 ouvert pendant la préparation, montrant la carte mère à deux CPU, les modules DDR3 et les baies de disques avant."
        },
        "project.unraid.image.areca.caption": {
            en: "The Areca ARC-1880 on its PCIe riser. This card is what builds and owns the RAID 5 array in hardware.",
            pt: "O Areca ARC-1880 no seu riser PCIe. Esta placa é o que constrói e gere o array RAID 5 em hardware.",
            lu: "De Areca ARC-1880 op sengem PCIe-Riser. Dës Kaart ass dat, wat den RAID-5-Array an der Hardware opbaut a verwalt.",
            de: "Der Areca ARC-1880 auf seinem PCIe-Riser. Diese Karte baut und verwaltet das RAID-5-Array in Hardware.",
            fr: "L'Areca ARC-1880 sur son riser PCIe. C'est cette carte qui construit et gère l'array RAID 5 en matériel."
        },
        "project.unraid.image.iscsi.caption": {
            en: "The iSCSI LUN showing up on Windows as a fresh, unallocated local disk, ready to initialise and format.",
            pt: "O LUN iSCSI a aparecer no Windows como um disco local novo e não alocado, pronto a inicializar e formatar.",
            lu: "De iSCSI-LUN, deen op Windows als nei, net zougedeelt lokal Disk erschéngt, prett fir z'initialiséieren an ze formatéieren.",
            de: "Das iSCSI-LUN, das unter Windows als frische, nicht zugewiesene lokale Disk auftaucht, bereit zum Initialisieren und Formatieren.",
            fr: "Le LUN iSCSI apparaissant sous Windows comme un disque local neuf et non alloué, prêt à être initialisé et formaté."
        },
        "project.unraid.section.assets.title": {
            en: "Deliverables & Material",
            pt: "Entregáveis e Material",
            lu: "Liwwerungen & Material",
            de: "Ergebnisse & Material",
            fr: "Livrables et matériel"
        },
        "project.unraid.section.assets.body": {
            en: "We produced full technical documentation and a presentation for this project. They hold lab-internal details (addresses, credentials, identifiers), so I'm preparing a redacted, shareable version before they go online.",
            pt: "Produzimos documentação técnica completa e uma apresentação para este projeto. Contêm detalhes internos do laboratório (endereços, credenciais, identificadores), por isso estou a preparar uma versão censurada e partilhável antes de ficarem online.",
            lu: "Mir hunn eng komplett technesch Dokumentatioun an eng Presentatioun fir dëse Projet gemaach. Si enthalen Labo-intern Detailer (Adressen, Umeldedaten, Identifizéierer), also bereede ech eng zenséiert, deelbar Versioun vir, ier se online ginn.",
            de: "Wir haben für dieses Projekt eine vollständige technische Dokumentation und eine Präsentation erstellt. Sie enthalten laborinterne Details (Adressen, Zugangsdaten, Kennungen), deshalb bereite ich eine geschwärzte, teilbare Version vor, bevor sie online gehen.",
            fr: "Nous avons produit une documentation technique complète et une présentation pour ce projet. Elles contiennent des détails internes au laboratoire (adresses, identifiants, références), je prépare donc une version expurgée et partageable avant leur mise en ligne."
        },
        "project.unraid.asset.documentation.title": {
            en: "Technical Documentation",
            pt: "Documentação Técnica",
            lu: "Technesch Dokumentatioun",
            de: "Technische Dokumentation",
            fr: "Documentation technique"
        },
        "project.unraid.asset.documentation.desc": {
            en: "The full build documentation, covering research, hardware staging, RAID setup, UnRAID configuration, file sharing and the iSCSI test.",
            pt: "A documentação completa da construção, abrangendo pesquisa, preparação de hardware, configuração de RAID, configuração do UnRAID, partilha de ficheiros e o teste iSCSI.",
            lu: "Déi komplett Build-Dokumentatioun, mat Recherche, Hardware-Staging, RAID-Opbau, UnRAID-Konfiguratioun, Fichier-Deelung an dem iSCSI-Test.",
            de: "Die vollständige Build-Dokumentation, mit Recherche, Hardware-Staging, RAID-Einrichtung, UnRAID-Konfiguration, Dateifreigabe und dem iSCSI-Test.",
            fr: "La documentation complète de la construction, couvrant la recherche, la préparation du matériel, la configuration RAID, la configuration UnRAID, le partage de fichiers et le test iSCSI."
        },
        "project.unraid.asset.presentation.title": {
            en: "Presentation",
            pt: "Apresentação",
            lu: "Presentatioun",
            de: "Präsentation",
            fr: "Présentation"
        },
        "project.unraid.asset.presentation.desc": {
            en: "The slide deck used to present and demonstrate the storage server at the end of the module.",
            pt: "O conjunto de slides usado para apresentar e demonstrar o servidor de armazenamento no final do módulo.",
            lu: "D'Folie-Set, dat benotzt gouf, fir de Späicherserver um Enn vum Modul ze presentéieren an ze weisen.",
            de: "Die Foliensammlung, mit der der Speicherserver am Ende des Moduls vorgestellt und demonstriert wurde.",
            fr: "Le jeu de diapositives utilisé pour présenter et démontrer le serveur de stockage à la fin du module."
        },
        "project.unraid.asset.comingSoon": {
            en: "Coming soon",
            pt: "Em breve",
            lu: "Kënnt geschwënn",
            de: "Demnächst",
            fr: "Bientôt disponible"
        }
    };

    if (typeof translations === 'undefined') {
        globalThis.translations = {};
    }
    Object.assign(translations, extra);
})();
