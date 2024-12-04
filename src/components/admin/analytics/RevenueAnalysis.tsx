import React from 'react';
import { motion } from 'framer-motion';
import { DollarSign, Package, Zap, TrendingUp } from 'lucide-react';
import CountUp from 'react-countup';

export function RevenueAnalysis() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center gap-3 mb-6">
          <div className="p-2 rounded-lg bg-green-50">
            <DollarSign className="w-5 h-5 text-green-600" />
          </div>
          <h3 className="text-lg font-semibold text-gray-900">Revenue Analysis</h3>
        </div>

        <div className="space-y-6">
          {/* MRR Overview */}
          <div className="p-4 bg-gray-50 rounded-lg">
            <div className="flex justify-between items-center mb-2">
              <p className="text-sm font-medium text-gray-900">Monthly Recurring Revenue</p>
              <span className="text-sm text-green-600">+18% from last month</span>
            </div>
            <div className="flex items-baseline gap-2">
              <span className="text-3xl font-bold text-gray-900">$</span>
              <CountUp
                end={156420}
                separator=","
                className="text-3xl font-bold text-gray-900"
              />
            </div>
          </div>

          {/* Revenue Breakdown */}
          <div className="grid grid-cols-2 gap-4">
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Package className="w-4 h-4 text-purple-600" />
                <p className="text-sm font-medium text-gray-900">Bundle Revenue</p>
              </div>
              <p className="text-xl font-bold text-gray-900">$45,280</p>
              <p className="text-sm text-green-600">+12% from last month</p>
            </div>
            <div className="p-4 bg-gray-50 rounded-lg">
              <div className="flex items-center gap-2 mb-2">
                <Zap className="w-4 h-4 text-orange-600" />
                <p className="text-sm font-medium text-gray-900">Add-on Revenue</p>
              </div>
              <p className="text-xl font-bold text-gray-900">$23,150</p>
              <p className="text-sm text-green-600">+8% from last month</p>
            </div>
          </div>

          {/* LTV Analysis */}
          <div>
            <div className="flex items-center justify-between mb-4">
              <p className="text-sm font-medium text-gray-900">Customer LTV</p>
              <div className="flex items-center gap-1 text-green-600">
                <TrendingUp className="w-4 h-4" />
                <span className="text-sm">Growing</span>
              </div>
            </div>
            <div className="space-y-3">
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Premium Plan</span>
                  <span className="font-medium text-gray-900">$2,450</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '85%' }}
                    className="h-full bg-green-500 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Standard Plan</span>
                  <span className="font-medium text-gray-900">$1,280</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '65%' }}
                    className="h-full bg-blue-500 rounded-full"
                  />
                </div>
              </div>
              <div>
                <div className="flex justify-between text-sm mb-1">
                  <span className="text-gray-600">Basic Plan</span>
                  <span className="font-medium text-gray-900">$680</span>
                </div>
                <div className="h-2 bg-gray-100 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: '45%' }}
                    className="h-full bg-purple-500 rounded-full"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}