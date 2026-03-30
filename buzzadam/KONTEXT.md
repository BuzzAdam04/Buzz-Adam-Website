# BUZZ ADAM PORTFOLIO — KONTEXT FÜR NEUE SESSION

## WER
Buzz Adam (Blazej Adamowski), Fotograf/Videograf aus Mannheim.
Baut eine statische HTML/CSS Portfolio-Website als Ersatz für Adobe Portfolio.
Instagram: @buzzadam_ | Mail: mail@buzzadam.video | Tel: +49 151 59885927
Adresse: Leistadter Straße 17, 68309 Mannheim

---

## DESIGN-SYSTEM (unveränderlich)

### Farben
- Background: `#080808`
- White: `#F5F5F5`
- Gray: `#888`
- Gray-dark: `rgba(255,255,255,0.08)`
- **Brand-Akzentfarbe: `#FFD100`** (neu eingeführt, für Hover-Titel im Portfolio-Grid)

### Fonts
Gotham-Familie aus `/fonts/`:
- Gotham-Black.otf → weight 900
- GothamBold.ttf → weight 700
- GothamMedium.ttf → weight 500
- GothamBook.ttf → weight 400
- GothamLight.ttf → weight 300

### Assets
- Logo: `images/logo.png` (weiß auf transparent)
- Grunge-Textur: `images/grunge.jpg` (body::before, opacity 0.04)

---

## SEITENSTRUKTUR

```
buzzadam/
├── index.html              ← Homepage (5 Featured Projects + CTA)
├── portfolio.html          ← Alle Projekte nach Kategorie
├── about.html
├── contact.html            ← Formspree: "DEIN-FORMSPREE-CODE" (noch einzutragen)
├── impressum.html
├── datenschutz.html
├── blog.html
├── blog/
│   └── mercedes-amg-cote-dazur.html
├── fonts/
├── images/
│   ├── logo.png
│   ├── grunge.jpg
│   ├── blog/ (4 AMG-Bilder)
│   └── projects/ (leer)
└── projects/
    ├── mercedes-amg-cotedazur/   ✅ FERTIG
    ├── three-sixty-vodka/        ✅ FERTIG
    ├── ddv-waldhof/              ✅ FERTIG
    ├── purelei/                  ✅ FERTIG
    ├── proline-wheels/           ✅ FERTIG
    ├── atos-sportchirurgie/      ✅ FERTIG
    └── mhc-barcelona/            ✅ FERTIG
```

---

## ALLE 17 PROJEKTE

### Automotive (prev/next innerhalb Kategorie)
1. Mercedes AMG Côte d'Azur ✅ → `projects/mercedes-amg-cotedazur/`
2. Lamborghini Roadtrip Alpen → `projects/lamborghini-alpen/` ❌
3. Theflatoutgarage Roadtrip Ascona → `projects/flatoutgarage-ascona/` ❌
4. Proline Wheels 25 Jahre ✅ → `projects/proline-wheels/`

### Lifestyle & Kampagne (prev/next innerhalb Kategorie)
5. Askyurself Kampagnen → `projects/askyurself/` ❌
6. Three Sixty Vodka ✅ → `projects/three-sixty-vodka/`
7. Purelei Christmas Kampagne ✅ → `projects/purelei/`
8. Wendela Horz → `projects/wendela-horz/` ❌
9. 7ahalf Studios Drop 1 → `projects/7ahalf-drop1/` ❌
10. Three Sixty Camp Zadar → `projects/three-sixty-camp-zadar/` ❌
11. DDV Waldhof Mannheim ✅ → `projects/ddv-waldhof/`

### Event & Sport (prev/next innerhalb Kategorie)
12. Ringside Zone Heidelberg → `projects/ringside-zone/` ❌
13. Battle of the Socials → `projects/battle-of-socials/` ❌
14. DDV Fünfjahresspecial → `projects/ddv-5jahre/` ❌
15. MHC Barcelona EHL ✅ → `projects/mhc-barcelona/`
16. Tanz der Bässe 2025 → `projects/tanz-der-basse-2025/` ❌

### Corporate
17. ATOS Sportchirurgie ✅ → `projects/atos-sportchirurgie/`

---

## PROJEKT-SEITEN STANDARD (jede neue Seite exakt so aufbauen)

