# optiotech Website

Official website for optiotech - Productivity Tools for macOS

## Live Site

- **Production:** [optiotech.de](https://optiotech.de)
- **GitHub Pages:** [Maik-0000FF.github.io/Optiotech-Website](https://Maik-0000FF.github.io/Optiotech-Website)

## Structure

```
optiotech-website/
├── index.html                  # Main company page
├── velocity-accents/
│   └── index.html             # Velocity Accents product page
├── assets/
│   ├── css/
│   │   └── style.css          # Responsive, dark mode-aware styles
│   └── images/
│       └── velocity-accents-icon.png
└── CNAME                      # Custom domain configuration
```

## Products

### Velocity Accents
PowerToys Quick Accent for macOS - Type accented characters instantly with zero lag.

- **Price:** $9.99
- **Platform:** macOS 14.0+
- **Link:** [optiotech.de/velocity-accents](https://optiotech.de/velocity-accents)

## Development

The website is built with vanilla HTML/CSS, no build process required.

**Local Development:**
```bash
# Clone repository
git clone https://github.com/Maik-0000FF/Optiotech-Website.git
cd Optiotech-Website

# Open in browser
open index.html

# Or use a local server
python3 -m http.server 8000
```

## Custom Domain Setup

The site uses GitHub Pages with custom domain `optiotech.de`.

**DNS Configuration (at your domain provider):**
- Add CNAME record: `www` → `Maik-0000FF.github.io`
- Add A records for apex domain:
  - `185.199.108.153`
  - `185.199.109.153`
  - `185.199.110.153`
  - `185.199.111.153`

**GitHub Pages Settings:**
- Custom domain: `optiotech.de`
- Enforce HTTPS: ✅ Enabled
- Source: `main` branch, `/` (root)

## License

Copyright © 2025 Maik Bludovsky. All rights reserved.
