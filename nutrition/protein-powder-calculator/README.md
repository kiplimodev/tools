# Protein Powder Calculator

## Description
Estimate how much protein powder you need each day to hit your protein target, along with scoop counts, calories, weekly totals, and how long a bag will last.

## Inputs
- `dailyProteinTarget`: Total protein goal per day (g).
- `dietaryProteinIntake`: Protein already consumed from food (g).
- `proteinPerScoop`: Grams of protein per scoop (default 25g assumed by user input).
- `caloriesPerScoop` (optional): Calories per scoop (defaults to 120 kcal).
- `bagSizeGrams` (optional): Total grams of powder in the bag (defaults to 2000g).

## Outputs
- `requiredSupplementProtein`: Protein still needed from powder (g/day).
- `scoopsPerDay`: Scoops required per day.
- `caloriesFromProteinPowder`: Daily calories from the powder.
- `weeklyScoops`: Scoops per week.
- `weeklyProteinFromPowder`: Protein provided per week from the powder.
- `daysPerBag`: Estimated days one bag will last.
- `needsSupplement`: Whether additional protein is required.

## Formulas
- Required supplement: `required = max(dailyProteinTarget - dietaryProteinIntake, 0)`.
- Scoops/day: `scoopsPerDay = required / proteinPerScoop`.
- Calories/day: `calories = scoopsPerDay * caloriesPerScoop` (default 120 kcal if omitted).
- Weekly totals: `weeklyScoops = scoopsPerDay * 7`; `weeklyProteinFromPowder = required * 7`.
- Bag longevity: assume `30g` powder per scoop. `totalScoopsPerBag = bagSizeGrams / 30`; `daysPerBag = totalScoopsPerBag / scoopsPerDay` (returns `0` if no supplement is needed).
- needsSupplement: `required > 0`.

## Example
- Target: **160g/day**
- Food intake: **120g**
- Scoop: **25g protein**, **120 kcal**
- Bag size: **2000g**

Calculations:
- Supplement needed: `160 - 120 = 40g`.
- Scoops/day: `40 / 25 = 1.6` scoops.
- Calories: `1.6 * 120 = 192` kcal.
- Weekly scoops: `1.6 * 7 = 11.2` scoops.
- Weekly protein from powder: `40 * 7 = 280g`.
- Total scoops per bag: `2000 / 30 ≈ 66.7`; days per bag: `66.7 / 1.6 ≈ 41.7` days.

This calculator rounds outputs to one decimal place.
