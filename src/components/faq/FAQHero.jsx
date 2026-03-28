// =============================================
// FAQ HERO — src/components/faq/FAQHero.jsx
//
// YEH KYA HAI:
// FAQ page ke upar wala hero section
// "Frequently Asked Questions" heading wala hissa
//
// KAHAN USE HOTA HAI:
// src/pages/FAQPage.jsx mein import hoga
//
// CHANGE KARNA HO TO:
// - Heading change → h1 tag edit karo
// - "Support" label change → pehle wali <p> tag edit karo
// =============================================

import React from 'react';

const FAQHero = () => {
  return (
    <div className="pt-32 pb-12 bg-[#fafaf8] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Chhota label — "Support" */}
        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Support
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl text-gray-900 font-light">
          Frequently Asked{' '}
          <span className="italic text-yellow-600">Questions</span>
        </h1>

      </div>
    </div>
  );
};

export default FAQHero;