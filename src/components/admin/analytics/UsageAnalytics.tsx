import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Users, Settings, Phone, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

const metrics = [
  {
    title: 'Dispute Volume',
    value: 1247,
    change: '+23%',
    icon: FileText,
    color: 'blue'
  },
  {
    title: 'Feature Engagement',
    value: 78,
    suffix: '%',
    change: '+8%',
    icon: Settings,
    color: 'green'
  },
  {
    title: 'Support Utilization',
    value: 456,
    change: '+15%',
    icon: Phone,
    color: 'purple'
  },
  {
    title: 'Success Rate',
    value: 92,
    suffix: '%',
    change: '+5%',
    icon: TrendingUp,
    color: 'indigo'
  }
];

const featureUsage = [
  { name: 'Credit Simulator', usage: 85 },
  { name: 'Dispute Filing', usage: 92 },
  { name: 'Document Upload', usage: 78 },
  { name: 'Credit Monitoring', usage: 95 }
];

const colors = {
  blue: 'bg-blue-50 text-blue-600',
  green: 'bg-green-50 text-green-600',
  purple: 'bg-purple-50 text-purple-600',
  indigo: 'bg-indigo-50 text-indigo-600'
};

export function UsageAnalytics() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50">
              <Settings className="w-5 h-5 text-blue-600" />
            </div>
            <h3 className="text-lg font-semibold text-gray-900">Usage Analytics</h3>
          </div>
          <select className="border border-gray-200 rounded-lg px-3 py-2 text-sm">
            <option>Last 30 Days</option>
            <option>Last 90 Days</option>
            <option>Last Year</option>
          </select>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6 mb-8">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.title}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 bg-gray-50 rounded-lg"
              >
                <div className="flex items-center justify-between mb-2">
                  <div className={`p-2 rounded-lg ${colors[metric.color]}`}>
                    <Icon className="w-4 h-4" />
                  </div>
                  <span className="text-sm text-green-600">{metric.change}</span>
                </div>
                <p className="text-sm text-gray-600 mb-1">{metric.title}</p>
                <p className="text-xl font-bold text-gray-900">
                  <CountUp end={metric.value} />
                  {metric.suffix}
                </p>
              </motion.div>
            );
          })}
        </div>

        <div>
          <h4 className="text-sm font-medium text-gray-900 mb-4">Feature Usage</h4>
          <div className="space-y-4">
            {featureUsage.map((feature, index) => (
              <motion.div
                key={feature.name}
                initial={{ opacity: 0, x: -20 }}
                animate={{ opacity: 1, x: 0 }}
                transition={{ delay: index * 0.1 }}
              >
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">{feature.name}</span>
                  <span className="font-medium text-gray-900">{feature.usage}%</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${feature.usage}%` }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}