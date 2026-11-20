(function () {
    'use strict';

    Object.assign(translations, {
        "project.aws-image-converter.subtitle": {
            en: "Our team built a portal that converts and resizes images for the web, previews both versions, and provides a temporary download link. In one lab test, a 113.2 KiB JPEG became a 9.6 KiB WebP.",
            pt: "A nossa equipa criou um portal que converte e redimensiona imagens para a web, mostra uma pré-visualização das duas versões e disponibiliza uma ligação temporária para descarregar o resultado. Num teste de laboratório, um JPEG de 113,2 KiB passou a um WebP de 9,6 KiB.",
            lu: "Eis Equipe huet e Portal gebaut, dat Biller fir de Web konvertéiert a skaléiert, béid Versiounen an enger Virschau weist an en temporären Downloadlink ubitt. Bei engem Labotest gouf aus engem JPEG vun 113,2 KiB e WebP vun 9,6 KiB.",
            de: "Unser Team hat ein Portal entwickelt, das Bilder für das Web konvertiert und skaliert. Es zeigt beide Versionen in einer Vorschau und bietet einen temporären Downloadlink. In einem Labortest wurde aus einem JPEG mit 113,2 KiB ein WebP mit 9,6 KiB.",
            fr: "Notre équipe a créé un portail qui convertit et redimensionne les images pour le web, affiche un aperçu des deux versions et fournit un lien de téléchargement temporaire. Lors d’un test en laboratoire, un JPEG de 113,2 Kio est devenu un WebP de 9,6 Kio."
        },
        "project.aws-image-converter.contribution": {
            en: "I built the Flask portal and the Python Lambda worker that validates, resizes, and converts uploads. I connected the S3 trigger and set up temporary-file cleanup and CloudWatch monitoring.",
            pt: "Desenvolvi o portal em Flask e a função Lambda em Python que valida, redimensiona e converte as imagens enviadas. Liguei o acionador do S3 e configurei a limpeza dos ficheiros temporários e a monitorização no CloudWatch.",
            lu: "Ech hunn de Flask-Portal an d’Python-Lambda-Funktioun gebaut, déi eropgeluede Biller validéiert, skaléiert a konvertéiert. Ech hunn de S3-Trigger ugeschloss, d’Botze vun temporäre Fichieren ageriicht an d’Iwwerwaachung mat CloudWatch konfiguréiert.",
            de: "Ich entwickelte das Flask-Portal und die Python-Lambda-Funktion, die hochgeladene Bilder prüft, skaliert und konvertiert. Ich band den S3-Trigger an und richtete die Bereinigung temporärer Dateien sowie die Überwachung mit CloudWatch ein.",
            fr: "J’ai développé le portail Flask et la fonction Lambda en Python qui valide, redimensionne et convertit les images envoyées. J’ai relié le déclencheur S3 et mis en place le nettoyage des fichiers temporaires et la supervision avec CloudWatch."
        },
        "project.aws-image-converter.overview.title": {
            en: "From upload to web-ready image",
            pt: "Do carregamento à imagem pronta para a web",
            lu: "Vum Upload bis zum Bild fir de Web",
            de: "Vom Upload zum webfertigen Bild",
            fr: "De l’envoi à l’image prête pour le web"
        },
        "project.aws-image-converter.overview.body": {
            en: "We built the portal for a fictional school communications team preparing images for its website and newsletter. Staff upload one JPEG or PNG, choose JPEG, PNG or WebP as the output, and can cap the width at 1280 pixels. The portal shows both versions, their dimensions and file sizes before download.",
            pt: "Criámos o portal para uma equipa de comunicação escolar fictícia que prepara imagens para o site e o boletim informativo. A equipa carrega um JPEG ou PNG, escolhe JPEG, PNG ou WebP como formato de saída e pode limitar a largura a 1280 píxeis. Antes de descarregar, o portal mostra ambas as versões, as dimensões e o tamanho dos ficheiros.",
            lu: "Mir hunn de Portal fir eng fiktiv Schoulkommunikatiounsekipp gebaut, déi Biller fir hir Websäit an hiren Newsletter virbereet. D’Mataarbechter lueden ee JPEG oder PNG erop, wielen JPEG, PNG oder WebP als Ausgabformat a kënnen d’Breet op 1280 Pixel limitéieren. Virum Download weist de Portal béid Versioune mat hiren Dimensiounen a Fichiergréissten.",
            de: "Wir entwickelten das Portal für das fiktive Kommunikationsteam einer Schule, das Bilder für seine Website und seinen Newsletter vorbereitet. Das Team lädt eine JPEG- oder PNG-Datei hoch, wählt JPEG, PNG oder WebP als Ausgabeformat und kann die Breite auf 1280 Pixel begrenzen. Vor dem Download zeigt das Portal beide Versionen mit Abmessungen und Dateigrößen.",
            fr: "Nous avons conçu ce portail pour une équipe de communication scolaire fictive qui prépare des images pour son site et sa lettre d’information. L’équipe envoie un fichier JPEG ou PNG, choisit JPEG, PNG ou WebP comme format de sortie et peut limiter la largeur à 1280 pixels. Avant le téléchargement, le portail affiche les deux versions, leurs dimensions et le poids des fichiers."
        },
        "project.aws-image-converter.result.title": {
            en: "One measured conversion",
            pt: "Uma conversão medida",
            lu: "Eng gemoosse Konversioun",
            de: "Eine gemessene Konvertierung",
            fr: "Une conversion mesurée"
        },
        "project.aws-image-converter.result.body": {
            en: "In the lab, converting a 2400 × 1600 JPEG to a 1280 × 853 WebP reduced the file from 113.2 KiB to 9.6 KiB, a 91.6% reduction for that sample. The first measured job reported about 1 second of Lambda processing, with the result manifest available about 5 seconds after upload.",
            pt: "No laboratório, a conversão de um JPEG de 2400 × 1600 para um WebP de 1280 × 853 reduziu o ficheiro de 113,2 KiB para 9,6 KiB, uma redução de 91,6% nessa amostra. No primeiro teste medido, o processamento no Lambda levou cerca de 1 segundo e o manifesto do resultado ficou disponível cerca de 5 segundos após o carregamento.",
            lu: "Am Labo huet d’Konversioun vun engem JPEG mat 2400 × 1600 Pixel an e WebP mat 1280 × 853 Pixel de Fichier vun 113,2 KiB op 9,6 KiB verklengert. Dat waren 91,6 % fir dat Beispill. Beim éischte gemoossenen Optrag huet Lambda ongeféier 1 Sekonn verschafft. De Statusfichier war ongeféier 5 Sekonnen nom Upload disponibel.",
            de: "Im Labor verkleinerte die Konvertierung eines JPEGs mit 2400 × 1600 Pixeln in ein WebP mit 1280 × 853 Pixeln die Datei von 113,2 KiB auf 9,6 KiB. Das entspricht 91,6 % bei diesem Beispiel. Beim ersten gemessenen Auftrag benötigte Lambda rund 1 Sekunde. Das Ergebnismanifest war rund 5 Sekunden nach dem Upload verfügbar.",
            fr: "En laboratoire, la conversion d’un JPEG de 2400 × 1600 en WebP de 1280 × 853 a fait passer le fichier de 113,2 KiB à 9,6 KiB, soit une réduction de 91,6 % pour cet exemple. Pour le premier traitement mesuré, Lambda a pris environ 1 seconde et le manifeste du résultat était disponible environ 5 secondes après l’envoi."
        },
        "project.aws-image-converter.portal.caption": {
            en: "Lab portal showing the original JPEG beside the resized WebP.",
            pt: "Portal do laboratório com o JPEG original ao lado do WebP redimensionado.",
            lu: "De Laboportal weist den originale JPEG nieft dem verklengerte WebP.",
            de: "Das Laborportal zeigt das ursprüngliche JPEG neben dem verkleinerten WebP.",
            fr: "Le portail du laboratoire affiche le JPEG d’origine à côté du WebP redimensionné."
        },
        "project.aws-image-converter.architecture.title": {
            en: "Event-driven architecture",
            pt: "Arquitetura orientada a eventos",
            lu: "Eventgedriwwen Architektur",
            de: "Ereignisgesteuerte Architektur",
            fr: "Architecture événementielle"
        },
        "project.aws-image-converter.architecture.body": {
            en: "The Flask portal on EC2 writes the original to a private S3 input bucket. An ObjectCreated event invokes the Python Lambda worker, which validates the image, applies EXIF orientation, converts it with Pillow, optionally resizes it and strips metadata. A separate private bucket holds the result and status manifest. The portal polls for status and returns a five-minute presigned link for a direct HTTPS download from S3.",
            pt: "O portal Flask em EC2 grava o original num bucket privado de entrada em S3. Um evento ObjectCreated invoca a função Lambda em Python, que valida a imagem, aplica a orientação EXIF, converte com Pillow, redimensiona se solicitado e remove os metadados. Um segundo bucket privado guarda o resultado e o manifesto de estado. O portal consulta o estado e devolve um link pré-assinado, válido por cinco minutos, para descarregar diretamente do S3 por HTTPS.",
            lu: "De Flask-Portal op EC2 späichert d’Original an engem private S3-Aganksbucket. En ObjectCreated-Event start d’Python-Funktioun op Lambda. Si validéiert d’Bild, berécksiichtegt d’EXIF-Orientéierung, konvertéiert et mat Pillow, verklengert et op Wonsch a läscht d’Metadaten. En zweete private Bucket späichert d’Resultat an de Statusfichier. De Portal freet de Status reegelméisseg of a gëtt fir den direkten HTTPS-Download vu S3 e virsignéierte Link aus, dee fënnef Minutte gëlteg ass.",
            de: "Das Flask-Portal auf EC2 speichert das Original in einem privaten S3-Eingabe-Bucket. Ein ObjectCreated-Ereignis startet die Python-Lambda-Funktion. Sie prüft das Bild, berücksichtigt die EXIF-Ausrichtung, konvertiert es mit Pillow, verkleinert es bei Bedarf und entfernt Metadaten. Ein separater privater Bucket enthält das Ergebnis und das Statusmanifest. Das Portal fragt den Status regelmäßig ab und liefert eine fünf Minuten gültige vorsignierte URL für den direkten HTTPS-Download aus S3.",
            fr: "Le portail Flask sur EC2 enregistre l’original dans un compartiment S3 privé. Un événement ObjectCreated déclenche la fonction Lambda en Python, qui valide l’image, applique l’orientation EXIF, la convertit avec Pillow, la redimensionne sur demande et supprime ses métadonnées. Un autre compartiment privé stocke le résultat et le manifeste d’état. Le portail interroge régulièrement l’état et fournit un lien présigné valable cinq minutes pour le téléchargement direct depuis S3 en HTTPS."
        },
        "project.aws-image-converter.architecture.caption": {
            en: "Deployed lab architecture, including the upload trigger, signed download, scheduled cleanup and monitoring.",
            pt: "Arquitetura implementada no laboratório, com o acionamento por carregamento, a ligação assinada, a limpeza agendada e a monitorização.",
            lu: "D’Architektur aus dem Labo mat Upload-Trigger, signéiertem Download, geplangtem Botzen an Iwwerwaachung.",
            de: "Die Laborarchitektur mit Upload-Trigger, signiertem Download, geplanter Bereinigung und Überwachung.",
            fr: "L’architecture déployée en laboratoire, avec le déclenchement à l’envoi, le téléchargement signé, le nettoyage planifié et la supervision."
        },
        "project.aws-image-converter.operations.title": {
            en: "Access, cleanup and monitoring",
            pt: "Acesso, limpeza e monitorização",
            lu: "Zougang, Botzen an Iwwerwaachung",
            de: "Zugriff, Bereinigung und Überwachung",
            fr: "Accès, nettoyage et supervision"
        },
        "project.aws-image-converter.operations.body": {
            en: "Both S3 buckets blocked public access, encrypted objects at rest and required HTTPS. CloudWatch recorded structured job logs and had separate alarms for recorded job failures and Lambda errors. A page refresh removed the job files in testing. EventBridge was configured to run cleanup every ten minutes for files older than 30 minutes, with a one-day S3 lifecycle rule as a fallback.",
            pt: "Ambos os buckets S3 bloqueavam o acesso público, encriptavam os objetos armazenados e exigiam HTTPS. O CloudWatch registava logs estruturados e tinha alarmes distintos para falhas registadas nos trabalhos e erros do Lambda. Nos testes, atualizar a página removeu os ficheiros do trabalho. O EventBridge foi configurado para executar a limpeza a cada dez minutos para ficheiros com mais de 30 minutos, com uma regra de expiração de um dia no S3 como recurso adicional.",
            lu: "Béid S3-Buckete blockéieren ëffentlechen Zougang, verschlësselen déi gespäichert Objeten a verlaangen HTTPS. CloudWatch huet strukturéiert Job-Logbicher an getrennten Alarmer fir protokolléiert Jobfeeler a Lambda-Feeler. Beim Test huet d’Neiluede vun der Säit d’Fichiere vum Optrag geläscht. EventBridge war agestallt, fir all zéng Minutten no Fichiere méi al wéi 30 Minutten ze sichen an se ze läschen. Eng S3-Lifecycle-Reegel léisst d’Fichieren no engem Dag oflafen.",
            de: "Beide S3-Buckets blockierten öffentlichen Zugriff, verschlüsselten gespeicherte Objekte und erforderten HTTPS. CloudWatch erfasste strukturierte Auftragsprotokolle und hatte getrennte Alarme für protokollierte Auftragsfehler und Lambda-Fehler. Beim Test löschte das Neuladen der Seite die Auftragsdateien. EventBridge war für eine Bereinigung alle zehn Minuten konfiguriert, die Dateien älter als 30 Minuten erfasste. Als Rückfalloption galt eine S3-Lebenszyklusregel mit einem Tag Ablaufzeit.",
            fr: "Les deux compartiments S3 bloquaient l’accès public, chiffraient les objets au repos et imposaient HTTPS. CloudWatch enregistrait des journaux structurés et disposait d’alarmes distinctes pour les échecs de traitement signalés et les erreurs Lambda. Lors des tests, l’actualisation de la page a supprimé les fichiers du traitement. EventBridge était configuré pour lancer toutes les dix minutes le nettoyage des fichiers de plus de 30 minutes, avec une règle d’expiration S3 d’un jour en secours."
        },
        "project.aws-image-converter.validation.title": {
            en: "What the lab verified",
            pt: "O que verificámos no laboratório",
            lu: "Wat mir am Labo getest hunn",
            de: "Was im Labor geprüft wurde",
            fr: "Ce que le laboratoire a permis de vérifier"
        },
        "project.aws-image-converter.validation.body": {
            en: "We verified the upload trigger, portal downloads, recovery after invalid input, denial of anonymous S3 requests, and denial of portal access from outside the IP allowlist. All six format combinations were exercised locally. The AWS deployment combined scripts and console setup, and the scheduled deletion was configured but remained unobserved during the lab run.",
            pt: "Verificámos o acionamento por carregamento, os downloads pelo portal, a recuperação após uma entrada inválida, o bloqueio de pedidos anónimos ao S3 e o bloqueio do portal para endereços IP fora da lista autorizada. Testámos localmente as seis combinações de formatos. A implementação na AWS combinou scripts e configuração na consola. A eliminação agendada ficou configurada, mas não foi observada durante o ensaio no laboratório.",
            lu: "Mir hunn den Upload-Trigger, den Download iwwer de Portal an d’Erhuelung no engem ongëltege Fichier getest. Anonym Ufroen un S3 an den Zougang zum Portal vun IP-Adressen ausserhalb vun der Lëscht goufe blockéiert. Déi sechs Formatkombinatioune goufe lokal getest. Den AWS-Deployement huet Scripten a Schrëtt an der Konsole kombinéiert. De geplangte Botzlaf war ageriicht, mee mir hu beim Labo-Test keng Läschung doduerch observéiert.",
            de: "Wir prüften den Upload-Trigger, Downloads über das Portal, die Erholung nach einer ungültigen Eingabe sowie die Ablehnung anonymer S3-Anfragen und von Portalzugriffen außerhalb der IP-Freigabeliste. Alle sechs Formatkombinationen wurden lokal getestet. Die AWS-Bereitstellung kombinierte Skripte und Konsolenschritte. Die geplante Löschung war eingerichtet, wurde im Laborlauf aber nicht beobachtet.",
            fr: "Nous avons vérifié le déclenchement à l’envoi, le téléchargement depuis le portail, la reprise après un fichier invalide, le refus des requêtes anonymes vers S3 et le blocage du portail hors de la liste d’adresses IP autorisées. Les six combinaisons de formats ont été testées localement. Le déploiement AWS a combiné scripts et configuration dans la console. Le nettoyage planifié était configuré, mais aucune suppression planifiée n’a été observée pendant les essais."
        },
        "project.aws-image-converter.limits.body": {
            en: "The lab portal used HTTP and the existing Learner Lab roles. We removed the lab resources after the demo.",
            pt: "O portal de laboratório usava HTTP e as funções IAM existentes no Learner Lab. Removemos os recursos do laboratório depois da demonstração.",
            lu: "De Laboportal huet HTTP an déi bestoend Learner-Lab-Rolle benotzt. No der Demo hu mir d’Laboressourcë geläscht.",
            de: "Das Laborportal nutzte HTTP und die vorhandenen Learner-Lab-Rollen. Nach der Demo entfernten wir die Laborressourcen.",
            fr: "Le portail de laboratoire utilisait HTTP et les rôles existants du Learner Lab. Nous avons supprimé les ressources après la démonstration."
        },
        "project.aws-image-converter.role.title": {
            en: "My contribution",
            pt: "A minha contribuição",
            lu: "Mäi Bäitrag",
            de: "Mein Beitrag",
            fr: "Ma contribution"
        },
        "project.aws-image-converter.stats.reduction": {
            en: "smaller in the sample JPEG → WebP conversion",
            pt: "a menos no exemplo JPEG → WebP",
            lu: "méi kleng beim Beispill JPEG → WebP",
            de: "kleiner bei der Beispielkonvertierung JPEG → WebP",
            fr: "de réduction sur l’exemple JPEG → WebP"
        },
        "project.aws-image-converter.stats.ready": {
            en: "from upload to status manifest in the first measured job",
            pt: "entre o envio e o manifesto no primeiro teste medido",
            lu: "vum Upload bis zum Statusfichier beim éischte gemoossenen Optrag",
            de: "vom Upload bis zum Statusmanifest beim ersten gemessenen Auftrag",
            fr: "entre l’envoi et le manifeste lors du premier essai mesuré"
        },
        "project.aws-image-converter.stats.checks": {
            en: "local checks passed across the converter, portal and cleanup",
            pt: "verificações locais aprovadas no conversor, portal e limpeza",
            lu: "lokal Kontrollen erfollegräich fir Konverter, Portal a Botzen",
            de: "lokale Prüfungen für Konverter, Portal und Bereinigung bestanden",
            fr: "vérifications locales réussies sur le convertisseur, le portail et le nettoyage"
        },
        "project.aws-image-converter.stats.link": {
            en: "validity of a signed download link",
            pt: "de validade do link de download",
            lu: "ass de signéierten Downloadlink gëlteg",
            de: "Gültigkeit des signierten Downloadlinks",
            fr: "de validité pour un lien de téléchargement signé"
        },
        "project.aws-image-converter.flow.title": {
            en: "How an image moves through AWS",
            pt: "O percurso de uma imagem na AWS",
            lu: "De Wee vun engem Bild duerch AWS",
            de: "Der Weg eines Bildes durch AWS",
            fr: "Le parcours d’une image dans AWS"
        },
        "project.aws-image-converter.flow.label": {
            en: "Upload to download",
            pt: "Do envio ao download",
            lu: "Vum Upload bis zum Download",
            de: "Vom Upload zum Download",
            fr: "De l’envoi au téléchargement"
        },
        "project.aws-image-converter.flow.portal": {
            en: "Flask portal on EC2",
            pt: "Portal Flask em EC2",
            lu: "Flask-Portal op EC2",
            de: "Flask-Portal auf EC2",
            fr: "Portail Flask sur EC2"
        },
        "project.aws-image-converter.flow.input": {
            en: "Private S3 input",
            pt: "Entrada privada em S3",
            lu: "Privaten Agank an S3",
            de: "Privater S3-Eingang",
            fr: "Entrée privée dans S3"
        },
        "project.aws-image-converter.flow.converter": {
            en: "Lambda converter",
            pt: "Conversor no Lambda",
            lu: "Lambda-Konverter",
            de: "Lambda-Konverter",
            fr: "Convertisseur Lambda"
        },
        "project.aws-image-converter.flow.output": {
            en: "Private S3 results",
            pt: "Resultados privados em S3",
            lu: "Privat Resultater an S3",
            de: "Private Ergebnisse in S3",
            fr: "Résultats privés dans S3"
        },
        "project.aws-image-converter.flow.note": {
            en: "S3 starts the converter when the original arrives. The browser downloads the result directly from S3 over HTTPS. EventBridge schedules cleanup, and CloudWatch tracks jobs and failures.",
            pt: "O S3 inicia o conversor quando o original chega. O navegador descarrega o resultado diretamente do S3 por HTTPS. O EventBridge agenda a limpeza e o CloudWatch acompanha os trabalhos e as falhas.",
            lu: "S3 start de Konverter wann d’Original ukënnt. De Browser luet d’Resultat direkt iwwer HTTPS vu S3 erof. EventBridge plangt d’Botzen, a CloudWatch iwwerwaacht d’Opträg a Feeler.",
            de: "S3 startet den Konverter beim Eingang des Originals. Der Browser lädt das Ergebnis direkt per HTTPS aus S3. EventBridge plant die Bereinigung, und CloudWatch erfasst Aufträge und Fehler.",
            fr: "S3 déclenche le convertisseur à la réception de l’original. Le navigateur télécharge le résultat directement depuis S3 en HTTPS. EventBridge planifie le nettoyage et CloudWatch suit les traitements et les échecs."
        },
        "project.aws-image-converter.role.app.title": {
            en: "Portal and converter",
            pt: "Portal e conversor",
            lu: "Portal a Konverter",
            de: "Portal und Konverter",
            fr: "Portail et convertisseur"
        },
        "project.aws-image-converter.role.app.body": {
            en: "I built the Flask upload, preview and download experience and the Python Lambda worker for validation, conversion, resizing and metadata removal.",
            pt: "Desenvolvi o fluxo de envio, pré-visualização e download em Flask e a função Lambda em Python para validação, conversão, redimensionamento e remoção de metadados.",
            lu: "Ech hunn den Upload, d’Virschau an den Download am Flask-Portal gebaut an d’Python-Lambda-Funktioun fir Validatioun, Konversioun, Verklengerung a Metadate-Läschung geschriwwen.",
            de: "Ich entwickelte Upload, Vorschau und Download in Flask und die Python-Lambda-Funktion zur Validierung, Konvertierung, Verkleinerung und Entfernung von Metadaten.",
            fr: "J’ai développé l’envoi, l’aperçu et le téléchargement dans Flask ainsi que la fonction Lambda en Python pour valider, convertir et redimensionner les images et supprimer leurs métadonnées."
        },
        "project.aws-image-converter.role.ops.title": {
            en: "AWS integration and verification",
            pt: "Integração AWS e verificação",
            lu: "AWS-Integratioun a Kontroll",
            de: "AWS-Integration und Prüfung",
            fr: "Intégration AWS et vérification"
        },
        "project.aws-image-converter.role.ops.body": {
            en: "I wired the S3 trigger, implemented temporary-file cleanup, configured CloudWatch monitoring, and wrote the AWS CLI scripts for deployment, verification and teardown. I also produced the architecture diagrams and technical report.",
            pt: "Liguei o acionador do S3, implementei a limpeza de ficheiros temporários, configurei o CloudWatch e escrevi os scripts AWS CLI para implementação, verificação e remoção dos recursos. Também produzi os diagramas de arquitetura e o relatório técnico.",
            lu: "Ech hunn de S3-Trigger ageriicht, d’Läsche vun temporäre Fichieren ëmgesat, CloudWatch konfiguréiert an d’AWS-CLI-Scripte fir Deployement, Kontroll an Ofbau geschriwwen. Ech hunn och d’Architekturdiagrammer an den technesche Rapport erstallt.",
            de: "Ich richtete den S3-Trigger ein, implementierte die Bereinigung temporärer Dateien, konfigurierte CloudWatch und schrieb die AWS-CLI-Skripte für Bereitstellung, Prüfung und Abbau. Außerdem erstellte ich die Architekturdiagramme und den technischen Bericht.",
            fr: "J’ai configuré le déclencheur S3 et CloudWatch, mis en place le nettoyage des fichiers temporaires et écrit les scripts AWS CLI de déploiement, de vérification et de suppression des ressources. J’ai également réalisé les schémas d’architecture et le rapport technique."
        },
        "project.aws-image-converter.role.team": {
            en: "Marios led the S3 data protection, network security and access tests. We deployed, tested and presented the system together.",
            pt: "O Marios liderou a proteção dos dados no S3, a segurança da rede e os testes de acesso. Implementámos, testámos e apresentámos o sistema em conjunto.",
            lu: "De Marios war fir den Dateschutz op S3, d’Netzwierksécherheet an d’Zougangstester zoustänneg. Mir hunn de System zesummen deployéiert, getest a presentéiert.",
            de: "Marios verantwortete den S3-Datenschutz, die Netzwerksicherheit und die Zugriffstests. Wir stellten das System gemeinsam bereit, testeten es und präsentierten es.",
            fr: "Marios a piloté la protection des données S3, la sécurité réseau et les tests d’accès. Nous avons déployé, testé et présenté le système ensemble."
        },
        "project.aws-image-converter.design.title": {
            en: "Why we split the portal and worker",
            pt: "Porque separámos o portal do conversor",
            lu: "Firwat mir de Portal an de Konverter getrennt hunn",
            de: "Warum wir Portal und Konverter trennten",
            fr: "Pourquoi séparer le portail du traitement"
        },
        "project.aws-image-converter.design.body": {
            en: "EC2 gave the team a web interface and a security-group boundary to test. S3 events moved image processing out of the web request, so Lambda could run per upload while the portal polled a small status file. Separate input and output buckets kept converted files from triggering another job.",
            pt: "O EC2 permitiu criar uma interface web e testar o controlo de rede com um grupo de segurança. Os eventos do S3 retiraram a conversão do pedido web: o Lambda podia processar cada envio enquanto o portal consultava um pequeno ficheiro de estado. Os buckets separados evitavam que os resultados iniciassem outro processamento.",
            lu: "EC2 huet der Ekipp eng Web-Interface ginn, an d’Sécherheetsgrupp huet eis erlaabt den Netzwierkzougang ze testen. S3-Eventer hunn d’Bildveraarbechtung vun der Webufro getrennt. Lambda konnt bei all Upload lafen, wärend de Portal e klenge Statusfichier ofgefrot huet. Duerch getrennte Buckete konnten d’Resultater keng nei Konversioun ausléisen.",
            de: "EC2 bot eine Weboberfläche und eine per Sicherheitsgruppe testbare Netzwerkgrenze. S3-Ereignisse entkoppelten die Bildverarbeitung vom Webrequest. Lambda lief pro Upload, während das Portal eine kleine Statusdatei abfragte. Getrennte Buckets verhinderten, dass konvertierte Dateien einen weiteren Auftrag auslösten.",
            fr: "EC2 a fourni une interface web et un périmètre réseau vérifiable avec un groupe de sécurité. Les événements S3 ont découplé la conversion de la requête web. Lambda s’exécutait à chaque envoi pendant que le portail interrogeait un petit fichier d’état. Les compartiments séparés empêchaient les fichiers convertis de déclencher un nouveau traitement."
        },
        "project.aws-image-converter.deployment.title": {
            en: "Deployment and cost",
            pt: "Implementação e custos",
            lu: "Deployement a Käschten",
            de: "Bereitstellung und Kosten",
            fr: "Déploiement et coûts"
        },
        "project.aws-image-converter.deployment.body": {
            en: "We created the S3 buckets, notification and portal security group in the AWS console. Bash scripts handled Lambda packaging, monitoring, the scheduled sweep and the EC2 portal. For continuous operation, the report estimated about $12.85 per month at the time of the lab, mostly driven by EC2, its public IPv4 address and its disk.",
            pt: "Criámos os buckets S3, a notificação e o grupo de segurança do portal na consola AWS. Os scripts Bash trataram do pacote Lambda, da monitorização, da limpeza agendada e do portal em EC2. O relatório estimava cerca de 12,85 dólares por mês para funcionamento contínuo à data do laboratório, sobretudo devido ao EC2, ao endereço IPv4 público e ao disco.",
            lu: "Mir hunn d'S3-Buckete, d’Notifikatioun an d’Sécherheetsgrupp vum Portal an der AWS-Konsol ageriicht. Bash-Scripten hunn de Lambda-Pak, d’Iwwerwaachung, dat geplangtent Botzen an den EC2-Portal opgebaut. De Rapport huet deemools fir e permanente Betrib ronn 12,85 US-Dollar pro Mount geschat, haaptsächlech fir EC2, déi ëffentlech IPv4-Adress an d’Disk.",
            de: "Wir richteten die S3-Buckets, die Benachrichtigung und die Sicherheitsgruppe in der AWS-Konsole ein. Bash-Skripte übernahmen die Lambda-Paketierung, die Überwachung, die geplante Bereinigung und das EC2-Portal. Der Bericht schätzte die Kosten für Dauerbetrieb zum Laborzeitpunkt auf rund 12,85 US-Dollar pro Monat, vor allem für EC2, die öffentliche IPv4-Adresse und den Datenträger.",
            fr: "Nous avons créé les compartiments S3, la notification et le groupe de sécurité dans la console AWS. Des scripts Bash ont géré le paquet Lambda, la supervision, le nettoyage planifié et le portail EC2. Pour un fonctionnement continu, le rapport estimait alors environ 12,85 dollars par mois, principalement pour EC2, son adresse IPv4 publique et son disque."
        },
        "project.aws-image-converter.lessons.title": {
            en: "What I learned",
            pt: "O que aprendi",
            lu: "Wat ech geléiert hunn",
            de: "Was ich gelernt habe",
            fr: "Ce que j’ai appris"
        },
        "project.aws-image-converter.lessons.body": {
            en: "When the Learner Lab session expired mid-test, a check reported a missing bucket. AWS calls to unrelated services also failed, which pointed to expired session credentials. Restarting the lab restored access to the existing resources. I would ship and test the first upload-to-download path earlier and surface the original AWS error in the check script.",
            pt: "Quando a sessão do Learner Lab expirou a meio dos testes, uma verificação indicou que faltava um bucket. Também falharam pedidos a outros serviços AWS, o que apontou para credenciais de sessão expiradas. Reiniciar o laboratório repôs o acesso aos recursos existentes. Numa próxima versão, testaria mais cedo o percurso completo e mostraria no script o erro original da AWS.",
            lu: "Wéi d’Learner-Lab-Sessioun matten am Test ofgelaf ass, huet e Kontrollscript e feelende Bucket gemellt. Ufroen un aner AWS-Servicer si gläichzäiteg feelgeschloen. Dat huet op ofgelafe Sessiounsdonnéeën higewisen. En Neistart vum Labo huet den Zougang zu de bestoende Ressourcë restauréiert. Ech géif den éischte komplette Wee vum Upload bis zum Download méi fréi testen an den Originalfeeler vun AWS am Script weisen.",
            de: "Als die Learner-Lab-Sitzung mitten im Test ablief, meldete ein Prüfschritt einen fehlenden Bucket. Auch Aufrufe anderer AWS-Dienste schlugen fehl. Das deutete auf abgelaufene Sitzungsdaten hin. Nach einem Neustart des Labors waren die Ressourcen wieder erreichbar. Beim nächsten Mal würde ich den ersten Ablauf vom Upload bis zum Download früher testen und den ursprünglichen AWS-Fehler im Skript ausgeben.",
            fr: "Lorsque la session Learner Lab a expiré pendant un essai, une vérification a signalé un compartiment manquant. Les appels à d’autres services AWS échouaient aussi, ce qui indiquait des identifiants de session expirés. Le redémarrage du laboratoire a rétabli l’accès aux ressources existantes. Je testerais plus tôt le parcours complet et afficherais l’erreur AWS d’origine dans le script."
        },
        "project.aws-image-converter.validation.output.caption": {
            en: "S3 stored the converted WebP and a separate JSON status file for job 31c6d6fa.",
            pt: "O S3 guardou o WebP convertido e um ficheiro JSON de estado separado para o processamento 31c6d6fa.",
            lu: "S3 huet de konvertéierte WebP an eng separat JSON-Statusdatei fir den Optrag 31c6d6fa gespäichert.",
            de: "S3 speicherte das konvertierte WebP und eine separate JSON-Statusdatei für Auftrag 31c6d6fa.",
            fr: "S3 a enregistré le WebP converti et un fichier d’état JSON distinct pour le traitement 31c6d6fa."
        },
        "project.aws-image-converter.validation.log.caption": {
            en: "CloudWatch recorded the same job as successful, with 9,788 output bytes and 1,008 ms of processing.",
            pt: "O CloudWatch registou o sucesso do mesmo processamento, com 9 788 bytes de saída e 1 008 ms de processamento.",
            lu: "CloudWatch huet dee selwechten Optrag als erfollegräich protokolléiert, mat 9 788 Byte Ausgab an 1 008 ms Veraarbechtungszäit.",
            de: "CloudWatch protokollierte denselben Auftrag als erfolgreich, mit 9.788 Byte Ausgabe und 1.008 ms Verarbeitungszeit.",
            fr: "CloudWatch a enregistré la réussite du même traitement, avec 9 788 octets en sortie et une durée de traitement de 1 008 ms."
        },
        "project.aws-image-converter.monitoring.caption": {
            en: "CloudWatch after deployment, showing the configured Lambda error and conversion-failure alarms.",
            pt: "CloudWatch após a implementação, com os alarmes configurados para erros do Lambda e falhas de conversão.",
            lu: "CloudWatch nom Deployement mat den ageriichten Alarmer fir Lambda-Feeler a feelgeschloe Konversiounen.",
            de: "CloudWatch nach der Bereitstellung mit den konfigurierten Alarmen für Lambda-Fehler und fehlgeschlagene Konvertierungen.",
            fr: "CloudWatch après le déploiement, avec les alarmes configurées pour les erreurs Lambda et les échecs de conversion."
        },
        "project.aws-image-converter.next.title": {
            en: "What I would change for production",
            pt: "O que mudaria para produção",
            lu: "Wat ech fir d’Produktioun géif änneren",
            de: "Was ich für den Produktivbetrieb ändern würde",
            fr: "Ce que je changerais pour la production"
        },
        "project.aws-image-converter.next.body": {
            en: "I would add HTTPS to the portal, give the portal and worker separate least-privilege IAM roles, and use an automated deployment that creates the full stack. I would also run a timed end-to-end cleanup test to verify that job files expire even when the browser cannot request deletion.",
            pt: "Adicionaria HTTPS ao portal, atribuiria funções IAM distintas com privilégios mínimos ao portal e ao conversor e automatizaria a criação de toda a infraestrutura. Também faria um teste cronometrado de ponta a ponta para verificar que os ficheiros expiram mesmo quando o navegador não consegue pedir a sua remoção.",
            lu: "Ech géif HTTPS um Portal asetzen, fir de Portal an de Konverter separat IAM-Rolle mat nëmmen den néidege Rechter uleeën an de komplette Stack automatiséiert deployéieren. Ech géif och e kompletten, zäitgesteierte Botztest maachen, fir ze iwwerpréiwen, datt d’Dateie geläscht ginn, och wann de Browser keng Läschung ufroe kann.",
            de: "Ich würde HTTPS für das Portal einrichten, Portal und Konverter getrennte IAM-Rollen mit minimalen Berechtigungen geben und die gesamte Infrastruktur automatisiert bereitstellen. Ein zeitgesteuerter End-to-End-Test würde prüfen, ob Auftragsdateien auch dann ablaufen, wenn der Browser keine Löschung anfordern kann.",
            fr: "J’ajouterais HTTPS au portail, attribuerais au portail et au convertisseur des rôles IAM distincts aux droits minimaux et automatiserais le déploiement de toute l’infrastructure. Je ferais aussi un test chronométré de bout en bout pour vérifier l’expiration des fichiers même si le navigateur ne peut pas demander leur suppression."
        },
        "project.aws-image-converter.assets.title": {
            en: "Project downloads",
            pt: "Downloads do projeto",
            lu: "Downloads fir de Projet",
            de: "Projekt-Downloads",
            fr: "Téléchargements du projet"
        },
        "project.aws-image-converter.assets.documentation.title": {
            en: "Technical documentation",
            pt: "Documentação técnica",
            lu: "Technesch Dokumentatioun",
            de: "Technische Dokumentation",
            fr: "Documentation technique"
        },
        "project.aws-image-converter.assets.documentation.desc": {
            en: "Architecture, implementation, and lab verification.",
            pt: "Arquitetura, implementação e verificação no laboratório.",
            lu: "Architektur, Ëmsetzung an Tester am Labo.",
            de: "Architektur, Umsetzung und Prüfung im Labor.",
            fr: "Architecture, mise en œuvre et vérifications en laboratoire."
        },
        "project.aws-image-converter.assets.presentation.title": {
            en: "Presentation (PDF)",
            pt: "Apresentação (PDF)",
            lu: "Presentatioun (PDF)",
            de: "Präsentation (PDF)",
            fr: "Présentation (PDF)"
        },
        "project.aws-image-converter.assets.presentation.desc": {
            en: "Slides from the AWS Learner Lab demonstration.",
            pt: "Diapositivos da demonstração no AWS Learner Lab.",
            lu: "D’Slide vun der Demo am AWS Learner Lab.",
            de: "Folien der Demonstration im AWS Learner Lab.",
            fr: "Diapositives de la démonstration dans AWS Learner Lab."
        },
        "project.aws-image-converter.assets.pending": {
            en: "Coming shortly",
            pt: "Disponível em breve",
            lu: "Geschwënn disponibel",
            de: "In Kürze verfügbar",
            fr: "Disponible prochainement"
        }
    });
})();
