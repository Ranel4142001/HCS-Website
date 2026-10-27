import React from 'react';
import Link from 'next/link';
import Icon from '@/shared/components/ui/Icon';
import type { NavMenu, NavSpotlight } from '@/shared/config/navigation';
import './NavDropdown.css';

interface NavDropdownProps {
  menu: NavMenu;
  isOpen: boolean;
  /** Hover: open this menu (cancels a pending close). */
  onOpen: () => void;
  /** Hover out: close after a short delay. */
  onClose: () => void;
  /** Click on the trigger. */
  onToggle: () => void;
  /** Any link inside the panel was followed. */
  onNavigate: () => void;
}

function Spotlight({ spotlight, onNavigate }: { spotlight: NavSpotlight; onNavigate: () => void }) {
  return (
    <div className="mdl-panel__spotlight">
      <div className="mdl-panel__spotlight-img" style={{ background: spotlight.background }}>
        <div className="mdl-panel__spotlight-badge">
          <Icon name={spotlight.badge.icon} aria-hidden="true" /> {spotlight.badge.label}
        </div>
        <div className="mdl-panel__spotlight-preview">
          {spotlight.header && (
            <div className="sp-row sp-row--header"><span>{spotlight.header[0]}</span><span>{spotlight.header[1]}</span></div>
          )}
          {spotlight.rows.map((row) =>
            row.dot ? (
              <div key={row.label} className="sp-row">
                <span className={`sp-dot sp-dot--${row.dot}`} />{row.label}<span className="sp-tag">{row.tag}</span>
              </div>
            ) : (
              <div key={row.label} className="sp-row">
                <span>{row.label}</span>
                <span className={`sp-tag${row.tagTone ? ` sp-tag--${row.tagTone}` : ''}`}>{row.tag}</span>
              </div>
            ),
          )}
        </div>
      </div>
      <p className="mdl-panel__spotlight-label">{spotlight.caption}</p>
      <Link href={spotlight.cta.href} className="mdl-panel__spotlight-cta" onClick={onNavigate}>
        {spotlight.cta.label} <span>↗</span>
      </Link>
    </div>
  );
}

/** One top-level menu in the navbar: trigger button plus its mega-menu panel. */
export function NavDropdown({ menu, isOpen, onOpen, onClose, onToggle, onNavigate }: NavDropdownProps) {
  return (
    <div className="mdl-nav__item" onMouseEnter={onOpen} onMouseLeave={onClose}>
      <button
        type="button"
        className={`mdl-nav__trigger ${isOpen ? 'mdl-nav__trigger--active' : ''}`}
        aria-expanded={isOpen}
        onClick={onToggle}
      >
        {menu.label}
        <svg className={`mdl-nav__chevron ${isOpen ? 'mdl-nav__chevron--open' : ''}`} width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" aria-hidden="true"><polyline points="6 9 12 15 18 9" /></svg>
      </button>

      {isOpen && (
        <div
          className={`mdl-panel${menu.panelClassName ? ` ${menu.panelClassName}` : ''}`}
          onMouseEnter={onOpen}
          onMouseLeave={onClose}
        >
          <div className="mdl-panel__grid">
            {menu.groups.map((group) => (
              <div key={group.heading} className="mdl-panel__col">
                <span className="mdl-panel__heading">{group.heading}</span>
                {group.links.map((link) => (
                  <Link key={link.href} href={link.href} className="mdl-panel__link" onClick={onNavigate}>
                    <span className="mdl-panel__link-icon" style={{ background: link.iconBg }}>{link.icon && <Icon name={link.icon} aria-hidden="true" />}</span>
                    <div>
                      <strong>{link.label}</strong>
                      <span>{link.description}</span>
                    </div>
                  </Link>
                ))}
              </div>
            ))}
            <Spotlight spotlight={menu.spotlight} onNavigate={onNavigate} />
          </div>
        </div>
      )}
    </div>
  );
}

export default NavDropdown;
