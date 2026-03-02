import { calculator as calculateTdee } from "../tdee-calculator";
import type { Input } from "./types";

const SURPLUS_KCAL: Record<Input["surplus"], number> = {
  small: 250,
  medium: 500,
  large: 750,
};

export function calculator(input: Input): number | null {
  const tdee = calculateTdee(input);
  if (tdee === null) return null;

  const surplus = SURPLUS_KCAL[input.surplus];
  if (surplus === undefined) return null;

  return Math.round(tdee + surplus);
}
