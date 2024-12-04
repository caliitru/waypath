import React from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/landing/Navbar';
import { Footer } from '../components/landing/footer/Footer';
import { Brain, Shield, Target } from 'lucide-react';

export function AboutUs() {
  const features = [
    {
      icon: Brain,
      title: 'Smarter Tools',
      description: 'Our AI-powered platform makes credit repair faster, smarter, and easier than ever.'
    },
    {
      icon: Shield,
      title: 'Transparent Process',
      description: 'Real-time updates and full visibility mean no surprises—ever.'
    },
    {
      icon: Target,
      title: 'Tailored Plans',
      description: 'Whether you prefer DIY or Done-For-You services, we customize your journey to fit your goals.'
    }
  ];

  const scrollToHowItWorks = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.preventDefault();
    const howItWorksSection = document.getElementById('how-it-works');
    if (howItWorksSection) {
      howItWorksSection.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="relative bg-[#003366] text-white py-24 overflow-hidden">
          <div className="absolute inset-0 opacity-10">
            <div className="absolute inset-0 bg-[radial-gradient(#78C5B6_1px,transparent_1px)] [background-size:16px_16px]" />
          </div>
          
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              className="max-w-3xl"
            >
              <h1 className="text-4xl md:text-5xl font-bold mb-6">
                We're Here to Help You Build a Better Financial Future
              </h1>
              <p className="text-xl text-gray-200 mb-8">
                With smarter tools and a transparent process, Pathway Credit is your trusted partner in credit repair.
              </p>
              <button 
                onClick={scrollToHowItWorks}
                className="bg-[#78C5B6] text-white px-8 py-3 rounded-lg hover:bg-[#5BA697] transition-colors"
              >
                Learn How It Works
              </button>
            </motion.div>
          </div>
        </section>

        {/* Who We Are Section */}
        <section className="py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="max-w-3xl mx-auto text-center"
            >
              <h2 className="text-3xl font-bold text-[#003366] mb-6">
                Your Partner on the Path to Better Credit
              </h2>
              <p className="text-xl text-gray-600">
                Pathway Credit was founded with one mission: to make credit repair simple, accessible, and transparent for everyone. We know credit repair can feel overwhelming, which is why we use cutting-edge technology and a customer-first approach to help you move forward.
              </p>
            </motion.div>
          </div>
        </section>

        {/* How We're Different Section */}
        <section className="py-20 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center mb-16"
            >
              <h2 className="text-3xl font-bold text-[#003366] mb-4">
                Why Choose Pathway Credit?
              </h2>
              <p className="text-xl text-gray-600">
                We combine technology and expertise to deliver exceptional results
              </p>
            </motion.div>

            <div className="grid md:grid-cols-3 gap-8">
              {features.map((feature, index) => {
                const Icon = feature.icon;
                return (
                  <motion.div
                    key={feature.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ delay: index * 0.1 }}
                    className="bg-gray-50 p-8 rounded-xl hover:shadow-lg transition-shadow"
                  >
                    <div className="w-12 h-12 bg-[#78C5B6] bg-opacity-10 rounded-lg flex items-center justify-center mb-6">
                      <Icon className="w-6 h-6 text-[#78C5B6]" />
                    </div>
                    <h3 className="text-xl font-semibold text-gray-900 mb-4">
                      {feature.title}
                    </h3>
                    <p className="text-gray-600">
                      {feature.description}
                    </p>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* CTA Section */}
        <section className="py-20 bg-[#003366]">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              className="text-center text-white"
            >
              <h2 className="text-3xl font-bold mb-6">
                Ready to Start Your Credit Repair Journey?
              </h2>
              <p className="text-xl text-gray-200 mb-8">
                Join thousands of satisfied customers who have improved their credit with Pathway Credit.
              </p>
              <button className="bg-[#78C5B6] text-white px-8 py-3 rounded-lg hover:bg-[#5BA697] transition-colors">
                Get Started Today
              </button>
            </motion.div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}