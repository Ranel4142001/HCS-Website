import SolutionPage from '@/features/solutions/components/SolutionPage';
import { providerGroups } from '@/features/solutions/content/audiences';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...providerGroups.meta, path: providerGroups.path });

export default function Page() {
  return <SolutionPage content={providerGroups} />;
}
