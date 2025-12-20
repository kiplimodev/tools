import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("strength-ratio-calculator", () => {
  it("returns ratio for valid input", () => {
    const result = calculator({
      primaryLiftKg: 100,
      secondaryLiftKg: 200,
    });

    expect(result).toBe(0.5);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      primaryLiftKg: 0,
      secondaryLiftKg: 200,
    });

    expect(result).toBeNull();
  });
});
