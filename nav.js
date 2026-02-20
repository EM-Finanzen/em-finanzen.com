/* ============================================
   EM Finanzen - Unified Navigation
   ============================================ */
(function() {
  'use strict';

  // Detect current page
  var path = window.location.pathname.split('/').pop() || 'index.html';
  if (path === '' || path === '/') path = 'index.html';

  // Service pages for dropdown
  var services = [
    { href: 'versicherungen.html', label: 'Versicherungen', icon: 'shield' },
    { href: 'altersvorsorge.html', label: 'Altersvorsorge', icon: 'piggy' },
    { href: 'vermoegensaufbau.html', label: 'Verm\u00f6gensaufbau', icon: 'chart' },
    { href: 'steuervorteile.html', label: 'Steuervorteile', icon: 'receipt' },
    { href: 'haushaltsoptimierung.html', label: 'Haushaltsoptimierung', icon: 'wallet' }
  ];

  // Check if current page is a service page
  var isServicePage = services.some(function(s) { return s.href === path; });

  // SVG icons for dropdown items
  var icons = {
    shield: '<svg viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/></svg>',
    piggy: '<svg viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M8 12h.01M12 12h.01M16 12h.01"/><path d="M12 8v1M12 15v1"/></svg>',
    chart: '<svg viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="22 12 18 12 15 21 9 3 6 12 2 12"/></svg>',
    receipt: '<svg viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M4 2v20l2-1 2 1 2-1 2 1 2-1 2 1 2-1 2 1V2l-2 1-2-1-2 1-2-1-2 1-2-1-2 1Z"/><path d="M8 10h8M8 14h4"/></svg>',
    wallet: '<svg viewBox="0 0 24 24" fill="none" stroke="#1e3a5f" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect x="1" y="4" width="22" height="16" rx="2" ry="2"/><line x1="1" y1="10" x2="23" y2="10"/></svg>'
  };

  // Build dropdown items HTML
  var dropdownItems = '';
  for (var i = 0; i < services.length; i++) {
    var s = services[i];
    var activeClass = s.href === path ? ' active' : '';
    dropdownItems += '<a href="' + s.href + '" class="nav-dropdown-item' + activeClass + '">' +
      '<span class="nav-dropdown-icon">' + icons[s.icon] + '</span>' +
      '<span>' + s.label + '</span></a>';
  }

  // Logo SVG
  var logoSVG = '<svg width="32" height="16" viewBox="0 0 60 30" fill="none">' +
    '<defs><linearGradient id="navCrown" x1="12" y1="14" x2="48" y2="14" gradientUnits="userSpaceOnUse">' +
    '<stop stop-color="#06b6d4"/><stop offset=".5" stop-color="#3b82f6"/><stop offset="1" stop-color="#1e40af"/>' +
    '</linearGradient></defs>' +
    '<path d="M12 26 L20 10 L26 18 L30 4 L34 18 L40 10 L48 26" stroke="url(#navCrown)" stroke-width="3" stroke-linecap="round" stroke-linejoin="round" fill="none"/>' +
    '<circle cx="20" cy="9" r="2.5" fill="#3b82f6"/><circle cx="30" cy="3" r="3" fill="#1e40af"/><circle cx="40" cy="9" r="2.5" fill="#3b82f6"/></svg>';

  // Active states for nav links
  var aboutActive = (path === 'ueber-erik.html') ? ' active' : '';
  var leistungenActive = isServicePage ? ' active' : '';

  // Build header inner HTML (logo + burger only)
  var headerHTML = '<div class="header-inner">' +
    // Logo
    '<a href="index.html" class="logo" aria-label="EM Finanzen - Startseite">' +
      '<div class="logo-icon">' + logoSVG +
        '<span style="font-family:\'Cormorant Garamond\',serif;font-weight:700;font-size:24px;letter-spacing:0.08em;color:#1e3a5f;line-height:1;margin-top:-2px;">EM</span>' +
        '<div style="width:30px;height:2px;background:linear-gradient(90deg,#06b6d4,#3b82f6,#1e40af);border-radius:1px;margin-top:1px;"></div>' +
      '</div>' +
      '<div style="display:flex;flex-direction:column;">' +
        '<div class="logo-text">EM Finanzen</div>' +
        '<div class="logo-tagline">Dein Weg. Deine Zukunft.</div>' +
      '</div>' +
    '</a>' +

    // Desktop nav (inline in header)
    '<nav class="nav-desktop" id="navDesktop" role="navigation" aria-label="Hauptnavigation">' +
      '<div class="nav-dropdown" id="navDropdownDesktop">' +
        '<a href="#" class="nav-link nav-dropdown-trigger' + leistungenActive + '" onclick="window.emNav.toggleDropdown(event,\'navDropdownDesktop\')" aria-expanded="false" aria-haspopup="true">' +
          'Leistungen ' +
          '<svg class="nav-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</a>' +
        '<div class="nav-dropdown-menu" role="menu">' + dropdownItems + '</div>' +
      '</div>' +
      '<a href="ueber-erik.html" class="nav-link' + aboutActive + '">\u00dcber Erik</a>' +
      '<a href="https://cal.eu/erik-manvajler/erstberatung" class="nav-cta" target="_blank" rel="noopener">Termin buchen</a>' +
    '</nav>' +

    // Burger button
    '<button class="nav-burger" id="navBurger" onclick="window.emNav.toggle()" aria-label="Men\u00fc \u00f6ffnen" aria-expanded="false">' +
      '<span class="nav-burger-line"></span>' +
      '<span class="nav-burger-line"></span>' +
      '<span class="nav-burger-line"></span>' +
    '</button>' +
  '</div>';

  // Build mobile menu (separate from header - appended to body)
  var mobileMenuHTML =
    '<div class="nav-overlay" id="navOverlay" onclick="window.emNav.close()"></div>' +
    '<nav class="nav-mobile" id="navMobile" role="navigation" aria-label="Mobile Navigation">' +
      // Leistungen dropdown
      '<div class="nav-dropdown" id="navDropdownMobile">' +
        '<a href="#" class="nav-link nav-dropdown-trigger' + leistungenActive + '" onclick="window.emNav.toggleDropdown(event,\'navDropdownMobile\')">' +
          'Leistungen ' +
          '<svg class="nav-dropdown-arrow" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><polyline points="6 9 12 15 18 9"/></svg>' +
        '</a>' +
        '<div class="nav-dropdown-menu" role="menu">' + dropdownItems + '</div>' +
      '</div>' +

      '<a href="ueber-erik.html" class="nav-link' + aboutActive + '">\u00dcber Erik</a>' +
      '<a href="rechner.html" class="nav-link' + (path === 'rechner.html' ? ' active' : '') + '">Finanzrechner</a>' +
      '<a href="' + (path === 'index.html' ? '#faq' : 'index.html#faq') + '" class="nav-link">FAQ</a>' +

      // Mobile legal links
      '<div class="nav-mobile-legal">' +
        '<a href="impressum.html">Impressum</a>' +
        '<a href="datenschutz.html">Datenschutz</a>' +
      '</div>' +

      // Mobile CTA area
      '<div class="nav-mobile-cta">' +
        '<a href="https://cal.eu/erik-manvajler/erstberatung" class="cta-book" target="_blank" rel="noopener">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><rect x="3" y="4" width="18" height="18" rx="2" ry="2"/><line x1="16" y1="2" x2="16" y2="6"/><line x1="8" y1="2" x2="8" y2="6"/><line x1="3" y1="10" x2="21" y2="10"/></svg>' +
          'Termin buchen' +
        '</a>' +
        '<a href="tel:+491637193317" class="cta-phone">' +
          '<svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"/></svg>' +
          'Jetzt anrufen' +
        '</a>' +
      '</div>' +
    '</nav>';

  // Inject header
  var header = document.getElementById('header');
  if (header) {
    header.innerHTML = headerHTML;
  }

  // Inject mobile menu into body (outside header to avoid backdrop-filter containing block)
  var mobileContainer = document.createElement('div');
  mobileContainer.id = 'navMobileContainer';
  mobileContainer.innerHTML = mobileMenuHTML;
  document.body.appendChild(mobileContainer);

  // Nav controller
  window.emNav = {
    isOpen: false,

    toggle: function() {
      if (this.isOpen) {
        this.close();
      } else {
        this.open();
      }
    },

    open: function() {
      var menu = document.getElementById('navMobile');
      var burger = document.getElementById('navBurger');
      var overlay = document.getElementById('navOverlay');
      if (!menu) return;

      menu.classList.add('open');
      overlay.classList.add('visible');
      burger.classList.add('active');
      burger.setAttribute('aria-expanded', 'true');
      burger.setAttribute('aria-label', 'Men\u00fc schlie\u00dfen');
      document.body.style.overflow = 'hidden';
      this.isOpen = true;
    },

    close: function() {
      var menu = document.getElementById('navMobile');
      var burger = document.getElementById('navBurger');
      var overlay = document.getElementById('navOverlay');
      if (!menu) return;

      menu.classList.remove('open');
      overlay.classList.remove('visible');
      burger.classList.remove('active');
      burger.setAttribute('aria-expanded', 'false');
      burger.setAttribute('aria-label', 'Men\u00fc \u00f6ffnen');
      document.body.style.overflow = '';
      this.isOpen = false;

      // Close dropdown too
      var dropdown = document.getElementById('navDropdownMobile');
      if (dropdown) dropdown.classList.remove('open');
    },

    toggleDropdown: function(e, id) {
      e.preventDefault();
      var dropdown = document.getElementById(id);
      if (!dropdown) return;
      var trigger = dropdown.querySelector('.nav-dropdown-trigger');
      var isOpen = dropdown.classList.contains('open');

      dropdown.classList.toggle('open');
      if (trigger) trigger.setAttribute('aria-expanded', isOpen ? 'false' : 'true');
    }
  };

  // Scroll behavior
  window.addEventListener('scroll', function() {
    var header = document.getElementById('header');
    if (!header) return;
    if (window.scrollY > 40) {
      header.classList.add('scrolled');
    } else {
      header.classList.remove('scrolled');
    }
  }, { passive: true });

  // Close menu on ESC
  document.addEventListener('keydown', function(e) {
    if (e.key === 'Escape' && window.emNav.isOpen) {
      window.emNav.close();
    }
  });

  // Close desktop dropdown on click outside
  document.addEventListener('click', function(e) {
    var dropdown = document.getElementById('navDropdownDesktop');
    if (dropdown && !dropdown.contains(e.target)) {
      dropdown.classList.remove('open');
      var trigger = dropdown.querySelector('.nav-dropdown-trigger');
      if (trigger) trigger.setAttribute('aria-expanded', 'false');
    }
  });

  // Close mobile menu on nav link click
  document.addEventListener('click', function(e) {
    if (!window.emNav.isOpen) return;
    if (e.target.classList.contains('nav-dropdown-item') ||
        (e.target.classList.contains('nav-link') && !e.target.classList.contains('nav-dropdown-trigger'))) {
      window.emNav.close();
    }
  });

})();
