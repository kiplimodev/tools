import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("body-fat-calculator", () => {
  it("returns body fat percentage for valid input", () => {
    const result = calculator({
      weightKg: 80,
      heightCm: 180,
      age: 30,
      sex: "male",
    });

    expect(result).not.toBeNull();
    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      heightCm: 180,
      age: 30,
      sex: "male",
    });

    expect(result).toBeNull();
  });
});
