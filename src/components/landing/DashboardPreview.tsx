import React from 'react';
import { motion } from 'framer-motion';
import CountUp from 'react-countup';
import { TrendingUp, Clock, FileText } from 'lucide-react';

export function DashboardPreview() {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      animate={{ opacity: 1, y: 0 }}
      transition={{ duration: 0.6 }}
      className="relative bg-white rounded-2xl shadow-2xl p-6 transform hover:scale-[1.02] transition-transform duration-300"
    >
      <div className="space-y-6">
        {/* Credit Score Section */}
        <div className="bg-gradient-to-r from-[#78C5B6] to-[#003366] rounded-xl p-6 text-white">
          <h3 className="text-lg font-semibold mb-2">Your Credit Score</h3>
          <div className="flex items-baseline">
            <CountUp
              end={680}
              duration={2}
              className="text-4xl font-bold"
            />
            <span className="ml-2 text-sm opacity-80">+25 pts this month</span>
          </div>
          <div className="mt-4 h-2 bg-white/20 rounded-full">
            <div className="h-full w-[68%] bg-white rounded-full" />
          </div>
        </div>

        {/* Stats Grid */}
        <div className="grid grid-cols-2 gap-4">
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <Clock className="h-5 w-5 text-[#003366]" />
              <span className="font-medium">Active Disputes</span>
            </div>
            <CountUp
              end={3}
              className="text-2xl font-bold text-[#003366]"
            />
          </div>
          <div className="bg-gray-50 rounded-xl p-4">
            <div className="flex items-center gap-2 mb-2">
              <FileText className="h-5 w-5 text-[#78C5B6]" />
              <span className="font-medium">Resolved</span>
            </div>
            <CountUp
              end={12}
              className="text-2xl font-bold text-[#78C5B6]"
            />
          </div>
        </div>

        {/* Progress Chart */}
        <div className="bg-gray-50 rounded-xl p-6">
          <h3 className="text-lg font-semibold mb-4 flex items-center gap-2">
            <TrendingUp className="h-5 w-5 text-[#003366]" />
            Credit Progress
          </h3>
          <div className="space-y-3">
            {[
              { label: 'Payment History', progress: 85 },
              { label: 'Credit Usage', progress: 70 },
              { label: 'Account Mix', progress: 90 },
            ].map((item) => (
              <div key={item.label}>
                <div className="flex justify-between text-sm mb-1">
                  <span>{item.label}</span>
                  <span className="font-medium">{item.progress}%</span>
                </div>
                <div className="h-2 bg-gray-200 rounded-full">
                  <motion.div
                    initial={{ width: 0 }}
                    animate={{ width: `${item.progress}%` }}
                    transition={{ duration: 1, delay: 0.5 }}
                    className="h-full bg-[#78C5B6] rounded-full"
                  />
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* Decorative Elements */}
      <div className="absolute -top-4 -right-4 w-24 h-24 bg-[#78C5B6] rounded-full opacity-10 blur-2xl" />
      <div className="absolute -bottom-8 -left-8 w-32 h-32 bg-[#003366] rounded-full opacity-10 blur-2xl" />
    </motion.div>
  );
}