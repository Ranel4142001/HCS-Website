import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function OrganizationsPage() {
  return (
    <div>
      <Badge icon={<Icon name="building" />}>Practice Networks</Badge>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 8, marginBottom: 20 }}>
        Organization &amp; Facility Directory
      </h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Manage hospital privileges, group practice rosters, and staffing agency network alliances.
      </p>
    </div>
  );
}

