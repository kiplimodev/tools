# Intermittent Fasting Calculator

## Description
Plan fasting and eating windows for popular intermittent fasting (IF) schedules while distributing daily calories and optional macros across meals.

## Inputs
- `startTime` (string): Fasting start in `HH:MM` 24-hour format.
- `fastingHours` (number): Duration of the fasting window in hours.
- `eatingHours` (number, optional): Duration of the eating window; defaults to `24 - fastingHours`.
- `dailyCalories` (number): Total calories to consume during the eating window.
- `meals` (number, optional): Number of meals; defaults to 2–4 based on eating window length.
- `macroSplit` (optional): Macro percentages that should sum to ~1.0. Includes `proteinPercent`, `fatPercent`, and `carbPercent`.

## Outputs
- `fastingWindow`: Start, end, and duration (hours) of the fast.
- `eatingWindow`: Start, end, and duration (hours) of the eating period.
- `meals`: Number of meals in the eating window.
- `caloriesPerMeal`: Calories allocated to each meal.
- Macro outputs (when `macroSplit` supplied): `proteinGrams`, `fatGrams`, `carbGrams`, and per-meal values.

## Formulas
- **Time parsing**: `HH:MM` → minutes; wrap times using modulo 1440 to handle overnight windows.
- **Window ends**: `end = start + durationHours * 60`.
- **Meals default**: ≤4h → 2 meals; ≤8h → 3 meals; otherwise 4 meals (unless provided).
- **Calories/meal**: `caloriesPerMeal = dailyCalories / meals`.
- **Macros (optional)**:
  - `proteinCalories = dailyCalories * proteinPercent`
  - `fatCalories = dailyCalories * fatPercent`
  - `carbCalories = dailyCalories * carbPercent`
  - Convert to grams: protein/carb ÷ 4, fat ÷ 9; divide by meals for per-meal macros.

## Example (16:8 IF)
- Start time: 20:00
- Fasting: 16h
- Eating: 8h
- Calories: 2400
- Meals: 3

**Output**
- Eating window: 12:00 → 20:00 (8.0h)
- Fasting window: 20:00 → 12:00 (16.0h)
- Calories per meal: 800
- If macros (33/33/34%): protein ≈ 198g, fat ≈ 88.9g, carbs ≈ 204g
