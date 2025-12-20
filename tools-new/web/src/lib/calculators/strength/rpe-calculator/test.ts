import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("rpe-calculator", () => {
  it("returns estimated 1RM for valid input", () => {
    const result = calculator({
      weightKg: 100,
      reps: 5,
      rpe: 9,
    });

    expect(result).toBeGreaterThan(100);
  });

  it("returns null for invalid RPE", () => {
    const result = calculator({
      weightKg: 100,
      reps: 5,
      rpe: 3,
    });

    expect(result).toBeNull();
  });
});
