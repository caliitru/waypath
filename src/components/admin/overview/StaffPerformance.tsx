import React from 'react';
import { motion } from 'framer-motion';
import { UserCog, TrendingUp, Clock, CheckCircle, FileText } from 'lucide-react';
import CountUp from 'react-countup';

interface StaffMember {
  id: string;
  name: string;
  role: string;
  avatar: string;
  metrics: {
    disputesResolved: number;
    avgResolutionTime: number;
    successRate: number;
    activeDisputes: number;
  };
  trend: 'up' | 'down';
  trendValue: number;
}

const staffMembers: StaffMember[] = [
  {
    id: '1',
    name: 'John Smith',
    role: 'Senior Credit Specialist',
    avatar: 'https://images.unsplash.com/photo-1472099645785-5658abf4ff4e',
    metrics: {
      disputesResolved: 156,
      avgResolutionTime: 8.5,
      successRate: 92,
      activeDisputes: 24,
    },
    trend: 'up',
    trendValue: 12
  },
  {
    id: '2',
    name: 'Sarah Johnson',
    role: 'Credit Analyst',
    avatar: 'https://images.unsplash.com/photo-1494790108377-be9c29b29330',
    metrics: {
      disputesResolved: 134,
      avgResolutionTime: 9.2,
      successRate: 88,
      activeDisputes: 18,
    },
    trend: 'up',
    trendValue: 8
  },
  {
    id: '3',
    name: 'Michael Chen',
    role: 'Dispute Specialist',
    avatar: 'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d',
    metrics: {
      disputesResolved: 128,
      avgResolutionTime: 10.1,
      successRate: 85,
      activeDisputes: 22,
    },
    trend: 'down',
    trendValue: 3
  }
];

export function StaffPerformance() {
  return (
    <div className="bg-white rounded-xl shadow-sm">
      <div className="p-6 border-b border-gray-200">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-3">
            <div className="p-2 rounded-lg bg-purple-50">
              <UserCog className="w-5 h-5 text-purple-600" />
            </div>
            <h2 className="text-lg font-semibold text-gray-900">Staff Performance</h2>
          </div>
          <button className="text-sm text-purple-600 hover:text-purple-700">
            View All Staff
          </button>
        </div>

        <div className="space-y-6">
          {staffMembers.map((staff, index) => (
            <motion.div
              key={staff.id}
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: index * 0.1 }}
              className="flex items-center gap-6 p-4 rounded-lg border border-gray-100 hover:border-purple-200 transition-colors"
            >
              {/* Staff Info */}
              <div className="flex items-center gap-4 flex-1">
                <img
                  src={staff.avatar}
                  alt={staff.name}
                  className="w-12 h-12 rounded-full object-cover"
                />
                <div>
                  <h3 className="font-medium text-gray-900">{staff.name}</h3>
                  <p className="text-sm text-gray-500">{staff.role}</p>
                </div>
              </div>

              {/* Metrics */}
              <div className="flex items-center gap-8">
                {/* Disputes Resolved */}
                <div className="text-center">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <CheckCircle className="w-4 h-4" />
                    Resolved
                  </div>
                  <p className="font-semibold text-gray-900">
                    <CountUp end={staff.metrics.disputesResolved} />
                  </p>
                </div>

                {/* Average Resolution Time */}
                <div className="text-center">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <Clock className="w-4 h-4" />
                    Avg. Time
                  </div>
                  <p className="font-semibold text-gray-900">
                    <CountUp end={staff.metrics.avgResolutionTime} decimals={1} />d
                  </p>
                </div>

                {/* Success Rate */}
                <div className="text-center">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <TrendingUp className="w-4 h-4" />
                    Success
                  </div>
                  <p className="font-semibold text-gray-900">
                    <CountUp end={staff.metrics.successRate} />%
                  </p>
                </div>

                {/* Active Disputes */}
                <div className="text-center">
                  <div className="flex items-center gap-1 text-sm text-gray-500 mb-1">
                    <FileText className="w-4 h-4" />
                    Active
                  </div>
                  <p className="font-semibold text-gray-900">
                    <CountUp end={staff.metrics.activeDisputes} />
                  </p>
                </div>

                {/* Trend */}
                <div className={`text-sm font-medium ${
                  staff.trend === 'up' ? 'text-green-600' : 'text-red-600'
                }`}>
                  {staff.trend === 'up' ? '+' : '-'}{staff.trendValue}%
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </div>
  );
}