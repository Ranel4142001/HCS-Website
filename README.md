# HealthCredSTAT Website

Public marketing website for HealthCredSTAT, built with **Next.js 16 (App Router)**.
The client portal is a separate application; this site links to it via `NEXT_PUBLIC_PORTAL_URL`.

---

## Project Structure

```text
hcstatservices-portal/
├── apps/
│   └── frontend/            # Next.js website (deployed to Vercel)
│       ├── app/             # Routes only: compose features into pages, metadata, sitemap
│       ├── src/
│       │   ├── features/    # One folder per part of the site (home, solutions, pricing, contact…)
│       │   └── shared/      # UI components, layout, navigation config, SEO helpers
│       ├── public/          # Images and original logo artwork (brand/: generated, sized copies)
│       ├── scripts/         # brand-assets.mjs: regenerates public/brand from the logos
│       └── .env.example     # Environment variables template
├── docs/ARCHITECTURE.md     # How the code is organized and the rules that keep it that way
├── .github/workflows/       # CI: type-check, lint, build
├── package.json             # npm workspace root
└── .nvmrc                   # Node.js version (24)
```

Read [docs/ARCHITECTURE.md](docs/ARCHITECTURE.md) before adding features: it explains where code goes,
and ESLint enforces the dependency rules.

---

## Getting Started

```bash
npm install          # install dependencies
npm run dev          # http://localhost:3000
npm run build        # production build
npm run lint         # ESLint (includes architecture rules)
npm run typecheck    # TypeScript
npm run start        # serve the production build
```

For local settings, copy `apps/frontend/.env.example` to `apps/frontend/.env.local`.

---

## Routes

| URL | Description |
| :--- | :--- |
| `/` | Landing page |
| `/about`, `/services`, `/pricing`, `/faq`, `/contact` | Core pages |
| `/solutions/*` | Solution pages (CVO, enrollment, roster, delegated, privileging, licensing) |
| `/who-we-help/*` | Audience pages |
| `/resources/*`, `/company/*` | Resources and company pages |
| `/sitemap.xml`, `/robots.txt` | Generated for search engines |

## Deployment (Vercel + GoDaddy DNS)

The marketing website is deployed on its own. The client portal is a separate app and is deployed separately
(e.g. `portal.healthcredstat.com`).

### 1. Push to GitHub
Create a repository under the company GitHub organization and push this folder (`main` branch).
The CI workflow in `.github/workflows/ci.yml` type-checks and builds every push and pull request.

### 2. Import into Vercel
- **Add New → Project →** pick the repository.
- **Root Directory:** `apps/frontend`
- Framework preset is detected as Next.js; leave build settings at their defaults.
- Node.js version comes from `engines` in `package.json` (24.x).

### 3. Environment variables (Vercel → Project → Settings → Environment Variables)

| Name | Value | Notes |
| :--- | :--- | :--- |
| `NEXT_PUBLIC_SITE_URL` | `https://healthcredstat.com` | Canonical URLs, sitemap, robots, social previews |
| `NEXT_PUBLIC_PORTAL_URL` | e.g. `https://portal.healthcredstat.com` | Leave unset until the portal is live — "Sign In" links stay hidden |

Redeploy after changing variables; `NEXT_PUBLIC_*` values are baked in at build time.

### 4. Connect the domain
- Vercel → Project → **Settings → Domains**: add `healthcredstat.com` and `www.healthcredstat.com`.
- GoDaddy → **My Products → DNS** for healthcredstat.com: add the **A** record (`@`) and **CNAME** (`www`)
  exactly as Vercel shows them. Remove any old GoDaddy "Parked" / forwarding records for `@` and `www`.
- HTTPS certificates are issued automatically once DNS resolves (minutes to a few hours).

### 5. After launch
- Submit `https://healthcredstat.com/sitemap.xml` in Google Search Console.
- Check that the contact form is connected (see below).

### Pre-launch checklist
- [ ] Contact form connected to the CRM — `src/features/contact/services/contact.service.ts` is currently a **simulation** and sends nothing
- [ ] Privacy Policy, Terms of Service and BAA pages written and linked from the footer
- [ ] Marketing claims, ratings, testimonials and press mentions verified
- [ ] `NEXT_PUBLIC_SITE_URL` set in Vercel
