import React from 'react';
import { motion } from 'framer-motion';
import { Users, TrendingUp, Star } from 'lucide-react';

export function CustomerInsights() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-blue-50">
            <Users className="w-5 h-5 text-blue-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Customer Insights</h3>
        </div>

        <div className="space-y-6">
          {/* Engagement Score */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-600">Engagement Score</p>
              <div className="flex items-center gap-2">
                <Star className="w-4 h-4 text-yellow-400 fill-current" />
                <span className="text-sm font-medium">4.8/5.0</span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '96%' }}
                className="h-full bg-yellow-400 rounded-full"
              />
            </div>
          </div>

          {/* Credit Improvement */}
          <div>
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-600">Avg. Credit Improvement</p>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm font-medium">+85 points</span>
              </div>
            </div>
            <div className="h-2 bg-gray-100 rounded-full">
              <motion.div
                initial={{ width: 0 }}
                animate={{ width: '85%' }}
                className="h-full bg-green-500 rounded-full"
              />
            </div>
          </div>

          {/* Service Utilization */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Active Disputes</p>
              <p className="text-2xl font-bold text-gray-900">892</p>
              <p className="text-sm text-green-600">+23% this month</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <p className="text-sm text-gray-500 mb-1">Resolution Rate</p>
              <p className="text-2xl font-bold text-gray-900">87%</p>
              <p className="text-sm text-green-600">+5% this month</p>
            </div>
          </div>

          {/* Satisfaction Metrics */}
          <div className="space-y-3">
            <h4 className="text-sm font-medium text-gray-900">Satisfaction Metrics</h4>
            <div className="grid grid-cols-3 gap-4">
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Support</p>
                <p className="text-lg font-bold text-gray-900">96%</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Usability</p>
                <p className="text-lg font-bold text-gray-900">92%</p>
              </div>
              <div className="text-center p-3 bg-gray-50 rounded-lg">
                <p className="text-sm text-gray-500 mb-1">Results</p>
                <p className="text-lg font-bold text-gray-900">89%</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}