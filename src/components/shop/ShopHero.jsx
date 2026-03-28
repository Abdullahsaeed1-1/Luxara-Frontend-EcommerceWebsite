// ============================================================
// SHOP HERO — src/components/shop/ShopHero.jsx
//
// Dark theme + framer-motion animations (Home page jaisa)
// ============================================================

import React from 'react';
import { motion } from 'framer-motion';

const ShopHero = () => {
  return (
    <section className="relative overflow-hidden bg-neutral-950 pt-32 pb-16 px-4">
      {/* Radial gradient background — Home page jaisa */}
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_top_right,rgba(212,175,55,0.10),transparent_26%),radial-gradient(circle_at_bottom_left,rgba(255,255,255,0.05),transparent_24%)]" />

      <motion.div
        initial={{ opacity: 0, y: 40 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.85, ease: [0.22, 1, 0.36, 1] }}
        className="relative max-w-7xl mx-auto"
      >
        {/* Label Badge */}
        <span className="inline-flex items-center rounded-full border border-white/10 bg-white/5 px-4 py-1.5 text-[11px] font-semibold uppercase tracking-[0.35em] text-amber-300/90 backdrop-blur-md mb-5">
          The Collection
        </span>

        {/* Main Heading */}
        <h1 className="text-5xl md:text-6xl lg:text-7xl font-serif font-light leading-[1.02] tracking-tight text-white mb-5">
          Shop All <span className="italic font-normal text-neutral-100">Jewelry.</span>
        </h1>

        {/* Description */}
        <p className="max-w-xl text-base leading-8 text-neutral-400 sm:text-lg">
          Every piece crafted in anti-tarnish stainless steel. Waterproof. Skin-safe. Designed to last.
        </p>
      </motion.div>
    </section>
  );
};

export default ShopHero;
