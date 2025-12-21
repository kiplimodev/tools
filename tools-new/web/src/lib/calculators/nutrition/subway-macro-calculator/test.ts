import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("subway-macro-calculator", () => {
  it("returns remaining calories for valid input", () => {
    const result = calculator({
      calories: 600,
      proteinGrams: 30,
      fatGrams: 20,
    });

    expect(result).toBeGreaterThanOrEqual(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      calories: 200,
      proteinGrams: 50,
      fatGrams: 20,
    });

    expect(result).toBeNull();
  });
});
