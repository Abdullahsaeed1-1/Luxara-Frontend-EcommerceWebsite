import React from 'react';

// Layout Components
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementBar from '../components/AnnouncementBar';   // ✅ NAYA
import WhatsAppButton from '../components/WhatsAppButton';     // ✅ NAYA

// Home Sections
import Hero from '../components/home/Hero';
import PromoCarousel from '../components/home/PromoCarousel';
import FeaturesStrip from '../components/home/FeaturesStrip';
import Categories from '../components/home/Categories';
import BestSellers from '../components/home/BestSellers';
import ProductSpotlight from '../components/home/ProductSpotlight';
import Gallery from '../components/home/Gallery';
import BrandStory from '../components/home/BrandStory';
import Testimonials from '../components/home/Testimonials';
import WhyChooseUs from '../components/home/WhyChooseUs';
import NewsletterSection from '../components/home/NewsletterSection'; // ✅ NAYA
import FaqSection from '../components/home/FaqSection';

// ==========================================
// HOME PAGE — COMPLETE STRUCTURE
//
// Order:
// 1. AnnouncementBar  → Top strip (shipping/offers)
// 2. Navbar           → Fixed navigation
// 3. Hero             → Full screen hero image
// 4. PromoCarousel    → Banner slider
// 5. FeaturesStrip    → 4 trust icons
// 6. Categories       → Shop by category grid
// 7. BestSellers      → Product grid
// 8. ProductSpotlight → Single featured product
// 9. Gallery          → Instagram grid
// 10. BrandStory      → Our story section
// 11. Testimonials    → Customer reviews
// 12. NewsletterSection → Email signup
// 13. FaqSection      → Questions
// 14. Footer          → Links, social, copyright
// 15. WhatsAppButton  → Floating order button
// ==========================================

const Home = () => {
  return (
    <div className="bg-white">
      
      {/* ── TOP BAR ── */}
      <AnnouncementBar />
      
      {/* ── NAVIGATION ── */}
      <Navbar />

      {/* ── HERO ── */}
      <Hero />

      {/* ── PROMO BANNERS ── */}
      <PromoCarousel />

      {/* ── TRUST ICONS ── */}
      <FeaturesStrip />

      {/* ── SHOP BY CATEGORY ── */}
      <Categories />

      {/* ── PRODUCT GRID ── */}
      <BestSellers />

      {/* ── INSTAGRAM GALLERY ── */}
      <Gallery />

      {/* ── BRAND STORY ── */}
      <BrandStory />

      {/* ── REVIEWS ── */}
      <Testimonials />

      {/* ── WHY CHOOSE US ── */}
      <WhyChooseUs />

      {/* ── SIGNATURE COLLECTION ── */}
      <ProductSpotlight />

      {/* ── EMAIL SIGNUP ── */}
      <NewsletterSection />

      {/* ── FAQ ── */}
      <FaqSection />

      {/* ── FOOTER ── */}
      <Footer />

      {/* ── FLOATING WHATSAPP ── */}
      <WhatsAppButton />

    </div>
  );
};

export default Home;
