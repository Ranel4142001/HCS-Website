import type { WorkflowItem } from '../types';

// Only what the service does today. Planned features are listed, marked "Soon", on the pricing page.
export const WORKFLOWS: WorkflowItem[] = [
  {
    id: 'credentialing',
    title: 'Initial credentialing',
    description: 'Committee-ready files, verified at the primary source.',
    icon: 'shield',
    highlights: [
      'Verification against NPDB, OIG, SAM.gov and state licensing boards',
      'Committee-ready files with a complete audit trail',
    ],
  },
  {
    id: 'recredentialing',
    title: 'Recredentialing',
    description: 'Every provider re-verified on time, well before the 36-month deadline.',
    icon: 'clock',
    highlights: [
      'Due dates tracked for every provider and every organization',
      'CAQH ProView re-attestation tracked every 120 days',
    ],
  },
  {
    id: 'monitoring',
    title: 'Continuous monitoring',
    description: 'Ongoing license and exclusion checks, with alerts before anything lapses.',
    icon: 'bell',
    highlights: [
      'Exclusion and license actions flagged to a specialist right away',
      'Timestamped audit log of every check',
    ],
  },
];
