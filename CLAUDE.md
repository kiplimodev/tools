
# DENSTAR FITNESS TOOLS
Deterministic Fitness & Performance Calculators

This repository defines a permanent, scalable, refactor-proof fitness calculator platform.

The goal is not rapid experimentation.  
The goal is correctness, permanence, and world-class scalability from day one.

---

## Mission

Build a deterministic fitness calculator platform that:

- Supports 40+ calculators at launch, 100+ long-term
- Preserves SEO URLs permanently
- Uses pure, testable domain logic
- Requires zero architectural changes to support:
  - Firebase Auth
  - Firestore
  - Saved results
  - Mobile apps
  - AI agents
- Prevents refactor spirals
- Enforces correctness by structure, not discipline

---

## Non-Goals (Intentional)

This MVP explicitly does not include:

- Firebase wiring
- User accounts
- Saved results
- Charts or graphs
- Advanced validation libraries
- Custom calculator UIs
- AI features

The architecture already supports these.  
They are out of scope for MVP.

---

## Locked Tech Stack (No Substitutions)

### Frontend Core
- **Next.js 16** (App Router) — SSR, RSC, built-in sitemap, OG image, and metadata APIs
- **React 19** — Concurrent rendering, React Compiler (babel-plugin-react-compiler enabled)
- **TypeScript 5** (strict mode) — Non-negotiable. Zero `any` types in production code.

### Styling
- **Tailwind CSS v4** — Utility-first, fastest build times, no CSS-in-JS
- **tailwind-merge** — Resolves Tailwind class conflicts in component variants
- **class-variance-authority (cva)** — Typed component variant system
- **clsx** — Conditional class assembly
- No CSS-in-JS. No CSS Modules. No styled-components.

### UI Components
- **shadcn/ui** — Radix UI primitives + Tailwind. Copy-paste accessible components. No vendor lock-in.
  - Used for: Slider, Select, Toggle, Dialog, Tooltip, Form primitives
  - Reason: Saves hundreds of hours vs building accessible components from scratch
- **Lucide React** — Icon library (same source as shadcn/ui)
- **Geist** (self-hosted via `next/font/local`) — Primary typeface

### Forms and Validation
- **react-hook-form** — Performant, uncontrolled forms
- **@hookform/resolvers** — Connects react-hook-form to Zod
- **Zod** — Schema definition and parsing for URL params → typed `Input` objects. Single source of truth for input shape.

### State
- **URL search params** — The only state store for calculator inputs
- **React Server Components** — Default for all pages
- **No global client state** — No Redux, no Zustand, no Context for calculator data

### Testing
- **Vitest** — Unit tests for calculator domain logic only
- **Playwright** — E2E smoke tests to verify every tool URL loads without error
- No UI component tests. No snapshot tests.

### Observability
- **@vercel/analytics** — Page-level traffic analytics (privacy-first, no cookie banner needed)
- **@vercel/speed-insights** — Core Web Vitals monitoring per page (Google ranking signal)
- **Sentry** (post-MVP) — Production error tracking

### SEO Infrastructure
- **Built-in Next.js `sitemap.ts`** — Auto-generated sitemap from the tool registry
- **Built-in Next.js `robots.ts`** — Crawl directives
- **`@vercel/og`** — Dynamic Open Graph images per tool (shows tool name, category, brand)
- **`generateMetadata`** on every page — title, description, OG tags

### CI/CD
- **GitHub Actions** — Run type-check + lint + Vitest + Playwright smoke tests on every PR
- **Vercel** — Automatic deployments on push to `main`. Preview deployments on every PR.

### Backend (Deferred — No Refactor Required)
⚠️ **Architecture decision pending before any backend work begins:**

**Option A — Firebase (original plan)**
- Firebase Auth, Firestore, Cloud Functions, Firebase Analytics
- Pros: Fastest to implement
- Cons: Firestore is NoSQL — fitness data is naturally relational. Poor fit at scale.

