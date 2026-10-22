'use client';

import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import Icon from '@/shared/components/ui/Icon';

export default function DashboardLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname();

  const navItems = [
    { href: '/dashboard', label: 'Overview', icon: 'bar' },
    { href: '/providers', label: 'Providers', icon: 'user' },
    { href: '/organizations', label: 'Organizations', icon: 'building' },
    { href: '/credentialing', label: 'Credentialing', icon: 'shield' },
    { href: '/documents', label: 'Documents Vault', icon: 'doc-check' },
    { href: '/settings', label: 'Settings', icon: 'cog' },
  ];

  return (
    <div style={{ display: 'flex', minHeight: '100vh', background: 'var(--bg)' }}>
      {/* Sidebar Navigation */}
      <aside
        style={{
          width: 260,
          background: 'var(--surface)',
          borderRight: '1px solid var(--line)',
          padding: '24px 16px',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'space-between',
        }}
      >
        <div>
          <Link href="/" style={{ display: 'flex', alignItems: 'center', textDecoration: 'none', marginBottom: 32, paddingLeft: 12 }}>
            <img src="/healthcredstat-logo.png" alt="HealthCredSTAT" height={42} style={{ height: '42px', width: 'auto', display: 'block', objectFit: 'contain' }} />
          </Link>

          <nav style={{ display: 'flex', flexDirection: 'column', gap: 4 }}>
            {navItems.map((item) => {
              const isActive = pathname === item.href;
              return (
                <Link
                  key={item.href}
                  href={item.href}
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    gap: 12,
                    padding: '10px 14px',
                    borderRadius: 'var(--radius-sm)',
                    fontWeight: isActive ? 700 : 500,
                    color: isActive ? 'var(--teal-600)' : 'var(--ink-soft)',
                    background: isActive ? 'var(--mint-100)' : 'transparent',
                    textDecoration: 'none',
                    transition: 'all 0.2s ease',
                  }}
                >
                  <Icon name={item.icon} style={{ width: 18, height: 18 }} />
                  <span>{item.label}</span>
                </Link>
              );
            })}
          </nav>
        </div>

        <div style={{ padding: '16px 12px', borderTop: '1px solid var(--line)' }}>
          <div style={{ fontSize: '0.85rem', fontWeight: 700, color: 'var(--ink)' }}>Dr. Sarah Jenkins, MD</div>
          <div style={{ fontSize: '0.78rem', color: 'var(--ink-soft)' }}>Credentialing Admin</div>
          <Link href="/" style={{ display: 'inline-flex', alignItems: 'center', gap: 6, fontSize: '0.8rem', color: 'var(--teal-600)', marginTop: 12, textDecoration: 'none' }}>
            <Icon name="x" style={{ width: 14, height: 14 }} /> Sign Out
          </Link>
        </div>
      </aside>

      {/* Main Content Area */}
      <main style={{ flex: 1, padding: '32px 40px', overflowY: 'auto' }}>
        {children}
      </main>
    </div>
  );
}

