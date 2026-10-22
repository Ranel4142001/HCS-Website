import SolutionPage from '@/features/solutions/components/SolutionPage';
import { rosterManagement } from '@/features/solutions/content/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...rosterManagement.meta, path: rosterManagement.path });

export default function Page() {
  return <SolutionPage content={rosterManagement} />;
}
