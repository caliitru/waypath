import React from 'react';
import { FileText, CheckCircle, PieChart } from 'lucide-react';
import { useCreditStore } from 'Store/creditStore';
import { DisputeIcon } from './DisputeIcon';

export function DisputeStats() {
  const getDisputeStats = useCreditStore(state => state.getDisputeStats);
  const stats = getDisputeStats();

  return (
    <div className="grid grid-cols-1 md:grid-cols-3 gap-6 mb-6">
      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Total Disputes</p>
            <p className="mt-2 text-3xl font-semibold">{stats.totalFiled}</p>
          </div>
          <div className="rounded-full bg-blue-50 p-3">
            <FileText className="h-6 w-6 text-blue-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">Successful Removals</p>
            <p className="mt-2 text-3xl font-semibold">{stats.successfulResolutions}</p>
          </div>
          <div className="rounded-full bg-green-50 p-3">
            <CheckCircle className="h-6 w-6 text-green-600" />
          </div>
        </div>
      </div>

      <div className="bg-white rounded-lg p-6 shadow-sm">
        <div className="flex items-center justify-between">
          <div>
            <p className="text-sm font-medium text-gray-600">By Type</p>
            <div className="mt-2 space-y-1">
              {Object.entries(stats.byType).map(([type, count]) => (
                <div key={type} className="flex items-center gap-2">
                  <DisputeIcon type={type as DisputeType} className="h-4 w-4 text-gray-600" />
                  <p className="text-sm">
                    {type.split('_').map(word => word.charAt(0).toUpperCase() + word.slice(1)).join(' ')}: {count}
                  </p>
                </div>
              ))}
            </div>
          </div>
          <div className="rounded-full bg-purple-50 p-3">
            <PieChart className="h-6 w-6 text-purple-600" />
          </div>
        </div>
      </div>
    </div>
  );
}