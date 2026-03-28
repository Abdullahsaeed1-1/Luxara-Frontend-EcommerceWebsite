import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { CartProvider } from './context/CartContext';
import ScrollToTop from './components/ScrollToTop';

// Pages
import Home from './pages/Home';
import ShopAll from './pages/ShopAll';
import NewArrivals from './pages/NewArrivals';
import GiftSets from './pages/GiftSets';
import AboutUs from './pages/AboutUs';
import Contact from './pages/Contact';
import FAQPage from './pages/FAQPage';
import JewelryCare from './pages/JewelryCare';
import TrackOrder from './pages/TrackOrder';
import BrandLegacy from './pages/BrandLegacy';

import './App.css';

function App() {
  return (
    <CartProvider>
      <Router>
        <ScrollToTop />
        <Routes>
          <Route path="/"              element={<Home />} />
          <Route path="/shop"          element={<ShopAll />} />
          <Route path="/new-arrivals"  element={<NewArrivals />} />
          <Route path="/gift-sets"     element={<GiftSets />} />
          <Route path="/about"         element={<AboutUs />} />
          <Route path="/contact"       element={<Contact />} />
          <Route path="/faqs"          element={<FAQPage />} />
          <Route path="/jewelry-care"  element={<JewelryCare />} />
          <Route path="/track-order"   element={<TrackOrder />} />
          <Route path="/our-story"     element={<BrandLegacy />} />

          {/* 404 fallback */}
          <Route path="*" element={<Home />} />
        </Routes>
      </Router>
    </CartProvider>
  );
}

export default App;