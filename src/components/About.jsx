import React from 'react';
import { motion } from 'framer-motion';

const About = () => {
  return (
    <section className="py-16 md:py-32 bg-surface-container-low flex items-center overflow-hidden">
      <div className="max-w-7xl mx-auto px-6 md:px-12 grid grid-cols-1 md:grid-cols-2 gap-12 md:gap-24 items-center">
        {/* Text Content */}
        <motion.div 
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 1 }}
          className="order-2 md:order-1"
        >
          <span className="section-label">Our Story</span>
          <h2 className="text-3xl sm:text-4xl md:text-6xl mb-6 md:mb-8 leading-tight font-serif italic text-on-surface">
            Forged in Excellence,<br/>
            <span className="text-secondary/80">Defined by Legacy.</span>
          </h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed max-w-lg">
            <p>
              L’Atelier d’Or was born from a singular vision: to bridge the gap between ancient goldsmithing techniques and modern aesthetic sensibilities. Each piece is a testament to the patient hands of our master artisans.
            </p>
            <p>
              We don't just create jewelry; we curate artifacts of personal history. From the sourcing of conflict-free stones to the final hand-polishing, every step is a ceremony of precision.
            </p>
          </div>
          
          <motion.a 
            href="#"
            whileHover={{ x: 10 }}
            className="inline-flex items-center mt-12 text-xs uppercase tracking-luxury border-b border-secondary pb-1 text-secondary hover:text-on-surface hover:border-on-surface transition-all duration-300"
          >
            Discover the Maison
          </motion.a>
        </motion.div>

        {/* Image Composition */}
        <div className="order-1 md:order-2">
          <div className="relative">
            <motion.div
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.2 }}
              className="relative z-0"
            >
              <img 
                className="w-full h-auto aspect-[3/4] object-cover" 
                src="/assets/atelier.jpg" 
                alt="Our Atelier" 
              />
            </motion.div>
            
            <motion.div
              initial={{ opacity: 0, y: 50, x: -50 }}
              whileInView={{ opacity: 1, y: 0, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 1, delay: 0.5 }}
              className="absolute -bottom-12 -left-12 w-48 h-48 md:w-64 md:h-64 bg-surface p-4 hidden lg:block shadow-2xl"
            >
              <img 
                className="w-full h-full object-cover" 
                src="/assets/sketch.jpg" 
                alt="Jewelry Sketch" 
              />
            </motion.div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default About;
