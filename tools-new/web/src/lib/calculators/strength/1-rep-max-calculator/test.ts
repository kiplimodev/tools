import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("1-rep-max-calculator", () => {
  it("returns estimated 1RM for valid input", () => {
    const result = calculator({
      weightKg: 100,
      reps: 5,
    });

    expect(result).toBeGreaterThan(100);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 100,
      reps: 0,
    });

    expect(result).toBeNull();
  });
});
