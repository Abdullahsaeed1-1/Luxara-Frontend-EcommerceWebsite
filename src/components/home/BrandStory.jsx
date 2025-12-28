import React from 'react';
import { Play } from 'lucide-react';

const BrandStory = () => {
  return (
    <section className="py-24 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-center">
          
          {/* LEFT SIDE: Video/Image Thumbnail */}
          <div className="relative h-[500px] w-full group cursor-pointer overflow-hidden">
            
            {/* Image */}
            <img 
              src="https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=2075&auto=format&fit=crop" 
              alt="Making Process" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            
            {/* Dark Overlay (Sirf Image pe, taake Play button nazar aye) */}
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/30 transition-colors"></div>

            {/* Play Button Center */}
            <div className="absolute inset-0 flex items-center justify-center">
              <div className="relative">
                {/* Ping Effect */}
                <div className="absolute inset-0 bg-white rounded-full animate-ping opacity-30"></div>
                
                {/* Button Circle */}
                <div className="relative w-20 h-20 bg-white/20 backdrop-blur-md border border-white/50 rounded-full flex items-center justify-center group-hover:bg-white group-hover:scale-110 transition-all duration-500">
                  <Play className="fill-white text-white w-8 h-8 ml-1 group-hover:fill-black group-hover:text-black transition-colors" />
                </div>
              </div>
            </div>
          </div>

          {/* RIGHT SIDE: Text Content (Ab White BG pe Black Text) */}
          <div className="space-y-8">
            <div className="inline-block border border-yellow-600 px-4 py-1 rounded-full text-yellow-600 text-xs tracking-widest uppercase font-bold">
              Our Story
            </div>
            
            <h2 className="text-5xl md:text-6xl font-serif leading-tight text-gray-900">
              More Than <br/> Just Beads.
            </h2>
            
            <p className="text-gray-600 text-lg font-light leading-relaxed">
              Every Luxara bracelet is threaded by hand, bead by bead. We believe in the energy of natural stones and the warmth of human touch. No machines, just pure craftsmanship designed to last a lifetime.
            </p>
            
            {/* Button: Black Background for Contrast */}
            <button className="bg-black text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-yellow-600 transition duration-300">
              Read Our Journey
            </button>
          </div>

        </div>
      </div>
    </section>
  );
};

export default BrandStory;