import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Calculator, TrendingUp, LineChart } from 'lucide-react';
import { CreditFactors } from './CreditFactors';
import { FinancialCalculator } from './FinancialCalculator';
import { CreditSimulator } from './CreditSimulator';

const tabs = [
  {
    id: 'factors',
    label: 'Credit Factors',
    icon: LineChart,
    component: CreditFactors
  },
  {
    id: 'calculator',
    label: 'Financial Calculator',
    icon: Calculator,
    component: FinancialCalculator
  },
  {
    id: 'simulator',
    label: 'Credit Simulator',
    icon: TrendingUp,
    component: CreditSimulator
  }
];

export function CreditTools() {
  const [activeTab, setActiveTab] = useState('factors');

  const ActiveComponent = tabs.find(tab => tab.id === activeTab)?.component || CreditFactors;

  return (
    <div className="bg-white rounded-lg shadow-sm">
      {/* Tabs */}
      <div className="border-b border-gray-200">
        <div className="flex">
          {tabs.map((tab) => {
            const Icon = tab.icon;
            const isActive = activeTab === tab.id;
            
            return (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`relative flex items-center gap-2 px-6 py-4 text-sm font-medium transition-colors ${
                  isActive
                    ? 'text-[#78C5B6] border-b-2 border-[#78C5B6]'
                    : 'text-gray-500 hover:text-gray-700'
                }`}
              >
                <Icon className="w-4 h-4" />
                {tab.label}
              </button>
            );
          })}
        </div>
      </div>

      {/* Content */}
      <AnimatePresence mode="wait">
        <motion.div
          key={activeTab}
          initial={{ opacity: 0, y: 10 }}
          animate={{ opacity: 1, y: 0 }}
          exit={{ opacity: 0, y: -10 }}
          transition={{ duration: 0.2 }}
        >
          <ActiveComponent />
        </motion.div>
      </AnimatePresence>
    </div>
  );
}