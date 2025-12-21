import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("dumbbell-weight-calculator", () => {
  it("returns plate weight for valid input", () => {
    const result = calculator({
      targetWeightKg: 40,
      handleWeightKg: 5,
    });

    expect(result).toBe(35);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      targetWeightKg: 5,
      handleWeightKg: 10,
    });

    expect(result).toBeNull();
  });
});
