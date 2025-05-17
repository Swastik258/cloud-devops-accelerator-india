
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const CurriculumPage = () => {
  const modules = [
    {
      title: "Module 1: Introduction to DevOps",
      lessons: [
        "What is DevOps - Concepts & Principles",
        "DevOps Culture and Mindset",
        "DevOps Lifecycle and Practices",
        "Understanding CI/CD Pipeline",
        "DevOps Tools Overview"
      ],
      duration: "1 Week"
    },
    {
      title: "Module 2: Linux Fundamentals for DevOps",
      lessons: [
        "Linux Architecture & Command Line Basics",
        "User Management & Permissions",
        "Process Management & Monitoring",
        "Package Management (apt, yum)",
        "Shell Scripting Fundamentals",
        "Advanced Bash Scripting for Automation"
      ],
      duration: "2 Weeks"
    },
    {
      title: "Module 3: Version Control with Git",
      lessons: [
        "Git Basics - Installation & Configuration",
        "Working with Repositories - add, commit, push, pull",
        "Branching Strategies & Workflows",
        "Merge Conflicts Resolution",
        "Pull Requests & Code Reviews",
        "GitHub Actions for CI/CD"
      ],
      duration: "1 Week"
    },
    {
      title: "Module 4: Containerization with Docker",
      lessons: [
        "Container Concepts vs Virtual Machines",
        "Docker Architecture & Installation",
        "Working with Docker Images & Containers",
        "Dockerfile Writing Best Practices",
        "Docker-Compose for Multi-Container Apps",
        "Docker Registry & Image Management",
        "Docker Networking & Storage"
      ],
      duration: "2 Weeks"
    },
    {
      title: "Module 5: CI/CD with Jenkins",
      lessons: [
        "Jenkins Architecture & Installation",
        "Creating & Managing Jenkins Jobs",
        "Jenkins Pipelines - Declarative & Scripted",
        "Jenkinsfile Best Practices",
        "Integration with Git, Docker & AWS",
        "Pipeline as Code",
        "Multi-branch Pipelines"
      ],
      duration: "2 Weeks"
    },
    {
      title: "Module 6: Container Orchestration with Kubernetes",
      lessons: [
        "Kubernetes Architecture & Components",
        "Setting up Kubernetes Cluster",
        "Working with Pods, Services & Deployments",
        "ConfigMaps & Secrets",
        "Volumes & Persistent Storage",
        "Kubernetes Networking",
        "Helm Charts for Application Deployment"
      ],
      duration: "2 Weeks"
    },
    {
      title: "Module 7: Infrastructure as Code with Terraform",
      lessons: [
        "IaC Concepts & Benefits",
        "Terraform Basics & HCL Syntax",
        "Managing AWS Resources with Terraform",
        "Terraform State Management",
        "Modules & Best Practices",
        "Terraform for Team Environments"
      ],
      duration: "2 Weeks"
    },
    {
      title: "Module 8: AWS Core Services",
      lessons: [
        "AWS Global Infrastructure",
        "IAM - Users, Groups, Roles & Policies",
        "EC2 - Virtual Servers in the Cloud",
        "S3 - Object Storage Service",
        "VPC - Networking in AWS",
        "RDS - Managed Database Service",
        "Route 53 - DNS Service",
        "CloudWatch - Monitoring & Logs"
      ],
      duration: "3 Weeks"
    },
    {
      title: "Module 9: Advanced AWS Services",
      lessons: [
        "Lambda - Serverless Compute",
        "ECR - Elastic Container Registry",
        "ECS - Elastic Container Service",
        "EKS - Elastic Kubernetes Service",
        "CloudFormation - IaC for AWS",
        "SNS & SQS - Messaging Services",
        "CloudFront - Content Delivery Network"
      ],
      duration: "3 Weeks"
    },
    {
      title: "Module 10: Capstone Project & Interview Preparation",
      lessons: [
        "End-to-End DevOps Pipeline Project",
        "AWS Architecture Design Project",
        "Resume Building Workshop",
        "DevOps Interview Questions & Answers",
        "Mock Interview Sessions"
      ],
      duration: "2 Weeks"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-brand-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                DevOps & AWS <span className="gradient-text">Curriculum</span>
              </h1>
              <p className="text-xl text-gray-600 mb-8">
                A comprehensive 3-month journey from DevOps fundamentals to advanced AWS implementation
              </p>
              <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-500">10</div>
                  <div className="text-gray-500">Comprehensive Modules</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-500">40+</div>
                  <div className="text-gray-500">Video Lectures</div>
                </div>
                <div className="bg-white rounded-lg p-4 shadow-sm">
                  <div className="text-3xl font-bold text-brand-500">4</div>
                  <div className="text-gray-500">Hands-on Projects</div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* Overview */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6">Course Overview</h2>
              <p className="text-gray-600 mb-4">
                This is a 3-month online DevOps + AWS course designed for absolute beginners. You'll learn step-by-step, from basic Linux commands to building CI/CD pipelines using Jenkins and deploying applications on AWS.
              </p>
              <p className="text-gray-600 mb-4">
                By the end of this course, you'll have:
              </p>
              <ul className="list-disc list-inside space-y-2 text-gray-600 mb-6">
                <li>A solid understanding of DevOps principles and practices</li>
                <li>Hands-on experience with essential DevOps tools: Git, Docker, Jenkins, Kubernetes, Terraform</li>
                <li>Practical knowledge of 12 core AWS services</li>
                <li>The ability to design, implement, and manage a complete CI/CD pipeline</li>
                <li>Real-world projects for your portfolio</li>
                <li>Confidence to apply for DevOps Engineer positions</li>
              </ul>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <h2 className="text-2xl font-bold mb-8 text-center">Detailed Curriculum</h2>

              <Accordion type="single" collapsible className="w-full">
                {modules.map((module, index) => (
                  <AccordionItem key={index} value={`module-${index}`} className="bg-white mb-4 rounded-lg border overflow-hidden">
                    <AccordionTrigger className="px-6 py-4 hover:no-underline">
                      <div className="flex flex-col sm:flex-row sm:items-center justify-between w-full text-left">
                        <h3 className="font-semibold text-lg">{module.title}</h3>
                        <span className="text-sm text-brand-500 font-medium mt-1 sm:mt-0">{module.duration}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="px-6 pb-4">
                      <ul className="space-y-2">
                        {module.lessons.map((lesson, lessonIndex) => (
                          <li key={lessonIndex} className="flex items-start">
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
                              className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                            >
                              <polyline points="20 6 9 17 4 12"></polyline>
                            </svg>
                            <span>{lesson}</span>
                          </li>
                        ))}
                      </ul>
                    </AccordionContent>
                  </AccordionItem>
                ))}
              </Accordion>
            </div>
          </div>
        </section>

        {/* Projects Section */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <h2 className="text-2xl font-bold mb-6 text-center">Hands-on Projects Included</h2>
              
              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-brand-500"
                    >
                      <path d="M21 18H6a2 2 0 0 1-2-2V6"></path>
                      <path d="M6 14h12"></path>
                      <path d="M8 6h12a2 2 0 0 1 2 2v7"></path>
                      <path d="M11 6V3"></path>
                      <path d="M6 18H3"></path>
                      <path d="M17 11l2-2-2-2"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">CI/CD Pipeline Project</h3>
                  <p className="text-gray-600 mb-4">
                    Build a complete CI/CD pipeline using Git, Jenkins, Docker, and AWS. Deploy a web application with automated testing and continuous deployment.
                  </p>
                  <ul className="space-y-1 text-gray-500 text-sm">
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Source code management with Git</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Automated builds with Jenkins</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Containerization with Docker</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Deployment to AWS</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-brand-500"
                    >
                      <path d="M21 16V8a2 2 0 0 0-1-1.73l-7-4a2 2 0 0 0-2 0l-7 4A2 2 0 0 0 3 8v8a2 2 0 0 0 1 1.73l7 4a2 2 0 0 0 2 0l7-4A2 2 0 0 0 21 16z"></path>
                      <polyline points="3.27 6.96 12 12.01 20.73 6.96"></polyline>
                      <line x1="12" y1="22.08" x2="12" y2="12"></line>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Kubernetes on AWS Project</h3>
                  <p className="text-gray-600 mb-4">
                    Create a scalable microservices application using Kubernetes on AWS EKS. Deploy, scale, and manage multiple services.
                  </p>
                  <ul className="space-y-1 text-gray-500 text-sm">
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>EKS cluster setup</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Microservices architecture</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Service discovery & load balancing</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Auto-scaling configuration</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-brand-500"
                    >
                      <path d="M4 19.5v-15A2.5 2.5 0 0 1 6.5 2H20v20H6.5a2.5 2.5 0 0 1 0-5H20"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">Terraform IaC Project</h3>
                  <p className="text-gray-600 mb-4">
                    Build and manage an entire AWS infrastructure using Terraform. Create a scalable architecture with networking, compute, storage, and more.
                  </p>
                  <ul className="space-y-1 text-gray-500 text-sm">
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Multi-environment setup</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Infrastructure as Code</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Remote state management</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Module development</span>
                    </li>
                  </ul>
                </div>

                <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6">
                  <div className="bg-brand-50 w-12 h-12 rounded-full flex items-center justify-center mb-4">
                    <svg 
                      xmlns="http://www.w3.org/2000/svg" 
                      width="24" 
                      height="24" 
                      viewBox="0 0 24 24" 
                      fill="none" 
                      stroke="currentColor" 
                      strokeWidth="2" 
                      strokeLinecap="round" 
                      strokeLinejoin="round" 
                      className="text-brand-500"
                    >
                      <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                    </svg>
                  </div>
                  <h3 className="text-xl font-semibold mb-2">AWS Architecture Project</h3>
                  <p className="text-gray-600 mb-4">
                    Design and implement a highly available, secure AWS architecture for a real-world application. Incorporate best practices for production workloads.
                  </p>
                  <ul className="space-y-1 text-gray-500 text-sm">
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>High availability design</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Security best practices</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Cost optimization</span>
                    </li>
                    <li className="flex items-start">
                      <svg 
                        xmlns="http://www.w3.org/2000/svg" 
                        width="12" 
                        height="12" 
                        viewBox="0 0 24 24" 
                        fill="none" 
                        stroke="currentColor" 
                        strokeWidth="2" 
                        strokeLinecap="round" 
                        strokeLinejoin="round" 
                        className="text-brand-500 mt-1 mr-2 flex-shrink-0"
                      >
                        <polyline points="20 6 9 17 4 12"></polyline>
                      </svg>
                      <span>Performance monitoring</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-brand-500 to-brand-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your DevOps & AWS Journey?</h2>
              <p className="text-xl mb-8 text-white/90">
                Enroll now and get instant access to our comprehensive curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                  Enroll Now for ₹1,999
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  Contact Us
                </Button>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default CurriculumPage;
