/**
 * Shared bootstrap for the project case-study pages.
 *
 * Replaces the hand-drifted inline init blocks that used to sit at the bottom
 * of every projects/project-*.html page. Load it after script.js:
 *
 *     <script src="../assets/js/project-page-init.js" defer></script>
 *
 * On DOMContentLoaded:
 *   1. Localises <title> / <meta name="description"> when <body> carries a
 *      data-meta-prefix (e.g. "project.rds.meta"), re-applying on language change.
 *   2. Renders the project category badges, reading the project id from
 *      #category-section[data-project-id].
 *   3. Initializes download cards and renders the inline icons.
 *   4. Connects image links to the shared viewer.
 */
(function () {
    'use strict';

    var POLL_INTERVAL_MS = 100;
    var MAX_WAIT_MS = 5000;
    var imageModalTrigger = null;

    /** Read the project id declared on #category-section. */
    function getProjectId() {
        var section = document.getElementById('category-section');
        if (!section || !section.dataset) return null;
        return section.dataset.projectId || null;
    }

    /**
     * Render the category badges once script.js and projects-data.js are ready.
     * Both are plain <script> includes, so they are normally available already;
     * the bounded poll is only a safety net for slow/odd load orders.
     */
    function initCategories() {
        var projectId = getProjectId();
        if (!projectId) return;

        var waited = 0;

        function attempt() {
            if (typeof window.updateProjectCategories === 'function' &&
                typeof getProjectById !== 'undefined') {
                window.updateProjectCategories(projectId);
                return;
            }
            waited += POLL_INTERVAL_MS;
            if (waited < MAX_WAIT_MS) {
                setTimeout(attempt, POLL_INTERVAL_MS);
            }
        }

        attempt();
    }

    /** icons.js is deferred, so renderIcons exists by DOMContentLoaded. */
    function initIcons() {
        if (typeof renderIcons !== 'undefined') {
            renderIcons();
        }
    }

    /** Add the shared icons to a card's heading and its link or pending status. */
    function initAssetCards() {
        function prependIcon(element, name) {
            var icon = document.createElement('i');
            icon.setAttribute('data-lucide', name);
            element.prepend(icon);
        }

        document.querySelectorAll('.asset-card[data-asset-icon]').forEach(function (card) {
            var heading = card.querySelector(':scope > h3');
            var action = card.querySelector(':scope > a, :scope > span');
            if (!heading || !action) return;
            prependIcon(heading, card.dataset.assetIcon);
            prependIcon(action, action.matches('a') ? 'download' : 'clock');
        });
    }

    /**
     * Localise the document title and meta description for pages whose
     * translation file provides <prefix>.title / <prefix>.desc keys.
     */
    function initMeta() {
        var prefix = document.body && document.body.dataset
            ? document.body.dataset.metaPrefix
            : null;
        if (!prefix || typeof t !== 'function') return;
        if (!t(prefix + '.title')) return;

        function applyMeta() {
            var title = t(prefix + '.title');
            if (title) document.title = title;

            var meta = document.querySelector('meta[name="description"]');
            if (meta) {
                var desc = t(prefix + '.desc');
                if (desc) meta.setAttribute('content', desc);
            }
        }

        applyMeta();

        if (typeof MutationObserver === 'function') {
            new MutationObserver(applyMeta).observe(document.documentElement, {
                attributes: true,
                attributeFilter: ['data-lang']
            });
        }
    }

    /** Open the full-size preview used by case-study figures. */
    window.openImageModal = function (imageSrc, imageAlt, trigger) {
        var modal = document.getElementById('image-modal');
        var modalImage = document.getElementById('modal-image');
        if (!modal || !modalImage) return;

        imageModalTrigger = trigger || document.activeElement;
        modalImage.src = imageSrc;
        modalImage.alt = imageAlt || '';
        modalImage.onerror = function () {
            console.error('Failed to load image:', imageSrc);
            modalImage.alt = 'Image failed to load';
        };

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
        var closeButton = modal.querySelector('.image-modal-close');
        if (closeButton) closeButton.focus();
    };

    window.closeImageModal = function (event) {
        if (event) event.stopPropagation();

        var modal = document.getElementById('image-modal');
        if (!modal) return;

        modal.classList.remove('active');
        document.body.style.overflow = '';
        if (imageModalTrigger) imageModalTrigger.focus({ preventScroll: true });
        imageModalTrigger = null;
    };

    /** Enhance image links while retaining direct links for new tabs and no-JS use. */
    function initImageModal() {
        var links = document.querySelectorAll('a.project-image-wrapper[href]');
        if (!links.length) return;

        document.body.insertAdjacentHTML('beforeend', `
            <div id="image-modal" class="image-modal" role="dialog" aria-modal="true" aria-label="Image preview">
                <button type="button" class="image-modal-close" aria-label="Close image">&times;</button>
                <img id="modal-image" class="image-modal-content" alt="">
            </div>
        `);
        var modal = document.getElementById('image-modal');

        var closeButton = modal.querySelector('.image-modal-close');
        links.forEach(function (link) {
            link.setAttribute('aria-haspopup', 'dialog');
            link.addEventListener('click', function (event) {
                if (event.defaultPrevented || event.button !== 0 || event.ctrlKey || event.metaKey || event.shiftKey || event.altKey) return;

                var image = link.querySelector('img');
                var caption = document.getElementById(link.getAttribute('aria-labelledby'));
                event.preventDefault();
                window.openImageModal(link.href, image?.alt || caption?.textContent.trim(), link);
            });
        });

        document.addEventListener('keydown', function (e) {
            if (!modal.classList.contains('active')) return;
            if (e.key === 'Escape') {
                window.closeImageModal();
            } else if (e.key === 'Tab' && closeButton) {
                e.preventDefault();
                closeButton.focus();
            }
        });

        modal.addEventListener('click', function (event) {
            if (event.target === modal || closeButton.contains(event.target)) {
                window.closeImageModal();
            }
        });
    }

    document.addEventListener('DOMContentLoaded', function () {
        initMeta();
        initCategories();
        initAssetCards();
        initIcons();
        initImageModal();
    });
})();
