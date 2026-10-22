import React from 'react';
import Badge from '@/shared/components/ui/Badge';
import Icon from '@/shared/components/ui/Icon';

export default function DocumentsPage() {
  return (
    <div>
      <Badge icon={<Icon name="doc-check" />}>HIPAA Vault</Badge>
      <h1 style={{ fontSize: '2rem', fontWeight: 800, color: 'var(--ink)', marginTop: 8, marginBottom: 20 }}>
        Secure Document Vault
      </h1>
      <p style={{ color: 'var(--ink-soft)' }}>
        Encrypted storage for medical licenses, DEA certificates, malpractice certificates, and CAQH documents.
      </p>
    </div>
  );
}

