# EM Finanzen - Projektstatus & Launch-Checkliste
**Stand: 20.02.2026, 03:45 Uhr**
**Domain: em-finanzen.com (Netcup)**
**Hosting: GitHub Pages (live)**
**Repo: https://github.com/EM-Finanzen/em-finanzen.com**

---

## ERLEDIGT

### Infrastruktur
- [x] GitHub Account (EM-Finanzen) erstellt & verbunden
- [x] GitHub Repo erstellt & Code gepusht
- [x] GitHub Pages aktiviert mit Custom Domain
- [x] DNS bei Netcup konfiguriert (A-Records, CNAME www)
- [x] Domain-Inhaberverifizierung (ICANN/Netcup) abgeschlossen
- [x] CNAME-Datei im Repo
- [x] robots.txt + sitemap.xml erstellt
- [x] Canonical URLs auf allen Seiten
- [x] 404-Fehlerseite erstellt
- [x] HTTPS - SSL-Zertifikat von GitHub (automatisch)
- [x] Danke-Seite (danke.html) mit Formular-Weiterleitung

### Google Workspace & E-Mail
- [x] Google Workspace eingerichtet
- [x] Domain-Verifizierung (TXT-Record) bestätigt
- [x] MX-Records für Google Mail konfiguriert
- [x] SPF-Record gesetzt
- [x] DKIM-Schlüssel (1024-bit) eingerichtet & bestätigt
- [x] info@em-finanzen.com funktioniert

### Cal.com Terminbuchung
- [x] Cal.com Account (cal.eu/erik-manvajler/erstberatung)
- [x] Google Calendar verbunden
- [x] Booking-URL auf allen Seiten integriert (alle "Termin buchen" Buttons)
- [x] Booking-Modals korrigiert (cal.eu statt cal.com)

### Website Features
- [x] Loading Screen
- [x] Cookie Consent Banner (DSGVO-konform)
- [x] Floating Contact Button (WhatsApp, Telefon, E-Mail, Termin)
- [x] Scroll Progress Bar
- [x] Kontaktformulare via Web3Forms (7 Formulare, alle mit Weiterleitung zu danke.html)
- [x] GA4 Tracking (G-3X9XSVBPB1) mit Cookie-Consent

### Brand & Design
- [x] Rebranding zu "EM Finanzen" (Navy/Blue/Cyan)
- [x] Crown-SVG-Logo auf allen Seiten
- [x] Fonts lokal gehostet (Cormorant Garamond + DM Sans) - DSGVO-konform
- [x] Favicon auf allen Seiten
- [x] Icons korrigiert (Euro statt Dollar, Uhr statt Smiley, Schild-Icons)
- [x] OG-Image für Social Sharing
- [x] Erik Manvajler Fotos integriert (Hero + Über Erik)

### SEO & Schema
- [x] Meta Tags auf allen Seiten
- [x] Schema.org LocalBusiness + FAQPage + FinancialService Markup
- [x] Local SEO Seiten: Neuss, Düsseldorf, Krefeld, Dormagen, Kaarst, Meerbusch, Mönchengladbach, Ratingen, Zeven (9 Städte)
- [x] Sitemap aktualisiert (ablauf.html entfernt)
- [x] Social Media Links (Instagram + Facebook) auf allen Seiten

### Responsive / Mobile
- [x] responsive.css nach inline Styles geladen (CSS-Cascade korrigiert)
- [x] Comparison Table mobile Overflow gefixt
- [x] Why-Grid mobile Layout gefixt
- [x] Timeline-Dots Overlap auf Mobile gefixt
- [x] Balkendiagramm-Visualisierung (Vermögensaufbau) mobile gefixt
- [x] Tabellen-Layout (Steuervorteile) mobile Stacking

### Navigation (20.02.2026)
- [x] Einheitliche Navigation auf allen 18 Seiten via zentrales nav.js + nav.css
- [x] Desktop: Leistungen (Dropdown), Über Erik, Finanzrechner, FAQ, Termin buchen
- [x] Mobile: Burger → Slide-in Panel mit allen Links + Impressum/Datenschutz + CTAs
- [x] Burger → X Animation, Close bei ESC/Klick außerhalb
- [x] Aktive Seite hervorgehoben (Desktop: Underline, Mobile: Background)
- [x] Mobile Menu außerhalb Header (backdrop-filter Fix)
- [x] Alte Nav-Varianten komplett entfernt (4 verschiedene → 1 zentrale)

### Content & Bereinigung (20.02.2026)
- [x] ablauf.html komplett gelöscht (Datei + alle Verlinkungen + Sitemap)
- [x] "Versicherungs-Check" → "Persönliche Finanzanalyse" (alle Seiten)
- [x] Kosten-Messaging: nur Erstgespräch kostenlos
- [x] Neuss als Hauptstandort, Zeven sekundär
- [x] Bewertungs-Stat aus Hero entfernt
- [x] Footer auf allen Seiten vereinheitlicht
- [x] FAQ-Anker-Links gefixt (ablauf.html, finanzberater-duesseldorf.html)
- [x] Rechner-Icons korrigiert (SVG statt falsche Emojis)
- [x] Chart-Bars: nur Prozentzahlen statt abgeschnittene Labels

