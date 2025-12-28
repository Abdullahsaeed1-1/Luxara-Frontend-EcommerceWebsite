import React from 'react';
import { Instagram } from 'lucide-react';

const Gallery = () => {
  return (
    <section className="py-20 bg-[#fafafa]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="flex flex-col md:flex-row justify-between items-end mb-12">
          <div>
            <h2 className="text-3xl font-serif text-primary">#LuxaraLife</h2>
            <p className="text-gray-500 mt-2">Join our community on Instagram</p>
          </div>
          <button className="flex items-center gap-2 text-sm uppercase tracking-widest font-bold hover:text-yellow-600 transition-colors mt-4 md:mt-0">
            <Instagram size={18} /> Follow Us
          </button>
        </div>

        {/* Masonry Grid (Bari Choti Pics) */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-4 h-[600px] md:h-[500px]">
          
          {/* Big Item */}
          <div className="col-span-2 row-span-2 relative group overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
            />
            <div className="absolute inset-0 bg-black/20 group-hover:bg-black/0 transition-colors"></div>
          </div>

          {/* Small Items */}
          <div className="relative group overflow-hidden h-full">
            <img 
              src="https://images.unsplash.com/photo-1590548774585-607691a54775?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="relative group overflow-hidden h-full">
             <img 
              src="https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>
          <div className="col-span-2 relative group overflow-hidden h-full">
             <img 
              src="https://images.unsplash.com/photo-1579766989932-d812328701e8?q=80&w=1000&auto=format&fit=crop" 
              className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
            />
          </div>

        </div>

      </div>
    </section>
  );
};

export default Gallery;