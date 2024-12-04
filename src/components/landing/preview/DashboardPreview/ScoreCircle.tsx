import React from 'react';
import { motion } from 'framer-motion';

export function ScoreCircle() {
  return (
    <div className="relative">
      <div className="w-36 h-36 relative">
        <svg className="absolute w-full h-full -rotate-90">
          <circle
            cx="72"
            cy="72"
            r="66"
            fill="white"
            stroke="#f3f4f6"
            strokeWidth="12"
          />
          <motion.circle
            cx="72"
            cy="72"
            r="66"
            fill="none"
            stroke="#2ECC71"
            strokeWidth="12"
            strokeDasharray="415"
            strokeDashoffset="120"
            initial={{ strokeDashoffset: 415 }}
            animate={{ strokeDashoffset: 120 }}
            transition={{ duration: 1.5 }}
            strokeLinecap="round"
          />
        </svg>
        
        <div className="absolute inset-0 flex flex-col items-center justify-center">
          <span className="text-4xl font-bold text-gray-900">672</span>
          <span className="text-[#2ECC71] font-medium">Good</span>
        </div>
      </div>
      
      <div className="absolute -top-2 -right-2 bg-[#E8F8F0] text-[#2ECC71] px-3 py-1 rounded-full text-sm font-medium">
        +28 pts
      </div>
    </div>
  );
}