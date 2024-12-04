import React from 'react';
import { motion } from 'framer-motion';
import { Shield, Lock, Award } from 'lucide-react';

export function TrustBadges() {
  const badges = [
    {
      icon: Shield,
      label: 'SSL Secured',
      description: '256-bit encryption',
    },
    {
      icon: Lock,
      label: 'FCRA Compliant',
      description: 'Legal compliance guaranteed',
    },
    {
      icon: Award,
      label: 'BBB Accredited',
      description: 'A+ Rating',
    },
  ];

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
      {badges.map((badge, index) => {
        const Icon = badge.icon;
        return (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ duration: 0.5, delay: index * 0.1 }}
            viewport={{ once: true }}
            className="flex items-center gap-4 bg-white p-4 rounded-lg shadow-sm"
          >
            <div className="p-3 rounded-full bg-[#78C5B6] bg-opacity-10">
              <Icon className="w-6 h-6 text-[#003366]" />
            </div>
            <div>
              <h4 className="font-semibold text-gray-900">{badge.label}</h4>
              <p className="text-sm text-gray-600">{badge.description}</p>
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}