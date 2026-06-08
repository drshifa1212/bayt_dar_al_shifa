import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { Award, BookOpen, Heart, Stethoscope, GraduationCap, Star } from 'lucide-react';

const credentials = [
  { icon: GraduationCap, label: 'BPT & MPT Degrees', color: 'bg-lilac-100 text-lilac-700 dark:bg-lilac-900/30 dark:text-lilac-300' },
  { icon: Award, label: 'Certified Sports Physio', color: 'bg-aqua-100 text-aqua-700 dark:bg-aqua-900/30 dark:text-aqua-300' },
  { icon: BookOpen, label: '2+ Years Experience', color: 'bg-mint-100 text-mint-700 dark:bg-mint-900/30 dark:text-mint-300' },
  { icon: Stethoscope, label: '500+ Patients Treated', color: 'bg-peach-100 text-peach-700 dark:bg-peach-900/30 dark:text-peach-300' },
];

const values = [
  {
    icon: Heart,
    title: 'Personalized Care',
    desc: 'Every treatment plan is uniquely designed around your body, goals, and recovery pace.',
    bg: 'from-lilac-50 to-lilac-100 dark:from-lilac-900/20 dark:to-lilac-800/20',
    iconBg: 'bg-lilac-200 dark:bg-lilac-800/50',
    iconColor: 'text-lilac-700 dark:text-lilac-300',
  },
  {
    icon: BookOpen,
    title: 'Evidence-Based Treatment',
    desc: 'All techniques are grounded in the latest physiotherapy research and clinical guidelines.',
    bg: 'from-aqua-50 to-aqua-100 dark:from-aqua-900/20 dark:to-aqua-800/20',
    iconBg: 'bg-aqua-200 dark:bg-aqua-800/50',
    iconColor: 'text-aqua-700 dark:text-aqua-300',
  },
  {
    icon: Star,
    title: 'Holistic Recovery Approach',
    desc: 'We treat the whole person — body, movement, and wellness — for lasting results.',
    bg: 'from-mint-50 to-mint-100 dark:from-mint-900/20 dark:to-mint-800/20',
    iconBg: 'bg-mint-200 dark:bg-mint-800/50',
    iconColor: 'text-mint-700 dark:text-mint-300',
  },
];

export default function About() {
  const { ref, inView } = useInView({ threshold: 0.15 });

  return (
    <section id="about" ref={ref} className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      {/* Background decoration */}
      <div className="absolute top-0 right-0 w-96 h-96 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #D8C4F2, transparent)' }} />
      <div className="absolute bottom-0 left-0 w-72 h-72 rounded-full blur-3xl opacity-15 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #CDECCF, transparent)' }} />

      <div className="container-max">
        {/* Section label */}
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-lilac-100 dark:bg-lilac-900/30 text-lilac-700 dark:text-lilac-300 mb-4">
            About Dr. Shifa
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white leading-tight">
            A Healer Guided by{' '}
            <span className="bg-gradient-to-r from-lilac-500 to-aqua-500 bg-clip-text text-transparent italic">
              Compassion
            </span>
          </h2>
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-16 items-center">
          {/* Image side */}
          <motion.div
            className="relative"
            initial={{ opacity: 0, x: -50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut' }}
          >
            <div className="relative rounded-3xl overflow-hidden shadow-2xl">
              <img
                src="https://images.pexels.com/photos/4021779/pexels-photo-4021779.jpeg?auto=compress&cs=tinysrgb&w=800"
                alt="Dr. Shifa — Professional Physiotherapist"
                className="w-full h-[520px] object-cover object-center"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-gray-900/20 to-transparent" />
            </div>

            {/* Credentials overlay */}
            <div className="absolute -bottom-6 -right-6 bg-white dark:bg-gray-900 rounded-2xl p-5 shadow-2xl border border-gray-100 dark:border-gray-800">
              <p className="font-inter text-xs text-gray-500 dark:text-gray-400 uppercase tracking-widest mb-3">Qualifications</p>
              <div className="space-y-2">
                {credentials.map((c, i) => (
                  <motion.div
                    key={i}
                    className="flex items-center gap-2.5"
                    initial={{ opacity: 0, x: 20 }}
                    animate={inView ? { opacity: 1, x: 0 } : {}}
                    transition={{ delay: 0.4 + i * 0.1 }}
                  >
                    <div className={`w-7 h-7 rounded-lg flex items-center justify-center ${c.color}`}>
                      <c.icon className="w-3.5 h-3.5" />
                    </div>
                    <span className="text-sm font-inter font-medium text-gray-700 dark:text-gray-200">{c.label}</span>
                  </motion.div>
                ))}
              </div>
            </div>

            {/* Decorative shape */}
            <div className="absolute -top-4 -left-4 w-24 h-24 rounded-full border-4 border-lilac-200 dark:border-lilac-700/40 opacity-60" />
            <div className="absolute top-8 -left-8 w-12 h-12 rounded-full bg-butter-200 dark:bg-butter-900/30 opacity-70" />
          </motion.div>

          {/* Text side */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.8, ease: 'easeOut', delay: 0.1 }}
          >
            <p className="font-inter text-lg text-gray-600 dark:text-gray-300 leading-relaxed mb-6">
              Dr. Shifa is a highly dedicated physiotherapist with over 2+ years of clinical experience helping individuals
              of all ages recover, move better, and achieve optimal physical wellness. Her patient-first philosophy
              ensures every person receives individualized attention and care.
            </p>
            <p className="font-inter text-base text-gray-500 dark:text-gray-400 leading-relaxed mb-10">
              With expertise spanning sports injury rehabilitation, post-surgical recovery, chronic pain management,
              and preventive physiotherapy, Dr. Shifa brings warmth, precision, and expertise to every session.
              Her holistic approach addresses not just symptoms, but the root causes of discomfort.
            </p>

            {/* Value cards */}
            <div className="space-y-4">
              {values.map((v, i) => (
                <motion.div
                  key={i}
                  className={`flex items-start gap-4 p-5 rounded-2xl bg-gradient-to-r ${v.bg} border border-white/60 dark:border-white/5`}
                  initial={{ opacity: 0, y: 20 }}
                  animate={inView ? { opacity: 1, y: 0 } : {}}
                  transition={{ delay: 0.3 + i * 0.15 }}
                  whileHover={{ scale: 1.01, transition: { duration: 0.2 } }}
                >
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center flex-shrink-0 ${v.iconBg}`}>
                    <v.icon className={`w-5 h-5 ${v.iconColor}`} />
                  </div>
                  <div>
                    <h4 className="font-playfair font-semibold text-gray-900 dark:text-white mb-1">{v.title}</h4>
                    <p className="font-inter text-sm text-gray-600 dark:text-gray-300 leading-relaxed">{v.desc}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </section>
  );
}
