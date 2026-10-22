import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function CredentialingPage() {
  return (
    <div>
      <Badge icon={<Icon name="shield" />}>Live Tracker</Badge>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 8, marginBottom: 20 }}>
        Credentialing &amp; Payor Tracker
      </h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Track application packet submissions, primary source verification milestones, and payor committee decisions.
      </p>
    </div>
  );
}

