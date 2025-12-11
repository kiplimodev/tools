# Lean Bulk Calculator

## Description
Estimate lean-bulk macros, weekly surplus, and expected weight gain with conservative surplus and higher protein targets to prioritize lean mass.

## Inputs
- `weightKg`: Current body weight in kilograms.
- `bodyFatPercent` (optional): Body fat percentage to estimate lean/fat gain split.
- `tdee`: Total daily energy expenditure.
- `surplusCalories` (optional): Daily calorie surplus (default 150 kcal).
- `proteinPerKg` (optional): Grams of protein per kg (default 2.0).
- `fatPercent` (optional): Fraction of calories from fat (default 20%).

## Outputs
- `dailyCalories`: Total daily calories with surplus applied.
- `proteinGrams`: Daily protein target (g).
- `fatGrams`: Daily fat target (g).
- `carbGrams`: Daily carbohydrate target (g).
- `weeklyCaloricSurplus`: Surplus accumulated over 7 days (kcal).
- `projectedWeeklyWeightGainKg`: Expected weekly gain (kg).
- `rateClassification`: "slow", "optimal", or "too fast" based on gain rate.
- `leanMassGainEstimate` (optional): Estimated lean gain if body fat provided.
- `fatMassGainEstimate` (optional): Estimated fat gain if body fat provided.

## Formulas
- Surplus: `surplus = surplusCalories ?? 150`
- Daily calories: `dailyCalories = tdee + surplus`
- Protein: `protein = weightKg * (proteinPerKg ?? 2.0)`
- Fat calories: `fatCalories = dailyCalories * (fatPercent ?? 0.2)` → `fatGrams = fatCalories / 9`
- Carbs: `carbGrams = max((dailyCalories - protein*4 - fatGrams*9) / 4, 0)`
- Weekly surplus: `weeklyCaloricSurplus = surplus * 7`
- Projected gain: `projectedWeeklyWeightGainKg = weeklyCaloricSurplus / 7700`
- Rate classification: `<0.1` kg/wk → slow, `0.1–0.25` → optimal, `>0.25` → too fast
- Lean/fat partition (if `bodyFatPercent`):
  - BF < 12% → 80% lean / 20% fat
  - 12–20% → 60% lean / 40% fat
  - >20% → 40% lean / 60% fat

## Example
```
Weight: 75 kg
TDEE: 2500 kcal
Surplus: 150 kcal

Daily calories = 2650 kcal
Protein = 150 g
Fat = 58.9 g
Carbs = 345.0 g
Weekly surplus = 1050 kcal → projected gain ≈ 0.1 kg/week (optimal)
```
