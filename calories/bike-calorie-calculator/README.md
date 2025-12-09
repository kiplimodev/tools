# Bike Calorie Calculator

## Description
Estimate cycling calorie expenditure using ACSM MET intensity categories across common riding speeds.

## Inputs
- weightKg: body weight in kilograms
- durationMinutes: ride duration in minutes
- intensity: one of "leisure", "moderate", "vigorous", "very-vigorous", or "race"

## Outputs
- caloriesBurned: total calories burned (rounded to the nearest whole number)
- metValue: MET value used for the calculation

## MET Intensity Chart (Cycling)
- leisure (≤10 mph / 16 km/h): 4.0 MET
- moderate (10–12 mph / 16–19 km/h): 6.8 MET
- vigorous (12–14 mph / 19–23 km/h): 8.0 MET
- very-vigorous (14–16 mph / 23–26 km/h): 10.0 MET
- race (>16 mph / >26 km/h): 12.0 MET

## Formula
- Convert duration to hours: `durationHours = durationMinutes / 60`
- Calculate calories: `calories = MET × weightKg × durationHours`
- Round calories to the nearest integer

## Example
Weight: 75 kg  
Duration: 45 minutes  
Intensity: vigorous (8.0 MET)

Calculation: `8.0 × 75 × 0.75 = 450` kcal (rounded)
