/**
 * Certifications Tech Stack Badge Injector
 * Automatically replaces badge tokens in tech stacks with interactive badge elements.
 * 
 * Usage:
 * 1. Include certifications-data.js before this script
 * 2. In your tech stack HTML, use tokens like: badge-Azure-AZ900
 * 3. This script will replace them with clickable badge images
 */

(function() {
    'use strict';

    /**
     * Get translation helper - accesses translations object if available
     * @param {string} key - Translation key
     * @param {string} fallback - Fallback text
     * @returns {string} Translated text or fallback
     */
    function getTranslation(key, fallback) {
        if (typeof translations === 'undefined') return fallback;
        const entry = translations[key];
        if (!entry) return fallback;
        // Get current language from HTML element or default to 'en'
        const currentLang = document.documentElement.getAttribute('data-lang') || 
                           localStorage.getItem('lang') || 
                           'en';
        return entry[currentLang] || entry['en'] || fallback;
    }

    /**
     * Initialize badge injection on DOM load
     */
    function initBadgeInjection() {
        // Handle project certifications section
        const projectCertSections = document.querySelectorAll('.project-certifications');
        
        projectCertSections.forEach(section => {
            const placeholders = section.querySelectorAll('.cert-badge-placeholder');
            
            placeholders.forEach(placeholder => {
                const text = placeholder.textContent.trim();
                
                if (text.startsWith('badge-')) {
                    const cert = getCertificationByShortCode(text);
                    
                    if (cert) {
                        // Replace placeholder with badge element
                        const badgeElement = createProjectCertBadge(cert);
                        placeholder.replaceWith(badgeElement);
                    }
                }
            });
        });

        // Legacy: Handle tech stack list items (for backwards compatibility)
        const techStackItems = document.querySelectorAll('.tech-stack-list li');
        
        techStackItems.forEach(item => {
            const text = item.textContent.trim();
            
            // Check if this is a badge token
            if (text.startsWith('badge-')) {
                const cert = getCertificationByShortCode(text);
                
                if (cert) {
                    // Remove badge from tech stack (should not be there anymore)
                    item.remove();
                }
            }
        });
    }

    /**
     * Create badge HTML element for project certifications section (small badge style)
     * @param {object} cert - Certification object
     * @returns {HTMLElement} Badge element
     */
    function createProjectCertBadge(cert) {
        const badge = document.createElement('a');
        
        // Detect if we're in a subdirectory (like projects/)
        const isInSubdirectory = window.location.pathname.includes('/projects/');
        const pathPrefix = isInSubdirectory ? '../' : '';
        
        badge.href = `${pathPrefix}certifications.html#${cert.id}`;
        badge.className = 'project-cert-badge';
        badge.title = cert.name;
        badge.setAttribute('data-cert-id', cert.id);
        
        const img = document.createElement('img');
        // Adjust image path based on current location
        img.src = pathPrefix + cert.image;
        img.alt = cert.name;
        img.loading = 'lazy';
        
        // Use indexTitleKey for short name if available, otherwise fallback to name
        let shortName = cert.name;
        if (cert.indexTitleKey) {
            // Get short name from translations using indexTitleKey
            shortName = getTranslation(cert.indexTitleKey, cert.name);
        }
        
        const name = document.createElement('span');
        name.className = 'project-cert-name';
        name.textContent = shortName;
        
        badge.appendChild(img);
        badge.appendChild(name);
        
        return badge;
    }

    /**
     * Create badge HTML element (legacy - for tech stack)
     * @param {object} cert - Certification object
     * @returns {string} HTML string
     */
    function createBadgeElement(cert) {
        return `
            <a href="certifications.html#${cert.id}" 
               class="cert-badge-link" 
               title="${cert.name}"
               data-cert-id="${cert.id}">
                <img src="${cert.image}" 
                     alt="${cert.name}" 
                     class="cert-badge-img"
                     loading="lazy">
                <span class="cert-badge-name">${cert.name}</span>
            </a>
        `;
    }

    /**
     * Add badge-specific styles
     */
    function injectBadgeStyles() {
        const style = document.createElement('style');
        style.textContent = `
            .cert-badge-item {
                list-style: none !important;
                padding-left: 0 !important;
            }

            .cert-badge-link {
                display: flex;
                align-items: center;
                gap: 0.75rem;
                padding: 0.5rem;
                border-radius: 8px;
                text-decoration: none;
                color: var(--text-secondary);
                transition: all 0.3s ease;
                border: 1px solid transparent;
            }

            .cert-badge-link:hover {
                background: var(--surface-secondary);
                border-color: var(--accent-primary);
                color: var(--accent-primary);
                transform: translateX(4px);
            }

            .cert-badge-img {
                width: 48px;
                height: 48px;
                object-fit: contain;
                flex-shrink: 0;
            }

            .cert-badge-name {
                font-size: 0.95rem;
                font-weight: 500;
                line-height: 1.3;
            }

            /* Responsive adjustments */
            @media (max-width: 768px) {
                .cert-badge-img {
                    width: 40px;
                    height: 40px;
                }
                
                .cert-badge-name {
                    font-size: 0.9rem;
                }
            }
        `;
        document.head.appendChild(style);
    }

    // Initialize when DOM is ready
    function initialize() {
        injectBadgeStyles();
        initBadgeInjection();
        // Re-initialize Lucide icons after badge injection
        if (typeof lucide !== 'undefined') {
            lucide.createIcons();
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initialize);
    } else {
        initialize();
    }
})();
