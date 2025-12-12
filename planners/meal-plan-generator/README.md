# Meal Plan Generator

## Description
Creates a simple, macro-aware daily meal plan based on calorie and diet preferences. The generator splits daily targets across meals, filters foods according to dietary rules, and scales portions to stay near each meal's calorie target.

## Inputs
- `targetCalories`: total calories per day.
- `meals`: number of meals (default workflow assumes 3 if not provided).
- `diet`: optional dietary pattern (`omnivore`, `vegetarian`, `vegan`, `carnivore`, `high_protein`, `low_fat`).
- `macroSplit`: optional macro percentages (`proteinPercent`, `fatPercent`, `carbPercent`). If omitted, defaults to 30% protein, 25% fat, 45% carbs.

## Outputs
- `dailyCalories`: total daily calories (rounded).
- `proteinGrams`, `fatGrams`, `carbGrams`: daily macros based on the provided split.
- `meals`: array of meals with per-meal calories, macros, and chosen foods.

## Formulas
- Macro calories: `proteinCalories = targetCalories * proteinPercent`, `fatCalories = targetCalories * fatPercent`, `carbCalories = targetCalories * carbPercent`.
- Macro grams: `proteinGrams = proteinCalories / 4`, `fatGrams = fatCalories / 9`, `carbGrams = carbCalories / 4`.
- Per-meal targets: divide calories and macros evenly across meals.
- Portion scaling (per food): `portionFactor = clamp(mealCalories / foodCalories, 0.2, 3)` where food calories are per 100g.

### Food Database (per 100g)
- chicken_breast: 165 kcal, 31P / 4F / 0C
- salmon: 208 kcal, 20P / 13F / 0C
- eggs: 143 kcal, 13P / 10F / 1C
- rice: 130 kcal, 2P / 0F / 28C
- oats: 389 kcal, 17P / 7F / 66C
- avocado: 160 kcal, 2P / 15F / 9C
- tofu: 76 kcal, 8P / 4F / 2C
- beans: 347 kcal, 21P / 1F / 63C
- steak: 242 kcal, 26P / 15F / 0C

Diet rules filter this list (vegan removes all animal foods, vegetarian removes meat/fish, carnivore keeps only meat/eggs, high_protein prioritizes higher-protein picks, low_fat removes items over 10g fat per 100g).

## Allocation Strategy
1. Compute daily macros from the target calories and macro split.
2. Split calories evenly across meals.
3. For each meal, pick a protein, carb, and fat source from the allowed foods, ensuring at least two items per meal.
4. Scale each food using the portion factor and adjust as needed to stay within ±10% of the meal calorie target.

## Example
**Inputs**
- targetCalories: 2000
- meals: 3
- diet: `omnivore`

**Sample Output (approximate)**
- Daily macros: ~150g protein, 55g fat, 225g carbs
- Meal 1: ~670 kcal — chicken_breast, rice, avocado
- Meal 2: ~670 kcal — salmon, rice
- Meal 3: ~670 kcal — eggs, oats

Each meal includes calories and macros for its foods, and totals stay close to the per-meal targets.
