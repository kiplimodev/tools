# Creatine Calculator

## Description
Calculate recommended creatine loading and maintenance protocols, servings, and expected saturation timelines based on body weight and chosen strategy.

## Inputs
- `weightKg` (number): Body weight in kilograms.
- `useLoadingPhase` (boolean, optional): Whether to include a loading phase (default: false).
- `loadingDays` (number, optional): Number of days for the loading phase (default: 5 when loading).
- `scoopsPerServing` (number, optional): Grams of creatine per scoop (default: 5g).

## Outputs
- `loadingDosePerDay` (number, optional): Daily loading dose in grams (when loading is enabled).
- `maintenanceDosePerDay` (number): Daily maintenance dose in grams.
- `totalCreatineForLoading` (number, optional): Total grams used during loading.
- `totalCreatinePerWeek` (number): Total grams used across a week (includes loading if enabled).
- `servingsPerDay` (number): Scoops per day based on scoop size and maintenance dose.
- `estimatedSaturationDays` (number): Expected days to saturation (loading days or 28 days without loading).

## Formulas
- Maintenance dose: `maintenance = clamp(weightKg * 0.03, min = 3g, max = 10g)`.
- Loading dose (optional): `loading = max(weightKg * 0.3, 15g)`.
- Total loading creatine: `totalLoading = loading * loadingDays`.
- Servings per day: `servings = maintenance / scoopsPerServing`.
- Estimated saturation time: `loading ? loadingDays : 28 days`.
- Total per week: `maintenance * 7 (+ totalLoading if loading)`.

All outputs are rounded to one decimal place.

## Example
```
Weight: 80 kg
Use loading: yes (5 days)
Scoop size: 5 g

Loading dose per day: 24.0 g
Maintenance dose per day: 3.0 g
Servings per day: 0.6 scoops
Estimated saturation: 5 days
Total creatine for loading: 120.0 g
Total creatine per week: 141.0 g
```
