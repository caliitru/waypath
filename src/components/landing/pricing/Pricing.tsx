import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../../lib/utils';

const plans = [
  {
    name: "Basic Plan",
    price: 49,
    description: "Perfect for individuals starting their credit repair journey",
    features: [
      "Credit score monitoring",
      "Basic dispute letters",
      "Email support",
      "Monthly credit updates"
    ],
    isPopular: false
  },
  {
    name: "Pro Plan",
    price: 99,
    description: "Most popular choice for comprehensive credit repair",
    features: [
      "Everything in Basic",
      "AI-powered recommendations",
      "Priority support",
      "Custom dispute strategies",
      "Real-time alerts",
      "Identity theft protection"
    ],
    isPopular: true
  },
  {
    name: "Enterprise",
    price: 199,
    description: "Complete solution for maximum credit improvement",
    features: [
      "Everything in Pro",
      "Dedicated account manager",
      "Legal document review",
      "Credit building coaching",
      "Unlimited bureau updates",
      "Business credit building"
    ],
    isPopular: false
  }
];

export function Pricing() {
  return (
    <section className="py-20 bg-[#E5E7E9]">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mb-16"
        >
          <h2 className="text-4xl font-bold text-[#2F3337] mb-4">
            Simple, Transparent Pricing
          </h2>
          <p className="text-xl text-[#4A4F54]">
            Choose the plan that fits your needs
          </p>
        </motion.div>

        <div className="grid md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <motion.div
              key={plan.name}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ delay: index * 0.1 }}
              className={cn(
                "relative bg-white rounded-xl p-8 shadow-lg hover:shadow-xl transition-all duration-300",
                plan.isPopular && "border-2 border-[#FF6B35]"
              )}
            >
              {plan.isPopular && (
                <div className="absolute -top-4 right-8 bg-[#FF6B35] text-white px-4 py-1 rounded-full text-sm font-medium">
                  Most Popular
                </div>
              )}

              <div className="mb-8">
                <h3 className="text-2xl font-bold text-[#2F3337] mb-2">
                  {plan.name}
                </h3>
                <p className="text-[#4A4F54] mb-4">{plan.description}</p>
                <div className="flex items-baseline">
                  <span className="text-[#FF6B35] text-4xl font-bold">${plan.price}</span>
                  <span className="text-[#4A4F54] ml-2">/month</span>
                </div>
              </div>

              <ul className="space-y-4 mb-8">
                {plan.features.map((feature) => (
                  <li key={feature} className="flex items-center gap-3">
                    <Check className="w-5 h-5 text-[#7A9E7E] flex-shrink-0" />
                    <span className="text-[#4A4F54]">{feature}</span>
                  </li>
                ))}
              </ul>

              <button
                className={cn(
                  "w-full py-3 px-6 rounded-lg font-medium transition-colors",
                  plan.isPopular
                    ? "bg-[#FF6B35] text-white hover:bg-[#FF6B35]/90"
                    : "border-2 border-[#2F3337] text-[#2F3337] hover:bg-[#2F3337] hover:text-white"
                )}
              >
                Get Started
              </button>
            </motion.div>
          ))}
        </div>

        <motion.p
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          className="text-center mt-12 text-[#4A4F54]"
        >
          All plans include our 30-day money-back guarantee
        </motion.p>
      </div>
    </section>
  );
}