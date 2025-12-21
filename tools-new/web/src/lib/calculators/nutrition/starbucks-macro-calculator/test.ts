import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("starbucks-macro-calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      calories: 250,
      proteinGrams: 10,
      carbsGrams: 30,
      fatGrams: 8,
    });

    expect(result).toBe(250);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      calories: -10,
      proteinGrams: 5,
      carbsGrams: 20,
      fatGrams: 5,
    });

    expect(result).toBeNull();
  });
});
