/* ============================================================
   SIGNATURE SPACES — footer.js
   Injects shared footer on every page.
   Adjust ROOT to '' when serving from root, or '../' for /pages/ sub-dir.
   ============================================================ */
(function () {
  const isSubPage = location.pathname.includes('/pages/');
  const ROOT = isSubPage ? '../' : '';

  const footer = document.createElement('footer');
  footer.className = 'site-footer';
  footer.innerHTML = `
    <div class="container">
      <div class="footer-grid">

        <div class="footer-brand">
          <a href="${ROOT}index.html">
            <span class="footer-logo-main">Signature Spaces</span>
            <span class="footer-logo-sub">Promotional Space Agency</span>
          </a>
          <p>Independent UK promotional space agency. We source and secure prime promotional, retail and event space so your brand reaches the right people, in the right place.</p>
          <div class="footer-social">
            <a href="https://www.linkedin.com/company/signature-spaces/" target="_blank" rel="noopener" aria-label="LinkedIn">
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5">
                <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6z"/>
                <rect x="2" y="9" width="4" height="12"/>
                <circle cx="4" cy="4" r="2"/>
              </svg>
            </a>
          </div>
        </div>

        <div class="footer-col">
          <h4>Pages</h4>
          <ul>
            <li><a href="${ROOT}index.html">Home</a></li>
            <li><a href="${ROOT}services.html">Services</a></li>
            <li><a href="${ROOT}team.html">Team</a></li>
            <li><a href="${ROOT}contact.html">Contact</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Services</h4>
          <ul>
            <li><a href="${ROOT}services.html#supermarkets">Supermarkets</a></li>
            <li><a href="${ROOT}services.html#shopping-centres">Shopping Centres</a></li>
            <li><a href="${ROOT}services.html#train-stations">Train Stations</a></li>
            <li><a href="${ROOT}services.html#brand-experience">Brand Experience</a></li>
            <li><a href="${ROOT}services.html#venue-management">Venue Management</a></li>
          </ul>
        </div>

        <div class="footer-col">
          <h4>Contact</h4>
          <ul class="footer-contact-list">
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M22 16.92v3a2 2 0 01-2.18 2 19.79 19.79 0 01-8.63-3.07 19.5 19.5 0 01-5.99-5.99 19.79 19.79 0 01-3.07-8.67A2 2 0 014.11 2h3a2 2 0 012 1.72c.127.96.361 1.903.7 2.81a2 2 0 01-.45 2.11L8.09 9.91a16 16 0 006 6l1.27-1.27a2 2 0 012.11-.45c.907.339 1.85.573 2.81.7A2 2 0 0122 16.92z"/></svg>
              <a href="tel:01412489480">0141 248 9480</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M4 4h16c1.1 0 2 .9 2 2v12c0 1.1-.9 2-2 2H4c-1.1 0-2-.9-2-2V6c0-1.1.9-2 2-2z"/><polyline points="22,6 12,13 2,6"/></svg>
              <a href="mailto:info@signaturespaces.co.uk">info@signaturespaces.co.uk</a>
            </li>
            <li>
              <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" stroke-width="1.5"><path d="M21 10c0 7-9 13-9 13S3 17 3 10a9 9 0 0118 0z"/><circle cx="12" cy="10" r="3"/></svg>
              <span>44 Keith Court, Glasgow G11 6QW</span>
            </li>
          </ul>
        </div>

      </div>
      <div class="footer-bottom">
        <p>&copy; ${new Date().getFullYear()} Signature Spaces Ltd. All rights reserved.</p>
        <div class="footer-legal">
          <a href="#">Privacy Policy</a>
          <a href="#">Terms of Use</a>
        </div>
      </div>
    </div>
  `;

  document.body.appendChild(footer);
})();
