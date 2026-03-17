import { useEffect, useRef } from 'react';
import photo1 from '../assets/photo1.jpg';
import photo2 from '../assets/photo2.jpg';
import photo3 from '../assets/photo3.jpg';
import photo4 from '../assets/photo4.jpg';
import photo5 from '../assets/photo5.jpg';
import photo6 from '../assets/photo6.jpg';
import photo7 from '../assets/photo7.jpg';
import photo8 from '../assets/photo8.jpg';
import photo9 from '../assets/photo9.jpg';

const images = [
  { src: photo1, alt: 'לחם טנא - תמונה 1' },
  { src: photo2, alt: 'לחם טנא - תמונה 2' },
  { src: photo3, alt: 'לחם טנא - תמונה 3' },
  { src: photo4, alt: 'לחם טנא - תמונה 4' },
  { src: photo5, alt: 'לחם טנא - תמונה 5' },
  { src: photo6, alt: 'לחם טנא - תמונה 6' },
  { src: photo7, alt: 'לחם טנא - תמונה 7' },
  { src: photo8, alt: 'לחם טנא - תמונה 8' },
  { src: photo9, alt: 'לחם טנא - תמונה 9' },
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
