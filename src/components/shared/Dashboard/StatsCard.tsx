import React from 'react';
import { TrendingUp, Check, Clock } from 'lucide-react';
import { StatsCardProps } from './types';

export const StatsCards: React.FC<StatsCardsProps> = ({
  scoreImprovement,
  itemsRemoved,
  activeDisputes,
  nearComplete
}) => (
  <div className="grid grid-cols-3 gap-3 mb-4">
    <div className="bg-gray-50 rounded-xl p-3 animate-slide-in hover:bg-gray-100 transition-all">
      <div className="flex items-center gap-2 text-[#78C5B6]">
        <TrendingUp className="w-4 h-4" />
        <span className="font-medium">Score Improvement</span>
      </div>
      <div className="text-xl font-bold text-gray-900 mt-1">+{scoreImprovement} pts</div>
      <div className="text-sm text-gray-500">Last 90 days</div>
    </div>
    
    <div className="bg-gray-50 rounded-xl p-3 animate-slide-in hover:bg-gray-100 transition-all">
      <div className="flex items-center gap-2 text-[#78C5B6]">
        <Check className="w-4 h-4" />
        <span className="font-medium">Items Removed</span>
      </div>
      <div className="text-xl font-bold text-gray-900 mt-1">{itemsRemoved}</div>
      <div className="text-sm text-gray-500">87% success rate</div>
    </div>
    
    <div className="bg-gray-50 rounded-xl p-3 animate-slide-in hover:bg-gray-100 transition-all">
      <div className="flex items-center gap-2 text-[#FF6B35]">
        <Clock className="w-4 h-4" />
        <span className="font-medium">Active Disputes</span>
      </div>
      <div className="text-xl font-bold text-gray-900 mt-1">{activeDisputes}</div>
      <div className="text-sm text-gray-500">{nearComplete} nearly complete</div>
    </div>
  </div>
);
