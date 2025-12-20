import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("bmi-calculator", () => {
  it("returns BMI for valid input", () => {
    const result = calculator({
      weightKg: 80,
      heightCm: 180,
    });

    expect(result).toBeCloseTo(24.7, 1);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      heightCm: 180,
    });

    expect(result).toBeNull();
  });
});
