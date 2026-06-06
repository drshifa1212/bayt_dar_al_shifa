import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useEffect, useRef, useState } from 'react';
import { Shield, Clock, Award, TrendingUp, Heart, Microscope } from 'lucide-react';

const stats = [
  { value: 500, suffix: '+', label: 'Patients Treated', icon: Heart, color: 'lilac' },
  { value: 95, suffix: '%', label: 'Recovery Satisfaction', icon: TrendingUp, color: 'mint' },
  { value: 8, suffix: '+', label: 'Years Experience', icon: Award, color: 'aqua' },
  { value: 100, suffix: '%', label: 'Personalized Plans', icon: Shield, color: 'peach' },
];

const reasons = [
  {
    icon: Shield,
    title: 'Personalized Treatment Plans',
    desc: 'No two patients are alike. Every plan is custom-built for your unique body and goals.',
    color: 'from-lilac-100 to-lilac-50 dark:from-lilac-900/20 dark:to-transparent',
    iconColor: 'text-lilac-600 dark:text-lilac-400',
    iconBg: 'bg-lilac-100 dark:bg-lilac-900/40',
  },
  {
    icon: Microscope,
    title: 'Evidence-Based Practice',
    desc: 'Treatments backed by cutting-edge research and clinical trials for proven outcomes.',
    color: 'from-aqua-100 to-aqua-50 dark:from-aqua-900/20 dark:to-transparent',
    iconColor: 'text-aqua-600 dark:text-aqua-400',
    iconBg: 'bg-aqua-100 dark:bg-aqua-900/40',
  },
  {
    icon: Clock,
    title: 'Flexible Appointment Times',
    desc: 'Morning, evening, and weekend slots available to fit your busy schedule.',
    color: 'from-mint-100 to-mint-50 dark:from-mint-900/20 dark:to-transparent',
    iconColor: 'text-mint-600 dark:text-mint-400',
    iconBg: 'bg-mint-100 dark:bg-mint-900/40',
  },
  {
    icon: Heart,
    title: 'Compassionate Approach',
    desc: 'A warm, welcoming environment where your comfort and progress come first.',
    color: 'from-peach-100 to-peach-50 dark:from-peach-900/20 dark:to-transparent',
    iconColor: 'text-peach-600 dark:text-peach-400',
    iconBg: 'bg-peach-100 dark:bg-peach-900/40',
  },
];

function Counter({ value, suffix, inView }: { value: number; suffix: string; inView: boolean }) {
  const [count, setCount] = useState(0);
  const started = useRef(false);

  useEffect(() => {
    if (!inView || started.current) return;
    started.current = true;
    const duration = 1800;
    const steps = 60;
    const increment = value / steps;
    let current = 0;
    const timer = setInterval(() => {
      current += increment;
      if (current >= value) {
        setCount(value);
        clearInterval(timer);
      } else {
        setCount(Math.floor(current));
      }
    }, duration / steps);
    return () => clearInterval(timer);
  }, [inView, value]);

  return (
    <span>
      {count}
      {suffix}
    </span>
  );
}

export default function WhyChoose() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="why-choose" ref={ref} className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[800px] h-[400px] rounded-full blur-3xl opacity-10 dark:opacity-5 pointer-events-none"
        style={{ background: 'linear-gradient(to right, #D8C4F2, #C7F0F7, #CDECCF)' }} />

      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-mint-100 dark:bg-mint-900/30 text-mint-700 dark:text-mint-300 mb-4">
            Why Choose Us
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Excellence You Can{' '}
            <span className="bg-gradient-to-r from-mint-500 to-aqua-500 bg-clip-text text-transparent italic">
              Feel
            </span>
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            Dr. Shifa combines clinical excellence with genuine compassion — because you deserve both.
          </p>
        </motion.div>

        {/* Stats */}
        <div className="grid grid-cols-2 lg:grid-cols-4 gap-6 mb-16">
          {stats.map((stat, i) => (
            <motion.div
              key={i}
              className="relative text-center p-8 rounded-3xl bg-gray-50 dark:bg-gray-900 border border-gray-100 dark:border-gray-800 overflow-hidden group hover:shadow-xl transition-shadow duration-300"
              initial={{ opacity: 0, scale: 0.8 }}
              animate={inView ? { opacity: 1, scale: 1 } : {}}
              transition={{ duration: 0.5, delay: i * 0.1, type: 'spring', stiffness: 200 }}
            >
              <motion.div
                className={`absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500`}
                style={{
                  background:
                    stat.color === 'lilac'
                      ? 'radial-gradient(circle at center, rgba(216,196,242,0.2), transparent)'
                      : stat.color === 'mint'
                      ? 'radial-gradient(circle at center, rgba(205,236,207,0.2), transparent)'
                      : stat.color === 'aqua'
                      ? 'radial-gradient(circle at center, rgba(199,240,247,0.2), transparent)'
                      : 'radial-gradient(circle at center, rgba(255,214,194,0.2), transparent)',
                }}
              />
              <stat.icon className={`w-8 h-8 mx-auto mb-3 opacity-60 ${
                stat.color === 'lilac' ? 'text-lilac-500' :
                stat.color === 'mint' ? 'text-mint-500' :
                stat.color === 'aqua' ? 'text-aqua-500' : 'text-peach-500'
              }`} />
              <div className="font-playfair font-bold text-4xl text-gray-900 dark:text-white mb-1">
                <Counter value={stat.value} suffix={stat.suffix} inView={inView} />
              </div>
              <div className="font-inter text-sm text-gray-500 dark:text-gray-400">{stat.label}</div>
            </motion.div>
          ))}
        </div>

        {/* Reasons grid */}
        <div className="grid sm:grid-cols-2 gap-6">
          {reasons.map((r, i) => (
            <motion.div
              key={i}
              className={`flex items-start gap-5 p-7 rounded-3xl bg-gradient-to-br ${r.color} border border-white/60 dark:border-white/5`}
              initial={{ opacity: 0, y: 30 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 + i * 0.1 }}
              whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
            >
              <div className={`w-12 h-12 rounded-2xl flex items-center justify-center flex-shrink-0 ${r.iconBg}`}>
                <r.icon className={`w-6 h-6 ${r.iconColor}`} />
              </div>
              <div>
                <h3 className="font-playfair font-semibold text-xl text-gray-900 dark:text-white mb-2">{r.title}</h3>
                <p className="font-inter text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{r.desc}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
