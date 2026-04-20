import React, { useEffect } from 'react';
import { motion } from 'framer-motion';
import { ShoppingBag, ChevronRight } from 'lucide-react';

const ProductDetail = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
    document.title = "The Aurelian Ring | L'Atelier d'Or";
  }, []);

  const relatedPieces = [
    { name: "Aurelian Pendant", price: "$18,200.00", img: "/assets/related_pendant.jpg" },
    { name: "Aurelian Studs", price: "$9,800.00", img: "/assets/related_studs.jpg", pt: true },
    { name: "Aurelian Cuff", price: "$32,000.00", img: "/assets/related_cuff.jpg" },
  ];

  return (
    <motion.main
      initial={{ opacity: 0 }}
      animate={{ opacity: 1 }}
      className="pt-24 md:pt-32 pb-16 md:pb-24 px-6 md:px-12 max-w-[1920px] mx-auto overflow-hidden"
    >
      {/* Product Hero Section */}
      <div className="lg:grid lg:grid-cols-12 gap-8 lg:gap-16 flex flex-col">
        {/* Large Focus Image */}
        <motion.div
          initial={{ opacity: 0, scale: 1.05 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          transition={{ duration: 1.5 }}
          className="col-span-12 lg:col-span-7 aspect-[4/5] overflow-hidden bg-surface-container-low"
        >
          <img
            className="w-full h-full object-cover"
            src="/assets/product_detail_main.jpg"
            alt="The Aurelian Ring"
          />
        </motion.div>

        {/* Product Details Sidebar */}
        <div className="col-span-12 lg:col-span-4 lg:col-start-9 flex flex-col justify-center space-y-8 md:space-y-12">
          <motion.div
            initial={{ opacity: 0, x: 20 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            className="space-y-4"
          >
            <span className="section-label">The Archival Series</span>
            <h1 className="text-4xl sm:text-5xl md:text-7xl -ml-1 tracking-tight leading-[1.1]">The Aurelian Ring</h1>
            <p className="font-sans text-xl text-on-surface-variant font-light">$24,500.00</p>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-on-surface-variant leading-relaxed max-w-md font-light">
              A testament to the enduring allure of pure 24-karat gold. The Aurelian Ring is hand-forged in our Parisian atelier, featuring a central 2.5ct ethically sourced, brilliant-cut diamond of exceptional clarity.
            </p>
            <div className="flex flex-col space-y-4 pt-4">
              <button className="luxury-button-primary w-full flex items-center justify-center gap-4 py-4 md:py-5">
                <ShoppingBag size={16} />
                Add to Bag
              </button>
              <button className="luxury-button-outline w-full py-4 md:py-5">
                Book a Viewing
              </button>
            </div>
          </motion.div>

          <motion.div
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            viewport={{ once: true }}
            transition={{ delay: 0.6 }}
            className="pt-8 border-t border-outline/10 grid grid-cols-2 gap-8"
          >
            <div>
              <span className="section-label !mb-2">Material</span>
              <span className="text-sm">24K Yellow Gold</span>
            </div>
            <div>
              <span className="section-label !mb-2">Stones</span>
              <span className="text-sm">VVS1 D-Diamond</span>
            </div>
          </motion.div>
        </div>
      </div>

      {/* Details Imagery Asymmetric Section */}
      <section className=" mt-24 md:mt-48 lg:grid lg:grid-cols-12 gap-8 lg:gap-16 items-center flex flex-col">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-5 aspect-square bg-surface-container-low overflow-hidden"
        >
          <img
            className="w-full h-full object-cover"
            src="/assets/product_detail_profile.jpg"
            alt="Artisan Profile"
          />
        </motion.div>
        <motion.div
          initial={{ opacity: 0, x: 50 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-4 lg:col-start-7 py-8 md:py-12"
        >
          <h2 className="text-3xl md:text-4xl mb-6 md:mb-8 font-serif italic">The Maker's Notes</h2>
          <div className="space-y-6 text-on-surface-variant font-light leading-relaxed md:leading-loose italic">
            <p>
              "The Aurelian was born from the desire to create a piece that feels ancient yet modern. The 24k gold is handled with intentional restraint, allowing the natural irregularities of the forging process to create a unique fingerprint for every ring."
            </p>
            <div className="pt-4">
              <span className="section-label">— Henri L'Atelier, Head Artisan</span>
            </div>
          </div>
        </motion.div>
      </section>

      {/* Secondary Imagery Section */}
      <section className="mt-24 md:mt-48 grid grid-cols-12">
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="col-span-12 lg:col-span-8 lg:col-start-3 text-center"
        >
          <div className="aspect-video overflow-hidden bg-surface-container border border-outline/5">
            <img
              className="w-full h-full object-cover"
              src="/assets/product_detail_process.jpg"
              alt="The Forging Process"
            />
          </div>
          <div className="mt-6 md:mt-8">
            <span className="section-label opacity-60">The Forging Process • Place Vendôme</span>
          </div>
        </motion.div>
      </section>

      {/* Related Pieces Section */}
      <section className="mt-64">
        <div className="flex justify-between items-end mb-16">
          <div>
            <span className="section-label">Complete the Set</span>
            <h2 className="text-4xl mt-2">Related Pieces</h2>
          </div>
          <a href="#" className="section-label !text-on-surface border-b border-outline pb-1 hover:text-secondary transition-colors">
            View All Collections
          </a>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-12">
          {relatedPieces.map((p, i) => (
            <motion.div
              key={p.name}
              initial={{ opacity: 0, y: 30 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: i * 0.2 }}
              className={`group cursor-pointer ${p.pt ? 'md:pt-12' : ''}`}
            >
              <div className="aspect-[3/4] bg-surface-container-low overflow-hidden mb-6">
                <img
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700"
                  src={p.img}
                  alt={p.name}
                />
              </div>
              <div className="space-y-1">
                <h3 className="text-sm uppercase tracking-widest">{p.name}</h3>
                <p className="text-xs text-on-surface-variant tracking-label">{p.price}</p>
              </div>
            </motion.div>
          ))}
        </div>
      </section>
    </motion.main>
  );
};

export default ProductDetail;
