import SolutionPage from '@/features/solutions/components/SolutionPage';
import { providerEnrollment } from '@/features/solutions/content/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...providerEnrollment.meta, path: providerEnrollment.path });

export default function Page() {
  return <SolutionPage content={providerEnrollment} />;
}
