import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("treadmill-calorie-calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      weightKg: 70,
      speedKmh: 8,
      durationMinutes: 30,
    });

    expect(result).toBeTypeOf("number");
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      speedKmh: 8,
      durationMinutes: 30,
    });

    expect(result).toBeNull();
  });
});
