import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("rowing-calories-calculator", () => {
  it("returns calories for valid input", () => {
    const result = calculator({
      weightKg: 70,
      durationMinutes: 30,
      mets: 7,
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      durationMinutes: 30,
      mets: 7,
    });

    expect(result).toBeNull();
  });
});
