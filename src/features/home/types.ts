import type { IconName } from '@/shared/components/ui/Icon';

export interface ExpertiseItem {
  big: string;
  label: string;
  num: string;
  title: string;
  body: string;
  iconName: string;
}

export interface WorkflowItem {
  id: string;
  title: string;
  description: string;
  icon: IconName;
  tag: string;
  highlights: string[];
  mockData: {
    statusBadge: string;
    subtext: string;
    stats: { label: string; value: string; trend?: string }[];
    steps: { name: string; status: 'completed' | 'in-progress' | 'pending'; time: string }[];
  };
}

export type TabId = 'cred' | 'enroll' | 'mon' | 'profile';

export interface TabDef {
  id: TabId;
  label: string;
}

export interface TimelineStep {
  id: number;
  type: 'SIGNAL' | 'DECISION' | 'TASK' | 'INTERACTION';
  week: string;
  time: string;
  title: string;
  source: string;
  description: string;
  xPos: number; // percentage along timeline
  rowY: number; // 0: Signal, 1: Decision, 2: Task, 3: Interaction
}

export interface TrackingResult {
  npi: string;
  providerName: string;
  specialty: string;
  overallStatus: 'In Progress' | 'PSV Complete' | 'In Committee' | 'Active In-Network';
  progressPercent: number;
  stages: { name: string; status: 'completed' | 'in-progress' | 'pending'; date: string; note: string }[];
  payers: { name: string; status: 'Approved' | 'In Review' | 'Submitted'; daysRemaining: string }[];
}

export interface BenefitItem {
  num: string;
  title: string;
  description: string;
  badge: string;
  icon: IconName;
  detailPoints: string[];
}
