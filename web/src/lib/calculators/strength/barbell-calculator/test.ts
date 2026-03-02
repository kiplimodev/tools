import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("barbell-calculator", () => {
  it("returns plate combination for valid load", () => {
    const result = calculator({ barWeightKg: 20, targetWeightKg: 100 });
    expect(result).not.toBeNull();
    expect(result!.platesPerSide.length).toBeGreaterThan(0);
    expect(result!.perSideWeight).toBe(40);
  });

  it("returns null when target is less than bar weight", () => {
    expect(calculator({ barWeightKg: 20, targetWeightKg: 10 })).toBeNull();
  });

  it("returns null for zero bar weight", () => {
    expect(calculator({ barWeightKg: 0, targetWeightKg: 60 })).toBeNull();
  });
});
