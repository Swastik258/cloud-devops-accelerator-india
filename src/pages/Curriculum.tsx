
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Clock, Users, Award, CheckCircle } from 'lucide-react';
import { Link } from 'react-router-dom';
import { Helmet } from 'react-helmet-async';

const CurriculumPage = () => {
  const modules = [
    {
      title: "Module 1: DevOps Fundamentals",
      duration: "Week 1-2",
      topics: [
        "Introduction to DevOps Culture and Practices",
        "Version Control with Git and GitHub",
        "Basic Linux Commands and Shell Scripting",
        "Understanding Software Development Lifecycle",
        "DevOps Tools Overview and Ecosystem"
      ]
    },
    {
      title: "Module 2: Containerization with Docker",
      duration: "Week 3-4",
      topics: [
        "Docker Fundamentals and Architecture",
        "Creating and Managing Docker Images",
        "Docker Compose for Multi-container Applications",
        "Container Registry and Image Management",
        "Docker Networking and Volumes"
      ]
    },
    {
      title: "Module 3: Continuous Integration/Continuous Deployment",
      duration: "Week 5-6",
      topics: [
        "CI/CD Pipeline Concepts and Best Practices",
        "Jenkins Installation and Configuration",
        "Building Automated Testing Pipelines",
        "GitHub Actions for CI/CD",
        "Pipeline as Code with Jenkinsfile"
      ]
    },
    {
      title: "Module 4: Container Orchestration with Kubernetes",
      duration: "Week 7-8",
      topics: [
        "Kubernetes Architecture and Components",
        "Pods, Services, and Deployments",
        "ConfigMaps and Secrets Management",
        "Kubernetes Networking and Storage",
        "Helm Charts for Package Management"
      ]
    },
    {
      title: "Module 5: Infrastructure as Code",
      duration: "Week 9-10",
      topics: [
        "Infrastructure as Code Principles",
        "Terraform Fundamentals and Providers",
        "Managing AWS Resources with Terraform",
        "Terraform State Management and Best Practices",
        "Ansible for Configuration Management"
      ]
    },
    {
      title: "Module 6: AWS Cloud Services",
      duration: "Week 11-12",
      topics: [
        "AWS Core Services (EC2, S3, VPC, RDS)",
        "AWS IAM and Security Best Practices",
        "Elastic Load Balancing and Auto Scaling",
        "AWS Lambda and Serverless Architecture",
        "CloudWatch for Monitoring and Logging"
      ]
    }
  ];

  const projects = [
    {
      title: "Project 1: Containerized Web Application",
      description: "Dockerize a full-stack web application and deploy it using Docker Compose"
    },
    {
      title: "Project 2: CI/CD Pipeline Implementation",
      description: "Build a complete CI/CD pipeline using Jenkins or GitHub Actions"
    },
    {
      title: "Project 3: Kubernetes Cluster Deployment",
      description: "Deploy and manage a multi-tier application on Kubernetes"
    },
    {
      title: "Project 4: Infrastructure Automation",
      description: "Automate AWS infrastructure provisioning using Terraform"
    }
  ];

  return (
    <div className="min-h-screen flex flex-col">
      <Helmet>
        <title>DevOps & AWS Course Curriculum - Complete Learning Path | Noxian DevForge</title>
        <meta name="description" content="Comprehensive 12-week DevOps and AWS curriculum covering Docker, Kubernetes, CI/CD, Terraform, and cloud technologies with hands-on projects." />
        <meta name="keywords" content="DevOps curriculum, AWS training syllabus, Docker course, Kubernetes learning, CI/CD pipeline, Terraform tutorial" />
        <link rel="canonical" href="https://noxiandevforge.com/curriculum" />
      </Helmet>
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <section className="relative overflow-hidden">
          <div className="absolute inset-0 bg-gradient-to-br from-red-600 via-red-400 to-white" aria-hidden="true">
            <div className="absolute inset-0 bg-black/10"></div>
          </div>

          <div className="container relative pt-20 pb-16 md:pb-32">
            <div className="flex flex-col items-center text-center space-y-8">
              <div className="space-y-4">
                <div className="inline-block rounded-lg bg-white/20 px-3 py-1 text-sm text-white backdrop-blur-sm border border-white/30">
                  Comprehensive Learning Path
                </div>
                <h1 className="text-4xl md:text-5xl lg:text-6xl font-extrabold tracking-tight text-white">
                  DevOps & AWS <span className="text-yellow-200">Curriculum</span>
                </h1>
                <p className="text-xl md:text-2xl text-white max-w-3xl">
                  Master DevOps and AWS with our structured 12-week program designed for beginners and professionals.
                </p>
              </div>

              <div className="flex flex-col sm:flex-row gap-4">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 text-lg py-6 font-bold" asChild>
                  <Link to="/pricing">Enroll Now for ₹2,999</Link>
                </Button>
                <Button 
                  size="lg" 
                  variant="outline" 
                  className="border-white text-white hover:bg-white/20 text-lg py-6"
                  asChild
                >
                  <Link to="/lab">Try Our Labs</Link>
                </Button>
              </div>
            </div>
          </div>

          <div className="absolute -left-10 top-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
          <div className="absolute -right-10 bottom-10 w-40 h-40 bg-white/20 rounded-full blur-3xl opacity-30"></div>
        </section>

        {/* Course Overview */}
        <section className="section bg-gradient-to-br from-red-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-12">
              <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-3">
                    <Clock className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">12 Weeks</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Comprehensive training program with weekly live sessions
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-3">
                    <Users className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">40+ Videos</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    On-demand video lectures with practical demonstrations
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-3">
                    <CheckCircle className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">4 Projects</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Hands-on projects to build your portfolio
                  </CardDescription>
                </CardContent>
              </Card>

              <Card className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                <CardHeader className="pb-2">
                  <div className="bg-red-100 p-3 rounded-full w-fit mb-3">
                    <Award className="h-6 w-6 text-red-600" />
                  </div>
                  <CardTitle className="text-xl text-gray-800">Certificate</CardTitle>
                </CardHeader>
                <CardContent>
                  <CardDescription className="text-base text-gray-600">
                    Industry-recognized completion certificate
                  </CardDescription>
                </CardContent>
              </Card>
            </div>
          </div>
        </section>

        {/* Detailed Curriculum */}
        <section className="section bg-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">
                  Detailed Curriculum
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-800">
                  What You'll <span className="text-red-600">Learn</span>
                </h2>
                <p className="text-gray-700 md:text-xl/relaxed mt-4 max-w-2xl mx-auto">
                  Our curriculum is designed to take you from beginner to job-ready DevOps professional.
                </p>
              </div>

              <Accordion type="single" collapsible className="w-full space-y-4">
                {modules.map((module, index) => (
                  <AccordionItem key={index} value={`item-${index}`} className="border border-gray-200 rounded-lg px-6">
                    <AccordionTrigger className="text-left hover:no-underline">
                      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between w-full">
                        <h3 className="text-lg font-semibold text-gray-800">{module.title}</h3>
                        <span className="text-sm text-red-600 font-medium mt-1 sm:mt-0">{module.duration}</span>
                      </div>
                    </AccordionTrigger>
                    <AccordionContent className="pt-4">
                      <ul className="space-y-2">
                        {module.topics.map((topic, topicIndex) => (
                          <li key={topicIndex} className="flex items-start">
                            <CheckCircle className="h-5 w-5 text-red-500 mt-0.5 mr-3 flex-shrink-0" />
                            <span className="text-gray-600">{topic}</span>
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
        <section className="section bg-gradient-to-br from-red-50 to-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700 mb-4">
                  Hands-on Projects
                </div>
                <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-800">
                  Build Your <span className="text-red-600">Portfolio</span>
                </h2>
                <p className="text-gray-700 md:text-xl/relaxed mt-4 max-w-2xl mx-auto">
                  Apply your learning through real-world projects that showcase your skills to employers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {projects.map((project, index) => (
                  <Card key={index} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
                    <CardHeader>
                      <div className="bg-red-100 p-3 rounded-full w-fit mb-3">
                        <CheckCircle className="h-6 w-6 text-red-600" />
                      </div>
                      <CardTitle className="text-xl text-gray-800">{project.title}</CardTitle>
                    </CardHeader>
                    <CardContent>
                      <CardDescription className="text-base text-gray-600">
                        {project.description}
                      </CardDescription>
                    </CardContent>
                  </Card>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-red-600 to-red-400 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your DevOps Journey?</h2>
              <p className="text-xl mb-8 text-white/90">
                Join hundreds of students who have transformed their careers with our comprehensive curriculum.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-red-600 hover:bg-gray-100 py-6 px-10 text-lg" asChild>
                  <Link to="/pricing">Enroll Now for ₹2,999</Link>
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10 py-6 px-10 text-lg" asChild>
                  <Link to="/contact">Have Questions?</Link>
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
