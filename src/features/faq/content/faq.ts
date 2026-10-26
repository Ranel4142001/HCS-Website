import type { FaqItem } from '@/shared/lib/seo';

/**
 * Main FAQ. Shown in full on /faq (with FAQPage structured data) and as a
 * shorter list on the homepage. Answer the question in the first sentence —
 * that is the part search engines quote.
 */
export const FAQ_DATA: FaqItem[] = [
  {
    q: 'What is medical credentialing?',
    a: 'Medical credentialing is the process of verifying that a healthcare provider is qualified to treat patients — confirming their license, education, training, board certification, work history, malpractice history and any sanctions. Hospitals, medical groups and health plans all credential providers, and insurers require it before a provider can bill them.',
  },
  {
    q: 'What is the difference between credentialing and payer enrollment?',
    a: 'Credentialing confirms a provider’s qualifications. Payer enrollment (sometimes called insurance credentialing) is the process of joining a specific insurer’s network — Medicare, Medicaid or a commercial plan — so the provider can be paid in-network. A provider usually needs both before billing.',
  },
  {
    q: 'How long does provider credentialing take?',
    a: 'Commercial payer credentialing commonly takes 90 to 120 days, and sometimes longer. Medicare and Medicaid timelines vary by contractor and state. The biggest delays come from incomplete applications and slow follow-up, which is why we check every file before submission and follow up with payers on a set schedule.',
  },
  {
    q: 'What documents are needed for provider credentialing?',
    a: 'Most payers and facilities ask for: an NPI, state license, DEA and state controlled substance registrations (if applicable), board certification, a CV with month/year dates and gap explanations, malpractice insurance certificate and claims history, education and training certificates, and an up-to-date CAQH ProView profile.',
  },
  {
    q: 'What is CAQH ProView (now DataSpring) and why does it matter?',
    a: 'CAQH ProView is the online profile most commercial health plans use to collect provider credentialing data. In June 2026 CAQH rebranded as DataSpring, and the profile now lives in its Provider Data Portal, though most payers and providers still call it CAQH. Payers pull information directly from it, so it must be complete, include current documents, grant access to each payer and be re-attested every 120 days for most providers. An outdated CAQH profile is one of the most common causes of delays.',
  },
  {
    q: 'How much do credentialing services cost?',
    a: 'For individual clinicians, our credentialing management starts at $599 per assignment. Groups and enterprises receive custom pricing based on the number of providers, payers and services needed. Use our timeline estimator or request a free quote for exact pricing.',
  },
  {
    q: 'Why outsource credentialing instead of doing it in-house?',
    a: 'Credentialing is detailed, deadline-driven work, and in many practices it falls on one or two busy staff members. Outsourcing gives you a dedicated team that knows each payer’s requirements, consistent follow-up and a clear status for every application — without hiring and training more staff.',
  },
  {
    q: 'What is a Credentials Verification Organization (CVO)?',
    a: 'A CVO is an organization that verifies healthcare practitioners’ credentials on behalf of hospitals, medical groups and health plans. It performs primary source verification — confirming each credential directly with the issuing source — while the organization that hired it keeps the final credentialing decision.',
  },
  {
    q: 'How often do providers need to be recredentialed?',
    a: 'Under NCQA standards, providers are recredentialed at least every 36 months. Medicare enrollment is generally revalidated every five years, hospitals reappoint medical staff on the cycle set by their bylaws, and most providers must re-attest their CAQH (DataSpring) profile every 120 days. We track all of these dates for you.',
  },
  {
    q: 'How does ongoing monitoring work?',
    a: 'Between credentialing cycles, we check providers against federal and state sanctions and exclusion sources — such as the OIG exclusion list, SAM.gov and state Medicaid exclusion lists — and track license, DEA and certification expiration dates, so you are alerted before an issue affects patient care or billing.',
  },
  {
    q: 'Can you take over credentialing applications already in progress?',
    a: 'Yes. We review where each application stands, contact the payers involved and take over the follow-up, so nothing already submitted is lost.',
  },
];
