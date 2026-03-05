# Body Recomposition Calculator

## Description
Estimate current and goal body composition, suggested weekly changes, timeline to goal, and phase classification (cut, recomp, lean bulk, bulk).

## Inputs
- `currentWeightKg` (number) — current body weight in kilograms
- `currentBodyFatPercent` (number) — current body fat percentage
- `goalWeightKg?` (number) — optional target body weight
- `goalBodyFatPercent?` (number) — optional target body fat percentage
- `weeklyFatChangeKg?` (number) — optional planned weekly fat change (kg)
- `weeklyLeanChangeKg?` (number) — optional planned weekly lean mass change (kg)

## Outputs
- `currentFatMassKg` (number) — current fat mass (kg)
- `currentLeanMassKg` (number) — current lean mass (kg)
- `goalFatMassKg?` (number) — goal fat mass if goal body fat is provided
- `goalLeanMassKg?` (number) — goal lean mass if goal body fat is provided
- `fatChangeKg?` (number) — change in fat mass required
- `leanChangeKg?` (number) — change in lean mass required
- `weeklyFatChangeKg?` (number) — applied weekly fat change
- `weeklyLeanChangeKg?` (number) — applied weekly lean change
- `estimatedWeeksToGoal?` (number) — estimated weeks to reach goal
- `classification` (string) — phase classification (cut, recomp, lean bulk, bulk)

## Formulas
- Fat mass = weight × (body fat % / 100)
- Lean mass = weight − fat mass
- Goal fat mass = goal weight × (goal body fat % / 100)
- Goal lean mass = goal weight − goal fat mass
- Weeks to goal (fat) = |goal fat mass − current fat mass| / |weekly fat change|
- Weeks to goal (lean) = |goal lean mass − current lean mass| / |weekly lean change|
- Total weeks = max(fat weeks, lean weeks) rounded to nearest integer

Classification rules:
- Weight ↓ and body fat % ↓ → cut
- Weight ↑ and body fat % ↓ → recomp
- Weight ↑ and body fat % slight increase → lean bulk
- Larger weight ↑ with body fat % ↑ → bulk

Default weekly changes (if not provided):
- Cut: fat −0.3 kg/week, lean 0 kg/week
- Recomp: fat −0.1 kg/week, lean +0.1 kg/week
- Lean bulk/Bulk: fat +0.1 kg/week, lean +0.2 kg/week

## Example
Current: 80 kg @ 22% BF  → Fat mass 17.6 kg, Lean mass 62.4 kg
Goal: 78 kg @ 18% BF     → Fat mass 14.0 kg, Lean mass 64.0 kg

Default classification: cut → recomp transition
Estimated time: ~12 weeks (using default weekly changes)
