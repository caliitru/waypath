import React from 'react';
import { motion } from 'framer-motion';
import { LucideIcon } from 'lucide-react';

interface TimelineStepProps {
  icon: LucideIcon;
  number: number;
  title: string;
  description: string;
  delay: number;
  isLast?: boolean;
}

export function TimelineStep({ icon: Icon, number, title, description, delay, isLast }: TimelineStepProps) {
  return (
    <div className="relative">
      {!isLast && (
        <motion.div
          initial={{ scaleX: 0 }}
          whileInView={{ scaleX: 1 }}
          transition={{ duration: 0.8, delay: delay + 0.3 }}
          className="absolute top-8 left-[50%] w-full h-0.5 bg-[#78C5B6] origin-left hidden md:block"
        />
      )}
      
      <motion.div
        initial={{ opacity: 0, y: 20 }}
        whileInView={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.5, delay }}
        viewport={{ once: true }}
        className="relative z-10 flex flex-col items-center"
      >
        <motion.div
          whileHover={{ scale: 1.05 }}
          className="w-16 h-16 rounded-full bg-[#003366] text-white flex items-center justify-center mb-4"
        >
          <Icon className="w-8 h-8" />
        </motion.div>
        
        <motion.div
          initial={{ scale: 0 }}
          whileInView={{ scale: 1 }}
          transition={{ duration: 0.3, delay: delay + 0.2 }}
          className="w-8 h-8 rounded-full bg-[#78C5B6] text-white flex items-center justify-center absolute -top-2 -right-2"
        >
          {number}
        </motion.div>
        
        <h3 className="text-xl font-semibold text-[#003366] mb-2">{title}</h3>
        <p className="text-center text-gray-600 max-w-xs">{description}</p>
      </motion.div>
    </div>
  );
}