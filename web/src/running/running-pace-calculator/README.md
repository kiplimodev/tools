# Running Pace Calculator

## Description
Calculate running pace per kilometer and per mile plus speed in km/h and mph from a given distance and finish time. Accepts distances in kilometers or miles and always returns paces for both units.

## Inputs
- `distance` (number): Total distance covered.
- `unit` ("km" | "mi"): Unit for the provided distance.
- `time` (string): Duration in `hh:mm:ss` or total seconds.

## Outputs
- `pacePerKm` (string): Pace per kilometer formatted as `mm:ss`.
- `pacePerMile` (string): Pace per mile formatted as `mm:ss`.
- `speedKmh` (number): Speed in kilometers per hour.
- `speedMph` (number): Speed in miles per hour.

## Formulas
- `totalSeconds = hh * 3600 + mm * 60 + ss`
- `totalHours = totalSeconds / 3600`
- `paceSeconds = totalSeconds / distance`
- `speed = distance / totalHours`
- Conversion: `1 mile = 1.60934 km`, `1 km = 0.621371 miles`

## Example
For a 10 km run completed in `00:50:00`:
- `pacePerKm` = `05:00`
- `pacePerMile` ≈ `08:03`
- `speedKmh` = `12`
- `speedMph` ≈ `7.46`
