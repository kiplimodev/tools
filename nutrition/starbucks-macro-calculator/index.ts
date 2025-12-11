import {
  StarbucksMacroCalculatorInput,
  StarbucksMacroCalculatorOutput,
} from "./types";
import { calculateCore } from "./utils";

export function calculate(
  input: StarbucksMacroCalculatorInput
): StarbucksMacroCalculatorOutput {
  return calculateCore(input);
}
