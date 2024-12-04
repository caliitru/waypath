import { Pool, PoolClient } from 'pg';
import { databaseConfig, poolConfig } from '../config/database.config';
import { DatabaseError, QueryOptions, HealthCheckResult, DatabaseClient } from '../types/database';
import { handleDatabaseError } from '../utils/errorHandler';
import { withRetry } from '../utils/retryStrategy';

class DatabasePool implements DatabaseClient {
  private pool: Pool;
  private lastError?: DatabaseError;

  constructor() {
    this.pool = new Pool({
      ...databaseConfig,
      ...poolConfig
    });

    this.setupPoolErrorHandling();
  }

  private setupPoolErrorHandling(): void {
    this.pool.on('error', (error: DatabaseError) => {
      console.error('Unexpected error on idle client', error);
      this.lastError = error;
    });
  }

  async query<T = any>(
    text: string,
    values?: any[],
    options: QueryOptions = {}
  ) {
    const client = await this.pool.connect();
    
    try {
      return await withRetry(
        async () => client.query({
          text,
          values,
          timeout: options.timeout || databaseConfig.statement_timeout
        }),
        {
          retryCount: options.retryCount || 3,
          retryDelay: options.retryDelay || 1000,
          timeout: options.timeout || databaseConfig.statement_timeout
        }
      );
    } catch (error) {
      throw handleDatabaseError(error as DatabaseError);
    } finally {
      client.release();
    }
  }

  async withTransaction<T>(
    callback: (client: PoolClient) => Promise<T>
  ): Promise<T> {
    const client = await this.pool.connect();
    
    try {
      await client.query('BEGIN');
      const result = await callback(client);
      await client.query('COMMIT');
      return result;
    } catch (error) {
      await client.query('ROLLBACK');
      throw handleDatabaseError(error as DatabaseError);
    } finally {
      client.release();
    }
  }

  async healthCheck(): Promise<HealthCheckResult> {
    const startTime = Date.now();
    
    try {
      await this.query('SELECT 1');
      
      return {
        isHealthy: true,
        latency: Date.now() - startTime,
        poolStatus: {
          totalCount: this.pool.totalCount,
          idleCount: this.pool.idleCount,
          waitingCount: this.pool.waitingCount
        },
        lastError: this.lastError
      };
    } catch (error) {
      return {
        isHealthy: false,
        latency: Date.now() - startTime,
        poolStatus: {
          totalCount: this.pool.totalCount,
          idleCount: this.pool.idleCount,
          waitingCount: this.pool.waitingCount
        },
        lastError: error as DatabaseError
      };
    }
  }

  async end(): Promise<void> {
    await this.pool.end();
  }
}

export const db = new DatabasePool();