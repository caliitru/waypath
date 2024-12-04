import React from 'react';
import { CheckCircle2, Clock, AlertCircle } from 'lucide-react';
import { cn } from '../../lib/utils';

interface DisputeProgressProps {
  currentStep: number;
  totalSteps: number;
  status: string;
}

export function DisputeProgress({ currentStep, totalSteps, status }: DisputeProgressProps) {
  return (
    <div className="mt-4">
      <div className="flex items-center justify-between mb-2">
        {Array.from({ length: totalSteps }).map((_, index) => (
          <React.Fragment key={index}>
            {index > 0 && (
              <div
                className={cn(
                  "flex-1 h-1 mx-2",
                  index < currentStep ? "bg-blue-500" : "bg-gray-200"
                )}
              />
            )}
            <div
              className={cn(
                "w-8 h-8 rounded-full flex items-center justify-center",
                index < currentStep
                  ? "bg-blue-500 text-white"
                  : index === currentStep
                  ? "bg-blue-100 text-blue-500 border-2 border-blue-500"
                  : "bg-gray-100 text-gray-400"
              )}
            >
              {index + 1}
            </div>
          </React.Fragment>
        ))}
      </div>
      <div className="flex justify-between text-sm text-gray-500 mt-2">
        <span>Filed</span>
        <span>In Review</span>
        <span>Resolved</span>
      </div>
    </div>
  );
}