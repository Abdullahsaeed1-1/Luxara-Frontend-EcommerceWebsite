// ============================================================
// BRAND TURNING POINT — src/components/brand/BrandTurningPoint.jsx
//
// YEH KYA HAI:
// BrandLegacy page mein "The Turning Point" section.
// Dark background, badi quote: "What if the jewelry lasted as long as the memory?"
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx mein Chapter 1 ke baad
//
// CHANGE KARNA HO TO:
// - Quote change → h2 tag ke andar text edit karo
// - Paragraph change → <p> tag edit karo
// - Label change → "The Turning Point" wali <p> edit karo
// - Background → bg-[#0f0d0b] change karo
// ============================================================

import React from 'react';

const BrandTurningPoint = () => {
  return (
    <section className="py-20 bg-[#0f0d0b]">
      <div className="max-w-4xl mx-auto px-6 text-center">

        {/* Label */}
        <p className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] font-medium mb-6">
          The Turning Point
        </p>

        {/* Big Quote */}
        <h2 className="font-serif text-4xl md:text-5xl text-white font-light leading-tight mb-8">
          "What if the jewelry lasted<br />
          <span className="italic text-yellow-400">as long as the memory?"</span>
        </h2>

        {/* Explanation paragraph */}
        <p className="text-gray-400 leading-relaxed max-w-2xl mx-auto">
          That question changed everything. We spent months researching materials — visiting suppliers,
          testing finishes, and learning about surgical steel 316L and PVD coating technology.
          The kind of material used in medical instruments. The kind that doesn't react to water,
          sweat, or skin — ever.
        </p>

      </div>
    </section>
  );
};

export default BrandTurningPoint;