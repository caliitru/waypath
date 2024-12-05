import React from 'react';
import { motion } from 'framer-motion';
import { TrendingUp, AlertCircle, CheckCircle, Info } from 'lucide-react';
import CountUp from 'react-countup';

const factors = [
  {
    name: 'Payment History',
    score: 85,
    impact: 'high',
    status: 'good',
    suggestion: 'Continue making payments on time to maintain this score'
  },
  {
    name: 'Credit Utilization',
    score: 65,
    impact: 'high',
    status: 'fair',
    suggestion: 'Try to keep your credit card balances below 30% of their limits'
  },
  {
    name: 'Credit Age',
    score: 90,
    impact: 'medium',
    status: 'excellent',
    suggestion: 'Your long credit history is helping your score'
  },
  {
    name: 'Credit Mix',
    score: 75,
    impact: 'medium',
    status: 'good',
    suggestion: 'Consider diversifying your credit types for potential improvement'
  }
];

const impactColors = {
  high: 'text-red-500',
  medium: 'text-orange-500',
  low: 'text-blue-500'
};

const statusColors = {
  excellent: 'bg-green-500',
  good: 'bg-blue-500',
  fair: 'bg-orange-500',
  poor: 'bg-red-500'
};

export function CreditFactors() {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Credit Factors</h2>
          <p className="text-sm text-gray-500">Understanding what affects your score</p>
        </div>
        <Info className="h-6 w-6 text-gray-400" />
      </div>

      <div className="space-y-6">
        {factors.map((factor, index) => (
          <motion.div
            key={factor.name}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
          >
            <div className="flex items-center justify-between mb-2">
              <div className="flex items-center gap-2">
                <span className="font-medium text-gray-900">{factor.name}</span>
                <span className={`text-xs ${impactColors[factor.impact]}`}>
                  {factor.impact.charAt(0).toUpperCase() + factor.impact.slice(1)} Impact
                </span>
              </div>
              <div className="flex items-center gap-2">
                <CountUp
                  end={factor.score}
                  suffix="%"
                  className="font-semibold text-gray-900"
                />
                {factor.status === 'excellent' && (
                  <CheckCircle className="w-4 h-4 text-green-500" />
                )}
                {factor.status === 'fair' && (
                  <AlertCircle className="w-4 h-4 text-orange-500" />
                )}
              </div>
            </div>

            <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: `${factor.score}%` }}
                transition={{ duration: 1, delay: index * 0.1 }}
                className={`h-full ${statusColors[factor.status]}`}
              />
            </div>

            <div className="mt-2 flex items-start gap-2">
              <Info className="w-4 h-4 text-gray-400 mt-0.5" />
              <p className="text-sm text-gray-600">{factor.suggestion}</p>
            </div>
          </motion.div>
        ))}
      </div>

      <motion.div
        initial={{ opacity: 0, y: 20 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ delay: 0.5 }}
        className="mt-6 p-4 bg-blue-50 rounded-lg"
      >
        <div className="flex items-center gap-2">
          <TrendingUp className="w-5 h-5 text-blue-600" />
          <span className="text-sm font-medium text-blue-700">
            Focus on your high-impact factors for the biggest score improvements
          </span>
        </div>
      </motion.div>
    </div>
  );
}
