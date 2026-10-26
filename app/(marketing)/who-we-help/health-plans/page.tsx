import { SolutionPage, healthPlans } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...healthPlans.meta, path: healthPlans.path });

export default function Page() {
  return <SolutionPage content={healthPlans} />;
}
