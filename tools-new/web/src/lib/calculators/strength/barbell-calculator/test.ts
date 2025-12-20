import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("barbell-calculator", () => {
  it("returns total plate weight for valid input", () => {
    const result = calculator({
      targetWeightKg: 100,
      barWeightKg: 20,
    });

    expect(result).toBe(80);
  });

  it("returns null when target weight is less than bar weight", () => {
    const result = calculator({
      targetWeightKg: 15,
      barWeightKg: 20,
    });

    expect(result).toBeNull();
  });
});
