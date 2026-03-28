import React, { useState } from 'react';
import { X, Star, ArrowRight, ShoppingBag, Check } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = "923147253080";

const QuickView = ({ product, onClose }) => {
  const { addToCart } = useCart();
  const [added, setAdded] = useState(false);

  if (!product) return null;

  const handleAddToCart = () => {
    addToCart(product);
    setAdded(true);
    setTimeout(() => setAdded(false), 2000);
  };

  const orderOnWhatsApp = () => {
    const msg = encodeURIComponent(
      `Hi Luxara! I want to order:\n\n🛍️ *${product.name}*\n💰 Price: Rs. ${product.price.toLocaleString()}\n✨ Finish: ${product.finish}\n\nPlease confirm availability. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    onClose();
  };

  const discount = product.originalPrice
    ? Math.round(((product.originalPrice - product.price) / product.originalPrice) * 100)
    : null;

  return (
    <div className="fixed inset-0 z-[100] flex items-center justify-center p-4">

      {/* Backdrop */}
      <div className="absolute inset-0 bg-black/50 backdrop-blur-sm" onClick={onClose} />

      {/* Modal */}
      <div className="relative bg-white w-full max-w-3xl max-h-[90vh] overflow-y-auto z-10 shadow-2xl">

        {/* Close */}
        <button
          onClick={onClose}
          className="absolute top-4 right-4 z-20 bg-white rounded-full w-8 h-8 flex items-center justify-center text-gray-500 hover:text-gray-900 shadow-md transition-colors"
        >
          <X size={16} />
        </button>

        <div className="grid grid-cols-1 md:grid-cols-2">

          {/* Image */}
          <div className="aspect-square bg-gray-50 overflow-hidden relative">
            <img src={product.image} alt={product.name} className="w-full h-full object-cover" />
            {discount && (
              <span className="absolute top-3 right-3 bg-yellow-600 text-white text-[10px] font-bold px-2 py-1">
                -{discount}%
              </span>
            )}
            {!product.inStock && (
              <div className="absolute inset-0 bg-white/60 flex items-center justify-center">
                <span className="text-xs uppercase tracking-widest font-semibold text-gray-500 border border-gray-400 px-3 py-1.5">Sold Out</span>
              </div>
            )}
          </div>

          {/* Details */}
          <div className="p-8 flex flex-col justify-between">
            <div className="space-y-4">

              <span className="inline-block bg-[#0f0d0b] text-white text-[9px] uppercase tracking-widest px-3 py-1">
                {product.tag || 'New'}
              </span>

              <h2 className="font-serif text-3xl text-gray-900 font-light leading-tight">
                {product.name}
              </h2>

              <div className="flex items-center gap-1">
                {[...Array(5)].map((_, i) => (
                  <Star key={i} size={14} className="text-yellow-500 fill-yellow-500" />
                ))}
                <span className="text-xs text-gray-400 ml-2">(48 reviews)</span>
              </div>

              <div className="flex items-center gap-3">
                <span className="font-serif text-2xl font-medium text-gray-900">
                  Rs. {product.price.toLocaleString()}
                </span>
                {product.originalPrice && (
                  <span className="text-gray-400 text-sm line-through">
                    Rs. {product.originalPrice.toLocaleString()}
                  </span>
                )}
              </div>

              <div className="flex flex-wrap gap-2">
                {["Anti-Tarnish", "Waterproof", "Skin-Safe"].map((b) => (
                  <span key={b} className="text-[10px] uppercase tracking-wider border border-gray-200 px-2 py-1 text-gray-500">
                    ✓ {b}
                  </span>
                ))}
              </div>

              <p className="text-sm text-gray-500 leading-relaxed">
                {product.description || "Premium anti-tarnish stainless steel. Waterproof and skin-safe. Designed for everyday wear."}
              </p>

              <div className="grid grid-cols-2 gap-3 pt-3 border-t border-gray-100">
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Material</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">Steel 316L</p>
                </div>
                <div>
                  <p className="text-[10px] uppercase tracking-wider text-gray-400">Finish</p>
                  <p className="text-sm font-medium text-gray-900 mt-1">{product.finish || 'Gold PVD'}</p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            {product.inStock ? (
              <div className="space-y-3 pt-6">
                {/* Add to Cart */}
                <button
                  onClick={handleAddToCart}
                  className={`w-full py-4 text-[11px] uppercase tracking-widest font-semibold
                             flex items-center justify-center gap-2 transition-all duration-300
                             ${added
                               ? 'bg-green-500 text-white'
                               : 'bg-[#0f0d0b] text-white hover:bg-yellow-600'
                             }`}
                >
                  {added ? (
                    <><Check size={14} /> Added to Cart!</>
                  ) : (
                    <><ShoppingBag size={14} /> Add to Cart</>
                  )}
                </button>

                {/* WhatsApp Order */}
                <button
                  onClick={orderOnWhatsApp}
                  className="w-full border border-gray-200 py-3.5 text-[11px] uppercase tracking-widest
                             text-gray-600 hover:bg-[#25D366] hover:text-white hover:border-[#25D366]
                             transition-all duration-300 flex items-center justify-center gap-2"
                >
                  <svg viewBox="0 0 24 24" fill="currentColor" width="14" height="14">
                    <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
                  </svg>
                  Order on WhatsApp
                </button>
              </div>
            ) : (
              <div className="pt-6">
                <div className="w-full bg-gray-100 text-gray-400 py-4 text-[11px] uppercase tracking-widest text-center">
                  Currently Out of Stock
                </div>
                <p className="text-xs text-gray-400 text-center mt-3">
                  Message us on WhatsApp to be notified when it's back.
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
    </div>
  );
};

export default QuickView;