### Animationen & Effekte (20.02.2026)
- [x] Scroll Reveal: Sections/Cards faden beim Scrollen ein (IntersectionObserver)
- [x] Counter Animation: Zahlen/Stats zählen hoch wenn sichtbar
- [x] Parallax Hero: Dezenter Tiefeneffekt im Hero-Bereich
- [x] Staggered Cards: Karten erscheinen nacheinander
- [x] prefers-reduced-motion wird respektiert
- [x] Zentral via effects.js + effects.css auf allen 18 Seiten

### Rechtliches
- [x] Datenschutzerklärung aktualisiert: GA4, WhatsApp, Instagram, Facebook korrekt deklariert

---

## OFFEN

### Von Erik benötigt
- [ ] **Impressum-Pflichtangaben prüfen**
  - Vermittlerregister-Nummer (§34d/§34f GewO)
  - USt-IdNr. (falls vorhanden)
  - Zuständige IHK / Aufsichtsbehörde
- [ ] **Cal.com Verfügbarkeit** - Arbeitszeiten in Cal.com eintragen
- [ ] **Google My Business** Eintrag erstellen (Neuss + Zeven)

### Technisch
- [ ] Google Search Console verifizieren + Sitemap einreichen
- [ ] Impressum `noindex` entfernen (sollte indexierbar sein)

### Nice-to-Have (Nach Launch)
- [ ] Blog/Ratgeber-Bereich
- [ ] Echte Testimonials / Kundenbewertungen einbauen
- [ ] E-Mail-Marketing Setup
- [ ] Weitere Local-SEO-Seiten bei Bedarf
- [ ] Performance-Audit (Lighthouse Score optimieren)
- [ ] finanzierung.html (Baufinanzierung) - existiert als Orphan, ggf. in Nav aufnehmen oder entfernen

---

## SEITENÜBERSICHT (22 Seiten)

| Seite | Status | Beschreibung |
|-------|--------|-------------|
| index.html | Live | Hauptseite mit Services, Quiz, Testimonials, FAQ |
| versicherungen.html | Live | Versicherungsberatung |
| altersvorsorge.html | Live | Altersvorsorge & Rente |
| vermoegensaufbau.html | Live | Vermögensaufbau & Investment |
| steuervorteile.html | Live | Steuervorteile nutzen |
| haushaltsoptimierung.html | Live | Haushaltsoptimierung |
| rechner.html | Live | Finanzrechner (3 Rechner) |
| ueber-erik.html | Live | Über Erik Manvajler |
| finanzierung.html | Orphan | Baufinanzierung (nicht verlinkt) |
| danke.html | Live | Danke-Seite (noindex) |
| datenschutz.html | Live | Datenschutzerklärung |
| impressum.html | Live | Impressum |
| 404.html | Live | Fehlerseite |
| finanzberater-neuss.html | Live | Local SEO Neuss |
| finanzberater-duesseldorf.html | Live | Local SEO Düsseldorf |
| finanzberater-krefeld.html | Live | Local SEO Krefeld |
| finanzberater-dormagen.html | Live | Local SEO Dormagen |
| finanzberater-kaarst.html | Live | Local SEO Kaarst |
| finanzberater-meerbusch.html | Live | Local SEO Meerbusch |
| finanzberater-moenchengladbach.html | Live | Local SEO Mönchengladbach |
| finanzberater-ratingen.html | Live | Local SEO Ratingen |
| finanzberater-zeven.html | Live | Local SEO Zeven |
| ~~ablauf.html~~ | Gelöscht | Am 20.02. entfernt |

## ZENTRALE DATEIEN

| Datei | Zweck |
|-------|-------|
| nav.js | Einheitliche Navigation (alle 18 Seiten) |
| nav.css | Navigation Styles |
| effects.js | Scroll Reveal, Counter, Parallax |
| effects.css | Animations-Styles |
| responsive.css | Responsive Overrides |

## TECH STACK

| Tool | Zweck |
|------|-------|
| GitHub Pages | Hosting |
| Netcup | Domain (em-finanzen.com) |
| Web3Forms | Kontaktformulare (Key: 18860f30...) |
| Cal.eu | Terminbuchung |
| GA4 | Analytics (G-3X9XSVBPB1) |
| Google Workspace | E-Mail (info@em-finanzen.com) |
| Instagram | @em_finanzen |
| Facebook | EM Finanzen Seite |
| WhatsApp | +49 163 7193317 |

## CSS VARIABLEN

```css
--primary-dark: #0c1929
--primary: #1e3a5f
--gold: #06b6d4
--font-display: 'Cormorant Garamond', serif
--font-body: 'DM Sans', sans-serif
```
