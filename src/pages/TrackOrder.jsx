// =============================================
// TRACK ORDER PAGE — src/pages/TrackOrder.jsx
//
// YEH KYA HAI:
// Track Order page — order track karne wala page
//
// IS PAGE MEIN KYA HAI:
// 1. AnnouncementBar — upar wala announcement
// 2. Navbar          — navigation
// 3. TrackHero       — "Track Your Order" heading (components/track/TrackHero.jsx)
// 4. TrackForm       — actual tracking form (components/track/TrackForm.jsx)
// 5. Footer          — footer
// 6. WhatsAppButton  — floating button
//
// TRACKING KE BAARE MEIN:
// Abhi sirf UI demo hai — real TCS/Leopard API baad mein connect hogi
// TrackForm.jsx mein TODO comment hai
// =============================================

import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';
import TrackHero from '../components/track/TrackHero';   // ← apni file mein aa gaya
import TrackForm from '../components/track/TrackForm';

const TrackOrder = () => {
  return (
    <div className="bg-white">
      <AnnouncementBar />
      <Navbar />
      <TrackHero />
      <TrackForm />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default TrackOrder;