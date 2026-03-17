import logo from '../assets/lechem_tenne_logo.png';
import heroVideo from '../assets/coverr-cutting-homemade-bread-2934-1080p.mp4';

export default function Hero() {
  return (
    <section
      className="relative min-h-screen flex items-center justify-center noise-overlay"
      aria-label="ראשי"
    >
      {/* Background video */}
      <video
        className="absolute inset-0 w-full h-full object-cover"
        src={heroVideo}
        autoPlay
        loop
        muted
        playsInline
      />
      {/* Overlay */}
      <div className="absolute inset-0 bg-[rgba(29,46,43,0.55)]" />

      {/* Content */}
      <div className="relative z-10 text-center px-4 max-w-3xl mx-auto">
        <img
          src={logo}
          alt="לחם טנא"
          className="w-28 h-28 lg:w-32 lg:h-32 rounded-full mx-auto mb-6 object-cover shadow-xl"
          loading="lazy"
        />
        <h1 className="font-heading text-5xl lg:text-7xl font-bold text-white mb-4">
          לחם טנא
        </h1>
        <p className="font-heading text-gold text-lg lg:text-2xl italic mb-3">
          מאפייה כפרית בלב הגליל המערבי
        </p>
        <p className="text-cream/80 text-sm lg:text-base mb-8 tracking-wide">
          לחמי מחמצת בעבודת יד • תנור אבן מוסק עצים • קפה איכותי
        </p>
        <div className="flex flex-col sm:flex-row gap-4 justify-center">
          <a
            href="#menu"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#menu')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="border-2 border-white text-white px-8 py-3 rounded-lg font-semibold hover:bg-white/10 transition-colors"
          >
            לתפריט שלנו
          </a>
          <a
            href="#order"
            onClick={(e) => {
              e.preventDefault();
              document.querySelector('#order')?.scrollIntoView({ behavior: 'smooth' });
            }}
            className="bg-gold text-primary-dark px-8 py-3 rounded-lg font-semibold hover:bg-gold-dark transition-colors"
          >
            הזמנת לחם
          </a>
        </div>
      </div>

      {/* Scroll down arrow */}
      <div className="absolute bottom-8 left-1/2 -translate-x-1/2 z-10 animate-bounce-down">
        <svg
          width="32"
          height="32"
          viewBox="0 0 24 24"
          fill="none"
          stroke="white"
          strokeWidth="2"
          strokeLinecap="round"
          strokeLinejoin="round"
          aria-hidden="true"
        >
          <polyline points="6 9 12 15 18 9" />
        </svg>
      </div>
    </section>
  );
}
