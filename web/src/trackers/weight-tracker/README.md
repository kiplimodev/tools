# Weight Tracker

## Description
Analyze weight entries over time to uncover daily changes, weekly averages, trend direction, and an estimated date to reach a goal weight using linear regression.

## Inputs
- `entries`: Array of `{ date: "YYYY-MM-DD", weightKg: number }` (can be unsorted)
- `goalWeightKg` (optional): Target weight for projection

## Outputs
- `sortedEntries`: Entries sorted by date ascending
- `dailyChange`: Difference between the last and previous entry (kg)
- `weeklyAverage`: Average of the last seven (or fewer) entries (kg)
- `rateKgPerWeek`: Trend slope in kg per week (linear regression)
- `projectedDateToGoal`: Estimated date to reach the goal (if provided and trend available)
- `trendDirection`: "up", "down", or "stable" based on the trend slope

## Formulas & Logic
- **Sorting**: Entries sorted by date ascending.
- **Daily change**: `latest.weight - previous.weight`.
- **Weekly average**: Mean of the last up to 7 entries.
- **Trend (linear regression)**: Slope `b = cov(x,y) / var(x)` using day indices as `x`; `rateKgPerWeek = b * 7`.
- **Trend direction**: `up` if rate > 0.05 kg/week, `down` if < -0.05 kg/week, else `stable`.
- **Goal projection**: `weeksToGoal = (goal - latestWeight) / rateKgPerWeek`; projected date = `latestDate + weeksToGoal * 7 days`.

## Example
Entries:
- 2024-01-01 → 78.2 kg
- 2024-01-02 → 78.0 kg
- 2024-01-03 → 77.8 kg
- 2024-01-05 → 77.6 kg
- 2024-01-07 → 77.4 kg

Trend: approximately -0.25 kg/week (down)
Projected goal date (75 kg): around 2024-02-14
