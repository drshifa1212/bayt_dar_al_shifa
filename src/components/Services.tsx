import { motion, Variants } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight, HeartPulse, Dumbbell, Activity, Bone, PersonStanding, Users } from 'lucide-react';

const services = [
  {
    icon: HeartPulse,
    title: 'Physiotherapy Consultation',
    desc: 'Comprehensive assessment and diagnosis to identify the root cause of your pain or discomfort.',
    tag: 'Assessment',
    color: 'lilac',
    bg: '#D8C4F2',
    bgLight: '#f5f0fb',
  },
  {
    icon: Dumbbell,
    title: 'Sports Injury Rehabilitation',
    desc: 'Tailored recovery plans designed specifically for athletes to return to peak performance safely.',
    tag: 'Athletics',
    color: 'aqua',
    bg: '#C7F0F7',
    bgLight: '#f0fcfe',
  },
  {
    icon: Activity,
    title: 'Post-Surgery Rehabilitation',
    desc: 'Safe, effective post-operative recovery protocols to restore strength and mobility.',
    tag: 'Recovery',
    color: 'mint',
    bg: '#CDECCF',
    bgLight: '#f4fbf4',
  },
  {
    icon: Bone,
    title: 'Back & Neck Pain Treatment',
    desc: 'Targeted therapy programs addressing spinal conditions, disc issues, and chronic tension.',
    tag: 'Spinal',
    color: 'peach',
    bg: '#FFD6C2',
    bgLight: '#fff8f5',
  },
  {
    icon: PersonStanding,
    title: 'Posture Correction',
    desc: 'Improve alignment, flexibility, and biomechanics through structured posture rehabilitation.',
    tag: 'Alignment',
    color: 'butter',
    bg: '#FFF2B2',
    bgLight: '#fffef5',
  },
  {
    icon: Users,
    title: 'Elderly Mobility Care',
    desc: 'Gentle, specialized programs to enhance movement, balance, and independence in seniors.',
    tag: 'Senior Care',
    color: 'lilac',
    bg: '#D8C4F2',
    bgLight: '#f5f0fb',
  },
];

const cardVariants: Variants = {
  hidden: { opacity: 0, y: 40 },
  visible: (i: number) => ({
    opacity: 1,
    y: 0,
    transition: { duration: 0.6, delay: i * 0.1, ease: 'easeOut' as const },
  }),
};

export default function Services() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="services" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      {/* Background blobs */}
      <div className="absolute -top-20 -right-20 w-80 h-80 rounded-full blur-3xl opacity-30 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #C7F0F7, transparent)' }} />
      <div className="absolute -bottom-20 -left-20 w-80 h-80 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D8C4F2, transparent)' }} />

      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-aqua-100 dark:bg-aqua-900/30 text-aqua-700 dark:text-aqua-300 mb-4">
            Our Services
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Comprehensive{' '}
            <span className="bg-gradient-to-r from-aqua-500 to-mint-500 bg-clip-text text-transparent italic">
              Physiotherapy
            </span>{' '}
            Services
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400 max-w-xl mx-auto text-lg">
            Evidence-based treatments tailored to your unique recovery journey and wellness goals.
          </p>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {services.map((s, i) => (
            <motion.div
              key={i}
              className="group relative bg-white dark:bg-gray-800 rounded-3xl p-7 border border-gray-100 dark:border-gray-700 hover:border-transparent transition-all duration-500 hover:shadow-2xl cursor-pointer overflow-hidden"
              custom={i}
              variants={cardVariants}
              initial="hidden"
              animate={inView ? 'visible' : 'hidden'}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Hover gradient background */}
              <div
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 rounded-3xl"
                style={{
                  background: `linear-gradient(135deg, ${s.bg}30, ${s.bg}15, transparent)`,
                }}
              />

              {/* Floating blob on hover */}
              <motion.div
                className="absolute -top-10 -right-10 w-40 h-40 rounded-full blur-2xl opacity-0 group-hover:opacity-40 transition-opacity duration-500 pointer-events-none"
                style={{ background: s.bg }}
              />

              <div className="relative z-10">
                {/* Icon */}
                <div
                  className="w-14 h-14 rounded-2xl flex items-center justify-center mb-5 shadow-sm transition-transform duration-300 group-hover:scale-110"
                  style={{ background: `${s.bg}60` }}
                >
                  <s.icon className="w-7 h-7" style={{ color: s.bg === '#FFF2B2' ? '#8a7200' : undefined }} />
                </div>

                {/* Tag */}
                <span
                  className="inline-block text-[10px] font-inter font-bold tracking-widest uppercase px-2.5 py-1 rounded-full mb-3"
                  style={{ background: `${s.bg}40`, color: '#555' }}
                >
                  {s.tag}
                </span>

                <h3 className="font-playfair font-semibold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-gray-800 dark:group-hover:text-white">
                  {s.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                  {s.desc}
                </p>

                {/* CTA */}
                <button className="flex items-center gap-2 text-sm font-inter font-semibold text-gray-700 dark:text-gray-300 group/btn hover:gap-3 transition-all duration-200">
                  <span>Learn more</span>
                  <ArrowRight className="w-4 h-4 group-hover/btn:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}