**Option B — Neon + Drizzle (recommended)**
- Neon (serverless PostgreSQL, Vercel-native, free tier)
- Drizzle ORM (TypeScript-native, no magic, type-safe SQL)
- Pros: Proper relational data, better for body metrics/progress tracking, Vercel-native
- Cons: Slightly more setup than Firebase

**This decision must be made and locked in CLAUDE.md before any backend work begins. Do not start backend work without resolving this.**

### Package Install Reference

```bash
cd web

# Core missing packages (install immediately)
npm install react-hook-form zod lucide-react tailwind-merge class-variance-authority

# Vitest (the test runner that was missing)
npm install -D vitest @vitest/ui

# Vercel observability (zero config)
npm install @vercel/analytics @vercel/speed-insights

# OG images
npm install @vercel/og

# E2E tests
npm install -D @playwright/test
npx playwright install chromium

# shadcn/ui (interactive CLI - run once to initialize)
npx shadcn@latest init
```

This stack is final for MVP.

---

## Architectural Philosophy (Locked)

Calculators are write-once, deterministic computation engines.  
All evolution happens around them, never inside them.

This architecture follows patterns used in financial engines, scientific computation, medical calculators, and risk systems.

---

## Calculator Engine Contract (Immutable)

### Calculator v1 — Numeric Deterministic Engines

```ts
// /src/lib/types/calculator.v1.ts
export type CalculatorV1<Input> = (input: Input) => number | null;
```

### Rules

* Returns one number or null
* number means a valid deterministic result
* null means the calculation cannot be completed with the given input
* No throwing
* No async
* No side effects
* No formatting
* No metadata
* No Firebase
* No UI logic

This contract must never change.

---

### Calculator v2 — Multi-Output Deterministic Engines

Some calculators produce multiple related numbers (e.g. VDOT zones, macro breakdowns, multi-formula 1RM). Use CalculatorV2 for these.

```ts
// /src/lib/types/calculator.v2.ts
export type CalculatorV2<Input, Output extends Record<string, number | null>> =
  (input: Input) => Output | null;
```

### V2 Rules

* Returns a typed output object or null (never a partial object)
* Every field in Output is `number | null`
* null return means the entire calculation cannot be completed
* A field value of null means that specific sub-result is indeterminate
* Same prohibitions as V1: no throwing, no async, no side effects, no formatting, no UI logic

### Which contract to use

| Calculator type | Contract |
|---|---|
| Single result (BMI, pace, calories) | CalculatorV1 |
| Multiple related numbers (1RM formulas, macros, VDOT zones, powerlifting scores) | CalculatorV2 |
| Structured non-numeric output (meal plans, workout programs) | Composition layer only — not a raw calculator |

### Calculators that use V2

* `1-rep-max-calculator` — Epley, Brzycki, Lombardi, O'Conner, Lander results
* `vdot-calculator` — VDOT value + training pace zones
* `running-splits-calculator` — per-km and per-mile splits array (encode as indexed keys: split_1, split_2…)
* `powerlifting-calculator` — DOTS, Wilks, IPF GL
* `ideal-weight-calculator` — Devine, Hamwi, Robinson, Miller
* `bulk-calculator` — calories, protein, carbs, fat
* `lean-bulk-calculator` — calories, protein, carbs, fat
* `tdee-calculator` — BMR, TDEE, activity multiplier
* `body-fat-calculator` — body fat percentage, fat mass, lean mass
* `body-recomposition-calculator` — projected fat mass, lean mass, duration
* `starbucks-macro-calculator` — calories, protein, carbs, fat
* `carnivore-macro-calculator` — calories, protein, carbs, fat
* `subway-macro-calculator` — calories, protein, carbs, fat
* `interval-calculator` — interval time, rest time, total workout time
* `rpe-calculator` — predicted weight at RPE, predicted reps at RPE

---

## Semantic Meaning of null

null means:

“With the given input, this calculation cannot be completed deterministically.”

It does not mean error, warning, partial result, or invalid user.

---

