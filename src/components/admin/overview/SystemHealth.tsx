import React from 'react';
import { motion } from 'framer-motion';
import { Activity, Server, Database, Globe, AlertTriangle } from 'lucide-react';
import CountUp from 'react-countup';

interface SystemMetric {
  name: string;
  value: number;
  unit: string;
  status: 'healthy' | 'warning' | 'critical';
  trend: 'up' | 'down' | 'stable';
  icon: React.ElementType;
}

const metrics: SystemMetric[] = [
  {
    name: 'API Response Time',
    value: 187,
    unit: 'ms',
    status: 'healthy',
    trend: 'stable',
    icon: Activity
  },
  {
    name: 'Server Load',
    value: 68,
    unit: '%',
    status: 'warning',
    trend: 'up',
    icon: Server
  },
  {
    name: 'Database Latency',
    value: 45,
    unit: 'ms',
    status: 'healthy',
    trend: 'down',
    icon: Database
  },
  {
    name: 'Uptime',
    value: 99.98,
    unit: '%',
    status: 'healthy',
    trend: 'stable',
    icon: Globe
  }
];

const statusStyles = {
  healthy: 'text-green-600 bg-green-50',
  warning: 'text-yellow-600 bg-yellow-50',
  critical: 'text-red-600 bg-red-50'
};

const trendIndicators = {
  up: '↑',
  down: '↓',
  stable: '→'
};

export function SystemHealth() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-indigo-50">
              <Server className="w-5 h-5 text-indigo-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">System Health</h2>
          </div>
          <button className="text-sm text-indigo-600 hover:text-indigo-700">
            View Details
          </button>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {metrics.map((metric, index) => {
            const Icon = metric.icon;
            return (
              <motion.div
                key={metric.name}
                initial={{ opacity: 0, y: 20 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{ delay: index * 0.1 }}
                className="p-4 rounded-lg border border-gray-100"
              >
                <div className="flex items-center justify-between mb-3">
                  <div className={`p-2 rounded-lg ${statusStyles[metric.status]}`}>
                    <Icon className="w-5 h-5" />
                  </div>
                  <span className={`text-sm font-medium ${
                    metric.trend === 'up' ? 'text-green-600' : 
                    metric.trend === 'down' ? 'text-red-600' : 
                    'text-gray-600'
                  }`}>
                    {trendIndicators[metric.trend]}
                  </span>
                </div>

                <h3 className="text-sm font-medium text-gray-500 mb-1">
                  {metric.name}
                </h3>

                <div className="flex items-baseline gap-1">
                  <span className="text-2xl font-bold text-gray-900">
                    <CountUp
                      end={metric.value}
                      decimals={metric.unit === '%' ? 2 : 0}
                      duration={2}
                    />
                  </span>
                  <span className="text-sm text-gray-500">{metric.unit}</span>
                </div>
              </motion.div>
            );
          })}
        </div>

        {/* Alerts Section */}
        <div className="mt-6">
          <div className="flex items-center gap-2 p-4 bg-yellow-50 rounded-lg">
            <AlertTriangle className="w-5 h-5 text-yellow-600" />
            <p className="text-sm text-yellow-700">
              High server load detected. Consider scaling resources.
            </p>
          </div>
        </div>

        {/* Quick Actions */}
        <div className="mt-6 flex gap-4">
          <button className="flex-1 px-4 py-2 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition-colors">
            Run Diagnostics
          </button>
          <button className="flex-1 px-4 py-2 border border-indigo-600 text-indigo-600 rounded-lg hover:bg-indigo-50 transition-colors">
            View Logs
          </button>
        </div>
      </div>
    </div>
  );
}