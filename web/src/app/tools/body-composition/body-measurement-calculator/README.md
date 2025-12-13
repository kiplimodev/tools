# Body Measurement Calculator

## Description
Aggregates circumference measurements to provide summary statistics, including totals, averages, and range, for any combination of tracked body parts.

## Inputs
- `neckCm` (optional)
- `chestCm` (optional)
- `waistCm` (optional)
- `hipCm` (optional)
- `thighCm` (optional)
- `calfCm` (optional)
- `bicepCm` (optional)
- `forearmCm` (optional)

## Outputs
- `measurementsCount` — number of provided measurements
- `totalCm` — sum of all provided measurements (rounded to nearest cm)
- `averageCm` — average of provided measurements (rounded to 1 decimal)
- `minCm` — smallest measurement (rounded to nearest cm)
- `maxCm` — largest measurement (rounded to nearest cm)
- `measurements` — cleaned record of included measurements

## Formula
1. Filter out undefined entries and validate remaining values are positive numbers.
2. Sum provided measurements and count entries.
3. Compute average, minimum, and maximum from the provided values.
4. Round: total/min/max to integers and average to one decimal place.
5. Throw an error if no measurements are supplied.

## Example
Inputs:
- waist = 82 cm
- chest = 95 cm
- hip = 100 cm

Summary:
- `measurementsCount` = 3
- `totalCm` = 277
- `averageCm` = 92.3
- `minCm` = 82
- `maxCm` = 100
