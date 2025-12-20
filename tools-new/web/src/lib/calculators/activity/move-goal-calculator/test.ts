import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("move-goal-calculator", () => {
  it("returns a higher move goal for valid input", () => {
    const result = calculator({
      currentStepsPerDay: 10000,
      increasePercent: 10,
    });

    expect(result).toBe(11000);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      currentStepsPerDay: 0,
      increasePercent: 10,
    });

    expect(result).toBeNull();
  });
});
