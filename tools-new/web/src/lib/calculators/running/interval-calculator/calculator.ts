import type { Input } from "./types";

export function calculator(input: Input): number | null {
  const { runSeconds, restSeconds, repeats } = input;

  if (
    runSeconds <= 0 ||
    restSeconds < 0 ||
    repeats <= 0 ||
    !Number.isInteger(repeats)
  ) {
    return null;
  }

  return runSeconds * repeats + restSeconds * (repeats - 1);
}
