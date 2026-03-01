// app.js — Gulf-India Crisis Resource Hub

(function () {
  'use strict';

  // ==========================================
  // THEME TOGGLE
  // ==========================================
  const themeToggle = document.querySelector('[data-theme-toggle]');
  const root = document.documentElement;
  let theme = window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
  root.setAttribute('data-theme', theme);
  updateThemeIcon();

  if (themeToggle) {
    themeToggle.addEventListener('click', () => {
      theme = theme === 'dark' ? 'light' : 'dark';
      root.setAttribute('data-theme', theme);
      themeToggle.setAttribute('aria-label', `Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`);
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
  const ICONS = {
    phone: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>',
    plane: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M17.8 19.2 16 11l3.5-3.5C21 6 21.5 4 21 3c-1-.5-3 0-4.5 1.5L13 8 4.8 6.2c-.5-.1-.9.1-1.1.5l-.3.5c-.2.5-.1 1 .3 1.3L9 12l-2 3H4l-1 1 3 2 2 3 1-1v-3l3-2 3.5 5.3c.3.4.8.5 1.3.3l.5-.2c.4-.3.6-.7.5-1.2z"/></svg>',
    shield: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"/><path d="m9 12 2 2 4-4"/></svg>',
    whatsapp: '<svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor"><path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 0 1-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 0 1-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 0 1 2.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0 0 12.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 0 0 5.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 0 0-3.48-8.413z"/></svg>',
    email: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><rect width="20" height="16" x="2" y="4" rx="2"/><path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"/></svg>',
    globe: '<svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><circle cx="12" cy="12" r="10"/><path d="M12 2a14.5 14.5 0 0 0 0 20 14.5 14.5 0 0 0 0-20"/><path d="M2 12h20"/></svg>',
    download: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4"/><polyline points="7,10 12,15 17,10"/><line x1="12" y1="15" x2="12" y2="3"/></svg>',
    alert: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m21.73 18-8-14a2 2 0 0 0-3.48 0l-8 14A2 2 0 0 0 4 21h16a2 2 0 0 0 1.73-3z"/><line x1="12" y1="9" x2="12" y2="13"/><line x1="12" y1="17" x2="12.01" y2="17"/></svg>',
    chevron: '<svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="m9 18 6-6-6-6"/></svg>',
    externalLink: '<svg width="14" height="14" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M18 13v6a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2V8a2 2 0 0 1 2-2h6"/><polyline points="15,3 21,3 21,9"/><line x1="10" y1="14" x2="21" y2="3"/></svg>',
    tollFree: '<svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round" stroke-linejoin="round"><path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72c.127.96.361 1.903.7 2.81a2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0 1 22 16.92z"/></svg>'
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
      const d = new Date(iso);
      return d.toLocaleString('en-IN', {
        timeZone: 'Asia/Kolkata',
        day: 'numeric',
        month: 'short',
        year: 'numeric',
        hour: '2-digit',
        minute: '2-digit',
        hour12: true
      });
    } catch {
      return iso;
    }
  }

  // ==========================================
  // FETCH DATA & RENDER
  // ==========================================
  fetch('./data.json')
    .then(res => {
      if (!res.ok) throw new Error('Failed to load data');
      return res.json();
    })
    .then(data => render(data))
    .catch(err => renderError(err));

  // ==========================================
  // RENDER FUNCTIONS
  // ==========================================
  function render(data) {
    renderBanner(data);
    renderStatusBadge(data);
    renderLastUpdated(data);
    renderActionButtons(data);
    renderAdvisories(data);
    renderEmbassies(data);
    renderCBSE(data);
    renderAirlines(data);
    renderFooter(data);
  }

  // --- Banner ---
  function renderBanner(data) {
    const el = document.getElementById('top-banner');
    el.innerHTML = `
      <a href="${data.cbse.circularUrl}" target="_blank" rel="noopener noreferrer" class="top-banner" aria-label="${data.banner.title} \u2014 tap to view official CBSE notice">
        <div class="top-banner__title">${escHtml(data.banner.title)}</div>
        <div class="top-banner__sub">${escHtml(data.banner.subtitle)}</div>
      </a>
    `;
  }

  // --- Status badge ---
  function renderStatusBadge(data) {
    const el = document.getElementById('status-badge');
    el.innerHTML = `
      <span class="status-badge">
        <span class="status-badge__dot" aria-hidden="true"></span>
        Crisis ${escHtml(data.crisisStatus)}
      </span>
    `;
  }

  // --- Last Updated ---
  function renderLastUpdated(data) {
    const el = document.getElementById('last-updated');
    el.textContent = 'Last updated: ' + formatDate(data.lastUpdated);
  }

  // --- Action Buttons ---
  function renderActionButtons(data) {
    const el = document.getElementById('action-buttons');
    el.innerHTML = `
      <button class="action-btn action-btn--embassy" onclick="document.getElementById('section-embassies').scrollIntoView({behavior:'smooth'})" aria-label="Jump to embassy emergency helplines">
        <span class="action-btn__icon" aria-hidden="true">${ICONS.phone}</span>
        <span class="action-btn__text">Embassy Emergency Helplines</span>
        <span class="action-btn__arrow" aria-hidden="true">${ICONS.chevron}</span>
      </button>
      <button class="action-btn action-btn--airline" onclick="document.getElementById('section-airlines').scrollIntoView({behavior:'smooth'})" aria-label="Jump to airline rebooking and refund links">
        <span class="action-btn__icon" aria-hidden="true">${ICONS.plane}</span>
        <span class="action-btn__text">Airline Rebooking &amp; Refund Links</span>
        <span class="action-btn__arrow" aria-hidden="true">${ICONS.chevron}</span>
      </button>
      <a href="${data.madad.url}" target="_blank" rel="noopener noreferrer" class="action-btn action-btn--madad" aria-label="Register on MADAD portal \u2014 opens in new tab">
        <span class="action-btn__icon" aria-hidden="true">${ICONS.shield}</span>
        <span class="action-btn__text">Register on MADAD Portal</span>
        <span class="action-btn__arrow" aria-hidden="true">${ICONS.externalLink}</span>
      </a>
    `;
  }

  // --- Advisories ---
  function renderAdvisories(data) {
    if (!data.advisories || data.advisories.length === 0) return;

    let advisoriesSection = document.getElementById('section-advisories');
    if (!advisoriesSection) {
      advisoriesSection = document.createElement('section');
      advisoriesSection.id = 'section-advisories';
      advisoriesSection.className = 'section';
      advisoriesSection.setAttribute('aria-labelledby', 'advisories-title');
      advisoriesSection.innerHTML = `
        <div class="section__inner">
          <div class="section__header">
            <span class="section__overline">Latest Updates</span>
            <h2 id="advisories-title" class="section__title">New Advisories</h2>
          </div>
          <div id="advisories-content" class="card-grid"></div>
        </div>
      `;
      const main = document.getElementById('main-content');
      const firstSection = main.querySelector('.section');
      if (firstSection) {
        main.insertBefore(advisoriesSection, firstSection);
      } else {
        main.appendChild(advisoriesSection);
      }
    }

    const advisoriesContent = document.getElementById('advisories-content') || advisoriesSection.querySelector('.card-grid');
    advisoriesContent.innerHTML = data.advisories.map(a => `
      <div class="card card--advisory">
        <div class="card__header">
          <h3 class="card__title">${escHtml(a.title)}</h3>
          ${a.timestamp ? `<time class="card__meta">${new Date(a.timestamp).toLocaleString('en-IN', {timeZone: 'Asia/Kolkata'})}</time>` : ''}
        </div>
        <p class="card__body">${escHtml(a.body)}</p>
        ${a.source && a.sourceUrl ? `<a href="${a.sourceUrl}" target="_blank" rel="noopener noreferrer" class="card__link">Source: ${escHtml(a.source)}</a>` : ''}
      </div>
    `).join('');
  }

  // --- Embassies ---
  function renderEmbassies(data) {
    const container = document.getElementById('embassy-cards');
    let html = '';

    data.embassies.forEach(emb => {
      html += `<div class="card">
        <div class="card__city">${escHtml(emb.city)}, ${escHtml(emb.country)}</div>
        <div class="card__mission">${escHtml(emb.mission)}</div>
        <div class="card__contacts">`;

      if (emb.emergency) {
        html += contactRow(ICONS.phone, 'Emergency', emb.emergency, `tel:${cleanPhone(emb.emergency)}`);
      }
      if (emb.tollFree) {
        html += contactRow(ICONS.tollFree, 'Toll-Free', emb.tollFree, `tel:${cleanPhone(emb.tollFree)}`);
      }
      if (emb.additionalNumbers) {
        emb.additionalNumbers.forEach((n, i) => {
          html += contactRow(ICONS.phone, `Alt ${i + 1}`, n, `tel:${cleanPhone(n)}`);
        });
      }
      if (emb.whatsapp) {
        html += contactRow(ICONS.whatsapp, 'WhatsApp', emb.whatsapp, waLink(emb.whatsapp));
      }
      if (emb.email) {
        html += contactRow(ICONS.email, 'Email', emb.email, `mailto:${emb.email}`);
      }

      html += `</div>`;

      if (emb.website) {
        html += `<a href="${emb.website}" target="_blank" rel="noopener noreferrer" class="card__website">
          ${ICONS.globe} Official Website ${ICONS.externalLink}
        </a>`;
      }

      html += `</div>`;
    });

    container.innerHTML = html;

    // MEA Central card
    const meaContainer = document.getElementById('mea-card');
    const mea = data.meaCentral;
    let meaHtml = `<div class="card card--mea">
      <div class="card__city">MEA 24/7 Control Room</div>
      <div class="card__mission">${escHtml(mea.description)}</div>
      <div class="card__contacts">`;

    mea.numbers.forEach(n => {
      meaHtml += contactRow(ICONS.phone, 'Control Room', n, `tel:${cleanPhone(n)}`);
    });
    if (mea.tollFree) {
      meaHtml += contactRow(ICONS.tollFree, 'Toll-Free', mea.tollFree, `tel:${cleanPhone(mea.tollFree)}`);
    }
    if (mea.whatsapp) {
      meaHtml += contactRow(ICONS.whatsapp, 'WhatsApp', mea.whatsapp, waLink(mea.whatsapp));
    }
    if (mea.email) {
      meaHtml += contactRow(ICONS.email, 'Email', mea.email, `mailto:${mea.email}`);
    }

    meaHtml += `</div></div>`;
    meaContainer.innerHTML = meaHtml;
  }

  function contactRow(icon, label, value, href) {
    const tag = href ? 'a' : 'div';
    const attrs = href ? ` href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}` : '';
    return `<${tag} class="contact-row"${attrs}>
      <span class="contact-row__icon" aria-hidden="true">${icon}</span>
      <span>
        <span class="contact-row__label">${escHtml(label)}</span><br>
        <span class="contact-row__value">${escHtml(value)}</span>
      </span>
    </${tag}>`;
  }

  // --- CBSE ---
  function renderCBSE(data) {
    const el = document.getElementById('cbse-content');
    const cbse = data.cbse;

    let html = `
      <p class="cbse-summary">${escHtml(cbse.summary)}</p>
      <a href="${cbse.circularUrl}" target="_blank" rel="noopener noreferrer" class="cbse-download">
        ${ICONS.download}
        Download Official Circular
      </a>

      <div style="margin-top: var(--space-6);">
        <span class="section__overline" style="margin-bottom: var(--space-3); display: block;">Affected Countries</span>
        <div class="cbse-chips">
          ${cbse.affectedCountries.map(c => `<span class="chip">${escHtml(c)}</span>`).join('')}
        </div>
      </div>

      <div style="margin-top: var(--space-2);">
        <span class="section__overline" style="margin-bottom: var(--space-3); display: block;">Affected Classes</span>
        <div class="cbse-chips">
          ${cbse.affectedClasses.map(c => `<span class="chip">${escHtml(c)}</span>`).join('')}
        </div>
      </div>

      <p class="cbse-note">Next review date: ${formatReviewDate(cbse.nextReviewDate)}</p>

      <div class="cbse-meta">
        <span>Issued by: ${escHtml(cbse.issuedBy)}</span>
        <span>Issued: ${escHtml(cbse.issuedDate)}</span>
      </div>
    `;

    el.innerHTML = html;
  }

  function formatReviewDate(dateStr) {
    try {
      const d = new Date(dateStr + 'T00:00:00+05:30');
      return d.toLocaleDateString('en-IN', {
        day: 'numeric',
        month: 'long',
        year: 'numeric',
        timeZone: 'Asia/Kolkata'
      });
    } catch {
      return dateStr;
    }
  }

  // --- Airlines ---
  function renderAirlines(data) {
    // Airport status
    const airportEl = document.getElementById('airport-status');
    let airportHtml = '<div class="card-grid" style="grid-template-columns: 1fr;">';

    data.airports.forEach(ap => {
      const isSuspended = ap.status.includes('SUSPENDED');
      const cardClass = isSuspended ? 'card--airport-red' : 'card--airport-amber';
      const statusClass = isSuspended ? 'airport-card__status--suspended' : 'airport-card__status--disrupted';

      airportHtml += `
        <div class="airport-card ${cardClass}">
          <div class="airport-card__left">
            <div class="airport-card__code">${escHtml(ap.code)}</div>
            <div class="airport-card__name">${escHtml(ap.name)}</div>
          </div>
          <span class="airport-card__status ${statusClass}">${escHtml(ap.status)}</span>
          <a href="${ap.flightStatusUrl}" target="_blank" rel="noopener noreferrer" class="airport-card__link">
            Check Status ${ICONS.externalLink}
          </a>
        </div>`;
    });

    airportHtml += '</div>';
    airportEl.innerHTML = airportHtml;

    // Main airline cards
    const container = document.getElementById('airline-cards');
    let html = '';

    data.airlines.forEach(al => {
      html += `<div class="airline-card">
        <div class="airline-card__name">${escHtml(al.name)}</div>
        <div class="airline-card__actions">
          <a href="${al.flightStatusUrl}" target="_blank" rel="noopener noreferrer" class="airline-btn airline-btn--status">
            Check Flight Status
          </a>
          <a href="${al.refundUrl}" target="_blank" rel="noopener noreferrer" class="airline-btn airline-btn--refund">
            Request Refund
          </a>
        </div>
        <div class="airline-card__contacts">`;

      if (al.phone) {
        html += contactRow(ICONS.phone, 'Phone', al.phone, `tel:${cleanPhone(al.phone)}`);
      }
      if (al.whatsapp) {
        html += contactRow(ICONS.whatsapp, 'WhatsApp', al.whatsapp, waLink(al.whatsapp));
      }

      html += `</div>`;

      if (al.crisisNote) {
        html += `<div class="airline-card__note">${escHtml(al.crisisNote)}</div>`;
      }

      html += `</div>`;
    });

    container.innerHTML = html;

    // Additional airlines
    const addEl = document.getElementById('additional-airlines');
    if (data.additionalAirlines && data.additionalAirlines.length) {
      let addHtml = `<div class="additional-airlines">
        <div class="additional-airlines__title">Other Airlines \u2014 Contact Numbers</div>
        <div class="additional-airlines__list">`;

      data.additionalAirlines.forEach(al => {
        const contact = al.phone || al.whatsapp || '';
        const href = al.phone ? `tel:${cleanPhone(al.phone)}` : (al.whatsapp ? waLink(al.whatsapp) : '');
        const label = al.whatsapp && !al.phone ? 'WhatsApp' : 'Call';

        addHtml += `<div class="additional-airline-row">
          <span class="additional-airline-row__name">${escHtml(al.name)}</span>
          ${href ? `<a href="${href}" ${href.startsWith('http') ? 'target="_blank" rel="noopener noreferrer"' : ''}>${label}: ${escHtml(contact)}</a>` : ''}
        </div>`;
      });

      addHtml += '</div></div>';
      addEl.innerHTML = addHtml;
    }
  }

  // --- Footer ---
  function renderFooter(data) {
    // Disclaimer
    const disclaimerEl = document.getElementById('footer-disclaimer');
    disclaimerEl.innerHTML = `
      <div class="footer-disclaimer">
        <div class="footer-disclaimer__label">
          ${ICONS.alert}
          Important Disclaimer
        </div>
        <p class="footer-disclaimer__text">${escHtml(data.disclaimer)}</p>
      </div>
    `;

    // Sources
    const sourcesEl = document.getElementById('footer-sources');
    let sourcesHtml = `
      <div class="footer-sources">
        <div class="footer-sources__title">Data Sources</div>
        <ul class="footer-sources__list" role="list">
          ${data.sources.map(s => `<li><a href="${s.url}" target="_blank" rel="noopener noreferrer">${escHtml(s.name)}</a></li>`).join('')}
        </ul>
      </div>
    `;
    sourcesEl.innerHTML = sourcesHtml;
  }

  // --- Error state ---
  function renderError(err) {
    const main = document.getElementById('main-content');
    main.innerHTML = `
      <div class="error-state">
        <div class="error-state__icon">${ICONS.alert}</div>
        <h3>Unable to load crisis data</h3>
        <p>Please check your connection and try again. If the problem persists, contact the embassies directly.</p>
        <button class="error-state__btn" onclick="location.reload()">Try Again</button>
      </div>
    `;
  }

  // --- Escape HTML ---
  function escHtml(str) {
    if (!str) return '';
    const div = document.createElement('div');
    div.textContent = str;
    return div.innerHTML;
  }

})();
