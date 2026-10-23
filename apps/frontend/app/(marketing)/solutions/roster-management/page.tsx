import { SolutionPage, rosterManagement } from '@/features/solutions';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ ...rosterManagement.meta, path: rosterManagement.path });

export default function Page() {
  return <SolutionPage content={rosterManagement} />;
}
