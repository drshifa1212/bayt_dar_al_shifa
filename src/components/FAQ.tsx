import { motion, AnimatePresence } from 'framer-motion';
import { useInView } from '../hooks/useInView';
import { useState } from 'react';
import { ChevronDown, HelpCircle } from 'lucide-react';

const faqs = [
  {
    q: 'What conditions do you treat?',
    a: 'Dr. Shifa treats a wide range of musculoskeletal and neurological conditions including back and neck pain, sports injuries, post-surgical rehabilitation, arthritis, sciatica, frozen shoulder, and more. Contact us for a specific inquiry.',
  },
  {
    q: 'Do I need a referral to see Dr. Shifa?',
    a: 'No referral is necessary. You can book an appointment directly. However, if you have insurance that requires a referral, please check with your provider first.',
  },
  {
    q: 'How many sessions will I need?',
    a: 'The number of sessions varies depending on your condition, severity, and individual response to treatment. After your initial assessment, Dr. Shifa will provide a clear treatment plan with an estimated timeline.',
  },
  {
    q: 'Is physiotherapy painful?',
    a: 'Physiotherapy should not be painful. Some techniques may cause mild discomfort as part of the healing process, but this is carefully managed. Dr. Shifa prioritizes your comfort and will adjust treatment based on your feedback.',
  },
  {
    q: 'What should I bring to my first appointment?',
    a: 'Bring any relevant medical records, X-rays, or reports. Wear comfortable, loose-fitting clothing that allows easy access to the affected area. Arrive 10 minutes early to complete initial forms.',
  },
  {
    q: 'Do you offer home visit physiotherapy?',
    a: 'Yes, home visits are available for patients with mobility limitations or post-surgical recovery needs. Please contact us to discuss availability and arrangements.',
  },
  {
    q: 'How long is a typical session?',
    a: 'Initial consultations are 60-75 minutes, including assessment and first treatment. Follow-up sessions are typically 45-60 minutes. The duration may vary based on the nature of your treatment.',
  },
];

export default function FAQ() {
  const { ref, inView } = useInView({ threshold: 0.1 });
  const [open, setOpen] = useState<number | null>(0);

  return (
    <section id="faq" ref={ref} className="section-padding bg-gray-50 dark:bg-gray-900 relative overflow-hidden">
      <div className="absolute inset-0 pointer-events-none"
        style={{ background: 'radial-gradient(ellipse at bottom center, rgba(205,236,207,0.15) 0%, transparent 70%)' }} />

      <div className="container-max">
        <div className="max-w-3xl mx-auto">
          <motion.div
            className="text-center mb-12"
            initial={{ opacity: 0, y: 30 }}
            animate={inView ? { opacity: 1, y: 0 } : {}}
            transition={{ duration: 0.6 }}
          >
            <span className="inline-block px-4 py-1.5 rounded-full text-xs font-inter font-semibold tracking-widest uppercase bg-mint-100 dark:bg-mint-900/30 text-mint-700 dark:text-mint-300 mb-4">
              FAQ
            </span>
            <h2 className="font-playfair text-4xl sm:text-5xl font-bold text-gray-900 dark:text-white mb-4">
              Common{' '}
              <span className="bg-gradient-to-r from-mint-500 to-aqua-500 bg-clip-text text-transparent italic">
                Questions
              </span>
            </h2>
            <p className="font-inter text-gray-500 dark:text-gray-400 text-lg">
              Everything you need to know before your first visit.
            </p>
          </motion.div>

          <div className="space-y-3">
            {faqs.map((faq, i) => (
              <motion.div
                key={i}
                className="bg-white dark:bg-gray-800 rounded-2xl border border-gray-100 dark:border-gray-700 overflow-hidden"
                initial={{ opacity: 0, y: 20 }}
                animate={inView ? { opacity: 1, y: 0 } : {}}
                transition={{ duration: 0.5, delay: i * 0.07 }}
              >
                <button
                  onClick={() => setOpen(open === i ? null : i)}
                  className="w-full flex items-center justify-between gap-4 px-6 py-5 text-left hover:bg-gray-50 dark:hover:bg-gray-750 transition-colors duration-200 group"
                >
                  <div className="flex items-center gap-3">
                    <HelpCircle className={`w-4 h-4 flex-shrink-0 transition-colors ${open === i ? 'text-lilac-500' : 'text-gray-400 group-hover:text-lilac-400'}`} />
                    <span className={`font-inter font-semibold text-base transition-colors ${open === i ? 'text-lilac-600 dark:text-lilac-400' : 'text-gray-800 dark:text-gray-200'}`}>
                      {faq.q}
                    </span>
                  </div>
                  <motion.div
                    animate={{ rotate: open === i ? 180 : 0 }}
                    transition={{ duration: 0.3 }}
                    className="flex-shrink-0"
                  >
                    <ChevronDown className={`w-5 h-5 transition-colors ${open === i ? 'text-lilac-500' : 'text-gray-400'}`} />
                  </motion.div>
                </button>

                <AnimatePresence initial={false}>
                  {open === i && (
                    <motion.div
                      initial={{ height: 0, opacity: 0 }}
                      animate={{ height: 'auto', opacity: 1 }}
                      exit={{ height: 0, opacity: 0 }}
                      transition={{ duration: 0.3, ease: 'easeInOut' }}
                    >
                      <div className="px-6 pb-5 pt-0">
                        <div className="pl-7 border-l-2 border-lilac-200 dark:border-lilac-700">
                          <p className="font-inter text-gray-600 dark:text-gray-300 text-sm leading-relaxed">
                            {faq.a}
                          </p>
                        </div>
                      </div>
                    </motion.div>
                  )}
                </AnimatePresence>
              </motion.div>
            ))}
          </div>

          <motion.p
            className="text-center mt-10 font-inter text-gray-500 dark:text-gray-400"
            initial={{ opacity: 0 }}
            animate={inView ? { opacity: 1 } : {}}
            transition={{ delay: 0.6 }}
          >
            Still have questions?{' '}
            <button
              onClick={() => document.querySelector('#contact')?.scrollIntoView({ behavior: 'smooth' })}
              className="text-lilac-600 dark:text-lilac-400 font-medium hover:underline"
            >
              Contact us directly
            </button>
          </motion.p>
        </div>
      </div>
    </section>
  );
}
