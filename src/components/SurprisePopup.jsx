import { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'motion/react';
import { Heart } from 'lucide-react';
import FloatingHearts from './FloatingHearts';

export default function SurprisePopup() {
  const [opened, setOpened] = useState(false);

  useEffect(() => {
    if (opened) {
      // Wait 5 seconds so she can read the popup, then redirect to WhatsApp
      const timer = setTimeout(() => {
        window.location.href = "https://wa.me/+919669852400?text=Yes!%20I%20forgive%20you%20%E2%9D%A4%EF%B8%8F";
      }, 5000);
      return () => clearTimeout(timer);
    }
  }, [opened]);

  return (
    <AnimatePresence>
      <motion.div 
        className="fixed inset-0 z-50 flex items-center justify-center p-4 bg-white/20 backdrop-blur-md"
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.8 }}
      >
        <FloatingHearts count={40} />
        
        {!opened ? (
          <motion.div
            whileHover={{ scale: 1.05 }}
            whileTap={{ scale: 0.95 }}
            onClick={() => setOpened(true)}
            initial={{ scale: 0.8, opacity: 0 }}
            animate={{ scale: 1, opacity: 1 }}
            transition={{ type: "spring", damping: 20, duration: 1 }}
            className="glass-panel p-10 md:p-16 flex flex-col items-center justify-center border border-white/70 bg-white/40 shadow-[0_20px_50px_rgba(225,29,72,0.1)] cursor-pointer pointer-events-auto rounded-[2rem]"
          >
            <motion.div
              animate={{ scale: [1, 1.1, 1] }}
              transition={{ repeat: Infinity, duration: 2, ease: "easeInOut" }}
            >
              <div className="w-24 h-24 rounded-full bg-rose-100 flex items-center justify-center shadow-inner mb-6">
                <Heart className="w-12 h-12 text-rose-500 fill-rose-500 drop-shadow-md" />
              </div>
            </motion.div>
            <h2 className="font-script text-4xl md:text-5xl text-rose-800 tracking-wide text-center">I knew you'll forgive.. so sweet of you</h2>
            <p className="font-serif italic text-rose-600/80 mt-4">tap on this pop-up...</p>
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0.8, opacity: 0, y: 20 }}
            animate={{ scale: 1, opacity: 1, y: 0 }}
            transition={{ type: "spring", bounce: 0.3, duration: 1.2 }}
            className="glass-panel relative w-full max-w-lg overflow-hidden bg-white/60 shadow-[0_30px_60px_rgba(225,29,72,0.15)] border border-white/80 pointer-events-auto rounded-[2rem]"
          >
            {/* Elegant glowing background layer */}
            <div className="absolute inset-0 bg-gradient-to-br from-rose-50/80 via-white/40 to-pink-50/80 pointer-events-none -z-10 rounded-[2rem]"></div>

            <div className="flex flex-col items-center text-center p-10 md:p-14">
              
              <motion.div
                initial={{ opacity: 0, y: -20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.3, duration: 1 }}
              >
                <Heart className="w-10 h-10 text-rose-400 fill-rose-300 mb-6 drop-shadow-sm opacity-80" />
              </motion.div>

              {/* <h2 className="font-serif italic text-xl text-rose-500 mb-2 font-medium">To show you how much I appreciate you…</h2>
              
              <h1 className="font-script text-6xl text-rose-800 leading-tight mb-8 tracking-wide drop-shadow-sm">A Perfect Day</h1>
              
              <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-4 opacity-70" />
              
              <div className="text-center font-serif text-lg text-stone-700 space-y-6 w-full mt-6 leading-relaxed">
                <p>
                  <span className="block font-medium text-rose-600">I promise you:</span>
                  One entire day dedicated just to us doing whatever makes you happy. 
                </p>
                <p>
                No stress, no chaos. Just good food, bad jokes, and actually enjoying the day properly.
                </p>
              </div> */}
              
              <div className="w-2/3 h-px bg-gradient-to-r from-transparent via-rose-300 to-transparent my-8 opacity-70" />
              
              <p className="font-script text-3xl text-rose-500">you'll be redirected to whatsapp just tap on send msg i'll get to know that you forgive me.</p>
            </div>
          </motion.div>
        )}

      </motion.div>
    </AnimatePresence>
  );
}
