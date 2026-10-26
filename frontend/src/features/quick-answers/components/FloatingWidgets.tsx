'use client';

import React from 'react';
import dynamic from 'next/dynamic';

const QuickAnswersWidget = dynamic(
  () => import('@/features/quick-answers/components/QuickAnswersWidget'),
  { ssr: false }
);

const BackToTop = dynamic(
  () => import('@/shared/components/layout/BackToTop'),
  { ssr: false }
);

export default function FloatingWidgets() {
  return (
    <>
      <QuickAnswersWidget />
      <BackToTop />
    </>
  );
}
