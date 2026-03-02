import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("dumbbell-weight-calculator", () => {
  it("returns the closest available weight", () => {
    const result = calculator({ targetWeightKg: 17, availableWeightsKg: [10, 15, 20, 25] });
    expect(result).not.toBeNull();
    expect(result!.selectedWeight).toBe(15);
    expect(result!.missingWeight).toBe(2);
  });

  it("returns no missing weight for exact match", () => {
    const result = calculator({ targetWeightKg: 20, availableWeightsKg: [10, 15, 20, 25] });
    expect(result).not.toBeNull();
    expect(result!.selectedWeight).toBe(20);
    expect(result!.missingWeight).toBeNull();
  });

  it("returns null for zero target", () => {
    expect(calculator({ targetWeightKg: 0 })).toBeNull();
  });
});
