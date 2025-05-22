
import React, { useState } from 'react';
import { Button } from "@/components/ui/button";
import { Play } from "lucide-react";
import { Link } from "react-router-dom";
import VideoModal from "@/components/ui/video-modal";

const HeroSection = () => {
  const [isVideoModalOpen, setIsVideoModalOpen] = useState(false);

  return (
    <div className="relative overflow-hidden">
      {/* Background with pattern */}
      <div className="absolute inset-0 bg-gradient-to-br from-gray-900 to-gray-800" aria-hidden="true">
        <div className="absolute inset-0 opacity-20 bg-[url('data:image/svg+xml;base64,PHN2ZyB3aWR0aD0iNjAiIGhlaWdodD0iNjAiIHZpZXdCb3g9IjAgMCA2MCA2MCIgeG1sbnM9Imh0dHA6Ly93d3cudzMub3JnLzIwMDAvc3ZnIj4KICAgIDxnIGZpbGw9Im5vbmUiIGZpbGwtcnVsZT0iZXZlbm9kZCI+CiAgICAgICAgPHBhdGggZmlsbD0iI2YwZjVmZiIgZD0iTTM2IDM0djZoNnYtNmgtNnptMC0zMHY2aDZ2LTZoLTZ6bTAgMTJ2NmMwIDEuMTA1LS44OTUgMi0yIDJoLTZWMTJoNmMxLjEwNSAwIDIgLjg5NSAyIDJ6bS0xMiAwdjZjMCAxLjEwNS0uODk1IDItMiAyaC02di0xMGg2YzEuMTA1IDAgMiAuODk1IDIgMnptMCAxMnY2YzAgMS4xMDUtLjg5NSAyLTIgMmgtNlYyNGg2YzEuMTA1IDAgMiAuODk1IDIgMnptLTEyIDEydjZoNnYtNmgtNnoiLz4KICAgIDwvZz4KPC9zdmc+Cg==')]"></div>
      </div>

      <div className="container relative pt-20 pb-16 md:pb-32">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 items-center">
          <div className="space-y-8 text-white">
            <div className="space-y-4">
              <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight">
                <span className="bg-gradient-to-r from-brand-400 to-brand-200 bg-clip-text text-transparent">Noxian DevForge</span><br /> 
                <span>Master DevOps & AWS in Just 90 Days!</span>
              </h1>
              <p className="text-xl md:text-2xl text-gray-300">
                Master DevOps tools and 12 AWS services with real projects. Perfect for beginners and working professionals.
              </p>
            </div>

            <div className="flex flex-col sm:flex-row gap-4">
              <Button size="lg" className="bg-brand-500 hover:bg-brand-600 text-lg py-6" asChild>
                <Link to="/pricing">Enroll Now</Link>
              </Button>
              <Button 
                size="lg" 
                variant="outline" 
                className="border-brand-300 text-brand-300 hover:bg-brand-500/20 text-lg py-6"
                onClick={() => setIsVideoModalOpen(true)}
              >
                <Play size={16} className="mr-2" />
                Watch Intro Video
              </Button>
            </div>

            <div className="px-4 py-2 bg-brand-900/50 border border-brand-700 rounded-lg inline-block">
              <p className="text-sm text-gray-300">
                <span className="font-medium text-brand-300">Limited time offer:</span> Enroll today and get 20% off!
              </p>
            </div>
          </div>

          <div className="relative h-[24rem] lg:h-auto">
            <div className="absolute -top-6 -right-6 w-72 h-72 bg-brand-600/30 rounded-full blur-3xl opacity-30"></div>
            <div className="relative bg-gray-800 shadow-xl rounded-2xl overflow-hidden border border-gray-700">
              <div className="p-6 bg-gradient-to-r from-brand-600 to-brand-700 text-white">
                <h2 className="text-xl font-bold">DevOps & AWS Masterclass</h2>
                <p className="text-brand-100">3-Month Comprehensive Course</p>
              </div>
              <div className="p-6 space-y-4 text-white">
                <div className="flex items-start gap-3">
                  <div className="bg-brand-900/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                      <path d="M22 12h-4l-3 9L9 3l-3 9H2"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Beginner to Advanced</h3>
                    <p className="text-sm text-gray-400">No prior experience required</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-brand-900/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                      <path d="M21 10V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l2-1.14"></path>
                      <path d="M16.5 9.4 7.55 4.24"></path>
                      <polyline points="3.29 7 12 12 20.71 7"></polyline>
                      <line x1="12" y1="22" x2="12" y2="12"></line>
                      <circle cx="18.5" cy="15.5" r="2.5"></circle>
                      <path d="M20.27 17.27 22 19"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">40+ Hours of Content</h3>
                    <p className="text-sm text-gray-400">On-demand video lectures</p>
                  </div>
                </div>
                <div className="flex items-start gap-3">
                  <div className="bg-brand-900/50 p-2 rounded-full">
                    <svg xmlns="http://www.w3.org/2000/svg" width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="text-brand-400">
                      <rect x="8" y="2" width="8" height="4" rx="1" ry="1"></rect>
                      <path d="M16 4h2a2 2 0 0 1 2 2v14a2 2 0 0 1-2 2H6a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2h2"></path>
                      <path d="m9 14 2 2 4-4"></path>
                    </svg>
                  </div>
                  <div>
                    <h3 className="font-semibold">Real-World Projects</h3>
                    <p className="text-sm text-gray-400">Build your portfolio</p>
                  </div>
                </div>

                <div className="pt-4">
                  <Button className="w-full bg-brand-500 hover:bg-brand-600" asChild>
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
  );
};

export default HeroSection;
