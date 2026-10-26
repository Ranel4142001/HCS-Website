import { SolutionPage, privileging } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...privileging.meta, path: privileging.path });

export default function Page() {
  return <SolutionPage content={privileging} />;
}
