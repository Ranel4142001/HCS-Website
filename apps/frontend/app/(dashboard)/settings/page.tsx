import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function SettingsPage() {
  return (
    <div>
      <Badge icon={<Icon name="cog" />}>System Config</Badge>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 8, marginBottom: 20 }}>
        Practice &amp; System Settings
      </h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Configure automated renewal alerts, user roles, API integration tokens, and notifications.
      </p>
    </div>
  );
}

