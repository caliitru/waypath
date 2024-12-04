import React from 'react';
import { Check, HelpCircle } from 'lucide-react';
import { Tooltip } from './Tooltip';

interface PlanFeaturesProps {
  features: string[];
  tooltips?: Record<string, string>;
}

export function PlanFeatures({ features, tooltips = {} }: PlanFeaturesProps) {
  return (
    <ul className="space-y-4 mb-8" role="list">
      {features.map((feature, index) => (
        <li key={index} className="flex items-start group">
          <Check className="w-5 h-5 text-[#78C5B6] mt-0.5 mr-3 flex-shrink-0" />
          <span className="text-gray-600 group-hover:text-gray-900 transition-colors">
            {feature}
            {tooltips[feature] && (
              <Tooltip content={tooltips[feature]}>
                <HelpCircle className="inline-block w-4 h-4 ml-1 text-gray-400" />
              </Tooltip>
            )}
          </span>
        </li>
      ))}
    </ul>
  );
}