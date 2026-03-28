import React from 'react';
import { X, ShoppingBag, ArrowRight, Minus, Plus, Trash2 } from 'lucide-react';
import { useCart } from '../context/CartContext';

const WHATSAPP_NUMBER = "923147253080";

const CartSidebar = ({ isOpen, onClose }) => {
  const { cartItems, cartTotal, updateQuantity, removeFromCart, clearCart } = useCart();

  const freeShippingLeft = Math.max(0, 2000 - cartTotal);

  const orderOnWhatsApp = () => {
    if (cartItems.length === 0) return;
    const itemsList = cartItems
      .map(item => `• ${item.name} x${item.quantity} — Rs. ${item.price.toLocaleString()}`)
      .join('\n');
    const msg = encodeURIComponent(
      `Hi Luxara! I want to place an order:\n\n${itemsList}\n\nSubtotal: Rs. ${cartTotal.toLocaleString()}\n\nPlease confirm & share delivery details. Thank you!`
    );
    window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
    onClose();
  };

  return (
    <>
      {/* Backdrop */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/40 backdrop-blur-sm z-[90]"
          onClick={onClose}
        />
      )}

      {/* Sidebar Panel */}
      <div className={`fixed top-0 right-0 h-full w-full max-w-[420px] bg-white z-[95] flex flex-col
                       shadow-2xl transition-transform duration-500 ease-in-out
                       ${isOpen ? 'translate-x-0' : 'translate-x-full'}`}>

        {/* Header */}
        <div className="flex items-center justify-between px-6 py-5 border-b border-gray-100">
          <div className="flex items-center gap-3">
            <ShoppingBag size={20} className="text-gray-700" />
            <h2 className="font-serif text-xl text-gray-900">Your Cart</h2>
            {cartItems.length > 0 && (
              <span className="bg-yellow-600 text-white text-xs rounded-full w-5 h-5 flex items-center justify-center font-bold">
                {cartItems.reduce((s, i) => s + i.quantity, 0)}
              </span>
            )}
          </div>
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors p-1">
            <X size={22} />
          </button>
        </div>

        {/* Free Shipping Progress */}
        {cartItems.length > 0 && (
          <div className="px-6 py-3 bg-[#fafaf8] border-b border-gray-100">
            {freeShippingLeft > 0 ? (
              <p className="text-xs text-gray-500">
                Add <span className="text-yellow-600 font-semibold">Rs. {freeShippingLeft.toLocaleString()}</span> more for free shipping
              </p>
            ) : (
              <p className="text-xs text-green-600 font-medium">✓ You've unlocked free shipping!</p>
            )}
            <div className="mt-2 h-1 bg-gray-200 rounded-full overflow-hidden">
              <div
                className="h-full bg-yellow-500 rounded-full transition-all duration-500"
                style={{ width: `${Math.min(100, (cartTotal / 2000) * 100)}%` }}
              />
            </div>
          </div>
        )}

        {/* Cart Items */}
        <div className="flex-1 overflow-y-auto">
          {cartItems.length === 0 ? (
            <div className="flex flex-col items-center justify-center h-full text-center px-8">
              <ShoppingBag size={48} className="text-gray-100 mb-4" />
              <p className="font-serif text-2xl text-gray-300 mb-2">Your cart is empty</p>
              <p className="text-sm text-gray-400 mb-8">Add some beautiful pieces to get started.</p>
              <button
                onClick={onClose}
                className="bg-black text-white px-8 py-3 text-[11px] uppercase tracking-widest hover:bg-yellow-600 transition-colors"
              >
                Continue Shopping
              </button>
            </div>
          ) : (
            <div className="px-6 py-4 space-y-4">
              {cartItems.map((item) => (
                <div key={item.id} className="flex gap-4 py-4 border-b border-gray-50">
                  <div className="w-20 h-20 bg-gray-100 overflow-hidden shrink-0">
                    <img src={item.image} alt={item.name} className="w-full h-full object-cover" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <p className="text-sm font-medium text-gray-900 leading-snug mb-0.5 truncate">{item.name}</p>
                    <p className="text-xs text-gray-400 mb-1">{item.finish}</p>
                    <p className="text-sm font-semibold text-gray-900 mb-3">Rs. {item.price.toLocaleString()}</p>
                    <div className="flex items-center gap-3">
                      <div className="flex items-center border border-gray-200">
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity - 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          <Minus size={12} />
                        </button>
                        <span className="w-8 text-center text-sm font-medium">{item.quantity}</span>
                        <button
                          onClick={() => updateQuantity(item.id, item.quantity + 1)}
                          className="w-7 h-7 flex items-center justify-center text-gray-500 hover:bg-gray-50 transition-colors"
                        >
                          <Plus size={12} />
                        </button>
                      </div>
                      <button
                        onClick={() => removeFromCart(item.id)}
                        className="text-gray-300 hover:text-red-400 transition-colors"
                      >
                        <Trash2 size={14} />
                      </button>
                    </div>
                  </div>
                </div>
              ))}
            </div>
          )}
        </div>

        {/* Footer */}
        {cartItems.length > 0 && (
          <div className="px-6 py-6 border-t border-gray-100 space-y-4 bg-white">
            <div className="flex justify-between items-center">
              <span className="text-sm text-gray-500 uppercase tracking-wider">Subtotal</span>
              <span className="font-serif text-xl font-medium text-gray-900">
                Rs. {cartTotal.toLocaleString()}
              </span>
            </div>
            <p className="text-xs text-gray-400">
              Shipping (Rs. 200) calculated at checkout. COD available.
            </p>
            <button
              onClick={orderOnWhatsApp}
              className="w-full bg-[#25D366] text-white py-4 text-[11px] uppercase tracking-widest
                         font-semibold hover:bg-[#20ba58] transition-colors flex items-center justify-center gap-2"
            >
              <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
                <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
              </svg>
              Order on WhatsApp
            </button>
            <button
              onClick={onClose}
              className="w-full border border-gray-200 py-3 text-[11px] uppercase tracking-widest
                         text-gray-500 hover:bg-gray-50 transition-colors"
            >
              Continue Shopping
            </button>
          </div>
        )}
      </div>
    </>
  );
};

export default CartSidebar;
