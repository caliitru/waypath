import React from 'react';
import { Dispute } from '../../types/disputes';
import { DisputeProgress } from './DisputeProgress';
import { DisputeIcon } from './DisputeIcon';

interface DisputeTimelineProps {
  dispute: Dispute;
}

export function DisputeTimeline({ dispute }: DisputeTimelineProps) {
  return (
    <div className="bg-white rounded-lg p-6 shadow-sm">
      <div className="flex items-center justify-between mb-4">
        <div className="flex items-center gap-3">
          <div className="rounded-full bg-gray-100 p-2">
            <DisputeIcon type={dispute.type} className="h-5 w-5 text-gray-600" />
          </div>
          <div>
            <h3 className="text-lg font-semibold">{dispute.creditor}</h3>
            <p className="text-sm text-gray-500">
              ${dispute.amount.toLocaleString()} - {dispute.type.split('_').map(word => 
                word.charAt(0).toUpperCase() + word.slice(1)
              ).join(' ')}
            </p>
          </div>
        </div>
        <span className={`px-3 py-1 rounded-full text-sm ${
          dispute.status === 'resolved' 
            ? 'bg-green-100 text-green-800'
            : dispute.status === 'in_review'
            ? 'bg-blue-100 text-blue-800'
            : 'bg-yellow-100 text-yellow-800'
        }`}>
          {dispute.status.replace('_', ' ')}
        </span>
      </div>

      <DisputeProgress
        currentStep={dispute.currentStep}
        totalSteps={dispute.totalSteps}
        status={dispute.status}
      />

      <div className="mt-4 text-sm text-gray-600">
        <p>Submitted to {dispute.bureau} on {new Date(dispute.dateSubmitted).toLocaleDateString()}</p>
        {dispute.dateResolved && (
          <p className="mt-1">
            Resolved on {new Date(dispute.dateResolved).toLocaleDateString()}
            {dispute.outcome && ` - ${dispute.outcome}`}
          </p>
        )}
      </div>
    </div>
  );
}