// Optiotech Website - Main JavaScript
// Reusable functions for all pages

// Language Switch - Save preference and preserve scroll position
function initLanguageSwitch() {
    document.querySelectorAll('.lang-switch').forEach(link => {
        link.addEventListener('click', function(e) {
            e.preventDefault();
            const targetLang = this.textContent.trim().toLowerCase();
            localStorage.setItem('preferredLanguage', targetLang);
            sessionStorage.setItem('scrollPosition', window.pageYOffset);
            window.location.href = this.getAttribute('href');
        });
    });
}

// Restore scroll position after language switch
function restoreScrollPosition() {
    function doRestore() {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(scrollPosition));
                sessionStorage.removeItem('scrollPosition');
            }, 100);
        }
    }

    // Check if page is already loaded to avoid race condition
    if (document.readyState === 'complete') {
        doRestore();
    } else {
        window.addEventListener('load', doRestore);
    }
}

// Hamburger Menu Toggle & Hide-on-Scroll Header
function initHamburgerMenu() {
    const hamburger = document.getElementById('hamburger');
    const mobileNavOverlay = document.getElementById('mobileNavOverlay');
    const mobileNavLinks = document.querySelectorAll('.mobile-nav a');
    const header = document.querySelector('header');

    if (!hamburger || !mobileNavOverlay || !header) return;

    // Toggle menu
    function toggleMenu() {
        hamburger.classList.toggle('active');
        mobileNavOverlay.classList.toggle('active');
        document.body.style.overflow = mobileNavOverlay.classList.contains('active') ? 'hidden' : '';
    }

    // Open/close menu on hamburger click
    hamburger.addEventListener('click', toggleMenu);

    // Close menu when clicking overlay
    mobileNavOverlay.addEventListener('click', function(e) {
        if (e.target === mobileNavOverlay) {
            toggleMenu();
        }
    });

    // Close menu when clicking any link
    mobileNavLinks.forEach(link => {
        link.addEventListener('click', toggleMenu);
    });

    // Close menu on ESC key
    document.addEventListener('keydown', function(e) {
        if (e.key === 'Escape' && mobileNavOverlay.classList.contains('active')) {
            toggleMenu();
        }
    });

    // Hide-on-Scroll Header
    let lastScrollTop = 0;
    const scrollThreshold = 100;
    const scrollDelta = 10; // Minimum scroll distance to trigger hide/show
    let ticking = false;

    function updateHeaderVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Don't hide if menu is open
        if (mobileNavOverlay.classList.contains('active')) {
            ticking = false;
            return;
        }

        // Calculate scroll difference
        const scrollDiff = Math.abs(scrollTop - lastScrollTop);

        // Show header at top of page
        if (scrollTop < scrollThreshold) {
            header.classList.remove('header-hidden');
        }
        // Only trigger hide/show if scrolled more than delta (reduces jitter)
        else if (scrollDiff > scrollDelta) {
            // Hide on scroll down, show on scroll up
            if (scrollTop > lastScrollTop) {
                header.classList.add('header-hidden');
            } else {
                header.classList.remove('header-hidden');
            }
            lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        }

        ticking = false;
    }

    // Use passive event listener for better iOS scroll performance
    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeaderVisibility);
            ticking = true;
        }
    }, { passive: true });
}

// Initialize all common functionality
function initCommon() {
    initLanguageSwitch();
    restoreScrollPosition();
    initHamburgerMenu();
}

// Auto-initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', initCommon);
} else {
    initCommon();
}
