import React from 'react';
import { Routes, Route } from 'react-router-dom';
import { AdminSidebar } from './navigation/AdminSidebar';
import { AdminHeader } from './navigation/AdminHeader';
import { DashboardOverview } from './overview/DashboardOverview';
import { AnalyticsDashboard } from './analytics/AnalyticsDashboard';
import { NotificationProvider } from '../ui/notification/NotificationProvider';

export function AdminDashboard() {
  return (
    <NotificationProvider>
      <div className="min-h-screen bg-gray-50 flex">
        <AdminSidebar />
        <div className="flex-1 flex flex-col">
          <AdminHeader />
          <main className="flex-1 p-6 overflow-auto">
            <Routes>
              <Route path="/" element={<DashboardOverview />} />
              <Route path="/overview" element={<DashboardOverview />} />
              <Route path="/analytics" element={<AnalyticsDashboard />} />
            </Routes>
          </main>
        </div>
      </div>
    </NotificationProvider>
  );
}