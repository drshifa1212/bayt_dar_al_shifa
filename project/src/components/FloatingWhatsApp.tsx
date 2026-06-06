import { motion } from 'framer-motion';
import { MessageCircle } from 'lucide-react';
import { useState } from 'react';

export default function FloatingWhatsApp() {
  const [hovered, setHovered] = useState(false);
  const phone = '15550123456';
  const message = encodeURIComponent('Hi Dr. Shifa! I would like to book a physiotherapy appointment.');

  return (
    <motion.a
      href={`https://wa.me/${phone}?text=${message}`}
      target="_blank"
      rel="noopener noreferrer"
      className="fixed bottom-6 right-6 z-50 flex items-center gap-3 group"
      initial={{ scale: 0, opacity: 0 }}
      animate={{ scale: 1, opacity: 1 }}
      transition={{ delay: 3, type: 'spring', stiffness: 200 }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {/* Label */}
      <motion.span
        className="bg-white/90 dark:bg-gray-800/90 backdrop-blur-sm text-gray-700 dark:text-gray-200 text-sm font-inter font-medium px-4 py-2 rounded-full shadow-lg border border-gray-100 dark:border-gray-700 whitespace-nowrap"
        initial={{ opacity: 0, x: 10, scale: 0.9 }}
        animate={{ opacity: hovered ? 1 : 0, x: hovered ? 0 : 10, scale: hovered ? 1 : 0.9 }}
        transition={{ duration: 0.2 }}
      >
        Chat on WhatsApp
      </motion.span>

      {/* Button */}
      <motion.div
        className="w-14 h-14 rounded-full flex items-center justify-center shadow-2xl"
        style={{ background: '#25D366' }}
        animate={{ scale: hovered ? 1.1 : 1 }}
        transition={{ duration: 0.2 }}
      >
        <motion.div
          animate={{ rotate: hovered ? [0, -10, 10, -5, 5, 0] : 0 }}
          transition={{ duration: 0.5 }}
        >
          <MessageCircle className="w-7 h-7 text-white" fill="white" />
        </motion.div>
      </motion.div>
    </motion.a>
  );
}
