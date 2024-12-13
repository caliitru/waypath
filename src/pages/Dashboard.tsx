import React from 'react';
import Header from '../components/shared/Dashboard/Header';
import { ScoreChart } from '../components/shared/Dashboard/ScoreChart';
import { DisputesList } from '../components/shared/Dashboard/DisputesList';
import { TaskList } from '../components/shared/Dashboard/TaskList';
import { DisputeStats } from '../components/disputes/DisputeStats';
import { DisputeTimeline } from '../components/disputes/DisputeTimeline';
import { TimelineFilter } from '../components/shared/TimelineFilter';
import { useCreditStore } from '../Store/creditStore';

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
            <ScoreChart data={[]} />
            <div className="space-y-6">
              <h2 className="text-lg font-semibold">Credit Tools</h2>
              <div className="bg-white rounded-lg p-6 shadow-sm">
                {/* Credit tools content */}
              </div>
            </div>
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