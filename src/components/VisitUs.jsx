import { useEffect, useRef } from 'react';

const hours = [
  { days: 'ראשון', time: '07:00–14:00' },
  { days: 'שני–שישי', time: '07:00–15:00' },
  { days: 'שבת', time: 'סגור' },
];

export default function VisitUs() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.15 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="visit" className="bg-cream py-20 lg:py-28" aria-label="בקרו אותנו">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-3">
            בקרו אותנו
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-10 lg:gap-16">
          {/* Info */}
          <div className="bg-white rounded-xl shadow-sm p-6 lg:p-8 border border-gold/10">
            <div className="mb-6">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-2">
                כתובת
              </h3>
              <p className="text-primary-dark/70">קיבוץ גשר הזיו, גליל המערבי</p>
            </div>

            <div className="mb-6">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-2">
                טלפון
              </h3>
              <a
                href="tel:072-3957616"
                className="text-gold font-semibold hover:text-gold-dark transition-colors"
                dir="ltr"
              >
                072-3957616
              </a>
            </div>

            <div className="mb-6">
              <h3 className="font-heading text-xl font-bold text-primary-dark mb-3">
                שעות פתיחה
              </h3>
              <table className="w-full">
                <tbody>
                  {hours.map((row, i) => (
                    <tr key={i} className="border-b border-gray-100 last:border-0">
                      <td className="py-2.5 text-primary-dark font-medium">{row.days}</td>
                      <td className="py-2.5 text-primary-dark/70 text-left" dir="ltr">
                        {row.time}
                      </td>
                    </tr>
                  ))}
                </tbody>
              </table>
            </div>

            <p className="text-gold italic text-sm">
              כדאי להגיע בבוקר — הלחמים נגמרים מוקדם!
            </p>

            {/* Instagram */}
            <a
              href="https://instagram.com"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 mt-4 text-primary-dark/60 hover:text-gold transition-colors"
              aria-label="עקבו אחרינו באינסטגרם"
            >
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
                <circle cx="12" cy="12" r="5" />
                <line x1="17.5" y1="6.5" x2="17.51" y2="6.5" />
              </svg>
              <span className="text-sm font-medium">עקבו אחרינו</span>
            </a>
          </div>

          {/* Map */}
          <div className="rounded-xl overflow-hidden shadow-sm h-80 lg:h-auto min-h-[400px]">
            <iframe
              src="https://maps.google.com/maps?q=Lechem+Tenne,+Gesher+HaZiv&t=&z=15&ie=UTF8&iwloc=&output=embed"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen
              loading="lazy"
              title="מיקום לחם טנא בקיבוץ גשר הזיו"
            />
          </div>
        </div>
      </div>
    </section>
  );
}
