# EM Finanzen - Projektstatus & Launch-Checkliste
**Stand: 17.02.2026, 03:30 Uhr**
**Domain: em-finanzen.com (Netcup, gekauft)**
**Hosting: GitHub Pages mit SSL**

---

## FERTIGE SEITEN (14 Stück)

| Seite | Datei | Status |
|-------|-------|--------|
| Startseite | index.html | Fertig |
| Versicherungen | versicherungen.html | Fertig |
| Altersvorsorge | altersvorsorge.html | Fertig |
| Vermögensaufbau | vermoegensaufbau.html | Fertig |
| Finanzierung | finanzierung.html | Fertig |
| Haushaltsoptimierung | haushaltsoptimierung.html | Fertig |
| Steuervorteile | steuervorteile.html | Fertig |
| Über Erik | ueber-erik.html | Fertig |
| So funktioniert's | ablauf.html | Fertig |
| Finanzrechner | rechner.html | Fertig |
| Finanzberater Neuss | finanzberater-neuss.html | Fertig |
| Finanzberater Düsseldorf | finanzberater-duesseldorf.html | Fertig |
| Impressum | impressum.html | Fertig |
| Datenschutz | datenschutz.html | Fertig |

---

## ERLEDIGTE ARBEITEN (heute)

### Brand & Design
- [x] Komplettes Rebranding zu "EM Finanzen" (Navy/Blue/Cyan)
- [x] Crown-SVG-Logo mit Gradient auf allen Seiten einheitlich
- [x] Fonts: Cormorant Garamond (Display) + DM Sans (Body)
- [x] Favicon auf allen Seiten eingebunden
- [x] Loading-Screen mit EM Finanzen Logo

### Content-Fixes
- [x] Alle Umlaut-Fehler gefixt (ae/oe/ue -> ä/ö/ü) auf allen 14 Seiten
- [x] "Unabhängig" -> "Eigenständig" (rechtliche Absicherung) - alle Seiten
- [x] "Finanzielle Freiheit" -> "Finanzielle Sicherheit" - alle Seiten
- [x] "Tönisvorst" komplett entfernt, ersetzt durch "Neuss / 27404 Zeven"
- [x] "Empathisch"-Punkt aus About-Section entfernt

### Features & Interaktivität
- [x] Interaktiver Stepper "So funktioniert's" (klickbare Tabs, Auto-Rotation, Fortschrittsbalken)
- [x] 3 Finanzrechner (Zinseszins, Rentenlücke, Sparplan)
- [x] Finanz-Check Quiz (5 Fragen mit Score)
- [x] Exit-Intent Popup (Desktop: Mouseout, Mobile: Scroll-up)
- [x] Multi-Contact Floating Button (Telefon, WhatsApp, E-Mail)
- [x] Bottom Mobile Navigation
- [x] Booking Modal auf allen Seiten
- [x] FAQ Accordions mit Schema.org FAQPage Markup
- [x] Cookie Consent Banner
- [x] Scroll Progress Bar
- [x] Counter-Animationen (Stats-Bar)
- [x] Scroll-Reveal Animationen

### Technische Fixes
- [x] Social-Proof Popups entfernt (zu spammy)
- [x] Mobile Header-Spacing gefixt (padding-top: 110px) auf allen Seiten
- [x] CSS-Variablen vereinheitlicht (keine Legacy --navy/--blue/--cyan mehr)
- [x] JS-Bug gefixt (doppelte currentStep Variable)
- [x] Stats-Bar Schriftgrößen vergrößert (3.5rem Zahlen, 1.15rem Labels)

### SEO
- [x] Meta Tags (title, description, keywords, OG) auf allen Seiten
- [x] Schema.org LocalBusiness Markup (index, finanzberater-neuss, finanzberater-duesseldorf, finanzierung)
- [x] Schema.org FAQPage auf Hauptseite
- [x] Local SEO Seiten für Neuss und Düsseldorf

---

## VOR LAUNCH ZU ERLEDIGEN

### KRITISCH (Muss vor Launch)

- [ ] **Echte Kontaktdaten einsetzen**
  - Telefonnummer: aktuell Platzhalter "+49 123 456 7890"
  - E-Mail: aktuell "info@em-finanzen.com" - prüfen ob korrekt
  - Adresse im Impressum: Straße fehlt noch, nur "27404 Zeven"
  - WhatsApp-Link: aktuell Platzhalter "https://wa.me/49XXXXXXXXXXX"

- [ ] **Impressum vervollständigen**
  - Vollständige Adresse (Straße + Hausnummer)
  - Handelsregisternummer / Gewerbeanmeldung
  - Zuständige Aufsichtsbehörde (IHK)
  - Berufsbezeichnung und Kammer
  - Vermittlerregister-Nummer (§34d/§34f GewO)
  - USt-IdNr. falls vorhanden

- [ ] **Datenschutzerklärung prüfen**
  - Aktuell generisch - an tatsächlich eingesetzte Tools anpassen
  - Google Fonts: aktuell extern geladen -> entweder lokal hosten oder in DSE erwähnen
  - Cookie-Banner: Welche Cookies werden wirklich gesetzt?
  - Kontaktformular: Wie werden Daten verarbeitet?

