import { motion } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { CheckCircle2 } from 'lucide-react';

type BodyArea = {
  id: string;
  label: string;
  x: string;
  y: string;
  conditions: string[];
  color: string;
};

const bodyAreas: BodyArea[] = [
  {
    id: 'head',
    label: 'Head & Neck',
    x: '49%',
    y: '7%',
    conditions: ['Cervical spondylosis', 'Tension headaches', 'Neck stiffness', 'Whiplash'],
    color: '#D8C4F2',
  },
  {
    id: 'shoulder',
    label: 'Shoulder',
    x: '26%',
    y: '22%',
    conditions: ['Frozen shoulder', 'Rotator cuff injury', 'Shoulder bursitis', 'Impingement'],
    color: '#C7F0F7',
  },
  {
    id: 'back',
    label: 'Back & Spine',
    x: '49%',
    y: '36%',
    conditions: ['Lower back pain', 'Disc herniation', 'Sciatica', 'Scoliosis'],
    color: '#CDECCF',
  },
  {
    id: 'elbow',
    label: 'Elbow & Wrist',
    x: '20%',
    y: '40%',
    conditions: ['Tennis elbow', 'Golfer\'s elbow', 'Carpal tunnel', 'Wrist sprain'],
    color: '#FFF2B2',
  },
  {
    id: 'hip',
    label: 'Hip & Pelvis',
    x: '42%',
    y: '53%',
    conditions: ['Hip bursitis', 'SI joint pain', 'Hip arthritis', 'Piriformis syndrome'],
    color: '#FFD6C2',
  },
  {
    id: 'knee',
    label: 'Knee',
    x: '44%',
    y: '70%',
    conditions: ['ACL/MCL tears', 'Patella tendonitis', 'Knee osteoarthritis', 'Runner\'s knee'],
    color: '#D8C4F2',
  },
  {
    id: 'ankle',
    label: 'Ankle & Foot',
    x: '44%',
    y: '88%',
    conditions: ['Ankle sprain', 'Plantar fasciitis', 'Achilles tendonitis', 'Flat feet'],
    color: '#C7F0F7',
  },
];

