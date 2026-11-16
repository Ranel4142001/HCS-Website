# Folder structure guide

A plain-language tour of every folder in the HealthCredSTAT website project: what each one holds and why it exists.
For the coding rules that keep this structure tidy (what may import what), see [ARCHITECTURE.md](ARCHITECTURE.md).

**Quick orientation**

- Almost everything lives in **`frontend/`**, the website itself.
- Inside it, **`app/`** decides *which pages exist*, **`src/features/`** holds *what each part of the site shows
  and does*, and **`src/shared/`** holds the *building blocks every page reuses* (menu, footer, buttons).
- **Words, prices and lists** live in `content/` folders, so most wording changes never touch the page code.

---

## 1. The project root (`HCS-WEBSITE/`)

| Folder or file | What it is | Purpose |
|---|---|---|
| `frontend/` | The website | Everything that builds and runs the site. Sections 2–7 below. |
| `.github/workflows/` | Automatic jobs on GitHub | `ci.yml` checks every push (types, code rules, a full build), so a broken change can't slip through. `warm-cache.yml` runs after each update to `main`: it waits until Vercel is serving the new version, then opens every page once so real visitors get fast, already-cached pages. |
| `.claude/` | Settings for the AI coding assistant | Local permissions only. Not part of the website. |
| `.git/` | Git's history database | Every saved version of the project. Managed by Git; never edit by hand. |
| `README.md` | Project front page | How to install, run and build the site. |
| `.gitignore`, `.gitattributes` | Git settings | Which files Git ignores (secrets, build output) and how it treats line endings. |

**How changes go live:** work happens on the `development` branch. When `main` is updated, Vercel rebuilds the live
site (hcs-website-ashen.vercel.app, later healthcredstat.com) automatically.

---

## 2. `frontend/` top level

| Folder or file | What it is | Purpose |
|---|---|---|
| `app/` | Pages and server endpoints | One folder per web address. See section 3. |
| `src/` | The site's code and content | `features/` (each part of the site) and `shared/` (common pieces). See sections 4 and 5. |
| `public/` | Files served as they are | Logos, icons, the email signature, the homepage video. See section 6. |
| `scripts/` | Helper tools run by hand or by GitHub | Image and video generation, speed checks, cache warm-up. See section 7. |
| `docs/` | Documentation | This guide and `ARCHITECTURE.md`. |
| `node_modules/` | Downloaded libraries | Created by `npm install`. Never edit; never commit. |
| `.next/` | Build output and caches | Created by Next.js when building or running the site. Safe to delete; it is rebuilt. |
| `package.json`, `package-lock.json` | The project's library list | Which libraries (Next.js, React, zod…) and exact versions the site uses, plus the `npm run …` commands. |
| `next.config.mjs` | Website settings | Security headers, how long browsers cache files, and redirects from old addresses (for example the removed Health Plans page goes to /services). |
| `eslint.config.mjs` | Code rules | Style rules, plus the structure rules in ARCHITECTURE.md. Breaking them fails the GitHub checks. |
| `tsconfig.json` | TypeScript settings | How the code is type-checked; lets code write `@/features/...` instead of long relative paths. |
| `.env.example` | List of settings and secrets the site needs | A template with explanations: Monday, Microsoft 365 email, Cloudflare Turnstile and so on. Safe to share; it holds no real values. |
| `.env.local` | Your real secrets, on this computer only | API keys and passwords. **Never commit, never paste anywhere.** On the live site the same values are stored in Vercel's settings. |
| `.nvmrc` | Node.js version | The version of Node.js the project expects (24). |

---

## 3. `frontend/app/`: the pages

Each folder here is a web address. The folder name becomes the URL; the `page.tsx` inside it is the page.
These files are deliberately short: they pick sections from `src/features/` and set the page title for Google.

