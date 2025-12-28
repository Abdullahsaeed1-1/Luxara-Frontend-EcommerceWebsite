import React, { useState, useEffect } from 'react';
import { ChevronLeft, ChevronRight } from 'lucide-react';

const slides = [
  {
    id: 1,
    image: "src/assets/banner 4.png",
    title: "The Golden Hour",
    subtitle: "Shine bright with our 24k Gold plated collection.",
    position: "justify-start" // Text Left side pe
  },
  {
    id: 2,
    image: "src/assets/banner 3.png",
    title: "Minimalist Vibes",
    subtitle: "Less is more. Discover our everyday essentials.",
    position: "justify-center" // Text Center mein
  },
  {
    id: 3,
    image: "src/assets/banner 2.jpg",
    title: "Men's Black Edition",
    subtitle: "Bold, matte, and masculine. The new era of style.",
    position: "justify-end" // Text Right side pe
  }
];

const PromoCarousel = () => {
  const [current, setCurrent] = useState(0);

  // Auto-Slide Logic (Har 5 second baad change hoga)
  useEffect(() => {
    const timer = setInterval(() => {
      nextSlide();
    }, 5000); // 5000ms = 5 seconds
    return () => clearInterval(timer);
  }, [current]);

  const prevSlide = () => {
    setCurrent(current === 0 ? slides.length - 1 : current - 1);
  };

  const nextSlide = () => {
    setCurrent(current === slides.length - 1 ? 0 : current + 1);
  };

  return (
    <div className="relative h-[400px] md:h-[500px] w-full overflow-hidden bg-gray-100 group">
      
      {/* Slides */}
      {slides.map((slide, index) => (
        <div 
          key={slide.id}
          className={`absolute inset-0 transition-opacity duration-1000 ease-in-out ${
            index === current ? 'opacity-100 z-10' : 'opacity-0 z-0'
          }`}
        >
          {/* Background Image */}
          <img 
            src={slide.image} 
            alt={slide.title} 
            className="w-full h-full object-cover"
          />
          
          {/* Black Overlay for Text Readability */}
          <div className="absolute inset-0 bg-black/30"></div>

          {/* Text Content */}
          <div className={`absolute inset-0 flex items-center px-12 md:px-24 ${slide.position}`}>
            <div className="max-w-lg text-white space-y-4 transform transition-all duration-700 translate-y-0">
              <span className="text-yellow-400 uppercase tracking-widest text-sm font-bold animate-fade-in-up">
                New Collection
              </span>
              <h2 className="text-4xl md:text-5xl font-serif leading-tight">
                {slide.title}
              </h2>
              <p className="text-gray-200 text-lg font-light">
                {slide.subtitle}
              </p>
              <button className="border-b border-white pb-1 uppercase tracking-widest text-xs font-bold hover:text-yellow-400 hover:border-yellow-400 transition-colors mt-4">
                Shop This Look
              </button>
            </div>
          </div>
        </div>
      ))}

      {/* Navigation Arrows (Hidden on mobile, show on hover) */}
      <button 
        onClick={prevSlide}
        className="absolute left-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronLeft size={24} />
      </button>

      <button 
        onClick={nextSlide}
        className="absolute right-4 top-1/2 -translate-y-1/2 z-20 bg-white/10 backdrop-blur-md p-3 rounded-full text-white hover:bg-white hover:text-black transition-all opacity-0 group-hover:opacity-100"
      >
        <ChevronRight size={24} />
      </button>

      {/* Dots Indicator */}
      <div className="absolute bottom-6 left-1/2 -translate-x-1/2 z-20 flex space-x-3">
        {slides.map((_, index) => (
          <button
            key={index}
            onClick={() => setCurrent(index)}
            className={`w-2 h-2 rounded-full transition-all duration-300 ${
              index === current ? 'bg-yellow-500 w-6' : 'bg-white/50 hover:bg-white'
            }`}
          />
        ))}
      </div>

    </div>
  );
};

export default PromoCarousel;