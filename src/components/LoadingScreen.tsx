import { motion, AnimatePresence } from 'framer-motion';
import { useEffect, useState } from 'react';

export default function LoadingScreen() {
  const [progress, setProgress] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setProgress((p) => {
        if (p >= 100) {
          clearInterval(interval);
          return 100;
        }
        return p + 2;
      });
    }, 40);
    return () => clearInterval(interval);
  }, []);

  return (
    <AnimatePresence>
      <motion.div
        className="fixed inset-0 z-[9999] flex flex-col items-center justify-center bg-white dark:bg-gray-950 overflow-hidden"
        initial={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.6, ease: 'easeInOut' }}
      >
        {/* Animated blobs */}
        <motion.div
          className="absolute w-80 h-80 rounded-full opacity-30"
          style={{ background: 'radial-gradient(circle, #D8C4F2, transparent)' }}
          animate={{ scale: [1, 1.3, 1], x: [-50, 50, -50] }}
          transition={{ duration: 4, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-64 h-64 rounded-full opacity-20"
          style={{ background: 'radial-gradient(circle, #C7F0F7, transparent)' }}
          animate={{ scale: [1.2, 1, 1.2], x: [50, -30, 50] }}
          transition={{ duration: 5, repeat: Infinity, ease: 'easeInOut' }}
        />
        <motion.div
          className="absolute w-48 h-48 rounded-full opacity-25"
          style={{ background: 'radial-gradient(circle, #CDECCF, transparent)' }}
          animate={{ scale: [1, 1.2, 1], y: [-40, 40, -40] }}
          transition={{ duration: 3.5, repeat: Infinity, ease: 'easeInOut' }}
        />

        {/* Logo mark */}
        <motion.div
          className="relative z-10 flex flex-col items-center gap-6"
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
        >
          {/* Pulse ring */}
          <div className="relative">
            <motion.div
              className="absolute inset-0 rounded-full bg-lilac-200"
              animate={{ scale: [1, 1.8, 1], opacity: [0.5, 0, 0.5] }}
              transition={{ duration: 2, repeat: Infinity, ease: 'easeInOut' }}
            />
            <div className="relative w-20 h-20 rounded-full bg-gradient-to-br from-lilac-400 to-aqua-400 flex items-center justify-center shadow-2xl">
              <svg className="w-10 h-10 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M4.318 6.318a4.5 4.5 0 000 6.364L12 20.364l7.682-7.682a4.5 4.5 0 00-6.364-6.364L12 7.636l-1.318-1.318a4.5 4.5 0 00-6.364 0z" />
              </svg>
            </div>
          </div>

          <div className="text-center">
            <h1 className="font-playfair text-3xl font-bold text-gray-800 dark:text-white tracking-wide">
              Dr. Shifa
            </h1>
            <p className="mt-1 text-sm font-inter text-gray-500 dark:text-gray-400 tracking-widest uppercase">
              Physiotherapy & Wellness
            </p>
          </div>

          {/* Progress bar */}
          <div className="w-48 h-1 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              className="h-full rounded-full bg-gradient-to-r from-lilac-400 via-aqua-400 to-mint-400"
              style={{ width: `${progress}%` }}
              transition={{ duration: 0.1 }}
            />
          </div>
        </motion.div>
      </motion.div>
    </AnimatePresence>
  );
}
