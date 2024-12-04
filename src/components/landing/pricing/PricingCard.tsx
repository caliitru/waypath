import React from 'react';
import { HelpCircle } from 'lucide-react';
import { cn } from '../../../lib/utils';
import { Tooltip } from './Tooltip';
import { PlanFeatures } from './PlanFeatures';

interface PricingCardProps {
  label: string;
  firstMonthFee: number;
  monthlyFee: number;
  subtitle: string;
  features: string[];
  ctaText: string;
  idealFor: string;
  isPopular?: boolean;
  addOnNote?: string;
  tooltips?: Record<string, string>;
}

export function PricingCard({
  label,
  firstMonthFee,
  monthlyFee,
  subtitle,
  features,
  ctaText,
  idealFor,
  isPopular = false,
  addOnNote,
  tooltips = {},
}: PricingCardProps) {
  return (
    <div 
      className={cn(
        "relative bg-white rounded-2xl p-8 transition-all duration-300 hover:scale-[1.02]",
        isPopular 
          ? "shadow-xl border-2 border-[#78C5B6]" 
          : "shadow-lg hover:shadow-xl"
      )}
    >
      {isPopular && (
        <div className="absolute -top-4 right-8 bg-[#78C5B6] text-white px-4 py-1 rounded-full text-sm font-medium">
          Most Popular
        </div>
      )}

      <h3 className="text-2xl font-bold text-[#003366] mb-2 font-heading">{label}</h3>
      <p className="text-sm text-gray-500 mb-6">{idealFor}</p>

      <div className="mb-6 pb-6 border-b border-gray-100">
        <div className="flex items-baseline mb-1">
          <span className="text-sm text-gray-500">First Month</span>
          <Tooltip content="One-time setup fee including credit analysis and onboarding">
            <HelpCircle className="w-4 h-4 ml-1 text-gray-400" />
          </Tooltip>
        </div>
        <div className="text-3xl font-bold text-[#003366]">
          ${firstMonthFee}
        </div>
        <p className="text-sm text-gray-500 mt-1">{subtitle}</p>
        
        <div className="mt-4">
          <div className="flex items-baseline mb-1">
            <span className="text-sm text-gray-500">Then Monthly</span>
          </div>
          <div className="text-4xl font-bold text-[#003366]">
            ${monthlyFee}
            <span className="text-base font-normal text-gray-500">/mo</span>
          </div>
        </div>
      </div>

      <PlanFeatures features={features} tooltips={tooltips} />

      {addOnNote && (
        <p className="text-sm text-gray-500 mb-6 italic">{addOnNote}</p>
      )}

      <button 
        className={cn(
          "w-full py-3 px-6 rounded-lg transition-colors font-medium",
          isPopular
            ? "bg-[#78C5B6] text-white hover:bg-[#5BA697]"
            : "bg-[#003366] text-white hover:bg-[#002244]"
        )}
      >
        {ctaText}
      </button>
    </div>
  );
}