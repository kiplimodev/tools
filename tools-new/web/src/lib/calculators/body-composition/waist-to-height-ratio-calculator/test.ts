import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("waist-to-height ratio calculator", () => {
  it("calculates ratio correctly", () => {
    const result = calculator({
      waistCm: 80,
      heightCm: 170,
    });

    expect(result).toBeCloseTo(0.47, 2);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      waistCm: 0,
      heightCm: 170,
    });

    expect(result).toBeNull();
  });
});
