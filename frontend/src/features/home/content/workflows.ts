import type { WorkflowItem } from '../types';

// Mock panels show sample data only: no performance numbers until they are measured and approved.
export const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'credentialing',
    title: 'Initial credentialing',
    description: 'Complete, committee-ready credentialing files built on primary source verification: licenses, board certification, education, sanctions and malpractice history.',
    icon: 'shield',
    tag: 'Primary source verification',
    highlights: [
      'Verification against NPDB, OIG, SAM.gov and state licensing boards',
      { text: 'AI-assembled verification packets', soon: true },
      'Committee-ready files with a complete audit trail',
    ],
    mockData: {
      statusBadge: 'NCQA standards • Verification in progress',
      subtext: 'Dr. Marcus Vance, DO — Cardiology',
      stats: [
        { label: 'Sources verified', value: '12/14' },
        { label: 'Open items', value: '2' },
        { label: 'Committee file', value: 'Drafting' },
      ],
      steps: [
        { name: 'State board license verification', status: 'completed', time: 'Verified' },
        { name: 'DEA & malpractice history', status: 'completed', time: 'Verified' },
        { name: 'NPDB & sanctions check', status: 'in-progress', time: 'Today' },
        { name: 'Committee review file ready', status: 'pending', time: 'Next' },
      ],
    },
  },
  {
    id: 'recredentialing',
    title: 'Recredentialing',
    description: 'Every provider re-verified on schedule, with the work started well before the 36-month cycle comes due, so no one falls out of compliance.',
    icon: 'clock',
    tag: 'On-time renewals',
    highlights: [
      'Due dates tracked for every provider and every organization',
      { text: 'Automated reminders for documents and attestations', soon: true },
      'CAQH ProView kept current and re-attested every 120 days',
    ],
    mockData: {
      statusBadge: 'Recredentialing calendar • Next 90 days',
      subtext: 'Sample group • 48 providers',
      stats: [
        { label: 'Due in 90 days', value: '6' },
        { label: 'Started', value: '4' },
        { label: 'CAQH attested', value: 'Current' },
      ],
      steps: [
        { name: 'Recredentialing window opened', status: 'completed', time: 'Day 1' },
        { name: 'Updated attestation collected', status: 'completed', time: 'Day 4' },
        { name: 'Credentials re-verified', status: 'in-progress', time: 'Today' },
        { name: 'File returned for committee', status: 'pending', time: 'Next' },
      ],
    },
  },
  {
    id: 'monitoring',
    title: 'Continuous monitoring',
    description: 'Ongoing checks against federal exclusion lists and state licensing boards, with alerts before a lapse or sanction becomes a problem.',
    icon: 'bell',
    tag: 'Ongoing compliance',
    highlights: [
      { text: 'Automated OIG-LEIE, SAM.gov and state board re-checks', soon: true },
      'Exclusion and license actions flagged to a specialist right away',
      'Timestamped audit log of every check',
    ],
    mockData: {
      statusBadge: 'Sanctions monitoring active',
      subtext: 'Sample monthly check • All providers',
      stats: [
        { label: 'Exclusion alerts', value: '0 active' },
        { label: 'Expiring in 60 days', value: '3' },
        { label: 'Audit log', value: 'Complete' },
      ],
      steps: [
        { name: 'OIG-LEIE exclusion check', status: 'completed', time: 'Done' },
        { name: 'SAM.gov debarment check', status: 'completed', time: 'Done' },
        { name: 'State medical board check', status: 'completed', time: 'Done' },
        { name: 'Expiration alerts sent', status: 'in-progress', time: 'Today' },
      ],
    },
  },
];
