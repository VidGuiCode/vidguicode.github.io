/**
 * Shared i18n helper — single translation function for all pages.
 * Load after translations/core.js (and any per-page translation file).
 */
(function() {
    'use strict';

    window.getCurrentLang = function() {
        return document.documentElement.getAttribute('data-lang') ||
               localStorage.getItem('lang') || 'en';
    };

    window.t = function(key, fallback) {
        if (typeof translations === 'undefined') return fallback || null;
        var entry = translations[key];
        if (!entry) return fallback || null;
        var lang = window.getCurrentLang();
        var value = entry[lang] || entry['en'] || fallback || null;
        if (value && value.indexOf('{year}') !== -1) {
            value = value.replace('{year}', new Date().getFullYear());
        }
        return value;
    };
})();
