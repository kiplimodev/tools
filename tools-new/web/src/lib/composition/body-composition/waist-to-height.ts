import { calculator } from "@/lib/calculators/body-composition/waist-to-height-ratio-calculator";
import type { Input } from "@/lib/calculators/body-composition/waist-to-height-ratio-calculator";

export type WaistToHeightResult = {
  ratio: number;
  category: "low" | "healthy" | "high" | "very-high";
};

export function getWaistToHeightRatio(
  input: Input
): WaistToHeightResult | null {
  const ratio = calculator(input);

  if (ratio === null) return null;

  let category: WaistToHeightResult["category"];

  if (ratio < 0.4) category = "low";
  else if (ratio < 0.5) category = "healthy";
  else if (ratio < 0.6) category = "high";
  else category = "very-high";

  return {
    ratio,
    category,
  };
}
