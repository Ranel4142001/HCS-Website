import type { Guide } from '../types';

/**
 * Educational guides. Keep them factual and general: describe how credentialing works across the industry,
 * not promises about HealthCredSTAT's own turnaround or results. Keep paragraphs to 2–3 short sentences and
 * lead with the answer. Update `updated` after each content review.
 */

export const howLongDoesCredentialingTake: Guide = {
  slug: 'how-long-does-credentialing-take',
  meta: {
    title: 'How Long Does Credentialing Take?',
    description:
      'Typical provider credentialing timelines, what happens at each stage, what causes delays and how to get providers credentialed sooner.',
  },
  title: 'How long does credentialing take?',
  lead: 'Plan for about 60 to 180 days from a complete application. Commercial health plans commonly take 90 to 120 days.',
  updated: '2026-10-28',
  sections: [
    {
      heading: 'The short answer',
      paragraphs: [
        'Most health plans take 90 to 120 days. Medicare is often faster, and Medicaid timelines vary by state.',
        'Hospitals work to their credentials committee’s meeting dates. A file that misses a meeting can wait another month.',
      ],
    },
    {
      heading: 'What happens during those months',
      ordered: true,
      list: [
        'Preparation: documents collected, CAQH ProView completed and attested, NPI and practice details confirmed.',
        'Submission: each health plan gets its own application, often through its own portal.',
        'Verification: licenses, education, board certification, work history and malpractice history are confirmed with the original sources.',
        'Committee review: the credentialing committee approves the provider at its next meeting.',
        'Approval: the provider gets an effective date and a provider ID.',
      ],
    },
    {
      heading: 'What slows credentialing down',
      paragraphs: ['Most delays come from the application, not the health plan’s queue:'],
      list: [
        'Missing dates, unsigned pages or incomplete sections',
        'A CAQH profile that is not attested or holds expired documents',
        'Work history gaps without a written explanation',
        'Names, addresses or NPIs that do not match across NPPES, CAQH and the application',
        'No one following up on requests for information',
      ],
    },
    {
      heading: 'How to get providers credentialed sooner',
      list: [
        'Start 90 to 120 days before the provider’s start date.',
        'Complete CAQH fully and re-attest every 120 days.',
        'Gather every document before the first application goes out.',
        'Apply to all health plans at the same time.',
        'Follow up on a fixed schedule and answer requests the same day.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can a provider see patients while credentialing is pending?',
      a: 'Usually not as an in-network provider. Some health plans, including Medicare, allow limited retroactive dates, so confirm with each plan first.',
    },
    {
      q: 'Does recredentialing take as long?',
      a: 'It is usually less work because the provider is already on file. It runs on a fixed cycle, commonly every three years.',
    },
    {
      q: 'Can a credentialing service shorten a health plan’s review?',
      a: 'No one can speed up a plan’s internal review. A service avoids rejections and keeps every application moving, which is where most time is lost.',
    },
  ],
  related: [
    { label: 'Estimate your timeline', href: '/#estimator' },
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Provider credentialing', href: '/solutions/cvo-credentialing' },
  ],
};

export const caqhProviewGuide: Guide = {
  slug: 'caqh-proview-guide',
  meta: {
    title: 'CAQH ProView Guide for Providers',
    description:
      'How to set up CAQH ProView, what to upload, how re-attestation every 120 days works and the common mistakes that stall credentialing.',
  },
  title: 'CAQH ProView: a practical guide for providers',
  lead: 'Most commercial health plans pull credentialing data from CAQH ProView. A complete, attested profile is one of the simplest ways to avoid delays.',
  updated: '2026-10-28',
  sections: [
    {
      heading: 'What CAQH ProView is',
      paragraphs: [
        'An online profile where providers enter their professional information once. Health plans read it instead of each asking for the same forms.',
        'It is free for providers. Many commercial and Medicaid managed care plans require a current profile before they process an application.',
      ],
    },
    {
      heading: 'Setting up a profile',
      ordered: true,
      list: [
        'Register on CAQH ProView, or use the CAQH ID a health plan sent you.',
        'Complete every section, including work history, practice locations, malpractice coverage and disclosures.',
        'Upload your license, DEA registration, board certification, malpractice certificate and CV.',
        'Authorize each health plan you work with to view your profile.',
        'Review everything and attest that it is accurate.',
      ],
    },
    {
      heading: 'Re-attestation every 120 days',
      paragraphs: [
        'Re-attest every 120 days. If the attestation lapses, credentialing and recredentialing can stall.',
        'Update the profile as soon as something changes, such as a new location, license or malpractice policy.',
      ],
    },
    {
      heading: 'Common mistakes that stall applications',
      list: [
        'Expired documents left on the profile',
        'Work history gaps without a written explanation',
        'Practice locations that do not match the application or NPPES',
        'Not authorizing the health plan reviewing the application',
        'A missed re-attestation date',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does CAQH ProView cost anything for providers?',
      a: 'No. It is free for providers; participating health plans fund it.',
    },
    {
      q: 'Is a CAQH profile the same as being credentialed?',
      a: 'No. CAQH is a source of information. Each health plan still verifies the details and approves the provider itself.',
    },
    {
      q: 'What happens if my CAQH profile expires?',
      a: 'Pending applications and recredentialing may pause. Log in, update anything that changed and re-attest to restore it.',
    },
  ],
  related: [
    { label: 'How long does credentialing take?', href: '/guides/how-long-does-credentialing-take' },
    { label: 'Recredentialing requirements', href: '/guides/recredentialing-requirements' },
    { label: 'Credentialing for digital health', href: '/who-we-help/digital-health' },
  ],
};

export const howToGetCredentialed: Guide = {
  slug: 'how-to-get-credentialed-with-insurance-companies',
  meta: {
    title: 'How to Get Credentialed With Insurers',
    description:
      'A step-by-step guide to getting credentialed with health plans: NPI, licenses, CAQH, applications, committee approval and follow-up.',
  },
  title: 'How to get credentialed with insurance companies',
  lead: 'Get your identifiers and licenses in order, build your CAQH profile, then apply to each health plan and follow up until you are approved.',
  updated: '2026-10-28',
  sections: [
    {
      heading: 'Step by step',
      ordered: true,
      list: [
        'Get an NPI. Individuals need a Type 1 NPI; groups also need a Type 2.',
        'Confirm your state license, and DEA registration if you prescribe, is active where you practice.',
        'Complete and attest your CAQH ProView profile.',
        'Choose your health plans, starting with the ones your patients use most. Check each network is open to your specialty.',
        'Apply to each plan. Medicare and Medicaid have their own applications.',
        'Follow up regularly and answer every request quickly.',
        'Confirm your effective date and provider ID, and note your recredentialing date.',
      ],
    },
    {
      heading: 'Credentialing vs. contracting',
      paragraphs: [
        'Credentialing verifies you are qualified. Contracting sets the terms and rates. You usually need both to be in-network.',
      ],
    },
    {
      heading: 'Doing it yourself or getting help',
      paragraphs: [
        'Many solo providers credential themselves. It takes time: one application per plan, current documents and regular follow-up.',
        'Practices that add providers often usually save time with dedicated staff or a credentialing service.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How long does it take to get credentialed?',
      a: 'Commonly 90 to 120 days from a complete application. See our timeline guide for what affects it.',
    },
    {
      q: 'Can I see patients before I am credentialed with their insurer?',
      a: 'Usually only as out-of-network or self-pay. Rules vary, so check with the health plan first.',
    },
    {
      q: 'What is the difference between credentialing and enrollment?',
      a: 'The terms are often used interchangeably. Strictly, credentialing verifies qualifications, while enrollment sets the provider up with a plan such as Medicare.',
    },
  ],
  related: [
    { label: 'How long does credentialing take?', href: '/guides/how-long-does-credentialing-take' },
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Credentialing for provider groups', href: '/who-we-help/provider-groups' },
  ],
};

export const recredentialingRequirements: Guide = {
  slug: 'recredentialing-requirements',
  meta: {
    title: 'Recredentialing Requirements for Providers',
    description:
      'How often providers must be recredentialed, what health plans and hospitals re-verify and how to avoid lapses.',
  },
  title: 'Recredentialing requirements for providers',
  lead: 'Health plans and hospitals re-verify every provider on a fixed cycle. A missed deadline can remove a provider from a network.',
  updated: '2026-10-28',
  sections: [
    {
      heading: 'How often recredentialing happens',
      list: [
        'Health plans: at least every 36 months under NCQA standards. Some plans use a shorter cycle.',
        'Hospitals: reappointment and privileges commonly every two years.',
        'CAQH ProView: re-attestation every 120 days.',
      ],
    },
    {
      heading: 'What is re-verified',
      list: [
        'State licenses and DEA registrations',
        'Board certification',
        'Malpractice coverage and claims since the last cycle',
        'Sanctions and exclusions, such as the OIG list',
        'Hospital privileges and practice information',
        'For many organizations, quality data such as complaints',
      ],
    },
    {
      heading: 'Recredentialing vs. Medicare revalidation',
      paragraphs: [
        'They are separate. Recredentialing re-verifies qualifications. Medicare revalidation confirms enrollment details, generally every five years. Track both.',
      ],
    },
    {
      heading: 'Avoiding lapses',
      list: [
        'Keep one calendar of every due date and expiration.',
        'Start each renewal 90 to 120 days early.',
        'Keep CAQH attested and documents current between cycles.',
        'Answer health plan and medical staff requests promptly.',
        'Monitor licenses and exclusion lists between cycles.',
      ],
    },
  ],
  faqs: [
    {
      q: 'What happens if a provider misses recredentialing?',
      a: 'The plan can end the provider’s participation. Rejoining usually means a new initial application.',
    },
    {
      q: 'Is recredentialing faster than initial credentialing?',
      a: 'Usually, because the provider is already on file. It still depends on current information and quick responses.',
    },
    {
      q: 'Do providers have to re-apply from scratch?',
      a: 'No. Most plans rely on the CAQH profile, so the work is confirming everything is still current.',
    },
  ],
  related: [
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Credentialing for health systems', href: '/who-we-help/health-systems' },
    { label: 'Provider credentialing', href: '/solutions/cvo-credentialing' },
  ],
};

export const GUIDES = [
  howToGetCredentialed,
  howLongDoesCredentialingTake,
  caqhProviewGuide,
  recredentialingRequirements,
];
