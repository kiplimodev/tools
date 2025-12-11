# Carnivore Macro Calculator

## Description
Calculate calories and macros for carnivore-friendly foods by scaling portion sizes and quantities from a curated macro table. This tool totals calories, protein, fat, and carbs (typically zero) for meal planning.

## Inputs
- **items**: Array of foods with:
  - `id`: food identifier (e.g., `ribeye`, `ground_beef_80`, `eggs`).
  - `grams`: portion size in grams.
  - `quantity` (optional): number of servings (default `1`).

## Outputs
- `totalCalories`: summed calories for all items.
- `totalProtein`: total protein (g).
- `totalFat`: total fat (g).
- `totalCarbs`: total carbs (g).
- `items`: per-item breakdown including grams, quantity, and macros.

## Food Macro Table (per 100g)
- ribeye: 291 kcal, 24g protein, 21g fat, 0g carbs
- ground_beef_80: 254 kcal, 17g protein, 20g fat, 0g carbs
- ground_beef_90: 176 kcal, 22g protein, 8g fat, 0g carbs
- chicken_thigh: 209 kcal, 26g protein, 10g fat, 0g carbs
- chicken_breast: 165 kcal, 31g protein, 4g fat, 0g carbs
- salmon: 208 kcal, 20g protein, 13g fat, 0g carbs
- eggs: 143 kcal, 13g protein, 10g fat, 0g carbs
- bacon: 540 kcal, 37g protein, 42g fat, 1g carbs
- liver_beef: 135 kcal, 20g protein, 4g fat, 3g carbs
- pork_chop: 231 kcal, 29g protein, 12g fat, 0g carbs
- shrimp: 99 kcal, 24g protein, 0.3g fat, 0.2g carbs

## Formulas
For each item:
```
ratio = grams / 100
portionCalories = baseCalories * ratio
portionProtein  = baseProtein  * ratio
portionFat      = baseFat      * ratio
portionCarbs    = baseCarbs    * ratio

scaledMacros = portionMacros * quantity
```
Totals are the sum of scaled macros across all items. All values are rounded to one decimal place.

## Example
Items:
- Ribeye 300g
- Eggs 200g
- Salmon 150g

Totals:
- Protein: 128g
- Fat: 102.5g
- Calories: 1471
- Carbs: 0g
