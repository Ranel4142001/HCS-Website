/**
 * Auth feature domain types.
 * These are presentation/feature-scoped types — not domain entities.
 */

export interface AuthUser {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  role: UserRole;
  organizationId?: string;
}

export type UserRole =
  | 'super_admin'
  | 'org_admin'
  | 'credentialing_staff'
  | 'recruiter'
  | 'provider';

export interface LoginCredentials {
  email: string;
  password: string;
  rememberMe?: boolean;
}

export interface AuthSession {
  user: AuthUser;
  accessToken: string;
  expiresAt: number; // Unix timestamp
}

export interface AuthState {
  user: AuthUser | null;
  isAuthenticated: boolean;
  isLoading: boolean;
}
