import React from 'react';
import { motion } from 'framer-motion';

const Craftsmanship = () => {
  const features = [
    {
      title: "Recycled 24k Gold",
      description: "Molten brilliance meets ethical sourcing. We work exclusively with certified recycled gold to minimize our footprint.",
      image: "/assets/gold.jpg",
      delay: 0.1
    },
    {
      title: "Conflict-Free Diamonds",
      description: "Every stone is GIA-certified and hand-selected for its soul, clarity, and brilliance.",
      image: "/assets/diamond.jpg",
      delay: 0.3
    },
    {
      title: "Master Goldsmithing",
      description: "Patient hands, precision tools, and ancient techniques passed down through generations.",
      image: "/assets/craft.jpg",
      delay: 0.5
    }
  ];

  return (
    <section className="py-16 md:py-32 bg-surface overflow-hidden border-t border-outline/5">
      <div className="max-w-[1920px] mx-auto px-6 md:px-12">
        <div className="flex flex-col lg:flex-row gap-12 md:gap-24 lg:items-end mb-12 md:mb-24">
          <motion.div 
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="lg:w-1/3"
          >
            <span className="section-label">The Art of Creation</span>
            <h2 className="text-3xl sm:text-4xl md:text-6xl font-serif italic mt-4 md:mt-6 leading-tight">
              A Study in Pure Gold <br className="hidden md:block" /> & Rare Earth.
            </h2>
          </motion.div>
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.5 }}
            className="lg:w-2/3"
          >
            <p className="text-on-surface-variant font-light max-w-xl text-base md:text-lg leading-relaxed">
              Our materials are chosen for their purity and soul. We believe that true luxury is conscious, ensuring that beauty never comes at the cost of the earth.
            </p>
          </motion.div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-4 h-auto md:h-[700px]">
          {features.map((feature, i) => (
            <motion.div
              key={i}
              initial={{ opacity: 0, scale: 1.05 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true }}
              transition={{ duration: 1.5, delay: feature.delay }}
              className={`relative overflow-hidden group h-[400px] md:h-full ${i === 1 ? 'lg:translate-y-24' : ''}`}
            >
              <img 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110" 
                src={feature.image} 
                alt={feature.title} 
              />
              <div className="absolute inset-0 bg-stone-900/30 md:bg-stone-900/40 group-hover:bg-stone-900/20 transition-all duration-700"></div>
              
              <div className="absolute inset-0 p-8 md:p-12 flex flex-col justify-end text-white md:opacity-0 group-hover:opacity-100 transition-all duration-700 md:translate-y-10 group-hover:translate-y-0">
                <h3 className="text-2xl md:text-3xl font-serif mb-3 md:mb-4">{feature.title}</h3>
                <p className="text-sm font-light leading-relaxed max-w-xs">{feature.description}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Craftsmanship;
