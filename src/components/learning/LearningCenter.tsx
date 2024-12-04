import React from 'react';
import { motion } from 'framer-motion';
import { LearningPath } from './LearningPath';
import { ResourceLibrary } from './ResourceLibrary';
import { ProgressTracker } from './ProgressTracker';

export function LearningCenter() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="text-center mb-12"
        >
          <h1 className="text-3xl font-bold text-[#003366]">Credit Repair Academy</h1>
          <p className="mt-2 text-gray-600">Master your credit journey with our comprehensive resources</p>
        </motion.div>

        <div className="grid lg:grid-cols-12 gap-8">
          {/* Progress Sidebar */}
          <div className="lg:col-span-3">
            <ProgressTracker />
          </div>

          {/* Main Content */}
          <div className="lg:col-span-9 space-y-8">
            <LearningPath />
            <ResourceLibrary />
          </div>
        </div>
      </div>
    </div>
  );
}