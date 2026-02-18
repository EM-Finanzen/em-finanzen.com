# EM Finanzen - Projektstatus & Launch-Checkliste
**Stand: 18.02.2026, 02:00 Uhr**
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
- [x] Canonical URLs auf allen 15 Seiten
- [x] 404-Fehlerseite erstellt
- [x] HTTPS - SSL-Zertifikat wird von GitHub generiert (läuft automatisch)

### Google Workspace & E-Mail
- [x] Google Workspace eingerichtet
- [x] Domain-Verifizierung (TXT-Record) bestätigt
- [x] MX-Records für Google Mail konfiguriert
- [x] SPF-Record gesetzt
- [x] DKIM-Schlüssel (1024-bit) eingerichtet & bestätigt
- [x] info@em-finanzen.com funktioniert

### Cal.com Terminbuchung
- [x] Cal.com Account (cal.eu/erik-manvajler)
- [x] Google Calendar verbunden (Konflikte + Events)
- [x] Event Type "Kostenlose Erstberatung" (30 Min) erstellt
- [x] Booking-URL auf allen 15 Seiten integriert (alle "Termin buchen" Buttons)

### Website Features (alle 15 Seiten)
- [x] Loading Screen
- [x] Cookie Consent Banner
- [x] Floating Contact Button (E-Mail, Telefon, WhatsApp, Termin)
- [x] Scroll Progress Bar
- [x] Shared Components auf allen Seiten injiziert
- [x] Mobile Bottom Nav entfernt (verdeckte Footer)

### Brand & Design
- [x] Rebranding zu "EM Finanzen" (Navy/Blue/Cyan)
- [x] Crown-SVG-Logo auf allen Seiten
- [x] Fonts lokal gehostet (Cormorant Garamond + DM Sans) - DSGVO-konform
- [x] Favicon auf allen Seiten
- [x] E-Mail überall auf info@em-finanzen.com aktualisiert

### SEO
- [x] Meta Tags auf allen Seiten
- [x] Schema.org LocalBusiness + FAQPage Markup
- [x] Local SEO Seiten (Neuss + Düsseldorf)
- [x] Canonical URLs

---

## OFFEN - VOR LAUNCH

### KRITISCH - Von Erik benötigt

- [ ] **Echte Telefonnummer**
  - Aktuell Platzhalter: "+49 123 456 7890" auf allen Seiten
  - Auch für WhatsApp-Link: "https://wa.me/49XXXXXXXXXXX"

- [ ] **Vollständige Adresse für Impressum**
  - Aktuell nur "41640 Neuss & 27404 Zeven" - Straße + Hausnummer fehlt

- [ ] **Impressum-Pflichtangaben**
  - Handelsregisternummer / Gewerbeanmeldung
  - Zuständige Aufsichtsbehörde (IHK)
  - Berufsbezeichnung und Kammer
  - Vermittlerregister-Nummer (§34d/§34f GewO)
  - USt-IdNr. (falls vorhanden)

- [ ] **Social Media Profile**
  - Instagram, LinkedIn, Facebook URLs (aktuell Platzhalter "#")

- [ ] **Cal.com Verfügbarkeit**
  - Erik muss seine Arbeitszeiten in Cal.com unter "Availability" eintragen

### TECHNISCH - Nächste Session

- [ ] HTTPS aktivieren (SSL-Zertifikat prüfen, Enforce HTTPS)
- [ ] Kontaktformular Backend (Formspree o.ä.)
- [ ] Datenschutzerklärung an tatsächliche Tools anpassen
- [ ] Fehlende MX-Records ergänzen (ALT1, ALT3, ALT4)
- [ ] Google Search Console verifizieren + Sitemap einreichen

### NICE-TO-HAVE (Nach Launch)

- [ ] Google Analytics / GA4 einrichten
- [ ] Google My Business Eintrag (Neuss + Zeven)
- [ ] OG-Image für Social Sharing (1200x630px)
- [ ] Erik-Profilbild (aktuell SVG-Platzhalter)
- [ ] Performance-Optimierung (Bilder, CSS/JS minifizieren)
- [ ] Weitere Local-SEO-Seiten (Krefeld, Mönchengladbach)
- [ ] Blog/Ratgeber-Bereich
- [ ] Echte Testimonials
- [ ] E-Mail-Marketing Setup

---

## BRAND ASSETS

| Datei | Beschreibung |
|-------|-------------|
| favicon.svg | Browser-Tab Icon |
| em-finanzen-logo-dark.svg | Logo dunkel |
| em-finanzen-logo-light.svg | Logo hell |
| em-finanzen-logo-horizontal.svg | Horizontales Logo |
| em-finanzen-mark.svg | Crown-Mark |
| em-finanzen-banner-1500x500.png | Banner PNG |
| em-finanzen-profile-dark-400.png | Profilbild dunkel |
| em-finanzen-profile-light-400.png | Profilbild hell |

## CSS VARIABLEN

```css
--primary-dark: #0c1929
--primary: #1e3a5f
--gold: #06b6d4
--font-display: 'Cormorant Garamond', serif
--font-body: 'DM Sans', sans-serif
```
