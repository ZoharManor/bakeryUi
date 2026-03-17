import { useState, useEffect, useRef } from 'react';
import { breads, pastries, sandwiches } from '../data/menuItems';

const tabs = [
  { key: 'breads', label: 'לחמים', data: breads },
  { key: 'sandwiches', label: 'כריכים', data: sandwiches },
  { key: 'pastries', label: 'מאפים', data: pastries },
];

export default function Menu() {
  const [activeTab, setActiveTab] = useState('breads');
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

  const currentTab = tabs.find((t) => t.key === activeTab);

  return (
    <section id="menu" className="bg-primary py-20 lg:py-28" aria-label="תפריט">
      <div ref={ref} className="fade-in-section max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-12">
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-cream mb-3">
            התפריט שלנו
          </h2>
          <div className="w-16 h-0.5 bg-gold mx-auto" />
        </div>

        {/* Tabs */}
        <div className="flex justify-center gap-2 sm:gap-4 mb-10 flex-wrap">
          {tabs.map((tab) => (
            <button
              key={tab.key}
              onClick={() => setActiveTab(tab.key)}
              className={`px-4 sm:px-6 py-2 rounded-lg font-semibold text-sm sm:text-base transition-all ${
                activeTab === tab.key
                  ? 'bg-gold text-primary-dark'
                  : 'bg-transparent text-cream/70 hover:text-cream border border-cream/20 hover:border-cream/40'
              }`}
            >
              {tab.label}
            </button>
          ))}
        </div>

        {/* Cards grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {currentTab.data.map((item, i) => (
            <div
              key={i}
              className="bg-white/10 backdrop-blur-sm rounded-xl overflow-hidden hover:-translate-y-1 hover:shadow-xl transition-all duration-300 group"
            >
              <div className="h-48 overflow-hidden">
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  loading="lazy"
                />
              </div>
              <div className="p-5">
                <h3 className="font-heading text-lg font-bold text-cream text-center">
                  {item.name}
                </h3>
              </div>
            </div>
          ))}
        </div>

        {/* Disclaimer */}
        <p className="text-center text-cream/50 text-sm mt-10">
          התפריט המלא ומחירים עדכניים — בטלפון או בביקור במאפייה
        </p>
      </div>
    </section>
  );
}
