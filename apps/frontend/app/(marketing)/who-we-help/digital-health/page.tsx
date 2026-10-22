import SolutionPage from '@/features/solutions/components/SolutionPage';
import { digitalHealth } from '@/features/solutions/content/audiences';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...digitalHealth.meta, path: digitalHealth.path });

export default function Page() {
  return <SolutionPage content={digitalHealth} />;
}
