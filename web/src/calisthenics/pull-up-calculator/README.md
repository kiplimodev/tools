# Pull-Up Calculator

## Description
Estimate pull-up strength metrics, effective loading, calories burned, progression tier, and optional goal rep predictions across common grips and tempos.

## Inputs
- `bodyWeightKg`: body weight in kilograms.
- `maxPullups`: maximum strict pull-ups in one set.
- `addedWeightKg` (optional): external load (belt, dumbbell, vest) in kilograms.
- `goalReps` (optional): target repetitions for projection.
- `grip` (optional): one of `standard`, `wide`, or `chinup`. Default is `standard`.
- `tempo` (optional): `normal`, `slow`, or `fast`. Default is `normal`.

## Outputs
- `effectiveLoadKg`: mechanical load per rep accounting for grip factor and added weight.
- `estimated1RM`: weighted calisthenics 1RM estimate.
- `strengthScore`: normalized score (0–100) based on max reps.
- `predictedMaxReps` (optional): projected reps toward a provided goal.
- `caloriesBurned`: estimated calories expended during the set.
- `progressionTier`: training level from beginner to elite.

## Formulas
- **Grip load factor**: `standard = 0.97`, `wide = 1.00`, `chinup = 0.92`
- **Effective load**: `effectiveLoad = bodyWeightKg * loadFactor + addedWeightKg`
- **1RM estimate**: `estimated1RM = effectiveLoad * (1 + maxPullups / 40)`
- **Strength score**: `score = clamp((maxPullups / 25) * 100, 0, 100)`
- **Progression tiers**: `<4 beginner`, `4–7 novice`, `8–14 intermediate`, `15–24 advanced`, `≥25 elite`
- **Tempo multipliers (sec/rep)**: `fast = 1.5`, `normal = 2.5`, `slow = 3.5`
- **Calories**: `MET (8.0) × bodyWeightKg × (maxPullups × tempoSeconds / 3600)`
- **Predicted reps**: `maxPullups` if goal is lower/equal; otherwise `maxPullups + (goalReps - maxPullups) × 0.55`

## Example
Input:
- Bodyweight: 80 kg
- Pull-ups: 12
- Grip: standard
- Added weight: 0 kg

Calculations:
- Effective load: `80 × 0.97 = 77.6 kg`
- Estimated 1RM: `77.6 × (1 + 12/40) ≈ 101.8 kg`
- Strength score: `(12 / 25) × 100 = 48`
- Tier: `intermediate`
- Calories: `8 × 80 × (12 × 2.5 / 3600) ≈ 5 kcal`
