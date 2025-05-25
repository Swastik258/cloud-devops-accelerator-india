
import React from 'react';
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Server, Database, Terminal, Network } from "lucide-react";

const LabFeatures = () => {
  const features = [
    {
      title: "Infrastructure Provisioning",
      description: "Create and manage cloud infrastructure using Terraform, AWS CloudFormation, and other IaC tools.",
      icon: Server
    },
    {
      title: "Container Orchestration",
      description: "Deploy and manage Docker containers with Kubernetes in a real-world environment.",
      icon: Database
    },
    {
      title: "CI/CD Pipeline Practice",
      description: "Build complete CI/CD pipelines using Jenkins, GitHub Actions, and GitLab CI.",
      icon: Terminal
    },
    {
      title: "Monitoring & Observability",
      description: "Set up monitoring systems with Prometheus, Grafana, and ELK stack.",
      icon: Network
    }
  ];

  return (
    <section className="section bg-gradient-to-br from-red-50 to-white">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-red-100 px-3 py-1 text-sm text-red-700">
            Lab Features
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-gray-800">
            Everything You Need to <span className="text-red-600">Practice DevOps</span>
          </h2>
          <p className="max-w-[700px] text-gray-700 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our comprehensive lab environment provides all the tools and infrastructure you need to master DevOps.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md bg-white hover:shadow-lg transition-shadow">
              <CardHeader className="pb-2">
                <div className="bg-red-100 p-3 rounded-full w-fit mb-3">
                  <feature.icon className="h-6 w-6 text-red-600" />
                </div>
                <CardTitle className="text-xl text-gray-800">{feature.title}</CardTitle>
              </CardHeader>
              <CardContent>
                <CardDescription className="text-base text-gray-600">
                  {feature.description}
                </CardDescription>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default LabFeatures;
