import React from 'react';
import { BrowserRouter as Router, Routes, Route, Navigate } from 'react-router-dom';
import { LandingPage } from './pages/LandingPage';
import { Login } from './pages/Login';
import { Dashboard } from './pages/Dashboard';
import { AdminDashboard } from './components/admin/AdminDashboard';
import { AboutUs } from './pages/AboutUs';
import { HelpCenter } from './pages/HelpCenter';
import { PrivacyPolicy } from './pages/legal/PrivacyPolicy';
import { TermsOfService } from './pages/legal/TermsOfService';
import { Security } from './pages/legal/Security';
import { Compliance } from './pages/legal/Compliance';
import { ProtectedRoute } from './components/auth/ProtectedRoute';
import { UserRole } from './types/auth';
import { useAuthStore } from 'Store/authStore';

function App() {
  const { user } = useAuthStore();

  return (
    <Router>
      <Routes>
        <Route path="/" element={<LandingPage />} />
        <Route path="/login" element={<Login />} />
        <Route path="/about" element={<AboutUs />} />
        <Route path="/help" element={<HelpCenter />} />
        <Route path="/privacy" element={<PrivacyPolicy />} />
        <Route path="/terms" element={<TermsOfService />} />
        <Route path="/security" element={<Security />} />
        <Route path="/compliance" element={<Compliance />} />
        
        <Route
          path="/dashboard"
          element={
            <ProtectedRoute>
              {user?.role === UserRole.ADMIN ? (
                <Navigate to="/admin" replace />
              ) : (
                <Dashboard />
              )}
            </ProtectedRoute>
          }
        />
        
        <Route
          path="/admin/*"
          element={
            <ProtectedRoute requiredRole={UserRole.ADMIN}>
              <AdminDashboard />
            </ProtectedRoute>
          }
        />
      </Routes>
    </Router>
  );
}

export default App;