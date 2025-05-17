
import React from 'react';
import { Button } from "@/components/ui/button";
import { Check } from "lucide-react";
import { Link } from "react-router-dom";

const PricingSection = () => {
  const features = [
    "40+ Video Lectures",
    "Weekly Live Classes",
    "4 Hands-on Projects",
    "Downloadable Resources",
    "Community Support",
    "Certificate of Completion",
    "Lifetime Access"
  ];

  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-brand-50 px-3 py-1 text-sm text-brand-600">
            Affordable Investment
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Simple, Transparent <span className="gradient-text">Pricing</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Invest in your future with our comprehensive DevOps & AWS course.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <div className="rounded-2xl border border-gray-200 bg-white shadow-sm overflow-hidden">
            <div className="p-6 md:p-8">
              <div className="flex flex-col md:flex-row md:items-center md:justify-between">
                <div>
                  <h3 className="text-2xl font-bold">DevOps & AWS Masterclass</h3>
                  <p className="text-gray-500 mt-1">3-Month Comprehensive Course with Live Classes</p>
                </div>
                <div className="mt-4 md:mt-0">
                  <div className="flex items-baseline">
                    <span className="text-3xl font-bold">₹2,999</span>
                    <span className="ml-2 text-gray-500 line-through">₹4,999</span>
                  </div>
                  <p className="text-sm text-brand-600">Limited Time Offer (40% off)</p>
                </div>
              </div>

              <div className="mt-8">
                <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  {features.map((feature, index) => (
                    <div key={index} className="flex items-center">
                      <Check className="h-5 w-5 text-brand-500 mr-2 flex-shrink-0" />
                      <span>{feature}</span>
                    </div>
                  ))}
                </div>
              </div>

              <div className="mt-8 bg-brand-50 rounded-lg p-4">
                <p className="text-sm text-gray-600">
                  <span className="font-semibold">100% Satisfaction Guarantee:</span> If you're not satisfied within the first 7 days, we'll refund your money, no questions asked.
                </p>
              </div>

              <div className="mt-8">
                <Button className="w-full bg-brand-500 hover:bg-brand-600 py-6 text-lg" asChild>
                  <Link to="/pricing">
                    Enroll Now for ₹2,999 Only
                  </Link>
                </Button>
                <p className="text-sm text-gray-500 mt-2 text-center">
                  Secure payment via Razorpay • UPI, Cards, Net Banking accepted
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default PricingSection;
