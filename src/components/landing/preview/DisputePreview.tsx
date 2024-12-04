import React from 'react';
import { motion } from 'framer-motion';
import { Clock, CheckCircle, AlertTriangle } from 'lucide-react';

const disputes = [
  {
    creditor: 'Capital One',
    amount: '$1,500',
    status: 'in_progress',
    date: '2024-03-15',
  },
  {
    creditor: 'Collection Agency',
    amount: '$850',
    status: 'pending',
    date: '2024-03-10',
  },
];

export function DisputePreview() {
  return (
    <div className="bg-white rounded-xl p-6 shadow-sm">
      <h3 className="text-lg font-semibold text-gray-900 mb-4">Active Disputes</h3>
      
      <div className="space-y-4">
        {disputes.map((dispute, index) => (
          <motion.div
            key={index}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            transition={{ delay: index * 0.2 + 0.5 }}
            className="flex items-center justify-between p-4 rounded-lg border border-gray-100"
          >
            <div className="flex items-center gap-3">
              {dispute.status === 'in_progress' ? (
                <AlertTriangle className="w-5 h-5 text-blue-500" />
              ) : (
                <Clock className="w-5 h-5 text-yellow-500" />
              )}
              <div>
                <p className="font-medium text-gray-900">{dispute.creditor}</p>
                <p className="text-sm text-gray-500">{dispute.amount}</p>
              </div>
            </div>
            <span className="text-sm text-gray-500">
              {new Date(dispute.date).toLocaleDateString()}
            </span>
          </motion.div>
        ))}
      </div>
    </div>
  );
}