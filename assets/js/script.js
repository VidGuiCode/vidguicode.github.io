document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;

    const CV_OPEN_FLAG = 'openCvModal';
    
    // Check for reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    // ==========================================
    // THEME MANAGEMENT
    // ==========================================
    
    // Check for saved theme preference or system preference
    const savedTheme = localStorage.getItem('theme');
    const systemTheme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
    
    // Apply initial theme
    if (savedTheme) {
        htmlElement.setAttribute('data-theme', savedTheme);
    } else {
        htmlElement.setAttribute('data-theme', systemTheme);
    }

    // Toggle Theme Function
    themeToggle.addEventListener('click', () => {
        const currentTheme = htmlElement.getAttribute('data-theme');
        const newTheme = currentTheme === 'dark' ? 'light' : 'dark';
        
        htmlElement.setAttribute('data-theme', newTheme);
        localStorage.setItem('theme', newTheme);
        
        // Add a small animation effect to the button
        themeToggle.style.transform = 'scale(0.95)';
        setTimeout(() => {
            themeToggle.style.transform = 'scale(1)';
        }, 100);
    });

    // ==========================================
    // LANGUAGE / i18n MANAGEMENT
    // ==========================================
    
    const langButtons = document.querySelectorAll('.lang-dropdown button[data-lang]');
    const currentLangDisplay = document.querySelector('.current-lang');
    const defaultLang = 'en';
    
    // Get saved language or default
    const savedLang = localStorage.getItem('lang') || defaultLang;
    
    // Apply language on page load
    setLanguage(savedLang);
    
    // Language button click handlers
    langButtons.forEach(btn => {
        btn.addEventListener('click', () => {
            const lang = btn.getAttribute('data-lang');
            setLanguage(lang);
            localStorage.setItem('lang', lang);
        });
    });

    // ==========================================
    // CV DROPDOWN
    // ==========================================

    const cvDropdown = document.querySelector('.cv-dropdown');
    const cvToggle = document.querySelector('.cv-dropdown-toggle');
    const cvMenu = document.querySelector('.cv-dropdown-menu');
    const cvModal = document.getElementById('cv-modal');
    const cvModalOverlay = document.getElementById('cv-modal-overlay');
    const cvModalClose = document.getElementById('cv-modal-close');
    const cvModalList = document.getElementById('cv-modal-list');

    window.openCvDownload = function() {
        const isInSubdirectory = window.location.pathname.includes('/projects/') || window.location.pathname.includes('/certifications/');
        const pathPrefix = isInSubdirectory ? '../' : '';

        if (typeof window.openCvModal === 'function') {
            window.openCvModal();
            return;
        }

        try {
            localStorage.setItem(CV_OPEN_FLAG, '1');
        } catch (_) {
            // ignore
        }

        window.location.href = pathPrefix + 'index.html#contact';
    };

    if (cvDropdown && cvToggle && cvMenu) {
        const shouldUseCvModal = () => {
            if (!cvModal) return false;
            return true;
        };

        const closeCvModal = () => {
            if (!cvModal) return;
            cvModal.classList.remove('active');
            cvModal.setAttribute('aria-hidden', 'true');
            cvToggle.setAttribute('aria-expanded', 'false');
        };

        const openCvModal = () => {
            if (!cvModal) return;
            if (cvModalList) {
                cvModalList.innerHTML = cvMenu.innerHTML;
            }
            closeCvDropdown();
            cvModal.classList.add('active');
            cvModal.setAttribute('aria-hidden', 'false');
            cvToggle.setAttribute('aria-expanded', 'true');
        };

        const closeCvDropdown = () => {
            cvDropdown.classList.remove('open');
            cvToggle.setAttribute('aria-expanded', 'false');
            cvMenu.setAttribute('aria-hidden', 'true');
        };

        const openCvDropdown = () => {
            cvDropdown.classList.add('open');
            cvToggle.setAttribute('aria-expanded', 'true');
            cvMenu.setAttribute('aria-hidden', 'false');
        };

        cvToggle.addEventListener('click', (event) => {
            event.stopPropagation();
            if (shouldUseCvModal()) {
                if (cvModal.classList.contains('active')) {
                    closeCvModal();
                } else {
                    openCvModal();
                }
                return;
            }
            if (cvDropdown.classList.contains('open')) {
                closeCvDropdown();
            } else {
                openCvDropdown();
            }
        });

        document.addEventListener('click', (event) => {
            if (cvModal && cvModal.classList.contains('active')) {
                if (cvModalOverlay && (event.target === cvModalOverlay || cvModalOverlay.contains(event.target))) {
                    closeCvModal();
                    return;
                }
                if (!cvModal.contains(event.target) && !cvToggle.contains(event.target)) {
                    closeCvModal();
                    return;
                }
            }
            if (!cvDropdown.contains(event.target)) {
                closeCvDropdown();
            }
        });

        document.addEventListener('keydown', (event) => {
            if (event.key === 'Escape') {
                closeCvDropdown();
                closeCvModal();
            }
        });

        if (cvModalList) {
            cvModalList.addEventListener('click', (event) => {
                const link = event.target.closest('a');
                if (link) {
                    closeCvModal();
                }
            });
        }

        if (cvModalClose) {
            cvModalClose.addEventListener('click', (event) => {
                event.preventDefault();
                closeCvModal();
            });
        }

        window.openCvModal = openCvModal;
        window.closeCvModal = closeCvModal;
    }

    try {
        if (localStorage.getItem(CV_OPEN_FLAG) === '1') {
            localStorage.removeItem(CV_OPEN_FLAG);
            if (typeof window.openCvModal === 'function') {
                window.openCvModal();
            }
        }
    } catch (_) {
        // ignore
    }
    
    /**
     * Set the page language and update all translatable elements
     * @param {string} lang - Language code (en, pt, lu, de, fr)
     */
    function setLanguage(lang) {
        // Update HTML lang attribute
        htmlElement.setAttribute('lang', lang);
        htmlElement.setAttribute('data-lang', lang);
        
        // Update current language display
        if (currentLangDisplay) {
            currentLangDisplay.textContent = lang.toUpperCase();
        }
        
        // Update active state on dropdown buttons
        langButtons.forEach(btn => {
            btn.classList.toggle('active', btn.getAttribute('data-lang') === lang);
        });
        
        // Translate all elements with data-i18n attribute
        document.querySelectorAll('[data-i18n]').forEach(element => {
            const key = element.getAttribute('data-i18n');
            const translation = getTranslation(key, lang);
            
            if (translation) {
                // Check if element should use innerHTML (for elements with <strong> tags)
                if (element.hasAttribute('data-i18n-html')) {
                    element.innerHTML = translation;
                } else {
                    element.textContent = translation;
                }
            }
        });
        
        // Translate all title attributes with data-i18n-title
        document.querySelectorAll('[data-i18n-title]').forEach(element => {
            const key = element.getAttribute('data-i18n-title');
            const translation = getTranslation(key, lang);
            
            if (translation) {
                element.setAttribute('title', translation);
            }
        });
        
        // Translate all placeholder attributes with data-i18n-placeholder
        document.querySelectorAll('[data-i18n-placeholder]').forEach(element => {
            const key = element.getAttribute('data-i18n-placeholder');
            const translation = getTranslation(key, lang);
            
            if (translation) {
                element.setAttribute('placeholder', translation);
            }
        });
        
        // Update category badges when language changes
        if (typeof updateProjectCategories === 'function') {
            // updateProjectCategories will auto-detect projectId from the page
            updateProjectCategories(null, lang);
        }
        
        // Update filter modal category labels when language changes
        if (typeof updateCategoryFilterLabels === 'function') {
            updateCategoryFilterLabels(lang);
        }
    }
    
    /**
     * Get translation for a key in the specified language
     * @param {string} key - Translation key (e.g., "nav.about")
     * @param {string} lang - Language code
     * @returns {string|null} - Translated string or null if not found
     */
    function getTranslation(key, lang) {
        // Check if translations object exists (loaded from translations.js)
        if (typeof translations === 'undefined') {
            return null;
        }
        
        const entry = translations[key];
        if (!entry) {
            return null;
        }
        
        // Return translation for language, fallback to English
        return entry[lang] || entry['en'] || null;
    }
    
    /**
     * Centralized function to display project categories with translations
     * Updates dynamically when language changes
     * @param {string} projectId - Project ID from projects-data.js
     * @param {string} lang - Current language code
     */
    window.updateProjectCategories = function(projectId, lang) {
        // If lang is not provided, get it from the document
        if (!lang) {
            lang = document.documentElement.getAttribute('data-lang') || 'en';
        }
        
        // If projectId is not provided, try to find it from the page
        if (!projectId) {
            // Try to get project ID from the page context
            const categorySection = document.getElementById('category-section');
            if (categorySection && categorySection.dataset.projectId) {
                projectId = categorySection.dataset.projectId;
            } else {
                // Fallback: try to detect from URL or page context
                const path = window.location.pathname;
                if (path.includes('project-homelab')) projectId = 'homelab';
                else if (path.includes('project-pif')) projectId = 'pif';
                else if (path.includes('project-cylro')) projectId = 'cylro';
                else if (path.includes('project-gradingdino')) projectId = 'gradingdino';
                else {
                    // If we can't determine project, don't hide the section - just return
                    return;
                }
            }
        }
        
        if (typeof getProjectById === 'undefined' || typeof getTranslation === 'undefined') {
            // Retry after a short delay if dependencies aren't loaded
            setTimeout(() => updateProjectCategories(projectId, lang), 100);
            return;
        }
        
        const project = getProjectById(projectId);
        const categorySection = document.getElementById('category-section');
        const categoriesContainer = document.getElementById('project-categories');
        
        if (!project) {
            // Project not found - hide section
            if (categorySection) categorySection.style.display = 'none';
            return;
        }
        
        if (!categorySection || !categoriesContainer) {
            // Elements not found - might not be on a project page
            return;
        }
        
        // Store project ID for future updates
        categorySection.dataset.projectId = projectId;
        
        // Get all categories for this project
        const projectCategories = project.categories || (project.category ? [project.category] : []);
        const projectCategoryKeys = project.categoryKeys || (project.categoryKey ? [project.categoryKey] : []);
        
        // Hide section if no categories
        if (!projectCategories || projectCategories.length === 0) {
            categorySection.style.display = 'none';
            return;
        }
        
        // Show section and render categories
        categorySection.style.display = 'block';
        categoriesContainer.innerHTML = '';
        
        // Detect if we're in a subdirectory (like projects/)
        const isInSubdirectory = window.location.pathname.includes('/projects/');
        const pathPrefix = isInSubdirectory ? '../' : '';
        
        projectCategories.forEach((category, index) => {
            // Create category badge similar to certification badges
            const categoryBadge = document.createElement('a');
            const categorySlug = category.toLowerCase().replace(/\s+/g, '');
            categoryBadge.href = pathPrefix + 'projects.html?category=' + encodeURIComponent(categorySlug);
            categoryBadge.className = 'project-cert-badge';
            categoryBadge.style.cssText = 'text-decoration: none; display: inline-flex; align-items: center; gap: 0.5rem; margin-right: 0.75rem; margin-bottom: 0.5rem;';
            
            // Create badge text with translation
            const badgeText = document.createElement('span');
            badgeText.className = 'project-cert-name';
            
            const categoryKey = projectCategoryKeys[index];
            if (categoryKey && typeof getTranslation !== 'undefined') {
                badgeText.textContent = getTranslation(categoryKey, lang) || category;
            } else if (category) {
                badgeText.textContent = category;
            }
            
            categoryBadge.appendChild(badgeText);
            categoriesContainer.appendChild(categoryBadge);
        });
    };
    
    /**
     * Update category filter modal labels when language changes
     * @param {string} lang - Current language code
     */
    window.updateCategoryFilterLabels = function(lang) {
        if (!lang) {
            lang = document.documentElement.getAttribute('data-lang') || 'en';
        }
        
        // Find all category filter labels
        const filterLabels = document.querySelectorAll('#category-filter-options label[data-category-key]');
        
        filterLabels.forEach(label => {
            const categoryKey = label.getAttribute('data-category-key');
            const categoryName = label.getAttribute('data-category-name');
            
            if (categoryKey && typeof getTranslation !== 'undefined') {
                // Get translated name
                const translatedName = getTranslation(categoryKey, lang) || categoryName;
                
                // Preserve the count if it exists
                const countElement = label.querySelector('.category-count');
                const countText = countElement ? countElement.textContent : '';
                
                // Update label text
                label.textContent = translatedName;
                
                // Re-add count if it existed
                if (countText) {
                    const count = document.createElement('span');
                    count.className = 'category-count';
                    count.style.cssText = 'color: var(--text-secondary); font-size: 0.8rem; margin-left: auto;';
                    count.textContent = countText;
                    label.appendChild(count);
                }
            }
        });
    };

    // Smooth scrolling for anchor links
    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', function (e) {
            e.preventDefault();
            
            const targetId = this.getAttribute('href');
            if (targetId === '#') return;
            
            const targetElement = document.querySelector(targetId);
            if (targetElement) {
                // Account for fixed header
                const headerOffset = 80;
                const elementPosition = targetElement.getBoundingClientRect().top;
                const offsetPosition = elementPosition + window.pageYOffset - headerOffset;
        
                window.scrollTo({
                    top: offsetPosition,
                    behavior: "smooth"
                });
            }
        });
    });

    // Intersection Observer for "Power On" animations
    // Skip animations if user prefers reduced motion
    if (!prefersReducedMotion) {
        const observerOptions = {
            threshold: 0.1,
            rootMargin: "0px"
        };

        const powerOnObserver = new IntersectionObserver((entries) => {
            entries.forEach(entry => {
                if (entry.isIntersecting) {
                    entry.target.classList.add('powered-on');
                    powerOnObserver.unobserve(entry.target);
                }
            });
        }, observerOptions);

        // Target all cards and node-cards
        document.querySelectorAll('.card, .node-card').forEach((card) => {
            // Immediately power-on elements already visible in viewport on load
            const rect = card.getBoundingClientRect();
            if (rect.top < window.innerHeight && rect.bottom > 0) {
                card.classList.add('powered-on');
            } else {
                powerOnObserver.observe(card);
            }
        });
            } else {
        // If reduced motion, immediately show all cards
        document.querySelectorAll('.card, .node-card').forEach((card) => {
            card.classList.add('powered-on');
        });
    }
    
    // Initialize Lucide icons after DOM is ready
    if (typeof lucide !== 'undefined') {
        lucide.createIcons();
    } else {
        // Wait for Lucide to load
        window.addEventListener('load', () => {
            if (typeof lucide !== 'undefined') {
                lucide.createIcons();
            }
        });
    }

    // ==========================================
    // SECTION PROGRESS (index navbar)
    // ==========================================
    const progressFill = document.querySelector('.nav-progress-fill');
    const sections = Array.from(document.querySelectorAll('main section[id]'));

    const updateNavOffset = () => {
        const navbar = document.querySelector('.navbar');
        if (!navbar) return;
        const offset = navbar.offsetHeight + 12;
        document.documentElement.style.setProperty('--nav-offset', navbar.offsetHeight + 'px');
        document.documentElement.style.setProperty('--nav-offset-gap', offset + 'px');
        sections.forEach(section => {
            section.style.scrollMarginTop = offset + 'px';
        });
    };

    if (progressFill) {
        
        const updateProgress = () => {
            const scrollTop = window.scrollY || document.documentElement.scrollTop;
            const docHeight = document.documentElement.scrollHeight - window.innerHeight;
            const progress = docHeight > 0 ? (scrollTop / docHeight) * 100 : 0;
            const clamped = Math.min(100, Math.max(0, progress));
            progressFill.style.setProperty('--scroll-progress', clamped + '%');
        };

        updateNavOffset();
        updateProgress();
        window.addEventListener('scroll', updateProgress, { passive: true });
        window.addEventListener('resize', () => {
            updateNavOffset();
            updateProgress();
        });
    } else {
        updateNavOffset();
        window.addEventListener('resize', updateNavOffset);
    }

    const scrollToHash = (hash, smooth) => {
        if (!hash) return;
        const target = document.querySelector(hash);
        const navbar = document.querySelector('.navbar');
        if (!target || !navbar) return;
        const offset = navbar.offsetHeight + 12;
        const top = target.getBoundingClientRect().top + window.pageYOffset - offset;
        window.scrollTo({ top, behavior: smooth ? 'smooth' : 'auto' });
    };

    const applyHashOffset = () => {
        if (!window.location.hash) return;
        scrollToHash(window.location.hash, false);
    };

    document.addEventListener('click', (event) => {
        const link = event.target.closest('a[href^="#"]');
        if (!link) return;
        const hash = link.getAttribute('href');
        if (!hash || hash === '#') return;
        if (!document.querySelector(hash)) return;
        event.preventDefault();
        history.pushState(null, '', hash);
        scrollToHash(hash, true);
    });

    window.addEventListener('hashchange', applyHashOffset);
    setTimeout(applyHashOffset, 0);
});