### Hero (100vh)
```html
<div class="hero">
  <img src="images/XX.jpg" alt="...">
  <div class="hero-breadcrumb">
    <a href="../../portfolio.html">Portfolio</a>
    <span>/</span>
    [Kategorie]
  </div>
  <div class="hero-bottom">
    <h1 class="hero-title">Titel<br><em>Subtitle</em></h1>
    <div class="hero-tags">
      <div class="hero-tag"><strong>Kunde</strong>Name</div>
      <div class="hero-tag"><strong>Leistungen</strong>Foto · Video</div>
      <div class="hero-tag"><strong>Jahr</strong>20XX</div>
      <div class="hero-tag"><strong>Location</strong>Ort</div>
    </div>
  </div>
</div>
```

### Projektinfo-Block (direkt nach Hero, auf schwarzem Grund)
```html
<div class="projekt-intro fade-in">
  <div>
    <p class="aside-label">Projektinfo</p>
    <p class="aside-text">Beschreibungstext...</p>
  </div>
  <div class="meta-row">
    <div class="meta-cell">
      <div class="meta-cell-label">Art</div>
      <div class="meta-cell-value">Kampagnen-Shooting</div>
    </div>
    <div class="meta-cell">
      <div class="meta-cell-label">Format</div>
      <div class="meta-cell-value">Foto · Video</div>
    </div>
    <div class="meta-cell">
      <div class="meta-cell-label">Location</div>
      <div class="meta-cell-value">Ort</div>
    </div>
    <div class="meta-cell">
      <div class="meta-cell-label">Produkte</div>
      <div class="meta-cell-value">Was</div>
    </div>
  </div>
</div>
```

### Galerie — WICHTIG: IMMER natives Seitenverhältnis!
```css
/* NIEMALS object-fit: cover oder feste Höhen in der Galerie */
.g-row img { width: 100%; height: auto; display: block; }
```

Grid-Klassen:
- `.g-row` = display:grid, gap:16px, align-items:start
- `.g-duo` = 1fr 1fr
- `.g-trio` = 1fr 1fr 1fr
- `.g-split-right` = 2fr 1fr
- `.g-split-left` = 1fr 2fr

### Project Nav
```html
<div class="project-nav">
  <a href="../vorheriges/index.html" class="project-nav-item">
    <span class="nav-dir">← Vorheriges Projekt</span>
    <span class="nav-title">Projektname</span>
  </a>
  <a href="../naechstes/index.html" class="project-nav-item">
    <span class="nav-dir">Nächstes Projekt →</span>
    <span class="nav-title">Projektname</span>
  </a>
</div>
```

---

## KRITISCHE REGELN

1. **Keine Bilder beschneiden** — `height: auto` immer, niemals `object-fit: cover` in Galerien
2. **Hero-Bild** darf `object-fit: cover` haben (100vh Vollbild ist gewollt)
3. **Video-Player** darf `object-fit: cover` haben
4. **Brand-Farbe `#FFD100`** für `.project-title` im Portfolio-Hover-Overlay
5. **CSS-Klassen exakt** wie DDV Waldhof: `aside-label`, `aside-text`, `meta-row`, `meta-cell`, `meta-cell-label`, `meta-cell-value`, `projekt-intro`
6. **Kein Titel-Doppel** — alle Infos (Breadcrumb, Titel, Tags) nur auf dem Headerbild, nicht nochmal darunter
7. **Pfade** auf Projektseiten immer `../../` für Root-Assets

---

## NAV (identisch auf allen Seiten, Projektseiten mit ../../)
```html
<nav>
  <div class="nav-left">
    <div class="nav-dropdown">
      <a href="../../portfolio.html">PORTFOLIO</a>
      <div class="dropdown-menu">
        <a href="../../portfolio.html#automotive">Automotive</a>
        <a href="../../portfolio.html#lifestyle">Lifestyle &amp; Kampagne</a>
        <a href="../../portfolio.html#event">Event &amp; Sport</a>
        <a href="../../portfolio.html#corporate">Corporate</a>
      </div>
    </div>
    <a href="../../about.html">ÜBER MICH</a>
  </div>
  <div class="nav-logo"><a href="../../index.html"><img src="../../images/logo.png" alt="Buzz Adam"></a></div>
  <div class="nav-right">
    <a href="../../contact.html">KONTAKT</a>
    <a href="../../blog.html">BLOG</a>
  </div>
</nav>
```

---

## IMPRESSUM
- Name: Blazej Adamowski (Künstlername: Buzz Adam)
- Berufsbezeichnung: Freiberuflicher Mediengestalter
- Keine USt-ID (Kleinunternehmer)
- Datenschutzbehörde: LfDI Baden-Württemberg, Stuttgart
- © 2026 überall

---

## NOCH ZU TUN
- 9 Projektseiten fehlen noch (Bilder werden vom Nutzer geliefert)
- Formspree-Code in contact.html eintragen
- Hosting: IONOS (Domain) + Netlify empfohlen
