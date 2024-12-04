import React from 'react';
import { Header } from '../components/dashboard/Header';
import { CreditScoreChart } from '../components/dashboard/CreditScoreChart';
import { DisputesList } from '../components/dashboard/DisputesList';
import { TaskList } from '../components/dashboard/TaskList';
import { DisputeStats } from '../components/disputes/DisputeStats';
import { DisputeTimeline } from '../components/disputes/DisputeTimeline';
import { CreditTools } from '../components/dashboard/CreditTools';
import { TimelineFilter } from '../components/shared/TimelineFilter';
import { useCreditStore } from '../store/creditStore';

export function Dashboard() {
  const disputes = useCreditStore(state => state.disputes);

  return (
    <div className="min-h-screen bg-gray-50">
      <Header />
      
      <div className="p-6">
        <div className="mb-8 flex items-center justify-between">
          <div>
            <h1 className="text-2xl font-bold text-gray-900">My Credit Journey</h1>
            <p className="mt-1 text-gray-500">Track your progress and manage your credit repair tasks</p>
          </div>
          <TimelineFilter />
        </div>

        <DisputeStats />

        <div className="grid grid-cols-1 gap-6 mt-6">
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <CreditScoreChart />
            <CreditTools />
          </div>
          
          <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Active Disputes</h2>
              {disputes.map(dispute => (
                <DisputeTimeline key={dispute.id} dispute={dispute} />
              ))}
            </div>
            <TaskList />
          </div>
        </div>
      </div>
    </div>
  );
}