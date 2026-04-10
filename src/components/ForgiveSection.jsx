import { useState, useRef, useEffect } from 'react';
import { motion } from 'motion/react';
import SurprisePopup from './SurprisePopup';

export default function ForgiveSection() {
  const [forgiven, setForgiven] = useState(false);
  const [noButtonPosition, setNoButtonPosition] = useState({ x: 0, y: 0 });
  const containerRef = useRef(null);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkMobile = () => setIsMobile(window.innerWidth < 768);
    checkMobile();
    window.addEventListener('resize', checkMobile);
    return () => window.removeEventListener('resize', checkMobile);
  }, []);

  const handleNoHover = () => {
    // Determine a safe radius based on screen size so it never leaves the viewport
    const maxRadiusX = isMobile ? 80 : 150;
    const maxRadiusY = isMobile ? 80 : 150;

    let newX, newY;
    do {
      newX = (Math.random() - 0.5) * maxRadiusX * 2;
      newY = (Math.random() - 0.5) * maxRadiusY * 2;
    } while (Math.abs(newX) < 40 && Math.abs(newY) < 40); // ensure it moves far enough

    setNoButtonPosition({ x: newX, y: newY });
  };

  return (
    <div className="mt-8 flex flex-col items-center relative">
      {/* Show the popup overlay if forgiven */}
      {forgiven && <SurprisePopup />}
      <h3 className="font-serif text-2xl text-stone-700 mb-8 italic">Do you forgive me?</h3>

      <div
        ref={containerRef}
        className="flex gap-4 md:gap-8 relative h-32 md:h-24 w-full justify-center items-center"
      >
        {/* Yes Button */}
        <motion.button
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
          onClick={() => {
            setForgiven(true);
          }}
          className="px-8 py-3 bg-rose-400 text-white rounded-full font-sans text-lg shadow-md hover:bg-rose-500 transition-colors z-10"
        >
          Yes
        </motion.button>

        {/* Evasive No Button */}
        <motion.button
          animate={{ x: noButtonPosition.x, y: noButtonPosition.y }}
          transition={{ type: "spring", stiffness: 200, damping: 15 }}
          onHoverStart={handleNoHover}
          onTouchStart={(e) => {
            e.preventDefault(); // Prevent touch from clicking it
            handleNoHover();
          }}
          onClick={handleNoHover}
          className="absolute right-[10%] md:right-[calc(50%-100px)] px-8 py-3 bg-stone-200 text-stone-600 rounded-full font-sans text-lg shadow-sm hover:bg-stone-300"
        >
          No
        </motion.button>
      </div>
    </div>
  );
}
