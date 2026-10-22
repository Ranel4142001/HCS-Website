'use client';

import React, { useState } from 'react';
import { QueryClientProvider } from '@tanstack/react-query';
import { createQueryClient } from '@/shared/lib/queryClient';

/**
 * Root client-side provider tree.
 * Wrap all global providers here — TanStack Query, Auth context, Theme, etc.
 * This is the only file that ties together shared infrastructure.
 */
export function Providers({ children }: { children: React.ReactNode }) {
  // useState ensures QueryClient is created once per component lifecycle
  const [queryClient] = useState(() => createQueryClient());

  return (
    <QueryClientProvider client={queryClient}>
      {children}
    </QueryClientProvider>
  );
}
