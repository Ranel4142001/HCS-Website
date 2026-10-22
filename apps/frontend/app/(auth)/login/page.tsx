'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import Input from '@/shared/components/forms/Input';
import Button from '@/shared/components/ui/Button';
import Icon from '@/shared/components/ui/Icon';

export default function LoginPage() {
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [isLoading, setIsLoading] = useState(false);
  const router = useRouter();

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setIsLoading(true);

    setTimeout(() => {
      setIsLoading(false);
      router.push('/dashboard');
    }, 1000);
  };

  return (
    <div
      style={{
        minHeight: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        background: 'var(--bg)',
        padding: '48px 24px',
        position: 'relative',
      }}
    >
      <div
        style={{
          maxWidth: 440,
          width: '100%',
          position: 'relative',
          zIndex: 1,
          background: 'var(--surface)',
          border: '1px solid var(--line)',
          borderRadius: 'var(--radius-lg)',
          padding: '40px',
          boxShadow: 'var(--shadow-lg)',
        }}
      >
        <div style={{ textAlign: 'center', marginBottom: 32 }}>
          <Link
            href="/"
            style={{
              display: 'inline-flex',
              alignItems: 'center',
              gap: 10,
              fontWeight: 800,
              fontSize: '1.18rem',
              letterSpacing: '-0.02em',
              color: 'var(--ink)',
              textDecoration: 'none',
              marginBottom: 16,
            }}
          >
            <span className="logo-mark"><img src="/logo.png" alt="HealthCredSTAT logo" width="36" height="36" /></span>
            <span className="logo-text">HealthCred<b style={{ color: 'var(--teal-600)' }}>STAT</b></span>
          </Link>
          <h2
            style={{
              fontSize: '1.5rem',
              fontWeight: 800,
              color: 'var(--ink)',
              marginBottom: 8,
            }}
          >
            Client Portal Login
          </h2>
          <p style={{ color: 'var(--ink-soft)', fontSize: '0.9rem' }}>
            Access your credentialing status and document vault
          </p>
        </div>

        <form onSubmit={handleSubmit} style={{ display: 'flex', flexDirection: 'column', gap: 0 }} noValidate>
          <Input
            id="loginEmail"
            label="Email Address"
            type="email"
            placeholder="doctor@practice.com"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            required
          />

          <Input
            id="loginPassword"
            label="Password"
            type="password"
            placeholder="••••••••••••"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
            required
          />

          <div
            style={{
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'space-between',
              margin: '12px 0 24px',
              fontSize: '0.85rem',
            }}
          >
            <label style={{ display: 'flex', alignItems: 'center', gap: 8, cursor: 'pointer', color: 'var(--ink-soft)' }}>
              <input type="checkbox" style={{ accentColor: 'var(--teal-600)' }} />
              Remember me
            </label>
            <a href="#top" style={{ color: 'var(--teal-600)', fontWeight: 600 }}>
              Forgot password?
            </a>
          </div>

          <Button type="submit" fullWidth disabled={isLoading} icon={<Icon name="arrow" />}>
            {isLoading ? 'Signing In...' : 'Sign In to Portal'}
          </Button>
        </form>

        <div
          style={{
            marginTop: 28,
            paddingTop: 20,
            borderTop: '1px solid var(--line)',
            textAlign: 'center',
            fontSize: '0.88rem',
            color: 'var(--ink-soft)',
          }}
        >
          Don&apos;t have an active portal account?{' '}
          <Link href="/#contact" style={{ color: 'var(--teal-600)', fontWeight: 700 }}>
            Get Started
          </Link>
        </div>
      </div>
    </div>
  );
}

