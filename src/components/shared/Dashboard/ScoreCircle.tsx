import React from 'react';
import { ScoreData } from './types';

const ScoreCircle: React.FC<ScoreData> = ({ score, status, change }) => {
 return (
   <div className="relative">
     <div className="w-36 h-36 relative animate-fade-in">
       <svg className="absolute w-full h-full -rotate-90">
         <circle
           cx="72"
           cy="72"
           r="66"
           fill="white"
           stroke="#f3f4f6"
           strokeWidth="12"
         />
         <circle
           cx="72"
           cy="72"
           r="66"
           fill="none"
           stroke="#78C5B6"
           strokeWidth="12"
           strokeDasharray="415"
           strokeDashoffset="120"
           className="ring-animate"
           strokeLinecap="round"
         />
       </svg>
       
       <div className="absolute inset-0 flex flex-col items-center justify-center">
         <span className="text-4xl font-bold text-gray-900 animate-fade-up">{score}</span>
         <span className="text-[#78C5B6] font-medium animate-fade-up">{status}</span>
       </div>
     </div>
     
     <div className="absolute -top-2 -right-2 bg-[#78C5B6]/10 text-[#78C5B6] px-3 py-1 rounded-full text-sm font-medium animate-bounce">
       +{change} pts
     </div>
   </div>
 );
};

export default ScoreCircle;
