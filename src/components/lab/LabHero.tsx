
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LabHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-gray-900 to-brand-900 relative overflow-hidden">
      {/* Background pattern */}
      <div className="absolute inset-0 opacity-10">
        <svg width="100%" height="100%" viewBox="0 0 100 100" preserveAspectRatio="none">
          <defs>
            <pattern id="grid" width="8" height="8" patternUnits="userSpaceOnUse">
              <path d="M 8 0 L 0 0 0 8" fill="none" stroke="white" strokeWidth="0.5" />
            </pattern>
          </defs>
          <rect width="100%" height="100%" fill="url(#grid)" />
        </svg>
      </div>

      <div className="container px-4 md:px-6 relative">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            DevOps Practice Lab
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Get hands-on experience with real-world DevOps tools and infrastructure in our fully managed cloud environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-brand-500 text-white hover:bg-brand-600 text-lg py-6 px-8" asChild>
              <Link to="/pricing">Access Labs Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              View Lab Documentation
            </Button>
          </div>
        </div>
      </div>

      {/* Glowing orbs */}
      <div className="absolute -left-10 top-10 w-40 h-40 bg-brand-600/40 rounded-full blur-3xl"></div>
      <div className="absolute -right-10 bottom-10 w-40 h-40 bg-brand-400/30 rounded-full blur-3xl"></div>
    </section>
  );
};

export default LabHero;
