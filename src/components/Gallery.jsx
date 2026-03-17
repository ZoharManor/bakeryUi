import { useEffect, useRef } from 'react';

const images = [
  { src: 'https://images.unsplash.com/photo-1509440159596-0249088772ff?w=600', alt: 'לחם מחמצת טרי' },
  { src: 'https://images.unsplash.com/photo-1555507036-ab1f4038808a?w=600', alt: 'כיכרות לחם אומנותיות' },
  { src: 'https://images.unsplash.com/photo-1586444248902-2f64eddc13df?w=600', alt: 'קרואסונים חמאתיים' },
  { src: 'https://images.unsplash.com/photo-1495147466023-ac5c588e2e94?w=600', alt: 'קפה איכותי' },
  { src: 'https://images.unsplash.com/photo-1571115177098-24ec42ed204d?w=600', alt: 'מאפים מהתנור' },
  { src: 'https://images.unsplash.com/photo-1530648672449-81f6c723e2f1?w=600', alt: 'לחם כפרי' },
  { src: 'https://images.unsplash.com/photo-1558961363-fa8fdf82db35?w=600', alt: 'דניש ומאפים' },
  { src: 'https://images.unsplash.com/photo-1549931319-a545dcf3bc73?w=600', alt: 'באגט טרי' },
  { src: 'https://images.unsplash.com/photo-1517686469429-8bdb88b9f907?w=600', alt: 'פנים המאפייה' },
];

export default function Gallery() {
  const ref = useRef(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) entry.target.classList.add('visible');
      },
      { threshold: 0.1 }
    );
    if (ref.current) observer.observe(ref.current);
    return () => observer.disconnect();
  }, []);

  return (
    <section id="gallery" className="bg-primary py-20 lg:py-28" aria-label="גלריה">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream mb-3">
            מהתנור אל השולחן
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {images.map((img, i) => (
            <div
              key={i}
              className="overflow-hidden rounded-xl group"
            >
              <img
                src={img.src}
                alt={img.alt}
                className="w-full h-64 lg:h-72 object-cover transition-all duration-500 group-hover:scale-103 group-hover:brightness-110"
                loading="lazy"
              />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
