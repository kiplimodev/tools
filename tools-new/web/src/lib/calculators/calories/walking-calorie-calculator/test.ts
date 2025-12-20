import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("walking calorie calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      weightKg: 70,
      durationMinutes: 60,
      met: 3.5,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      durationMinutes: 60,
      met: 3.5,
    });

    expect(result).toBeNull();
  });
});
