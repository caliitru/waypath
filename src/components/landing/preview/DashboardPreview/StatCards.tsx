import React from 'react';
import { TrendingUp, Check, Clock } from 'lucide-react';

const stats = [
  {
    icon: TrendingUp,
    title: 'Score Improvement',
    value: '+92 pts',
    subtitle: 'Last 90 days',
    color: '#4361EE',
    iconClass: 'text-[#4361EE]',
    titleClass: 'text-[#4361EE]',
  },
  {
    icon: Check,
    title: 'Items Removed',
    value: '7',
    subtitle: '87% success rate',
    color: '#2ECC71',
    iconClass: 'text-[#2ECC71]',
    titleClass: 'text-[#2ECC71]',
  },
  {
    icon: Clock,
    title: 'Active Disputes',
    value: '3',
    subtitle: '2 nearly complete',
    color: '#FF5733',
    iconClass: 'text-[#FF5733]',
    titleClass: 'text-[#FF5733]',
  },
];

export function StatCards() {
  return (
    <div className="grid grid-cols-3 gap-6">
      {stats.map((stat) => {
        const Icon = stat.icon;
        return (
          <div
            key={stat.title}
            className="bg-[#F8F9FA] rounded-2xl p-4 hover:bg-[#F3F4F6] transition-colors"
          >
            <div className="flex items-center gap-2">
              <Icon className={`w-5 h-5 ${stat.iconClass}`} />
              <span className={`text-sm font-medium ${stat.titleClass}`}>
                {stat.title}
              </span>
            </div>
            <div className="text-[32px] font-bold text-[#2F3337] mt-2">
              {stat.value}
            </div>
            <div className="text-[#4A4F54] text-sm">
              {stat.subtitle}
            </div>
          </div>
        );
      })}
    </div>
  );
}