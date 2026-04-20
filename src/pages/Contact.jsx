import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { Sparkles, Clock, Globe, Phone, Mail } from 'lucide-react';

const Contact = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "At Your Service | L'Atelier d'Or";
  }, []);

  return (
    <motion.main 
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden"
    >
      {/* Header Section */}
      <header className="mb-12 md:mb-24 text-center">
        <motion.h1 
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-5xl md:text-8xl italic tracking-tighter mb-6 font-serif"
        >
          At Your Service
        </motion.h1>
        <motion.p 
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="max-w-2xl mx-auto text-on-surface-variant text-base md:text-lg leading-relaxed font-light"
        >
          Whether you seek a bespoke masterpiece or wish to discover our latest collections, our concierges are at your disposal to ensure a seamless experience.
        </motion.p>
      </header>

      <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 lg:gap-24 items-start">
        {/* Contact Form Section (Left) */}
        <section className="lg:col-span-5 space-y-12 md:space-y-16">
          <motion.div 
            initial={{ opacity: 0, x: -30 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="bg-surface-container-low p-8 md:p-16 border border-outline/5"
          >
            <span className="section-label mb-8 md:mb-12">Inquiry Form</span>
            <form className="space-y-8 md:space-y-10" onSubmit={(e) => e.preventDefault()}>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-2 font-semibold font-sans">Name</label>
                <input 
                  type="text"
                  placeholder="Your full name"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:ring-0 focus:border-secondary py-2 text-on-surface transition-colors placeholder:text-outline/30 outline-none"
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-2 font-semibold font-sans">Email Address</label>
                <input 
                  type="email"
                  placeholder="email@example.com"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:ring-0 focus:border-secondary py-2 text-on-surface transition-colors placeholder:text-outline/30 outline-none"
                />
              </div>
              <div className="relative group">
                <label className="block text-[10px] uppercase tracking-[0.1em] text-on-surface-variant mb-2 font-semibold font-sans">How may we assist you?</label>
                <textarea 
                  placeholder="Tell us about your interest..."
                  rows="4"
                  className="w-full bg-transparent border-t-0 border-x-0 border-b border-outline/20 focus:ring-0 focus:border-secondary py-2 text-on-surface transition-colors resize-none placeholder:text-outline/30 outline-none"
                ></textarea>
              </div>
              <button 
                type="submit" 
                className="luxury-button-primary w-full py-4 md:py-5"
              >
                Submit Inquiry
              </button>
            </form>
          </motion.div>

          <div className="flex flex-col space-y-8 px-4">
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              className="flex items-center space-x-4"
            >
              <Sparkles className="text-secondary" size={18} />
              <p className="text-[10px] uppercase tracking-[0.1em] font-semibold">Private Consultations Available</p>
            </motion.div>
            <motion.div 
              initial={{ opacity: 0 }}
              whileInView={{ opacity: 1 }}
              viewport={{ once: true }}
              transition={{ delay: 0.1 }}
              className="flex items-center space-x-4"
            >
              <Clock className="text-secondary" size={18} />
              <p className="text-[10px] uppercase tracking-[0.1em] font-semibold">Response within 24 business hours</p>
            </motion.div>
          </div>
        </section>

        {/* Location & Visual Section (Right) */}
        <section className="lg:col-span-7 space-y-20">
          {/* Main Visual Image */}
          <motion.div 
            initial={{ opacity: 0, scale: 1.05 }}
            whileInView={{ opacity: 1, scale: 1 }}
            viewport={{ once: true }}
            transition={{ duration: 1.5 }}
            className="relative h-[500px] overflow-hidden group border border-outline/5"
          >
            <img 
              src="/assets/contact_atelier.jpg" 
              alt="Luxury Atelier Interior" 
              className="w-full h-full object-cover grayscale group-hover:grayscale-0 transition-all duration-1000 ease-out" 
            />
            <div className="absolute inset-0 bg-secondary/5 pointer-events-none"></div>
          </motion.div>

          {/* Flagship Locations */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
            {/* Paris */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="bg-surface-container-low p-12 flex flex-col justify-between min-h-[300px] border border-outline/5"
            >
              <div>
                <h3 className="text-3xl mb-4 italic font-serif">Paris Flagship</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 font-light">
                  12 Place Vendôme<br/>
                  75001 Paris, France
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="tel:+33123456789" 
                  className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-secondary hover:text-on-surface transition-colors"
                >
                  <Phone size={14} />
                  +33 1 23 45 67 89
                </a>
                <p className="text-[10px] uppercase tracking-widest text-outline flex items-center gap-3">
                  <Clock size={12} />
                  Open Mon-Sat: 10:00 — 19:00
                </p>
              </div>
            </motion.div>

            {/* Geneva */}
            <motion.div 
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: 0.2 }}
              className="bg-surface-container-high p-12 flex flex-col justify-between min-h-[300px] border border-outline/5"
            >
              <div>
                <h3 className="text-3xl mb-4 italic font-serif">Geneva Atelier</h3>
                <p className="text-on-surface-variant leading-relaxed mb-8 font-light">
                  Rue du Rhône 42<br/>
                  1204 Genève, Switzerland
                </p>
              </div>
              <div className="space-y-4">
                <a 
                  href="tel:+41223456789" 
                  className="flex items-center gap-3 text-[11px] uppercase tracking-widest text-secondary hover:text-on-surface transition-colors"
                >
                  <Phone size={14} />
                  +41 22 345 67 89
                </a>
                <p className="text-[10px] uppercase tracking-widest text-outline flex items-center gap-3">
                  <Clock size={12} />
                  Open Mon-Fri: 09:30 — 18:30
                </p>
              </div>
            </motion.div>
          </div>

          {/* Maps Subtle Indicator */}
          <motion.div 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            className="bg-surface-container-highest p-12 flex flex-col md:flex-row items-center justify-between gap-8 border border-outline/5"
          >
            <div>
              <span className="section-label !mb-2">Global Presence</span>
              <p className="italic text-lg font-serif">Locate your nearest L'Atelier d'Or Boutique</p>
            </div>
            <button className="luxury-button-outline whitespace-nowrap">
              View Interactive Map
            </button>
          </motion.div>
        </section>
      </div>
    </motion.main>
  );
};

export default Contact;
