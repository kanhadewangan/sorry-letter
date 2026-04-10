import { motion } from 'motion/react';
import ForgiveSection from '../components/ForgiveSection';

export default function LetterPage() {

  const paragraphs = [
    "Lorem ipsum dolor sit amet consectetur adipisicing elit.", 
    "Exercitationem ipsam fugit adipisci rem ipsum, placeat pariatur praesentium tempore error veniam, vitae ut necessitatibus minima saepe commodi dolorum fugiat blanditiis quos.", 
    "Numquam, deserunt? Maiores impedit nulla ullam obcaecati ipsam optio, sequi voluptas iste eos quisquam voluptates. Veritatis quia ducimus provident exercitationem."
  ];

  const containerVariants = {
    hidden: { opacity: 0 },
    show: {
      opacity: 1,
      transition: {
        staggerChildren: 1.5,
        delayChildren: 0.5,
      }
    }
  };

  const itemVariants = {
    hidden: { opacity: 0, scale: 0.9, filter: 'blur(5px)' },
    show: {
      opacity: 1,
      scale: 1,
      filter: 'blur(0px)',
      transition: { duration: 1.2, ease: "easeOut" }
    }
  };

  return (
    <motion.div
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      exit={{ opacity: 0, scale: 0.95 }}
      transition={{ duration: 1 }}
      className="min-h-screen p-4 md:p-10 flex items-center justify-center relative overflow-hidden"
    >

      {/* Decorative Accents directly layered in the background */}
      <motion.img
        src="/vintage_candle.png"
        alt="Vintage Candle"
        className="absolute top-[-5%] left-[-5%] md:left-[5%] w-48 md:w-64 z-10 opacity-70 mix-blend-multiply pointer-events-none"
        initial={{ opacity: 0, y: -20, rotate: -5 }}
        animate={{ opacity: 0.7, y: 0, rotate: -5 }}
        transition={{ delay: 1, duration: 1.5 }}
      />
      <motion.img
        src="/vintage_flowers.png"
        alt="Dried Flowers"
        className="absolute bottom-[-5%] right-[-5%] md:right-[5%] w-64 md:w-80 z-20 mix-blend-multiply opacity-80 pointer-events-none"
        initial={{ opacity: 0, rotate: 10, scale: 0.8 }}
        animate={{ opacity: 0.8, rotate: -10, scale: 1 }}
        transition={{ delay: 1.5, duration: 1.5 }}
      />

      {/* We omitted the eyes because they can look creepy in a clean pastel layout, leaving candle and flowers for romance */}

      {/* The Glass Scrapbook Page Container */}
      <div className="max-w-2xl w-full perspective-[1000px] z-10 my-10 relative">
        <motion.div
          initial={{ rotateY: -90, x: '-50%', opacity: 0 }}
          animate={{ rotateY: 0, x: 0, opacity: 1 }}
          transition={{ duration: 2, type: "spring", damping: 15, stiffness: 40 }}
          style={{ transformOrigin: "left center" }}
          className="relative glass-panel shadow-[0_20px_50px_rgba(0,0,0,0.05)] rounded-2xl flex flex-col p-8 md:p-16 border border-white/60 bg-white/50 backdrop-blur-xl"
        >
          {/* Aesthetic bright under-layer */}
          <div className="absolute inset-0 bg-rose-50/30 rounded-2xl pointer-events-none -z-10"></div>

          {/* Paper Content */}
          {/* Paper Content */}
          <div className="relative z-10 w-full h-full pt-1 pb-1 flex flex-col items-center">

            <motion.div
              initial={{ opacity: 0, scale: 0.95, rotate: -2 }}
              animate={{ opacity: 1, scale: 1, rotate: -1 }}
              transition={{ delay: 2, duration: 1.5, type: 'spring' }}
              className="relative w-full max-w-6xl px-10 md:px-5 py-16 md:py-24 mb-5 flex flex-col items-center justify-center"
            >
              {/* True Irregular Torn Paper Background Layer */}
              {/* <img
                src="/torn_vintage_paper.png"
                alt="Torn Vintage Parchment"
                className="absolute inset-[0%] w-full h-full object-fill opacity-90 mix-blend-multiply pointer-events-none z-0"

              /> */}

              {/* Text content rendered ON TOP of the paper container */}
              <div className="relative z-10 w-full max-w-xl mt-0">
                <h1 className="font-script text-5xl md:text-5xl text-stone-800 mb-10 text-center tracking-wide opacity-90 drop-shadow-sm mt-0 pt-0">{"<can be entered name here>..."}</h1>

                <motion.div
                  variants={containerVariants}
                  initial="hidden"
                  animate="show"
                  className="space-y-3 text-stone-900 opacity-90 mix-blend-color-burn"
                >
                  {paragraphs.map((text, idx) => (
                    <motion.p
                      key={idx}
                      variants={itemVariants}
                      className="font-vintage text-[1.1rem] md:text-[1.2rem] md:leading-loose text-justify tracking-wide leading-loose"
                    >
                      {text}
                    </motion.p>
                  ))}
                </motion.div>
              </div>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ delay: paragraphs.length * 1.5 + 3, duration: 2 }}
              className="mt-0 w-full z-20"
            >
              <ForgiveSection />
            </motion.div>
          </div>
        </motion.div>

        <div>Also responsive for mobile...</div>
      </div>
    </motion.div>
  );
}
