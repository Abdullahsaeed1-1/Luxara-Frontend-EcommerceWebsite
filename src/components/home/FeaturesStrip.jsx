import React from 'react';
import { Gem, Hammer, Truck, ShieldCheck } from 'lucide-react';

const features = [
  {
    icon: <Gem size={32} />,
    title: "100% Real Stones",
    desc: "Sourced from authentic mines."
  },
  {
    icon: <Hammer size={32} />,
    title: "Handmade Quality",
    desc: "Crafted individually with care."
  },
  {
    icon: <ShieldCheck size={32} />,
    title: "Durable Design",
    desc: "Strong elastic that lasts."
  },
  {
    icon: <Truck size={32} />,
    title: "Fast Shipping",
    desc: "Delivery all over Pakistan."
  }
];

const FeaturesStrip = () => {
  return (
    <div className="bg-[#f9f9f9] py-16 border-y border-gray-100">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
          {features.map((feature, index) => (
            <div key={index} className="flex flex-col items-center group">
              <div className="mb-4 text-gray-400 group-hover:text-yellow-600 transition-colors duration-300">
                {feature.icon}
              </div>
              <h3 className="text-lg font-serif font-bold text-gray-900 mb-2">{feature.title}</h3>
              <p className="text-sm text-gray-500">{feature.desc}</p>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default FeaturesStrip;