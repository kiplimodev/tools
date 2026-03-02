import { describe, it, expect } from "vitest";
import { calculator } from "./index";

describe("body-measurement-calculator", () => {
  it("returns body composition for a male with valid input", () => {
    const result = calculator({ sex: "male", weightKg: 80, waistCm: 85 });
    expect(result).not.toBeNull();
    expect(result!.bodyFatPercent).toBeGreaterThan(0);
    expect(result!.bodyFatPercent).toBeLessThan(60);
    expect(result!.fatMassKg + result!.leanMassKg).toBeCloseTo(80, 0);
  });

  it("returns body composition for a female with valid input", () => {
    const result = calculator({ sex: "female", weightKg: 65, waistCm: 75 });
    expect(result).not.toBeNull();
    expect(result!.bodyFatPercent).toBeGreaterThan(0);
    expect(result!.leanMassKg).toBeGreaterThan(0);
  });

  it("returns null for missing weight", () => {
    const result = calculator({ sex: "male", weightKg: 0, waistCm: 85 });
    expect(result).toBeNull();
  });

  it("returns null for missing waist", () => {
    const result = calculator({ sex: "male", weightKg: 80, waistCm: 0 });
    expect(result).toBeNull();
  });
});
