import { useState } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { useNavigate } from 'react-router';
import { Heart } from 'lucide-react';

export default function EnvelopePage() {
  const [isOpen, setIsOpen] = useState(false);
  const navigate = useNavigate();

  const handleOpen = () => {
    setIsOpen(true);
    // After animation delay, navigate to letter
    setTimeout(() => {
      navigate('/letter');
    }, 1500);
  };

  return (
    <motion.div 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 0.8 }}
      className="flex min-h-screen items-center justify-center p-4 relative overflow-hidden"
    >
      {/* Aesthetic glowing orbits */}
      <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[60vw] h-[60vw] bg-rose-200/30 rounded-full blur-3xl" />
      <div className="absolute top-1/2 left-1/2 -translate-x-1/3 -translate-y-2/3 w-[40vw] h-[40vw] bg-pink-300/20 rounded-full blur-3xl animate-pulse" />

      {/* Main interactive area */}
      <div className="z-10 flex flex-col items-center justify-center space-y-8">
        
        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.2, duration: 0.8 }}
          className="text-center space-y-4"
        >
          <div className="space-y-1">
            <h1 className="font-script text-5xl md:text-7xl text-rose-800 tracking-wide font-semibold">For You</h1>
            <p className="font-serif text-rose-600/80 italic text-lg">Tap the envelope to open</p>
          </div>
          
          <motion.div 
            animate={{ opacity: [0.4, 0.9, 0.4] }}
            transition={{ repeat: Infinity, duration: 2.5, ease: "easeInOut" }}
            className="flex items-center justify-center gap-2 text-rose-500/80 font-sans text-xs tracking-widest uppercase font-medium mt-10"
          >
            <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"><polygon points="11 5 6 9 2 9 2 15 6 15 11 19 11 5"></polygon><path d="M15.54 8.46a5 5 0 0 1 0 7.07"></path><path d="M19.07 4.93a10 10 0 0 1 0 14.14"></path></svg>
            <span>Please turn up your volume</span>
          </motion.div>
        </motion.div>

        {/* The Envelope */}
        <motion.button 
          onClick={handleOpen}
          aria-label="Open Letter"
          whileHover={{ scale: 1.05 }}
          whileTap={{ scale: 0.95 }}
          className="relative w-64 h-48 md:w-80 md:h-56 mt-10 perspective-1000"
        >
          {/* Back of envelope */}
          <div className="absolute inset-0 bg-rose-200 rounded-lg shadow-xl overflow-hidden border border-rose-300">
            {/* Inner letter poking out (only visible when opening) */}
            <AnimatePresence>
              {isOpen && (
                <motion.div 
                  initial={{ y: 40, opacity: 0 }}
                  animate={{ y: -60, opacity: 1 }}
                  transition={{ type: "spring", stiffness: 50, damping: 10, delay: 0.3 }}
                  className="absolute inset-x-4 top-4 bottom-12 bg-white rounded-t-md shadow-inner flex items-start justify-center pt-4"
                >
                  <div className="w-3/4 h-2 bg-rose-100 rounded-full" />
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          {/* Envelope Bottom Flap */}
          <div className="absolute inset-0 bg-rose-100 rounded-lg shadow-[inset_0_2px_4px_rgba(0,0,0,0.05)] clip-path-bottom-flap">
            <svg viewBox="0 0 100 100" preserveAspectRatio="none" className="w-full h-full text-rose-100 drop-shadow-md">
              <path d="M 0 100 L 50 50 L 100 100 Z" fill="currentColor" />
              <path d="M 0 0 L 50 50 L 0 100 Z" fill="currentColor" opacity="0.8" />
              <path d="M 100 0 L 50 50 L 100 100 Z" fill="currentColor" opacity="0.8" />
            </svg>
          </div>

          {/* Envelope Top Flap (Animated) */}
          <motion.div
            initial={{ rotateX: 0 }}
            animate={{ rotateX: isOpen ? -180 : 0 }}
            transition={{ duration: 0.8, ease: "easeInOut" }}
            style={{ transformOrigin: "top" }}
            className="absolute top-0 inset-x-0 h-1/2 z-20"
          >
            <svg viewBox="0 0 100 50" preserveAspectRatio="none" className="w-full h-full text-rose-300 drop-shadow-lg">
              <path d="M 0 0 L 50 50 L 100 0 Z" fill="currentColor" />
            </svg>
            
            {/* Wax Seal */}
            {!isOpen && (
              <motion.div 
                className="absolute -bottom-4 left-1/2 -translate-x-1/2 w-12 h-12 bg-rose-600 rounded-full flex items-center justify-center shadow-lg"
                whileHover={{ scale: 1.1 }}
                animate={{ scale: [1, 1.05, 1] }}
                transition={{ repeat: Infinity, duration: 2 }}
              >
                <Heart className="text-rose-100 w-5 h-5 fill-current" />
              </motion.div>
            )}
          </motion.div>

        </motion.button>
        <div className='pt-20'>© github.com/devks19</div>
      </div>
    </motion.div>
  );
}
