
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import LabHero from '@/components/lab/LabHero';
import LabFeatures from '@/components/lab/LabFeatures';
import LabInstructions from '@/components/lab/LabInstructions';
import CTASection from '@/components/home/CTASection';
import { Helmet } from 'react-helmet-async';

const Lab = () => {
  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DevOps Practical Lab - Hands-on Experience | Zenith DevStack</title>
        <meta name="description" content="Get hands-on experience with our DevOps lab environment. Practice with real tools like Docker, Kubernetes, Jenkins, and AWS services in a guided environment." />
        <meta name="keywords" content="DevOps lab, hands-on training, practical DevOps, Docker practice, Kubernetes lab, AWS hands-on" />
        <link rel="canonical" href="https://zenithdevstack.com/lab" />
        {/* Open Graph / Facebook */}
        <meta property="og:type" content="website" />
        <meta property="og:url" content="https://zenithdevstack.com/lab" />
        <meta property="og:title" content="DevOps Practical Lab - Hands-on Experience | Zenith DevStack" />
        <meta property="og:description" content="Get hands-on experience with our DevOps lab environment. Practice with real tools in a guided environment." />
      </Helmet>
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
