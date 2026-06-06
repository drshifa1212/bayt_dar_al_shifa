import { useEffect, useState } from 'react';
import { motion } from 'framer-motion';

export default function CustomCursor() {
  const [pos, setPos] = useState({ x: -100, y: -100 });
  const [trail, setTrail] = useState({ x: -100, y: -100 });
  const [isPointer, setIsPointer] = useState(false);

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      setPos({ x: e.clientX, y: e.clientY });
      const el = document.elementFromPoint(e.clientX, e.clientY);
      setIsPointer(
        el
          ? window.getComputedStyle(el).cursor === 'pointer' ||
            el.tagName === 'BUTTON' ||
            el.tagName === 'A' ||
            el.closest('button') !== null ||
            el.closest('a') !== null
          : false
      );
    };
    window.addEventListener('mousemove', onMove);
    const trailInterval = setInterval(() => {
      setTrail((t) => ({
        x: t.x + (pos.x - t.x) * 0.15,
        y: t.y + (pos.y - t.y) * 0.15,
      }));
    }, 16);
    return () => {
      window.removeEventListener('mousemove', onMove);
      clearInterval(trailInterval);
    };
  }, [pos.x, pos.y]);

  // Only show on desktop
  if (typeof window !== 'undefined' && window.innerWidth < 1024) return null;

  return (
    <>
      {/* Main dot */}
      <motion.div
        className="custom-cursor w-3 h-3 rounded-full bg-lilac-400/70"
        style={{
          left: pos.x - 6,
          top: pos.y - 6,
        }}
        animate={{ scale: isPointer ? 0.5 : 1 }}
        transition={{ duration: 0.15 }}
      />
      {/* Trail ring */}
      <motion.div
        className="custom-cursor rounded-full border border-lilac-300/50"
        style={{
          left: trail.x - 20,
          top: trail.y - 20,
          width: isPointer ? 50 : 40,
          height: isPointer ? 50 : 40,
        }}
        animate={{ scale: isPointer ? 1.2 : 1, opacity: isPointer ? 0.7 : 0.4 }}
        transition={{ duration: 0.3 }}
      />
    </>
  );
}
