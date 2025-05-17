
import React from 'react';
import { GitBranch, Docker, Jenkins, Kubernetes, Terraform, Aws } from "lucide-react";

const WhatYouWillLearn = () => {
  const technologies = [
    {
      name: "Git & GitHub",
      description: "Version control fundamentals and collaborative development",
      icon: <GitBranch className="h-12 w-12 text-gray-700" />,
    },
    {
      name: "Docker",
      description: "Containerization and Docker Compose essentials",
      icon: <Docker className="h-12 w-12 text-gray-700" />,
    },
    {
      name: "Jenkins",
      description: "CI/CD pipeline automation and integration",
      icon: <Jenkins className="h-12 w-12 text-gray-700" />,
    },
    {
      name: "Kubernetes",
      description: "Container orchestration and scaling applications",
      icon: <Kubernetes className="h-12 w-12 text-gray-700" />,
    },
    {
      name: "Terraform",
      description: "Infrastructure as Code for cloud resources",
      icon: <Terraform className="h-12 w-12 text-gray-700" />,
    },
    {
      name: "AWS Services",
      description: "EC2, S3, IAM, VPC, RDS, Lambda, and more",
      icon: <Aws className="h-12 w-12 text-gray-700" />,
    },
  ];

  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-brand-50 px-3 py-1 text-sm text-brand-600">
            Course Highlights
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            What You'll <span className="gradient-text">Learn</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Master the most in-demand DevOps tools and AWS services that employers are looking for.
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {technologies.map((tech, index) => (
            <div 
              key={index}
              className="flex flex-col items-center text-center p-6 bg-white rounded-xl shadow-sm border border-gray-100 hover:shadow-md transition-shadow"
            >
              <div className="mb-4 bg-brand-50 p-4 rounded-full">
                {tech.icon}
              </div>
              <h3 className="text-xl font-semibold mb-2">{tech.name}</h3>
              <p className="text-gray-500">{tech.description}</p>
            </div>
          ))}
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-6">
            Plus Linux fundamentals, Shell scripting, monitoring tools, and more!
          </p>
          <a 
            href="/curriculum" 
            className="inline-flex items-center text-brand-500 font-semibold hover:text-brand-600"
          >
            See detailed curriculum
            <svg 
              xmlns="http://www.w3.org/2000/svg" 
              width="16" 
              height="16" 
              viewBox="0 0 24 24" 
              fill="none" 
              stroke="currentColor" 
              strokeWidth="2" 
              strokeLinecap="round" 
              strokeLinejoin="round" 
              className="ml-1"
            >
              <line x1="5" y1="12" x2="19" y2="12"></line>
              <polyline points="12 5 19 12 12 19"></polyline>
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
};

export default WhatYouWillLearn;
