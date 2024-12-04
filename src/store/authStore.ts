import { create } from 'zustand';
import { User, UserRole } from '../types/auth';

interface AuthState {
  user: User | null;
  isAuthenticated: boolean;
  login: (email: string, password: string) => Promise<void>;
  logout: () => void;
}

// Test users
const TEST_USERS: Record<string, User> = {
  'user@test.com': {
    id: '1',
    email: 'user@test.com',
    name: 'Test User',
    role: UserRole.USER
  },
  'admin@test.com': {
    id: '2',
    email: 'admin@test.com',
    name: 'Test Admin',
    role: UserRole.ADMIN
  }
};

export const useAuthStore = create<AuthState>((set) => ({
  user: null,
  isAuthenticated: false,

  login: async (email: string, password: string) => {
    // Simulate API call
    await new Promise(resolve => setTimeout(resolve, 1000));

    const user = TEST_USERS[email];
    if (!user || password !== 'password123') {
      throw new Error('Invalid credentials');
    }

    set({ user, isAuthenticated: true });
  },

  logout: () => {
    set({ user: null, isAuthenticated: false });
  }
}));