
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
import { Question } from "lucide-react";

const FAQPage = () => {
  const generalFaqs = [
    {
      question: "Is this course beginner-friendly?",
      answer: "Yes, this course is designed for beginners with no prior DevOps or AWS experience. We start from the basics and gradually build up to advanced concepts. All you need is basic computer knowledge and enthusiasm to learn."
    },
    {
      question: "What are the prerequisites for this course?",
      answer: "There are no specific prerequisites. Basic computer knowledge and familiarity with any programming language concepts will be helpful but not mandatory. We'll teach you everything you need to know from the ground up."
    },
    {
      question: "Is it a live class?",
      answer: "This is a recorded, self-paced course that you can take at your convenience. All lectures are pre-recorded so you can learn at your own pace, pause, and rewatch as needed. We also provide support through email and our community forum."
    },
    {
      question: "How long will it take to complete the course?",
      answer: "The course is designed to be completed in 3 months with a commitment of 8-10 hours per week. However, since it's self-paced, you can complete it faster or take more time depending on your learning speed and availability."
    }
  ];

  const courseFaqs = [
    {
      question: "Do I get a certificate?",
      answer: "Yes, after completing all modules and assignments, you'll receive a verifiable certificate of completion that you can share on your LinkedIn profile and with potential employers."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to all course materials. Once you enroll, you can access the videos, assignments, and resources forever, including any future updates to the course content."
    },
    {
      question: "Will I get practical experience?",
      answer: "Absolutely! The course includes 4 hands-on projects that simulate real-world scenarios. You'll build CI/CD pipelines, deploy applications on AWS, work with Kubernetes, and create infrastructure with Terraform."
    },
    {
      question: "Are there any assignments or quizzes?",
      answer: "Yes, each module includes practical assignments to reinforce your learning, and there are quizzes to test your knowledge. These are designed to ensure you've understood the concepts before moving on."
    }
  ];

  const supportFaqs = [
    {
      question: "What kind of support is provided?",
      answer: "You'll have access to our community forum where you can ask questions and interact with fellow students. Additionally, you can email your specific questions to the instructor and expect a response within 48 hours."
    },
    {
      question: "Do you provide any job assistance?",
      answer: "While we don't guarantee job placement, we provide interview preparation resources, resume tips, and project experience that significantly improves your chances of landing a job in the DevOps field."
    },
    {
      question: "What if I'm stuck on a concept?",
      answer: "If you're stuck, you can post your question in our community forum where either the instructor or fellow students can help. For more specific issues, you can email the instructor directly."
    },
    {
      question: "Is there mentoring available?",
      answer: "Currently, we don't offer one-on-one mentoring as part of the standard course. However, we do have group Q&A sessions periodically where you can get your doubts cleared."
    }
  ];

  const paymentFaqs = [
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course content within the first week, you can request a full refund, no questions asked."
    },
    {
      question: "What payment methods do you accept?",
      answer: "We accept all major credit/debit cards, UPI, net banking, and popular digital wallets through our payment processor, Razorpay."
    },
    {
      question: "Is there an EMI option?",
      answer: "Yes, EMI options are available for credit card users through Razorpay. The exact EMI options will be shown during checkout based on your card issuer."
    },
    {
      question: "Are there any discounts available?",
      answer: "We occasionally run special promotions. For group enrollments (3 or more people), we offer special discounts. Contact us for more information."
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
                Frequently Asked <span className="gradient-text">Questions</span>
              </h1>
              <p className="text-xl text-gray-600">
                Find answers to common questions about our DevOps & AWS course.
              </p>
            </div>
          </div>
        </div>

        {/* Search */}
        <div className="container px-4 md:px-6 -mt-8">
          <div className="max-w-2xl mx-auto">
            <div className="bg-white rounded-xl shadow-md p-4 flex items-center">
              <svg 
                xmlns="http://www.w3.org/2000/svg" 
                width="20" 
                height="20" 
                viewBox="0 0 24 24" 
                fill="none" 
                stroke="currentColor" 
                strokeWidth="2" 
                strokeLinecap="round" 
                strokeLinejoin="round" 
                className="text-gray-400 mr-3"
              >
                <circle cx="11" cy="11" r="8"></circle>
                <path d="m21 21-4.3-4.3"></path>
              </svg>
              <input 
                type="text" 
                placeholder="Search for questions..." 
                className="flex-1 border-0 focus:ring-0 focus:outline-none text-gray-600 placeholder-gray-400"
              />
              <Button className="bg-brand-500 hover:bg-brand-600">Search</Button>
            </div>
          </div>
        </div>

        {/* FAQ Categories */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <Question className="h-6 w-6 text-brand-500 mr-2" />
                  General Questions
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {generalFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`general-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="font-semibold text-left">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <Question className="h-6 w-6 text-brand-500 mr-2" />
                  Course Content & Structure
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {courseFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`course-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="font-semibold text-left">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <Question className="h-6 w-6 text-brand-500 mr-2" />
                  Support & Mentoring
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {supportFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`support-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="font-semibold text-left">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>

              <div className="mb-12">
                <h2 className="text-2xl font-bold mb-8 flex items-center">
                  <Question className="h-6 w-6 text-brand-500 mr-2" />
                  Payment & Refunds
                </h2>
                
                <Accordion type="single" collapsible className="w-full">
                  {paymentFaqs.map((faq, index) => (
                    <AccordionItem key={index} value={`payment-${index}`} className="border border-gray-200 rounded-lg mb-4 overflow-hidden">
                      <AccordionTrigger className="px-6 py-4 hover:no-underline">
                        <span className="font-semibold text-left">{faq.question}</span>
                      </AccordionTrigger>
                      <AccordionContent className="px-6 pb-4">
                        <p className="text-gray-600">{faq.answer}</p>
                      </AccordionContent>
                    </AccordionItem>
                  ))}
                </Accordion>
              </div>
            </div>
          </div>
        </section>

        {/* Still Have Questions */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Still Have Questions?</h2>
              <p className="text-gray-600 mb-8">
                Can't find the answer you're looking for? Please reach out to our friendly team.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button className="bg-brand-500 hover:bg-brand-600">
                  Contact Support
                </Button>
                <Button variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50">
                  Email Us
                </Button>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-brand-500 to-brand-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Get Started?</h2>
              <p className="text-xl mb-8 text-white/90">
                Enroll now and take the first step towards becoming a DevOps & AWS expert.
              </p>
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                Enroll Now for ₹1,999
              </Button>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default FAQPage;
