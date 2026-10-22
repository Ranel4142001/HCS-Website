import SolutionPage from '@/features/solutions/components/SolutionPage';
import { healthSystems } from '@/features/solutions/content/audiences';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...healthSystems.meta, path: healthSystems.path });

export default function Page() {
  return <SolutionPage content={healthSystems} />;
}
