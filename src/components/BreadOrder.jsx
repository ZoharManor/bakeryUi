import { useState, useEffect, useRef } from 'react';

const breadTypes = [
  'כפרי',
  'פולנטה',
  'דגנים',
  'חמוציות-אגוזים',
  'כוסמין',
  'מלא עם פרג',
  'אחר',
];

const quantityOptions = ['5-10', '10-20', '20-50', '50+'];
const frequencyOptions = [
  { value: 'weekly', label: 'שבועי' },
  { value: 'biweekly', label: 'דו-שבועי' },
  { value: 'oneoff', label: 'לאירוע חד-פעמי' },
];

const WheatIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M2 22L16 8" />
    <path d="M3.47 12.53 5 11l1.53 1.53a3.5 3.5 0 0 1 0 4.94L5 19l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    <path d="M7.47 8.53 9 7l1.53 1.53a3.5 3.5 0 0 1 0 4.94L9 15l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    <path d="M11.47 4.53 13 3l1.53 1.53a3.5 3.5 0 0 1 0 4.94L13 11l-1.53-1.53a3.5 3.5 0 0 1 0-4.94Z" />
    <path d="M20 2h2v2a4 4 0 0 1-4 4h-2V6a4 4 0 0 1 4-4Z" />
    <path d="M11.47 17.47 13 19l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L5 19l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
    <path d="M15.47 13.47 17 15l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L9 15l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
    <path d="M19.47 9.47 21 11l-1.53 1.53a3.5 3.5 0 0 1-4.94 0L13 11l1.53-1.53a3.5 3.5 0 0 1 4.94 0Z" />
  </svg>
);

const FlameIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M8.5 14.5A2.5 2.5 0 0 0 11 12c0-1.38-.5-2-1-3-1.072-2.143-.224-4.054 2-6 .5 2.5 2 4.9 4 6.5 2 1.6 3 3.5 3 5.5a7 7 0 1 1-14 0c0-1.153.433-2.294 1-3a2.5 2.5 0 0 0 2.5 2.5z" />
  </svg>
);

const TruckIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <path d="M14 18V6a2 2 0 0 0-2-2H4a2 2 0 0 0-2 2v11a1 1 0 0 0 1 1h2" />
    <path d="M15 18h2a1 1 0 0 0 1-1v-3.65a1 1 0 0 0-.22-.624l-3.48-4.35A1 1 0 0 0 13.52 8H14" />
    <path d="M22 17v1a1 1 0 0 1-1 1h-1" />
    <circle cx="7.5" cy="18.5" r="2.5" />
    <circle cx="17.5" cy="18.5" r="2.5" />
  </svg>
);

const ClipboardIcon = () => (
  <svg width="28" height="28" viewBox="0 0 24 24" fill="none" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round">
    <rect x="8" y="2" width="8" height="4" rx="1" ry="1" />
    <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2" />
    <path d="M12 11h4" />
    <path d="M12 16h4" />
    <path d="M8 11h.01" />
    <path d="M8 16h.01" />
  </svg>
);

const benefits = [
  {
    icon: <WheatIcon />,
    title: 'קמחי מורשת',
    text: 'לחמים ייחודיים שלא תמצאו בשום מקום אחר',
  },
  {
    icon: <FlameIcon />,
    title: 'תנור אבן עצי',
    text: 'קרום ייחודי, ריח ושחמת שלא ניתן לזייף',
  },
  {
    icon: <TruckIcon />,
    title: 'אספקה שבועית',
    text: 'אנחנו מגיעים אליכם, טרי מהאפייה',
  },
  {
    icon: <ClipboardIcon />,
    title: 'הזמנה מותאמת',
    text: 'סוג, כמות ותאריך — הכל לפי הצורך שלכם',
  },
];

const initialForm = {
  businessName: '',
  contactName: '',
  phone: '',
  email: '',
  breadTypes: [],
  quantity: '',
  frequency: '',
  deliveryDate: '',
  notes: '',
};

