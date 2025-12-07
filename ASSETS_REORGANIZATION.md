# Assets Reorganisation - Professioneller Standard

## Neue Ordnerstruktur

```
assets/
├── css/
│   ├── main.css                    # Unified CSS (aktuell)
│   ├── style.css                   # LÖSCHEN (deprecated)
│   └── velocity-accents.css        # LÖSCHEN (deprecated)
│
├── icons/
│   └── features/                   # Feature Card Icons (SVG)
│       ├── speed.svg
│       ├── languages.svg
│       ├── keyboard.svg
│       ├── custom-mappings.svg
│       ├── drag-drop.svg
│       ├── overlay.svg
│       ├── universal.svg
│       ├── accents-included.svg
│       ├── per-app.svg
│       └── app-filter.svg
│
├── images/
│   ├── logos/                      # Brand & Product Logos
│   │   ├── optiotech.svg
│   │   ├── velocity-logo.svg
│   │   ├── velocity-accents-logo.svg
│   │   ├── velocity-accents-menubar.svg
│   │   ├── velocity-snippets-logo.svg
│   │   ├── velocity-snippets-menubar.svg
│   │   ├── velocity-clipboard-logo.svg
│   │   └── velocity-clipboard-menubar.svg
│   │
│   ├── favicons/                   # Alle Favicons gruppiert
│   │   ├── velocity-accents/
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   ├── favicon-48x48.png
│   │   │   ├── apple-touch-icon-120x120.png
│   │   │   ├── apple-touch-icon-152x152.png
│   │   │   └── apple-touch-icon-180x180.png
│   │   ├── velocity-snippets/
│   │   │   ├── favicon-16x16.png
│   │   │   ├── favicon-32x32.png
│   │   │   ├── favicon-48x48.png
│   │   │   ├── apple-touch-icon-120x120.png
│   │   │   ├── apple-touch-icon-152x152.png
│   │   │   └── apple-touch-icon-180x180.png
│   │   └── velocity/
│   │       ├── favicon-16x16.png
│   │       ├── favicon-32x32.png
│   │       ├── favicon-48x48.png
│   │       ├── apple-touch-icon-120x120.png
│   │       ├── apple-touch-icon-152x152.png
│   │       └── apple-touch-icon-180x180.png
│   │
│   ├── products/                   # Product-spezifische Images
│   │   ├── velocity-accents-icon.png
│   │   └── velocity-snippets-icon.png
│   │
│   └── thumbnails/                 # Video & Social Thumbnails
│       ├── velocity-accents-video.jpg
│       ├── velocity-accents-social.jpg
│       ├── velocity-snippets-video.jpg
│       └── velocity-snippets-social.jpg
│
└── screenshots/                    # BLEIBT IM ROOT (nicht in assets/)
    ├── velocity-accents/
    └── velocity-snippets/
```

---

## Feature Icons - Namenskonvention

### Systematische Benennung nach Funktion

| Feature (DE) | Feature (EN) | Icon-Name | Symbol aktuell |
|--------------|--------------|-----------|----------------|
| Keine Verzögerung | Zero Lag | `speed.svg` | → |
| 7+ Sprachen / Presets + Custom | Languages / Presets + Custom | `languages.svg` | A+ |
| Verbesserte Quick Accent Geste | Quick Accent Gesture++ | `keyboard.svg` | ✅ (existiert) |
| Eigene Mappings | Custom Mappings | `custom-mappings.svg` | ± |
| Drag & Drop Editor | Drag & Drop Editor | `drag-drop.svg` | ⇄ |
| Visuelles Overlay | Visual Overlay | `overlay.svg` | ◉ |
| Universelle Unterstützung | Universal Support | `universal.svg` | ∞ |
| Accents inklusive | Accents Included | `accents-included.svg` | ⧉ |
| Pro App konfigurierbar | Per-App Presets | `per-app.svg` | ◎ |
| App-Filter | App Filter (Whitelist/Blacklist) | `app-filter.svg` | ✓✗ |

### Naming Rules:

1. **Lowercase + kebab-case** (z.B. `custom-mappings.svg`)
2. **Beschreibend, nicht symbolisch** (z.B. `speed.svg` statt `arrow.svg`)
3. **Englisch** (konsistent, international)
4. **Keine Produktnamen im Icon** (wiederverwendbar)
5. **SVG Format** (skalierbar, klein, wartbar)

---

## Datei-Umbenennung - Mapping

### Logos

| Alt (current) | Neu (reorganized) |
|---------------|-------------------|
| `optiotech.svg` | `logos/optiotech.svg` |
| `logos/Velocity_Logo.svg` | `logos/velocity-logo.svg` |
| `logos/VelocityAccents_Logo.svg` | `logos/velocity-accents-logo.svg` |
| `logos/VelocityAccents_MenuBar_simple.svg` | `logos/velocity-accents-menubar.svg` |
| `logos/VelocitySnippets_Logo.svg` | `logos/velocity-snippets-logo.svg` |
| `logos/VelocitySnippets_MenuBar_simple.svg` | `logos/velocity-snippets-menubar.svg` |
| `logos/VelocityClipboard_Logo.svg` | `logos/velocity-clipboard-logo.svg` |
| `logos/VelocityClipboard_MenuBar_simple.svg` | `logos/velocity-clipboard-menubar.svg` |

