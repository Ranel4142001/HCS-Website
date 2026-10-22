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
