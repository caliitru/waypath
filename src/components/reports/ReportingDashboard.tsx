import React from 'react';
import { motion } from 'framer-motion';
import { ReportsList } from './ReportsList';
import { ReportGenerator } from './ReportGenerator';
import { ReportStats } from './ReportStats';

export function ReportingDashboard() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-[#003366]">Credit Reports & Analysis</h1>
          <p className="mt-2 text-gray-600">Generate detailed reports and track your progress</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <ReportGenerator />
            <ReportsList />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <ReportStats />
          </div>
        </div>
      </div>
    </div>
  );
}