export default function BreadOrder() {
  const [form, setForm] = useState(initialForm);
  const [errors, setErrors] = useState({});
  const [submitted, setSubmitted] = useState(false);
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

  const updateField = (field, value) => {
    setForm((prev) => ({ ...prev, [field]: value }));
    if (errors[field]) setErrors((prev) => ({ ...prev, [field]: '' }));
  };

  const toggleBreadType = (type) => {
    setForm((prev) => ({
      ...prev,
      breadTypes: prev.breadTypes.includes(type)
        ? prev.breadTypes.filter((t) => t !== type)
        : [...prev.breadTypes, type],
    }));
    if (errors.breadTypes) setErrors((prev) => ({ ...prev, breadTypes: '' }));
  };

  const validate = () => {
    const newErrors = {};
    if (!form.businessName.trim()) newErrors.businessName = 'שדה חובה';
    if (!form.contactName.trim()) newErrors.contactName = 'שדה חובה';
    if (!form.phone.trim()) newErrors.phone = 'שדה חובה';
    if (!form.email.trim()) newErrors.email = 'שדה חובה';
    if (form.breadTypes.length === 0) newErrors.breadTypes = 'יש לבחור לפחות סוג אחד';
    if (!form.quantity) newErrors.quantity = 'שדה חובה';
    if (!form.frequency) newErrors.frequency = 'שדה חובה';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (validate()) setSubmitted(true);
  };

  const inputClass = (field) =>
    `w-full max-w-full box-border px-4 py-3 rounded-lg border ${
      errors[field] ? 'border-red-500' : 'border-gray-200'
    } focus:outline-none focus:ring-2 focus:ring-gold/50 focus:border-gold text-primary-dark bg-white text-sm`;

  return (
    <section
      id="order"
      className="relative bg-cream py-20 lg:py-28 noise-overlay"
      aria-label="הזמנת לחם למסעדות"
    >
      <div ref={ref} className="fade-in-section relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        {/* Header */}
        <div className="text-center mb-14">
          {/* Wheat decoration */}
          <svg
            width="80"
            height="80"
            viewBox="0 0 48 48"
            fill="none"
            className="mx-auto mb-4"
            aria-hidden="true"
          >
            <path d="M24 44V20" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" />
            <path d="M24 20C20 16 18 10 18 4c4 2 8 6 6 16" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M24 20C28 16 30 10 30 4c-4 2-8 6-6 16" stroke="#c8a96e" strokeWidth="2" strokeLinecap="round" fill="none" />
            <path d="M24 28C20 24 17 18 17 12c4 2 8 6 7 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M24 28C28 24 31 18 31 12c-4 2-8 6-7 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M24 36C20 32 18 26 18 20c4 2 7 6 6 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
            <path d="M24 36C28 32 30 26 30 20c-4 2-7 6-6 16" stroke="#c8a96e" strokeWidth="1.5" strokeLinecap="round" fill="none" />
          </svg>
          <h2 className="font-heading text-3xl lg:text-4xl font-bold text-primary-dark mb-3">
            הזמנת לחם למסעדות ולאירועים
          </h2>
          <p className="text-primary-dark/70 text-lg max-w-xl mx-auto mb-4">
            לחם טרי מהתנור לפתח הדלת שלכם — בכל שבוע, בכל אירוע
          </p>
          <span className="inline-block bg-gold/20 text-primary-dark text-sm font-semibold px-4 py-1.5 rounded-full">
            <svg width="16" height="16" viewBox="0 0 24 24" fill="#c8a96e" stroke="none" className="inline-block ml-1 -mt-0.5" aria-hidden="true"><polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2" /></svg>
            מסעדות רבות באזור כבר מזמינות מאיתנו
          </span>
        </div>

        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16">
          {/* Benefits column */}
          <div>
            <h3 className="font-heading text-2xl font-bold text-primary-dark mb-8">
              למה לחם טנא?
            </h3>
            <div className="space-y-5 mb-10">
              {benefits.map((b, i) => (
                <div
                  key={i}
                  className="flex gap-4 bg-white rounded-xl p-5 shadow-sm border border-gold/10"
                >
                  <span className="flex-shrink-0">{b.icon}</span>
                  <div>
                    <h4 className="font-bold text-primary-dark mb-1">{b.title}</h4>
                    <p className="text-primary-dark/60 text-sm">{b.text}</p>
                  </div>
                </div>
              ))}
            </div>

            {/* Testimonial */}
            <blockquote className="border-r-4 border-gold pr-5 py-2">
              <p className="text-primary-dark/80 italic text-base leading-relaxed">
                &ldquo;הלחם של לחם טנא הפך לחלק בלתי נפרד מהחוויה אצלנו&rdquo;
              </p>
              <cite className="text-gold font-semibold text-sm mt-2 block not-italic">
                — שף דני, מסעדת הכרמל, נהריה
              </cite>
            </blockquote>
          </div>

          {/* Form column */}
          <div>
            {submitted ? (
              <div className="bg-white rounded-xl shadow-lg p-10 text-center">
                <svg
                  width="64"
                  height="64"
                  viewBox="0 0 64 64"
                  className="mx-auto mb-6"
                  aria-hidden="true"
                >
                  <circle cx="32" cy="32" r="30" fill="#2d4a44" />
                  <polyline
                    points="20,34 28,42 44,24"
                    fill="none"
                    stroke="white"
                    strokeWidth="4"
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    className="checkmark-animated"
                  />
                </svg>
                <h3 className="font-heading text-2xl font-bold text-primary-dark mb-3">
                  תודה!
                </h3>
                <p className="text-primary-dark/70 text-base">
                  קיבלנו את הבקשה שלכם ונצור איתכם קשר בקרוב 🙏
                </p>
              </div>
            ) : (
              <form
                onSubmit={handleSubmit}
                noValidate
                className="bg-white rounded-xl shadow-lg p-6 lg:p-8 overflow-hidden"
              >
                <h3 className="font-heading text-xl font-bold text-primary-dark mb-6">
                  שלחו לנו הזמנה
                </h3>

                <div className="space-y-4">
                  {/* Business name */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-1">
                      שם העסק / המסעדה *
                    </label>
                    <input
                      type="text"
                      value={form.businessName}
                      onChange={(e) => updateField('businessName', e.target.value)}
                      className={inputClass('businessName')}
                      placeholder="לדוגמה: מסעדת הכרמל"
                    />
                    {errors.businessName && (
                      <p className="text-red-500 text-xs mt-1">{errors.businessName}</p>
                    )}
                  </div>

                  {/* Contact name */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-1">
                      איש קשר *
                    </label>
                    <input
                      type="text"
                      value={form.contactName}
                      onChange={(e) => updateField('contactName', e.target.value)}
                      className={inputClass('contactName')}
                      placeholder="שם מלא"
                    />
                    {errors.contactName && (
                      <p className="text-red-500 text-xs mt-1">{errors.contactName}</p>
                    )}
                  </div>

                  {/* Phone & Email row */}
                  <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-semibold text-primary-dark mb-1">
                        טלפון *
                      </label>
                      <input
                        type="tel"
                        value={form.phone}
                        onChange={(e) => updateField('phone', e.target.value)}
                        className={inputClass('phone')}
                        placeholder="050-0000000"
                      />
                      {errors.phone && (
                        <p className="text-red-500 text-xs mt-1">{errors.phone}</p>
                      )}
                    </div>
                    <div>
                      <label className="block text-sm font-semibold text-primary-dark mb-1">
                        אימייל *
                      </label>
                      <input
                        type="email"
                        value={form.email}
                        onChange={(e) => updateField('email', e.target.value)}
                        className={inputClass('email')}
                        placeholder="email@example.com"
                        dir="ltr"
                      />
                      {errors.email && (
                        <p className="text-red-500 text-xs mt-1">{errors.email}</p>
                      )}
                    </div>
                  </div>

                  {/* Bread types chips */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      סוג לחם מבוקש *
                    </label>
                    <div className="flex flex-wrap gap-2">
                      {breadTypes.map((type) => (
                        <button
                          key={type}
                          type="button"
                          onClick={() => toggleBreadType(type)}
                          className={`px-4 py-2 rounded-full text-sm font-medium transition-all border ${
                            form.breadTypes.includes(type)
                              ? 'bg-gold text-primary-dark border-gold'
                              : 'bg-cream text-primary-dark/70 border-gray-200 hover:border-gold/50'
                          }`}
                        >
                          {type}
                        </button>
                      ))}
                    </div>
                    {errors.breadTypes && (
                      <p className="text-red-500 text-xs mt-1">{errors.breadTypes}</p>
                    )}
                  </div>

                  {/* Quantity */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-1">
                      כמות משוערת לשבוע *
                    </label>
                    <select
                      value={form.quantity}
                      onChange={(e) => updateField('quantity', e.target.value)}
                      className={inputClass('quantity')}
                    >
                      <option value="">בחרו כמות</option>
                      {quantityOptions.map((q) => (
                        <option key={q} value={q}>
                          {q} כיכרות
                        </option>
                      ))}
                    </select>
                    {errors.quantity && (
                      <p className="text-red-500 text-xs mt-1">{errors.quantity}</p>
                    )}
                  </div>

                  {/* Frequency */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-2">
                      תדירות *
                    </label>
                    <div className="flex flex-wrap gap-3">
                      {frequencyOptions.map((opt) => (
                        <label
                          key={opt.value}
                          className={`flex items-center gap-2 px-4 py-2 rounded-lg border cursor-pointer transition-all text-sm ${
                            form.frequency === opt.value
                              ? 'bg-primary text-cream border-primary'
                              : 'bg-white text-primary-dark border-gray-200 hover:border-gold/50'
                          }`}
                        >
                          <input
                            type="radio"
                            name="frequency"
                            value={opt.value}
                            checked={form.frequency === opt.value}
                            onChange={(e) => updateField('frequency', e.target.value)}
                            className="sr-only"
                          />
                          {opt.label}
                        </label>
                      ))}
                    </div>
                    {errors.frequency && (
                      <p className="text-red-500 text-xs mt-1">{errors.frequency}</p>
                    )}
                  </div>

                  {/* Delivery date */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-1">
                      תאריך אספקה ראשונה
                    </label>
                    <input
                      type="date"
                      value={form.deliveryDate}
                      onChange={(e) => updateField('deliveryDate', e.target.value)}
                      className={inputClass('deliveryDate')}
                    />
                  </div>

                  {/* Notes */}
                  <div>
                    <label className="block text-sm font-semibold text-primary-dark mb-1">
                      הערות נוספות
                    </label>
                    <textarea
                      value={form.notes}
                      onChange={(e) => updateField('notes', e.target.value)}
                      rows={3}
                      className={inputClass('notes')}
                      placeholder="בקשות מיוחדות, אלרגיות, דגשים..."
                    />
                  </div>
                </div>

                {/* Submit */}
                <button
                  type="submit"
                  className="w-full mt-6 bg-gold text-primary-dark py-3.5 rounded-lg font-bold text-lg hover:bg-gold-dark transition-colors"
                >
                  שלח הזמנה
                </button>
                <p className="text-center text-primary-dark/50 text-xs mt-3">
                  נחזור אליכם תוך 24 שעות לאישור ותיאום
                </p>
              </form>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
