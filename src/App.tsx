import { createContext, useContext, useState, useEffect } from 'react';
import LoadingScreen from './components/LoadingScreen';
import Navbar from './components/Navbar';
import Hero from './components/Hero';
import About from './components/About';
import Services from './components/Services';
import WhyChoose from './components/WhyChoose';
import RecoveryJourney from './components/RecoveryJourney';
import Testimonials from './components/Testimonials';
import Booking from './components/Booking';
import FAQ from './components/FAQ';
import Contact from './components/Contact';
import Footer from './components/Footer';
import FloatingWhatsApp from './components/FloatingWhatsApp';
import ScrollProgress from './components/ScrollProgress';
import CustomCursor from './components/CustomCursor';
import HealthTips from './components/HealthTips';
import PainSelector from './components/PainSelector';

export const ThemeContext = createContext<{
  isDark: boolean;
  toggle: () => void;
}>({ isDark: false, toggle: () => {} });

export const useTheme = () => useContext(ThemeContext);

function App() {
  const [isDark, setIsDark] = useState(false);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const saved = localStorage.getItem('theme');
    if (saved === 'dark') {
      setIsDark(true);
      document.documentElement.classList.add('dark');
    }
    const timer = setTimeout(() => setIsLoading(false), 2400);
    return () => clearTimeout(timer);
  }, []);

  const toggle = () => {
    setIsDark((prev) => {
      const next = !prev;
      if (next) {
        document.documentElement.classList.add('dark');
        localStorage.setItem('theme', 'dark');
      } else {
        document.documentElement.classList.remove('dark');
        localStorage.setItem('theme', 'light');
      }
      return next;
    });
  };

  return (
    <ThemeContext.Provider value={{ isDark, toggle }}>
      <div className={isDark ? 'dark' : ''}>
        {isLoading && <LoadingScreen />}
        <CustomCursor />
        <ScrollProgress />
        <Navbar />
        <main>
          <Hero />
          <About />
          <Services />
          <WhyChoose />
          <PainSelector />
          <RecoveryJourney />
          <Testimonials />
          <HealthTips />
          <Booking />
          <FAQ />
          <Contact />
        </main>
        <Footer />
        <FloatingWhatsApp />
      </div>
    </ThemeContext.Provider>
  );
}

export default App;
