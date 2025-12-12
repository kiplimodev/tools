# Swimming Calories Calculator

## Description
Estimate calories burned during swimming sessions using stroke-specific MET values and workout duration.

## Inputs
- **weightKg**: Body weight in kilograms.
- **durationMinutes**: Total swim duration in minutes.
- **stroke**: Swimming stroke (freestyle | breaststroke | butterfly | backstroke).
- **intensity**: Effort level (light | moderate | vigorous).

## Outputs
- **caloriesBurned**: Estimated calories burned (rounded to the nearest whole number).
- **metValue**: MET value applied for the calculation.

## MET Table
- **Freestyle**: light 5.8, moderate 7.0, vigorous 10.0
- **Breaststroke**: light 5.3, moderate 8.9, vigorous 10.3
- **Butterfly**: vigorous 13.8 (light/moderate use moderate freestyle as fallback)
- **Backstroke**: light 4.8, moderate 7.0, vigorous 9.5

## Formula
```
durationHours = durationMinutes / 60
calories = MET × weightKg × durationHours
```

## Example
```
Weight: 70 kg
Duration: 30 min
Stroke: freestyle
Intensity: vigorous
MET = 10.0
Calories = 10.0 × 70 × 0.5 = 350 kcal
```