## Final Calculator Structure (Mandatory)

Every calculator must follow this structure exactly:

```
/src/lib/calculators/<category>/<tool>/
├── index.ts
├── calculator.ts
├── types.ts
└── test.ts
```

Rules:

* No missing files
* No extra files
* No alternative naming (`utils.ts`, `logic.ts`, `helpers.ts` are all forbidden)
* No default exports

This structure is final.

---

## Naming Conventions (Mandatory)

### File names

The four files are always: `index.ts`, `calculator.ts`, `types.ts`, `test.ts`. No other names are valid.

### Exported function name

The calculator function exported from `calculator.ts` is always named `calculator`. No exceptions.

```ts
// calculator.ts
export function calculator(input: Input): number | null { ... }

// or for V2:
export function calculator(input: Input): Output | null { ... }
```

### Type names

Input and output types in `types.ts` are always named `Input` and `Output`. Not `BMIInput`, not `TDEEOutput`.

```ts
// types.ts
export type Input = { ... };
export type Output = { ... };  // Only for CalculatorV2
```

### index.ts re-export pattern

```ts
// CalculatorV1
export { calculator } from "./calculator";
export type { Input } from "./types";

// CalculatorV2
export { calculator } from "./calculator";
export type { Input, Output } from "./types";
```

Consuming code always imports like:

```ts
import { calculator } from "@/lib/calculators/running/running-pace-calculator";
import type { Input } from "@/lib/calculators/running/running-pace-calculator";
```

---

## Public API Rule (Critical)

index.ts is the only allowed import surface.

```ts
export { calculator } from "./calculator";
export type { Input } from "./types";
```

UI, tests, Firebase, APIs, and AI agents may only import from index.ts.
They may never import internal files.

---

## Composition Layer (Sanctioned Evolution Path)

Calculators never grow smarter.
Composition does.

```
/src/lib/composition/
├── running/
├── calories/
├── strength/
├── nutrition/
└── types.ts
```

Composition may:

* Call multiple calculators
* Return objects
* Add units, ranges, warnings
* Adapt results for UI, APIs, and AI

Calculators may never depend on composition.

### Composition Type Contract

```ts
// /src/lib/composition/types.ts

export type CompositionResult<T> = {
  data: T;
  meta?: {
    warnings?: string[];
    ranges?: Record<string, { min: number; max: number }>;
    units?: Record<string, string>;
  };
};
```

Composition functions always return `CompositionResult<T> | null`.

Example:

```ts
// /src/lib/composition/nutrition/bulk.ts
import type { CompositionResult } from "../types";

export type BulkPlan = {
  calories: number;
  protein: number;
  carbs: number;
  fat: number;
};

export function composeBulkPlan(input: BulkInput): CompositionResult<BulkPlan> | null {
  // calls bulk-calculator and tdee-calculator internally
}
```

### Composition for Planners and Generators

`meal-plan-generator`, `workout-generator`, and `home-workout-generator` live entirely in the composition layer. They have no raw calculator. Their folder structure is:

```
/src/lib/composition/planners/
├── meal-plan-generator.ts
├── workout-generator.ts
└── types.ts
```

They are not subject to the CalculatorV1/V2 contract. They may return rich structured objects.

---

## Dependency Direction (Law)

Allowed:

```
UI → Composition → Calculators → Types
Tests → index.ts only
```

Forbidden:

```
Calculator → UI
Calculator → Composition
Calculator → Firebase
Calculator → Formatting
Calculator → Env
```

Violations are architectural failures.

---

## Unit System Convention (Mandatory)

### Rule: Calculators are SI-only

All calculator functions accept raw SI units exclusively:

| Quantity | Unit |
|---|---|
| Weight / Mass | kilograms (kg) |
| Distance | meters (m) |
| Height | meters (m) |
| Time | seconds (s) |
| Speed | meters per second (m/s) |
| Body measurements | centimeters (cm) |

Calculators never accept pounds, miles, feet, inches, or minutes directly.

