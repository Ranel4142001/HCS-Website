import type { FaqItem } from '@/shared/lib/seo';

/**
 * Main FAQ. Shown in full on /faq (with FAQPage structured data). Answer the question in the
 * first sentence — that is the part search engines quote — and keep each answer to 2–3 short sentences.
 */
export const FAQ_DATA: FaqItem[] = [
  {
    q: 'What is medical credentialing?',
    a: 'Credentialing confirms a provider is qualified to treat patients. It checks their license, education, training, board certification, work history, malpractice history and sanctions. Hospitals, medical groups and health plans all require it.',
  },
  {
    q: 'What is primary source verification?',
    a: 'It means confirming each credential directly with the organization that issued it, such as the state medical board. Copies from the provider are not enough. Every credentialing file is built on it.',
  },
  {
    q: 'How long does provider credentialing take?',
    a: 'Health plan credentialing commonly takes 90 to 120 days. Most delays come from incomplete applications and slow source responses. We check every file up front and follow up with each source on a set schedule.',
  },
  {
    q: 'What documents are needed for provider credentialing?',
    a: 'Usually an NPI, state license, DEA registration (if applicable), board certification, a CV with month/year dates, malpractice insurance and claims history, education certificates and a current CAQH ProView profile.',
  },
  {
    q: 'What is CAQH ProView (now DataSpring) and why does it matter?',
    a: 'CAQH ProView is the profile most commercial health plans pull credentialing data from. CAQH became DataSpring in June 2026. Keep the profile complete and re-attest every 120 days, or applications stall.',
  },
  {
    q: 'How much do credentialing services cost?',
    a: 'Credentialing for an individual clinician starts at $599 per assignment. Groups and enterprises get custom pricing based on provider count and services. Request a free quote for exact pricing.',
  },
  {
    q: 'Why outsource credentialing instead of doing it in-house?',
    a: 'In many practices, credentialing falls on one or two busy staff members. Outsourcing gives you a dedicated team, consistent follow-up and a clear status for every provider, without hiring more staff.',
  },
  {
    q: 'What is a Credentials Verification Organization (CVO)?',
    a: 'A CVO verifies providers’ credentials on behalf of hospitals, medical groups and health plans. It performs primary source verification, while your organization keeps the final credentialing decision.',
  },
  {
    q: 'How often do providers need to be recredentialed?',
    a: 'At least every 36 months under NCQA standards. Hospitals reappoint on the cycle set by their bylaws, and CAQH profiles need re-attesting every 120 days. We track all of these dates for you.',
  },
  {
    q: 'How does ongoing monitoring work?',
    a: 'Between cycles, we check providers against sanction and exclusion lists such as OIG and SAM.gov. We also track license, DEA and certification expiry dates and alert you before anything lapses.',
  },
  {
    q: 'Can you take over credentialing files already in progress?',
    a: 'Yes. We review where each file stands and take over the remaining verification and follow-up, so no work already done is lost.',
  },
];
