import React from 'react';
import { ArrowRight, Star } from 'lucide-react';

const ProductSpotlight = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex flex-col lg:flex-row items-center gap-16">
          
          {/* Left: Image Composition */}
          <div className="w-full lg:w-1/2 relative">
            <div className="aspect-square bg-gray-100 overflow-hidden relative z-10">
              <img 
                src="https://images.unsplash.com/photo-1602751584552-8ba420555307?q=80&w=1000&auto=format&fit=crop" 
                alt="Obsidian Bracelet" 
                className="w-full h-full object-cover hover:scale-105 transition-transform duration-700"
              />
            </div>
            {/* Decoration Box behind image */}
            <div className="absolute -bottom-6 -right-6 w-full h-full border-2 border-yellow-600/30 -z-0 hidden md:block"></div>
          </div>

          {/* Right: Product Details */}
          <div className="w-full lg:w-1/2 space-y-8">
            <div className="flex items-center gap-2 text-yellow-500">
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <Star size={16} fill="currentColor" />
              <span className="text-gray-400 text-sm ml-2">(128 Reviews)</span>
            </div>
            
            <h2 className="text-4xl md:text-5xl font-serif text-primary leading-tight">
              The Midnight <br/> Obsidian.
            </h2>
            
            <p className="text-gray-500 text-lg leading-relaxed">
              Black Obsidian is a powerful cleanser of psychic smog created within your aura, and is a strong psychic protection stone. Hand-strung on durable elastic for a comfortable fit.
            </p>

            <div className="flex gap-8 border-y border-gray-100 py-6">
              <div>
                <span className="block text-gray-400 text-xs uppercase tracking-widest">Bead Size</span>
                <span className="font-medium text-lg">8mm</span>
              </div>
              <div>
                <span className="block text-gray-400 text-xs uppercase tracking-widest">Material</span>
                <span className="font-medium text-lg">Volcanic Glass</span>
              </div>
            </div>

            <div className="flex items-center gap-6 pt-4">
              <h3 className="text-3xl font-bold text-gray-900">$45.00</h3>
              <button className="flex-1 bg-black text-white h-14 uppercase tracking-widest text-xs font-bold hover:bg-yellow-600 transition-colors flex items-center justify-center gap-2">
                Add to Cart <ArrowRight size={16} />
              </button>
            </div>
          </div>

        </div>
      </div>
    </section>
  );
};

export default ProductSpotlight;