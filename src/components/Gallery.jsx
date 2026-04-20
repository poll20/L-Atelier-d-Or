import React from 'react';
import { motion } from 'framer-motion';
import { Link } from 'react-router-dom';

const Gallery = () => {
  const items = [
    {
      id: 1,
      title: "The Aurelian Ring",
      category: "Aurelian Series",
      image: "/assets/ring.jpg",
      className: "md:col-span-7 aspect-[4/5]",
      delay: 0.1,
      link: "/product/aurelian-ring"
    },
    {
      id: 2,
      title: "Ethereal Pearl Necklace",
      category: "Marine Collection",
      image: "/assets/necklace.jpg",
      className: "md:col-span-5 aspect-[3/4] mt-24",
      delay: 0.3
    },
    {
      id: 3,
      title: "Gilded Link Bracelet",
      category: "Modern Heritage",
      image: "/assets/bracelet.jpg",
      className: "md:col-span-5 aspect-square",
      delay: 0.2
    },
    {
      id: 4,
      title: "Celestial Earrings",
      category: "Stellar Collection",
      image: "/assets/earrings.jpg",
      className: "md:col-span-7 aspect-[16/9] md:-mt-24",
      delay: 0.4
    }
  ];

  return (
    <section className="py-16 md:py-32 px-6 md:px-12 bg-surface">
      <div className="max-w-[1920px] mx-auto">
        <div className="mb-12 md:mb-24 text-center">
          <motion.span 
            initial={{ opacity: 0, y: 10 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="section-label"
          >
            Exquisite Selection
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.2 }}
            className="text-3xl md:text-5xl"
          >
            The Featured Gallery
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16 lg:gap-24">
          {items.map((item) => (
            <motion.div
              key={item.id}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.8, delay: item.delay }}
              className={`${item.className.split(' ').map(c => c.includes('mt') || c.includes('-mt') ? `md:${c}` : c).join(' ')} group cursor-pointer`}
            >
              <Link to={item.link || "#"}>
                <div className="relative overflow-hidden bg-surface-container-low p-6 md:p-12 lg:p-16 flex items-center justify-center h-full">
                  <motion.img
                    whileHover={{ scale: 1.05 }}
                    transition={{ duration: 0.8, ease: "easeOut" }}
                    src={item.image}
                    alt={item.title}
                    className="w-full h-full object-contain max-h-[400px] md:max-h-none"
                  />
                  
                  {/* Subtle Hover Overlay */}
                  <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-700" />
                </div>
                
                <div className="mt-6 md:mt-8 px-2 md:px-0">
                  <span className="text-[10px] uppercase tracking-luxury text-secondary/60">
                    {item.category}
                  </span>
                  <h3 className="text-xl md:text-2xl mt-1 md:mt-2 group-hover:text-secondary transition-colors duration-500">
                    {item.title}
                  </h3>
                </div>
              </Link>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Gallery;
