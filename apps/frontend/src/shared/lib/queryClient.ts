import { QueryClient } from '@tanstack/react-query';

/**
 * Singleton QueryClient instance shared across the app.
 * Configure default staleTime, retry logic, and error behavior here.
 */
export function createQueryClient(): QueryClient {
  return new QueryClient({
    defaultOptions: {
      queries: {
        staleTime: 5 * 60 * 1000, // 5 minutes
        gcTime: 10 * 60 * 1000,   // 10 minutes
        retry: (failureCount, error) => {
          // Do not retry on 401 / 403 / 404
          const status = (error as { statusCode?: number })?.statusCode;
          if (status === 401 || status === 403 || status === 404) return false;
          return failureCount < 2;
        },
        refetchOnWindowFocus: false,
        refetchOnReconnect: true,
      },
      mutations: {
        retry: 0,
      },
    },
  });
}
