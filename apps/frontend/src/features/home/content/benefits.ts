import type { BenefitItem } from '../types';

export const BENEFITS: BenefitItem[] = [
  {
    num: '01',
    title: 'Collect provider data once',
    description: 'Providers hate filling out the same information over and over. We gather it once, keep it current, and reuse it for every payer, facility and renewal.',
    badge: 'Less paperwork',
    icon: 'sparkle',
    detailPoints: [
      'Provider history pulled from CAQH ProView and existing documents',
      'Secure document collection with automatic reminders',
      'No repeat requests for information you have already sent',
    ],
  },
  {
    num: '02',
    title: 'Know the status of every file',
    description: 'Credentialing, enrollment, licensing and monitoring status in one place, so nothing falls through the cracks and nobody has to ask "where are we on this?"',
    badge: 'Full visibility',
    icon: 'bar',
    detailPoints: [
      'Live status for every payer application',
      'Bottlenecks flagged and escalated early',
      'Views for leadership, operations and providers',
    ],
  },
  {
    num: '03',
    title: 'Let providers focus on patients',
    description: 'Follow-ups with payers, verifications and renewal paperwork happen in the background. Your providers only hear from us when we truly need them.',
    badge: 'Happier providers',
    icon: 'users',
    detailPoints: [
      'Payer follow-ups handled by our team',
      'Alerts well before licenses and certifications expire',
      'A dedicated specialist for questions and edge cases',
    ],
  },
  {
    num: '04',
    title: 'Clear commitments, measured',
    description: 'Turnaround expectations are agreed up front and reported on, so you always know how your credentialing operation is performing.',
    badge: 'Accountability',
    icon: 'check-circle',
    detailPoints: [
      'Turnaround and status reporting you can share with leadership',
      'Audit-ready records for every verification',
      'Visibility into when each provider can start billing',
    ],
  },
];
