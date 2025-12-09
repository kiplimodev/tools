# 1 Rep Max Calculator

## Description
Estimate one-repetition maximum (1RM) strength from submaximal sets using multiple established formulas.

## Inputs
- **weightKg**: Weight lifted for the set (kg)
- **reps**: Repetitions completed at that weight (1–20)

## Outputs
- **epley**: 1RM estimate using the Epley formula (kg)
- **brzycki**: 1RM estimate using the Brzycki formula (kg)
- **lombardi**: 1RM estimate using the Lombardi formula (kg)
- **oconner**: 1RM estimate using the O'Conner formula (kg)
- **lander**: 1RM estimate using the Lander formula (kg)

## Formulas
- **Epley**: `1RM = weight * (1 + reps / 30)`
- **Brzycki**: `1RM = weight * (36 / (37 - reps))`
- **Lombardi**: `1RM = weight * reps^0.10`
- **O'Conner**: `1RM = weight * (1 + reps / 40)`
- **Lander**: `1RM = (100 * weight) / (101.3 - 2.67123 * reps)`

Each result is rounded to one decimal place. If `reps = 1`, the lifted weight is returned for all formulas.

## Example
```
weightKg: 100
reps: 5

Epley    ≈ 116.7
Brzycki  ≈ 114.3
Lombardi ≈ 112.2
O'Conner ≈ 112.5
Lander   ≈ 113.9
```
