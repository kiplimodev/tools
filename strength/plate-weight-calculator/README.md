# Plate Weight Calculator

## Description
Determine the plates needed on a single side of the bar to reach a target per-side weight. Uses a greedy selection with a default
 Olympic plate set if none is provided.

## Inputs
- **targetPerSideKg**: Desired plate load per side (kg).
- **availablePlatesKg**: Optional list of plate weights in kilograms. Defaults to `[25, 20, 15, 10, 5, 2.5, 1.25]` sorted descending.

## Outputs
- **plates**: Ordered list of plate weights used on one side.
- **totalLoaded**: Total weight successfully loaded per side (kg).
- **missingWeight**: Remaining unmet weight if an exact match is not possible (> 0.25 kg), rounded to 2 decimals.

## Formulas
1. **Sort plates** descending and iterate greedily.
2. **Selection loop**: While `remaining >= plate`, add plate and subtract from remaining.
3. **Missing weight**: Remaining load > 0.25 kg after selection, rounded to 2 decimals.

## Examples
Exact match:
```
targetPerSideKg = 37.5
plates = [20, 10, 5, 2.5]
totalLoaded = 37.5
missingWeight = 0
```

Imperfect match:
```
targetPerSideKg = 33
plates = [20, 10, 2.5]
totalLoaded = 32.5
missingWeight = 0.5
```
