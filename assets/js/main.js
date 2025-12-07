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
    window.addEventListener('load', function() {
        const scrollPosition = sessionStorage.getItem('scrollPosition');
        if (scrollPosition) {
            setTimeout(() => {
                window.scrollTo(0, parseInt(scrollPosition));
                sessionStorage.removeItem('scrollPosition');
            }, 100);
        }
    });
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
    let ticking = false;

    function updateHeaderVisibility() {
        const scrollTop = window.pageYOffset || document.documentElement.scrollTop;

        // Don't hide if menu is open
        if (mobileNavOverlay.classList.contains('active')) {
            ticking = false;
            return;
        }

        // Show header at top of page
        if (scrollTop < scrollThreshold) {
            header.classList.remove('header-hidden');
        }
        // Hide on scroll down, show on scroll up
        else if (scrollTop > lastScrollTop) {
            header.classList.add('header-hidden');
        } else {
            header.classList.remove('header-hidden');
        }

        lastScrollTop = scrollTop <= 0 ? 0 : scrollTop;
        ticking = false;
    }

    window.addEventListener('scroll', function() {
        if (!ticking) {
            window.requestAnimationFrame(updateHeaderVisibility);
            ticking = true;
        }
    });
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
