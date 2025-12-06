# Split Calculator

## Description
Generates custom distance splits for a run by evenly distributing total time across configurable split lengths. Supports kilometer or mile inputs and outputs with automatic unit conversion and handles partial final splits when the distance does not divide evenly.

## Inputs
- `totalDistance`: Total distance of the run in kilometers or miles.
- `unit`: Unit for the total distance (`"km"` | `"mi"`).
- `time`: Total run time in `hh:mm:ss` format.
- `splitDistance`: Desired split length in the chosen split unit.
- `splitUnit` (optional): Unit for splits (`"km"` | `"mi"`). Defaults to the input unit.

## Outputs
- `splits`: Array of split details including split number, split distance, cumulative distance, split time, and cumulative time.

## Formulas
- `totalSeconds = hh * 3600 + mm * 60 + ss`
- Unit conversions when needed:
  - `km -> mi = km * 0.621371`
  - `mi -> km = mi * 1.60934`
- `paceSecondsPerUnit = totalSeconds / totalDistanceInSplitUnit`
- `splitTimeSeconds = paceSecondsPerUnit * splitDistance`
- `cumulativeTimeSeconds = paceSecondsPerUnit * cumulativeDistance`

## Example
For a 10 km run completed in `00:50:00` with 0.4 km splits:

```
Split 1: 0.4 km in 2:00 (cumulative 2:00)
Split 2: 0.8 km in 2:00 (cumulative 4:00)
...
Split 25: 10 km in 2:00 (cumulative 50:00)
```

The final cumulative distance equals the total (10 km) with 25 evenly distributed splits.
