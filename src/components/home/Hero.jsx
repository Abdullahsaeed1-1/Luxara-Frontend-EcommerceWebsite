import React from 'react';
import { ArrowRight } from 'lucide-react';

// ==============================
// IMPORTANT: IMAGE IMPORT
// ==============================
// Apni image file ka naam yahan check kar lo. 
// Agar file ka naam "gemini 2.png" hai jo assets folder mein hai, to yeh import theek hai.
import heroBgImage from '../../assets/gemini 2.png'; 

const Hero = () => {
  return (
    <div className="relative h-screen w-full bg-gray-900 overflow-hidden">
      
      {/* Background Image Section */}
      <div className="absolute inset-0">
        <img 
          // YAHAN VARIABLE USE HOGA (Jo upar import kiya hai)
          src={heroBgImage} 
          alt="Luxury Gold Bracelets Logo" 
          
          // POSITIONING FIX:
          // object-cover: Image ko khenchta nahi, balkay screen bharne ke liye crop karta hai.
          // object-center: Make sure karta hai ke image ka center point focus mein rahe.
          className="w-full h-full object-cover object-center opacity-80"
        />
        
        {/* Gradient Overlay: Text parhne ke liye */}
        <div className="absolute inset-0 bg-gradient-to-r from-black/90 via-black/50 to-transparent"></div>
      </div>

      {/* Content Section */}
      <div className="relative z-10 h-full flex items-center max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Text Container */}
        <div className="max-w-lg text-white mt-16 md:mt-0">
          
          <p className="text-yellow-500 font-medium tracking-[0.2em] uppercase mb-6 animate-fade-in text-sm md:text-base">
            New Collection 2025
          </p>
          
          <h1 className="text-5xl md:text-7xl font-serif font-light mb-8 leading-[1.1]">
            Timeless <br /> 
            <span className="italic font-normal text-yellow-50">Elegance.</span>
          </h1>
          
          <p className="text-gray-300 text-lg mb-10 font-light leading-relaxed max-w-md">
            Elevate your style with our handcrafted bracelets. Designed for those who appreciate the finer details in life.
          </p>
          
          <div className="flex flex-col sm:flex-row gap-4">
            <button className="bg-white text-black px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-yellow-600 hover:text-white transition-all duration-300 flex items-center justify-center gap-2 group">
              Shop Now 
              <ArrowRight className="w-4 h-4 group-hover:translate-x-1 transition-transform" />
            </button>
            <button className="border border-white/30 text-white px-10 py-4 uppercase tracking-widest text-xs font-bold hover:bg-white hover:text-black transition-all duration-300 backdrop-blur-sm">
              View Lookbook
            </button>
          </div>

        </div>
      </div>
    </div>
  );
};

export default Hero;