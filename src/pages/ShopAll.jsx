// ============================================================
// SHOP ALL PAGE — src/pages/ShopAll.jsx
//
// YEH KYA HAI:
// Main shop page — sab products dikhata hai with filters
// Route: /shop
//
// IS PAGE MEIN KYA HAI:
// 1. AnnouncementBar  → announcement
// 2. Navbar           → navigation
// 3. ShopHero         → "Shop All Jewelry" heading
// 4. ShopFilterBar    → categories, search, sort, finish filters
// 5. ProductCard grid → filtered products
// 6. Empty state      → agar koi product na mile
// 7. Bottom CTA       → WhatsApp chat button
// 8. Footer
// 9. WhatsAppButton
// 10. QuickView modal
//
// FILTERING LOGIC:
// useMemo hook mein hai — yeh tab hi recalculate hoti hai jab
// filters change hon (performance ke liye)
//
// WHATSAPP NUMBER:
// Agar change karna ho → WHATSAPP_NUMBER constant edit karo (line 28)
// ============================================================

import React, { useState, useMemo } from 'react';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import AnnouncementBar from '../components/AnnouncementBar';
import WhatsAppButton from '../components/WhatsAppButton';
import QuickView from '../components/QuickView';
import ShopHero from '../components/shop/ShopHero';
import ShopFilterBar from '../components/shop/ShopFilterBar';
import RingsAndOthers from '../components/shop/RingsAndOthers';
import ProductCard from '../components/shop/ProductCard';
import { ALL_PRODUCTS } from '../data/products';

// ← SAHI NUMBER — pehle galat tha (923001234567)
const WHATSAPP_NUMBER = "923147253080";

const ShopAll = () => {
  // ── Filter States ──
  // Har state ek filter ka current value hold karta hai
  const [activeCategory, setActiveCategory] = useState("All");
  const [activeFinish,   setActiveFinish]   = useState("All");
  const [sortBy,         setSortBy]         = useState("popular");
  const [searchQuery,    setSearchQuery]    = useState("");
  const [quickProduct,   setQuickProduct]   = useState(null);

  // ── FILTERING + SORTING LOGIC ──
  // useMemo: sirf tab recalculate hoga jab koi dependency change ho
  // Dependencies: [activeCategory, activeFinish, sortBy, searchQuery]
  const filteredProducts = useMemo(() => {
    let products = [...ALL_PRODUCTS]; // original array copy karo (mutate mat karo)

    // 1. Search filter
    if (searchQuery) {
      const q = searchQuery.toLowerCase();
      products = products.filter(p =>
        p.name.toLowerCase().includes(q) ||
        p.category.toLowerCase().includes(q)
      );
    }

    // 2. Category filter
    if (activeCategory !== "All") {
      products = products.filter(p => p.category === activeCategory);
    }

    // 3. Finish filter
    if (activeFinish !== "All") {
      products = products.filter(p => p.finish === activeFinish);
    }

    // 4. Sort
    if (sortBy === "newest") {
      // New arrivals pehle
      products = products.filter(p => p.isNew).concat(products.filter(p => !p.isNew));
    } else if (sortBy === "price-low") {
      products.sort((a, b) => a.price - b.price);
    } else if (sortBy === "price-high") {
      products.sort((a, b) => b.price - a.price);
    }
    // "popular" ke liye koi sort nahi — original order hi hai

    return products;
  }, [activeCategory, activeFinish, sortBy, searchQuery]);

  return (
    <div className="bg-white min-h-screen">
      <AnnouncementBar />
      <Navbar />

      {/* 1. Hero Section */}
      <ShopHero />

      {/* 1.5 Rings & Others Featured Section */}
      <RingsAndOthers onQuickView={setQuickProduct} variant="shop" />

      {/* 2. Filter Bar — state aur setters dono pass karo */}
      <ShopFilterBar
        activeCategory={activeCategory}
        setActiveCategory={setActiveCategory}
        activeFinish={activeFinish}
        setActiveFinish={setActiveFinish}
        sortBy={sortBy}
        setSortBy={setSortBy}
        searchQuery={searchQuery}
        setSearchQuery={setSearchQuery}
        filteredCount={filteredProducts.length}
      />

      {/* 3. Products Grid */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 pb-16">

        {filteredProducts.length > 0 ? (
          /* Products mili → grid dikhao
             variant="shop" → white badge (NewArrivals pe "new" hota hai)
          */
          <div className="grid grid-cols-2 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6 md:gap-10">
            {filteredProducts.map(product => (
              <ProductCard
                key={product.id}
                product={product}
                onQuickView={setQuickProduct}
                variant="shop"   // white badge style
              />
            ))}
          </div>
        ) : (
          /* Koi product na mile → empty state dikhao */
          <div className="text-center py-24">
            <p className="font-serif text-2xl text-gray-300 mb-3">No pieces found</p>
            <p className="text-sm text-gray-400 mb-6">Try changing your filters.</p>
            <button
              onClick={() => {
                setActiveCategory("All");
                setActiveFinish("All");
                setSearchQuery("");
              }}
              className="text-[11px] uppercase tracking-widest border-b border-gray-400 pb-0.5
                         hover:text-yellow-600 hover:border-yellow-600 transition-colors"
            >
              Clear all filters
            </button>
          </div>
        )}

      </div>

      {/* 4. Bottom CTA — WhatsApp */}
      <div className="bg-[#0f0d0b] py-16 px-4 mt-4 text-center">

        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] mb-3">
          Not sure what to pick?
        </p>

        <h2 className="font-serif text-2xl md:text-3xl text-white font-light mb-4">
          Talk to us on WhatsApp
        </h2>

        <p className="text-gray-400 text-sm mb-7 max-w-sm mx-auto leading-relaxed">
          Tell us your budget and occasion — we'll help you find the perfect piece.
        </p>

        <button
          onClick={() => {
            const msg = encodeURIComponent(
              "Hi Luxara! I need help choosing a piece. Can you help me?"
            );
            window.open(`https://wa.me/${WHATSAPP_NUMBER}?text=${msg}`, '_blank');
          }}
          className="inline-flex items-center gap-2 bg-yellow-600 text-white px-8 py-3.5
                     text-[11px] uppercase tracking-widest hover:bg-yellow-500 transition-colors"
        >
          <svg viewBox="0 0 24 24" fill="white" width="16" height="16">
            <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413z"/>
          </svg>
          Chat with Luxara
        </button>

      </div>

      <Footer />
      <WhatsAppButton />

      {/* QuickView Modal */}
      <QuickView product={quickProduct} onClose={() => setQuickProduct(null)} />
    </div>
  );
};

export default ShopAll;