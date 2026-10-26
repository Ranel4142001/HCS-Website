import type { Guide } from '../types';

/**
 * Educational guides. Keep them factual and general: describe how credentialing works across the industry,
 * not promises about HealthCredSTAT's own turnaround or results. Update `updated` after each content review.
 */

export const howLongDoesCredentialingTake: Guide = {
  slug: 'how-long-does-credentialing-take',
  meta: {
    title: 'How Long Does Credentialing Take?',
    description:
      'Typical credentialing and payer enrollment timelines, what happens at each stage, what causes delays and how to get providers billing sooner.',
  },
  title: 'How long does credentialing take?',
  lead:
    'Most payer credentialing and enrollment takes about 60 to 180 days from a complete application, and commercial plans commonly take 90 to 120 days. Here is where that time goes and how to keep it from stretching further.',
  updated: '2026-10-26',
  sections: [
    {
      heading: 'The short answer',
      paragraphs: [
        'Plan for roughly three to six months from the day a complete application reaches a payer until the provider can bill it. Commercial health plans commonly take 90 to 120 days. Medicare applications are often processed faster, depending on the Medicare Administrative Contractor, and Medicaid timelines vary by state.',
        'Hospital privileging runs on its own schedule, driven by when the credentials committee and governing body meet. A file that misses a meeting can wait another month.',
      ],
    },
    {
      heading: 'What happens during those months',
      ordered: true,
      list: [
        'Preparation: collecting documents, completing and attesting the CAQH ProView profile, and confirming NPI and practice details.',
        'Submission: sending each payer its own application, often through its own portal.',
        'Verification: the payer confirms licenses, education, board certification, work history and malpractice history with the original sources.',
        'Committee review: the payer’s credentialing committee approves the provider, usually on a fixed meeting schedule.',
        'Contracting and loading: the participation agreement is signed and the provider is loaded into the payer’s systems with an effective date and provider ID.',
      ],
    },
    {
      heading: 'What slows credentialing down',
      paragraphs: ['Most delays come from the application, not the payer’s queue:'],
      list: [
        'Incomplete applications, missing dates or unsigned pages, which send the file back to the start',
        'A CAQH profile that is not attested, or that still holds expired documents',
        'Gaps in work history without a written explanation',
        'Addresses, names or NPIs that do not match across NPPES, CAQH and the application',
        'Payer panels that are closed to new providers in that specialty or area',
        'Nobody following up, so a payer’s request for information sits unanswered',
      ],
    },
    {
      heading: 'How to get providers billing sooner',
      list: [
        'Start as soon as the offer is signed, ideally 90 to 120 days before the start date.',
        'Complete the CAQH profile fully and re-attest it every 120 days.',
        'Gather every document before the first application goes out.',
        'Submit to all payers at the same time rather than one after another.',
        'Follow up with each payer on a fixed schedule and answer requests the same day.',
        'Record each effective date and provider ID so billing can start immediately.',
      ],
    },
  ],
  faqs: [
    {
      q: 'Can a provider bill while credentialing is pending?',
      a: 'Usually not as an in-network provider. Some payers, including Medicare, allow limited retroactive billing back to an effective date, but rules differ by payer, so confirm with each one before seeing its members.',
    },
    {
      q: 'Does recredentialing take as long?',
      a: 'It is usually less work because the provider is already on file, but it runs on a fixed cycle, commonly every three years. Missing a recredentialing deadline can remove a provider from the network.',
    },
    {
      q: 'Can a credentialing service shorten a payer’s review?',
      a: 'No one can speed up a payer’s internal review. What a service can do is avoid rejections and resubmissions, and keep every application moving with consistent follow-up — which is where most lost time comes from.',
    },
  ],
  related: [
    { label: 'Estimate your timeline', href: '/#estimator' },
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
  ],
};

