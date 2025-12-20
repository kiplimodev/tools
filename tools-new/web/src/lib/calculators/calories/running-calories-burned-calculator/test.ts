import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("running-calories-burned-calculator", () => {
  it("returns calories burned for valid input", () => {
    const result = calculator({
      weightKg: 70,
      durationMinutes: 30,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      durationMinutes: 30,
    });

    expect(result).toBeNull();
  });
});
