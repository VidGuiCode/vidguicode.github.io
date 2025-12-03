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
     * Initialize badge injection on DOM load
     */
    function initBadgeInjection() {
        // Find all tech stack list items
        const techStackItems = document.querySelectorAll('.tech-stack-list li');
        
        techStackItems.forEach(item => {
            const text = item.textContent.trim();
            
            // Check if this is a badge token
            if (text.startsWith('badge-')) {
                const cert = getCertificationByShortCode(text);
                
                if (cert) {
                    // Replace the list item content with badge markup
                    item.innerHTML = createBadgeElement(cert);
                    item.classList.add('cert-badge-item');
                }
            }
        });
    }

    /**
     * Create badge HTML element
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
    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', () => {
            injectBadgeStyles();
            initBadgeInjection();
        });
    } else {
        injectBadgeStyles();
        initBadgeInjection();
    }
})();
