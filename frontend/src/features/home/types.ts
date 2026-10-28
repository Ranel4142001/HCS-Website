import type { Feature } from '@/shared/components/ui/FeatureText';
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
  highlights: Feature[];
  mockData: {
    statusBadge: string;
    subtext: string;
    stats: { label: string; value: string; trend?: string }[];
    steps: { name: string; status: 'completed' | 'in-progress' | 'pending'; time: string }[];
  };
}

export type TabId = 'provider' | 'team' | 'audit';

export interface TabDef {
  id: TabId;
  label: string;
}

export interface BenefitItem {
  num: string;
  title: string;
  description: string;
  badge: string;
  icon: IconName;
  detailPoints: Feature[];
}
