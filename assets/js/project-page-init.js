/**
 * Shared bootstrap for the project case-study pages.
 *
 * Replaces the hand-drifted inline init blocks that used to sit at the bottom
 * of every projects/project-*.html page. Load it after script.js:
 *
 *     <script src="../assets/js/project-page-init.js" defer></script>
 *
 * It does three things on DOMContentLoaded:
 *   1. Localises <title> / <meta name="description"> when <body> carries a
 *      data-meta-prefix (e.g. "project.rds.meta"), re-applying on language change.
 *   2. Renders the project category badges, reading the project id from
 *      #category-section[data-project-id].
 *   3. Renders the inline icons (icons.js is loaded with defer, so renderIcons
 *      is available by DOMContentLoaded).
 *   4. Provides the shared image-modal open/close helpers (window.openImageModal
 *      / window.closeImageModal) that the case-study figure markup calls.
 */
(function () {
    'use strict';

    var POLL_INTERVAL_MS = 100;
    var MAX_WAIT_MS = 5000;

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

    /**
     * Image modal: open/close the full-size preview used by case-study figures.
     *
     * These two functions stay global because the markup wires them up with
     * inline onclick attributes. They used to be copy-pasted into eight project
     * pages with small behavioural drift, so this is the union of all variants:
     * a broken image is reported instead of failing silently, and clicking the
     * enlarged image itself no longer closes the modal.
     */
    window.openImageModal = function (imageSrc, imageAlt) {
        var modal = document.getElementById('image-modal');
        var modalImage = document.getElementById('modal-image');
        if (!modal || !modalImage) return;

        modalImage.src = imageSrc;
        modalImage.alt = imageAlt || '';
        modalImage.onerror = function () {
            console.error('Failed to load image:', imageSrc);
            modalImage.alt = 'Image failed to load';
        };

        modal.classList.add('active');
        document.body.style.overflow = 'hidden';
    };

    window.closeImageModal = function (event) {
        if (event) event.stopPropagation();

        var modal = document.getElementById('image-modal');
        if (!modal) return;

        modal.classList.remove('active');
        document.body.style.overflow = '';
    };

    /** Escape closes the modal; a click on the image itself does not. */
    function initImageModal() {
        document.addEventListener('keydown', function (e) {
            if (e.key !== 'Escape') return;
            var modal = document.getElementById('image-modal');
            if (modal && modal.classList.contains('active')) {
                window.closeImageModal();
            }
        });

        var modalImage = document.getElementById('modal-image');
        if (modalImage) {
            modalImage.addEventListener('click', function (e) {
                e.stopPropagation();
            });
        }
    }

    document.addEventListener('DOMContentLoaded', function () {
        initMeta();
        initCategories();
        initIcons();
        initImageModal();
    });
})();
