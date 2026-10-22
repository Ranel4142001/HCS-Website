'use client';

import { useMutation } from '@tanstack/react-query';
import { useRouter } from 'next/navigation';
import { authService } from '../services/auth.service';
import { ROUTES } from '@/shared/constants';
import type { LoginCredentials } from '../types/auth.types';

/**
 * Hook for handling user login with TanStack Query mutation.
 * Handles loading state, error state, and post-login redirect automatically.
 *
 * @example
 * const { login, isPending, error } = useLogin();
 * login({ email, password });
 */
export function useLogin() {
  const router = useRouter();

  const mutation = useMutation({
    mutationFn: (credentials: LoginCredentials) => authService.login(credentials),
    onSuccess: (session) => {
      // Store token — storage adapter handles the implementation detail
      if (typeof window !== 'undefined') {
        localStorage.setItem('auth_token', session.accessToken);
      }
      router.push(ROUTES.DASHBOARD);
    },
    onError: (error) => {
      console.error('[useLogin] Login failed:', error);
    },
  });

  return {
    login: mutation.mutate,
    isPending: mutation.isPending,
    isError: mutation.isError,
    error: mutation.error,
    reset: mutation.reset,
  };
}
