'use client';

import React, { useState, useSyncExternalStore } from 'react';
import { usePathname } from 'next/navigation';
import Icon from '@/shared/components/ui/Icon';
import './AnnouncementBar.css';

const DISMISSED_KEY = 'hcs_announcement_dismissed';

function wasDismissed() {
  try {
    return Boolean(sessionStorage.getItem(DISMISSED_KEY));
  } catch {
    return false; // Storage unavailable (private mode, blocked): keep the bar visible.
  }
}

// sessionStorage has no change events within a tab; dismissing in this tab is tracked in state instead.
const subscribeToNothing = () => () => {};

/** Bar shown only on the homepage, rendered by the marketing layout so it sits above the navigation. */
export const AnnouncementBar: React.FC = () => {
  const isHomepage = usePathname() === '/';
  // Rendered visible from the server (snapshot false) so the page doesn't shift down when JavaScript
  // loads. Only visitors who dismissed it earlier this session see it removed after load.
  const dismissedEarlier = useSyncExternalStore(subscribeToNothing, wasDismissed, () => false);
  const [dismissedNow, setDismissedNow] = useState(false);

  const handleDismiss = () => {
    setDismissedNow(true);
    try {
      sessionStorage.setItem(DISMISSED_KEY, '1');
    } catch {}
  };

  if (!isHomepage || dismissedEarlier || dismissedNow) return null;

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
