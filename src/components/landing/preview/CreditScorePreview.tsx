import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { TrendingUp, AlertCircle } from 'lucide-react';

export function CreditScorePreview() {
  return (
    <div className="bg-gradient-to-r from-[#78C5B6] to-[#003366] rounded-xl p-6 text-white">
      <div className="flex items-center justify-between mb-4">
        <h3 className="text-lg font-semibold">Your Credit Score</h3>
        <AlertCircle className="w-5 h-5 opacity-80" />
      </div>

      <div className="flex items-baseline gap-3">
        <CountUp
          end={680}
          duration={2}
          className="text-4xl font-bold"
        />
        <div className="flex items-center text-sm bg-white/20 px-2 py-1 rounded-full">
          <TrendingUp className="w-4 h-4 mr-1" />
          <span>+25 pts</span>
        </div>
      </div>

      <div className="mt-6 space-y-2">
        <div className="flex justify-between text-sm">
          <span>Poor</span>
          <span>Fair</span>
          <span>Good</span>
          <span>Excellent</span>
        </div>
        <div className="h-2 bg-white/20 rounded-full overflow-hidden">
          <motion.div
            initial={{ width: 0 }}
            animate={{ width: '68%' }}
            transition={{ duration: 1.5, delay: 0.5 }}
            className="h-full bg-white rounded-full"
          />
        </div>
        <div className="flex justify-between text-xs opacity-80">
          <span>300</span>
          <span>850</span>
        </div>
      </div>
    </div>
  );
}