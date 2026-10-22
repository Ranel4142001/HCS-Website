'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const AiAdvisorWidget = dynamic(
  () => import('@/features/ai-assistant/components/AiAdvisorWidget'),
  { ssr: false }
);

const BackToTop = dynamic(
  () => import('@/shared/components/layout/BackToTop'),
  { ssr: false }
);

export default function ClientFloatingWidgets() {
  return (
    <>
      <AiAdvisorWidget />
      <BackToTop />
    </>
  );
}
