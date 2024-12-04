import React from 'react';
import { DisputeForm } from './DisputeForm';
import { DisputesList } from '../dashboard/DisputesList';
import { DisputeStats } from './DisputeStats';

export function DisputeManager() {
  return (
    <div className="min-h-screen bg-gray-50 py-8">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-12 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-8 space-y-8">
            <DisputeForm />
            <DisputesList />
          </div>

          {/* Sidebar */}
          <div className="lg:col-span-4">
            <DisputeStats />
          </div>
        </div>
      </div>
    </div>
  );
}