/* ============================================
   EM Finanzen - Scroll Effects & Animations
   ============================================ */
(function() {
  'use strict';

  // Skip if user prefers reduced motion
  if (window.matchMedia('(prefers-reduced-motion: reduce)').matches) return;

  // ========================================
  // 1. SCROLL REVEAL
  // ========================================
  function initReveal() {
    // Auto-tag elements for reveal
    var selectors = [
      '.section-header',
      '.service-card', '.promise-card', '.testimonial-card',
      '.asset-card', '.risk-card', '.mistake-card', '.related-card',
      '.why-point', '.process-step',
      '.step-detail', '.overview-box',
      '.calc-card',
      '.cta-box',
      '.faq-section',
      '.trust-items',
      '.comparison-table',
      '.persona-card'
    ];

    // Cards inside grids get stagger
    var gridSelectors = [
      '.services-grid', '.promise-cards', '.testimonials-grid',
      '.asset-grid', '.risk-grid', '.mistakes-grid', '.related-grid',
      '.why-points', '.process-steps',
      '.stats-grid', '.network-grid', '.philosophy-grid',
      '.insurance-grid', '.persona-grid'
    ];

    // Add reveal class to matched elements
    selectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        if (!el.classList.contains('reveal')) {
          el.classList.add('reveal');
        }
      });
    });

    // Add stagger class to grids and reveal to their children
    gridSelectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(grid) {
        grid.classList.add('reveal-stagger');
        Array.prototype.forEach.call(grid.children, function(child) {
          if (!child.classList.contains('reveal')) {
            child.classList.add('reveal');
          }
        });
      });
    });

    // Also reveal standalone sections
    document.querySelectorAll('section > .container').forEach(function(container) {
      var header = container.querySelector('.section-header');
      if (header && !header.classList.contains('reveal')) {
        header.classList.add('reveal');
      }
    });

    // Intersection Observer
    var observer = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          entry.target.classList.add('visible');
          // If it's a stagger parent, also reveal children
          if (entry.target.classList.contains('reveal-stagger')) {
            Array.prototype.forEach.call(entry.target.children, function(child) {
              child.classList.add('visible');
            });
          }
          observer.unobserve(entry.target);
        }
      });
    }, {
      threshold: 0.12,
      rootMargin: '0px 0px -40px 0px'
    });

    // Observe all reveal elements and stagger parents
    document.querySelectorAll('.reveal, .reveal-stagger').forEach(function(el) {
      observer.observe(el);
    });
  }

  // ========================================
  // 2. COUNTER ANIMATION
  // ========================================
  function initCounters() {
    // Find stat numbers and similar countable elements
    var statSelectors = [
      '.hero-stat-num',
      '.stat-number', '.stat-num',
      '.hero-stat-number'
    ];

    var counterEls = [];
    statSelectors.forEach(function(sel) {
      document.querySelectorAll(sel).forEach(function(el) {
        counterEls.push(el);
      });
    });

    if (counterEls.length === 0) return;

    counterEls.forEach(function(el) {
      // Store original text
      el.setAttribute('data-original', el.textContent);
      el.classList.add('counter-animated');
    });

    var counterObserver = new IntersectionObserver(function(entries) {
      entries.forEach(function(entry) {
        if (entry.isIntersecting) {
          animateCounter(entry.target);
          counterObserver.unobserve(entry.target);
        }
      });
    }, { threshold: 0.5 });

    counterEls.forEach(function(el) {
      counterObserver.observe(el);
    });
  }

  function animateCounter(el) {
    var original = el.getAttribute('data-original') || el.textContent;
    // Extract number, prefix, and suffix
    var match = original.match(/^([^\d]*?)([\d.,]+)(.*)$/);
    if (!match) return;

    var prefix = match[1];
    var numStr = match[2];
    var suffix = match[3];

    // Parse the number (handle German format: 1.000 or 7,5)
    var isDecimal = numStr.indexOf(',') !== -1 && numStr.indexOf('.') === -1;
    var hasThousandDot = numStr.indexOf('.') !== -1 && numStr.indexOf(',') === -1;

    var targetNum;
    var decimals = 0;

    if (isDecimal) {
      // German decimal: 7,5
      targetNum = parseFloat(numStr.replace(',', '.'));
      decimals = numStr.split(',')[1].length;
    } else if (hasThousandDot) {
      // German thousands: 1.000
      targetNum = parseInt(numStr.replace(/\./g, ''), 10);
    } else {
      targetNum = parseFloat(numStr.replace(/[^\d.]/g, ''));
    }

    if (isNaN(targetNum) || targetNum === 0) return;

    var duration = 1800;
    var startTime = null;

    function step(timestamp) {
      if (!startTime) startTime = timestamp;
      var progress = Math.min((timestamp - startTime) / duration, 1);
      // Ease out cubic
      var eased = 1 - Math.pow(1 - progress, 3);
      var current = eased * targetNum;

      if (isDecimal) {
        el.textContent = prefix + current.toFixed(decimals).replace('.', ',') + suffix;
      } else if (hasThousandDot) {
        el.textContent = prefix + formatThousands(Math.round(current)) + suffix;
      } else {
        el.textContent = prefix + Math.round(current) + suffix;
      }

      if (progress < 1) {
        requestAnimationFrame(step);
      } else {
        // Ensure exact original value at the end
        el.textContent = original;
      }
    }

    requestAnimationFrame(step);
  }

  function formatThousands(n) {
    return n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, '.');
  }

  // ========================================
  // 3. PARALLAX HERO
  // ========================================
  function initParallax() {
    var hero = document.querySelector('.hero');
    if (!hero) return;

    var heroContent = hero.querySelector('.hero-grid') || hero.querySelector('.container');
    var heroVisual = hero.querySelector('.hero-visual') || hero.querySelector('.hero-stats');

    if (heroContent) heroContent.classList.add('hero-parallax');

    var ticking = false;

    window.addEventListener('scroll', function() {
      if (!ticking) {
        requestAnimationFrame(function() {
          var scrolled = window.scrollY;
          var heroHeight = hero.offsetHeight;

          // Only apply effect while hero is visible
          if (scrolled < heroHeight) {
            if (heroContent) {
              heroContent.style.transform = 'translateY(' + (scrolled * 0.15) + 'px)';
              heroContent.style.opacity = Math.max(1 - scrolled / (heroHeight * 0.8), 0);
            }
            if (heroVisual && heroVisual !== heroContent) {
              heroVisual.style.transform = 'translateY(' + (scrolled * 0.08) + 'px)';
            }
          }
          ticking = false;
        });
        ticking = true;
      }
    }, { passive: true });
  }

  // ========================================
  // INIT - Wait for DOM
  // ========================================
  function init() {
    initReveal();
    initCounters();
    initParallax();
  }

  if (document.readyState === 'loading') {
    document.addEventListener('DOMContentLoaded', init);
  } else {
    // Small delay to ensure other scripts (nav.js) have run
    setTimeout(init, 50);
  }

})();
