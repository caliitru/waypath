import { PoolConfig, QueryResult } from 'pg';

export interface DatabaseConfig extends PoolConfig {
  maxConnections: number;
  idleTimeoutMillis: number;
  connectionTimeoutMillis: number;
}

export interface QueryOptions {
  timeout?: number;
  retryCount?: number;
  retryDelay?: number;
}

export interface DatabaseError extends Error {
  code?: string;
  detail?: string;
  schema?: string;
  table?: string;
  column?: string;
  dataType?: string;
  constraint?: string;
}

export interface DatabaseClient {
  query<T = any>(
    text: string,
    values?: any[],
    options?: QueryOptions
  ): Promise<QueryResult<T>>;
  withTransaction<T>(
    callback: (client: any) => Promise<T>
  ): Promise<T>;
  healthCheck(): Promise<HealthCheckResult>;
  end(): Promise<void>;
}

export interface ConnectionPool {
  totalCount: number;
  idleCount: number;
  waitingCount: number;
}

export interface HealthCheckResult {
  isHealthy: boolean;
  latency: number;
  poolStatus: ConnectionPool;
  lastError?: DatabaseError;
}