import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("lean-bulk-calculator", () => {
  it("returns total calories for valid input", () => {
    const result = calculator({
      maintenanceCalories: 2400,
      surplusCalories: 200,
    });

    expect(result).toBe(2600);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      maintenanceCalories: 0,
      surplusCalories: 200,
    });

    expect(result).toBeNull();
  });
});
