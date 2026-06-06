import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Menu, X, Sun, Moon, Heart } from 'lucide-react';
import { useTheme } from '../App';

const navLinks = [
  { label: 'About', href: '#about' },
  { label: 'Services', href: '#services' },
  { label: 'Why Us', href: '#why-choose' },
  { label: 'Recovery', href: '#recovery' },
  { label: 'Testimonials', href: '#testimonials' },
  { label: 'Blog', href: '#blog' },
  { label: 'Contact', href: '#contact' },
];

export default function Navbar() {
  const { isDark, toggle } = useTheme();
  const [scrolled, setScrolled] = useState(false);
  const [mobileOpen, setMobileOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  const handleNav = (href: string) => {
    setMobileOpen(false);
    const el = document.querySelector(href);
    if (el) el.scrollIntoView({ behavior: 'smooth', block: 'start' });
  };

  return (
    <>
      <motion.header
        className={`fixed top-0 left-0 right-0 z-50 transition-all duration-500 ${
          scrolled
            ? 'py-3 bg-white/80 dark:bg-gray-950/80 backdrop-blur-xl shadow-lg shadow-lilac-100/30 dark:shadow-gray-900/50'
            : 'py-5 bg-transparent'
        }`}
        initial={{ y: -80 }}
        animate={{ y: 0 }}
        transition={{ duration: 0.6, ease: 'easeOut' }}
      >
        <div className="container-max px-4 sm:px-6 lg:px-8 flex items-center justify-between">
          {/* Logo */}
          <button
            onClick={() => window.scrollTo({ top: 0, behavior: 'smooth' })}
            className="flex items-center gap-2.5 group"
          >
            <div className="w-9 h-9 rounded-xl bg-gradient-to-br from-lilac-400 to-aqua-400 flex items-center justify-center shadow-md group-hover:shadow-lilac-300/60 transition-shadow duration-300">
              <Heart className="w-5 h-5 text-white" fill="white" />
            </div>
            <div>
              <span className="font-playfair font-bold text-xl text-gray-900 dark:text-white">Dr. Shifa</span>
              <span className="hidden sm:block text-[10px] font-inter text-gray-500 dark:text-gray-400 tracking-widest uppercase leading-none -mt-0.5">Physiotherapy</span>
            </div>
          </button>

          {/* Desktop Nav */}
          <nav className="hidden lg:flex items-center gap-1">
            {navLinks.map((link) => (
              <button
                key={link.href}
                onClick={() => handleNav(link.href)}
                className={`px-4 py-2 rounded-full text-sm font-inter font-medium transition-all duration-300 hover:bg-lilac-50 dark:hover:bg-gray-800 ${
                  scrolled ? 'text-gray-700 dark:text-gray-300' : 'text-gray-800 dark:text-gray-200'
                } hover:text-lilac-600 dark:hover:text-lilac-400`}
              >
                {link.label}
              </button>
            ))}
          </nav>

          {/* Right actions */}
          <div className="flex items-center gap-3">
            <button
              onClick={toggle}
              className="w-9 h-9 rounded-full flex items-center justify-center text-gray-600 dark:text-gray-300 hover:bg-lilac-50 dark:hover:bg-gray-800 transition-colors duration-200"
              aria-label="Toggle theme"
            >
              {isDark ? <Sun className="w-4.5 h-4.5" /> : <Moon className="w-4.5 h-4.5" />}
            </button>
            <button
              onClick={() => handleNav('#booking')}
              className="hidden sm:flex btn-primary py-2.5 px-6 text-sm"
            >
              Book Appointment
            </button>
            <button
              onClick={() => setMobileOpen(true)}
              className="lg:hidden w-9 h-9 rounded-full flex items-center justify-center text-gray-700 dark:text-gray-200 hover:bg-lilac-50 dark:hover:bg-gray-800 transition-colors"
              aria-label="Open menu"
            >
              <Menu className="w-5 h-5" />
            </button>
          </div>
        </div>
      </motion.header>

      {/* Mobile Menu */}
      <AnimatePresence>
        {mobileOpen && (
          <>
            <motion.div
              className="fixed inset-0 z-[60] bg-black/30 backdrop-blur-sm"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setMobileOpen(false)}
            />
            <motion.div
              className="fixed top-0 right-0 bottom-0 z-[70] w-72 bg-white/95 dark:bg-gray-950/95 backdrop-blur-2xl shadow-2xl flex flex-col"
              initial={{ x: '100%' }}
              animate={{ x: 0 }}
              exit={{ x: '100%' }}
              transition={{ type: 'spring', damping: 30, stiffness: 300 }}
            >
              <div className="flex items-center justify-between p-6 border-b border-gray-100 dark:border-gray-800">
                <span className="font-playfair font-bold text-lg text-gray-900 dark:text-white">Menu</span>
                <button
                  onClick={() => setMobileOpen(false)}
                  className="w-8 h-8 rounded-full flex items-center justify-center hover:bg-gray-100 dark:hover:bg-gray-800 transition-colors"
                >
                  <X className="w-4 h-4 text-gray-600 dark:text-gray-300" />
                </button>
              </div>
              <nav className="flex flex-col gap-1 p-4 flex-1">
                {navLinks.map((link, i) => (
                  <motion.button
                    key={link.href}
                    onClick={() => handleNav(link.href)}
                    className="w-full text-left px-4 py-3 rounded-xl text-gray-700 dark:text-gray-200 font-inter font-medium hover:bg-lilac-50 dark:hover:bg-gray-800 hover:text-lilac-600 dark:hover:text-lilac-400 transition-colors duration-200"
                    initial={{ opacity: 0, x: 20 }}
                    animate={{ opacity: 1, x: 0 }}
                    transition={{ delay: i * 0.05 }}
                  >
                    {link.label}
                  </motion.button>
                ))}
              </nav>
              <div className="p-4 border-t border-gray-100 dark:border-gray-800">
                <button
                  onClick={() => handleNav('#booking')}
                  className="btn-primary w-full text-center justify-center"
                >
                  Book Appointment
                </button>
              </div>
            </motion.div>
          </>
        )}
      </AnimatePresence>
    </>
  );
}
