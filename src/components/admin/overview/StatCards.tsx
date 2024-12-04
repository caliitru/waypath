import React from 'react';
import { motion } from 'framer-motion';
import { Users, FileText, TrendingUp, DollarSign, CheckCircle } from 'lucide-react';
import CountUp from 'react-countup';

const stats = [
  {
    title: 'Total Users',
    value: 2547,
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Active Disputes',
    value: 892,
    change: '+23%',
    trend: 'up',
    icon: FileText,
    color: 'green'
  },
  {
    title: 'Resolved Disputes',
    value: 3241,
    change: '+15%',
    trend: 'up',
    icon: CheckCircle,
    color: 'indigo'
  },
  {
    title: 'MRR',
    value: 156420,
    prefix: '$',
    change: '+18%',
    trend: 'up',
    icon: DollarSign,
    color: 'purple'
  }
];

const colors = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  indigo: 'bg-indigo-50 text-indigo-600',
  purple: 'bg-purple-50 text-purple-600'
};

export function StatCards() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {stats.map((stat, index) => {
        const Icon = stat.icon;
        return (
          <motion.div
            key={stat.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colors[stat.color]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`text-sm font-medium ${
                stat.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {stat.change}
              </div>
            </div>

            <h3 className="text-sm font-medium text-gray-500 mb-2">
              {stat.title}
            </h3>

            <div className="text-2xl font-bold text-gray-900">
              {stat.prefix}
              <CountUp
                end={stat.value}
                duration={2}
                separator=","
              />
              {stat.suffix}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}