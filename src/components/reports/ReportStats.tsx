import React from 'react';
import { motion } from 'framer-motion';
import { BarChart2, TrendingUp, FileCheck } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    label: 'Reports Generated',
    value: 24,
    icon: FileCheck,
    change: '+8 this month',
  },
  {
    label: 'Score Improvement',
    value: 85,
    icon: TrendingUp,
    change: '+12 points',
    suffix: 'pts',
  },
  {
    label: 'Success Rate',
    value: 92,
    icon: BarChart2,
    change: '+5% from last month',
    suffix: '%',
  },
];

export function ReportStats() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h2 className="text-xl font-semibold text-gray-900 mb-6">Report Analytics</h2>

      <div className="space-y-6">
        {stats.map((stat, index) => {
          const Icon = stat.icon;
          return (
            <motion.div
              key={stat.label}
              initial={{ opacity: 0, x: 20 }}
              animate={{ opacity: 1, x: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-4"
            >
              <div className="p-3 rounded-lg bg-[#78C5B6] bg-opacity-10">
                <Icon className="w-6 h-6 text-[#78C5B6]" />
              </div>
              
              <div>
                <div className="flex items-baseline gap-2">
                  <CountUp
                    end={stat.value}
                    duration={2}
                    className="text-2xl font-bold text-gray-900"
                  />
                  {stat.suffix && (
                    <span className="text-gray-500">{stat.suffix}</span>
                  )}
                </div>
                <p className="text-sm text-gray-500">{stat.label}</p>
                <p className="text-xs text-[#78C5B6]">{stat.change}</p>
              </div>
            </motion.div>
          );
        })}
      </div>
    </div>
  );
}