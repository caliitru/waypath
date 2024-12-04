import { DatabaseError } from '../types/database';

export class CustomDatabaseError extends Error implements DatabaseError {
  code?: string;
  detail?: string;
  schema?: string;
  table?: string;
  column?: string;
  dataType?: string;
  constraint?: string;

  constructor(error: DatabaseError) {
    super(error.message);
    this.name = 'CustomDatabaseError';
    Object.assign(this, error);
  }
}

const errorMessages: Record<string, string> = {
  '23505': 'Duplicate entry found',
  '23503': 'Referenced record not found',
  '42P01': 'Table not found',
  '57014': 'Query timed out',
  '08006': 'Database connection failed',
  '08001': 'Database connection failed',
  '40001': 'Transaction conflict detected',
  '40P01': 'Deadlock detected'
};

export function handleDatabaseError(error: DatabaseError): never {
  console.error('Database Error:', {
    message: error.message,
    code: error.code,
    detail: error.detail,
    schema: error.schema,
    table: error.table
  });

  const message = error.code ? errorMessages[error.code] : error.message;
  
  throw new CustomDatabaseError({
    ...error,
    message: message || 'An unexpected database error occurred'
  });
}