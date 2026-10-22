/**
 * Shared ambient TypeScript types used across the entire application.
 * These are structural/utility types — not domain models.
 */

/** Generic API response envelope */
export interface ApiResponse<T> {
  data: T;
  message: string;
  success: boolean;
}

/** Generic paginated API response */
export interface PaginatedResponse<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
}

/** Standard API error shape */
export interface ApiError {
  message: string;
  code: string;
  statusCode: number;
  details?: Record<string, string[]>;
}

/** Nullable utility — makes a type also accept null */
export type Nullable<T> = T | null;

/** Optional utility — makes a type also accept undefined */
export type Optional<T> = T | undefined;

/** Async action result for use-cases */
export type AsyncResult<T> = Promise<T>;

/** ID types */
export type EntityId = string;

/** Generic key-value record */
export type Dictionary<T> = Record<string, T>;

/** Component children prop shorthand */
export interface WithChildren {
  children: React.ReactNode;
}

/** Component className prop shorthand */
export interface WithClassName {
  className?: string;
}
