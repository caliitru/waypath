import React from 'react';
import { LineChart, Line, XAxis, YAxis, CartesianGrid, ResponsiveContainer } from 'recharts';
import { Shield, Bell, TrendingUp, Check, Clock, CreditCard, DollarSign } from 'lucide-react';
import { motion } from 'framer-motion';

const mockData = [
  { month: 'Aug', score: 580 },
  { month: 'Sep', score: 605 },
  { month: 'Oct', score: 628 },
  { month: 'Nov', score: 645 },
  { month: 'Dec', score: 672 }
];

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="w-full bg-white rounded-xl shadow-lg p-6 max-w-4xl transform hover:scale-[1.02] transition-transform duration-300"
    >
      {/* Top Stats Row */}
      <div className="grid grid-cols-3 gap-4 mb-6">
        <div className="bg-blue-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-blue-600 mb-1">
            <TrendingUp size={20} />
            <span className="font-semibold">Score Improvement</span>
          </div>
          <div className="text-2xl font-bold text-blue-700">+92 pts</div>
          <div className="text-sm text-blue-600">Last 90 days</div>
        </div>
        
        <div className="bg-green-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-green-600 mb-1">
            <Check size={20} />
            <span className="font-semibold">Items Removed</span>
          </div>
          <div className="text-2xl font-bold text-green-700">7</div>
          <div className="text-sm text-green-600">Success rate: 87%</div>
        </div>
        
        <div className="bg-orange-50 rounded-lg p-4">
          <div className="flex items-center gap-2 text-orange-600 mb-1">
            <Clock size={20} />
            <span className="font-semibold">Active Disputes</span>
          </div>
          <div className="text-2xl font-bold text-orange-700">3</div>
          <div className="text-sm text-orange-600">2 nearly complete</div>
        </div>
      </div>

      <div className="grid grid-cols-12 gap-6">
        {/* Left Column - Score and Chart */}
        <div className="col-span-8">
          <div className="mb-6">
            <div className="flex justify-between items-center mb-4">
              <div className="flex items-center gap-4">
                {/* Score Circle */}
                <div className="relative w-24 h-24">
                  <div className="absolute inset-0 rounded-full border-8 border-gray-100">
                    <div className="absolute inset-0 rounded-full border-8 border-green-500 border-t-transparent border-l-transparent transform rotate-45"></div>
                  </div>
                  <div className="absolute inset-0 flex flex-col items-center justify-center">
                    <span className="text-2xl font-bold text-gray-900">672</span>
                    <span className="text-xs text-gray-600">Good</span>
                  </div>
                </div>
                <div>
                  <h3 className="text-lg font-semibold">Credit Score Progress</h3>
                  <div className="text-sm text-gray-600">Trending upward</div>
                </div>
              </div>
              <div className="bg-blue-100 text-blue-800 px-3 py-1 rounded-full text-sm">
                On Track
              </div>
            </div>

            <div className="h-64">
              <ResponsiveContainer width="100%" height="100%">
                <LineChart data={mockData}>
                  <CartesianGrid strokeDasharray="3 3" />
                  <XAxis dataKey="month" />
                  <YAxis domain={[500, 700]} />
                  <Line 
                    type="monotone" 
                    dataKey="score" 
                    stroke="#2563eb"
                    strokeWidth={2}
                    dot={{ r: 4 }}
                  />
                </LineChart>
              </ResponsiveContainer>
            </div>
          </div>

          {/* Credit Factors Grid */}
          <div className="grid grid-cols-2 gap-3">
            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <CreditCard size={16} className="text-blue-600" />
                <span className="font-medium">Payment History</span>
              </div>
              <div className="text-green-600 font-medium">Good</div>
              <div className="text-sm text-gray-600">98% on-time payments</div>
            </div>

            <div className="bg-gray-50 rounded-lg p-3">
              <div className="flex items-center gap-2 mb-2">
                <DollarSign size={16} className="text-blue-600" />
                <span className="font-medium">Credit Usage</span>
              </div>
              <div className="text-yellow-600 font-medium">Fair</div>
              <div className="text-sm text-gray-600">28% utilization</div>
            </div>
          </div>
        </div>

        {/* Right Column - AI Insights & Alerts */}
        <div className="col-span-4">
          <div className="bg-blue-50 rounded-lg p-4 mb-4">
            <div className="flex items-center gap-2 mb-3">
              <Shield size={20} className="text-blue-600" />
              <h3 className="font-semibold">AI Smart Plan</h3>
            </div>
            <div className="text-blue-800 font-medium">Next Best Actions:</div>
            <div className="space-y-2 mt-2">
              <div className="text-sm text-blue-600">
                1. Pay down Chase card by $240
              </div>
              <div className="text-sm text-blue-600">
                2. Dispute Capital One late payment
              </div>
              <div className="text-sm text-blue-600">
                3. Keep oldest account active
              </div>
            </div>
          </div>

          <div className="space-y-3">
            <div className="bg-green-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-green-600">
                <TrendingUp size={16} />
                <span className="font-medium">Success Update</span>
              </div>
              <div className="text-sm text-green-600 mt-1">
                Late payment removed - score impact: +28 pts
              </div>
            </div>

            <div className="bg-orange-50 rounded-lg p-3">
              <div className="flex items-center gap-2 text-orange-600">
                <Bell size={16} />
                <span className="font-medium">Action Required</span>
              </div>
              <div className="text-sm text-orange-600 mt-1">
                New document needed for dispute #1242
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#78C5B6] rounded-full opacity-10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#003366] rounded-full opacity-10 blur-2xl" />
    </motion.div>
  );
}