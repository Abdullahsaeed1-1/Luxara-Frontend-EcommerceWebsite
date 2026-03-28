import React from 'react';
import AnnouncementBar from '../components/AnnouncementBar';
import Navbar from '../components/Navbar';
import Footer from '../components/Footer';
import WhatsAppButton from '../components/WhatsAppButton';

import AboutHero from '../components/about/AboutHero';
import BrandValues from '../components/about/BrandValues';
import FounderNote from '../components/about/FounderNote';
import AboutStats from '../components/about/AboutStats';
import Testimonials from '../components/home/Testimonials';

const AboutUs = () => {
  return (
    <div className="bg-white">
      <AnnouncementBar />
      <Navbar />
      <AboutHero />
      <AboutStats />
      <BrandValues />
      <FounderNote />
      <Testimonials />
      <Footer />
      <WhatsAppButton />
    </div>
  );
};

export default AboutUs;