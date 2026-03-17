import logo from '../assets/lechem_tenne_logo.png';

const navLinks = [
  { label: 'תפריט', href: '#menu' },
  { label: 'הזמנת לחם', href: '#order' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'בקרו אותנו', href: '#visit' },
  { label: 'אודותינו', href: '#about' },
];

export default function Footer() {
  const handleClick = (e, href) => {
    e.preventDefault();
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <footer id="contact" className="bg-primary border-t-2 border-gold" aria-label="צרו קשר">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 lg:gap-16">
          {/* Col 1 — Logo & tagline */}
          <div>
            <img
              src={logo}
              alt="לחם טנא"
              className="w-14 h-14 rounded-full object-cover mb-4"
            />
            <p className="text-cream/80 font-heading text-lg">לחם ♥ גליל</p>
          </div>

          {/* Col 2 — Navigation */}
          <div>
            <h3 className="text-cream font-bold mb-4">ניווט מהיר</h3>
            <ul className="space-y-2">
              {navLinks.map((link) => (
                <li key={link.href}>
                  <a
                    href={link.href}
                    onClick={(e) => handleClick(e, link.href)}
                    className="text-cream/60 hover:text-gold transition-colors text-sm"
                  >
                    {link.label}
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Col 3 — Contact */}
          <div>
            <h3 className="text-cream font-bold mb-4">צרו קשר</h3>
            <div className="space-y-3 text-cream/60 text-sm">
              <p>
                <a href="tel:052-6639913" className="hover:text-gold transition-colors" dir="ltr">
                  052-6639913
                </a>
              </p>
              <p>
                <a href="mailto:info@lechemtenne.co.il" className="hover:text-gold transition-colors" dir="ltr">
                  info@lechemtenne.co.il
                </a>
              </p>
              <p>קיבוץ גשר הזיו, גליל המערבי</p>
            </div>

            {/* Social icons */}
            <div className="flex gap-4 mt-5">
              <a
                href="https://instagram.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="אינסטגרם"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                  <circle cx="12" cy="12" r="5" />
                  <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
                </svg>
              </a>
              <a
                href="https://facebook.com"
                target="_blank"
                rel="noopener noreferrer"
                className="text-cream/50 hover:text-gold transition-colors"
                aria-label="פייסבוק"
              >
                <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
                </svg>
              </a>
            </div>
          </div>
        </div>

        {/* Bottom bar */}
        <div className="border-t border-cream/10 mt-10 pt-6 text-center">
          <p className="text-cream/40 text-xs">
            © 2024 לחם טנא | עוצב ב DevByZohar
          </p>
        </div>
      </div>
    </footer>
  );
}
