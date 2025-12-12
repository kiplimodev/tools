# TDEE Calculator

## Description
Calculates Basal Metabolic Rate (BMR), Total Daily Energy Expenditure (TDEE), and macro recommendations using Mifflin–St Jeor or Katch–McArdle (when body fat is provided). Includes activity multipliers and optional cut/bulk calorie targets.

## Inputs
- gender: "male" | "female"
- age: number
- weightKg: number
- heightCm: number
- activityLevel: "sedentary" | "light" | "moderate" | "active" | "very_active" | "athlete"
- goal?: "maintain" | "cut" | "bulk"
- bodyFatPercent?: number (enables Katch–McArdle BMR)

## Outputs
- bmr
- tdee
- activityMultiplier
- methodUsed: "mifflin" | "katch-mcardle"
- maintenanceCalories
- cutCalories? (if goal provided)
- bulkCalories? (if goal provided)
- proteinGrams
- fatGrams
- carbGrams

## Formulas
### BMR
- **Mifflin–St Jeor (default)**
  - Male: `10 * weightKg + 6.25 * heightCm - 5 * age + 5`
  - Female: `10 * weightKg + 6.25 * heightCm - 5 * age - 161`
- **Katch–McArdle (preferred when bodyFatPercent provided)**
  - `LBM = weightKg * (1 - bodyFatPercent/100)`
  - `BMR = 370 + 21.6 * LBM`

### Activity Multipliers
- sedentary: 1.2
- light: 1.375
- moderate: 1.55
- active: 1.725
- very_active: 1.9
- athlete: 2.1

### TDEE and Goals
- `tdee = bmr * activityMultiplier`
- `maintenanceCalories = tdee`
- `cutCalories = tdee - 300`
- `bulkCalories = tdee + 300`

### Macro Recommendations (by goal)
- **Maintain**: protein = 1.6 g/kg; fat = 25% calories; carbs = remaining
- **Cut**: protein = 2.0 g/kg; fat = 20% calories; carbs = remaining
- **Bulk**: protein = 1.8 g/kg; fat = 25% calories; carbs = remaining
- `proteinCalories = proteinGrams * 4`
- `fatCalories = maintenanceCalories * fatPercent`
- `carbCalories = maintenanceCalories - (proteinCalories + fatCalories)`
- `carbGrams = carbCalories / 4`

## Example
```
Male, 30 yrs, 80kg, 180cm
Activity: moderate

BMR (Mifflin) = 1780.0
Activity multiplier = 1.55
TDEE = 2759.0
Maintenance = 2759.0
Cut = 2459.0
Bulk = 3059.0

Protein ≈ 128.0 g
Fat ≈ 77.2 g
Carbs ≈ 330.8 g
```
