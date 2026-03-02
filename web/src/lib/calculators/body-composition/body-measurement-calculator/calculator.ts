import type { Input, Output } from "./types";

// YMCA circumference method
// Male:   BF% = -98.42 + (4.15 × waist_in) − (0.082 × weight_lb)
// Female: BF% = -76.76 + (4.15 × waist_in) − (0.082 × weight_lb)
// Reference: Heyward & Wagner, Applied Body Composition Assessment
export function calculator(input: Input): Output | null {
  if (!input.sex || !input.weightKg || !input.waistCm) return null;
  if (input.weightKg <= 0 || input.waistCm <= 0) return null;

  const waistIn = input.waistCm / 2.54;
  const weightLb = input.weightKg / 0.453592;

  let bodyFatPercent: number;

  if (input.sex === "male") {
    bodyFatPercent = -98.42 + 4.15 * waistIn - 0.082 * weightLb;
  } else {
    // Extended YMCA female formula uses hip, forearm, wrist when available.
    // Simplified YMCA female formula (waist + weight only):
    bodyFatPercent = -76.76 + 4.15 * waistIn - 0.082 * weightLb;
  }

  // Clamp to physiologically plausible range
  bodyFatPercent = Math.max(3, Math.min(60, bodyFatPercent));

  const fatMassKg = input.weightKg * (bodyFatPercent / 100);
  const leanMassKg = input.weightKg - fatMassKg;

  return {
    bodyFatPercent: parseFloat(bodyFatPercent.toFixed(1)),
    fatMassKg: parseFloat(fatMassKg.toFixed(1)),
    leanMassKg: parseFloat(leanMassKg.toFixed(1)),
  };
}
