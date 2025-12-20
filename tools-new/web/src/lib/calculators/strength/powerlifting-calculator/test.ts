import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("powerlifting-calculator", () => {
  it("returns total for valid input", () => {
    const result = calculator({
      squatKg: 200,
      benchKg: 140,
      deadliftKg: 240,
    });

    expect(result).toBe(580);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      squatKg: 0,
      benchKg: 140,
      deadliftKg: 240,
    });

    expect(result).toBeNull();
  });
});
