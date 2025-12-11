# Intermittent Fasting Calculator

## Description
Computes fasting and eating window durations, optional window times, meal timing, and calorie distribution for popular intermittent fasting (IF) protocols or a custom schedule.

## Supported Protocols
- 16:8
- 18:6
- 20:4
- 23:1 (OMAD style)
- Custom (user-provided fasting and eating hours)

## Inputs
- `protocol`: One of `16:8`, `18:6`, `20:4`, `23:1`, or `custom`.
- `fastingHours` (optional for presets, required for custom): Hours spent fasting.
- `eatingHours` (optional for presets, required for custom): Hours available for eating.
- `dailyCalories` (optional): Daily calorie target to split across meals.
- `meals` (optional): Number of meals; defaults to 2 for ≤4-hour eating windows, otherwise 3.
- `startTime` (optional): Fasting start time in `HH:MM` 24-hour format; enables window and meal time outputs.

## Outputs
- `fastingHours`: Length of the fasting window (hours).
- `eatingHours`: Length of the eating window (hours).
- `eatingWindowStart` / `eatingWindowEnd` (optional): Eating window times when `startTime` is provided.
- `mealTimes` (optional): Suggested meal times spaced evenly across the eating window.
- `caloriesPerMeal` (optional): Calorie allocation per meal if `dailyCalories` is provided.
- `weeklyFastingHours`: Total weekly fasting hours (fastingHours × 7).

## Formulas
- Protocol presets map directly to fasting/eating durations; custom requires both values > 0.
- Meal count default: `eatingHours <= 4 ? 2 : 3` (unless explicitly provided).
- Meal spacing: `interval = eatingHours / meals`; each meal time = `eatingWindowStart + interval * i` (converted to `HH:MM`, wrapping past midnight).
- Calories per meal (optional): `caloriesPerMeal = dailyCalories / meals`, rounded to 1 decimal.
- Weekly fasting: `weeklyFastingHours = fastingHours * 7`, rounded to 1 decimal.

## Example
Protocol: `16:8`  
Start time: `12:00` (fast begins at noon)  
Meals: `2`  
Daily calories: `2000`

- Fasting: 16h, Eating: 8h
- Eating window: `04:00` → `12:00` (after wrapping past midnight)
- Meal times: `04:00`, `08:00`
- Calories per meal: `1000`
- Weekly fasting: `112` hours
