import { LegalPage, TERMS_OF_SERVICE as doc } from '@/features/legal';
import { buildMetadata } from '@/shared/lib/seo';

export const metadata = buildMetadata({ title: doc.title, description: doc.description, path: doc.path });

export default function TermsPage() {
  return <LegalPage doc={doc} />;
}
