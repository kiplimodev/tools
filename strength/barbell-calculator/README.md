# Barbell Calculator

## Description
Determine the required plates per side to reach a target barbell weight given the bar weight and available plates. Uses a greedy allocation strategy with a default Olympic plate set if none is provided.

## Inputs
- **barWeightKg**: Bar weight in kilograms (e.g., 20).
- **targetWeightKg**: Desired total barbell weight.
- **availablePlatesKg**: Optional list of plate weights in kilograms. Defaults to `[25, 20, 15, 10, 5, 2.5, 1.25]` sorted descending.

## Outputs
- **perSideWeight**: Total plate weight loaded on one side (kg).
- **platesPerSide**: List of plate weights used on one side.
- **missingWeight**: Remaining weight if an exact load is not possible (> 0.25 kg), rounded to 2 decimals.

## Formulas
1. **Load per side**: `(targetWeightKg - barWeightKg) / 2`
2. **Plate selection**: Greedy loop over descending plate list, subtracting the plate weight while remaining load allows.
3. **Missing weight**: Any remainder > 0.25 kg after plate selection, rounded to 2 decimals.

## Example
```
Bar weight: 20 kg
Target weight: 100 kg
Available plates: default

Load per side = (100 - 20) / 2 = 40 kg
Plates chosen: 20 + 10 + 5 + 5 = 40 kg

Output:
perSideWeight = 40
platesPerSide = [20, 10, 5, 5]
missingWeight = 0
```
