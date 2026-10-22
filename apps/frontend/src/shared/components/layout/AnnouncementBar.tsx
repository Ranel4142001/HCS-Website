'use client';

import React, { useState, useEffect } from 'react';
import Icon from '@/shared/components/ui/Icon';

export const AnnouncementBar: React.FC = () => {
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    try {
      const dismissed = sessionStorage.getItem('hcs_announcement_dismissed');
      if (!dismissed) {
        setIsVisible(true);
      }
    } catch {
      setIsVisible(true);
    }
  }, []);

  const handleDismiss = () => {
    setIsVisible(false);
    try {
      sessionStorage.setItem('hcs_announcement_dismissed', '1');
    } catch {}
  };

  if (!isVisible) return null;

  return (
    <div className="announcement-bar" role="region" aria-label="Announcement">
      <div className="announcement-inner">
        <div className="announcement-content">
          <span className="announcement-msg-full">
            HealthCredSTAT launches Real-Time CVO &amp; Autonomous Agent Workflows for provider enrollment.
          </span>
          <a href="#workflows" className="announcement-cta">
            <span>Explore features</span>
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
