# Steps To Calories Calculator

## Description
Estimates calories burned and distance covered from a given step count using stride length defaults and intensity-based calories per step.

## Inputs
- **steps**: number of steps taken
- **weightKg**: body weight in kilograms
- **strideLengthMeters** (optional): custom stride length in meters
- **intensity** (optional): walking intensity level (`low` | `moderate` | `high`), defaults to `moderate`

## Outputs
- **caloriesBurned**: estimated total calories burned (kcal)
- **distanceKm**: estimated distance walked in kilometers (rounded to 2 decimals)
- **caloriesPerStep**: calories used per step based on intensity

## Formulas
- Default stride length: `stride = weightKg < 70 ? 0.68 : 0.75` (meters) when not provided.
- Distance: `distanceKm = (steps * stride) / 1000`.
- Calories per step table:
  - low: 0.035 kcal/step
  - moderate: 0.045 kcal/step
  - high: 0.065 kcal/step
- Total calories: `caloriesBurned = steps * caloriesPerStep` (rounded to nearest whole number).

## Example
Steps: `10,000`

Weight: `70 kg`

Intensity: `moderate` → `0.045 kcal/step`

Stride default: `0.68 m` (weight under 70 kg)

Distance: `10,000 * 0.68 / 1000 = 6.8 km`

Calories: `10,000 * 0.045 = 450 kcal`
