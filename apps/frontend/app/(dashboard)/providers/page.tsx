import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function ProvidersPage() {
  return (
    <div>
      <Badge icon={<Icon name="user" />}>Clinician Directory</Badge>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 8, marginBottom: 20 }}>
        Provider Roster Management
      </h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Manage active clinician profiles, primary source verification status, and license expiration timelines.
      </p>
    </div>
  );
}

