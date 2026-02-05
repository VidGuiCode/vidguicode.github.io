/**
 * Unified Navbar Component
 * Renders consistent navigation across all pages
 * Auto-detects page location and adjusts paths accordingly
 */

(function() {
    'use strict';

    function renderNavbar() {
        const navbarContainer = document.getElementById('navbar-container');
        if (!navbarContainer) {
            console.warn('Navbar container not found');
            return;
        }

        // Detect current page path
        const currentPath = window.location.pathname;
        const isInSubdirectory = currentPath.includes('/projects/');
        const pathPrefix = isInSubdirectory ? '../' : '';

        // Determine if we're on index page (including school version)
        const isSchoolPage = currentPath.endsWith('index-school.html');
        const isIndexPage = currentPath.endsWith('index.html') || isSchoolPage || currentPath.endsWith('/') || currentPath === '';

        // Build navbar HTML
        let html = '<nav class="navbar" role="navigation" aria-label="Main navigation">';

        // Brand
        if (isIndexPage) {
            html += '<a href="#home" class="nav-brand">';
        } else {
            html += '<a href="' + pathPrefix + 'index.html#home" class="nav-brand">';
        }
        html += '<img src="' + pathPrefix + 'assets/img/logos/vidguicode-favicon.svg" alt="VidGuiCode" class="nav-brand-logo">';
        html += '<span>VIDGUICODE</span>';
        html += '</a>';

        // Nav Links (only on index / school page)
        html += '<div class="nav-links">';
        if (isIndexPage) {
            html += '<a href="#about" data-i18n="nav.about">About</a>';
            html += '<a href="#skills" data-i18n="nav.skills">Skills</a>';
            html += '<a href="#projects" data-i18n="nav.projects">Projects</a>';
            html += '<a href="#experience" data-i18n="nav.experience">Experience</a>';
            if (isSchoolPage) {
                html += '<a href="#reflection" data-i18n="nav.reflection">Reflection</a>';
            }
        }
        html += '</div>';

        // Nav Controls (section progress, search, language, theme)
        html += '<div class="nav-controls">';

        // Section progress (all pages)
        html += '<div class="nav-progress" aria-label="Page progress">';
        html += '<div class="nav-progress-bar"><span class="nav-progress-fill"></span></div>';
        html += '</div>';

        // Search button
        html += '<button id="search-toggle" class="icon-btn" aria-label="Search">';
        html += '<i data-lucide="search"></i>';
        html += '</button>';

        // Language switcher
        html += '<div class="lang-switcher">';
        html += '<button id="lang-toggle" class="icon-btn" aria-label="Change language">';
        html += '<i data-lucide="globe"></i>';
        html += '<span class="current-lang">EN</span>';
        html += '</button>';
        html += '<div class="lang-dropdown">';
        html += '<button data-lang="en"><span class="fi fi-gb" aria-hidden="true"></span>English</button>';
        html += '<button data-lang="pt"><span class="fi fi-pt" aria-hidden="true"></span>Português</button>';
        html += '<button data-lang="lu"><span class="fi fi-lu" aria-hidden="true"></span>Lëtzebuergesch</button>';
        html += '<button data-lang="de"><span class="fi fi-de" aria-hidden="true"></span>Deutsch</button>';
        html += '<button data-lang="fr"><span class="fi fi-fr" aria-hidden="true"></span>Français</button>';
        html += '</div>';
        html += '</div>';

        // Theme toggle
        html += '<button id="theme-toggle" class="icon-btn" aria-label="Toggle theme">';
        html += '<i data-lucide="sun" class="sun-icon"></i>';
        html += '<i data-lucide="moon" class="moon-icon"></i>';
        html += '</button>';

        html += '</div>'; // Close nav-controls
        html += '</nav>';

        // Insert navbar
        navbarContainer.innerHTML = html;

        // Re-initialize Lucide icons
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    // Render on DOM ready
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', renderNavbar);
    } else {
        renderNavbar();
    }
})();
