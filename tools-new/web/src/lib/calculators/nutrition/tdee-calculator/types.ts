export type Input = {
  /** Weight in kilograms */
  weightKg: number;

  /** Height in centimeters */
  heightCm: number;

  /** Age in years */
  age: number;

  /** Biological sex */
  sex: "male" | "female";

  /**
   * Activity multiplier
   * sedentary ~1.2
   * light ~1.375
   * moderate ~1.55
   * active ~1.725
   * very active ~1.9
   */
  activityMultiplier: number;
};
