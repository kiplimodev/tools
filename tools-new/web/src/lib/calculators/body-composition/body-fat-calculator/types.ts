export type Input = {
  /** Body weight in kilograms */
  weightKg: number;

  /** Height in centimeters */
  heightCm: number;

  /** Age in years */
  age: number;

  /** Biological sex */
  sex: "male" | "female";
};
