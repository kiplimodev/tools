# BMI Calculator

## Description
Calculates Body Mass Index (BMI) from weight and height and classifies the result according to the World Health Organization categories.

## Inputs
- `weightKg` (number): Body weight in kilograms.
- `heightCm` (number): Body height in centimeters.

## Outputs
- `bmi` (number): Calculated BMI rounded to one decimal place.
- `category` (string): WHO BMI category (`"underweight"`, `"normal"`, `"overweight"`, or `"obese"`).

## Formula
1. Convert height to meters: `heightM = heightCm / 100`.
2. Compute BMI: `BMI = weightKg / (heightM * heightM)`.
3. Round BMI to one decimal place.
4. Categorize BMI using WHO thresholds:
   - `< 18.5` → `underweight`
   - `18.5–24.9` → `normal`
   - `25–29.9` → `overweight`
   - `>= 30` → `obese`

## Example
- Weight: 72 kg
- Height: 175 cm

Calculation:
- `heightM = 1.75`
- `BMI = 72 / (1.75 * 1.75) ≈ 23.5`
- Category: `normal`
