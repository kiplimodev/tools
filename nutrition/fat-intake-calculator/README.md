# Fat Intake Calculator

## Description
Calculates daily fat intake recommendations based on body weight, total calorie intake, and optional goal guidance. Provides health minimums, general ranges, goal-adjusted ranges, and equivalent calorie percentages.

## Inputs
- `weightKg`: Body weight in kilograms.
- `caloriesPerDay`: Daily caloric intake.
- `goal` (optional): One of `"cut"`, `"maintain"`, or `"bulk"` to tailor the recommended fat range.

## Outputs
- `minimumFatGrams`: Recommended minimum fat intake after applying the health minimum (grams).
- `recommendedRange`: General 20–35% calorie-based fat range (grams) respecting the health minimum.
- `percentageRange`: Recommended range expressed as a fraction of daily calories (0–1 scale).
- `healthMinimum`: Essential fat minimum based on body weight (grams).
- `goalAdjustedRange` (optional): Goal-specific range (grams) that respects the health minimum.

## Formulas
- Health minimum: `healthMinimum = weightKg * 0.6`
- General range: `min = (caloriesPerDay * 0.20) / 9`, `max = (caloriesPerDay * 0.35) / 9`
- Goal ranges:
  - Cut: `min = (calories * 0.20) / 9`, `max = (calories * 0.25) / 9`
  - Maintain: `min = (calories * 0.25) / 9`, `max = (calories * 0.30) / 9`
  - Bulk: `min = (calories * 0.25) / 9`, `max = (calories * 0.35) / 9`
- Percentages: `percentMin = (minFat * 9) / caloriesPerDay`, `percentMax = (maxFat * 9) / caloriesPerDay`
- All outputs rounded to one decimal place.

## Example
```
weightKg: 80
caloriesPerDay: 2400
goal: "maintain"
```
- Health minimum: `80 * 0.6 = 48.0 g`
- General range: `53.3 g` to `93.3 g` (20–35% of calories)
- Goal-adjusted range (maintain): `66.7 g` to `80.0 g`
- Minimum fat grams returned: `53.3 g`
- Percentage range: `0.2` to `0.3`
