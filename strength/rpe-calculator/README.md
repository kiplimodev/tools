# RPE Calculator

## Description
Estimates one-rep max (1RM) or predicts training weight using RPE (Rate of Perceived Exertion) and reps. Supports two modes: estimating 1RM from a completed set or predicting weight for a target RPE/reps given an estimated 1RM.

## Inputs
- **Mode A (estimate 1RM)**
  - `weightKg`: weight lifted for the set
  - `reps`: repetitions performed
  - `rpe`: RPE for the set (6.0–10.0 in 0.5 steps)
- **Mode B (predict weight)**
  - `targetReps`: planned repetitions
  - `targetRpe`: target RPE (6.0–10.0 in 0.5 steps)
  - `estimated1RM`: lifter's estimated 1RM

## Outputs
- **Mode A**
  - `estimated1RM`
  - `percent1RM` (decimal chart value)
  - `rir` (reps in reserve)
  - `recommendedTrainingMax` (90% of estimated 1RM)
- **Mode B**
  - `predictedWeight`
  - `percent1RM` (decimal chart value)

## RPE Percentage Table (selected)
- RPE 10: 1, 0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79, 0.76, 0.74
- RPE 9.5: 0.98, 0.94, 0.90, 0.87, 0.85, 0.82, 0.80, 0.77
- RPE 9: 0.96, 0.92, 0.89, 0.86, 0.84, 0.81, 0.79
- RPE 8.5: 0.94, 0.90, 0.87, 0.84, 0.81
- RPE 8: 0.92, 0.89, 0.86, 0.84, 0.81
- RPE 7.5: 0.91, 0.88, 0.85, 0.82, 0.80
- RPE 7: 0.89, 0.86, 0.84, 0.81, 0.79
- RPE 6.5: 0.88, 0.85, 0.82, 0.80
- RPE 6: 0.86, 0.84, 0.81, 0.79

## Formulas
- **Lookup %1RM**: `percent = rpeChart[rpe][reps - 1]`
- **Estimate 1RM**: `estimated1RM = weightKg / percent`
- **RIR**: `rir = 10 - rpe`
- **Training Max**: `recommendedTrainingMax = estimated1RM * 0.9`
- **Predict Weight**: `predictedWeight = estimated1RM * percent`

## Examples
### Example A — Estimate 1RM
- Input: weight = 100 kg, reps = 5, RPE = 8.5
- If chart % = 0.84: `1RM = 100 / 0.84 ≈ 119.05`
- `RIR = 10 - 8.5 = 1.5`
- `Training Max = 119.05 * 0.9 ≈ 107.14`

### Example B — Predict Weight
- Input: target reps = 3, target RPE = 9, estimated 1RM = 200
- If chart % = 0.89: `predictedWeight = 200 * 0.89 = 178 kg`
