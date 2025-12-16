
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

### Frontend
- Next.js 15 (App Router)
- React 19
- TypeScript (strict)

### Styling
- Tailwind CSS v4
- No CSS-in-JS

### State
- URL search params
- React Server Components
- No global client state

### Backend (Later, No Refactor Required)
- Firebase Auth
- Firestore
- Firebase Analytics
- Cloud Functions

### Hosting
- Vercel

### Testing
- Vitest
- Domain logic only

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
````

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
* No alternative naming
* No default exports

This structure is final.

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

Each calculator must:

* Have at least 1–2 Vitest tests
* Import only from index.ts
* Validate:

  * valid input returns a number
  * invalid input returns null

No snapshot tests.
No UI tests.

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