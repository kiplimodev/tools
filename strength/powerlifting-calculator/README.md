# Powerlifting Calculator

## Description
Calculate powerlifting totals and scores using DOTS, Wilks, and IPF GL formulas for males and females. Provides a combined total from squat, bench, and deadlift, along with standardized strength coefficients.

## Inputs
- `gender`: "male" | "female"
- `bodyWeightKg`: lifter's body weight in kilograms
- `squatKg`: best squat in kilograms
- `benchKg`: best bench press in kilograms
- `deadliftKg`: best deadlift in kilograms

## Outputs
- `totalKg`: combined total of the three lifts
- `dots`: DOTS score
- `wilks`: classic Wilks coefficient score
- `ipfGL`: IPF GL score (2020 coefficients)

## Formulas
- **Total**: `total = squat + bench + deadlift`
- **DOTS**: `dots = total * 500 / (a*w^5 + b*w^4 + c*w^3 + d*w^2 + e*w + f)` (gender-specific coefficients)
- **Wilks**: `wilks = total * 500 / (a + b*w + c*w^2 + d*w^3 + e*w^4 + f*w^5)` (gender-specific coefficients)
- **IPF GL**: `ipfGL = (total * 100) / (a - b * exp(-c * w))` (gender-specific coefficients)
- `w` = bodyWeightKg

## Example
Male lifter:
- Bodyweight: 93 kg
- Squat: 220 kg
- Bench: 140 kg
- Deadlift: 260 kg

Calculations:
- Total = 220 + 140 + 260 = **620 kg**
- DOTS ≈ **431.12**
- Wilks ≈ **387.66**
- IPF GL ≈ **95.72**
