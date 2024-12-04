import React from 'react';
import { motion } from 'framer-motion';
import { BundleCard } from './BundleCard';

const bundles = [
  {
    title: "Credit Pro Toolkit",
    price: 30,
    savings: 5,
    features: [
      "AI-powered recommendations",
      "Credit score simulator",
      "Ideal for DIY users wanting advanced tools"
    ]
  },
  {
    title: "Premium Support Pack",
    price: 35,
    savings: 5,
    features: [
      "24-hour response time",
      "Dedicated credit expert",
      "Personalized guidance",
      "Perfect for users wanting concierge service"
    ]
  }
];

export function BundleSection() {
  return (
    <div className="mt-20">
      <h3 className="text-2xl font-bold text-[#003366] text-center mb-8 font-heading">
        Enhance Your Experience with Optional Bundles
      </h3>
      <div className="grid md:grid-cols-2 gap-8 max-w-4xl mx-auto">
        {bundles.map((bundle, index) => (
          <motion.div
            key={bundle.title}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: index * 0.1 }}
          >
            <BundleCard {...bundle} />
          </motion.div>
        ))}
      </div>
    </div>
  );
}