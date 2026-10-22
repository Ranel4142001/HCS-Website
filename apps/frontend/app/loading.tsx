'use client';
export default function GlobalLoading() {
  return (
    <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', minHeight: '100vh' }}>
      <div className="spinner" aria-label="Loading..." />
    </div>
  );
}
