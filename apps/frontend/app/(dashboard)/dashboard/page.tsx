import React from 'react';
import Icon from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';

export default function DashboardPage() {
  return (
    <div>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', marginBottom: 28 }}>
        <div>
          <Badge icon={<Icon name="sparkle" />}>Enterprise Dashboard</Badge>
          <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 8 }}>
            Credentialing Overview
          </h1>
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: 'repeat(4, 1fr)', gap: 20, marginBottom: 32 }}>
        <div style={{ background: 'var(--surface)', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', fontWeight: 600 }}>Active Providers</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 4 }}>142</div>
        </div>

        <div style={{ background: 'var(--surface)', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', fontWeight: 600 }}>Applications In-Review</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--teal-600)', marginTop: 4 }}>18</div>
        </div>

        <div style={{ background: 'var(--surface)', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', fontWeight: 600 }}>Action Required</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: '#e63946', marginTop: 4 }}>3</div>
        </div>

        <div style={{ background: 'var(--surface)', padding: 24, borderRadius: 'var(--radius-md)', border: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.85rem', color: 'var(--ink-soft)', fontWeight: 600 }}>Compliance Health</div>
          <div style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--cyan-400)', marginTop: 4 }}>99.2%</div>
        </div>
      </div>
    </div>
  );
}

