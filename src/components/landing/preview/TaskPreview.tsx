import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare } from 'lucide-react';

const tasks = [
  {
    title: 'Upload bank statements',
    dueDate: '2024-03-20',
    completed: false,
  },
  {
    title: 'Review dispute letter',
    dueDate: '2024-03-22',
    completed: true,
  },
];

export function TaskPreview() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Action Items</h3>
      
      <div className="space-y-3">
        {tasks.map((task, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.2 + 1 }}
            className="flex items-center gap-3"
          >
            <div className="relative">
              <input
                type="checkbox"
                checked={task.completed}
                readOnly
                className="w-5 h-5 border-2 border-gray-300 rounded-md checked:border-[#78C5B6] checked:bg-[#78C5B6]"
              />
              {task.completed && (
                <CheckSquare className="w-5 h-5 text-white absolute inset-0" />
              )}
            </div>
            <div className={task.completed ? 'text-gray-400 line-through' : 'text-gray-900'}>
              <p className="font-medium">{task.title}</p>
              <p className="text-sm text-gray-500">Due {new Date(task.dueDate).toLocaleDateString()}</p>
            </div>
          </motion.div>
        ))}
      </div>
    </div>
  );
}