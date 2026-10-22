import { apiClient } from '@/infrastructure/api/apiClient';
import type { LoginCredentials, AuthSession } from '../types/auth.types';

/**
 * Auth service — handles all authentication HTTP operations.
 * Components must never call apiClient directly; always go through this service.
 */
export const authService = {
  /**
   * Authenticates a user and returns a session with access token.
   */
  async login(credentials: LoginCredentials): Promise<AuthSession> {
    const response = await apiClient.post<AuthSession>('/auth/login', credentials);
    return response.data;
  },

  /**
   * Invalidates the current session on the server.
   */
  async logout(): Promise<void> {
    await apiClient.post('/auth/logout');
  },

  /**
   * Returns the currently authenticated user from the server.
   */
  async getCurrentUser(): Promise<AuthSession['user']> {
    const response = await apiClient.get<AuthSession['user']>('/auth/me');
    return response.data;
  },

  /**
   * Requests a password reset email for the given address.
   */
  async requestPasswordReset(email: string): Promise<void> {
    await apiClient.post('/auth/forgot-password', { email });
  },
};
