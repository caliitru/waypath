import React from 'react';
import { motion } from 'framer-motion';
import { Users, Package, AlertTriangle, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

const metrics = [
  {
    title: 'Active Subscriptions',
    value: 2547,
    change: '+12%',
    trend: 'up',
    icon: Users,
    color: 'blue'
  },
  {
    title: 'Bundle Adoption',
    value: 68,
    suffix: '%',
    change: '+5%',
    trend: 'up',
    icon: Package,
    color: 'green'
  },
  {
    title: 'Churn Risk',
    value: 24,
    change: '-3%',
    trend: 'down',
    icon: AlertTriangle,
    color: 'red'
  },
  {
    title: 'Growth Rate',
    value: 15,
    suffix: '%',
    change: '+2%',
    trend: 'up',
    icon: TrendingUp,
    color: 'purple'
  }
];

const colors = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  red: 'bg-red-50 text-red-600',
  purple: 'bg-purple-50 text-purple-600'
};

export function SubscriptionHealth() {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
      {metrics.map((metric, index) => {
        const Icon = metric.icon;
        return (
          <motion.div
            key={metric.title}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.1 }}
            className="bg-white rounded-xl p-6 shadow-sm"
          >
            <div className="flex items-center justify-between mb-4">
              <div className={`p-3 rounded-lg ${colors[metric.color]}`}>
                <Icon className="w-6 h-6" />
              </div>
              <div className={`text-sm font-medium ${
                metric.trend === 'up' ? 'text-green-600' : 'text-red-600'
              }`}>
                {metric.change}
              </div>
            </div>

            <h3 className="text-sm font-medium text-gray-500 mb-2">
              {metric.title}
            </h3>

            <div className="text-2xl font-bold text-gray-900">
              <CountUp
                end={metric.value}
                duration={2}
                separator=","
              />
              {metric.suffix}
            </div>
          </motion.div>
        );
      })}
    </div>
  );
}