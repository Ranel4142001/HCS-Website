'use client';

import React, { useState } from 'react';
import Icon from '@/shared/components/ui/Icon';
import type { TabId } from '../types';
import { TABS } from '../content/dashboard';
import './DashboardPreviewSection.css';

export const DashboardPreviewSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<TabId>('cred');

  return (
    <section className="rtv-section" id="rtv">
      <div className="rtv-blobs" aria-hidden="true">
        <div className="rtv-blob rtv-blob-teal" />
        <div className="rtv-blob rtv-blob-cyan" />
        <div className="rtv-blob rtv-blob-indigo" />
      </div>

      <div className="container rtv-inner">
        <div className="rtv-header">
          <div className="rtv-tag">
            <Icon name="bar" />
            <span>Your credentialing dashboard</span>
          </div>
          <h2>See where every provider stands, at a glance</h2>
          <p className="rtv-subtitle">
            Credentialing progress, payer enrollment status, upcoming expirations and monitoring alerts in one place, so
            you&apos;re never chasing updates by email. <em>Sample data shown.</em>
          </p>
        </div>

        {/* Tab Navigation */}
        <div className="rtv-tabs-wrapper" role="tablist" aria-label="Provider network dashboards">
          {TABS.map((tab) => {
            const isActive = tab.id === activeTab;
            return (
              <button
                key={tab.id}
                type="button"
                className={`rtv-tab-btn ${isActive ? 'is-active' : ''}`}
                role="tab"
                aria-selected={isActive}
                onClick={() => setActiveTab(tab.id)}
              >
                {tab.label}
              </button>
            );
          })}
        </div>

        {/* Dashboard Panels */}
        <div className="rtv-viewport">
          {activeTab === 'cred' && (
            <div key="cred" className="rtv-panel">
              <div className="rtv-grid">
                {/* Card 1: Requests by Status */}
                <div className="rtv-card rtv-card-wide">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Credentialing Requests by Status</h3>
                      <span className="rtv-sub">Live pipeline distribution</span>
                    </div>
                    <span className="rtv-pill-green">358 Active</span>
                  </div>
                  <div className="rtv-status-breakdown">
                    <div className="rtv-bar-track">
                      <div className="rtv-bar-seg seg-prog" style={{ width: '35%' }} title="In Progress: 124" />
                      <div className="rtv-bar-seg seg-ready" style={{ width: '22%' }} title="PSV Ready: 63" />
                      <div className="rtv-bar-seg seg-comm" style={{ width: '43%' }} title="In Committee: 171" />
                    </div>
                    <div className="rtv-legend-row">
                      <div className="rtv-legend-item">
                        <span className="leg-dot seg-prog" />
                        <span>In Progress: <strong>124</strong></span>
                      </div>
                      <div className="rtv-legend-item">
                        <span className="leg-dot seg-ready" />
                        <span>PSV Ready: <strong>63</strong></span>
                      </div>
                      <div className="rtv-legend-item">
                        <span className="leg-dot seg-comm" />
                        <span>In Committee: <strong>171</strong></span>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Turnaround Trend */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Turnaround Time</h3>
                      <span className="rtv-sub">Days from intake to committee ready</span>
                    </div>
                    <span className="rtv-pill-cyan">-66% Speedup</span>
                  </div>
                  <div className="rtv-metric-big-row">
                    <span className="rtv-stat-giant">1.2<small>days</small></span>
                    <div className="rtv-spark-graph">
                      <div className="spark-bar" style={{ height: '85%' }}><span className="bar-tag">30d</span></div>
                      <div className="spark-bar" style={{ height: '60%' }}><span className="bar-tag">18d</span></div>
                      <div className="spark-bar" style={{ height: '40%' }}><span className="bar-tag">9d</span></div>
                      <div className="spark-bar active" style={{ height: '15%' }}><span className="bar-tag">1.2d</span></div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Files Generated */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Files Generated</h3>
                      <span className="rtv-sub">Audit-ready packets</span>
                    </div>
                    <span className="rtv-pill-green">+23% vs Q2</span>
                  </div>
                  <div className="rtv-counter-box">
                    <span className="rtv-stat-giant">1,756</span>
                    <span className="rtv-note"><Icon name="check" /> 100% primary source verified</span>
                  </div>
                </div>

                {/* Card 4: Approval Composition */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Approval Time Allocation</h3>
                      <span className="rtv-sub">Administrative vs Review</span>
                    </div>
                  </div>
                  <div className="rtv-split-row">
                    <div className="rtv-split-item">
                      <strong className="split-num text-teal">20%</strong>
                      <span className="split-label">AI Admin Intake</span>
                    </div>
                    <div className="rtv-split-divider" />
                    <div className="rtv-split-item">
                      <strong className="split-num text-cyan">80%</strong>
                      <span className="split-label">Committee Decision</span>
                    </div>
                  </div>
                </div>

                {/* Card 5: Upcoming Recredentials */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Upcoming Recredentials</h3>
                      <span className="rtv-sub">Next 90 days expiration horizon</span>
                    </div>
                    <span className="rtv-pill-warn">124 Monitored</span>
                  </div>
                  <div className="rtv-recred-list">
                    <div className="recred-item">
                      <span>0–30 Days (Automated Packets Dispatched)</span>
                      <strong>38 Clinicians</strong>
                    </div>
                    <div className="recred-item">
                      <span>31–60 Days (Pre-verification Queries)</span>
                      <strong>49 Clinicians</strong>
                    </div>
                    <div className="recred-item">
                      <span>61–90 Days (Scheduled Workflows)</span>
                      <strong>37 Clinicians</strong>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'enroll' && (
            <div key="enroll" className="rtv-panel">
              <div className="rtv-grid">
                {/* Card 1: Completed Enrollments by Payer */}
                <div className="rtv-card rtv-card-wide">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Completed Enrollments by Health Plan</h3>
                      <span className="rtv-sub">Active billing in-network provider contracts</span>
                    </div>
                    <span className="rtv-pill-green">283 Total Completed</span>
                  </div>
                  <div className="rtv-payer-grid">
                    <div className="payer-chip">
                      <div className="payer-header">
                        <span className="payer-logo-tag">MEDICARE</span>
                        <strong>94 Providers</strong>
                      </div>
                      <div className="payer-meter"><div className="payer-fill" style={{ width: '88%' }} /></div>
                    </div>
                    <div className="payer-chip">
                      <div className="payer-header">
                        <span className="payer-logo-tag">BCBS / ANTHEM</span>
                        <strong>78 Providers</strong>
                      </div>
                      <div className="payer-meter"><div className="payer-fill" style={{ width: '74%' }} /></div>
                    </div>
                    <div className="payer-chip">
                      <div className="payer-header">
                        <span className="payer-logo-tag">OPTUM / UHC</span>
                        <strong>62 Providers</strong>
                      </div>
                      <div className="payer-meter"><div className="payer-fill" style={{ width: '60%' }} /></div>
                    </div>
                    <div className="payer-chip">
                      <div className="payer-header">
                        <span className="payer-logo-tag">HUMANA &amp; CIGNA</span>
                        <strong>49 Providers</strong>
                      </div>
                      <div className="payer-meter"><div className="payer-fill" style={{ width: '48%' }} /></div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Enrollment Intake Pipeline */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Enrollment Pipeline Stages</h3>
                      <span className="rtv-sub">In-flight applications</span>
                    </div>
                  </div>
                  <div className="rtv-stage-rows">
                    <div className="stage-row">
                      <span>Requested</span>
                      <div className="stage-val-wrap">
                        <div className="stage-bar" style={{ width: '35%' }} />
                        <strong>43</strong>
                      </div>
                    </div>
                    <div className="stage-row">
                      <span>Intake Complete</span>
                      <div className="stage-val-wrap">
                        <div className="stage-bar" style={{ width: '60%' }} />
                        <strong>76</strong>
                      </div>
                    </div>
                    <div className="stage-row">
                      <span>Submitted to Payer</span>
                      <div className="stage-val-wrap">
                        <div className="stage-bar" style={{ width: '90%' }} />
                        <strong>171</strong>
                      </div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Pending Provider Feedback */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Pending Feedback Resolution</h3>
                      <span className="rtv-sub">Smart nudges &amp; specialist assists</span>
                    </div>
                    <span className="rtv-pill-cyan">Avg 4.2h response</span>
                  </div>
                  <div className="rtv-metric-big-row">
                    <span className="rtv-stat-giant">98.2%</span>
                    <p className="rtv-text-soft">Of clinician clarifications resolved in &lt;24 hours via automated SMS and secure links.</p>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'mon' && (
            <div key="mon" className="rtv-panel">
              <div className="rtv-grid">
                {/* Card 1: NPDB Continuous Query */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>NPDB Verification Status</h3>
                      <span className="rtv-sub">National Practitioner Data Bank</span>
                    </div>
                    <span className="rtv-pill-green">Continuous Query Active</span>
                  </div>
                  <div className="rtv-donut-row">
                    <div className="rtv-stat-giant text-teal">134</div>
                    <div className="rtv-stat-desc">
                      <div><strong className="text-teal">134 Clear</strong> &bull; No adverse reports</div>
                      <div className="text-muted">12 Action items under specialist review</div>
                    </div>
                  </div>
                </div>

                {/* Card 2: Medicare Opt-Out & Exclusion */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Medicare Opt-Out &amp; OIG</h3>
                      <span className="rtv-sub">Federal exclusions checking</span>
                    </div>
                    <span className="rtv-pill-green">145 Clear</span>
                  </div>
                  <div className="rtv-donut-row">
                    <div className="rtv-stat-giant text-teal">145</div>
                    <div className="rtv-stat-desc">
                      <div><strong className="text-teal">145 Active &amp; Clear</strong></div>
                      <div className="text-muted">0 Active federal sanctions detected</div>
                    </div>
                  </div>
                </div>

                {/* Card 3: Live Sanction Audit Logs */}
                <div className="rtv-card rtv-card-wide">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Live Sanctions &amp; Disciplinary Audit Log</h3>
                      <span className="rtv-sub">Automated 24/7 registries monitoring</span>
                    </div>
                    <span className="rtv-pill-green">100% Audit Ready</span>
                  </div>
                  <div className="rtv-audit-table">
                    <div className="audit-row header">
                      <span>Registry</span>
                      <span>Scope</span>
                      <span>Status</span>
                      <span>Timestamp</span>
                    </div>
                    <div className="audit-row">
                      <span className="font-semibold">OIG-LEIE Database</span>
                      <span>Network-wide (1,240 Clinicians)</span>
                      <span className="audit-badge-pass"><Icon name="check" /> PASS - 0 Flags</span>
                      <span className="text-muted">Today at 04:00 AM</span>
                    </div>
                    <div className="audit-row">
                      <span className="font-semibold">SAM.gov Federal Exclusions</span>
                      <span>Network-wide (1,240 Clinicians)</span>
                      <span className="audit-badge-pass"><Icon name="check" /> PASS - 0 Flags</span>
                      <span className="text-muted">Today at 04:15 AM</span>
                    </div>
                    <div className="audit-row">
                      <span className="font-semibold">50 State Medical Boards</span>
                      <span>Licenses &amp; Disciplinary Actions</span>
                      <span className="audit-badge-pass"><Icon name="check" /> 100% Up to date</span>
                      <span className="text-muted">Today at 04:45 AM</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}

          {activeTab === 'profile' && (
            <div key="profile" className="rtv-panel">
              <div className="rtv-grid">
                {/* Card 1: 96% Profile Completion */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Profile Readiness</h3>
                      <span className="rtv-sub">Clinician onboarding completion</span>
                    </div>
                    <span className="rtv-pill-green">96% Ready</span>
                  </div>
                  <div className="profile-completion-meter">
                    <div className="meter-circle">
                      <span className="meter-val">96%</span>
                      <span className="meter-lbl">Complete</span>
                    </div>
                    <div className="meter-items">
                      <div className="meter-item checked"><Icon name="check" /> Basic &amp; Contact Info</div>
                      <div className="meter-item checked"><Icon name="check" /> State Medical Licenses (TX, CA)</div>
                      <div className="meter-item checked"><Icon name="check" /> DEA &amp; Board Certifications</div>
                      <div className="meter-item checked"><Icon name="check" /> Malpractice Insurance COI</div>
                    </div>
                  </div>
                </div>

                {/* Card 2: CAQH & Fast-Import */}
                <div className="rtv-card">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Automated Data Imports</h3>
                      <span className="rtv-sub">Zero duplicate data entry</span>
                    </div>
                    <span className="rtv-pill-cyan">CAQH Connected</span>
                  </div>
                  <div className="import-source-box">
                    <div className="source-item">
                      <div className="source-info">
                        <Icon name="refresh" />
                        <div>
                          <strong>CAQH ProView Auto-Sync</strong>
                          <span>Last synced 2 days ago &bull; 100% Attestation valid</span>
                        </div>
                      </div>
                      <span className="badge-synced">Synced</span>
                    </div>
                    <div className="source-item">
                      <div className="source-info">
                        <Icon name="file" />
                        <div>
                          <strong>AI Resume &amp; CV Extraction</strong>
                          <span>14 years work history extracted &amp; gap-checked</span>
                        </div>
                      </div>
                      <span className="badge-synced">Extracted</span>
                    </div>
                  </div>
                </div>

                {/* Card 3: Uploaded Documents Vault */}
                <div className="rtv-card rtv-card-wide">
                  <div className="rtv-card-top">
                    <div>
                      <h3>Secure Credential Document Vault</h3>
                      <span className="rtv-sub">Every provider document in one secure place</span>
                    </div>
                    <span className="rtv-pill-green">Encrypted</span>
                  </div>
                  <div className="doc-vault-grid">
                    <div className="vault-file">
                      <Icon name="file" />
                      <div className="file-meta">
                        <strong>TX_Medical_License_2026.pdf</strong>
                        <span>Verified with Texas Medical Board</span>
                      </div>
                      <span className="badge-verified"><Icon name="check" /> Verified</span>
                    </div>
                    <div className="vault-file">
                      <Icon name="file" />
                      <div className="file-meta">
                        <strong>DEA_Registration_Cert.pdf</strong>
                        <span>Verified with DEA Registry</span>
                      </div>
                      <span className="badge-verified"><Icon name="check" /> Verified</span>
                    </div>
                    <div className="vault-file">
                      <Icon name="file" />
                      <div className="file-meta">
                        <strong>Board_Certification_InternalMed.pdf</strong>
                        <span>ABIM Primary Source Confirmed</span>
                      </div>
                      <span className="badge-verified"><Icon name="check" /> Verified</span>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          )}
        </div>
      </div>
    </section>
  );
};

export default DashboardPreviewSection;
