import type { Input, Output } from "./types";

export function calculator(input: Input): Output | null {
  if (input.weight <= 0) return null;

  const dailyDose = Math.round(input.weight * 0.03);

  if (input.protocol === "loading") {
    return {
      dailyDose,
      loadingDose: Math.round(input.weight * 0.3),
    };
  }

  return { dailyDose, loadingDose: null };
}
