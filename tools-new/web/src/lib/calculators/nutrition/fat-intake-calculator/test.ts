import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("fat-intake-calculator", () => {
  it("returns fat intake for valid input", () => {
    const result = calculator({
      weightKg: 80,
      goal: "moderate",
    });

    expect(result).toBeGreaterThan(0);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      goal: "low",
    });

    expect(result).toBeNull();
  });
});
