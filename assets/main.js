/* ============================================================
   SIGNATURE SPACES — main.js
   Nav, scroll reveals, contact form
   ============================================================ */

// ---- Sticky nav ----
const nav = document.querySelector('.site-nav');
if (nav) {
  window.addEventListener('scroll', () => {
    nav.classList.toggle('scrolled', window.scrollY > 60);
  }, { passive: true });
}

// ---- Mobile burger / drawer ----
const burger = document.getElementById('nav-burger');
const drawer = document.getElementById('nav-drawer');
const scrim = document.getElementById('nav-scrim');
if (burger && drawer) {
  const closeDrawer = () => {
    burger.classList.remove('open');
    drawer.classList.remove('open');
    if (scrim) scrim.classList.remove('open');
    burger.setAttribute('aria-expanded', 'false');
    document.body.style.overflow = '';
  };
  burger.addEventListener('click', () => {
    const open = burger.classList.toggle('open');
    drawer.classList.toggle('open', open);
    if (scrim) scrim.classList.toggle('open', open);
    burger.setAttribute('aria-expanded', open);
    document.body.style.overflow = open ? 'hidden' : '';
  });
  drawer.querySelectorAll('a').forEach(a => a.addEventListener('click', closeDrawer));
  if (scrim) scrim.addEventListener('click', closeDrawer);
}

// ---- Scroll reveal ----
// .sr elements are visible by default (see CSS). We only arm the hidden
// pre-reveal state once we know JS, IntersectionObserver and motion are all
// available, so a slow network or script error never leaves content stuck
// invisible.
const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
if ('IntersectionObserver' in window && !prefersReducedMotion) {
  const revealEls = document.querySelectorAll('.sr');
  revealEls.forEach(el => el.classList.add('sr-armed'));
  const io = new IntersectionObserver((entries) => {
    entries.forEach(e => {
      if (e.isIntersecting) {
        e.target.classList.add('visible');
        io.unobserve(e.target);
      }
    });
  }, { threshold: 0.08, rootMargin: '0px 0px -8% 0px' });
  revealEls.forEach(el => io.observe(el));
}

// ---- Contact form (front-end only — wire to Formspree/backend) ----
const form = document.getElementById('contact-form');
const formSuccess = document.getElementById('form-success');
if (form && formSuccess) {
  form.addEventListener('submit', (e) => {
    e.preventDefault();
    const btn = form.querySelector('[type="submit"]');
    const original = btn.textContent;
    btn.textContent = 'Sending…';
    btn.disabled = true;
    // Replace setTimeout with a real fetch to your endpoint / Formspree
    setTimeout(() => {
      form.style.display = 'none';
      formSuccess.classList.add('show');
    }, 1000);
  });
}

// ---- Active nav link ----
const currentPage = location.pathname.split('/').pop() || 'index.html';
document.querySelectorAll('.nav-links a, .nav-drawer a').forEach(a => {
  const href = a.getAttribute('href').split('/').pop();
  if (href === currentPage || (currentPage === '' && href === 'index.html')) {
    a.classList.add('active');
  }
});
