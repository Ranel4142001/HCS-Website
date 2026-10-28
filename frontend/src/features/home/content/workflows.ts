import type { WorkflowItem } from '../types';

// Mock panels show sample data only: no performance numbers until they are measured and approved.
export const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'credentialing',
    title: 'Initial Credentialing',
    description: 'Complete, committee-ready credentialing files built on primary source verification: licenses, board certification, education, sanctions and malpractice history.',
    icon: 'shield',
    tag: 'Primary Source Verification',
    highlights: [
      'Verification against NPDB, OIG, SAM.gov and state licensing boards',
      'AI automation assembles each verification packet as sources respond',
      'Committee-ready files with a complete audit trail',
    ],
    mockData: {
      statusBadge: 'NCQA Standards • Verification in Progress',
      subtext: 'Dr. Marcus Vance, DO — Cardiology',
      stats: [
        { label: 'Sources Verified', value: '12/14' },
        { label: 'Open Items', value: '2' },
        { label: 'Committee File', value: 'Drafting' },
      ],
      steps: [
        { name: 'State Board License Verification', status: 'completed', time: 'Verified' },
        { name: 'DEA & Malpractice History', status: 'completed', time: 'Verified' },
        { name: 'NPDB & Sanctions Check', status: 'in-progress', time: 'Today' },
        { name: 'Committee Review File Ready', status: 'pending', time: 'Next' },
      ],
    },
  },
  {
    id: 'recredentialing',
    title: 'Recredentialing',
    description: 'Every provider re-verified on schedule, with the work started well before the 36-month cycle comes due, so no one falls out of compliance.',
    icon: 'clock',
    tag: 'On-Time Renewals',
    highlights: [
      'Due dates tracked for every provider and every organization',
      'AI-automated reminders for updated documents and attestations',
      'CAQH ProView kept current and re-attested every 120 days',
    ],
    mockData: {
      statusBadge: 'Recredentialing Calendar • Next 90 Days',
      subtext: 'Sample group • 48 providers',
      stats: [
        { label: 'Due in 90 Days', value: '6' },
        { label: 'Started', value: '4' },
        { label: 'CAQH Attested', value: 'Current' },
      ],
      steps: [
        { name: 'Recredentialing Window Opened', status: 'completed', time: 'Day 1' },
        { name: 'Updated Attestation Collected', status: 'completed', time: 'Day 4' },
        { name: 'Credentials Re-verified', status: 'in-progress', time: 'Today' },
        { name: 'File Returned for Committee', status: 'pending', time: 'Next' },
      ],
    },
  },
  {
    id: 'monitoring',
    title: 'Continuous Monitoring',
    description: 'Ongoing checks against federal exclusion lists and state licensing boards, with alerts before a lapse or sanction becomes a problem.',
    icon: 'bell',
    tag: 'Ongoing Compliance',
    highlights: [
      'AI-automated OIG-LEIE, SAM.gov and state board re-checks',
      'Exclusion and license actions flagged to a specialist right away',
      'Timestamped audit log of every check',
    ],
    mockData: {
      statusBadge: 'Sanctions Monitoring Active',
      subtext: 'Sample monthly check • All providers',
      stats: [
        { label: 'Exclusion Alerts', value: '0 Active' },
        { label: 'Expiring in 60 Days', value: '3' },
        { label: 'Audit Log', value: 'Complete' },
      ],
      steps: [
        { name: 'OIG-LEIE Exclusion Check', status: 'completed', time: 'Done' },
        { name: 'SAM.gov Debarment Check', status: 'completed', time: 'Done' },
        { name: 'State Medical Board Check', status: 'completed', time: 'Done' },
        { name: 'Expiration Alerts Sent', status: 'in-progress', time: 'Today' },
      ],
    },
  },
];
