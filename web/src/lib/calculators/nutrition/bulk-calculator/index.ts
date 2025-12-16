import type { BulkInput } from "./types";
import { calculateTDEE } from "../tdee-calculator";

export function calculateBulkCalories(input: BulkInput): number | null {
  const tdee = calculateTDEE(input);
  if (!tdee) return null;

  const surplusMap: Record<BulkInput["surplus"], number> = {
    small: 250,
    medium: 500,
    large: 750,
  };

  return Math.round(tdee + surplusMap[input.surplus]);
}
