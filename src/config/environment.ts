import { z } from 'zod';
import dotenv from 'dotenv';

dotenv.config();

const envSchema = z.object({
  // Database
  DB_HOST: z.string().min(1),
  DB_PORT: z.string().transform(Number).pipe(z.number().positive()),
  DB_NAME: z.string().min(1),
  DB_USER: z.string().min(1),
  DB_PASSWORD: z.string().min(1),
  DB_SSL: z.enum(['true', 'false']).transform(val => val === 'true'),
  DB_SSL_CA: z.string().optional(),
  
  // Pool Configuration
  DB_MAX_CONNECTIONS: z.string()
    .transform(Number)
    .pipe(z.number().positive())
    .default('20'),
  DB_IDLE_TIMEOUT: z.string()
    .transform(Number)
    .pipe(z.number().positive())
    .default('30000'),
  DB_CONNECTION_TIMEOUT: z.string()
    .transform(Number)
    .pipe(z.number().positive())
    .default('5000'),
  
  // Environment
  NODE_ENV: z.enum(['development', 'production', 'test']).default('development'),
});

export type Env = z.infer<typeof envSchema>;

function validateEnv(): Env {
  try {
    return envSchema.parse(process.env);
  } catch (error) {
    if (error instanceof z.ZodError) {
      const missingVars = error.issues
        .map(issue => issue.path.join('.'))
        .join(', ');
      throw new Error(`Missing or invalid environment variables: ${missingVars}`);
    }
    throw error;
  }
}

export const env = validateEnv();