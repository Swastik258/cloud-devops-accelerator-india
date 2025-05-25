
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const LabHero = () => {
  return (
    <section className="relative overflow-hidden">
      {/* Red and white gradient background similar to upGrad */}
      <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-400 to-white" aria-hidden="true">
        {/* Overlay for better text readability */}
        <div className="absolute inset-0 bg-black/10"></div>
      </div>

      <div className="container relative pt-20 pb-16 md:pb-32">
        <div className="flex flex-col items-center text-center space-y-8">
          <div className="space-y-4">
            <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm border border-white/30">
              Hands-on Practice Environment
            </div>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
              DevOps Practice Lab
            </h1>
            <p className="text-xl md:text-2xl text-white max-w-3xl">
              Get hands-on experience with real-world DevOps tools and infrastructure in our fully managed cloud environment. Practice with Docker, Kubernetes, AWS, and more.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4">
            <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg py-6 font-bold" asChild>
              <Link to="/pricing">Access Labs Now</Link>
            </Button>
            <Button 
              size="lg" 
              variant="outline" 
              className="border-white text-white hover:bg-white/20 text-lg py-6"
            >
              View Lab Documentation
            </Button>
          </div>

          <div className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg inline-block backdrop-blur-sm">
            <p className="text-sm text-white">
              <span className="font-medium text-yellow-200">24/7 Access:</span> Practice anytime, anywhere with our cloud-based labs
            </p>
          </div>
        </div>
      </div>

      {/* Decorative elements */}
      <div className="absolute -left-10 top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
      <div className="absolute -right-10 bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
    </section>
  );
};

export default LabHero;