| Path | Address on the site | What it shows |
|---|---|---|
| `(marketing)/page.tsx` | `/` | The home page. |
| `(marketing)/layout.tsx` | every page | The frame around every page: announcement bar, top menu, footer, Quick Answers chat. |
| `(marketing)/about/` | `/about` | About HealthCredSTAT. |
| `(marketing)/services/` | `/services` | Services overview. |
| `(marketing)/solutions/cvo-credentialing/` | `/solutions/cvo-credentialing` | Provider credentialing and primary source verification. |
| `(marketing)/who-we-help/provider-groups/` | `/who-we-help/provider-groups` | Page for medical groups and MSOs. |
| `(marketing)/who-we-help/health-systems/` | `/who-we-help/health-systems` | Page for health systems, hospitals and surgery centers. |
| `(marketing)/who-we-help/digital-health/` | `/who-we-help/digital-health` | Page for telehealth and digital health companies. |
| `(marketing)/pricing/` | `/pricing` | Plans and prices. |
| `(marketing)/faq/` | `/faq` | Frequently asked questions. |
| `(marketing)/guides/` | `/guides` | The guides library. |
| `(marketing)/guides/[slug]/` | `/guides/…` | One template for every guide article; `[slug]` means "any guide name". |
| `(marketing)/contact/` | `/contact` | The quote request form on its own page. |
| `(marketing)/privacy/`, `terms/` | `/privacy`, `/terms` | Privacy Policy and Terms of Service. |
| `(marketing)/sign-in/` | `/sign-in` | Holding page until the client portal is live. |
| `api/contact/` | `/api/contact` (not a page) | **The server side of the quote form.** Receives a submission, checks it for spam and repeats, creates the lead in Monday, and sends the welcome email. |

The `(marketing)` folder name is in brackets because it groups pages without adding a word to the address.

**Files directly in `app/`:**

| File | Purpose |
|---|---|
| `layout.tsx` | The outer HTML of every page: fonts, the company details Google reads, visitor statistics. |
| `globals.css` | Site-wide colors, fonts and spacing (the design "tokens"). |
| `not-found.tsx`, `error.tsx`, `loading.tsx` | The "page not found", "something went wrong" and loading screens. |
| `sitemap.ts`, `robots.ts` | The page list and crawler rules for Google and other search engines (`/sitemap.xml`, `/robots.txt`). |
| `opengraph-image.tsx` | The preview image shown when a link to the site is shared on LinkedIn, Teams, Slack and so on. |

---

## 4. `frontend/src/features/`: each part of the site

One folder per part of the site. Everything that part needs sits together, so a change to (say) pricing stays in
`features/pricing/`. Inside a feature you'll find some of these sub-folders:

| Sub-folder | Holds |
|---|---|
| `components/` | What appears on screen. Each component has a matching `.css` file for its styles. |
| `content/` | **The words and data**: headings, lists, prices, questions and answers. Edit here to change wording. |
| `styles/` | Styles shared by several components of that feature. |
| `hooks/` | Behavior with memory, such as the estimator's step-by-step answers. |
| `services/` | Talking to the outside world: Monday, email, Cloudflare. |
| `validation/` | Rules for form input (required fields, valid email…). |
| `lib/` | Supporting logic, such as the chat's question matching. |
| `index.ts` | The feature's front door: the only file pages are allowed to import from. |

### The features

| Feature | What it powers | Notable files |
|---|---|---|
| `home/` | The home page sections | `HeroSection` (headline and banner), `HeroDemo` (the portal walkthrough video), `WorkflowsSection`, `DashboardPreviewSection`, `BenefitsSection`, `ExpertiseSection` |
| `contact/` | **The quote request form** and everything behind it | `components/`: the two-step form (`RoleStep`, `DetailsStep`, `SuccessPanel`). `validation/contact.schema.ts`: the form's rules. `services/`: `monday.server.ts` (creates the Monday lead), `welcome-email.server.ts` (welcome email and backup alert through Microsoft 365), `turnstile.server.ts` (Cloudflare human check), `lead-guard.ts` (duplicate and repeat-request limits), `phone.ts` (phone formatting and country flags), `lead-source.ts` (which page the lead came from). `server.ts`: the server-only front door used by `app/api/contact`. |
| `quick-answers/` | The **Quick Answers** chat in the bottom corner | `content/answers.ts`: every question and answer it knows. `lib/matcher.ts`: matches what visitors type, including typos and synonyms. `HandoffForm`: the "talk to a specialist" form inside the chat. |
| `estimator/` | The **timeline estimator** on the home page | `hooks/useEstimator.ts` (the steps), `content/` (time ranges and plan names). |
| `pricing/` | The pricing table | `content/plans.ts`: plan names, prices and features. |
| `faq/` | The FAQ page | `content/faq.ts`: questions, answers and their topics. |
| `guides/` | The guides library and articles | `content/guides.ts`: every guide's text. Adding a guide there adds its page, its library card and its sitemap entry. |
| `solutions/` | Services and "Who we help" pages | `content/solutions.ts` and `content/audiences.ts`: the text of each page. `SolutionPage`: one shared page template. |
| `about/` | The About page sections | `content/about.ts`: story, principles, who we help. |
| `social-proof/` | Trust sections | Founding-client commitments; a testimonials section that stays hidden until real, approved quotes are added. |
| `legal/` | Privacy Policy and Terms | `content/legal.ts`: the full text of both. |

