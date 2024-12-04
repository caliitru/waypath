import React from 'react';
import { motion } from 'framer-motion';
import { FileText, Clock, AlertCircle, CheckCircle, MoreVertical } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface Dispute {
  id: string;
  customer: string;
  type: string;
  status: 'pending' | 'in_progress' | 'resolved';
  priority: 'low' | 'medium' | 'high';
  dateSubmitted: string;
  assignedTo?: string;
}

const disputes: Dispute[] = [
  {
    id: 'DSP-001',
    customer: 'Sarah Johnson',
    type: 'Late Payment',
    status: 'pending',
    priority: 'high',
    dateSubmitted: '2024-03-15',
  },
  {
    id: 'DSP-002',
    customer: 'Michael Chen',
    type: 'Collection',
    status: 'in_progress',
    priority: 'medium',
    dateSubmitted: '2024-03-14',
    assignedTo: 'John Smith'
  },
  {
    id: 'DSP-003',
    customer: 'Emily Rodriguez',
    type: 'Account Error',
    status: 'resolved',
    priority: 'low',
    dateSubmitted: '2024-03-13',
    assignedTo: 'Jane Doe'
  }
];

const statusIcons = {
  pending: Clock,
  in_progress: AlertCircle,
  resolved: CheckCircle
};

const statusStyles = {
  pending: 'bg-yellow-50 text-yellow-700',
  in_progress: 'bg-blue-50 text-blue-700',
  resolved: 'bg-green-50 text-green-700'
};

const priorityStyles = {
  low: 'bg-gray-100 text-gray-700',
  medium: 'bg-orange-100 text-orange-700',
  high: 'bg-red-100 text-red-700'
};

export function DisputeQueue() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-blue-50">
              <FileText className="w-5 h-5 text-blue-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Dispute Queue</h2>
          </div>
          <button className="text-sm text-blue-600 hover:text-blue-700">
            View All
          </button>
        </div>

        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-gray-500">
                <th className="pb-4 font-medium">ID</th>
                <th className="pb-4 font-medium">Customer</th>
                <th className="pb-4 font-medium">Type</th>
                <th className="pb-4 font-medium">Status</th>
                <th className="pb-4 font-medium">Priority</th>
                <th className="pb-4 font-medium">Submitted</th>
                <th className="pb-4 font-medium">Assigned To</th>
                <th className="pb-4 font-medium sr-only">Actions</th>
              </tr>
            </thead>
            <tbody>
              {disputes.map((dispute, index) => {
                const StatusIcon = statusIcons[dispute.status];
                return (
                  <motion.tr
                    key={dispute.id}
                    initial={{ opacity: 0, y: 20 }}
                    animate={{ opacity: 1, y: 0 }}
                    transition={{ delay: index * 0.1 }}
                    className="border-t border-gray-100"
                  >
                    <td className="py-4 pr-4">
                      <span className="font-medium text-gray-900">
                        {dispute.id}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="font-medium text-gray-900">
                        {dispute.customer}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="text-gray-500">{dispute.type}</span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className={cn(
                        'inline-flex items-center gap-1.5 px-2.5 py-0.5 rounded-full text-sm font-medium',
                        statusStyles[dispute.status]
                      )}>
                        <StatusIcon className="w-4 h-4" />
                        {dispute.status.replace('_', ' ').replace(/\b\w/g, l => l.toUpperCase())}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className={cn(
                        'px-2.5 py-0.5 rounded-full text-sm font-medium',
                        priorityStyles[dispute.priority]
                      )}>
                        {dispute.priority.charAt(0).toUpperCase() + dispute.priority.slice(1)}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="text-gray-500">
                        {new Date(dispute.dateSubmitted).toLocaleDateString()}
                      </span>
                    </td>
                    <td className="py-4 pr-4">
                      <span className="text-gray-500">
                        {dispute.assignedTo || 'Unassigned'}
                      </span>
                    </td>
                    <td className="py-4">
                      <button className="p-1 hover:bg-gray-100 rounded-lg">
                        <MoreVertical className="w-5 h-5 text-gray-400" />
                      </button>
                    </td>
                  </motion.tr>
                );
              })}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
}