import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { Instagram, Facebook, CreditCard, ArrowRight } from 'lucide-react';

// Threads icon (SVG - Lucide mein nahi hai)
const ThreadsIcon = () => (
  <svg viewBox="0 0 192 192" fill="currentColor" width="20" height="20">
    <path d="M141.537 88.9883C140.71 88.5919 139.87 88.2104 139.019 87.8451C137.537 60.5382 122.616 44.905 97.5619 44.745C97.4484 44.7443 97.3355 44.7443 97.222 44.7443C82.2364 44.7443 69.7731 51.1409 62.102 62.7807L75.881 72.2328C81.6116 63.5383 90.6052 61.6848 97.2286 61.6848C97.3051 61.6848 97.3819 61.6848 97.4576 61.6855C105.372 61.7381 111.428 64.1255 115.565 68.7984C118.574 72.2014 120.596 76.8505 121.62 82.6937C114.969 81.6067 107.758 81.2886 100.098 81.7496C76.8283 83.1192 62.2198 96.6738 63.0934 115.027C63.5367 124.348 68.2826 132.329 76.4536 137.609C83.3303 142.085 92.1252 144.27 101.254 143.787C113.392 143.141 122.893 138.35 129.474 129.542C134.479 122.789 137.587 114.061 138.769 103.113C144.152 106.329 148.137 110.704 150.39 116.146C154.28 125.603 154.531 141.035 142.998 152.509C133.003 162.449 121.002 166.637 103.028 166.761C83.0842 166.621 67.7672 160.481 57.5278 148.513C47.9395 137.26 42.9926 120.975 42.8244 100.163C42.9926 79.3506 47.9395 63.0655 57.5278 51.8124C67.7666 39.8444 83.0836 33.7038 103.028 33.5645C123.095 33.7054 138.557 39.8707 149.02 52.0193C154.166 57.9829 157.966 65.3498 160.376 73.8608L176.053 69.4686C173.088 58.4982 168.175 49.0313 161.334 41.1416C148.268 26.0239 129.36 18.2093 103.083 18.0005C76.7257 18.2093 57.9565 26.0763 45.0623 41.3042C33.5438 54.9536 27.6038 74.2699 27.4172 99.9887L27.4166 100.163L27.4172 100.337C27.6038 126.056 33.5438 145.372 45.0623 158.022C57.9565 173.25 76.7257 181.117 103.083 181.326C122.906 181.183 138.558 175.953 150.051 164.52C166.377 148.267 165.762 127.535 160.177 113.708C156.22 103.677 148.849 95.5857 141.537 88.9883ZM100.35 126.783C89.2423 127.388 77.7271 122.383 77.1964 112.072C76.8058 104.348 82.6158 95.5909 101.287 94.4928C103.655 94.3527 105.979 94.2853 108.261 94.2853C114.68 94.2853 120.724 94.9181 126.287 96.1452C124.214 120.438 111.429 126.174 100.35 126.783Z"/>
  </svg>
);

const Footer = () => {
  const [email, setEmail] = useState('');
  const [subscribed, setSubscribed] = useState(false);

  return (
    <footer className="bg-[#1a1a1a] text-white pt-16 pb-8 border-t border-gray-800">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">

          {/* Brand */}
          <div className="space-y-6">
            <Link to="/">
              <h2 className="text-3xl font-bold font-serif tracking-wider">
                Luxara<span className="text-yellow-600">.</span>
              </h2>
            </Link>
            <p className="text-gray-400 text-sm leading-relaxed">
              Premium anti-tarnish jewelry. Waterproof. Skin-safe. Everyday luxury.
            </p>
            <div className="flex space-x-5">
              <a href="https://www.instagram.com/luxaraa.pk" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Instagram size={20} />
              </a>
              <a href="https://www.facebook.com/profile.php?id=61578734463291" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-yellow-600 transition-colors">
                <Facebook size={20} />
              </a>
              <a href="https://www.threads.com/@luxaraa.pk" target="_blank" rel="noreferrer"
                 className="text-gray-400 hover:text-yellow-600 transition-colors">
                <ThreadsIcon />
              </a>
            </div>
          </div>

          {/* Shop */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-yellow-600">Shop</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/new-arrivals" className="hover:text-white transition-colors">New Arrivals</Link></li>
              <li><Link to="/shop"         className="hover:text-white transition-colors">Shop All</Link></li>
              <li><Link to="/shop?category=Bracelets" className="hover:text-white transition-colors">Bracelets</Link></li>
              <li><Link to="/shop?category=Pendants"  className="hover:text-white transition-colors">Pendants</Link></li>
              <li><Link to="/gift-sets"    className="hover:text-white transition-colors">Gift Sets</Link></li>
              <li><Link to="/our-story"    className="hover:text-white transition-colors">Our Story</Link></li>
            </ul>
          </div>

          {/* Support */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-yellow-600">Support</h3>
            <ul className="space-y-4 text-sm text-gray-400">
              <li><Link to="/track-order"  className="hover:text-white transition-colors">Track Order</Link></li>
              <li><Link to="/contact"      className="hover:text-white transition-colors">Shipping & Returns</Link></li>
              <li><Link to="/jewelry-care" className="hover:text-white transition-colors">Jewelry Care</Link></li>
              <li><Link to="/faqs"         className="hover:text-white transition-colors">FAQs</Link></li>
              <li><Link to="/contact"      className="hover:text-white transition-colors">Contact Us</Link></li>
              <li><Link to="/about"        className="hover:text-white transition-colors">About Luxara</Link></li>
            </ul>
          </div>

          {/* Newsletter */}
          <div>
            <h3 className="text-xs font-bold uppercase tracking-widest mb-6 text-yellow-600">Newsletter</h3>
            <p className="text-gray-400 text-sm mb-4">Subscribe for new drops and exclusive deals.</p>
            {!subscribed ? (
              <div className="relative">
                <input
                  type="email"
                  value={email}
                  onChange={(e) => setEmail(e.target.value)}
                  onKeyDown={(e) => e.key === 'Enter' && email && setSubscribed(true)}
                  placeholder="Enter your email"
                  className="w-full bg-transparent border-b border-gray-700 py-3 text-sm text-white focus:outline-none focus:border-yellow-600 placeholder-gray-500 transition-colors"
                />
                <button
                  onClick={() => email && setSubscribed(true)}
                  className="absolute right-0 top-3 text-gray-400 hover:text-yellow-600 transition-colors"
                >
                  <ArrowRight size={20} />
                </button>
              </div>
            ) : (
              <p className="text-green-400 text-sm">✓ You're subscribed!</p>
            )}
          </div>

        </div>

        <div className="border-t border-gray-800 my-8" />

        <div className="flex flex-col md:flex-row justify-between items-center text-xs text-gray-500 space-y-4 md:space-y-0">
          <div>&copy; 2025 Luxara. All rights reserved.</div>
          <div className="flex space-x-6">
            <Link to="/contact" className="hover:text-white transition-colors">Privacy Policy</Link>
            <Link to="/contact" className="hover:text-white transition-colors">Terms of Service</Link>
          </div>
          <div className="flex items-center space-x-2">
            <span>Secure Payment:</span>
            <CreditCard size={18} />
            <span className="font-serif italic">Visa</span>
            <span className="font-serif italic">Mastercard</span>
          </div>
        </div>

      </div>
    </footer>
  );
};

export default Footer;