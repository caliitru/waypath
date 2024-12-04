import { env } from './environment';
import { DatabaseConfig } from '../types/database.types';

const isProd = env.NODE_ENV === 'production';

export const databaseConfig: DatabaseConfig = {
  host: env.DB_HOST,
  port: env.DB_PORT,
  database: env.DB_NAME,
  user: env.DB_USER,
  password: env.DB_PASSWORD,
  ssl: env.DB_SSL ? {
    rejectUnauthorized: isProd,
    ca: isProd ? env.DB_SSL_CA : undefined
  } : false,
  maxConnections: env.DB_MAX_CONNECTIONS,
  idleTimeoutMillis: env.DB_IDLE_TIMEOUT,
  connectionTimeoutMillis: env.DB_CONNECTION_TIMEOUT,
  application_name: 'credit-repair-pro',
  statement_timeout: 30000,
  query_timeout: 30000,
  keepAlive: true,
  keepAliveInitialDelayMillis: 10000
};

export const poolConfig = {
  max: databaseConfig.maxConnections,
  idleTimeoutMillis: databaseConfig.idleTimeoutMillis,
  connectionTimeoutMillis: databaseConfig.connectionTimeoutMillis,
  allowExitOnIdle: false
};