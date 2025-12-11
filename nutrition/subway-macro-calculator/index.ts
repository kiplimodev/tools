import {
  SubwayMacroCalculatorInput,
  SubwayMacroCalculatorOutput,
} from "./types";
import { calculateCore } from "./utils";

export function calculate(
  input: SubwayMacroCalculatorInput
): SubwayMacroCalculatorOutput {
  return calculateCore(input);
}
