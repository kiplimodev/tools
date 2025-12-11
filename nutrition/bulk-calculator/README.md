# Bulk Calculator

## Description
Calculates daily bulking calorie targets, macronutrient distribution, and projected weight gain based on a chosen daily surplus and protein intake per kilogram. The calculator also estimates how weekly gain may partition into lean mass versus fat mass.

## Inputs
- `tdee`: Total daily energy expenditure
- `surplusCalories`: Daily calorie surplus to apply
- `weightKg`: Current body weight in kilograms
- `proteinPerKg`: Protein multiplier per kilogram (recommended 1.6–2.2 g/kg)
- `fatPercentage` (optional): Percentage of calories from fat (default 25%)

## Outputs
- `dailyCalories`: Total daily calorie target (TDEE + surplus)
- `proteinGrams`: Daily protein target in grams
- `fatGrams`: Daily fat target in grams
- `carbGrams`: Daily carbohydrate target in grams
- `weeklyGainKg`: Estimated weekly weight gain from the surplus
- `monthlyGainKg`: Estimated monthly weight gain
- `leanMassGainKg`: Estimated lean mass gain (weekly)
- `fatMassGainKg`: Estimated fat mass gain (weekly)

## Formulas
- Daily calories: `dailyCalories = tdee + surplusCalories`
- Protein: `proteinGrams = weightKg * proteinPerKg`
- Fat: `fatGrams = (dailyCalories * fatPercentage) / 9`
- Carbs: `carbGrams = (dailyCalories - proteinGrams*4 - fatGrams*9) / 4` (floored at 0 if negative)
- Weight gain conversion: `7700 kcal ≈ 1 kg`
  - `weeklyGainKg = (surplusCalories * 7) / 7700`
  - `monthlyGainKg = (surplusCalories * 30) / 7700`
- Lean vs fat estimate: `leanMassGainKg = weeklyGainKg * 0.6`, `fatMassGainKg = weeklyGainKg * 0.4`

All values are rounded to two decimal places.

## Example
For a 75 kg lifter with a TDEE of 2600 kcal, a 250 kcal surplus, protein at 2.0 g/kg, and default 25% fat calories:

- `dailyCalories = 2600 + 250 = 2850 kcal`
- `proteinGrams = 75 * 2.0 = 150 g`
- `fatGrams = 2850 * 0.25 / 9 ≈ 79.17 g`
- `carbGrams = (2850 - 150*4 - 79.17*9) / 4 ≈ 316.88 g`
- `weeklyGainKg = (250 * 7) / 7700 ≈ 0.23 kg`
- `monthlyGainKg = (250 * 30) / 7700 ≈ 0.97 kg`
- `leanMassGainKg ≈ 0.23 * 0.6 = 0.14 kg`
- `fatMassGainKg ≈ 0.23 * 0.4 = 0.09 kg`

This plan supplies a moderate surplus with balanced macros and a realistic weekly gain expectation.
