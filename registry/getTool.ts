import * as BMI from "../body-composition/bmi-calculator";
import * as RunningPaceCalculator from "../running/running-pace-calculator";

/**
 * Tool registry – maps tool IDs to their modules.
 */
export const tools: Record<string, any> = {
  bmi: BMI,
  "running-pace-calculator": RunningPaceCalculator,
};

/** Returns a tool module by ID. */
export function getTool(id: string) {
  return tools[id] || null;
}
