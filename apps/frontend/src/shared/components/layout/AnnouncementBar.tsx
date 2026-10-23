'use client';

import React, { useState, useEffect } from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@/shared/components/ui/Icon';
import './AnnouncementBar.css';

/** Bar shown only on the homepage, rendered by the marketing layout so it sits above the navigation. */
export const AnnouncementBar: React.FC = () => {
  const isHomepage = usePathname() === '/';
  // Rendered visible from the server so the page doesn't shift down when JavaScript loads.
  // Only visitors who dismissed it this session see it removed after load.
  const [isVisible, setIsVisible] = useState(true);

  useEffect(() => {
    try {
      if (sessionStorage.getItem('hcs_announcement_dismissed')) {
        setIsVisible(false);
      }
    } catch {
      // Storage unavailable (private mode, blocked): keep the bar visible.
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('hcs_announcement_dismissed', '1');
    } catch {}
  };

  if (!isHomepage || !isVisible) return null;

  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div className="announcement-inner">
        <div className="announcement-content">
          <span className="announcement-msg-full">
            New providers starting soon? See how long credentialing and payer enrollment will take.
          </span>
          <a href="#estimator" className="announcement-cta">
            <span>Estimate your timeline</span>
            <span aria-hidden="true" className="announcement-arrow">&rarr;</span>
          </a>
        </div>
        <button
          type="button"
          className="announcement-dismiss"
          onClick={handleDismiss}
          aria-label="Dismiss announcement"
        >
          <Icon name="x" />
        </button>
      </div>
    </div>
  );
};

export default AnnouncementBar;
