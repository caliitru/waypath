import React from 'react';
import { Shield, Check } from 'lucide-react';
import { AIInsight } from './types';

const AIInsights: React.FC<AIInsight> = ({ insights, successUpdate }) => (
 <div className="col-span-4 space-y-3">
   <div className="bg-gray-50 rounded-xl p-4 animate-slide-in hover:bg-gray-100 transition-all">
     <div className="flex items-center gap-2 mb-3">
       <Shield className="w-5 h-5 text-[#78C5B6]" />
       <h3 className="font-medium text-gray-900">AI Insights</h3>
     </div>
     <div className="space-y-3">
       {insights.map((action, i) => (
         <div key={i} className="flex items-start gap-2 text-sm">
           <div className="w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center text-xs font-medium text-gray-600">
             {i + 1}
           </div>
           <span className="text-gray-600">{action}</span>
         </div>
       ))}
     </div>
   </div>
   <div className="bg-[#78C5B6]/10 rounded-xl p-3 animate-slide-in">
     <div className="text-[#78C5B6] text-sm font-medium flex items-center gap-2">
       <Check className="w-4 h-4" />
       Success Update
     </div>
     <div className="text-gray-900 mt-1 font-medium">{successUpdate.message}</div>
     <div className="text-[#78C5B6] text-sm">Score impact: +{successUpdate.impact} pts</div>
   </div>
 </div>
);

export default AIInsights;
