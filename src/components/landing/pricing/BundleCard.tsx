import React from 'react';
import { Check, Plus } from 'lucide-react';
import { cn } from '../../../lib/utils';

interface BundleCardProps {
  title: string;
  price: number;
  savings: number;
  features: string[];
}

export function BundleCard({ title, price, savings, features }: BundleCardProps) {
  return (
    <div className="bg-white rounded-xl p-6 shadow-md hover:shadow-lg transition-all duration-300">
      <div className="flex items-start justify-between mb-4">
        <div>
          <h4 className="text-lg font-semibold text-[#003366]">{title}</h4>
          <p className="text-sm text-[#78C5B6]">Save ${savings}/month</p>
        </div>
        <div className="text-right">
          <div className="text-2xl font-bold text-[#003366]">
            ${price}
            <span className="text-sm font-normal text-gray-500">/mo</span>
          </div>
        </div>
      </div>

      <ul className="space-y-3 mb-4">
        {features.map((feature, index) => (
          <li key={index} className="flex items-center text-sm">
            <Check className="w-4 h-4 text-[#78C5B6] mr-2" />
            <span className="text-gray-600">{feature}</span>
          </li>
        ))}
      </ul>

      <button className="w-full flex items-center justify-center py-2 px-4 rounded-lg border-2 border-[#003366] text-[#003366] hover:bg-[#003366] hover:text-white transition-colors">
        <Plus className="w-4 h-4 mr-2" />
        Add Bundle
      </button>
    </div>
  );
}