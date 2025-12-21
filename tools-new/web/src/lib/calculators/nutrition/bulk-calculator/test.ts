import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("bulk-calculator", () => {
  it("returns total calories for valid input", () => {
    const result = calculator({
      maintenanceCalories: 2500,
      surplusCalories: 300,
    });

    expect(result).toBe(2800);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      maintenanceCalories: 0,
      surplusCalories: 300,
    });

    expect(result).toBeNull();
  });
});
