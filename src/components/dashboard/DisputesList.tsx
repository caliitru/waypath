import React from 'react';
import { FileText, Clock, CheckCircle, AlertCircle } from 'lucide-react';
import { useCreditStore } from '../../store/creditStore';

const statusIcons = {
  pending: Clock,
  in_progress: AlertCircle,
  resolved: CheckCircle,
};

const statusColors = {
  pending: 'text-yellow-600 bg-yellow-50',
  in_progress: 'text-blue-600 bg-blue-50',
  resolved: 'text-green-600 bg-green-50',
};

export function DisputesList() {
  const { disputes } = useCreditStore();

  return (
    <div className="rounded-lg bg-white p-6 shadow-sm">
      <div className="flex items-center justify-between mb-6">
        <div>
          <h2 className="text-lg font-semibold text-gray-900">Active Disputes</h2>
          <p className="text-sm text-gray-500">Track your dispute progress</p>
        </div>
        <FileText className="h-6 w-6 text-gray-400" />
      </div>

      <div className="space-y-4">
        {disputes.map((dispute) => {
          const StatusIcon = statusIcons[dispute.status];
          const statusColor = statusColors[dispute.status];

          return (
            <div key={dispute.id} className="flex items-center justify-between p-4 rounded-lg border border-gray-100">
              <div className="flex items-center space-x-4">
                <div className={`p-2 rounded-full ${statusColor}`}>
                  <StatusIcon className="h-5 w-5" />
                </div>
                <div>
                  <p className="font-medium text-gray-900">{dispute.creditor}</p>
                  <p className="text-sm text-gray-500">${dispute.amount.toLocaleString()} - {dispute.type}</p>
                </div>
              </div>
              <span className="text-sm text-gray-500">
                Submitted {new Date(dispute.dateSubmitted).toLocaleDateString()}
              </span>
            </div>
          );
        })}
      </div>
    </div>
  );
}