import { CalculatorInput, CalculatorOutput } from "./types";
import { calculateCore } from "./utils";

/**
 * Entry point for this calculator.
 */
export function calculate(input: CalculatorInput): CalculatorOutput {
  return calculateCore(input);
}
