// ============================================================
// BRAND PROMISE — src/components/brand/BrandPromise.jsx
//
// YEH KYA HAI:
// BrandLegacy page mein "Our Promise" / "Three things we'll never compromise on" section.
// 3 cards: Anti-Tarnish, Waterproof, Real Luxury Feel
//
// KAHAN USE HOTA HAI:
// src/pages/BrandLegacy.jsx mein Chapter 2 ke baad
//
// CHANGE KARNA HO TO:
// - Cards add/remove → 'promises' array mein object add ya remove karo
// - Card content change → array mein text edit karo
// - Heading change → h2 tag edit karo
// - Icon change → lucide-react se naya icon import karo
// ============================================================

import React from 'react';
import { Shield, Droplets, Sparkles } from 'lucide-react';

// ── Yahan se cards ka data aata hai ──
// Naya card add karna ho → yeh array mein object add karo
const promises = [
  {
    icon: <Shield size={28} />,
    title: "Anti-Tarnish. Always.",
    desc: "PVD coating bonds permanently to the steel surface. No fading, no peeling, no turning black. If it does within 6 months, we replace it.",
  },
  {
    icon: <Droplets size={28} />,
    title: "Truly Waterproof.",
    desc: "Shower. Swim. Gym. Our jewelry is tested for water resistance. Wear it every day without a single worry.",
  },
  {
    icon: <Sparkles size={28} />,
    title: "Real Luxury Feel.",
    desc: "18K gold, silver, and rose gold PVD. AAA cubic zirconia. Precision craftsmanship. The look of imported jewelry at local prices.",
  },
];

const BrandPromise = () => {
  return (
    <section className="py-20 bg-[#fafaf8]">
      <div className="max-w-7xl mx-auto px-6">

        {/* Heading */}
        <div className="text-center mb-14">
          <p className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
            Our Promise
          </p>
          <h2 className="font-serif text-4xl text-gray-900 font-light">
            Three things we'll never{' '}
            <span className="italic text-yellow-600">compromise on.</span>
          </h2>
        </div>

        {/* 3 Cards Grid
            gap-1 + bg-gray-100 → cards ke beech thin gray line dikhti hai (design trick)
        */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-1 bg-gray-100">
          {promises.map((item, i) => (
            <div key={i} className="bg-white p-10">
              {/* Icon */}
              <div className="text-yellow-600 mb-5">{item.icon}</div>
              {/* Title */}
              <h3 className="font-serif text-xl text-gray-900 mb-3">{item.title}</h3>
              {/* Description */}
              <p className="text-sm text-gray-400 leading-relaxed">{item.desc}</p>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default BrandPromise;