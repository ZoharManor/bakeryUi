import { useState, useEffect } from 'react';
import logo from '../assets/lechem_tenne_logo.png';

const navLinks = [
  { label: 'תפריט', href: '#menu' },
  { label: 'הזמנת לחם', href: '#order' },
  { label: 'גלריה', href: '#gallery' },
  { label: 'בקרו אותנו', href: '#visit' },
  { label: 'צרו קשר', href: '#contact' },
];

export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('');

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 80);
    window.addEventListener('scroll', handleScroll, { passive: true });
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const sections = navLinks.map(l => document.querySelector(l.href));
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection('#' + entry.target.id);
          }
        });
      },
      { rootMargin: '-40% 0px -55% 0px' }
    );
    sections.forEach((s) => s && observer.observe(s));
    return () => observer.disconnect();
  }, []);

  const handleClick = (e, href) => {
    e.preventDefault();
    setMobileOpen(false);
    document.querySelector(href)?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <header
      className={`fixed top-0 right-0 left-0 z-50 transition-all duration-300 ${
        scrolled ? 'bg-primary shadow-lg' : 'bg-transparent'
      }`}
    >
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 flex flex-row-reverse items-center justify-between h-16 lg:h-20">
        {/* Logo - right side in RTL */}
        <a href="#" onClick={(e) => { e.preventDefault(); window.scrollTo({ top: 0, behavior: 'smooth' }); }}>
          <img
            src={logo}
            alt="לחם טנא - לוגו"
            className="h-10 lg:h-14 w-10 lg:w-14 rounded-full object-cover"
            onError={(e) => {
              e.target.style.display = 'none';
              e.target.nextSibling.style.display = 'flex';
            }}
          />
          <div
            className="hidden h-10 lg:h-14 w-10 lg:w-14 rounded-full bg-primary items-center justify-center text-white text-xs font-bold"
            style={{ display: 'none' }}
          >
            לחם טנא
          </div>
        </a>

        {/* Desktop nav links - left side in RTL */}
        <div className="hidden lg:flex items-center gap-6">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-sm font-medium transition-colors ${
                activeSection === link.href
                  ? 'text-gold'
                  : scrolled
                  ? 'text-cream hover:text-gold'
                  : 'text-white hover:text-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={(e) => handleClick(e, '#order')}
            className="bg-gold text-primary-dark px-5 py-2 rounded-lg font-semibold text-sm hover:bg-gold-dark transition-colors"
          >
            הזמנת לחם
          </a>
        </div>

        {/* Mobile hamburger */}
        <button
          className="lg:hidden text-white text-2xl p-2"
          onClick={() => setMobileOpen(!mobileOpen)}
          aria-label={mobileOpen ? 'סגור תפריט' : 'פתח תפריט'}
        >
          {mobileOpen ? '✕' : '☰'}
        </button>
      </nav>

      {/* Mobile drawer */}
      <div
        className={`lg:hidden overflow-hidden transition-all duration-300 bg-primary ${
          mobileOpen ? 'max-h-96 pb-6' : 'max-h-0'
        }`}
      >
        <div className="flex flex-col items-center gap-4 px-4 pt-2">
          {navLinks.map((link) => (
            <a
              key={link.href}
              href={link.href}
              onClick={(e) => handleClick(e, link.href)}
              className={`text-base font-medium transition-colors ${
                activeSection === link.href ? 'text-gold' : 'text-cream hover:text-gold'
              }`}
            >
              {link.label}
            </a>
          ))}
          <a
            href="#order"
            onClick={(e) => handleClick(e, '#order')}
            className="bg-gold text-primary-dark px-6 py-2.5 rounded-lg font-semibold text-sm hover:bg-gold-dark transition-colors mt-2"
          >
            הזמנת לחם
          </a>
        </div>
      </div>
    </header>
  );
}
