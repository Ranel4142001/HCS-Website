import SolutionPage from '@/features/solutions/components/SolutionPage';
import { privileging } from '@/features/solutions/content/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...privileging.meta, path: privileging.path });

export default function Page() {
  return <SolutionPage content={privileging} />;
}
