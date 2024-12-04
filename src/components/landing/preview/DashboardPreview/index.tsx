import React from 'react';
import { StatCards } from './StatCards';
import { ScoreOverview } from './ScoreOverview';
import { AIInsights } from './AIInsights';
import { CreditFactors } from './CreditFactors';

export function DashboardPreview() {
  return (
    <div className="dashboard-preview w-full max-w-4xl bg-white rounded-2xl p-6 shadow-xl">
      <StatCards />
      
      <div className="grid grid-cols-12 gap-6 mt-6">
        <div className="col-span-8">
          <ScoreOverview />
        </div>
        
        <div className="col-span-4 space-y-4">
          <AIInsights />
        </div>
      </div>

      <div className="grid grid-cols-2 gap-6 mt-6">
        <CreditFactors type="payment" />
        <CreditFactors type="usage" />
      </div>
    </div>
  );
}