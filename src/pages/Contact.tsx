
import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Input } from '@/components/ui/input';
import { Textarea } from '@/components/ui/textarea';
import { Contact } from 'lucide-react';
import { useToast } from "@/hooks/use-toast";

const ContactPage = () => {
  const { toast } = useToast();
  
  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    toast({
      title: "Message sent!",
      description: "Thanks for contacting us. We'll get back to you soon.",
    });
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-brand-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Get In <span className="gradient-text">Touch</span>
              </h1>
              <p className="text-xl text-gray-600">
                Have questions or need more information? We're here to help.
              </p>
            </div>
          </div>
        </div>

        {/* Contact Form */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-5xl mx-auto">
              <div className="grid grid-cols-1 md:grid-cols-2 gap-12">
                <div>
                  <h2 className="text-2xl font-bold mb-6">Send Us a Message</h2>
                  <form onSubmit={handleSubmit} className="space-y-6">
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                      <div>
                        <label htmlFor="first-name" className="block text-sm font-medium text-gray-700 mb-1">First Name</label>
                        <Input id="first-name" placeholder="John" required />
                      </div>
                      <div>
                        <label htmlFor="last-name" className="block text-sm font-medium text-gray-700 mb-1">Last Name</label>
                        <Input id="last-name" placeholder="Doe" required />
                      </div>
                    </div>

                    <div>
                      <label htmlFor="email" className="block text-sm font-medium text-gray-700 mb-1">Email</label>
                      <Input id="email" type="email" placeholder="your@email.com" required />
                    </div>

                    <div>
                      <label htmlFor="phone" className="block text-sm font-medium text-gray-700 mb-1">Phone Number</label>
                      <Input id="phone" placeholder="Your phone number" />
                    </div>

                    <div>
                      <label htmlFor="subject" className="block text-sm font-medium text-gray-700 mb-1">Subject</label>
                      <select 
                        id="subject" 
                        className="w-full rounded-md border border-gray-300 px-3 py-2 text-gray-900 placeholder-gray-500 focus:border-brand-500 focus:ring-1 focus:ring-brand-500"
                        required
                      >
                        <option value="">Select a subject</option>
                        <option value="general">General Inquiry</option>
                        <option value="course">Course Information</option>
                        <option value="payment">Payment/Billing</option>
                        <option value="technical">Technical Support</option>
                        <option value="other">Other</option>
                      </select>
                    </div>

                    <div>
                      <label htmlFor="message" className="block text-sm font-medium text-gray-700 mb-1">Your Message</label>
                      <Textarea id="message" placeholder="How can we help you?" className="min-h-[150px]" required />
                    </div>

                    <Button type="submit" className="w-full bg-brand-500 hover:bg-brand-600 py-6">Send Message</Button>
                  </form>
                </div>

                <div>
                  <h2 className="text-2xl font-bold mb-6">Contact Information</h2>
                  
                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 p-6 mb-6">
                    <div className="space-y-6">
                      <div className="flex items-start space-x-4">
                        <div className="bg-brand-50 p-3 rounded-full text-brand-500">
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
                          >
                            <path d="M22 16.92v3a2 2 0 0 1-2.18 2 19.79 19.79 0 0 1-8.63-3.07 19.5 19.5 0 0 1-6-6 19.79 19.79 0 0 1-3.07-8.67A2 2 0 0 1 4.11 2h3a2 2 0 0 1 2 1.72 12.84 12.84 0 0 0 .7 2.81 2 2 0 0 1-.45 2.11L8.09 9.91a16 16 0 0 0 6 6l1.27-1.27a2 2 0 0 1 2.11-.45 12.84 12.84 0 0 0 2.81.7A2 2 0 0 1 22 16.92z"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Phone</h3>
                          <p className="text-gray-600">+91 9876543210</p>
                          <p className="text-gray-600">Monday-Friday, 10AM-6PM IST</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-brand-50 p-3 rounded-full text-brand-500">
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
                          >
                            <rect x="2" y="4" width="20" height="16" rx="2"></rect>
                            <path d="m22 7-8.97 5.7a1.94 1.94 0 0 1-2.06 0L2 7"></path>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Email</h3>
                          <p className="text-gray-600">support@devopsacademy.in</p>
                          <p className="text-gray-600">We usually respond within 24-48 hours</p>
                        </div>
                      </div>

                      <div className="flex items-start space-x-4">
                        <div className="bg-brand-50 p-3 rounded-full text-brand-500">
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
                          >
                            <path d="M21 10c0 7-9 13-9 13s-9-6-9-13a9 9 0 0 1 18 0z"></path>
                            <circle cx="12" cy="10" r="3"></circle>
                          </svg>
                        </div>
                        <div>
                          <h3 className="font-semibold">Office</h3>
                          <p className="text-gray-600">123 Tech Park, Whitefield</p>
                          <p className="text-gray-600">Bangalore, Karnataka 560066</p>
                        </div>
                      </div>
                    </div>
                  </div>

                  <div className="bg-white rounded-xl shadow-sm border border-gray-100 overflow-hidden">
                    <iframe
                      src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3888.3464708876826!2d77.7492318!3d12.9555664!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x3bae132663889bd1%3A0x7c8f4e9c94079c75!2sWhitefield%2C%20Bengaluru%2C%20Karnataka!5e0!3m2!1sen!2sin!4v1651234567890!5m2!1sen!2sin"
                      width="100%"
                      height="300"
                      style={{ border: 0 }}
                      allowFullScreen={false}
                      loading="lazy"
                      referrerPolicy="no-referrer-when-downgrade"
                      title="Office Location"
                    ></iframe>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Frequently Asked Questions</h2>
                <p className="text-gray-600">
                  Quick answers to common questions
                </p>
              </div>

              <div className="space-y-6">
                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">What's the response time for inquiries?</h3>
                  <p className="text-gray-600">We typically respond to all inquiries within 24-48 business hours.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">Do you offer course customization for companies?</h3>
                  <p className="text-gray-600">Yes, we offer customized corporate training programs. Please contact us with your specific requirements.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">How can I request an invoice for my payment?</h3>
                  <p className="text-gray-600">After payment, an invoice is automatically sent to your registered email. If you need any specific details on the invoice, please contact our support team.</p>
                </div>

                <div className="bg-white rounded-lg p-6 shadow-sm">
                  <h3 className="font-semibold mb-2">Is there a physical office I can visit?</h3>
                  <p className="text-gray-600">Yes, our office is located in Whitefield, Bangalore. Please contact us in advance to schedule a visit.</p>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Connect with Us */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-2xl font-bold mb-6">Connect With Us</h2>
              <p className="text-gray-600 mb-8">
                Follow us on social media to stay updated with the latest news, offers, and tech trends.
              </p>
              <div className="flex justify-center space-x-6">
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <span className="sr-only">LinkedIn</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <span className="sr-only">Twitter</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <span className="sr-only">YouTube</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M23.498 6.186a3.016 3.016 0 0 0-2.122-2.136C19.505 3.545 12 3.545 12 3.545s-7.505 0-9.377.505A3.017 3.017 0 0 0 .502 6.186C0 8.07 0 12 0 12s0 3.93.502 5.814a3.016 3.016 0 0 0 2.122 2.136c1.871.505 9.376.505 9.376.505s7.505 0 9.377-.505a3.015 3.015 0 0 0 2.122-2.136C24 15.93 24 12 24 12s0-3.93-.502-5.814zM9.545 15.568V8.432L15.818 12l-6.273 3.568z" />
                  </svg>
                </a>
                <a href="#" className="bg-gray-100 hover:bg-gray-200 text-gray-600 p-3 rounded-full transition-colors">
                  <span className="sr-only">Instagram</span>
                  <svg className="h-6 w-6" fill="currentColor" viewBox="0 0 24 24">
                    <path d="M12.315 2c2.43 0 2.784.013 3.808.06 1.064.049 1.791.218 2.427.465a4.902 4.902 0 011.772 1.153 4.902 4.902 0 011.153 1.772c.247.636.416 1.363.465 2.427.048 1.067.06 1.407.06 4.123v.08c0 2.643-.012 2.987-.06 3.987-.049 1.064-.218 1.791-.465 2.427a4.902 4.902 0 01-1.153 1.772 4.902 4.902 0 01-1.772 1.153c-.636.247-1.363.416-2.427.465-1.067.048-1.407.06-4.123.06h-.08c-2.643 0-2.987-.012-3.987-.06-1.064-.049-1.791-.218-2.427-.465a4.902 4.902 0 01-1.772-1.153 4.902 4.902 0 01-1.153-1.772c-.247-.636-.416-1.363-.465-2.427-.047-1.024-.06-1.379-.06-3.808v-.63c0-2.43.013-2.784.06-3.808.049-1.064.218-1.791.465-2.427a4.902 4.902 0 011.153-1.772A4.902 4.902 0 015.45 2.525c.636-.247 1.363-.416 2.427-.465C8.901 2.013 9.256 2 11.685 2h.63zm-.081 1.802h-.468c-2.456 0-2.784.011-3.807.058-.975.045-1.504.207-1.857.344-.467.182-.8.398-1.15.748-.35.35-.566.683-.748 1.15-.137.353-.3.882-.344 1.857-.047 1.023-.058 1.351-.058 3.807v.468c0 2.456.011 2.784.058 3.807.045.975.207 1.504.344 1.857.182.466.399.8.748 1.15.35.35.683.566 1.15.748.353.137.882.3 1.857.344 1.054.048 1.37.058 4.041.058h.08c2.597 0 2.917-.01 3.96-.058.976-.045 1.505-.207 1.858-.344.466-.182.8-.398 1.15-.748.35-.35.566-.683.748-1.15.137-.353.3-.882.344-1.857.048-1.055.058-1.37.058-4.041v-.08c0-2.597-.01-2.917-.058-3.96-.045-.976-.207-1.505-.344-1.858a3.097 3.097 0 00-.748-1.15 3.098 3.098 0 00-1.15-.748c-.353-.137-.882-.3-1.857-.344-1.023-.047-1.351-.058-3.807-.058zM12 6.865a5.135 5.135 0 110 10.27 5.135 5.135 0 010-10.27zm0 1.802a3.333 3.333 0 100 6.666 3.333 3.333 0 000-6.666zm5.338-3.205a1.2 1.2 0 110 2.4 1.2 1.2 0 010-2.4z" />
                  </svg>
                </a>
              </div>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default ContactPage;
