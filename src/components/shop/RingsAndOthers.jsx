// ============================================================
// RINGS & OTHERS — src/components/shop/RingsAndOthers.jsx
//
// Dark theme + framer-motion animations (Home page jaisa)
// Featured rings + curated non-ring favorites
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';
import ProductCard from './ProductCard';
import { ALL_PRODUCTS } from '../../data/products';

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.1
    }
  }
};

const RingsAndOthers = ({ onQuickView, variant = 'shop' }) => {
  const rings = ALL_PRODUCTS.filter(p => p.category === 'Rings');
  const others = ALL_PRODUCTS.filter(p => p.category !== 'Rings').slice(0, 8);

  return (
    <section className="relative overflow-hidden bg-neutral-950 py-16 sm:py-20">
      {/* Radial gradient background */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_bottom_right,rgba(212,175,55,0.08),transparent_30%),radial-gradient(circle_at_top_left,rgba(255,255,255,0.04),transparent_28%)]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        {/* Section Header */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-50px' }}
          transition={{ duration: 0.8, ease: 'easeOut' }}
          className="mb-12"
        >
          <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md mb-4">
            Featured Selection
          </span>
          <h2 className="text-3xl md:text-4xl font-serif text-white">
            Rings & Others
          </h2>
          <p className="text-sm text-neutral-400 mt-3 max-w-lg leading-relaxed">
            Explore the most elegant rings and curated non-ring favourites from our collection.
          </p>
        </motion.div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

          {/* Rings Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-medium text-white">Rings</h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-300/70">Popular</span>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              {rings.slice(0, 4).map(product => (
                <ProductCard
                  key={`ring-${product.id}`}
                  product={product}
                  onQuickView={onQuickView}
                  variant={variant}
                />
              ))}
            </motion.div>
          </div>

          {/* Others Column */}
          <div>
            <div className="flex items-center justify-between mb-6">
              <h3 className="text-lg font-serif font-medium text-white">Others</h3>
              <span className="text-[10px] uppercase tracking-[0.3em] text-amber-300/70">Trending</span>
            </div>
            <motion.div
              className="grid grid-cols-2 gap-5"
              variants={containerVariants}
              initial="hidden"
              whileInView="show"
              viewport={{ once: true, margin: '-50px' }}
            >
              {others.slice(0, 4).map(product => (
                <ProductCard
                  key={`other-${product.id}`}
                  product={product}
                  onQuickView={onQuickView}
                  variant={variant}
                />
              ))}
            </motion.div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default RingsAndOthers;
