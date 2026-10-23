import { SolutionPage, providerGroups } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...providerGroups.meta, path: providerGroups.path });

export default function Page() {
  return <SolutionPage content={providerGroups} />;
}
