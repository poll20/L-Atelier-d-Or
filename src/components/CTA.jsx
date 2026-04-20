import React from 'react';
import { motion } from 'framer-motion';

const CTA = () => {
  return (
    <section className="py-24 md:py-64 bg-surface relative overflow-hidden border-t border-outline/5">
      {/* Decorative elements */}
      <motion.div 
        animate={{ 
          scale: [1, 1.2, 1],
          opacity: [0.3, 0.5, 0.3]
        }}
        transition={{ duration: 10, repeat: Infinity }}
        className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-full md:w-[800px] aspect-square bg-secondary/5 rounded-full blur-[80px] md:blur-[120px] pointer-events-none"
      />

      <div className="max-w-5xl mx-auto px-6 md:px-8 text-center relative z-10">
        <motion.h2 
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="text-5xl md:text-9xl mb-12 md:mb-16 tracking-tighter leading-[1.1] md:leading-none"
        >
          Begin Your <br/>
          <span className="serif-italic">Journey.</span>
        </motion.h2>
        
        <motion.div 
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1, delay: 0.5 }}
          className="flex justify-center"
        >
          <button className="luxury-button-outline px-12 md:px-20 py-6 md:py-8 text-xs md:text-sm hover:px-16 md:hover:px-24 transition-all uppercase tracking-[0.2em] md:tracking-luxury">
            Enter the Atelier
          </button>
        </motion.div>

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 0.4 }}
          viewport={{ once: true }}
          transition={{ delay: 1.5 }}
          className="mt-16 md:mt-24 text-[8px] md:text-[10px] uppercase tracking-luxury text-on-surface"
        >
          Private viewing by appointment only
        </motion.p>
      </div>
    </section>
  );
};

export default CTA;
