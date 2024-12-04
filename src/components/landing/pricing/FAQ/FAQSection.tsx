import React from 'react';
import { motion } from 'framer-motion';
import { FAQItem } from './FAQItem';

const faqs = [
  {
    question: "What's included in the first month fee?",
    answer: "The first month fee covers your initial credit analysis, personalized action plan creation, dashboard setup, and onboarding process. This comprehensive setup ensures you're ready to start your credit repair journey effectively."
  },
  {
    question: "How do the dispute limits work?",
    answer: "DIY plan members can submit up to 2 disputes per month. Additional disputes can be purchased for $10 each. Our DFY plans include unlimited disputes managed by our expert team, ensuring comprehensive coverage of all legitimate issues."
  },
  {
    question: "Can I upgrade or downgrade my plan?",
    answer: "Yes, you can change your plan at any time. When upgrading, you'll have immediate access to additional features. When downgrading, changes take effect at the start of your next billing cycle."
  },
  {
    question: "What's the difference between standard and priority support?",
    answer: "Standard support (included in DIY and DFY Essentials) has a 48-hour response time. Priority support (included in DFY Premium) guarantees responses within 24 hours and provides access to dedicated credit experts."
  },
  {
    question: "How does the money-back guarantee work?",
    answer: "We offer a 30-day money-back guarantee on all plans. If you're not satisfied with our service within the first 30 days, we'll refund your payment in full, no questions asked."
  },
  {
    question: "Are there any contracts or commitments?",
    answer: "No long-term contracts required. All plans are month-to-month, and you can cancel at any time. Your subscription will continue until cancelled, and you'll maintain access until the end of your current billing period."
  }
];

export function FAQSection() {
  return (
    <section id="faq" className="py-20">
      <div className="max-w-3xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-12"
        >
          <h2 className="text-3xl font-bold text-[#003366] mb-4 font-heading">
            Frequently Asked Questions
          </h2>
          <p className="text-gray-600">
            Everything you need to know about our pricing and plans
          </p>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="bg-white rounded-2xl shadow-sm divide-y divide-gray-200"
        >
          {faqs.map((faq, index) => (
            <FAQItem
              key={index}
              question={faq.question}
              answer={faq.answer}
            />
          ))}
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12"
        >
          <p className="text-gray-600 mb-4">
            Still have questions? We're here to help.
          </p>
          <button className="inline-flex items-center justify-center px-6 py-3 rounded-lg bg-[#003366] text-white hover:bg-[#002244] transition-colors">
            Contact Support
          </button>
        </motion.div>
      </div>
    </section>
  );
}