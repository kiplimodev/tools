export interface CalculatorInput {
  gender: "male" | "female";
  age: number;
  weightKg: number;
  heightCm: number;
  activityLevel:
    | "sedentary"
    | "light"
    | "moderate"
    | "active"
    | "very_active"
    | "athlete";
  goal?: "maintain" | "cut" | "bulk";
  bodyFatPercent?: number;
}

export interface CalculatorOutput {
  bmr: number;
  tdee: number;
  activityMultiplier: number;
  methodUsed: "mifflin" | "katch-mcardle";
  maintenanceCalories: number;
  cutCalories?: number;
  bulkCalories?: number;
  proteinGrams: number;
  fatGrams: number;
  carbGrams: number;
}
