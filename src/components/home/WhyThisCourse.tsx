
import React from 'react';
import { Card, CardContent } from "@/components/ui/card";
import { Rocket, Certificate, Globe, MessageCircle } from "lucide-react";

const WhyThisCourse = () => {
  const features = [
    {
      title: "3-Month Industry-Ready Curriculum",
      description: "A structured learning path that takes you from basics to advanced DevOps concepts and AWS implementation.",
      icon: <Rocket className="h-10 w-10 text-brand-500" />
    },
    {
      title: "100% Practical, Hands-on Learning",
      description: "Build real-world projects that you can add to your portfolio, not just theoretical knowledge.",
      icon: <Certificate className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Certificate of Completion",
      description: "Earn a verifiable certificate that enhances your resume and LinkedIn profile.",
      icon: <Globe className="h-10 w-10 text-brand-500" />
    },
    {
      title: "Lifetime Access & Community Support",
      description: "Access course materials forever and join our community for ongoing learning and networking.",
      icon: <MessageCircle className="h-10 w-10 text-brand-500" />
    }
  ];

  return (
    <section className="section bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-brand-50 px-3 py-1 text-sm text-brand-600">
            Why This Course?
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Learning DevOps & AWS Has Never Been <span className="gradient-text">Easier</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Our course is designed for Indian IT professionals looking to quickly master in-demand cloud skills.
          </p>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {features.map((feature, index) => (
            <Card key={index} className="border-0 shadow-md hover:shadow-lg transition-shadow">
              <CardContent className="flex p-6 items-start gap-4">
                <div className="rounded-full bg-brand-50 p-3 flex-shrink-0">
                  {feature.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold mb-2">{feature.title}</h3>
                  <p className="text-gray-500">{feature.description}</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyThisCourse;
