import { SolutionPage, cvoCredentialing } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...cvoCredentialing.meta, path: cvoCredentialing.path });

export default function Page() {
  return <SolutionPage content={cvoCredentialing} />;
}
