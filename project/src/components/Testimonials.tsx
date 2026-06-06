import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { ChevronLeft, ChevronRight, Star, Quote } from 'lucide-react';

const testimonials = [
  {
    name: 'Sarah Mitchell',
    age: 34,
    concern: 'Sports Injury',
    quote:
      "After my ACL surgery, I thought I'd never run again. Dr. Shifa's rehabilitation program was nothing short of miraculous. Her patience and expertise got me back to running in just 5 months!",
    rating: 5,
    image: 'https://images.pexels.com/photos/1181424/pexels-photo-1181424.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#D8C4F2',
  },
  {
    name: 'James Fernandez',
    age: 52,
    concern: 'Chronic Back Pain',
    quote:
      'I suffered from chronic back pain for 6 years. Three months with Dr. Shifa and I was able to return to gardening. Her holistic approach changed my life completely.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1043471/pexels-photo-1043471.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#C7F0F7',
  },
  {
    name: 'Aisha Patel',
    age: 28,
    concern: 'Posture Correction',
    quote:
      "I spent years hunched over a computer. Dr. Shifa's posture correction program improved not just my posture but also my confidence and energy levels.",
    rating: 5,
    image: 'https://images.pexels.com/photos/3807571/pexels-photo-3807571.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#CDECCF',
  },
  {
    name: 'Robert Chen',
    age: 68,
    concern: 'Elderly Mobility',
    quote:
      "At my age, I expected to slow down. Dr. Shifa's elderly care program has me moving better than I did at 55! The gentle, respectful approach made all the difference.",
    rating: 5,
    image: 'https://images.pexels.com/photos/1222271/pexels-photo-1222271.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#FFD6C2',
  },
  {
    name: 'Priya Sharma',
    age: 40,
    concern: 'Post-Surgery Recovery',
    quote:
      'My shoulder surgery recovery was smoother than I ever imagined, thanks to Dr. Shifa. Her detailed, step-by-step rehabilitation gave me confidence every day.',
    rating: 5,
    image: 'https://images.pexels.com/photos/1587009/pexels-photo-1587009.jpeg?auto=compress&cs=tinysrgb&w=200',
    color: '#FFF2B2',
  },
];

export default function Testimonials() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [current, setCurrent] = useState(0);

  const prev = () => setCurrent((c) => (c === 0 ? testimonials.length - 1 : c - 1));
  const next = () => setCurrent((c) => (c === testimonials.length - 1 ? 0 : c + 1));

  const t = testimonials[current];

  return (
    <section id="testimonials" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background */}
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at center, rgba(216,196,242,0.1) 0%, transparent 70%)' }} />

      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-butter-100 dark:bg-yellow-900/30 text-yellow-700 dark:text-yellow-300 mb-4">
            Patient Stories
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Real People,{' '}
            <span className="bg-gradient-to-r from-yellow-500 to-peach-400 bg-clip-text text-transparent italic">
              Real Results
            </span>
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            Hear directly from patients who transformed their lives with Dr. Shifa's care.
          </p>
        </motion.div>

        <motion.div
          className="max-w-4xl mx-auto"
          initial={{ opacity: 0, y: 40 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.7, delay: 0.2 }}
        >
          {/* Main card */}
          <div className="relative">
            <AnimatePresence mode="wait">
              <motion.div
                key={current}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 sm:p-12 shadow-2xl border border-gray-100 dark:border-gray-700 relative overflow-hidden"
                initial={{ opacity: 0, x: 50 }}
                animate={{ opacity: 1, x: 0 }}
                exit={{ opacity: 0, x: -50 }}
                transition={{ duration: 0.4 }}
              >
                {/* Background blob */}
                <div
                  className="absolute top-0 right-0 w-64 h-64 rounded-full blur-3xl opacity-30 pointer-events-none"
                  style={{ background: t.color }}
                />

                <div className="relative z-10 flex flex-col sm:flex-row gap-8 items-start">
                  {/* Avatar */}
                  <div className="flex-shrink-0">
                    <div className="relative">
                      <img
                        src={t.image}
                        alt={t.name}
                        className="w-20 h-20 rounded-2xl object-cover shadow-lg"
                        onError={(e) => {
                          (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(t.name)}&background=D8C4F2&color=555&size=80`;
                        }}
                      />
                      <div
                        className="absolute -bottom-2 -right-2 w-7 h-7 rounded-full flex items-center justify-center shadow-md"
                        style={{ background: t.color }}
                      >
                        <Star className="w-3.5 h-3.5 text-white fill-white" />
                      </div>
                    </div>
                  </div>

                  {/* Content */}
                  <div className="flex-1">
                    <Quote className="w-8 h-8 text-lilac-200 dark:text-lilac-800 mb-4" fill="currentColor" />
                    <p className="font-inter text-lg text-gray-700 dark:text-gray-200 leading-relaxed mb-6 italic">
                      "{t.quote}"
                    </p>

                    <div className="flex items-center justify-between flex-wrap gap-4">
                      <div>
                        <p className="font-playfair font-semibold text-gray-900 dark:text-white text-lg">{t.name}</p>
                        <p className="font-inter text-sm text-gray-500 dark:text-gray-400">
                          Age {t.age} · {t.concern}
                        </p>
                      </div>
                      <div className="flex gap-1">
                        {Array.from({ length: t.rating }).map((_, i) => (
                          <Star key={i} className="w-5 h-5 text-amber-400 fill-amber-400" />
                        ))}
                      </div>
                    </div>
                  </div>
                </div>
              </motion.div>
            </AnimatePresence>
          </div>

          {/* Controls */}
          <div className="flex items-center justify-center gap-4 mt-8">
            <button
              onClick={prev}
              className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-lilac-400 hover:text-lilac-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ChevronLeft className="w-5 h-5" />
            </button>

            {/* Dots */}
            <div className="flex gap-2">
              {testimonials.map((_, i) => (
                <button
                  key={i}
                  onClick={() => setCurrent(i)}
                  className={`h-2 rounded-full transition-all duration-300 ${
                    i === current ? 'w-8 bg-lilac-400' : 'w-2 bg-gray-300 dark:bg-gray-600'
                  }`}
                />
              ))}
            </div>

            <button
              onClick={next}
              className="w-11 h-11 rounded-full bg-white dark:bg-gray-800 border border-gray-200 dark:border-gray-700 flex items-center justify-center hover:border-lilac-400 hover:text-lilac-600 transition-all duration-200 shadow-sm hover:shadow-md"
            >
              <ChevronRight className="w-5 h-5" />
            </button>
          </div>

          {/* Other testimonial thumbnails */}
          <div className="flex justify-center gap-3 mt-6">
            {testimonials.map((item, i) => (
              <button
                key={i}
                onClick={() => setCurrent(i)}
                className={`transition-all duration-300 ${i === current ? 'scale-110 opacity-100' : 'opacity-40 hover:opacity-70'}`}
              >
                <img
                  src={item.image}
                  alt={item.name}
                  className="w-10 h-10 rounded-full object-cover border-2 border-white shadow"
                  onError={(e) => {
                    (e.target as HTMLImageElement).src = `https://ui-avatars.com/api/?name=${encodeURIComponent(item.name)}&background=D8C4F2&color=555&size=40`;
                  }}
                />
              </button>
            ))}
          </div>
        </motion.div>
      </div>
    </section>
  );
}
