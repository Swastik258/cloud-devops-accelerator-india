
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';

const TestimonialsPage = () => {
  const testimonials = [
    {
      name: "Rahul M.",
      location: "Pune",
      role: "Junior DevOps Engineer",
      company: "TechNova Solutions",
      testimonial: "This course helped me transition from a support role to a DevOps position. The hands-on projects were very helpful and gave me practical experience that I could talk about in interviews. Within a month of completing the course, I landed a job with a 40% salary increase. The AWS section was particularly valuable as it covered services that are actually used in the industry.",
      image: "https://randomuser.me/api/portraits/men/41.jpg",
    },
    {
      name: "Sneha K.",
      location: "Bangalore",
      role: "Software Developer",
      company: "CloudSys Technologies",
      testimonial: "Very beginner-friendly and practical. I understood concepts I couldn't grasp before. The AWS section was particularly well-explained with real examples. As a frontend developer, I had no experience with infrastructure, but this course made everything clear and logical. Now I can confidently work on deployment and infrastructure tasks for my team.",
      image: "https://randomuser.me/api/portraits/women/44.jpg",
    },
    {
      name: "Aditya S.",
      location: "Hyderabad",
      role: "Cloud Engineer",
      company: "Infosys",
      testimonial: "Worth every rupee. The final project alone gave me confidence to apply for jobs. The instructor's explanation of complex topics is clear and concise. I had tried several other courses but they were either too theoretical or jumped straight into advanced concepts. This course had the perfect balance of theory and practice, with plenty of real-world examples.",
      image: "https://randomuser.me/api/portraits/men/33.jpg",
    },
    {
      name: "Priya R.",
      location: "Chennai",
      role: "Full Stack Developer",
      company: "HexaWare",
      testimonial: "I was completely new to DevOps, but this course made everything clear. Now I've added these skills to my resume and I'm getting more interview calls. The instructor has a gift for explaining complex topics in simple terms. I especially appreciated the troubleshooting sections that showed how to fix common errors and issues.",
      image: "https://randomuser.me/api/portraits/women/36.jpg",
    },
    {
      name: "Vikram J.",
      location: "Mumbai",
      role: "System Administrator",
      company: "Global Insurance Co.",
      testimonial: "As a sysadmin looking to upskill, this course was perfect. I can now automate many of my daily tasks using the DevOps tools I learned. The Docker and Kubernetes sections were particularly valuable for my work. My manager has noticed the improvement in my skills and I'm now leading our cloud migration project.",
      image: "https://randomuser.me/api/portraits/men/22.jpg",
    },
    {
      name: "Anjali T.",
      location: "Delhi",
      role: "QA Engineer",
      company: "MindTree",
      testimonial: "I wanted to learn about CI/CD to improve our testing processes, and this course exceeded my expectations. The Jenkins section was comprehensive and I was able to implement what I learned immediately. Our test automation is now integrated into the CI/CD pipeline, saving us hours of manual work every day.",
      image: "https://randomuser.me/api/portraits/women/29.jpg",
    }
  ];

  const videoTestimonials = [
    {
      name: "Suresh P.",
      location: "Bangalore",
      role: "DevOps Engineer",
      company: "Leading E-commerce Company",
      thumbnail: "https://images.unsplash.com/photo-1560250056-07ba64664864?q=80&w=2574&auto=format&fit=crop",
      videoId: "testimonial1"
    },
    {
      name: "Neha G.",
      location: "Pune",
      role: "Cloud Engineer",
      company: "Financial Tech Startup",
      thumbnail: "https://images.unsplash.com/photo-1491217187395-4dfbabe4f8c8?q=80&w=2671&auto=format&fit=crop",
      videoId: "testimonial2"
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
                Student <span className="gradient-text">Success Stories</span>
              </h1>
              <p className="text-xl text-gray-600">
                Hear from our graduates who've transformed their careers with our DevOps & AWS course.
              </p>
            </div>
          </div>
        </div>

        {/* Stats */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="text-4xl font-bold text-brand-500">500+</div>
                  <div className="text-gray-500 mt-2">Students Trained</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="text-4xl font-bold text-brand-500">4.9/5</div>
                  <div className="text-gray-500 mt-2">Average Rating</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="text-4xl font-bold text-brand-500">80%</div>
                  <div className="text-gray-500 mt-2">Career Advancement</div>
                </div>
                <div className="bg-white rounded-lg p-6 shadow-sm text-center">
                  <div className="text-4xl font-bold text-brand-500">30%+</div>
                  <div className="text-gray-500 mt-2">Average Salary Increase</div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Video Testimonials */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Video Testimonials</h2>
                <p className="text-gray-600">
                  Watch how our course has helped students advance their careers.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                {videoTestimonials.map((video, index) => (
                  <div key={index} className="bg-white rounded-xl overflow-hidden shadow-sm border border-gray-100">
                    <div className="aspect-video bg-gray-100 relative">
                      <img 
                        src={video.thumbnail} 
                        alt={video.name}
                        className="w-full h-full object-cover"
                      />
                      <div className="absolute inset-0 flex items-center justify-center">
                        <div className="bg-white/90 rounded-full p-3 shadow-md cursor-pointer hover:bg-white transition-colors">
                          <svg 
                            xmlns="http://www.w3.org/2000/svg" 
                            width="28" 
                            height="28" 
                            viewBox="0 0 24 24" 
                            fill="none" 
                            stroke="currentColor" 
                            strokeWidth="2" 
                            strokeLinecap="round" 
                            strokeLinejoin="round" 
                            className="text-brand-500"
                          >
                            <polygon points="5 3 19 12 5 21 5 3"></polygon>
                          </svg>
                        </div>
                      </div>
                    </div>
                    <div className="p-6">
                      <h3 className="font-semibold text-lg">{video.name}</h3>
                      <p className="text-gray-500">{video.role} at {video.company}</p>
                      <p className="text-gray-500 text-sm mt-1">{video.location}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Written Testimonials */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">What Our Students Say</h2>
                <p className="text-gray-600">
                  Read some of the feedback we've received from our graduates.
                </p>
              </div>

              <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                {testimonials.map((testimonial, index) => (
                  <div key={index} className="bg-white rounded-xl p-6 shadow-sm border border-gray-100">
                    <div className="flex items-start mb-4">
                      <img 
                        src={testimonial.image} 
                        alt={testimonial.name}
                        className="h-12 w-12 rounded-full object-cover mr-4"
                      />
                      <div>
                        <h3 className="font-semibold">{testimonial.name}</h3>
                        <p className="text-sm text-gray-500">{testimonial.role} at {testimonial.company}</p>
                        <p className="text-sm text-gray-500">{testimonial.location}</p>
                      </div>
                    </div>
                    
                    <div className="mb-4">
                      <div className="flex">
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
                    </div>
                    
                    <p className="text-gray-600">"{testimonial.testimonial}"</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* Companies */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Where Our Students Work</h2>
                <p className="text-gray-600">
                  Our graduates are working at some of the leading tech companies in India.
                </p>
              </div>

              <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-6">
                {['Amazon', 'Microsoft', 'TCS', 'Infosys', 'Wipro', 'Accenture', 'HCL', 'MindTree', 'CTS', 'IBM', 'Tech Mahindra', 'Capgemini'].map((company, index) => (
                  <div key={index} className="h-20 bg-white rounded-lg flex items-center justify-center shadow-sm">
                    <span className="font-semibold text-gray-500">{company}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-brand-500 to-brand-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Join Our Success Stories</h2>
              <p className="text-xl mb-8 text-white/90">
                Take the first step towards transforming your career today.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100">
                  Enroll Now for ₹1,999
                </Button>
                <Button size="lg" variant="outline" className="border-white text-white hover:bg-white/10">
                  View Course Curriculum
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

export default TestimonialsPage;
