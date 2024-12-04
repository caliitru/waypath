import React from 'react';
import { NavLink } from 'react-router-dom';
import { 
  Users, 
  FileText, 
  BarChart3, 
  Calendar, 
  Settings,
  CreditCard,
  MessageSquare,
  FileCheck
} from 'lucide-react';
import { cn } from '../../lib/utils';

const navigation = [
  { name: 'Dashboard', to: '/', icon: BarChart3 },
  { name: 'Clients', to: '/clients', icon: Users },
  { name: 'Disputes', to: '/disputes', icon: FileText },
  { name: 'Calendar', to: '/calendar', icon: Calendar },
  { name: 'Credit Reports', to: '/reports', icon: CreditCard },
  { name: 'Documents', to: '/documents', icon: FileCheck },
  { name: 'Messages', to: '/messages', icon: MessageSquare },
  { name: 'Settings', to: '/settings', icon: Settings },
];

export function Sidebar() {
  return (
    <div className="flex h-screen w-64 flex-col bg-gray-900 text-white">
      <div className="flex h-16 items-center justify-center border-b border-gray-800">
        <h1 className="text-xl font-bold">Credit Repair Pro</h1>
      </div>
      <nav className="flex-1 space-y-1 px-2 py-4">
        {navigation.map((item) => {
          const Icon = item.icon;
          return (
            <NavLink
              key={item.name}
              to={item.to}
              className={({ isActive }) =>
                cn(
                  'flex items-center px-4 py-2 text-sm rounded-lg',
                  isActive
                    ? 'bg-gray-800 text-white'
                    : 'text-gray-300 hover:bg-gray-800 hover:text-white'
                )
              }
            >
              <Icon className="mr-3 h-5 w-5" />
              {item.name}
            </NavLink>
          );
        })}
      </nav>
    </div>
  );
}