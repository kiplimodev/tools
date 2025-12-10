# Subway Macro Calculator

## Description
Calculate calories, protein, carbs, and fat for custom Subway sandwich orders by combining bread, protein, cheese, veggies, and sauce selections with quantities.

## Inputs
- Array of sandwich items with:
  - `bread`: "none" | "white" | "wheat" | "italian" | "multigrain" | "flatbread"
  - `protein`: "chicken" | "steak" | "turkey" | "ham" | "meatball" | "tuna"
  - `cheese` (optional, defaults to `"none"`): "american" | "cheddar" | "swiss" | "provolone" | "none"
  - `veggies` (optional): flags for `lettuce`, `tomato`, `onion`, `cucumber`, `olives`, `jalapeno`, `pickles`
  - `sauces` (optional): serving counts for `mayo`, `chipotle`, `mustard`, `sweetOnion`
  - `quantity` (optional): number of identical sandwiches

## Outputs
- `totalCalories`, `totalProtein`, `totalCarbs`, `totalFat` (totals across all sandwiches, rounded to 1 decimal)
- `items`: per-sandwich breakdown with calories, protein, carbs, fat, and quantity

## Macro Tables
**Bread (per sandwich)**
- none: 0 kcal, 0P/0C/0F
- white: 200 kcal, 7P/38C/2F
- wheat: 210 kcal, 8P/40C/2F
- italian: 230 kcal, 8P/44C/2F
- multigrain: 240 kcal, 9P/43C/3F
- flatbread: 220 kcal, 7P/37C/4F

**Protein (per serving)**
- chicken: 110 kcal, 20P/1C/2F
- steak: 130 kcal, 21P/2C/3F
- turkey: 90 kcal, 17P/2C/1F
- ham: 60 kcal, 10P/2C/1F
- meatball: 260 kcal, 15P/14C/15F
- tuna: 250 kcal, 15P/5C/20F

**Cheese (per serving)**
- none: 0 kcal
- american: 40 kcal, 2P/1C/3F
- cheddar: 60 kcal, 4P/1C/5F
- swiss: 50 kcal, 4P/1C/3F
- provolone: 50 kcal, 4P/1C/4F

**Veggies (per serving)**
- lettuce: 5 kcal, 0P/1C/0F
- tomato: 5 kcal, 0P/1C/0F
- olives: 25 kcal, 0P/1C/2F
- onion: 5 kcal, 0P/1C/0F
- cucumber: 3 kcal, 0P/1C/0F
- jalapeno: 4 kcal, 0P/1C/0F
- pickles: 3 kcal, 0P/1C/0F

**Sauces (per serving)**
- mayo: 100 kcal, 0P/0C/11F
- chipotle: 70 kcal, 0P/1C/7F
- mustard: 10 kcal, 0P/1C/0F
- sweetOnion: 40 kcal, 0P/9C/0F

## Formulas
- Sandwich macros = bread + protein + cheese + selected veggies + (sauce macros × servings)
- Quantity applied after combining all components
- Totals = sum of per-item macros
- All values rounded to 1 decimal

## Example
Order:
- Italian bread, chicken, American cheese
- Veggies: lettuce, tomato, onion
- Sauces: 1× mayo, 1× mustard

Result (quantity = 1):
- Calories ≈ 515 kcal
- Protein ≈ 28 g
- Carbs ≈ 48 g
- Fat ≈ 24 g
