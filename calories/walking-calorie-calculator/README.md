# Walking Calorie Calculator

## Description
Estimate calories burned from walking sessions using ACSM-derived MET values for common paces ranging from slow to very brisk.

## Inputs
- `weightKg`: Body mass in kilograms
- `durationMinutes`: Time spent walking in minutes
- `pace`: Walking speed category (`slow` | `moderate` | `brisk` | `very-brisk`)

## Outputs
- `caloriesBurned`: Total kilocalories expended (rounded to the nearest whole number)
- `metValue`: MET constant corresponding to the selected walking pace

## Pace to MET Mapping
- Slow (< 2.0 mph / 3.2 km/h): 2.0 MET
- Moderate (2.0–2.9 mph / 3.2–4.7 km/h): 2.8 MET
- Brisk (3.0–3.9 mph / 4.8–6.3 km/h): 3.5 MET
- Very brisk (4.0+ mph / 6.4+ km/h): 5.0 MET

## Formula
- `hours = durationMinutes / 60`
- `calories = MET × weightKg × hours`

## Example
Weight: 70 kg  
Duration: 30 minutes  
Pace: Brisk (3.5 MET)

```
calories = 3.5 × 70 × (30 / 60) = 122.5 ≈ 123 kcal
```
