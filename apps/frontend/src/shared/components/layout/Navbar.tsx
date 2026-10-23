'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { envConfig } from '@/shared/config/env.config';
import { NAV_LINKS, NAV_MENUS, PRIMARY_CTA } from '@/shared/config/navigation';
import { NavDropdown } from './NavDropdown';
import { SearchDialog } from './SearchDialog';

const MOBILE_BREAKPOINT = 1024;
const CLOSE_DELAY_MS = 150;

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeMenu, setActiveMenu] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const closeTimer = useRef<ReturnType<typeof setTimeout> | null>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > MOBILE_BREAKPOINT) {
        setIsMobileOpen(false);
        document.body.style.overflow = '';
      }
    };
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        setActiveMenu(null);
        setIsMobileOpen(false);
        setIsSearchOpen(false);
      }
      if ((e.metaKey || e.ctrlKey) && e.key === 'k') {
        e.preventDefault();
        setIsSearchOpen(true);
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, []);

  const openMenu = (id: string) => {
    if (closeTimer.current) clearTimeout(closeTimer.current);
    setActiveMenu(id);
  };

  const closeMenuSoon = () => {
    closeTimer.current = setTimeout(() => setActiveMenu(null), CLOSE_DELAY_MS);
  };

  const closeAll = () => {
    setIsMobileOpen(false);
    setActiveMenu(null);
    setIsSearchOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobile = () => {
    const next = !isMobileOpen;
    setIsMobileOpen(next);
    document.body.style.overflow = next ? 'hidden' : '';
  };

  return (
    <>
      <nav className={`mdl-nav ${isScrolled ? 'mdl-nav--scrolled' : ''}`} id="nav">
        <div className="mdl-nav__inner">
          <Link href="/" className="mdl-nav__logo" onClick={closeAll} aria-label="HealthCredSTAT Home">
            {/* eslint-disable-next-line @next/next/no-img-element -- brand logo is served as-is, never re-encoded */}
            <img
              src="/healthcredstat-logo.png"
              alt="HealthCredSTAT"
              width={200}
              height={50}
              className="mdl-nav__logo-img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
            />
          </Link>

          <div className={`mdl-nav__menu ${isMobileOpen ? 'mdl-nav__menu--open' : ''}`}>
            <div className="mdl-nav__links">
              {NAV_MENUS.map((menu) => (
                <NavDropdown
                  key={menu.id}
                  menu={menu}
                  isOpen={activeMenu === menu.id}
                  onOpen={() => openMenu(menu.id)}
                  onClose={closeMenuSoon}
                  onToggle={() => setActiveMenu(activeMenu === menu.id ? null : menu.id)}
                  onNavigate={closeAll}
                />
              ))}
              {NAV_LINKS.map((link) => (
                <Link key={link.href} href={link.href} className="mdl-nav__plain-link" onClick={closeAll}>
                  {link.label}
                </Link>
              ))}
            </div>

            <div className="mdl-nav__actions">
              <button
                type="button"
                className="mdl-nav__search-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                title="Search (Ctrl + K)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" aria-hidden="true">
                  <circle cx="11" cy="11" r="8" />
                  <line x1="21" y1="21" x2="16.65" y2="16.65" />
                </svg>
              </button>

              <div className="mdl-nav__divider" />

              {envConfig.portalUrl && (
                <a href={envConfig.portalUrl} className="mdl-nav__signin" onClick={closeAll}>
                  Sign In
                </a>
              )}

              <Link href={PRIMARY_CTA.href} className="mdl-nav__btn-touch" onClick={closeAll}>
                {PRIMARY_CTA.label}
              </Link>
            </div>
          </div>

          <button
            className="mdl-nav__hamburger"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={toggleMobile}
          >
            {isMobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="18" y1="6" x2="6" y2="18" /><line x1="6" y1="6" x2="18" y2="18" /></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><line x1="3" y1="6" x2="21" y2="6" /><line x1="3" y1="12" x2="21" y2="12" /><line x1="3" y1="18" x2="21" y2="18" /></svg>
            )}
          </button>
        </div>
      </nav>

      {isSearchOpen && <SearchDialog onClose={() => setIsSearchOpen(false)} onNavigate={closeAll} />}
    </>
  );
};

export default Navbar;
