import { SolutionPage, delegatedCredentialing } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...delegatedCredentialing.meta, path: delegatedCredentialing.path });

export default function Page() {
  return <SolutionPage content={delegatedCredentialing} />;
}
