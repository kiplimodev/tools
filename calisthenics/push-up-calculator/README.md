# Push-Up Calculator

## Description
Estimates push-up strength metrics including effective load, 1RM projection, strength score, progression tier, calories burned, and optional rep predictions when aiming for a goal set size.

## Inputs
- `bodyWeightKg` (number): Athlete bodyweight.
- `maxPushups` (number): Maximum push-ups in a single unbroken set.
- `vestWeightKg` (number, optional): Additional load from a weighted vest.
- `goalReps` (number, optional): Target repetitions for progression planning.
- `tempo` ("normal" | "slow" | "fast", optional): Tempo assumption for calorie estimation (default `"normal"`).

## Outputs
- `effectiveLoadKg` (number): Estimated mechanical load (64% bodyweight plus vest), rounded to 0.1 kg.
- `estimated1RM` (number): Back-calculated 1RM using a modified Epley curve, rounded to 0.1 kg.
- `strengthScore` (number): Normalized 0–100 score based on max reps, rounded to 0.1.
- `predictedMaxReps` (number, optional): Projected reps when a goal is supplied.
- `caloriesBurned` (number): Estimated calories from the set based on MET 8.0 and tempo, rounded to the nearest kcal.
- `progressionTier` (string): Progression tier label (beginner → elite).

## Formulas
- Effective load: `effectiveLoad = bodyWeightKg * 0.64 + vestWeightKg`
- 1RM estimate (modified Epley): `1RM = effectiveLoad * (1 + maxPushups / 30)`
- Strength score: `score = clamp((maxPushups / 50) * 100, 0, 100)`
- Progression tiers:
  - `< 10` → beginner
  - `10–19` → novice
  - `20–34` → intermediate
  - `35–49` → advanced
  - `≥ 50` → elite
- Tempo multipliers (sec per rep): fast `1.2`, normal `2.0`, slow `3.0`
- Duration: `durationSeconds = maxPushups * tempoMultiplier`
- Calories: `calories = 8.0 (MET) * bodyWeightKg * (durationSeconds / 3600)`
- Rep prediction (when goal provided):
  - `extraReps = goalReps - maxPushups`
  - If `extraReps ≤ 0` → predicted = `maxPushups`
  - Else predicted = `maxPushups + extraReps * 0.6`

## Example
Input:
- Bodyweight: 80 kg
- Vest: 0 kg
- Max push-ups: 30
- Tempo: normal

Calculations:
- Effective load = `80 * 0.64 = 51.2 kg`
- 1RM ≈ `51.2 * (1 + 30/30) = 102.4 kg`
- Strength score = `(30 / 50) * 100 = 60`
- Progression tier = `intermediate`
- Duration = `30 * 2.0 = 60 sec` → `0.0167 hr`
- Calories ≈ `8 * 80 * 0.0167 ≈ 11 kcal`
