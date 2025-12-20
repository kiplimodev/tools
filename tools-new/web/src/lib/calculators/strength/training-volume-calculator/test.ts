import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("training-volume-calculator", () => {
  it("returns volume for valid input", () => {
    const result = calculator({
      weightKg: 100,
      reps: 5,
      sets: 3,
    });

    expect(result).toBe(1500);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      weightKg: 0,
      reps: 5,
      sets: 3,
    });

    expect(result).toBeNull();
  });
});
