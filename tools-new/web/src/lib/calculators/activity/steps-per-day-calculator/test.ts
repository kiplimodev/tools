import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("steps-per-day-calculator", () => {
  it("returns steps for valid input", () => {
    const result = calculator({
      activeCalories: 300,
      caloriesPerStep: 0.04,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      activeCalories: 0,
      caloriesPerStep: 0.04,
    });

    expect(result).toBeNull();
  });
});
