
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";

const InstructorSection = () => {
  return (
    <section className="section bg-brand-50">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="aspect-square overflow-hidden rounded-2xl bg-gray-100 shadow-lg border-4 border-white">
              <img 
                src="/lovable-uploads/34150a49-e2bc-4efe-8fdb-ceeb03e36e41.png" 
                alt="Swastik Pradhan"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-600 mb-4">
              Meet Your Instructor
            </div>
            <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight mb-4">
              Hi, I'm <span className="gradient-text">Swastik Pradhan</span>
            </h2>
            <p className="text-gray-500 mb-6 text-lg">
              As a DevOps & AWS trainer based in Bangalore, I've helped over 500 students and working professionals launch their cloud careers. With 8+ years of experience at leading tech companies, I understand what employers are actually looking for.
            </p>
            <p className="text-gray-500 mb-8">
              I've packaged my industry experience and teaching methodology into this comprehensive, practical, and affordable program designed specifically for the Indian job market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-500">500+</p>
                <p className="text-sm text-gray-500">Students Trained</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-500">8+</p>
                <p className="text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-3xl font-bold text-brand-500">4.9/5</p>
                <p className="text-sm text-gray-500">Average Rating</p>
              </div>
            </div>

            <Button className="bg-brand-500 hover:bg-brand-600">
              Learn More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
