/* =============================================================
   RENDER.JS — Portfolio Template Engine
   Reads CONFIG (from config.js) and builds the entire page.
   ============================================================= */

(function() {
  'use strict';

  const C = CONFIG;  // shorthand

  /* ── HELPERS ──────────────────────────────────────────── */
  function t(fa, en) {
    /* Returns the right text based on current language */
    const lang = document.documentElement.dataset.lang || 'fa';
    return lang === 'fa' ? (fa || en) : (en || fa);
  }

  function qs(sel) { return document.querySelector(sel); }
  function qsa(sel) { return document.querySelectorAll(sel); }
  function html(el, h) { if (el) el.innerHTML = h; }

  /* ── NAV ──────────────────────────────────────────────── */
  const navItems = [
    { id: 'home',          icon: 'uil-estate',     fa: 'خانه',      en: 'Home' },
    { id: 'about',         icon: 'uil-user',       fa: 'درباره',    en: 'About' },
    { id: 'skills',        icon: 'uil-file-alt',   fa: 'مهارت‌ها',  en: 'Skills' },
    { id: 'qualification', icon: 'uil-graduation-cap', fa: 'سوابق', en: 'Qualification' },
    { id: 'portfolio',     icon: 'uil-scenery',    fa: 'نمونه‌کار', en: 'Portfolio' },
    { id: 'certification', icon: 'uil-newspaper',  fa: 'گواهینامه‌ها', en: 'Certs' },
    { id: 'contact',       icon: 'uil-message',    fa: 'تماس',     en: 'Contact' },
  ];
  html(qs('#nav-list'), navItems.map(item => `
    <li class="nav__item">
      <a href="#${item.id}" class="nav__link">
        <i class="uil ${item.icon} nav__icon"></i>
        <span class="rtl-text">${item.fa}</span>
        <span class="ltr-text">${item.en}</span>
      </a>
    </li>
  `).join(''));

  /* ── LOGO ─────────────────────────────────────────────── */
  html(qs('.nav__logo'), t(C.name.fa, C.name.en));

  /* ── HOME ──────────────────────────────────────────────── */
  // Social links
  html(qs('#home-social'), C.social.map(s =>
    `<a href="${s.url}" target="_blank" class="home__social-icon"><i class="uil ${s.icon}"></i></a>`
  ).join(''));

  // Profile image
  qs('#profile-img')?.setAttribute('href', C.profileImg);
  qs('#about-img')?.setAttribute('src', C.profileImg);
  qs('#about-img')?.setAttribute('alt', C.name.en);

  // Hero text
  html(qs('#hero-name'), t(C.name.fa, C.name.en));
  html(qs('#hero-title'), t(C.title.fa, C.title.en));
  html(qs('#hero-bio'), t(C.bio.fa, C.bio.en));

  /* ── ABOUT ─────────────────────────────────────────────── */
  html(qs('#about-text'), t(C.about.fa, C.about.en));
  html(qs('#about-stats'), C.stats.map(s =>
    `<div>
      <span class="about__info-title">${s.value}</span>
      <span class="about__info-name">${t(s.label_fa, s.label_en)}</span>
    </div>`
  ).join(''));
  qs('#cv-download')?.setAttribute('href', C.resumeUrl);

  /* ── SKILLS ────────────────────────────────────────────── */
  html(qs('#skills-container'), C.skills.map((cat, ci) => `
    <div class="skills__content ${ci === 0 ? 'skills__open' : 'skills__close'}">
      <div class="skills__header">
        <i class="uil ${cat.icon} skills__icon"></i>
        <div>
          <h1 class="skills__title">${t(cat.title_fa, cat.title_en)}</h1>
          <span class="skills__subtitle">${t(cat.subtitle_fa, cat.subtitle_en)}</span>
        </div>
        <i class="uil uil-angle-down skills__arrow"></i>
      </div>
      <div class="skills__list grid">
        ${cat.items.map(sk => `
          <div class="skills__data">
            <div class="skills__titles">
              <h3 class="skills__name">${sk.name}</h3>
              <span class="skills__number">${sk.pct}%</span>
            </div>
            <div class="skills__bar">
              <span class="skills__percentage" style="width:${sk.pct}%"></span>
            </div>
          </div>
        `).join('')}
      </div>
    </div>
  `).join(''));

  /* ── EDUCATION ─────────────────────────────────────────── */
  html(qs('#education'), C.education.map((edu, i) => `
    <div class="qualification__data">
      <div></div>
      <div>
        <span class="qualification__rounder"></span>
        ${i < C.education.length - 1 ? '<span class="qualification__line"></span>' : ''}
      </div>
      <div>
        <h3 class="qualification__title">${t(edu.title_fa, edu.title_en)}</h3>
        <span class="qualification__subtitle">${t(edu.subtitle_fa, edu.subtitle_en)}</span>
        <div class="qualification__calendar"><i class="uil uil-calendar-alt"></i> ${edu.date}</div>
      </div>
    </div>
  `).join(''));

  /* ── WORK EXPERIENCE ───────────────────────────────────── */
  html(qs('#work'), C.experience.map((exp, i) => `
    <div class="qualification__data">
      ${exp.align === 'left' ? `
        <div>
          <h3 class="qualification__title">${t(exp.title_fa, exp.title_en)}</h3>
          <span class="qualification__subtitle">${t(exp.subtitle_fa, exp.subtitle_en)}</span>
          <div class="qualification__calendar"><i class="uil uil-calendar-alt"></i> ${exp.date}</div>
        </div>
        <div>
          <span class="qualification__rounder"></span>
          ${i < C.experience.length - 1 ? '<span class="qualification__line"></span>' : ''}
        </div>
        <div></div>
      ` : `
        <div></div>
        <div>
          <span class="qualification__rounder"></span>
          ${i < C.experience.length - 1 ? '<span class="qualification__line"></span>' : ''}
        </div>
        <div>
          <h3 class="qualification__title">${t(exp.title_fa, exp.title_en)}</h3>
          <span class="qualification__subtitle">${t(exp.subtitle_fa, exp.subtitle_en)}</span>
          <div class="qualification__calendar"><i class="uil uil-calendar-alt"></i> ${exp.date}</div>
        </div>
      `}
    </div>
  `).join(''));

  /* ── PORTFOLIO (Swiper slides) ─────────────────────────── */
  html(qs('#portfolio-wrapper'), C.projects.map(p => `
    <div class="portfolio__content grid swiper-slide">
      <div class="portfolio__data">
        <h3 class="portfolio__title">${t(p.title_fa, p.title_en)}</h3>
        <p class="portfolio__description">${t(p.desc_fa, p.desc_en)}</p>
        <div class="portfolio__tags">
          ${p.tech.split(', ').map(tag => `<span class="portfolio__tag">${tag}</span>`).join('')}
        </div>
        <div style="display:flex;gap:.5rem;flex-wrap:wrap">
          <a href="${p.github}" class="button button--flex button--small portfolio__button" target="_blank">
            GitHub <i class="uil uil-arrow-right button__icon"></i>
          </a>
          ${p.demo ? `
            <a href="${p.demo}" class="button button--flex button--small button--link portfolio__button" target="_blank">
              <span class="rtl-text">نمایش</span><span class="ltr-text">Demo</span>
              <i class="uil uil-external-link-alt button__icon"></i>
            </a>
          ` : ''}
        </div>
      </div>
    </div>
  `).join(''));

  /* ── CERTIFICATIONS ────────────────────────────────────── */
  html(qs('#cert-container'), C.certificates.map(cert => `
    <div class="certification__content">
      <div>
        <p style="text-align:center">
          <img src="${cert.img}" onerror="this.style.display='none'" alt="" class="certification__img" />
        </p>
        <h3 class="certification__title">${cert.title}</h3>
        <span class="certification__subtitle">${cert.subtitle}</span>
      </div>
      <a class="button button--flex button--small button--link certification__button"
         href="${cert.url}" target="${cert.url !== '#' ? '_blank' : '_self'}">
        <span class="rtl-text">مشاهده مدرک</span>
        <span class="ltr-text">View Certificate</span>
        <i class="uil uil-arrow-right button__icon"></i>
      </a>
    </div>
  `).join(''));

  /* ── CONTACT ───────────────────────────────────────────── */
  html(qs('#contact-info'), `
    <div class="contact__information">
      <i class="uil uil-phone contact__icon"></i>
      <div>
        <h3 class="contact__title">${t('تلفن', 'Phone')}</h3>
        <span class="contact__subtitle">${C.contact.phone}</span>
      </div>
    </div>
    <div class="contact__information">
      <i class="uil uil-envelope contact__icon"></i>
      <div>
        <h3 class="contact__title">Email</h3>
        <span class="contact__subtitle">${C.contact.email}</span>
      </div>
    </div>
    <div class="contact__information">
      <i class="uil uil-map-marker contact__icon"></i>
      <div>
        <h3 class="contact__title">${t('موقعیت', 'Location')}</h3>
        <span class="contact__subtitle">${t(C.contact.location_fa, C.contact.location_en)}</span>
      </div>
    </div>
  `);

  /* ── FOOTER ────────────────────────────────────────────── */
  html(qs('#footer-name'), t(C.name.fa, C.name.en));
  html(qs('#footer-socials'), C.social.map(s =>
    `<a href="${s.url}" target="_blank" class="footer__social"><i class="uil ${s.icon}"></i></a>`
  ).join(''));
  qs('.footer__copy').textContent = `© ${new Date().getFullYear()} ${C.name.en}`;

  /* ── INTERACTIONS ──────────────────────────────────────── */

  // Mobile menu
  const navMenu = qs('#nav-menu');
  qs('#nav-toggle')?.addEventListener('click', () => navMenu.classList.add('show-menu'));
  qs('#nav-close')?.addEventListener('click', () => navMenu.classList.remove('show-menu'));
  qsa('.nav__link').forEach(n => n.addEventListener('click', () => navMenu.classList.remove('show-menu')));

  // Skills accordion
  qsa('.skills__header').forEach(h => {
    h.addEventListener('click', function() {
      qsa('.skills__content').forEach(c => c.className = 'skills__content skills__close');
      if (this.parentNode.className.includes('skills__close'))
        this.parentNode.className = 'skills__content skills__open';
    });
  });

  // Qualification tabs
  qsa('[data-target]').forEach(tab => {
    tab.addEventListener('click', () => {
      const target = qs(tab.dataset.target);
      qsa('[data-content]').forEach(tc => { tc.classList.remove('qualification__active'); tc.style.display = 'none'; });
      target.classList.add('qualification__active'); target.style.display = 'block';
      qsa('[data-target]').forEach(t => t.classList.remove('qualification__active'));
      tab.classList.add('qualification__active');
    });
  });

  // Swiper carousel
  new Swiper('.swiper-container', {
    cssMode: true, loop: true,
    navigation: { nextEl: '.swiper-button-next', prevEl: '.swiper-button-prev' },
    pagination: { el: '.swiper-pagination', clickable: true },
    mousewheel: false,
  });

  // Scrollspy
  const sections = qsa('section[id]');
  window.addEventListener('scroll', () => {
    const scrollY = window.pageYOffset;
    sections.forEach(current => {
      const h = current.offsetHeight, top = current.offsetTop - 50, id = current.getAttribute('id');
      qs(`.nav__menu a[href*=${id}]`)?.classList.toggle('active-link', scrollY > top && scrollY <= top + h);
    });
    // Header shadow
    qs('#header')?.classList.toggle('scroll-header', scrollY >= 80);
    // Scroll-up button
    qs('#scroll-up')?.classList.toggle('show-scroll', scrollY >= 560);
  });

  // Dark/light theme
  const themeBtn = qs('#theme-button');
  const selectedTheme = localStorage.getItem('selected-theme');
  const selectedIcon = localStorage.getItem('selected-icon');
  const getTheme = () => document.body.classList.contains('dark') ? 'dark' : 'light';
  const getIcon = () => themeBtn.classList.contains('uil-sun') ? 'uil-moon' : 'uil-sun';
  if (selectedTheme) {
    document.body.classList[selectedTheme === 'dark' ? 'add' : 'remove']('dark');
    themeBtn.classList[selectedIcon === 'uil-moon' ? 'add' : 'remove']('uil-sun');
  }
  themeBtn?.addEventListener('click', () => {
    document.body.classList.toggle('dark');
    themeBtn.classList.toggle('uil-sun');
    localStorage.setItem('selected-theme', getTheme());
    localStorage.setItem('selected-icon', getIcon());
  });

  // Language toggle
  const langBtn = qs('#lang-toggle');
  const langHtml = document.documentElement;
  const savedLang = localStorage.getItem('selected-lang') || 'fa';
  if (savedLang === 'en') { langHtml.lang = 'en'; langHtml.dir = 'ltr'; langHtml.dataset.lang = 'en'; langBtn.textContent = 'FA'; }
  langBtn?.addEventListener('click', () => {
    const isFa = langHtml.dataset.lang === 'fa';
    langHtml.lang = isFa ? 'en' : 'fa';
    langHtml.dir = isFa ? 'ltr' : 'rtl';
    langHtml.dataset.lang = isFa ? 'en' : 'fa';
    langBtn.textContent = isFa ? 'FA' : 'EN';
    localStorage.setItem('selected-lang', isFa ? 'en' : 'fa');
    // Re-run text rendering for dynamic content
  });

  // Contact form (demo)
  qs('#contactForm')?.addEventListener('submit', async (e) => {
    e.preventDefault();
    const btn = e.target.querySelector('button');
    btn.disabled = true;
    btn.innerHTML = `<span class="rtl-text">در حال ارسال...</span><span class="ltr-text">Sending...</span> <i class="uil uil-spinner-alt button__icon"></i>`;
    await new Promise(r => setTimeout(r, 1000));
    alert(t('پیام ارسال شد! (دمو)', 'Message sent! (demo)'));
    e.target.reset();
    btn.innerHTML = `<span class="rtl-text">ارسال پیام</span><span class="ltr-text">Send Message</span> <i class="uil uil-message button__icon"></i>`;
    btn.disabled = false;
  });

})();
