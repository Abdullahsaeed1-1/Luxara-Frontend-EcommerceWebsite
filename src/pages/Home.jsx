import React from 'react';
import Navbar from '../components/Navbar';
import Hero from '../components/home/Hero';
import FeaturesStrip from '../components/home/FeaturesStrip';
import Categories from '../components/home/Categories';
import BestSellers from '../components/home/BestSellers'; // <--- Naya Product Grid
import ProductSpotlight from '../components/home/ProductSpotlight';
import Gallery from '../components/home/Gallery';         // <--- Nayi Gallery
import BrandStory from '../components/home/BrandStory';
import FaqSection from '../components/home/FaqSection';   // <--- Naya FAQ
import Testimonials from '../components/home/Testimonials';
import PromoCarousel from '../components/home/PromoCarousel';

const Home = () => {
  return (
    <div className="bg-white">
      <Navbar />
      <Hero />
      <PromoCarousel />
      <FeaturesStrip />       
      <Categories />          
      <BestSellers />          {/* Product Grid Yahan Hai */}
      <ProductSpotlight />    
      <Gallery />              {/* Instagram Style Gallery */}
      <BrandStory />          
      <Testimonials />        
      <FaqSection />           {/* Questions Section */}
    
    </div>
  );
};

export default Home;