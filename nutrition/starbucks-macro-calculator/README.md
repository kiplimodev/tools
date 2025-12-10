# Starbucks Macro Calculator

## Description
Estimate the calories, protein, carbohydrates, and fat for customized Starbucks drink orders, including milk swaps, syrup pumps, and multiple quantities.

## Inputs
- `items[]`: list of ordered drinks
  - `id`: drink id (e.g., `latte`, `americano`, `mocha`, `cappuccino`, `cold_brew`, `frappuccino`)
  - `size`: `tall` | `grande` | `venti` | `trenta`
  - `milk` (optional): `whole` | `two_percent` | `nonfat` | `almond` | `oat` | `soy`
  - `customPumps` (optional): syrup pumps to add
  - `quantity` (optional): defaults to 1

## Outputs
- Totals across the full order:
  - `totalCalories`
  - `totalProtein`
  - `totalCarbs`
  - `totalFat`
- Item breakdown mirroring each drink with per-item macros and quantity.

## Logic
1. Start with a baseline macro profile for the drink in Grande size.
2. Apply the size multiplier for `tall`, `grande`, `venti`, or `trenta`.
3. Apply milk modifiers when the drink supports milk:
   - whole: +20 kcal, +1g protein, +2g fat
   - two_percent: +10 kcal, +1g protein, +1g fat
   - nonfat: -15 kcal
   - almond: -30 kcal, -1g protein, -2g fat
   - oat: +40 kcal, +1g protein, +1g fat
   - soy: +25 kcal, +1g protein, +1g fat
4. Add syrup: +20 kcal and +5g carbs per pump.
5. Multiply by quantity.
6. Sum all items to get total calories, protein, carbs, and fat. All values are rounded to 1 decimal place.

## Supported Drinks (baseline: Grande)
- Latte — 190 kcal, 12g protein, 18g carbs, 7g fat
- Americano — 15 kcal, 0g protein, 3g carbs, 0g fat
- Mocha — 370 kcal, 14g protein, 43g carbs, 15g fat
- Cappuccino — 120 kcal, 8g protein, 12g carbs, 4g fat
- Cold brew — 5 kcal, 0g protein, 0g carbs, 0g fat
- Frappuccino — 370 kcal, 6g protein, 67g carbs, 12g fat

## Example
Order:
- Grande Latte with almond milk and 2 pumps syrup (x1)
- Tall Americano (x2)

Calculations (approx.):
- Latte (almond milk): ~160 kcal, ~11g protein, ~23g carbs, ~5g fat
- +2 syrup pumps: +40 kcal, +10g carbs
- Final latte: ~200 kcal, 11g protein, 33g carbs, 5g fat
- Tall Americano: ~10 kcal, 0g protein, 2g carbs, 0g fat → x2 = ~20 kcal, 0g protein, 4g carbs, 0g fat

Totals:
- Calories ≈ 220 kcal
- Protein ≈ 11g
- Carbs ≈ 37g
- Fat ≈ 5g
