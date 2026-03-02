import { calculator as calculateTdee } from "../tdee-calculator";
import type { Input } from "./types";

const RATE_MULTIPLIER: Record<Input["rate"], number> = {
  conservative: 0.05,
  standard: 0.08,
  aggressive: 0.12,
};

const MAX_SURPLUS_KCAL = 350;
const MIN_SURPLUS_KCAL = 150;

export function calculator(input: Input): number | null {
  const tdee = calculateTdee(input);
  if (tdee === null) return null;

  const rate = RATE_MULTIPLIER[input.rate];
  if (rate === undefined) return null;

  const rawSurplus = Math.round(tdee * rate);
  const cappedSurplus = Math.min(
    MAX_SURPLUS_KCAL,
    Math.max(MIN_SURPLUS_KCAL, rawSurplus)
  );

  return Math.round(tdee + cappedSurplus);
}
