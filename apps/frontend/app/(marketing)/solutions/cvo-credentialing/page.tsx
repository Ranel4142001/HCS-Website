import SolutionPage from '@/features/solutions/components/SolutionPage';
import { cvoCredentialing } from '@/features/solutions/content/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...cvoCredentialing.meta, path: cvoCredentialing.path });

export default function Page() {
  return <SolutionPage content={cvoCredentialing} />;
}
