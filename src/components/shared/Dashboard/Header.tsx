import React from 'react';
import { useNavigate } from 'react-router-dom';
import { Bell, Search, User, LogOut } from 'lucide-react';
import { useAuthStore } from '../../store/authStore';

export function Header() {
  const navigate = useNavigate();
  const { user, logout } = useAuthStore();

  const handleLogout = () => {
    logout();
    navigate('/');
  };

  return (
    <header className="h-16 border-b border-gray-200 bg-white">
      <div className="flex h-full items-center justify-between px-6">
        <div className="flex items-center gap-4">
          <div className="relative">
            <Search className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-400" />
            <input
              type="text"
              placeholder="Search..."
              className="h-10 w-64 rounded-lg border border-gray-200 pl-10 pr-4 focus:border-blue-500 focus:outline-none"
            />
          </div>
        </div>
        
        <div className="flex items-center gap-4">
          <button className="relative rounded-full p-2 hover:bg-gray-100">
            <Bell className="h-5 w-5 text-gray-600" />
            <span className="absolute right-1 top-1 h-2 w-2 rounded-full bg-red-500" />
          </button>
          
          <div className="flex items-center gap-2">
            <div className="flex flex-col items-end">
              <span className="text-sm font-medium">{user?.name}</span>
              <span className="text-xs text-gray-500">{user?.email}</span>
            </div>
            <button className="rounded-full bg-gray-100 p-2">
              <User className="h-5 w-5 text-gray-600" />
            </button>
            <button 
              onClick={handleLogout}
              className="rounded-full p-2 hover:bg-gray-100 text-gray-600"
              title="Sign Out"
            >
              <LogOut className="h-5 w-5" />
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
