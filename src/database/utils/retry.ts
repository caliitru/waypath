import { QueryOptions } from '../types/database.types';

const RETRYABLE_ERROR_CODES = [
  '08006', // connection_failure
  '08001', // unable_to_connect
  '57014', // query_canceled
  '40001', // serialization_failure
  '40P01'  // deadlock_detected
] as const;

type RetryableErrorCode = typeof RETRYABLE_ERROR_CODES[number];

export async function withRetry<T>(
  operation: () => Promise<T>,
  options: Required<QueryOptions>
): Promise<T> {
  let lastError: Error;
  
  for (let attempt = 1; attempt <= options.retryCount; attempt++) {
    try {
      return await operation();
    } catch (error) {
      lastError = error as Error;
      
      if (!isRetryableError(error)) {
        throw error;
      }
      
      if (attempt < options.retryCount) {
        await delay(calculateBackoff(attempt, options.retryDelay));
      }
    }
  }
  
  throw lastError;
}

function isRetryableError(error: unknown): boolean {
  if (!error || typeof error !== 'object') return false;
  
  return 'code' in error && 
    typeof error.code === 'string' &&
    RETRYABLE_ERROR_CODES.includes(error.code as RetryableErrorCode);
}

function calculateBackoff(attempt: number, baseDelay: number): number {
  const maxDelay = 30000;
  const exponentialDelay = baseDelay * Math.pow(2, attempt - 1);
  const jitter = Math.random() * 100;
  
  return Math.min(exponentialDelay + jitter, maxDelay);
}

function delay(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}