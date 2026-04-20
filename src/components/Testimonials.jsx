import React from 'react';
import { motion } from 'framer-motion';

const Testimonials = () => {
  const testimonials = [
    {
      text: "The Aurelian Ring is more than jewelry; it is a piece of art that I carry with me every day. The craftsmanship is simply unparalleled.",
      author: "Elena V.",
      location: "London"
    },
    {
      text: "Finding a maison that treats ethics with as much reverence as aesthetics is rare. L'Atelier d'Or is that rare find.",
      author: "Julian M.",
      location: "Geneva"
    }
  ];

  return (
    <section className="py-24 md:py-48 bg-surface-container-low">
      <div className="max-w-4xl mx-auto px-6 md:px-8 text-center">
        <motion.span 
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={{ once: true }}
          className="section-label mb-12 md:mb-24"
        >
          The Voices of Our Clientele
        </motion.span>
        
        <div className="space-y-16 md:space-y-32">
          {testimonials.map((t, i) => (
            <motion.blockquote 
              key={i}
              initial={{ opacity: 0, scale: 0.95 }}
              whileInView={{ opacity: 1, scale: 1 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 1, delay: i * 0.2 }}
              className="group"
            >
              <p className="text-2xl md:text-4xl font-serif italic text-on-surface leading-loose mb-6 md:mb-8">
                "{t.text}"
              </p>
              <footer className="not-italic">
                <cite className="label-md uppercase tracking-luxury text-[8px] md:text-[10px] text-secondary">
                  — {t.author} • <span className="text-on-surface-variant font-light">{t.location}</span>
                </cite>
              </footer>
            </motion.blockquote>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Testimonials;
