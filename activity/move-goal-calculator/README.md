# Move Goal Calculator

## Description
Calculates a daily active calorie target based on the user's goal and optional weekly deficit/surplus guidance. It returns a midpoint move goal, the recommended range, and a goal classification aligned to health, weight-loss, fitness, or gain phases.

## Inputs
- `weightKg`: User weight in kilograms.
- `tdee`: Total daily energy expenditure (kcal).
- `goal`: One of `"health" | "weight-loss" | "fitness"`.
- `weeklyCalorieDeficit` (optional): Desired weekly deficit in kcal.
- `weeklyCalorieSurplus` (optional): Desired weekly surplus in kcal.

## Outputs
- `dailyMoveCalories`: Rounded daily calorie target from activity.
- `recommendedRange`: `[low, high]` kcal range based on the selected goal.
- `goalClassification`: One of `maintain`, `fat-loss`, `recomp`, or `muscle-gain`.

## Logic
- Base move goals (midpoint and range):
  - `health`: 250–350 kcal/day (midpoint 300)
  - `weight-loss`: 400–700 kcal/day (midpoint 550)
  - `fitness`: 450–800 kcal/day (midpoint 625)
- Deficit adjustment: if `weeklyCalorieDeficit` is provided, add `(weeklyCalorieDeficit / 7) * 0.3` to the daily move goal.
- Surplus adjustment: if `weeklyCalorieSurplus` is provided, add `(weeklyCalorieSurplus / 7) * 0.1` to the daily move goal.
- Classification:
  - `fat-loss` if deficit > 0
  - `muscle-gain` if surplus > 0
  - `recomp` if goal is `fitness`
  - `maintain` if goal is `health`

## Example
```
weight: 75 kg
tdee: 2400 kcal
goal: "weight-loss"
weeklyCalorieDeficit: 3500 kcal

Base midpoint: 550 kcal/day
Deficit adjustment: (3500 / 7) * 0.3 = 150 kcal/day
Final daily move calories: 700 kcal/day
Classification: fat-loss
```
