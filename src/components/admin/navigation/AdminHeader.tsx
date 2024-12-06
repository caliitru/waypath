import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, Settings, User, LogOut } from 'lucide-react';
import { NotificationBadge } from '../../ui/notification/NotificationBadge';
import { useAuthStore } from 'Store/authStore';

export function AdminHeader() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-16 bg-white border-b border-gray-200 px-6 flex items-center justify-between">
      <div className="flex items-center gap-4">
        <div className="relative">
          <Search className="absolute left-3 top-1/2 -translate-y-1/2 w-4 h-4 text-gray-400" />
          <input
            type="text"
            placeholder="Search..."
            className="pl-10 pr-4 py-2 border border-gray-200 rounded-lg focus:outline-none focus:border-[#78C5B6] w-64"
          />
        </div>
      </div>

      <div className="flex items-center gap-4">
        <button className="relative p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Bell className="w-5 h-5" />
          <NotificationBadge count={3} />
        </button>

        <button className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg">
          <Settings className="w-5 h-5" />
        </button>

        <div className="flex items-center gap-3 pl-4 border-l">
          <div className="text-right">
            <p className="text-sm font-medium text-gray-900">{user?.name}</p>
            <p className="text-xs text-gray-500">{user?.email}</p>
          </div>
          <div className="w-8 h-8 bg-[#003366] rounded-full flex items-center justify-center">
            <User className="w-5 h-5 text-white" />
          </div>
          <button 
            onClick={handleLogout}
            className="p-2 text-gray-600 hover:bg-gray-100 rounded-lg"
            title="Sign Out"
          >
            <LogOut className="w-5 h-5" />
          </button>
        </div>
      </div>
    </header>
  );
}