export const caqhProviewGuide: Guide = {
  slug: 'caqh-proview-guide',
  meta: {
    title: 'CAQH ProView Guide for Providers',
    description:
      'How to set up CAQH ProView, what to upload, how re-attestation every 120 days works and the common mistakes that stall payer credentialing.',
  },
  title: 'CAQH ProView: a practical guide for providers',
  lead:
    'Most commercial health plans pull credentialing data from CAQH ProView. A complete, attested profile is one of the simplest ways to avoid delays — and an expired one is one of the most common reasons applications stall.',
  updated: '2026-10-26',
  sections: [
    {
      heading: 'What CAQH ProView is',
      paragraphs: [
        'CAQH ProView is an online database where providers enter their professional and practice information once. Participating health plans then access that profile instead of each asking for the same forms and documents.',
        'It is free for providers. Medicare does not use CAQH — Medicare enrollment goes through PECOS — but many commercial plans and some Medicaid managed care plans require a current CAQH profile before they will process an application.',
      ],
    },
    {
      heading: 'Setting up a profile',
      ordered: true,
      list: [
        'Register on the CAQH ProView website, or use the CAQH ID a health plan sent you.',
        'Complete every section: personal details, education and training, licenses, practice locations, hospital affiliations, work history, malpractice coverage and the disclosure questions.',
        'Upload supporting documents, such as your license, DEA registration, board certification, malpractice certificate and CV.',
        'Authorize the health plans you work with to view your profile.',
        'Review everything and attest that it is accurate.',
      ],
    },
    {
      heading: 'Re-attestation every 120 days',
      paragraphs: [
        'CAQH asks providers to re-attest their profile every 120 days. If the attestation lapses, health plans can no longer rely on the profile, and applications and recredentialing can stall until it is updated.',
        'Set reminders ahead of each due date, and update the profile whenever something changes — a new practice location, a renewed malpractice policy or a new license — rather than waiting for the next attestation.',
      ],
    },
    {
      heading: 'Common mistakes that stall applications',
      list: [
        'Expired documents left on the profile after they were renewed',
        'Gaps in work history without a written explanation',
        'Practice locations that do not match the payer application or NPPES',
        'Not authorizing the health plan that is processing the application',
        'A missed re-attestation date',
      ],
    },
  ],
  faqs: [
    {
      q: 'Does CAQH ProView cost anything for providers?',
      a: 'No. CAQH ProView is free for providers; participating health plans fund it.',
    },
    {
      q: 'Is a CAQH profile the same as being credentialed?',
      a: 'No. CAQH is a source of information. Each health plan still verifies the details and approves the provider through its own credentialing process.',
    },
    {
      q: 'What happens if my CAQH profile expires?',
      a: 'Health plans lose access to a current profile, so pending applications and recredentialing may pause. Log in, update anything that changed and re-attest to restore it.',
    },
  ],
  related: [
    { label: 'How long does credentialing take?', href: '/guides/how-long-does-credentialing-take' },
    { label: 'How to get credentialed with insurers', href: '/guides/how-to-get-credentialed-with-insurance-companies' },
    { label: 'Provider enrollment services', href: '/solutions/provider-enrollment' },
  ],
};

export const howToGetCredentialed: Guide = {
  slug: 'how-to-get-credentialed-with-insurance-companies',
  meta: {
    title: 'How to Get Credentialed With Insurers',
    description:
      'A step-by-step guide to getting credentialed with insurance companies: NPI, licenses, CAQH, Medicare and Medicaid enrollment, commercial payers and follow-up.',
  },
  title: 'How to get credentialed with insurance companies',
  lead:
    'Getting in-network with insurers follows the same path for most providers: get your identifiers and licenses in order, build your CAQH profile, then apply to each payer and follow up until you have an effective date.',
  updated: '2026-10-26',
  sections: [
    {
      heading: 'Step by step',
      ordered: true,
      list: [
        'Get an NPI. Individual providers need a Type 1 NPI from NPPES; groups also need a Type 2 organizational NPI.',
        'Confirm your licenses. Your state license — and DEA and state controlled-substance registrations, if you prescribe — must be active in the state where you practice.',
        'Complete and attest your CAQH ProView profile so commercial payers can access your information.',
        'Choose your payers. Start with the plans your patients use most, and check whether each plan’s network is open to your specialty in your area.',
        'Enroll with Medicare through PECOS and with your state Medicaid program, if you will see those patients. Groups also need their own enrollment and reassignment of benefits.',
        'Apply to each commercial payer. Most require a credentialing application and then a participation agreement.',
        'Follow up regularly, and answer every request for information quickly.',
        'Confirm your effective date and provider ID with each payer before billing, and set reminders for recredentialing.',
      ],
    },
    {
      heading: 'Credentialing vs. contracting',
      paragraphs: [
        'Credentialing is the payer verifying that you are qualified. Contracting is the agreement that sets the terms and rates of your participation. You usually need both before you are in-network, and they can happen in sequence, so ask each payer where your file stands in each step.',
      ],
    },
    {
      heading: 'Doing it yourself or getting help',
      paragraphs: [
        'Many solo providers handle credentialing themselves. It mostly takes time and attention to detail: one application per payer, documents kept current and follow-up every couple of weeks. Practices that add providers often, or work with many payers, usually find it more efficient to use dedicated staff or a credentialing service, because each delay pushes back revenue.',
      ],
    },
  ],
  faqs: [
    {
      q: 'How long does it take to get credentialed?',
      a: 'Commonly three to six months from a complete application, and 90 to 120 days for many commercial plans. See our timeline guide for what affects it.',
    },
    {
      q: 'Can I see patients before I am credentialed with their insurer?',
      a: 'You can usually see them as an out-of-network provider or on a self-pay basis, but you cannot bill the plan as in-network until your participation is effective. Rules vary, so check with the payer first.',
    },
    {
      q: 'What is the difference between credentialing and enrollment?',
      a: 'The terms are often used interchangeably. Strictly, credentialing verifies a provider’s qualifications, while enrollment sets the provider up with a payer — such as Medicare — so claims can be paid.',
    },
  ],
  related: [
    { label: 'How long does credentialing take?', href: '/guides/how-long-does-credentialing-take' },
    { label: 'CAQH ProView guide', href: '/guides/caqh-proview-guide' },
    { label: 'Credentialing for provider groups', href: '/who-we-help/provider-groups' },
  ],
};

export const GUIDES = [howToGetCredentialed, howLongDoesCredentialingTake, caqhProviewGuide];
