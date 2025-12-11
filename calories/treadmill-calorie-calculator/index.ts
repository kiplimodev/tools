import { TreadmillCalorieCalculatorInput, TreadmillCalorieCalculatorOutput } from "./types";
import { calculateCore } from "./utils";

export function calculate(
  input: TreadmillCalorieCalculatorInput
): TreadmillCalorieCalculatorOutput {
  return calculateCore(input);
}
