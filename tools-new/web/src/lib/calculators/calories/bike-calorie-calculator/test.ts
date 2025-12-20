import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("bike calorie calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      weightKg: 70,
      durationMinutes: 60,
      met: 8,
    });

    expect(result).toBe(560);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      durationMinutes: 60,
      met: 8,
    });

    expect(result).toBeNull();
  });
});