---

## 5. `frontend/src/shared/`: building blocks used everywhere

Pieces several features use. Shared code never depends on a feature, so it can be reused safely.

| Folder | Holds |
|---|---|
| `components/layout/` | The site frame: `Navbar` (top menu) and `NavDropdown` ("Who we help" menu), `Footer`, `AnnouncementBar`, `SearchDialog` (site search), `PageIntro` (the header at the top of inner pages), `NextSteps` (the "Next steps" links), `SectionHeader`, `BackToTop`. |
| `components/ui/` | Small reusable pieces: `Button`, `Badge`, `Icon`, `Spinner`, `BrandLogo` (picks the right logo size), `TurnstileWidget` (the human check), `Guilloche` (the certificate-style line patterns and verification seal), `FeatureText`. |
| `components/forms/` | Form fields: `Input`, `TextArea` and their styles. |
| `components/seo/` | `JsonLd`: adds the hidden company and FAQ details Google reads. |
| `config/` | **Settings in one place.** `navigation.ts`: every menu, footer and search link. `env.config.ts`: the public settings read from the environment (site address, portal address, Turnstile key). |
| `lib/` | `seo.ts`: helpers for page titles, descriptions and Google's structured data. |
| `styles/` | `common.css`: styles used by more than one feature, such as buttons and the page-header look. |

---

## 6. `frontend/public/`: files served as they are

Anything here is available at the same path on the site (for example `public/brand/icon-32.png` is
`/brand/icon-32.png`).

| Folder or file | Holds | Notes |
|---|---|---|
| `brand/` | **Generated** logo and icon copies at the sizes the site uses (WebP logos, favicons). | Do not edit by hand. Replace the original artwork and run `npm run brand-assets` (see `scripts/`). |
| `media/hero/` | The home page video (`story.webm`, `story.mp4`) and its still images (`story-poster-720/1280.webp`). | Made with the tools in `scripts/hero-video/`. After replacing them, bump `VERSION` in `src/features/home/components/HeroDemo.tsx` so browsers fetch the new files. |
| `email/` | `signature.png`: the signature image in the welcome email. | Email apps cache it, so bump `?v=` in `app/api/contact/route.ts` when it changes. |
| `healthcredstat-logo.png`, `healthcredstat-logo-white.png` | The **original** logo artwork (color and white). | Source for the generated copies in `brand/`, and the fallback for old browsers. |
| `logo-mark.png` | The X symbol on its own. | Source for the favicons. |
| `logo.png`, `logo-white.png`, `logo-full.png`, `logo-horizontal.png`, `logo-horizontal-white.png` | Other logo versions. | Not currently used by the site; kept as spare artwork. |

---

## 7. `frontend/scripts/`: helper tools

Tools a person (or GitHub) runs; they are not part of the pages.

| File or folder | What it does | How to run |
|---|---|---|
| `brand-assets.mjs` | Makes the sized logo and favicon copies in `public/brand/` from the original artwork. | `npm run brand-assets` |
| `speed-check.mjs` | Measures how fast each page in the sitemap answers. | `npm run speed -- <site address>` |
| `warm-cache.mjs` | Opens every page once so Vercel caches it near you. GitHub runs it after each update. | `npm run warm` |
| `hero-video/` | Makes the home page video. `portal-demo.html` is the portal walkthrough, drawn as a web page; `portal-render.mjs` records it frame by frame; `compose.mjs` joins it with the opening and closing footage. `scene.html` and `render.mjs` made an earlier, retired version of the video and are kept for reference. | Instructions are at the top of each file. |

---

## Common tasks: where to go

| I want to… | Go to |
|---|---|
| Change wording on a page | That feature's `content/` file (for example `src/features/pricing/content/plans.ts`) |
| Add or edit a FAQ | `src/features/faq/content/faq.ts` |
| Add a Quick Answers topic | `src/features/quick-answers/content/answers.ts` |
| Add a guide | `src/features/guides/content/guides.ts` |
| Change the menu or footer links | `src/shared/config/navigation.ts` |
| Change what the quote form asks | `src/features/contact/components/` and `validation/contact.schema.ts` |
| Change what goes to Monday or the welcome email | `src/features/contact/services/` |
| Change colors or fonts site-wide | `app/globals.css` |
| Redirect an old address | `next.config.mjs` (`redirects`) |
| Add a secret or setting | `.env.local` on your computer and Vercel's Environment Variables; document it in `.env.example` |
