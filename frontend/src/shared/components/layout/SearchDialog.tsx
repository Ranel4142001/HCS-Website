'use client';

import React, { useEffect, useMemo, useRef, useState } from 'react';
import Link from 'next/link';
import Icon from '@/shared/components/ui/Icon';
import { QUICK_LINKS, SEARCH_INDEX } from '@/shared/config/navigation';
import './SearchDialog.css';

interface SearchDialogProps {
  onClose: () => void;
  /** A result was followed. */
  onNavigate: () => void;
}

/** Site search: quick links by default, filtered across every page as the visitor types. */
export function SearchDialog({ onClose, onNavigate }: SearchDialogProps) {
  const [query, setQuery] = useState('');
  const inputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const timer = setTimeout(() => inputRef.current?.focus(), 80);
    return () => clearTimeout(timer);
  }, []);

  const trimmed = query.trim().toLowerCase();
  const results = useMemo(
    () =>
      trimmed
        ? SEARCH_INDEX.filter((link) => `${link.label} ${link.description ?? ''}`.toLowerCase().includes(trimmed))
        : QUICK_LINKS,
    [trimmed],
  );

  return (
    <div className="search-modal-backdrop" onClick={onClose}>
      <div
        className="search-modal-card"
        role="dialog"
        aria-modal="true"
        aria-label="Search the site"
        onClick={(e) => e.stopPropagation()}
      >
        <div className="search-modal-top">
          <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true">
            <circle cx="11" cy="11" r="8" /><line x1="21" y1="21" x2="16.65" y2="16.65" />
          </svg>
          <input
            ref={inputRef}
            id="site-search"
            type="text"
            className="search-modal-input"
            placeholder="Search services, pricing, FAQ..."
            aria-label="Search the site"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
          />
          <button type="button" className="search-modal-close" onClick={onClose} aria-label="Close search">
            ✕
          </button>
        </div>

        <div className="search-modal-results">
          <div className="search-section-label">{trimmed ? 'Results' : 'Quick Jump Links'}</div>
          <div className="search-links-list">
            {results.map((link) => (
              <Link key={link.href} href={link.href} onClick={onNavigate} className="search-result-item">
                {link.icon && <Icon name={link.icon} aria-hidden="true" />} <div><strong>{link.label}</strong><span>{link.description}</span></div>
              </Link>
            ))}
            {results.length === 0 && (
              <p className="search-empty">No pages match “{query.trim()}”. Try “pricing” or “recredentialing”.</p>
            )}
          </div>
        </div>
      </div>
    </div>
  );
}

export default SearchDialog;
