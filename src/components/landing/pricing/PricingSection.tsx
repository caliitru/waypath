import React from 'react';
import { motion } from 'framer-motion';
import { PricingHeader } from './PricingHeader';
import { PricingGrid } from './PricingGrid';
import { BundleSection } from './BundleSection';
import { ComparisonTable } from './ComparisonTable';
import { FAQSection } from './FAQ/FAQSection';
import { MoneyBackBadge } from './MoneyBackBadge';

export function PricingSection() {
  return (
    <section id="pricing" className="py-20 relative overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-gray-50 to-white" />
      <div className="absolute inset-0 opacity-[0.03] bg-[radial-gradient(#78C5B6_1px,transparent_1px)] [background-size:16px_16px]" />

      <div className="relative max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <PricingHeader />
        <MoneyBackBadge />
        <PricingGrid />
        <ComparisonTable />
        <BundleSection />
      </div>

      <FAQSection />
    </section>
  );
}