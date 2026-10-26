import type { TrackingResult } from '../types';

export const SAMPLE_TRACKING: Record<string, TrackingResult> = {
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
