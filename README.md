# HealthCredSTAT Monorepo

Enterprise Healthcare Credentialing SaaS Platform built with **Next.js App Router + Clean Architecture**.

---

## Project Structure

```text
hcstatservices-portal/
├── apps/
│   ├── frontend/          # Next.js 15 App Router Client Application
│   │   ├── app/           # App Router routes, layouts, pages
│   │   ├── src/
│   │   │   ├── domain/          # Pure business models & contracts (framework-agnostic)
│   │   │   ├── application/     # Use cases & DTOs
│   │   │   ├── infrastructure/  # API client & repository implementations
│   │   │   ├── features/        # Feature modules (landing, estimator, contact, auth)
│   │   │   └── shared/          # UI components, hooks, utils, types
│   │   ├── public/        # Static assets & images
│   │   └── package.json
│   └── backend/           # Future enterprise API service (NestJS/Prisma)
│       └── package.json
├── package.json           # Monorepo workspace root
└── tsconfig.json          # Root TypeScript references config
```

---

## Getting Started

### Install Dependencies

```bash
npm install
```

### Run Development Server

```bash
npm run dev
```

Opens at **http://localhost:3000**

### Production Build

```bash
npm run build
```

### Start Production Server

```bash
npm run start
```

---

## Architecture

This project follows **Clean Architecture** with strict dependency inversion:

| Layer | Description |
| :--- | :--- |
| **Domain** (`src/domain/`) | Pure entities, value objects, repository interfaces. Zero framework deps. |
| **Application** (`src/application/`) | Use cases and DTOs. Orchestrates business workflows. |
| **Infrastructure** (`src/infrastructure/`) | HTTP clients, concrete API repositories, storage adapters. |
| **Features** (`src/features/`) | Feature-scoped UI components, hooks, services, validation. |
| **Shared** (`src/shared/`) | Cross-feature design system primitives and utility hooks. |
| **App Router** (`app/`) | Next.js pages, route groups, layouts. Thin presentation layer. |

---

## Routes

| URL | Description |
| :--- | :--- |
| `/` | Public landing page (marketing) |
| `/login` | Client portal authentication |
| `/dashboard` | Credentialing overview dashboard |
| `/providers` | Provider roster management |
| `/organizations` | Organization & facility directory |
| `/credentialing` | Application & payor tracker |
| `/documents` | Secure HIPAA document vault |
| `/settings` | Practice & system configuration |

---

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
