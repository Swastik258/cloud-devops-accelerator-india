
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import HeroSection from '@/components/home/HeroSection';
import WhyThisCourse from '@/components/home/WhyThisCourse';
import WhatYouWillLearn from '@/components/home/WhatYouWillLearn';
import InstructorSection from '@/components/home/InstructorSection';
import PricingSection from '@/components/home/PricingSection';
import TestimonialsSection from '@/components/home/TestimonialsSection';
import FAQSection from '@/components/home/FAQSection';
import CTASection from '@/components/home/CTASection';
import ContactSection from '@/components/home/ContactSection';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <HeroSection />
        <WhyThisCourse />
        <WhatYouWillLearn />
        <InstructorSection />
        <PricingSection />
        <TestimonialsSection />
        <FAQSection />
        <CTASection />
        <ContactSection />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
