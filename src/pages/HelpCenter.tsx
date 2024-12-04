import React, { useState } from 'react';
import { motion } from 'framer-motion';
import { Navbar } from '../components/landing/Navbar';
import { Footer } from '../components/landing/footer/Footer';
import { Search, ChevronDown, FileText, MessageCircle, Mail } from 'lucide-react';

export function HelpCenter() {
  const [searchQuery, setSearchQuery] = useState('');
  const [activeCategory, setActiveCategory] = useState<string | null>(null);

  const faqs = {
    'Getting Started': [
      {
        question: 'How does the credit repair process work?',
        answer: 'Our credit repair process involves analyzing your credit reports, identifying errors, and disputing inaccurate information with credit bureaus. We use AI-powered tools to streamline this process and provide you with regular updates on progress.'
      },
      {
        question: 'What do I need to get started?',
        answer: 'To get started, you\'ll need to provide your basic information, copies of your credit reports from all three bureaus, and any supporting documentation related to disputes you want to file.'
      }
    ],
    'Billing & Pricing': [
      {
        question: 'How much does the service cost?',
        answer: 'We offer several pricing tiers starting at $19/month for our DIY plan. Each plan includes different features and service levels. Check our pricing page for detailed information.'
      },
      {
        question: 'Can I cancel my subscription at any time?',
        answer: 'Yes, you can cancel your subscription at any time. There are no long-term contracts or cancellation fees.'
      }
    ],
    'Technical Support': [
      {
        question: 'How do I reset my password?',
        answer: 'You can reset your password by clicking the "Forgot Password" link on the login page. We\'ll send you an email with instructions to create a new password.'
      },
      {
        question: 'What browsers are supported?',
        answer: 'Our platform supports all modern browsers including Chrome, Firefox, Safari, and Edge. We recommend keeping your browser updated for the best experience.'
      }
    ]
  };

  return (
    <div className="min-h-screen bg-gray-50">
      <Navbar />
      
      <main className="pt-20">
        {/* Hero Section */}
        <section className="bg-[#003366] text-white py-20">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="max-w-3xl mx-auto text-center">
              <motion.h1
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                className="text-4xl font-bold mb-6"
              >
                How can we help you?
              </motion.h1>
              
              <motion.div
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: 0.2 }}
                className="relative"
              >
                <Search className="absolute left-4 top-1/2 -translate-y-1/2 w-5 h-5 text-gray-400" />
                <input
                  type="text"
                  placeholder="Search for answers..."
                  value={searchQuery}
                  onChange={(e) => setSearchQuery(e.target.value)}
                  className="w-full pl-12 pr-4 py-3 rounded-lg bg-white text-gray-900 focus:outline-none focus:ring-2 focus:ring-[#78C5B6]"
                />
              </motion.div>
            </div>
          </div>
        </section>

        {/* Quick Links */}
        <section className="py-12 bg-white">
          <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
            <div className="grid md:grid-cols-3 gap-8">
              {[
                { icon: FileText, title: 'Documentation', description: 'Browse our guides and tutorials' },
                { icon: MessageCircle, title: 'Live Chat', description: 'Chat with our support team' },
                { icon: Mail, title: 'Email Support', description: 'Get help via email' }
              ].map((item, index) => {
                const Icon = item.icon;
                return (
                  <motion.div
                    key={item.title}
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    viewport={{ once: true }}
                    className="flex items-center gap-4 p-6 rounded-xl border border-gray-200 hover:border-[#78C5B6] transition-colors cursor-pointer"
                  >
                    <div className="p-3 rounded-lg bg-[#78C5B6] bg-opacity-10">
                      <Icon className="w-6 h-6 text-[#78C5B6]" />
                    </div>
                    <div>
                      <h3 className="font-semibold text-gray-900">{item.title}</h3>
                      <p className="text-sm text-gray-600">{item.description}</p>
                    </div>
                  </motion.div>
                );
              })}
            </div>
          </div>
        </section>

        {/* FAQ Section */}
        <section className="py-20">
          <div className="max-w-4xl mx-auto px-4 sm:px-6 lg:px-8">
            <h2 className="text-3xl font-bold text-center text-gray-900 mb-12">
              Frequently Asked Questions
            </h2>

            <div className="space-y-8">
              {Object.entries(faqs).map(([category, questions]) => (
                <motion.div
                  key={category}
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  viewport={{ once: true }}
                  className="bg-white rounded-xl shadow-sm overflow-hidden"
                >
                  <button
                    onClick={() => setActiveCategory(activeCategory === category ? null : category)}
                    className="w-full px-6 py-4 flex items-center justify-between text-left"
                  >
                    <h3 className="text-lg font-semibold text-gray-900">{category}</h3>
                    <ChevronDown
                      className={`w-5 h-5 text-gray-500 transition-transform ${
                        activeCategory === category ? 'transform rotate-180' : ''
                      }`}
                    />
                  </button>

                  {activeCategory === category && (
                    <div className="px-6 pb-4">
                      <div className="space-y-4">
                        {questions.map((faq, index) => (
                          <div key={index} className="border-t pt-4">
                            <h4 className="font-medium text-gray-900 mb-2">
                              {faq.question}
                            </h4>
                            <p className="text-gray-600">{faq.answer}</p>
                          </div>
                        ))}
                      </div>
                    </div>
                  )}
                </motion.div>
              ))}
            </div>
          </div>
        </section>
      </main>

      <Footer />
    </div>
  );
}