# BUZZ ADAM — Website Setup

## Ordnerstruktur

```
buzzadam/
├── index.html          ← Startseite mit Projekt-Grid
├── about.html          ← Über mich Seite
├── contact.html        ← Kontaktseite mit Formular
├── impressum.html      ← (noch zu erstellen)
├── datenschutz.html    ← (noch zu erstellen)
│
├── fonts/              ← Gotham-Schriften (bereits drin)
├── images/
│   ├── logo.png        ← Dein Logo (bereits drin)
│   ├── grunge.jpg      ← Hintergrundtextur (bereits drin)
│   └── projects/       ← HIER kommen deine Projektbilder rein
│
└── projects/           ← Projektseiten
    └── proline-c63.html  ← Vorlage für alle Projekte
```

---

## Schritt 1: Bilder einfügen

### Projektbilder für die Startseite
Lege deine Bilder in `images/projects/` ab, z.B.:
- `proline-c63.jpg`
- `rfk-bmw-m2.jpg`
- `three-sixty-vodka.jpg`
- usw.

**Empfohlene Bildgrößen:**
- Querformat: 1600 × 1067 px, max. 300 KB (JPEG, Qualität 80%)
- Hochformat: 1067 × 1600 px, max. 250 KB

Öffne dann `index.html` und ersetze bei jedem Projekt:
```html
<!-- ALT: -->
<div class="project-placeholder">[ Bild: Proline C63 ]</div>

<!-- NEU: -->
<img src="images/projects/proline-c63.jpg" alt="Proline Wheels C63 AMG">
```

### Portrait für die Über-mich-Seite
Lege dein Portrait-Foto als `images/about-portrait.jpg` ab.
In `about.html` ersetze:
```html
<!-- ALT: -->
<div class="about-image-slot">[ Portrait-Foto einfügen ]</div>

<!-- NEU: -->
<img src="images/about-portrait.jpg" alt="Buzz Adam" style="width:100%;display:block;">
```

---

## Schritt 2: Kontaktformular aktivieren

Das Formular nutzt Formspree — kostenlos bis 50 Nachrichten/Monat.

1. Gehe zu https://formspree.io und erstelle einen kostenlosen Account
2. Erstelle ein neues Formular und kopiere deinen Code (sieht aus wie: `xabcdefg`)
3. Öffne `contact.html` und ersetze:
   ```html
   action="https://formspree.io/f/DEIN-FORMSPREE-CODE"
   ```
   durch z.B.:
   ```html
   action="https://formspree.io/f/xabcdefg"
   ```
4. Trage deine E-Mail-Adresse bei `href="mailto:DEINE@EMAIL.DE"` ein
5. Trage deinen Instagram-Handle ein

---

## Schritt 3: Bei IONOS hochladen

1. Logge dich bei ionos.de ein → Hosting → Dateiverwaltung (oder FTP)
2. Navigiere in den Ordner `public_html` (oder `www`, je nach Setup)
3. Lade den KOMPLETTEN Inhalt des `buzzadam/` Ordners hoch
   (also alle .html Dateien, den fonts/ Ordner, den images/ Ordner, den projects/ Ordner)
4. Fertig!

### FTP-Zugangsdaten bei IONOS
Unter: ionos.de → Hosting → FTP → FTP-Zugangsdaten

Empfohlener FTP-Client: **FileZilla** (kostenlos, https://filezilla-project.org)

---

## Schritt 4: Neue Projektseite anlegen

1. Kopiere die Datei `projects/proline-c63.html`
2. Benenne sie um, z.B. `projects/neues-projekt.html`
3. Ändere in der neuen Datei: Titel, Kategorie, Beschreibung, Bilder
4. Füge in `index.html` einen neuen Eintrag zum Grid hinzu

---

## Schritt 5: Impressum & Datenschutz

Diese Seiten musst du rechtlich selbst erstellen.
Empfehlung: https://www.e-recht24.de/impressum-generator.html

Speichere sie als `impressum.html` und `datenschutz.html` im Hauptordner.

---

## Tipps

- Bilder immer komprimieren vor dem Upload → https://squoosh.app (kostenlos)
- Logo-Farbe ist Weiß auf transparentem Hintergrund — perfekt für die dunkle Seite
- Die Instagram-Links in nav und footer musst du noch mit deiner echten URL ersetzen
