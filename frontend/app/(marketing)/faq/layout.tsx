import { buildMetadata, faqSchema } from '@/shared/lib/seo';
import JsonLd from '@/shared/components/seo/JsonLd';
import { FAQ_DATA } from '@/features/faq';

export const metadata = buildMetadata({
  title: 'Medical Credentialing FAQ',
  description:
    'Answers to common questions about medical credentialing, primary source verification, CAQH, timelines, documents, recredentialing and costs.',
  path: '/faq',
});

export default function FaqLayout({ children }: { children: React.ReactNode }) {
  return (
    <>
      <JsonLd data={faqSchema(FAQ_DATA)} />
      {children}
    </>
  );
}
