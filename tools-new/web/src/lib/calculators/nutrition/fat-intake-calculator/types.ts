export type Input = {
  /** Body weight in kilograms */
  weightKg: number;

  /** Goal type */
  goal: "low" | "moderate" | "high";
};