### Rule: The UI layer owns unit conversion

The UI converts user-facing inputs (imperial/metric) into SI before calling a calculator. The UI converts SI outputs back into user-facing units for display.

Unit conversion utilities live in:

```
/src/lib/units/
├── length.ts      // m ↔ ft, m ↔ in, km ↔ mi
├── weight.ts      // kg ↔ lb
├── time.ts        // s ↔ mm:ss, s ↔ hh:mm:ss
└── index.ts
```

### Rule: URL params store SI values

URL search params always store raw SI values, not display values.

```
/tools/running/running-pace-calculator?distance=5000&time=1200
```

Not:

```
/tools/running/running-pace-calculator?distance=5km&time=20:00
```

The UI layer reads SI from the URL, converts to display units for the form, and writes SI back to the URL on change.

### Rule: Unit preference is a URL param

When a tool supports both metric and imperial display, the selected unit system is stored as a URL param:

```
?unit=metric   (default)
?unit=imperial
```

---

## Tool Registry Specification

Every tool must be registered so the sidebar and dynamic routing know it exists.

### ToolMeta interface

```ts
// /src/registry/types.ts
export type ToolMeta = {
  slug: string;          // "running-pace-calculator"
  category: string;      // "running"
  title: string;         // "Running Pace Calculator"
  description: string;   // One sentence. Used for SEO meta description.
  path: string;          // "/tools/running/running-pace-calculator"
};
```

### Registry file

```ts
// /src/registry/registry.ts
import type { ToolMeta } from "./types";

export const registry: ToolMeta[] = [
  {
    slug: "running-pace-calculator",
    category: "running",
    title: "Running Pace Calculator",
    description: "Calculate your running pace, speed, and finish time for any distance.",
    path: "/tools/running/running-pace-calculator",
  },
  // ... all 40+ tools
];
```

### Rules

* Registry uses a plain static array. No `require()`. No dynamic imports. No CommonJS.
* Every tool listed in the URL structure section must have an entry.
* The registry is the only place tool metadata is defined.
* Sidebar reads from the registry. Dynamic page routes read from the registry.

### Helper functions

```ts
// /src/registry/index.ts
export { registry } from "./registry";
export type { ToolMeta } from "./types";

export function getToolsByCategory(category: string): ToolMeta[];
export function getTool(slug: string): ToolMeta | undefined;
export function getAllCategories(): string[];
```

---

## UI Architecture Specification

### Component tree

```
<ToolPage>                      ← Next.js Server Component (RSC)
  <CalculatorLayout>            ← Client Component ("use client")
    <CalculatorForm>            ← reads/writes URL params
      <InputField />            ← individual form inputs
    </CalculatorForm>
    <ResultDisplay>             ← reads result, handles null
      <ResultCard />            ← displays one result row
    </ResultDisplay>
  </CalculatorLayout>
```

### CalculatorLayout props contract

```ts
type CalculatorLayoutProps<I, O> = {
  title: string;
  description: string;
  calculator: (input: I) => O | null;        // V1: O = number; V2: O = Record<string, number | null>
  fields: FieldConfig<I>[];
  renderResult: (result: O) => React.ReactNode;
};
```

### FieldConfig

```ts
type FieldConfig<I> = {
  name: keyof I;           // maps to URL param name and Input field
  label: string;
  type: "number" | "select" | "toggle";
  unit?: string;           // display unit label (e.g. "kg", "km")
  min?: number;
  max?: number;
  options?: { label: string; value: string }[];  // for select/toggle
  required: boolean;
};
```

### URL param ↔ form ↔ calculator flow

1. Page loads → read URL search params → parse into `Input` (SI values)
2. Render form pre-filled with display-unit values converted from SI
3. User changes a field → convert to SI → write back to URL (replaceState, no navigation)
4. On every render → call `calculator(input)` → pass result to `renderResult`
5. If any required field is missing or invalid → pass `null` directly, skip calculator call

### CalculatorLayout is always a Client Component

