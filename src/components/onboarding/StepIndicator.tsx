import React from 'react';
import { motion } from 'framer-motion';
import { Check } from 'lucide-react';
import { cn } from '../../lib/utils';

interface StepIndicatorProps {
  steps: Array<{ title: string; description: string }>;
  currentStep: number;
  onStepClick: (step: number) => void;
}

export function StepIndicator({ steps, currentStep, onStepClick }: StepIndicatorProps) {
  return (
    <div className="relative">
      <div className="absolute top-5 left-6 right-6 h-0.5 bg-gray-200">
        <motion.div
          className="absolute top-0 left-0 h-full bg-[#78C5B6]"
          initial={{ width: '0%' }}
          animate={{ width: `${(currentStep / (steps.length - 1)) * 100}%` }}
          transition={{ duration: 0.5 }}
        />
      </div>

      <div className="relative flex justify-between">
        {steps.map((step, index) => {
          const isCompleted = index < currentStep;
          const isCurrent = index === currentStep;

          return (
            <button
              key={step.title}
              onClick={() => onStepClick(index)}
              className="flex flex-col items-center"
            >
              <div
                className={cn(
                  "w-10 h-10 rounded-full flex items-center justify-center relative z-10 transition-colors",
                  isCompleted ? "bg-[#78C5B6]" : isCurrent ? "bg-[#78C5B6]" : "bg-gray-200"
                )}
              >
                {isCompleted ? (
                  <Check className="w-6 h-6 text-white" />
                ) : (
                  <span className={cn(
                    "text-sm font-medium",
                    isCurrent ? "text-white" : "text-gray-600"
                  )}>
                    {index + 1}
                  </span>
                )}
              </div>
              <div className="mt-2 text-center">
                <p className={cn(
                  "text-sm font-medium",
                  isCurrent ? "text-[#003366]" : "text-gray-600"
                )}>
                  {step.title}
                </p>
                <p className="text-xs text-gray-500 max-w-[120px]">
                  {step.description}
                </p>
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}