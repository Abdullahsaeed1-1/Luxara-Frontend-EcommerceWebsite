import React from 'react';
import { CheckCircle, XCircle, Droplets, Wind, Sparkles, AlertTriangle } from 'lucide-react';

const doList = [
  "Wear it in the shower — stainless steel loves water",
  "Clean with a soft dry cloth after heavy use",
  "Store in the Luxara box or a small zip pouch",
  "Wear it to the gym, pool, or beach — no problem",
  "Layer multiple pieces together freely",
];

const dontList = [
  "Don't use harsh chemicals or bleach to clean",
  "Don't store in direct sunlight for long periods",
  "Don't use abrasive cloths that can scratch the surface",
  "Don't expose to perfume or hairspray directly on the piece",
];

const tips = [
  {
    icon: <Droplets size={24} />,
    title: "Water? No Problem.",
    desc: "Stainless Steel 316L is fully waterproof. Shower, swim, rain — none of it will affect the finish or color. This is not regular plated jewelry.",
  },
  {
    icon: <Wind size={24} />,
    title: "Daily Storage",
    desc: "Keep your jewelry in the Luxara gift box when not wearing. This prevents minor scratches and keeps the shine intact longer.",
  },
  {
    icon: <Sparkles size={24} />,
    title: "Cleaning",
    desc: "Simply wipe with a soft microfiber cloth. For stubborn residue, use a damp cloth — that's it. No special jewelry cleaner needed.",
  },
  {
    icon: <AlertTriangle size={24} />,
    title: "Avoid Chemicals",
    desc: "Perfumes, hairsprays, and lotions contain chemicals that can dull the surface over time. Put your jewelry on AFTER applying these.",
  },
];

const CareTips = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-6">

        {/* Tips Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1 bg-gray-100 mb-20">
          {tips.map((tip, i) => (
            <div key={i} className="bg-white p-8">
              <div className="text-yellow-600 mb-5">{tip.icon}</div>
              <h3 className="font-serif text-lg text-gray-900 mb-3">{tip.title}</h3>
              <p className="text-sm text-gray-400 leading-relaxed">{tip.desc}</p>
            </div>
          ))}
        </div>

        {/* Do / Don't */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-1 bg-gray-100">

          {/* Do */}
          <div className="bg-white p-10">
            <h3 className="font-serif text-2xl text-gray-900 mb-8 flex items-center gap-3">
              <CheckCircle size={20} className="text-green-500" /> You Can
            </h3>
            <ul className="space-y-4">
              {doList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-green-500 mt-0.5 shrink-0">✓</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

          {/* Don't */}
          <div className="bg-[#fafaf8] p-10">
            <h3 className="font-serif text-2xl text-gray-900 mb-8 flex items-center gap-3">
              <XCircle size={20} className="text-red-400" /> Avoid This
            </h3>
            <ul className="space-y-4">
              {dontList.map((item, i) => (
                <li key={i} className="flex items-start gap-3 text-sm text-gray-600">
                  <span className="text-red-400 mt-0.5 shrink-0">✗</span>
                  {item}
                </li>
              ))}
            </ul>
          </div>

        </div>

        {/* Bottom Note */}
        <div className="mt-12 bg-[#0f0d0b] p-8 text-center">
          <p className="text-yellow-500 text-[10px] uppercase tracking-[0.3em] mb-3">Our Guarantee</p>
          <p className="font-serif text-xl text-white font-light">
            If the color changes within 6 months of normal wear — we replace it. No questions asked.
          </p>
        </div>

      </div>
    </section>
  );
};

export default CareTips;