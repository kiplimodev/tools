# Waist-To-Hip Ratio Calculator

## Description
Calculates the waist-to-hip ratio and classifies cardiometabolic risk using WHO gender-specific thresholds.

## Inputs
- `gender`: "male" | "female"
- `waistCm`: waist circumference in centimeters
- `hipCm`: hip circumference in centimeters

## Outputs
- `ratio`: waist-to-hip ratio rounded to two decimals
- `category`: risk category based on gender-specific WHO guidelines

## Formula
```
ratio = waistCm / hipCm
```
Round the ratio to two decimal places before returning.

### WHO Risk Categories
**Male**
- < 0.90 → low risk
- 0.90–0.99 → moderate risk
- ≥ 1.00 → high risk

**Female**
- < 0.80 → low risk
- 0.80–0.84 → moderate risk
- ≥ 0.85 → high risk

## Example
Male with waist 95 cm and hip 90 cm:
```
ratio = 95 / 90 ≈ 1.06 → "high risk"
```
