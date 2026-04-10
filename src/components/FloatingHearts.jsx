import { useEffect, useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';

export default function FloatingHearts({ count = 20 }) {
  const [hearts, setHearts] = useState([]);

  useEffect(() => {
    // Generate initial hearts with random positions, delays, and sizes
    const generatedHearts = Array.from({ length: count }).map((_, i) => ({
      id: i,
      left: Math.random() * 100, // 0 to 100%
      delay: Math.random() * 5, // 0 to 5s delay
      duration: 3 + Math.random() * 4, // 3 to 7s duration
      size: 16 + Math.random() * 32, // 16px to 48px
      color: ['#fecdd3', '#fda4af', '#fb7185', '#e11d48'][Math.floor(Math.random() * 4)]
    }));
    setHearts(generatedHearts);
  }, [count]);

  return (
    <div className="pointer-events-none fixed inset-0 z-50 overflow-hidden">
      <AnimatePresence>
        {hearts.map((h) => (
          <motion.div
            key={h.id}
            initial={{ y: '110vh', x: 0, opacity: 0, scale: 0 }}
            animate={{ 
              y: '-20vh', 
              x: Math.random() > 0.5 ? 100 : -100, // sway effect
              opacity: [0, 1, 0.8, 0],
              scale: [0, 1, 1.2, 1]
            }}
            transition={{ 
              duration: h.duration, 
              delay: h.delay, 
              ease: "easeOut",
              repeat: Infinity,
              repeatType: "loop"
            }}
            className="absolute"
            style={{ left: `${h.left}%` }}
          >
            <Heart 
              size={h.size} 
              fill={h.color} 
              color={h.color} 
              className="drop-shadow-sm opacity-80"
            />
          </motion.div>
        ))}
      </AnimatePresence>
    </div>
  );
}
