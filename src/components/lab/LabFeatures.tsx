
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
    <section className="py-16 bg-gray-50">
      <div className="container px-4 md:px-6">
        <h2 className="text-3xl font-bold text-center mb-12">Lab Features</h2>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border border-gray-200 hover:shadow-md transition-shadow">
              <CardHeader className="pb-2">
                <feature.icon className="h-8 w-8 text-brand-500 mb-2" />
                <CardTitle className="text-xl">{feature.title}</CardTitle>
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
