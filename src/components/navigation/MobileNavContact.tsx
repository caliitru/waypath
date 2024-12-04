import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface MobileNavContactProps {
  icon: LucideIcon;
  label: string;
  value: string;
  delay: number;
}

export function MobileNavContact({ icon: Icon, label, value, delay }: MobileNavContactProps) {
  return (
    <motion.div
      initial={{ x: 50, opacity: 0 }}
      animate={{ x: 0, opacity: 1 }}
      transition={{ delay }}
      className="px-6 py-3"
    >
      <div className="flex items-center gap-3 text-gray-600">
        <Icon className="w-5 h-5" />
        <div>
          <p className="text-sm font-medium text-gray-900">{label}</p>
          <p className="text-sm">{value}</p>
        </div>
      </div>
    </motion.div>
  );
}