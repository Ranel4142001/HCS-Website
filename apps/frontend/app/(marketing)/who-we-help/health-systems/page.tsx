import { SolutionPage, healthSystems } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...healthSystems.meta, path: healthSystems.path });

export default function Page() {
  return <SolutionPage content={healthSystems} />;
}
