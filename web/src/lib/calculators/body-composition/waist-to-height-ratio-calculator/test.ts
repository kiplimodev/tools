import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("waist-to-height-ratio-calculator", () => {
  it("returns healthy ratio for normal measurements", () => {
    const result = calculator({ waistCm: 80, heightCm: 175 });
    expect(result).not.toBeNull();
    expect(result!.ratio).toBeCloseTo(0.457, 2);
    expect(result!.category).toBe("Healthy");
  });

  it("returns null for zero height", () => {
    const result = calculator({ waistCm: 80, heightCm: 0 });
    expect(result).toBeNull();
  });
});
