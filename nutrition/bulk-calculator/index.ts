import { BulkCalculatorInput, BulkCalculatorOutput } from "./types";
import { calculateCore } from "./utils";

export function calculate(input: BulkCalculatorInput): BulkCalculatorOutput {
  return calculateCore(input);
}
