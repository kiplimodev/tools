import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("protein-powder-calculator", () => {
  it("returns scoops needed for valid input", () => {
    const result = calculator({
      proteinTargetGrams: 120,
      proteinPerScoopGrams: 24,
    });

    expect(result).toBe(5);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      proteinTargetGrams: 0,
      proteinPerScoopGrams: 24,
    });

    expect(result).toBeNull();
  });
});
