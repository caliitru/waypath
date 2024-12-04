import React from 'react';
import { Shield, Check } from 'lucide-react';

export function AIInsights() {
  return (
    <>
      <div className="bg-gray-50 rounded-xl p-5">
        <div className="flex items-center gap-2 mb-4">
          <Shield className="w-5 h-5 text-gray-900" />
          <h3 className="font-semibold text-gray-900">AI Insights</h3>
        </div>
        <div className="space-y-4">
          {[
            'Pay down Chase card ($240)',
            'Dispute Capital One payment',
            'Keep oldest account active'
          ].map((action, i) => (
            <div key={i} className="flex items-start gap-3">
              <div className="w-6 h-6 rounded-full bg-gray-200 flex items-center justify-center text-sm font-medium text-gray-600">
                {i + 1}
              </div>
              <span className="text-gray-600 text-sm leading-tight">{action}</span>
            </div>
          ))}
        </div>
      </div>

      <div className="bg-[#F6FEF9] rounded-xl p-4">
        <div className="flex items-center gap-2 text-[#2ECC71] text-sm font-medium">
          <Check className="w-4 h-4" />
          Success Update
        </div>
        <div className="text-gray-900 mt-2 font-medium">Late payment removed</div>
        <div className="text-[#2ECC71] text-sm mt-1">Score impact: +28 pts</div>
      </div>
    </>
  );
}