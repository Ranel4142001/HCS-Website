import type { LegalDoc } from '../types';

/*
 * Plain-language policies that describe what this website actually does with visitor information.
 * Keep them in step with the code: if the form starts collecting something new, or a new service
 * (analytics, chat, CRM) is added, update the matching section and the `updated` date.
 * Have them reviewed by the company's legal adviser before relying on them.
 */

export const PRIVACY_POLICY: LegalDoc = {
  path: '/privacy',
  title: 'Privacy Policy',
  description:
    'How HealthCredSTAT collects, uses and protects the information you share through our website, contact form and Quick Answers chat.',
  lead: 'This policy explains what information our website collects, why we collect it, who helps us process it and the choices you have.',
  updated: '2026-11-05',
  sections: [
    {
      id: 'scope',
      heading: 'Who we are and what this covers',
      paragraphs: [
        'HealthCredSTAT Inc. ("HealthCredSTAT", "we", "us") provides credentialing, verification and payer enrollment services to healthcare providers and organizations.',
        'This policy covers this website, including the contact form and the Quick Answers chat. Information we handle while delivering credentialing services to clients is governed by the service agreement and, where it applies, the Business Associate Agreement we sign with that client.',
      ],
    },
    {
      id: 'information-we-collect',
      heading: 'Information we collect',
      paragraphs: ['When you request a quote or ask to talk to a specialist, we collect the details you choose to give us:'],
      list: [
        'Your name, email address and, if you provide it, your phone number.',
        'Your practice type and, for groups and health systems, your organization name and number of providers.',
        'Anything you write in the message field.',
        'Which page of the site you sent the request from, so we know what you were reading about.',
      ],
    },
    {
      id: 'collected-automatically',
      heading: 'Information collected automatically',
      paragraphs: [
        'Like every website, our servers receive your IP address and basic browser details when you visit. We use your IP address only to protect the contact form from spam and abuse: we keep a one-way, scrambled code made from it with your request, so we can limit how many requests come from one network without storing the address itself.',
        'We do not use advertising cookies or tracking pixels, and we do not run analytics that follow you across other websites. If you close the announcement banner, your browser remembers that choice until you close the tab.',
      ],
    },
    {
      id: 'how-we-use',
      heading: 'How we use your information',
      list: [
        'To reply to your request, prepare a quote and discuss our services with you.',
        'To send you a confirmation email when we receive your request.',
        'To keep a record of our conversation with you as a prospective client.',
        'To protect the website and our team from spam, fraud and abuse.',
      ],
      after: ['We do not sell your information, and we do not share it with anyone for their own marketing.'],
    },
    {
      id: 'service-providers',
      heading: 'Service providers we use',
      paragraphs: ['A small number of trusted companies process information on our behalf, only to provide their service to us:'],
      list: [
        'Vercel, which hosts this website.',
        'monday.com, where we keep track of requests and client conversations.',
        'Microsoft 365, which we use to send and receive email.',
        'Cloudflare Turnstile, which checks that a form is sent by a person and not an automated program.',
      ],
    },
    {
      id: 'health-information',
      heading: 'Please don’t send patient information',
      paragraphs: [
        'The contact form and Quick Answers chat are for business enquiries. Please don’t include patient details or other protected health information. If you have already done so, contact us and we will delete it.',
      ],
    },
    {
      id: 'baa',
      heading: 'HIPAA and Business Associate Agreements',
      paragraphs: [
        'Credentialing work is mostly about provider information, such as licenses, education, work history and insurance. Where an engagement involves protected health information, we sign a Business Associate Agreement (BAA) with the client before that information is shared, and we handle it with HIPAA-aligned safeguards, role-based access and an audit trail that cannot be edited.',
        'To request a copy of our BAA, ask your credentialing specialist or contact us through the contact page.',
      ],
    },
    {
      id: 'retention-security',
      heading: 'How long we keep it and how we protect it',
      paragraphs: [
        'We keep enquiry details for as long as we need them to respond to you and manage our relationship with you, and then delete them. Information is sent to us over an encrypted connection and access is limited to the team members who need it.',
      ],
    },
    {
      id: 'your-choices',
      heading: 'Your choices',
      paragraphs: [
        'You can ask us to show you, correct or delete the information you gave us, or to stop contacting you. Reply to any email we sent you, or contact us through the contact page, and we will take care of it.',
      ],
    },
    {
      id: 'changes',
      heading: 'Changes to this policy',
      paragraphs: [
        'If we change how we handle information, we will update this page and the date at the top. The current version always applies.',
      ],
    },
  ],
};

export const TERMS_OF_SERVICE: LegalDoc = {
  path: '/terms',
  title: 'Terms of Service',
  description: 'The terms that apply when you use the HealthCredSTAT website, its guides, cost estimator and Quick Answers chat.',
  lead: 'These terms apply to your use of this website. By using it, you agree to them.',
  updated: '2026-11-05',
  sections: [
    {
      id: 'website-and-services',
      heading: 'This website and our services',
      paragraphs: [
        'This website describes HealthCredSTAT’s credentialing services and lets you request a quote. Credentialing work for clients is provided under a separate written service agreement, and that agreement governs the services, not these terms.',
      ],
    },
    {
      id: 'information-only',
      heading: 'Information, not professional advice',
      paragraphs: [
        'Our guides, FAQ and Quick Answers chat give general information about credentialing and enrollment. They are not legal, billing or compliance advice for your situation, and payer rules change often. Please confirm requirements with the payer or ask one of our specialists.',
      ],
    },
    {
      id: 'estimates',
      heading: 'Prices and timelines are estimates',
      paragraphs: [
        'Prices, ranges and timelines shown on this site, including results from the cost estimator, are estimates. Your quote is confirmed in writing after we review your needs. Payers and licensing boards set their own processing times, so we can’t guarantee when, or whether, an application will be approved.',
      ],
    },
    {
      id: 'acceptable-use',
      heading: 'Using the site fairly',
      list: [
        'Give accurate contact details when you send a request.',
        'Don’t send spam, automated requests or harmful code, or try to get around the site’s security checks.',
        'Don’t include patient or other protected health information in the contact form or chat.',
      ],
    },
    {
      id: 'content-ownership',
      heading: 'Our content',
      paragraphs: [
        'The text, design, logo and other material on this site belong to HealthCredSTAT Inc. You may read, print and share pages for your own use. Please don’t copy or republish them for commercial purposes without our permission.',
      ],
    },
    {
      id: 'other-websites',
      heading: 'Links to other websites',
      paragraphs: [
        'We may link to payer, government or industry websites. We don’t control those sites and aren’t responsible for their content or how they handle your information.',
      ],
    },
    {
      id: 'liability',
      heading: 'Limits of our responsibility',
      paragraphs: [
        'We work to keep this site accurate and available, but it is provided as it is, and it may sometimes contain errors or be unavailable. To the extent the law allows, HealthCredSTAT is not liable for losses arising from your use of the website itself. This does not limit anything in a signed service agreement.',
      ],
    },
    {
      id: 'privacy',
      heading: 'Privacy',
      paragraphs: ['Our Privacy Policy explains how we handle the information you share through this site.'],
    },
    {
      id: 'changes',
      heading: 'Changes to these terms',
      paragraphs: [
        'We may update these terms from time to time. We will change the date at the top of this page when we do, and the current version applies from then on.',
      ],
    },
  ],
};
