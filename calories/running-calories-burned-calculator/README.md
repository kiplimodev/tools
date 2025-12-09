# Running Calories Burned Calculator

## Description
Estimate calories burned while running based on speed, weight, and duration using ACSM MET values mapped to common running speeds.

## Inputs
- **weightKg**: Runner's weight in kilograms.
- **durationMinutes**: Duration of the run in minutes.
- **speedKmh**: Running speed in kilometers per hour.

## Outputs
- **caloriesBurned**: Estimated calories burned (rounded to the nearest whole number).
- **metValue**: MET value selected from the running speed table.

## Running MET Table (ACSM)

| Speed (km/h) | MET |
| ------------ | --- |
| 6.4 (4 mph)  | 6.0 |
| 8.0 (5 mph)  | 8.3 |
| 9.7 (6 mph)  | 9.8 |
| 11.3 (7 mph) | 11.0 |
| 12.9 (8 mph) | 11.8 |
| 14.5 (9 mph) | 12.8 |
| 16.1 (10 mph)| 14.5 |
| > 17 km/h    | 16.0 |

> If the speed falls between entries, the closest lower bound is used. Speeds below 6 km/h default to 6.0 MET; speeds above 17 km/h cap at 16.0 MET.

## Formula

```
hours = durationMinutes / 60
calories = MET × weightKg × hours
```

## Example

```
weightKg = 70
durationMinutes = 30
speedKmh = 10
metValue = 9.8 (closest lower bound from 9.7 km/h)
caloriesBurned = 9.8 × 70 × 0.5 = 343 kcal (rounded)
```
