'use client';

import React, { useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import Badge from '@/shared/components/ui/Badge';

interface TrackingResult {
  npi: string;
  providerName: string;
  specialty: string;
  overallStatus: 'In Progress' | 'PSV Complete' | 'In Committee' | 'Active In-Network';
  progressPercent: number;
  stages: { name: string; status: 'completed' | 'in-progress' | 'pending'; date: string; note: string }[];
  payers: { name: string; status: 'Approved' | 'In Review' | 'Submitted'; daysRemaining: string }[];
}

const SAMPLE_TRACKING: Record<string, TrackingResult> = {
  '1942083921': {
    npi: '1942083921',
    providerName: 'Dr. Rebecca Stone, MD',
    specialty: 'Family Medicine &bull; Austin, TX',
    overallStatus: 'In Committee',
    progressPercent: 82,
    stages: [
      { name: 'Application Intake & CAQH Sync', status: 'completed', date: 'Sep 12', note: '100% documents validated' },
      { name: 'Primary Source Verification (PSV)', status: 'completed', date: 'Sep 14', note: 'TX Board & NPDB queries clear' },
      { name: 'Payer Submission (Aetna & BCBS TX)', status: 'completed', date: 'Sep 16', note: 'Dispatched via Direct API' },
      { name: 'Credentials Committee Sign-Off', status: 'in-progress', date: 'In Review', note: 'Scheduled for weekly docket' },
      { name: 'In-Network Billing Activation', status: 'pending', date: 'Est. Sep 28', note: 'Ready for claims dispatch' },
    ],
    payers: [
      { name: 'Medicare Part B (Novitas)', status: 'Approved', daysRemaining: 'Active' },
      { name: 'Blue Cross Blue Shield TX', status: 'Approved', daysRemaining: 'Active' },
      { name: 'Aetna Commercial', status: 'In Review', daysRemaining: '3–5 days est.' },
      { name: 'UnitedHealthcare / Optum', status: 'Submitted', daysRemaining: '7–10 days est.' },
    ],
  },
  '1829031120': {
    npi: '1829031120',
    providerName: 'Dr. Marcus Vance, DO',
    specialty: 'Cardiovascular Disease &bull; Dallas, TX',
    overallStatus: 'Active In-Network',
    progressPercent: 100,
    stages: [
      { name: 'Application Intake & CAQH Sync', status: 'completed', date: 'Aug 20', note: 'Clean submission' },
      { name: 'Primary Source Verification (PSV)', status: 'completed', date: 'Aug 21', note: 'DEA & Board certified' },
      { name: 'Payer Submission', status: 'completed', date: 'Aug 23', note: 'All packets accepted' },
      { name: 'Credentials Committee Sign-Off', status: 'completed', date: 'Aug 28', note: 'Unanimous approval' },
      { name: 'In-Network Billing Activation', status: 'completed', date: 'Sep 02', note: 'Active billing provider' },
    ],
    payers: [
      { name: 'Medicare Part B', status: 'Approved', daysRemaining: 'Active' },
      { name: 'BCBS Texas', status: 'Approved', daysRemaining: 'Active' },
      { name: 'Cigna Health', status: 'Approved', daysRemaining: 'Active' },
      { name: 'Humana Choice', status: 'Approved', daysRemaining: 'Active' },
    ],
  },
};

export const ApplicationTrackerSection: React.FC = () => {
  const [query, setQuery] = useState('1942083921');
  const [result, setResult] = useState<TrackingResult | null>(SAMPLE_TRACKING['1942083921']);
  const [error, setError] = useState<string | null>(null);

  const handleSearch = (npiValue: string) => {
    const cleaned = npiValue.trim();
    if (!cleaned) {
      setError('Please enter a 10-digit NPI or Application ID.');
      setResult(null);
      return;
    }

    if (SAMPLE_TRACKING[cleaned]) {
      setResult(SAMPLE_TRACKING[cleaned]);
      setError(null);
    } else if (cleaned.length === 10 && /^\d+$/.test(cleaned)) {
      // Generate live mockup for any valid 10-digit NPI
      setResult({
        npi: cleaned,
        providerName: `Provider NPI #${cleaned}`,
        specialty: 'Clinical Specialist &bull; Active Verification',
        overallStatus: 'In Progress',
        progressPercent: 65,
        stages: [
          { name: 'Application Intake & CAQH Sync', status: 'completed', date: 'Recent', note: 'Attestation verified' },
          { name: 'Primary Source Verification (PSV)', status: 'completed', date: 'Recent', note: 'Licensure queries verified' },
          { name: 'Payer Submissions Dispatched', status: 'in-progress', date: 'In Flight', note: 'Portals active' },
          { name: 'Credentials Committee Review', status: 'pending', date: 'Upcoming', note: 'Pending committee review' },
          { name: 'In-Network Billing Activation', status: 'pending', date: 'Estimated', note: 'Final step' },
        ],
        payers: [
          { name: 'Medicare Enrollment', status: 'In Review', daysRemaining: '4–8 days' },
          { name: 'Commercial Health Plans', status: 'Submitted', daysRemaining: '10–14 days' },
        ],
      });
      setError(null);
    } else {
      setError('No matching record found. Try sample NPI 1942083921 or enter any 10-digit NPI.');
      setResult(null);
    }
  };

  return (
    <section className="tracker-section" id="tracker">
      <div className="container">
        <div className="tracker-head">
          <Badge icon={<Icon name="shield" />}>Interactive demo</Badge>
          <h2>Always know where every application stands</h2>
          <p className="tracker-sub">
            Verification, committee approval, payer enrollment and billing go-live, tracked step by step for every
            provider. Try the demo with one of the sample providers below.
          </p>
        </div>

        <div className="tracker-card">
          {/* Search Bar */}
          <div className="tracker-search-row">
            <div className="tracker-input-wrap">
              <Icon name="search" className="tracker-search-icon" />
              <input
                type="text"
                className="tracker-input"
                placeholder="Enter 10-digit NPI Number (e.g. 1942083921)"
                value={query}
                onChange={(e) => setQuery(e.target.value)}
                onKeyDown={(e) => e.key === 'Enter' && handleSearch(query)}
              />
            </div>
            <button
              type="button"
              className="btn btn-primary"
              onClick={() => handleSearch(query)}
            >
              Check Status
            </button>
          </div>

          {/* Quick Preset Sample Tags */}
          <div className="tracker-sample-pills">
            <span>Try sample providers:</span>
            <button
              type="button"
              className="sample-npi-btn"
              onClick={() => {
                setQuery('1942083921');
                handleSearch('1942083921');
              }}
            >
              Dr. Rebecca Stone (1942083921)
            </button>
            <button
              type="button"
              className="sample-npi-btn"
              onClick={() => {
                setQuery('1829031120');
                handleSearch('1829031120');
              }}
            >
              Dr. Marcus Vance (1829031120)
            </button>
          </div>

          {error && <div className="tracker-error-box">{error}</div>}

          {/* Result Card */}
          {result && (
            <div className="tracker-result-panel">
              {/* Header Meta */}
              <div className="result-header">
                <div>
                  <div className="result-name-row">
                    <h3 dangerouslySetInnerHTML={{ __html: result.providerName }} />
                    <span className="result-status-pill">{result.overallStatus}</span>
                  </div>
                  <div
                    className="result-spec"
                    dangerouslySetInnerHTML={{ __html: result.specialty }}
                  />
                </div>
                <div className="result-meter-col">
                  <span className="meter-label">Overall Velocity</span>
                  <strong className="meter-val">{result.progressPercent}%</strong>
                </div>
              </div>

              {/* Progress Bar */}
              <div className="result-bar-track">
                <div
                  className="result-bar-fill"
                  style={{ width: `${result.progressPercent}%` }}
                />
              </div>

              {/* Stages Grid */}
              <div className="result-stages-grid">
                {result.stages.map((stg, i) => (
                  <div key={i} className={`stage-step-card ${stg.status}`}>
                    <div className="stage-step-marker">
                      {stg.status === 'completed' && <Icon name="check" />}
                      {stg.status === 'in-progress' && <span className="stage-pulse-dot" />}
                      {stg.status === 'pending' && <span className="stage-empty-dot" />}
                    </div>
                    <div className="stage-step-info">
                      <div className="stage-name-row">
                        <strong>{stg.name}</strong>
                        <span className="stage-date">{stg.date}</span>
                      </div>
                      <span className="stage-note">{stg.note}</span>
                    </div>
                  </div>
                ))}
              </div>

              {/* Payer Health Plan Sub-Status */}
              <div className="result-payers-box">
                <h4 className="payers-title">Health Plan Enrollment Status</h4>
                <div className="payers-chip-grid">
                  {result.payers.map((payer, pIdx) => (
                    <div key={pIdx} className="payer-status-card">
                      <div className="psc-top">
                        <strong className="psc-name">{payer.name}</strong>
                        <span className={`psc-badge ${payer.status.toLowerCase().replace(' ', '-')}`}>
                          {payer.status}
                        </span>
                      </div>
                      <span className="psc-days">{payer.daysRemaining}</span>
                    </div>
                  ))}
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default ApplicationTrackerSection;
