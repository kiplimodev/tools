import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("waist-to-hip ratio calculator", () => {
  it("returns correct ratio for valid input", () => {
    const result = calculator({
      waistCm: 80,
      hipCm: 100,
    });

    expect(result).toBeCloseTo(0.8);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      waistCm: 0,
      hipCm: 100,
    });

    expect(result).toBeNull();
  });
});
