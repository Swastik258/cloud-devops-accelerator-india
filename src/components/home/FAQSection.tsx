
import React from 'react';
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";

const FAQSection = () => {
  const faqs = [
    {
      question: "Is this course beginner-friendly?",
      answer: "Yes, this course is designed for beginners with no prior DevOps or AWS experience. We start from the basics and gradually build up to advanced concepts. All you need is basic computer knowledge and enthusiasm to learn."
    },
    {
      question: "Is it a live class?",
      answer: "This is a recorded, self-paced course that you can take at your convenience. All lectures are pre-recorded so you can learn at your own pace, pause, and rewatch as needed. We also provide support through email and our community forum."
    },
    {
      question: "Do I get a certificate?",
      answer: "Yes, after completing all modules and assignments, you'll receive a verifiable certificate of completion that you can share on your LinkedIn profile and with potential employers."
    },
    {
      question: "How long do I have access to the course?",
      answer: "You get lifetime access to all course materials. Once you enroll, you can access the videos, assignments, and resources forever, including any future updates to the course content."
    },
    {
      question: "Do you provide any job assistance?",
      answer: "While we don't guarantee job placement, we provide interview preparation resources, resume tips, and project experience that significantly improves your chances of landing a job in the DevOps field."
    },
    {
      question: "What if I'm not satisfied with the course?",
      answer: "We offer a 7-day money-back guarantee. If you're not satisfied with the course content within the first week, you can request a full refund, no questions asked."
    }
  ];

  return (
    <section className="section">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-brand-50 px-3 py-1 text-sm text-brand-600">
            Have Questions?
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight">
            Frequently Asked <span className="gradient-text">Questions</span>
          </h2>
          <p className="max-w-[700px] text-gray-500 md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Find answers to common questions about our DevOps & AWS course.
          </p>
        </div>

        <div className="mx-auto max-w-3xl">
          <Accordion type="single" collapsible className="w-full">
            {faqs.map((faq, index) => (
              <AccordionItem key={index} value={`item-${index}`}>
                <AccordionTrigger className="text-left font-semibold">{faq.question}</AccordionTrigger>
                <AccordionContent className="text-gray-600">
                  {faq.answer}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </div>

        <div className="mt-12 text-center">
          <p className="text-gray-500 mb-4">
            Still have questions? Feel free to reach out to us directly.
          </p>
          <a 
            href="/contact" 
            className="inline-flex items-center text-brand-500 font-semibold hover:text-brand-600"
          >
            Contact Us
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

export default FAQSection;
