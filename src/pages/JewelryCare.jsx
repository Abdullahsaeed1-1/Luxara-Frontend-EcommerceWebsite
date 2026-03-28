import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

import CareHero from '../components/care/CareHero';
import CareTips from '../components/care/CareTips';
import FaqSection from '../components/home/FaqSection';

const JewelryCare = () => {
  return (
    <div className="bg-white">
      <AnnouncementBar />
      <Navbar />
      <CareHero />
      <CareTips />
      <FaqSection />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default JewelryCare;