import type { WorkflowItem } from '../types';

// Only what the service does today. Planned features are listed, marked "Soon", on the pricing page.
export const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'credentialing',
    title: 'Initial credentialing',
    description: 'Complete, committee-ready credentialing files built on primary source verification: licenses, board certification, education, sanctions and malpractice history.',
    icon: 'shield',
    highlights: [
      'Verification against NPDB, OIG, SAM.gov and state licensing boards',
      'Committee-ready files with a complete audit trail',
    ],
  },
  {
    id: 'recredentialing',
    title: 'Recredentialing',
    description: 'Every provider re-verified on schedule, with the work started well before the 36-month cycle comes due, so no one falls out of compliance.',
    icon: 'clock',
    highlights: [
      'Due dates tracked for every provider and every organization',
      'CAQH ProView re-attestation tracked every 120 days',
    ],
  },
  {
    id: 'monitoring',
    title: 'Continuous monitoring',
    description: 'Ongoing checks against federal exclusion lists and state licensing boards, with alerts before a lapse or sanction becomes a problem.',
    icon: 'bell',
    highlights: [
      'Exclusion and license actions flagged to a specialist right away',
      'Timestamped audit log of every check',
    ],
  },
];
