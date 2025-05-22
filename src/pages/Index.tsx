
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
import { Helmet } from 'react-helmet-async';

const Index = () => {
  return (
    <div className="min-h-screen flex flex-col bg-gray-900 text-white">
      <Helmet>
        <title>Noxian DevForge - Master DevOps & AWS in 90 Days</title>
        <meta name="description" content="Learn DevOps and AWS with our comprehensive 3-month course designed for beginners. Master Git, Docker, Jenkins, Kubernetes, Terraform, and 12 AWS services." />
        <meta name="keywords" content="DevOps course, AWS training, cloud computing, Docker, Kubernetes, Jenkins, Terraform, DevOps certification" />
        <link rel="canonical" href="https://noxiandevforge.com/" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://noxiandevforge.com/" />
        <meta property="og:title" content="Noxian DevForge - Master DevOps & AWS in 90 Days" />
        <meta property="og:description" content="Learn DevOps and AWS with our 3-month comprehensive course. Perfect for beginners and working professionals." />
      </Helmet>
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
