import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Play } from 'lucide-react';

interface EntranceGateProps {
  onEnter: () => void;
}

export const EntranceGate: React.FC<EntranceGateProps> = ({ onEnter }) => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(true);
    // Delay the actual state change to allow animation to play
    setTimeout(() => {
      onEnter();
    }, 1500);
  };

  return (
    <div className="fixed inset-0 z-50 flex items-center justify-center overflow-hidden bg-stone-900">
      {/* Left Door */}
      <motion.div
        className="absolute left-0 h-full w-1/2 bg-stone-800 border-r-4 border-stone-950 flex items-center justify-end origin-left z-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '-100%' : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="mr-8 md:mr-20 flex flex-col items-center opacity-60">
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border-4 border-amber-700 bg-stone-900 flex items-center justify-center shadow-2xl">
                <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
            </div>
            <div className="h-full w-1 bg-stone-950 absolute right-0 top-0"></div>
        </div>
        {/* Studs on door */}
        <div className="absolute inset-0 grid grid-cols-3 gap-12 p-12 pointer-events-none opacity-40">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-stone-950 shadow-inner border border-stone-700"></div>
            ))}
        </div>
      </motion.div>

      {/* Right Door */}
      <motion.div
        className="absolute right-0 h-full w-1/2 bg-stone-800 border-l-4 border-stone-950 flex items-center justify-start origin-right z-20 bg-[url('https://www.transparenttextures.com/patterns/wood-pattern.png')]"
        initial={{ x: 0 }}
        animate={{ x: isOpen ? '100%' : 0 }}
        transition={{ duration: 1.5, ease: "easeInOut" }}
      >
        <div className="ml-8 md:ml-20 flex flex-col items-center opacity-60">
            <div className="w-16 h-16 md:w-32 md:h-32 rounded-full border-4 border-amber-700 bg-stone-900 flex items-center justify-center shadow-2xl">
                <div className="w-4 h-4 bg-amber-600 rounded-full"></div>
            </div>
            <div className="h-full w-1 bg-stone-950 absolute left-0 top-0"></div>
        </div>
        {/* Studs on door */}
        <div className="absolute inset-0 grid grid-cols-3 gap-12 p-12 pointer-events-none opacity-40">
            {[...Array(12)].map((_, i) => (
                <div key={i} className="w-4 h-4 md:w-6 md:h-6 rounded-full bg-stone-950 shadow-inner border border-stone-700"></div>
            ))}
        </div>
      </motion.div>

      {/* Center Content (Click trigger) */}
      {!isOpen && (
        <motion.div
          className="absolute z-30 flex flex-col items-center justify-center text-center p-6 bg-stone-950/80 border-2 border-amber-600 rounded-lg shadow-[0_0_50px_rgba(217,119,6,0.3)] backdrop-blur-sm max-w-md w-full mx-4"
          initial={{ opacity: 0, scale: 0.8 }}
          animate={{ opacity: 1, scale: 1 }}
          transition={{ delay: 0.5 }}
        >
          <h1 className="font-royal text-4xl md:text-5xl text-amber-500 mb-4 text-shadow-lg tracking-wider">
            || शुभविवाह ||
          </h1>
          <p className="font-heading text-stone-300 mb-8 tracking-widest uppercase text-lg">
            राजशाही विवाह सोहळ्याचे निमंत्रण
          </p>
          
          <button
            onClick={handleOpen}
            className="group relative px-8 py-3 bg-orange-700 hover:bg-orange-600 text-white font-bold rounded-sm border-2 border-amber-500 transition-all duration-300 transform hover:scale-105 flex items-center gap-3 font-heading tracking-wider"
          >
            <Play className="w-5 h-5 fill-current" />
            <span>तुतारी वाजवा आणि प्रवेश करा</span>
            
            {/* Button Decorative borders */}
            <div className="absolute top-1 left-1 w-2 h-2 border-l-2 border-t-2 border-white opacity-50"></div>
            <div className="absolute top-1 right-1 w-2 h-2 border-r-2 border-t-2 border-white opacity-50"></div>
            <div className="absolute bottom-1 left-1 w-2 h-2 border-l-2 border-b-2 border-white opacity-50"></div>
            <div className="absolute bottom-1 right-1 w-2 h-2 border-r-2 border-b-2 border-white opacity-50"></div>
          </button>
        </motion.div>
      )}
      
      {/* Reveal background content briefly while doors open */}
      <div className="absolute inset-0 -z-10 bg-cover bg-center bg-[url('https://picsum.photos/1920/1080?grayscale&blur=2')]"></div>
    </div>
  );
};