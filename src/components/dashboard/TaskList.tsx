import React from 'react';
import { motion } from 'framer-motion';
import { CheckSquare, Calendar, AlertCircle, Star } from 'lucide-react';
import { useCreditStore } from '../../store/creditStore';

const priorityColors = {
  high: 'text-red-500',
  medium: 'text-orange-500',
  low: 'text-blue-500'
};

const priorityIcons = {
  high: <AlertCircle className="w-4 h-4" />,
  medium: <Star className="w-4 h-4" />,
  low: <CheckSquare className="w-4 h-4" />
};

export function TaskList() {
  const { tasks, toggleTaskCompletion } = useCreditStore();

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Action Items</h2>
          <p className="text-sm text-gray-500">Tasks to improve your credit</p>
        </div>
        <CheckSquare className="h-6 w-6 text-gray-400" />
      </div>

      <div className="space-y-4">
        {tasks.map((task, index) => (
          <motion.div
            key={task.id}
            initial={{ opacity: 0, x: -20 }}
            animate={{ opacity: 1, x: 0 }}
            transition={{ delay: index * 0.1 }}
            className={`flex items-center justify-between p-4 rounded-lg border ${
              task.completed ? 'border-gray-100 bg-gray-50' : 'border-gray-200'
            }`}
          >
            <div className="flex items-center gap-4">
              <div className="relative">
                <input
                  type="checkbox"
                  checked={task.completed}
                  onChange={() => toggleTaskCompletion(task.id)}
                  className="w-5 h-5 border-2 border-gray-300 rounded-md checked:border-green-500 checked:bg-green-500 transition-colors"
                />
                {task.completed && (
                  <motion.div
                    initial={{ scale: 0 }}
                    animate={{ scale: 1 }}
                    className="absolute inset-0 flex items-center justify-center text-white"
                  >
                    <CheckSquare className="w-3 h-3" />
                  </motion.div>
                )}
              </div>
              
              <div>
                <div className="flex items-center gap-2">
                  <span className={`${task.completed ? 'text-gray-400 line-through' : 'text-gray-900'} font-medium`}>
                    {task.title}
                  </span>
                  <span className={`flex items-center gap-1 text-xs ${priorityColors[task.priority]}`}>
                    {priorityIcons[task.priority]}
                    {task.priority.charAt(0).toUpperCase() + task.priority.slice(1)} Priority
                  </span>
                </div>
                <div className="flex items-center gap-2 mt-1">
                  <Calendar className="w-4 h-4 text-gray-400" />
                  <span className="text-sm text-gray-500">
                    Due {new Date(task.dueDate).toLocaleDateString()}
                  </span>
                </div>
              </div>
            </div>

            <div className="flex items-center gap-2">
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => {/* Handle quick action */}}
              >
                <Star className="w-4 h-4 text-gray-400" />
              </button>
              <button 
                className="p-2 hover:bg-gray-100 rounded-lg transition-colors"
                onClick={() => {/* Handle quick action */}}
              >
                <AlertCircle className="w-4 h-4 text-gray-400" />
              </button>
            </div>
          </motion.div>
        ))}
      </div>

      {/* Success States */}
      {tasks.some(task => task.completed) && (
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={{ opacity: 1, y: 0 }}
          className="mt-4 p-3 bg-green-50 rounded-lg"
        >
          <div className="flex items-center gap-2 text-green-700">
            <CheckSquare className="w-5 h-5" />
            <span className="text-sm font-medium">
              Great progress! Keep up the good work.
            </span>
          </div>
        </motion.div>
      )}
    </div>
  );
}