import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("plate-weight-calculator", () => {
  it("returns plate weight for valid input", () => {
    const result = calculator({
      targetWeightKg: 100,
      barbellWeightKg: 20,
    });

    expect(result).toBe(80);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      targetWeightKg: 15,
      barbellWeightKg: 20,
    });

    expect(result).toBeNull();
  });
});
