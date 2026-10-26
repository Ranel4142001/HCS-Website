import { SolutionPage, digitalHealth } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...digitalHealth.meta, path: digitalHealth.path });

export default function Page() {
  return <SolutionPage content={digitalHealth} />;
}
