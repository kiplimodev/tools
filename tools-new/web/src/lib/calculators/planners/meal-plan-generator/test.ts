import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("meal-plan-generator", () => {
  it("returns calories per meal for valid input", () => {
    const result = calculator({
      calories: 2400,
      proteinGrams: 150,
      mealsPerDay: 4,
    });

    expect(result).toBe(600);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      calories: 0,
      proteinGrams: 150,
      mealsPerDay: 4,
    });

    expect(result).toBeNull();
  });
});
