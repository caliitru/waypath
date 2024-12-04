import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScoreCircle } from './ScoreCircle';
import { ScoreChart } from './ScoreChart';

export function ScoreOverview() {
  return (
    <div className="bg-gray-50 rounded-xl p-6">
      <div className="flex items-start gap-8">
        <ScoreCircle />
        
        <div>
          <div className="flex items-center gap-2">
            <h3 className="text-2xl font-bold text-gray-900">
              Trending upward
            </h3>
            <ArrowUpRight className="w-5 h-5 text-[#2ECC71]" />
          </div>
          <p className="text-gray-600 text-lg">On track for 700+</p>
          
          <div className="flex items-center gap-6 mt-4">
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#2ECC71]" />
              <span className="text-gray-600">Payment History</span>
            </div>
            <div className="flex items-center gap-2">
              <div className="w-2 h-2 rounded-full bg-[#4361EE]" />
              <span className="text-gray-600">Credit Mix</span>
            </div>
          </div>
        </div>
      </div>

      <ScoreChart />
    </div>
  );
}