CalculatorLayout must have `"use client"` at the top. The page wrapping it is a Server Component and passes only serializable props.

### Null result rendering (Mandatory)

When the calculator returns null or a required field is empty:

* Show a neutral placeholder — the result area displays `"—"` or `"Enter values above"`
* Never show an error message for null (null is not an error — see Semantic Meaning of null)
* Never show NaN, Infinity, or undefined in the UI

---

## SEO Metadata Specification

Every tool page must export a `generateMetadata` function.

```ts
// /src/app/tools/[category]/[toolid]/page.tsx
import type { Metadata } from "next";
import { getTool } from "@/registry";

export async function generateMetadata({ params }): Promise<Metadata> {
  const tool = getTool(params.toolid);
  return {
    title: `${tool.title} | Denstar Fitness`,
    description: tool.description,
    openGraph: {
      title: `${tool.title} | Denstar Fitness`,
      description: tool.description,
      url: `https://denstar.fitness${tool.path}`,
    },
  };
}
```

The `description` field in `ToolMeta` is the SEO meta description. It must be:

* One sentence
* Between 120–160 characters
* Action-oriented (start with a verb: "Calculate...", "Find...", "Estimate...")

---

## MVP Scope Clarification: Planners, Trackers, and Generators

### Planners (`/tools/planners/`)

`meal-plan-generator` and `workout-generator` are out of scope for MVP calculation logic.

MVP behavior: render a full-page "Coming Soon" placeholder that preserves the URL. The page must exist and compile. No calculator logic required for MVP.

### Trackers (`/tools/trackers/`)

`weight-tracker` requires persistence (Firestore) and is intentionally deferred.

MVP behavior: render a "Coming Soon" placeholder. The URL must be live and the page must compile.

### Calisthenics generators

`home-workout-generator` follows the same rule as planners — composition-layer logic, MVP stub is acceptable.

### Coming Soon page contract

```ts
// Reusable stub for deferred tools
// /src/components/ComingSoon.tsx
export function ComingSoon({ title }: { title: string }) {
  return (
    <div>
      <h1>{title}</h1>
      <p>This tool is coming soon.</p>
    </div>
  );
}
```

---

## Build and Dev Runbook

All commands run from inside the `/web` directory.

```bash
cd web

# Development
npm run dev          # starts Next.js dev server on localhost:3000

# Type checking
npx tsc --noEmit     # must pass with zero errors before any commit

# Linting
npm run lint         # must pass with zero errors before any commit

# Tests
npm run test         # runs Vitest against all *.test.ts files in src/lib/

# Production build
npm run build        # must succeed before deployment

