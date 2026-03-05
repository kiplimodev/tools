# Waist-To-Height Ratio Calculator

## Description
Calculates the waist-to-height ratio and provides a health risk category based on WHO/ASH guidelines.

## Inputs
- `waistCm`: Waist circumference in centimeters.
- `heightCm`: Height in centimeters.

## Outputs
- `ratio`: Waist-to-height ratio rounded to two decimals.
- `category`: Health interpretation derived from the ratio.

## Formula
- `ratio = waistCm / heightCm`
- Rounded to two decimal places.

### Categories
- `< 0.40`: **underweight risk**
- `0.40–0.49`: **healthy**
- `0.50–0.59`: **increased risk**
- `≥ 0.60`: **high risk**

## Example
- Waist: 85 cm
- Height: 170 cm
- Ratio: `85 / 170 = 0.50`
- Category: **increased risk**
