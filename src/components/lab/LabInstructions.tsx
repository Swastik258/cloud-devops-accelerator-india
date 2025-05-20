
import React from 'react';
import { Accordion, AccordionContent, AccordionItem, AccordionTrigger } from "@/components/ui/accordion";
import { Button } from "@/components/ui/button";
import { Link } from "react-router-dom";
import { Terminal, Database, Server, Network } from "lucide-react";

const LabInstructions = () => {
  return (
    <section className="py-12 md:py-16">
      <div className="container px-4 md:px-6">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 md:gap-12 items-center">
          <div>
            <h2 className="text-2xl md:text-3xl font-bold mb-6">How to Use the DevOps Lab</h2>
            <Accordion type="single" collapsible className="w-full">
              <AccordionItem value="item-1">
                <AccordionTrigger className="text-base md:text-lg font-medium">1. Sign Up for an Account</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Enroll in our course to get immediate access to the DevOps lab environment. Once enrolled, you'll receive login credentials.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-2">
                <AccordionTrigger className="text-base md:text-lg font-medium">2. Choose Your Lab Environment</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Select from various pre-configured environments based on the technology stack you want to practice with.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-3">
                <AccordionTrigger className="text-base md:text-lg font-medium">3. Access via Web Browser</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Our labs run entirely in the cloud and can be accessed through any modern web browser. No local installation required.
                </AccordionContent>
              </AccordionItem>
              <AccordionItem value="item-4">
                <AccordionTrigger className="text-base md:text-lg font-medium">4. Follow Guided Projects</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  Each lab comes with step-by-step instructions to help you complete real-world DevOps tasks and projects.
                </AccordionContent>
              </AccordionItem>
            </Accordion>
            
            <div className="mt-8">
              <Button size="lg" className="w-full sm:w-auto bg-brand-500 hover:bg-brand-600" asChild>
                <Link to="/pricing">Get Lab Access Now</Link>
              </Button>
            </div>
          </div>
          
          <div className="bg-gray-100 rounded-xl p-6 md:p-8 border border-gray-200">
            <h3 className="text-xl md:text-2xl font-bold mb-6">Available Lab Environments</h3>
            <ul className="space-y-4">
              <li className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Terminal className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-medium">AWS Cloud Environment</h4>
                  <p className="text-gray-600 text-sm md:text-base">Practice with EC2, S3, Lambda, and other AWS services.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Database className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-medium">Container Orchestration Lab</h4>
                  <p className="text-gray-600 text-sm md:text-base">Work with Docker, Kubernetes, and container management tools.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Server className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-medium">CI/CD Pipeline Setup</h4>
                  <p className="text-gray-600 text-sm md:text-base">Configure and manage complete CI/CD workflows.</p>
                </div>
              </li>
              <li className="flex items-start">
                <div className="bg-brand-100 p-2 rounded-full mr-4 flex-shrink-0">
                  <Network className="h-5 w-5 text-brand-500" />
                </div>
                <div>
                  <h4 className="font-medium">Monitoring & Observability</h4>
                  <p className="text-gray-600 text-sm md:text-base">Set up and configure monitoring systems and dashboards.</p>
                </div>
              </li>
            </ul>
          </div>
        </div>
      </div>
    </section>
  );
};

export default LabInstructions;
