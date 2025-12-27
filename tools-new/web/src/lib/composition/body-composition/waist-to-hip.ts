import { calculator } from "@/lib/calculators/body-composition/waist-to-hip-ratio-calculator";
import type { Input } from "@/lib/calculators/body-composition/waist-to-hip-ratio-calculator";

type Result = {
  ratio: number;
  category: "low" | "moderate" | "high";
};

export function getWaistToHipRatio(input: Input): Result | null {
  const ratio = calculator(input);

  if (ratio === null) return null;

  let category: Result["category"];

  if (ratio < 0.85) category = "low";
  else if (ratio < 0.9) category = "moderate";
  else category = "high";

  return { ratio, category };
}
