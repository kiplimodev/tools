# Rowing Calories Calculator

## Description
Estimate rowing energy expenditure using ACSM-derived MET values across light, moderate, and vigorous intensities.

## Inputs
- `weightKg`: Athlete body mass in kilograms
- `durationMinutes`: Session duration in minutes
- `intensity`: Effort level (`light` | `moderate` | `vigorous`)

## Outputs
- `caloriesBurned`: Total kilocalories expended (rounded to nearest whole number)
- `metValue`: MET constant applied for the given intensity

## Intensity to MET Mapping
- Light: 3.5 MET
- Moderate: 7.0 MET
- Vigorous: 12.0 MET

## Formula
- `durationHours = durationMinutes / 60`
- `calories = MET × weightKg × durationHours`

## Example
Weight: 70 kg  
Duration: 30 minutes  
Intensity: Moderate (7.0 MET)

```
calories = 7.0 × 70 × (30 / 60) = 245 kcal
```
