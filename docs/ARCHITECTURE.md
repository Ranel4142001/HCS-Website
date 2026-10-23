# Website architecture

The HealthCredSTAT marketing website is a Next.js 16 App Router app in `apps/frontend`.
Code is organized **by feature**: everything a part of the site needs (components, content, types, logic)
lives together, and routes in `app/` only compose features into pages.

## Folder map

```text
apps/frontend/
├── app/                        Routes only: compose features into pages, set metadata
│   ├── (marketing)/layout.tsx  Site chrome (announcement bar, navbar, footer) for every page
│   ├── (marketing)/**/page.tsx One file per URL; renders <main> with feature sections
│   ├── layout.tsx              <html>, fonts, site-wide structured data, global stylesheets
│   ├── globals.css             Design tokens, element defaults, route-level styles
│   ├── not-found.tsx, error.tsx, loading.tsx
│   └── sitemap.ts, robots.ts, opengraph-image.tsx
└── src/
    ├── features/               One folder per part of the site
    │   ├── home/               Homepage sections (hero, workflows, dashboard demo, timeline…)
    │   ├── solutions/          Solution and audience pages (template + content), services grid
    │   ├── pricing/            Pricing fee schedule
    │   ├── estimator/          Timeline estimator
    │   ├── faq/                FAQ section and questions
    │   ├── contact/            Quote request form (validation, submit service)
    │   ├── social-proof/       Founding-client commitments; testimonials (hidden until real)
    │   ├── quick-answers/      Floating quick-answer widget
    │   └── about/              About page sections
    └── shared/                 Used by several features; knows nothing about any feature
        ├── components/ui/      Badge, Button, Icon, Spinner
        ├── components/forms/   Input, TextArea
        ├── components/layout/  AnnouncementBar, Navbar, NavDropdown, SearchDialog, Footer,
        │                       PageIntro, SectionHeader, ComingSoonPage, BackToTop
        ├── components/seo/     JsonLd
        ├── styles/common.css   Classes used by more than one feature (buttons, page hero)
        ├── config/             env.config.ts, navigation.ts (every site link, defined once)
        └── lib/                seo.ts (metadata and structured-data helpers)
```

## Anatomy of a feature

```text
features/<name>/
├── index.ts        Public API: the only file other code may import
├── components/     React components (rendering only), each with its own Component.css
├── styles/         <name>.css: styles shared by several of the feature's components
├── content/        Copy and data: text, lists, sample data, prices, ranges
├── types.ts        Shapes of that content
├── hooks/          Stateful logic (e.g. useEstimator)
├── services/       I/O (e.g. contact form submission)
└── validation/     Schemas (zod)
```

Only create the folders a feature needs.

## Dependency rules

These are enforced by ESLint (`eslint.config.mjs`), so a violation fails `npm run lint` and CI.

| Code in… | May import | May not import |
|---|---|---|
| `app/` | `@/features/<name>` (the index), `@/shared/*` | a feature's internal files (`@/features/<name>/components/...`) |
| `src/features/<name>/` | its own files, `@/shared/*` | any other feature |
| `src/shared/` | other shared code | any feature |

If two features need the same thing, move it to `src/shared`. If a page needs two features together,
compose them in the page.

## Where does it go?

| I want to… | Edit |
|---|---|
| Change wording, prices, timelines or sample data | the feature's `content/` file |
| Restyle a section | the `.css` file next to its component |
| Add or rename a menu, footer or search link | `src/shared/config/navigation.ts` |
| Add a solution or audience page | `features/solutions/content/*.ts`, then a 3-line `page.tsx`; the sitemap picks it up |
| Add a homepage section | a component in `features/home/components`, export it from `features/home/index.ts`, place it in `app/(marketing)/page.tsx` |
| Change page title or description | `buildMetadata()` in the page or its `layout.tsx` |
| Change the estimator's day ranges | `features/estimator/content/plans.ts` (`ESTIMATE_RANGES`) |
| Add a real testimonial | `features/social-proof/content/testimonials.ts` (written permission first); the section appears automatically |
| Connect the contact form to the CRM | `features/contact/services/contact.service.ts` (currently a placeholder) |

## Conventions

- **Server components by default.** Add `'use client'` only to components that need state, effects or
  browser events. Pages are server components.
- **Styles live with what they style.** A component imports its own stylesheet (`import './PricingSection.css'`),
  so a page downloads only the CSS of the components it renders. Styles shared inside one feature go in
  `features/<name>/styles/<name>.css` (imported by the feature's `index.ts`); styles shared across features go
  in `src/shared/styles/common.css`; tokens and element defaults stay in `app/globals.css`. Class names are
  global, so keep them unique to their component (e.g. a `pricing-` prefix).
- **No inline styles** for layout or typography. A `style` prop is fine for values that come from data
  (e.g. an accent color) or are measured at runtime.
- **Vendor prefixes go first** (`-webkit-backdrop-filter` before `backdrop-filter`). The build's CSS
  minifier keeps only the last of the two, so the reverse order silently drops the standard property.
- **Content is not code.** Components should not contain long text or data arrays; put them in `content/`.
- **Honest claims only.** Numbers, certifications, client names and promises must be confirmed by the
  business before they go in `content/`. Sample dashboards and demos are labeled as samples.
- **Brand logos are served as-is** (`<img>`, never `next/image` re-encoding). Photos use `next/image`.

## Checks before you push

```bash
npm run typecheck   # TypeScript
npm run lint        # ESLint, including the dependency rules above
npm run build       # production build
```

CI (`.github/workflows/ci.yml`) runs the same three on every pull request and push to `main`.

To test a production build while `npm run dev` is running, build into a separate folder so the two don't
overwrite each other:

```bash
cd apps/frontend
NEXT_DIST_DIR=.next-audit npx next build && NEXT_DIST_DIR=.next-audit npx next start -p 3123
```

That build rewrites `tsconfig.json` and `next-env.d.ts` to point at `.next-audit`; restore them before
committing with `git checkout -- apps/frontend/tsconfig.json apps/frontend/next-env.d.ts`.
