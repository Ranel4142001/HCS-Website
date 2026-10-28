import type { TabDef } from '../types';

/*
 * Homepage dashboard preview. It mirrors the real HCStat Credentialing portal: the same section names,
 * statuses, roles and audit events. The people and numbers are sample data. Only show a feature as working
 * once it is live in the portal; anything planned goes in ROADMAP.
 */

export const TABS: TabDef[] = [
  { id: 'provider', label: 'Provider checklist' },
  { id: 'team', label: 'Team console' },
  { id: 'audit', label: 'Audit trail' },
];

export type Tone = 'done' | 'active' | 'attention' | 'neutral';

export interface ChecklistSection {
  name: string;
  minutes: number;
  /** Percent done; omitted when the section is complete. */
  percent?: number;
}

/** The provider portal's 12 sections, grouped for display. */
export const CHECKLIST_GROUPS: { title: string; sections: ChecklistSection[] }[] = [
  {
    title: 'About you',
    sections: [
      { name: 'Profile', minutes: 5, percent: 54 },
      { name: 'Personal IDs (PII)', minutes: 2 },
      { name: 'Military Service', minutes: 2, percent: 33 },
      { name: 'NPI', minutes: 1 },
    ],
  },
  {
    title: 'Training & credentials',
    sections: [
      { name: 'Education', minutes: 6 },
      { name: 'Certifications & Licenses', minutes: 8 },
      { name: 'Immunizations', minutes: 4 },
      { name: 'Malpractice Insurance', minutes: 3 },
    ],
  },
  {
    title: 'Work & assignment',
    sections: [
      { name: 'Work History', minutes: 5 },
      { name: 'References', minutes: 4 },
      { name: 'Upcoming Assignment', minutes: 2, percent: 33 },
      { name: 'Payroll Information', minutes: 3 },
    ],
  },
];

export const UPCOMING_ASSIGNMENT = [
  { label: 'Facility', value: 'Sample Regional Hospital' },
  { label: 'Location', value: 'Greenville, SC' },
  { label: 'Kind of assignment', value: 'Locum tenens' },
  { label: 'Start date', value: 'Dec 1, 2026' },
];

export const OVERVIEW = [
  { label: 'Total providers', value: '24' },
  { label: 'Awaiting acceptance', value: '3' },
  { label: 'Ready for delivery', value: '5' },
  { label: 'Needs review', value: '2' },
  { label: 'In progress', value: '11' },
  { label: 'Action needed', value: '3' },
  { label: 'Average completion', value: '68%' },
];

export const ADD_PROVIDERS = [
  { label: 'Add provider', value: 'One at a time' },
  { label: 'Import CSV', value: 'A whole roster' },
  { label: 'Invite', value: 'Email sign-up link' },
];

export const PROVIDERS: { name: string; status: string; tone: Tone; percent: number }[] = [
  { name: 'Priya Raman', status: 'In progress', tone: 'active', percent: 62 },
  { name: 'Marcus Bell', status: 'Needs review', tone: 'attention', percent: 100 },
  { name: 'Alex Okafor', status: 'Action needed', tone: 'attention', percent: 45 },
  { name: 'Jordan Alvarez', status: 'Ready to invite', tone: 'neutral', percent: 0 },
];

export const ROLES = [
  { label: 'Provider', value: 'Their own file' },
  { label: 'Recruiter', value: 'Their agency’s providers' },
  { label: 'Credentialing Coordinator', value: 'Team' },
  { label: 'Support', value: 'Team' },
  { label: 'Administrator', value: 'Users and roles' },
];

/** Planned, not live yet. Shown with a "Soon" label, as the portal itself does. */
export const ROADMAP = [
  'Assignments',
  'Businesses and partners',
  'CAQH ProView sync',
  'Automated sanctions checks',
  'Text-message updates',
];

export const AUDIT_ROWS = [
  { when: 'Oct 2, 8:24 AM', who: 'Casey Coordinator', role: 'Coordinator', event: 'Provider verified', record: 'Provider' },
  { when: 'Oct 1, 9:46 PM', who: 'Dana Reyes', role: 'Provider', event: 'Record updated', record: 'Provider' },
  { when: 'Oct 1, 9:42 PM', who: 'Avery Admin', role: 'Administrator', event: 'Audit log viewed', record: 'Audit event' },
  { when: 'Oct 1, 4:10 PM', who: 'Jordan Avery', role: 'Recruiter', event: 'Document downloaded', record: 'Document' },
];

/** Every event type the portal records, grouped for display. */
export const AUDIT_EVENT_GROUPS = [
  { title: 'Data access', sub: 'Who looked at what', events: ['Sensitive data viewed', 'Document downloaded', 'Audit log viewed', 'Access denied'] },
  { title: 'Accounts & roles', sub: 'Who has access', events: ['User invited', 'Invitation accepted', 'Role changed', 'Account disabled'] },
  { title: 'Provider files', sub: 'What changed', events: ['Record updated', 'Provider verified'] },
];
