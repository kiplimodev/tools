# Running Splits Calculator

## Description
Generates per-split pacing for a run by dividing the total time evenly across the total distance. Supports kilometer or mile splits regardless of the input distance unit.

## Inputs
- `distance`: Total distance of the run in kilometers or miles.
- `unit`: Unit for the input distance (`"km"` | `"mi"`).
- `time`: Total run time in `hh:mm:ss` format.
- `splitUnit` (optional): Desired split unit (`"km"` | `"mi"`). Defaults to the input unit.

## Outputs
- `splits`: Array of split details including split number, cumulative distance, split time, and cumulative time.

## Formulas
- `totalSeconds = hh * 3600 + mm * 60 + ss`
- Convert distance to the requested split unit when needed:
  - `km -> mi = km * 0.621371`
  - `mi -> km = mi * 1.60934`
- `paceSecondsPerUnit = totalSeconds / totalDistanceInSplitUnit`
- `splitTimeSeconds = paceSecondsPerUnit * splitDistance`
- `cumulativeTimeSeconds = paceSecondsPerUnit * cumulativeDistance`

## Example
For a 10 km run completed in `00:50:00` with kilometer splits:

```
Split 1: 1 km in 5:00 (cumulative 5:00)
Split 2: 2 km in 5:00 (cumulative 10:00)
...
Split 10: 10 km in 5:00 (cumulative 50:00)
```
