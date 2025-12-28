import React from 'react';
import { Facebook, Instagram, Twitter, Mail, MapPin, Phone, ArrowRight, CreditCard } from 'lucide-react';

const Footer = () => {
  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Top Section: Grid Layout */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          
          {/* Column 1: Brand Info */}
          <div className="space-y-6">
            <h2 className="text-3xl font-bold font-serif tracking-wider">
              Luxara<span className="text-yellow-600">.</span>
            </h2>
            <p className="text-gray-400 text-sm leading-relaxed">
              Elevating your style with timeless elegance. Handcrafted jewelry designed for the modern aesthetic.
            </p>
            <div className="flex space-x-5">
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="#" className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Twitter size={20} />
              </a>
            </div>
          </div>

          {/* Column 2: Quick Links */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-yellow-600">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">New Arrivals</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Best Sellers</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Bracelets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Gift Sets</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Sale</a></li>
            </ul>
          </div>

          {/* Column 3: Customer Care */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-yellow-600">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><a href="#" className="hover:text-white transition-colors">Track Order</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Shipping & Returns</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Size Guide</a></li>
              <li><a href="#" className="hover:text-white transition-colors">FAQs</a></li>
              <li><a href="#" className="hover:text-white transition-colors">Contact Us</a></li>
            </ul>
          </div>

          {/* Column 4: Newsletter */}
          <div>
            <h3 className="text-sm font-bold uppercase tracking-widest mb-6 text-yellow-600">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">
              Subscribe to receive updates, access to exclusive deals, and more.
            </p>
            <div className="relative">
              <input 
                type="email" 
                placeholder="Enter your email" 
                className="w-full bg-transparent border-b border-gray-700 py-3 text-sm text-white focus:outline-none focus:border-yellow-600 placeholder-gray-500 transition-colors"
              />
              <button className="absolute right-0 top-3 text-gray-400 hover:text-yellow-600 transition-colors">
                <ArrowRight size={20} />
              </button>
            </div>
          </div>
        </div>

        {/* Divider */}
        <div className="border-t border-gray-800 my-8"></div>

        {/* Bottom Section */}
        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          
          {/* Copyright */}
          <div>
            &copy; 2025 Luxara. All rights reserved.
          </div>

          {/* Links */}
          <div className="flex space-x-6">
            <a href="#" className="hover:text-white transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-white transition-colors">Terms of Service</a>
          </div>

          {/* Payment Methods (Icons simulation) */}
          <div className="flex items-center space-x-2">
            <span className="text-gray-600">Secure Payment:</span>
            <div className="flex space-x-2 text-gray-400">
             <CreditCard size={18} />
             <span className="font-serif italic">Visa</span>
             <span className="font-serif italic">Mastercard</span>
            </div>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;