import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("running pace calculator", () => {
  it("returns seconds per km for valid input", () => {
    const result = calculator({
      distanceMeters: 5000,
      timeSeconds: 1500,
    });

    expect(result).toBe(300);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      distanceMeters: 0,
      timeSeconds: 1500,
    });

    expect(result).toBeNull();
  });
});
