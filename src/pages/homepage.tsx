import React from 'react';
import Header from '../components/Header';
import HeroSection from '../components/HeroSection';
import FeaturedProperties from '../components/FeaturedProperties';
import WhyChooseUs from '../components/WhyChooseUs';
import CommunitySection from '../components/CommunitySection';
import Testimonials from '../components/Testimonials';
import CallToAction from '../components/CallToAction';
import Footer from '../components/Footer';

export default function Homepage() {
  return (
    <div className="flex flex-col min-h-screen bg-[#F5F5F5]">
      <Header />
      <main className="flex-1">
        <HeroSection />
        <FeaturedProperties />
        <WhyChooseUs />
        <CommunitySection />
        <Testimonials />
        <CallToAction />
      </main>
      <Footer />
    </div>
  );
}
