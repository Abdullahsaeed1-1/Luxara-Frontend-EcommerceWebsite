import React, { useState, useEffect } from 'react';
import { ShoppingBag, Menu, X, Search, User } from 'lucide-react';
// IMPORTANT: Logo ko yahan import karna lazmi hai
import logoImg from '../assets/logo.png'; // <-- Apni file ka naam check kar lena

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  // Scroll detect logic
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setScrolled(true);
      } else {
        setScrolled(false);
      }
    };
    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  return (
    <nav 
      className={`fixed top-0 w-full z-50 transition-all duration-300 ease-in-out ${
        scrolled 
          ? 'bg-white/95 backdrop-blur-md shadow-sm py-2' // Thora blur effect add kiya premium feel ke liye
          : 'bg-transparent py-4'
      }`}
    >
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          
          {/* Mobile Menu Button */}
          <div className="flex items-center md:hidden">
            <button 
              onClick={() => setIsOpen(!isOpen)} 
              className={`${scrolled ? 'text-gray-900' : 'text-white'} hover:text-yellow-500 transition-colors`}
            >
              {isOpen ? <X size={24} /> : <Menu size={24} />}
            </button>
          </div>

          {/* LOGO SECTION (Updated) */}
          <div className="flex-shrink-0 flex items-center justify-center md:justify-start flex-1 md:flex-none gap-3">
            
            {/* Round Logo Container */}
            <div className={`h-11 w-11 rounded-full overflow-hidden border-[1.5px] transition-all duration-300 p-0.5 ${
                scrolled 
                  ? 'border-yellow-600 shadow-sm' // Scroll pe Gold border
                  : 'border-white/70'             // Top pe White transparent border
              }`}>
                <img 
                  src={logoImg} // <-- Imported variable use kiya
                  alt="Luxara Logo" 
                  // object-cover: image ko katne nahi dega, fit karega
                  className="h-full w-full object-cover rounded-full" 
                />
            </div>
            
            {/* Logo Text */}
            <h1 className={`text-2xl font-bold tracking-[0.2em] uppercase font-serif transition-colors duration-300 ${
              scrolled ? 'text-gray-900' : 'text-white'
            }`}>
              Luxara<span className="text-yellow-500">.</span>
            </h1>
          </div>

          {/* Desktop Links */}
          <div className="hidden md:flex space-x-8 items-center justify-center flex-1">
            {['Home', 'New Arrivals', 'Bracelets', 'Gift Sets'].map((item) => (
              <a 
                key={item} 
                href="#" 
                className={`text-[13px] uppercase tracking-[0.15em] font-medium transition-colors hover:text-yellow-500 relative group ${
                  scrolled ? 'text-gray-700' : 'text-white/90'
                }`}
              >
                {item}
                {/* Hover Underline Animation */}
                <span className={`absolute inset-x-0 bottom-0 h-0.5 bg-yellow-500 transform scale-x-0 group-hover:scale-x-100 transition-transform duration-300 origin-left`}></span>
              </a>
            ))}
          </div>

          {/* Right Icons */}
          <div className="flex items-center space-x-5">
            <Search className={`w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            
            <User className={`w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors hidden sm:block ${scrolled ? 'text-gray-700' : 'text-white'}`} />
            
            <div className="relative">
              <ShoppingBag className={`w-5 h-5 cursor-pointer hover:text-yellow-500 transition-colors ${scrolled ? 'text-gray-700' : 'text-white'}`} />
              <span className={`absolute -top-1.5 -right-1.5 text-[10px] font-bold rounded-full h-4 w-4 flex items-center justify-center ${
                scrolled ? 'bg-yellow-500 text-white' : 'bg-white text-black'
              }`}>
                2
              </span>
            </div>
          </div>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className="md:hidden bg-white border-t border-gray-100 absolute w-full shadow-xl">
          <div className="px-4 pt-2 pb-6 space-y-2">
            {['Home', 'New Arrivals', 'Bracelets', 'Gift Sets', 'Account'].map((item) => (
              <a key={item} href="#" className="block px-3 py-3 text-gray-900 font-medium hover:bg-gray-50 uppercase text-sm tracking-wide">
                {item}
              </a>
            ))}
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;