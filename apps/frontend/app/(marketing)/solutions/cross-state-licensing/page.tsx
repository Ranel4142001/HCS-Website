import { SolutionPage, crossStateLicensing } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...crossStateLicensing.meta, path: crossStateLicensing.path });

export default function Page() {
  return <SolutionPage content={crossStateLicensing} />;
}
