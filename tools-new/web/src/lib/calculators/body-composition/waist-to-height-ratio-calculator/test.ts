import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("waist-to-height-ratio-calculator", () => {
  it("returns ratio for valid input", () => {
    const result = calculator({
      waistCm: 80,
      heightCm: 180,
    });

    expect(result).toBeCloseTo(0.44, 2);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      waistCm: 0,
      heightCm: 180,
    });

    expect(result).toBeNull();
  });
});
