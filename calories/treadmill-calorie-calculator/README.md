# Treadmill Calorie Calculator

## Description
Computes calories burned on a treadmill based on speed, incline, user weight, and workout duration using a MET-based estimation.

## Inputs
- **weightKg**: Body weight in kilograms (required)
- **durationMinutes**: Workout duration in minutes (required)
- **speed**: Treadmill speed value (required)
- **unit**: Speed unit, either `"kmh"` or `"mph"` (required)
- **inclinePercent**: Optional incline percentage (defaults to 0)

## Outputs
- **calories**: Estimated calories burned (rounded)
- **met**: MET intensity used (incline-adjusted)
- **speedKmh**: Normalized treadmill speed in km/h
- **inclinePercent**: Incline percentage applied

## Formula
Calories are estimated using the MET formula:

```
Calories = MET × weightKg × (durationMinutes / 60)
```

Speed is mapped to a base MET using a reference chart, then adjusted for incline:

- 3.2 km/h → MET 2.0
- 4.7 km/h → MET 2.8
- 5.5 km/h → MET 3.5
- 6.4 km/h → MET 4.3
- 8.0 km/h → MET 8.3
- 9.7 km/h → MET 9.8
- 10.8 km/h → MET 11.0
- 12.1 km/h → MET 11.8
- 14.5 km/h → MET 12.8

Incline adjustment:

```
adjustedMET = baseMET + (inclinePercent × 0.5)
```

## Example
For a 70 kg user running 30 minutes at 10 km/h with a 5% incline:
- Base MET at 10 km/h ≈ 11.0
- Adjusted MET = 11.0 + (5 × 0.5) = 13.5
- Calories ≈ 13.5 × 70 × (30 / 60) ≈ 473 kcal

The calculator returns the rounded calorie estimate, the applied MET, normalized speed, and incline percentage.