# All checks (run before opening a PR)
npx tsc --noEmit && npm run lint && npm run test && npm run build
```

### Deployment

Hosting is on Vercel. No `vercel.json` is required for default Next.js App Router projects.

* Push to `main` triggers automatic Vercel deployment
* The build command Vercel runs: `npm run build`
* Output directory: `.next` (Vercel auto-detects this)
* Root directory setting in Vercel dashboard: `web`

### Pre-merge checklist

- [ ] `npx tsc --noEmit` — zero errors
- [ ] `npm run lint` — zero errors
- [ ] `npm run test` — all tests pass
- [ ] `npm run build` — build succeeds
- [ ] All new calculators follow the mandatory folder structure
- [ ] All new calculators registered in `/src/registry/registry.ts`
- [ ] No `require()` or CommonJS in any file

---

## Routing and SEO (Immutable)

* URLs are the SEO source of truth
* Folder paths under /src/app/tools/** must never change
* Calculator logic is not tied to routing
* Deprecated tools remain accessible or are externally redirected

---

## Official Tool Categories and URL Structure (Locked)

### Running and Cardio Performance

/tools/running/

* running-pace-calculator
* running-splits-calculator
* split-calculator
* interval-calculator
* vdot-calculator

### Calories Burned and Energy Expenditure

/tools/calories/

* rowing-calories-calculator
* swimming-calories-calculator
* treadmill-calorie-calculator
* walking-calorie-calculator
* running-calories-burned-calculator
* bike-calorie-calculator
* steps-to-calories-calculator

### Body Composition and Health Metrics

/tools/body-composition/

* body-fat-calculator
* lean-body-mass-calculator
* bmi-calculator
* ideal-weight-calculator
* waist-to-height-ratio-calculator
* waist-to-hip-ratio-calculator
* body-measurement-calculator
* body-recomposition-calculator

### Daily Activity and Move Goals

/tools/activity/

* steps-per-day-calculator
* move-goal-calculator

### Strength Training and Powerlifting

/tools/strength/

* barbell-calculator
* plate-weight-calculator
* powerlifting-calculator
* 1-rep-max-calculator
* training-volume-calculator
* strength-ratio-calculators
* rpe-calculator

### Calisthenics and Bodyweight

/tools/calisthenics/

* push-up-calculator
* pull-up-calculator
* home-workout-generator

### Diet and Nutrition

/tools/nutrition/

* fat-intake-calculator
* creatine-calculator
* protein-powder-calculator
* bulk-calculator
* lean-bulk-calculator
* intermittent-fasting-calculator
* tdee-calculator
* starbucks-macro-calculator
* carnivore-macro-calculator
* subway-macro-calculator

### Meal Planning and Generators

/tools/planners/

* meal-plan-generator
* workout-generator

### Tracking and Measurement

/tools/trackers/

* weight-tracker

### Equipment and Load Conversion

/tools/equipment/

* dumbbell-weight-calculator

---

## Testing Requirements

### test.ts structure

Each calculator's `test.ts` must use Vitest and import only from `index.ts`:

```ts
import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("running-pace-calculator", () => {
  it("returns pace for valid input", () => {
    const result = calculator({ distanceMeters: 5000, timeSeconds: 1200 });
    expect(result).not.toBeNull();
    expect(typeof result).toBe("number");
  });

  it("returns null for zero distance", () => {
    const result = calculator({ distanceMeters: 0, timeSeconds: 1200 });
    expect(result).toBeNull();
  });
});
```

### V2 calculator tests

```ts
it("returns all fields for valid input", () => {
  const result = calculator({ weight: 100, reps: 5 });
  expect(result).not.toBeNull();
  expect(typeof result!.epley).toBe("number");
  expect(typeof result!.brzycki).toBe("number");
});
```

### Rules

* At least 2 tests per calculator: one valid input, one null-producing input
* Import only from `./index` (never from `./calculator` or `./types` directly)
* No snapshot tests
* No UI tests
* No mocking of the calculator function itself

---

## MVP Completion Criteria (Final)

The MVP is complete when:

* All listed tools compile
* All calculators follow identical structure
* No runtime errors occur in CalculatorLayout
* All imports go through index.ts
* URLs remain unchanged
* Logic is pure and testable
* Adding a new calculator takes less than 10 minutes

---

## Governance Rule (Final Lock)

Any change that weakens these rules is considered a rewrite, not a refactor, and must be rejected.

---

## Project Execution Plan (Living Document)

This section tracks implementation progress. Status updates here as each phase is completed.

### Phase 0 — Foundation Fix (Unblock the Build)

**Goal:** Make `npm run build` pass with zero errors.

- [ ] Install all missing packages (`zod`, `react-hook-form`, `vitest`, `lucide-react`, `tailwind-merge`, `cva`)
- [ ] Fix `bulk-calculator` export: rename `calculateBulkCalories` → `calculator` and export via `index.ts`
- [ ] Fix `lean-bulk-calculator` empty index: implement and export `calculator`
- [ ] Rewrite `/src/registry/registry.ts` from CommonJS `require()` to a static ES6 array
- [ ] Rewrite `/src/registry/getTool.ts` to use ES6 imports, remove `module` assignment
- [ ] Fix `CalculatorLayout.tsx` `any` types — use proper generics
- [ ] Fix empty interface declarations in `types.ts` files
- [ ] Remove placeholder "Deploy to Vercel" link from `layout.tsx`
- [ ] Fix "React 18" text in footer (`layout.tsx:56`) → "React 19"
- [ ] Run `npx tsc --noEmit` and `npm run lint` — both must pass

### Phase 1 — Standardize All Calculators

**Goal:** All 40+ calculators follow identical structure with correct file names, types, and exports.

- [ ] Audit every calculator folder — flag any not following: `index.ts`, `calculator.ts`, `types.ts`, `test.ts`
- [ ] Rename all `utils.ts` → `calculator.ts`
- [ ] Rename all calculator functions to `calculator`
- [ ] Rename all input/output types to `Input` / `Output`
- [ ] Implement V2 contract for all 15 multi-output calculators (see V2 list in Calculator Engine Contract)
- [ ] Ensure all `index.ts` files follow the re-export pattern
- [ ] Write `test.ts` for every calculator (minimum 2 tests each)
- [ ] Run `npm run test` — all tests must pass

### Phase 2 — Registry and Sitemap

**Goal:** Every tool is registered. Sidebar is driven by registry. Sitemap is auto-generated.

- [ ] Write complete `registry.ts` with all 40+ tool entries (title, slug, category, description, path)
- [ ] Write `src/app/sitemap.ts` that generates from registry
- [ ] Write `src/app/robots.ts`
- [ ] Verify sidebar reads from registry (no hardcoded tool lists anywhere)
- [ ] Verify homepage pulls all tools from registry

### Phase 3 — CalculatorLayout and UI

**Goal:** Every tool page renders correctly, handles null gracefully, and has full SEO metadata.

- [ ] Implement typed `CalculatorLayout<I, O>` with `FieldConfig` contract
- [ ] Implement URL param ↔ form ↔ calculator data flow
- [ ] Implement null result placeholder rendering
- [ ] Implement `ComingSoon` component for deferred tools
- [ ] Add `generateMetadata` to every tool page
- [ ] Install shadcn/ui and wire up form primitives
- [ ] Install `@vercel/og` and create OG image route for tools

### Phase 4 — Observability and SEO

**Goal:** Analytics, speed monitoring, and rich search results in place before launch.

- [ ] Add `<Analytics />` from `@vercel/analytics` to `layout.tsx`
- [ ] Add `<SpeedInsights />` from `@vercel/speed-insights` to `layout.tsx`
- [ ] Verify sitemap is accessible at `/sitemap.xml`
- [ ] Verify OG images render at `/api/og?tool=<slug>`
- [ ] Submit sitemap to Google Search Console

### Phase 5 — CI/CD and Deployment

**Goal:** Every PR is automatically validated. Main branch is always deployable.

- [ ] Create `.github/workflows/ci.yml` — runs type-check, lint, Vitest, Playwright smoke tests
- [ ] Connect GitHub repo to Vercel project (root directory: `web`)
- [ ] Verify Vercel preview deployments work on PRs
- [ ] Verify production deployment on push to `main`
- [ ] Run Lighthouse on key pages — target 95+ Performance, 100 SEO, 100 Accessibility
- [ ] Tag `v1.0.0` release

### Known Bugs to Fix

| File | Bug | Priority |
|---|---|---|
| `layout.tsx:56` | Footer says "React 18" — project is on React 19 | Low |
| `layout.tsx:38` | "Deploy to Vercel" starter artifact — remove | Low |
| `page.tsx:127` | "View roadmap" → `https://github.com` placeholder | Low |
| `page.tsx:3-16` | Homepage tools hardcoded to 2 items — pull from registry | High |
| `registry.ts` | 42 `require()` calls — rewrite as static ES6 array | Critical |
| `bulk-calculator` | Wrong export name `calculateBulkCalories` | Critical |
| `lean-bulk-calculator` | Empty index.ts | Critical |
| `CalculatorLayout.tsx` | `any` types on lines 15, 23, 38 | High |

---