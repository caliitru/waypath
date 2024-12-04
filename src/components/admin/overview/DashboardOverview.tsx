import React from 'react';
import { motion } from 'framer-motion';
import { StatCards } from './StatCards';
import { DisputeQueue } from './DisputeQueue';
import { StaffPerformance } from './StaffPerformance';
import { SystemHealth } from './SystemHealth';
import { TimelineFilter } from '../../shared/TimelineFilter';

export function DashboardOverview() {
  return (
    <div className="space-y-6">
      <div className="flex items-center justify-between mb-6">
        <h1 className="text-2xl font-bold text-gray-900">Dashboard Overview</h1>
        <div className="flex items-center gap-3">
          <TimelineFilter />
          <button className="px-4 py-2 bg-[#003366] text-white rounded-lg text-sm hover:bg-[#002244]">
            Export Report
          </button>
        </div>
      </div>

      <StatCards />

      <div className="grid lg:grid-cols-2 gap-6">
        <DisputeQueue />
        <StaffPerformance />
      </div>

      <SystemHealth />
    </div>
  );
}