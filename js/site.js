/* Cosmik Studios — shared site script (nav, scroll reveal, lightbox) */
(function () {
    'use strict';

    var reducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;

    /* ---------- Mobile navigation ---------- */
    var toggle = document.querySelector('.mobile-nav-toggle');
    var nav = document.getElementById('main-nav');

    function closeNav() {
        nav.classList.remove('active');
        toggle.setAttribute('aria-expanded', 'false');
    }

    if (toggle && nav) {
        toggle.setAttribute('aria-expanded', 'false');
        toggle.setAttribute('aria-controls', 'main-nav');
        toggle.addEventListener('click', function () {
            var open = nav.classList.toggle('active');
            toggle.setAttribute('aria-expanded', open ? 'true' : 'false');
        });
        nav.addEventListener('click', function (e) {
            if (e.target.closest('a')) closeNav();
        });
        document.addEventListener('keydown', function (e) {
            if (e.key === 'Escape' && nav.classList.contains('active')) {
                closeNav();
                toggle.focus();
            }
        });
    }

    /* ---------- Scroll reveal ---------- */
    var revealElements = document.querySelectorAll(
        '.section-header, .card, .faq-item, .contact-card, .game-panel, ' +
        '.community-card, .dz-pitch-text, .dz-gallery-item, .dz-phase-card'
    );

    if (revealElements.length) {
        if ('IntersectionObserver' in window && !reducedMotion) {
            var revealObserver = new IntersectionObserver(function (entries) {
                entries.forEach(function (entry) {
                    if (!entry.isIntersecting) return;
                    var parent = entry.target.closest('.features-grid, .faq-list, .community-grid, .dz-mechanics-grid');
                    if (parent) {
                        var idx = Array.prototype.indexOf.call(parent.children, entry.target);
                        entry.target.style.transitionDelay = (idx * 0.1) + 's';
                    }
                    entry.target.classList.add('revealed');
                    revealObserver.unobserve(entry.target);
                });
            }, { threshold: 0.1, rootMargin: '0px 0px -50px 0px' });
            revealElements.forEach(function (el) { revealObserver.observe(el); });
        } else {
            revealElements.forEach(function (el) { el.classList.add('revealed'); });
        }
    }

    /* ---------- Lightbox ---------- */
    var galleryImages = document.querySelectorAll('.screenshot-item img, .dz-gallery-item img');
    if (!galleryImages.length) return;

    var currentIndex = 0;
    var isAnimating = false;
    var lastFocused = null;

    var lightbox = document.createElement('div');
    lightbox.className = 'lightbox';
    lightbox.innerHTML =
        '<button class="lightbox-nav lightbox-prev" aria-label="Previous image">&#8249;</button>' +
        '<div class="lightbox-content">' +
        '    <button class="lightbox-close" aria-label="Close lightbox">&times;</button>' +
        '    <img src="" alt="Image preview">' +
        '</div>' +
        '<button class="lightbox-nav lightbox-next" aria-label="Next image">&#8250;</button>' +
        '<div class="lightbox-counter"></div>';
    document.body.appendChild(lightbox);

    var lbImg = lightbox.querySelector('.lightbox-content img');
    var lbClose = lightbox.querySelector('.lightbox-close');
    var lbPrev = lightbox.querySelector('.lightbox-prev');
    var lbNext = lightbox.querySelector('.lightbox-next');
    var lbCounter = lightbox.querySelector('.lightbox-counter');

    // currentSrc resolves the WebP the browser actually picked from <picture>,
    // so the lightbox never re-downloads the multi-MB PNG fallback.
    function sources() {
        return Array.prototype.map.call(galleryImages, function (img) {
            return img.currentSrc || img.src;
        });
    }

    function show(index) {
        var srcs = sources();
        currentIndex = index;
        lbImg.src = srcs[currentIndex];
        lbCounter.textContent = (currentIndex + 1) + ' / ' + srcs.length;
    }

    function openLightbox(index) {
        lastFocused = document.activeElement;
        show(index);
        lightbox.classList.add('active');
        document.body.style.overflow = 'hidden';
        lbClose.focus();
    }

    function closeLightbox() {
        lightbox.classList.add('closing');
        lightbox.classList.remove('active');
        document.body.style.overflow = '';
        setTimeout(function () { lightbox.classList.remove('closing'); }, 400);
        if (lastFocused) lastFocused.focus();
    }

    function changeImage(newIndex, direction) {
        if (isAnimating) return;
        if (reducedMotion) { show(newIndex); return; }
        isAnimating = true;
        lbImg.classList.add('transitioning');
        setTimeout(function () {
            show(newIndex);
            lbImg.classList.remove('transitioning');
            lbImg.classList.add(direction === 'next' ? 'slide-left' : 'slide-right');
            setTimeout(function () {
                lbImg.classList.remove('slide-left', 'slide-right');
                isAnimating = false;
            }, 350);
        }, 150);
    }

    function nextImage() { changeImage((currentIndex + 1) % galleryImages.length, 'next'); }
    function prevImage() { changeImage((currentIndex - 1 + galleryImages.length) % galleryImages.length, 'prev'); }

    galleryImages.forEach(function (img, index) {
        var item = img.closest('.screenshot-item, .dz-gallery-item');
        if (!item) return;
        item.style.cursor = 'pointer';
        item.addEventListener('click', function () { openLightbox(index); });
    });

    lbClose.addEventListener('click', closeLightbox);
    lbPrev.addEventListener('click', prevImage);
    lbNext.addEventListener('click', nextImage);
    lightbox.addEventListener('click', function (e) {
        if (e.target === lightbox) closeLightbox();
    });

    document.addEventListener('keydown', function (e) {
        if (!lightbox.classList.contains('active')) return;
        if (e.key === 'Escape') closeLightbox();
        if (e.key === 'ArrowRight') nextImage();
        if (e.key === 'ArrowLeft') prevImage();
    });

    var touchStartX = 0;
    lightbox.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
    }, { passive: true });
    lightbox.addEventListener('touchend', function (e) {
        var diff = touchStartX - e.changedTouches[0].screenX;
        if (Math.abs(diff) > 50) {
            if (diff > 0) nextImage();
            else prevImage();
        }
    }, { passive: true });
})();
