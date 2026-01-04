// Footer Component - Centralized footer management
(function() {
    const currentYear = new Date().getFullYear();
    const path = window.location.pathname;

    // Detect language from URL
    const isEnglish = path.includes('/en.html') ||
                      path.endsWith('-en.html') ||
                      path === '/privacy.html' ||
                      path === '/imprint.html';

    // Detect current section to exclude from links
    const isHome = path === '/' || path === '/index.html' || path === '/en.html';
    const isVelocityAccents = path.includes('/velocity-accents/');
    const isVelocitySnippets = path.includes('/velocity-snippets/');

    // Build navigation links based on current page
    function getNavLinks() {
        const links = [];

        if (!isHome) {
            links.push(isEnglish
                ? '<a href="/en.html">optiotech</a>'
                : '<a href="/">optiotech</a>'
            );
        }

        if (!isVelocityAccents) {
            links.push(isEnglish
                ? '<a href="/velocity-accents/en.html">Velocity Accents</a>'
                : '<a href="/velocity-accents/">Velocity Accents</a>'
            );
        }

        if (!isVelocitySnippets) {
            links.push(isEnglish
                ? '<a href="/velocity-snippets/en.html">Velocity Snippets</a>'
                : '<a href="/velocity-snippets/">Velocity Snippets</a>'
            );
        }

        return links.join('\n                ');
    }

    // Footer content based on language
    const footerContent = isEnglish ? {
        topText: 'Contact:',
        copyright: `Copyright © ${currentYear} Maik Bludovsky. All rights reserved.`,
        privacyLink: '/privacy.html',
        privacyText: 'Privacy Policy',
        imprintLink: '/imprint.html',
        imprintText: 'Legal Notice'
    } : {
        topText: 'Kontakt:',
        copyright: `Copyright © ${currentYear} Maik Bludovsky. Alle Rechte vorbehalten.`,
        privacyLink: '/datenschutz.html',
        privacyText: 'Datenschutz',
        imprintLink: '/impressum.html',
        imprintText: 'Impressum'
    };

    const footerHTML = `
        <div class="footer-container">
            <div class="footer-top">
                <p>${footerContent.topText} <a href="mailto:optiotech@web.de">optiotech@web.de</a></p>
            </div>
            <div class="footer-links">
                ${getNavLinks()}
            </div>
            <div class="footer-bottom">
                <p class="footer-copyright">${footerContent.copyright}</p>
                <div class="footer-legal">
                    <a href="${footerContent.privacyLink}">${footerContent.privacyText}</a>
                    <a href="${footerContent.imprintLink}">${footerContent.imprintText}</a>
                </div>
            </div>
        </div>
    `;

    function insertFooter() {
        const footer = document.querySelector('footer');
        if (footer && !footer.querySelector('.footer-container')) {
            footer.innerHTML = footerHTML;
        }
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', insertFooter);
    } else {
        insertFooter();
    }
})();
