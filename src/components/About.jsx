import { useEffect, useRef } from 'react';

const WheatIcon = () => (
  <svg width="48" height="48" viewBox="0 0 48 48" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
    <path d="M24 44V20" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" />
    <path d="M24 20C20 16 18 10 18 4c4 2 8 6 6 16" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M24 20C28 16 30 10 30 4c-4 2-8 6-6 16" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" fill="none" />
    <path d="M24 28C20 24 17 18 17 12c4 2 8 6 7 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M24 28C28 24 31 18 31 12c-4 2-8 6-7 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M24 36C20 32 18 26 18 20c4 2 7 6 6 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
    <path d="M24 36C28 32 30 26 30 20c-4 2-7 6-6 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
  </svg>
);

const stats = [
  'מחמצת טבעית',
  'תנור אבן עצי',
  'קמחי מורשת',
  'ממש מהגליל',
];

export default function About() {
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
    <section id="about" className="bg-cream py-20 lg:py-28" aria-label="אודותינו">
      <div
        ref={ref}
        className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center"
      >
        {/* Image */}
        <div className="order-2 lg:order-2">
          <img
            src="https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=800"
            alt="לחמים אומנותיים מתנור אבן"
            className="w-full h-80 lg:h-[480px] object-cover rounded-xl shadow-lg"
            loading="lazy"
          />
        </div>

        {/* Text */}
        <div className="order-1 lg:order-1">
          <WheatIcon />
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mt-4 mb-6">
            הסיפור שלנו
          </h2>
          <p className="text-primary-dark/80 leading-relaxed mb-4 text-base lg:text-lg">
            לחם טנא נולדה מאהבה לבצק ולאדמה. דוד וויויאן אמזל נפגשו בברקלי
            והקימו את לחם טנא ב-2009 . מאז, המאפייה
            ממוקמת בחורשה קסומה בקיבוץ גשר הזיו בגליל המערבי, ומדי בוקר יוצאים
            מהתנור לחמי מחמצת ולחמים מקמחי מורשת בעבודת יד טהורה.
          </p>
          <p className="text-primary-dark/80 leading-relaxed mb-8 text-base lg:text-lg">
            תנור האבן היחיד מסוגו בצפון, המוסק בשריפת עצים, מעניק ללחמים שלנו קרום
            פריך, ריח של אש ולב רך ואוורירי. כל כיכר — סיפור.
          </p>

          {/* Stats */}
          <div className="flex flex-wrap gap-3">
            {stats.map((stat, i) => (
              <span
                key={i}
                className="text-sm font-semibold text-primary-dark bg-white/70 px-4 py-2 rounded-full border border-gold/30"
              >
                ✦ {stat}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
