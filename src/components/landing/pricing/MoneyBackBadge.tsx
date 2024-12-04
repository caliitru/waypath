import React from 'react';
import { Shield } from 'lucide-react';
import { motion } from 'framer-motion';

export function MoneyBackBadge() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      className="flex items-center justify-center gap-2 bg-[#78C5B6] bg-opacity-10 text-[#003366] px-4 py-2 rounded-full mb-8"
    >
      <Shield className="w-5 h-5" />
      <span className="font-medium">30-Day Money-Back Guarantee</span>
    </motion.div>
  );
}