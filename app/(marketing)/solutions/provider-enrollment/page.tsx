import { SolutionPage, providerEnrollment } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...providerEnrollment.meta, path: providerEnrollment.path });

export default function Page() {
  return <SolutionPage content={providerEnrollment} />;
}
