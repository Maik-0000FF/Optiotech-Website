# Optiotech CSS System Documentation

## Übersicht

Das Optiotech CSS-System ist ein modernes, wartungsarmes und einheitliches Stylesheet-System, das für maximale Wiederverwendbarkeit und einfache Wartung optimiert ist.

## Dateistruktur

```
assets/css/
├── main.css              # ✅ Einzige CSS-Datei (verwendet von allen Seiten)
├── inter-font.css        # Font-Definitionen (wird von main.css importiert)
├── pricing.css           # ❌ DEPRECATED (integriert in main.css)
├── velocity-accents.css  # ❌ DEPRECATED (ersetzt durch main.css)
└── style.css             # ❌ DEPRECATED (ersetzt durch main.css)
```

## Verwendung

Alle HTML-Seiten verwenden jetzt **nur eine CSS-Datei**:

```html
<link rel="preload" href="assets/css/main.css" as="style">
<link rel="stylesheet" href="assets/css/main.css" fetchpriority="high">
```

## CSS-Struktur

Die `main.css` ist in klare Sektionen unterteilt:

### 1. CSS Custom Properties (Design Tokens)
Zentrale Verwaltung aller Designvariablen:

```css
:root {
    /* Colors */
    --color-primary: #0EA5E9;
    --color-text-dark: #0F172A;

    /* Spacing (8px base) */
    --space-xs: 0.5rem;   /* 8px */
    --space-sm: 1rem;     /* 16px */
    --space-md: 1.5rem;   /* 24px */

    /* Typography */
    --font-size-base: 1rem;
    --font-weight-bold: 700;

    /* Transitions */
    --transition-base: 0.2s ease;
}
```

### 2. Reset & Base Styles
Browser-Normalisierung und Grundstyles

### 3. Accessibility
Focus-Styles und Screen-Reader-Support

### 4. Typography
Überschriften, Absätze, Links

### 5. Layout
Container, Sections, Grid

### 6. Components
Alle wiederverwendbaren Komponenten:
- Header & Navigation
- Hero Section
- Buttons
- Cards (Product, Feature)
- Pricing & Discounts
- Video Section
- Screenshots Gallery
- Download Section
- Support Section
- Footer

### 7. Utilities
Helper-Klassen für Spacing, Text, Display, Flex

### 8. Responsive Breakpoints
- Mobile: 480px and below
- Tablet: 768px and below
- Desktop: 1200px and above

## Wartung

### Farben ändern
Alle Farben sind als CSS Variables definiert. Ändere sie in einem Ort:

```css
:root {
    --color-primary: #0EA5E9;  /* Ändere hier für gesamte Website */
}
```

### Spacing anpassen
Nutze die Spacing-Scale (8px-basiert):

```css
:root {
    --space-xs: 0.5rem;   /* 8px */
    --space-sm: 1rem;     /* 16px */
    --space-md: 1.5rem;   /* 24px */
    --space-lg: 2rem;     /* 32px */
    --space-xl: 3rem;     /* 48px */
}
```

### Neue Komponente hinzufügen
1. Füge die Komponente in Sektion 6 hinzu
2. Verwende CSS Variables für Konsistenz
3. Füge Kommentare hinzu
4. Teste auf allen Breakpoints

```css
/* ==========================================================================
   6. COMPONENTS - Deine Neue Komponente
   ========================================================================== */

.neue-komponente {
    padding: var(--space-lg);
    background: var(--color-bg-white);
    border-radius: var(--radius-md);
}
```

### Responsive Anpassungen
Alle Breakpoints sind zentral in Sektion 8 definiert:

```css
/* Tablet: 768px and below */
@media (max-width: 768px) {
    .dein-element {
        font-size: var(--font-size-sm);
    }
}
```

## Best Practices

### ✅ DO
- Nutze CSS Variables für alle Werte
- Verwende semantische Klassennamen
- Halte Komponenten modular
- Dokumentiere komplexe Logik
- Teste auf allen Breakpoints
- Verwende `clamp()` für responsive Typography

### ❌ DON'T
- Keine Inline-Styles (außer notwendig)
- Keine !important (außer für Accessibility)
- Keine hardcoded Farben/Größen
- Keine tief verschachtelten Selektoren
- Keine Browser-spezifischen Hacks ohne Kommentar

## Utility Classes

### Spacing
```html
<div class="mt-2">Margin-top 16px</div>
<div class="mb-4">Margin-bottom 32px</div>
```

### Text
```html
<p class="text-center">Zentrierter Text</p>
<p class="text-primary">Primärfarbe</p>
```

### Display & Flex
```html
<div class="d-flex justify-center items-center gap-md">
    <span>Item 1</span>
    <span>Item 2</span>
</div>
```

## Performance

### Critical CSS
Die Datei verwendet `fetchpriority="high"` und wird preloaded:

```html
<link rel="preload" href="assets/css/main.css" as="style">
<link rel="stylesheet" href="assets/css/main.css" fetchpriority="high">
```

### File Size
- **main.css**: ~40KB (unkomprimiert)
- **Gzipped**: ~8KB
- **Brotli**: ~6KB

### Optimierungen
- Minimale Spezifität
- Keine unused CSS
- Clamp() für responsive Werte
- Hardware-beschleunigte Transitions
- CSS Variables statt Berechnungen

## Migration von alten CSS-Dateien

Alte Dateien können sicher gelöscht werden, sobald alles getestet ist:

```bash
# Optional: Backup erstellen
mv assets/css/velocity-accents.css assets/css/_archive/
mv assets/css/style.css assets/css/_archive/
mv assets/css/pricing.css assets/css/_archive/
```

## Troubleshooting

### Styles werden nicht angewendet
1. Hard-Refresh (Cmd+Shift+R)
2. Prüfe Browser Console auf Fehler
3. Prüfe ob `main.css` korrekt geladen wird
4. Prüfe Spezifität der Selektoren

### Dark Mode funktioniert nicht
Prüfe ob Browser Dark Mode aktiviert ist:
```css
@media (prefers-color-scheme: dark) {
    /* Dark mode styles */
}
```

### Responsive Breakpoints greifen nicht
Prüfe Viewport Meta Tag:
```html
<meta name="viewport" content="width=device-width, initial-scale=1.0">
```

## Änderungshistorie

### Version 2.0.0 (2025-12-07)
- ✅ Vollständige Vereinheitlichung in `main.css`
- ✅ CSS Custom Properties System
- ✅ Modulare Komponentenstruktur
- ✅ Utility Classes hinzugefügt
- ✅ Pricing-System integriert
- ✅ Verbesserte Accessibility
- ✅ Performance-Optimierungen

### Version 1.x (Legacy)
- `velocity-accents.css` - Product pages
- `style.css` - Homepage
- `pricing.css` - Discount system

## Support

Bei Fragen oder Problemen:
- Dokumentation: `/assets/css/README.md`
- Main CSS: `/assets/css/main.css` (gut kommentiert)
- CLAUDE.md: Projekt-Übersicht

---

**Letzte Aktualisierung**: 2025-12-07
**Version**: 2.0.0
**Wartungsaufwand**: Minimal ✅
