/**
 * Global Search Functionality with Fuzzy Search
 * Searches across projects, certifications, and formations
 * Features: Keyboard Navigation, Smart Initial State, Match Highlighting
 */

(function() {
    'use strict';

    // DOM Elements
    let searchModal, searchInput, searchResults, searchOverlay, searchToggle, searchClose;
    let fuse = null;
    let searchData = [];

    // Keyboard navigation state
    let selectedIndex = -1;
    let selectableItems = [];
    let highlightTerms = null;
    let _debounceTimer = null;
    const DEBOUNCE_MS = 150;

    // Recent searches (max 5)
    const MAX_RECENT_SEARCHES = 5;

    // Translation helper function
    const t = (key, fallback) => {
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        if (typeof translations === 'undefined') return fallback;
        const entry = translations[key];
        if (!entry) return fallback;
        return entry[currentLang] || entry['en'] || fallback;
    };

    // Build searchable text across all supported languages
    function getAllLangText(keys) {
        if (typeof translations === 'undefined' || !Array.isArray(keys)) return '';
        const langs = ['en', 'pt', 'lu', 'de', 'fr'];
        const parts = [];
        keys.forEach(key => {
            if (!key) return;
            const entry = translations[key];
            if (!entry) return;
            langs.forEach(lang => {
                if (entry[lang]) parts.push(entry[lang]);
            });
        });
        return parts.join(' ');
    }

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', initSearch);

    function triggerCvDownload() {
        // Close the search modal first so the CV modal isn't blocked visually.
        if (searchModal?.classList?.contains('active')) {
            closeSearch();
        }

        const openInlineCvModal = () => {
            const cvModal = document.getElementById('cv-modal');
            if (!cvModal) return false;

            if (typeof window.openCvModal === 'function') {
                window.openCvModal();
                return true;
            }

            // Fallback: open modal without relying on script.js helpers
            const cvMenu = document.querySelector('.cv-dropdown-menu');
            const cvModalList = document.getElementById('cv-modal-list');

            if (cvMenu && cvModalList) {
                cvModalList.innerHTML = cvMenu.innerHTML;
            }

            cvModal.classList.add('active');
            cvModal.setAttribute('aria-hidden', 'false');
            return true;
        };

        // If we're on a page that has the CV modal, open it directly.
        // Use a microtask delay so the DOM updates after closing search.
        setTimeout(() => {
            if (openInlineCvModal()) return;

            // Otherwise redirect to index and ask it to auto-open the modal.
            const isInSubdirectory = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/certifications/');
            const pathPrefix = isInSubdirectory ? '../' : '';

            try {
                localStorage.setItem('openCvModal', '1');
            } catch (_) {
                // ignore
            }

            window.location.href = pathPrefix + 'index.html#contact';
        }, 0);
    }

    function initSearch() {
        // Get DOM elements
        searchModal = document.getElementById('search-modal');
        searchInput = document.getElementById('search-input');
        searchResults = document.getElementById('search-results');
        searchOverlay = document.getElementById('search-overlay');
        searchToggle = document.getElementById('search-toggle');
        searchClose = document.getElementById('search-close');

        if (!searchModal || !searchInput) {
            console.warn('Search elements not found');
            return;
        }

        // Wait for data to load
        waitForData();

        // Event listeners
        searchToggle?.addEventListener('click', openSearch);
        searchClose?.addEventListener('click', closeSearch);
        searchOverlay?.addEventListener('click', closeSearch);
        searchInput?.addEventListener('input', (e) => {
            clearTimeout(_debounceTimer);
            const val = e.target.value.trim();
            if (!val || val.length < 2) {
                selectedIndex = -1;
                showInitialState();
                return;
            }
            _debounceTimer = setTimeout(() => handleSearch(e), DEBOUNCE_MS);
        });

        // Keyboard shortcuts
        document.addEventListener('keydown', handleGlobalKeyboard);
    }

    function handleGlobalKeyboard(e) {
        // Cmd/Ctrl + K to open search
        if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
            e.preventDefault();
            openSearch();
            return;
        }

        // Only handle these keys when search is open
        if (!searchModal.classList.contains('active')) return;

        // Escape to close
        if (e.key === 'Escape') {
            closeSearch();
            return;
        }

        // Arrow navigation
        if (e.key === 'ArrowDown') {
            e.preventDefault();
            navigateResults(1);
            return;
        }

        if (e.key === 'ArrowUp') {
            e.preventDefault();
            navigateResults(-1);
            return;
        }

        // Enter to select
        if (e.key === 'Enter' && selectedIndex >= 0 && selectableItems[selectedIndex]) {
            e.preventDefault();
            selectableItems[selectedIndex].click();
            return;
        }
    }

    function waitForData() {
        // Check if data is loaded with more detailed logging
        const projectsReady = typeof getAllProjects === 'function';
        const certsReady = typeof getCertificationsSortedByRank === 'function';
        const formationsReady = typeof getAllFormations === 'function';
        const fuseReady = typeof Fuse !== 'undefined';

        if (projectsReady && certsReady && formationsReady && fuseReady) {
            prepareSearchData();
        } else {
            // Retry after a short delay (max 50 retries = 5 seconds)
            if (!waitForData.retries) waitForData.retries = 0;
            waitForData.retries++;

            if (waitForData.retries < 50) {
                setTimeout(waitForData, 100);
            } else {
                console.error('Search data failed to load:', {
                    projectsReady,
                    certsReady,
                    formationsReady,
                    fuseReady
                });
            }
        }
    }

    function prepareSearchData() {
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        searchData = [];

        // Add projects
        try {
            const projects = getAllProjects();
            projects.forEach(project => {
                const name = project.nameKey ? t(project.nameKey, project.name) : project.name;
                const description = project.descriptionKey ? t(project.descriptionKey, project.description) : project.description;
                const categories = project.categories || (project.category ? [project.category] : []);
                const tags = project.tags || [];

                searchData.push({
                    type: 'project',
                    id: project.id,
                    projectId: project.id, // Searchable project ID field
                    name: name,
                    description: description,
                    categories: categories.join(' '),
                    tags: tags.join(' '),
                    allLangText: getAllLangText([project.nameKey, project.descriptionKey, ...(project.categoryKeys || [])]),
                    icon: project.icon || 'folder',
                    link: project.link,
                    data: project
                });
            });
        } catch (e) {
            console.error('Error loading projects for search:', e);
        }

        // Add certifications
        try {
            const certifications = getCertificationsSortedByRank();
            certifications.forEach(cert => {
                const name = cert.nameKey ? t(cert.nameKey, cert.name) : cert.name;
                const description = cert.descriptionKey ? t(cert.descriptionKey, cert.description) : cert.description;
                const skills = cert.skills || [];

                searchData.push({
                    type: 'certification',
                    id: cert.id,
                    name: name,
                    description: description,
                    provider: cert.provider,
                    category: cert.category,
                    skills: skills.join(' '),
                    level: cert.level?.label || '',
                    allLangText: getAllLangText([cert.nameKey, cert.descriptionKey, ...(cert.skillsKeys || [])]),
                    icon: 'award',
                    link: cert.credlyUrl || cert.externalUrl,
                    data: cert
                });
            });
        } catch (e) {
            console.error('Error loading certifications for search:', e);
        }

        // Add formations
        try {
            const formations = getAllFormations();
            formations.forEach(formation => {
                const name = formation.nameKey ? t(formation.nameKey, formation.name) : formation.name;
                const description = formation.descriptionKey ? t(formation.descriptionKey, formation.description) : formation.description;
                const skills = formation.skills || [];

                searchData.push({
                    type: 'formation',
                    id: formation.id,
                    name: name,
                    description: description,
                    provider: formation.provider,
                    category: formation.category,
                    skills: skills.join(' '),
                    allLangText: getAllLangText([formation.nameKey, formation.descriptionKey]),
                    icon: 'book-open',
                    link: null,
                    data: formation
                });
            });
        } catch (e) {
            console.error('Error loading formations for search:', e);
        }

        // Initialize Fuse.js
        if (typeof Fuse !== 'undefined') {
            fuse = new Fuse(searchData, {
                keys: [
                    { name: 'name', weight: 2 },
                    { name: 'projectId', weight: 2 },
                    { name: 'description', weight: 1 },
                    { name: 'tags', weight: 1.5 },
                    { name: 'categories', weight: 1.5 },
                    { name: 'provider', weight: 0.8 },
                    { name: 'category', weight: 1 },
                    { name: 'skills', weight: 1.2 },
                    { name: 'allLangText', weight: 0.4 }
                ],
                threshold: 0.5,
                distance: 100,
                includeScore: true,
                minMatchCharLength: 1,
                ignoreLocation: true,
                useExtendedSearch: false
            });
        } else {
            console.error('Fuse.js not loaded');
        }
    }

    function openSearch() {
        searchModal.classList.add('active');
        searchInput.focus();
        document.body.style.overflow = 'hidden';

        // Show smart initial state if search is empty
        if (!searchInput.value.trim()) {
            showInitialState();
        }
    }

    function navigateResults(direction) {
        // Get all selectable items
        selectableItems = Array.from(searchResults.querySelectorAll('.search-result-item, .quick-link-item'));

        if (selectableItems.length === 0) return;

        // Remove previous selection
        if (selectedIndex >= 0 && selectableItems[selectedIndex]) {
            selectableItems[selectedIndex].classList.remove('selected');
        }

        // Update index
        selectedIndex += direction;

        // Wrap around
        if (selectedIndex < 0) {
            selectedIndex = selectableItems.length - 1;
        } else if (selectedIndex >= selectableItems.length) {
            selectedIndex = 0;
        }

        // Add selection
        if (selectableItems[selectedIndex]) {
            selectableItems[selectedIndex].classList.add('selected');
            selectableItems[selectedIndex].scrollIntoView({ block: 'nearest', behavior: 'smooth' });
        }
    }

    function closeSearch() {
        searchModal.classList.remove('active');
        searchInput.value = '';
        document.body.style.overflow = '';
        selectedIndex = -1;
        selectableItems = [];

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function showInitialState() {
        selectedIndex = -1;
        let html = '';

        // Get recent searches
        const recentSearches = getRecentSearches();

        // Quick Links
        html += '<div class="search-group">';
        html += '<div class="search-group-title">' + t('search.section.quickLinks', 'Quick Links') + '</div>';

        const quickLinks = [
            { name: t('search.quicklink.allProjects', 'All Projects'), icon: 'layers', href: 'projects.html' },
            { name: t('search.quicklink.allCertifications', 'All Certifications'), icon: 'award', href: 'certifications.html' },
            { name: t('search.quicklink.contact', 'Contact'), icon: 'mail', href: 'index.html#contact' },
            { name: t('search.quicklink.downloadCv', 'Download CV'), icon: 'file-text', href: '#', action: 'open-cv' }
        ];

        quickLinks.forEach((link, index) => {
            const isInSubdirectory = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/certifications/');
            const pathPrefix = isInSubdirectory ? '../' : '';
            const href = link.href.startsWith('http') ? link.href : pathPrefix + link.href;

            html += '<a href="' + href + '" class="search-result-item quick-link-item"' +
                    (link.download ? ' download' : '') +
                    (link.action ? (' data-action="' + link.action + '"') : '') + '>';
            html += '<div class="search-result-header">';
            html += '<i data-lucide="' + link.icon + '" class="search-result-icon"></i>';
            html += '<div class="search-result-info">';
            html += '<div class="search-result-title">' + link.name + '</div>';
            html += '</div></div></a>';
        });

        html += '</div>';

        // Recent searches (if any)
        if (recentSearches.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">' + t('search.section.recent', 'Recent Searches') + '</div>';

            recentSearches.forEach((query, index) => {
                html += '<a href="#" class="search-result-item quick-link-item recent-search-item" data-query="' + escapeHtml(query) + '">';
                html += '<div class="search-result-header">';
                html += '<i data-lucide="clock" class="search-result-icon"></i>';
                html += '<div class="search-result-info">';
                html += '<div class="search-result-title">' + escapeHtml(query) + '</div>';
                html += '</div>';
                html += '</div></a>';
            });

            html += '</div>';
        }

        // Popular Tech Stack
        html += '<div class="search-group">';
        html += '<div class="search-group-title">' + t('search.section.popularTech', 'Popular Technologies') + '</div>';

        const popularTech = [
            { name: 'Docker', icon: 'box' },
            { name: 'Kubernetes', icon: 'boxes' },
            { name: 'Azure', icon: 'cloud' },
            { name: 'Python', icon: 'code' },
            { name: 'JavaScript', icon: 'code-2' }
        ];

        popularTech.forEach(tech => {
            html += '<a href="#" class="search-result-item quick-link-item tech-quick-search" data-query="' + tech.name + '">';
            html += '<div class="search-result-header">';
            html += '<i data-lucide="' + tech.icon + '" class="search-result-icon"></i>';
            html += '<div class="search-result-info">';
            html += '<div class="search-result-title">' + tech.name + '</div>';
            html += '</div>';
            html += '</div></a>';
        });

        html += '</div>';

        searchResults.innerHTML = html;

        // Attach handlers for quick links
        attachInitialStateHandlers();

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function attachInitialStateHandlers() {
        // CV quick action
        const cvAction = searchResults.querySelector('[data-action="open-cv"]');
        if (cvAction) {
            cvAction.addEventListener('click', (e) => {
                e.preventDefault();
                triggerCvDownload();
            });
        }

        // Recent search items
        const recentItems = searchResults.querySelectorAll('.recent-search-item');
        recentItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const query = item.getAttribute('data-query');
                searchInput.value = query;
                searchInput.dispatchEvent(new Event('input'));
            });
        });

        // Tech quick search items
        const techItems = searchResults.querySelectorAll('.tech-quick-search');
        techItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();
                const query = item.getAttribute('data-query');
                searchInput.value = query;
                searchInput.dispatchEvent(new Event('input'));
            });
        });
    }

    function getRecentSearches() {
        try {
            const recent = localStorage.getItem('recentSearches');
            return recent ? JSON.parse(recent) : [];
        } catch (e) {
            return [];
        }
    }

    function addRecentSearch(query) {
        if (!query || query.length < 2) return;

        try {
            let recent = getRecentSearches();

            // Remove if already exists
            recent = recent.filter(q => q.toLowerCase() !== query.toLowerCase());

            // Add to beginning
            recent.unshift(query);

            // Keep only last 5
            recent = recent.slice(0, MAX_RECENT_SEARCHES);

            localStorage.setItem('recentSearches', JSON.stringify(recent));
        } catch (e) {
            // localStorage might be disabled
        }
    }

	    function handleSearch(e) {
	        const query = e.target.value.trim();
	        const normalizedQuery = query.toLowerCase();
	        highlightTerms = getHighlightTerms(normalizedQuery);

        // Reset keyboard navigation
        selectedIndex = -1;

        if (!query || query.length < 2) {
            showInitialState();
            return;
        }

        if (!fuse) {
            searchResults.innerHTML = '<div class="search-no-results"><i data-lucide="alert-circle"></i><p>' + t('search.error.notReady', 'Search not ready. Please try again.') + '</p></div>';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            return;
        }

	        const isDbGroup = isDatabaseGroupQuery(normalizedQuery);
	        const dbTerm = getDatabaseTerm(normalizedQuery);
	        const isDbTerm = Boolean(dbTerm);
	        const isRpi = isRpiQuery(normalizedQuery);
	        const isPyGroup = isPythonQuery(normalizedQuery);

	        // Perform search (with synonym expansion)
	        let results = mergeSearchResults([query, ...getSynonymQueries(normalizedQuery)]);
	        if (query.length <= 4 && !isJavaScriptQuery(normalizedQuery) && !isDbGroup && !isDbTerm && !isRpi && !isPyGroup) {
	            results = results.filter(result => itemContainsQuery(result.item, normalizedQuery));
	        }
	        if (isJavaScriptQuery(normalizedQuery)) {
	            const jsMatchers = getJavaScriptMatchers();
	            const filtered = results.filter(result => itemMatchesAnyPattern(result.item, jsMatchers));
	            const direct = directSearchByPatterns(jsMatchers);
	            const seen = new Set(filtered.map(r => `${r.item.type}:${r.item.id}`));
	            direct.forEach(r => {
	                const key = `${r.item.type}:${r.item.id}`;
	                if (seen.has(key)) return;
	                seen.add(key);
	                filtered.push(r);
	            });
	            results = filtered;
	        }
	        if (isPyGroup) {
	            const pyMatchers = getPythonMatchers();
	            const filtered = results.filter(result => itemMatchesAnyPattern(result.item, pyMatchers));
	            const direct = directSearchByPatterns(pyMatchers);
	            const seen = new Set(filtered.map(r => `${r.item.type}:${r.item.id}`));
	            direct.forEach(r => {
	                const key = `${r.item.type}:${r.item.id}`;
	                if (seen.has(key)) return;
	                seen.add(key);
	                filtered.push(r);
	            });
	            results = filtered;
	        }
	        if (isDbGroup || isDbTerm) {
	            const dbMatchers = getDatabaseMatchers(normalizedQuery);
	            results = results.filter(result => itemMatchesAnyPattern(result.item, dbMatchers));
	            if (results.length === 0) {
	                // Fuse can be inconsistent for some short/edge queries; fallback to direct matching.
                results = directSearchByPatterns(dbMatchers);
            }
        }
        if (isRpi) {
            const piMatchers = getRpiMatchers();
            results = results.filter(result => itemMatchesAnyPattern(result.item, piMatchers));
            if (results.length === 0) {
                results = directSearchByPatterns(piMatchers);
            }
        }
        if (isJavaPriorityQuery(normalizedQuery)) {
            results = prioritizeJavaResults(results);
        }

        // Final fallback: if Fuse returns nothing but we have an exact substring hit (e.g., tag-only terms),
        // return those matches so users can still find "obvious" keywords like "Apache".
        if (results.length === 0) {
            results = directSearchBySubstring(normalizedQuery);
        }

        // Save to recent searches
        addRecentSearch(query);

        // Group results by type
        const grouped = {
            action: [],
            project: [],
            certification: [],
            formation: []
        };

        // Action shortcuts (opt-in: user clicks them) - Multilingual CV detection with partial matching
        if (/\b(cv|resume|résumé|resum|lebenslauf|leben|currículo|curriculo|curri|liewen)\b/i.test(normalizedQuery) || 
            normalizedQuery.includes('leben') || normalizedQuery.includes('curri')) {
            grouped.action.push({
                type: 'action',
                id: 'open-cv',
                name: t('search.action.downloadCv', 'Download CV'),
                description: t('search.action.downloadCv.desc', 'Choose language (EN / FR)'),
                icon: 'file-text',
                action: 'open-cv'
            });
        }
        if (/\b(projects?|portfolio|projetos?|projeten|projekte|projets?)\b/i.test(normalizedQuery)) {
            grouped.action.push({
                type: 'action',
                id: 'go-projects',
                name: t('search.action.goProjects', 'Go to Projects'),
                description: t('search.action.goProjects.desc', 'Open the projects page'),
                icon: 'layers',
                action: 'go-projects'
            });
        }
        if (/\b(certifications?|certs?|certificações|certificacoes|zertifikater?|zertifikate?)\b/i.test(normalizedQuery)) {
            grouped.action.push({
                type: 'action',
                id: 'go-certifications',
                name: t('search.action.goCertifications', 'Go to Certifications'),
                description: t('search.action.goCertifications.desc', 'Open the certifications page'),
                icon: 'award',
                action: 'go-certifications'
            });
        }
        if (/\b(home|main|index|início|inicio|startsäit|startseite|accueil)\b/i.test(normalizedQuery)) {
            grouped.action.push({
                type: 'action',
                id: 'go-home',
                name: t('search.action.goHome', 'Go to Home'),
                description: t('search.action.goHome.desc', 'Open the main page'),
                icon: 'home',
                action: 'go-home'
            });
        }

        if (results.length === 0 && grouped.action.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results"><i data-lucide="search-x"></i><p>' + t('search.empty.noResults', 'No results found for') + ' "' + escapeHtml(query) + '"</p></div>';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            return;
        }

        results.forEach(result => {
            const item = result.item;
            // Add match info for highlighting
            item.matches = result.matches;
            if (grouped[item.type]) {
                grouped[item.type].push(item);
            }
        });

        // Render results with query for highlighting
        renderResults(grouped, query);
    }

    function getSynonymQueries(normalizedQuery) {
        const queries = [];

        // AI / Artificial Intelligence synonyms (multilingual)
        if (/\b(ai|ki|ia|künstliche intelligenz|inteligência artificial|intelligence artificielle|whisp)\b/i.test(normalizedQuery)) {
            queries.push('ai');
            queries.push('artificial intelligence');
            queries.push('ki'); // German: Künstliche Intelligenz
            queries.push('ia'); // French/Portuguese: Intelligence Artificielle / Inteligência Artificial
            queries.push('mistral');
            queries.push('whisper');
            queries.push('whispflow');
        }

        // Transcription / Speech-to-Text synonyms (multilingual)
        if (/\b(transcri|speech.to.text|sprach|fala|parole|whisper|whisp)\b/i.test(normalizedQuery)) {
            queries.push('transcription');
            queries.push('speech-to-text');
            queries.push('whisper');
            queries.push('whispflow');
            queries.push('faster-whisper');
        }

        // IoT / Internet of Things synonyms (multilingual)
        if (/\b(iot|ido|internet (of|der|das) (things|dinge)|internet dos objetos)\b/i.test(normalizedQuery)) {
            queries.push('iot');
            queries.push('internet of things');
            queries.push('ido'); // Portuguese: Internet das Objetos
            queries.push('esp8266');
            queries.push('sensor');
        }

        // Docker / Container synonyms
        if (/\b(docker|container|conteneur)\b/i.test(normalizedQuery)) {
            queries.push('docker');
            queries.push('docker compose');
            queries.push('container');
            queries.push('containerization');
        }

        // Cloud / Nuvem / Nuage synonyms
        if (/\b(cloud|nuvem|nuage|wolke)\b/i.test(normalizedQuery)) {
            queries.push('cloud');
            queries.push('cloud computing');
            queries.push('oracle cloud');
            queries.push('azure');
        }

        // Web Development synonyms (multilingual)
        if (/\b(web dev|webdev|desenvolvimento web|développement web|webentwicklung)\b/i.test(normalizedQuery)) {
            queries.push('web development');
            queries.push('web dev');
            queries.push('html');
            queries.push('css');
            queries.push('javascript');
        }

        // Kubernetes synonyms
        if (isKubeQuery(normalizedQuery)) {
            queries.push('kubernetes');
            queries.push('k8s');
            queries.push('k3s');
            queries.push('kube');
            queries.push('kubernete');
            queries.push('kubernetis');
        }

        // Python group (only when searching Python, not when searching a framework)
        if (isPythonQuery(normalizedQuery)) {
            queries.push('python');
            queries.push('django');
            queries.push('fastapi');
            queries.push('flask');
        }

        // S3 / Object Storage group
        if (isS3Query(normalizedQuery)) {
            queries.push('s3');
            queries.push('s3-compatible');
            queries.push('object storage');
        }

        // Raspberry Pi group
        if (isRpiQuery(normalizedQuery)) {
            queries.push('raspberry pi');
            queries.push('rpi');
            queries.push('raspi');
            queries.push('raspberry pi 5');
            queries.push('raspberry pi 4');
        }

        // Database group/terms
        const dbTerm = getDatabaseTerm(normalizedQuery);
        if (isDatabaseGroupQuery(normalizedQuery)) {
            queries.push('database');
            queries.push('databases');
            queries.push('postgres');
            queries.push('postgresql');
            queries.push('mysql');
            queries.push('mariadb');
            queries.push('sqlite');
            queries.push('redis');
            queries.push('pgvector');
        } else if (dbTerm) {
            getDatabaseAliases(dbTerm).forEach(alias => queries.push(alias));
        }
        
        // JavaScript group (only when searching JavaScript)
        if (isJavaScriptQuery(normalizedQuery)) {
            queries.push('javascript');
            queries.push('js');
            queries.push('nodejs');
            queries.push('node.js');
            queries.push('react');
            queries.push('vue');
            queries.push('svelte');
            queries.push('sveltekit');
            queries.push('nuxt');
        }

        return queries;
    }

    function getHighlightTerms(normalizedQuery) {
        if (isKubeQuery(normalizedQuery)) {
            return ['kubernetes', 'k8s', 'k3s', 'kube', 'kubernete', 'kubernetis'];
        }
        if (isPythonQuery(normalizedQuery)) {
            return ['python', 'django', 'fastapi', 'flask', 'py'];
        }
        if (isS3Query(normalizedQuery)) {
            return ['s3', 's3-compatible', 'object storage'];
        }
        if (isRpiQuery(normalizedQuery)) {
            // Avoid highlighting "pi" alone (would highlight in "API", etc.)
            return ['raspberry', 'raspberry pi', 'rpi', 'raspi', 'raspberry pi 5', 'raspberry pi 4'];
        }
        if (isDatabaseGroupQuery(normalizedQuery)) {
            return ['database', 'databases', 'postgres', 'postgresql', 'mysql', 'mariadb', 'sqlite', 'redis', 'pgvector'];
        }
        const dbTerm = getDatabaseTerm(normalizedQuery);
        if (dbTerm) {
            return getDatabaseAliases(dbTerm);
        }
        if (isJavaScriptQuery(normalizedQuery)) {
            return getJavaScriptHighlightTerms();
        }
        if (/\b(transcri|speech.to.text|sprach|fala|parole|whisper|whisp)\b/i.test(normalizedQuery)) {
            return ['transcription', 'speech-to-text', 'whisper', 'whispflow', 'faster-whisper'];
        }
        return null;
    }

    function isKubeQuery(normalizedQuery) {
        return (
            normalizedQuery.includes('ku') ||
            normalizedQuery.includes('k8s') ||
            normalizedQuery.includes('k3s') ||
            normalizedQuery.includes('kube')
        );
    }

	    function isPythonQuery(normalizedQuery) {
	        const compact = normalizedQuery.replace(/\s+/g, '');
	        if (compact.includes('python')) return true;
	        const tokens = normalizedQuery.split(/\s+/).filter(Boolean);
	        return tokens.some(token => token.startsWith('py'));
	    }

    function isDatabaseGroupQuery(normalizedQuery) {
        const compact = normalizedQuery.replace(/\s+/g, '');
        return (
            /\bdb\b/.test(normalizedQuery) ||
            normalizedQuery.includes('database') ||
            normalizedQuery.includes('databases') ||
            compact.startsWith('datab')
        );
    }

    function getDatabaseTerm(normalizedQuery) {
        const compact = normalizedQuery.replace(/\s+/g, '');

        const defs = [
            { key: 'postgres', aliases: ['postgres', 'postgresql'], minPrefix: 4 },
            { key: 'mysql', aliases: ['mysql'], minPrefix: 3 },
            { key: 'mariadb', aliases: ['mariadb'], minPrefix: 4 },
            { key: 'sqlite', aliases: ['sqlite'], minPrefix: 4 },
            { key: 'redis', aliases: ['redis'], minPrefix: 4 },
            { key: 'pgvector', aliases: ['pgvector'], minPrefix: 3 }
        ];

        for (const def of defs) {
            for (const alias of def.aliases) {
                const aliasCompact = alias.replace(/\s+/g, '');
                if (compact.includes(aliasCompact)) return def.key;
                if (aliasCompact.length >= def.minPrefix && compact.startsWith(aliasCompact.slice(0, def.minPrefix))) return def.key;
            }
        }

        return null;
    }

    function getDatabaseAliases(dbTerm) {
        if (dbTerm === 'postgres') return ['postgres', 'postgresql'];
        if (dbTerm === 'mysql') return ['mysql'];
        if (dbTerm === 'mariadb') return ['mariadb'];
        if (dbTerm === 'sqlite') return ['sqlite'];
        if (dbTerm === 'redis') return ['redis'];
        if (dbTerm === 'pgvector') return ['pgvector'];
        return [];
    }

    function isS3Query(normalizedQuery) {
        return (
            /\bs3\b/.test(normalizedQuery) ||
            normalizedQuery.includes('object storage') ||
            normalizedQuery.includes('object-store') ||
            normalizedQuery.includes('s3 compatible')
        );
    }

    function isRpiQuery(normalizedQuery) {
        const compact = normalizedQuery.replace(/\s+/g, '');
        return (
            /\bpi\b/.test(normalizedQuery) ||
            /\brpi\b/.test(normalizedQuery) ||
            compact.startsWith('rasp') ||
            normalizedQuery.includes('raspberry')
        );
    }

    function isJavaScriptQuery(normalizedQuery) {
        const compact = normalizedQuery.replace(/\s+/g, '');
        return (
            normalizedQuery.includes('javascript') ||
            /\bjs\b/.test(normalizedQuery) ||
            normalizedQuery.includes('java script') ||
            (compact.startsWith('jav') && compact.length >= 3)
        );
    }

    function isJavaPriorityQuery(normalizedQuery) {
        return (
            normalizedQuery.includes('java') &&
            !normalizedQuery.includes('javascript') &&
            !normalizedQuery.includes('java script')
        );
    }

    function prioritizeJavaResults(results) {
        const javaPattern = /\bjava\b(?!\s*script)/i;
        return results.slice().sort((a, b) => {
            const aHas = itemMatchesAnyPattern(a.item, [javaPattern]);
            const bHas = itemMatchesAnyPattern(b.item, [javaPattern]);
            if (aHas === bHas) return 0;
            return aHas ? -1 : 1;
        });
    }

    function getJavaScriptTerms() {
        return ['javascript', 'js', 'nodejs', 'node.js', 'react', 'vue', 'svelte', 'sveltekit', 'nuxt'];
    }

    function getJavaScriptHighlightTerms() {
        return ['javascript', 'js', 'nodejs', 'node.js', 'react', 'vue', 'svelte', 'sveltekit', 'nuxt'];
    }

	    function getJavaScriptMatchers() {
	        return [
	            /\bjavascript\b/i,
	            /\bjs\b/i,
	            /\bnode\.?js\b/i,
	            /\breact\b/i,
	            /\bvue\b/i,
	            /\bnuxt\b/i,
	            /\bsvelte\b/i,
	            /\bsveltekit\b/i
	        ];
	    }

	    function getPythonMatchers() {
	        return [
	            /\bpython\b/i,
	            /\bdjango\b/i,
	            /\bfastapi\b/i,
	            /\bflask\b/i
	        ];
	    }

    function getDatabaseMatchers(normalizedQuery) {
        if (isDatabaseGroupQuery(normalizedQuery)) {
            return [
                /\bpostgres(?:ql)?\b/i,
                /\bmysql\b/i,
                /\bmariadb\b/i,
                /\bsqlite\b/i,
                /\bredis\b/i,
                /\bpgvector\b/i
            ];
        }

        const dbTerm = getDatabaseTerm(normalizedQuery);
        if (dbTerm === 'postgres') return [/\bpostgres(?:ql)?\b/i];
        if (dbTerm === 'mysql') return [/\bmysql\b/i];
        if (dbTerm === 'mariadb') return [/\bmariadb\b/i];
        if (dbTerm === 'sqlite') return [/\bsqlite\b/i];
        if (dbTerm === 'redis') return [/\bredis\b/i];
        if (dbTerm === 'pgvector') return [/\bpgvector\b/i];
        return [];
    }

    function directSearchByPatterns(patterns) {
        if (!Array.isArray(patterns) || patterns.length === 0) return [];
        return searchData
            .filter(item => itemMatchesAnyPattern(item, patterns))
            .map(item => ({ item, score: 0 }));
    }

    function directSearchBySubstring(normalizedQuery) {
        if (!normalizedQuery || normalizedQuery.length < 2) return [];
        return searchData
            .filter(item => itemContainsQuery(item, normalizedQuery))
            .map(item => ({ item, score: 0 }));
    }

    function getRpiMatchers() {
        return [
            /\bras(pberry)?\s*pi\b/i,
            /\brpi\b/i,
            /\braspi\b/i,
            /\bras(pberry)?\s*pi\s*5\b/i,
            /\bras(pberry)?\s*pi\s*4\b/i
        ];
    }

    function mergeSearchResults(queries) {
        const results = [];
        const seen = new Set();
        const MAX_PER_QUERY = 15;
        const MAX_TOTAL = 30;

        queries.forEach((q) => {
            if (!q || q.length < 2) return;
            if (results.length >= MAX_TOTAL) return;
            const queryResults = fuse.search(q, { limit: MAX_PER_QUERY });
            queryResults.forEach((result) => {
                if (results.length >= MAX_TOTAL) return;
                const key = result.item.type + ':' + result.item.id;
                if (seen.has(key)) return;
                seen.add(key);
                results.push(result);
            });
        });

        return results;
    }

    function itemContainsQuery(item, normalizedQuery) {
        if (!item || !normalizedQuery) return false;
        const parts = [
            item.name,
            item.projectId,
            item.description,
            item.tags,
            item.categories,
            item.provider,
            item.category,
            item.skills,
            item.level
        ].filter(Boolean);
        const haystack = parts.join(' ').toLowerCase();
        return haystack.includes(normalizedQuery);
    }

    function itemContainsAnyTerm(item, terms) {
        if (!item || !Array.isArray(terms) || terms.length === 0) return false;
        const parts = [
            item.name,
            item.description,
            item.tags,
            item.categories,
            item.provider,
            item.category,
            item.skills,
            item.level
        ].filter(Boolean);
        const haystack = parts.join(' ').toLowerCase();
        return terms.some(term => haystack.includes(term));
    }

    function itemMatchesAnyPattern(item, patterns) {
        if (!item || !Array.isArray(patterns) || patterns.length === 0) return false;
        const parts = [
            item.name,
            item.description,
            item.tags,
            item.categories,
            item.provider,
            item.category,
            item.skills,
            item.level
        ].filter(Boolean);
        const haystack = parts.join(' ');
        return patterns.some(pattern => pattern.test(haystack));
    }

    function renderResults(grouped, query) {
        let html = '';

        // Detect current page
        const currentPage = window.location.pathname;
        const isOnCertificationsPage = currentPage.includes('certifications.html') || currentPage.endsWith('certifications');
        const isOnProjectsPage = currentPage.includes('projects.html') || currentPage.endsWith('projects');
        const isInSubdirectory = currentPage.includes('/projects/') || currentPage.includes('/certifications/');
        const pathPrefix = isInSubdirectory ? '../' : '';

        // Actions
        if (grouped.action && grouped.action.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">' + t('search.section.actions', 'Actions') + '</div>';
            grouped.action.forEach((item) => {
                html += '<a href="#" class="search-result-item quick-link-item" data-action="' + item.action + '">';
                html += '<div class="search-result-header">';
                html += '<i data-lucide="' + item.icon + '" class="search-result-icon"></i>';
                html += '<div class="search-result-info">';
                html += '<div class="search-result-title">' + highlightMatch(item.name, query) + '</div>';
                if (item.description) {
                    html += '<div class="search-result-description">' + escapeHtml(item.description) + '</div>';
                }
                html += '</div></div></a>';
            });
            html += '</div>';
        }

        // Projects (sub-grouped by category)
        if (grouped.project.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">' + t('search.section.projects', 'Projects') + ' (' + grouped.project.length + ')</div>';

            const projectSubGroups = new Map();
            grouped.project.forEach(item => {
                const catKey = item.data.categoryKeys && item.data.categoryKeys[0];
                const cat = catKey ? t(catKey, (item.data.categories && item.data.categories[0]) || 'Other') : (item.data.categories && item.data.categories[0]) || 'Other';
                if (!projectSubGroups.has(cat)) projectSubGroups.set(cat, []);
                projectSubGroups.get(cat).push(item);
            });

            const showProjectSubHeaders = projectSubGroups.size > 1;

            projectSubGroups.forEach((items, category) => {
                if (showProjectSubHeaders) {
                    html += '<div class="search-subgroup-title">' + escapeHtml(category) + '</div>';
                }
                items.forEach(item => {
                    const link = item.link ? pathPrefix + item.link : '#projects';

                    html += '<a href="' + link + '" class="search-result-item">';
                    html += '<div class="search-result-header">';
                    html += '<i data-lucide="' + item.icon + '" class="search-result-icon"></i>';
                    html += '<div class="search-result-info">';
                    html += '<div class="search-result-title">' + highlightMatch(item.name, query) + '</div>';

                    if (item.data.categories && item.data.categories.length > 0) {
                        html += '<div class="search-result-meta">';
                        item.data.categories.slice(0, 3).forEach(cat => {
                            html += '<span class="search-result-badge">' + highlightMatch(cat, query) + '</span>';
                        });
                        html += '</div>';
                    }

                    if (item.description) {
                        html += '<div class="search-result-description">' + highlightMatch(item.description, query) + '</div>';
                    }

                    if (item.data.tags && item.data.tags.length > 0) {
                        html += '<div class="search-result-tags">';
                        item.data.tags.slice(0, 6).forEach(tag => {
                            html += '<span class="search-result-tag">' + highlightMatch(tag, query) + '</span>';
                        });
                        html += '</div>';
                    }

                    html += '</div></div></a>';
                });
            });
            html += '</div>';
        }

        // Certifications (sub-grouped by provider)
        if (grouped.certification.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">' + t('search.section.certifications', 'Certifications') + ' (' + grouped.certification.length + ')</div>';

            const certSubGroups = new Map();
            grouped.certification.forEach(item => {
                const provider = item.provider || 'Other';
                if (!certSubGroups.has(provider)) certSubGroups.set(provider, []);
                certSubGroups.get(provider).push(item);
            });

            const showCertSubHeaders = certSubGroups.size > 1;

            certSubGroups.forEach((items, provider) => {
                if (showCertSubHeaders) {
                    html += '<div class="search-subgroup-title">' + escapeHtml(provider) + '</div>';
                }
                items.forEach((item) => {
                    const certId = item.id;

                    if (isOnCertificationsPage) {
                        html += '<a href="#" class="search-result-item" data-type="certification" data-id="' + certId + '">';
                    } else {
                        html += '<a href="' + pathPrefix + 'certifications.html#' + certId + '" class="search-result-item">';
                    }

                    html += '<div class="search-result-header">';
                    html += '<i data-lucide="' + item.icon + '" class="search-result-icon"></i>';
                    html += '<div class="search-result-info">';
                    html += '<div class="search-result-title">' + highlightMatch(item.name, query) + '</div>';

                    html += '<div class="search-result-meta">';
                    if (item.provider) {
                        html += '<span class="search-result-badge">' + highlightMatch(item.provider, query) + '</span>';
                    }
                    if (item.level) {
                        html += '<span class="search-result-badge">' + escapeHtml(item.level) + '</span>';
                    }
                    html += '</div>';

                    if (item.description) {
                        html += '<div class="search-result-description">' + highlightMatch(item.description, query) + '</div>';
                    }

                    if (item.data.skills && item.data.skills.length > 0) {
                        html += '<div class="search-result-tags">';
                        item.data.skills.slice(0, 6).forEach(skill => {
                            html += '<span class="search-result-tag">' + highlightMatch(skill, query) + '</span>';
                        });
                        html += '</div>';
                    }

                    html += '</div></div></a>';
                });
            });
            html += '</div>';
        }

        // Formations
        if (grouped.formation.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">' + t('search.section.formations', 'Training & Workshops') + ' (' + grouped.formation.length + ')</div>';

            grouped.formation.forEach(item => {
                const formationId = item.id;

                if (isOnCertificationsPage) {
                    // On certifications page - open modal directly
                    html += '<a href="#" class="search-result-item" data-type="formation" data-id="' + formationId + '">';
                } else {
                    // Not on certifications page - navigate there with hash
                    html += '<a href="' + pathPrefix + 'certifications.html#' + formationId + '" class="search-result-item">';
                }

                html += '<div class="search-result-header">';
                html += '<i data-lucide="' + item.icon + '" class="search-result-icon"></i>';
                html += '<div class="search-result-info">';
                html += '<div class="search-result-title">' + highlightMatch(item.name, query) + '</div>';

                html += '<div class="search-result-meta">';
                if (item.provider) {
                    html += '<span class="search-result-badge">' + highlightMatch(item.provider, query) + '</span>';
                }
                if (item.category) {
                    html += '<span class="search-result-badge">' + highlightMatch(item.category, query) + '</span>';
                }
                html += '</div>';

                if (item.description) {
                    html += '<div class="search-result-description">' + highlightMatch(item.description, query) + '</div>';
                }

                if (item.data.skills && item.data.skills.length > 0) {
                    html += '<div class="search-result-tags">';
                    item.data.skills.slice(0, 6).forEach(skill => {
                        html += '<span class="search-result-tag">' + highlightMatch(skill, query) + '</span>';
                    });
                    html += '</div>';
                }

                html += '</div></div></a>';
            });
            html += '</div>';
        }

        searchResults.innerHTML = html;

        // Attach click handlers for modal items
        attachModalHandlers();
        attachActionHandlers();

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    function attachModalHandlers() {
        // Attach click handlers for certification/formation results that should open modals
        const modalItems = searchResults.querySelectorAll('.search-result-item[data-type]');

        modalItems.forEach(item => {
            item.addEventListener('click', (e) => {
                e.preventDefault();

                const type = item.getAttribute('data-type');
                const id = item.getAttribute('data-id');

                // Close search modal
                closeSearch();

                // Open the appropriate modal
                if (type === 'certification' && typeof showCertModal === 'function') {
                    showCertModal(id);
                } else if (type === 'formation' && typeof showFormationModal === 'function') {
                    showFormationModal(id);
                }
            });
        });
    }

    function attachActionHandlers() {
        const actionItems = searchResults.querySelectorAll('[data-action]');
        actionItems.forEach((item) => {
            item.addEventListener('click', (e) => {
                const action = item.getAttribute('data-action');
                if (!action) return;

                if (action === 'open-cv') {
                    e.preventDefault();
                    triggerCvDownload();
                }
                if (action === 'go-projects' || action === 'go-certifications' || action === 'go-home') {
                    e.preventDefault();
                    const isInSubdirectory = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/certifications/');
                    const pathPrefix = isInSubdirectory ? '../' : '';
                    const target =
                        action === 'go-projects' ? (pathPrefix + 'projects.html') :
                        action === 'go-certifications' ? (pathPrefix + 'certifications.html') :
                        (pathPrefix + 'index.html');
                    window.location.href = target;
                }
            });
        });
    }

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function highlightMatch(text, query) {
        if (!query) return escapeHtml(text);

        const escapedText = escapeHtml(text);
        const terms = Array.isArray(highlightTerms) && highlightTerms.length > 0
            ? highlightTerms
            : [query];
        const pattern = terms
            .map(term => term.replace(/[.*+?^${}()|[\]\\]/g, '\\$&'))
            .join('|');
        const regex = new RegExp('(' + pattern + ')', 'gi');
        return escapedText.replace(regex, '<mark>$1</mark>');
    }


    // Re-prepare search data when language changes
    document.addEventListener('DOMContentLoaded', () => {
        const langButtons = document.querySelectorAll('.lang-dropdown button[data-lang]');
        langButtons.forEach(btn => {
            btn.addEventListener('click', () => {
                // Wait a bit for translations to update
                setTimeout(() => {
                    if (fuse) {
                        prepareSearchData();
                    }
                }, 100);
            });
        });
    });
})();
