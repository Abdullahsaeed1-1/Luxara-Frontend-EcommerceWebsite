import React from 'react';
import { ArrowUpRight } from 'lucide-react';

const categories = [
  {
    id: 1,
    title: "Healing Stones",
    desc: "Natural energy for your soul.",
    image: "https://images.unsplash.com/photo-1611085583191-a3b181a88401?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2" // Yeh bari image hogi
  },
  {
    id: 2,
    title: "Couple Sets",
    desc: "Connected by distance.",
    image: "https://images.unsplash.com/photo-1615655406736-b37c4fabf923?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    id: 3,
    title: "Wooden Stacks",
    desc: "Earthly tones & textures.",
    image: "https://images.unsplash.com/photo-1579766989932-d812328701e8?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1"
  },
  {
    id: 4,
    title: "Custom Text",
    desc: "Your name, your style.",
    image: "https://images.unsplash.com/photo-1590548774585-607691a54775?q=80&w=2070&auto=format&fit=crop",
    size: "col-span-1 md:col-span-2" // Yeh bhi bari image hogi
  }
];

const Categories = () => {
  return (
    <section className="py-20 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        <div className="text-center mb-16">
          <span className="text-yellow-600 uppercase tracking-widest text-sm font-bold">The Collection</span>
          <h2 className="text-4xl md:text-5xl font-serif text-primary mt-3">Curated by Hand</h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {categories.map((cat) => (
            <div key={cat.id} className={`relative group h-[400px] overflow-hidden cursor-pointer ${cat.size}`}>
              
              {/* Background Image with Zoom Effect */}
              <img 
                src={cat.image} 
                alt={cat.title} 
                className="w-full h-full object-cover transition-transform duration-1000 group-hover:scale-110"
              />
              
              {/* Dark Overlay */}
              <div className="absolute inset-0 bg-black/20 group-hover:bg-black/40 transition-colors duration-300"></div>

              {/* Text Content */}
              <div className="absolute bottom-8 left-8 text-white">
                <p className="text-yellow-400 text-xs uppercase tracking-widest mb-2 opacity-0 transform translate-y-4 group-hover:opacity-100 group-hover:translate-y-0 transition-all duration-500">
                  {cat.desc}
                </p>
                <h3 className="text-3xl font-serif flex items-center gap-4">
                  {cat.title}
                  <ArrowUpRight className="opacity-0 -translate-x-4 group-hover:opacity-100 group-hover:translate-x-0 transition-all duration-500 text-yellow-400" />
                </h3>
              </div>

            </div>
          ))}
        </div>

      </div>
    </section>
  );
};

export default Categories;