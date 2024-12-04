import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';
import { cn } from '../../lib/utils';

interface FeatureCardProps {
  icon: LucideIcon;
  title: string;
  description: string;
  delay: number;
}

export function FeatureCard({ icon: Icon, title, description, delay }: FeatureCardProps) {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.5, delay }}
      viewport={{ once: true }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-lg transition-all duration-300 group"
    >
      <div className={cn(
        "w-12 h-12 rounded-xl flex items-center justify-center mb-4",
        "bg-secondary-light/10 group-hover:bg-secondary-light/20 transition-colors duration-300"
      )}>
        <Icon className="w-6 h-6 text-secondary" />
      </div>
      
      <h3 className="text-lg font-semibold text-primary mb-2 font-heading">
        {title}
      </h3>
      
      <p className="text-gray-600">
        {description}
      </p>
    </motion.div>
  );
}