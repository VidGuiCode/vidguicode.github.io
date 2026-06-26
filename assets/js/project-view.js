/**
 * Project case-study "two-lens" view toggle.
 * Switches the page between Overview (plain-English, scannable) and
 * Technical (full depth) by setting body[data-view]. CSS in styles.css
 * shows/hides .plain-only / .tech-only accordingly. The choice is
 * remembered in localStorage so recruiters land on Overview and
 * engineers flip once.
 *
 * Markup contract:
 *   <body data-view="overview">            (default, avoids content flash)
 *   <button data-view-btn="overview">…</button>
 *   <button data-view-btn="technical">…</button>
 */
(function () {
    'use strict';

    function setView(view) {
        if (view !== 'overview' && view !== 'technical') view = 'overview';
        document.body.setAttribute('data-view', view);
        try { localStorage.setItem('projectView', view); } catch (e) { /* ignore */ }

        var buttons = document.querySelectorAll('[data-view-btn]');
        for (var i = 0; i < buttons.length; i++) {
            var on = buttons[i].getAttribute('data-view-btn') === view;
            buttons[i].classList.toggle('active', on);
            buttons[i].setAttribute('aria-pressed', on ? 'true' : 'false');
        }
    }

    function init() {
        var saved = 'overview';
        try { saved = localStorage.getItem('projectView') || 'overview'; } catch (e) { /* ignore */ }
        setView(saved);

        var buttons = document.querySelectorAll('[data-view-btn]');
        for (var i = 0; i < buttons.length; i++) {
            (function (btn) {
                btn.addEventListener('click', function () {
                    setView(btn.getAttribute('data-view-btn'));
                });
            })(buttons[i]);
        }
    }

    window.setProjectView = setView;

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', init);
    } else {
        init();
    }
})();
