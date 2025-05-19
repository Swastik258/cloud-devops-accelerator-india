
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LabHero from '@/components/lab/LabHero';
import LabFeatures from '@/components/lab/LabFeatures';
import LabInstructions from '@/components/lab/LabInstructions';
import CTASection from '@/components/home/CTASection';

const Lab = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      <main className="flex-grow">
        <LabHero />
        <LabFeatures />
        <LabInstructions />
        <CTASection />
      </main>
      <Footer />
    </div>
  );
};

export default Lab;
