import React from 'react';
import { ArrowRight } from 'lucide-react';

export function CompareLink() {
  return (
    <div className="text-center mt-8">
      <button 
        className="inline-flex items-center text-[#003366] hover:text-[#002244] font-medium group"
        onClick={() => {
          // Implementation for opening comparison modal would go here
          console.log('Open comparison modal');
        }}
      >
        See full feature comparison
        <ArrowRight className="w-4 h-4 ml-1 transform group-hover:translate-x-1 transition-transform" />
      </button>
    </div>
  );
}