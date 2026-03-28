import React, { useState, useEffect, useRef } from 'react';
import { X, Search, ArrowRight } from 'lucide-react';
import { Link } from 'react-router-dom';
import { ALL_PRODUCTS } from '../data/products';

const QUICK_SEARCHES = ["Pendants", "Earrings", "Rings", "Gift Sets", "Gold", "Silver"];

const SearchModal = ({ isOpen, onClose }) => {
  const [query,   setQuery]   = useState('');
  const [results, setResults] = useState([]);
  const inputRef = useRef(null);

  useEffect(() => {
    if (isOpen) {
      setTimeout(() => inputRef.current?.focus(), 100);
      document.body.style.overflow = 'hidden';
    } else {
      document.body.style.overflow = '';
      setQuery('');
      setResults([]);
    }
    return () => { document.body.style.overflow = ''; };
  }, [isOpen]);

  useEffect(() => {
    const handleKey = (e) => { if (e.key === 'Escape') onClose(); };
    window.addEventListener('keydown', handleKey);
    return () => window.removeEventListener('keydown', handleKey);
  }, [onClose]);

  useEffect(() => {
    if (!query.trim()) { setResults([]); return; }
    const q = query.toLowerCase();
    setResults(
      ALL_PRODUCTS.filter(p =>
        p.name.toLowerCase().includes(q) || p.category.toLowerCase().includes(q) || p.finish.toLowerCase().includes(q)
      )
    );
  }, [query]);

  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 z-[100] flex flex-col">
      <div className="absolute inset-0 bg-black/60 backdrop-blur-sm" onClick={onClose} />

      <div className="relative bg-white w-full shadow-2xl z-10 max-h-[90vh] flex flex-col">

        {/* Input */}
        <div className="flex items-center gap-4 px-6 md:px-12 py-5 border-b border-gray-100">
          <Search size={20} className="text-gray-400 shrink-0" />
          <input
            ref={inputRef}
            type="text"
            value={query}
            onChange={e => setQuery(e.target.value)}
            placeholder="Search jewelry, categories..."
            className="flex-1 text-lg md:text-xl text-gray-900 placeholder-gray-300 focus:outline-none font-light"
          />
          <button onClick={onClose} className="text-gray-400 hover:text-gray-900 transition-colors p-2">
            <X size={22} />
          </button>
        </div>

        {/* Content */}
        <div className="overflow-y-auto flex-1 px-6 md:px-12 py-8">

          {/* No query */}
          {!query && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-5">Quick Search</p>
              <div className="flex flex-wrap gap-2">
                {QUICK_SEARCHES.map(term => (
                  <button
                    key={term}
                    onClick={() => setQuery(term)}
                    className="px-4 py-2 border border-gray-200 text-sm text-gray-600
                               hover:border-yellow-500 hover:text-yellow-600 transition-colors"
                  >
                    {term}
                  </button>
                ))}
              </div>

              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mt-10 mb-5">Popular Right Now</p>
              <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
                {ALL_PRODUCTS.filter(p => p.tag === 'Best Seller' || p.tag === 'Trending').slice(0, 4).map(p => (
                  <Link key={p.id} to="/shop" onClick={onClose} className="group cursor-pointer">
                    <div className="aspect-square overflow-hidden bg-gray-50 mb-2">
                      <img src={p.image} alt={p.name}
                        className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      />
                    </div>
                    <p className="text-xs font-medium text-gray-800 group-hover:text-yellow-600 transition-colors leading-snug">{p.name}</p>
                    <p className="text-xs text-gray-400 mt-0.5">Rs. {p.price.toLocaleString()}</p>
                  </Link>
                ))}
              </div>
            </div>
          )}

          {/* Has query */}
          {query && (
            <div>
              <p className="text-[10px] uppercase tracking-[0.3em] text-gray-400 font-medium mb-5">
                {results.length} result{results.length !== 1 ? 's' : ''} for "{query}"
              </p>

              {results.length > 0 ? (
                <>
                  <div className="space-y-3">
                    {results.map(p => (
                      <Link key={p.id} to="/shop" onClick={onClose}
                        className="flex items-center gap-4 p-3 hover:bg-gray-50 transition-colors group"
                      >
                        <div className="w-14 h-14 overflow-hidden bg-gray-100 shrink-0">
                          <img src={p.image} alt={p.name}
                            className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                          />
                        </div>
                        <div className="flex-1 min-w-0">
                          <p className="text-sm font-medium text-gray-900 group-hover:text-yellow-600 transition-colors truncate">
                            {p.name}
                          </p>
                          <p className="text-xs text-gray-400">{p.category} · {p.finish} · Rs. {p.price.toLocaleString()}</p>
                        </div>
                        <ArrowRight size={16} className="text-gray-300 group-hover:text-yellow-500 transition-colors shrink-0" />
                      </Link>
                    ))}
                  </div>
                  <div className="mt-6 pt-6 border-t border-gray-100 text-center">
                    <Link
                      to="/shop"
                      onClick={onClose}
                      className="inline-flex items-center gap-2 text-[11px] uppercase tracking-widest
                                 border-b border-gray-300 pb-0.5 hover:text-yellow-600 hover:border-yellow-600 transition-colors"
                    >
                      View all results <ArrowRight size={12} />
                    </Link>
                  </div>
                </>
              ) : (
                <div className="text-center py-12">
                  <p className="font-serif text-2xl text-gray-200 mb-2">No results found</p>
                  <p className="text-sm text-gray-400">Try "rings", "gold", or "gift sets"</p>
                </div>
              )}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default SearchModal;