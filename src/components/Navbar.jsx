import React, { useState, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
import logoImg from '../assets/logo.png';
import SearchModal from './SearchModal';
import CartSidebar from './CartSidebar';
import { useCart } from '../context/CartContext';

const NAV_LINKS = [
  { label: 'Home',         path: '/' },
  { label: 'New Arrivals', path: '/new-arrivals' },
  { label: 'Shop All',     path: '/shop' },
  { label: 'Gift Sets',    path: '/gift-sets' },
  { label: 'About',        path: '/about' },
];

const Navbar = () => {
  const [isOpen, setIsOpen]         = useState(false);
  const [scrolled, setScrolled]     = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [cartOpen, setCartOpen]     = useState(false);

  const { cartCount } = useCart();
  const location = useLocation();

  const isHomePage    = location.pathname === '/';
  const isTransparent = isHomePage && !scrolled;

  useEffect(() => {
    const handleScroll = () => setScrolled(window.scrollY > 40);
    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => { setIsOpen(false); }, [location]);

  return (
    <>
      <nav className={`fixed top-0 w-full z-50 transition-all duration-300 ${
        isTransparent ? 'bg-transparent py-4' : 'bg-white shadow-sm py-2'
      }`}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex justify-between items-center h-16">

            {/* Mobile Burger */}
            <div className="flex items-center md:hidden">
              <button
                onClick={() => setIsOpen(!isOpen)}
                className={`hover:text-yellow-500 transition-colors ${isTransparent ? 'text-white' : 'text-gray-900'}`}
              >
                {isOpen ? <X size={24} /> : <Menu size={24} />}
              </button>
            </div>

            {/* Logo */}
            <div className="flex-1 flex items-center justify-center md:justify-start md:flex-none gap-3">
              <Link to="/" className="flex items-center gap-3">
                <div className={`h-11 w-11 rounded-full overflow-hidden border-[1.5px] p-0.5 transition-all duration-300 ${
                  isTransparent ? 'border-white/70' : 'border-yellow-600'
                }`}>
                  <img src={logoImg} alt="Luxara" className="h-full w-full object-cover rounded-full" />
                </div>
                <span className={`text-2xl font-bold tracking-[0.2em] uppercase font-serif transition-colors duration-300 ${
                  isTransparent ? 'text-white' : 'text-gray-900'
                }`}>
                  Luxara<span className="text-yellow-500">.</span>
                </span>
              </Link>
            </div>

            {/* Desktop Nav */}
            <div className="hidden md:flex items-center justify-center flex-1 space-x-8">
              {NAV_LINKS.map((item) => {
                const isActive = location.pathname === item.path;
                return (
                  <Link key={item.path} to={item.path}
                    className={`relative text-[13px] uppercase tracking-[0.15em] font-medium transition-colors group ${
                      isTransparent
                        ? isActive ? 'text-yellow-400' : 'text-white/90 hover:text-yellow-400'
                        : isActive ? 'text-yellow-600' : 'text-gray-700 hover:text-yellow-500'
                    }`}
                  >
                    {item.label}
                    <span className={`absolute inset-x-0 -bottom-1 h-0.5 bg-yellow-500 transition-transform duration-300 origin-left ${
                      isActive ? 'scale-x-100' : 'scale-x-0 group-hover:scale-x-100'
                    }`} />
                  </Link>
                );
              })}
            </div>

            {/* Right Icons */}
            <div className="flex items-center space-x-4 md:space-x-5">
              <button
                onClick={() => setSearchOpen(true)}
                className={`hover:text-yellow-500 transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}
              >
                <Search className="w-5 h-5" />
              </button>

              <button className={`hidden sm:block hover:text-yellow-500 transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}>
                <User className="w-5 h-5" />
              </button>

              <button
                onClick={() => setCartOpen(true)}
                className={`relative hover:text-yellow-500 transition-colors ${isTransparent ? 'text-white' : 'text-gray-700'}`}
              >
                <ShoppingBag className="w-5 h-5" />
                {cartCount > 0 && (
                  <span className={`absolute -top-1.5 -right-1.5 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center ${
                    isTransparent ? 'bg-white text-black' : 'bg-yellow-500 text-white'
                  }`}>
                    {cartCount}
                  </span>
                )}
              </button>
            </div>
          </div>
        </div>

        {/* Mobile Menu */}
        <div className={`md:hidden absolute w-full bg-white shadow-xl border-t border-gray-100 overflow-hidden transition-all duration-300 ${
          isOpen ? 'max-h-[600px] opacity-100' : 'max-h-0 opacity-0'
        }`}>
          <div className="px-4 pt-3 pb-6 space-y-1">
            {NAV_LINKS.map((item) => (
              <Link key={item.path} to={item.path}
                className={`block px-3 py-3.5 text-sm font-medium uppercase tracking-wide border-b border-gray-50 transition-colors ${
                  location.pathname === item.path ? 'text-yellow-600' : 'text-gray-800 hover:text-yellow-600'
                }`}
              >{item.label}</Link>
            ))}
            <div className="pt-2 space-y-1">
              {[
                { label: 'Track Order',  path: '/track-order' },
                { label: 'Contact',      path: '/contact' },
                { label: 'Jewelry Care', path: '/jewelry-care' },
                { label: 'FAQs',         path: '/faqs' },
              ].map((item) => (
                <Link key={item.path} to={item.path}
                  className="block px-3 py-3 text-sm text-gray-400 hover:text-yellow-600 transition-colors"
                >{item.label}</Link>
              ))}
            </div>
            <button
              onClick={() => { setIsOpen(false); setSearchOpen(true); }}
              className="w-full mt-2 flex items-center gap-3 px-3 py-3 border border-gray-200 text-sm text-gray-500 hover:border-yellow-500 transition-colors"
            >
              <Search size={16} /> Search products...
            </button>
          </div>
        </div>
      </nav>

      {/* Spacer for non-home pages */}
      {!isHomePage && <div className="h-[88px]" />}

      {/* Search Modal */}
      <SearchModal isOpen={searchOpen} onClose={() => setSearchOpen(false)} />

      {/* Cart Sidebar */}
      <CartSidebar isOpen={cartOpen} onClose={() => setCartOpen(false)} />
    </>
  );
};

export default Navbar;