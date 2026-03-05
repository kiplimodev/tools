# Ideal Weight Calculator

## Description
Calculates estimated ideal body weights using four common formulas (Devine, Hamwi, Robinson, and Miller) based on height and gender.

## Inputs
- `gender` ("male" | "female")
- `heightCm` (number) — height in centimeters

## Outputs
- `devine` (number) — ideal weight in kg (Devine)
- `hamwi` (number) — ideal weight in kg (Hamwi)
- `robinson` (number) — ideal weight in kg (Robinson)
- `miller` (number) — ideal weight in kg (Miller)

## Formulas
1. Convert height to inches: `heightInches = heightCm / 2.54`
2. Inches over five feet: `inchesOverFiveFeet = max(heightInches - 60, 0)`
3. Apply formulas (weights in kg):
   - **Devine**
     - Male: `50 + 2.3 × inchesOverFiveFeet`
     - Female: `45.5 + 2.3 × inchesOverFiveFeet`
   - **Hamwi**
     - Male: `48 + 2.7 × inchesOverFiveFeet`
     - Female: `45.5 + 2.2 × inchesOverFiveFeet`
   - **Robinson**
     - Male: `52 + 1.9 × inchesOverFiveFeet`
     - Female: `49 + 1.7 × inchesOverFiveFeet`
   - **Miller**
     - Male: `56.2 + 1.41 × inchesOverFiveFeet`
     - Female: `53.1 + 1.36 × inchesOverFiveFeet`
4. Round each result to one decimal place.

## Example
**Male**
- Height: 180 cm → 70.9 in (10.9 in over 5 ft)
- Devine: 75.1 kg
- Hamwi: 77.4 kg
- Robinson: 72.7 kg
- Miller: 71.5 kg
