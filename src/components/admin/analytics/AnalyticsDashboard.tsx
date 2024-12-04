import React from 'react';
import { SubscriptionHealth } from './SubscriptionHealth';
import { UsageAnalytics } from './UsageAnalytics';
import { CustomerInsights } from './CustomerInsights';
import { RevenueAnalysis } from './RevenueAnalysis';
import { TimelineFilter } from '../../shared/TimelineFilter';

export function AnalyticsDashboard() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Analytics Dashboard</h1>
        <div className="flex items-center gap-3">
          <TimelineFilter />
          <button className="px-4 py-2 bg-[#003366] text-white rounded-lg text-sm hover:bg-[#002244]">
            Export Report
          </button>
        </div>
      </div>

      <SubscriptionHealth />
      <UsageAnalytics />
      
      <div className="grid lg:grid-cols-2 gap-6">
        <CustomerInsights />
        <RevenueAnalysis />
      </div>
    </div>
  );
}