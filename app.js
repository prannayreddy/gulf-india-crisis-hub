// app.js — Gulf-India Crisis Resource Hub

(function () {
  'use strict';

  // ==========================================
  // THEME TOGGLE
  // ==========================================
  var themeToggle = document.querySelector('[data-theme-toggle]');
  var root = document.documentElement;
  var theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', function () {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      themeToggle.setAttribute('aria-label', 'Switch to ' + (theme === 'dark' ? 'light' : 'dark') + ' mode');
      updateThemeIcon();
    });
  }

  function updateThemeIcon() {
    if (!themeToggle) return;
    themeToggle.innerHTML = theme === 'dark'
      ? '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><circle cx="12" cy="12" r="5"/><path d="M12 1v2M12 21v2M4.22 4.22l1.42 1.42M18.36 18.36l1.42 1.42M1 12h2M21 12h2M4.22 19.78l1.42-1.42M18.36 5.64l1.42-1.42"/></svg>'
      : '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2"><path d="M21 12.79A9 9 0 1 1 11.21 3 7 7 0 0 0 21 12.79z"/></svg>';
  }

  // ==========================================
  // SVG ICONS
  // ==========================================
  var ICONS = {
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    phoneSm: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    plane: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    globe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    download: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    chevron: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    chevronSm: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    externalLink: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    externalLinkSm: '<svg width="12" height="12" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    tollFree: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
  };

  // Country flag emojis
  var COUNTRY_FLAGS = {
    'UAE': '\uD83C\uDDE6\uD83C\uDDEA',
    'Iran': '\uD83C\uDDEE\uD83C\uDDF7',
    'Qatar': '\uD83C\uDDF6\uD83C\uDDE6',
    'Oman': '\uD83C\uDDF4\uD83C\uDDF2',
    'Saudi Arabia': '\uD83C\uDDF8\uD83C\uDDE6',
    'Kuwait': '\uD83C\uDDF0\uD83C\uDDFC',
    'Bahrain': '\uD83C\uDDE7\uD83C\uDDED',
    'India': '\uD83C\uDDEE\uD83C\uDDF3'
  };

  // ==========================================
  // HELPERS
  // ==========================================
  function cleanPhone(num) {
    return num.replace(/[^+0-9]/g, '');
  }

  function waLink(num) {
    return 'https://wa.me/' + cleanPhone(num).replace('+', '');
  }

  function formatDate(iso) {
    try {
      var d = new Date(iso);
      return d.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch (e) {
      return iso;
    }
  }

  function formatFeedTime(date, time) {
    // date: "2026-03-02", time: "04:38"
    var parts = date.split('-');
    var timeParts = time.split(':');
    var months = ['Jan','Feb','Mar','Apr','May','Jun','Jul','Aug','Sep','Oct','Nov','Dec'];
    var day = parseInt(parts[2], 10);
    var mon = months[parseInt(parts[1], 10) - 1];
    var hr = parseInt(timeParts[0], 10);
    var mn = timeParts[1];
    var ampm = hr >= 12 ? 'PM' : 'AM';
    var h12 = hr % 12;
    if (h12 === 0) h12 = 12;
    return mon + ' ' + day + ', ' + h12 + ':' + mn + ' ' + ampm + ' IST';
  }

  // ==========================================
  // FETCH DATA & RENDER
  // ==========================================
  fetch('./data.json')
    .then(function (res) {
      if (!res.ok) throw new Error('Failed to load data');
      return res.json();
    })
    .then(function (data) { render(data); })
    .catch(function (err) { renderError(err); });

  // ==========================================
  // RENDER FUNCTIONS
  // ==========================================
  function render(data) {
    renderBanner(data);
    renderStatusBadge(data);
    renderMonitoringStatus(data);
    renderActionButtons(data);
    renderFeed(data);
    renderEmbassies(data);
    renderAirlines(data);
    renderCBSE(data);
    renderFooter(data);
  }

  // --- Banner (rotating top 3 advisories) ---
  function renderBanner(data) {
    var el = document.getElementById('top-banner');
    if (!data.advisories || data.advisories.length === 0) {
      // Fallback to static banner if no advisories
      el.innerHTML = '<a href="' + data.cbse.circularUrl + '" target="_blank" rel="noopener noreferrer" class="top-banner">' +
        '<div class="top-banner__title">' + escHtml(data.banner.title) + '</div>' +
        '<div class="top-banner__sub">' + escHtml(data.banner.subtitle) + '</div>' +
        '</a>';
      return;
    }

    // Get top 3 by severity then recency
    var severityOrder = { high: 0, medium: 1, low: 2 };
    var sorted = data.advisories.slice().sort(function (a, b) {
      var sa = severityOrder[a.severity] !== undefined ? severityOrder[a.severity] : 3;
      var sb = severityOrder[b.severity] !== undefined ? severityOrder[b.severity] : 3;
      if (sa !== sb) return sa - sb;
      var da = a.date + 'T' + a.time;
      var db = b.date + 'T' + b.time;
      if (da > db) return -1;
      if (da < db) return 1;
      return 0;
    });
    var top3 = sorted.slice(0, 3);

    var html = '<div class="top-banner-carousel" role="region" aria-label="Breaking news ticker" aria-roledescription="carousel">';
    html += '<div class="top-banner-carousel__track">';
    top3.forEach(function (item, i) {
      var url = item.sourceUrl || '#';
      html += '<a href="' + url + '" target="_blank" rel="noopener noreferrer" class="top-banner-carousel__slide' + (i === 0 ? ' top-banner-carousel__slide--active' : '') + '" data-slide="' + i + '" aria-label="' + escHtml(item.title) + '">';
      html += '<div class="top-banner__title">' + escHtml(item.title) + '</div>';
      html += '<div class="top-banner__sub">' + escHtml(item.summary.length > 90 ? item.summary.substring(0, 87) + '...' : item.summary) + '</div>';
      html += '</a>';
    });
    html += '</div>';

    // Dot indicators
    if (top3.length > 1) {
      html += '<div class="top-banner-carousel__dots" role="tablist" aria-label="News slides">';
      top3.forEach(function (item, i) {
        html += '<button class="top-banner-carousel__dot' + (i === 0 ? ' top-banner-carousel__dot--active' : '') + '" data-dot="' + i + '" role="tab" aria-selected="' + (i === 0 ? 'true' : 'false') + '" aria-label="Slide ' + (i + 1) + '"></button>';
      });
      html += '</div>';
    }
    html += '</div>';

    el.innerHTML = html;

    // Carousel logic
    if (top3.length > 1) {
      initBannerCarousel(el, top3.length);
    }
  }

  function initBannerCarousel(container, count) {
    var current = 0;
    var autoInterval = null;
    var isPaused = false;
    var touchStartX = 0;
    var touchEndX = 0;
    var SWIPE_THRESHOLD = 40;

    function goTo(index) {
      current = ((index % count) + count) % count;
      var slides = container.querySelectorAll('[data-slide]');
      var dots = container.querySelectorAll('[data-dot]');
      for (var i = 0; i < slides.length; i++) {
        if (i === current) {
          slides[i].classList.add('top-banner-carousel__slide--active');
        } else {
          slides[i].classList.remove('top-banner-carousel__slide--active');
        }
      }
      for (var j = 0; j < dots.length; j++) {
        if (j === current) {
          dots[j].classList.add('top-banner-carousel__dot--active');
          dots[j].setAttribute('aria-selected', 'true');
        } else {
          dots[j].classList.remove('top-banner-carousel__dot--active');
          dots[j].setAttribute('aria-selected', 'false');
        }
      }
    }

    function startAuto() {
      stopAuto();
      autoInterval = setInterval(function () {
        if (!isPaused) goTo(current + 1);
      }, 5000);
    }

    function stopAuto() {
      if (autoInterval) { clearInterval(autoInterval); autoInterval = null; }
    }

    // Dot click
    var dots = container.querySelectorAll('[data-dot]');
    for (var d = 0; d < dots.length; d++) {
      dots[d].addEventListener('click', function (e) {
        e.preventDefault();
        goTo(parseInt(this.getAttribute('data-dot'), 10));
        startAuto();
      });
    }

    // Pause on hover
    container.addEventListener('mouseenter', function () { isPaused = true; });
    container.addEventListener('mouseleave', function () { isPaused = false; });

    // Touch swipe
    var track = container.querySelector('.top-banner-carousel__track');
    if (track) {
      track.addEventListener('touchstart', function (e) {
        touchStartX = e.changedTouches[0].screenX;
        isPaused = true;
      }, { passive: true });
      track.addEventListener('touchend', function (e) {
        touchEndX = e.changedTouches[0].screenX;
        var diff = touchStartX - touchEndX;
        if (Math.abs(diff) > SWIPE_THRESHOLD) {
          if (diff > 0) { goTo(current + 1); }
          else { goTo(current - 1); }
        }
        isPaused = false;
        startAuto();
      }, { passive: true });
    }

    startAuto();
  }

  // --- Status badge ---
  function renderStatusBadge(data) {
    var el = document.getElementById('status-badge');
    el.innerHTML = '<span class="status-badge">' +
      '<span class="status-badge__dot" aria-hidden="true"></span>' +
      'Crisis ' + escHtml(data.crisisStatus) +
      '</span>';
  }

  // --- Monitoring Status ---
  function renderMonitoringStatus(data) {
    var el = document.getElementById('monitoring-status');
    if (!el || !data.monitoringInterval) return;

    var lastChecked = new Date(data.lastChecked || data.lastUpdated);
    var intervalMs = data.monitoringInterval * 60 * 1000;
    var now = new Date();

    var nextCheck = new Date(lastChecked.getTime() + intervalMs);
    while (nextCheck <= now) {
      nextCheck = new Date(nextCheck.getTime() + intervalMs);
    }

    var diffMin = Math.floor((now - lastChecked) / 60000);
    var agoStr;
    if (diffMin < 1) agoStr = 'just now';
    else if (diffMin < 60) agoStr = diffMin + ' min ago';
    else if (diffMin < 1440) agoStr = Math.floor(diffMin / 60) + 'h ' + (diffMin % 60) + 'm ago';
    else agoStr = Math.floor(diffMin / 1440) + 'd ago';

    var untilMin = Math.max(0, Math.ceil((nextCheck - now) / 60000));
    var nextStr;
    if (untilMin < 1) nextStr = 'any moment';
    else if (untilMin < 60) nextStr = 'in ' + untilMin + ' min';
    else nextStr = 'in ' + Math.floor(untilMin / 60) + 'h ' + (untilMin % 60) + 'm';

    el.innerHTML = '<span class="monitoring-status__dot" aria-hidden="true"></span>' +
      'Auto-monitored hourly &middot; Last checked ' + agoStr + ' &middot; Next check ' + nextStr;

    // Refresh every 60 seconds
    setTimeout(function () { renderMonitoringStatus(data); }, 60000);
  }

  // --- Action Buttons ---
  function renderActionButtons(data) {
    var el = document.getElementById('action-buttons');
    el.innerHTML =
      '<button class="action-btn action-btn--embassy" onclick="document.getElementById(\'section-embassies\').scrollIntoView({behavior:\'smooth\'})" aria-label="Jump to embassy emergency helplines">' +
        '<span class="action-btn__icon" aria-hidden="true">' + ICONS.phone + '</span>' +
        '<span class="action-btn__text">Embassy Emergency Helplines</span>' +
        '<span class="action-btn__arrow" aria-hidden="true">' + ICONS.chevron + '</span>' +
      '</button>' +
      '<button class="action-btn action-btn--airline" onclick="document.getElementById(\'section-airlines\').scrollIntoView({behavior:\'smooth\'})" aria-label="Jump to airline rebooking and refund links">' +
        '<span class="action-btn__icon" aria-hidden="true">' + ICONS.plane + '</span>' +
        '<span class="action-btn__text">Airline Rebooking &amp; Refund Links</span>' +
        '<span class="action-btn__arrow" aria-hidden="true">' + ICONS.chevron + '</span>' +
      '</button>' +
      '<a href="' + data.madad.url + '" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--madad" aria-label="Register on MADAD portal — opens in new tab">' +
        '<span class="action-btn__icon" aria-hidden="true">' + ICONS.shield + '</span>' +
        '<span class="action-btn__text">Register on MADAD Portal</span>' +
        '<span class="action-btn__arrow" aria-hidden="true">' + ICONS.externalLink + '</span>' +
      '</a>';
  }

  // ==========================================
  // LIVE UPDATES FEED
  // ==========================================
  function renderFeed(data) {
    var container = document.getElementById('feed-content');
    if (!data.advisories || data.advisories.length === 0) {
      var section = document.getElementById('section-feed');
      if (section) section.style.display = 'none';
      return;
    }

    // Sort by date+time descending (newest first)
    var sorted = data.advisories.slice().sort(function (a, b) {
      var da = a.date + 'T' + a.time;
      var db = b.date + 'T' + b.time;
      if (da > db) return -1;
      if (da < db) return 1;
      return 0;
    });

    var SHOW_COUNT = 5;
    var total = sorted.length;
    var html = '<div class="feed-list">';

    sorted.forEach(function (item, i) {
      var hiddenClass = i >= SHOW_COUNT ? ' feed-item--hidden' : '';
      var severityClass = ' feed-item--' + (item.severity || 'low');
      var catClass = ' feed-pill--' + (item.category || 'advisory');

      html += '<div class="feed-item' + severityClass + hiddenClass + '" data-feed-item>';
      html += '<div class="feed-item__content">';

      // Meta row: pill + time
      html += '<div class="feed-item__meta">';
      html += '<span class="feed-pill' + catClass + '">' + escHtml(item.category) + '</span>';
      html += '<span class="feed-item__time">' + formatFeedTime(item.date, item.time) + '</span>';
      html += '</div>';

      // Title
      html += '<div class="feed-item__title">' + escHtml(item.title) + '</div>';

      // Summary
      html += '<p class="feed-item__summary">' + escHtml(item.summary) + '</p>';

      // Source link
      if (item.source && item.sourceUrl) {
        html += '<a href="' + item.sourceUrl + '" target="_blank" rel="noopener noreferrer" class="feed-item__source">' +
          ICONS.externalLinkSm + ' ' + escHtml(item.source) + '</a>';
      }

      html += '</div>'; // feed-item__content
      html += '</div>'; // feed-item
    });

    html += '</div>'; // feed-list

    // Show all button
    if (total > SHOW_COUNT) {
      html += '<button class="feed-show-all" id="feed-show-all-btn">Show all ' + total + ' updates</button>';
    }

    container.innerHTML = html;

    // Show-all toggle
    if (total > SHOW_COUNT) {
      var btn = document.getElementById('feed-show-all-btn');
      if (btn) {
        btn.addEventListener('click', function () {
          var items = container.querySelectorAll('[data-feed-item]');
          var allVisible = true;
          for (var j = SHOW_COUNT; j < items.length; j++) {
            if (items[j].classList.contains('feed-item--hidden')) {
              allVisible = false;
              break;
            }
          }
          for (var k = SHOW_COUNT; k < items.length; k++) {
            if (allVisible) {
              items[k].classList.add('feed-item--hidden');
            } else {
              items[k].classList.remove('feed-item--hidden');
            }
          }
          btn.textContent = allVisible ? 'Show all ' + total + ' updates' : 'Show fewer updates';
        });
      }
    }
  }

  // ==========================================
  // EMBASSIES — COLLAPSIBLE
  // ==========================================
  function renderEmbassies(data) {
    var container = document.getElementById('embassy-cards');
    var html = '';

    // MEA Central — always visible at top (pinned)
    var mea = data.meaCentral;
    html += '<div class="mea-pinned">';
    html += '<div class="mea-pinned__header">';
    html += '<span class="mea-pinned__flag">' + COUNTRY_FLAGS['India'] + '</span>';
    html += '<div>';
    html += '<div class="mea-pinned__title">MEA 24/7 Control Room</div>';
    html += '<div class="mea-pinned__desc">' + escHtml(mea.description) + '</div>';
    html += '</div>';
    html += '</div>';
    html += '<div class="mea-pinned__contacts">';
    mea.numbers.forEach(function (n) {
      html += '<a href="tel:' + cleanPhone(n) + '" class="mea-pinned__contact-btn">' + ICONS.phoneSm + ' ' + escHtml(n) + '</a>';
    });
    if (mea.tollFree) {
      html += '<a href="tel:' + cleanPhone(mea.tollFree) + '" class="mea-pinned__contact-btn">' + ICONS.phoneSm + ' ' + escHtml(mea.tollFree) + ' (Toll-Free)</a>';
    }
    if (mea.whatsapp) {
      html += '<a href="' + waLink(mea.whatsapp) + '" target="_blank" rel="noopener noreferrer" class="mea-pinned__contact-btn">' + ICONS.whatsapp + ' WhatsApp</a>';
    }
    if (mea.email) {
      html += '<a href="mailto:' + mea.email + '" class="mea-pinned__contact-btn">' + ICONS.email + ' ' + escHtml(mea.email) + '</a>';
    }
    html += '</div>';
    html += '</div>';

    // Group embassies by country
    var groups = {};
    var groupOrder = [];
    data.embassies.forEach(function (emb) {
      if (!groups[emb.country]) {
        groups[emb.country] = [];
        groupOrder.push(emb.country);
      }
      groups[emb.country].push(emb);
    });

    groupOrder.forEach(function (country) {
      var flag = COUNTRY_FLAGS[country] || '';
      html += '<div class="embassy-group__label">' + flag + ' ' + escHtml(country) + '</div>';

      groups[country].forEach(function (emb) {
        var primaryNumber = emb.emergency || emb.tollFree || (emb.additionalNumbers && emb.additionalNumbers[0]) || '';
        var primaryHref = primaryNumber ? 'tel:' + cleanPhone(primaryNumber) : '';

        html += '<details class="accordion-item">';
        html += '<summary>';
        html += '<span class="embassy-summary__flag">' + flag + '</span>';
        html += '<span class="embassy-summary">';
        html += '<span class="embassy-summary__city">' + escHtml(emb.city) + '</span>';
        html += '</span>';
        if (primaryNumber) {
          html += '<a href="' + primaryHref + '" class="embassy-summary__number" onclick="event.stopPropagation()">' + ICONS.phoneSm + ' ' + escHtml(primaryNumber) + '</a>';
        }
        html += '<span class="accordion-chevron" aria-hidden="true">' + ICONS.chevronSm + '</span>';
        html += '</summary>';

        // Expanded details
        html += '<div class="accordion-body"><div class="accordion-body__inner"><div class="accordion-body__content">';
        html += '<div style="font-size:var(--text-xs);color:var(--color-text-muted);margin-bottom:var(--space-3)">' + escHtml(emb.mission) + '</div>';

        html += '<div class="card__contacts">';
        if (emb.emergency) {
          html += contactRow(ICONS.phone, 'Emergency', emb.emergency, 'tel:' + cleanPhone(emb.emergency));
        }
        if (emb.tollFree) {
          html += contactRow(ICONS.tollFree, 'Toll-Free', emb.tollFree, 'tel:' + cleanPhone(emb.tollFree));
        }
        if (emb.additionalNumbers) {
          emb.additionalNumbers.forEach(function (n, i) {
            html += contactRow(ICONS.phone, 'Alt ' + (i + 1), n, 'tel:' + cleanPhone(n));
          });
        }
        if (emb.whatsapp) {
          html += contactRow(ICONS.whatsapp, 'WhatsApp', emb.whatsapp, waLink(emb.whatsapp));
        }
        if (emb.email) {
          html += contactRow(ICONS.email, 'Email', emb.email, 'mailto:' + emb.email);
        }
        html += '</div>';

        if (emb.website) {
          html += '<div style="margin-top:var(--space-3)"><a href="' + emb.website + '" target="_blank" rel="noopener noreferrer" style="display:inline-flex;align-items:center;gap:var(--space-2);font-size:var(--text-xs);font-weight:600;color:var(--color-primary);text-decoration:none;padding:var(--space-2) var(--space-3);border:1px solid oklch(from var(--color-primary) l c h / 0.2);border-radius:var(--radius-md);min-height:44px;transition:all var(--transition-interactive)">' +
            ICONS.globe + ' Official Website ' + ICONS.externalLink + '</a></div>';
        }

        html += '</div></div></div>'; // accordion-body
        html += '</details>';
      });
    });

    container.innerHTML = html;
  }

  function contactRow(icon, label, value, href) {
    var tag = href ? 'a' : 'div';
    var attrs = href ? ' href="' + href + '"' + (href.indexOf('http') === 0 ? ' target="_blank" rel="noopener noreferrer"' : '') : '';
    return '<' + tag + ' class="contact-row"' + attrs + '>' +
      '<span class="contact-row__icon" aria-hidden="true">' + icon + '</span>' +
      '<span>' +
        '<span class="contact-row__label">' + escHtml(label) + '</span><br>' +
        '<span class="contact-row__value">' + escHtml(value) + '</span>' +
      '</span>' +
    '</' + tag + '>';
  }

  // --- CBSE ---
  function renderCBSE(data) {
    var el = document.getElementById('cbse-content');
    var cbse = data.cbse;

    var html =
      '<p class="cbse-summary">' + escHtml(cbse.summary) + '</p>' +
      '<a href="' + cbse.circularUrl + '" target="_blank" rel="noopener noreferrer" class="cbse-download">' +
        ICONS.download +
        ' Download Official Circular' +
      '</a>' +
      '<div style="margin-top: var(--space-6);">' +
        '<span class="section__overline" style="margin-bottom: var(--space-3); display: block;">Affected Countries</span>' +
        '<div class="cbse-chips">' +
          cbse.affectedCountries.map(function (c) { return '<span class="chip">' + escHtml(c) + '</span>'; }).join('') +
        '</div>' +
      '</div>' +
      '<div style="margin-top: var(--space-2);">' +
        '<span class="section__overline" style="margin-bottom: var(--space-3); display: block;">Affected Classes</span>' +
        '<div class="cbse-chips">' +
          cbse.affectedClasses.map(function (c) { return '<span class="chip">' + escHtml(c) + '</span>'; }).join('') +
        '</div>' +
      '</div>' +
      '<p class="cbse-note">Next review date: ' + formatReviewDate(cbse.nextReviewDate) + '</p>' +
      '<div class="cbse-meta">' +
        '<span>Issued by: ' + escHtml(cbse.issuedBy) + '</span>' +
        '<span>Issued: ' + escHtml(cbse.issuedDate) + '</span>' +
      '</div>';

    el.innerHTML = html;
  }

  function formatReviewDate(dateStr) {
    try {
      var d = new Date(dateStr + 'T00:00:00+05:30');
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Kolkata'
      });
    } catch (e) {
      return dateStr;
    }
  }

  // ==========================================
  // AIRLINES — COLLAPSIBLE
  // ==========================================
  function renderAirlines(data) {
    // --- Airport status (collapsible summary) ---
    var airportEl = document.getElementById('airport-status');
    var suspendedCount = 0;
    var totalAirports = data.airports.length;
    data.airports.forEach(function (ap) {
      if (ap.status.indexOf('SUSPENDED') !== -1) suspendedCount++;
    });

    var apSummaryText = suspendedCount === totalAirports
      ? 'All ' + totalAirports + ' monitored airports: Operations Suspended'
      : suspendedCount + ' of ' + totalAirports + ' airports suspended';

    var apHtml = '<details>';
    apHtml += '<summary class="airport-summary-card">';
    apHtml += '<span class="airport-summary-card__icon">' + ICONS.alert + '</span>';
    apHtml += '<span class="airport-summary-card__text">';
    apHtml += '<span class="airport-summary-card__title">' + escHtml(apSummaryText) + '</span>';
    apHtml += '<span class="airport-summary-card__sub">Tap to view individual airport status</span>';
    apHtml += '</span>';
    apHtml += '<span class="accordion-chevron" aria-hidden="true">' + ICONS.chevronSm + '</span>';
    apHtml += '</summary>';

    apHtml += '<div class="airport-rows">';
    data.airports.forEach(function (ap) {
      var isSuspended = ap.status.indexOf('SUSPENDED') !== -1;
      var statusClass = isSuspended ? 'airport-row__status--suspended' : 'airport-row__status--disrupted';

      apHtml += '<div class="airport-row">';
      apHtml += '<span class="airport-row__code">' + escHtml(ap.code) + '</span>';
      apHtml += '<span class="airport-row__name">' + escHtml(ap.name) + '</span>';
      apHtml += '<span class="airport-row__status ' + statusClass + '">' + escHtml(ap.status) + '</span>';
      apHtml += '<a href="' + ap.flightStatusUrl + '" target="_blank" rel="noopener noreferrer" class="airport-row__link">Status ' + ICONS.externalLinkSm + '</a>';
      apHtml += '</div>';
    });
    apHtml += '</div>';
    apHtml += '</details>';

    airportEl.innerHTML = apHtml;

    // --- Airline summary banner ---
    var container = document.getElementById('airline-cards');
    var totalAirlines = data.airlines.length;
    var alHtml = '';

    alHtml += '<div class="airline-summary-banner">';
    alHtml += '<span class="airline-summary-banner__icon">' + ICONS.plane + '</span>';
    alHtml += '<span><span class="airline-summary-banner__count">' + totalAirlines + ' airlines monitored</span> — All reporting disruptions</span>';
    alHtml += '</div>';

    // Separate: fully suspended vs disrupted
    var suspended = [];
    var disrupted = [];
    data.airlines.forEach(function (al) {
      var note = (al.crisisNote || '').toLowerCase();
      if (note.indexOf('suspended') !== -1 || note.indexOf('cancelled') !== -1) {
        suspended.push(al);
      } else {
        disrupted.push(al);
      }
    });

    // Render suspended group
    if (suspended.length > 0) {
      alHtml += '<div class="airline-group__label">Fully Suspended / Cancelled</div>';
      suspended.forEach(function (al) {
        alHtml += renderAirlineRow(al);
      });
    }

    // Render disrupted group
    if (disrupted.length > 0) {
      alHtml += '<div class="airline-group__label">Disrupted / Partial Service</div>';
      disrupted.forEach(function (al) {
        alHtml += renderAirlineRow(al);
      });
    }

    container.innerHTML = alHtml;

    // --- Additional airlines ---
    var addEl = document.getElementById('additional-airlines');
    if (data.additionalAirlines && data.additionalAirlines.length) {
      var addHtml = '<div class="additional-airlines-compact">';
      addHtml += '<div class="additional-airlines-compact__title">Other Airlines — Contact Numbers</div>';

      data.additionalAirlines.forEach(function (al) {
        var contact = al.phone || al.whatsapp || '';
        var href = al.phone ? 'tel:' + cleanPhone(al.phone) : (al.whatsapp ? waLink(al.whatsapp) : '');
        var label = al.whatsapp && !al.phone ? 'WhatsApp' : 'Call';

        addHtml += '<div class="additional-airline-compact-row">';
        addHtml += '<span class="additional-airline-compact-row__name">' + escHtml(al.name) + '</span>';
        if (href) {
          addHtml += '<a href="' + href + '"' + (href.indexOf('http') === 0 ? ' target="_blank" rel="noopener noreferrer"' : '') + '>' + label + ': ' + escHtml(contact) + '</a>';
        }
        addHtml += '</div>';
      });

      addHtml += '</div>';
      addEl.innerHTML = addHtml;
    }
  }

  function renderAirlineRow(al) {
    var excerpt = al.crisisNote || '';
    if (excerpt.length > 80) excerpt = excerpt.substring(0, 77) + '...';

    var html = '<details class="accordion-item">';
    html += '<summary>';
    html += '<span class="airline-summary">';
    html += '<span class="airline-summary__name">' + escHtml(al.name) + '</span>';
    html += '<span class="airline-summary__excerpt">' + escHtml(excerpt) + '</span>';
    html += '</span>';
    html += '<span class="accordion-chevron" aria-hidden="true">' + ICONS.chevronSm + '</span>';
    html += '</summary>';

    // Expanded
    html += '<div class="accordion-body"><div class="accordion-body__inner"><div class="accordion-body__content">';

    if (al.crisisNote) {
      html += '<div class="airline-detail__note">' + escHtml(al.crisisNote) + '</div>';
    }

    html += '<div class="airline-detail__actions">';
    html += '<a href="' + al.flightStatusUrl + '" target="_blank" rel="noopener noreferrer" class="airline-detail__btn airline-detail__btn--status">Check Flight Status ' + ICONS.externalLinkSm + '</a>';
    html += '<a href="' + al.refundUrl + '" target="_blank" rel="noopener noreferrer" class="airline-detail__btn airline-detail__btn--refund">Request Refund ' + ICONS.externalLinkSm + '</a>';
    html += '</div>';

    html += '<div class="airline-detail__contacts">';
    if (al.phone) {
      html += contactRow(ICONS.phone, 'Phone', al.phone, 'tel:' + cleanPhone(al.phone));
    }
    if (al.whatsapp) {
      html += contactRow(ICONS.whatsapp, 'WhatsApp', al.whatsapp, waLink(al.whatsapp));
    }
    html += '</div>';

    html += '</div></div></div>'; // accordion-body
    html += '</details>';
    return html;
  }

  // --- Footer ---
  function renderFooter(data) {
    var disclaimerEl = document.getElementById('footer-disclaimer');
    disclaimerEl.innerHTML =
      '<div class="footer-disclaimer">' +
        '<div class="footer-disclaimer__label">' +
          ICONS.alert +
          ' Important Disclaimer' +
        '</div>' +
        '<p class="footer-disclaimer__text">' + escHtml(data.disclaimer) + '</p>' +
      '</div>';

    var sourcesEl = document.getElementById('footer-sources');
    sourcesEl.innerHTML =
      '<div class="footer-sources">' +
        '<div class="footer-sources__title">Data Sources</div>' +
        '<ul class="footer-sources__list" role="list">' +
          data.sources.map(function (s) { return '<li><a href="' + s.url + '" target="_blank" rel="noopener noreferrer">' + escHtml(s.name) + '</a></li>'; }).join('') +
        '</ul>' +
      '</div>';
  }

  // --- Error state ---
  function renderError(err) {
    var main = document.getElementById('main-content');
    main.innerHTML =
      '<div class="error-state">' +
        '<div class="error-state__icon">' + ICONS.alert + '</div>' +
        '<h3>Unable to load crisis data</h3>' +
        '<p>Please check your connection and try again. If the problem persists, contact the embassies directly.</p>' +
        '<button class="error-state__btn" onclick="location.reload()">Try Again</button>' +
      '</div>';
  }

  // --- Escape HTML ---
  function escHtml(str) {
    if (!str) return '';
    var div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

  // ==========================================
  // SHARE BUTTON
  // ==========================================
  var shareBtn = document.getElementById('share-btn');
  var shareToast = document.getElementById('share-toast');

  if (shareBtn) {
    shareBtn.addEventListener('click', function () {
      var shareData = {
        title: 'Gulf-India Crisis Resource Hub',
        text: 'Emergency helplines, flight status, CBSE exam updates for Indians affected by the Gulf crisis.',
        url: 'https://gulf-india-crisis-hub.vercel.app/'
      };

      if (navigator.share) {
        navigator.share(shareData).catch(function () { /* user cancelled */ });
      } else {
        // Fallback: copy URL to clipboard
        var textToCopy = shareData.text + ' ' + shareData.url;
        if (navigator.clipboard && navigator.clipboard.writeText) {
          navigator.clipboard.writeText(textToCopy).then(function () {
            showToast('Link copied to clipboard');
          }).catch(function () {
            fallbackCopy(textToCopy);
          });
        } else {
          fallbackCopy(textToCopy);
        }
      }
    });
  }

  function fallbackCopy(text) {
    var ta = document.createElement('textarea');
    ta.value = text;
    ta.style.position = 'fixed';
    ta.style.opacity = '0';
    document.body.appendChild(ta);
    ta.select();
    try {
      document.execCommand('copy');
      showToast('Link copied to clipboard');
    } catch (e) {
      showToast('Copy this: ' + 'gulf-india-crisis-hub.vercel.app');
    }
    document.body.removeChild(ta);
  }

  function showToast(msg) {
    if (!shareToast) return;
    shareToast.textContent = msg;
    shareToast.classList.add('share-fab__toast--visible');
    setTimeout(function () {
      shareToast.classList.remove('share-fab__toast--visible');
    }, 2500);
  }

})();
