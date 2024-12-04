import React from 'react';
import { motion } from 'framer-motion';
import { PricingCard } from './PricingCard';

const plans = [
  {
    label: "Do-It-Yourself",
    firstMonthFee: 149,
    monthlyFee: 19,
    subtitle: "Billed after credit analysis and dashboard setup",
    features: [
      "AI-powered dashboard access",
      "Credit Health Analyzer",
      "Credit Simulator",
      "Progress tracking",
      "Educational resources",
      "2 disputes per month",
      "Proactive alerts"
    ],
    tooltips: {
      "Credit Health Analyzer": "Advanced AI analysis of your credit profile with personalized insights",
      "2 disputes per month": "Additional disputes can be purchased separately",
    },
    ctaText: "Start Taking Control Today",
    idealFor: "Perfect for self-starters who want to learn and take control",
    addOnNote: "Additional disputes $10 each",
    isPopular: true
  },
  {
    label: "Basic Done-For-You",
    firstMonthFee: 149,
    monthlyFee: 79,
    subtitle: "Billed after onboarding and personalized dispute plan",
    features: [
      "Everything in DIY plan",
      "Unlimited disputes handled by our team",
      "Standard progress updates",
      "Interactive dashboard access"
    ],
    tooltips: {
      "Unlimited disputes handled by our team": "Our experts handle the entire dispute process for you",
    },
    ctaText: "Get Professional Support",
    idealFor: "Best for those wanting managed repair without extras",
  },
  {
    label: "Full Done-For-You",
    firstMonthFee: 149,
    monthlyFee: 99,
    subtitle: "Billed after comprehensive onboarding",
    features: [
      "Everything in DFY Essentials",
      "Detailed monthly progress reports",
      "Priority support response",
      "Advanced AI recommendations",
      "Credit optimization tools"
    ],
    tooltips: {
      "Priority support response": "Get responses within 24 hours",
      "Credit optimization tools": "Advanced tools for credit score simulation and optimization",
    },
    ctaText: "Experience Full Transparency",
    idealFor: "Perfect for those wanting full service and insights",
  }
];

export function PricingGrid() {
  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8 mb-16">
      {plans.map((plan, index) => (
        <motion.div
          key={plan.label}
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ delay: index * 0.1 }}
        >
          <PricingCard {...plan} />
        </motion.div>
      ))}
    </div>
  );
}