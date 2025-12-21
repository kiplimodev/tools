import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("weight-tracker", () => {
  it("returns positive delta for weight gain", () => {
    const result = calculator({
      startWeightKg: 70,
      currentWeightKg: 75,
    });

    expect(result).toBe(5);
  });

  it("returns negative delta for weight loss", () => {
    const result = calculator({
      startWeightKg: 80,
      currentWeightKg: 75,
    });

    expect(result).toBe(-5);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      startWeightKg: 0,
      currentWeightKg: 70,
    });

    expect(result).toBeNull();
  });
});
