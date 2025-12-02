document.addEventListener('DOMContentLoaded', () => {
    const themeToggle = document.getElementById('theme-toggle');
    const htmlElement = document.documentElement;
    const iconSun = document.querySelector('.sun-icon');
    const iconMoon = document.querySelector('.moon-icon');

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
            console.warn('Translations not loaded');
            return null;
        }
        
        const entry = translations[key];
        if (!entry) {
            console.warn(`Translation key not found: ${key}`);
            return null;
        }
        
        // Return translation for language, fallback to English
        return entry[lang] || entry['en'] || null;
    }

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
});
