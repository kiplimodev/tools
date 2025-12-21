import type { CalculatorV1 } from "@/lib/types/calculator.v1";
import type { Input } from "./types";

/**
 * Calculates fasting duration in hours.
 *
 * Example:
 * Start 12, End 20 → 16-hour fast
 */
export const calculator: CalculatorV1<Input> = (input) => {
  const { startHour, endHour } = input;

  if (
    startHour < 0 ||
    startHour > 23 ||
    endHour < 0 ||
    endHour > 23
  ) {
    return null;
  }

  const eatingWindow =
    endHour >= startHour
      ? endHour - startHour
      : 24 - startHour + endHour;

  const fastingHours = 24 - eatingWindow;

  if (fastingHours <= 0 || fastingHours > 24) return null;

  return fastingHours;
};
