# Body Fat Calculator

## Description
Estimates body fat percentage using the U.S. Navy circumference method for both males and females based on height and body measurements.

## Inputs
- `gender`: "male" or "female"
- `heightCm`: Height in centimeters
- `neckCm`: Neck circumference in centimeters
- `waistCm`: Waist circumference in centimeters
- `hipCm`: Hip circumference in centimeters (required for females)

## Outputs
- `bodyFatPercentage`: Estimated body fat percentage rounded to one decimal place

## Formulas
### Male
`BF% = 86.010 * log10(waist - neck) - 70.041 * log10(height) + 36.76`

### Female
`BF% = 163.205 * log10(waist + hip - neck) - 97.684 * log10(height) - 78.387`

## Example
Male example:
- Height: 180 cm
- Neck: 40 cm
- Waist: 85 cm

Estimated body fat percentage ≈ 17.3%.
