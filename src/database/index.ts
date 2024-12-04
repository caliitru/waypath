import { db } from './connection/pool';
import { DatabaseClient } from './types/database.types';

export { db };
export type { DatabaseClient };
export * from './types/database.types';