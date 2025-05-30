
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import VideoModal from "@/components/ui/video-modal";
import { TooltipProvider } from "@/components/ui/tooltip";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <TooltipProvider>
      <div className="relative overflow-hidden">
        {/* Red and white gradient background similar to upGrad */}
        <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-400 to-white" aria-hidden="true">
          {/* Overlay for better text readability */}
          <div className="absolute inset-0 bg-black/10"></div>
        </div>

        <div className="container relative pt-20 pb-16 md:pb-32">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
            <div className="space-y-8 text-white">
              <div className="space-y-4">
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                  <span className="bg-gradient-to-r from-white to-yellow-200 bg-clip-text text-transparent">Noxian DevForge</span>
                </h1>
                <h2 className="text-3xl md:text-4xl font-bold text-white">
                  <span className="text-white">Learning DevOps & AWS Has Never Been Easier</span>
                </h2>
                <p className="text-xl md:text-2xl text-white">
                  Master DevOps tools and 12 AWS services with real projects. Perfect for beginners and working professionals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg py-6 font-bold" asChild>
                  <Link to="/pricing">Enroll Now</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 text-lg py-6"
                  onClick={() => setIsVideoModalOpen(true)}
                >
                  <Play size={16} className="mr-2" />
                  Watch Intro Video
                </Button>
              </div>

              <div className="px-4 py-2 bg-white/20 border border-white/30 rounded-lg inline-block backdrop-blur-sm">
                <p className="text-sm text-white">
                  <span className="font-medium text-yellow-200">Limited time offer:</span> Enroll today and get 20% off!
                </p>
              </div>
            </div>

            <div className="relative h-[24rem] lg:h-auto">
              <div className="absolute -top-6 -right-6 w-72 h-72 bg-white/20 rounded-full blur-3xl opacity-30"></div>
              <div className="relative bg-white shadow-xl rounded-2xl overflow-hidden border border-white/20">
                <div className="p-6 bg-gradient-to-r from-red-600 to-red-700 text-white">
                  <h2 className="text-xl font-bold">DevOps & AWS Masterclass</h2>
                  <p className="text-white/90">3-Month Comprehensive Course</p>
                </div>
                <div className="p-6 space-y-4 text-gray-800 bg-white">
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                        <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Beginner to Advanced</h3>
                      <p className="text-sm text-gray-600">No prior experience required</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                        <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                        <path d="M16.5 9.4 7.55 4.24"></path>
                        <polyline points="3.29 7 12 12 20.71 7"></polyline>
                        <line x1="12" y1="22" x2="12" y2="12"></line>
                        <circle cx="18.5" cy="15.5" r="2.5"></circle>
                        <path d="M20.27 17.27 22 19"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">40+ Hours of Content</h3>
                      <p className="text-sm text-gray-600">On-demand video lectures</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-3">
                    <div className="bg-red-100 p-2 rounded-full">
                      <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-red-600">
                        <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                        <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                        <path d="m9 14 2 2 4-4"></path>
                      </svg>
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-800">Real-World Projects</h3>
                      <p className="text-sm text-gray-600">Build your portfolio</p>
                    </div>
                  </div>

                  <div className="pt-4">
                    <Button className="w-full bg-red-600 hover:bg-red-700 text-white" asChild>
                      <Link to="/curriculum">
                        See Full Curriculum
                      </Link>
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Video Modal */}
        <VideoModal 
          isOpen={isVideoModalOpen} 
          onClose={() => setIsVideoModalOpen(false)} 
          videoId="XZmGGAbHqa0"  // AWS & DevOps introduction video
        />
      </div>
    </TooltipProvider>
  );
};

export default HeroSection;
