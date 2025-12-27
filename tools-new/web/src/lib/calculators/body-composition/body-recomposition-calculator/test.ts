import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("body recomposition calculator", () => {
  it("returns lean mass gain", () => {
    const result = calculator({
      startingWeightKg: 80,
      startingBodyFatPercent: 25,
      endingWeightKg: 82,
      endingBodyFatPercent: 23,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      startingWeightKg: 0,
      startingBodyFatPercent: 25,
      endingWeightKg: 82,
      endingBodyFatPercent: 23,
    });

    expect(result).toBeNull();
  });
});
