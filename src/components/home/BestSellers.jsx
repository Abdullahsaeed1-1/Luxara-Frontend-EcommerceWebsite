import React from 'react';
import { ShoppingBag, Eye } from 'lucide-react';

const products = [
  {
    id: 1,
    name: "Volcanic Lava Set",
    price: "Rs. 2,450",
    image: "https://images.unsplash.com/photo-1611591437281-460bfbe1220a?q=80&w=1000&auto=format&fit=crop",
    tag: "Best Seller"
  },
  {
    id: 2,
    name: "Rose Quartz Healing",
    price: "Rs. 1,800",
    image: "https://images.unsplash.com/photo-1573408301185-9146fe634ad0?q=80&w=1000&auto=format&fit=crop",
    tag: "New"
  },
  {
    id: 3,
    name: "Tiger Eye Classic",
    price: "Rs. 2,100",
    image: "https://images.unsplash.com/photo-1602751584552-8ba420555307?q=80&w=1000&auto=format&fit=crop",
    tag: "Trending"
  },
  {
    id: 4,
    name: "Ocean Jasper Stack",
    price: "Rs. 3,200",
    image: "https://images.unsplash.com/photo-1599643478518-17488fbbcd75?q=80&w=1000&auto=format&fit=crop",
    tag: "Limited"
  }
];

const BestSellers = () => {
  return (
    <section className="py-24 bg-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Header */}
        <div className="text-center mb-16">
          <p className="text-yellow-600 uppercase tracking-widest text-xs font-bold mb-2">Shop The Look</p>
          <h2 className="text-4xl font-serif text-primary">Seasonal Favorites</h2>
        </div>

        {/* Product Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10">
          {products.map((product) => (
            <div key={product.id} className="group cursor-pointer">
              
              {/* Image Container */}
              <div className="relative overflow-hidden aspect-[3/4] mb-4 bg-gray-100">
                <span className="absolute top-3 left-3 bg-white/90 backdrop-blur-sm px-3 py-1 text-[10px] uppercase tracking-widest font-bold z-10">
                  {product.tag}
                </span>
                
                <img 
                  src={product.image} 
                  alt={product.name} 
                  className="w-full h-full object-cover transform group-hover:scale-110 transition duration-700 ease-in-out"
                />

                {/* Hover Buttons */}
                <div className="absolute inset-0 bg-black/10 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-2">
                  <button className="bg-white p-3 rounded-full hover:bg-yellow-600 hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0">
                    <ShoppingBag size={20} />
                  </button>
                  <button className="bg-white p-3 rounded-full hover:bg-black hover:text-white transition-all transform translate-y-4 group-hover:translate-y-0 delay-75">
                    <Eye size={20} />
                  </button>
                </div>
              </div>

              {/* Info */}
              <div className="text-center">
                <h3 className="text-lg font-serif font-medium text-gray-900 group-hover:text-yellow-600 transition-colors">
                  {product.name}
                </h3>
                <p className="text-gray-500 text-sm mt-1">{product.price}</p>
              </div>

            </div>
          ))}
        </div>

        {/* View All Button */}
        <div className="text-center mt-12">
          <button className="border-b border-black pb-1 text-sm uppercase tracking-widest hover:text-yellow-600 hover:border-yellow-600 transition-colors">
            View All Products
          </button>
        </div>

      </div>
    </section>
  );
};

export default BestSellers;