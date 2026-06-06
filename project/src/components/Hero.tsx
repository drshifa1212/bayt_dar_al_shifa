import { motion, useScroll, useTransform } from 'framer-motion';
import { ChevronDown, Sparkles, Star } from 'lucide-react';
import { useRef } from 'react';

const blobs = [
  { color: '#D8C4F2', size: 600, x: '-10%', y: '-20%', duration: 8 },
  { color: '#C7F0F7', size: 500, x: '60%', y: '10%', duration: 10 },
  { color: '#CDECCF', size: 400, x: '20%', y: '50%', duration: 7 },
  { color: '#FFF2B2', size: 350, x: '70%', y: '60%', duration: 9 },
  { color: '#FFD6C2', size: 300, x: '-5%', y: '60%', duration: 6 },
];

export default function Hero() {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start start', 'end start'] });
  const y = useTransform(scrollYProgress, [0, 1], ['0%', '30%']);
  const opacity = useTransform(scrollYProgress, [0, 0.8], [1, 0]);

  const scrollToAbout = () => {
    document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' });
  };

  return (
    <section
      id="hero"
      ref={ref}
      className="relative min-h-screen flex items-center justify-center overflow-hidden bg-white dark:bg-gray-950"
    >
      {/* Animated blobs */}
      {blobs.map((blob, i) => (
        <motion.div
          key={i}
          className="absolute rounded-full blur-3xl opacity-40 dark:opacity-20 pointer-events-none"
          style={{
            width: blob.size,
            height: blob.size,
            background: `radial-gradient(circle at center, ${blob.color}, transparent 70%)`,
            left: blob.x,
            top: blob.y,
          }}
          animate={{
            x: [0, 40, -30, 0],
            y: [0, -30, 40, 0],
            scale: [1, 1.1, 0.95, 1],
          }}
          transition={{
            duration: blob.duration,
            repeat: Infinity,
            ease: 'easeInOut',
            delay: i * 0.8,
          }}
        />
      ))}

      {/* Cinematic light sweep */}
      <motion.div
        className="absolute inset-0 pointer-events-none"
        style={{
          background: 'linear-gradient(105deg, transparent 30%, rgba(255,255,255,0.15) 50%, transparent 70%)',
        }}
        animate={{ x: ['-100%', '200%'] }}
        transition={{ duration: 6, repeat: Infinity, repeatDelay: 4, ease: 'easeInOut' }}
      />

      {/* Grid overlay */}
      <div
        className="absolute inset-0 opacity-[0.03] dark:opacity-[0.06] pointer-events-none"
        style={{
          backgroundImage:
            'linear-gradient(rgba(0,0,0,0.5) 1px, transparent 1px), linear-gradient(90deg, rgba(0,0,0,0.5) 1px, transparent 1px)',
          backgroundSize: '60px 60px',
        }}
      />

      <motion.div
        className="relative z-10 container-max px-4 sm:px-6 lg:px-8 flex flex-col lg:flex-row items-center gap-12 lg:gap-20"
        style={{ y, opacity }}
      >
        {/* Text content */}
        <div className="flex-1 text-center lg:text-left">
          {/* Badge */}
          <motion.div
            className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-lilac-50 dark:bg-lilac-900/20 border border-lilac-200 dark:border-lilac-700/40 text-lilac-700 dark:text-lilac-300 text-sm font-inter font-medium mb-6"
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.6, delay: 2.6 }}
          >
            <Sparkles className="w-4 h-4" />
            Certified Physiotherapist & Wellness Expert
            <Star className="w-3.5 h-3.5 fill-current" />
          </motion.div>

          {/* Headline */}
          <motion.h1
            className="font-playfair text-5xl sm:text-6xl lg:text-7xl xl:text-8xl font-bold text-gray-900 dark:text-white leading-[1.1] tracking-tight mb-6"
            initial={{ opacity: 0, y: 40 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.8, delay: 2.8, ease: 'easeOut' }}
          >
            Healing{' '}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-lilac-500 via-aqua-500 to-mint-500 bg-clip-text text-transparent">
                Movement.
              </span>
              <motion.span
                className="absolute -bottom-1 left-0 right-0 h-[3px] rounded-full bg-gradient-to-r from-lilac-400 to-aqua-400"
                initial={{ scaleX: 0 }}
                animate={{ scaleX: 1 }}
                transition={{ duration: 0.8, delay: 3.4 }}
              />
            </span>
            <br />
            Restoring{' '}
            <span className="italic text-gray-700 dark:text-gray-200">Life.</span>
          </motion.h1>

          {/* Subheading */}
          <motion.p
            className="font-inter text-lg sm:text-xl text-gray-600 dark:text-gray-300 leading-relaxed max-w-xl mx-auto lg:mx-0 mb-10"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.1, ease: 'easeOut' }}
          >
            Expert physiotherapy care helping you{' '}
            <span className="text-lilac-600 dark:text-lilac-400 font-medium">move freely</span>,{' '}
            <span className="text-aqua-600 dark:text-aqua-400 font-medium">recover confidently</span>, and{' '}
            <span className="text-mint-600 dark:text-mint-500 font-medium">live pain-free</span>.
          </motion.p>

          {/* CTA Buttons */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-4"
            initial={{ opacity: 0, y: 30 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.7, delay: 3.3, ease: 'easeOut' }}
          >
            <button
              onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-primary"
            >
              Book Appointment
            </button>
            <button
              onClick={() => document.querySelector('#about')?.scrollIntoView({ behavior: 'smooth' })}
              className="btn-secondary dark:text-gray-200 dark:border-gray-600 dark:bg-gray-800/50"
            >
              Learn More
            </button>
          </motion.div>

          {/* Trust indicators */}
          <motion.div
            className="flex flex-wrap items-center justify-center lg:justify-start gap-6 mt-10"
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            transition={{ duration: 0.7, delay: 3.6 }}
          >
            {[
              { value: '500+', label: 'Patients' },
              { value: '95%', label: 'Satisfaction' },
              { value: '8+', label: 'Years Exp.' },
            ].map((stat) => (
              <div key={stat.label} className="text-center">
                <div className="font-playfair font-bold text-2xl text-gray-900 dark:text-white">{stat.value}</div>
                <div className="font-inter text-xs text-gray-500 dark:text-gray-400 uppercase tracking-wide">{stat.label}</div>
              </div>
            ))}
          </motion.div>
        </div>

        {/* Hero image */}
        <motion.div
          className="flex-1 relative flex justify-center"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 3.0, ease: 'easeOut' }}
        >
          {/* Glow ring */}
          <div className="absolute inset-0 flex items-center justify-center">
            <div
              className="w-[420px] h-[420px] rounded-full"
              style={{
                background:
                  'radial-gradient(circle, rgba(216,196,242,0.4) 0%, rgba(199,240,247,0.3) 40%, transparent 70%)',
              }}
            />
          </div>

          {/* Floating card - top left */}
          <motion.div
            className="absolute -left-4 top-12 glass rounded-2xl px-4 py-3 z-20"
            animate={{ y: [0, -10, 0] }}
            transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
          >
            <div className="flex items-center gap-2">
              <div className="w-8 h-8 rounded-full bg-mint-200 flex items-center justify-center">
                <span className="text-mint-700 text-xs font-bold">✓</span>
              </div>
              <div>
                <p className="text-xs font-inter font-semibold text-gray-800">Evidence-Based</p>
                <p className="text-[10px] text-gray-500">Treatment Methods</p>
              </div>
            </div>
          </motion.div>

          {/* Floating card - bottom right */}
          <motion.div
            className="absolute -right-2 bottom-16 glass rounded-2xl px-4 py-3 z-20"
            animate={{ y: [0, 10, 0] }}
            transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut', delay: 1 }}
          >
            <div className="flex items-center gap-2">
              <div className="flex -space-x-1.5">
                {['#D8C4F2', '#CDECCF', '#C7F0F7'].map((c, i) => (
                  <div
                    key={i}
                    className="w-6 h-6 rounded-full border-2 border-white"
                    style={{ background: c }}
                  />
                ))}
              </div>
              <div>
                <p className="text-xs font-inter font-semibold text-gray-800">500+ Happy</p>
                <div className="flex gap-0.5">
                  {[1, 2, 3, 4, 5].map((s) => (
                    <Star key={s} className="w-2.5 h-2.5 fill-amber-400 text-amber-400" />
                  ))}
                </div>
              </div>
            </div>
          </motion.div>

          {/* Main image */}
          <div className="relative w-80 h-96 sm:w-96 sm:h-[480px] rounded-3xl overflow-hidden shadow-2xl">
            <img
              src="https://images.pexels.com/photos/5473182/pexels-photo-5473182.jpeg?auto=compress&cs=tinysrgb&w=800"
              alt="Dr. Shifa performing physiotherapy"
              className="w-full h-full object-cover object-center"
            />
            <div className="absolute inset-0 bg-gradient-to-t from-lilac-900/30 via-transparent to-transparent" />
          </div>
        </motion.div>
      </motion.div>

      {/* Scroll indicator */}
      <motion.button
        onClick={scrollToAbout}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2 text-gray-500 dark:text-gray-400 hover:text-lilac-500 transition-colors"
        animate={{ y: [0, 8, 0] }}
        transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
        initial={{ opacity: 1 }}
      >
        <span className="text-xs font-inter tracking-widest uppercase">Scroll</span>
        <ChevronDown className="w-5 h-5" />
      </motion.button>
    </section>
  );
}
