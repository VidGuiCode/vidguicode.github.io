/**
 * Cylro project page translations
 * Languages: English (en), Portuguese (pt), Luxembourgish (lu), German (de), French (fr)
 * Voice: written by Gui as Cylro's co-founder and CTO, first person ("I" for the
 * technical decisions he owns, "we" for the company and the product).
 */

(function() {
    'use strict';
    const extra = {
        /* ---- Hero ---- */
        "project.cylro.hero.accent.line1": {
            en: "Website Operations",
            pt: "Operações web",
            lu: "Website Operations",
            de: "Website Operations",
            fr: "Opérations web"
        },
        "project.cylro.hero.accent.line2": {
            en: "Platform",
            pt: "Plataforma",
            lu: "Plattform",
            de: "Plattform",
            fr: "Plateforme"
        },
        "project.cylro.hero.accent.mobile.line1": {
            en: "Website Operations",
            pt: "Operações web",
            lu: "Website Operations",
            de: "Website Operations",
            fr: "Opérations web"
        },
        "project.cylro.hero.accent.mobile.line2": {
            en: "Platform",
            pt: "Plataforma",
            lu: "Plattform",
            de: "Plattform",
            fr: "Plateforme"
        },
        "project.cylro.hero.subtitle": {
            en: "The website operations platform we're building for teams that create and manage multiple public-facing websites.",
            pt: "A plataforma de operações de websites que estamos a construir para equipas que criam e gerem vários websites públicos.",
            lu: "D'Website-Operations-Plattform, déi mir fir Teams bauen, déi méi ëffentlech Websäite maachen a verwalten.",
            de: "Die Website-Operations-Plattform, die wir für Teams bauen, die mehrere öffentliche Websites erstellen und verwalten.",
            fr: "La plateforme d'opérations web que nous construisons pour les équipes qui créent et gèrent plusieurs sites publics."
        },

        /* ---- Two-lens layout: at-a-glance metric chips ---- */
        "project.cylro.glance.status.value": {
            en: "Pre-release",
            pt: "Pré-lançamento",
            lu: "Pre-Release",
            de: "Pre-Release",
            fr: "Pré-lancement"
        },
        "project.cylro.glance.status.label": {
            en: "private alpha we're targeting for around November 2026",
            pt: "alpha privado que temos como meta para cerca de novembro de 2026",
            lu: "privaten Alpha, deen mir ronderëm November 2026 ustriewen",
            de: "privater Alpha, den wir für etwa November 2026 anpeilen",
            fr: "alpha privée que nous visons pour environ novembre 2026"
        },
        "project.cylro.glance.space.label": {
            en: "Space holding an organisation's sites, people, access, and publishing",
            pt: "Space que reúne os sites, as pessoas, os acessos e a publicação de uma organização",
            lu: "Space, dee d'Säiten, d'Leit, den Zougang an d'Publishing vun enger Organisatioun zesummenhält",
            de: "Space, der Sites, Personen, Zugriffe und Publishing einer Organisation zusammenhält",
            fr: "Space qui réunit les sites, les personnes, les accès et la publication d'une organisation"
        },
        "project.cylro.glance.output.value": {
            en: "Static",
            pt: "Estático",
            lu: "Statesch",
            de: "Statisch",
            fr: "Statique"
        },
        "project.cylro.glance.output.label": {
            en: "output we publish into object storage, instead of a container per site",
            pt: "resultado que publicamos em object storage, em vez de um contentor por site",
            lu: "Resultat, dat mir an den Object Storage publizéieren, amplaz engem Container pro Site",
            de: "Ergebnis, das wir in Object Storage veröffentlichen, statt eines Containers pro Site",
            fr: "sortie que nous publions dans l'object storage, au lieu d'un conteneur par site"
        },
        "project.cylro.glance.founders.label": {
            en: "of us building the product and running the company",
            pt: "somos nós a construir o produto e a gerir a empresa",
            lu: "vun eis, déi d'Produit bauen an d'Firma féieren",
            de: "von uns, die das Produkt bauen und das Unternehmen führen",
            fr: "à construire le produit et à diriger l'entreprise"
        },

        /* ---- Blueprint: how it fits together ---- */
        "project.cylro.arch.title": {
            en: "How it fits together",
            pt: "Como tudo se encaixa",
            lu: "Wéi alles zesummespillt",
            de: "Wie alles zusammenpasst",
            fr: "Comment tout s'articule"
        },
        "project.cylro.arch.kicker": {
            en: "One Space, many sites",
            pt: "Um Space, muitos sites",
            lu: "Ee Space, vill Siten",
            de: "Ein Space, viele Websites",
            fr: "Un Space, plusieurs sites"
        },
        "project.cylro.arch.layer.work": {
            en: "Studio and modules",
            pt: "Studio e módulos",
            lu: "Studio a Moduler",
            de: "Studio und Module",
            fr: "Studio et modules"
        },
        "project.cylro.arch.layer.delivery": {
            en: "Static delivery",
            pt: "Entrega estática",
            lu: "Statesch Ausliwwerung",
            de: "Statische Auslieferung",
            fr: "Diffusion statique"
        },
        "project.cylro.arch.studio.spec": {
            en: "page structure, blocks, content and media, per website",
            pt: "estrutura de páginas, blocos, conteúdo e media, por website",
            lu: "Säitestruktur, Blocken, Inhalt a Medien, pro Websäit",
            de: "Seitenstruktur, Blöcke, Inhalte und Medien, pro Website",
            fr: "structure des pages, blocs, contenu et médias, par site"
        },
        "project.cylro.arch.core": {
            en: "Cylro backend",
            pt: "Backend da Cylro",
            lu: "Cylro-Backend",
            de: "Cylro-Backend",
            fr: "Backend de Cylro"
        },
        "project.cylro.arch.part.perm.desc": {
            en: "Spaces, roles, Crews and website scopes",
            pt: "Spaces, funções, Crews e âmbitos por website",
            lu: "Spaces, Rollen, Crews a Beräicher pro Websäit",
            de: "Spaces, Rollen, Crews und Website-Bereiche",
            fr: "Spaces, rôles, Crews et périmètres par site"
        },
        "project.cylro.arch.part.data": {
            en: "Data",
            pt: "Dados",
            lu: "Donnéeën",
            de: "Daten",
            fr: "Données"
        },
        "project.cylro.arch.part.data.desc": {
            en: "PostgreSQL with pgvector, and Redis for cache",
            pt: "PostgreSQL com pgvector, e Redis para cache",
            lu: "PostgreSQL mat pgvector, a Redis fir de Cache",
            de: "PostgreSQL mit pgvector und Redis für den Cache",
            fr: "PostgreSQL avec pgvector, et Redis pour le cache"
        },
        "project.cylro.arch.domain.spec": {
            en: "served straight from storage, with no container per site",
            pt: "servido diretamente do armazenamento, sem um contentor por site",
            lu: "direkt aus dem Späicher geliwwert, ouni e Container pro Säit",
            de: "direkt aus dem Speicher ausgeliefert, ohne Container pro Website",
            fr: "servi directement depuis le stockage, sans conteneur par site"
        },
        "project.cylro.arch.note": {
            en: "No client ever reaches the database, the storage or the identity service on its own. Studio, the modules and every permission check go through the one backend, and what a visitor finally loads is plain static files rather than a running container for each site.",
            pt: "Nenhum cliente chega sozinho à base de dados, ao armazenamento ou ao serviço de identidade. O Studio, os módulos e cada verificação de permissões passam pelo mesmo backend, e o que um visitante acaba por carregar são ficheiros estáticos simples, e não um contentor a correr para cada site.",
            lu: "Kee Client kënnt eleng un d'Datebank, un de Späicher oder un den Identitéitsservice. De Studio, d'Moduler an all Rechtekontroll ginn duerch dat eent Backend, a wat e Visiteur um Enn lued, sinn einfach statesch Fichieren an net e lafende Container fir all Säit.",
            de: "Kein Client erreicht die Datenbank, den Speicher oder den Identitätsdienst von sich aus. Studio, die Module und jede Rechteprüfung laufen über dasselbe Backend, und was ein Besucher am Ende lädt, sind schlichte statische Dateien statt eines laufenden Containers pro Website.",
            fr: "Aucun client n'atteint seul la base de données, le stockage ou le service d'identité. Studio, les modules et chaque contrôle de permissions passent par le même backend, et ce qu'un visiteur charge au final, ce sont de simples fichiers statiques plutôt qu'un conteneur en marche pour chaque site."
        },

        /* ---- Overview: what we're building Cylro to do ---- */
        "project.cylro.does.title": {
            en: "What we're building Cylro to do",
            pt: "O que estamos a construir no Cylro",
            lu: "Wat mir mam Cylro wëlle kënnen",
            de: "Wofür wir Cylro bauen",
            fr: "Ce que nous construisons dans Cylro"
        },
        "project.cylro.does.spaces.title": {
            en: "Run many sites from one Space",
            pt: "Gerir muitos sites a partir de um Space",
            lu: "Vill Säiten aus engem Space bedreiwen",
            de: "Viele Sites aus einem Space betreiben",
            fr: "Gérer de nombreux sites depuis un Space"
        },
        "project.cylro.does.spaces.desc": {
            en: "A Space brings your websites, people, access, teams, and operational context together, instead of one isolated installation per site.",
            pt: "Um Space reúne os teus websites, pessoas, acessos, equipas e contexto operacional, em vez de uma instalação isolada por site.",
            lu: "E Space bréngt deng Websäiten, Leit, Zougang, Teams an de Betribskontext zesummen, amplaz enger isoléierter Installatioun pro Site.",
            de: "Ein Space führt eure Websites, Personen, Zugriffe, Teams und den betrieblichen Kontext zusammen, statt einer isolierten Installation pro Site.",
            fr: "Un Space réunit vos sites, vos personnes, vos accès, vos équipes et votre contexte opérationnel, au lieu d'une installation isolée par site."
        },
        "project.cylro.does.studio.title": {
            en: "Give editing one workspace",
            pt: "Dar à edição um único workspace",
            lu: "Der Redaktioun ee Workspace ginn",
            de: "Dem Bearbeiten einen Workspace geben",
            fr: "Donner à l'édition un seul espace de travail"
        },
        "project.cylro.does.studio.desc": {
            en: "We're building Studio for page structure, visual design, reusable blocks, content, media, and themes, per website.",
            pt: "Estamos a construir o Studio para estrutura de páginas, design visual, blocos reutilizáveis, conteúdo, media e temas, por website.",
            lu: "Mir bauen de Studio fir Säitestruktur, visuellt Design, wiederverwendbar Blocken, Content, Medien an Themes, pro Websäit.",
            de: "Wir bauen Studio für Seitenstruktur, visuelles Design, wiederverwendbare Blöcke, Inhalte, Medien und Themes, je Website.",
            fr: "Nous construisons Studio pour la structure des pages, le design visuel, les blocs réutilisables, le contenu, les médias et les thèmes, site par site."
        },
        "project.cylro.does.modules.title": {
            en: "Add only what a site needs",
            pt: "Adicionar só o que cada site precisa",
            lu: "Nëmme setzen, wat eng Site brauch",
            de: "Nur ergänzen, was eine Site braucht",
            fr: "N'ajouter que ce dont un site a besoin"
        },
        "project.cylro.does.modules.desc": {
            en: "You enable modules such as Blog, FAQ, Collections, and Forms per website, instead of stacking plugins on every site.",
            pt: "Ativas módulos como Blog, FAQ, Collections e Forms por website, em vez de acumular plugins em todos os sites.",
            lu: "Du aktivéiers Moduler wéi Blog, FAQ, Collections a Forms pro Websäit, amplaz Plugins op all Site ze stapelen.",
            de: "Ihr aktiviert Module wie Blog, FAQ, Collections und Forms je Website, statt auf jeder Site Plugins zu stapeln.",
            fr: "Vous activez des modules comme Blog, FAQ, Collections et Forms site par site, au lieu d'empiler des plugins partout."
        },
        "project.cylro.does.publish.title": {
            en: "Publish with a way back",
            pt: "Publicar com um caminho de volta",
            lu: "Publizéiere mat engem Wee zeréck",
            de: "Veröffentlichen mit einem Weg zurück",
            fr: "Publier avec un retour possible"
        },
        "project.cylro.does.publish.desc": {
            en: "Sites publish as static output, and we're building versioned publishing so you can restore an earlier version or take a site offline.",
            pt: "Os sites publicam como resultado estático e estamos a construir publicação versionada para poderes restaurar uma versão anterior ou colocar um site offline.",
            lu: "Säiten gi statesch publizéiert, a mir bauen versionéiert Publishing, soudass du eng fréier Versioun restauréiere oder eng Site offline setze kanns.",
            de: "Sites werden als statisches Ergebnis veröffentlicht, und wir bauen versioniertes Publishing, damit ihr eine frühere Version wiederherstellen oder eine Site offline nehmen könnt.",
            fr: "Les sites sont publiés en sortie statique, et nous construisons la publication versionnée pour que vous puissiez restaurer une version antérieure ou mettre un site hors ligne."
        },

        /* ---- Technical foundations cards ---- */
        "project.cylro.tech.title": {
            en: "Technical foundations",
            pt: "Fundações técnicas",
            lu: "Technesch Fundamenter",
            de: "Technische Grundlagen",
            fr: "Fondations techniques"
        },
        "project.cylro.tech.frontend.title": {
            en: "Server-rendered Nuxt frontend",
            pt: "Frontend Nuxt com renderização no servidor",
            lu: "Server-gerendert Nuxt-Frontend",
            de: "Serverseitig gerendertes Nuxt-Frontend",
            fr: "Frontend Nuxt rendu côté serveur"
        },
        "project.cylro.tech.frontend.desc": {
            en: "Nuxt 4 with SSR, Vue 3, Pinia, and Tailwind CSS. I keep it as a separate layer that only reaches the product through our backend API.",
            pt: "Nuxt 4 com SSR, Vue 3, Pinia e Tailwind CSS. Mantenho-o como camada separada que só chega ao produto através da API do nosso backend.",
            lu: "Nuxt 4 mat SSR, Vue 3, Pinia an Tailwind CSS. Ech halen en als separat Schicht, déi nëmmen iwwer d'API vun eisem Backend un d'Produit kënnt.",
            de: "Nuxt 4 mit SSR, Vue 3, Pinia und Tailwind CSS. Ich halte es als eigene Schicht, die das Produkt nur über unsere Backend-API erreicht.",
            fr: "Nuxt 4 avec SSR, Vue 3, Pinia et Tailwind CSS. Je le garde comme couche séparée qui n'accède au produit que via l'API de notre backend."
        },
        "project.cylro.tech.backend.title": {
            en: "One backend as the controller",
            pt: "Um backend como controlador",
            lu: "Ee Backend als Controller",
            de: "Ein Backend als Steuerung",
            fr: "Un backend comme contrôleur"
        },
        "project.cylro.tech.backend.desc": {
            en: "I run API access, authentication, permission checks, rate limiting, publishing, and deployment workflows through one Node.js and Express layer.",
            pt: "Faço passar o acesso à API, a autenticação, a verificação de permissões, o rate limiting, a publicação e os fluxos de deployment por uma única camada Node.js e Express.",
            lu: "Ech loossen den API-Zougang, d'Authentifikatioun, d'Permissiounskontrollen, d'Rate Limiting, d'Publishing an d'Deployment-Workflows duerch eng eenzeg Node.js- an Express-Schicht lafen.",
            de: "Ich lasse API-Zugriff, Authentifizierung, Berechtigungsprüfungen, Rate Limiting, Publishing und Deployment-Abläufe über eine einzige Node.js- und Express-Schicht laufen.",
            fr: "Je fais passer l'accès API, l'authentification, la vérification des permissions, le rate limiting, la publication et les workflows de déploiement par une seule couche Node.js et Express."
        },
        "project.cylro.tech.data.title": {
            en: "PostgreSQL, pgvector, Redis",
            pt: "PostgreSQL, pgvector, Redis",
            lu: "PostgreSQL, pgvector, Redis",
            de: "PostgreSQL, pgvector, Redis",
            fr: "PostgreSQL, pgvector, Redis"
        },
        "project.cylro.tech.data.desc": {
            en: "PostgreSQL holds our structured application data, pgvector is in place for where we're heading with AI, and Redis is the caching layer.",
            pt: "O PostgreSQL guarda os nossos dados estruturados, o pgvector está preparado para a direção que queremos seguir com IA, e o Redis é a camada de cache.",
            lu: "PostgreSQL hält eis strukturéiert Applikatiounsdonnéeën, pgvector ass do fir d'Richtung, déi mir mat KI aschloe wëllen, a Redis ass d'Cache-Schicht.",
            de: "PostgreSQL hält unsere strukturierten Anwendungsdaten, pgvector ist für die Richtung da, die wir mit KI einschlagen wollen, und Redis ist die Caching-Schicht.",
            fr: "PostgreSQL conserve nos données applicatives structurées, pgvector est en place pour la direction que nous prenons avec l'IA, et Redis sert de couche de cache."
        },
        "project.cylro.tech.delivery.title": {
            en: "Static delivery from object storage",
            pt: "Entrega estática a partir de object storage",
            lu: "Statesch Ausliwwerung aus dem Object Storage",
            de: "Statische Auslieferung aus dem Object Storage",
            fr: "Diffusion statique depuis l'object storage"
        },
        "project.cylro.tech.delivery.desc": {
            en: "We export sites as HTML and assets into S3-compatible storage and serve them over a custom domain, with CDN delivery as the next step.",
            pt: "Exportamos os sites como HTML e assets para armazenamento compatível com S3 e servimo-los através de um domínio próprio, com a entrega por CDN como passo seguinte.",
            lu: "Mir exportéieren d'Sitte wéi HTML an Assets an S3-kompatibele Storage a liwweren se iwwer en eegenen Domain aus, mat CDN-Ausliwwerung als nächste Schrëtt.",
            de: "Wir exportieren Sites als HTML und Assets in S3-kompatiblen Speicher und liefern sie über eine eigene Domain aus, mit CDN-Auslieferung als nächstem Schritt.",
            fr: "Nous exportons les sites en HTML et assets vers un stockage compatible S3 et les servons via un domaine personnalisé, la diffusion CDN étant l'étape suivante."
        },

        /* ---- The Idea ---- */
        "project.cylro.section.idea.title": {
            en: "The Idea",
            pt: "A Ideia",
            lu: "D'Iddi",
            de: "Die Idee",
            fr: "L'idée"
        },
        "project.cylro.section.idea.p1": {
            en: "We're building Cylro for organisations that create and manage multiple public-facing websites across clients, brands, and internal teams.",
            pt: "Estamos a construir o Cylro para organizações que criam e gerem vários websites públicos entre clientes, marcas e equipas internas.",
            lu: "Mir bauen de Cylro fir Organisatiounen, déi méi ëffentlech Websäiten iwwer Clienten, Marken an intern Teams maachen a verwalten.",
            de: "Wir bauen Cylro für Organisationen, die mehrere öffentliche Websites über Kunden, Marken und interne Teams hinweg erstellen und verwalten.",
            fr: "Nous construisons Cylro pour les organisations qui créent et gèrent plusieurs sites publics à travers clients, marques et équipes internes."
        },
        "project.cylro.section.idea.p2": {
            en: "We want websites to be easier to create, organise, publish, and maintain, without every organisation having to assemble its own separate CMS, hosting, domain, media, access, and publishing systems.",
            pt: "Queremos que os websites sejam mais fáceis de criar, organizar, publicar e manter, sem que cada organização tenha de montar os seus próprios sistemas separados de CMS, alojamento, domínios, media, acessos e publicação.",
            lu: "Mir wëllen, datt Websäite méi einfach ze maachen, ze organiséieren, ze publizéieren an z'ënnerhalen sinn, ouni datt all Organisatioun hir eege getrennte CMS-, Hosting-, Domain-, Medien-, Access- a Publishing-Systemer zesummesetze muss.",
            de: "Wir wollen, dass Websites leichter zu erstellen, zu organisieren, zu veröffentlichen und zu pflegen sind, ohne dass jede Organisation eigene getrennte CMS-, Hosting-, Domain-, Medien-, Zugriffs- und Publishing-Systeme zusammenstellen muss.",
            fr: "Nous voulons que les sites soient plus faciles à créer, organiser, publier et maintenir, sans que chaque organisation doive assembler ses propres systèmes séparés de CMS, hébergement, domaines, médias, accès et publication."
        },
        "project.cylro.section.idea.p3": {
            en: "We keep the focus deliberately narrow: company websites, landing pages, portfolios, blogs, and content hubs. Cylro isn't a general application-hosting platform, and it isn't a build-anything-with-AI product.",
            pt: "Mantemos o foco deliberadamente estreito: sites de empresas, landing pages, portefólios, blogues e hubs de conteúdo. O Cylro não é uma plataforma genérica de alojamento de aplicações, nem um produto de construir-tudo-com-IA.",
            lu: "Mir halen de Fokus bewosst schmuel: Firmesäiten, Landing Pages, Portfolioen, Blogen a Content-Hubs. De Cylro ass keng allgemeng Applikatiouns-Hosting-Plattform a kee Bau-alles-mat-KI-Produkt.",
            de: "Wir halten den Fokus bewusst eng: Firmenwebsites, Landing Pages, Portfolios, Blogs und Content-Hubs. Cylro ist keine allgemeine Anwendungs-Hosting-Plattform und kein Alles-mit-KI-Baukasten.",
            fr: "Nous gardons un périmètre volontairement restreint : sites d'entreprise, landing pages, portfolios, blogs et hubs de contenu. Cylro n'est ni une plateforme d'hébergement d'applications généraliste, ni un produit pour tout construire avec l'IA."
        },

        /* ---- Why this exists ---- */
        "project.cylro.section.why.title": {
            en: "Why This Exists",
            pt: "Porque Isto Existe",
            lu: "Firwat et dat gëtt",
            de: "Warum es das gibt",
            fr: "Pourquoi ça existe"
        },
        "project.cylro.section.why.p1": {
            en: "It started with my own frustration: separate CMS installations, plugins, hosting dashboards, domains, and the same setup work repeated for every new website.",
            pt: "Começou com a minha própria frustração: instalações de CMS separadas, plugins, painéis de alojamento, domínios e o mesmo trabalho de configuração repetido em cada novo website.",
            lu: "Et huet mat menger eegener Frustratioun ugefaang: getrennte CMS-Installatiounen, Plugins, Hosting-Dashboards, Domainen an ëmmer nees déiselwecht Setup-Aarbecht fir all nei Websäit.",
            de: "Angefangen hat es mit meiner eigenen Frustration: getrennte CMS-Installationen, Plugins, Hosting-Dashboards, Domains und dieselbe Einrichtungsarbeit für jede neue Website.",
            fr: "Tout est parti de ma propre frustration : des installations CMS séparées, des plugins, des dashboards d'hébergement, des domaines, et le même travail de mise en place répété pour chaque nouveau site."
        },
        "project.cylro.section.why.p2": {
            en: "Our first idea was an open-source CMS that organisations could self-host or run as a managed service. Working through it, we found the harder problem was operations rather than the editor: who's allowed to change what, how a change goes live, and how you get back when it shouldn't have.",
            pt: "A nossa primeira ideia foi um CMS open-source que as organizações pudessem alojar por si ou usar como serviço gerido. Ao trabalhar nisso, percebemos que o problema mais difícil era a operação e não o editor: quem pode alterar o quê, como é que uma alteração entra em produção e como se volta atrás quando não devia ter entrado.",
            lu: "Eis éischt Iddi war en Open-Source-CMS, dat Organisatioune selwer hoste oder als geréierte Service benotze kéinten. Beim Schaffen dorunner hu mir gemierkt, datt de schwieregere Problem d'Operatioun ass an net den Editor: wien wat änneren däerf, wéi eng Ännerung live geet, a wéi ee zeréckkënnt, wann se net hätt sollen live goen.",
            de: "Unsere erste Idee war ein Open-Source-CMS, das Organisationen selbst hosten oder als Managed Service nutzen könnten. Bei der Arbeit daran merkten wir, dass das schwierigere Problem der Betrieb ist und nicht der Editor: wer was ändern darf, wie eine Änderung live geht und wie man zurückkommt, wenn sie es nicht hätte sollen.",
            fr: "Notre première idée était un CMS open source que les organisations pourraient auto-héberger ou utiliser en service géré. En y travaillant, nous avons constaté que le vrai problème était l'exploitation plutôt que l'éditeur : qui a le droit de modifier quoi, comment un changement passe en ligne, et comment revenir en arrière quand il n'aurait pas dû."
        },
        "project.cylro.section.why.p3": {
            en: "That turned into one website operations platform for many sites: Spaces, Studio, structured editing, design systems, access boundaries, controlled publishing, and lightweight static delivery. We're reimagining website operations, not claiming to have invented a category.",
            pt: "Isso tornou-se uma plataforma de operações de websites para muitos sites: Spaces, Studio, edição estruturada, design systems, fronteiras de acesso, publicação controlada e entrega estática leve. Estamos a reimaginar as operações de websites, não a dizer que inventámos uma categoria.",
            lu: "Doraus gouf eng Website-Operations-Plattform fir vill Säiten: Spaces, Studio, strukturéiert Redaktioun, Design Systems, Accessgrenzen, kontrolléiert Publishing a liicht statesch Ausliwwerung. Mir denken d'Website-Operatiounen nei, mir behaapten net, eng nei Kategorie erfonnt ze hunn.",
            de: "Daraus wurde eine Website-Operations-Plattform für viele Sites: Spaces, Studio, strukturiertes Bearbeiten, Design-Systeme, Zugriffsgrenzen, kontrolliertes Publishing und schlanke statische Auslieferung. Wir denken den Website-Betrieb neu, wir behaupten nicht, eine Kategorie erfunden zu haben.",
            fr: "C'est devenu une plateforme d'opérations web pour de nombreux sites : Spaces, Studio, édition structurée, design systems, limites d'accès, publication contrôlée et diffusion statique légère. Nous réinventons les opérations web, nous ne prétendons pas avoir inventé une catégorie."
        },

        /* ---- Inside a Space ---- */
        "project.cylro.section.inside.title": {
            en: "Inside a Space",
            pt: "Dentro de um Space",
            lu: "An engem Space",
            de: "Innerhalb eines Space",
            fr: "À l'intérieur d'un Space"
        },
        "project.cylro.inside.spaces.title": {
            en: "Spaces",
            pt: "Spaces",
            lu: "Spaces",
            de: "Spaces",
            fr: "Spaces"
        },
        "project.cylro.inside.spaces.desc": {
            en: "A Space is your organisation's working environment and ownership boundary: your people, access, websites, teams, and the responsibility for keeping those sites maintained.",
            pt: "Um Space é o ambiente de trabalho e a fronteira de propriedade da tua organização: as tuas pessoas, acessos, websites, equipas e a responsabilidade de manter esses sites.",
            lu: "E Space ass d'Aarbechtsëmfeld an d'Ownership-Grenz vun denger Organisatioun: deng Leit, den Zougang, d'Websäiten, d'Teams an d'Verantwortung, déi Säiten z'ënnerhalen.",
            de: "Ein Space ist die Arbeitsumgebung und die Eigentumsgrenze eurer Organisation: eure Personen, Zugriffe, Websites, Teams und die Verantwortung, diese Sites zu pflegen.",
            fr: "Un Space est l'environnement de travail et la frontière de propriété de votre organisation : vos personnes, vos accès, vos sites, vos équipes et la responsabilité de les maintenir."
        },
        "project.cylro.inside.crews.title": {
            en: "Crews and roles",
            pt: "Crews e funções",
            lu: "Crews a Rollen",
            de: "Crews und Rollen",
            fr: "Crews et rôles"
        },
        "project.cylro.inside.crews.desc": {
            en: "We built Crews for agencies and larger teams with specialised people on different clients. Roles and scoped permissions decide who can view, edit, publish, or manage. We'll settle the exact vocabulary during the alpha.",
            pt: "Criámos as Crews para agências e equipas maiores com pessoas especializadas em clientes diferentes. As funções e as permissões delimitadas definem quem pode ver, editar, publicar ou gerir. Vamos fechar o vocabulário exato durante o alpha.",
            lu: "Mir hunn d'Crews fir Agencen a gréisser Teams gebaut, déi spezialiséiert Leit op verschiddene Clienten hunn. Rollen a limitéiert Permissioune bestëmmen, wien kucken, änneren, publizéieren oder verwalte kann. Dat exaktt Vokabulär leeë mir am Alpha fest.",
            de: "Crews haben wir für Agenturen und größere Teams gebaut, die spezialisierte Personen auf verschiedenen Kunden haben. Rollen und eingegrenzte Berechtigungen bestimmen, wer sehen, bearbeiten, veröffentlichen oder verwalten darf. Das genaue Vokabular legen wir im Alpha fest.",
            fr: "Nous avons conçu les Crews pour les agences et les équipes plus grandes, avec des personnes spécialisées sur différents clients. Les rôles et permissions délimitées décident qui peut consulter, modifier, publier ou gérer. Nous fixerons le vocabulaire exact pendant l'alpha."
        },
        "project.cylro.inside.studio.title": {
            en: "Studio",
            pt: "Studio",
            lu: "Studio",
            de: "Studio",
            fr: "Studio"
        },
        "project.cylro.inside.studio.desc": {
            en: "The website workspace: settings, page structure, visual design, reusable blocks, content, media, and themes for one site, wired into the operational controls of the wider Space.",
            pt: "O workspace do website: definições, estrutura de páginas, design visual, blocos reutilizáveis, conteúdo, media e temas de um site, ligados aos controlos operacionais do Space.",
            lu: "De Workspace vun der Websäit: Astellungen, Säitestruktur, visuellt Design, wiederverwendbar Blocken, Content, Medien an Themes fir eng Site, verbonne mat de Betribskontrollen vum ganze Space.",
            de: "Der Website-Workspace: Einstellungen, Seitenstruktur, visuelles Design, wiederverwendbare Blöcke, Inhalte, Medien und Themes für eine Site, verdrahtet mit den betrieblichen Steuerungen des Space.",
            fr: "L'espace de travail du site : réglages, structure des pages, design visuel, blocs réutilisables, contenu, médias et thèmes pour un site, reliés aux contrôles opérationnels du Space."
        },
        "project.cylro.inside.design.title": {
            en: "Design system",
            pt: "Design system",
            lu: "Design System",
            de: "Design-System",
            fr: "Design system"
        },
        "project.cylro.inside.design.desc": {
            en: "A design layer for components, structural rules, colours, themes, fonts, icons, and brand guidelines. Shared styling applies consistently across a site, or a designer can switch it off when they want direct control.",
            pt: "Uma camada de design para componentes, regras estruturais, cores, temas, tipos de letra, ícones e diretrizes de marca. O estilo partilhado aplica-se de forma consistente num site, ou um designer pode desligá-lo quando quer controlo direto.",
            lu: "Eng Design-Schicht fir Komponenten, Struktur-Regelen, Faarwen, Themes, Schrëften, Ikonen a Markeguidelines. Gedeeltent Styling gëllt konsequent op enger Site, oder en Designer kann et ausschalten, wann en direkt Kontroll wëll.",
            de: "Eine Design-Schicht für Komponenten, strukturelle Regeln, Farben, Themes, Schriften, Icons und Markenrichtlinien. Geteiltes Styling gilt konsistent für eine Site, oder eine Designerin schaltet es ab, wenn sie direkte Kontrolle will.",
            fr: "Une couche de design pour les composants, les règles structurelles, les couleurs, les thèmes, les polices, les icônes et les guidelines de marque. Le style partagé s'applique de façon cohérente sur un site, ou un designer peut le désactiver quand il veut un contrôle direct."
        },
        "project.cylro.section.inside.modules": {
            en: "On top of that, modules add specialised capability only where a site needs it. Turn on the blog module and that website gets an area for writing articles, editing them, adding images, and managing related content. Collections and the modules we add later follow the same principle, because we don't want to end up with an unstructured plugin collection. Settings, domains, SEO, forms, client-facing access, and analytics are things we're still shaping.",
            pt: "Além disso, os módulos acrescentam capacidades especializadas apenas onde o site precisa delas. Ativa o módulo de blogue e esse website ganha uma área para escrever artigos, editá-los, adicionar imagens e gerir conteúdo relacionado. As Collections e os módulos que adicionarmos depois seguem o mesmo princípio, porque não queremos acabar com uma coleção desestruturada de plugins. Definições, domínios, SEO, formulários, acesso para clientes e analytics são coisas que ainda estamos a definir.",
            lu: "Doriwwer eraus setze Moduler spezialiséiert Fäegkeeten nëmmen do dobäi, wou eng Site se brauch. Schalt de Blog-Modul un an déi Websäit kritt e Beräich fir Artikelen ze schreiwen, se z'änneren, Biller derbäizesetzen a verbonnene Content ze verwalten. Collections an d'Moduler, déi mir méi spéit derbäisetzen, follegen dem selwechte Prinzip, well mir net bei enger onstrukturéierter Plugin-Sammlung wëllen ophalen. Astellungen, Domainen, SEO, Formulairen, Clientszougang an Analytics si nach amgaang, geformt ze ginn.",
            de: "Darüber hinaus ergänzen Module spezialisierte Funktionen nur dort, wo eine Site sie braucht. Schaltet das Blog-Modul ein, und diese Website bekommt einen Bereich zum Schreiben und Bearbeiten von Artikeln, zum Hinzufügen von Bildern und zum Verwalten zugehöriger Inhalte. Collections und die Module, die wir später ergänzen, folgen demselben Prinzip, weil wir nicht bei einer unstrukturierten Plugin-Sammlung landen wollen. Einstellungen, Domains, SEO, Formulare, Kundenzugang und Analytics arbeiten wir noch aus.",
            fr: "En complément, les modules n'ajoutent des capacités spécialisées que là où un site en a besoin. Activez le module blog et ce site obtient un espace pour rédiger des articles, les modifier, ajouter des images et gérer le contenu associé. Les Collections et les modules que nous ajouterons ensuite suivent le même principe, car nous ne voulons pas finir avec une collection de plugins désordonnée. Réglages, domaines, SEO, formulaires, accès client et analytics sont encore en cours de définition."
        },

        /* ---- Publishing and recovery ---- */
        "project.cylro.section.publish.title": {
            en: "Publishing and Recovery",
            pt: "Publicação e Recuperação",
            lu: "Publishing a Recovery",
            de: "Publishing und Wiederherstellung",
            fr: "Publication et restauration"
        },
        "project.cylro.publish.build.title": {
            en: "Build it in Studio",
            pt: "Construir no Studio",
            lu: "Am Studio bauen",
            de: "In Studio bauen",
            fr: "Le construire dans Studio"
        },
        "project.cylro.publish.build.desc": {
            en: "You put a website together in Studio, then our backend runs the build and publishing workflow for it.",
            pt: "Montas o website no Studio e depois o nosso backend executa o fluxo de build e publicação.",
            lu: "Du setz eng Websäit am Studio zesummen, an duerno féiert eise Backend de Build- a Publishing-Workflow dofir aus.",
            de: "Ihr stellt eine Website in Studio zusammen, danach führt unser Backend den Build- und Publishing-Ablauf dafür aus.",
            fr: "Vous assemblez un site dans Studio, puis notre backend exécute le workflow de build et de publication."
        },
        "project.cylro.publish.export.title": {
            en: "Publish as static output",
            pt: "Publicar como resultado estático",
            lu: "Als statescht Resultat publizéieren",
            de: "Als statisches Ergebnis veröffentlichen",
            fr: "Publier en sortie statique"
        },
        "project.cylro.publish.export.desc": {
            en: "We export the result as HTML and static assets into object storage, where a custom domain, and CDN delivery, can serve it to your visitors.",
            pt: "Exportamos o resultado como HTML e assets estáticos para object storage, onde um domínio próprio, e a entrega por CDN, o podem servir aos teus visitantes.",
            lu: "Mir exportéieren d'Resultat als HTML a statesch Assets an den Object Storage, wou en eegenen Domain, an d'CDN-Ausliwwerung, et dengen Visiteure liwwere kann.",
            de: "Wir exportieren das Ergebnis als HTML und statische Assets in den Object Storage, wo eine eigene Domain und die CDN-Auslieferung es an eure Besucher ausliefern können.",
            fr: "Nous exportons le résultat en HTML et assets statiques vers l'object storage, où un domaine personnalisé, et la diffusion CDN, peuvent le servir à vos visiteurs."
        },
        "project.cylro.publish.recover.title": {
            en: "Keep a way back",
            pt: "Manter um caminho de volta",
            lu: "E Wee zeréck behalen",
            de: "Einen Weg zurück behalten",
            fr: "Garder un retour possible"
        },
        "project.cylro.publish.recover.desc": {
            en: "We're making publishing versioned, so you can go back to a previous published version, restore it, or take a website offline.",
            pt: "Estamos a tornar a publicação versionada, para poderes voltar a uma versão publicada anterior, restaurá-la ou colocar um website offline.",
            lu: "Mir maachen d'Publishing versionéiert, soudass du op eng fréier publizéiert Versioun zeréckgoen, se restauréieren oder eng Websäit offline setze kanns.",
            de: "Wir machen Publishing versioniert, damit ihr zu einer früher veröffentlichten Version zurückkehren, sie wiederherstellen oder eine Website offline nehmen könnt.",
            fr: "Nous rendons la publication versionnée, pour que vous puissiez revenir à une version publiée précédente, la restaurer ou mettre un site hors ligne."
        },
        "project.cylro.publish.note": {
            en: "These are controls you trigger yourself. We don't promise automatic rollback, automatic failover, or guaranteed recovery times.",
            pt: "Estes são controlos que acionas tu. Não prometemos rollback automático, failover automático nem tempos de recuperação garantidos.",
            lu: "Dat si Kontrollen, déi s du selwer ausléis. Mir verspriechen keen automatesche Rollback, keen automatescht Failover a keng garantéiert Recovery-Zäiten.",
            de: "Das sind Kontrollen, die ihr selbst auslöst. Wir versprechen keinen automatischen Rollback, kein automatisches Failover und keine garantierten Wiederherstellungszeiten.",
            fr: "Ce sont des contrôles que vous déclenchez vous-mêmes. Nous ne promettons ni rollback automatique, ni failover automatique, ni délai de restauration garanti."
        },

        /* ---- My role ---- */
        "project.cylro.section.role.title": {
            en: "My Role",
            pt: "O Meu Papel",
            lu: "Meng Roll",
            de: "Meine Rolle",
            fr: "Mon rôle"
        },
        "project.cylro.section.role.p1": {
            en: "I co-founded Cylro with Jim and I'm its technical lead and CTO. I set the technical direction and work hands-on across backend architecture, infrastructure, deployment, security, data flow, service boundaries, and how we design the AI integration.",
            pt: "Cofundei o Cylro com o Jim e sou o responsável técnico e CTO. Defino a direção técnica e trabalho de forma prática em arquitetura de backend, infraestrutura, deployment, segurança, fluxo de dados, fronteiras de serviços e na forma como desenhamos a integração de IA.",
            lu: "Ech hunn de Cylro mam Jim matgegrënnt a sinn den technesche Lead an CTO. Ech setzen déi technesch Richtung a schaffe praktesch un der Backend-Architektur, der Infrastruktur, dem Deployment, der Sécherheet, dem Datefloss, de Servicegrenzen an un der Manéier, wéi mir d'KI-Integratioun designen.",
            de: "Ich habe Cylro mit Jim mitgegründet und bin technischer Leiter und CTO. Ich setze die technische Richtung und arbeite praktisch an Backend-Architektur, Infrastruktur, Deployment, Sicherheit, Datenfluss, Servicegrenzen und daran, wie wir die KI-Integration gestalten.",
            fr: "J'ai cofondé Cylro avec Jim et j'en suis le responsable technique et CTO. Je définis la direction technique et travaille concrètement sur l'architecture backend, l'infrastructure, le déploiement, la sécurité, le flux de données, les frontières de services et la façon dont nous concevons l'intégration IA."
        },
        "project.cylro.section.role.p2": {
            en: "Jim leads the visual, frontend, and product-vision side. We share the product decisions, the company administration, and the business direction, and we run the whole thing as a two-founder team.",
            pt: "O Jim lidera a parte visual, de frontend e de visão de produto. Partilhamos as decisões de produto, a administração da empresa e a direção do negócio, e gerimos tudo como uma equipa de dois fundadores.",
            lu: "De Jim féiert de visuellen, de Frontend- an de Produktvisioun-Deel. Mir deelen d'Produktentscheedungen, d'Administratioun vun der Firma an d'Geschäftsrichtung, a mir féieren dat Ganzt als Team vun zwee Grënner.",
            de: "Jim führt den visuellen, den Frontend- und den Produktvisions-Teil. Produktentscheidungen, Unternehmensverwaltung und geschäftliche Ausrichtung teilen wir uns, und wir führen das Ganze als Team aus zwei Gründern.",
            fr: "Jim dirige le volet visuel, frontend et vision produit. Nous partageons les décisions produit, l'administration de l'entreprise et l'orientation business, et nous menons l'ensemble à deux cofondateurs."
        },

        /* ---- Company timeline ---- */
        "project.cylro.section.timeline.title": {
            en: "Company Timeline",
            pt: "Cronologia da Empresa",
            lu: "Chronologie vun der Firma",
            de: "Unternehmens-Zeitleiste",
            fr: "Chronologie de l'entreprise"
        },
        "project.cylro.timeline.founded.title": {
            en: "We start Cylro",
            pt: "Criamos o Cylro",
            lu: "Mir starten de Cylro",
            de: "Wir starten Cylro",
            fr: "Nous lançons Cylro"
        },
        "project.cylro.timeline.founded.desc": {
            en: "Jim and I start Cylro in Luxembourg, moving from an open-source CMS idea to one platform for website operations.",
            pt: "Eu e o Jim criamos o Cylro no Luxemburgo, passando da ideia de um CMS open-source para uma plataforma de operações de websites.",
            lu: "De Jim an ech starten de Cylro zu Lëtzebuerg a wiesselen vun der Iddi vun engem Open-Source-CMS op eng Plattform fir Website-Operatiounen.",
            de: "Jim und ich starten Cylro in Luxemburg und wechseln von der Idee eines Open-Source-CMS zu einer Plattform für Website-Operations.",
            fr: "Jim et moi lançons Cylro au Luxembourg, en passant de l'idée d'un CMS open source à une plateforme d'opérations web."
        },
        "project.cylro.timeline.building.title": {
            en: "Landing page live, product in build",
            pt: "Landing page online, produto em construção",
            lu: "Landing Page live, Produit gëtt gebaut",
            de: "Landing Page live, Produkt im Bau",
            fr: "Landing page en ligne, produit en construction"
        },
        "project.cylro.timeline.building.desc": {
            en: "cylro.com is public and people can request early access, while we keep building the platform itself.",
            pt: "O cylro.com está público e é possível pedir acesso antecipado, enquanto continuamos a construir a própria plataforma.",
            lu: "cylro.com ass ëffentlech a Leit kënne fréien Zougang ufroen, wärend mir un der Plattform selwer weiderbauen.",
            de: "cylro.com ist öffentlich und man kann Early Access anfragen, während wir die Plattform selbst weiterbauen.",
            fr: "cylro.com est public et il est possible de demander un accès anticipé, pendant que nous continuons à construire la plateforme."
        },
        "project.cylro.timeline.alpha.meta": {
            en: "NOV 2026 · TARGET",
            pt: "NOV 2026 · META",
            lu: "NOV 2026 · ZIL",
            de: "NOV 2026 · ZIEL",
            fr: "NOV 2026 · VISÉ"
        },
        "project.cylro.timeline.alpha.title": {
            en: "Private alpha",
            pt: "Alpha privado",
            lu: "Privaten Alpha",
            de: "Privater Alpha",
            fr: "Alpha privée"
        },
        "project.cylro.timeline.alpha.desc": {
            en: "We're targeting a private alpha for around November 2026, if we're ready, to see how deployment, updates, failures, recovery, and the gaps in the product hold up in real conditions.",
            pt: "Temos como meta um alpha privado para cerca de novembro de 2026, se estivermos prontos, para ver como se comportam o deployment, as atualizações, as falhas, a recuperação e as lacunas do produto em condições reais.",
            lu: "Mir striewen e privaten Alpha ronderëm November 2026 un, wa mir prett sinn, fir ze kucke wéi Deployment, Updates, Pannen, Recovery an d'Lücken am Produit ënner richtege Konditiounen halen.",
            de: "Wir peilen einen privaten Alpha für etwa November 2026 an, wenn wir so weit sind, um zu sehen, wie Deployment, Updates, Ausfälle, Wiederherstellung und die Lücken im Produkt unter realen Bedingungen standhalten.",
            fr: "Nous visons une alpha privée pour environ novembre 2026, si nous sommes prêts, afin de voir comment le déploiement, les mises à jour, les pannes, la restauration et les manques du produit tiennent en conditions réelles."
        },

        /* ---- Current status ---- */
        "project.cylro.section.now.title": {
            en: "Current Status",
            pt: "Estado Atual",
            lu: "Aktuelle Status",
            de: "Aktueller Status",
            fr: "Statut actuel"
        },
        "project.cylro.section.now.p1": {
            en: "Cylro is pre-release and we're still building it. Our landing page is live and you can request early access through cylro.com, but the product isn't open for general use. We're not making any availability, pricing, or service commitments yet.",
            pt: "O Cylro está em pré-lançamento e continuamos a construí-lo. A nossa landing page está online e podes pedir acesso antecipado em cylro.com, mas o produto não está aberto ao uso geral. Ainda não assumimos compromissos de disponibilidade, preços ou serviço.",
            lu: "De Cylro ass virum Release a mir bauen nach dorunner. Eis Landing Page ass live an du kanns fréien Zougang iwwer cylro.com ufroen, mä d'Produit ass net fir allgemeng Notzung op. Mir maachen nach keng Zousoen zu Disponibilitéit, Präisser oder Service.",
            de: "Cylro ist vor der Veröffentlichung und wir bauen noch daran. Unsere Landing Page ist live und ihr könnt über cylro.com Early Access anfragen, aber das Produkt ist nicht für die allgemeine Nutzung geöffnet. Zu Verfügbarkeit, Preisen oder Service sagen wir noch nichts zu.",
            fr: "Cylro est en pré-lancement et nous le construisons encore. Notre landing page est en ligne et vous pouvez demander un accès anticipé via cylro.com, mais le produit n'est pas ouvert à un usage général. Nous ne prenons pas encore d'engagement de disponibilité, de tarif ou de service."
        },

        /* ---- Technical navigation ---- */
        "project.cylro.techNav.label": {
            en: "Jump to", pt: "Ir para", lu: "Sprangen op", de: "Springen zu", fr: "Aller à"
        },
        "project.cylro.techNav.frontend": {
            en: "Frontend", pt: "Frontend", lu: "Frontend", de: "Frontend", fr: "Frontend"
        },
        "project.cylro.techNav.backend": {
            en: "Backend", pt: "Backend", lu: "Backend", de: "Backend", fr: "Backend"
        },
        "project.cylro.techNav.data": {
            en: "Data", pt: "Dados", lu: "Donnéeën", de: "Daten", fr: "Données"
        },
        "project.cylro.techNav.publishing": {
            en: "Publishing", pt: "Publicação", lu: "Publishing", de: "Publishing", fr: "Publication"
        },
        "project.cylro.techNav.infrastructure": {
            en: "Infrastructure", pt: "Infraestrutura", lu: "Infrastruktur", de: "Infrastruktur", fr: "Infrastructure"
        },
        "project.cylro.techNav.ai": {
            en: "AI", pt: "IA", lu: "KI", de: "KI", fr: "IA"
        },
        "project.cylro.techNav.security": {
            en: "Security", pt: "Segurança", lu: "Sécherheet", de: "Sicherheit", fr: "Sécurité"
        },

        /* ---- Technical: how I built it ---- */
        "project.cylro.technical.goal.title": {
            en: "How I built it",
            pt: "Como o construí",
            lu: "Wéi ech et gebaut hunn",
            de: "Wie ich es gebaut habe",
            fr: "Comment je l'ai construit"
        },
        "project.cylro.technical.goal.body": {
            en: "I built Cylro as one multi-website application rather than a collection of isolated site installs. A Space gives websites, people, and access their organisational context; I keep the Nuxt frontend as its own layer; and the Node.js backend is the single controlled path to data, permissions, publishing, and service coordination. We publish the websites themselves as static output, which keeps a live site independent of the application that produced it.",
            pt: "Construí o Cylro como uma aplicação multi-website e não como um conjunto de instalações isoladas. Um Space dá o contexto organizacional a websites, pessoas e acessos; mantenho o frontend Nuxt como camada própria; e o backend Node.js é o único caminho controlado para dados, permissões, publicação e coordenação de serviços. Publicamos os próprios websites como resultado estático, o que mantém um site em produção independente da aplicação que o gerou.",
            lu: "Ech hunn de Cylro als eng Multi-Websäit-Applikatioun gebaut an net als eng Sammlung vun isoléierten Installatiounen. E Space gëtt de Websäiten, de Leit an dem Zougang hiren organisatoresche Kontext; ech halen de Nuxt-Frontend als eege Schicht; an de Node.js-Backend ass dee eenzege kontrolléierte Wee zu Donnéeën, Permissiounen, Publishing a Servicekoordinatioun. D'Websäite selwer publizéiere mir statesch, wat eng lieweg Site onofhängeg vun der Applikatioun mécht, déi se produzéiert huet.",
            de: "Ich habe Cylro als eine Multi-Website-Anwendung gebaut und nicht als Sammlung isolierter Installationen. Ein Space gibt Websites, Personen und Zugriffen ihren organisatorischen Kontext; das Nuxt-Frontend halte ich als eigene Schicht; und das Node.js-Backend ist der einzige kontrollierte Pfad zu Daten, Berechtigungen, Publishing und Servicekoordination. Die Websites selbst veröffentlichen wir als statisches Ergebnis, wodurch eine Live-Site unabhängig von der Anwendung bleibt, die sie erzeugt hat.",
            fr: "J'ai construit Cylro comme une seule application multi-sites plutôt que comme un ensemble d'installations isolées. Un Space donne aux sites, aux personnes et aux accès leur contexte organisationnel ; je garde le frontend Nuxt comme couche à part ; et le backend Node.js est l'unique chemin contrôlé vers les données, les permissions, la publication et la coordination des services. Les sites eux-mêmes, nous les publions en sortie statique, ce qui rend un site en ligne indépendant de l'application qui l'a produit."
        },

        /* ---- Technical stack: frontend ---- */
        "project.cylro.stack.frontend.title": {
            en: "Frontend: Nuxt 4, server-rendered",
            pt: "Frontend: Nuxt 4, renderizado no servidor",
            lu: "Frontend: Nuxt 4, server-gerendert",
            de: "Frontend: Nuxt 4, serverseitig gerendert",
            fr: "Frontend : Nuxt 4, rendu côté serveur"
        },
        "project.cylro.stack.frontend.b1": {
            en: "<strong>A layer of its own</strong>: I keep the frontend separate from the backend so it can evolve on its own and stay easier to maintain.",
            pt: "<strong>Uma camada própria</strong>: mantenho o frontend separado do backend para poder evoluir por si e continuar mais fácil de manter.",
            lu: "<strong>Eng eege Schicht</strong>: ech halen de Frontend vum Backend getrennt, sou datt en sech selbstänneg entwéckele kann a méi einfach z'ënnerhalen ass.",
            de: "<strong>Eine eigene Schicht</strong>: ich halte das Frontend vom Backend getrennt, damit es sich eigenständig weiterentwickeln kann und leichter zu pflegen bleibt.",
            fr: "<strong>Une couche à part</strong> : je garde le frontend séparé du backend pour qu'il évolue de son côté et reste plus simple à maintenir."
        },
        "project.cylro.stack.frontend.b2": {
            en: "<strong>API-only access</strong>: Nuxt talks to the backend through an API. The client never queries the database directly.",
            pt: "<strong>Acesso só por API</strong>: o Nuxt fala com o backend através de uma API. O cliente nunca consulta a base de dados diretamente.",
            lu: "<strong>Nëmmen iwwer d'API</strong>: Nuxt schwätzt mam Backend iwwer eng API. De Client freet ni direkt d'Datebank of.",
            de: "<strong>Zugriff nur über die API</strong>: Nuxt spricht über eine API mit dem Backend. Der Client fragt die Datenbank nie direkt ab.",
            fr: "<strong>Accès uniquement par API</strong> : Nuxt dialogue avec le backend via une API. Le client n'interroge jamais la base de données directement."
        },
        /* ---- Technical stack: backend ---- */
        "project.cylro.stack.backend.title": {
            en: "Application layer: Node.js and Express",
            pt: "Camada aplicacional: Node.js e Express",
            lu: "Applikatiounsschicht: Node.js an Express",
            de: "Anwendungsschicht: Node.js und Express",
            fr: "Couche applicative : Node.js et Express"
        },
        "project.cylro.stack.backend.b1": {
            en: "<strong>One controller for the product</strong>: I route API communication, data access, authentication, permission checks, rate limiting, publishing, deployment workflows, and service coordination through the backend.",
            pt: "<strong>Um controlador para o produto</strong>: encaminho a comunicação de API, o acesso a dados, a autenticação, a verificação de permissões, o rate limiting, a publicação, os fluxos de deployment e a coordenação de serviços através do backend.",
            lu: "<strong>Ee Controller fir d'Produit</strong>: ech schécken d'API-Kommunikatioun, den Datenzougang, d'Authentifikatioun, d'Permissiounskontrollen, d'Rate Limiting, d'Publishing, d'Deployment-Workflows an d'Servicekoordinatioun duerch de Backend.",
            de: "<strong>Eine Steuerung für das Produkt</strong>: ich leite API-Kommunikation, Datenzugriff, Authentifizierung, Berechtigungsprüfungen, Rate Limiting, Publishing, Deployment-Abläufe und Servicekoordination über das Backend.",
            fr: "<strong>Un contrôleur pour le produit</strong> : je fais transiter la communication API, l'accès aux données, l'authentification, la vérification des permissions, le rate limiting, la publication, les workflows de déploiement et la coordination des services par le backend."
        },
        "project.cylro.stack.backend.b2": {
            en: "<strong>Rules in one place</strong>: I enforce our product rules at the backend boundary instead of re-implementing them per client or per service.",
            pt: "<strong>Regras num só sítio</strong>: aplico as nossas regras de produto na fronteira do backend em vez de as reimplementar por cliente ou por serviço.",
            lu: "<strong>Regelen op enger Plaz</strong>: ech setzen eis Produktregele bei der Backend-Grenz duerch, amplaz se pro Client oder pro Service nei ëmzesetzen.",
            de: "<strong>Regeln an einem Ort</strong>: ich setze unsere Produktregeln an der Backend-Grenze durch, statt sie pro Client oder pro Service neu zu implementieren.",
            fr: "<strong>Des règles à un seul endroit</strong> : j'applique nos règles produit à la frontière du backend plutôt que de les réimplémenter par client ou par service."
        },
        "project.cylro.stack.backend.b3": {
            en: "<strong>The path for future AI actions</strong>: I'm designing the AI capabilities we plan to act through this same backend, not around it.",
            pt: "<strong>O caminho para futuras ações de IA</strong>: estou a desenhar as capacidades de IA que planeamos para atuarem através deste mesmo backend e não à sua volta.",
            lu: "<strong>De Wee fir zukünfteg KI-Aktiounen</strong>: ech designen déi KI-Fäegkeeten, déi mir plangen, esou datt se duerch dee selwechte Backend handelen an net dolaanscht.",
            de: "<strong>Der Weg für künftige KI-Aktionen</strong>: die KI-Funktionen, die wir planen, entwerfe ich so, dass sie über dieses selbe Backend handeln und nicht daran vorbei.",
            fr: "<strong>Le chemin des futures actions IA</strong> : je conçois les capacités IA que nous prévoyons pour qu'elles agissent via ce même backend, et non en le contournant."
        },

        /* ---- Technical stack: data ---- */
        "project.cylro.stack.data.title": {
            en: "Data and caching",
            pt: "Dados e cache",
            lu: "Donnéeën a Caching",
            de: "Daten und Caching",
            fr: "Données et cache"
        },
        "project.cylro.stack.data.b1": {
            en: "<strong>PostgreSQL as our system of record</strong>: open source, widely supported, and flexible enough for our structured application data, with JSON where that helps.",
            pt: "<strong>PostgreSQL como o nosso sistema de registo</strong>: open source, amplamente suportado e suficientemente flexível para os nossos dados estruturados, com JSON onde isso ajuda.",
            lu: "<strong>PostgreSQL als eise System of Record</strong>: Open Source, breet ënnerstëtzt a flexibel genuch fir eis strukturéiert Applikatiounsdonnéeën, mat JSON do wou et hëlleft.",
            de: "<strong>PostgreSQL als unser System of Record</strong>: quelloffen, breit unterstützt und flexibel genug für unsere strukturierten Anwendungsdaten, mit JSON dort, wo es hilft.",
            fr: "<strong>PostgreSQL comme système de référence</strong> : open source, largement supporté et assez souple pour nos données applicatives structurées, avec du JSON là où c'est utile."
        },
        "project.cylro.stack.data.b2": {
            en: "<strong>pgvector for where we're heading with AI</strong>: I've made room for vector search, contextual retrieval, and semantic lookup. That's direction, not a public feature we've shipped.",
            pt: "<strong>pgvector para a direção que queremos com IA</strong>: deixei espaço para pesquisa vetorial, recuperação contextual e pesquisa semântica. Isso é direção, não uma funcionalidade pública que já tenhamos lançado.",
            lu: "<strong>pgvector fir d'Richtung, déi mir mat KI aschloen</strong>: ech hu Plaz gelooss fir Vektorsich, kontextuell Récuperatioun a semantesch Sich. Dat ass Richtung, keng ëffentlech Funktioun, déi mir scho erausbruecht hunn.",
            de: "<strong>pgvector für die Richtung, die wir mit KI einschlagen</strong>: ich habe Platz für Vektorsuche, kontextuelles Abrufen und semantische Suche gelassen. Das ist Richtung, keine öffentliche Funktion, die wir schon ausgeliefert haben.",
            fr: "<strong>pgvector pour la direction que nous prenons avec l'IA</strong> : j'ai laissé la place à la recherche vectorielle, à la récupération contextuelle et à la recherche sémantique. C'est une orientation, pas une fonctionnalité publique que nous aurions livrée."
        },
        "project.cylro.stack.data.b3": {
            en: "<strong>Redis as the caching layer</strong>: the backend reads frequently requested and short-lived data from Redis first, which cuts repeated reads against PostgreSQL.",
            pt: "<strong>Redis como camada de cache</strong>: o backend lê primeiro do Redis os dados pedidos com frequência e de curta duração, o que reduz leituras repetidas ao PostgreSQL.",
            lu: "<strong>Redis als Cache-Schicht</strong>: de Backend liest dacks ugefrote a kuerzliewend Donnéeë fir d'éischt aus dem Redis, wat widderhuelte Liesungen um PostgreSQL reduzéiert.",
            de: "<strong>Redis als Caching-Schicht</strong>: das Backend liest häufig angefragte und kurzlebige Daten zuerst aus Redis, was wiederholte Lesezugriffe auf PostgreSQL reduziert.",
            fr: "<strong>Redis comme couche de cache</strong> : le backend lit d'abord dans Redis les données fréquemment demandées et éphémères, ce qui réduit les lectures répétées sur PostgreSQL."
        },

        /* ---- Technical stack: identity ---- */
        "project.cylro.stack.identity.title": {
            en: "Identity and access",
            pt: "Identidade e acessos",
            lu: "Identitéit an Zougang",
            de: "Identität und Zugriff",
            fr: "Identité et accès"
        },
        "project.cylro.stack.identity.b1": {
            en: "<strong>SuperTokens behind the backend</strong>: I chose it over our earlier Keycloak direction because it fit our authentication and backend-connection requirements better. Keycloak is no longer part of the stack.",
            pt: "<strong>SuperTokens por trás do backend</strong>: escolhi-o em vez da nossa direção anterior com Keycloak porque encaixava melhor nos requisitos de autenticação e de ligação ao backend. O Keycloak já não faz parte da stack.",
            lu: "<strong>SuperTokens hannert dem Backend</strong>: ech hunn et amplaz vun eiser fréierer Keycloak-Richtung gewielt, well et besser zu eisen Ufuerderunge fir Authentifikatioun a Backend-Verbindung passt. Keycloak ass net méi Deel vum Stack.",
            de: "<strong>SuperTokens hinter dem Backend</strong>: ich habe es unserer früheren Keycloak-Richtung vorgezogen, weil es besser zu unseren Anforderungen an Authentifizierung und Backend-Anbindung passt. Keycloak ist nicht mehr Teil des Stacks.",
            fr: "<strong>SuperTokens derrière le backend</strong> : je l'ai choisi plutôt que notre ancienne orientation Keycloak car il correspondait mieux à nos exigences d'authentification et de connexion au backend. Keycloak ne fait plus partie de la stack."
        },
        "project.cylro.stack.identity.b2": {
            en: "<strong>Identity isn't the permission model</strong>: SuperTokens establishes who someone is. Our backend connects that identity to Spaces, roles, Crews, website scopes, product actions, and publishing rights.",
            pt: "<strong>A identidade não é o modelo de permissões</strong>: o SuperTokens estabelece quem alguém é. O nosso backend liga essa identidade a Spaces, funções, Crews, âmbitos de website, ações do produto e direitos de publicação.",
            lu: "<strong>Identitéit ass net d'Permissiounsmodell</strong>: SuperTokens stellt fest, wien een ass. Eise Backend verbënnt déi Identitéit mat Spaces, Rollen, Crews, Websäite-Scopen, Produktaktiounen a Publishing-Rechter.",
            de: "<strong>Identität ist nicht das Berechtigungsmodell</strong>: SuperTokens stellt fest, wer jemand ist. Unser Backend verbindet diese Identität mit Spaces, Rollen, Crews, Website-Scopes, Produktaktionen und Publishing-Rechten.",
            fr: "<strong>L'identité n'est pas le modèle de permissions</strong> : SuperTokens établit qui est la personne. Notre backend relie cette identité aux Spaces, rôles, Crews, périmètres de site, actions produit et droits de publication."
        },
        "project.cylro.stack.identity.b3": {
            en: "<strong>Room for separate identity contexts</strong>: I designed the architecture so we can later handle external website visitors separately from the people operating a Space.",
            pt: "<strong>Espaço para contextos de identidade separados</strong>: desenhei a arquitetura para podermos mais tarde tratar os visitantes externos dos websites de forma separada das pessoas que operam um Space.",
            lu: "<strong>Plaz fir getrennten Identitéitskontexter</strong>: ech hunn d'Architektur esou designt, datt mir méi spéit extern Websäite-Visiteure getrennt vun de Leit behandele kënnen, déi e Space bedreiwen.",
            de: "<strong>Raum für getrennte Identitätskontexte</strong>: ich habe die Architektur so entworfen, dass wir später externe Website-Besucher getrennt von den Personen behandeln können, die einen Space betreiben.",
            fr: "<strong>De la place pour des contextes d'identité distincts</strong> : j'ai conçu l'architecture pour pouvoir plus tard traiter les visiteurs externes des sites séparément des personnes qui exploitent un Space."
        },

        /* ---- Technical stack: publishing ---- */
        "project.cylro.stack.publishing.title": {
            en: "Publishing and delivery",
            pt: "Publicação e entrega",
            lu: "Publishing an Ausliwwerung",
            de: "Publishing und Auslieferung",
            fr: "Publication et diffusion"
        },
        "project.cylro.stack.publishing.b1": {
            en: "<strong>Static output instead of a container per site</strong>: a build produces HTML and static assets, so I don't run a dedicated application container for every customer website.",
            pt: "<strong>Resultado estático em vez de um contentor por site</strong>: um build produz HTML e assets estáticos, por isso não mantenho um contentor aplicacional dedicado para cada website de cliente.",
            lu: "<strong>Statescht Resultat amplaz engem Container pro Site</strong>: e Build produzéiert HTML a statesch Assets, sou datt ech net fir all Clientswebsäit en eegene Applikatiounscontainer lafe loossen.",
            de: "<strong>Statisches Ergebnis statt eines Containers pro Site</strong>: ein Build erzeugt HTML und statische Assets, sodass ich nicht für jede Kundenwebsite einen eigenen Anwendungscontainer betreibe.",
            fr: "<strong>Une sortie statique plutôt qu'un conteneur par site</strong> : un build produit du HTML et des assets statiques, donc je ne fais pas tourner un conteneur applicatif dédié pour chaque site client."
        },
        "project.cylro.stack.publishing.b2": {
            en: "<strong>Object storage as the origin</strong>: we store the published output in S3-compatible storage and point a custom domain at it, with CDN delivery for reach and to keep pressure off our application servers.",
            pt: "<strong>Object storage como origem</strong>: guardamos o resultado publicado em armazenamento compatível com S3 e apontamos-lhe um domínio próprio, com entrega por CDN para alcance e para aliviar a carga nos nossos servidores aplicacionais.",
            lu: "<strong>Object Storage als Origin</strong>: mir späicheren dat publizéiert Resultat an S3-kompatibele Storage a weisen en eegenen Domain dorop, mat CDN-Ausliwwerung fir d'Reechwäit a fir manner Drock op eisen Applikatiounsserveren.",
            de: "<strong>Object Storage als Origin</strong>: wir speichern das veröffentlichte Ergebnis in S3-kompatiblem Speicher und richten eine eigene Domain darauf, mit CDN-Auslieferung für Reichweite und weniger Last auf unseren Anwendungsservern.",
            fr: "<strong>L'object storage comme origine</strong> : nous stockons la sortie publiée dans un stockage compatible S3 et y pointons un domaine personnalisé, avec diffusion CDN pour la portée et pour soulager nos serveurs applicatifs."
        },
        "project.cylro.stack.publishing.b3": {
            en: "<strong>Rollback and recovery you trigger yourself</strong>: going back to a previous published version, restoring it, or taking a site offline are your actions. We don't promise automatic rollback, automatic failover, or guaranteed recovery times.",
            pt: "<strong>Rollback e recuperação que acionas tu</strong>: voltar a uma versão publicada anterior, restaurá-la ou colocar um site offline são ações tuas. Não prometemos rollback automático, failover automático nem tempos de recuperação garantidos.",
            lu: "<strong>Rollback a Recovery, déi s du selwer ausléis</strong>: op eng fréier publizéiert Versioun zeréckgoen, se restauréieren oder eng Site offline setzen sinn deng Aktiounen. Mir verspriechen keen automatesche Rollback, keen automatescht Failover a keng garantéiert Recovery-Zäiten.",
            de: "<strong>Rollback und Wiederherstellung, die ihr selbst auslöst</strong>: zu einer früher veröffentlichten Version zurückkehren, sie wiederherstellen oder eine Site offline nehmen sind eure Aktionen. Wir versprechen keinen automatischen Rollback, kein automatisches Failover und keine garantierten Wiederherstellungszeiten.",
            fr: "<strong>Rollback et restauration que vous déclenchez vous-mêmes</strong> : revenir à une version publiée précédente, la restaurer ou mettre un site hors ligne sont vos actions. Nous ne promettons ni rollback automatique, ni failover automatique, ni délai de restauration garanti."
        },
        "project.cylro.stack.publishing.b4": {
            en: "<strong>Dynamic behaviour in the browser</strong>: client-side JavaScript covers what a static site needs, so we don't have to server-render every page permanently. E-commerce and heavier dynamic cases are future work.",
            pt: "<strong>Comportamento dinâmico no browser</strong>: o JavaScript do lado do cliente cobre o que um site estático precisa, por isso não temos de renderizar permanentemente cada página no servidor. E-commerce e casos dinâmicos mais pesados ficam para depois.",
            lu: "<strong>Dynamescht Verhalen am Browser</strong>: client-säitegt JavaScript deckt of, wat eng statesch Site brauch, sou datt mir net all Säit permanent um Server rendere mussen. E-Commerce a méi schwéier dynamesch Fäll kommen duerno.",
            de: "<strong>Dynamisches Verhalten im Browser</strong>: clientseitiges JavaScript deckt ab, was eine statische Site braucht, sodass wir nicht jede Seite dauerhaft serverseitig rendern müssen. E-Commerce und schwerere dynamische Fälle kommen später.",
            fr: "<strong>Comportement dynamique dans le navigateur</strong> : le JavaScript côté client couvre ce dont un site statique a besoin, donc nous n'avons pas à rendre chaque page côté serveur en permanence. L'e-commerce et les cas dynamiques plus lourds viendront ensuite."
        },

        /* ---- Technical stack: infrastructure ---- */
        "project.cylro.stack.infra.title": {
            en: "Containers and infrastructure",
            pt: "Contentores e infraestrutura",
            lu: "Containeren an Infrastruktur",
            de: "Container und Infrastruktur",
            fr: "Conteneurs et infrastructure"
        },
        "project.cylro.stack.infra.b1": {
            en: "<strong>Separate services, separate responsibilities</strong>: I designed the Nuxt frontend, Node.js backend, PostgreSQL, Redis, the authentication service, and the supporting services as distinct container boundaries.",
            pt: "<strong>Serviços separados, responsabilidades separadas</strong>: desenhei o frontend Nuxt, o backend Node.js, o PostgreSQL, o Redis, o serviço de autenticação e os serviços de apoio como fronteiras de contentor distintas.",
            lu: "<strong>Getrennte Servicer, getrennte Verantwortungen</strong>: ech hunn de Nuxt-Frontend, de Node.js-Backend, PostgreSQL, Redis, den Authentifikatiounsservice an d'Hëllefsservicer als eege Containergrenzen designt.",
            de: "<strong>Getrennte Dienste, getrennte Verantwortlichkeiten</strong>: Nuxt-Frontend, Node.js-Backend, PostgreSQL, Redis, den Authentifizierungsdienst und die unterstützenden Dienste habe ich als eigene Containergrenzen entworfen.",
            fr: "<strong>Services séparés, responsabilités séparées</strong> : j'ai conçu le frontend Nuxt, le backend Node.js, PostgreSQL, Redis, le service d'authentification et les services de support comme des frontières de conteneurs distinctes."
        },
        "project.cylro.stack.infra.b2": {
            en: "<strong>Docker for development and delivery images</strong>: Compose covers our local development and delivery-image workflows. It isn't what I intend to run in production.",
            pt: "<strong>Docker para desenvolvimento e imagens de entrega</strong>: o Compose cobre o nosso desenvolvimento local e os fluxos de imagens de entrega. Não é o que tenciono correr em produção.",
            lu: "<strong>Docker fir Entwécklung an Delivery-Images</strong>: Compose deckt eis lokal Entwécklung an d'Delivery-Image-Workflows of. Et ass net dat, wat ech an der Produktioun lafe loosse wëll.",
            de: "<strong>Docker für Entwicklung und Delivery-Images</strong>: Compose deckt unsere lokale Entwicklung und die Delivery-Image-Workflows ab. Es ist nicht das, was ich in der Produktion betreiben will.",
            fr: "<strong>Docker pour le développement et les images de livraison</strong> : Compose couvre notre développement local et nos workflows d'images de livraison. Ce n'est pas ce que je compte faire tourner en production."
        },
        "project.cylro.stack.infra.b3": {
            en: "<strong>Hetzner as our first production provider</strong>: affordable compute, suitable storage, and good S3 pricing for a company at our stage. We may look at Scaleway, OVH, and other European providers later.",
            pt: "<strong>Hetzner como o nosso primeiro fornecedor de produção</strong>: computação acessível, armazenamento adequado e bons preços de S3 para uma empresa na nossa fase. Podemos olhar para a Scaleway, a OVH e outros fornecedores europeus mais tarde.",
            lu: "<strong>Hetzner als eise éischte Produktiounsprovider</strong>: bezuelbar Rechenleeschtung, passende Späicher a gutt S3-Präisser fir eng Firma an eiser Phas. Mir kënne méi spéit op Scaleway, OVH an aner europäesch Provider kucken.",
            de: "<strong>Hetzner als unser erster Produktionsanbieter</strong>: bezahlbare Rechenleistung, passender Speicher und gute S3-Preise für ein Unternehmen in unserer Phase. Scaleway, OVH und andere europäische Anbieter schauen wir uns eventuell später an.",
            fr: "<strong>Hetzner comme premier fournisseur de production</strong> : calcul abordable, stockage adapté et bons tarifs S3 pour une entreprise à notre stade. Nous regarderons peut-être Scaleway, OVH et d'autres fournisseurs européens plus tard."
        },
        "project.cylro.stack.infra.b4": {
            en: "<strong>Deployment platform still being decided</strong>: I'm evaluating a visual container-deployment platform for releases, updates, service health, and operational visibility during the alpha. I haven't fixed the final choice or the multi-server approach.",
            pt: "<strong>Plataforma de deployment ainda por decidir</strong>: estou a avaliar uma plataforma visual de deployment de contentores para releases, atualizações, estado dos serviços e visibilidade operacional durante o alpha. Ainda não fechei a escolha final nem a abordagem multi-servidor.",
            lu: "<strong>Deployment-Plattform nach net decidéiert</strong>: ech evaluéieren eng visuell Container-Deployment-Plattform fir Releases, Updates, Servicegesondheet an operationell Iwwersiicht wärend dem Alpha. Déi lescht Wiel an de Multi-Server-Usaz hunn ech nach net festgeluecht.",
            de: "<strong>Deployment-Plattform noch offen</strong>: ich prüfe eine visuelle Container-Deployment-Plattform für Releases, Updates, Servicezustand und operative Sichtbarkeit während des Alphas. Die endgültige Wahl und den Mehrserver-Ansatz habe ich noch nicht festgelegt.",
            fr: "<strong>Plateforme de déploiement encore à trancher</strong> : j'évalue une plateforme visuelle de déploiement de conteneurs pour les releases, les mises à jour, la santé des services et la visibilité opérationnelle pendant l'alpha. Je n'ai fixé ni le choix final ni l'approche multi-serveurs."
        },

        /* ---- Technical stack: AI ---- */
        "project.cylro.stack.ai.title": {
            en: "AI orchestration direction",
            pt: "Direção de orquestração de IA",
            lu: "Richtung vun der KI-Orchestratioun",
            de: "Richtung der KI-Orchestrierung",
            fr: "Orientation de l'orchestration IA"
        },
        "project.cylro.stack.ai.b1": {
            en: "<strong>Assistance, not our identity</strong>: optional help with content drafting, SEO suggestions, review, layout ideas, and routine website or access tasks. We're not trying to replace the people running the websites.",
            pt: "<strong>Assistência, não a nossa identidade</strong>: ajuda opcional na redação de conteúdo, sugestões de SEO, revisão, ideias de layout e tarefas rotineiras de website ou de acessos. Não estamos a tentar substituir as pessoas que gerem os websites.",
            lu: "<strong>Assistenz, net eis Identitéit</strong>: optional Hëllef beim Schreiwe vu Content, SEO-Virschléi, Review, Layout-Iddien a Routineaufgabe ronderëm Websäiten oder Zougang. Mir probéieren net, d'Leit ze ersetzen, déi d'Websäite bedreiwen.",
            de: "<strong>Unterstützung, nicht unsere Identität</strong>: optionale Hilfe beim Entwerfen von Inhalten, SEO-Vorschlägen, Review, Layout-Ideen und Routineaufgaben rund um Website oder Zugriff. Wir wollen die Menschen, die die Websites betreiben, nicht ersetzen.",
            fr: "<strong>Une assistance, pas notre identité</strong> : aide optionnelle pour la rédaction de contenu, les suggestions SEO, la relecture, les idées de mise en page et les tâches courantes de site ou d'accès. Nous ne cherchons pas à remplacer les personnes qui exploitent les sites."
        },
        "project.cylro.stack.ai.b2": {
            en: "<strong>The orchestration model I'm planning</strong>: you'd talk to an umbrella agent that understands the request and delegates bounded work to specialised capabilities.",
            pt: "<strong>O modelo de orquestração que estou a planear</strong>: falarias com um agente principal que compreende o pedido e delega trabalho delimitado a capacidades especializadas.",
            lu: "<strong>D'Orchestratiounsmodell, dat ech plangen</strong>: du géifs mat engem Haaptagent schwätzen, deen d'Ufro versteet a begrenzten Aarbecht u spezialiséiert Fäegkeeten delegéiert.",
            de: "<strong>Das Orchestrierungsmodell, das ich plane</strong>: ihr sprecht mit einem übergeordneten Agenten, der die Anfrage versteht und begrenzte Arbeit an spezialisierte Fähigkeiten delegiert.",
            fr: "<strong>Le modèle d'orchestration que je prévois</strong> : vous vous adresseriez à un agent principal qui comprend la demande et délègue un travail délimité à des capacités spécialisées."
        },
        "project.cylro.stack.ai.b3": {
            en: "<strong>No unrestricted authority</strong>: I'm designing every consequential action to go through the backend, get checked against our product rules and your permissions, be explained back to you, wait for your approval, and only then run.",
            pt: "<strong>Sem autoridade ilimitada</strong>: estou a desenhar cada ação com consequências para passar pelo backend, ser verificada contra as nossas regras de produto e as tuas permissões, ser-te explicada, esperar pela tua aprovação e só então correr.",
            lu: "<strong>Keng onbegrenzte Autoritéit</strong>: ech designen all Aktioun mat Konsequenzen esou, datt se duerch de Backend geet, géint eis Produktregelen an deng Permissioune gepréift gëtt, der erkläert gëtt, op deng Zoustëmmung waart a réischt duerno leeft.",
            de: "<strong>Keine unbeschränkte Befugnis</strong>: jede folgenreiche Aktion entwerfe ich so, dass sie über das Backend läuft, gegen unsere Produktregeln und eure Berechtigungen geprüft wird, euch erklärt wird, auf eure Freigabe wartet und erst dann ausgeführt wird.",
            fr: "<strong>Aucune autorité illimitée</strong> : je conçois chaque action à conséquence pour qu'elle passe par le backend, soit vérifiée au regard de nos règles produit et de vos permissions, vous soit expliquée, attende votre approbation, et seulement ensuite s'exécute."
        },
        "project.cylro.stack.ai.b4": {
            en: "<strong>We choose the provider, you don't bring your own model</strong>: we provide the AI experience, and we can change model and provider on quality, cost, availability, performance, and European hosting options. The orchestration harness isn't finished, and we have no live public AI features.",
            pt: "<strong>Nós escolhemos o fornecedor, tu não trazes o teu modelo</strong>: nós fornecemos a experiência de IA e podemos mudar de modelo e de fornecedor por qualidade, custo, disponibilidade, desempenho e opções de alojamento europeu. A camada de orquestração não está terminada e não temos funcionalidades públicas de IA em produção.",
            lu: "<strong>Mir wielen de Provider, du bréngs net däin eegent Modell</strong>: mir liwweren d'KI-Erfahrung, a mir kënne Modell a Provider no Qualitéit, Käschten, Disponibilitéit, Performance an europäeschen Hosting-Optioune wiesselen. D'Orchestratiounsharness ass net fäerdeg, a mir hu keng lieweg ëffentlech KI-Funktiounen.",
            de: "<strong>Wir wählen den Anbieter, ihr bringt kein eigenes Modell mit</strong>: wir liefern das KI-Erlebnis, und wir können Modell und Anbieter nach Qualität, Kosten, Verfügbarkeit, Leistung und europäischen Hosting-Optionen wechseln. Der Orchestrierungsrahmen ist nicht fertig, und wir haben keine live verfügbaren öffentlichen KI-Funktionen.",
            fr: "<strong>C'est nous qui choisissons le fournisseur, vous n'apportez pas votre modèle</strong> : nous fournissons l'expérience IA, et nous pouvons changer de modèle et de fournisseur selon la qualité, le coût, la disponibilité, la performance et les options d'hébergement européen. Le socle d'orchestration n'est pas terminé et nous n'avons aucune fonctionnalité IA publique en ligne."
        },

        /* ---- Technical stack: security ---- */
        "project.cylro.stack.security.title": {
            en: "Security and operational validation",
            pt: "Segurança e validação operacional",
            lu: "Sécherheet an operationell Validatioun",
            de: "Sicherheit und operative Validierung",
            fr: "Sécurité et validation opérationnelle"
        },
        "project.cylro.stack.security.b1": {
            en: "<strong>No direct client access to core services</strong>: sensitive product actions go through the backend, where I enforce permissions, product rules, rate limits, authentication checks, publishing, and operational requests.",
            pt: "<strong>Sem acesso direto do cliente aos serviços centrais</strong>: as ações sensíveis passam pelo backend, onde aplico permissões, regras de produto, limites de taxa, verificações de autenticação, publicação e pedidos operacionais.",
            lu: "<strong>Kee direkten Clientszougang op d'Kärservicer</strong>: sensibel Produktaktioune ginn duerch de Backend, wou ech Permissiounen, Produktregelen, Rate Limits, Authentifikatiounskontrollen, Publishing an operationell Ufroen duerchsetzen.",
            de: "<strong>Kein direkter Client-Zugriff auf Kerndienste</strong>: sensible Produktaktionen laufen über das Backend, wo ich Berechtigungen, Produktregeln, Rate Limits, Authentifizierungsprüfungen, Publishing und operative Anfragen durchsetze.",
            fr: "<strong>Aucun accès client direct aux services centraux</strong> : les actions sensibles passent par le backend, où j'applique les permissions, les règles produit, les limites de débit, les vérifications d'authentification, la publication et les demandes opérationnelles."
        },
        "project.cylro.stack.security.b3": {
            en: "<strong>Monitoring is still evolving</strong>: I'm building an internal operations view to bring service status and operational signals together, alongside the baseline container logs and health the deployment platform gives us.",
            pt: "<strong>A monitorização ainda está a evoluir</strong>: estou a construir uma vista operacional interna para reunir o estado dos serviços e os sinais operacionais, a par dos logs de contentores e da saúde base que a plataforma de deployment nos dá.",
            lu: "<strong>D'Monitoring entwéckelt sech nach</strong>: ech bauen eng intern Betribsiwwersiicht, fir Servicestatus an operationell Signaler zesummenzebréngen, nieft de Basis-Containerlogs an der Gesondheet, déi eis d'Deployment-Plattform gëtt.",
            de: "<strong>Monitoring entwickelt sich noch</strong>: ich baue eine interne Betriebsansicht, die Servicestatus und operative Signale zusammenführt, neben den Basis-Containerlogs und der Zustandsanzeige, die uns die Deployment-Plattform liefert.",
            fr: "<strong>La supervision évolue encore</strong> : je construis une vue d'exploitation interne pour réunir l'état des services et les signaux opérationnels, aux côtés des logs de conteneurs et de la santé de base que nous donne la plateforme de déploiement."
        },
        "project.cylro.stack.security.b4": {
            en: "<strong>What the alpha has to prove</strong>: failures, redeployments, restoration paths, backup behaviour, recovery of published site versions, and re-upload and service recovery. Until it has, I'm not claiming uptime, recovery targets, complete monitoring coverage, or production-proven backups.",
            pt: "<strong>O que o alpha tem de provar</strong>: falhas, redeployments, caminhos de restauro, comportamento dos backups, recuperação de versões publicadas e recuperação de re-upload e de serviços. Até lá, não alego uptime, metas de recuperação, cobertura completa de monitorização nem backups comprovados em produção.",
            lu: "<strong>Wat den Alpha muss beweisen</strong>: Pannen, Redeployments, Restauratiounsweeër, Backup-Verhalen, Recovery vu publizéierte Site-Versiounen an Re-Upload- a Service-Recovery. Bis dohin behaapten ech keng Uptime, keng Recovery-Ziler, keng komplett Monitoring-Ofdeckung a keng produktiounsbewisen Backups.",
            de: "<strong>Was der Alpha beweisen muss</strong>: Ausfälle, Redeployments, Wiederherstellungswege, Backup-Verhalten, Wiederherstellung veröffentlichter Site-Versionen sowie Re-Upload- und Service-Recovery. Bis dahin behaupte ich weder Uptime noch Wiederherstellungsziele, vollständige Monitoring-Abdeckung oder produktionserprobte Backups.",
            fr: "<strong>Ce que l'alpha doit prouver</strong> : pannes, redéploiements, chemins de restauration, comportement des sauvegardes, récupération des versions publiées, et reprise après re-upload ou incident de service. D'ici là, je ne revendique ni disponibilité, ni cible de restauration, ni couverture de supervision complète, ni sauvegarde éprouvée en production."
        },

        /* ---- Technical stack: how we work ---- */
        "project.cylro.stack.workflow.title": {
            en: "How we work",
            pt: "Como trabalhamos",
            lu: "Wéi mir schaffen",
            de: "Wie wir arbeiten",
            fr: "Comment nous travaillons"
        },
        "project.cylro.stack.workflow.b1": {
            en: "<strong>AI-supported, human-reviewed</strong>: AI speeds up exploration, implementation, debugging, and code investigation. We keep the product decisions, the technical direction, the review, and the call on what actually enters the product.",
            pt: "<strong>Apoiado por IA, revisto por nós</strong>: a IA acelera a exploração, a implementação, o debugging e a investigação de código. Ficamos com as decisões de produto, a direção técnica, a revisão e a decisão sobre o que entra realmente no produto.",
            lu: "<strong>KI-ënnerstëtzt, vun eis gepréift</strong>: KI beschleunegt d'Exploratioun, d'Ëmsetzung, d'Debugging an d'Codeanalys. Mir behalen d'Produktentscheedungen, déi technesch Richtung, de Review an d'Decisioun, wat wierklech an d'Produit kënnt.",
            de: "<strong>KI-unterstützt, von uns geprüft</strong>: KI beschleunigt Exploration, Umsetzung, Debugging und Code-Analyse. Die Produktentscheidungen, die technische Richtung, das Review und die Entscheidung, was tatsächlich ins Produkt kommt, behalten wir.",
            fr: "<strong>Assisté par l'IA, relu par nous</strong> : l'IA accélère l'exploration, l'implémentation, le débogage et l'analyse de code. Nous gardons les décisions produit, la direction technique, la relecture et le choix de ce qui entre réellement dans le produit."
        },
        "project.cylro.stack.workflow.b2": {
            en: "<strong>Validated through hands-on local use</strong>: I test changes locally by actually operating the product, not only in isolation.",
            pt: "<strong>Validado através de utilização prática local</strong>: testo as alterações localmente ao usar mesmo o produto, e não apenas isoladamente.",
            lu: "<strong>Duerch praktesch lokal Notzung validéiert</strong>: ech testen Ännerunge lokal, andeems ech d'Produit wierklech bedreiwen, net nëmmen isoléiert.",
            de: "<strong>Durch praktische lokale Nutzung validiert</strong>: ich teste Änderungen lokal, indem ich das Produkt tatsächlich bediene, nicht nur isoliert.",
            fr: "<strong>Validé par une utilisation locale concrète</strong> : je teste les changements localement en utilisant vraiment le produit, pas seulement de façon isolée."
        },
        "project.cylro.stack.workflow.b3": {
            en: "<strong>Branch-based work in GitHub</strong>: we keep parallel work separate to reduce conflicts while we build.",
            pt: "<strong>Trabalho por branches no GitHub</strong>: mantemos o trabalho em paralelo separado para reduzir conflitos enquanto construímos.",
            lu: "<strong>Branch-baséiert Aarbecht am GitHub</strong>: mir halen parallel Aarbecht getrennt, fir Konflikter beim Bauen ze reduzéieren.",
            de: "<strong>Branch-basierte Arbeit in GitHub</strong>: wir halten parallele Arbeit getrennt, um Konflikte beim Bauen zu verringern.",
            fr: "<strong>Travail par branches sur GitHub</strong> : nous gardons le travail en parallèle séparé pour réduire les conflits pendant que nous construisons."
        },
        "project.cylro.stack.workflow.b4": {
            en: "<strong>What we don't have yet</strong>: a complete CI/CD pipeline, a formal staging environment, and comprehensive automated testing. Those are what I want to strengthen as the alpha forces real release discipline on us.",
            pt: "<strong>O que ainda não temos</strong>: um pipeline de CI/CD completo, um ambiente de staging formal e testes automatizados abrangentes. É isso que quero reforçar à medida que o alpha nos impuser disciplina real de releases.",
            lu: "<strong>Wat mir nach net hunn</strong>: eng komplett CI/CD-Pipeline, e formellt Staging-Ëmfeld an ëmfaassend automatiséiert Tester. Dat wëll ech stäerken, wann den Alpha eis richteg Release-Disziplin ofverlaangt.",
            de: "<strong>Was wir noch nicht haben</strong>: eine vollständige CI/CD-Pipeline, eine formale Staging-Umgebung und umfassende automatisierte Tests. Genau das will ich stärken, sobald der Alpha uns echte Release-Disziplin abverlangt.",
            fr: "<strong>Ce que nous n'avons pas encore</strong> : un pipeline CI/CD complet, un environnement de staging formel et des tests automatisés étendus. C'est ce que je veux renforcer quand l'alpha nous imposera une vraie discipline de release."
        },

        /* ---- What I'm working on ---- */
        "project.cylro.section.next.title": {
            en: "What I'm Working On",
            pt: "No Que Estou a Trabalhar",
            lu: "Wourun ech schaffen",
            de: "Woran ich arbeite",
            fr: "Ce sur quoi je travaille"
        },
        "project.cylro.next.core.title": {
            en: "Core product",
            pt: "Produto base",
            lu: "Kärprodukt",
            de: "Kernprodukt",
            fr: "Produit cœur"
        },
        "project.cylro.next.core.body": {
            en: "Getting Spaces, Crews, Studio, the design layer, modules, publishing, and recovery to work as one coherent system rather than separate features.",
            pt: "Pôr os Spaces, as Crews, o Studio, a camada de design, os módulos, a publicação e a recuperação a funcionar como um sistema coerente em vez de funcionalidades separadas.",
            lu: "Spaces, Crews, Studio, d'Design-Schicht, d'Moduler, d'Publishing an d'Recovery esou hikréien, datt se als ee kohärente System funktionéieren an net als getrennte Funktiounen.",
            de: "Spaces, Crews, Studio, die Design-Schicht, Module, Publishing und Wiederherstellung dazu bringen, als ein kohärentes System zu funktionieren statt als getrennte Funktionen.",
            fr: "Faire en sorte que Spaces, Crews, Studio, la couche de design, les modules, la publication et la restauration fonctionnent comme un système cohérent plutôt que comme des fonctionnalités séparées."
        },
        "project.cylro.next.ops.title": {
            en: "Deployment and operations",
            pt: "Deployment e operações",
            lu: "Deployment a Betrib",
            de: "Deployment und Betrieb",
            fr: "Déploiement et exploitation"
        },
        "project.cylro.next.ops.body": {
            en: "Settling the deployment platform, the operations view, and the backup and restoration paths I want the alpha to put under real pressure.",
            pt: "Fechar a plataforma de deployment, a vista operacional e os caminhos de backup e restauro que quero pôr sob pressão real no alpha.",
            lu: "D'Deployment-Plattform, d'Betribsiwwersiicht an d'Backup- a Restauratiounsweeër festleeën, déi ech am Alpha ënner richtegen Drock setze wëll.",
            de: "Die Deployment-Plattform, die Betriebsansicht sowie die Backup- und Wiederherstellungswege festlegen, die ich im Alpha unter echten Druck setzen will.",
            fr: "Arrêter le choix de la plateforme de déploiement, la vue d'exploitation et les chemins de sauvegarde et de restauration que je veux mettre sous pression réelle pendant l'alpha."
        },
        "project.cylro.next.alpha.title": {
            en: "Private alpha",
            pt: "Alpha privado",
            lu: "Privaten Alpha",
            de: "Privater Alpha",
            fr: "Alpha privée"
        },
        "project.cylro.next.alpha.body": {
            en: "Preparing a small, closely supported alpha for around November 2026, and being clear about what's ready before anyone starts.",
            pt: "Preparar um alpha pequeno e acompanhado de perto para cerca de novembro de 2026, e ser claro sobre o que está pronto antes de alguém começar.",
            lu: "E klengen, enk begleeten Alpha fir ronderëm November 2026 virbereeden, a kloer soen, wat prett ass, ier een ufänkt.",
            de: "Einen kleinen, eng begleiteten Alpha für etwa November 2026 vorbereiten und klar sagen, was bereit ist, bevor jemand startet.",
            fr: "Préparer une alpha restreinte et étroitement accompagnée pour environ novembre 2026, et dire clairement ce qui est prêt avant que quiconque commence."
        },

        /* ---- Sidebar: tech stack ---- */
        "project.cylro.sidebar.tech.nuxt": {
            en: "Nuxt 4 + Vue 3 (SSR)",
            pt: "Nuxt 4 + Vue 3 (SSR)",
            lu: "Nuxt 4 + Vue 3 (SSR)",
            de: "Nuxt 4 + Vue 3 (SSR)",
            fr: "Nuxt 4 + Vue 3 (SSR)"
        },
        "project.cylro.sidebar.tech.node": {
            en: "Node.js + Express",
            pt: "Node.js + Express",
            lu: "Node.js + Express",
            de: "Node.js + Express",
            fr: "Node.js + Express"
        },
        "project.cylro.sidebar.tech.db": {
            en: "PostgreSQL + pgvector",
            pt: "PostgreSQL + pgvector",
            lu: "PostgreSQL + pgvector",
            de: "PostgreSQL + pgvector",
            fr: "PostgreSQL + pgvector"
        },
        "project.cylro.sidebar.tech.supertokens": {
            en: "SuperTokens",
            pt: "SuperTokens",
            lu: "SuperTokens",
            de: "SuperTokens",
            fr: "SuperTokens"
        },
        "project.cylro.sidebar.tech.s3": {
            en: "S3-compatible object storage",
            pt: "Object storage compatível com S3",
            lu: "S3-kompatibelen Object Storage",
            de: "S3-kompatibler Object Storage",
            fr: "Object storage compatible S3"
        },
        "project.cylro.sidebar.tech.docker": {
            en: "Docker + Docker Compose",
            pt: "Docker + Docker Compose",
            lu: "Docker + Docker Compose",
            de: "Docker + Docker Compose",
            fr: "Docker + Docker Compose"
        },

        /* ---- Sidebar: key features ---- */
        "project.cylro.sidebar.features.spaces": {
            en: "Multi-site Spaces with Crews and roles",
            pt: "Spaces multi-site com Crews e funções",
            lu: "Multi-Site-Spaces mat Crews a Rollen",
            de: "Multi-Site-Spaces mit Crews und Rollen",
            fr: "Spaces multi-sites avec Crews et rôles"
        },
        "project.cylro.sidebar.features.studio": {
            en: "Studio workspace and design layer",
            pt: "Workspace Studio e camada de design",
            lu: "Studio-Workspace an Design-Schicht",
            de: "Studio-Workspace und Design-Schicht",
            fr: "Espace Studio et couche de design"
        },
        "project.cylro.sidebar.features.modules": {
            en: "Per-site modules",
            pt: "Módulos por site",
            lu: "Moduler pro Site",
            de: "Module pro Site",
            fr: "Modules par site"
        },
        "project.cylro.sidebar.features.static": {
            en: "Static publishing to object storage",
            pt: "Publicação estática para object storage",
            lu: "Statescht Publishing an den Object Storage",
            de: "Statisches Publishing in Object Storage",
            fr: "Publication statique vers l'object storage"
        },
        "project.cylro.sidebar.features.rollback": {
            en: "Versioned publishing with rollback you trigger",
            pt: "Publicação versionada com rollback acionado por ti",
            lu: "Versionéiert Publishing mat Rollback, deen s du ausléis",
            de: "Versioniertes Publishing mit Rollback, den ihr auslöst",
            fr: "Publication versionnée avec rollback que vous déclenchez"
        },
        "project.cylro.sidebar.features.backend": {
            en: "Backend-enforced permissions",
            pt: "Permissões aplicadas pelo backend",
            lu: "Permissiounen, déi de Backend duerchsetzt",
            de: "Vom Backend durchgesetzte Berechtigungen",
            fr: "Permissions appliquées par le backend"
        },
        "project.cylro.sidebar.features.ai": {
            en: "Optional AI assistance, in development",
            pt: "Assistência de IA opcional, em desenvolvimento",
            lu: "Optional KI-Assistenz, an Entwécklung",
            de: "Optionale KI-Unterstützung, in Entwicklung",
            fr: "Assistance IA optionnelle, en développement"
        },

        /* ---- Sidebar: role ---- */
        "project.cylro.sidebar.role.title": {
            en: "My Role",
            pt: "O Meu Papel",
            lu: "Meng Roll",
            de: "Meine Rolle",
            fr: "Mon rôle"
        },
        "project.cylro.sidebar.role.item1": {
            en: "Co-founder, technical lead / CTO",
            pt: "Cofundador, responsável técnico / CTO",
            lu: "Co-Grënner, technesche Lead / CTO",
            de: "Mitgründer, technischer Leiter / CTO",
            fr: "Cofondateur, responsable technique / CTO"
        },
        "project.cylro.sidebar.role.item2": {
            en: "Backend and data architecture",
            pt: "Arquitetura de backend e de dados",
            lu: "Backend- an Datenarchitektur",
            de: "Backend- und Datenarchitektur",
            fr: "Architecture backend et données"
        },
        "project.cylro.sidebar.role.item3": {
            en: "Infrastructure and deployment direction",
            pt: "Direção de infraestrutura e deployment",
            lu: "Richtung fir Infrastruktur an Deployment",
            de: "Infrastruktur- und Deployment-Richtung",
            fr: "Orientation infrastructure et déploiement"
        },
        "project.cylro.sidebar.role.item4": {
            en: "Security approach and service boundaries",
            pt: "Abordagem de segurança e fronteiras de serviços",
            lu: "Sécherheetsusaz a Servicegrenzen",
            de: "Sicherheitsansatz und Servicegrenzen",
            fr: "Approche sécurité et frontières de services"
        },
        "project.cylro.sidebar.role.item5": {
            en: "AI integration design",
            pt: "Desenho da integração de IA",
            lu: "Design vun der KI-Integratioun",
            de: "Design der KI-Integration",
            fr: "Conception de l'intégration IA"
        }
    };
    Object.assign(translations, extra);
})();
