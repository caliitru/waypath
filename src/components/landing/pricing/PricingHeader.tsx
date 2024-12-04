import React from 'react';
import { motion } from 'framer-motion';

export function PricingHeader() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="text-center mb-16"
    >
      <h2 className="text-4xl font-bold text-[#003366] mb-4 font-heading">
        Affordable, Transparent Pricing for Every Credit Journey
      </h2>
      <p className="text-xl text-gray-600 max-w-3xl mx-auto font-body">
        Choose the plan that fits your needs and customize your experience with optional bundles
      </p>
    </motion.div>
  );
}