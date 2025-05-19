
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LabHero = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-600 to-brand-800">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center">
          <h1 className="text-3xl md:text-5xl font-bold text-white mb-6">
            DevOps Practice Lab
          </h1>
          <p className="text-xl text-white/80 max-w-2xl mb-8">
            Get hands-on experience with real-world DevOps tools and infrastructure in our fully managed cloud environment.
          </p>
          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 text-lg py-6 px-8" asChild>
              <Link to="/pricing">Access Labs Now</Link>
            </Button>
            <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6 px-8">
              View Lab Documentation
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabHero;
