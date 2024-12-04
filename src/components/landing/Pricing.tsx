import React from 'react';
import { Check } from 'lucide-react';

const plans = [
  {
    name: 'Basic',
    price: 49,
    features: [
      'Credit Score Monitoring',
      'Basic Dispute Letters',
      'Email Support',
      'Monthly Credit Updates',
    ],
    isPopular: false,
  },
  {
    name: 'Pro',
    price: 99,
    features: [
      'Everything in Basic',
      'AI-Powered Recommendations',
      'Priority Support',
      'Custom Dispute Strategies',
      'Real-time Alerts',
      'Identity Theft Protection',
    ],
    isPopular: true,
  },
  {
    name: 'Enterprise',
    price: 199,
    features: [
      'Everything in Pro',
      'Dedicated Account Manager',
      'Legal Document Review',
      'Credit Building Coaching',
      'Unlimited Bureau Updates',
      'Business Credit Building',
    ],
    isPopular: false,
  },
];

export function Pricing() {
  return (
    <section id="pricing" className="py-20 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-16">
          <h2 className="text-4xl font-bold text-[#003366]">Simple, Transparent Pricing</h2>
          <p className="mt-4 text-xl text-gray-600">
            Choose the plan that fits your needs
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {plans.map((plan, index) => (
            <div
              key={index}
              className={`relative bg-white rounded-xl shadow-sm hover:shadow-lg transition-shadow duration-300 ${
                plan.isPopular ? 'border-2 border-[#003366]' : ''
              }`}
            >
              {plan.isPopular && (
                <div className="absolute top-0 right-0 bg-[#003366] text-white px-4 py-1 rounded-tr-xl rounded-bl-xl text-sm font-medium">
                  Most Popular
                </div>
              )}
              <div className="p-8">
                <h3 className="text-2xl font-bold text-[#003366]">{plan.name}</h3>
                <div className="mt-4 flex items-baseline">
                  <span className="text-4xl font-bold">${plan.price}</span>
                  <span className="ml-2 text-gray-600">/month</span>
                </div>
                <ul className="mt-8 space-y-4">
                  {plan.features.map((feature, featureIndex) => (
                    <li key={featureIndex} className="flex items-center">
                      <Check className="h-5 w-5 text-[#78C5B6] mr-3" />
                      <span className="text-gray-600">{feature}</span>
                    </li>
                  ))}
                </ul>
                <button
                  className={`mt-8 w-full py-3 px-6 rounded-lg transition-colors ${
                    plan.isPopular
                      ? 'bg-[#003366] text-white hover:bg-[#002244]'
                      : 'border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white'
                  }`}
                >
                  Get Started
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}