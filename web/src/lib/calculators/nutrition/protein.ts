export interface ProteinResult {
  recommendedGrams: number;
  range: [number, number];
}

export function proteinIntake(weightKg: number, goal: "maintenance" | "fat-loss" | "muscle-gain"): ProteinResult {
  const multiplier = goal === "muscle-gain" ? 2.0 : goal === "fat-loss" ? 1.8 : 1.6;
  const recommended = weightKg * multiplier;
  const lower = recommended * 0.9;
  const upper = recommended * 1.1;
  return {
    recommendedGrams: Math.round(recommended),
    range: [Math.round(lower), Math.round(upper)],
  };
}
