// FAQ Accordion functionality
(function() {
    function initFAQ() {
        const faqItems = document.querySelectorAll('.faq-item');
        let activeItem = null;

        faqItems.forEach(item => {
            const question = item.querySelector('.faq-question');

            // Track initially active item
            if (item.classList.contains('active')) {
                activeItem = item;
            }

            function toggleFAQ() {
                const isActive = item.classList.contains('active');

                // Close previously active item (O(1) instead of O(n))
                if (activeItem && activeItem !== item) {
                    activeItem.classList.remove('active');
                    activeItem.querySelector('.faq-question').setAttribute('aria-expanded', 'false');
                }

                // Toggle current item
                if (isActive) {
                    item.classList.remove('active');
                    question.setAttribute('aria-expanded', 'false');
                    activeItem = null;
                } else {
                    item.classList.add('active');
                    question.setAttribute('aria-expanded', 'true');
                    activeItem = item;
                }
            }

            question.addEventListener('click', toggleFAQ);

            // Keyboard support for Enter and Space
            question.addEventListener('keydown', (e) => {
                if (e.key === 'Enter' || e.key === ' ') {
                    e.preventDefault();
                    toggleFAQ();
                }
            });
        });
    }

    if (document.readyState === 'loading') {
        document.addEventListener('DOMContentLoaded', initFAQ);
    } else {
        initFAQ();
    }
})();
