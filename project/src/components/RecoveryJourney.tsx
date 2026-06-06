import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ClipboardList, Search, FileText, Activity, Star } from 'lucide-react';

const steps = [
  {
    icon: ClipboardList,
    number: '01',
    title: 'Consultation',
    desc: 'A thorough one-on-one conversation to understand your symptoms, history, and health goals.',
    color: '#D8C4F2',
    iconColor: 'text-lilac-700',
  },
  {
    icon: Search,
    number: '02',
    title: 'Assessment',
    desc: 'Comprehensive physical evaluation — posture, movement, strength, and flexibility analysis.',
    color: '#C7F0F7',
    iconColor: 'text-aqua-700',
  },
  {
    icon: FileText,
    number: '03',
    title: 'Treatment Plan',
    desc: 'A personalized, evidence-based roadmap designed specifically around your unique recovery needs.',
    color: '#CDECCF',
    iconColor: 'text-mint-700',
  },
  {
    icon: Activity,
    number: '04',
    title: 'Rehabilitation',
    desc: 'Guided hands-on therapy sessions with progressive exercises to restore function and strength.',
    color: '#FFF2B2',
    iconColor: 'text-yellow-700',
  },
  {
    icon: Star,
    number: '05',
    title: 'Recovery & Wellness',
    desc: 'Long-term wellness strategies and home programs to maintain your results and prevent recurrence.',
    color: '#FFD6C2',
    iconColor: 'text-peach-700',
  },
];

export default function RecoveryJourney() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="recovery" ref={ref} className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Gradient background */}
      <div
        className="absolute inset-0 pointer-events-none opacity-20 dark:opacity-10"
        style={{
          background: 'linear-gradient(135deg, #D8C4F220 0%, #C7F0F720 25%, #CDECCF20 50%, #FFF2B220 75%, #FFD6C220 100%)',
        }}
      />

      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-peach-100 dark:bg-peach-900/30 text-peach-700 dark:text-peach-300 mb-4">
            Your Journey
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            The Path to Your{' '}
            <span className="bg-gradient-to-r from-peach-400 to-lilac-500 bg-clip-text text-transparent italic">
              Recovery
            </span>
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            A carefully structured journey from first consultation to full, lasting recovery.
          </p>
        </motion.div>

        {/* Timeline */}
        <div className="relative">
          {/* Connecting line (desktop) */}
          <div className="hidden lg:block absolute top-20 left-0 right-0 h-0.5 bg-gradient-to-r from-lilac-200 via-aqua-200 via-mint-200 via-butter-200 to-peach-200 dark:from-lilac-800 dark:via-aqua-800 dark:via-mint-800 dark:via-yellow-800 dark:to-peach-800 mx-[10%]">
            <motion.div
              className="h-full bg-gradient-to-r from-lilac-400 via-aqua-400 via-mint-400 via-yellow-400 to-peach-400 origin-left"
              initial={{ scaleX: 0 }}
              animate={inView ? { scaleX: 1 } : {}}
              transition={{ duration: 1.5, delay: 0.3, ease: 'easeInOut' }}
            />
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-5 gap-8">
            {steps.map((step, i) => (
              <motion.div
                key={i}
                className="flex flex-col items-center text-center relative"
                initial={{ opacity: 0, y: 40 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.6, delay: 0.1 + i * 0.15 }}
              >
                {/* Step number circle */}
                <motion.div
                  className="relative z-10 w-16 h-16 rounded-full flex items-center justify-center mb-6 shadow-lg border-4 border-white dark:border-gray-900"
                  style={{ background: step.color }}
                  whileHover={{ scale: 1.1, rotate: 5 }}
                  transition={{ duration: 0.2 }}
                >
                  <step.icon className={`w-7 h-7 ${step.iconColor}`} />
                  <div
                    className="absolute -top-2 -right-2 w-6 h-6 rounded-full bg-white dark:bg-gray-900 border-2 shadow-sm flex items-center justify-center"
                    style={{ borderColor: step.color }}
                  >
                    <span className="text-[9px] font-inter font-bold text-gray-700 dark:text-gray-200">{step.number}</span>
                  </div>
                </motion.div>

                {/* Card */}
                <div
                  className="p-5 rounded-2xl border border-white/60 dark:border-white/5 hover:shadow-lg transition-shadow duration-300"
                  style={{ background: `${step.color}25` }}
                >
                  <h3 className="font-playfair font-semibold text-lg text-gray-900 dark:text-white mb-2">{step.title}</h3>
                  <p className="font-inter text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{step.desc}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}
