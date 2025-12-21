import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("tdee-calculator", () => {
  it("returns TDEE for valid input", () => {
    const result = calculator({
      weightKg: 80,
      heightCm: 180,
      age: 30,
      sex: "male",
      activityMultiplier: 1.55,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      heightCm: 180,
      age: 30,
      sex: "male",
      activityMultiplier: 1.55,
    });

    expect(result).toBeNull();
  });
});
