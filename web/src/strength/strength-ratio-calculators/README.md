# Strength Ratio Calculators

## Description
Compute common strength ratios to evaluate balance across major lifts. The calculator returns lift-to-bodyweight ratios, push/pull balance when a row is provided, squat-to-deadlift ratio, overall strength proportions, and an upper vs. lower dominance classification.

## Inputs
- `bodyWeightKg`: Athlete body weight in kilograms
- `benchKg`: Bench press one-rep weight (kg)
- `squatKg`: Squat one-rep weight (kg)
- `deadliftKg`: Deadlift one-rep weight (kg)
- `ohpKg` (optional): Overhead press one-rep weight (kg)
- `rowKg` (optional): Barbell row one-rep weight (kg) — needed for push/pull ratio

## Outputs
- `benchToBody`, `squatToBody`, `deadliftToBody`: Lift-to-bodyweight ratios (rounded to 2 decimals)
- `pushPullRatio` (optional): Bench-to-row (or OHP-to-row) ratio when row is provided
- `squatDeadliftRatio`: Squat-to-deadlift ratio
- `upperLowerBalance`: "balanced", "upper-dominant", or "lower-dominant"
- `proportions`: Share of each main lift relative to total (bench, squat, deadlift)

## Formulas
- Lift-to-bodyweight: `bench / bodyWeight`, `squat / bodyWeight`, `deadlift / bodyWeight`
- Push/Pull: `bench / row` (or `ohp / row` if bench is zero)
- Squat/Deadlift: `squat / deadlift`
- Proportions: `bench / total`, `squat / total`, `deadlift / total` where `total = bench + squat + deadlift`
- Upper/Lower balance: `upper = bench + (ohp || bench * 0.6)`, `lower = squat + deadlift`

## Example
```
Bodyweight: 80 kg
Bench: 100 kg
Squat: 140 kg
Deadlift: 170 kg
Row: 90 kg

benchToBody = 1.25
squatToBody = 1.75
deadliftToBody = 2.12
pushPullRatio = 1.11
squatDeadliftRatio = 0.82

Proportions:
- benchPercent ≈ 0.24 (≈ 24%)
- squatPercent ≈ 0.34 (≈ 34%)
- deadliftPercent ≈ 0.41 (≈ 41%)

upperLowerBalance = "lower-dominant"
```
