import React from 'react';
import { ArrowUpRight } from 'lucide-react';
import { ScoreCircle } from './ScoreCircle';
import { StatsCards } from './StatsCards';
import { ScoreChart } from './ScoreChart';
import { AIInsights } from './AIInsights';
import { mockData } from './mockData';

const DashboardPreview: React.FC = () => {
  return (
    <div className="w-full max-w-3xl bg-white rounded-2xl p-4 shadow-lg animate-fade-in">
      <div className="mb-4">
        <h2 className="text-xl font-bold text-gray-900">
          Hi Lindsay, here's your credit progress!
        </h2>
      </div>

      <StatsCards 
        scoreImprovement={92}
        itemsRemoved={7}
        activeDisputes={3}
        nearComplete={2}
      />

      <div className="grid grid-cols-12 gap-4">
        <div className="col-span-8">
          <div className="bg-gray-50 rounded-xl p-6 animate-fade-up hover:bg-gray-100 transition-all">
            <div className="flex items-center justify-between mb-6">
              <div className="flex items-center gap-6">
                <ScoreCircle score={672} status="Good" change={28} />
                <div>
                  <h3 className="text-xl font-bold text-gray-900 flex items-center gap-2">
                    Trending upward
                    <ArrowUpRight className="w-5 h-5 text-[#78C5B6]" />
                  </h3>
                  <div className="text-gray-600">On track for 700+</div>
                </div>
              </div>
            </div>
            <ScoreChart data={mockData} />
          </div>
        </div>

        <AIInsights 
          insights={[
            'Pay down Chase card ($240)',
            'Dispute Capital One payment',
            'Keep oldest account active'
          ]}
          successUpdate={{
            message: 'Late payment removed',
            impact: 28
          }}
        />
      </div>
    </div>
  );
};

export default DashboardPreview;
