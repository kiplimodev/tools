// src/lib/calculators/calories/bike-calorie-calculator/types.ts

export type Input = {
  /** Body weight in kilograms */
  weightKg: number;

  /** Duration of cycling in minutes */
  durationMinutes: number;

  /** MET value for cycling intensity */
  met: number;
};
