import {
  IntermittentFastingCalculatorInput,
  IntermittentFastingCalculatorOutput,
} from "./types";
import { calculateCore } from "./utils";

export function calculate(
  input: IntermittentFastingCalculatorInput
): IntermittentFastingCalculatorOutput {
  return calculateCore(input);
}
