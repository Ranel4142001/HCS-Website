'use client';

import React, { useState, useEffect, useRef } from 'react';
import Link from 'next/link';
import { envConfig } from '@/shared/config/env.config';

export const Navbar: React.FC = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileOpen, setIsMobileOpen] = useState(false);
  const [activeDropdown, setActiveDropdown] = useState<string | null>(null);
  const [isSearchOpen, setIsSearchOpen] = useState(false);
  const [searchQuery, setSearchQuery] = useState('');
  const dropdownTimeoutRef = useRef<NodeJS.Timeout | null>(null);
  const searchInputRef = useRef<HTMLInputElement>(null);

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 16);
    window.addEventListener('scroll', handleScroll, { passive: true });
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth > 1024) {
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
        setActiveDropdown(null);
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

  useEffect(() => {
    if (isSearchOpen && searchInputRef.current) {
      setTimeout(() => searchInputRef.current?.focus(), 80);
    }
  }, [isSearchOpen]);

  const openMenu = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const closeMenu = () => {
    dropdownTimeoutRef.current = setTimeout(() => setActiveDropdown(null), 150);
  };

  const keepOpen = (name: string) => {
    if (dropdownTimeoutRef.current) clearTimeout(dropdownTimeoutRef.current);
    setActiveDropdown(name);
  };

  const closeAll = () => {
    setIsMobileOpen(false);
    setActiveDropdown(null);
    setIsSearchOpen(false);
    document.body.style.overflow = '';
  };

  const toggleMobile = () => {
    if (isMobileOpen) { setIsMobileOpen(false); document.body.style.overflow = ''; }
    else { setIsMobileOpen(true); document.body.style.overflow = 'hidden'; }
  };

  return (
    <>
      <nav className={`mdl-nav ${isScrolled ? 'mdl-nav--scrolled' : ''}`} id="nav">
        <div className="mdl-nav__inner">
          {/* Logo */}
          <Link href="/" className="mdl-nav__logo" onClick={closeAll} aria-label="HealthCredSTAT Home">
            <img
              src="/healthcredstat-logo.png"
              alt="HealthCredSTAT"
              width={200}
              height={50}
              className="mdl-nav__logo-img"
              loading="eager"
              decoding="async"
              fetchPriority="high"
              style={{
                height: '48px',
                width: 'auto',
                display: 'block',
                objectFit: 'contain',
              }}
            />
          </Link>

          {/* Desktop nav menu */}
          <div className={`mdl-nav__menu ${isMobileOpen ? 'mdl-nav__menu--open' : ''}`}>
            <div className="mdl-nav__links">

              {/* 1. SOLUTIONS DROPDOWN */}
              <div
                className="mdl-nav__item"
                onMouseEnter={() => openMenu('solutions')}
                onMouseLeave={closeMenu}
              >
                <button
                  type="button"
                  className={`mdl-nav__trigger ${activeDropdown === 'solutions' ? 'mdl-nav__trigger--active' : ''}`}
                  aria-expanded={activeDropdown === 'solutions'}
                  onClick={() => setActiveDropdown(activeDropdown === 'solutions' ? null : 'solutions')}
                >
                  Solutions
                  <svg className={`mdl-nav__chevron ${activeDropdown === 'solutions' ? 'mdl-nav__chevron--open' : ''}`} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {activeDropdown === 'solutions' && (
                  <div
                    className="mdl-panel"
                    onMouseEnter={() => keepOpen('solutions')}
                    onMouseLeave={closeMenu}
                  >
                    <div className="mdl-panel__grid">
                      {/* Col 1 — Platform */}
                      <div className="mdl-panel__col">
                        <span className="mdl-panel__heading">Platform</span>
                        <Link href="/solutions/provider-enrollment" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#eff6ff'}}>⚡</span>
                          <div>
                            <strong>Provider Enrollment</strong>
                            <span>Automate multi-payer applications</span>
                          </div>
                        </Link>
                        <Link href="/solutions/cvo-credentialing" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdfa'}}>🛡️</span>
                          <div>
                            <strong>CVO Credentialing</strong>
                            <span>Primary source verification</span>
                          </div>
                        </Link>
                        <Link href="/solutions/roster-management" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#faf5ff'}}>👥</span>
                          <div>
                            <strong>Roster Management</strong>
                            <span>Enterprise directory sync</span>
                          </div>
                        </Link>
                      </div>

                      {/* Col 2 — Agent Workflows */}
                      <div className="mdl-panel__col">
                        <span className="mdl-panel__heading">Agent Workflows</span>
                        <Link href="/solutions/delegated-credentialing" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#fffbeb'}}>🔗</span>
                          <div>
                            <strong>Delegated Credentialing</strong>
                            <span>Scale network velocity</span>
                          </div>
                        </Link>
                        <Link href="/solutions/privileging" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#fdf2f8'}}>🏥</span>
                          <div>
                            <strong>Privileging &amp; OPPE</strong>
                            <span>Hospital &amp; clinic sign-offs</span>
                          </div>
                        </Link>
                        <Link href="/solutions/cross-state-licensing" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdfa'}}>🌐</span>
                          <div>
                            <strong>Cross-State Licensing</strong>
                            <span>50-state board filings</span>
                          </div>
                        </Link>
                      </div>

                      {/* Spotlight */}
                      <div className="mdl-panel__spotlight">
                        <div className="mdl-panel__spotlight-img" style={{background:'linear-gradient(135deg,#062459,#0d6efd)'}}>
                          <div className="mdl-panel__spotlight-badge">
                            <span>🤖</span> Agent Engine
                          </div>
                          <div className="mdl-panel__spotlight-preview">
                            <div className="sp-row"><span className="sp-dot sp-dot--green"/>Provider Enrollment<span className="sp-tag">Active</span></div>
                            <div className="sp-row"><span className="sp-dot sp-dot--teal"/>CVO Credentialing<span className="sp-tag">Active</span></div>
                            <div className="sp-row"><span className="sp-dot sp-dot--blue"/>Roster Sync<span className="sp-tag">Running</span></div>
                          </div>
                        </div>
                        <p className="mdl-panel__spotlight-label">Every step from signed offer to billing, handled by one team.</p>
                        <Link href="/services" className="mdl-panel__spotlight-cta" onClick={closeAll}>
                          SEE ALL SERVICES <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 2. WHO WE HELP DROPDOWN */}
              <div
                className="mdl-nav__item"
                onMouseEnter={() => openMenu('who')}
                onMouseLeave={closeMenu}
              >
                <button
                  type="button"
                  className={`mdl-nav__trigger ${activeDropdown === 'who' ? 'mdl-nav__trigger--active' : ''}`}
                  aria-expanded={activeDropdown === 'who'}
                  onClick={() => setActiveDropdown(activeDropdown === 'who' ? null : 'who')}
                >
                  Who we help
                  <svg className={`mdl-nav__chevron ${activeDropdown === 'who' ? 'mdl-nav__chevron--open' : ''}`} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {activeDropdown === 'who' && (
                  <div
                    className="mdl-panel mdl-panel--who"
                    onMouseEnter={() => keepOpen('who')}
                    onMouseLeave={closeMenu}
                  >
                    <div className="mdl-panel__grid">
                      {/* Industries */}
                      <div className="mdl-panel__col">
                        <span className="mdl-panel__heading">Industries we help</span>
                        <Link href="/who-we-help/provider-groups" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#eff6ff'}}>🏢</span>
                          <div>
                            <strong>Provider Groups &amp; MSOs</strong>
                            <span>Multi-specialty practice scale</span>
                          </div>
                        </Link>
                        <Link href="/who-we-help/health-plans" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdfa'}}>🛡️</span>
                          <div>
                            <strong>Health Plans &amp; Payers</strong>
                            <span>Delegated network credentialing</span>
                          </div>
                        </Link>
                        <Link href="/who-we-help/health-systems" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#faf5ff'}}>🏛️</span>
                          <div>
                            <strong>Health Systems &amp; Hospitals</strong>
                            <span>Centralized CVO &amp; privileging</span>
                          </div>
                        </Link>
                        <Link href="/who-we-help/digital-health" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdfa'}}>💻</span>
                          <div>
                            <strong>Digital Health &amp; Telehealth</strong>
                            <span>Rapid multi-state onboarding</span>
                          </div>
                        </Link>
                      </div>

                      {/* Spotlight */}
                      <div className="mdl-panel__spotlight">
                        <div className="mdl-panel__spotlight-img" style={{background:'linear-gradient(135deg,#0a4a47,#10c1bb)'}}>
                          <div className="mdl-panel__spotlight-badge">
                            <span>📊</span> Roster Management
                          </div>
                          <div className="mdl-panel__spotlight-preview">
                            <div className="sp-row sp-row--header"><span>Provider</span><span>Status</span></div>
                            <div className="sp-row"><span>Dr. McLogan</span><span className="sp-tag sp-tag--green">Credentialed</span></div>
                            <div className="sp-row"><span>Dr. Ivan Mora</span><span className="sp-tag sp-tag--green">Credentialed</span></div>
                            <div className="sp-row"><span>Gary Smith</span><span className="sp-tag sp-tag--teal">In Progress</span></div>
                          </div>
                        </div>
                        <p className="mdl-panel__spotlight-label">Let us show you how HealthCredSTAT will transform your operations</p>
                        <Link href="/#contact" className="mdl-panel__spotlight-cta" onClick={closeAll}>
                          LEARN MORE <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 3. RESOURCES DROPDOWN */}
              <div
                className="mdl-nav__item"
                onMouseEnter={() => openMenu('resources')}
                onMouseLeave={closeMenu}
              >
                <button
                  type="button"
                  className={`mdl-nav__trigger ${activeDropdown === 'resources' ? 'mdl-nav__trigger--active' : ''}`}
                  aria-expanded={activeDropdown === 'resources'}
                  onClick={() => setActiveDropdown(activeDropdown === 'resources' ? null : 'resources')}
                >
                  Resources
                  <svg className={`mdl-nav__chevron ${activeDropdown === 'resources' ? 'mdl-nav__chevron--open' : ''}`} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {activeDropdown === 'resources' && (
                  <div
                    className="mdl-panel mdl-panel--resources"
                    onMouseEnter={() => keepOpen('resources')}
                    onMouseLeave={closeMenu}
                  >
                    <div className="mdl-panel__grid mdl-panel__grid--compact">
                      <div className="mdl-panel__col">
                        <Link href="/resources/library" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#eff6ff'}}>📖</span>
                          <div>
                            <strong>Resource library</strong>
                            <span>Guides, whitepapers, benchmarks</span>
                          </div>
                        </Link>
                        <Link href="/resources/blog" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdfa'}}>✍️</span>
                          <div>
                            <strong>Blog</strong>
                            <span>Industry analysis &amp; updates</span>
                          </div>
                        </Link>
                        <Link href="/resources/case-studies" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#faf5ff'}}>📑</span>
                          <div>
                            <strong>Case studies</strong>
                            <span>Customer turnaround stories</span>
                          </div>
                        </Link>
                      </div>

                      {/* Spotlight */}
                      <div className="mdl-panel__spotlight">
                        <div className="mdl-panel__spotlight-img" style={{background:'linear-gradient(135deg,#1e1b4b,#4338ca)'}}>
                          <div className="mdl-panel__spotlight-badge">
                            <span>🧮</span> Free tool
                          </div>
                          <div style={{color:'#fff', fontWeight:800, fontSize:'1.1rem', letterSpacing:'-0.02em', margin:'auto 0'}}>
                            Timeline Estimator
                          </div>
                        </div>
                        <p className="mdl-panel__spotlight-label">See how long credentialing will take for your providers.</p>
                        <Link href="/#estimator" className="mdl-panel__spotlight-cta" onClick={closeAll}>
                          TRY IT FREE <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 4. COMPANY DROPDOWN */}
              <div
                className="mdl-nav__item"
                onMouseEnter={() => openMenu('company')}
                onMouseLeave={closeMenu}
              >
                <button
                  type="button"
                  className={`mdl-nav__trigger ${activeDropdown === 'company' ? 'mdl-nav__trigger--active' : ''}`}
                  aria-expanded={activeDropdown === 'company'}
                  onClick={() => setActiveDropdown(activeDropdown === 'company' ? null : 'company')}
                >
                  Company
                  <svg className={`mdl-nav__chevron ${activeDropdown === 'company' ? 'mdl-nav__chevron--open' : ''}`} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><polyline points="6 9 12 15 18 9"/></svg>
                </button>

                {activeDropdown === 'company' && (
                  <div
                    className="mdl-panel mdl-panel--company"
                    onMouseEnter={() => keepOpen('company')}
                    onMouseLeave={closeMenu}
                  >
                    <div className="mdl-panel__grid mdl-panel__grid--compact">
                      <div className="mdl-panel__col">
                        <Link href="/about" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#eff6ff'}}>🏛️</span>
                          <div>
                            <strong>About us</strong>
                            <span>Our mission &amp; leadership</span>
                          </div>
                        </Link>
                        <Link href="/company/experts" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdfa'}}>🎖️</span>
                          <div>
                            <strong>Subject matter experts</strong>
                            <span>Credentialing directors &amp; counsel</span>
                          </div>
                        </Link>
                        <Link href="/company/newsroom" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#faf5ff'}}>📰</span>
                          <div>
                            <strong>Newsroom</strong>
                            <span>Press releases &amp; media</span>
                          </div>
                        </Link>
                        <Link href="/company/compliance" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#f0fdf4'}}>🔒</span>
                          <div>
                            <strong>Compliance</strong>
                            <span>How we protect provider data</span>
                          </div>
                        </Link>
                        <Link href="/company/careers" className="mdl-panel__link" onClick={closeAll}>
                          <span className="mdl-panel__link-icon" style={{background:'#fffbeb'}}>⭐</span>
                          <div>
                            <strong>Careers</strong>
                            <span>We&apos;re hiring!</span>
                          </div>
                        </Link>
                      </div>

                      {/* Spotlight */}
                      <div className="mdl-panel__spotlight">
                        <div className="mdl-panel__spotlight-img" style={{background:'linear-gradient(135deg,#062459,#10c1bb)'}}>
                          <div className="mdl-panel__spotlight-badge">
                            <span>💬</span> Free quote
                          </div>
                          <div style={{color:'#fff', fontWeight:700, fontSize:'0.85rem', lineHeight:1.35, margin:'auto 0'}}>
                            Talk to a credentialing specialist
                          </div>
                        </div>
                        <p className="mdl-panel__spotlight-label">Get pricing and a realistic timeline for your providers.</p>
                        <Link href="/contact" className="mdl-panel__spotlight-cta" onClick={closeAll}>
                          GET A QUOTE <span>↗</span>
                        </Link>
                      </div>
                    </div>
                  </div>
                )}
              </div>

              {/* 5. PRICING PLAIN LINK */}
              <Link href="/pricing" className="mdl-nav__plain-link" onClick={closeAll}>
                Pricing
              </Link>
            </div>

            {/* Right actions: Search, Divider, Sign In, primary CTA */}
            <div className="mdl-nav__actions">
              {/* Search button */}
              <button
                type="button"
                className="mdl-nav__search-btn"
                onClick={() => setIsSearchOpen(true)}
                aria-label="Search"
                title="Search (Ctrl + K)"
              >
                <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                  <circle cx="11" cy="11" r="8"/>
                  <line x1="21" y1="21" x2="16.65" y2="16.65"/>
                </svg>
              </button>

              <div className="mdl-nav__divider" />

              {envConfig.portalUrl && (
                <a href={envConfig.portalUrl} className="mdl-nav__signin" onClick={closeAll}>
                  Sign In
                </a>
              )}

              <Link href="/#contact" className="mdl-nav__btn-touch" onClick={closeAll}>
                GET A FREE QUOTE
              </Link>
            </div>
          </div>

          {/* Mobile hamburger */}
          <button
            className="mdl-nav__hamburger"
            aria-label="Toggle menu"
            aria-expanded={isMobileOpen}
            onClick={toggleMobile}
          >
            {isMobileOpen ? (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="18" y1="6" x2="6" y2="18"/><line x1="6" y1="6" x2="18" y2="18"/></svg>
            ) : (
              <svg width="22" height="22" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2"><line x1="3" y1="6" x2="21" y2="6"/><line x1="3" y1="12" x2="21" y2="12"/><line x1="3" y1="18" x2="21" y2="18"/></svg>
            )}
          </button>
        </div>
      </nav>

      {/* Search Modal */}
      {isSearchOpen && (
        <div className="search-modal-backdrop" onClick={() => setIsSearchOpen(false)}>
          <div className="search-modal-card" onClick={(e) => e.stopPropagation()}>
            <div className="search-modal-top">
              <svg width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="8"/><line x1="21" y1="21" x2="16.65" y2="16.65"/>
              </svg>
              <input
                ref={searchInputRef}
                type="text"
                className="search-modal-input"
                placeholder="Search solutions, resources, pricing, compliance..."
                value={searchQuery}
                onChange={(e) => setSearchQuery(e.target.value)}
              />
              <button
                type="button"
                className="search-modal-close"
                onClick={() => setIsSearchOpen(false)}
                aria-label="Close search"
              >
                ✕
              </button>
            </div>

            <div className="search-modal-results">
              <div className="search-section-label">Quick Jump Links</div>
              <div className="search-links-list">
                <Link href="/solutions/provider-enrollment" onClick={closeAll} className="search-result-item">
                  ⚡ <div><strong>Provider Enrollment</strong><span>Automate multi-payer applications</span></div>
                </Link>
                <Link href="/solutions/cvo-credentialing" onClick={closeAll} className="search-result-item">
                  🛡️ <div><strong>CVO Credentialing</strong><span>Primary source verification</span></div>
                </Link>
                <Link href="/pricing" onClick={closeAll} className="search-result-item">
                  💳 <div><strong>Transparent Pricing</strong><span>Calculate ROI &amp; plans</span></div>
                </Link>
                <Link href="/resources/library" onClick={closeAll} className="search-result-item">
                  📖 <div><strong>Resource Library</strong><span>Whitepapers &amp; checklists</span></div>
                </Link>
                <Link href="/about" onClick={closeAll} className="search-result-item">
                  🏛️ <div><strong>About HealthCredSTAT</strong><span>Mission &amp; leadership</span></div>
                </Link>
              </div>
            </div>
          </div>
        </div>
      )}
    </>
  );
};

export default Navbar;
