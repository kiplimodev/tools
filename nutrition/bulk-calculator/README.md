# Bulk Calculator

## Description
Calculate daily bulking calories and macronutrient targets based on TDEE, desired surplus, and body composition. The calculator estimates weekly weight gain, classifies the gain rate, and optionally partitions expected lean vs fat gain when body fat percentage is provided.

## Inputs
- `weightKg`: Current body weight in kilograms (required)
- `bodyFatPercent`: Optional body fat percentage to refine lean/fat gain estimates
- `tdee`: Total daily energy expenditure (required)
- `surplusCalories`: Optional daily calorie surplus (default: 300 kcal)
- `proteinPerKg`: Optional protein multiplier per kg bodyweight (default: 1.8 g/kg)
- `fatPercent`: Optional fat calorie percentage as a decimal (default: 0.25)

## Outputs
- `dailyCalories`: Total daily calories including surplus
- `proteinGrams`: Daily protein target in grams
- `fatGrams`: Daily fat target in grams
- `carbGrams`: Daily carbohydrate target in grams
- `weeklyCaloricSurplus`: Total surplus calories per week
- `projectedWeeklyWeightGainKg`: Expected weekly weight gain from the surplus
- `rateClassification`: Gain rate classification (slow/optimal/aggressive)
- `leanMassGainEstimate`: Optional lean mass gain estimate (if bodyFatPercent provided)
- `fatMassGainEstimate`: Optional fat mass gain estimate (if bodyFatPercent provided)

## Formulas
- Surplus: `surplus = surplusCalories ?? 300`
- Daily calories: `dailyCalories = tdee + surplus`
- Protein: `protein = weightKg * (proteinPerKg ?? 1.8)`
- Fat: `fatCalories = dailyCalories * (fatPercent ?? 0.25)` → `fatGrams = fatCalories / 9`
- Carbs: `carbGrams = max(0, dailyCalories - protein*4 - fatGrams*9) / 4`
- Weekly surplus: `weeklyCaloricSurplus = surplus * 7`
- Projected gain: `projectedWeeklyWeightGainKg = weeklyCaloricSurplus / 7700`
- Rate classification: `<0.15 kg/wk → slow`, `0.15–0.4 → optimal`, `>0.4 → aggressive`
- Partition (if bodyFatPercent provided):
  - BF < 12% → 70% lean / 30% fat
  - BF 12–20% → 50% lean / 50% fat
  - BF > 20% → 30% lean / 70% fat

## Example
```
Weight: 80 kg
TDEE: 2600 kcal
Surplus: 300 kcal

Daily calories = 2600 + 300 = 2900 kcal
Protein = 80 * 1.8 = 144 g
Fat = 2900 * 0.25 / 9 ≈ 80.6 g
Carbs = (2900 - 144*4 - 80.6*9) / 4 ≈ 339.4 g
Weekly surplus = 300 * 7 = 2100 kcal
Projected weekly gain = 2100 / 7700 ≈ 0.27 kg → classification: optimal
```
