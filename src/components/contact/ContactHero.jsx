// =============================================
// CONTACT HERO — src/components/contact/ContactHero.jsx
// 
// YEH KYA HAI:
// Contact page ke upar wala hero section
// "Let's Talk" heading wala hissa
//
// KAHAN USE HOTA HAI:
// src/pages/Contact.jsx mein import hoga
//
// CHANGE KARNA HO TO:
// - Heading change karni ho → h1 tag edit karo
// - Color change → text-yellow-600 classes edit karo
// - Background change → bg-[#fafaf8] edit karo
// =============================================

import React from 'react';

const ContactHero = () => {
  return (
    <div className="pt-32 pb-12 bg-[#fafaf8] border-b border-gray-100">
      <div className="max-w-7xl mx-auto px-6">

        {/* Upar wala chhota text — "Contact" */}
        <p className="text-yellow-600 text-[10px] uppercase tracking-[0.3em] font-medium mb-3">
          Contact
        </p>

        {/* Main heading */}
        <h1 className="font-serif text-5xl text-gray-900 font-light">
          Let's <span className="italic text-yellow-600">Talk.</span>
        </h1>

      </div>
    </div>
  );
};

export default ContactHero;