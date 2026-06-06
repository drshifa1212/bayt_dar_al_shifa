import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { ArrowRight, BookOpen, Leaf, Zap, Sun } from 'lucide-react';

const tips = [
  {
    icon: Leaf,
    category: 'Wellness',
    title: '5 Daily Stretches to Relieve Back Pain',
    excerpt: 'Start your morning with these gentle, physiotherapist-approved stretches to keep your spine healthy and pain-free.',
    time: '5 min read',
    image: 'https://images.pexels.com/photos/3823488/pexels-photo-3823488.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#CDECCF',
    tagColor: 'bg-mint-100 text-mint-700 dark:bg-mint-900/30 dark:text-mint-300',
  },
  {
    icon: Zap,
    category: 'Sports',
    title: 'How to Prevent Common Running Injuries',
    excerpt: 'Discover the biomechanical principles and practical warm-up routines that keep runners injury-free for longer.',
    time: '7 min read',
    image: 'https://images.pexels.com/photos/4162580/pexels-photo-4162580.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#C7F0F7',
    tagColor: 'bg-aqua-100 text-aqua-700 dark:bg-aqua-900/30 dark:text-aqua-300',
  },
  {
    icon: Sun,
    category: 'Posture',
    title: 'The Desk Worker\'s Guide to Perfect Posture',
    excerpt: 'Eight hours at a desk doesn\'t have to mean pain. Learn ergonomic setups and micro-break exercises for office workers.',
    time: '6 min read',
    image: 'https://images.pexels.com/photos/5699514/pexels-photo-5699514.jpeg?auto=compress&cs=tinysrgb&w=600',
    color: '#D8C4F2',
    tagColor: 'bg-lilac-100 text-lilac-700 dark:bg-lilac-900/30 dark:text-lilac-300',
  },
];

export default function HealthTips() {
  const { ref, inView } = useInView({ threshold: 0.1 });

  return (
    <section id="blog" ref={ref} className="section-padding bg-white dark:bg-gray-950 relative overflow-hidden">
      <div className="absolute top-1/2 left-0 w-64 h-64 rounded-full blur-3xl opacity-20 dark:opacity-10 pointer-events-none"
        style={{ background: 'radial-gradient(circle, #CDECCF, transparent)' }} />

      <div className="container-max">
        <motion.div
          className="flex flex-col sm:flex-row sm:items-end justify-between gap-6 mb-12"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <div>
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-mint-100 dark:bg-mint-900/30 text-mint-700 dark:text-mint-300 mb-4">
              Health Tips
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white">
              Insights for{' '}
              <span className="bg-gradient-to-r from-mint-500 to-aqua-500 bg-clip-text text-transparent italic">
                Better Health
              </span>
            </h2>
          </div>
          <button className="flex items-center gap-2 font-inter text-sm font-semibold text-lilac-600 dark:text-lilac-400 hover:gap-3 transition-all duration-200 flex-shrink-0">
            View all articles <ArrowRight className="w-4 h-4" />
          </button>
        </motion.div>

        <div className="grid sm:grid-cols-2 lg:grid-cols-3 gap-8">
          {tips.map((tip, i) => (
            <motion.article
              key={i}
              className="group bg-white dark:bg-gray-900 rounded-3xl overflow-hidden border border-gray-100 dark:border-gray-800 hover:shadow-2xl transition-all duration-500 cursor-pointer"
              initial={{ opacity: 0, y: 40 }}
              animate={inView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: i * 0.12 }}
              whileHover={{ y: -6, transition: { duration: 0.3 } }}
            >
              {/* Image */}
              <div className="relative h-52 overflow-hidden">
                <img
                  src={tip.image}
                  alt={tip.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                />
                <div
                  className="absolute inset-0 opacity-30"
                  style={{ background: `linear-gradient(to top, ${tip.color}80, transparent)` }}
                />
                {/* Category badge */}
                <div className="absolute top-4 left-4">
                  <span className={`px-3 py-1 rounded-full text-xs font-inter font-bold ${tip.tagColor} backdrop-blur-sm`}>
                    {tip.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-6">
                <div className="flex items-center gap-2 text-xs text-gray-400 dark:text-gray-500 font-inter mb-3">
                  <BookOpen className="w-3.5 h-3.5" />
                  {tip.time}
                </div>
                <h3 className="font-playfair font-semibold text-xl text-gray-900 dark:text-white mb-3 group-hover:text-lilac-600 dark:group-hover:text-lilac-400 transition-colors leading-snug">
                  {tip.title}
                </h3>
                <p className="font-inter text-sm text-gray-500 dark:text-gray-400 leading-relaxed mb-5">
                  {tip.excerpt}
                </p>
                <button className="flex items-center gap-2 text-sm font-inter font-semibold text-gray-700 dark:text-gray-300 group/link hover:gap-3 transition-all duration-200 hover:text-lilac-600 dark:hover:text-lilac-400">
                  Read article <ArrowRight className="w-4 h-4 group-hover/link:translate-x-1 transition-transform" />
                </button>
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}
