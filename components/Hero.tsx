import React from 'react';
import { motion } from 'framer-motion';

export const Hero: React.FC = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden py-20">
      {/* Background Image with Overlay */}
      <div className="absolute inset-0 z-0">
        <img 
          src="https://images.unsplash.com/photo-1599661046289-e31897846e41?q=80&w=2727&auto=format&fit=crop" 
          alt="Fort Background" 
          className="w-full h-full object-cover opacity-30 sepia-[0.5]"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-stone-950 via-stone-900/60 to-stone-950/80"></div>
      </div>

      <div className="relative z-10 text-center px-4 max-w-5xl mx-auto">
        {/* Top Decoration */}
        <motion.div 
          initial={{ y: -50, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ duration: 1 }}
          className="flex justify-center mb-8"
        >
          <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/f/ff/Shivmudra.svg/1200px-Shivmudra.svg.png" alt="Shivmudra" className="w-24 h-24 md:w-32 md:h-32 opacity-80 invert brightness-200 grayscale contrast-200 drop-shadow-[0_0_15px_rgba(217,119,6,0.5)]" />
        </motion.div>

        <motion.h2 
          initial={{ scale: 0.9, opacity: 0 }}
          animate={{ scale: 1, opacity: 1 }}
          transition={{ delay: 0.3, duration: 1 }}
          className="font-heading text-amber-600 text-xl md:text-3xl uppercase tracking-wider mb-4"
        >
          || श्री गणेशाय नमः ||
        </motion.h2>

        <motion.div
          initial={{ y: 20, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 0.6, duration: 1 }}
          className="space-y-6"
        >
          <h1 className="font-royal text-5xl md:text-8xl lg:text-9xl text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-sm">
            चि. राजवीर
          </h1>
          <div className="flex items-center justify-center gap-4 my-4">
            <div className="h-px w-12 md:w-24 bg-amber-700"></div>
            <span className="font-heading text-2xl md:text-4xl text-stone-400">शुभविवाह</span>
            <div className="h-px w-12 md:w-24 bg-amber-700"></div>
          </div>
          <h1 className="font-royal text-4xl md:text-7xl lg:text-8xl text-transparent bg-clip-text bg-gradient-to-b from-amber-200 via-amber-500 to-amber-700 drop-shadow-sm leading-tight">
            चि.सौ.कां. प्रियांका
          </h1>
        </motion.div>

        <motion.div 
          initial={{ y: 30, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          transition={{ delay: 1, duration: 1 }}
          className="mt-12"
        >
          <p className="font-royal text-2xl md:text-4xl text-amber-100 mb-2 tracking-wider">
            २४ . १२ . २०२४
          </p>
          <p className="font-heading text-stone-400 text-xl tracking-widest">
            किल्ले रायगड, महाराष्ट्र
          </p>
        </motion.div>

        {/* Scroll Indicator */}
        <motion.div 
          animate={{ y: [0, 10, 0] }}
          transition={{ repeat: Infinity, duration: 2 }}
          className="absolute -bottom-32 left-1/2 transform -translate-x-1/2"
        >
          <div className="w-6 h-10 border-2 border-amber-600 rounded-full flex justify-center pt-2">
            <div className="w-1 h-2 bg-amber-500 rounded-full"></div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};