export default function PainSelector() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [selected, setSelected] = useState<BodyArea | null>(null);

  return (
    <section ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="container-max">
        <motion.div
          className="text-center mb-16"
          initial={{ opacity: 0, y: 30 }}
          animate={inView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
        >
          <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-peach-100 dark:bg-peach-900/30 text-peach-700 dark:text-peach-300 mb-4">
            Interactive
          </span>
          <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
            Where Does It{' '}
            <span className="bg-gradient-to-r from-peach-400 to-lilac-500 bg-clip-text text-transparent italic">
              Hurt?
            </span>
          </h2>
          <p className="font-inter text-gray-500 dark:text-gray-400 max-w-lg mx-auto text-lg">
            Click on a body area to explore the conditions Dr. Shifa can treat for you.
          </p>
        </motion.div>

        <div className="flex flex-col lg:flex-row items-center justify-center gap-12">
          {/* Body diagram */}
          <motion.div
            className="relative w-56 h-[480px] flex-shrink-0"
            initial={{ opacity: 0, x: -40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7 }}
          >
            {/* Silhouette SVG */}
            <svg viewBox="0 0 100 210" className="w-full h-full" fill="none">
              {/* Head */}
              <ellipse cx="50" cy="18" rx="13" ry="15" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.5" className="dark:fill-gray-700 dark:stroke-gray-600" />
              {/* Neck */}
              <rect x="44" y="31" width="12" height="8" rx="2" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Torso */}
              <path d="M30 39 Q22 44 20 60 L20 100 Q20 105 25 108 L75 108 Q80 105 80 100 L80 60 Q78 44 70 39 Z" fill="#e5e7eb" stroke="#d1d5db" strokeWidth="0.5" className="dark:fill-gray-700 dark:stroke-gray-600" />
              {/* Left arm */}
              <path d="M30 40 Q18 55 15 80 Q14 90 16 95 Q18 97 20 95 Q22 90 22 80 Q26 60 33 48 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Left forearm */}
              <path d="M16 92 Q12 105 11 118 Q10 122 12 124 Q14 126 16 124 Q18 122 18 118 Q19 108 22 95 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Right arm */}
              <path d="M70 40 Q82 55 85 80 Q86 90 84 95 Q82 97 80 95 Q78 90 78 80 Q74 60 67 48 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Right forearm */}
              <path d="M84 92 Q88 105 89 118 Q90 122 88 124 Q86 126 84 124 Q82 122 82 118 Q81 108 78 95 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Pelvis */}
              <path d="M25 108 Q20 115 22 125 Q25 130 50 130 Q75 130 78 125 Q80 115 75 108 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Left thigh */}
              <path d="M26 126 Q22 145 24 162 Q25 166 30 167 Q34 166 35 162 Q35 145 36 128 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Left shin */}
              <path d="M25 160 Q22 175 23 188 Q24 192 28 193 Q32 192 33 188 Q33 175 32 162 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Right thigh */}
              <path d="M74 126 Q78 145 76 162 Q75 166 70 167 Q66 166 65 162 Q65 145 64 128 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
              {/* Right shin */}
              <path d="M75 160 Q78 175 77 188 Q76 192 72 193 Q68 192 67 188 Q67 175 68 162 Z" fill="#e5e7eb" className="dark:fill-gray-700" />
            </svg>

            {/* Hot spots */}
            {bodyAreas.map((area) => (
              <motion.button
                key={area.id}
                className="absolute -translate-x-1/2 -translate-y-1/2 group"
                style={{ left: area.x, top: area.y }}
                onClick={() => setSelected(selected?.id === area.id ? null : area)}
                whileHover={{ scale: 1.2 }}
                whileTap={{ scale: 0.9 }}
              >
                <motion.div
                  className="relative w-6 h-6 rounded-full border-2 border-white shadow-md"
                  style={{
                    background: selected?.id === area.id ? area.color : `${area.color}cc`,
                  }}
                  animate={
                    selected?.id === area.id
                      ? { scale: [1, 1.3, 1], transition: { repeat: Infinity, duration: 1.5 } }
                      : {}
                  }
                >
                  <motion.div
                    className="absolute inset-0 rounded-full"
                    style={{ background: area.color }}
                    animate={{ scale: [1, 2, 1], opacity: [0.5, 0, 0.5] }}
                    transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
                  />
                </motion.div>
                <span
                  className="absolute -top-7 left-1/2 -translate-x-1/2 text-[9px] font-inter font-bold whitespace-nowrap px-2 py-0.5 rounded-full bg-white/90 dark:bg-gray-800/90 text-gray-700 dark:text-gray-200 shadow opacity-0 group-hover:opacity-100 transition-opacity border border-gray-100 dark:border-gray-700"
                >
                  {area.label}
                </span>
              </motion.button>
            ))}
          </motion.div>

          {/* Info panel */}
          <motion.div
            className="flex-1 max-w-lg"
            initial={{ opacity: 0, x: 40 }}
            animate={inView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.7, delay: 0.2 }}
          >
            {selected ? (
              <motion.div
                key={selected.id}
                className="bg-white dark:bg-gray-800 rounded-3xl p-8 shadow-xl border border-gray-100 dark:border-gray-700"
                initial={{ opacity: 0, y: 20, scale: 0.96 }}
                animate={{ opacity: 1, y: 0, scale: 1 }}
                transition={{ duration: 0.4 }}
              >
                <div
                  className="inline-block px-4 py-2 rounded-full text-sm font-inter font-semibold mb-4"
                  style={{ background: `${selected.color}50`, color: '#444' }}
                >
                  {selected.label}
                </div>
                <h3 className="font-playfair text-2xl font-bold text-gray-900 dark:text-white mb-4">
                  Conditions We Treat
                </h3>
                <ul className="space-y-3 mb-6">
                  {selected.conditions.map((c, i) => (
                    <motion.li
                      key={i}
                      className="flex items-center gap-3 font-inter text-gray-700 dark:text-gray-200"
                      initial={{ opacity: 0, x: -15 }}
                      animate={{ opacity: 1, x: 0 }}
                      transition={{ delay: i * 0.08 }}
                    >
                      <CheckCircle2 className="w-5 h-5 flex-shrink-0" style={{ color: selected.color === '#FFF2B2' ? '#8a7200' : selected.color.replace('#', '') ? selected.color : '#9866d4' }} />
                      {c}
                    </motion.li>
                  ))}
                </ul>
                <button
                  onClick={() => document.querySelector('#booking')?.scrollIntoView({ behavior: 'smooth' })}
                  className="btn-primary w-full text-center justify-center"
                >
                  Book Consultation
                </button>
              </motion.div>
            ) : (
              <div className="text-center p-8 rounded-3xl border-2 border-dashed border-gray-200 dark:border-gray-700">
                <div className="text-5xl mb-4 opacity-30">👆</div>
                <p className="font-inter text-gray-500 dark:text-gray-400">
                  Tap any highlighted point on the body to discover treatments for that area
                </p>
              </div>
            )}
          </motion.div>
        </div>
      </div>
    </section>
  );
}
