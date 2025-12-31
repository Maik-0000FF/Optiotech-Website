// Optiotech Pricing Configuration
// Central pricing and discount management

const PRICING_CONFIG = {
    // Global Discount Configuration
    discount: {
        enabled: true,           // Set to false to disable all discounts
        label: {
            de: 'Launch-Rabatt',
            en: 'Launch Discount'
        }
    },

    // Product Prices (in USD) with exact discount prices
    products: {
        'velocity-accents': {
            originalPrice: 4.99,
            discountedPrice: 1.99,  // Exact price: $1.99 (60% off)
            discountPercentage: 60, // Display percentage
            currency: 'USD',
            symbol: '$',
            productName: {
                de: 'Velocity Accents',
                en: 'Velocity Accents'
            }
        },
        'velocity-snippets': {
            originalPrice: 9.99,
            discountedPrice: 4.99,  // Exact price: $4.99 (50% off)
            discountPercentage: 50, // Display percentage
            currency: 'USD',
            symbol: '$',
            productName: {
                de: 'Velocity Snippets',
                en: 'Velocity Snippets'
            }
        }
    }
};

// Pricing Helper Functions
const PricingHelper = {
    // Check if discount is currently active
    isDiscountActive() {
        return PRICING_CONFIG.discount.enabled;
    },

    // Get discounted price for a specific product
    calculateDiscountedPrice(productId) {
        const product = PRICING_CONFIG.products[productId];
        if (!product || !this.isDiscountActive()) return product.originalPrice;

        // Use exact discounted price if available, otherwise calculate
        return product.discountedPrice || product.originalPrice;
    },

    // Get price for a product
    getPrice(productId, withDiscount = true) {
        const product = PRICING_CONFIG.products[productId];
        if (!product) return null;

        const originalPrice = product.originalPrice;
        const currentPrice = withDiscount
            ? this.calculateDiscountedPrice(productId)
            : originalPrice;

        return {
            original: originalPrice,
            current: currentPrice,
            hasDiscount: this.isDiscountActive() && withDiscount,
            discountPercentage: product.discountPercentage,
            currency: product.currency,
            symbol: product.symbol
        };
    },

    // Format price for display
    formatPrice(price, symbol = '$') {
        return `${symbol}${price.toFixed(2)}`;
    },

    // Get discount label
    getDiscountLabel(lang = 'de') {
        return PRICING_CONFIG.discount.label[lang] || PRICING_CONFIG.discount.label.de;
    },

    // Get days until discount ends (only applicable if using time-limited discounts)
    getDaysUntilDiscountEnds() {
        // Not applicable for permanent discounts
        // If you want to add end dates, uncomment and configure:
        // const end = new Date('2025-12-31');
        // const now = new Date();
        // const diffTime = end - now;
        // return Math.ceil(diffTime / (1000 * 60 * 60 * 24));
        return null;
    }
};

// Auto-update all prices on page load
function updateAllPrices() {
    // Get current language from HTML lang attribute
    const lang = document.documentElement.lang || 'de';

    // Update all elements with data-product attribute
    document.querySelectorAll('[data-product]').forEach(element => {
        const productId = element.getAttribute('data-product');
        const priceType = element.getAttribute('data-price-type') || 'current';

        const priceData = PricingHelper.getPrice(productId);
        if (!priceData) return;

        // Update based on price type
        if (priceType === 'current') {
            element.textContent = PricingHelper.formatPrice(priceData.current, priceData.symbol);
        } else if (priceType === 'original') {
            element.textContent = PricingHelper.formatPrice(priceData.original, priceData.symbol);
        } else if (priceType === 'full') {
            // Full price display with discount badge
            if (priceData.hasDiscount) {
                element.innerHTML = `
                    <span class="price-original">${PricingHelper.formatPrice(priceData.original, priceData.symbol)}</span>
                    <span class="price-current">${PricingHelper.formatPrice(priceData.current, priceData.symbol)}</span>
                    <span class="price-badge">${priceData.discountPercentage}% ${PricingHelper.getDiscountLabel(lang)}</span>
                `;
            } else {
                element.textContent = PricingHelper.formatPrice(priceData.current, priceData.symbol);
            }
        }
    });

    // Update buy button texts
    document.querySelectorAll('[data-buy-button]').forEach(button => {
        const productId = button.getAttribute('data-buy-button');
        const priceData = PricingHelper.getPrice(productId);
        if (!priceData) return;

        const baseText = button.getAttribute('data-base-text') || (lang === 'de' ? 'Jetzt kaufen' : 'Buy Now');
        button.textContent = `${baseText} - ${PricingHelper.formatPrice(priceData.current, priceData.symbol)}`;
    });

    // Show discount banner if active
    if (PricingHelper.isDiscountActive()) {
        const discountBanners = document.querySelectorAll('[data-discount-banner]');

        discountBanners.forEach(banner => {
            const productId = banner.getAttribute('data-discount-banner');
            const product = PRICING_CONFIG.products[productId];

            if (product) {
                banner.textContent = `${product.discountPercentage}% ${PricingHelper.getDiscountLabel(lang)}`;
                banner.style.display = 'block';
            }
        });
    }
}

// Initialize on DOM ready
if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', updateAllPrices);
} else {
    updateAllPrices();
}
