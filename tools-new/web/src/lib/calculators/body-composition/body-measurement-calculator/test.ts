import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("body-measurement-calculator", () => {
  it("returns a measurement score for valid input", () => {
    const result = calculator({
      waistCm: 80,
      hipCm: 95,
      chestCm: 100,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      waistCm: 0,
      hipCm: 95,
      chestCm: 100,
    });

    expect(result).toBeNull();
  });
});
