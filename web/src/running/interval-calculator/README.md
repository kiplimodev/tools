# Interval Calculator

## Description
Calculate interval workout timing, distances, and cumulative progress based on a target pace, interval distance, and optional warmup or cooldown durations.

## Inputs
- `intervalDistance`: distance of each interval (km or miles)
- `intervalUnit`: unit for interval distance ("km" | "mi")
- `numIntervals`: number of interval repeats
- `paceTime`: target pace time string (per paceUnit), formatted as `mm:ss` or `hh:mm:ss`
- `paceUnit`: unit the pace is based on ("km" | "mi")
- `restTime`: rest duration between intervals
- `warmupTime`: optional warmup duration
- `cooldownTime`: optional cooldown duration

## Outputs
- `totalDistance`: total workout distance in the interval unit
- `totalTime`: total workout time formatted as `mm:ss` or `hh:mm:ss`
- `workoutBreakdown`: per-interval timing, rest, cumulative time, and cumulative distance

## Formulas
- `paceSeconds = parse(paceTime)`
- Convert interval distance to match `paceUnit` when calculating interval time:
  - `km → miles` = `km * 0.621371`
  - `miles → km` = `miles * 1.60934`
- `intervalTimeSeconds = paceSeconds * intervalDistanceConverted`
- `cumulativeTime` accumulates warmup + (interval + rest per interval except after the last interval) + cooldown
- `totalDistance = intervalDistance * numIntervals`

## Example
Workout: `10 × 0.4 km @ 5:00/km`, Rest: `1:30`, Warmup: `10:00`, Cooldown: `10:00`

- Interval time: `5:00 * 0.4 = 2:00`
- Total distance: `0.4 km * 10 = 4 km`
- Total time: warmup (10:00) + intervals and rests (10 × 2:00 + 9 × 1:30) + cooldown (10:00) = `52:30`
