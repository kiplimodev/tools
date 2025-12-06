# VDOT Calculator

## Description
The VDOT calculator estimates a runner's VDOT score using Jack Daniels' formulas, then derives training pace zones and predicts equivalent performances at common race distances.

## Inputs
- **distance**: Race distance value.
- **unit**: "km" or "mi" for the race distance.
- **time**: Finishing time in `hh:mm:ss` or `mm:ss` format.

## Outputs
- **vdot**: Calculated VDOT score.
- **trainingPaces**: Easy, marathon, threshold, interval, and repetition pace ranges expressed per km and per mile.
- **predictedRaces**: Estimated finish times for standard race distances based on the computed VDOT.

## Formulas
- **Velocity**: `velocity = distanceMeters / timeSeconds`
- **VO2**: `VO2 = -4.60 + 0.182258 * (velocity * 60) + 0.000104 * (velocity * 60)^2`
- **Percent of Max VO2**: `percentMax = 0.8 + 0.1894393 * e^(-0.012778 * timeMinutes) + 0.2989558 * e^(-0.1932605 * timeMinutes)`
- **VDOT**: `VDOT = VO2 / percentMax`
- **Training paces**: Scale VDOT velocity by factors (E 0.59, M 0.75, T 0.88, I 1.00, R 1.10) and convert to pace per km and per mile.
- **Race predictions**: `predictedTime = distance / velocityFromVDOT`

## Example
Input:
- Distance: 5 km
- Time: `00:20:00`

Result (approximate):
- **VDOT**: ~50
- **Training Paces**: Easy ≈ `5:00 /km | 8:03 /mi`, Threshold ≈ `4:00 /km | 6:26 /mi`
- **Predicted Race**: 10K ≈ `00:41:30`
