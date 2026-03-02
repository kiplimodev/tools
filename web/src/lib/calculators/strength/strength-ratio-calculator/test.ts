import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("strength-ratio-calculator", () => {
  it("returns ratios for valid lifts", () => {
    const result = calculator({ bodyWeightKg: 90, benchKg: 100, squatKg: 150, deadliftKg: 180 });
    expect(result).not.toBeNull();
    expect(typeof result!.benchToBody).toBe("number");
    expect(typeof result!.squatToBody).toBe("number");
    expect(typeof result!.deadliftToBody).toBe("number");
  });

  it("returns null for zero body weight", () => {
    expect(calculator({ bodyWeightKg: 0, benchKg: 100, squatKg: 150, deadliftKg: 180 })).toBeNull();
  });

  it("returns null when all lifts are zero", () => {
    expect(calculator({ bodyWeightKg: 90, benchKg: 0, squatKg: 0, deadliftKg: 0 })).toBeNull();
  });
});
