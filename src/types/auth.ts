import { z } from 'zod';

export const UserRole = {
  USER: 'user',
  ADMIN: 'admin'
} as const;

export type UserRole = typeof UserRole[keyof typeof UserRole];

export interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
}

export const loginSchema = z.object({
  email: z.string().email(),
  password: z.string().min(8)
});

export type LoginCredentials = z.infer<typeof loginSchema>;