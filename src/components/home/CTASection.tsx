
import React from 'react';
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";

const CTASection = () => {
  return (
    <section className="py-16 md:py-24 bg-gradient-to-r from-brand-500 to-brand-700 text-white">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight mb-4">
              Ready to Start Your DevOps & AWS Journey?
            </h2>
            <p className="text-xl text-white/80 mb-6">
              Join 500+ students who have already transformed their careers with our practical, industry-ready curriculum.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 text-lg py-6" asChild>
                <Link to="/pricing">Enroll Now for ₹2,999</Link>
              </Button>
              <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 text-lg py-6">
                Download Syllabus
              </Button>
            </div>
            <p className="mt-4 text-sm text-white/70">
              7-day money-back guarantee. No risk, cancel anytime.
            </p>
          </div>
          
          <div className="bg-brand-400/20 backdrop-blur-sm rounded-xl p-6 border border-white/10">
            <div className="grid grid-cols-2 gap-4">
              <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold">40+</div>
                <div className="text-sm text-white/70">Video Lectures</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold">4</div>
                <div className="text-sm text-white/70">Projects</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold">12</div>
                <div className="text-sm text-white/70">AWS Services</div>
              </div>
              <div className="bg-white/10 rounded-lg p-4 text-center backdrop-blur-sm">
                <div className="text-4xl font-bold">24/7</div>
                <div className="text-sm text-white/70">Support</div>
              </div>
            </div>
            <div className="mt-6 bg-white/10 rounded-lg p-4 text-center">
              <div className="flex items-center justify-center space-x-1 mb-2">
                {[...Array(5)].map((_, i) => (
                  <svg 
                    key={i}
                    xmlns="http://www.w3.org/2000/svg" 
                    width="16" 
                    height="16" 
                    viewBox="0 0 24 24" 
                    fill="currentColor"
                    className="text-yellow-300"
                  >
                    <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                  </svg>
                ))}
              </div>
              <p className="text-white/80 font-medium">
                4.9/5 average rating from 500+ students
              </p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CTASection;