- [ ] **Booking/Kontaktformular Backend**
  - Aktuell kein Backend - Formulare senden nirgendwo hin
  - Option 1: Formspree / Netlify Forms / Basin einrichten
  - Option 2: Calendly-Link statt eigenem Formular
  - Option 3: Einfacher mailto:-Link

### WICHTIG (Sollte vor Launch)

- [ ] **GitHub Pages Setup**
  - Repository erstellen (z.B. em-finanzen/em-finanzen.github.io)
  - Alle Dateien pushen
  - Custom Domain em-finanzen.com konfigurieren
  - CNAME-Datei erstellen
  - DNS bei Netcup: CNAME auf GitHub Pages zeigen
  - SSL/HTTPS aktivieren (automatisch bei GitHub Pages)
  - CNAME-Datei im Repo: `em-finanzen.com`

- [ ] **Favicon als .ico/.png generieren**
  - Aktuell nur favicon.svg vorhanden
  - favicon.ico (32x32) für ältere Browser
  - apple-touch-icon.png (180x180) für iOS
  - favicon-192.png und favicon-512.png für PWA/Android

- [ ] **Google Fonts lokal hosten** (DSGVO!)
  - Cormorant Garamond und DM Sans herunterladen
  - In /fonts/ Ordner ablegen
  - @font-face Deklarationen statt Google-CDN
  - Aktuell auf allen Seiten Google Fonts CDN -> DSGVO-Problem!

- [ ] **Bilder/Assets**
  - Erik-Profilbild: aktuell nur SVG-Platzhalter vorhanden
  - Hero-Bild für Startseite (optional, aktuell SVG-Illustration)
  - OG-Image für Social Sharing (1200x630px)

- [ ] **robots.txt erstellen**
  ```
  User-agent: *
  Allow: /
  Sitemap: https://em-finanzen.com/sitemap.xml
  ```

- [ ] **sitemap.xml erstellen**
  - Alle 14 Seiten auflisten
  - Priority und Changefreq setzen

### NICE-TO-HAVE (Nach Launch)

- [ ] Google Analytics / GA4 einrichten
- [ ] Google Search Console verifizieren + Sitemap einreichen
- [ ] Google My Business Eintrag (Neuss + Zeven)
- [ ] 404-Fehlerseite erstellen
- [ ] Performance-Optimierung (Bilder komprimieren, CSS/JS minifizieren)
- [ ] Canonical URLs auf allen Seiten setzen
- [ ] Hreflang Tags (falls mehrsprachig geplant)
- [ ] Weitere Local-SEO-Seiten (Krefeld, Mönchengladbach, etc.)
- [ ] Blog/Ratgeber-Bereich für SEO-Content
- [ ] Testimonials mit echten Kundenbewertungen ersetzen
- [ ] A/B Testing für CTA-Buttons und Hero-Texte
- [ ] E-Mail-Marketing Setup (Newsletter)
- [ ] Social Media Profile verlinken (aktuell Platzhalter)

---

## BRAND ASSETS (im Ordner vorhanden)

| Datei | Beschreibung |
|-------|-------------|
| favicon.svg | Browser-Tab Icon |
| em-finanzen-logo-dark.svg | Logo dunkel (für helle Hintergründe) |
| em-finanzen-logo-light.svg | Logo hell (für dunkle Hintergründe) |
| em-finanzen-logo-horizontal.svg | Horizontales Logo |
| em-finanzen-logo-horizontal-dark.svg | Horizontales Logo dunkel |
| em-finanzen-mark.svg | Nur Crown-Mark |
| em-finanzen-banner.svg | Banner-Version |
| em-finanzen-banner-1500x500.png | Banner PNG |
| em-finanzen-profile-dark.svg | Profilbild-Variante dunkel |
| em-finanzen-profile-light.svg | Profilbild-Variante hell |
| em-finanzen-profile-dark-400.png | Profilbild PNG 400px |
| em-finanzen-profile-light-400.png | Profilbild PNG 400px |

## CSS VARIABLEN (Brand)

```css
--primary-dark: #0c1929
--primary: #1e3a5f
--primary-light: #3b82f6
--gold: #06b6d4
--gold-light: #22d3ee
--off-white: #f8fafc
--light-gray: #e2e8f0
--mid-gray: #94a3b8
--dark-gray: #475569
--black: #0f172a
--font-display: 'Cormorant Garamond', serif
--font-body: 'DM Sans', sans-serif
```

---

## NÄCHSTE SESSION - PRIORITÄTEN

1. Echte Kontaktdaten von Erik einsetzen
2. Google Fonts lokal hosten (DSGVO-kritisch!)
3. Impressum vervollständigen (Pflichtangaben)
4. Formular-Backend einrichten (Formspree o.ä.)
5. GitHub Pages deployen + Domain verbinden
6. Favicon-Varianten generieren
7. robots.txt + sitemap.xml
8. Final-Check auf allen Seiten
