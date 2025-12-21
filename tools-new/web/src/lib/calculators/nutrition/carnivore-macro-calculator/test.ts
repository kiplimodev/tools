import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("carnivore-macro-calculator", () => {
  it("returns fat grams for valid input", () => {
    const result = calculator({
      calories: 2500,
      proteinGrams: 200,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      calories: 600,
      proteinGrams: 200,
    });

    expect(result).toBeNull();
  });
});
