# Lean Body Mass Calculator

## Description
Calculate lean body mass (LBM) using the Boer formula with gender-specific coefficients for males and females.

## Inputs
- `gender`: "male" | "female"
- `weightKg`: Body weight in kilograms
- `heightCm`: Height in centimeters

## Outputs
- `leanBodyMassKg`: Estimated lean body mass rounded to one decimal place

## Formulas
- **Male (Boer):** `LBM = 0.407 × weightKg + 0.267 × heightCm - 19.2`
- **Female (Boer):** `LBM = 0.252 × weightKg + 0.473 × heightCm - 48.3`

## Example
Male example:
- Weight: 80 kg
- Height: 180 cm

`LBM = 0.407 × 80 + 0.267 × 180 - 19.2 ≈ 59.3 kg`
