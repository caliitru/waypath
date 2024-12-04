import React from 'react';
import { LucideIcon } from 'lucide-react';
import { motion } from 'framer-motion';

interface LearningModuleProps {
  title: string;
  description: string;
  icon: LucideIcon;
  progress: number;
  lessons: number;
}

export function LearningModule({ title, description, icon: Icon, progress, lessons }: LearningModuleProps) {
  return (
    <motion.div
      whileHover={{ scale: 1.02 }}
      className="bg-white rounded-xl p-6 shadow-sm hover:shadow-md transition-shadow"
    >
      <div className="flex items-start gap-4">
        <div className="p-3 rounded-lg bg-[#78C5B6] bg-opacity-10">
          <Icon className="w-6 h-6 text-[#78C5B6]" />
        </div>
        <div className="flex-1">
          <h3 className="font-semibold text-gray-900">{title}</h3>
          <p className="text-sm text-gray-600 mt-1">{description}</p>
          
          <div className="mt-4">
            <div className="flex justify-between text-sm text-gray-600 mb-2">
              <span>{progress}% Complete</span>
              <span>{lessons} Lessons</span>
            </div>
            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${progress}%` }}
                transition={{ duration: 1, delay: 0.5 }}
                className="h-full bg-[#78C5B6] rounded-full"
              />
            </div>
          </div>
        </div>
      </div>
    </motion.div>
  );
}