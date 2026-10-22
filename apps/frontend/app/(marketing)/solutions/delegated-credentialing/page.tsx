import SolutionPage from '@/features/solutions/components/SolutionPage';
import { delegatedCredentialing } from '@/features/solutions/content/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...delegatedCredentialing.meta, path: delegatedCredentialing.path });

export default function Page() {
  return <SolutionPage content={delegatedCredentialing} />;
}
