import React from 'react';
import { motion } from 'framer-motion';
import { Award, Star } from 'lucide-react';

export function ProgressTracker() {
  const progress = {
    coursesCompleted: 2,
    totalCourses: 5,
    certificatesEarned: 1,
    currentStreak: 7,
  };

  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <div className="flex items-center gap-3 mb-6">
        <div className="w-12 h-12 rounded-full bg-[#78C5B6] bg-opacity-10 flex items-center justify-center">
          <Award className="w-6 h-6 text-[#78C5B6]" />
        </div>
        <div>
          <h3 className="font-semibold text-gray-900">Your Progress</h3>
          <p className="text-sm text-gray-500">Keep up the great work!</p>
        </div>
      </div>

      <div className="space-y-6">
        <div>
          <div className="flex justify-between text-sm text-gray-600 mb-2">
            <span>Course Progress</span>
            <span>{progress.coursesCompleted}/{progress.totalCourses}</span>
          </div>
          <div className="h-2 bg-gray-100 rounded-full overflow-hidden">
            <motion.div
              initial={{ width: 0 }}
              animate={{ width: `${(progress.coursesCompleted / progress.totalCourses) * 100}%` }}
              transition={{ duration: 1 }}
              className="h-full bg-[#78C5B6] rounded-full"
            />
          </div>
        </div>

        <div className="flex items-center justify-between p-4 bg-[#78C5B6] bg-opacity-5 rounded-lg">
          <div className="flex items-center gap-3">
            <Star className="w-5 h-5 text-[#78C5B6]" />
            <span className="text-sm font-medium">Current Streak</span>
          </div>
          <span className="text-lg font-semibold text-[#78C5B6]">{progress.currentStreak} days</span>
        </div>

        <div className="border-t pt-6">
          <h4 className="font-medium text-gray-900 mb-4">Achievements</h4>
          <div className="grid grid-cols-3 gap-2">
            {[...Array(progress.certificatesEarned)].map((_, i) => (
              <motion.div
                key={i}
                initial={{ scale: 0 }}
                animate={{ scale: 1 }}
                transition={{ delay: i * 0.1 }}
                className="aspect-square rounded-lg bg-[#78C5B6] bg-opacity-10 flex items-center justify-center"
              >
                <Award className="w-6 h-6 text-[#78C5B6]" />
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </div>
  );
}