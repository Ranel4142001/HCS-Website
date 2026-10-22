import SolutionPage from '@/features/solutions/components/SolutionPage';
import { healthPlans } from '@/features/solutions/content/audiences';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...healthPlans.meta, path: healthPlans.path });

export default function Page() {
  return <SolutionPage content={healthPlans} />;
}
