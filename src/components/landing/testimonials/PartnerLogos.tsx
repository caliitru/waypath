import React from 'react';
import { motion } from 'framer-motion';
import { CreditCard, Building2, Landmark } from 'lucide-react';

export function PartnerLogos() {
  const partners = [
    { icon: CreditCard, name: 'Experian' },
    { icon: Building2, name: 'TransUnion' },
    { icon: Landmark, name: 'Equifax' },
  ];

  return (
    <div className="py-12">
      <p className="text-center text-sm font-medium text-gray-600 mb-8">
        TRUSTED BY LEADING CREDIT BUREAUS
      </p>
      <div className="flex justify-center items-center gap-12 flex-wrap">
        {partners.map((partner, index) => {
          const Icon = partner.icon;
          return (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.5, delay: index * 0.1 }}
              viewport={{ once: true }}
              className="flex items-center gap-2 text-gray-400 hover:text-gray-600 transition-colors"
            >
              <Icon className="w-8 h-8" />
              <span className="text-lg font-semibold">{partner.name}</span>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}