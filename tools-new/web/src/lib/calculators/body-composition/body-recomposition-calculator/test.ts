import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("body-recomposition-calculator", () => {
  it("returns target weight for valid input", () => {
    const result = calculator({
      weightKg: 80,
      bodyFatPercent: 25,
      targetBodyFatPercent: 15,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      bodyFatPercent: 25,
      targetBodyFatPercent: 15,
    });

    expect(result).toBeNull();
  });
});
