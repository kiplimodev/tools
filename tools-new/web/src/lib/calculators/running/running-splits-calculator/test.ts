import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("running splits calculator", () => {
  it("returns split time in seconds", () => {
    const result = calculator({
      distanceMeters: 5000,
      timeSeconds: 1500,
      splitMeters: 1000,
    });

    expect(result).toBe(300);
  });

  it("returns null for invalid input", () => {
    const result = calculator({
      distanceMeters: 5000,
      timeSeconds: 0,
      splitMeters: 1000,
    });

    expect(result).toBeNull();
  });
});
