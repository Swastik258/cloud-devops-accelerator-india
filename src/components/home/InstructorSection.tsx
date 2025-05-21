
import React from 'react';
import { Button } from "@/components/ui/button";
import { Avatar, AvatarImage, AvatarFallback } from "@/components/ui/avatar";
import { Helmet } from 'react-helmet-async';

const InstructorSection = () => {
  return (
    <section className="section bg-brand-50">
      <Helmet>
        <title>Meet Your Instructor - Swastik Pradhan | Zenith DevStack</title>
        <meta name="description" content="Learn from Swastik Pradhan, a DevOps & AWS trainer with 8+ years of industry experience who has trained over 500 professionals." />
        <meta name="keywords" content="DevOps instructor, AWS trainer, cloud computing expert, DevOps training" />
      </Helmet>
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
          <div className="lg:col-span-4">
            <div className="aspect-square max-w-[250px] mx-auto lg:mx-0 overflow-hidden rounded-2xl bg-gray-100 shadow-lg border-4 border-white">
              <img 
                src="https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=1287&q=80" 
                alt="Swastik Pradhan - DevOps & AWS Instructor"
                className="object-cover w-full h-full"
              />
            </div>
          </div>
          <div className="lg:col-span-8">
            <div className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-600 mb-4">
              Meet Your Instructor
            </div>
            <h2 className="text-2xl md:text-3xl font-bold tracking-tighter mb-4">
              Hi, I'm <span className="gradient-text">Swastik Pradhan</span>
            </h2>
            <p className="text-gray-500 mb-6 text-base md:text-lg">
              As a DevOps & AWS trainer based in Bangalore, I've helped over 500 students and working professionals launch their cloud careers. With 8+ years of experience at leading tech companies, I understand what employers are actually looking for.
            </p>
            <p className="text-gray-500 mb-8">
              I've packaged my industry experience and teaching methodology into this comprehensive, practical, and affordable program designed specifically for the Indian job market.
            </p>
            
            <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 mb-8">
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-brand-500">500+</p>
                <p className="text-xs md:text-sm text-gray-500">Students Trained</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-brand-500">8+</p>
                <p className="text-xs md:text-sm text-gray-500">Years Experience</p>
              </div>
              <div className="bg-white rounded-lg p-4 text-center shadow-sm">
                <p className="text-2xl md:text-3xl font-bold text-brand-500">4.9/5</p>
                <p className="text-xs md:text-sm text-gray-500">Average Rating</p>
              </div>
            </div>

            <Button className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600">
              Learn More About Me
            </Button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default InstructorSection;
