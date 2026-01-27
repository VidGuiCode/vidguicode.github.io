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

    // Recent searches (max 5)
    const MAX_RECENT_SEARCHES = 5;

    // Wait for DOM to be ready
    document.addEventListener('DOMContentLoaded', initSearch);

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
        searchInput?.addEventListener('input', handleSearch);

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

        // Get translation helper
        const t = (key, fallback) => {
            if (typeof translations === 'undefined') return fallback;
            const entry = translations[key];
            if (!entry) return fallback;
            return entry[currentLang] || entry['en'] || fallback;
        };

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
                    name: name,
                    description: description,
                    categories: categories.join(' '),
                    tags: tags.join(' '),
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
                    { name: 'description', weight: 1 },
                    { name: 'tags', weight: 1.5 },
                    { name: 'categories', weight: 1.5 },
                    { name: 'provider', weight: 0.8 },
                    { name: 'category', weight: 1 },
                    { name: 'skills', weight: 1.2 }
                ],
                threshold: 0.4,
                includeScore: true,
                minMatchCharLength: 2
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
        html += '<div class="search-group-title">Quick Links</div>';

        const quickLinks = [
            { name: 'All Projects', icon: 'layers', href: 'projects.html' },
            { name: 'All Certifications', icon: 'award', href: 'certifications.html' },
            { name: 'Contact', icon: 'mail', href: 'index.html#contact' },
            { name: 'Download CV', icon: 'download', href: 'assets/docs/cv-guilherme-videira-marques-en.pdf', download: true }
        ];

        quickLinks.forEach((link, index) => {
            const isInSubdirectory = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/certifications/');
            const pathPrefix = isInSubdirectory ? '../' : '';
            const href = link.href.startsWith('http') ? link.href : pathPrefix + link.href;

            html += '<a href="' + href + '" class="search-result-item quick-link-item"' +
                    (link.download ? ' download' : '') + '>';
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
            html += '<div class="search-group-title">Recent Searches</div>';

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
        html += '<div class="search-group-title">Popular Technologies</div>';

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

        // Reset keyboard navigation
        selectedIndex = -1;

        if (!query || query.length < 2) {
            showInitialState();
            return;
        }

        if (!fuse) {
            searchResults.innerHTML = '<div class="search-no-results"><i data-lucide="alert-circle"></i><p>Search not ready. Please try again.</p></div>';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            return;
        }

        // Perform search
        const results = fuse.search(query);

        if (results.length === 0) {
            searchResults.innerHTML = '<div class="search-no-results"><i data-lucide="search-x"></i><p>No results found for "' + escapeHtml(query) + '"</p></div>';
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
            return;
        }

        // Save to recent searches
        addRecentSearch(query);

        // Group results by type
        const grouped = {
            project: [],
            certification: [],
            formation: []
        };

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

    function renderResults(grouped, query) {
        const currentLang = document.documentElement.getAttribute('data-lang') || 'en';
        let html = '';

        // Detect current page
        const currentPage = window.location.pathname;
        const isOnCertificationsPage = currentPage.includes('certifications.html') || currentPage.endsWith('certifications');
        const isOnProjectsPage = currentPage.includes('projects.html') || currentPage.endsWith('projects');
        const isInSubdirectory = currentPage.includes('/projects/') || currentPage.includes('/certifications/');
        const pathPrefix = isInSubdirectory ? '../' : '';

        // Helper for translations
        const t = (key, fallback) => {
            if (typeof translations === 'undefined') return fallback;
            const entry = translations[key];
            if (!entry) return fallback;
            return entry[currentLang] || entry['en'] || fallback;
        };

        // Projects
        if (grouped.project.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">Projects (' + grouped.project.length + ')</div>';
            grouped.project.forEach((item, index) => {
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
            html += '</div>';
        }

        // Certifications
        if (grouped.certification.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">Certifications (' + grouped.certification.length + ')</div>';

            grouped.certification.forEach((item) => {
                const certId = item.id;

                if (isOnCertificationsPage) {
                    // On certifications page - open modal directly
                    html += '<a href="#" class="search-result-item" data-type="certification" data-id="' + certId + '">';
                } else {
                    // Not on certifications page - navigate there with hash
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
            html += '</div>';
        }

        // Formations
        if (grouped.formation.length > 0) {
            html += '<div class="search-group">';
            html += '<div class="search-group-title">Training & Workshops (' + grouped.formation.length + ')</div>';

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

    function escapeHtml(text) {
        const div = document.createElement('div');
        div.textContent = text;
        return div.innerHTML;
    }

    function highlightMatch(text, query) {
        if (!query) return escapeHtml(text);

        const escapedText = escapeHtml(text);
        const regex = new RegExp('(' + query.replace(/[.*+?^${}()|[\]\\]/g, '\\$&') + ')', 'gi');
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
