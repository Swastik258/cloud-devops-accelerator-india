import React from 'react';
import NavBar from '@/components/NavBar';
import Footer from '@/components/Footer';
import { Button } from '@/components/ui/button';
import { Check, DollarSign } from 'lucide-react';
import { Link } from 'react-router-dom';
import { useToast } from '@/hooks/use-toast';

const PricingPage = () => {
  const { toast } = useToast();
  
  const features = [
    "40+ On-demand Video Lectures",
    "Weekly Live Classes with Q&A Sessions",
    "4 Hands-on DevOps & AWS Projects",
    "Downloadable Resources & Code Examples",
    "Community Support via Dedicated Group",
    "Certificate of Completion",
    "Lifetime Access to Course Materials",
    "Course Updates as Technologies Evolve",
    "Interview Preparation Resources",
    "Resume & LinkedIn Profile Tips",
    "Personal Doubt Resolution via Email"
  ];
  
  const handleEnrollNow = () => {
    // This will eventually be replaced with actual payment processing
    toast({
      title: "Enrollment initiated",
      description: "You will be redirected to the payment gateway shortly.",
    });
    
    // For now, just show a toast notification
    setTimeout(() => {
      toast({
        title: "Demo Mode",
        description: "This is a demo site. In production, this would redirect to payment.",
      });
    }, 1500);
  };

  return (
    <div className="min-h-screen flex flex-col">
      <NavBar />
      
      <main className="flex-grow">
        {/* Header */}
        <div className="bg-brand-50 py-16 md:py-24">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <span className="inline-block rounded-lg bg-brand-100 px-3 py-1 text-sm text-brand-600 mb-4">
                Affordable Investment
              </span>
              <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold mb-6">
                Simple, Transparent <span className="gradient-text">Pricing</span>
              </h1>
              <p className="text-xl text-gray-600">
                Invest in your future with our comprehensive DevOps & AWS course with live classes.
              </p>
            </div>
          </div>
        </div>

        {/* Pricing */}
        <section className="py-16">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="bg-white rounded-2xl shadow-lg border border-gray-200 overflow-hidden">
                <div className="grid grid-cols-1 md:grid-cols-2">
                  <div className="p-8 md:p-10 flex flex-col justify-between">
                    <div>
                      <div className="flex items-center mb-2">
                        <span className="bg-brand-50 p-2 rounded-full mr-3">
                          <DollarSign className="h-6 w-6 text-brand-500" />
                        </span>
                        <h2 className="text-2xl font-bold">One-time Payment</h2>
                      </div>

                      <div className="mt-6">
                        <div className="flex items-end">
                          <span className="text-4xl font-bold">₹2,999</span>
                          <span className="text-gray-500 ml-2 line-through">₹4,999</span>
                        </div>
                        <p className="text-brand-600 font-medium mt-1">Limited Time Offer (40% off)</p>
                      </div>

                      <div className="mt-6">
                        <p className="text-gray-600 mb-4">
                          Get full access to the DevOps & AWS Masterclass with weekly live classes and one-on-one doubt resolution.
                        </p>
                        <Button className="w-full bg-brand-500 hover:bg-brand-600 py-6 text-lg" onClick={handleEnrollNow}>
                          Enroll Now
                        </Button>
                        <p className="text-sm text-gray-500 mt-2 text-center">
                          Secure payment via Razorpay • UPI, Cards, Net Banking accepted
                        </p>
                      </div>
                    </div>

                    <div className="mt-8">
                      <div className="flex items-center p-4 rounded-lg bg-gray-50 border border-gray-100">
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
                          className="text-green-500 mr-3 flex-shrink-0"
                        >
                          <path d="M12 22s8-4 8-10V5l-8-3-8 3v7c0 6 8 10 8 10z"></path>
                          <path d="m9 12 2 2 4-4"></path>
                        </svg>
                        <p className="text-gray-600 text-sm">
                          7-day money-back guarantee. If you're not satisfied, we'll refund your payment.
                        </p>
                      </div>
                    </div>
                  </div>

                  <div className="bg-gray-50 p-8 md:p-10">
                    <h3 className="font-semibold text-lg mb-6">Everything included:</h3>
                    <ul className="space-y-4">
                      {features.map((feature, index) => (
                        <li key={index} className="flex items-start">
                          <Check className="h-5 w-5 text-brand-500 mt-0.5 mr-3 flex-shrink-0" />
                          <span>{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <h3 className="text-xl font-semibold mb-6 text-center">Frequently Asked Questions About Pricing</h3>
                
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold mb-2">Are there any hidden charges?</h4>
                    <p className="text-gray-600">
                      No, there are no hidden charges. The price you see is the only amount you pay for lifetime access to the course.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold mb-2">What's your refund policy?</h4>
                    <p className="text-gray-600">
                      We offer a 7-day money-back guarantee. If you're not satisfied, email us within 7 days of purchase for a full refund.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold mb-2">Do I have to pay for updates?</h4>
                    <p className="text-gray-600">
                      No, all future updates to course content are included in your one-time payment. As DevOps and AWS evolve, we update our content.
                    </p>
                  </div>

                  <div className="bg-white p-6 rounded-xl shadow-sm border border-gray-100">
                    <h4 className="font-semibold mb-2">What payment methods do you accept?</h4>
                    <p className="text-gray-600">
                      We accept multiple payment methods through Razorpay including Credit/Debit Cards, UPI, Net Banking, and Wallets.
                    </p>
                  </div>
                </div>
              </div>

              <div className="mt-12">
                <div className="bg-white p-6 md:p-8 rounded-xl shadow-sm border border-gray-100">
                  <h3 className="text-xl font-semibold mb-4">Group Enrollment Discount</h3>
                  <p className="text-gray-600 mb-6">
                    Enrolling with friends or colleagues? Get special discounts for group enrollment of 3 or more people. Contact us for details.
                  </p>
                  <div className="flex flex-col sm:flex-row gap-4">
                    <Button className="bg-brand-500 hover:bg-brand-600" asChild>
                      <Link to="/contact">Contact for Group Discount</Link>
                    </Button>
                    <Button variant="outline" className="border-brand-200 text-brand-700 hover:bg-brand-50">
                      Learn More
                    </Button>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </section>

        {/* Comparison */}
        <section className="py-16 bg-gray-50">
          <div className="container px-4 md:px-6">
            <div className="max-w-4xl mx-auto">
              <div className="text-center mb-12">
                <h2 className="text-2xl font-bold mb-4">Why Our Course Offers the Best Value</h2>
                <p className="text-gray-600">
                  See how our DevOps & AWS course compares to other learning options.
                </p>
              </div>

              <div className="overflow-x-auto">
                <table className="min-w-full bg-white rounded-xl overflow-hidden shadow-sm border border-gray-200">
                  <thead>
                    <tr>
                      <th className="py-4 px-6 text-left bg-gray-50">Feature</th>
                      <th className="py-4 px-6 text-center bg-gray-50">Our Course</th>
                      <th className="py-4 px-6 text-center bg-gray-50">Typical Online Courses</th>
                      <th className="py-4 px-6 text-center bg-gray-50">Bootcamps</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="py-3 px-6 border-t">Price</td>
                      <td className="py-3 px-6 border-t text-center font-medium text-brand-600">₹2,999</td>
                      <td className="py-3 px-6 border-t text-center">₹5,000 - ₹15,000</td>
                      <td className="py-3 px-6 border-t text-center">₹50,000+</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border-t">Duration</td>
                      <td className="py-3 px-6 border-t text-center font-medium">3 months (self-paced)</td>
                      <td className="py-3 px-6 border-t text-center">Varies</td>
                      <td className="py-3 px-6 border-t text-center">3-6 months (fixed)</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border-t">Hands-on Projects</td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border-t text-center">
                        <span className="text-gray-400">Sometimes</span>
                      </td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border-t">Course Material Access</td>
                      <td className="py-3 px-6 border-t text-center font-medium">Lifetime</td>
                      <td className="py-3 px-6 border-t text-center">Usually 1 year</td>
                      <td className="py-3 px-6 border-t text-center">Limited time</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border-t">Industry Relevant Content</td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border-t text-center">
                        <span className="text-gray-400">Varies</span>
                      </td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border-t">Support</td>
                      <td className="py-3 px-6 border-t text-center font-medium">Community & Email</td>
                      <td className="py-3 px-6 border-t text-center">Limited</td>
                      <td className="py-3 px-6 border-t text-center">In-person</td>
                    </tr>
                    <tr>
                      <td className="py-3 px-6 border-t">Certificate</td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                      <td className="py-3 px-6 border-t text-center">
                        <Check className="h-5 w-5 text-green-500 mx-auto" />
                      </td>
                    </tr>
                  </tbody>
                </table>
              </div>
            </div>
          </div>
        </section>

        {/* CTA */}
        <section className="py-16 bg-gradient-to-r from-brand-500 to-brand-700 text-white">
          <div className="container px-4 md:px-6">
            <div className="max-w-3xl mx-auto text-center">
              <h2 className="text-3xl font-bold mb-6">Ready to Start Your DevOps & AWS Journey?</h2>
              <p className="text-xl mb-8 text-white/90">
                Enroll now and transform your career with in-demand skills.
              </p>
              <Button size="lg" className="bg-white text-brand-600 hover:bg-gray-100 py-6 px-10 text-lg" onClick={handleEnrollNow}>
                Enroll Now for ₹2,999 Only
              </Button>
              <p className="mt-4 text-white/80">
                7-day money-back guarantee. No risk, cancel anytime.
              </p>
            </div>
          </div>
        </section>
      </main>
      
      <Footer />
    </div>
  );
};

export default PricingPage;
