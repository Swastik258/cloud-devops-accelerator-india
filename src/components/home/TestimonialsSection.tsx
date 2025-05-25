import React from 'react';
import { Card, CardContent } from "@/components/ui/card";

const testimonials = [
  {
    name: "Rahul M.",
    location: "Pune",
    testimonial: "This course helped me get a DevOps internship. The hands-on projects were very helpful and gave me practical experience that I could talk about in interviews!",
    image: "https://randomuser.me/api/portraits/men/41.jpg",
    role: "Junior DevOps Engineer"
  },
  {
    name: "Sneha K.",
    location: "Bangalore",
    testimonial: "Very beginner-friendly and practical. I understood concepts I couldn't grasp before. The AWS section was particularly well-explained with real examples.",
    image: "https://randomuser.me/api/portraits/women/44.jpg",
    role: "Software Developer"
  },
  {
    name: "Aditya S.",
    location: "Hyderabad",
    testimonial: "Worth every rupee. The final project alone gave me confidence to apply for jobs. The instructor's explanation of complex topics is clear and concise.",
    image: "https://randomuser.me/api/portraits/men/33.jpg",
    role: "Cloud Engineer"
  },
  {
    name: "Priya R.",
    location: "Chennai",
    testimonial: "I was completely new to DevOps, but this course made everything clear. Now I've added these skills to my resume and I'm getting more interview calls.",
    image: "https://randomuser.me/api/portraits/women/36.jpg",
    role: "Full Stack Developer"
  }
];

const TestimonialsSection = () => {
  return (
    <section className="section bg-gray-50">
      <div className="container px-4 md:px-6">
        <div className="flex flex-col items-center text-center space-y-4 mb-12">
          <div className="inline-block rounded-lg bg-brand-50 px-3 py-1 text-sm text-brand-600">
            Student Success Stories
          </div>
          <h2 className="text-3xl font-bold tracking-tighter md:text-4xl/tight text-black">
            What Our <span className="text-brand-500">Students Say</span>
          </h2>
          <p className="max-w-[700px] text-black md:text-xl/relaxed lg:text-base/relaxed xl:text-xl/relaxed">
            Join hundreds of students who have transformed their careers with our course.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {testimonials.map((testimonial, index) => (
            <Card key={index} className="border-0 shadow-md">
              <CardContent className="p-6">
                <div className="flex items-start space-x-4">
                  <img 
                    src={testimonial.image} 
                    alt={testimonial.name}
                    className="h-12 w-12 rounded-full object-cover"
                  />
                  <div>
                    <h3 className="font-bold text-black">{testimonial.name}</h3>
                    <p className="text-sm text-gray-500">{testimonial.location} • {testimonial.role}</p>
                  </div>
                </div>
                
                <div className="mt-4">
                  <div className="flex mb-2">
                    {[...Array(5)].map((_, i) => (
                      <svg 
                        key={i}
                        xmlns="http://www.w3.org/2000/svg" 
                        width="16" 
                        height="16" 
                        viewBox="0 0 24 24" 
                        fill="currentColor"
                        className="text-yellow-400"
                      >
                        <polygon points="12 2 15.09 8.26 22 9.27 17 14.14 18.18 21.02 12 17.77 5.82 21.02 7 14.14 2 9.27 8.91 8.26 12 2"></polygon>
                      </svg>
                    ))}
                  </div>
                  <p className="text-black">"{testimonial.testimonial}"</p>
                </div>
              </CardContent>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TestimonialsSection;