### Feature Icons

| Alt (current) | Neu (reorganized) |
|---------------|-------------------|
| `keyboard-svgrepo-com.svg` | `icons/features/keyboard.svg` |
| (Text: →) | `icons/features/speed.svg` (NEU) |
| (Text: A+) | `icons/features/languages.svg` (NEU) |
| (Text: ±) | `icons/features/custom-mappings.svg` (NEU) |
| (Text: ⇄) | `icons/features/drag-drop.svg` (NEU) |
| (Text: ◉) | `icons/features/overlay.svg` (NEU) |
| (Text: ∞) | `icons/features/universal.svg` (NEU) |
| (Text: ⧉) | `icons/features/accents-included.svg` (NEU) |
| (Text: ◎) | `icons/features/per-app.svg` (NEU) |
| (Text: ✓✗) | `icons/features/app-filter.svg` (NEU) |

### Favicons

| Alt (current) | Neu (reorganized) |
|---------------|-------------------|
| `velocity-accents-favicon-16x16.png` | `favicons/velocity-accents/favicon-16x16.png` |
| `velocity-accents-favicon-32x32.png` | `favicons/velocity-accents/favicon-32x32.png` |
| `velocity-accents-favicon-48x48.png` | `favicons/velocity-accents/favicon-48x48.png` |
| `velocity-accents-apple-touch-icon-120x120.png` | `favicons/velocity-accents/apple-touch-icon-120x120.png` |
| `velocity-accents-apple-touch-icon-152x152.png` | `favicons/velocity-accents/apple-touch-icon-152x152.png` |
| `velocity-accents-apple-touch-icon-180x180.png` | `favicons/velocity-accents/apple-touch-icon-180x180.png` |
| ... (gleiches Muster für snippets & velocity) | ... |

### Product Images

| Alt (current) | Neu (reorganized) |
|---------------|-------------------|
| `velocity-accents-icon.png` | `products/velocity-accents-icon.png` |
| `velocity-snippets-icon.png` | `products/velocity-snippets-icon.png` |

### Thumbnails

| Alt (current) | Neu (reorganized) |
|---------------|-------------------|
| `velocity-accents-thumbnail-1024x1024.jpg` | `thumbnails/velocity-accents-social.jpg` |
| `velocity-accents-video-thumbnail.jpg` | `thumbnails/velocity-accents-video.jpg` |
| `velocity-snippets-thumbnail-1024x1024.jpg` | `thumbnails/velocity-snippets-social.jpg` |
| `velocity-snippets-video-thumbnail.jpg` | `thumbnails/velocity-snippets-video.jpg` |

---

## CSS zu löschen

| Datei | Grund |
|-------|-------|
| `assets/css/style.css` | Ersetzt durch main.css |
| `assets/css/velocity-accents.css` | Ersetzt durch main.css |

---

## SVG Icon Design Guidelines

### Technische Anforderungen:

1. **Viewbox:** `0 0 24 24` (Standard Icon Size)
2. **Stroke Width:** `1.5px` (Apple SF Symbols Style)
3. **Farbe:** `currentColor` (anpassbar via CSS)
4. **Minified:** Optimiert via SVGO
5. **Accessibility:** `<title>` Tag für Screen Reader

### Design Style:

- **Line-based** (Outline Style, kein Filled)
- **Rounded Corners** (`stroke-linecap="round" stroke-linejoin="round"`)
- **Minimalistisch** (Apple SF Symbols / Heroicons Style)
- **Monochrom** (keine Multi-Color Icons)
- **Konsistent** (gleicher Stroke Width, gleiches Grid)

### Beispiel Template:

```svg
<svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5" stroke-linecap="round" stroke-linejoin="round">
    <title>Icon Name</title>
    <!-- Icon Path -->
</svg>
```

---

## Icon Quellen (Empfohlen)

### Kostenlose, hochwertige Icon Sets:

1. **Heroicons** (https://heroicons.com) - MIT License, Tailwind Style
2. **Lucide Icons** (https://lucide.dev) - ISC License, Feather Fork
3. **Phosphor Icons** (https://phosphoricons.com) - MIT License, flexible weights
4. **Tabler Icons** (https://tabler-icons.io) - MIT License, 4000+ icons
5. **Ionicons** (https://ionic.io/ionicons) - MIT License, sharp + outline

**ODER:**

- Custom SVGs erstellen via Figma/Sketch/Illustrator
- Sicherstellen: MIT/ISC/Apache 2.0 License für kommerzielle Nutzung

---

## Implementierung - Nächste Schritte

1. ✅ **Analyse & Planung** (dieser Plan)
2. ⏳ Neue Ordnerstruktur erstellen
3. ⏳ SVG Icons auswählen/erstellen
4. ⏳ Assets umbenennen & verschieben
5. ⏳ HTML-Referenzen aktualisieren
6. ⏳ CSS-Referenzen aktualisieren
7. ⏳ Alte Dateien löschen
8. ⏳ Testen (alle Seiten, alle Bilder)
9. ⏳ Commit & Deploy

---

**Erstellt:** 2025-12-07
**Status:** Planung abgeschlossen, bereit zur Implementierung
