// =============================================
// TRACK HERO — src/components/track/TrackHero.jsx
//
// YEH KYA HAI:
// Track Order page ke upar wala hero section
// "Track Your Order" heading wala hissa
//
// KAHAN USE HOTA HAI:
// src/pages/TrackOrder.jsx mein import hoga
//
// CHANGE KARNA HO TO:
// - Heading change → h1 tag edit karo
// - Label change → pehli <p> tag edit karo
// =============================================

import React from 'react';

const TrackHero = () => {
  return (
    <div className="pt-32 pb-12 bg-[#fafaf8] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Chhota label — "Delivery" */}
        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Delivery
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl text-gray-900 font-light">
          Track Your{' '}
          <span className="italic text-yellow-600">Order</span>
        </h1>

      </div>
    </div>
  );
};

export default TrackHero;